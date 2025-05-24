import React from 'react';
import { Link } from 'react-router-dom';
import PersonalCare from './images/Property 1=Group 8.jpg'
import HomeCare from './images/Property 1=Component 7.jpg'
import CarCare from './images/Property 1=1737913248.jpg'
import RoomFreshener from './images/RoomFreshner.webp'
import CarPerfume from './images/CarPerfume.webp'
import DashboardPolish from './images/DashBoardPolish.webp'
import TyrePolish from './images/TyrePolish.webp'
import CarwashShampoo from './images/CarWashShampoo.webp'
import Forevershine from './images/ForeverShine.jpg'
import Blog1 from './images/Blog1.jpg'
import Blog2 from './images/Blog2.jpg'
import Blog3 from './images/Blog3.jpg'

const categories = [
  {
    name: 'Personal Care (Coming soon)',
    icon: PersonalCare,
  },
  {
    name: 'Car Care',
    icon: CarCare,
  },
  {
    name: 'Home Care',
    icon: HomeCare,
  },
];

const newArrivals = [
  {
    id: 'car-perfume',
    name: 'Car Perfume',
    price: '₹ 225.00',
    image: CarPerfume,
  },
  {
    id: 'tyre-polish',
    name: 'Tyre Polish',
    price: '₹ 90.00',
    image: TyrePolish,
  },
  {
    id: 'car-wash-shampoo',
    name: 'Car Wash Shampoo',
    price: '₹ 140.00',
    image: CarwashShampoo,
  },
  {
    id: 'room-freshener',
    name: 'Room Freshener',
    price: '₹ 90.00',
    image: RoomFreshener,
  },
];

const bestSellers = [
  {
    id: 'room-freshener',
    name: 'Room Freshener',
    price: '₹ 90.00',
    image: RoomFreshener,
  },
  {
    id: 'car-perfume',
    name: 'Car Perfume',
    price: '₹ 225.00',
    image: CarPerfume,
  },
  {
    id: 'dash-board-polish',
    name: 'Dash-Board Polish',
    price: '₹ 90.00',
    image: DashboardPolish,
  },
  {
    id: 'car-wash-shampoo',
    name: 'Car Wash Shampoo',
    price: '₹ 140.00',
    image: CarwashShampoo,
  },
];

export default function HomeSections() {
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 md:px-0 py-8 md:py-12">
      {/* Explore Categories */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-left tracking-tight text-gray-900 drop-shadow">Explore Categories</h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-between mb-8 md:mb-12 gap-6 md:gap-8">
        {categories.map((cat, idx) => (
          <Link 
            key={idx} 
            to={cat.name.includes('Personal') ? '/personal-care' : 
                cat.name.includes('Car') ? '/car-care' : 
                cat.name.includes('Home') ? '/home-care' : '/'}
            className="flex flex-col items-center border-2 border-teal-200 rounded-2xl p-4 md:p-6 w-full md:w-64 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
          >
            <img src={cat.icon} alt={cat.name} className="w-32 h-32 md:w-44 md:h-44 mb-4 rounded-xl shadow-md object-contain bg-gradient-to-br from-teal-50 to-white" />
            <span className="text-center text-lg md:text-xl font-bold mt-2 text-gray-800">{cat.name}</span>
          </Link>
        ))}
      </div>

      {/* Best Seller Deal */}
      <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-4 md:mb-6 tracking-tight drop-shadow">Best Seller Deal</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
        {bestSellers.map((prod, idx) => (
          <Link 
            key={idx} 
            to={`/product/${prod.id}`}
            className="flex flex-col items-center w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-4 transform hover:-translate-y-2 cursor-pointer"
          >
            <img src={prod.image} alt={prod.name} className="w-full h-48 md:h-56 object-cover rounded-xl mb-3 shadow" />
            <span className="text-base md:text-lg font-semibold text-gray-800 mb-1">{prod.name}</span>
            <div className="flex items-center justify-between w-full mt-1">
              <span className="text-sm md:text-base font-bold text-teal-700">{prod.price}</span>
              <button className="text-white bg-teal-700 hover:bg-teal-800 rounded-full p-2 shadow transition-colors duration-200 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7" />
                </svg>
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* New Arrivals */}
      <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-4 md:mb-6 tracking-tight drop-shadow">New Arrivals</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
        {newArrivals.map((prod, idx) => (
          <Link 
            key={idx} 
            to={`/product/${prod.id}`}
            className="flex flex-col items-center w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-4 transform hover:-translate-y-2 cursor-pointer"
          >
            <img src={prod.image} alt={prod.name} className="w-full h-48 md:h-56 object-cover rounded-xl mb-3 shadow" />
            <span className="text-base md:text-lg font-semibold text-gray-800 mb-1">{prod.name}</span>
            <div className="flex items-center justify-between w-full mt-1">
              <span className="text-sm md:text-base font-bold text-teal-700">{prod.price}</span>
              <button className="text-white bg-teal-700 hover:bg-teal-800 rounded-full p-2 shadow transition-colors duration-200 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7" />
                </svg>
              </button>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Forevershine Banner Section - Full Width */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-[25rem] md:h-[45rem] overflow-hidden rounded-none mt-8 flex items-center justify-center animate-fadeInUp">
        <img src={Forevershine} alt="Forever Shine" className="absolute inset-0 w-screen h-full object-cover md:object-fill object-center bg-white" />
      </div>

      {/* Services Section */}
      <div className="w-full bg-white py-8 md:py-14 shadow-inner rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-10 text-left tracking-tight text-gray-900 drop-shadow">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
            <div>
              <div className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-[#3422FF]">Free</span>
                <span className="text-black"> Shipping</span>
              </div>
              <div className="text-base md:text-lg text-gray-800">Free shipping on all US order or above $200</div>
            </div>
            <div>
              <div className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-[#3422FF]">24x7</span>
                <span className="text-black"> Support</span>
              </div>
              <div className="text-base md:text-lg text-gray-800">Contact us 24 hours a day, 7 days a week</div>
            </div>
            <div>
              <div className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-[#3422FF]">30 days</span>
                <span className="text-black"> Return</span>
              </div>
              <div className="text-base md:text-lg text-gray-800">Simply return it within 30 days for an exchange</div>
            </div>
            <div>
              <div className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-[#3422FF]">Payment Secure</span>
              </div>
              <div className="text-base md:text-lg text-gray-800">Contact us 24 hours a day, 7 days a week</div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog & News Section */}
      <div className="w-full bg-white py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-teal-800 mb-4 tracking-tight drop-shadow">Our Blog & News</h2>
          <p className="text-base md:text-xl text-center mb-6 md:mb-10 text-gray-900">
            Our <span className="font-bold italic">MD Sandeep Sharma</span> get awarded from <span className="font-bold italic">Isha Deol</span> and after attend press conference in Delhi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <img src={Blog1} alt="Blog 1" className="w-full h-48 md:h-72 object-cover rounded-3xl shadow-xl border-4 border-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300" />
            <img src={Blog2} alt="Blog 2" className="w-full h-48 md:h-72 object-cover rounded-3xl shadow-xl border-4 border-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300" />
            <img src={Blog3} alt="Blog 3" className="w-full h-48 md:h-72 object-cover rounded-3xl shadow-xl border-4 border-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
} 