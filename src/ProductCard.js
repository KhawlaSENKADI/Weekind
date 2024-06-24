import React from 'react';

const ProductCard = ({ product }) => (
  <div className="p-4 shadow-md rounded-lg">
    <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-t-lg" />
    <div className="p-2">
      <h3 className="text-md font-medium">{product.name}</h3>
      <p className="text-red-500">{product.price}</p>
      <div className="flex justify-between items-center">
        <span>{product.actualPrice}</span>
        <button className="text-blue-500">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.02 4.5 2.09C13.09 4.02 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
