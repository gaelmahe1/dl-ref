import React from 'react'
import "./Prestation.css";
import presta1 from "../../assets/presta1.svg";
import presta2 from "../../assets/presta2.svg";
import presta3 from "../../assets/presta3.svg";
import { Link } from 'react-router-dom';

const Prestation = () => {
  return (
    <>
    <div className="wrapper">
    
        <section className="prestation">
        <h1 className="presta-branding">dl refrigeration</h1>
        <h2>Nos Prestations</h2>
            <div className="card">
            
            <div className="card1">
                <p>Particulier</p>
                <h2>Climatisation</h2>
                <img src={presta1} alt="Card illustration particulier" />
                <Link className="card-btn blue" to="particulier">En savoir plus</Link>
            </div>
            
            <div className="card2">
                <p>Professionnel</p>
                <h2>Froid Commercial</h2>
                <img src={presta2} alt="Card illustration froid commercial" />
                <Link className="card-btn" to="froid">En savoir plus</Link>
                </div>

            <div className="card3">
                <p>Professionnel</p>
                <h2>Climatisation</h2>
                <img src={presta3} alt="Card illustration professionnel" />
                <Link className="card-btn" to="clim">En savoir plus</Link>
            </div>
            </div>
        </section>
    
    </div>
    </>
  )
}

export default Prestation
