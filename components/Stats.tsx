'use client';

import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1] as const;

const items = [
  { number: '5+', label: 'years shipping' },
  { number: '35+', label: 'projects in production' },
  { number: '4', label: 'cities lived & worked' },
  { number: '1', label: 'throughline' },
];

export function Stats() {
  return (
    <section className="relative px-6 lg:px-10 py-20 md:py-24 border-b border-line">
      <div className="max-w-wide mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle mb-10"
        >
          // in numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: easeOut }}
              className="group"
            >
              <div className="text-display-md font-medium tracking-tight leading-none mb-3 transition-colors duration-500 group-hover:text-accent">
                {it.number}
                <span className="font-display italic text-accent">.</span>
              </div>
              <div className="text-[12px] font-mono uppercase tracking-[0.12em] text-muted">
                {it.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
