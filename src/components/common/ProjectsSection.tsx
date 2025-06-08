'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../animation/TextReveal';
import MagneticButton from '../animation/MagneticButton';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'deshana',
    title: 'Deshana Gifting',
    subtitle: 'E-commerce Platform',
    description: 'A modern e-commerce platform for luxury gifting items, featuring divine artifacts, home decor, and premium collections with advanced filtering and seamless checkout.',
    tech: ['Next.js', 'Shopify', 'TailwindCSS', 'Framer Motion'],
    image: '/deshana.png',
    url: 'https://www.deshanagifting.com/',
  },
  {
    id: 'it-services',
    title: 'IT Services Platform',
    subtitle: 'Enterprise Solutions Website',
    description: 'A comprehensive IT services platform showcasing custom CRM development, ERP solutions, and digital transformation services with modern UI/UX design.',
    tech: ['React.js', 'Node.js', 'TailwindCSS', 'Vercel'],
    image: '/asc.png',
    url: 'https://it-services-webapp.vercel.app/',
  },
  {
    id: 'bpaperchat',
    title: 'Document QA System',
    subtitle: 'AI-Powered PDF Analysis',
    description: 'An intelligent document analysis tool that uses AI to process PDFs and text files, providing smart answers and insights from uploaded documents.',
    tech: ['Streamlit', 'Python', 'LangChain', 'OpenAI'],
    image: '/qa.png',
    url: 'https://bpaperchat.streamlit.app/',
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    subtitle: 'Personal Showcase',
    description: 'A sleek and modern portfolio website with smooth animations, project showcases, and interactive elements demonstrating web development expertise.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion', 'GSAP'],
    image: '/pf.png',
    url: 'https://bhautikdev.vercel.app/',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate projects on scroll with a staggered effect
    if (projectRefs.current.length) {
      gsap.fromTo(
        projectRefs.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            end: 'center center',
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
      className="py-24 md:py-32 lg:py-40 bg-white text-black relative overflow-hidden"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Our Work
          </h2>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mb-20 opacity-80">
            Featured projects that showcase our expertise and creativity.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => {
                projectRefs.current[index] = el;
              }}
              className="project-card group"
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-video bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </a>

              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-medium">{project.title}</h3>
                  <p className="text-sm opacity-70">{project.subtitle}</p>
                </div>

                <p className="mb-4 opacity-80">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <MagneticButton>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-wider border-b border-black pb-1 inline-block hover:opacity-70 transition-opacity"
                  >
                    View Project
                  </a>
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <MagneticButton>
            <Link
              href="/projects"
              className="text-lg px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 inline-block"
            >
              View All Projects
            </Link>
          </MagneticButton>
        </div>
      </div>

      <motion.div
        className="absolute right-0 top-1/4 w-32 h-32 bg-gray-100 rounded-full"
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ filter: 'blur(50px)' }}
      />
    </section>
  );
}
