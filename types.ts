export interface Service {
  id: number;
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  heroImage: string;
  detailedDescription: string[];
  subServices: string[];
  relatedProjects: number[];
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  gridClass: string;
  description: string;
  about: string;
  challenge: string;
  solution: string;
  gallery: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}