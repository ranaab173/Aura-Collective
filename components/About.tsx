
import React from 'react';
import { ImageAssets } from '../constants/ImageAssets';
import AnimatedSection from './ui/AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          <AnimatedSection className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-brand-gold uppercase">About Us</h2>
              <p className="mt-2 text-4xl font-serif font-bold tracking-tight text-brand-dark sm:text-5xl">The Art of Digital Craftsmanship</p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Aura Collective was founded on the principle that true luxury is a blend of artistry and strategy. We are a team of designers, developers, and strategists passionate about creating digital masterpieces that are not only beautiful but also profoundly effective.
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Our collaborative process ensures every detail is considered, every pixel perfected, and every interaction meaningful. We partner with discerning clients who value quality and seek to make a lasting impact.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex items-center justify-center">
             <img
                src={ImageAssets.aboutPortrait}
                alt="Editorial portrait of the team"
                className="w-full max-w-md lg:max-w-none rounded-sm object-cover h-[500px] lg:h-[600px]"
              />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
