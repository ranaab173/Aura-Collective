
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  gridClass: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
