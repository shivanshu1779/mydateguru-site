import React from 'react'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="container-pro flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">DG</span>
          <span className="text-white">MyDataGuru</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="https://github.com/" target="_blank" className="hover:text-white">GitHub</a>
        </nav>
        <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-400 transition">
          Get Started
        </a>
      </div>
    </header>
  )
}
