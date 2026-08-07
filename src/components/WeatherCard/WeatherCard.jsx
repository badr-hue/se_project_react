import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOption } from "../../utils/constants.js";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.find(
    (option) =>
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition,
  );

  const weatherOptionUrl = weatherOption
    ? weatherOption.url
    : weatherData.isDay
      ? defaultWeatherOption.day.url
      : defaultWeatherOption.night.url;

  const weatherOptionCondition = weatherOption?.condition || "default";

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temperature.F} &deg; F</p>
      <img
        src={weatherOptionUrl}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"}time for ${weatherOptionCondition}`}
        className="weather-card__image"
      />
      <h2>Weather Card</h2>
      <p>This is a weather card component.</p>
    </section>
  );
}

export default WeatherCard;
