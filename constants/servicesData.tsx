import React from 'react';
import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 1,
    slug: 'brand-strategy',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    title: 'Brand Strategy',
    description: 'Defining your unique identity and market position with precision and creative insight.',
    heroImage: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260',
    detailedDescription: [
        'At Aura Collective, brand strategy is the foundation of everything we build. We believe a powerful brand is more than just a logo; it\'s an intricate system of values, stories, and experiences. Our process is a deep dive into your company\'s DNA, your market, and your audience.',
        'We craft a comprehensive strategy that articulates your purpose, defines your voice, and establishes a visual identity that commands attention. This strategic framework becomes the guiding star for every marketing initiative, ensuring consistency and building lasting brand equity.'
    ],
    subServices: [
        'Market & Audience Research',
        'Competitive Analysis',
        'Brand Positioning & Architecture',
        'Messaging & Tone of Voice',
        'Visual Identity Systems',
        'Brand Guidelines',
    ],
    relatedProjects: [1, 4, 6],
  },
  {
    id: 2,
    slug: 'digital-experiences',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    title: 'Digital Experiences',
    description: 'Creating immersive and intuitive websites and applications that captivate and convert.',
    heroImage: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260',
    detailedDescription: [
        'We design and build digital platforms that are not just visually stunning, but also deeply functional and user-centric. Our approach to digital experiences combines aesthetic elegance with cutting-edge technology to create seamless journeys for your audience.',
        'From luxury e-commerce sites to immersive brand platforms, we focus on responsive design, intuitive navigation, and performance. Every interaction is thoughtfully crafted to engage users, tell your brand\'s story, and drive meaningful business results.'
    ],
    subServices: [
        'UX/UI Design',
        'Website Design & Development',
        'E-commerce Solutions',
        'Mobile Application Design',
        'Interactive Content',
        'Performance Optimization',
    ],
    relatedProjects: [2, 5, 8],
  },
  {
    id: 3,
    slug: 'content-creation',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    title: 'Content Creation',
    description: 'Producing stunning visual and written content that tells your brand’s story with elegance.',
    heroImage: 'https://images.pexels.com/photos/4057738/pexels-photo-4057738.jpeg?auto=compress&cs=tinysrgb&w=1260',
    detailedDescription: [
        'Compelling content is the soul of a modern luxury brand. Our in-house team of creatives, including photographers, videographers, and copywriters, specializes in producing content that captures the essence of your brand and resonates with your audience.',
        'We manage the entire creative process, from concept development and art direction to production and post-production. The result is a cohesive body of work—be it a cinematic brand film, an editorial-style photoshoot, or engaging social media content—that elevates your brand and inspires your audience.'
    ],
    subServices: [
        'Art Direction & Concepting',
        'Photography',
        'Videography & Film Production',
        'Copywriting & Editorial Content',
        'Social Media Content Strategy',
        'Animation & Motion Graphics',
    ],
    relatedProjects: [3, 7],
  },
];
