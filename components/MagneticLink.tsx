'use client';

import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, type MotionStyle } from 'framer-motion';

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  strength?: number;
  style?: MotionStyle;
};

export function MagneticLink({
  href,
  children,
  external,
  className,
  strength = 0.35,
  style,
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        x.set(dx * strength);
        y.set(dy * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy, ...style }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
