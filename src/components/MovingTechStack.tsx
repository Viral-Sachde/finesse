"use client";

import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "Django", "PostgreSQL", "MongoDB", "AWS", "Docker",
  "Kubernetes", "GraphQL", "REST API", "TailwindCSS", "Redux",
  "Git", "CI/CD", "Jest", "React Native", "Flutter",
  // Add duplicates for seamless loop
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "Django", "PostgreSQL", "MongoDB", "AWS", "Docker",
];

export function MovingTechStack() {
  return (
    <div className="relative w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12 mb-32">
      <div className="relative w-full">
        <motion.div
          className="flex whitespace-nowrap gap-8 px-4"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xl sm:text-2xl font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 