import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | The Finesse Co',
  description: 'Explore our portfolio of innovative digital solutions that have transformed businesses across industries.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 