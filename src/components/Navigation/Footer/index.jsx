import React from "react";
import { Link } from "react-router-dom";

import './_styles.css'
//  TODO: Refactor to accept a list of pages and copy
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__link-container">
          <Link className="footer__link" to="/"> Home</Link>
          <Link className="footer__link" to="/lists"> My Lists</Link>
          <Link className="navigation__link" to="/search"> Search Media</Link>
        </div>
        <div className="footer__legal-container">
          <p className="footer__legal">This is legal copy</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;