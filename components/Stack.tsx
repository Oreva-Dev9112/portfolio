'use client';

const phrases = [
  'full-stack',
  'AI + data',
  'dashboards',
  'automation',
  'product work',
  'ships ideas',
];

const techs = [
  'TypeScript',
  'Next.js',
  'React',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Tailwind',
  'Framer Motion',
  'OpenAI',
  'LangChain',
  'AWS',
  'Docker',
  'GitHub Actions',
  'Vercel',
  'Figma',
];

export function Stack() {
  return (
    <section
      aria-label="Stack and ethos"
      className="relative border-y border-line bg-bg-elev/40"
    >
      {/* Big phrase marquee */}
      <div className="overflow-hidden py-8 border-b border-line">
        <div className="marquee-track flex items-center gap-10 px-6 whitespace-nowrap">
          {[...phrases, ...phrases, ...phrases].map((p, i) => (
            <span
              key={`p-${i}`}
              className="text-[40px] md:text-[56px] font-medium tracking-tight flex items-center gap-10"
            >
              <span>{p}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tech ticker */}
      <div className="overflow-hidden py-5 relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }}
          aria-hidden
        />
        <div className="marquee-track-reverse flex gap-3 px-6">
          {[...techs, ...techs].map((t, i) => (
            <span key={`t-${i}`} className="tag whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
