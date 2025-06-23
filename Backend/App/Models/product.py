from __future__ import annotations   # why i use this from __future__ import annotations for in list["Product"] then i does not need any quotes 
#  then i use like that list ["Product"]

from sqlalchemy import INTEGER, String
from sqlalchemy.orm import Mapped, mapped_column
from App import db 
from sqlalchemy.orm import DeclarativeBase , Mapped, mapped_column ,relationship
from sqlalchemy import INTEGER, String , Float , Text ,Boolean ,ForeignKey , DateTime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Enum as SQLAlchemyEnum
from .base import AuditMixin
# from .user import User
from .genderenum import GenderEnum
# from .subcategories import SubCategory


class Product(db.Model,AuditMixin):
    __tablename__ = 'products'
    id: Mapped[int] = mapped_column(INTEGER,primary_key=True)
    name: Mapped[str] = mapped_column(String(250),nullable=False)
    description: Mapped[str] = mapped_column(Text)
    price: Mapped[float] = mapped_column(Float, nullable=False)
    image: Mapped[str] = mapped_column(String(255))
    slug: Mapped[str] = mapped_column(String(250), nullable=False, unique=True)
    gender:Mapped[GenderEnum] = mapped_column(SQLAlchemyEnum(GenderEnum), nullable=False)
    
    subcategorie_id:Mapped[int] = mapped_column(INTEGER, ForeignKey('subcategories.id'), nullable=False)
    
    # relationship
    subcategory:Mapped['SubCategory']  = relationship(back_populates='product')
    
    creator: Mapped['User'] = relationship(foreign_keys=AuditMixin.created_by, back_populates="created_products")
    updater: Mapped['User'] = relationship(foreign_keys=AuditMixin.updated_by, back_populates="updated_products")
    