'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import MagneticButton from '../animation/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';

// Add HamburgerMenu component
const HamburgerMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="flex flex-col justify-center items-center w-8 h-8 relative">
      <motion.span
        className="w-8 h-0.5 bg-current absolute"
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="w-8 h-0.5 bg-current absolute"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="w-8 h-0.5 bg-current absolute"
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'About', href: '/about' },
  { text: 'Projects', href: '/projects' },
  { text: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Prefetch all routes on mount
  useEffect(() => {
    menuItems.forEach(item => {
      router.prefetch(item.href);
    });
  }, [router]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const menuItemVariants = {
    closed: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.03 * i,
      },
    }),
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.03 * i,
      },
    }),
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 py-7 px-7 md:px-10 transition-all duration-300',
          scrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
        )}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-light z-50">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              FINESSE
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-lg transition-all duration-300 relative",
                  pathname === item.href ? "opacity-100" : "opacity-60 hover:opacity-100"
                )}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.1 * index }}
                >
                  {item.text}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-current"
                      layoutId="navbar-underline"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Contact Button */}
          <MagneticButton className="hidden md:block z-50">
            <Link
              href="/contact"
              className={cn(
                "text-lg px-6 py-3 border border-current rounded-full transition-all duration-300",
                "hover:bg-primary hover:text-primary-foreground hover:border-primary"
              )}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                Let&apos;s talk
              </motion.div>
            </Link>
          </MagneticButton>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 focus:outline-none hover:opacity-80 transition-opacity"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <HamburgerMenu isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="flex flex-col gap-8 items-center"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-3xl transition-all duration-300",
                      pathname === item.href ? "opacity-100" : "opacity-60 hover:opacity-100"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={menuItems.length}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col items-center gap-4"
              >
                <ThemeToggle />
                <MagneticButton>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-xl px-6 py-3 mt-6 border border-current rounded-full transition-all duration-300",
                      "hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Let&apos;s talk
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
