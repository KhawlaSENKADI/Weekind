// Home.js

import React from 'react';
import Header from './Header';
import TopProducts from './TopProducts';
import ProductShowcase from './ProductShowcase';
import AdsSlider from './AdsSlider';
const Home = () => {
  return (
    <>
    <Header/>
    <AdsSlider/>
    <TopProducts />
    <ProductShowcase />

   </>
  );
};

export default Home;
