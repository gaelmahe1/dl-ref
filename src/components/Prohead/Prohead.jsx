import React from 'react';
import "./Prohead.css";
import Navbar from "../Navbar/Navbar";

const Prohead = () => {
  return (
    <>
    <Navbar />
    <header className="proheader">
      <div className="wrapper">
        <div className="prohead">
        <h1 className="branding">dl refrigeration</h1>
        <h2 className="tag">Climatisation & <br></br>Froid commercial</h2>
        <p className='homehead'>Conception Installation Maintenance</p>
        </div>
      </div>
    </header>
    </>
  )
}

export default Prohead
