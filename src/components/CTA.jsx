import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="border-t border-white/10 bg-slate-950">
      <div className="container-pro py-16 sm:py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-slate-900 p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Work with Shivanshu</h2>
          <p className="mt-2 text-slate-200 max-w-2xl">
            Need help with data engineering, analytics, or dashboards? Let’s connect.
          </p>
          <form className="mt-6 grid sm:grid-cols-3 gap-3">
            <input
              type="email"
              required
              placeholder="Your email"
              className="col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-brand-400"
            />
            <button className="rounded-xl bg-brand-500 px-4 py-3 font-semibold text-white hover:bg-brand-400 transition">
              Email Shivanshu
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-400">No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </section>
  )
}
