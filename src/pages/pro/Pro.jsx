import React from 'react'
import "./Pro.css";
import {Footer, Prohead} from "../../components"
import clim from "../../assets/proclim.svg";
import froid from "../../assets/profroid.svg";


const pro = () => {
  return (
    <div>
      <Prohead />
      
      <div className="wapper">
      
      <div className="pro-items">

      <div className="pro-1">
      <img src={clim} alt="climatisation icon" />
      <h1>climatisation</h1>
      <p>Bénéficiez d’un savoir-faire de techniciens expérimentés et d’un travail sur-mesure.</p>
      <a href="#">En savoir plus</a>
      </div>
      
      <div className="pro-2">
      <img src={froid} alt="froid commercial icon" />
      <h1>froid commercial</h1>
      <p>Faites des économies d’énergie avec des installations qualitatives.</p>
      <a href="#">En savoir plus</a>
      </div>

      </div>
      
      </div>
      
      <Footer />
    </div>
  )
}

export default pro
