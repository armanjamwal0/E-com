import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { AnimatePresence, motion } from "framer-motion";

// i need to fix profile dropdow menu
function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleclick() {
    setDropdownOpen(true);
  }
  return (
    <nav className="stiky top-0 left-0 w-full  z-50 bg-transparent text-white backdrop-blur-md shadow-md antialiased">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}

        <div className=" text-gray-500 text-1xl font-bold ">
          {" "}
          <StorefrontIcon className="w-5 h-5 lg:me-1" />
          MyLogo
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-4 py-2 rounded-full bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring"
          />
        </div>

        {/* Right: Login Dropdown + Cart */}
        <div className="flex items-center gap-4 relative">
          {/* Login/Profile */}
          <div className="relative">
            <button onClick={handleclick} className="superbutton flex items-center gap-1">
              login
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Logout
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart */}
          <BsCart className="text-xl text-gray-400 hover:text-gray-900 transition duration-200" />
        </div>
      </div>

      {/* Mobile Search (Optional) */}
      <div className="md:hidden px-4 mt-2 pb-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring"
        />
      </div>
    </nav>
  );
}

export default Navbar;
