import HeroSection from '@/components/common/HeroSection'
import AboutSection from '@/components/common/AboutSection'
import ServicesSection from '@/components/common/ServicesSection'
import ProjectsSection from '@/components/common/ProjectsSection'
import TestimonialsSection from '@/components/common/TestimonialsSection'
import ContactSection from '@/components/common/ContactSection'
import { ApproachSection } from '@/components/ApproachSection'
import { MovingTechStack } from '@/components/MovingTechStack'


export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ApproachSection />
      <MovingTechStack />
      <ContactSection />
    </div>
  )
}
