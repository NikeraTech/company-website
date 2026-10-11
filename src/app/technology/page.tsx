import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Technology & Engineering | Nikera Technologies',
  description:
    'Discover the technologies, engineering principles and modern software stack used by Nikera Technologies to build scalable digital solutions.',
};

const philosophyPoints = [
  'Long-term maintainability',
  'Security',
  'Scalability',
  'Performance',
  'Developer productivity',
  'Future readiness',
];

const categories = [
  {
    title: 'Backend Development',
    description:
      '.NET, ASP.NET Core and C# provide a reliable foundation for secure business systems, APIs and applications that need to grow over time.',
    technologies: ['.NET', 'ASP.NET Core', 'C#', 'REST APIs'],
  },
  {
    title: 'Frontend Development',
    description:
      'React, Next.js and TypeScript help us create fast, accessible interfaces that are easy to use, maintain and extend across devices.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Cloud & Infrastructure',
    description:
      'Cloud services, source control and deployment automation help businesses launch reliably and improve systems without fragile manual processes.',
    technologies: ['Microsoft Azure', 'Cloudflare', 'GitHub', 'CI/CD', 'Docker'],
  },
  {
    title: 'Databases',
    description:
      'Database selection depends on project requirements, data shape, reporting needs, performance targets and long-term operating cost.',
    technologies: ['SQL Server', 'PostgreSQL', 'Azure SQL'],
  },
  {
    title: 'Artificial Intelligence',
    description:
      'AI should solve a business problem rather than simply be added as a feature. We focus on automation, knowledge access and better decisions.',
    technologies: ['OpenAI', 'Azure AI', 'AI Assistants', 'Business Automation', 'Document Processing', 'Knowledge Search'],
  },
  {
    title: 'Business Solutions',
    description:
      'Business platforms are designed around workflows, reporting and customer journeys so teams can run operations with less friction.',
    technologies: ['CRM Platforms', 'Workflow Automation', 'Reporting', 'Customer Portals', 'Business Dashboards'],
  },
] as const;

const principles = [
  'Quality First',
  'Simple Solutions',
  'Secure by Design',
  'Performance Matters',
  'Automation Where Possible',
  'Continuous Improvement',
];

const processSteps = ['Discover', 'Design', 'Develop', 'Test', 'Deploy', 'Support'];

const reasons = [
  'Modern Technology Stack',
  'Scalable Architecture',
  'AI-first mindset',
  'Business-first thinking',
  'Long-term support',
  'Clean user experience',
];

const faqs = [
  {
    question: 'Why does Nikera use .NET?',
    answer:
      '.NET is mature, secure and well suited to long-term business systems, APIs and cloud applications where reliability matters.',
  },
  {
    question: 'Why Next.js?',
    answer:
      'Next.js gives businesses fast, search-friendly web experiences with a strong React foundation and flexible rendering options.',
  },
  {
    question: 'Can existing systems be modernised?',
    answer:
      'Yes. We can assess current systems, identify risks and improve them through staged modernisation rather than unnecessary rebuilds.',
  },
  {
    question: 'Can Nikera integrate AI into existing software?',
    answer:
      'Yes. AI can be integrated into existing workflows for assistants, document processing, search, automation and decision support.',
  },
  {
    question: 'Do you work with small businesses?',
    answer:
      'Yes. Nikera focuses on practical, affordable technology for small and growing businesses that need systems built around how they work.',
  },
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d6efd] text-white" aria-hidden="true">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="m2.2 6.6 2.5 2.5 6-6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function TechnologyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section id="technology" className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="absolute inset-y-0 right-0 w-[44%] opacity-40 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Technology & Engineering</p>
            <h1 className="max-w-[800px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              Modern Technology. Practical Solutions.
            </h1>
            <p className="mt-6 max-w-[720px] text-[17px] font-medium leading-7 text-white/88">
              We carefully select modern technologies that help businesses build secure, scalable and maintainable digital solutions for the future.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="philosophy-heading">
          <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Technology Philosophy</p>
              <h2 id="philosophy-heading" className="text-[32px] font-extrabold leading-tight md:text-[40px]">
                Technology is chosen for the business problem, not the trend cycle.
              </h2>
            </div>
            <div>
              <p className="text-[16px] leading-7 text-[#26344f]">
                The best technology decisions are practical. We look at how a system will be maintained, secured, scaled and improved after launch, then choose
                tools that support the long-term health of the product.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                {philosophyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg border border-[#dfe6f0] bg-[#f5f7fa] p-4">
                    <CheckIcon />
                    <p className="text-[14px] font-semibold leading-5 text-[#26344f]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="categories-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[720px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Technology Categories</p>
              <h2 id="categories-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                A modern stack for dependable business systems
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <article
                  key={category.title}
                  className="flex min-h-[315px] flex-col rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_16px_42px_rgba(7,16,36,0.08)] transition duration-200 hover:-translate-y-1 hover:border-[#b9d4ff]"
                >
                  <h3 className="text-[20px] font-extrabold leading-tight">{category.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#26344f]">{category.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.technologies.map((technology) => (
                      <span key={technology} className="rounded-md bg-[#eef5ff] px-3 py-1.5 text-[12px] font-bold text-[#23405f]">
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="principles-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Engineering Principles</p>
              <h2 id="principles-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Standards that protect long-term value
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle) => (
                <article key={principle} className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_14px_34px_rgba(7,16,36,0.07)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#0d6efd]/10 text-[#0d6efd]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path d="m4 11.4 4.1 4.1L18 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-extrabold">{principle}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[650px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Development Process</p>
              <h2 id="process-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Clear delivery from first conversation to long-term support
              </h2>
            </div>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-6" aria-label="Nikera development process">
              {processSteps.map((step, index) => (
                <li key={step} className="rounded-lg border border-[#dfe6f0] bg-white p-4 shadow-[0_12px_28px_rgba(7,16,36,0.06)]">
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
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Why Businesses Choose Nikera</p>
              <h2 id="why-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Engineering decisions grounded in business outcomes
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 rounded-lg border border-[#dfe6f0] bg-[#f5f7fa] p-5">
                  <CheckIcon />
                  <p className="text-[14px] font-semibold leading-5 text-[#26344f]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-[900px] px-6">
            <div className="mb-8 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Frequently Asked Questions</p>
              <h2 id="faq-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Practical answers about the stack
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_12px_28px_rgba(7,16,36,0.06)]">
                  <h3 className="text-[18px] font-extrabold">{faq.question}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#26344f]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#001120] py-14 text-white md:py-18" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-[1060px] px-6 text-center">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Start the conversation</p>
            <h2 id="cta-heading" className="mx-auto max-w-[720px] text-[36px] font-extrabold leading-tight md:text-[48px]">
              Let&apos;s Build Future-Ready Software
            </h2>
            <Link
              href="/contact"
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
