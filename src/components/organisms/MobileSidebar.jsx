import React, { useState } from "react";
import { links } from "./NavBar";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Mobile menu button */}

      {/* Mobile sidebar */}
      {!isOpen && (
        <div className='fixed inset-0 flex z-40'>
          {/* Overlay */}
          <div className='fixed inset-0 bg-gray-600 opacity-75'></div>

          {/* Sidebar */}
          <div className='fixed inset-y-0 right-0 flex flex-col w-64 bg-white shadow-lg'>
            {/* Sidebar content */}
            <div className='flex items-center justify-between h-16 px-6 py-4 bg-gray-800'>
              <span className='text-xl font-semibold text-red-600'>
                MovieTime
              </span>
              <button
                className='text-gray-300 bg-none hover:text-white focus:outline-none focus:text-white'
                onClick={toggleSidebar}
              >
                X
              </button>
            </div>
            <ul className='flex flex-col flex-grow p-4'>
              {/* Sidebar links */}
              {links.map((link) => (
                <li key={link.path} className='text-primary'>
                  <Link
                    to={link.path}
                    className='text-primary flex items-center px-4 py-2 mt-2 text-gray-700 bg-gray-100'
                  >
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
              {/* Add more sidebar links as needed */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
