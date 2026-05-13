'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left pointer-events-none"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--accent), var(--deep), var(--accent))',
        backgroundSize: '200% 100%',
      }}
    />
  );
}
