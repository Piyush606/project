import Image from 'next/image';
import React, { useRef, useState } from 'react';
import styles from './Carousel.module.css';
import {EffectFade, Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

SwiperCore.use([EffectFade, Navigation, Autoplay]);

const SwiperCarousel = () => {
    const SlideRef = useRef();

    const handleNext = () => {
      SlideRef.current.swiper.slideNext();
    }

    const handlePrev = () => {
      SlideRef.current.swiper.slidePrev();
    }

    const swiperParams = {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade', // Enable fade effect
        fadeEffect: {
        crossFade: true, // Enable cross fade
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '.next-button',
          prevEl: '.prev-button',
        },
        autoplay: {
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // Continue autoplay after user interaction
        },
      };

  return (<>
    <Swiper className="mySwiper" {...swiperParams} ref={SlideRef}>
    <SwiperSlide>
    {({ isActive }) => (
       <><Image width={1024} height={452.26}
                src="/image/1.jpg"
                alt="Image 1"
                className={`${styles.full_viewport_image} md:w-full md:h-auto`}/>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <p className={`text-white text-3xl md:text-5xl font-bold transform ease-out duration-1000 ${isActive ? "translate-y-[0%] opacity-100" : "translate-y-[-200%] opacity-0"}`}>Text for Image 1</p>
        </div></>
    )}
    </SwiperSlide>
    <SwiperSlide>
    {({ isActive }) => (
       <><Image width={1024} height={452.26}
                src="/image/2.jpg"
                alt="Image 2"
                className={`${styles.full_viewport_image} md:w-full md:h-auto`}/>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <p className={`text-white text-3xl md:text-5xl font-bold transform ease-out duration-1000 ${isActive ? "translate-y-[0%] opacity-100" : "translate-y-[-200%] opacity-0"}`}>Text for Image 2</p>
        </div></>
    )}
    </SwiperSlide>
    <SwiperSlide>
    {({ isActive }) => (
       <><Image width={1024} height={452.26}
                src="/image/3.jpg"
                alt="Image 3"
                className={`${styles.full_viewport_image} md:w-full md:h-auto`}/>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <p className={`text-white text-3xl md:text-5xl font-bold transform ease-out duration-1000 ${isActive ? "translate-y-[0%] opacity-100" : "translate-y-[-200%] opacity-0"}`}>Text for Image 3</p>
        </div></>
    )}
    </SwiperSlide>
    <div className={`${styles['prev-button']} rounded-full text-2xl hidden md:block`} onClick={handlePrev}><AiOutlineArrowLeft/></div>
    <div className={`${styles['next-button']} rounded-full text-2xl hidden md:block`} onClick={handleNext}><AiOutlineArrowRight/></div>
  </Swiper>
  </>
  )
}

export default SwiperCarousel