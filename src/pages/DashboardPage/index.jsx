import './style.css';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { useEffect, useState } from 'react';
import { AddYourTripModal } from '../../components/AddYourTripModal';

export const DashboardPage = () => {
  let map;
  const [showModal, setShowModal] = useState(false);
  const [countries, setCountries] = useState({});
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [days, setDays] = useState(0);
  const [money, setMoney] = useState(0);

  const createMap = (selectedCountries) => {
    const map = new jsVectorMap({
      selector: '#map',
      map: 'world',
      showTooltip: false,
      regionStyle: {
        selected: { fill: 'rgba(219, 37, 37, 0.8)' },
        hover: { fill: 'rgba(219, 37, 37, 0.2 )' },
      },
      selectedRegions: selectedCountries,
      onRegionClick: (event, code) => {
        if (selectedCountries.includes(code)) {
          return;
        }

        const clickedCountry = Object.entries(map.regions)
          .filter((c) => c[0] === code)
          .map((c) => Object.assign({}, { [code]: c[1] }));

        setCountries(clickedCountry[0]);
        setShowModal(true);
      },
    });
    setCountries(map.regions);
    return map;
  };

  const onCountrySelect = (country, d, m) => {
    setShowModal(false);
    if (!country || selectedCountries.includes(country)) {
      document.getElementById('map').replaceChildren();
      map = createMap(selectedCountries);
      return;
    }
    const newSelectedCountries = [...selectedCountries];
    newSelectedCountries.push(country);

    setSelectedCountries(newSelectedCountries);
    setDays(days + d);
    setMoney(money + m);

    document.getElementById('map').replaceChildren();
    map = createMap(newSelectedCountries);
  };

  const onAddClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    document.body.className = 'gray-background';
    map = createMap(selectedCountries);
  }, []);

  return (
    <div className="dashboard">
      <div id="map"></div>
      <div className="statistics">
        <div className="stats">
          <h3>Countries visited:</h3>
          <p>{selectedCountries.length}</p>
        </div>
        <div className="stats">
          <h3>Days spent:</h3>
          <p>{days}</p>
        </div>
        <div className="stats">
          <h3>Money spent:</h3>
          <p>${money}</p>
        </div>
      </div>
      <button onClick={onAddClick} className="add">
        +
      </button>
      <AddYourTripModal
        countries={countries}
        onCountrySelect={onCountrySelect}
        show={showModal}
      />
    </div>
  );
};
