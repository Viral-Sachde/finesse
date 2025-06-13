'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../animation/TextReveal';
import MagneticButton from '../animation/MagneticButton';
import Link from 'next/link';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Set up simple fade-in animation for the video
  useEffect(() => {
    const tl = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.style.opacity = '1';
        videoRef.current.style.transform = 'scale(1)';
      }
    }, 500);

    return () => clearTimeout(tl);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex flex  dark:bg-[url('/bg-1.webp')] bg-cover bg-top  sm:bg-center  justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full transition-all duration-1000"
          style={{ opacity: 0, transform: 'scale(1.2)' }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <div
          ref={overlayRef}
          className="absolute inset-0 w-full h-full ----bg-background/80 backdrop-blur-sm z-10"
        ></div>
      </div>

      <div className="container mx-auto px-5 z-20 max-w-6xl">
        <TextReveal>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 text-balance">
            Empowering Your Vision with Innovative IT Solutions
          </h1>
        </TextReveal>

        <TextReveal delay={0.4}>
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl ">
            At Finesse, we build next-gen digital products that transform businesses.
            From scalable software to smart systems — your idea, our code.
          </p>
        </TextReveal>

        <div className="flex flex-col sm:flex-row gap-6">
          <MagneticButton>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="text-lg px-8 py-4 border border-current rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 inline-block"
              >
                Let&apos;s Build Together
              </Link>
            </motion.div>
          </MagneticButton>

          <MagneticButton>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="/projects"
                className="text-lg px-8 py-4 border border-current rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 inline-block"
              >
                View Our Work
              </Link>
            </motion.div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
