'use client';

import { ReactNode, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is touch-based
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only initialize Lenis on non-touch devices
    if (!isMobile) {
      const lenis = new Lenis({
        duration: 0.2, // Ultra fast, almost native
        easing: t => t, // Linear easing for more native feel
        wheelMultiplier: 1.5, // Faster scrolling
        touchMultiplier: 1.5, // Faster scrolling
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        window.removeEventListener('resize', checkMobile);
        lenis.destroy();
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return <>{children}</>;
}