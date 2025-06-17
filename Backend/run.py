from App.app import create_app, db
from App import models  # Make sure models are imported

app = create_app()

# Only use this for development (not with flask-migrate)
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(host="localhost",port=5000, debug=True)
