import './style.css';
import { useEffect, useState } from 'react';

import { PlaceDetailModal } from '../../components/PlaceDetailModal';

//----------
//swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import { Pagination } from 'swiper/modules';
// import 'swiper/css/pagination';
import { Scrollbar } from 'swiper/modules';

//----------

export const PlacesPage = () => {
  const [countries, setCountries] = useState([]);
  const [isModalClosed, setIsModalClosed] = useState(true);
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log('countries from PlacesPage', countries);
  useEffect(() => {
    document.body.className = 'places-background';

    //country data from our api
    const fetchCountriesInfo = async () => {
      const response = await fetch('http://localhost:4000/api/countriesinfo');
      const data = await response.json();
      setCountries(data.result);
      setIsLoading(false);
      setCountry(data.result[0]);
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
    console.log('id od country', id);
  };

  const closeModal = () => {
    setIsModalClosed(true);
  };

  console.log(country, isLoading);

  return isLoading ? null : (
    <div className="container--temp">
      <Swiper
        slidesPerView={3}
        //media  - fce isMobiledevice vrací t/f 1 nebo 3 slidy
        // spaceBetween={150}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {countries.map((country) => (
          <SwiperSlide key={country.id} onClick={openModal(country.id)}>
            <div className="gallery__card">
              <img src={country.image} alt="A street in Stockholm" />
              <span className="country-title">{country.country}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <PlaceDetailModal
        countries={countries}
        isModalClosed={isModalClosed}
        closeModal={closeModal}
        currentCountry={country}
      />
    </div>
  );
};
