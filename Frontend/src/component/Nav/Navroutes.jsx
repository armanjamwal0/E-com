import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavbarRoutes(){
    const[isActive,setActive] = useState(false)
    function handleClick(){
        setActive(true)
    }
    return(
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

            <ul className="hidden   lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center" onClick={handleClick}>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `flex text-sm font-medium hover:text-primary-700 dark:hover:text-primary-500 ${
                      isActive ? 'text-primary-700 dark:text-primary-900' : 'text-gray-900 dark:text-white'
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
          );
}
export default NavbarRoutes;