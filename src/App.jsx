import React from 'react'
import "./App.css";
import Navbar from './components/Navbar'
import Présentation from './components/Présentation.jsx'
import Réalisation from './components/Réalisation.jsx'
import Compétences from './components/Compétences.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Présentation />
      <Réalisation />
      <Compétences />
      <Footer />
    </div>
  )
}

export default App