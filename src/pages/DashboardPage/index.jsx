import './style.css';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { useEffect } from 'react';

export const DashboardPage = () => {
  useEffect(() => {
    const map = new jsVectorMap({
      selector: '#map',
      map: 'world',
      showTooltip: false,
      regionStyle: {
        selected: { fill: 'rgba(219, 37, 37, 0.8)' },
        hover: { fill: 'rgba(219, 37, 37, 0.2 )' },
      },
      selectedRegions: ['EG', 'US'],
    });
  }, []);

  return (
    <div className="dashboard">
      <div id="map"></div>
      <div className="statistics">
        <div className="stats">
          <h3>Countries visited:</h3>
          <p>23</p>
        </div>
        <div className="stats">
          <h3>Days spent:</h3>
          <p>130</p>
        </div>
        <div className="stats">
          <h3>Money spent:</h3>
          <p>$3500</p>
        </div>
      </div>
      <button className="add">+</button>
    </div>
  );
};
