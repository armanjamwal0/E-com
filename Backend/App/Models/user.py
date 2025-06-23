from __future__ import annotations   # why i use this from __future__ import annotations for in list["Product"] then i does not need any quotes 
#  then i use like that list ["Product"]
from sqlalchemy import INTEGER, String
from sqlalchemy.orm import Mapped, mapped_column
from App import db 
from sqlalchemy.orm import DeclarativeBase , Mapped, mapped_column ,relationship
from sqlalchemy import INTEGER, String , Float , Text ,Boolean ,ForeignKey , DateTime
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from App.Models.product import Product


class User(db.Model):
    __tablename__ = 'users'
    id:Mapped[int] = mapped_column(INTEGER,primary_key=True)
    name : Mapped[str] = mapped_column(String(250), nullable=False)
    email:Mapped[str] = mapped_column(String(250),unique=True,nullable=False)
    password:Mapped[str] = mapped_column(String(250),nullable=False)
    
    created_products: Mapped[list["Product"]] = relationship(back_populates="creator", foreign_keys="Product.created_by") 
    # list["Product"] This relationship will return a list of Product objects.
    updated_products: Mapped[list["Product"]] = relationship(back_populates="updater", foreign_keys="Product.updated_by")
    #  foreign_keys=[Product.created_by] by i wrap in list because sql need foreign_key in the form of list 
    #   but i like that foreign_keys=Product.created_by  but only in one- to - one relationship not in one-to many 