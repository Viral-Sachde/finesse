'use client';

import { ReactNode } from 'react';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  // Simply render children without any scrolling modification
  // This will use the browser's native scrolling behavior
  return <>{children}</>;
}