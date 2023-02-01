import React from 'react';
import WeatherHeader from './WeatherHeader/WeatherHeader';
import HourlyForecastSection from './HourlyForecastSection/HourlyForecastSection';
import DailyForecastSection from './DailyForecastSection/DailyForecastSection';
import './Home.scss';
const Home = () => {
  return (
    <div className="container">
      <div className="searchSection">
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <WeatherHeader location="Montreal" temperature="-15" conditions="Clear" high="-8" low="-20" />
      <div className="forecastSection">
        <HourlyForecastSection />
        <DailyForecastSection />
      </div>
    </div>
  );
};

export default Home;
