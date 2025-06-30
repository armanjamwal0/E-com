import { useState, useRef, useEffect } from "react";
import { X } from 'lucide-react';

const FilterComponent = ({ isOpen, onClose }) => {
  const [filters, setFilters] = useState({
    brands: {
      Apple: false,
      Asus: true,
      Acer: false,
      Allview: false,
      Atari: true,
      AMD: false,
      Aruba: false,
      Beats: false,
      Bose: true,
      BenQ: false,
      Bosch: false,
      Brother: true,
      Biostar: false,
      Braun: false,
      Blaupunkt: false,
      Canon: false,
      Cisco: true,
      Cowon: false,
      Clevo: false,
      Corsair: false,
      Dell: false,
      Dogfish: false,
      Dyson: false,
      Dobe: false,
      Digitus: false,
      Emetec: false,
      Extreme: false,
      Elgato: false,
      Emerson: false,
      EMI: true,
      Fugoo: false,
      Fujitsu: false,
      Fitbit: true,
      Foxconn: false,
      Floston: false
    }
  });

  const filterRef = useRef(null);

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleBrandChange = (brand) => {
    setFilters(prev => ({
      ...prev,
      brands: {
        ...prev.brands,
        [brand]: !prev.brands[brand]
      }
    }));
  };

  const handleReset = () => {
    setFilters({
      ...filters,
      brands: Object.fromEntries(Object.keys(filters.brands).map(brand => [brand, false]))
    });
  };

  const getSelectedCount = () => {
    return Object.values(filters.brands).filter(Boolean).length;
  };

  const BrandSection = () => {
    const brandGroups = {
      A: ['Apple (56)', 'Asus (97)', 'Acer (234)', 'Allview (45)', 'Atari (176)', 'AMD (49)', 'Aruba (16)'],
      B: ['Beats (56)', 'Bose (97)', 'BenQ (45)', 'Bosch (176)', 'Brother (176)', 'Biostar (49)', 'Braun (16)', 'Blaupunkt (45)', 'BenQ (23)'],
      C: ['Canon (49)', 'Cisco (97)', 'Cowon (234)', 'Clevo (45)', 'Corsair (15)'],
      D: ['Dell (56)', 'Dogfish (24)', 'Dyson (234)', 'Dobe (5)', 'Digitus (1)'],
      E: ['Emetec (56)', 'Extreme (10)', 'Elgato (234)', 'Emerson (45)', 'EMI (176)', 'Fugoo (49)'],
      F: ['Fujitsu (97)', 'Fitbit (56)', 'Foxconn (234)', 'Floston (45)']
    };

    return (
      <div className="grid grid-cols-3 gap-8">
        {Object.entries(brandGroups).map(([letter, brands]) => (
          <div key={letter}>
            <h3 className="text-lg font-semibold text-white mb-4">{letter}</h3>
            <div className="space-y-3">
              {brands.map((brand) => {
                const brandName = brand.split(' (')[0];
                const isChecked = filters.brands[brandName];
                return (
                  <label key={brand} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isChecked || false}
                      onChange={() => handleBrandChange(brandName)}
                      className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-300 text-sm">{brand}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        ref={filterRef}
        className="bg-gray-800 rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl border border-gray-700"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <BrandSection />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-700">
          <button
            onClick={handleReset}
            className="px-6 py-2 text-gray-400 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Show {getSelectedCount()} results
          </button>
        </div>
      </div>
    </div>
  );
};

const Heading_filter = () => {
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const sortRef = useRef(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSort(false);
      }
    };

    if (showSort) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSort]);

  const toggleFilter = () => {
    setShowFilter(true);
  };

  const closeFilter = () => {
    setShowFilter(false);
  };

  const toggleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <>
      <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
        <div>
          <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Electronics</h2>
        </div>
        <div className="flex items-center space-x-4 relative">
          <button 
            onClick={toggleFilter} 
            type="button" 
            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
          >
            <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
            </svg>
            Filters
            <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
            </svg>
          </button>
          
          <div className="relative" ref={sortRef}>
            <button 
              onClick={toggleSort} 
              type="button" 
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
              </svg>
              Sort
              <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
              </svg>
            </button>
            
            {showSort && (
              <div className="absolute top-full right-0 z-50 mt-1 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-lg dark:bg-gray-700">
                <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  <li>
                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      The most popular
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      Newest
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      Increasing price
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      Decreasing price
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      No. reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      Discount %
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filter Component */}
      <FilterComponent 
        isOpen={showFilter} 
        onClose={closeFilter}
      />
    </>
  );
};

export default Heading_filter;