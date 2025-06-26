import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { useEffect, useState , useRef } from 'react';
import clsx from 'clsx';
import Rating from 'react-rating-stars-component';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../api';

const products = [
  {
    id: 1,
    name: 'iPhone 16 128 GB',
    description: '5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods.',
    price: 73900,
    oldPrice: 79900,
    discount: 8,
    rating: 4.4,
    reviews: 855,
    image: 'https://m.media-amazon.com/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg',
    colors: 4,
    delivery: 'Sun, 29 Jun'
  },
  {
    id: 2,
    name: 'iPhone 16 Pro 128 GB',
    description: '5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life.',
    price: 111900,
    oldPrice: 119900,
    discount: 7,
    rating: 4.3,
    reviews: 341,
    image: 'https://m.media-amazon.com/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg',
    colors: 3,
    delivery: 'Mon, 30 Jun'
  }
];

const ProductRowCard = ({ product }) => {
    const fetchedOnce = useRef(false); 
    useEffect(()=>{
         if (fetchedOnce.current) return;
        (async()=>{
            const res = await api.get('/products')
            console.log(res.data[0].name)
            fetchedOnce.current = true;  
        })();
    },[]) 
  return (
    <motion.div
      className="flex flex-col sm:flex-row  border-1 items-start sm:items-center gap-6 bg-white text-black rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-white/50 backdrop-blur-lg rounded-lg p-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-72 h-96 object-contain rounded-lg"
        />
      </div>

      <div className="flex-1">
        <Link to={`/product/${product.id}`} className="text-xl sm:text-2xl font-bold hover:underline block mb-1">
          {product.name}
        </Link>
        <p className="text-base text-gray-700 mb-2 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-2 mb-1">
          <Rating
            count={5}
            value={product.rating}
            size={20}
            edit={false}
            isHalf={true}
            emptyIcon={<FaRegStar className="text-yellow-400" />}
            halfIcon={<FaStar className="text-yellow-400" />}
            filledIcon={<FaStar className="text-yellow-400" />}
          />
          <span className="text-base text-gray-600">({product.reviews})</span>
        </div>

        <div className="text-2xl font-bold text-gray-900">
          ₹{product.price.toLocaleString()} <span className="line-through text-lg text-gray-400 ml-2">₹{product.oldPrice.toLocaleString()}</span>
          <span className="ml-2 text-green-600 text-lg">({product.discount}% off)</span>
        </div>

        <div className="text-base text-gray-600 mt-1 mb-2">
          FREE delivery <span className="font-semibold text-black">{product.delivery}</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full hover:bg-yellow-300 font-semibold transition">
            Add to cart
          </button>
          <span className="text-blue-600 text-base underline cursor-pointer hover:text-blue-700">
            +{product.colors} other colors/patterns
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProductSection = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {products.map((product) => (
          <ProductRowCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
