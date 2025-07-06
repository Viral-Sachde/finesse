import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Finesse Co',
  description: 'Learn about The Finesse Co - where innovation meets excellence in digital transformation.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 