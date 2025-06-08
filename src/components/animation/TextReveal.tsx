'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function TextReveal({
  children,
  className = '',
  duration = 0.8,
  delay = 0,
  once = true,
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once, margin: '-100px 0px' });

  return (
    <div ref={textRef} className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.33, 1, 0.68, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
