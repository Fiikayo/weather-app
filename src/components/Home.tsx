import React from 'react';
import WeatherHeader from './WeatherHeader/WeatherHeader';
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
    </div>
  );
};

export default Home;
