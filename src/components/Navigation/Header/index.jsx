import React from "react";
import { Link } from "react-router-dom";

import './header.css'
const Header = () => {
    return (
      <nav className="navigation">
          <Link className="navigation__link" to="/"> Home</Link>
          <Link className="navigation__link" to="/lists"> My Lists</Link>
      </nav>
    );
  };
  
  export default Header;