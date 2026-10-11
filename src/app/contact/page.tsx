import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactMailtoForm from '@/components/sections/ContactMailtoForm';

export const metadata: Metadata = {
  title: 'Contact Nikera Technologies',
  description:
    'Contact Nikera Technologies to discuss software development, websites, CRM systems, AI automation and digital transformation projects.',
};

const contactOptions = [
  {
    title: 'Email Us',
    description: 'hello@nikera.co.uk',
  },
  {
    title: 'Start a Project',
    description: 'For new software, website, CRM, automation or AI enquiries.',
  },
  {
    title: 'Partnerships',
    description: 'For collaboration, outsourcing and long-term technology partnerships.',
  },
];

const nextSteps = [
  'We review your enquiry',
  'We understand your business problem',
  'We suggest the best next step',
  'If suitable, we prepare a proposal',
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section id="contact" className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="absolute inset-y-0 right-0 w-[44%] opacity-40 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Contact Nikera</p>
            <h1 className="max-w-[780px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mt-6 max-w-[710px] text-[17px] font-medium leading-7 text-white/88">
              Whether you need custom software, a modern website, CRM, AI automation or digital transformation support, we&apos;d love to hear from you.
            </p>
            <p className="mt-3 max-w-[640px] text-[15px] font-semibold leading-6 text-cyan-300">
              Tell us what you want to build, improve or automate.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="options-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-7 text-center">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Contact Options</p>
              <h2 id="options-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Choose the best way to start
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {contactOptions.map((option) => (
                <article
                  key={option.title}
                  className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_16px_42px_rgba(7,16,36,0.08)] transition duration-200 hover:-translate-y-1 hover:border-[#b9d4ff]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#0d6efd]/10 text-[#0d6efd]" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="m4 11.4 4.1 4.1L18 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[19px] font-extrabold">{option.title}</h3>
                  <p className="mt-3 text-[14px] leading-5 text-[#26344f]">{option.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 text-[#071024] md:py-16" aria-labelledby="form-heading">
          <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Send an Enquiry</p>
              <h2 id="form-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                Share the essentials and we&apos;ll take it from there.
              </h2>
              <p className="mt-4 text-[15px] leading-6 text-[#26344f]">
                Your enquiry is sent securely through our website using the configured business email account.
              </p>
            </div>
            <ContactMailtoForm />
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="next-heading">
          <div className="mx-auto max-w-[1060px] px-6">
            <div className="mb-8 max-w-[650px]">
              <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">What Happens Next</p>
              <h2 id="next-heading" className="text-[32px] font-extrabold leading-tight md:text-[38px]">
                A clear, practical next step
              </h2>
            </div>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-4" aria-label="What happens after contacting Nikera">
              {nextSteps.map((step, index) => (
                <li key={step} className="rounded-lg border border-[#dfe6f0] bg-white p-5 shadow-[0_12px_28px_rgba(7,16,36,0.06)]">
                  <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0d6efd] text-[12px] font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-[15px] font-extrabold leading-5">{step}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#001120] py-14 text-white md:py-18" aria-labelledby="cta-heading">
          <div className="mx-auto max-w-[1060px] px-6 text-center">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Ready when you are</p>
            <h2 id="cta-heading" className="mx-auto max-w-[780px] text-[36px] font-extrabold leading-tight md:text-[48px]">
              Ready to build technology that moves your business forward?
            </h2>
            <Link
              href="mailto:hello@nikera.co.uk"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_34px_rgba(13,110,253,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_18px_42px_rgba(13,110,253,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Email hello@nikera.co.uk
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
