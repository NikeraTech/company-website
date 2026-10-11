import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  description: string;
  url: string;
  metric: string;
  logo?: string;
  logoBoxClass?: string;
  logoImageClass?: string;
  theme: {
    accent: string;
    border: string;
    panel: string;
    logoFrame: string;
    text: string;
  };
}

const projects: Project[] = [
  {
    title: 'PDF-Lab',
    category: 'SaaS Product',
    url: 'https://pdf-lab.com',
    metric: 'Thousands of PDFs processed',
    logo: '/images/pdf-lab_logo.png',
    logoBoxClass: 'h-20 w-20',
    logoImageClass: 'p-1.5',
    theme: {
      accent: '#ef2b2d',
      border: 'rgba(239,43,45,0.42)',
      panel: 'radial-gradient(circle at 22% 18%, rgba(255,70,70,0.34), transparent 30%), linear-gradient(135deg, #2a0710 0%, #61111a 52%, #15050a 100%)',
      logoFrame: 'rgba(255,255,255,0.92)',
      text: '#ff7476',
    },
    description:
      'A privacy-first online PDF toolkit that helps users merge, split, compress, protect, redact and manage PDF documents securely.',
  },
  {
    title: 'Ananga Jewels',
    category: 'E-Commerce',
    url: 'https://anangajewels.com',
    metric: 'E-commerce brand',
    logo: '/images/ananga_logo.png',
    logoBoxClass: 'h-20 w-20',
    logoImageClass: 'p-1.5',
    theme: {
      accent: '#d8b76a',
      border: 'rgba(216,183,106,0.48)',
      panel: 'radial-gradient(circle at 24% 20%, rgba(216,183,106,0.28), transparent 32%), linear-gradient(135deg, #061f16 0%, #123a29 54%, #1a1206 100%)',
      logoFrame: 'rgba(4,20,14,0.74)',
      text: '#f0d992',
    },
    description:
      'A modern online presence for an imitation jewellery brand, designed to showcase products clearly and support business growth.',
  },
  {
    title: 'Divine Harvest',
    category: 'Financial Services',
    url: 'https://divineharvest.co.uk',
    metric: 'Mortgage & Protection',
    logo: '/images/divine_logo.png',
    logoBoxClass: 'h-20 w-28',
    logoImageClass: 'p-2',
    theme: {
      accent: '#c8b681',
      border: 'rgba(200,182,129,0.4)',
      panel: 'radial-gradient(circle at 24% 20%, rgba(200,182,129,0.18), transparent 31%), linear-gradient(135deg, #111111 0%, #343434 54%, #0b0b0b 100%)',
      logoFrame: 'rgba(214,211,205,0.92)',
      text: '#d8c792',
    },
    description:
      'A professional mortgage and protection website focused on trust, lead generation and customer engagement.',
  },
  {
    title: 'Indus Mortgages',
    category: 'Financial Services',
    url: 'https://indusmortgages.co.uk/',
    metric: 'Mortgage Services',
    logo: '/images/indus_logo.jpeg',
    logoBoxClass: 'h-20 w-44',
    logoImageClass: 'p-2',
    theme: {
      accent: '#c8b681',
      border: 'rgba(200,182,129,0.4)',
      panel: 'radial-gradient(circle at 24% 20%, rgba(200,182,129,0.18), transparent 31%), linear-gradient(135deg, #111111 0%, #343434 54%, #0b0b0b 100%)',
      logoFrame: 'rgba(214,211,205,0.92)',
      text: '#d8c792',
    },
    description:
      'A professional mortgage website designed to build credibility, present services clearly and support customer enquiries.',
  },
  {
    title: 'Elevate Estate',
    category: 'Property Management',
    url: 'https://elevate-estate.co.uk',
    metric: 'Property Management',
    logo: '/images/elevate_logo_v2.png',
    logoBoxClass: 'h-20 w-44',
    logoImageClass: 'p-2.5',
    theme: {
      accent: '#c4943b',
      border: 'rgba(196,148,59,0.42)',
      panel: 'radial-gradient(circle at 24% 20%, rgba(196,148,59,0.24), transparent 31%), linear-gradient(135deg, #05090d 0%, #111820 48%, #2d2618 100%)',
      logoFrame: 'rgba(5,9,13,0.92)',
      text: '#d8ad55',
    },
    description:
      'A modern property management website designed to improve online credibility, customer accessibility and service presentation.',
  },
];

function ProjectMark({ project }: { project: Project }) {
  const { title, logo } = project;
  const initials = title
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2);

  return (
    <div
      className="relative flex h-[132px] items-center justify-center overflow-hidden rounded-md"
      style={{ background: project.theme.panel }}
    >
      <div
        className="absolute h-24 w-24 rounded-full blur-2xl"
        style={{ backgroundColor: project.theme.accent, opacity: 0.16 }}
      />
      {logo ? (
        <div
          className={`relative overflow-hidden rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition duration-300 group-hover:scale-[1.03] ${project.logoBoxClass ?? 'h-20 w-20'}`}
          style={{ backgroundColor: project.theme.logoFrame }}
        >
          <Image
            src={logo}
            alt={`${title} logo`}
            fill
            sizes="128px"
            className={`object-contain ${project.logoImageClass ?? 'p-1.5'}`}
          />
        </div>
      ) : (
        <div
          className="relative flex h-16 w-16 items-center justify-center rounded-md border bg-white/8 text-[24px] font-extrabold tracking-wide text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition duration-300 group-hover:scale-[1.03]"
          style={{ borderColor: project.theme.border }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group flex min-h-full w-[min(78vw,247px)] shrink-0 flex-col rounded-lg border border-white/12 bg-white/[0.055] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1.5 hover:bg-white/[0.075] md:w-[247px]"
      style={{
        borderColor: project.theme.border,
        boxShadow: `0 22px 60px rgba(0,0,0,0.22), 0 0 0 1px ${project.theme.border}`,
      }}
    >
      <ProjectMark project={project} />
      <p className="mt-5 text-[11px] font-bold uppercase tracking-wide" style={{ color: project.theme.text }}>
        {project.category}
      </p>
      <h3 className="mt-1 text-[20px] font-extrabold leading-tight text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-[13px] leading-5 text-white/84">{project.description}</p>
      <div className="mt-4 flex items-start gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-[12px] font-semibold text-white/82">
        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ color: project.theme.text }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="m2.2 6.2 2.2 2.2 5.2-5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {project.metric}
      </div>
      <a
        className="mt-4 inline-flex items-center gap-2 text-[13px] font-extrabold transition group-hover:translate-x-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        style={{ color: project.theme.text }}
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        View Website <span aria-hidden="true">-&gt;</span>
      </a>
    </article>
  );
}

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-[#001120] py-10 text-white md:py-12">
      <div className="mx-auto max-w-[1060px] px-6">
        <div className="mb-6 text-center">
          <p className="mb-1 text-[11px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Work</p>
          <h2 className="text-[28px] font-extrabold leading-tight md:text-[32px]">Trusted by Businesses</h2>
          <p className="mx-auto mt-2 max-w-[620px] text-[13px] font-medium text-white/90">
            Real digital products and websites delivered for growing businesses.
          </p>
        </div>

        <div className="portfolio-carousel overflow-hidden">
          <div className="portfolio-carousel-track flex w-max gap-6">
            <div className="flex gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
            <div className="flex gap-6">
              {projects.map((project) => (
                <ProjectCard key={`${project.title}-duplicate`} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
