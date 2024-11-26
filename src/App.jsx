import React from 'react'
import "./App.css";
import Navbar from './components/Navbar'
import Présentation from './components/Présentation.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Présentation />
      <Footer />
    </div>
  )
}

export default App