'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const CustomCursor = dynamic(
  () => import('@/components/animation/CustomCursor'),
  {
    ssr: false,
    loading: () => null,
  }
);

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      {children}
    </>
  );
} 