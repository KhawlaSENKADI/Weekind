import React from 'react';
import ProductCard from './ProductCard';
import productImage from './assets/product-image.png'; // Replace with actual image path

const TrendingProducts = () => {
  const products = new Array(4).fill({
    name: 'Product Name',
    price: 'Price',
    actualPrice: '1780',
    image: productImage,
  });

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold md:mx-8">Trending</h2>
      <div className="flex justify-between items-center md:mx-4 mb-4">
        <span></span>
        <button className="flex items-center space-x-2 text-blue-500">
          <span>See All</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H5a1 1 0 000 2h4v5a1 1 0 002 0v-5h4a1 1 0 000-2h-4V4a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
