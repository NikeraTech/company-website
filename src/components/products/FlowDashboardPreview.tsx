import Image from 'next/image';

const screenshots = [
  {
    src: '/images/nikera-flow/dashboard-overview.png',
    alt: 'Nikera Flow dashboard showing operations, pipeline, tasks and appointments',
    width: 1858,
    height: 893,
  },
  {
    src: '/images/nikera-flow/dashboard-details.png',
    alt: 'Nikera Flow dashboard showing client journey, priorities, activity and compliance',
    width: 1528,
    height: 872,
  },
] as const;

function BrowserFrame({ screenshot, priority = false }: { screenshot: (typeof screenshots)[number]; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-white/15 bg-[#07182b] shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
      <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-[#0b2038] px-4" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3ddc97]" />
        <div className="ml-3 h-5 flex-1 rounded bg-white/[0.07]" />
      </div>
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 1180px"
        className="h-auto w-full"
      />
    </figure>
  );
}

export default function FlowDashboardPreview({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return <BrowserFrame screenshot={screenshots[0]} priority />;
  }

  return (
    <div className="space-y-6" aria-label="Nikera Flow dashboard screenshots">
      <BrowserFrame screenshot={screenshots[0]} />
      <BrowserFrame screenshot={screenshots[1]} />
    </div>
  );
}
