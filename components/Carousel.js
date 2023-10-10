import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.module.css'

const Carousel = () => {
  const settings = {
    // dots: true,  
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set auto-sliding interval in milliseconds
  };

  return (
    <div className="container mx-auto overflow-x-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="/image/1.jpg"
            alt="Image 1"
            className="w-full h-auto mx-auto"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">Text for Image 1</p>
            </div>
        </div>
        <div>
          <img
            src="/image/2.jpg"
            alt="Image 2"
            className="w-full h-auto mx-auto"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">Text for Image 2</p>
            </div>
        </div>
        <div>
          <img
            src="/image/3.jpg"
            alt="Image 3"
            className="w-full h-auto mx-auto"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">Text for Image 3</p>
            </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
