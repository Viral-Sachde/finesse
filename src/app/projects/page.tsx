'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from '@/components/animation/MagneticButton';

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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">Our Projects</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Explore our portfolio of innovative solutions that have helped businesses transform their digital presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Want to start your own project with us?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-6"
          >
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 