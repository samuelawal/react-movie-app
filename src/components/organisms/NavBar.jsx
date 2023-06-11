import React from "react";
import { NavLink, Link, redirect} from "react-router-dom";
import {FaBars, FaSearch} from 'react-icons/fa'

export const links = [
  { title: "Home", path: "/" },
  { title: "Series", path: "/series" },
  { title: "Movies", path: "/movies" },
];
const NavBar = ({query, onInputChange, toggleMobileBar}) => {
  return (
    <nav className='container mx-auto p-3'>
      <header className="flex justify-between">
        <div className="mt-2">
          <span className="brand_color font-bold text-2xl">MovieTime</span>
        </div>
  
          <ul className='md:flex hidden items-center'>
            {links.map((link) => (
              <li key={link.path} className="px-5">
                <NavLink  to={link.path}>
                  <span>{link.title}</span>
                </NavLink >
              </li>
            ))}          
          </ul>
          <div className="md:hidden flex justify-items-end mr-2">
            <Link to="/search">
          <FaSearch className="mt-2 mr-8" size="1.5em"/>
            </Link>
          <FaBars className="mt-2" size="1.5em" onClick={toggleMobileBar}/>
          </div>
        <div className="md:flex hidden justify-between items-center">
          <input type="text" value={query} onChange={onInputChange} placeholder="Search..." className="text-small search_input px-3 mx-2 rounded py-1"/>
          <Link to='#' className="mx-2">Login</Link>
          <Link to='#' className="button px-3 py-2 mx-2">Signup</Link>
        
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
