import './style.css';
import SwedenImg from '../../pages/PlacesPage/img/sweden-640.jpg';
import closeBlackBtn from './close-black-vector.png';
import { useState } from 'react';
import { WeatherInfo } from './weatherInfo';

const PlacesArray = [
  {
    id: 0,
    image: 'imgUrl', // You can replace "imgUrl" with the actual URL of the image
    country: 'Sweden',
    countryOverview: {
      capital: 'Stockholm',
      population: '10.5 million',
      officialLanguage: 'Swedish',
      currency: 'Swedish Krona (SEK)',
      timeZone: 'Central European Time (CET)',
    },
    culturalHighlights:
      "Sweden is known for its rich cultural heritage, including traditions like Midsummer's Eve (Midsommar) and the concept of fika, a coffee break often accompanied by pastries.",
    popularDestinations: [
      'Icehotel in Jukkasjärvi',
      'Medieval town of Visby',
      'Abisko National Park for northern lights viewing',
    ],
  },
];
const countryOverview = PlacesArray[0].countryOverview;
console.log(countryOverview.capital);

export const PlaceDetailModal = ({ isModalClosed, closeModal }) => {
  // const [isModalClosed, setIsModalClosed] = useState(false);
  // console.log(isModalClosed);

  // const handleClick = () => {
  //   setIsModalClosed(true);
  // };

  return (
    <div
      className={isModalClosed ? 'hidden modal__container' : 'modal__container'}
    >
      <img className="place__image" src={SwedenImg} alt="" />
      <section className="description">
        <button onClick={closeModal} className="closeBtn">
          <img src={closeBlackBtn} alt="close" />
        </button>

        <section className="description__country-overview">
          <div className="description__header">
            <h2>{PlacesArray[0].country}</h2>
            <h3>Country Overview</h3>
          </div>

          <div className="description__sections">
            <section className="country-info">
              <span className="subheading">capital</span>
              <p>{countryOverview.capital}</p>
            </section>

            <section className="country-info">
              <span className="subheading">population</span>
              <p>{countryOverview.population}</p>
            </section>

            <section className="country-info">
              <span className="subheading">currency</span>
              <p>{countryOverview.currency}</p>
            </section>

            <section className="country-info">
              <span className="subheading">official language</span>
              <p>{countryOverview.officialLanguage}</p>
            </section>
          </div>
        </section>
        <section className="description__cultural-highlights">
          <h3>Cultural Highlights</h3>
          <p className="description__info">
            {PlacesArray[0].culturalHighlights}
          </p>
        </section>
        <section className="description__popular-destinations">
          <h3>Popular Destinations</h3>
          <p className="description__info">
            {PlacesArray[0].popularDestinations}
          </p>
        </section>
        <section className="description__weather">
          <h3>Weather now</h3>
          <WeatherInfo capitalCity="Stockholm" />
        </section>
      </section>
    </div>
  );
};
