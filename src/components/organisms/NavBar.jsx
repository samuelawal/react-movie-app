import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Series", path: "/series" },
    { title: "Movies", path: "/movies" },
  ];
  return (
    <nav className='container mx-auto p-4'>
      <header className="flex justify-between">
        <div>
          <span className="brand_color font-bold">MovieTime</span>
        </div>
  
          <ul className='flex '>
            {links.map((link) => (
              <li key={link.path} className="px-8">
                <Link to={link.path}>
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
     
        <div className="flex">
          <Link to='#' className="px-5">Login</Link>
          <Link to='#' className="px-5 button">Signup</Link>
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
