import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css'
import Img1 from '../../assets/BannerImg/1.jpg'
import Img2 from '../../assets/BannerImg/2.jpg'
import Img3 from '../../assets/BannerImg/3.jpg'
import Img4 from '../../assets/BannerImg/4.jpg'
import Img5 from '../../assets/BannerImg/5.jpg'
import Img6 from '../../assets/BannerImg/6.jpg'
import Img7 from '../../assets/BannerImg/7.jpg'
import Img8 from '../../assets/BannerImg/8.jpg'
import Img9 from '../../assets/BannerImg/9.jpg'
import Img10 from '../../assets/BannerImg/10.jpg'

const Banner = () => {
  return (
    <BannerWrap>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation 
        loop={false} 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 5000 }} 
      >
        <SwiperSlide>
          <SBanner src={Img1} alt='Tottenham'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img2} alt='Barcelona'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img3} alt='BayernMunchen'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img4} alt='Chelsea'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img5} alt='Liverpool'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img6} alt='ManchesterUnited'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img7} alt='ManchesterCity'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img8} alt='FCKorea'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img9} alt='Arsenal'/>
        </SwiperSlide>
        <SwiperSlide>
          <SBanner src={Img10} alt='RealMadrid'/>
        </SwiperSlide>
      </Swiper>
    </BannerWrap>
  )
}

export default Banner

const BannerWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SBanner = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-top: 2px;
`;
