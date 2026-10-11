import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Products | Nikera Technologies',
  description:
    'Explore software products developed by Nikera Technologies, including Nikera Hub, PDF-Lab and modern CRM, AI and business automation platforms.',
};

const products = [
  {
    name: 'PDF-Lab',
    status: 'Live',
    category: 'Productivity Platform',
    description:
      'A privacy-first online PDF toolkit designed to help individuals and businesses merge, split, compress, protect, sign and manage PDF documents efficiently.',
    features: ['PDF Merge', 'PDF Split', 'PDF Compress', 'PDF Protect', 'PDF Sign', 'PDF Edit', 'Image to PDF'],
    primaryAction: { label: 'Visit Product', href: 'https://pdf-lab.com', external: true },
    secondaryAction: { label: 'Case Study', href: '/work/pdf-lab' },
  },
  {
    name: 'Nikera Flow',
    status: 'Demo Available',
    category: 'Mortgage & Protection CRM',
    description: 'A modern CRM platform designed specifically for mortgage and protection advisers.',
    features: [
      'Lead Management',
      'Client Management',
      'Mortgage Pipeline',
      'Protection Tracking',
      'Task Management',
      'Document Storage',
      'Email Integration',
      'Business Reporting',
      'AI Assistant',
    ],
    primaryAction: { label: 'Explore Nikera Flow', href: '/products/nikera-flow', external: false },
  },
  {
    name: 'Nikera Hub',
    status: 'Live',
    category: 'Financial Knowledge Platform',
    description:
      'A trusted financial knowledge platform with practical calculators, guides and resources that help people make clearer financial decisions.',
    features: ['Mortgage Calculators', 'Protection Tools', 'Financial Guides', 'Market Insights', 'UK Focused'],
    primaryAction: { label: 'Visit Hub', href: 'https://hub.nikera.co.uk/', external: true },
  },
  {
    name: 'Nikera Property',
    status: 'Planned',
    category: 'Property Management Platform',
    description: 'A cloud-based platform to help property managers manage properties, tenants and maintenance more efficiently.',
    features: ['Tenant Management', 'Maintenance Tracking', 'Property Dashboard', 'Reporting', 'Automation'],
  },
  {
    name: 'Nikera Assist',
    status: 'Future Product',
    category: 'AI Business Assistant',
    description:
      'An AI-powered assistant designed to automate repetitive business tasks, answer questions and improve productivity across Nikera products.',
    features: ['Knowledge Search', 'AI Chat', 'Document Assistant', 'Workflow Automation', 'Reporting'],
  },
] as const;

const roadmap = [
  { year: '2026', items: ['PDF-Lab', 'Nikera Hub', 'Mortgage CRM'] },
  { year: '2027', items: ['Property Platform', 'AI Assistant'] },
  { year: '2028+', items: ['Business Automation Suite', 'Additional SaaS Products'] },
];

const stack = ['.NET', 'Next.js', 'React', 'TypeScript', 'Azure', 'Cloudflare', 'SQL Server', 'PostgreSQL', 'OpenAI', 'Docker', 'GitHub'];

const principles = [
  { title: 'Business First', text: 'Every product starts with a business problem.' },
  { title: 'Simple by Design', text: 'Technology should be easy to use.' },
  { title: 'Continuous Improvement', text: 'Products evolve through customer feedback.' },
  { title: 'Security Matters', text: 'Protect customer data.' },
  { title: 'Built to Scale', text: 'Designed for long-term growth.' },
];

function statusClass(status: string) {
  if (status === 'Live') return 'border-emerald-300/45 bg-emerald-400/12 text-emerald-200';
  if (status === 'Demo Available') return 'border-emerald-300/45 bg-emerald-400/12 text-emerald-200';
  if (status === 'Coming Soon') return 'border-cyan-300/45 bg-cyan-400/12 text-cyan-200';
  if (status === 'Planned') return 'border-[#0d6efd]/45 bg-[#0d6efd]/15 text-cyan-200';
  return 'border-white/20 bg-white/10 text-white/78';
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="flex min-h-full flex-col rounded-lg border border-white/12 bg-white/[0.055] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.075]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">{product.category}</p>
          <h3 className="mt-2 text-[26px] font-extrabold leading-tight text-white">
            {'primaryAction' in product && product.primaryAction && !product.primaryAction.external ? (
              <Link href={product.primaryAction.href} className="transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                {product.name}
              </Link>
            ) : product.name}
          </h3>
        </div>
        <span className={`rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide ${statusClass(product.status)}`}>
          {product.status}
        </span>
      </div>

      <p className="mt-4 text-[14px] leading-6 text-white/78">{product.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.features.map((feature) => (
          <span key={feature} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[12px] font-bold text-white/78">
            {feature}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {'primaryAction' in product && product.primaryAction ? (
          <a
            href={product.primaryAction.href}
            target={product.primaryAction.external ? '_blank' : undefined}
            rel={product.primaryAction.external ? 'noreferrer' : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0d6efd] px-5 py-3 text-[13px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#2382ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            {product.primaryAction.label}
            <span aria-hidden="true">-&gt;</span>
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-white/14 bg-white/[0.06] px-5 py-3 text-[13px] font-extrabold text-white/58">
            Coming Soon
          </span>
        )}

        {'secondaryAction' in product && product.secondaryAction && (
          <Link
            href={product.secondaryAction.href}
            className="inline-flex items-center justify-center rounded-md border border-white/28 px-5 py-3 text-[13px] font-extrabold text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            {product.secondaryAction.label}
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section id="products" className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="absolute inset-y-0 right-0 w-[44%] opacity-40 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Products</p>
            <h1 className="max-w-[820px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              Software Products Built for Modern Businesses
            </h1>
            <p className="mt-6 max-w-[720px] text-[17px] font-medium leading-7 text-white/88">
              Nikera develops practical software products that help businesses automate work, improve productivity and grow through technology.
            </p>
          </div>
        </section>

        <section className="bg-[#001120] py-12 text-white md:py-16" aria-labelledby="featured-products-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[700px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Featured Products</p>
              <h2 id="featured-products-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                A growing product portfolio shaped by real business needs
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="philosophy-heading">
          <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Product Philosophy</p>
              <h2 id="philosophy-heading" className="text-[32px] font-extrabold leading-tight md:text-[40px]">
                Why We Build Products
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-7 text-[#26344f]">
              <p>Nikera believes software should solve real business problems.</p>
              <p>Every product we build is inspired by practical challenges faced by businesses.</p>
              <p>
                Our goal is to create software that is intuitive, affordable and continuously improved through real-world experience.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="roadmap-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[650px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Product Roadmap</p>
              <h2 id="roadmap-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                A focused path for product growth
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {roadmap.map((phase) => (
                <article key={phase.year} className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_14px_34px_rgba(7,16,36,0.07)]">
                  <p className="text-[26px] font-extrabold text-[#0d6efd]">{phase.year}</p>
                  <ul className="mt-4 space-y-2 text-[14px] font-semibold leading-5 text-[#26344f]">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[#0d6efd]" aria-hidden="true">-&gt;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="stack-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Technology Behind Our Products</p>
              <h2 id="stack-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Modern foundations for practical software products
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {stack.map((technology) => (
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

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="principles-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Our Product Principles</p>
              <h2 id="principles-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Product decisions guided by business value
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              {principles.map((principle) => (
                <article key={principle.title} className="rounded-lg border border-[#dfe6f0] bg-white p-5 shadow-[0_14px_34px_rgba(7,16,36,0.07)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#0d6efd]/10 text-[#0d6efd]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path d="m4 11.4 4.1 4.1L18 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-extrabold">{principle.title}</h3>
                  <p className="mt-3 text-[13px] leading-5 text-[#26344f]">{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#001120] py-14 text-white md:py-18" aria-labelledby="early-access-heading">
          <div className="mx-auto max-w-[1060px] px-6 text-center">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Become an Early Adopter</p>
            <h2 id="early-access-heading" className="mx-auto max-w-[720px] text-[36px] font-extrabold leading-tight md:text-[48px]">
              Interested in Early Access?
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-[16px] font-medium leading-7 text-white/78">
              Join us as we build the next generation of software products for growing businesses.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_34px_rgba(13,110,253,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_18px_42px_rgba(13,110,253,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Contact Us
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
