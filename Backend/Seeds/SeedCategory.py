from App import db
from App.Models.category import Category
from datetime import datetime ,  timezone
from App.Models.role import UserEnum
from App.Models.user import User

def RunCategory():
    category_data = [
        {'name': 'Electronics','image':'https://cdn.open-pr.com/V/a/Va11997480_g.jpg'},
        {'name': 'Fashion&Apparel','image':'https://i.pinimg.com/736x/43/d1/35/43d135d38689527d117c56015d80a458.jpg'},
        {'name': 'Home&Living','image':'https://www.nerolac.com/sites/default/files/2023-03/best-trending-modern-home-decor-items.webp'},
        {'name': 'Books&Stationery','image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2-CK63TWMuQIIfPWoK4CXXfNAN85nk7diQ&s'}
        ]
    now = datetime.now(timezone.utc)
    admin_user = db.session.execute(
        db.select(User).where(User.role == UserEnum.ADMIN)
        ).scalar_one_or_none() 

    if not admin_user:
        raise Exception("Admin user not found! Make sure you've seeded the admin user before this.")
    for item in category_data :
        if not db.session.execute(db.select(Category).where(Category.name == item['name'])).first():
            Category_add = Category(
                is_active = True,
                name = item['name'],
                image = item['image'],
                created_at = now,
                updated_at = now,
                created_by = admin_user.id,
                updated_by = admin_user.id
            )
            db.session.add(Category_add)
    db.session.commit()

if __name__ == '__main__':
    RunCategory()
