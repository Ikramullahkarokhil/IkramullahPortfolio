import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <div className="relative">
        {/* Background overlay with animated gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/50 to-blue-800/50 backdrop-blur-[100px]" />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
