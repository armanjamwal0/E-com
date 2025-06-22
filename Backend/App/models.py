from __future__ import annotations   # why i use this from __future__ import annotations for in list["Product"] then i does not need any quotes 
#  then i use like that list ["Product"]

from sqlalchemy import INTEGER, String
from sqlalchemy.orm import Mapped, mapped_column
from . import db 
from sqlalchemy.orm import DeclarativeBase , Mapped, mapped_column ,relationship
from sqlalchemy import INTEGER, String , Float , Text ,Boolean ,ForeignKey , DateTime
from datetime import datetime , timezone
from flask_sqlalchemy import SQLAlchemy

class Product(db.Model):
    __tablename__ = 'products'
    id: Mapped[int] = mapped_column(INTEGER,primary_key=True)
    name: Mapped[str] = mapped_column(String(250),nullable=False)
    description: Mapped[str] = mapped_column(Text)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    image: Mapped[str] = mapped_column(String(255))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime,default=lambda: datetime.now(timezone.utc))
    updated_at: Mapped[datetime] = mapped_column(DateTime, onupdate=lambda: datetime.now(timezone.utc))
    
    created_by:Mapped[int] = mapped_column(INTEGER, ForeignKey("users.id"), nullable=False)
    updated_by:Mapped[int] = mapped_column(INTEGER, ForeignKey("users.id"), nullable=False)
    
    # relationship
    creator: Mapped[User] = relationship(foreign_keys=[created_by], back_populates="created_products")
    updater: Mapped[User] = relationship(foreign_keys=[updated_by], back_populates="updated_products")
    
class User(db.Model):
    __tablename__ = 'users'
    id:Mapped[int] = mapped_column(INTEGER,primary_key=True)
    name : Mapped[str] = mapped_column(String(250), nullable=False)
    email:Mapped[str] = mapped_column(String(250),unique=True,nullable=False)
    password:Mapped[str] = mapped_column(String(250),nullable=False)
    
    created_products: Mapped[list[Product]] = relationship(back_populates="creator", foreign_keys=[Product.created_by]) 
    # list["Product"] This relationship will return a list of Product objects.
    updated_products: Mapped[list[Product]] = relationship(back_populates="updater", foreign_keys=[Product.updated_by])
    #  foreign_keys=[Product.created_by] by i wrap in list because sql need foreign_key in the form of list 
    #   but i like that foreign_keys=Product.created_by  but only in one- to - one relationship not in oen-to many 
