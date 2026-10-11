import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nikera Technologies',
  description: 'Privacy information for visitors and businesses contacting Nikera Technologies.',
};

const sections = [
  {
    title: 'Information collected',
    text: 'We may collect information you provide through contact forms or email, such as your name, email address, company name and enquiry details.',
  },
  {
    title: 'Cookies',
    text: 'The website may use essential cookies required for normal operation. If analytics tools are added, they may use cookies or similar technologies to understand site performance.',
  },
  {
    title: 'Analytics',
    text: 'Nikera may use privacy-conscious analytics tools to understand traffic, page performance and user journeys. Analytics data is used to improve the website and marketing experience.',
  },
  {
    title: 'Contact',
    text: 'If you contact us, we use your details to respond to your enquiry and manage any resulting business conversation.',
  },
  {
    title: 'Data retention',
    text: 'Enquiry information is retained only for as long as needed to respond, maintain business records or meet legal and operational requirements.',
  },
  {
    title: 'Third-party services',
    text: 'The website and related communications may rely on hosting, email, analytics, security and infrastructure providers. These services process data only as needed to provide their functionality.',
  },
  {
    title: 'Email enquiries',
    text: 'Emails sent to hello@nikera.co.uk may be stored in our email systems so we can respond and maintain appropriate business records.',
  },
  {
    title: 'User rights',
    text: 'You can request access, correction or deletion of personal information by contacting hello@nikera.co.uk. We will respond in line with applicable data protection requirements.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Legal</p>
            <h1 className="max-w-[780px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-[680px] text-[17px] font-medium leading-7 text-white/88">
              How Nikera Technologies handles information from website visitors and business enquiries.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="privacy-heading">
          <div className="mx-auto max-w-[900px] px-6">
            <h2 id="privacy-heading" className="sr-only">
              Privacy policy details
            </h2>
            <div className="space-y-4">
              {sections.map((section) => (
                <article key={section.title} className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_12px_28px_rgba(7,16,36,0.06)]">
                  <h3 className="text-[20px] font-extrabold">{section.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#26344f]">{section.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 rounded-lg border border-[#dfe6f0] bg-white p-5 text-[14px] font-semibold leading-6 text-[#26344f]">
              For privacy questions, contact hello@nikera.co.uk.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
