'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/animation/MagneticButton';

const services = [
  {
    id: 'web-dev',
    title: 'Strategy',
    icon: '🎯',
    description: 'Examining markets, customers, and rivals to shape the company\'s forward view ensuring adaptability in an ever-evolving business landscape.',
    timeline: '2-4 weeks',
    features: [
      'UX Research',
      'In-depth Interviews',
      'Competitive Analysis',
      'Brand Strategy'
    ],
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: '✨',
    description: 'Differentiating companies by crafting unique narratives and visual designs that resonate deeply with their target audiences.',
    timeline: '2-8 weeks',
    features: [
      'Logo',
      'Naming',
      'Brand Identity',
      'Design Support',
      'Brand Book',
      '3D, Motion'
    ],
  },
  {
    id: 'digital',
    title: 'Digital',
    icon: '💻',
    description: 'Designing and developing result-oriented websites and user-friendly digital interfaces backed by strong UX Research, engaging copywriting and crisp visuals.',
    timeline: '1-8 weeks',
    features: [
      'Landing Pages',
      'Corporate Websites',
      'E-Commerce',
      'Web Development',
      'UI/UX Design',
      'Design Support'
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: '🧠',
    description: 'Harnessing cutting-edge AI technologies to automate processes, analyze data, and drive intelligent business decisions.',
    timeline: '4-12 weeks',
    features: [
      'NLP Solutions',
      'Predictive Analytics',
      'Computer Vision',
      'AI Integration'
    ],
  },
  {
    id: 'backend-dev',
    title: 'Backend Development',
    icon: '⚙️',
    description: 'Building robust, secure, and scalable server-side architectures that power modern applications with unmatched reliability.',
    timeline: '3-10 weeks',
    features: [
      'API Development',
      'Database Design',
      'Server Configuration',
      'Security Implementation'
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Implementing cloud-native solutions and DevOps practices to ensure speed, security, and scalability of your digital infrastructure.',
    timeline: '2-6 weeks',
    features: [
      'Cloud Migration',
      'CI/CD Implementation',
      'Infrastructure as Code',
      'Monitoring & Logging'
    ],
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">Our Services</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Explore our comprehensive range of services designed to transform your digital presence and drive business growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-secondary/50"
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">{service.timeline}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="text-2xl font-light mt-1">{service.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6"
                >
                  <a 
                    href={`/services/${service.id}`}
                    className="px-6 py-2 rounded-full border border-current text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 inline-block"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 rounded-lg bg-primary/5"
        >
          <h2 className="text-2xl font-light mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how our services can help you achieve your digital goals.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
