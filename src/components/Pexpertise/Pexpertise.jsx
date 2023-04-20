import React from 'react';
import "./Pexpertise.css";
import picto1 from "../../assets/picto4.svg";
import picto2 from "../../assets/picto5.svg";
import picto3 from "../../assets/picto6.svg";

const Expertise = () => {
  return (
    <section className='expert-section'>
      
      <div className="wrapper">
        <h1 className="presta-branding expertise-brand">dl refrigeration</h1>
        <h2 className="brand-tag">Notre Expertise</h2>

        <div className="expert-items">
        
        
        <div>
        
        <img src={picto1} alt="Savoir faire icon" />
        <h2>Savoir-Faire</h2>
        <p>Spécialiste en réfrigération.<br />Travaux effectués par des techniciens<br /> frigoristes qualifiés et expérimentés. </p>
        
        </div>
        
        <div>
        
        <img src={picto2} alt="Service client icon" />
        <h2>Service Client</h2>
        <p>Réactif et intervention rapide.<br />Disponible pour suivre vos projets<br /> après leur réalisation.</p>
        
        </div>
        
        <div>
        
        <img src={picto3} alt="Equipement de qualite icon" />
        <h2>Équipement Qualitatifs</h2>
        <p>Équipements réfrigérés<br /> de qualité à des prix étudiés.<br />Devis gratuit pour vos projets.</p>
        
        </div>

      </div>

      </div>

    </section>
  )
}

export default Expertise
