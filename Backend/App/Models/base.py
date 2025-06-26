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




class AuditMixin:
    __abstract__ = True
    def to_dict(self):
        """Convert the model instance into a dictionary of its column attributes."""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime,default=lambda: datetime.now(timezone.utc))
    updated_at: Mapped[datetime] = mapped_column(DateTime, onupdate=lambda: datetime.now(timezone.utc))
    
    created_by:Mapped[int] = mapped_column(INTEGER, ForeignKey("users.id"), nullable=False)
    updated_by:Mapped[int] = mapped_column(INTEGER, ForeignKey("users.id"), nullable=False)
    
    
    
'''
 __abstract__ = True
    def to_dict(self):
        """Convert the model instance into a dictionary of its column attributes."""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


 __abstract__ = True is means only a base model ! a table 
 
 
----------"how is this function work "---------------
    def to_dict(self):
        """Convert the model instance into a dictionary of its column attributes."""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
        
1> for c in self.__table__.columns      
      this is line give you all columns in table like product then give like this 
          id
          name 
          etc
        like that 
2>  getattr(self, c.name) 
    this work like 
    self.id , self.name , self.etc like that 
3> c.name 
    this line convert the id into string "id"
how you use this function you can declear in models liek category then use category.to_dict(categoryb data) like that        
'''