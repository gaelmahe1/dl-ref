import React from 'react'
import "./Pheader.css";

const Pheader = () => {
  return (
    <header className="Pheader">
        <div className="wrapper">
        <div className="phead">
        <h1 className="pbranding">dl refrigeration</h1>
        <h2 className="tag">Climatisation & <br></br>Froid commercial</h2>
        <p className="ptag">Conception Installation Maintenance</p>
        <p className="ptext">Spécialiste dans les installations, <span>systèmes de climatisation et de chauffage</span> pour votre appartement/maison.<br/>DL Réfrigération intervient de la conception (étude de vos besoins en fonction de votre habitation) à la maintenance en passant par l’installation de réseaux de climatisation sur-mesure. Toutes les installations de climatisation et de pompe à chaleur sont réversibles. <span>Système très économique en mode chauffage.</span></p>
        </div>
      </div>
      
    </header>
  )
}

export default Pheader
