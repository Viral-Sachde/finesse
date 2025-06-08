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
    <footer ref={footerRef} className="bg-background border-t border-border pt-20 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:px-10">
      <div className="container mx-auto">
        {/* Big slogan text */}
        <div
          ref={bigTextRef}
          className="overflow-hidden mb-16 sm:mb-24"
        >
          <motion.h2
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-center leading-tight sm:leading-tight"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            Let&apos;s shape the future —{' '}
            <span className="block mt-2 sm:mt-3">one solution at a time.</span>
          </motion.h2>
        </div>

        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-20 sm:mb-32 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagneticButton>
            <Link
              href="/contact"
              className={cn(
                "w-full sm:w-auto text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-current rounded-full transition-all duration-300 text-center inline-block",
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
                "w-full sm:w-auto text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 sm:py-4 border border-current rounded-full transition-all duration-300 text-center inline-block",
                "hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
              )}
            >
              Explore Our Services
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Footer content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-24">
          {/* Menu */}
          <div>
            <h3 className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground">Menu</h3>
            <ul className="space-y-3 sm:space-y-4">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={item.href} className="text-base sm:text-lg hover:text-muted-foreground transition-colors">
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground">Connect</h3>
            <ul className="space-y-3 sm:space-y-4">
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
                    className="text-base sm:text-lg hover:text-muted-foreground transition-colors"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground">Contact</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-6"
            >
              <p className="text-base sm:text-lg">hello@finesse.in</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-6"
            >
              <p className="text-base sm:text-lg">+91-XXXXXXX</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg">Vadodara, Gujarat, India</p>
            </motion.div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mb-12 sm:mb-20 border-t border-border pt-8 sm:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
            <h3 className="text-lg sm:text-xl">Sign up for our newsletter (No spam)</h3>
            <div className="flex items-stretch w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="bg-background border border-border px-4 py-3 w-full md:w-64 focus:outline-none focus:border-primary transition-colors text-base"
              />
              <button className="bg-primary text-primary-foreground px-4 py-3 hover:bg-primary/90 transition-colors text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and bottom links */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border pt-8 sm:pt-12 text-center sm:text-left">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
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
