import React, { useState } from "react";
import NavbarRoutes from "./Navroutes";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate()
  function handleclick() {
    navigate('/Cart')
  }
  return (
    <nav className="bg-gray-700 dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <NavbarRoutes />

          <div className="flex items-center lg:space-x-2">
            <button
              onClick={handleclick}
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <span className="sr-only">Cart</span>
              {/* cart icon */}
              <LocalMallIcon className="w-5 h-5 lg:me-1" />
              <span className="hidden sm:flex">My Cart</span>
            </button>

          
            {/* User Acc */}
            <button
              onClick={() => setUserOpen(!userOpen)}
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              {/* user icon */}
              <AccountCircleIcon className="w-5 h-5 lg:me-1" />
              <span className="hidden sm:flex" >Account</span>
            </button>
            {userOpen && (
              <div className="z-10 w-56 divide-y divide-gray-100 overflow-hidden rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                {/* user menu here... */}
              </div>
            )}

            <button
              type="button"
              className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
              aria-label="Open Menu"
            >
              {/* hamburger icon */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;