import os, datetime, dotenv
import redis
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS= False
    
    
    SESSION_TYPE = 'redis'  # Server-side session storage
    SESSION_PERMANENT = False # session expire when the browser are closed 
    SESSION_USE_SIGNER = True  # Sign the session ID for extra security
    SESSION_COOKIE_SAMESITE = "None"
    SESSION_COOKIE_SECURE = True  # Set True if using HTTPS
    SESSION_COOKIE_HTTPONLY = True
    SESSION_REDIS = redis.Redis(host="localhost", port=6379)
