from App import db 
from App.Models.user import User
from App.Models.role import UserEnum
from werkzeug.security import generate_password_hash

def run_user():
    if not db.session.execute(db.select(User).where(User.role == UserEnum.ADMIN)).first():
        admin_user = User(
            name = 'admin',
            email = 'admin@gamil.com',
            password =generate_password_hash('admin123'),
            role =  UserEnum.ADMIN
        )
        db.session.add(admin_user)
    db.session.commit()
    

if __name__ == '__main__':
    run_user()
