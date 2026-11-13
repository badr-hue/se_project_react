import { useEffect, useState } from "react";
import "./App.css";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import CurrentTemperatureUnitConext from "../../contexts/currentTemperatureUnitContext.jsx";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import { addItem, getItems, deleteItem } from "../../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: { F: 75, C: 25 },
    condition: "hot",
    type: "cold",
    icon: "sunny.svg",
    city: "",
    isDay: true,
  });

  const [clothingItems, setClothingItems] = useState([]);

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (inputValues) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    };
    addItem(newCardData)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal("");
      })
      .catch(console.error);
  };

  const handleDeleteCard = (cardId) => {
    deleteItem(cardId)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== cardId && item.id !== cardId)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    let isMounted = true;

    Promise.all([
      getWeather(coordinates, APIkey).then((data) => {
        if (isMounted) {
          const filteredData = filterWeatherData(data);
          setWeatherData(filteredData);
        }
      }),
      getItems().then((data) => {
        if (isMounted) {
          setClothingItems(data);
        }
      }),
    ]).catch(console.error);

    return () => {
      isMounted = false;
    };
  }, [coordinates, APIkey]);

useEffect(() => {
  const closeByEscape = (e) => {
    if (e.key === "Escape") {
      closeActiveModal();
    }
  };

  document.addEventListener("keydown", closeByEscape);

  return () => document.removeEventListener("keydown", closeByEscape);
}, []);

  return (
    <CurrentTemperatureUnitConext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
        </div>

        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItem={onAddItem}
        />

        <ItemModal
          title="Garment Preview"
          card={selectedCard}
          isOpen={activeModal === "preview"}
          onClose={closeActiveModal}
          onDelete={handleDeleteCard}
        />
        <Footer />
      </div>
    </CurrentTemperatureUnitConext.Provider>
  );
}

export default App;