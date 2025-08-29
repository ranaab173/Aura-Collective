
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';
import AnimatedSection from './ui/AnimatedSection';

const testimonialsData: Testimonial[] = [
  {
    quote: "Working with Aura was a transformative experience. Their attention to detail and creative vision are unparalleled. They truly understood our brand's essence.",
    author: 'Eleanor Vance',
    company: 'CEO, Luxuria & Co.',
  },
  {
    quote: 'The digital platform they built for us has not only elevated our online presence but has significantly driven engagement and sales. Exceptional team, exceptional results.',
    author: 'Julian Atherton',
    company: 'Founder, Veritas Estates',
  },
  {
    quote: "Aura Collective is the epitome of professionalism and artistry. They delivered beyond our expectations, on time, and with a level of polish that is rare to find.",
    author: 'Sofia Rossi',
    company: 'Art Director, Atelier Vogue',
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000); // Auto-play every 7 seconds
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 sm:py-32 bg-white">
      <AnimatedSection className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold tracking-tight text-brand-dark sm:text-5xl">What Our Clients Say</h2>
        <div className="relative mt-12 max-w-3xl mx-auto h-48">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute w-full"
            >
              <p className="text-2xl font-serif italic text-neutral-700">"{testimonialsData[index].quote}"</p>
              <footer className="mt-8">
                <p className="font-semibold text-brand-dark">{testimonialsData[index].author}</p>
                <p className="text-neutral-500">{testimonialsData[index].company}</p>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={prevTestimonial} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Previous testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextTestimonial} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Next testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Testimonials;
