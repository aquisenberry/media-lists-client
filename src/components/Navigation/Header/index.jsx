import React from "react";
import { Link } from "react-router-dom";

import './header.css'
const Header = () => {
    return (
      <nav className="navigation">
          <Link className="navigation__link" to="/"> Home</Link>
          <Link className="navigation__link" to="/lists"> My Lists</Link>
          <Link className="navigation__link" to="/search"> Search Media</Link>
      </nav>
    );
  };
  
  export default Header;