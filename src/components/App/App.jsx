import { useState } from 'react';
import './App.css'
import Main from '../Main/Main.jsx';
import Header from '../Header/Header.jsx';
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx';

function App() {
  
  const [weatherData, setWeatherData] = useState({
    temperature: 75,
    condition: 'hot',
    icon: 'sunny.svg',
  });

  const [activeModal, setActiveModal] = useState("");

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
        <Main weatherData={weatherData}  />
        
      </div>
       <ModalWithForm
       title="New Garment"
       onClose={() => setActiveModal("")}
       buttonText="Add Garment"
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      /> 
   {/*      <p>This is the modal content.</p>
      </ModalWithForm> */}
    </div>
  )
}

export default App
