'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

const contactItems = [
  { label: 'Email Us', value: 'hello@nikera.co.uk', icon: 'mail' },
  { label: 'Visit Our Website', value: 'nikera.co.uk', icon: 'globe' },
  { label: 'Business Enquiries', value: "We're here to help your business grow", icon: 'briefcase' },
];

function ContactIcon({ icon }: { icon: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0d6efd] text-white">
      <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {icon === 'mail' && (
          <>
            <rect x="3" y="5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="m4 6 6 5 6-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {icon === 'globe' && (
          <>
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.7" />
            <path d="M3 10h14M10 3c2.2 2.4 2.2 11.6 0 14M10 3c-2.2 2.4-2.2 11.6 0 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </>
        )}
        {icon === 'briefcase' && (
          <>
            <rect x="3" y="7" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="M7 7V5.5A1.5 1.5 0 0 1 8.5 4h3A1.5 1.5 0 0 1 13 5.5V7M3 10h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </>
        )}
      </svg>
    </span>
  );
}

export default function ContactCTA() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');
    setFormMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          website: formData.get('website'),
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Message could not be sent.');
      }

      form.reset();
      setStatus('success');
      setFormMessage(result.message || 'Thank you! Your message has been sent successfully.');
    } catch (error) {
      setStatus('error');
      setFormMessage(
        error instanceof Error
          ? error.message
          : 'Sorry, your message could not be sent right now. Please email hello@nikera.co.uk.',
      );
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-[#f5f7fa] py-9 text-[#071024] md:py-12">
      <div className="mx-auto grid max-w-[1020px] grid-cols-1 gap-8 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="pt-1">
          <p className="mb-2 text-[12px] font-extrabold uppercase tracking-wide text-[#0d6efd]">Let&apos;s Work Together</p>
          <h2 className="max-w-[340px] text-[32px] font-extrabold leading-[1.02] md:text-[38px]">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-3 max-w-[390px] text-[14px] leading-5 text-[#26344f]">
            Tell us what you want to build, improve or automate. We&apos;ll help you shape the right software-first approach.
          </p>

          <div className="mt-5 space-y-3">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <ContactIcon icon={item.icon} />
                <div>
                  <p className="text-[14px] font-extrabold">{item.label}</p>
                  <p className="text-[13px] leading-4 text-[#26344f]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#dfe6f0] bg-white p-6 shadow-[0_18px_48px_rgba(7,16,36,0.1)] md:p-7">
          <div className="mb-5">
            <h3 className="text-[20px] font-extrabold text-[#071024]">Start a conversation</h3>
            <p className="mt-1 text-[13px] leading-5 text-[#26344f]">
              Share the essentials below and we&apos;ll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-[13px] font-extrabold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="h-11 w-full rounded-md border border-[#cfd8e6] bg-white px-4 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-[13px] font-extrabold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="h-11 w-full rounded-md border border-[#cfd8e6] bg-white px-4 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-[13px] font-extrabold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                aria-describedby="contact-form-note"
                className="w-full resize-none rounded-md border border-[#cfd8e6] bg-white px-4 py-3 text-[14px] text-[#071024] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#0d6efd] focus:ring-2 focus:ring-[#0d6efd]/15"
                placeholder="Tell us about your project..."
              />
            </div>

            <p
              id="contact-form-note"
              aria-live="polite"
              className={`mt-3 rounded-md px-4 py-3 text-[13px] font-semibold leading-5 ${
                status === 'success'
                  ? 'bg-[#edf9f2] text-[#17683a]'
                  : status === 'error'
                    ? 'bg-[#fff1f1] text-[#9f1d1d]'
                    : 'bg-[#eef5ff] text-[#26344f]'
              }`}
            >
              {formMessage || 'Your message will be sent securely to hello@nikera.co.uk.'}
            </p>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-4 flex h-11 w-full items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-8 text-[14px] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_14px_34px_rgba(13,110,253,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d6efd] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-[#0d6efd] disabled:hover:shadow-none"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
              <span aria-hidden="true">-&gt;</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
