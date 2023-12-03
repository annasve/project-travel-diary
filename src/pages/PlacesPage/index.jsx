import './style.css';
import { useEffect, useState } from 'react';
import swedenImg from './img/sweden-640.jpg';

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
  const [countries, setCountries] = useState([]);
  console.log('countries', countries);
  useEffect(() => {
    document.body.className = 'places-background';

    //country data from our api
    const fetchCountriesInfo = async () => {
      const response = await fetch('http://localhost:4000/api/countriesinfo');
      const data = await response.json();
      setCountries(data.result);

      if (!response.ok) {
        console.log(
          'Sorry, the server cannot fetch information about the countries. Countries are unable to travel to your destination :/',
        );
      }
    };

    fetchCountriesInfo();
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
        <Countries countries={countries} openModal={openModal} />
      </Swiper>

      <PlaceDetailModal isModalClosed={isModalClosed} closeModal={closeModal} />
    </div>
  );
};

const Countries = ({ countries, openModal }) =>
  countries.map((country) => (
    <SwiperSlide key={country.id} onClick={openModal}>
      <div className="gallery__card">
        <img src={country.image} alt="A street in Stockholm" />
        <span className="country-title">{country.country}</span>
      </div>
    </SwiperSlide>
  ));
