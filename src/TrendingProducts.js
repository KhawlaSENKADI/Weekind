import React from 'react';
import ProductCard from './ProductCard';
import productImage from './assets/product-image.png'; // Replace with actual image path

const TrendingProducts = ({ onProductClick }) => {
    const products = new Array(4).fill({
        name: 'Product Name',
        price: '1780',
        image: productImage,
        username : "James",
        about : "This is a product that is being sold on Weekind ! ",
    });

    return (
        <div className="my-6">
            <h2 className="text-xl font-semibold md:mx-8">Trending</h2>
            <div className="flex justify-between items-center md:mx-4 mb-4">
                <span></span>
                <button className="flex items-center space-x-2 text-blue-500">
                    <span>See All</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} onClick={() => onProductClick(product)} />
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;
