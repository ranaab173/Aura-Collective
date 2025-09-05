import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../constants/portfolioData';
import AnimatedSection from './ui/AnimatedSection';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-brand-dark sm:text-5xl">Our Work</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            A curated selection of projects that showcase our commitment to excellence and creative innovation.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 md:auto-rows-fr gap-4">
          {portfolioData.map((item) => (
             <a href={`#/project/${item.id}`} key={item.id} className={`relative overflow-hidden group block ${item.gridClass}`}>
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-dark bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out">
                  <div className="absolute bottom-0 left-0 p-6 text-white translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    <h3 className="text-xl font-bold font-serif">{item.title}</h3>
                    <p className="text-sm text-brand-gold uppercase tracking-wider">{item.category}</p>
                  </div>
                </div>
              </motion.div>
             </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
