import './Main.css';
import {defaultClothingItems} from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";


function Main({ weatherData, handleCardClick }) {
  return (
    <main className="main" >
      <h1>Main Component</h1>
      <p>This is the main content area.</p>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">Today is {weatherData.temperature.F} &deg; F / You may want to wear:</p>
        <ul className="cards__list">
          {defaultClothingItems.filter((item) => {return item.weather === weatherData.type}).map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={handleCardClick} />
          ))}
        </ul>
      </section>
    </main>
    
  );
}

export default Main;