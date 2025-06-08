import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | FINESSE Solutions',
  description: 'Get in touch with FINESSE Solutions. Let\'s discuss how we can help transform your digital presence.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 