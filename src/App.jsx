import React from 'react'
import Home from './pages/home/Home';
import Pro from './pages/pro/Pro';
import Contact from './pages/contact/Contact';
import Particulier from './pages/particulier/Particulier';
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="particulier" element={<Particulier />} />
      <Route path="pro" element={<Pro />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
