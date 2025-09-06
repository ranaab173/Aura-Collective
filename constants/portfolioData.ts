import { PortfolioItem } from '../types';

const allImages = [
    "https://images.pexels.com/photos/7147772/pexels-photo-7147772.jpeg?auto=compress&cs=tinysrgb&w=1260",
    "https://images.pexels.com/photos/1040400/pexels-photo-1040400.jpeg?auto=compress&cs=tinysrgb&w=1260",
    "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260",
    "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&w=1260",
    "https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?auto=compress&cs=tinysrgb&w=1260",
    "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260",
    "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1260",
    "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260",
];

export const portfolioData: PortfolioItem[] = [
  { 
    id: 1, 
    imageUrl: allImages[0], 
    gridClass: "md:col-span-2 md:row-span-2",
    title: "Luxuria & Co. Rebrand",
    category: "Brand Identity",
    description: "A complete brand overhaul for a leading luxury lifestyle group.",
    about: "Luxuria & Co. approached us with the challenge of modernizing their brand while retaining the essence of timeless elegance. We embarked on a journey to redefine their visual identity, digital presence, and communication strategy to resonate with a new generation of affluent consumers.",
    challenge: "To evolve a heritage brand for a contemporary audience without alienating its loyal clientele. The key was to balance classic sophistication with modern digital trends.",
    solution: "We developed a holistic brand strategy that included a refined logo, a new color palette inspired by precious metals, and a fully responsive e-commerce website. The new digital platform features immersive storytelling and a seamless user experience, resulting in a 40% increase in online engagement.",
    gallery: [allImages[0], allImages[4], allImages[6]]
  },
  { 
    id: 2, 
    imageUrl: allImages[1], 
    gridClass: "",
    title: "Veritas Estates",
    category: "Digital Experience",
    description: "Crafting an immersive web experience for a premier real estate firm.",
    about: "Veritas Estates specializes in exclusive properties. They needed a digital platform that reflected the caliber of their portfolio. We designed and developed a visually-driven website that showcases their listings with stunning photography, virtual tours, and detailed information.",
    challenge: "To translate the tangible luxury of high-end real estate into a compelling digital format. The site needed to be both beautiful and highly functional, offering powerful search and filtering capabilities.",
    solution: "The new website uses a clean, minimalist design to let the properties speak for themselves. We integrated a custom property management system and interactive maps. Post-launch, user session duration increased by 60%, and lead generation from the website tripled.",
    gallery: [allImages[1], allImages[3], allImages[7]]
  },
  { 
    id: 3, 
    imageUrl: allImages[2], 
    gridClass: "",
    title: "Atelier Vogue",
    category: "Content Creation",
    description: "A cinematic campaign for a Parisian fashion house.",
    about: "For Atelier Vogue's Spring/Summer collection, we were tasked with creating a digital campaign that captured the spirit of modern Parisian chic. We produced a series of short films, a lookbook, and social media content that told a cohesive and captivating story.",
    challenge: "To create content that stands out in the saturated fashion market. The campaign needed to be artistic, elegant, and commercially effective, driving both brand prestige and sales.",
    solution: "Our team handled everything from concept development to post-production. The campaign, shot on location in Paris, was a huge success, garnering millions of views and features in major fashion publications. It directly contributed to the collection selling out within weeks of launch.",
    gallery: [allImages[2], allImages[5], allImages[0]]
  },
  { 
    id: 4, 
    imageUrl: allImages[3], 
    gridClass: "md:col-span-2",
    title: "Project Solstice",
    category: "Brand Strategy",
    description: "Launching a new sustainable luxury brand into the market.",
    about: "Project Solstice is a new entrant in the sustainable luxury space. We partnered with them from the ground up to build their brand identity, messaging, and go-to-market strategy. Our goal was to create a brand that was both aspirational and authentic.",
    challenge: "To build a brand from scratch in a competitive market. We needed to define a unique value proposition and create a compelling narrative that would resonate with conscious consumers.",
    solution: "We conducted extensive market research to identify a niche audience. Based on this, we developed a brand identity centered around natural elements and minimalist aesthetics. The launch campaign focused on transparency and craftsmanship, successfully establishing Project Solstice as a key player in its segment.",
    gallery: [allImages[3], allImages[1], allImages[6]]
  },
  { 
    id: 5, 
    imageUrl: allImages[4], 
    gridClass: "md:col-span-2",
    title: "Elysian Hotels",
    category: "Digital Experience",
    description: "Redefining the online booking experience for a boutique hotel chain.",
    about: "Elysian Hotels wanted to elevate their website to match the luxury of their physical locations. We redesigned their entire digital presence, focusing on an intuitive booking process and rich visual content to entice travelers.",
    challenge: "The existing booking system was clunky and had a high drop-off rate. The challenge was to design a seamless, elegant, and mobile-first booking experience that would increase direct reservations.",
    solution: "Our new design features a streamlined, three-step booking process. We incorporated high-resolution imagery and video tours of each property. The new website has seen a 50% increase in direct bookings and has been praised for its usability and design.",
    gallery: [allImages[4], allImages[2], allImages[7]]
   },
  { 
    id: 6, 
    imageUrl: allImages[5], 
    gridClass: "md:col-span-2 md:row-span-2",
    title: "Quantum Yachts",
    category: "Brand Identity",
    description: "A bold new identity for a next-generation yacht manufacturer.",
    about: "Quantum Yachts builds futuristic, high-performance vessels. They needed a brand identity that reflected their innovative spirit and technological prowess. We created a dynamic and powerful brand system that positioned them as a leader in the industry.",
    challenge: "To create a brand that felt both luxurious and technologically advanced, appealing to a clientele that values both performance and design. The identity needed to be versatile enough to work across digital platforms, print materials, and on the yachts themselves.",
    solution: "The new identity is built around a sleek, abstract logo that evokes speed and precision. We developed a custom typeface and a dark, moody color palette accented with electric blue. The branding has been instrumental in securing Quantum's position at the forefront of yacht design.",
    gallery: [allImages[5], allImages[0], allImages[3]]
  },
  { 
    id: 7, 
    imageUrl: allImages[6], 
    gridClass: "",
    title: "Seraph & Co.",
    category: "Content Creation",
    description: "A product launch campaign for a fine jewelry brand.",
    about: "Seraph & Co. was launching a new collection of bespoke jewelry. We were brought on to create a full suite of content, including product photography, lifestyle shots, and a social media campaign to generate buzz and drive pre-orders.",
    challenge: "To capture the intricate detail and craftsmanship of fine jewelry in a digital format. The photography and video needed to convey the quality and luxury of the pieces.",
    solution: "We used advanced macro photography techniques to highlight the details of each piece. The lifestyle shoot was set in a historic villa, creating an atmosphere of opulence and romance. The campaign resulted in the most successful product launch in the company's history.",
    gallery: [allImages[6], allImages[1], allImages[4]]
  },
  { 
    id: 8, 
    imageUrl: allImages[7], 
    gridClass: "",
    title: "Project Nova",
    category: "Digital Experience",
    description: "An interactive digital annual report for a global foundation.",
    about: "We transformed a traditional, text-heavy annual report into an engaging, interactive digital experience. Using data visualization, video, and animation, we brought the foundation's impact to life.",
    challenge: "To present a large amount of data and information in a way that is engaging, accessible, and easy to understand. The digital report needed to be more than just a PDF; it had to be a storytelling tool.",
    solution: "We designed a one-page, scrolling website with interactive charts and embedded media. The user can explore the foundation's work in a non-linear way. The project was highly praised for its innovation and has set a new standard for non-profit reporting.",
    gallery: [allImages[7], allImages[2], allImages[5]]
  },
];