'use client';

import { useState } from 'react';

const demoUrl = 'http://flow.nikera.co.uk/';
const username = 'demo_admin@nikera.co.uk';
const password = 'DemoAdmin@123';

export default function DemoAccessCard() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(value: string, field: string) {
    await navigator.clipboard.writeText(value);
    setCopied(field);
    window.setTimeout(() => setCopied(null), 1800);
  }

  return (
    <div className="rounded-lg border border-white/14 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:p-8">
      <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0d6efd] text-[16px] font-extrabold">NF</span>
        <div><p className="text-[17px] font-extrabold">Nikera Flow Demo</p><p className="text-[12px] text-white/58">Demonstration environment</p></div>
      </div>
      <dl className="space-y-4">
        {[
          { label: 'Username', value: username, field: 'username' },
          { label: 'Password', value: password, field: 'password' },
        ].map((item) => (
          <div key={item.field}>
            <dt className="mb-1.5 text-[11px] font-extrabold uppercase text-cyan-300">{item.label}</dt>
            <dd className="flex min-w-0 items-center justify-between gap-3 rounded-md border border-white/12 bg-[#001120] px-4 py-3">
              <code className="min-w-0 overflow-hidden text-ellipsis text-[13px] text-white">{item.value}</code>
              <button type="button" onClick={() => copy(item.value, item.field)} className="shrink-0 rounded-md border border-white/18 px-3 py-1.5 text-[11px] font-bold transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300" aria-label={`Copy ${item.label.toLowerCase()}`}>
                {copied === item.field ? 'Copied' : `Copy ${item.label}`}
              </button>
            </dd>
          </div>
        ))}
      </dl>
      <a href={demoUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0d6efd] px-5 py-3.5 text-[14px] font-extrabold text-white transition hover:bg-[#2382ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
        Launch Demo <span aria-hidden="true">-&gt;</span>
      </a>
    </div>
  );
}
