'use client';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from '../../../components/ui/button';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { handleCartClick } = useShoppingCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

 

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Search Query: ${searchQuery}`);
    // Implement navigation or search logic here
    setSearchQuery('');
    setSearchOpen(false);
  };

  

  return (
    <div className="p-4 w-full h-auto">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2">
        {/* Logo */}
        <h1 className="text-[#22202E] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <span className="text-blue-950">Event</span>ique
        </h1>

        {/* Search Icon for Small Screens */}
        <div className="sm:block md:hidden">
          <button onClick={toggleSearch} aria-label="Toggle Search">
            <CiSearch size={25} className="text-[#2A254B]" />
          </button>
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

        {/* Actions Section */}
        <div className="flex divide-x border-r sm:border-l items-center">
          {/* Search Icon */}
          <button
            className="hidden md:block mr-4 focus:outline-none"
            onClick={toggleSearch}
            aria-label="Search"
          >
            <CiSearch size={25} className="text-[#2A254B]" />
          </button>

          {/* Cart Button */}
          <Button
            variant="outline"
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
          </Button>

          {/* Profile Icon */}
          {/* <div className="relative ml-4">
            <button
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
              onClick={toggleProfile}
              aria-label="Profile"
            >
              <IoIosContact size={25} className="text-gray-600" />
            </button>
            {profileOpen && (
  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
    {isAuthenticated ? (
      <>
        <Link href="/profile">
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link href="/login">
          Login
        </Link>
        <Link href="/signup">
          Sign Up
        </Link>
      </>
    )}
  </div>
)}
</div> */}
        </div>
      </div>

      <hr />

      {/* Search Bar */}
      {searchOpen && (
        <div className="relative mt-2">
          <form
            onSubmit={handleSearch}
            className="flex items-center border border-gray-300 rounded-lg shadow-sm px-4 py-2 bg-white"
          >
            <input
              type="text"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow focus:outline-none text-sm text-gray-700"
            />
            <button
              type="submit"
              className="ml-3 text-blue-950 hover:text-blue-700 focus:outline-none"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Navigation Links */}
      <header
        className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:static md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none z-20`}
      >
        {/* Close Button in Mobile Menu */}
        {menuOpen && (
          <div className="flex justify-end p-4 md:hidden">
            <button className="text-2xl focus:outline-none" onClick={toggleMenu}>
              <IoClose />
            </button>
          </div>
        )}

        <ul className="flex mt-3 flex-col md:flex-row justify-center items-start md:items-center gap-6 text-[#726E8D] text-base p-6 md:p-0">
          {[
            'Decor',
            'Furniture',
            'Tableware',
            'Entertainment',
            'Supplies',
            'Effects',
            'Seasonal',
            'Events',
            'Packaging',
            'Hygiene',
          ].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
