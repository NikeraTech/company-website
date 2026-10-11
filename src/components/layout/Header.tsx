"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import MobileNav from './MobileNav';

const navItems = [
  { label: 'About', href: '/about', sectionId: 'about' },
  { label: 'Services', href: '/services', sectionId: 'services' },
  { label: 'Technology', href: '/technology', sectionId: 'technology' },
  { label: 'Portfolio', href: '/work', sectionId: 'portfolio' },
  { label: 'Contact', href: '/contact', sectionId: 'contact' },
];

const routeActiveHrefs: Record<string, string> = {
  '/about': '/about',
  '/services': '/services',
  '/technology': '/technology',
  '/portfolio': '/work',
  '/work': '/work',
  '/contact': '/contact',
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('/#about');
  const renderedActiveHref = pathname.startsWith('/work/') ? '/work' : routeActiveHrefs[pathname] ?? activeHref;

  useEffect(() => {
    if (routeActiveHrefs[pathname] || pathname.startsWith('/work/')) {
      return;
    }

    const sectionIds = navItems.map((item) => item.sectionId);

    const updateActiveSection = () => {
      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          return { id, top: element.getBoundingClientRect().top };
        })
        .filter((item): item is { id: string; top: number } => Boolean(item))
        .filter((item) => item.top <= 130)
        .sort((a, b) => b.top - a.top)[0];

      if (current) {
        setActiveHref(`/#${current.id}`);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [pathname]);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-[#001120]/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[86px] max-w-[1180px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4" aria-label="Nikera home">
          <Logo size={52} />
          <div className="leading-none">
            <p className="text-[27px] font-extrabold tracking-[0.16em]">NIKERA</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              Innovating for a Digital Future
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-10 text-[14px] font-semibold text-white lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={renderedActiveHref === item.href ? 'page' : undefined}
                className={`relative transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
                  renderedActiveHref === item.href ? 'text-cyan-300' : 'text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-cyan-300 transition-all ${
                    renderedActiveHref === item.href ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-3 rounded-md bg-[#0d6efd] px-6 py-4 text-[14px] font-bold text-white shadow-[0_16px_36px_rgba(13,110,253,0.36)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_18px_42px_rgba(13,110,253,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 md:inline-flex"
          >
            Start Your Project
            <span aria-hidden="true">-&gt;</span>
          </Link>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <MobileNav open={open} setOpen={setOpen} items={navItems} activeHref={renderedActiveHref} />
      </nav>
    </header>
  );
}
