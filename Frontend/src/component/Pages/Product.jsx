import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import api from "../../api";
import Productlist from "../Product/ListProduct";



const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    (async () => {
      const res = await api.get("/products");
      const data = await res.data;
      setProducts(data);
      console.log("Products fetched");
    })();
  }, []);

products.map((item)=>{
  console.log(item.name)
});



  // console.log(products)
  return (
    <motion.div
      className="flex flex-col sm:flex-row  items-start sm:items-center gap-6 bg-gray-900 text-black  p-5 shadow-md hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Productlist/>
    </motion.div>
  );
};

export default Product;