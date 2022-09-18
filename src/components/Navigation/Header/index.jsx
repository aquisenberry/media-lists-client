import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/media-lists-logo.png"
import './header.css'
const Header = () => {
    return (
      <>
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo"/>
      </div>
      <nav className="navigation">
          <Link className="navigation__link" to="/"> Home</Link>
          <Link className="navigation__link" to="/lists"> My Lists</Link>
          <Link className="navigation__link" to="/search"> Search Media</Link>
      </nav>
      </>
    );
  };
  
  export default Header;