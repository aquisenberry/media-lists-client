import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/media-lists-logo.png"
import './_styles.css'
// TODO: Refactor to accept a list of pages and a logo
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="Logo"/>
        </div>
        <nav className="navigation">
            <Link className="navigation__link" to="/"> Home</Link>
            <Link className="navigation__link" to="/lists"> My Lists</Link>
            <Link className="navigation__link" to="/search"> Search Media</Link>
        </nav>
      </div>
    );
  };
  
  export default Header;