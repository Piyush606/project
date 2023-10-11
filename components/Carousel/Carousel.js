import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import Image from 'next/image';
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows';

const Carousel = () => {

  const settings = {
    // dots: true,  
    // arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set auto-sliding interval in milliseconds
    responsive: [
      {
        breakpoint: 768, // Hide arrows on screens smaller than 768px
        settings: {
          arrows: false,
        },
      },]
  };

  return (
    <div className={`container mx-auto overflow-x-hidden ${styles.full_viewport_container}`}>
      <Slider {...settings}>
        <div className=''>
          <Image
width={1024} height={452.26}
            src="/image/1.jpg"
            alt="Image 1"
            className={`${styles.full_viewport_image} md:w-full md:h-auto`}/>
          <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center`}>
            <p className="text-white text-5xl font-bold">Text for Image 1</p>
          </div>
        </div>
        <div className='h-full'>
          <Image width={1024} height={452.26}
            src="/image/2.jpg"
            alt="Image 2"
            className={`${styles.full_viewport_image} md:w-full md:h-auto`}/>
          <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center`}>
            <p className="text-white text-5xl font-bold">Text for Image 2</p>
          </div>
        </div>
        <div className=''>
        <Image width={1024} height={452.26}
            src="/image/3.jpg"
            alt="Image 2"
            className={`${styles.full_viewport_image} md:w-full md:h-auto`}
          />
          <div className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center`}>
              <p className="text-white text-5xl font-bold">Text for Image 3</p>
            </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
      {/* <h1 className={styles['unique-class']}>My Name</h1> */}
    </div>
  );
};

export default Carousel;
