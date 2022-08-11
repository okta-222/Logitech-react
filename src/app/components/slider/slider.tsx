import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from "../../../shared/assets/images/mouse2.webp"
import img2 from "../../../shared/assets/images/mouse.webp"
import img3 from "../../../shared/assets/images/mouse4.webp"
import img4 from "../../../shared/assets/images/mice.webp"
import img5 from "../../../shared/assets/images/mouse3.webp"

import "./slider.scss"

export default function slider() {
  return (
    <div className="main-slide">
      <h2>SEE MORE DETALIS</h2>
      <div className="container">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><img src={img} alt="" /></SwiperSlide>
            <SwiperSlide><img className='dra3' src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img} alt="" /></SwiperSlide>
          </Swiper>
    </div>
  </div>
  )
}
