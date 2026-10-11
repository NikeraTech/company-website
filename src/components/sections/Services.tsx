interface Service {
  title: string;
  description: string;
  icon: 'code' | 'ai' | 'users' | 'gear' | 'globe' | 'growth';
}

const services: Service[] = [
  {
    title: 'Software Engineering',
    description: 'Reliable web applications, portals and internal tools built around how your business works.',
    icon: 'code',
  },
  {
    title: 'AI & Automation',
    description: 'Practical AI workflows and automation that reduce manual work and improve decision-making.',
    icon: 'ai',
  },
  {
    title: 'Custom CRM Platforms',
    description: 'Tailored CRM systems that centralise leads, customers, workflows and reporting.',
    icon: 'users',
  },
  {
    title: 'Business Automation',
    description: 'Streamlined processes that save time, reduce errors and make operations easier to manage.',
    icon: 'gear',
  },
  {
    title: 'Websites & Portals',
    description: 'Fast, responsive websites and customer portals designed for clarity, trust and conversion.',
    icon: 'globe',
  },
  {
    title: 'Digital Growth',
    description: 'Software-first improvements that strengthen your online presence and support growth.',
    icon: 'growth',
  },
];

function ServiceIcon({ icon }: { icon: Service['icon'] }) {
  const common = {
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true" className="text-[#0d6efd]">
      {icon === 'code' && (
        <>
          <rect x="5" y="8" width="24" height="18" rx="2" {...common} />
          <path d="m14 14-3 3 3 3M20 14l3 3-3 3M18 13l-2 8" {...common} />
        </>
      )}
      {icon === 'ai' && (
        <>
          <rect x="9" y="9" width="16" height="16" rx="3" {...common} />
          <path d="M13 5v4M21 5v4M13 25v4M21 25v4M5 13h4M5 21h4M25 13h4M25 21h4" {...common} />
          <path d="M13.5 20 16 14h2l2.5 6M14.5 18h5M22 14v6" {...common} />
        </>
      )}
      {icon === 'users' && (
        <>
          <path d="M12.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM21.5 16a4 4 0 1 0 0-8" {...common} />
          <path d="M4.5 27c.9-4.4 4-7 8-7s7.1 2.6 8 7M18.5 21c3.5.2 6 2.3 7 6" {...common} />
        </>
      )}
      {icon === 'gear' && (
        <>
          <path d="M17 22.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" {...common} />
          <path d="M17 4v4M17 26v4M7.8 7.8l2.8 2.8M23.4 23.4l2.8 2.8M4 17h4M26 17h4M7.8 26.2l2.8-2.8M23.4 10.6l2.8-2.8" {...common} />
        </>
      )}
      {icon === 'globe' && (
        <>
          <circle cx="17" cy="17" r="12" {...common} />
          <path d="M5 17h24M17 5c4 4.2 4 19.8 0 24M17 5c-4 4.2-4 19.8 0 24" {...common} />
        </>
      )}
      {icon === 'growth' && (
        <>
          <path d="M6 27V7M6 27h22" {...common} />
          <path d="m10 22 5-6 4 3 7-9M23 10h3v3" {...common} />
        </>
      )}
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f5f7fa] py-8 text-[#071024] md:py-10">
      <div className="mx-auto max-w-[1060px] px-6">
        <div className="mb-5 text-center">
          <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">What We Do</p>
          <h2 className="text-[30px] font-extrabold leading-tight md:text-[34px]">Our Services</h2>
          <p className="mx-auto mt-2 max-w-[540px] text-[15px] leading-6 text-[#26344f]">
            Focused software services for businesses that need better systems, smoother operations and stronger digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-7">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_14px_38px_rgba(7,16,36,0.08)] transition duration-200 hover:-translate-y-1 hover:border-[#b9d4ff] hover:shadow-[0_20px_46px_rgba(7,16,36,0.12)]"
            >
              <ServiceIcon icon={service.icon} />
              <h3 className="mt-3 text-[19px] font-extrabold text-[#071024]">{service.title}</h3>
              <p className="mt-3 min-h-[58px] text-[14px] leading-5 text-[#26344f]">{service.description}</p>
              <a className="mt-3 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#0d6efd] transition hover:translate-x-0.5 hover:text-[#075ad3]" href="#contact">
                Learn More <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
