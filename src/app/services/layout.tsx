import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | The Finesse Co',
  description: 'Explore our comprehensive IT services including web development, mobile app development, AI solutions, and more.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 