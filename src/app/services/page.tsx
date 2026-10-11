import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Services | Nikera Technologies',
  description:
    "Discover Nikera Technologies' software development, AI, CRM, digital transformation and consulting services.",
};

const services = [
  {
    title: 'Custom Software Development',
    description: 'Build software tailored specifically for your business processes.',
    examples: ['Internal Systems', 'Business Applications', 'Automation', 'Enterprise Software', 'Customer Portals'],
    icon: 'software',
  },
  {
    title: 'CRM & Business Platforms',
    description: 'Modern CRM platforms that streamline customer relationships and business workflows.',
    examples: ['Mortgage CRM', 'Lead Management', 'Property CRM', 'Workflow Automation'],
    icon: 'crm',
  },
  {
    title: 'AI & Intelligent Automation',
    description: 'Use AI to automate repetitive work and improve decision making.',
    examples: ['AI Assistants', 'Document Processing', 'Knowledge Bases', 'Business Automation'],
    icon: 'ai',
  },
  {
    title: 'Websites & Digital Experiences',
    description: 'Modern websites and web applications designed for growth.',
    examples: ['Corporate Websites', 'Customer Portals', 'Landing Pages', 'Progressive Web Apps'],
    icon: 'web',
  },
  {
    title: 'Digital Marketing & Online Growth',
    description: 'Help businesses increase visibility and generate more enquiries.',
    examples: ['SEO', 'Google Business', 'Analytics', 'Performance'],
    icon: 'growth',
  },
  {
    title: 'Technology Consulting',
    description: 'Strategic technology guidance for growing businesses.',
    examples: ['Architecture', 'Cloud', 'Modernisation', 'Performance Reviews'],
    icon: 'consulting',
  },
] as const;

const industries = [
  'Mortgage & Protection',
  'Property Management',
  'Professional Services',
  'Retail & E-commerce',
  'Small Businesses',
  'Startups',
];

const processSteps = ['Discover', 'Plan', 'Design', 'Develop', 'Test', 'Launch', 'Support'];

const reasons = [
  'Tailored Software',
  'Long-term Partnership',
  'Modern Technologies',
  'AI-first Thinking',
  'Quality Engineering',
  'Affordable Solutions',
];

function ServiceIcon({ icon }: { icon: (typeof services)[number]['icon'] }) {
  const common = {
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {icon === 'software' && (
        <>
          <rect x="5" y="8" width="22" height="16" rx="2" {...common} />
          <path d="m13 14-3 2.5 3 2.5M19 14l3 2.5-3 2.5M17 13l-2 7" {...common} />
        </>
      )}
      {icon === 'crm' && (
        <>
          <path d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21 15a3.5 3.5 0 1 0 0-7" {...common} />
          <path d="M4.5 26c.9-4.4 3.4-7 6.5-7s5.6 2.6 6.5 7M18 20c3 .4 5.2 2.5 6 6" {...common} />
        </>
      )}
      {icon === 'ai' && (
        <>
          <rect x="9" y="9" width="14" height="14" rx="3" {...common} />
          <path d="M13 5v4M19 5v4M13 23v4M19 23v4M5 13h4M5 19h4M23 13h4M23 19h4" {...common} />
          <path d="M13 19.5 15 13h2l2 6.5M14 17.5h4" {...common} />
        </>
      )}
      {icon === 'web' && (
        <>
          <circle cx="16" cy="16" r="11" {...common} />
          <path d="M5 16h22M16 5c3.6 4.1 3.6 17.9 0 22M16 5c-3.6 4.1-3.6 17.9 0 22" {...common} />
        </>
      )}
      {icon === 'growth' && (
        <>
          <path d="M6 26V7M6 26h21" {...common} />
          <path d="m10 21 5-6 4 3 7-9M23 9h3v3" {...common} />
        </>
      )}
      {icon === 'consulting' && (
        <>
          <path d="M8 8h16v12H11l-3 3V8Z" {...common} />
          <path d="M12 13h8M12 17h5" {...common} />
        </>
      )}
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section id="services" className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="absolute inset-y-0 right-0 w-[44%] opacity-40 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Services</p>
            <h1 className="max-w-[800px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              Technology That Moves Your Business Forward
            </h1>
            <p className="mt-6 max-w-[680px] text-[17px] font-medium leading-7 text-white/88">
              Nikera builds software, AI solutions and digital platforms that help businesses grow by improving operations, reducing manual work and creating
              clearer customer experiences.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="services-grid-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[690px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">What We Solve</p>
              <h2 id="services-grid-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Practical services for businesses that need better systems, stronger workflows and cleaner digital experiences.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex min-h-[330px] flex-col rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_16px_42px_rgba(7,16,36,0.08)] transition duration-200 hover:-translate-y-1 hover:border-[#b9d4ff] hover:shadow-[0_22px_50px_rgba(7,16,36,0.12)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#0d6efd]/10 text-[#0d6efd]">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h3 className="text-[20px] font-extrabold leading-tight">{service.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#26344f]">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.examples.map((example) => (
                      <span key={example} className="rounded-md bg-[#eef5ff] px-3 py-1.5 text-[12px] font-bold text-[#23405f]">
                        {example}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="industries-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Industries</p>
              <h2 id="industries-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Built around real business contexts
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <article key={industry} className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_14px_34px_rgba(7,16,36,0.07)]">
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-[#0d6efd]" />
                  <h3 className="text-[18px] font-extrabold">{industry}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[650px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Development Process</p>
              <h2 id="process-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                A clear path from business problem to working product
              </h2>
            </div>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-7" aria-label="Nikera development process">
              {processSteps.map((step, index) => (
                <li key={step} className="relative rounded-lg border border-[#dfe6f0] bg-white p-4 shadow-[0_12px_28px_rgba(7,16,36,0.06)]">
                  <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0d6efd] text-[12px] font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-[15px] font-extrabold">{step}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="why-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Why Nikera</p>
              <h2 id="why-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Business understanding first, technology second
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 rounded-lg border border-[#dfe6f0] bg-[#f5f7fa] p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d6efd] text-white" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="m2.2 6.6 2.5 2.5 6-6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-[14px] font-semibold leading-5 text-[#26344f]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#001120] py-14 text-white md:py-18" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-[1060px] px-6 text-center">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Start the conversation</p>
            <h2 id="cta-heading" className="mx-auto max-w-[720px] text-[36px] font-extrabold leading-tight md:text-[48px]">
              Ready to Build Something Exceptional?
            </h2>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_34px_rgba(13,110,253,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_18px_42px_rgba(13,110,253,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Start Your Project
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
