import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => { 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>My Portfolio</h1>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
      {isMenuOpen 
        ? <RiCloseLine color='#fff' size={27}  />
        : <RiMenu3Line color='#fff' size={27}  />
      }

      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;