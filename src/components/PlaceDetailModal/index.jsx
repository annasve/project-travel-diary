import './style.css';
import SwedenImg from '../../pages/PlacesPage/img/sweden-640.jpg';
import closeBlackBtn from './close-black-vector.png';
import { WeatherInfo } from './weatherInfo';

export const PlaceDetailModal = ({
  isModalClosed,
  closeModal,
  currentCountry,
}) => {
  console.log('one country from the modal', currentCountry);
  const { countryOverview } = currentCountry;

  return (
    <div
      className={isModalClosed ? 'hidden modal__container' : 'modal__container'}
    >
      <img className="place__image" src={currentCountry.image} alt="" />

      <section className="description">
        <button onClick={closeModal} className="closeBtn">
          <img src={closeBlackBtn} alt="close" />
        </button>

        <section className="description__country-overview">
          <div className="description__header">
            <h2>{currentCountry.country}</h2>
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
            {currentCountry.culturalHighlights}
          </p>
        </section>
        <section className="description__popular-destinations">
          <h3>Popular Destinations</h3>
          <p className="description__info">
            {currentCountry.popularDestinations}
          </p>
        </section>

        <section className="description__weather">
          <h3>Weather now</h3>
          <WeatherInfo capitalCity={countryOverview.capital} />
        </section>
      </section>
    </div>
  );
};
