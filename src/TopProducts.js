import React from 'react';
import productImage from './assets/product-image.png'; // Replace with actual image path

const TopProducts = () => {
  const products = new Array(7).fill(productImage);

  return (
    <div className="my-6">
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-4 md:mx-8">Top Products</h2>
        <div className="flex justify-between items-center md:mx-4 mb-4">
        <span></span>
        <button className="flex items-center space-x-2 text-blue-500">
          <span>See All</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
        </button>
      </div>
        <div className="flex md:space-x-6 overflow-x-auto justify-center md:mx-4">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 md:p-2 bg-white rounded-full shadow-lg"
            >
              <img 
                src={product} 
                alt={`Top Product ${index}`} 
                className="md:h-32 md:w-32 rounded-full" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

