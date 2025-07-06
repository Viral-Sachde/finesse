'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../animation/TextReveal';

const values = [
  {
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
    icon: "💡",
  },
  {
    title: "Transparent Collaboration",
    description: "We believe in open communication and working closely with clients throughout the development process.",
    icon: "🤝",
  },
  {
    title: "Tech-Driven Execution",
    description: "Our expertise in diverse technologies allows us to deliver robust and scalable solutions.",
    icon: "🛠️",
  },
  {
    title: "Results That Matter",
    description: "We focus on delivering measurable outcomes that drive business growth and success.",
    icon: "🎯",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const valueCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Value cards animation
    if (valueCardsRef.current.length) {
      gsap.fromTo(
        valueCardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: false,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">
            Who We Are
          </h2>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <TextReveal>
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-muted-foreground">
                We're a passionate team of developers, designers, and problem-solvers dedicated to creating impactful digital solutions. Founded by Bhautik Prajapati and Viral Sachde, The Finesse Co is more than a company — it's a mindset focused on innovation, quality, and growth.
              </p>
            </TextReveal>
          </div>

          <div>
            <TextReveal delay={0.2}>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                Our mission is to empower businesses through reliable, scalable, and user-focused digital products. We believe technology should solve real-world problems and create meaningful experiences.
              </p>
            </TextReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              ref={(el: HTMLDivElement | null) => {
                valueCardsRef.current[index] = el;
              }}
              className="p-6 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -right-20 top-40 w-64 h-64 rounded-full bg-primary/5"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ filter: 'blur(80px)' }}
      />

      <motion.div
        className="absolute -left-10 bottom-40 w-40 h-40 rounded-full bg-primary/5"
        animate={{
          x: [0, -10, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        style={{ filter: 'blur(60px)' }}
      />
    </section>
  );
}
