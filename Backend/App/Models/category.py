from __future__ import annotations   # why i use this from __future__ import annotations for in list["Product"] then i does not need any quotes 
#  then i use like that list ["Product"]

from sqlalchemy import INTEGER, String
from sqlalchemy.orm import Mapped, mapped_column
from App import db 
from sqlalchemy.orm import DeclarativeBase , Mapped, mapped_column ,relationship
from sqlalchemy import INTEGER, String , Float , Text ,Boolean ,ForeignKey , DateTime
from datetime import datetime , timezone
from flask_sqlalchemy import SQLAlchemy
from enum import Enum
from sqlalchemy import Enum as SQLAlchemyEnum
from .base import AuditMixin
from .subcategory import SubCategory



class Category(db.Model,AuditMixin):
    __tablename__ = 'categories'
    id:Mapped[int] = mapped_column(INTEGER,primary_key=True)
    name:Mapped[str] = mapped_column(String(250),nullable=False)
    slug: Mapped[str] = mapped_column(String(250), nullable=False, unique=True)
    image: Mapped[str] = mapped_column(String(250),nullable=False)
    
    subcategories:Mapped[list[SubCategory]] = relationship(back_populates='category')