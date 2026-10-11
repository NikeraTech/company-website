import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { CaseStudy } from '@/lib/case-studies';
import { getRelatedCaseStudies } from '@/lib/case-studies';

function ProjectVisual({ study, compact = false }: { study: CaseStudy; compact?: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-md ${compact ? 'min-h-[150px]' : 'min-h-[260px]'}`}
      style={{ background: study.panel }}
    >
      <div className="absolute h-32 w-32 rounded-full blur-2xl" style={{ backgroundColor: study.accent, opacity: 0.16 }} />
      <div
        className={`relative overflow-hidden rounded-xl bg-white/92 shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition duration-300 group-hover:scale-[1.03] ${study.logoBoxClass}`}
      >
        <Image
          src={study.logo}
          alt={`${study.title} logo`}
          fill
          sizes="176px"
          className={`object-contain ${study.logoImageClass}`}
        />
      </div>
    </div>
  );
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const related = getRelatedCaseStudies(study.slug);

  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="absolute inset-y-0 right-0 w-[44%] opacity-40 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
          <div className="relative mx-auto grid max-w-[1060px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">{study.category}</p>
              <h1 className="text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">{study.title}</h1>
              <p className="mt-6 max-w-[620px] text-[17px] font-medium leading-7 text-white/88">{study.challenge}</p>
              <a
                href={study.url}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_34px_rgba(13,110,253,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_18px_42px_rgba(13,110,253,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                {study.ctaLabel}
                <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
            <ProjectVisual study={study} />
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="case-study-details">
          <div className="mx-auto max-w-[1060px] px-6">
            <h2 id="case-study-details" className="sr-only">
              Case study details
            </h2>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              <article className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_16px_42px_rgba(7,16,36,0.08)]">
                <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Challenge</p>
                <p className="text-[15px] leading-6 text-[#26344f]">{study.challenge}</p>
              </article>
              <article className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_16px_42px_rgba(7,16,36,0.08)]">
                <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Solution</p>
                <p className="text-[15px] leading-6 text-[#26344f]">{study.solution}</p>
              </article>
              <article className="rounded-lg border border-[#dfe6f0] bg-[#001120] p-6 text-white shadow-[0_16px_42px_rgba(7,16,36,0.12)]">
                <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Business Outcome</p>
                <p className="text-[15px] leading-6 text-white/82">{study.outcome}</p>
              </article>
            </div>
          </div>
        </section>

        {study.features && (
          <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="features-heading">
            <div className="mx-auto max-w-[1060px] px-6">
              <div className="mb-7 max-w-[650px]">
                <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Features</p>
                <h2 id="features-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                  Tools built around common document workflows
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                {study.features.map((feature) => (
                  <div key={feature} className="rounded-lg border border-[#dfe6f0] bg-[#f5f7fa] p-5">
                    <p className="text-[14px] font-extrabold text-[#26344f]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="technology-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Technology Used</p>
              <h2 id="technology-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Selected for the project requirements
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {study.technologies.map((technology) => (
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

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="related-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Related Projects</p>
              <h2 id="related-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Explore more Nikera work
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {related.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group overflow-hidden rounded-lg border border-[#dfe6f0] bg-white shadow-[0_14px_34px_rgba(7,16,36,0.07)] transition duration-200 hover:-translate-y-1 hover:border-[#b9d4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d6efd]"
                >
                  <ProjectVisual study={project} compact />
                  <div className="p-5">
                    <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#0d6efd]">{project.category}</p>
                    <h3 className="mt-2 text-[19px] font-extrabold text-[#071024]">{project.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#001120] py-14 text-white md:py-18" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-[1060px] px-6 text-center">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Start the conversation</p>
            <h2 id="cta-heading" className="mx-auto max-w-[760px] text-[36px] font-extrabold leading-tight md:text-[48px]">
              Have a similar challenge?
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
