import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link to="/" title="Home">
                <img
                  className="block w-auto h-8 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                  alt="MyStore logo"
                />
                <img
                  className="hidden w-auto h-8 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                  alt="MyStore logo dark"
                />
              </Link>
            </div>

            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `flex text-sm font-medium hover:text-primary-700 dark:hover:text-primary-500 ${
                      isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-white'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/best-sellers"
                  className={({ isActive }) =>
                    `flex text-sm font-medium hover:text-primary-700 dark:hover:text-primary-500 ${
                      isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-white'
                    }`
                  }
                >
                  Best Sellers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gift-ideas"
                  className={({ isActive }) =>
                    `flex text-sm font-medium hover:text-primary-700 dark:hover:text-primary-500 ${
                      isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-white'
                    }`
                  }
                >
                  Gift Ideas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/deals"
                  className={({ isActive }) =>
                    `text-sm font-medium hover:text-primary-700 dark:hover:text-primary-500 ${
                      isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-white'
                    }`
                  }
                >
                  Today's Deals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sell"
                  className={({ isActive }) =>
                    `text-sm font-medium hover:text-primary-700 dark:hover:text-primary-500 ${
                      isActive ? 'text-primary-700 dark:text-primary-500' : 'text-gray-900 dark:text-white'
                    }`
                  }
                >
                  Sell
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:space-x-2">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <span className="sr-only">Cart</span>
              {/* cart icon */}
              <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
              </svg>
              <span className="hidden sm:flex">My Cart</span>
            </button>
            {cartOpen && (
              <div className="z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800">
                {/* Cart items here... */}
              </div>
            )}

            <button
              onClick={() => setUserOpen(!userOpen)}
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              {/* user icon */}
              <span>Account</span>
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
