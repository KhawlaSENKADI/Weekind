import React, { useState } from 'react';
import TrendingProducts from './TrendingProducts';
import JustForYou from './JustForYou';
import ProductModal from './ProductModal';

const ProductShowcase = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <TrendingProducts onProductClick={handleOpenModal} />
            <JustForYou onProductClick={handleOpenModal} />
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default ProductShowcase;
