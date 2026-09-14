import './ToggleSwitch.css';
import { useContext } from 'react';
import CurrentTemperatureUnitConext from '../../contexts/currentTemperatureUnitContext';

export default function ToggleSwitch(/* { isChecked, onToggle } */) {
  const {currentTemperatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitConext);
return <label className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          /* checked={isChecked}*/
          onChange={handleToggleSwitchChange} 
        />
        <span className="toggle-switch__circle"></span>
        <span className={`toggle-switch__text toggle-switch__text_F ${ currentTemperatureUnit === "F" ? "toggle-switch__text_color_white":""}`}>F</span>
        <span className={`toggle-switch__text toggle-switch__text_C ${ currentTemperatureUnit === "C" ? "toggle-switch__text_color_white":""}`}>C</span>
        
      </label>;
}