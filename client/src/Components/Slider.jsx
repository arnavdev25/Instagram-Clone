/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
function Slider() {
 const urls= ['https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png',
  'https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png',
   'https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png',
   'https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png'
];

 const divStyle = {
    height: "560px",
    width: "245px",
    
    backgroundColor: '#f2f2f2'
  }
  


  return (
    <div >
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {/* <SwiperSlide><img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"/></SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default Slider;