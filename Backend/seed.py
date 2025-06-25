from Seeds.SeedUser import run_user
from App.app import  create_app
from App import db
from Seeds.SeedCategory import RunCategory
from Seeds.SeedSubcategory import RunSubcategory
from Seeds.SeedProduct import RunProduct
app = create_app()

def run_all():
    with app.app_context():
        run_user()
        RunCategory()
        RunSubcategory()
        RunProduct()
        print("✅ Seeding complete.")

if __name__ == '__main__':
    run_all()
    