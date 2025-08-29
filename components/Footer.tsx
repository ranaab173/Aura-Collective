
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-brand-dark text-neutral-300">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-white tracking-wider">AURA</h2>
            <p className="mt-4 text-neutral-400">Crafting the future of luxury brands.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2 text-neutral-400">
              <li><a href="mailto:hello@auracollective.com" className="hover:text-brand-gold transition-colors">hello@auracollective.com</a></li>
              <li><p>New York, NY 10012, US</p></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Follow</h3>
            <ul className="mt-4 space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-neutral-700 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Aura Collective. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
