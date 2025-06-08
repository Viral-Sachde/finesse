'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../animation/TextReveal';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "The FINESSE team exceeded our expectations! Their professionalism and speed helped us get our product to market faster.",
    author: "Rahul Mehta",
    position: "Founder @ FitWay App",
    image: "/avatars/male-1.svg"
  },
  {
    id: 2,
    quote: "From design to deployment, they handled everything with precision and care.",
    author: "Priya Shah",
    position: "Owner @ GreenBytes Café",
    image: "/avatars/female-1.svg"
  },
  {
    id: 3,
    quote: "Working with FINESSE was a game-changer for our business. They understood our needs and delivered beyond expectations.",
    author: "Amit Patel",
    position: "CTO @ TechSolutions",
    image: "/avatars/male-2.svg"
  },
  {
    id: 4,
    quote: "Their technical expertise and attention to detail made all the difference in our project's success.",
    author: "Nisha Desai",
    position: "Product Manager @ HealthTech",
    image: "/avatars/female-2.svg"
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          end: 'top center',
          scrub: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);

    // Reset the interval timer when manually changing
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-gray-50 text-black relative overflow-hidden"
    >
      <div className="container mx-auto px-5 max-w-5xl">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-20 text-center">
            What Our Clients Say
          </h2>
        </TextReveal>

        <div className="relative min-h-[300px] md:min-h-[250px]">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              index === activeIndex && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute w-full"
                >
                  <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <blockquote className="text-xl md:text-2xl font-light mb-6 relative">
                        <span className="absolute -left-6 top-0 text-4xl opacity-20">"</span>
                        {testimonial.quote}
                        <span className="text-4xl opacity-20">"</span>
                      </blockquote>

                      <div>
                        <p className="text-lg font-medium">{testimonial.author}</p>
                        <p className="opacity-60">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-black scale-100'
                  : 'bg-gray-300 scale-75 hover:scale-90 hover:bg-gray-400'
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(0, 0, 0, 0.3) 0%, transparent 70%)',
        }}
      ></div>
    </section>
  );
}
