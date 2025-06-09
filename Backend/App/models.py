from sqlalchemy import INTEGER, String
from sqlalchemy.orm import Mapped, mapped_column
from . import db 
from sqlalchemy.orm import DeclarativeBase , Mapped, mapped_column ,relationship
from sqlalchemy import INTEGER, String , Float , Text
from flask_sqlalchemy import SQLAlchemy

class User(db.Model):
    __tablename__ = 'users'
    id:Mapped[int] = mapped_column(INTEGER,primary_key=True)
    email:Mapped[str] = mapped_column(String(250),unique=True,nullable=False)
    password:Mapped[str] = mapped_column(String(250),nullable=False)