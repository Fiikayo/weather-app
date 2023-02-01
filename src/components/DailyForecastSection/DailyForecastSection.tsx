import React from 'react';
import DailyForecast from './DailyForecast/DailyForecast';
import './DailyForecastSection.scss';
type Props = {};

const DailyForecastSection = (props: Props) => {
  return (
    <div className="dailyForecastSection">
      <h5>10-DAY FORECAST</h5>
      <div className="forecast">
        <DailyForecast day="Today" icon="sunny" high="-8" low="-20" />
      </div>
    </div>
  );
};

export default DailyForecastSection;
