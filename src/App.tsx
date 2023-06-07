import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
function App() {

  return (
    <div>
      <NavBar/>
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
