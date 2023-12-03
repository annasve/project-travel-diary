import './style.css';
import { useEffect, useState } from 'react';
import SwedenImg from './img/sweden-640.jpg';

import { PlaceDetailModal } from '../../components/PlaceDetailModal';

//array country+image for gallery__card

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

  const [isModalClosed, setIsModalClosed] = useState(true);

  const openModal = () => {
    setIsModalClosed(false);
  };

  const closeModal = () => {
    setIsModalClosed(true);
  };

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
