// Home.js

import React from 'react';
import Header from './Header';
import TopProducts from './TopProducts';
import TrendingProducts from './TrendingProducts';
import JustForYou from './JustForYou';
import AdsSlider from './AdsSlider';
const Home = () => {
  return (
    <>
    <Header/>
    <AdsSlider/>
    <TopProducts />
    <TrendingProducts />
    <JustForYou />

   </>
  );
};

export default Home;
