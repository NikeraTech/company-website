'use client';

import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function MobileNav({
  open,
  setOpen,
  items,
  activeHref,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  items?: { label: string; href: string }[];
  activeHref?: string;
}) {
  if (!open) return null;

  const navItems = items ?? [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#001120]/96 px-6 py-8 backdrop-blur-md">
      <div className="mx-auto max-w-md">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={48} />
            <div>
              <p className="font-bold tracking-[0.18em] text-white">NIKERA</p>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Technologies Ltd</p>
            </div>
          </div>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg font-semibold text-white">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={activeHref === item.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
              className={`hover:text-cyan-300 ${activeHref === item.href ? 'text-cyan-300' : 'text-white'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-md bg-[#0d6efd] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2382ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Start Your Project
          </Link>
        </nav>
      </div>
    </div>
  );
}
