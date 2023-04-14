import React from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";

const Navbar = () => {
  return (
    <nav>
      <a className="logo" href="#">
        <img src={logo} alt="Dl refrigeration logo" />
      </a>
      <div className='nav-links'>
        <a className='btn-blue' href="#">Particulier</a>
        <a className='btn-yellow' href="#">Professionnel</a>
        <a href="#">Contact</a>
      </div>
      <div className='nav-picto'>
        <a href="#"><img src={phone} alt="Contact us phone" /></a>
        <a href="#"><img src={mail} alt="Contact us mail" /></a>
      </div>
    </nav>
  )
}

export default Navbar
