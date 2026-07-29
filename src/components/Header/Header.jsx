import './Header.css';
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header() {
  return (
    <header className="header">
     <img className="header__logo" src={logo} alt="Logo" />
     <p className="header__date-and-location">January 1, 2023 - New York, NY</p>
     <button className="header__add-clothes-btn">+ Add Clothes</button>
     <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
       <img className="header__avatar" src={avatar} alt="User Avatar" />
     </div>
    </header>
  );
}

export default Header;