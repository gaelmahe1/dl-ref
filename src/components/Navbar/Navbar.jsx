import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";

const Navbar = () => {
  return (
    <nav>
      <Link className="logo" to="/home">
        <img src={logo} alt="Dl refrigeration logo" />
      </Link>
      <div className='nav-links'>
        <Link className='btn-blue' to="/particulier">Particulier</Link>
        <Link className='btn-yellow' to="/pro">Professionnel</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className='nav-picto'>
        <a href="tel:+33016029684" target="_blank"><img src={phone} alt="Contact us phone" /></a>
        <a href="mailto:dliquet@dl-refrigeration.com" target="_blank"><img src={mail} alt="Contact us mail" /></a>
      </div>
    </nav>
  )
}

export default Navbar
