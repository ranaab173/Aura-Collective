import React, { useState } from 'react';
import AnimatedSection from './ui/AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-brand-dark sm:text-5xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We would love to hear about your project. Let's create something exceptional together.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="mt-16 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold transition-shadow"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-brand-dark text-white uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded-sm hover:bg-brand-gold transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
