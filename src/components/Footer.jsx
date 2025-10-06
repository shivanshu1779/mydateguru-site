import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="container-pro py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© <span id="year">{new Date().getFullYear()}</span> MyDataGuru. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
