import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#001120] text-white">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#001120] py-20 text-white md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(13,110,253,0.24),transparent_32%),linear-gradient(90deg,rgba(0,4,14,0.92),rgba(0,17,32,0.86)_48%,rgba(0,17,32,0.98))]" />
          <div className="relative mx-auto max-w-[760px] px-6 text-center">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-cyan-300">404</p>
            <h1 className="text-[42px] font-extrabold leading-tight md:text-[58px]">Page not found</h1>
            <p className="mx-auto mt-5 max-w-[560px] text-[17px] font-medium leading-7 text-white/82">
              The page you are looking for may have moved, or the address may be incorrect.
            </p>
            <Link
              href="/"
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_34px_rgba(13,110,253,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_18px_42px_rgba(13,110,253,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Return Home
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
