interface CaseStudy {
  title: string;
  metric: string;
  description: string;
}

const cases: CaseStudy[] = [
  {
    title: 'Workflow Automation',
    metric: '80% time saved',
    description: 'Automated processing for a logistics provider, reducing manual effort and errors.',
  },
  {
    title: 'AI Insights Platform',
    metric: '2x faster decisions',
    description: 'Real-time analytics platform powered by machine learning for better operational insight.',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-[#F7FAFF] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-500">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Real outcomes from real projects</h2>
          <p className="mx-auto max-w-2xl mt-3 text-slate-600">We deliver measurable results — here are a few highlights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.12)]">
              <div className="text-sky-500 font-bold text-xl">{c.metric}</div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-3 text-slate-600">{c.description}</p>
              <div className="mt-6">
                <a className="text-sky-500 font-semibold hover:underline" href="#">Read case study →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
