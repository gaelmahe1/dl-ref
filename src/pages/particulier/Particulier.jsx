import React from 'react'
import "./Particulier.css";
import {Footer, Devis, Navbar, Pheader, Pinstall, Pexpertise} from "../../components"

const particulier = () => {
  return (
    <div className="particulier">
   
    <Navbar />
    <Pheader />
    <Pinstall />
    <Pexpertise />
    <div className="undertext">
      <h1>spécialiste dans les installations sur-mesure</h1>
      <p>Climatisation & Pompe à chaleur pour votre logement</p>
      <a href="#" className='contactez'>Contactez-nous</a>
    </div>
    <Footer />
    </div>

  )
}

export default particulier
