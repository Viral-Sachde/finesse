import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import TextReveal from '@/components/animation/TextReveal';
import MagneticButton from '@/components/animation/MagneticButton';

// Service data with detailed information
const servicesData = {
  'web-development': {
    title: 'Web Development',
    icon: '🌐',
    description: 'We build modern, responsive, and high-performing websites that perfectly represent your brand and help you achieve your business goals.',
    longDescription: 'Our web development team specializes in creating custom websites that stand out in the digital landscape. Whether you need a simple informational site, a complex e-commerce platform, or a dynamic web application, we have the expertise to deliver solutions that meet your unique requirements. We focus on creating user-friendly interfaces, ensuring optimal performance across all devices, and implementing robust security measures to protect your data.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'UI/UX Design',
      'Responsive Design',
      'Content Management Systems',
      'Web Performance Optimization',
      'SEO-friendly Development'
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'WordPress', 'Shopify', 'HTML5/CSS3', 'JavaScript/TypeScript'],
    processSteps: [
      { title: 'Discovery', description: 'We start by understanding your business, goals, and target audience.' },
      { title: 'Planning', description: 'Develop a comprehensive strategy and create wireframes and prototypes.' },
      { title: 'Design', description: 'Create visually appealing and user-friendly interfaces.' },
      { title: 'Development', description: 'Build the website with clean, secure, and efficient code.' },
      { title: 'Testing', description: 'Rigorous testing across devices and browsers to ensure quality.' },
      { title: 'Deployment', description: 'Launch your website and provide post-launch support.' }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    icon: '📱',
    description: 'We build cross-platform mobile apps that deliver seamless user experiences and help you connect with customers on the go.',
    longDescription: 'Our mobile app development services are designed to help businesses create engaging and functional applications that users love. Whether you need an app for iOS, Android, or both, we leverage the latest technologies and best practices to deliver solutions that exceed expectations. Our focus is on creating intuitive interfaces, ensuring optimal performance, and implementing features that provide real value to your users.',
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'Native App Development',
      'App Maintenance & Support',
      'Performance Optimization',
      'UI/UX Design for Mobile',
      'App Store Optimization',
      'Push Notification Services'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AppSync', 'Expo'],
    processSteps: [
      { title: 'Concept', description: 'Define app goals, features, and target audience.' },
      { title: 'Design', description: 'Create wireframes, user flows, and visual designs.' },
      { title: 'Development', description: 'Build the app with clean, maintainable code.' },
      { title: 'Testing', description: 'Thorough testing on multiple devices and scenarios.' },
      { title: 'Deployment', description: 'Launch the app to app stores and provide support.' },
      { title: 'Maintenance', description: 'Ongoing updates, feature additions, and optimizations.' }
    ]
  },
  'ai-ml': {
    title: 'AI & Machine Learning',
    icon: '🧠',
    description: 'Harness the power of AI to automate processes, analyze data, and scale your business smarter.',
    longDescription: 'Our AI and machine learning solutions enable businesses to leverage advanced technologies to gain insights, make predictions, and automate processes. We help you implement AI-powered features that can transform your operations, enhance customer experiences, and drive innovation. From natural language processing to computer vision and predictive analytics, we have the expertise to implement sophisticated AI solutions tailored to your specific needs.',
    features: [
      'NLP Solutions',
      'Predictive Analytics',
      'Computer Vision',
      'AI Integration',
      'Machine Learning Models',
      'Data Mining & Analysis',
      'Automated Decision Systems',
      'Recommendation Engines'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NLTK', 'OpenAI API', 'Google Cloud AI', 'AWS SageMaker'],
    processSteps: [
      { title: 'Data Gathering', description: 'Collect and organize the data needed for your AI solution.' },
      { title: 'Data Analysis', description: 'Clean, process, and analyze data for machine learning.' },
      { title: 'Model Development', description: 'Build and train machine learning models.' },
      { title: 'Testing & Validation', description: 'Test models against various scenarios and refine.' },
      { title: 'Integration', description: 'Integrate AI solutions into your existing systems.' },
      { title: 'Monitoring', description: 'Ongoing monitoring and improvement of AI performance.' }
    ]
  },
  'custom-software': {
    title: 'Custom Software Development',
    icon: '⚙️',
    description: 'From idea to execution — we develop tailor-made software solutions that solve your specific business challenges.',
    longDescription: 'Our custom software development services are designed for businesses that need specialized solutions to address unique challenges. We take your ideas from concept to reality, creating software that streamlines processes, enhances productivity, and provides a competitive edge. Our development approach emphasizes scalability, security, and user experience, ensuring that your custom software meets immediate needs while accommodating future growth.',
    features: [
      'Business Process Automation',
      'SaaS Products',
      'Legacy System Modernization',
      'Scalable Solutions',
      'Enterprise Applications',
      'Desktop Applications',
      'Integration Services',
      'Maintenance & Support'
    ],
    technologies: ['JavaScript/TypeScript', 'Python', 'Java', '.NET', 'PHP', 'SQL/NoSQL Databases', 'Cloud Technologies'],
    processSteps: [
      { title: 'Requirements Analysis', description: 'Thoroughly understand your business needs and challenges.' },
      { title: 'System Design', description: 'Create technical architecture and system design documents.' },
      { title: 'Development', description: 'Build the software using agile development methodologies.' },
      { title: 'Quality Assurance', description: 'Comprehensive testing to ensure reliability and performance.' },
      { title: 'Deployment', description: 'Implement the solution in your environment.' },
      { title: 'Maintenance', description: 'Provide ongoing support, updates, and enhancements.' }
    ]
  },
  'backend-development': {
    title: 'Backend Development',
    icon: '🧰',
    description: 'Robust, secure, and scalable backend architecture designed to support your applications at any scale.',
    longDescription: 'Our backend development services focus on creating the server-side infrastructure that powers your applications. We design and implement robust, secure, and efficient systems that handle data processing, API interactions, and business logic. Our backend solutions are built to scale with your business, ensuring optimal performance and reliability even as your user base grows. We emphasize security at every stage, implementing best practices to protect your data and systems.',
    features: [
      'API Development',
      'Database Design',
      'Server Configuration',
      'Security Implementation',
      'Microservices Architecture',
      'Cloud Backend Solutions',
      'Performance Optimization',
      'Third-party Integrations'
    ],
    technologies: ['Node.js', 'Python (Django/Flask)', 'Java Spring', 'PHP Laravel', 'GraphQL', 'REST APIs', 'MongoDB', 'PostgreSQL', 'MySQL'],
    processSteps: [
      { title: 'Architecture Planning', description: 'Design optimal backend architecture for your needs.' },
      { title: 'API Design', description: 'Create efficient and well-documented API endpoints.' },
      { title: 'Database Modeling', description: 'Design database schemas for optimal performance.' },
      { title: 'Development', description: 'Implement backend services with security in mind.' },
      { title: 'Testing', description: 'Thorough testing of all backend components.' },
      { title: 'Deployment & Scaling', description: 'Deploy with proper infrastructure for reliability and scalability.' }
    ]
  },
  'cloud-devops': {
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Ensure speed, security, and scalability with our cloud-based DevOps practices and infrastructure solutions.',
    longDescription: 'Our Cloud & DevOps services help businesses modernize their infrastructure, streamline development workflows, and optimize operational efficiency. We specialize in cloud migration, infrastructure automation, and implementing continuous integration/continuous deployment (CI/CD) pipelines. Our solutions enable faster delivery of features, improved reliability, and enhanced security posture. We work with leading cloud providers to design and implement infrastructure that meets your specific requirements while optimizing costs.',
    features: [
      'Cloud Migration',
      'CI/CD Implementation',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Containerization Solutions',
      'Kubernetes Orchestration',
      'Cloud Cost Optimization',
      'Disaster Recovery Planning'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions'],
    processSteps: [
      { title: 'Assessment', description: 'Evaluate your current infrastructure and requirements.' },
      { title: 'Planning', description: 'Develop a comprehensive cloud and DevOps strategy.' },
      { title: 'Infrastructure Setup', description: 'Implement cloud infrastructure with security best practices.' },
      { title: 'CI/CD Implementation', description: 'Set up automated pipelines for continuous delivery.' },
      { title: 'Monitoring', description: 'Implement comprehensive monitoring and alerting.' },
      { title: 'Optimization', description: 'Continuous improvement of performance and cost efficiency.' }
    ]
  }
};

type ServiceParams = {
  params: {
    service: keyof typeof servicesData;
  };
};

export async function generateMetadata({ params }: ServiceParams): Promise<Metadata> {
  const service = servicesData[params.service as keyof typeof servicesData];

  if (!service) {
    return {
      title: 'Service Not Found | FINESSE Solutions',
    };
  }

  return {
    title: `${service.title} | FINESSE Solutions`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServiceParams) {
  const serviceId = params.service;
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white text-black pt-32 pb-24">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/services"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Services
            </Link>
            <span className="opacity-60">/</span>
            <span>{service.title}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">{service.icon}</span>
            <TextReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light">
                {service.title}
              </h1>
            </TextReveal>
          </div>

          <TextReveal delay={0.2}>
            <p className="text-lg md:text-xl max-w-3xl opacity-80 mt-6">
              {service.description}
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <TextReveal>
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6">Overview</h2>
              <p className="opacity-80 leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </TextReveal>

          <div>
            <TextReveal delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-light mb-6">Features</h2>
            </TextReveal>

            <div className="space-y-3">
              {service.features.map((feature, i) => (
                <TextReveal key={i} delay={0.3 + (i * 0.05)}>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black mt-2.5"></span>
                    <span>{feature}</span>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-light mb-8">Our Process</h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.processSteps.map((step, i) => (
              <TextReveal key={i} delay={0.1 + (i * 0.1)}>
                <div className="p-6 border border-gray-100 rounded-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-sm">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                  </div>
                  <p className="opacity-80">{step.description}</p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-light mb-8">Technologies We Use</h2>
          </TextReveal>

          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech, i) => (
              <TextReveal key={i} delay={0.1 + (i * 0.05)}>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                  {tech}
                </span>
              </TextReveal>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-16 rounded-sm text-center">
          <TextReveal>
            <h2 className="text-2xl md:text-3xl font-light mb-6">Ready to get started?</h2>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
            </p>
          </TextReveal>

          <MagneticButton>
            <Link
              href="/contact"
              className="inline-block text-lg px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
