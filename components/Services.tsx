
import React from 'react';
import { Service } from '../types';
import AnimatedSection from './ui/AnimatedSection';

const servicesData: Service[] = [
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    title: 'Brand Strategy',
    description: 'Defining your unique identity and market position with precision and creative insight.',
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    title: 'Digital Experiences',
    description: 'Creating immersive and intuitive websites and applications that captivate and convert.',
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    title: 'Content Creation',
    description: 'Producing stunning visual and written content that tells your brand’s story with elegance.',
  },
];

const Services: React.FC = () => {
  return (
    <div id="services" className="py-24 sm:py-32 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-brand-dark sm:text-5xl">Our Expertise</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We deliver a specialized suite of services designed to build, elevate, and empower luxury brands in the digital era.
          </p>
        </AnimatedSection>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="flex flex-col">
                <div>{service.icon}</div>
                <h3 className="mt-5 text-xl font-semibold leading-7 text-brand-dark">{service.title}</h3>
                <p className="mt-2 text-base leading-7 text-neutral-600">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
