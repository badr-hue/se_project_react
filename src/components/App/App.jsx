import { useEffect, useState } from "react";
import "./App.css";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData, getWeatherCondition } from "../../utils/weatherApi.js";
import { coordinates, APIkey, defaultClothingItems } from "../../utils/constants.js";


function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: { F: 75 },
    condition: "hot",
    type: "cold",
    icon: "sunny.svg",
    city: "",
  });

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

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
        <Main weatherData={weatherData} handleCardClick={handleCardClick} clothingItems={clothingItems} />
      </div>
      <ModalWithForm
      isOpen={activeModal === "add-garment"}
      title="New Garment"
      buttonText="Add Garment"
      onClose={closeActiveModal}
      />
      

      <ItemModal
        title="Garment Preview"
        card={selectedCard}
        isOpen={activeModal === "preview"}
        onClose={closeActiveModal}
      />
      <Footer />
    </div>
  );
}

export default App;
