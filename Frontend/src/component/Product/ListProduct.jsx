import { useState } from "react";
import Heading_filter from "./Heading";
import CardProduct from "./CardProduct";


const Productlist = () => {
  const [toggle, setToggle] = useState(false);
  const [showFilter, setFilters] = useState(false);


  function handleclick() {
    setToggle(true);
  }
  function toggleFilter() {
    setFilters(pre => !pre);
  }
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* <!-- Heading & Filters --> */}
        <Heading_filter toggleFilter={toggleFilter} />

        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <div className="w-full text-center">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};
export default Productlist;
