import React from 'react';
import logo from './images/Logo.webp';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full shadow-lg bg-gradient-to-b from-teal-900 to-teal-700/80 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-teal-900 text-white text-center py-2 text-lg font-semibold border-b border-teal-800 tracking-wide shadow-md animate-fadeInDown">
        <a href="https://forevershinein.com/" className="underline underline-offset-4 hover:text-yellow-300 transition-colors duration-200">Buy Any 3 Products @ FLAT ₹899 on Selected Products | Shop Now</a>
      </div>
      {/* Main Navbar */}
      <div className="relative flex items-center justify-between py-3 bg-white shadow-md px-20 rounded-b-2xl">
        {/* Logo */}
        <div className="flex items-center ">
          <img src={logo} alt="Logo" className="h-16 w-30 drop-shadow-lg hover:scale-105 transition-transform duration-300" />
        </div>
        {/* Nav Links */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 items-center text-gray-800 text-lg font-semibold tracking-wide">
          <li className="hover:text-teal-700 hover:underline underline-offset-8 transition-all duration-200 cursor-pointer">
            <Link to="/">Categories</Link>
          </li>
          <li className="hover:text-teal-700 hover:underline underline-offset-8 transition-all duration-200 cursor-pointer">
            <Link to="/car-care">Car care</Link>
          </li>
          <li className="hover:text-teal-700 hover:underline underline-offset-8 transition-all duration-200 cursor-pointer">
            <Link to="/home-care">Home care</Link>
          </li>
          <li className="hover:text-teal-700 hover:underline underline-offset-8 transition-all duration-200 cursor-pointer">
            <Link to="/personal-care" className="flex flex-col items-center">
              <span>Personal care</span>
              <span className="text-xs text-gray-400 mt-1">(Coming Soon)</span>
            </Link>
          </li>
          <li className="hover:text-teal-700 hover:underline underline-offset-8 transition-all duration-200 cursor-pointer">
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
        {/* Right Icons */}
        <div className="flex items-center gap-3 bg-teal-100/80 py-2 rounded-full px-4 shadow-md">
          {/* Search Icon */}
          <button className="flex items-center justify-center hover:text-teal-700 hover:bg-teal-200/60 rounded-full p-2 transition-all duration-200 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 align-middle">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
          {/* User Icon */}
          <button className="flex items-center justify-center hover:text-teal-700 hover:bg-teal-200/60 rounded-full p-2 transition-all duration-200 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 align-middle">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75V19.5z" />
            </svg>
          </button>
          {/* Bookmark Icon */}
          <button className="flex items-center justify-center hover:text-teal-700 hover:bg-teal-200/60 rounded-full p-2 transition-all duration-200 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 align-middle">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 3H7a2 2 0 00-2 2v16l7-5 7 5V5a2 2 0 00-2-2z" />
            </svg>
          </button>
          {/* Cart Icon */}
          <button className="flex items-center justify-center hover:text-teal-700 hover:bg-teal-200/60 rounded-full p-2 transition-all duration-200 shadow-sm bg-transparent">
            <ShoppingCartIcon className="w-6 h-6 align-middle" />
          </button>
        </div>
      </div>
    </nav>
  );
} 