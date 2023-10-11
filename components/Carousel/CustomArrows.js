import React from 'react';
import styles from './Carousel.module.css';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';

const CustomPrevArrow = (props) => (
  <button {...props} className={`${styles.slick_arrow} ${styles.slick_prev}`}>
    <AiOutlineArrowLeft/>
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className={`${styles.slick_arrow} ${styles.slick_next}`}>
    <AiOutlineArrowRight/>
  </button>
);

export { CustomPrevArrow, CustomNextArrow };
