import React from 'react'
import "./Zone.css";
import map from "../../assets/carte.svg";

const Zone = () => {
  return (
    <section>
        <div className="wrapper">
        
        <h1 className="presta-branding zone-brand">dl refrigeration</h1>
        <h2 className="brand-tag">Zone D'interventions</h2>

        <div className="zone-items">
            <div className="zone-text">
            <p>DL Réfrigération propose ses services pour <span>les particuliers et les professionnels.</span></p>
            <p>Spécialistes en installations réfrigérées, nos techniciens expérimentés<br/> interviennent en <span>Île-de-France et dans l’Oise.</span></p>
            <p>Nous réalisons un <span>devis gratuit</span> puis planifions l’intervention en fonction de vos<br/> disponibilités.</p>
            </div>
            <div className="zone-img">
                <img src={map} alt="Les zone sur une carte" />
            </div>
        </div>
        
        </div>
    </section>
  )
}

export default Zone
