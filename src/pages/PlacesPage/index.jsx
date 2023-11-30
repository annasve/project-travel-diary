import './style.css';
import { useEffect } from 'react';
import SwedenImg from './img/sweden-640.jpg';

//----------
//swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
//----------

export const PlacesPage = () => {
  useEffect(() => {
    document.body.className = 'places-background';
  }, []);

  // return (
  //   <div className="places-page">
  //     <h2>Places page</h2>
  //     <div className="gallery__container">
  //       <div className="gallery__card">
  //         <img src={SwedenImg} alt="A street in Stockholm" />
  //         <span className="country-title">Sweden</span>
  //       </div>

  //       <div className="gallery__card">
  //         <img src={SwedenImg} alt="A street in Stockholm" />
  //         <span className="country-title">Czech Republic</span>
  //       </div>

  //       <div className="gallery__card">
  //         <img src={SwedenImg} alt="A street in Stockholm" />
  //         <span className="country-title">Denmark</span>
  //       </div>
  //     </div>
  //   </div>
  // );
  //----------------------------------------------
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={150}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="gallery__card">
          <img src={SwedenImg} alt="A street in Stockholm" />
          <span className="country-title">Sweden</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery__card">
          <img src={SwedenImg} alt="A street in Stockholm" />
          <span className="country-title">Czech Republic</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery__card">
          <img src={SwedenImg} alt="A street in Stockholm" />
          <span className="country-title">Denmark</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="gallery__card">
          <img src={SwedenImg} alt="A street in Stockholm" />
          <span className="country-title">Denmark</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};
