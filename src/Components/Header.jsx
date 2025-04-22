import React, { useState } from 'react';
import { HiOutlineHome, HiOutlineUser, HiOutlineInformationCircle } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import InputSearch from './InputSearch';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-red-500 font-semibold" : "text-zinc-300 hover:text-red-400 transition duration-200";

  return (
    <header className="w-full bg-[#121212] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-500 tracking-tight">NEWSHUNT</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <NavLink to="/category/general" className={navLinkStyle}>
            <div className="flex items-center gap-2">
              <HiOutlineHome size={20} />
              Home
            </div>
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            <div className="flex items-center gap-2">
              <HiOutlineInformationCircle size={20} />
              About
            </div>
          </NavLink>

          <NavLink to="/profile" className={navLinkStyle}>
            <div className="flex items-center gap-2">
              <HiOutlineUser size={20} />
              Account
            </div>
          </NavLink>
        </nav>

        {/* Search */}
        <div className="hidden md:block w-[30%]">
          <InputSearch />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>{isMobileMenuOpen ? '✖' : '☰'}</button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1e1e1e] px-6 py-4 text-zinc-300 space-y-3">
          <NavLink to="/category/general" className={navLinkStyle}><HiOutlineHome /> Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}><HiOutlineInformationCircle /> About</NavLink>
          <NavLink to="/profile" className={navLinkStyle}><HiOutlineUser /> Account</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
