import React from 'react'
import "./Service.css";

const Service = () => {
  return (
    <section className='service'>
        
        <div className="wrapper">

        <h1 className="presta-branding service-brand">dl refrigeration</h1>
        <h2 className="brand-tag">Nos Services</h2>

    <div className="service-items">
        <div className="conception">
        <h2>Conception</h2>
        <p>DL Réfrigération vous propose une <span>solution adaptée à vos besoins</span> pour toute nouvelle installation.</p>
        </div>
        
        <div className="installation">
        <h2>Installation</h2>
        <p>DL Réfrigération propose un <span>travail de qualité et soigné</span> avec une équipe d’installateurs qualifiés.</p>
        </div>
        
        <div className="maintenance">
        <h2>Maintenace</h2>
        <p>DL Réfrigération intervient sur <span>l’entretien et les réparations</span><br /> de vos installations.</p>
        </div>
    
    </div>  
        </div>
      
    </section>
  )
}

export default Service
