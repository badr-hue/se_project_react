import { useState } from 'react';
import './App.css'
import Main from '../Main/Main.jsx';
import Header from '../Header/Header.jsx';
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';
import ItemModal from '../ItemModal/ItemModal.jsx';

function App() {
  
  const [weatherData, setWeatherData] = useState({
    temperature: 75,
    condition: 'hot',
    icon: 'sunny.svg',
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  const handleAddClick = () => {
    setActiveModal("add-garment");
  }

  const closeActiveModal = () => {
    setActiveModal("");
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
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
  )
}

export default App
