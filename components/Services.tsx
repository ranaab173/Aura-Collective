import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { servicesData } from '../constants/servicesData';

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
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <a href={`#/service/${service.slug}`} className="group block p-8 bg-white hover:shadow-xl transition-shadow duration-300 h-full rounded-sm">
                <div className="flex flex-col h-full">
                  <div>{service.icon}</div>
                  <h3 className="mt-5 text-xl font-semibold leading-7 text-brand-dark">{service.title}</h3>
                  <p className="mt-2 text-base leading-7 text-neutral-600 flex-grow">{service.description}</p>
                  <p className="mt-6 font-semibold text-sm text-brand-gold uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                    Learn More &rarr;
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;