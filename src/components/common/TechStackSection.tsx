'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../animation/TextReveal';

const techCategories = [
  {
    name: 'Frontend',
    techs: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    name: 'Backend',
    techs: ['Node.js', 'Python (Django, FastAPI)', 'Express.js'],
  },
  {
    name: 'Database',
    techs: ['MySQL', 'MongoDB', 'SQLite', 'Firebase'],
  },
  {
    name: 'Mobile',
    techs: ['React Native', 'Expo'],
  },
  {
    name: 'AI/ML',
    techs: ['Scikit-learn', 'NLTK', 'TensorFlow'],
  },
  {
    name: 'Deployment',
    techs: ['Vercel', 'Netlify', 'Heroku', 'Firebase', 'Docker'],
  },
];

export default function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the section on scroll
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

    // Create scrolling marquee effect
    if (marqueeBannerRef.current) {
      gsap.to(marqueeBannerRef.current.children[0], {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: 'linear',
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-5 max-w-6xl mb-20">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Tech Stack
          </h2>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mb-16 opacity-80">
            We work with modern tools and frameworks to deliver secure, scalable, and maintainable solutions
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <h3 className="text-xl font-medium mb-5 border-b border-white/20 pb-3">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.techs.map((tech, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2.5"></span>
                    <span className="opacity-80">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling brands/tech banner */}
      <div
        ref={marqueeBannerRef}
        className="relative w-full overflow-hidden py-12 bg-white/5 select-none"
      >
        <div className="flex whitespace-nowrap">
          {/* Duplicate the items to create a seamless loop */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-16 mx-8">
              {[
                'React', 'Node.js', 'Python', 'MongoDB', 'AWS',
                'Firebase', 'Docker', 'Tailwind', 'Next.js', 'FastAPI',
                'TensorFlow', 'MySQL', 'Git', 'GitHub', 'VSCode'
              ].map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl font-light opacity-80">{tech}</span>
                  <span className="mx-6 w-2 h-2 bg-white/30 rounded-full"></span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute -left-20 top-40 w-80 h-80 rounded-full"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </section>
  );
}
