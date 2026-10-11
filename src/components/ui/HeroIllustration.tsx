import Logo from './Logo';

export default function HeroIllustration() {
  return (
    <div className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden sm:min-h-[390px]">
      <div className="absolute left-0 top-5 h-64 w-40 opacity-35 [background-image:radial-gradient(#0d6efd_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute right-[-70px] top-8 h-[350px] w-[350px] rounded-full border border-[#0d6efd]/10 opacity-60" />
      <div className="absolute bottom-8 h-[2px] w-[470px] max-w-[85%] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_28px_8px_rgba(13,110,253,0.55)]" />
      <div className="absolute bottom-0 right-[-80px] h-56 w-[520px] opacity-40 [background-image:radial-gradient(#0d6efd_1.2px,transparent_1.2px)] [background-size:13px_13px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_68%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="scale-[0.78] sm:scale-100">
          <Logo size={190} />
        </div>
        <div className="mt-0 text-[36px] font-extrabold leading-none tracking-[0.24em] text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.16)] sm:mt-5 sm:text-[64px] sm:tracking-[0.36em]">
          NIKERA
        </div>
        <div className="mt-4 flex items-center gap-3 text-[12px] font-medium tracking-[0.26em] text-white/90 sm:mt-5 sm:gap-4 sm:text-[18px] sm:tracking-[0.42em]">
          <span className="h-px w-10 bg-white/70 sm:w-20" />
          TECHNOLOGIES LTD
          <span className="h-px w-10 bg-white/70 sm:w-20" />
        </div>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:mt-5 sm:text-[15px] sm:tracking-[0.34em]">
          Innovating for a Digital Future
        </p>
      </div>
    </div>
  );
}
