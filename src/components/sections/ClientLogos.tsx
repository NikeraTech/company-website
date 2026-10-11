export default function ClientLogos() {
  const placeholders = new Array(4).fill(0);

  return (
    <section aria-label="Trusted by" className="py-12 bg-[#020D1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-sky-400 font-semibold uppercase tracking-[0.28em] mb-6">Trusted by</p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {placeholders.map((_, i) => (
            <div key={i} className="h-12 w-36 flex items-center justify-center">
              <div
                role="img"
                aria-label={`Partner logo placeholder ${i + 1}`}
                className="h-10 w-full bg-white/6 backdrop-blur-sm rounded-lg flex items-center justify-center text-sm text-white/80 font-medium"
              >
                Partner
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
