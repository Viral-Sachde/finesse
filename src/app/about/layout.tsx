import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | FINESSE Solutions',
  description: 'Learn about FINESSE Solutions - where innovation meets excellence in digital transformation.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 