import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbarWrapper">
          <div className="topLeft">
            <img
              className="navbarLogo"
              src="android-chrome-192x192.png"
              alt="logo"
              width="50"
              height="50"
            />
            <h1 className="navbarName"> Musicaly </h1>
          </div>
          <div className="topRight">
            <button className="like-btn">🕺💃</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
