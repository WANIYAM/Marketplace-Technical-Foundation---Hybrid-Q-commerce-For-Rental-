'use client';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

const Pnavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="p-4 w-full h-auto">
  {/* Top Section */}
  <div className="flex justify-between items-center py-2">
    
    {/* Logo and Navigation Links */}
    <div className="flex items-center w-full justify-between">
      {/* Logo */}
      <h1 className="text-[#22202E] text-xl md:text-2xl">
        Avion
      </h1>
       {/* Mobile Navigation Links */}
  <header
    className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none z-20`}
  >
    {/* Close Button in Mobile Menu */}
    {menuOpen && (
      <div className="flex justify-end p-4 md:hidden">
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
        </button>
      </div>
    )}
  {/* Centered Navigation Links */}
  <ul className=" flex mt-3 flex-col md:flex-row justify-center items-start md:items-center gap-6 text-[#726E8D] text-base p-6 md:p-0">
        {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map((item) => (
          <li key={item}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>

       
  </header>
      
      

      {/* Icons for Large Screens */}
      <div className="md:flex hidden gap-4 items-center">
        <div className="sm:hidden md:block">
          <CiSearch size={25} className="text-[#2A254B]" />
        </div>
        <Link href="/Cart">
          <IoCartOutline size={25} className="text-[#2A254B]" />
        </Link>
        <IoIosContact size={25} className="text-[#2A254B]" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex items-center gap-4 md:hidden">
        <button
          className="text-2xl focus:outline-none z-30"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {!menuOpen ? <IoMenu /> : <IoClose />}
        </button>
      </div>
    </div>
  </div>

  

 
</div>

        
   
  );
};

export default Pnavbar;
