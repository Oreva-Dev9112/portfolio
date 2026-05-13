'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const easeOut = [0.16, 1, 0.3, 1] as const;

const beliefs = [
  {
    n: '01',
    title: 'Start with the user',
    body: 'Good software usually begins with a small, specific frustration. I like getting close to that before touching the interface.',
  },
  {
    n: '02',
    title: 'Keep the system readable',
    body: 'Code, dashboards, and workflows should be easy to explain. If the shape is clear, the team can improve it without guessing.',
  },
  {
    n: '03',
    title: 'Ship useful versions',
    body: 'I would rather put a working version in front of people early than polish assumptions for too long.',
  },
  {
    n: '04',
    title: 'Use AI where it fits',
    body: 'The model is only one part of the system. The real work is context, evaluation, and making the output fit the workflow.',
  },
];

export function Building() {
  return (
    <section className="relative px-6 lg:px-10 py-24 md:py-32">
      <div className="max-w-wide mx-auto">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <SectionHeader id="ethos" label="ethos" />
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="text-display-md font-medium tracking-tight mt-8 mb-6"
            >
              How I think about <br />
              <span className="font-display italic font-normal">building.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="text-[16px] leading-[1.65] text-muted max-w-[420px]"
            >
              A few working notes I come back to when I&apos;m building software,
              shaping data, or testing an idea that might become a product.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: easeOut }}
                className="bg-bg-elev p-6 lg:p-7 group hover:bg-bg transition-colors duration-500"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-[11px] text-subtle">/{b.n}</span>
                  <span className="font-mono text-[11px] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    ↗
                  </span>
                </div>
                <h3 className="text-[18px] font-medium mb-2 leading-tight">{b.title}</h3>
                <p className="text-[14px] leading-[1.6] text-muted">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
