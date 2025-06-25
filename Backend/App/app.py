import os, datetime, dotenv
from flask import Flask, request, jsonify, session
from config import Config  # Make sure this path is correct
from App import db, migrate, cors  # Import extensions from __init__.py
from werkzeug.security import generate_password_hash, check_password_hash
from flask_session import Session
from .helpers import user_schema
from .utils.slugify import generate_slug
from App import events
from .Models.user import User
from .Models.role import UserEnum

dotenv.load_dotenv()


#_____Flask App_________________________________________________________________#


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app,  origins=["http://localhost:5173"],supports_credentials=True)  # bind CORS here ✅
    Session(app)

    # ─── Routes ────────────────────────────────────────────────────────────────── #
    
    @app.get('/home')
    def home():
        userId = session.get('user_id')
        if userId:
            res = db.session.execute(db.select(User).where(User.id == userId))
            user = res.scalar()
            return jsonify({**(user_schema(user) if user else {}),'authenticated': True}) #
        return jsonify({'authenticated': False, 'msg':'unauthenticated'})
                         
    @app.get("/")
    def check_auth():
        user_id = session.get('user_id')
        if user_id:
            res = db.session.execute(db.select(User).where(User.id == user_id))
            user = res.scalar()
            print('me')
            return { **(user_schema(user) if user else {}),"authenticated": True}, 200 # if user exist then return 
            # user_schema if not then return empty dic {}
        elif not user_id:
            return {"authenticated": False, 'msg': 'please login first'}
    @app.post("/register")
    def register():
        data = request.get_json()
        print(data)
        name = data['name']
        email = data['email']
        password = data['password']
        response = db.session.execute(db.select(User).where(User.email == email))
        user = response.scalar()
        if user: 
            return {"msg": "User already exists"}, 400
        hashed = generate_password_hash(password, method='pbkdf2:sha256',salt_length=16)
        user   = User(
            name = name,
            email=email,
            password=hashed,
            role = UserEnum.USER
            )
        db.session.add(user); 
        db.session.commit()
        # print(user_schema(user)),
        return  {**(user_schema(user) if user else {})}, 201

    @app.post("/login")
    def login():
        data = request.get_json()
        response = db.session.execute(db.select(User).where(User.email==data['email']))
        user = response.scalar()
        # user = User.query.filter_by(email=data["email"]).first()
        if not user or not check_password_hash(user.password, data["password"]):
            return {"authenticated": False, "msg": "Please Check Your email if you regisetred"}
        # if any user comes then store user id in session 
        session["user_id"] = user.id
        return {**(user_schema(user) if user else {}),"authenticated": True}, 200 # this conver user pass and email into dic this use for testing purpose to send email to user 
    # is check if any user is login then authenticated true if not then user_id = sessionuser ,
    

    @app.post("/logout")
    def logout():
        session.pop("user_id", None)
        return jsonify({"message": "Logged out"})
    return app