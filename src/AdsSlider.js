import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ad from './assets/Advertisement.png';
import './Font.css'

const ads = [
  { id: 1, imageUrl: ad, link: '#' },
  { id: 2, imageUrl: ad, link: '#' },
  { id: 3, imageUrl: ad, link: '#' },
  // Add more ads as needed
];

const AdsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <ul className="slick-dots flex justify-center mt-2">
        {dots.map((dot, index) => (
          <li key={index} className="mx-1">
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: () => (
      <button className="w-5 h-5 rounded-full bg-customPurple focus:outline-none"></button>
    )
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {ads.map((ad) => (
          <div key={ad.id} className="w-full h-full">
            <a
              href={ad.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src={ad.imageUrl}
                alt={`Ad ${ad.id}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdsSlider;
