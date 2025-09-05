import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';
import { portfolioData } from './constants/portfolioData';
import { servicesData } from './constants/servicesData';

type Page = 
  | { type: 'main' }
  | { type: 'project'; id: number }
  | { type: 'service'; slug: string };


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>({ type: 'main' });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = parseInt(hash.replace('#/project/', ''), 10);
        setCurrentPage({ type: 'project', id });
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/service/')) {
        const slug = hash.replace('#/service/', '');
        setCurrentPage({ type: 'service', slug });
        window.scrollTo(0, 0);
      } else {
        setCurrentPage({ type: 'main' });
      }
    };

    handleHashChange(); // Check hash on initial load

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage.type) {
      case 'project':
        const project = portfolioData.find(p => p.id === currentPage.id);
        return project ? <ProjectPage project={project} /> : renderMainPage();
      case 'service':
        const service = servicesData.find(s => s.slug === currentPage.slug);
        return service ? <ServicePage service={service} /> : renderMainPage();
      case 'main':
      default:
        return renderMainPage();
    }
  }
  
  const renderMainPage = () => (
    <main>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );

  return (
    <div className="bg-brand-light font-sans">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;