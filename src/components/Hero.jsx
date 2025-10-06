import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30"
           style={{background: 'radial-gradient(1200px 600px at 50% -20%, rgba(31,157,255,0.25), transparent 60%)'}} />
      <div className="container-pro py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span>New</span>
              <span className="h-1 w-1 rounded-full bg-brand-500" />
              <span>Practical Data Engineering</span>
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Learn data engineering the <span className="text-brand-400">practical</span> way.
            </h1>
            <p className="mt-4 text-slate-300 text-lg max-w-2xl">
              Bite-sized lessons, real-world projects, and clean code examples. Build pipelines, model data,
              and ship dashboards with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-400 transition">Explore Projects</a>
              <a href="#features" className="rounded-xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10 transition">See Features</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
              <div><span className="font-semibold text-white">Zero</span> fluff</div>
              <div className="h-1 w-1 rounded-full bg-slate-600" />
              <div><span className="font-semibold text-white">100%</span> hands-on</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
              <div className="p-6 sm:p-8">
                <div className="text-sm text-slate-300">Featured project</div>
                <div className="mt-2 text-xl font-semibold text-white">Retail Sales & Customer Behavior</div>
                <ul className="mt-4 list-disc pl-5 text-slate-300 space-y-1">
                  <li>Ingest with Azure Data Factory</li>
                  <li>Transform with Databricks</li>
                  <li>Warehouse in Snowflake</li>
                  <li>Visualize in Power BI</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href="#projects" className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">Read More</a>
                  <a href="#" className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10">GitHub Repo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
