import React from 'react';
import "./Install.css";
import img1 from "../../assets/installh1.png";
import img2 from "../../assets/installh2.svg";
import img3 from "../../assets/installh3.svg";

const Install = () => {
  return (
    <section>
      
    <div className="wrapper">
      
      <div className="title-item">
      <div className="line2"></div>
      <h2 className='install-title'>Découvrez quelques installations de <span>DL Réfrigération</span></h2>
      </div>

      <div className="install-img">
        <img src={img1} alt="Image d'une de nos installation" />
        <img src={img2} alt="Image d'une de nos installation" />
        <img src={img3} alt="Image d'une de nos installation" />
      </div>

    </div>

    </section>
  )
}

export default Install
