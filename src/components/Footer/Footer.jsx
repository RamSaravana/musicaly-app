import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerLogo">
          <img
            className="navbarLogo"
            src="android-chrome-192x192.png"
            alt="logo"
            width="30"
            height="30"
          />
          <h3 className="navbarName"> Musicaly.io </h3>
        </div>
        <div className="footerDetails">
          This Project is for Educational Purpose done by{" "}
          <a
            className="anchorTag"
            href="https://www.linkedin.com/in/ramsaravanaraja">
            RamSaravanaRaja
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
