import HeroIllustration from '@/components/ui/HeroIllustration';

const highlights = ['Business First', 'Future Ready', 'Results Driven'];

export default function Hero() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-[#001120] pt-12 text-white md:pt-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_44%,rgba(13,110,253,0.22),transparent_31%),linear-gradient(90deg,rgba(0,4,14,0.9),rgba(0,17,32,0.86)_42%,rgba(0,17,32,0.98))]" />
      <div className="absolute inset-y-0 right-0 w-[42%] opacity-45 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_72%)]" />

      <div className="relative mx-auto grid min-h-[458px] max-w-[1180px] grid-cols-1 items-center gap-8 px-6 pb-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="max-w-[560px] pb-5">
          <h1 className="fade-up fade-up-delay-100 text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white sm:text-[54px] lg:text-[60px]">
            Digital Solutions Built for
            <span className="mt-1 block text-[#2382ff]">Growing Businesses</span>
          </h1>
          <p className="fade-up fade-up-delay-300 mt-5 max-w-[520px] text-[17px] font-medium leading-7 text-white/90">
            Nikera builds custom software, CRM platforms, business automation, AI-enabled workflows and modern websites that help companies work smarter and grow with confidence.
          </p>

          <div className="fade-up fade-up-delay-400 mt-7 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-[#0d6efd] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_34px_rgba(13,110,253,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2382ff] hover:shadow-[0_18px_42px_rgba(13,110,253,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Start Your Project
              <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md border border-white/55 bg-transparent px-7 py-3.5 text-[15px] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Explore Our Work
            </a>
          </div>

          <div className="fade-up fade-up-delay-500 mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <div key={item} className="inline-flex items-center gap-3 text-[14px] font-bold text-white">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0d6efd] text-[#0d6efd]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="m2.2 6.2 2.2 2.2 5.2-5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}
