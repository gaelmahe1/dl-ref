import React from "react";
import "./Footer.css";
import google from "../../assets/google.svg";
import logo from "../../assets/logofooter.svg";
import mail from "../../assets/fmail.svg";
import phone from "../../assets/fphone.svg";
import location from "../../assets/flocation.svg";

const Footer = () => {
  return (
    <footer className="blue">
      <div className="wrapper">
        <div className="content-container">
          <div className="logof">
            <a href="#">
              <img src={logo} alt="Footer Logo" />
            </a>
          </div>

          <div className="links">
            <div className="social">
              <a href="#">
                <img src={phone} alt="Phone icon" />
                <p>+33 (0) 1 60 29 68 42</p>
              </a>
              <a href="#">
                <img src={mail} alt="Mail icon" />
                <p>dliquet@dl-refrigeration.com</p>
              </a>
              <a href="#">
                <img src={location} alt="Location icon" />
                <p>
                  27/29 Av. Charles Allain,
                  <br />
                  77340 Pontault-Combault
                </p>
              </a>
            </div>

            <div className="menuf">
              <ul>
                <li>Particulier</li>
                <li>Professionnel</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="review">
              <a href="#">
                <img src={google} alt="Donner votre avis" />
              </a>
              <h3>VOTRE AVIS NOUS INTÉRESSE</h3>
              <p>
                © 2023 - DL Réfrigération - Tout droits réservés
                <br />
                Conception : zouzcom
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
