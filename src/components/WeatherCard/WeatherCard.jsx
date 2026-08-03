import './WeatherCard.css';
import sunny from "../../assets/sunny.svg";


function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card" >
        <p className="weather-card__temp">{weatherData.temperature.F} &deg; F</p>
        <img src={sunny} alt="Sunny" className="weather-card__image" />
      <h2>Weather Card</h2>
      <p>This is a weather card component.</p>
    </section>
  );
}

export default WeatherCard;