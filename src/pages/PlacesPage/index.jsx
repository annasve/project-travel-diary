import './style.css';
import { useEffect } from 'react';
import SwedenImg from './img/sweden-640.jpg';

export const PlacesPage = () => {
  useEffect(() => {
    document.body.className = 'places-background';
  }, []);

  return (
    <div className="places-page">
      <h2>Places page</h2>
      <div className="gallery__container">
        <div className="gallery__card">
          <img src={SwedenImg} alt="A street in Stockholm" />
          <span className="country-title">Sweden</span>
        </div>

        <div className="gallery__card">
          <img src={SwedenImg} alt="A street in Stockholm" />
          <span className="country-title">Czech Republic</span>
        </div>

        <div className="gallery__card">
          <img src={SwedenImg} alt="A street in Stockholm" />
          <span className="country-title">Denmark</span>
        </div>
      </div>
    </div>
  );
};
