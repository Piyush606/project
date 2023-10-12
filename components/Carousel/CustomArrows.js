import React from 'react';
import styles from './Carousel.module.css';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import { useSwiper } from 'swiper/react';

const swiper = useSwiper();

const CustomArrows = () => (
  <><button onClick={() => swiper.slidePrev()} className={`${styles['swiper-button-prev']}`}>
    <AiOutlineArrowLeft/>
  </button>
  <button onClick={() => swiper.slideNext()} className={`${styles['swiper-button-next']}`}>
    <AiOutlineArrowRight/>
  </button></>
);


export default CustomArrows;
