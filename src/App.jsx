import React from 'react'
import {Expertise, Footer, Header, Install, Prestation, Dlservice, Zone, Partenaire, Reference, Devis} from "./components"

const App = () => {
  return (
    <>
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
    </>
  )
}

export default App
