import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOption } from "../../utils/constants.js";
import CurrentTemperatureUnitConext from "../../contexts/currentTemperatureUnitContext.jsx";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitConext);
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
      <p className="weather-card__temp">{currentTemperatureUnit === "F" ? weatherData.temperature.F : weatherData.temperature.C} &deg; {currentTemperatureUnit}</p>
      <img
        src={weatherOptionUrl}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"}time for ${weatherOptionCondition}`}
        className="weather-card__image"
      />
     </section>
  );
}

export default WeatherCard;
