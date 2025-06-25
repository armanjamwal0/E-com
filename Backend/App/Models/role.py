from enum import Enum
from sqlalchemy import Enum as SQLAlchemyEnum


class GenderEnum(Enum):
    MALE = "male"
    FEMALE = "female"
    UNISEX = "unisex"

class UserEnum(Enum):
    USER = "user"
    ADMIN = "admin"
    SELLER = "seller"
    