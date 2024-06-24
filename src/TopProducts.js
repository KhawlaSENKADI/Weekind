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
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H5a1 1 0 000 2h4v5a1 1 0 002 0v-5h4a1 1 0 000-2h-4V4a1 1 0 00-1-1z" clipRule="evenodd"></path>
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

