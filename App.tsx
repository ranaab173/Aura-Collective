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
import { portfolioData } from './constants/portfolioData';

const App: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = parseInt(hash.replace('#/project/', ''), 10);
        setCurrentProject(id);
        window.scrollTo(0, 0);
      } else {
        setCurrentProject(null);
      }
    };

    handleHashChange(); // Check hash on initial load

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const project = currentProject ? portfolioData.find(p => p.id === currentProject) : undefined;

  return (
    <div className="bg-brand-light font-sans">
      <Header />
      {project ? (
        <ProjectPage project={project} />
      ) : (
        <main>
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default App;
