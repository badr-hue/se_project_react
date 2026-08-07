import { useEffect, useState } from "react";
import "./App.css";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import { filterWeatherData } from "../../utils/weatherApi.js";
import { getWeatherCondition } from "../../utils/weatherApi.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: { F: 75 },
    condition: "hot",
    type: "cold",
    icon: "sunny.svg",
    city: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    // Fetch weather data from the API and update the state
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
      </div>
      <ModalWithForm
        title="New Garment"
        onClose={() => setActiveModal("")}
        buttonText="Add Garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      />
      {/*      <p>This is the modal content.</p>
      </ModalWithForm> */}

      <ItemModal
        title="Garment Preview"
        card={selectedCard}
        activeModal={activeModal}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
