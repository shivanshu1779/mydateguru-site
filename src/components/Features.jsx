import React from 'react'

const data = [
  { title: 'End-to-End Pipelines', desc: 'ETL/ELT from APIs, CSVs, and events into a modern data stack.', icon: '🧱' },
  { title: 'Cloud-Native', desc: 'Azure, AWS, and GCP examples with infra-as-code patterns.', icon: '☁️' },
  { title: 'Analytics-Ready Models', desc: 'Dimensional models, dbt-style transforms, and SLA/SLO thinking.', icon: '📊' },
  { title: 'Testing & CI/CD', desc: 'Unit tests, data quality checks, and automated deployments.', icon: '✅' },
]

export default function Features() {
  return (
    <section id="features" className="border-t border-white/10 bg-slate-950">
      <div className="container-pro py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What you’ll build</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Clear, industry-relevant skills with code that ships.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl">{f.icon}</div>
              <div className="mt-3 text-lg font-semibold text-white">{f.title}</div>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
