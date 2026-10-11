import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DemoAccessCard from '@/components/products/DemoAccessCard';
import FlowDashboardPreview from '@/components/products/FlowDashboardPreview';

export const metadata: Metadata = {
  title: 'Nikera Flow | Mortgage CRM Platform | Nikera Technologies',
  description:
    'Discover Nikera Flow, the modern CRM platform for mortgage and protection firms. Manage leads, clients, cases and business operations with one secure platform.',
};

const demoUrl = 'http://flow.nikera.co.uk/';

const benefits = [
  { title: 'Manage Your Entire Business', text: 'Everything in one place.' },
  { title: 'Improve Productivity', text: 'Reduce repetitive admin work.' },
  { title: 'Built for Mortgage Professionals', text: 'Designed around real adviser workflows.' },
  { title: 'Grow With Confidence', text: 'Scale your business with confidence.' },
];

const features = [
  'Lead Management', 'Client Management', 'Mortgage Pipeline', 'Protection Pipeline',
  'Task Management', 'Appointment Management', 'Document Storage', 'Communication History',
  'Reporting & Analytics', 'Role Based Security', 'Dashboard', 'Future AI Assistant',
];

const dashboardItems = ["Today's Tasks", 'Business Pipeline', 'Cases', 'Appointments', 'Performance', 'Market Information'];
const audiences = ['Mortgage Advisers', 'Protection Advisers', 'Mortgage Firms', 'Growing Businesses'];
const qualities = ['Simple', 'Modern', 'Secure', 'Fast', 'Reliable', 'Scalable'];
const roadmap = [
  { version: 'Version 1', title: 'CRM Platform' },
  { version: 'Version 2', title: 'AI Assistant' },
  { version: 'Version 3', title: 'Client Portal' },
  { version: 'Version 4', title: 'Business Intelligence' },
  { version: 'Version 5', title: 'Industry Editions' },
];
const faqs = [
  { question: 'Who is Nikera Flow designed for?', answer: 'Nikera Flow is designed for mortgage advisers, protection advisers, mortgage firms and growing businesses that need one clear system for clients, cases and daily operations.' },
  { question: 'Can I customise the CRM?', answer: 'Nikera Flow is designed around practical business workflows. Contact us to discuss your processes and the configuration your firm requires.' },
  { question: 'Can Nikera host it for us?', answer: 'Yes. Nikera can provide a hosted environment and discuss the right setup for your security, access and operational requirements.' },
  { question: 'Can it be installed on our own server?', answer: 'Deployment requirements can be reviewed as part of a demonstration. We will recommend an approach based on your infrastructure and support needs.' },
  { question: 'How secure is the system?', answer: 'Nikera Flow includes role-based access and is developed with secure, maintainable engineering practices. Specific security requirements can be covered during your demonstration.' },
  { question: 'Can I request new features?', answer: 'Yes. Product feedback helps shape future improvements, and we can discuss requirements that are important to your firm.' },
];

function Tick() {
  return <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0d6efd]/10 text-[#0d6efd]" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="m2.8 8.2 3.1 3.1 7.3-7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>;
}

export default function NikeraFlowPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-[#001120] py-14 md:py-20" aria-labelledby="flow-heading">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(13,110,253,0.26),transparent_32%),linear-gradient(100deg,#001120_10%,#031b30_56%,#001120)]" />
          <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-[11px] font-extrabold uppercase text-cyan-300">CRM &amp; Business Management Platform</p>
              <h1 id="flow-heading" className="mt-5 text-[48px] font-extrabold leading-none md:text-[68px]">Nikera Flow</h1>
              <p className="mt-5 max-w-[570px] text-[24px] font-extrabold leading-tight text-white md:text-[30px]">The Modern CRM Platform for Mortgage &amp; Protection Firms</p>
              <p className="mt-5 max-w-[610px] text-[16px] leading-7 text-white/75">Nikera Flow helps mortgage and protection firms manage leads, clients, cases, documents, tasks and business operations through one modern, secure and intuitive platform.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#0d6efd] px-6 py-3.5 text-[14px] font-extrabold transition hover:bg-[#2382ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Request a callback</Link>
                <a href={demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3.5 text-[14px] font-extrabold transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Try Live Demo</a>
              </div>
            </div>
            <FlowDashboardPreview compact />
          </div>
        </section>

        <section className="bg-white py-14 text-[#071024] md:py-18" aria-labelledby="why-flow-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 text-center"><p className="text-[12px] font-extrabold uppercase text-[#0d6efd]">Why Nikera Flow?</p><h2 id="why-flow-heading" className="mt-2 text-[32px] font-extrabold md:text-[40px]">One platform. A clearer way to work.</h2></div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{benefits.map((item) => <article key={item.title} className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_15px_40px_rgba(7,16,36,0.07)] transition hover:-translate-y-1 hover:border-[#b9d4ff]"><Tick /><h3 className="mt-5 text-[17px] font-extrabold leading-tight">{item.title}</h3><p className="mt-3 text-[14px] leading-6 text-[#536176]">{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="bg-[#f4f7fb] py-14 text-[#071024] md:py-18" aria-labelledby="features-heading">
          <div className="mx-auto max-w-[1060px] px-6"><div className="mb-8 max-w-[650px]"><p className="text-[12px] font-extrabold uppercase text-[#0d6efd]">Key Features</p><h2 id="features-heading" className="mt-2 text-[32px] font-extrabold md:text-[40px]">The tools your team needs, connected</h2></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{features.map((feature, index) => <article key={feature} className="flex min-h-[92px] items-center gap-4 rounded-lg border border-[#dfe6f0] bg-white p-5 shadow-[0_10px_26px_rgba(7,16,36,0.05)]"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#eaf3ff] text-[12px] font-extrabold text-[#0d6efd]">{String(index + 1).padStart(2, '0')}</span><h3 className="text-[15px] font-extrabold">{feature}</h3></article>)}</div>
          </div>
        </section>

        <section className="bg-[#001120] py-14 md:py-20" aria-labelledby="dashboard-heading">
          <div className="mx-auto max-w-[1180px] px-6"><div className="mx-auto mb-10 max-w-[720px] text-center"><p className="text-[12px] font-extrabold uppercase text-cyan-300">Beautiful Dashboard</p><h2 id="dashboard-heading" className="mt-2 text-[34px] font-extrabold md:text-[46px]">Everything Important At A Glance</h2><p className="mt-4 text-[16px] leading-7 text-white/70">Start every day with a clear view of the work, activity and opportunities that matter.</p></div><FlowDashboardPreview />
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{dashboardItems.map((item) => <div key={item} className="rounded-md border border-white/12 bg-white/[0.05] px-4 py-3 text-center text-[12px] font-bold text-white/80">{item}</div>)}</div>
          </div>
        </section>

        <section className="bg-white py-14 text-[#071024] md:py-18" aria-labelledby="designed-heading"><div className="mx-auto max-w-[1060px] px-6"><div className="mb-8 text-center"><p className="text-[12px] font-extrabold uppercase text-[#0d6efd]">Designed For</p><h2 id="designed-heading" className="mt-2 text-[32px] font-extrabold md:text-[40px]">Built around the people doing the work</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{audiences.map((item) => <article key={item} className="rounded-lg border border-[#dfe6f0] bg-[#f7f9fc] p-6 text-center"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#0d6efd] text-[14px] font-extrabold text-white">{item.charAt(0)}</div><h3 className="mt-4 text-[16px] font-extrabold">{item}</h3></article>)}</div></div></section>

        <section className="bg-[#f4f7fb] py-14 text-[#071024] md:py-18" aria-labelledby="qualities-heading"><div className="mx-auto max-w-[1060px] px-6"><div className="mb-8 max-w-[660px]"><p className="text-[12px] font-extrabold uppercase text-[#0d6efd]">Why Businesses Choose Nikera Flow</p><h2 id="qualities-heading" className="mt-2 text-[32px] font-extrabold md:text-[40px]">Professional software without unnecessary complexity</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{qualities.map((item) => <article key={item} className="flex items-center gap-4 rounded-lg border border-[#dfe6f0] bg-white p-5 shadow-sm"><Tick /><h3 className="text-[17px] font-extrabold">{item}</h3></article>)}</div></div></section>

        <section className="bg-[#001120] py-14 md:py-20" aria-labelledby="demo-heading"><div className="mx-auto grid max-w-[1060px] items-center gap-10 px-6 lg:grid-cols-[1fr_0.9fr]"><div><p className="text-[12px] font-extrabold uppercase text-cyan-300">Demo Access</p><h2 id="demo-heading" className="mt-2 text-[36px] font-extrabold md:text-[48px]">Try Nikera Flow Today</h2><p className="mt-5 max-w-[580px] text-[16px] leading-7 text-white/75">Experience Nikera Flow using our demonstration environment.</p><p className="mt-4 max-w-[580px] text-[14px] leading-6 text-white/60">This demo contains fictional sample data and allows you to explore the platform before requesting a personalised demonstration.</p></div><DemoAccessCard /></div></section>

        <section className="bg-white py-14 text-[#071024] md:py-18" aria-labelledby="personal-demo-heading"><div className="mx-auto max-w-[850px] px-6 text-center"><p className="text-[12px] font-extrabold uppercase text-[#0d6efd]">Book A Personal Demonstration</p><h2 id="personal-demo-heading" className="mt-2 text-[34px] font-extrabold md:text-[44px]">See Nikera Flow In Action</h2><p className="mx-auto mt-4 max-w-[660px] text-[16px] leading-7 text-[#536176]">Book a personalised online demonstration to see how Nikera Flow can transform your mortgage and protection business.</p><Link href="/contact" className="mt-7 inline-flex rounded-md bg-[#0d6efd] px-7 py-3.5 text-[14px] font-extrabold text-white transition hover:bg-[#2382ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d6efd]">Request a Demo</Link></div></section>

        <section className="bg-[#f4f7fb] py-14 text-[#071024] md:py-18" aria-labelledby="roadmap-heading"><div className="mx-auto max-w-[1060px] px-6"><div className="mb-9 text-center"><p className="text-[12px] font-extrabold uppercase text-[#0d6efd]">Future Roadmap</p><h2 id="roadmap-heading" className="mt-2 text-[32px] font-extrabold md:text-[40px]">A platform designed to keep evolving</h2></div><ol className="grid gap-4 md:grid-cols-5" aria-label="Nikera Flow product roadmap">{roadmap.map((item, index) => <li key={item.version} className="relative rounded-lg border border-[#dfe6f0] bg-white p-5 shadow-sm"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d6efd] text-[12px] font-extrabold text-white">{index + 1}</span><p className="mt-5 text-[11px] font-extrabold uppercase text-[#0d6efd]">{item.version}</p><h3 className="mt-2 text-[16px] font-extrabold">{item.title}</h3></li>)}</ol></div></section>

        <section className="bg-white py-14 text-[#071024] md:py-18" aria-labelledby="faq-heading"><div className="mx-auto max-w-[850px] px-6"><div className="mb-8 text-center"><p className="text-[12px] font-extrabold uppercase text-[#0d6efd]">Frequently Asked Questions</p><h2 id="faq-heading" className="mt-2 text-[32px] font-extrabold md:text-[40px]">Questions about Nikera Flow</h2></div><div className="space-y-3">{faqs.map((faq) => <details key={faq.question} className="group rounded-lg border border-[#dfe6f0] bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none pr-5 text-[16px] font-extrabold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d6efd]">{faq.question}<span className="float-right text-[#0d6efd] group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 border-t border-[#e7edf5] pt-4 text-[14px] leading-6 text-[#536176]">{faq.answer}</p></details>)}</div></div></section>

        <section className="bg-[#001120] py-16" aria-labelledby="final-cta-heading"><div className="mx-auto max-w-[900px] px-6 text-center"><h2 id="final-cta-heading" className="text-[36px] font-extrabold md:text-[48px]">Ready to Modernise Your Business?</h2><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/contact" className="inline-flex rounded-md bg-[#0d6efd] px-7 py-3.5 text-[14px] font-extrabold transition hover:bg-[#2382ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Request a Demo</Link><a href={demoUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-white/30 px-7 py-3.5 text-[14px] font-extrabold transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Try Live Demo</a></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
