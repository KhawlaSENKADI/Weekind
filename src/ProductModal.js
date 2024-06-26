import React from 'react';

const ProductModal = ({ product, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div id="product-modal" className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="relative w-full md:mt-8  max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        {product.name}
                    </h3>
                    <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4 ">
                    <div className="flex flex-col items-center">
                    <img id="product-image" src={product.image} alt="Product Image" className="w-1/2 h-auto" />
                    </div>


                    <div className="flex justify-left items-left">
                    <p className="text-base leading-relaxed text-customRed dark:text-gray-400">
                       Price : 
                    </p>
                    <p className="text-base leading-relaxed dark:text-gray-400">
                        {product.price}
                    </p>
                    </div>

                    <div className="flex justify-left items-left">
                    <p id="product-price" className="text-base leading-relaxed text-customRed dark:text-gray-400">
                       Seller : 
                    </p>
                    <p className="text-base leading-relaxed dark:text-gray-400">
                       {product.username}
                    </p>
                    </div>

                    <div className="flex justify-left items-left">
                    <p className="text-base leading-relaxed text-customRed dark:text-gray-400">
                        About : 
                    </p>
                    <p className="text-base leading-relaxed dark:text-gray-400">
                        {product.about}
                    </p>
                    </div>
                </div>
                <div className="flex justify-center items-center md:my-4 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button type="button" className="text-white bg-customRed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Click , Ship , Enjoy !</button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
