import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Nikera Technologies',
  description: 'Website terms and conditions for Nikera Technologies.',
};

const sections = [
  {
    title: 'Website usage',
    text: 'This website is provided for general information about Nikera Technologies, our services and our work. You should not misuse the website or attempt to interfere with its availability or security.',
  },
  {
    title: 'Intellectual property',
    text: 'Website content, branding, design, text and visual assets belong to Nikera Technologies or their respective owners unless otherwise stated.',
  },
  {
    title: 'Liability',
    text: 'We aim to keep website information accurate, but it is provided for general guidance only. Nikera Technologies is not liable for losses arising from reliance on website content.',
  },
  {
    title: 'External links',
    text: 'This website may link to third-party websites. Nikera Technologies is not responsible for the content, availability or policies of external sites.',
  },
  {
    title: 'Service enquiries',
    text: 'Submitting an enquiry does not create a contract or obligation. Project scope, pricing, timelines and responsibilities are agreed separately in writing.',
  },
  {
    title: 'Contact information',
    text: 'For questions about these terms, contact hello@nikera.co.uk.',
  },
];

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#001120] py-16 text-white md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="relative mx-auto max-w-[1060px] px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">Legal</p>
            <h1 className="max-w-[780px] text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              Terms &amp; Conditions
            </h1>
            <p className="mt-6 max-w-[680px] text-[17px] font-medium leading-7 text-white/88">
              Terms for using the Nikera Technologies website and submitting service enquiries.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f7fa] py-12 text-[#071024] md:py-16" aria-labelledby="terms-heading">
          <div className="mx-auto max-w-[900px] px-6">
            <h2 id="terms-heading" className="sr-only">
              Terms and conditions details
            </h2>
            <div className="space-y-4">
              {sections.map((section) => (
                <article key={section.title} className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_12px_28px_rgba(7,16,36,0.06)]">
                  <h3 className="text-[20px] font-extrabold">{section.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#26344f]">{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
