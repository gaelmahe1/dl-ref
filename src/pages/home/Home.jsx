import React from 'react'
import "./Home.css";
import {Expertise, Footer, Header, Install, Prestation, Dlservice, Zone, Partenaire, Reference, Devis} from "../../components"

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Prestation/>
      <Dlservice/>
      <Zone />
      <Partenaire />
      <Reference />
      <Expertise />
      <Devis />
      <Install />
      <Footer />
    </div>
  )
}

export default Home
