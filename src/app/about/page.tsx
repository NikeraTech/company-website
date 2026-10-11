import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'About Nikera Technologies | Innovating for a Digital Future',
  description:
    'Learn about Nikera Technologies, our mission, vision and commitment to helping businesses transform through software, AI and digital innovation.',
};

const values = [
  {
    title: 'Quality',
    description: 'Quality first: every solution should be reliable, maintainable and built to last.',
    icon: 'quality',
  },
  {
    title: 'Innovation',
    description: 'Modern technologies and AI are applied where they create measurable operational value.',
    icon: 'innovation',
  },
  {
    title: 'Partnership',
    description: 'Customer success comes first, with long-term collaboration shaped around business outcomes.',
    icon: 'partnership',
  },
  {
    title: 'Transparency',
    description: 'Honest communication, practical recommendations and decisions clients can understand.',
    icon: 'transparency',
  },
  {
    title: 'Simplicity',
    description: 'Technology should reduce friction, remove manual work and make everyday operations clearer.',
    icon: 'simplicity',
  },
] as const;

const reasons = [
  'Tailored software designed around real business workflows',
  'A long-term partnership model beyond initial delivery',
  'AI-first thinking applied with practical business judgement',
  'Modern technologies selected for reliability and scale',
  'Clean user experiences that make systems easier to adopt',
  'Affordable delivery for small and growing businesses',
];

const technologies = [
  '.NET',
  'C#',
  'Azure',
  'React',
  'Next.js',
  'TypeScript',
  'SQL Server',
  'PostgreSQL',
  'Docker',
  'GitHub',
  'Cloudflare',
  'AI',
  'OpenAI',
  'Azure AI',
];

function ValueIcon({ icon }: { icon: (typeof values)[number]['icon'] }) {
  const common = {
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {icon === 'quality' && (
        <>
          <path d="M14 3.5 22.5 7v6.2c0 5.3-3.4 9.2-8.5 11.3-5.1-2.1-8.5-6-8.5-11.3V7L14 3.5Z" {...common} />
          <path d="m10 14.2 2.5 2.5 5.8-6" {...common} />
        </>
      )}
      {icon === 'innovation' && (
        <>
          <path d="M10 23h8M11 19h6M9.2 15.8a7 7 0 1 1 9.6 0c-1.1 1-1.7 1.9-1.8 3.2h-6c-.1-1.3-.7-2.2-1.8-3.2Z" {...common} />
          <path d="M14 8v4l2.5 2" {...common} />
        </>
      )}
      {icon === 'partnership' && (
        <>
          <path d="M9.5 15.5 7 13a3.5 3.5 0 0 1 0-5l.5-.5a3.5 3.5 0 0 1 5 0l1.5 1.5" {...common} />
          <path d="m18.5 12.5 2.5 2.5a3.5 3.5 0 0 1 0 5l-.5.5a3.5 3.5 0 0 1-5 0L14 19" {...common} />
          <path d="m11.5 16.5 5-5" {...common} />
        </>
      )}
      {icon === 'transparency' && (
        <>
          <path d="M4 14s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" {...common} />
          <circle cx="14" cy="14" r="3" {...common} />
        </>
      )}
      {icon === 'simplicity' && (
        <>
          <rect x="5" y="6" width="18" height="16" rx="2" {...common} />
          <path d="M9 11h10M9 15h6M9 19h8" {...common} />
        </>
      )}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section id="about" className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_30%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="absolute inset-y-0 right-0 w-[44%] opacity-40 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">About Nikera Technologies</p>
            <h1 className="max-w-[780px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              Software built to make technology feel usable, clear and valuable.
            </h1>
            <p className="mt-6 max-w-[650px] text-[17px] font-medium leading-7 text-white/88">
              Nikera Technologies helps growing businesses transform through modern software, intelligent automation and practical digital platforms.
            </p>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="story-heading">
          <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Story</p>
              <h2 id="story-heading" className="text-[32px] font-extrabold leading-tight md:text-[40px]">
                Technology should empower businesses rather than overwhelm them.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-7 text-[#26344f]">
              <p>
                Many small businesses struggle because enterprise software is expensive, overly complex and built for organisations much larger than they are.
                Nikera exists to change that.
              </p>
              <p>
                We build modern software, AI-powered solutions and digital platforms that are simple, affordable and tailored to the way small and growing
                businesses actually work.
              </p>
              <p>
                Our goal is not just to deliver software. It is to become a long-term technology partner that helps businesses innovate, automate and grow.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="mission-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              <article className="rounded-lg border border-[#dfe6f0] bg-white p-7 shadow-[0_16px_42px_rgba(7,16,36,0.08)]">
                <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Mission</p>
                <h2 id="mission-heading" className="text-[28px] font-extrabold leading-tight">
                  Help businesses transform through modern software, intelligent automation and practical digital solutions.
                </h2>
              </article>
              <article className="rounded-lg border border-[#dfe6f0] bg-[#001120] p-7 text-white shadow-[0_16px_42px_rgba(7,16,36,0.12)]">
                <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Vision</p>
                <h2 className="text-[28px] font-extrabold leading-tight">
                  Become one of the world&apos;s most trusted software companies for small and medium-sized businesses.
                </h2>
                <p className="mt-4 text-[15px] leading-6 text-white/75">
                  By making technology accessible, affordable and genuinely useful.
                </p>
              </article>
              <article className="rounded-lg border border-[#dfe6f0] bg-white p-7 shadow-[0_16px_42px_rgba(7,16,36,0.08)]">
                <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Purpose</p>
                <h2 className="text-[28px] font-extrabold leading-tight">
                  Empowering businesses through technology.
                </h2>
                <p className="mt-4 text-[15px] leading-6 text-[#26344f]">
                  We focus on systems that reduce complexity, improve daily work and create room for growth.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="values-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Values</p>
              <h2 id="values-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Principles that shape how we build
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-lg border border-[#dfe6f0] bg-white p-5 shadow-[0_14px_34px_rgba(7,16,36,0.07)] transition duration-200 hover:-translate-y-1 hover:border-[#b9d4ff]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#0d6efd]/10 text-[#0d6efd]">
                    <ValueIcon icon={value.icon} />
                  </div>
                  <h3 className="text-[17px] font-extrabold">{value.title}</h3>
                  <p className="mt-3 text-[13px] leading-5 text-[#26344f]">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="why-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 max-w-[650px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Why Choose Nikera</p>
              <h2 id="why-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                A practical technology partner for businesses ready to improve how they work.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 rounded-lg border border-[#dfe6f0] bg-white p-5">
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

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="technology-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Technology</p>
              <h2 id="technology-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Modern tools for reliable digital products
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-[#d7e2f2] bg-[#f5f7fa] px-4 py-2 text-[13px] font-extrabold text-[#26344f] shadow-[0_10px_24px_rgba(7,16,36,0.05)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#001120] py-14 text-white md:py-18" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-[1060px] px-6 text-center">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Start the conversation</p>
            <h2 id="cta-heading" className="mx-auto max-w-[720px] text-[36px] font-extrabold leading-tight md:text-[48px]">
              Let&apos;s Build Something Exceptional Together
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
