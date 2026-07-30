import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard.jsx';

function Main() {
  return (
    <main className="main">
      <h1>Main Component</h1>
      <p>This is the main content area.</p>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
        {/*add your cards here*/}
      </section>
    </main>
    
  );
}

export default Main;