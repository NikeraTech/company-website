const reasons = [
  {
    title: 'Business First',
    description: 'We understand your business before recommending technology.',
  },
  {
    title: 'Built for Growth',
    description: 'We create digital solutions that can grow with your business.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We work as a technology partner, not just a one-off supplier.',
  },
  {
    title: 'Quality Without Compromise',
    description: 'We care about design, usability, performance and maintainability.',
  },
];

export default function WhyChooseNikera() {
  return (
    <section id="why-nikera" className="scroll-mt-24 bg-[#f5f7fa] py-7 text-[#071024] md:py-9">
      <div className="mx-auto max-w-[1060px] px-6">
        <div className="mb-6 text-center">
          <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Why Nikera</p>
          <h2 className="text-[30px] font-extrabold leading-tight md:text-[34px]">Why Businesses Choose Nikera</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_14px_38px_rgba(7,16,36,0.08)] transition duration-200 hover:-translate-y-1 hover:border-[#b9d4ff] hover:shadow-[0_20px_46px_rgba(7,16,36,0.12)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#0d6efd]/10 text-[#0d6efd]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path
                    d="m4 11.4 4.1 4.1L18 5.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[17px] font-extrabold text-[#071024]">{reason.title}</h3>
              <p className="mt-3 text-[14px] leading-5 text-[#26344f]">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
