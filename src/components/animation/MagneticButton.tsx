'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className,
  strength = 40,
  onClick,
}: MagneticButtonProps) {
  const magneticRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Skip magnetic effect on mobile devices
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(isMobileDevice);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!magneticRef.current || isMobile) return;

    const { left, top, width, height } = magneticRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: (distanceX / width) * strength,
      y: (distanceY / height) * strength,
    });
  }

  function handleMouseLeave() {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  }

  function handleMouseEnter() {
    setIsHovering(true);
  }

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={magneticRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 1.05 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={cn('magnetic-button', className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
