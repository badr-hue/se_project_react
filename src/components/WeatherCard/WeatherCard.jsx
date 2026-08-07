import './WeatherCard.css';
import {weatherOptions} from '../../utils/constants.js';



function WeatherCard({ weatherData }) {

 const weatherOption = weatherOptions.find(
  (option) =>
    option.day === weatherData.isDay &&
    option.condition === weatherData.condition
);

const weatherOptionUrl = weatherOption?.url;
const weatherOptionCondition = weatherOption?.condition;

  return (
    <section className="weather-card" >
        <p className="weather-card__temp">{weatherData.temperature.F} &deg; F</p>
        <img src={weatherOptionUrl} alt={weatherOptionCondition} className="weather-card__image" />
      <h2>Weather Card</h2>
      <p>This is a weather card component.</p>
    </section>
  );
}

export default WeatherCard;