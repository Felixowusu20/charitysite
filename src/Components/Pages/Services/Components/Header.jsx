import React from "react";
import Offers from "./Offers";
import Navtab from "../../../NavBar/Navtab";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header-container">
        <h3 className="header-subtitle">Back Businesses</h3>
        <h1 className="header-title">Recommended for You - Fresh Projects</h1>
        <div className="offers">
          <Offers />
        </div>
      </div>
    </div>
  );
};

export default Header;
