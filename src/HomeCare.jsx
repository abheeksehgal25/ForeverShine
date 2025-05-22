import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import RoomFreshener from './images/RoomFreshner.webp'
import CarPerfume from './images/CarPerfume.webp'
import DashboardPolish from './images/DashBoardPolish.webp'
import TyrePolish from './images/TyrePolish.webp'
import CarwashShampoo from './images/CarWashShampoo.webp'

const products = [
  {
    name: 'Room Freshener',
    price: '₹ 90.00',
    image: RoomFreshener,
  },
  {
    name: 'Car Perfume',
    price: '₹ 225.00',
    image: CarPerfume,
  },
  {
    name: 'Dash-Board Polish',
    price: '₹ 90.00',
    image: DashboardPolish,
  },
  {
    name: 'Car Wash Shampoo',
    price: '₹ 140.00',
    image: CarwashShampoo,
  },
];

const productList = Array(16).fill(0).map((_, i) => products[i % 4]);

export default function HomeCare() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-2 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-900 mb-2 flex items-center gap-2">
          Home Care
        </h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold">Products</span>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-100 transition-all">
            Sort by
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {productList.map((prod, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img src={prod.image} alt={prod.name} className="w-32 h-32 object-cover rounded-xl mb-3 shadow" />
              <span className="text-base font-semibold text-gray-800 mb-1">{prod.name}</span>
              <div className="flex items-center justify-between w-full mt-1">
                <span className="text-base font-bold text-teal-700">{prod.price}</span>
                <button className="text-white bg-teal-700 hover:bg-teal-800 rounded-full p-2 shadow transition-colors duration-200 ml-2">
                  <ShoppingCartIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 