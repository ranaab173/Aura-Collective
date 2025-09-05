import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-brand-dark/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/#" onClick={closeMenu} className="text-2xl font-serif font-bold text-white tracking-wider z-50">
            AURA
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-brand-gold transition-colors duration-300 tracking-widest text-sm uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden z-50">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    )}
                </svg>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-brand-dark z-40 pt-24"
            >
                <nav className="container mx-auto px-6 flex flex-col items-center space-y-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="text-white text-2xl font-serif hover:text-brand-gold transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
