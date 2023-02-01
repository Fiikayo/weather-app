import React from 'react';
import './WeatherHeader.scss';
type Props = {
  location: string;
  temperature: string;
  conditions: string;
  high: string;
  low: string;
};

const WeatherHeader = ({ location, temperature, conditions, high, low }: Props) => {
  return (
    <div className="weatherHeader">
      <h3>{location}</h3>
      <h2>{temperature}°</h2>
      <p>{conditions}</p>
      <div className="highAndLow">
        <p>H:{high}°</p>
        <p>L:{low}°</p>
      </div>
    </div>
  );
};

export default WeatherHeader;
