import { useState } from 'react';
import './App.css'
import Main from '../Main/Main.jsx';
import Header from '../Header/Header.jsx';

function App() {
  
  const [weatherData, setWeatherData] = useState({
    temperature: 75,
    condition: 'hot',
    icon: 'sunny.svg',
  });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        
      </div>
    </div>
  )
}

export default App
