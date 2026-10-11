import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { caseStudies } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: 'Our Work | Nikera Technologies',
  description:
    'Explore detailed Nikera Technologies case studies for PDF-Lab, Divine Harvest, Indus Mortgages, Elevate Estate and Ananga Jewels.',
};

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section id="portfolio" className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="absolute inset-y-0 right-0 w-[44%] opacity-40 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Portfolio</p>
            <h1 className="max-w-[780px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">Our Work</h1>
            <p className="mt-6 max-w-[640px] whitespace-pre-line text-[17px] font-medium leading-7 text-white/88">
              Real businesses.{'\n'}Real challenges.{'\n'}Real digital solutions.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="case-studies-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[700px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Case Studies</p>
              <h2 id="case-studies-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Real projects explained through problem, solution and outcome.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {caseStudies.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group overflow-hidden rounded-lg border border-[#dfe6f0] bg-white shadow-[0_18px_48px_rgba(7,16,36,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d4ff] hover:shadow-[0_24px_58px_rgba(7,16,36,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d6efd]"
                >
                  <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden" style={{ background: project.panel }}>
                    <div className="absolute h-32 w-32 rounded-full blur-2xl" style={{ backgroundColor: project.accent, opacity: 0.16 }} />
                    <div className={`relative overflow-hidden rounded-xl bg-white/92 shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition duration-300 group-hover:scale-[1.03] ${project.logoBoxClass}`}>
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        sizes="176px"
                        className={`object-contain ${project.logoImageClass}`}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">{project.category}</p>
                    <h3 className="mt-2 text-[24px] font-extrabold text-[#071024]">{project.title}</h3>
                    <p className="mt-3 text-[14px] leading-6 text-[#26344f]">{project.challenge}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#0d6efd] transition group-hover:translate-x-0.5">
                      Read Case Study <span aria-hidden="true">-&gt;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
