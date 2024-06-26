import React, { useState } from 'react';
import ProductCard from './ProductCard';
import productImage from './assets/product-image.png'; // Replace with actual image path

const JustForYou = ({ onProductClick }) => {
    const [activeSort, setActiveSort] = useState(null);

    const sortOptions = [
        { id: 'productName', label: 'Product Name' },
        { id: 'price', label: 'Price' },
        // Add more sort options as needed
    ];

    const products = new Array(4).fill({
        name: 'Product Name',
        price: '1780',
        image: productImage,
        username : "James",
        about : "This is a product that is being sold on Weekind ! ",
    });

    const handleSortChange = (sortOption) => {
        setActiveSort(sortOption);
    };

    const sortedProducts = () => {
        if (activeSort === 'productName') {
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        } else if (activeSort === 'price') {
            return [...products].sort((a, b) => a.price - b.price);
        }
        return products; // Return unsorted products if no sorting is selected
    };

    return (
        <div className="my-6">
            <h2 className="text-xl font-semibold mb-4 md:mx-8">Just For You</h2>
            <div className="flex justify-center space-x-4 md:mx-4">
                {sortOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => handleSortChange(option.id)}
                        className={`py-2 px-4 border rounded-lg focus:outline-none ${activeSort === option.id
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-100'
                            }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {sortedProducts().map((product, index) => (
                    <ProductCard key={index} product={product} onClick={() => onProductClick(product)} />
                ))}
            </div>
        </div>
    );
};

export default JustForYou;
