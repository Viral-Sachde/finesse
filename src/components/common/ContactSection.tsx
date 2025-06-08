'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../animation/TextReveal';
import MagneticButton from '../animation/MagneticButton';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectDescription: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        projectDescription: '',
        budget: '',
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  // Set up animations
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

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-white text-black relative overflow-hidden"
    >
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
                Get in Touch
              </h2>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-lg opacity-80 mb-10">
                Ready to turn your idea into reality?
                Let's connect and explore how FINESSE Solutions can bring your vision to life.
              </p>
            </TextReveal>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="opacity-80">hello@finesse.in</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="opacity-80">+91-XXXXXXX</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="opacity-80">Gujarat, India</p>
              </div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-gray-50 p-8 md:p-10 rounded-sm"
            >
              <h3 className="text-2xl font-light mb-8">Let's start a project</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 opacity-80">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 focus:border-black transition-colors outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 opacity-80">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 focus:border-black transition-colors outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm mb-2 opacity-80">Project Description</label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formState.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-200 focus:border-black transition-colors outline-none resize-none"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm mb-2 opacity-80">Budget (Optional)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 focus:border-black transition-colors outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg==')] bg-no-repeat bg-[right_12px_center]"
                  >
                    <option value="">Select a budget</option>
                    <option value="less-than-5k">Less than $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="more-than-50k">More than $50,000</option>
                  </select>
                </div>

                <div className="pt-4">
                  <MagneticButton>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white py-4 px-6 hover:bg-black/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </MagneticButton>

                  {isSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 mt-4 text-center"
                    >
                      Thank you! Your message has been sent.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute right-0 bottom-40 w-64 h-64 rounded-full"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
        }}
      />
    </section>
  );
}
