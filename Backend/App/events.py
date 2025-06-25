from sqlalchemy import event
from App.Models.product import Product
from App.utils.slugify import generate_slug
from App.Models.category import Category
from App.Models.subcategory import SubCategory

# This for Product it craete a slug like before inserting data like product name = iphone 14 then 
# when i use slug then it change into iphone-14 this fun auto genrate the slug by using name  

@event.listens_for(Product, "before_insert")
def set_slug_before_insert(mapper, connection, target): 
    if not target.slug:
        target.slug = generate_slug(target.name)
        
# when ever any slug are missing or update then it chheck name and add automatically in database
@event.listens_for(Product, "before_update")
def set_slug_before_update(mapper, connection, target):
    if not target.slug:
        target.slug = generate_slug(target.name)
        
#  For Category
@event.listens_for(Category, "before_insert")
def set_slug_before_insert(mapper, connection, target): 
    if not target.slug:
        target.slug = generate_slug(target.name)
        
# For Category Update
@event.listens_for(Category, "before_update")
def set_slug_before_update(mapper, connection, target):
    if not target.slug:
        target.slug = generate_slug(target.name)
        
#For SubCategory
@event.listens_for(SubCategory, "before_insert")
def set_slug_before_insert(mapper, connection, target): 
    if not target.slug:
        target.slug = generate_slug(target.name)
# For Subcategory Update 

@event.listens_for(SubCategory, "before_update")
def set_slug_before_update(mapper, connection, target):
    if not target.slug:
        target.slug = generate_slug(target.name)