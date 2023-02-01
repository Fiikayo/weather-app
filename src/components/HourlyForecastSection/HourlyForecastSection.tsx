import React from 'react';
import DailyWeather from './HourlyWeather/HourlyWeather';
import './HourlyForecastSection.scss';
type Props = {};
const hourlyForecast = [
  { id: '1', time: 'Now', icon: 'moon', temperature: '-16' },
  { id: '2', time: '9PM', icon: 'moon', temperature: '-16' },
  { id: '3', time: '10PM', icon: 'moon', temperature: '-18' },
  { id: '4', time: '11PM', icon: 'moon', temperature: '-19' },
  { id: '5', time: '12PM', icon: 'moon', temperature: '-20' },
];
const displayHourlyForecast = hourlyForecast.map((forecast) => (
  <DailyWeather
    key={forecast.id}
    time={forecast.time}
    icon={forecast.icon}
    temperature={forecast.temperature}
  />
));
const HourlyForecastSection = (props: Props) => {
  return (
    <div className="hourlyForecastSection">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque eveniet ex error</p>
      <div className="forecast">{displayHourlyForecast}</div>
    </div>
  );
};

export default HourlyForecastSection;
