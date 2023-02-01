import React from 'react';
import './HourlyWeather.scss';
type Props = {
  time: string;
  icon: string;
  temperature: string;
};

const HourlyWeather = ({ time, icon, temperature }: Props) => {
  return (
    <div className="hourlyWeather">
      <h3 className="time">{time}</h3>
      <h3>{icon}</h3>
      <h3>{temperature}°</h3>
    </div>
  );
};

export default HourlyWeather;
