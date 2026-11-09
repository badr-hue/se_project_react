import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import { useState, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import {NavLink} from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img className="header__logo" src={logo} alt="Logo" />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate} - {weatherData.city}
      </p>
      
      <ToggleSwitch isChecked={weatherData.type === "hot"} onToggle={() => {}} />
      <button
        type="button"
        className="header__add-clothes-btn"
        onClick={handleAddClick}
      >
        
        + Add Clothes
      </button>
      <NavLink to="/profile" className="header__profile-link">
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img className="header__avatar" src={avatar} alt="User Avatar" />
      </div>
      </NavLink>
    </header>
  );
}

export default Header;
