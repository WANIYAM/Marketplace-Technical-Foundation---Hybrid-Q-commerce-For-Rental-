import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#2A254B] text-gray-400 px-6 md:px-12 py-8 mt-8">
      {/* Footer Content */}
      <div className="flex flex-wrap justify-between">
        {/* Menu Section */}
        <div className="w-full sm:w-auto mb-6">
        <h1 
  className="text-white mb-4" 
  style={{
    fontFamily: 'Clash Display',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19.68px',
    textAlign: 'left',
    textDecorationSkipInk: 'none'
  }}
>
  Menu
</h1>
          <ul className="space-y-2 text-white mb-4">
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      textDecorationSkipInk: 'none' 
    }}
  >
    New arrivals
  </Link>
</li>
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Best sellers
  </Link>
</li>
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Recently viewed
  </Link>
</li>
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Popular this week
  </Link>
</li>
          <li>
  <Link 
    href="/all" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    All products
  </Link>
</li>
            
          </ul>
        </div>

        {/* Categories Section */}
        <div className="w-full sm:w-auto mb-6">
        <h1 
  className="text-white mb-4" 
  style={{
    fontFamily: 'Clash Display',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19.68px',
    textAlign: 'left',
    // textDecoration: 'underline',
    textDecorationSkipInk: 'none'
  }}
>
  Popular Categories
</h1>
          <ul className="space-y-2 text-white mb-4">
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Decor
  </Link>
</li>
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Furniture
  </Link>
</li>
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Tableware
  </Link>
</li>
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Entertainment
  </Link>
</li>
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Supplies
  </Link>
</li>
            
          </ul>
        </div>

        {/* Our Company Section */}
        <div className="w-full sm:w-auto mb-6">
        <h1 
  className="text-white mb-4" 
  style={{
    fontFamily: 'Clash Display',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19.68px',
    textAlign: 'left',
    // textDecoration: 'underline',
    textDecorationSkipInk: 'none'
  }}
>
 Our company 
</h1>

          <ul className="space-y-2 text-white mb-4">
          <li>
  <Link 
    href="/about" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    About us
  </Link>
</li>
          
          <li>
  <Link 
    href="/contact" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Contact us
  </Link>
</li>
          
          <li>
  <Link 
    href="/" 
    style={{
      fontFamily: 'Satoshi',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18.9px',
      textAlign: 'left',
      // textDecoration: 'underline', // This will apply the underline
      textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
    }}
  >
    Retal policy
  </Link>
</li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div className="w-full sm:w-auto">
        <h1 
  className="text-white mb-4" 
  style={{
    fontFamily: 'Clash Display',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19.68px',
    textAlign: 'left',
    // textDecoration: 'underline', // This applies the underline
    textDecorationSkipInk: 'none' // This may not be directly applicable in inline styles
  }}
>
  Join our mailing list
</h1>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-[#403B5A] text-gray-300 placeholder-gray-500 p-3 rounded-md mb-4 sm:mb-0 sm:mr-4 flex-1 "
            />
            <button
              type="submit"
              className="bg-white text-[#2A254B] font-bold px-6 py-3 rounded-md"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-[#4E4D93]" />

      {/* Footer Bottom Section */}
      <div className="flex flex-wrap justify-between items-center">
        {/* Copyright */}
        <p className="text-gray-400">Copyright 2025 Eventique LTD</p>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          <Link href="/"><FaLinkedin size={20} /></Link>
          <Link href="/"><FaFacebookSquare size={20} /></Link>
          <Link href="/"><FaInstagram size={20} /></Link>
          <Link href="/"><IoLogoSkype size={20} /></Link>
          <Link href="/"><FaTwitter size={20} /></Link>
          <Link href="/"><FaPinterest size={20} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
