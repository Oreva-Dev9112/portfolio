'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Now() {
  return (
    <section className="px-6 lg:px-10 py-24 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="max-w-prose mx-auto"
      >
        <SectionHeader id="now" label="now" />

        <p className="text-[20px] md:text-[24px] leading-[1.5] mt-8 mb-6">
          I&apos;m spending most of my time on product ideas, data work, and small AI
          experiments that are useful enough to keep around. Day to day, that means{' '}
          <span className="accent-underline">AI evaluation</span>, dashboards, and
          full-stack builds that start rough and get sharper through use.
        </p>
        <p className="text-[17px] leading-[1.7] text-muted">
          The throughline is still simple: understand the messy part, build something
          working, then keep improving it until it feels obvious.
        </p>
      </motion.div>
    </section>
  );
}
