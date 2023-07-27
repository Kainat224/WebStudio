import React from "react";
import footerLogo from "../images/footerLogo.svg";
import "../App.css";

const Footer = () => {
  return (
    <footer className="container-fluid footerStyling">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src={footerLogo} alt="WebStudio" className="mb-4" />
            <p>г. Киев, пр-т Леси Украинки, 26</p>
            <a href="mailto:info@devstudio.com" className="footerEmail">
              info@devstudio.com
            </a>
            <br />
            <a href="tel:+38 096 111 11 11">+38 096 111 11 11</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
