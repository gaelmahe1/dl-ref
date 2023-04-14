import React from 'react'
import "./Reference.css";
import client from "../../assets/partenaire.svg";

const Reference = () => {
  return (
    <>
   
   <div className="wrapper">
    
        <h1 className="presta-branding reference-brand">dl refrigeration</h1>
        <h2 className="brand-tag">Références Clients</h2>
    
    <figure>
        <img src={client} alt="Les Références Clients" />
    </figure>

   </div>

    </>
  )
}

export default Reference
