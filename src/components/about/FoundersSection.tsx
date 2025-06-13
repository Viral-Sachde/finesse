'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

const founders = [
  // {
  //   name: "Viral Sachde",
  //   role: "Founder & Software Developer",
  //   image: "/v.jpeg",
  //   description: "A passionate software developer with expertise in modern web technologies and system architecture. Leading the technical vision and innovation at FINESSE Solutions.",
  //   social: {
  //     github: "https://github.com/viralsachde",
  //     linkedin: "https://linkedin.com/in/viral-sachde",
  //     twitter: "https://twitter.com/viralsachde"
  //   }
  // },
  {
    name: "Bhautik Prajapati",
    role: "Co-Founder & Software Developer",
    image: "/b.jpeg",
    description: "Full-stack developer specializing in scalable applications and innovative solutions. Driving technical excellence and project delivery at FINESSE Solutions.",
    social: {
      github: "https://github.com/bhautikprajapati",
      linkedin: "https://linkedin.com/in/bhautik-prajapati",
      twitter: "https://twitter.com/bhautikdev"
    }
  }
];

export default function FoundersSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-light mb-12">Meet Our Founders</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-secondary/20">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex gap-6 justify-center">
                    <a
                      href={founder.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Github className="w-7 h-7" />
                    </a>
                    <a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-7 h-7" />
                    </a>
                    <a
                      href={founder.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <Twitter className="w-7 h-7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-lg">
              <h3 className="text-2xl font-medium mb-2">{founder.name}</h3>
              <p className="text-primary mb-4">{founder.role}</p>
              <p className="text-muted-foreground leading-relaxed">{founder.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 