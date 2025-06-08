'use client';

import { motion } from 'framer-motion';
import FoundersSection from '@/components/about/FoundersSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">About FINESSE</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-light mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              At FINESSE Solutions, we envision a future where technology seamlessly integrates with human creativity. 
              Our mission is to transform innovative ideas into powerful digital solutions that drive business growth 
              and enhance user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-light mb-4">Our Approach</h2>
            <p className="text-muted-foreground">
              We combine cutting-edge technology with creative design thinking to deliver solutions that not only 
              meet but exceed expectations. Our team of experts brings years of experience in software development, 
              UI/UX design, and digital transformation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-secondary/50 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-light mb-6">Why Choose FINESSE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-light">Innovation First</h3>
              <p className="text-muted-foreground">We stay ahead of technological trends to provide cutting-edge solutions.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-light">Client-Centric</h3>
              <p className="text-muted-foreground">Your success is our priority. We work closely with you to understand and meet your needs.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-light">Quality Assured</h3>
              <p className="text-muted-foreground">We maintain high standards in every project we undertake.</p>
            </div>
          </div>
        </motion.div>

        <FoundersSection />
      </motion.div>
    </div>
  );
} 