const trustCards = [
  {
    title: 'Quality Engineering',
    text: 'Every solution is designed to be maintainable, scalable and reliable.',
  },
  {
    title: 'Business First',
    text: 'We understand the business problem before selecting technology.',
  },
  {
    title: 'Modern Technology',
    text: 'We use proven modern technologies that grow with your business.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'We aim to become your technology partner, not just your software supplier.',
  },
  {
    title: 'Transparent Communication',
    text: 'Clear expectations. Honest advice. No unnecessary complexity.',
  },
  {
    title: 'Continuous Improvement',
    text: 'Every project teaches us something. Every lesson improves the next solution.',
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#001120] py-10 text-white md:py-12" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-[1060px] px-6">
        <div className="mb-7 max-w-[700px]">
          <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Trust</p>
          <h2 id="trust-heading" className="text-[30px] font-extrabold leading-tight md:text-[36px]">
            Why Businesses Choose Nikera
          </h2>
          <p className="mt-3 text-[15px] font-medium leading-6 text-white/82">
            Technology is only part of the solution. Trust, quality and long-term partnership are what make successful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-white/12 bg-white/[0.055] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)] transition duration-200 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.075]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#0d6efd]/18 text-cyan-300">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="m4 11.4 4.1 4.1L18 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[19px] font-extrabold text-white">{card.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-white/76">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
