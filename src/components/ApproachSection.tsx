"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, LineChart, Lightbulb, Code, Users, BarChart3, MousePointer2, FileSearch } from "lucide-react";

interface ApproachItem {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const approaches: ApproachItem[] = [
  {
    title: "Research",
    icon: <Search className="w-6 h-6 mb-4 text-primary" />,
    items: [
      "Stakeholders interview",
      "Competitors Analysis",
      "UX Research",
      "In-depth Interviews",
    ],
  },
  {
    title: "Strategy",
    icon: <LineChart className="w-6 h-6 mb-4 text-primary" />,
    items: [
      "Value Proposition Development",
      "Creative platform",
      "Brand strategy",
      "Copywriting",
    ],
  },
  {
    title: "Design",
    icon: <Lightbulb className="w-6 h-6 mb-4 text-primary" />,
    items: [
      "UI/UX Design",
      "Visual Identity",
      "Design System",
      "Interactive Prototypes",
    ],
  },
  {
    title: "Development",
    icon: <Code className="w-6 h-6 mb-4 text-primary" />,
    items: [
      "Frontend Development",
      "Backend Integration",
      "Performance Optimization",
      "Quality Assurance",
    ],
  },
];

export function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-x-0 top-20 z-10 pointer-events-none">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            Our approach to perfect outcomes
          </h2>
        </div>
      </div>

      <div ref={containerRef} className="relative min-h-screen">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 pl-[40vw]">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw]"
              >
                {approach.icon}
                <h3 className="text-2xl font-semibold mb-6">
                  {approach.title}
                </h3>
                <ul className="space-y-3">
                  {approach.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-lg text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 