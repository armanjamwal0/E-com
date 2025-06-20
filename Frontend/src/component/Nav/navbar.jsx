import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import {motion ,AnimatePresence} from 'framer-motion'
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-gray-400 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="md:hidden">
              <Menu size={24} />
            </button>
            <Link to="/home" className="text-xl font-bold text-blue-600">
              MyStore
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/home" className="hover:text-blue-600">Home</Link>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
          </div>

          {/* Profile Dropdown (always in top right) */}
          <div className="relative">
            <button
              onClick={toggleProfile}
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <User size={20} />
              <span className="hidden sm:inline">Profile</span>
            </button>

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  key="profile-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white shadow-md border rounded-md z-50"
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => console.log("Logout clicked")}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Overlay when Sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar (Mobile only) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-blue-600">Menu</h2>
          <button onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <Link to="/home" onClick={toggleSidebar} className="hover:text-blue-600">Home</Link>
          <Link to="/products" onClick={toggleSidebar} className="hover:text-blue-600">Products</Link>
          <Link to="/about" onClick={toggleSidebar} className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" onClick={toggleSidebar} className="hover:text-blue-600">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
