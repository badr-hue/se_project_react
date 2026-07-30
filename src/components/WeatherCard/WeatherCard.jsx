import './WeatherCard.css';
import sunny from "../../assets/sunny.svg";

function WeatherCard() {
  return (
    <section className="weather-card">
        <p className="weather-card__temp">75 &deg; F</p>
        <img src={sunny} alt="Sunny" className="weather-card__image" />
      <h2>Weather Card</h2>
      <p>This is a weather card component.</p>
    </section>
  );
}

export default WeatherCard;