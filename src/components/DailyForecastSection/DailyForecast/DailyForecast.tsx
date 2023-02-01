import React from 'react';
import './DailyForecast.scss';
type Props = {
  day: string;
  icon: string;
  high: string;
  low: string;
};

const DailyForecast = ({ day, icon, high, low }: Props) => {
  return (
    <div className="dailyForecast">
      <h3>{day}</h3>
      <div>{icon}</div>
      <h3>{low}°</h3>
      <div>insert chart</div>
      <h3>{high}°</h3>
    </div>
  );
};

export default DailyForecast;
