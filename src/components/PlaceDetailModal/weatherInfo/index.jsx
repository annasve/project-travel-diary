import './style.css';
import React, { useState, useEffect } from 'react';

export const WeatherInfo = ({ capitalCity }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherConditionIcon, setWeatherConditionIcon] = useState('');
  const apiKey = 'ad6d5736e6753aef2b5eaf2d977b0d93';
  // const city = { capitalCity };
  const city = 'Stockholm';
  console.log(weatherData); //for testing
  console.log(weatherConditionIcon); //for testing

  //---------date / dayNumber

  const currentDay = () => {
    const weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();
    console.log(currentDate);
    const dayNumber = currentDate.getDay(); // number like 5 etc.
    console.log(dayNumber);
    const todayFinal = weekDays[dayNumber];
    console.log(todayFinal);

    return todayFinal;
  };
  //-------------

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setWeatherData(data);

        //weather icon from API
        const weatherIcon = data.weather[0].icon;
        setWeatherConditionIcon(weatherIcon);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [apiKey, city]);

  return (
    <div>
      {weatherData && (
        <div className="weather-container">
          <div className="image-container">
            <img
              src={`https://openweathermap.org/img/wn/${weatherConditionIcon}@2x.png`}
              alt=""
            />
          </div>
          <div className="text-container">
            <p className="weather__city">{weatherData.name}</p>
            <p className="weather__day">{currentDay()}</p>
            <p className="weather__temperature">
              {Math.round(weatherData.main.temp)} °C
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
