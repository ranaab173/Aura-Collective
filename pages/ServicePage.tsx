import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { servicesData } from '../constants/servicesData';
import { portfolioData } from '../constants/portfolioData';
import AnimatedSection from '../components/ui/AnimatedSection';

interface ServicePageProps {
  service: Service;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const currentIndex = servicesData.findIndex(s => s.id === service.id);
  const prevService = servicesData[currentIndex - 1];
  const nextService = servicesData[currentIndex + 1];

  const relatedProjects = portfolioData.filter(p => service.relatedProjects.includes(p.id));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="sticky top-[68px] bg-brand-light/80 backdrop-blur-sm z-30 border-b border-neutral-200">
        <div className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">{service.title}</h1>
          <a href="/#services" className="text-sm font-semibold text-brand-dark hover:text-brand-gold transition-colors tracking-wider uppercase">
            All Services
          </a>
        </div>
      </header>

      <main>
        <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover"/>
        </div>

        <div className="py-24 sm:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
              <AnimatedSection className="lg:col-span-2">
                <h2 className="text-base font-semibold leading-7 text-brand-gold uppercase">Our Approach</h2>
                <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-600">
                    {service.detailedDescription.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-semibold text-brand-dark font-serif">What's Included</h3>
                <ul className="mt-4 space-y-2 border-l-2 border-brand-gold pl-4 text-neutral-600">
                    {service.subServices.map((sub, index) => <li key={index}>{sub}</li>)}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
            <div className="pb-24 sm:pb-32 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl text-center">Related Work</h2>
                    </AnimatedSection>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {relatedProjects.map((project, index) => (
                            <a href={`#/project/${project.id}`} key={project.id} className="relative overflow-hidden group block">
                                <motion.div
                                    className="overflow-hidden aspect-[4/3]"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                                    <div className="absolute inset-0 bg-brand-dark bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out">
                                        <div className="absolute bottom-0 left-0 p-4 text-white translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                                            <h3 className="text-lg font-bold font-serif">{project.title}</h3>
                                            <p className="text-xs text-brand-gold uppercase tracking-wider">{project.category}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        )}
        
        <div className="bg-brand-light">
            <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center py-8 border-t border-neutral-200">
                <div>
                {prevService && (
                    <a href={`#/service/${prevService.slug}`} className="group inline-flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-dark group-hover:text-brand-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-gold transition-colors tracking-wider uppercase">Prev Service</span>
                    </a>
                )}
                </div>
                <div>
                {nextService && (
                    <a href={`#/service/${nextService.slug}`} className="group inline-flex items-center gap-2">
                        <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-gold transition-colors tracking-wider uppercase">Next Service</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-dark group-hover:text-brand-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                )}
                </div>
            </div>
        </div>
      </main>
    </motion.div>
  );
};

export default ServicePage;
