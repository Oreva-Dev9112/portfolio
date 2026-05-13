'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { TiltCard } from './TiltCard';

type Project = {
  year: string;
  title: string;
  kind: 'product' | 'site' | 'tool' | 'desktop' | 'platform';
  blurb: string;
  interesting: string;
  stack: string[];
  image?: string;
  href?: string;
  /** Used when no image: abstract gradient signature instead */
  glyph?: string;
};

const projects: Project[] = [
  {
    year: '2025',
    title: 'Smart Travel',
    kind: 'product',
    blurb: 'AI travel planner that turns a simple prompt into a usable itinerary.',
    interesting: 'The useful part was combining place data, weather, and location context so the plan felt grounded.',
    stack: ['Next.js', 'OpenAI', 'Tailwind'],
    image: '/projects/smart-travel-planner.webp',
  },
  {
    year: '2024',
    title: 'The Gani Odutokun Foundation',
    kind: 'site',
    blurb: 'Art foundation site with galleries, events, and youth programme content.',
    interesting: 'The main challenge was letting the artwork lead while keeping the CMS simple for updates.',
    stack: ['Next.js', 'Sanity', 'Tailwind'],
    image: '/projects/theganiodutokunfoundation.webp',
    href: 'https://theganiodutokunfoundation.com/',
  },
  {
    year: '2024',
    title: 'Bukola Osuntuyi',
    kind: 'site',
    blurb: 'Consultant site for services, speaking work, training, and booking enquiries.',
    interesting: 'I kept the structure focused on trust and conversion: clear services, clear proof, clear next step.',
    stack: ['Next.js', 'MDX', 'Tailwind'],
    image: '/projects/bukolaosuntuyi.webp',
    href: 'https://bukolaosuntuyi.com/',
  },
  {
    year: '2024',
    title: 'BlueBow Inventory',
    kind: 'platform',
    blurb: 'Inventory and sales-reporting dashboard for a London logistics contract.',
    interesting: 'Improved load times with route-level code splitting and caching around the reporting views.',
    stack: ['Next.js', 'TypeScript', 'Postgres'],
    glyph: '▣',
  },
  {
    year: '2023',
    title: 'Elevani',
    kind: 'site',
    blurb: 'IT company site covering services, product work, and consultancy.',
    interesting: 'The CMS is structured around services, so the team can add new offerings without changing code.',
    stack: ['Next.js', 'Sanity', 'Vercel'],
    image: '/projects/elevani.webp',
    href: 'https://elevani.com.ng',
  },
  {
    year: '2023',
    title: 'Bomaret Engineering',
    kind: 'site',
    blurb: 'Engineering firm site with a project gallery and civil works portfolio.',
    interesting: 'The content had to make credibility easy to scan: completed projects, services, and contact routes.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    image: '/projects/bomaretengineering.webp',
    href: 'https://bomaretengineering.com',
  },
  {
    year: '2023',
    title: 'New Era Model Schools',
    kind: 'platform',
    blurb: 'School platform for e-learning, applications, timetables, and daily admin.',
    interesting: 'Parents, teachers, and students needed different paths through the same system without making it feel split.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    image: '/projects/neweramodelschools.webp',
    href: 'https://neweramodelschools.com',
  },
  {
    year: '2022',
    title: 'NIIT Student Portal',
    kind: 'platform',
    blurb: 'Learning portal where lecturers manage materials and students access course content.',
    interesting: 'Auth, permissions, and rate limits were the parts that made it feel like a real production system.',
    stack: ['PHP', 'MySQL', 'AJAX'],
    glyph: '⌘',
  },
  {
    year: '2021',
    title: 'Java Notepad',
    kind: 'desktop',
    blurb: 'Java desktop notepad with encryption, autosave, and multi-tab editing.',
    interesting: 'A small project that taught me file IO, threading, and why saving state is rarely as simple as it looks.',
    stack: ['Java', 'Swing'],
    glyph: '◐',
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

function ProjectCard({ p }: { p: Project }) {
  const content = (
    <>
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-bg-elev aspect-[16/10] mb-5">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 768px) 600px, 90vw"
            className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.05]"
          />
        ) : (
          // Image-free signature: gradient + glyph
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 30% 30%, var(--deep-soft), transparent 60%), radial-gradient(ellipse 60% 60% at 75% 70%, var(--accent-soft), transparent 60%)',
            }}
          >
            <span
              className="font-display italic text-[12vw] md:text-[8vw] lg:text-[6vw] text-fg opacity-[0.18] leading-none"
              aria-hidden
            >
              {p.glyph}
            </span>
            <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-muted">
              <span>// no live link</span>
              <span className="uppercase tracking-[0.14em]">{p.kind}</span>
            </span>
          </div>
        )}

        {p.image && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6))',
            }}
            aria-hidden
          />
        )}

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="font-mono text-[11px] text-white/95 bg-black/40 backdrop-blur px-2.5 py-1 rounded-full">
            {p.year}
          </span>
          <span className="font-mono text-[10px] text-white/85 bg-black/30 backdrop-blur px-2 py-1 rounded-full uppercase tracking-[0.12em]">
            {p.kind}
          </span>
        </div>

        {p.href && (
          <div className="absolute top-4 right-4 font-mono text-[11px] text-white/95 bg-accent/90 text-bg-inverse backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1">
            <span>live</span>
            <span className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-[22px] md:text-[26px] font-medium tracking-tight group-hover:text-accent transition-colors duration-300 mb-2">
          {p.title}
        </h3>
        <p className="text-[15px] leading-[1.6] text-muted mb-2">{p.blurb}</p>
        <p className="text-[16px] leading-[1.55] mb-4 font-display italic text-subtle">
          {p.interesting}
        </p>
        <div className="flex gap-2 flex-wrap">
          {p.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>
    </>
  );

  const Inner = p.href ? (
    <a href={p.href} target="_blank" rel="noreferrer" className="group block h-full">
      {content}
    </a>
  ) : (
    <div className="group block h-full">{content}</div>
  );

  return <TiltCard intensity={5}>{Inner}</TiltCard>;
}

export function Work() {
  return (
    <section className="relative px-6 lg:px-10 py-24 md:py-32">
      <div className="max-w-wide mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <SectionHeader id="work" label="selected work" />
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="text-display-md font-medium tracking-tight mt-6"
            >
              Things I&apos;ve <span className="font-display italic font-normal">shipped</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            className="md:text-right"
          >
            <p className="text-[14px] text-muted max-w-[340px] mb-2">
              A mix of AI tools, dashboards, full-stack platforms, content sites,
              and older experiments. Public work links out. The rest sits in private
              repos or production systems.
            </p>
            <p className="font-mono text-[11px] text-subtle md:hidden">
              ← swipe to browse →
            </p>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll-snap carousel.
            Desktop: two-column grid. */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory flex gap-5 pb-4 hide-scrollbar">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: easeOut }}
              className="snap-center shrink-0 w-[85vw]"
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.85,
                delay: (i % 2) * 0.08,
                ease: easeOut,
              }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
