import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | The Finesse Co',
  description: 'Get in touch with The Finesse Co. Let\'s discuss how we can help transform your digital presence.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 