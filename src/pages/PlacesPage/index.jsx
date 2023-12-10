import './style.css';
import { useEffect, useState } from 'react';

import { PlaceDetailModal } from '../../components/PlaceDetailModal';

//----------
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Scrollbar } from 'swiper/modules';
//----------

const backendApi = import.meta.env.VITE_BACKEND_API_URL;
//locally set in .env to http://localhost:3000 and in project's Vercel  settings it's set to the address of the API repo running on Vercel

export const PlacesPage = () => {
  const [countries, setCountries] = useState([]);
  const [isModalClosed, setIsModalClosed] = useState(true);
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    document.body.className = 'places-background';
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 700);
    });

    //country data from our api
    const fetchCountriesInfo = async () => {
      const response = await fetch(`${backendApi}/countriesinfo`);

      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
      setCountry(data[0]);
      if (!response.ok) {
        console.log(
          'Sorry, the server cannot fetch information about the countries. Countries are unable to travel to your destination :/',
        );
      }
    };

    fetchCountriesInfo();
  }, []);

  //functions for opening and closing the modal
  const openModal = (id) => () => {
    setIsModalClosed(false);
    setCountry(countries[id]);
  };

  const closeModal = () => {
    setIsModalClosed(true);
  };

  return isLoading ? null : (
    <div className="container--temp">
      <Swiper
        slidesPerView={isMobile ? 2 : 5}
        spaceBetween={isMobile ? 0 : 80}
        mousewheel={true}
        centeredSlides={true}
        loop={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        {countries.map((country) => (
          <SwiperSlide key={country.id} onClick={openModal(country.id)}>
            <div className={'gallery__card'}>
              <img src={country.image} alt="Image is loading" />
              <span className="country-title">{country.country}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <PlaceDetailModal
        key={country.id}
        countries={countries}
        isModalClosed={isModalClosed}
        closeModal={closeModal}
        currentCountry={country}
      />
    </div>
  );
};
