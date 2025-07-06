'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import MagneticButton from '../animation/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';

// Add HamburgerMenu component
const HamburgerMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 relative">
      <motion.span
        className="w-6 h-0.5 bg-current absolute"
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="w-6 h-0.5 bg-current absolute"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="w-6 h-0.5 bg-current absolute"
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
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

  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      console.log("Current theme is:", resolvedTheme);
    }
  }, [resolvedTheme]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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


  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or a skeleton/placeholder

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 py-5 px-4 sm:py-7 sm:px-7 md:px-10 transition-all duration-300',
          scrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
        )}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="relative w-[60px] h-[60px] sm:w-[200px] sm:h-[70px]"
            >
              <Image
                src={resolvedTheme === 'dark' ? '/darkf.png' : '/lightf.png'}

                alt="Finesse Logo"
                fill
                className="object-contain "
                priority
              />

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
                "text-lg  rounded-full transition-all duration-300"
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

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none hover:opacity-80 transition-opacity"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerMenu isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
            />
            <motion.div
              className="fixed inset-x-0 top-[4.5rem] p-6 bg-background/80 backdrop-blur-sm z-40 border-t border-border"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col gap-4">
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
                        "block text-xl py-2 transition-all duration-300",
                        pathname === item.href ? "opacity-100" : "opacity-60"
                      )}
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
                >
                  <Link
                    href="/contact"
                    className="block text-xl py-2 text-primary"
                  >
                    Let&apos;s talk
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
