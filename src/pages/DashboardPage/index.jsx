import 'jsvectormap/dist/css/jsvectormap.min.css';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import './style.css';
import { useEffect, useState } from 'react';
import { AddYourTripModal } from '../../components/AddYourTripModal';
import { DeleteTripModal } from '../../components/DeleteTripModal';

export const DashboardPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [countries, setCountries] = useState({});
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countryToDelete, setCountryToDelete] = useState(null);

  const createMap = (selectedCountries) => {
    document
      .querySelectorAll('.jvm-tooltip')
      .forEach((a) => a.parentElement.removeChild(a));

    const newMapDiv = document.createElement('div');
    newMapDiv.id = 'map';
    document.getElementById('map').replaceWith(newMapDiv);

    const selectedCodes = selectedCountries.map((country) => country.code);
    const map = new jsVectorMap({
      selector: '#map',
      map: 'world',
      showTooltip: true,
      regionStyle: {
        selected: { fill: 'rgba(219, 37, 37, 0.8)' },
        hover: { fill: 'rgba(219, 37, 37, 0.2 )' },
      },
      selectedRegions: selectedCodes,
      onRegionClick: (event, code) => {
        event.preventDefault();
        const clickedCountry = Object.entries(map.regions)
          .filter((c) => c[0] === code)
          .map((c) => Object.assign({}, { [code]: c[1] }));

        if (selectedCodes.includes(code)) {
          setCountryToDelete({
            code: code,
            name: clickedCountry[0][code].config.name,
          });
          setShowDeleteModal(true);
        } else {
          setCountries(clickedCountry[0]);
          setShowAddModal(true);
        }
      },
      onRegionTooltipShow: (event, tooltip, code) => {
        let text = `<p class="tooltip-country">${tooltip.text()}</p>`;

        if (selectedCodes.includes(code)) {
          const country = selectedCountries.filter((c) => c.code === code)[0];
          text += `<p>You spent here:</p><p>${country.days} days and $${country.money}</p>`;
        }

        tooltip.text(text, true);
      },
    });
    setCountries(map.regions);
    return map;
  };

  const onCountrySelect = (country, d, m) => {
    setShowAddModal(false);
    if (
      !country ||
      selectedCountries.map((country) => country.code).includes(country)
    ) {
      return;
    }

    const newSelectedCountries = [...selectedCountries];
    newSelectedCountries.push({ code: country, days: d, money: m });

    setSelectedCountries(newSelectedCountries);
    createMap(newSelectedCountries);
  };

  const totalDays = () => {
    let sum = 0;
    selectedCountries.forEach((country) => {
      sum += country.days;
    });
    return sum;
  };

  const totalMoney = () => {
    let sum = 0;
    selectedCountries.forEach((country) => {
      sum += country.money;
    });
    return sum;
  };

  const onAddClick = () => {
    setShowAddModal(true);
  };

  const onDeleteClick = (country, toDelete) => {
    setShowDeleteModal(false);

    if (toDelete === true) {
      const newSelectedCountries = selectedCountries.filter(
        (c) => c.code !== country,
      );
      setSelectedCountries(newSelectedCountries);
      createMap(newSelectedCountries);
    }
  };

  useEffect(() => {
    document.body.className = 'gray-background';
    createMap(selectedCountries);
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
          <p>{totalDays()}</p>
        </div>
        <div className="stats">
          <h3>Money spent:</h3>
          <p>${totalMoney()}</p>
        </div>
      </div>
      <button onClick={onAddClick} className="add">
        +
      </button>
      <AddYourTripModal
        countries={countries}
        onCountrySelect={onCountrySelect}
        show={showAddModal}
      />
      <DeleteTripModal
        country={countryToDelete}
        deleteFunction={onDeleteClick}
        show={showDeleteModal}
      />
    </div>
  );
};
