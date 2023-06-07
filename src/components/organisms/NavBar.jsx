import React from "react";
import { NavLink, Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa'

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
          <span className="brand_color font-bold">MovieTime</span>
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
          <FaBars className="mt-2" onClick={toggleMobileBar}/>
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
