from App import db
from App.Models.product import Product
from App.Models.role import UserEnum
from App.Models.subcategory import SubCategory
from App.Models.user import User
from datetime import datetime , timezone

def RunProduct():
    product_data = [
        {
            "name": "iPhone 16 Pro 256 GB",
            "description": (
                "Experience the power of Apple’s flagship in a pocket‑friendly size."
                "Constructed with aerospace-grade titanium it delivers stunning Super Retina XDR OLED visuals"
                "(6.3″, ProMotion). Capture life’s moments with professional-grade precision: dual 48 MP sensors, "
                "12 MP telephoto (5× zoom), LiDAR, and spatial video capture. "
                "Fueled by the blazing ‌A18 Pro‌ chip and 8 GB RAM, the device supports lightning-fast performance,"
                " 5G, Wi‑Fi 7, and USB‑C."
                " The new Camera Control button and on‑device AI pack a punch,"
                "while a 27 W fast charge and 15 W MagSafe keep you powered."
                "Available in four titanium finishes."
            ),
            "price": 121900.000,
            "image": "https://m.media-amazon.com/images/I/31hmAP7NTqL._SY445_SX342_QL70_FMwebp_.jpg",
            "quantity": 10,
        },
        {
            "name": "iPhone 16 128 GB",
            "description": (
                "Discover the power of innovation with the iPhone 16, Apple's latest flagship device. "
                "Featuring a stunning Super Retina XDR display, the iPhone 16 offers vivid colors, deep blacks, "
                "and fluid motion with ProMotion technology. Powered by the next-generation A18 Bionic chip, "
                "it delivers lightning-fast performance and energy efficiency, perfect for gaming, multitasking, and photography. "
                "With a powerful dual-camera system, including enhanced Night mode and Cinematic Video, "
                "capture every moment in incredible detail. The 128 GB storage ensures you have enough room for all your photos, "
                "videos, and apps. The iPhone 16 also supports 5G, Face ID, MagSafe, and iOS 18, delivering a seamless, "
                "secure, and smart mobile experience. All housed in a sleek aerospace-grade aluminum design with "
                "Ceramic Shield front cover for ultimate durability."
            ),
            "price": 121900.000,
            "image": "https://m.media-amazon.com/images/I/31A-AWx8PLL._SY445_SX342_QL70_FMwebp_.jpg",
            "quantity": 5,
        },
        {
            "name": "Samsung Galaxy S24 Ultra 5G",
            "description": (
                "Experience the pinnacle of mobile innovation with the Samsung Galaxy S24 Ultra 5G."
                " It features a stunning 6.8-inch QHD+ Dynamic AMOLED 2X display with a smooth 120Hz refresh rate,"
                "delivering vibrant colors and exceptional clarity."
                " Powered by the latest Snapdragon 8 Gen 3 processor and up to 12GB RAM,"
                " the S24 Ultra ensures top-tier performance,"
                " perfect for gaming, multitasking, and AI-powered features."
                "Capture incredible detail with the quad-camera system,"
                " led by a groundbreaking 200MP main sensor,"
                " along with advanced zoom capabilities and enhanced Nightography for brilliant low-light photography."
                " The device also includes a built-in S Pen for productivity on the go."
            ),
            "price": 102000.000,
            "image": "https://m.media-amazon.com/images/I/717Q2swzhBL._SX679_.jpg",
            "quantity": 20,
        },
        {
            "name": "iQOO 13 5G (Nardo Grey, 16GB RAM, 512GB Storage)",
            "description": (
                "Experience flagship performance and premium design with the iQOO 13 in Nardo Grey."
                "Powered by the Snapdragon 8 Elite (3 nm) and equipped with 16 GB LPDDR5X RAM and 512 GB UFS 4.1 storage,"
                " this powerhouse phone handles gaming, multitasking, and AI workloads effortlessly."
                "The 6.82″ QHD+ LTPO AMOLED display offers a super-smooth adaptive refresh rate from 1 to 144 Hz,"
                "stunning HDR10+ visuals, and peak brightness reaching 4,500 nits for excellent outdoor visibility."
                " It’s protected by tough Schott Xensation Alpha glass."
                "Photography is sharp and versatile: triple-camera setup includes a 50 MP Sony IMX921 main sensor (OIS),"
                " a 50 MP ultra-wide lens, and a 50 MP telephoto lens—ideal for wide shots, portraits,"
                " and dependable performance across scenarios."
                " The 32 MP front camera captures crisp selfies and supports 4K recording."
            ),
            "price": 59998.000,
            "image": "https://m.media-amazon.com/images/I/519PLA1WnuL._SX679_.jpg",
            "quantity": 50,
        },
    ]
    Created_id = db.session.execute(db.select(User).where(User.role == UserEnum.ADMIN)).scalar_one_or_none()
    now = datetime.now(timezone.utc)
    SubCategory_id = db.session.execute(db.select(SubCategory).where(SubCategory.name == "Mobile Phones")).scalar_one_or_none()
    for item in product_data:
        exist = db.session.execute(db.select(Product).where(Product.name == item['name'])).scalar_one_or_none()
        if not exist :
            product_add = Product(
                name = item['name'],
                description = item['description'],
                price = item['price'],
                image = item['image'],
                quantity = item['quantity'],
                subcategory_id = SubCategory_id.id,
                created_at = now,
                updated_at = now,
                created_by = Created_id.id,
                updated_by = Created_id.id,
                is_active = True 
                )
            db.session.add(product_add)
    db.session.commit()

if __name__ == '__main__':
    RunProduct()

