import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
