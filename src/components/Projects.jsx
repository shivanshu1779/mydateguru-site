import React from 'react'

const projects = [
  {
    title: 'Retail Sales Analytics',
    tags: ['ADF', 'Databricks', 'Snowflake', 'Power BI'],
    desc: 'End-to-end retail pipeline with clean modeling and dashboards.',
  },
  {
    title: 'Call Center Performance',
    tags: ['APIs', 'ADF', 'Snowflake', 'Tableau'],
    desc: 'Metrics like AHT, CSAT, DSAT with forecasting and staffing insights.',
  },
  {
    title: 'Streaming Ingestion',
    tags: ['Kafka', 'dbt', 'S3', 'Athena'],
    desc: 'Event-driven ingestion and transformations for near real-time analytics.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 bg-slate-950">
      <div className="container-pro py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">Clone them or use as a blueprint for your own portfolio.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">View All</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-800 p-6 hover:shadow-2xl transition">
              <div className="aspect-video w-full rounded-xl bg-slate-950/40 border border-white/10 mb-4"></div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-slate-300 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-4">
                <a href="#" className="text-sm text-brand-400 hover:underline">Open repo →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
