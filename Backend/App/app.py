import os, datetime, dotenv
from flask import Flask, request, jsonify
from .config import Config  # Make sure this path is correct
from .models import User
from . import db, jwt, migrate, cors  # Import extensions from __init__.py
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt_identity
)
from .helpers import user_schema

dotenv.load_dotenv()


#_____Flask App_________________________________________________________________#
def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app, supports_credentials=True)  # bind CORS here ✅

    # ─── Routes ────────────────────────────────────────────────────────────────── #
    @app.post("/register")
    def register():
        data = request.get_json()
        print(data)
        response = db.session.execute(db.select(User).where(User.email == data["email"]))
        user = response.scalar()
        if user: 
            return {"msg": "User already exists"}, 400
        hashed = generate_password_hash(data["password"], method='pbkdf2:sha256',salt_length=16)
        user   = User(
            email=data["email"],
            password=hashed
            )
        db.session.add(user); 
        db.session.commit()
        print(user_schema(user))
        return user_schema(user), 201

    @app.post("/login")
    def login():
        data = request.get_json()
        response = db.session.execute(db.select(User).where(User.email==data['email']))
        user = response.scalar()
        # user = User.query.filter_by(email=data["email"]).first()
        if not user or not check_password_hash(user.password, data["password"]):
            return {"msg": "Bad credentials"}, 401
        token = create_access_token(
            identity=user.id,
            expires_delta=datetime.timedelta(hours=1)
        )
        return {"token": token, "user": user_schema(user)}, 200

    @app.get("/me")
    @jwt_required()
    def me():
        uid  = get_jwt_identity()
        user = User.query.get(uid)
        return user_schema(user), 200
    return app


