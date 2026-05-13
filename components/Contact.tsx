'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  return (
    <section className="relative px-6 lg:px-10 py-28 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="max-w-wide mx-auto text-center"
      >
        <SectionHeader id="contact" label="get in touch" centered />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
          className="text-display-lg font-medium tracking-tight mt-10 mb-6"
        >
          Want to build <br className="md:hidden" />
          <span className="font-display italic font-normal">something useful</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
          className="text-[17px] md:text-[19px] leading-[1.55] text-muted mb-12 max-w-[520px] mx-auto"
        >
          I&apos;m open to full-stack, product engineering, AI, and data-heavy work.
          Best when there is a real product to shape and a technical problem worth
          getting into.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:orevadavidumolo@gmail.com"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-fg text-bg text-[15px] font-medium transition-transform duration-500 hover:scale-[1.03]"
          >
            <span>orevadavidumolo@gmail.com</span>
            <span className="font-mono group-hover:translate-x-1 transition-transform duration-500">→</span>
          </a>

          <div className="flex gap-3">
            <a
              href="https://github.com/Oreva-Dev9112"
              target="_blank"
              rel="noreferrer"
              className="tag"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/oreva-umolo-09a377330"
              target="_blank"
              rel="noreferrer"
              className="tag"
            >
              linkedin
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
