'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import MagneticButton from '../animation/MagneticButton';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'About', href: '/about' },
  { text: 'Projects', href: '/projects' },
  { text: 'Contact', href: '/contact' },
];

const socials = [
  { text: 'Instagram', href: 'https://instagram.com' },
  { text: 'LinkedIn', href: 'https://linkedin.com' },
  { text: 'Twitter', href: 'https://twitter.com' },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bigTextRef, { once: true, margin: "-100px" });

  return (
    <footer ref={footerRef} className="bg-background border-t border-border pt-32 pb-12 px-6 md:px-10">
      <div className="container mx-auto">
        {/* Big slogan text */}
        <div
          ref={bigTextRef}
          className="overflow-hidden mb-24"
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-8xl font-light text-center"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            Let&apos;s shape the future — <br />
            one solution at a time.
          </motion.h2>
        </div>

        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-6 mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagneticButton>
            <Link
              href="/contact"
              className={cn(
                "text-xl px-8 py-4 border border-current rounded-full transition-all duration-300",
                "hover:bg-primary hover:text-primary-foreground hover:border-primary"
              )}
            >
              Get a Free Consultation
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/services"
              className={cn(
                "text-xl px-8 py-4 border border-current rounded-full transition-all duration-300",
                "hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
              )}
            >
              Explore Our Services
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {/* Menu */}
          <div>
            <h3 className="text-lg mb-6 text-muted-foreground">Menu</h3>
            <ul className="space-y-4">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={item.href} className="text-lg hover:text-muted-foreground transition-colors">
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg mb-6 text-muted-foreground">Connect</h3>
            <ul className="space-y-4">
              {socials.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-muted-foreground transition-colors"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6 text-muted-foreground">Contact</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <p className="text-lg">hello@finesse.in</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <p className="text-lg">+91-XXXXXXX</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">Gujarat, India</p>
            </motion.div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mb-20 border-t border-border pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h3 className="text-xl">Sign up for our newsletter (No spam)</h3>
            <div className="flex items-stretch w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="bg-background border border-border px-4 py-3 w-full md:w-64 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-4 py-3 hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border pt-12">
          <p className="text-sm text-muted-foreground mb-6 md:mb-0">
            © {new Date().getFullYear()} FINESSE Solutions. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
