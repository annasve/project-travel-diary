import './style.css';
import { useEffect, useState } from 'react';
import SwedenImg from './img/sweden-640.jpg';

import { PlaceDetailModal } from '../../components/PlaceDetailModal';

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
  //   <div
  //   className={isModalClosed ? 'hidden modal__container' : 'modal__container'}
  // >

  // const handleClickTest = () => {
  //   isModalClosed(false);
  // };

  const [isModalClosed, setIsModalClosed] = useState(true);
  console.log(isModalClosed);

  const openModal = () => {
    setIsModalClosed(false);
  };

  const closeModal = () => {
    setIsModalClosed(true);
  };

  // <PlaceDetailModal isModalClosed={isModalClosed} closeModal={closeModal} />
  return (
    <div className="container--temp">
      <Swiper
        slidesPerView={3}
        spaceBetween={150}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide onClick={openModal}>
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

      <PlaceDetailModal isModalClosed={isModalClosed} closeModal={closeModal} />
    </div>
  );
};
