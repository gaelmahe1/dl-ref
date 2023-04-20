import React from 'react'
import "./Pinstall.css";

import p1 from "../../assets/p-1.svg";
import p2 from "../../assets/p-2.svg";
import p3 from "../../assets/p-3.svg";
import mono from "../../assets/mono.svg";
import multi from "../../assets/multi.svg";

const Pinstall = () => {
  return (
    <div className='pinstall-section'>
        <div className="wrapper">

        <h1 className=" partenaire-brand">dl refrigeration</h1>
        <h2 className="brand-tag">Exemple D'installations</h2>


        <div className="pinstall-items">
        
        <div className="pinstall-1">
        
            <img src={p1} alt="Pompe a chaleur" />
            <h1>pompe à chaleur</h1>
            <p>Économie d’énergie en réutilisant<br/>l’air extérieur.</p>
        
        </div>
        
        <div className="pinstall-2">
            <div className="box">
            <img src={p2} alt="Mono split reversible" />
            <img className="hover-img" src={mono} alt="Mono split reversible exemple" />
            </div>
            <h1>mono split réversible</h1>
            <p>Conception d’une seule salle climatisée.</p>
        
        </div>
        
        <div className="pinstall-3">
            <div className="box">
            <img src={p3} alt="MonoMulti split reversible" />
            <img className='hover-img' src={multi} alt="MonoMulti split reversible exemple" />
            </div>
            <h1>multi split réversible</h1>
            <p>Installation de groupes de climatisation<br/>sur-mesure pour l’ensemble de votre<br/>logement. </p>
        
        </div>
        </div>
        <a href="#" className="contactez-nous">contactez-nous pour en savoir plus</a>
        </div>
      
    </div>
  )
}

export default Pinstall
