import React from 'react';
import logo from './images/Logo.webp';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="w-full bg-teal-900 text-white pt-10 pb-4 px-2 md:px-8 mt-16 border-t-4 border-teal-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 md:gap-4">
        {/* Left: Logo and credit */}
        <div className="flex flex-col items-center justify-start bg-white/90 rounded-tl-2xl rounded-bl-2xl p-6 w-full md:w-1/4 min-w-[220px] border-r-2 border-teal-800">
          <span className="text-black text-sm font-semibold mb-2">Designed and Developed by</span>
          <img src={logo} alt="Footer Logo" className="w-40 h-28 object-contain" />
        </div>
        {/* Center: Main columns */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 bg-teal-900 rounded-tr-2xl rounded-br-2xl p-8">
          {/* Category */}
          <div>
            <h4 className="text-xl font-bold mb-3">Category</h4>
            <ul className="space-y-2 text-base">
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">Car care</li>
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">Home care</li>
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">Personal care(Coming soon)</li>
            </ul>
          </div>
          {/* Explore */}
          <div>
            <h4 className="text-xl font-bold mb-3">Explore</h4>
            <ul className="space-y-2 text-base">
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">About us</li>
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">Privacy Policy</li>
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">Terms & Condition</li>
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">Get In Touch</li>
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">Order Tracking</li>
              <li className="hover:underline hover:text-teal-300 transition-all cursor-pointer">Blog</li>
            </ul>
          </div>
          {/* Contact */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <h4 className="text-xl font-bold mb-3">Contact</h4>
              <p className="text-base mb-1">D-107 Budh Vihar, Alwar,</p>
              <p className="text-base mb-1">Rajasthan - 301001.</p>
              <p className="text-base mb-1">+91 8387941041</p>
              <p className="text-base mb-3">forevershinein@gmail.com</p>
            </div>
            <div className="flex gap-3 mt-2">
              <a href="https://www.instagram.com/" className="inline-block  text-pink-400 transition-all">
                <FaInstagram className="w-8 h-8 rounded-md hover:scale-110 transition-all" />
              </a>
              <a href="https://www.facebook.com/" className="inline-block  text-blue-500 transition-all">
                <FaFacebook className="w-8 h-8 rounded-md hover:scale-110 transition-all" />
              </a>
              <a href="https://x.com/" className="inline-block  text-blue-400 transition-all">
                <FaTwitter className="w-8 h-8 rounded-md hover:scale-110 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 