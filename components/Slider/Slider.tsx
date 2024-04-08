import React from "react";
import styles from "./Slider.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import fImage from "@/public/7.png";
import sImage from "@/public/9.png";
import tImage from "@/public/11.png";
import fourthImage from "@/public/13.png";
import fifthImage from "@/public/15.png";

import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });

const Slider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        modules={[Pagination, Navigation]}
        className={styles.slider}
      >
        <SwiperSlide>
          <Image src={fImage} className={styles.image} alt="watch" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sImage} className={styles.image} alt="watch" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={tImage} className={styles.image} alt="watch" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fourthImage} className={styles.image} alt="watch" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fifthImage} className={styles.image} alt="watch" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.control}>
        <div className={styles.btns}>
          <button className={`arrow-left ${styles.arrow}`}>❮</button>
          <button className={`arrow-right ${styles.arrow}`}>❯</button>
        </div>
        <div className={`${styles.pagination} ${epilogue.className}`}>
          01<div className={styles.bar}></div>05
        </div>
      </div>
    </div>
  );
};

export default Slider;
