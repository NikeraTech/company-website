import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Our Work | Nikera Technologies',
  description:
    'Explore real projects built by Nikera Technologies, including PDF-Lab, Divine Harvest, Elevate Estate and Ananga Jewels.',
};

const projects = [
  {
    title: 'PDF-Lab',
    url: 'https://pdf-lab.com',
    category: 'Privacy-First PDF Platform',
    challenge: 'Users needed fast, secure PDF tools without unnecessary complexity.',
    solution:
      'Built an online PDF toolkit for merging, splitting, compressing, protecting, signing and managing PDF documents.',
    technologies: ['PHP', 'JavaScript', 'PDF.js', 'Cloudflare', 'IONOS'],
    outcome: 'A live SaaS-style product used by thousands of visitors.',
    logo: '/images/pdf-lab_logo.png',
    logoBoxClass: 'h-20 w-20',
    logoImageClass: 'p-1.5',
    accent: '#ef2b2d',
    panel:
      'radial-gradient(circle at 22% 18%, rgba(255,70,70,0.34), transparent 30%), linear-gradient(135deg, #2a0710 0%, #61111a 52%, #15050a 100%)',
  },
  {
    title: 'Divine Harvest',
    url: 'https://divineharvest.co.uk',
    category: 'Mortgage & Protection Website',
    challenge: 'Create a professional online presence that builds trust and generates enquiries.',
    solution: 'Designed and developed a modern responsive website with a clear customer journey.',
    technologies: ['Web Design', 'Responsive UI', 'SEO', 'Lead Generation'],
    outcome: 'A credible digital presence for a financial services business.',
    logo: '/images/divine_logo.png',
    logoBoxClass: 'h-20 w-28',
    logoImageClass: 'p-2',
    accent: '#c8b681',
    panel:
      'radial-gradient(circle at 24% 20%, rgba(200,182,129,0.18), transparent 31%), linear-gradient(135deg, #111111 0%, #343434 54%, #0b0b0b 100%)',
  },
  {
    title: 'Elevate Estate',
    url: 'https://elevate-estate.co.uk',
    category: 'Property Management Website',
    challenge: 'Create a modern digital presence for a property management business.',
    solution: 'Developed a clean, responsive website focused on services, credibility and enquiries.',
    technologies: ['Web Design', 'Responsive UI', 'SEO', 'Business Website'],
    outcome: 'A professional website that improves online visibility and customer trust.',
    logo: '/images/elevate_logo_v2.png',
    logoBoxClass: 'h-20 w-44',
    logoImageClass: 'p-2.5',
    accent: '#c4943b',
    panel:
      'radial-gradient(circle at 24% 20%, rgba(196,148,59,0.24), transparent 31%), linear-gradient(135deg, #05090d 0%, #111820 48%, #2d2618 100%)',
  },
  {
    title: 'Ananga Jewels',
    url: 'https://anangajewels.com',
    category: 'E-Commerce Jewellery Brand',
    challenge: 'Launch a premium online brand for imitation jewellery.',
    solution: 'Created a digital storefront and brand presence to showcase products clearly.',
    technologies: ['E-Commerce', 'Branding', 'Responsive Design', 'Product Presentation'],
    outcome: 'A modern online presence for a growing jewellery brand.',
    logo: '/images/ananga_logo.png',
    logoBoxClass: 'h-20 w-20',
    logoImageClass: 'p-1.5',
    accent: '#d8b76a',
    panel:
      'radial-gradient(circle at 24% 20%, rgba(216,183,106,0.28), transparent 32%), linear-gradient(135deg, #061f16 0%, #123a29 54%, #1a1206 100%)',
  },
] as const;

const stack = ['.NET', 'C#', 'Azure', 'React', 'Next.js', 'TypeScript', 'PHP', 'SQL Server', 'PostgreSQL', 'GitHub', 'Cloudflare', 'AI'];

function ProjectLogo({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-md" style={{ background: project.panel }}>
      <div className="absolute h-32 w-32 rounded-full blur-2xl" style={{ backgroundColor: project.accent, opacity: 0.16 }} />
      <div
        className={`relative overflow-hidden rounded-xl bg-white/92 shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition duration-300 group-hover:scale-[1.03] ${project.logoBoxClass}`}
      >
        <Image
          src={project.logo}
          alt={`${project.title} logo`}
          fill
          sizes="176px"
          className={`object-contain ${project.logoImageClass}`}
        />
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section id="portfolio" className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="absolute inset-y-0 right-0 w-[44%] opacity-40 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Our Work</p>
            <h1 className="max-w-[780px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              Our Work
            </h1>
            <p className="mt-6 max-w-[640px] text-[17px] font-medium leading-7 text-white/88">
              Real digital solutions built for real businesses.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="case-studies-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[700px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Featured Case Studies</p>
              <h2 id="case-studies-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Products and websites delivered for businesses with real operational goals.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group grid grid-cols-1 gap-0 overflow-hidden rounded-lg border border-[#dfe6f0] bg-white shadow-[0_18px_48px_rgba(7,16,36,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[#b9d4ff] hover:shadow-[0_24px_58px_rgba(7,16,36,0.14)] lg:grid-cols-[0.82fr_1.18fr]"
                >
                  <ProjectLogo project={project} />
                  <div className="p-6 md:p-7">
                    <p className="text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">{project.category}</p>
                    <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <h3 className="text-[26px] font-extrabold leading-tight">{project.title}</h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 text-[13px] font-extrabold text-[#0d6efd] transition hover:translate-x-0.5 hover:text-[#075ad3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d6efd]"
                      >
                        View Website <span aria-hidden="true">-&gt;</span>
                      </a>
                    </div>
                    <dl className="mt-5 grid grid-cols-1 gap-4 text-[14px] leading-6 md:grid-cols-3">
                      <div>
                        <dt className="font-extrabold text-[#071024]">Challenge</dt>
                        <dd className="mt-1 text-[#26344f]">{project.challenge}</dd>
                      </div>
                      <div>
                        <dt className="font-extrabold text-[#071024]">Solution</dt>
                        <dd className="mt-1 text-[#26344f]">{project.solution}</dd>
                      </div>
                      <div>
                        <dt className="font-extrabold text-[#071024]">Outcome</dt>
                        <dd className="mt-1 text-[#26344f]">{project.outcome}</dd>
                      </div>
                    </dl>
                    <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-md bg-[#eef5ff] px-3 py-1.5 text-[12px] font-bold text-[#23405f]">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="approach-heading">
          <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-7 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Approach</p>
              <h2 id="approach-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Business problem first. Technology second.
              </h2>
            </div>
            <p className="text-[18px] font-semibold leading-8 text-[#26344f]">
              Every project starts with understanding the business problem before writing a single line of code.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="stack-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Technology Stack</p>
              <h2 id="stack-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Tools selected around the product, not the other way round
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-[#d7e2f2] bg-white px-4 py-2 text-[13px] font-extrabold text-[#26344f] shadow-[0_10px_24px_rgba(7,16,36,0.05)]"
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
              Have an idea? Let&apos;s build it together.
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
