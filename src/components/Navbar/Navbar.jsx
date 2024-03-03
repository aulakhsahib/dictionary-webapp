import "./Navbar.css";
import logoImg from "../../assets/images/logo.svg";

import FontDropdown from "../FontDropdown/FontDropdown.jsx";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logoImg} alt="" />
      <FontDropdown className="nav-fontdropdown"/>
      <div className="toggle--icon-container">
        <div className="navbar-theme-toggle-container">
          <input
            type="checkbox"
            name="color-theme-toggle"
            id="color-theme-toggle"
            className="color-theme-toggle"
          />
          <label htmlFor="color-theme-toggle"></label>
          <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
        </div>
      </div>
    </nav>
  );
}
