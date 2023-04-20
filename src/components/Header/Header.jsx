import React from 'react';
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
    <Navbar />
    <header>
      <div className="wrapper">
        <div className="head">
        <h1 className="branding">dl refrigeration</h1>
        <h2 className="tag">Climatisation & <br></br>Froid commercial</h2>
        <p className='homehead'>Conception Installation Maintenance</p>
        <a className='btn-full' href="#">Nos installations</a>
        <a className='btn-clear' href="#">Contactez-nous</a>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
