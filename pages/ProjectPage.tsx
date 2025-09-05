import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import { portfolioData } from '../constants/portfolioData';
import AnimatedSection from '../components/ui/AnimatedSection';

interface ProjectPageProps {
  project: PortfolioItem;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  const currentIndex = portfolioData.findIndex(p => p.id === project.id);
  const prevProject = portfolioData[currentIndex - 1];
  const nextProject = portfolioData[currentIndex + 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="sticky top-[68px] bg-brand-light/80 backdrop-blur-sm z-30 border-b border-neutral-200">
        <div className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-neutral-500">{project.category}</p>
            <h1 className="text-2xl font-serif font-bold text-brand-dark">{project.title}</h1>
          </div>
          <a href="#portfolio" className="text-sm font-semibold text-brand-dark hover:text-brand-gold transition-colors tracking-wider uppercase">
            Back to Portfolio
          </a>
        </div>
      </header>

      <main>
        <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover"/>
        </div>

        <div className="py-24 sm:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
              <AnimatedSection className="lg:col-span-2">
                <h2 className="text-base font-semibold leading-7 text-brand-gold uppercase">About The Project</h2>
                <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl">
                  {project.description}
                </p>
                <p className="mt-6 text-lg leading-8 text-neutral-600">{project.about}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">The Challenge</h3>
                  <p className="mt-2 text-base leading-7 text-neutral-600">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">The Solution</h3>
                  <p className="mt-2 text-base leading-7 text-neutral-600">{project.solution}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        <div className="pb-24 sm:pb-32 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl font-serif font-bold tracking-tight text-brand-dark sm:text-4xl text-center">Project Gallery</h2>
                </AnimatedSection>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.gallery.map((image, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover aspect-square"/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="bg-brand-light">
            <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center py-8 border-t border-neutral-200">
                <div>
                {prevProject && (
                    <a href={`#/project/${prevProject.id}`} className="group inline-flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-dark group-hover:text-brand-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-gold transition-colors tracking-wider uppercase">Prev Project</span>
                    </a>
                )}
                </div>
                <div>
                {nextProject && (
                    <a href={`#/project/${nextProject.id}`} className="group inline-flex items-center gap-2">
                        <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-gold transition-colors tracking-wider uppercase">Next Project</span>
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

export default ProjectPage;
