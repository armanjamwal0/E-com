from App.Models.subcategory import SubCategory
from App import db 
from datetime import datetime ,  timezone
from App.Models.role import UserEnum
from App.Models.user import User
from App.Models.category import Category



def RunSubcategory():
    category_id = db.session.execute(db.select(Category).where(Category.name == 'Electronics')).scalar_one_or_none()
    if not category_id:
        print("❌ Category 'Electronics' not found.")
        return
    
    Subcategory_data = [
        {'name':'Mobile Phones',
         'description':'Smartphones from top brands including Android and iOS devices.',
         'image':'https://i.pinimg.com/736x/e9/a9/b7/e9a9b72ec8478f1023f0e7bfcfdf6d4d.jpg'
         },
        {'name':'Laptops',
         'description':'Portable computers for gaming, work, or personal use.',
         'image':'https://i.pinimg.com/736x/0d/cd/10/0dcd10d952f96ce2d294226e5748fe90.jpg'
         },
         {'name':'Smartwatches',
         'description':'Wearable tech with fitness tracking and mobile syncing.',
         'image':'https://i.pinimg.com/736x/00/22/a9/0022a9eb283ba672c92cdc2db32de556.jpg'
         },
         {'name':'Headphones',
         'description':'Wireless and wired headphones, earphones, and earbuds.',
         'image':'https://i.pinimg.com/736x/15/4f/bf/154fbfb5c4205f73767542d3e206fe61.jpg'
         }      ]
    
    admin_user = db.session.execute(db.select(User).where(User.role == UserEnum.ADMIN)).scalar_one_or_none()
    now = datetime.now(timezone.utc)
    for item in Subcategory_data:
        if not db.session.execute(db.select(SubCategory).where(SubCategory.name == item['name'])).scalar_one_or_none():
            SubCategory_add = SubCategory(
                name = item['name'],
                description = item['description'],
                image = item['image'],
                Category_id = category_id.id,
                is_active = True,
                created_at = now,
                updated_at = now,
                created_by = admin_user.id,
                updated_by = admin_user.id 
            )
            db.session.add(SubCategory_add)
    db.session.commit()
    print('done')
if __name__ == '__main__':
    RunSubcategory()

