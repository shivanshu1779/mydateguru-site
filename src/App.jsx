import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Projects from './components/Projects.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
