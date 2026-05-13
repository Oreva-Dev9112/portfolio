'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MagneticLink } from './MagneticLink';

const Blob3D = dynamic(() => import('./Blob3D').then((m) => m.Blob3D), {
  ssr: false,
  loading: () => null,
});

const descriptors = ['apps', 'tools', 'dashboards', 'AI workflows', 'products'];
const easeOut = [0.16, 1, 0.3, 1] as const;

function RotatingWord() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const t = setInterval(() => {
      setPhase('out');
      setTimeout(() => {
        setI((p) => (p + 1) % descriptors.length);
        setPhase('in');
      }, 360);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className="inline-block text-accent transition-all duration-300 ease-out"
      style={{
        opacity: phase === 'in' ? 1 : 0,
        transform: phase === 'in' ? 'translateY(0)' : 'translateY(-6px)',
      }}
    >
      {descriptors[i]}
    </span>
  );
}

export function Hero() {
  // Blob uses deep purple as base + mint as rim/specular so it reads as a portrait shadow,
  // not a separate green object.
  const [tone, setTone] = useState({ base: '#603080', rim: '#7ed3a8' });
  const [showBlob, setShowBlob] = useState(false);

  useEffect(() => {
    const read = () => {
      const cs = getComputedStyle(document.documentElement);
      const deep = cs.getPropertyValue('--deep').trim();
      const accent = cs.getPropertyValue('--accent').trim();
      if (deep && accent) setTone({ base: deep, rim: accent });
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = window.setTimeout(() => setShowBlob(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden min-h-[100svh] flex items-center px-6 lg:px-10 pt-28 pb-16"
    >
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden />

      {/* Ghosted background word for depth */}
      <div
        className="pointer-events-none select-none absolute -bottom-8 lg:-bottom-16 left-0 right-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="font-display italic text-[20vw] lg:text-[18vw] leading-[0.85] tracking-[-0.04em] whitespace-nowrap text-fg opacity-[0.035] dark:opacity-[0.045]">
          build. ship.
        </div>
      </div>

      <div className="max-w-wide w-full mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent soft-pulse" />
                <span className="relative w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                full-stack · AI + data
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05, ease: easeOut }}
              className="whitespace-nowrap text-[32px] min-[380px]:text-[40px] sm:text-[52px] md:text-[68px] xl:text-[78px] leading-[0.96] font-medium tracking-tight mb-8"
            >
              <span>Hello, I&apos;m </span>
              <span className="font-display italic font-normal">Oreva.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: easeOut }}
              className="text-[18px] md:text-[22px] leading-[1.45] text-muted mb-10 max-w-[560px]"
            >
              I build full-stack applications, work with AI and data, and enjoy turning
              ideas into{' '}
              <RotatingWord />
              <span className="cursor-blink text-fg">▍</span>{' '}
              people can actually use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.32, ease: easeOut }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <MagneticLink
                href="#work"
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-fg text-bg text-[14px] font-medium overflow-hidden"
              >
                <span className="relative z-10">see what I&apos;m building</span>
                <span className="relative z-10 font-mono">↓</span>
              </MagneticLink>
              <MagneticLink
                href="mailto:orevadavidumolo@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 border border-line-strong rounded-full text-[14px] hover:border-accent transition-colors duration-300"
              >
                <span className="font-mono text-accent">→</span>
                <span>let&apos;s talk</span>
              </MagneticLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: easeOut }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-subtle"
            >
              <span className="flex items-center gap-2">
                <span className="w-6 h-px bg-line-strong" />
                <span className="text-fg">full-stack</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span className="text-fg">AI + data</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span className="text-fg">product work</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-subtle" />
                <span>open to useful work</span>
              </span>
            </motion.div>
          </div>

          {/* Right portrait + 3D blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: easeOut }}
            className="order-1 lg:order-2 relative aspect-square w-full max-w-[480px] mx-auto"
          >
            {/* 3D blob behind, masked to a soft radial so the canvas square edge
                doesn't read as a frame around the portrait */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                WebkitMaskImage:
                  'radial-gradient(circle at 50% 50%, black 38%, transparent 72%)',
                maskImage:
                  'radial-gradient(circle at 50% 50%, black 38%, transparent 72%)',
              }}
            >
              {showBlob && <Blob3D tone={tone} />}
            </div>

            {/* Soft glow */}
            <div
              className="absolute inset-8 rounded-full blur-3xl opacity-60"
              style={{ background: 'var(--accent-glow)' }}
              aria-hidden
            />

            {/* Portrait: illustrated sticker with peeling tech-stack reveal,
                transparent-background WebP rendered from the original SVG composite. */}
            <div className="relative h-full w-full flex items-center justify-center float-y">
              <div className="relative w-[95%] aspect-[1400/1174]">
                <Image
                  src="/me/portrait.webp"
                  alt="Oreva"
                  fill
                  sizes="(min-width: 1024px) 480px, 80vw"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating chip, top */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: easeOut }}
              className="absolute top-4 right-2 lg:right-0 bg-bg-elev border border-line-strong rounded-full px-3 py-1.5 font-mono text-[10px] flex items-center gap-2 shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>5+ yrs shipping</span>
            </motion.div>

            {/* Floating chip, bottom */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: easeOut }}
              className="absolute bottom-6 left-0 bg-bg-elev border border-line-strong rounded-full px-3 py-1.5 font-mono text-[10px] flex items-center gap-2 shadow-lg"
            >
              <span>building</span>
              <span className="text-accent">→</span>
              <span>side projects</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] text-subtle">
        <span className="w-px h-8 bg-line-strong" />
        <span>scroll</span>
      </div>
    </section>
  );
}
