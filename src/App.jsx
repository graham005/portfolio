import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Skills from './components/Skills';
import PageTransition from './components/PageTransition';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return(
    <div>
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <Hero />
        <Expertise />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </PageTransition>
    </div>
  )
}

export default App
