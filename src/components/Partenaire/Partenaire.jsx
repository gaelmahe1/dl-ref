import React from 'react'
import "./Partenaire.css";
import toshiba from "../../assets/toshiba.svg";
import fuji from "../../assets/fuji.svg";
import atlantic from "../../assets/atlantic.svg";
import pdf from "../../assets/atlatic.pdf";

const Partenaire = () => {
  return (
    <section className="partenaire-banner">
        <div className="wrapper">
       
       
        <div className="partenaire-item">

        <div className="part-text">
        <h1 className=" partenaire-brand">dl refrigeration</h1>
        <h2 className="brand-tag">Nos Partenaires</h2>

        <p>DL Réfrigération s’appuie sur une expertise de professionnels, celles de <span>fabricants de référence.</span></p>
        </div>
        
        
        <div className="part-images">
          <a href="https://toshiba-confort.fr/" target="_blank"><img src={toshiba} alt="toshiba logo" /></a>
          
          <a href={pdf} target="_blank"><img src={atlantic} alt="atlantic logo" /></a>
          
          <a href="https://www.fujitsu-general.com/fr/" target="_blank"><img src={fuji} alt="futji logo" /></a>
        </div>
        </div>
        
        </div>
    </section>
  )
}

export default Partenaire
