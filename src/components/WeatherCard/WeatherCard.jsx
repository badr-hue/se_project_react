import './WeatherCard.css';
import sunny from "../../assets/sunny.svg";
import {weatherData} from "../../utils/constants.js";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card" weatherData={weatherData}>
        <p className="weather-card__temp">{weatherData.temperature} &deg; F</p>
        <img src={sunny} alt="Sunny" className="weather-card__image" />
      <h2>Weather Card</h2>
      <p>This is a weather card component.</p>
    </section>
  );
}

export default WeatherCard;