interface Funcionalities {
  title: string;
  image: string;
  alt: string;
  url: string;
  description: string;
}

const functionalitiesData: Funcionalities[] = [
  {
    title: 'Modal',
    image: '/modal.png',
    alt: 'Modal website screenshot',
    url: 'https://pa2si-modal.netlify.app/',
    description:
      'Interactive Modal: Seamlessly overlay images, text, or other content in a dynamic window that appears above your current screen.',
  },
  {
    title: 'Lorem Ipsum',
    image: '/lorem-ipsum.png',
    alt: 'Lorem Ipsum website screenshot',
    url: 'https://pa2si-lorem-ipsum.netlify.app/',
    description:
      'Lorem Ipsum Generator: Effortlessly create placeholder text for your design mockups and website drafts.',
  },
  {
    title: 'Tabs',
    image: '/tabs.png',
    alt: 'Tabs website screenshot',
    url: 'https://pa2si-tabs.netlify.app/',
    description:
      'Tabbed Interface: Organize content in a user-friendly, tabbed format for efficient navigation and a clean layout.',
  },
  {
    title: 'Menu',
    image: '/menu.png',
    alt: 'Menu website screenshot',
    url: 'https://pa2si-menu.netlify.app/',
    description:
      'Dynamic Menu: Customize and showcase menu options interactively based on user preferences or selections.',
  },
  {
    title: 'Grocery Bud',
    image: '/grocery-bud.png',
    alt: 'Grocery Bud website screenshot',
    url: 'https://pa2si-grocery-bud.netlify.app/',
    description:
      'Grocery Bud: A versatile list-maker for tracking your grocery shopping. Add, delete, or check off items with ease.',
  },
  {
    title: 'Reviews',
    image: '/reviews.png',
    alt: 'Reviews website screenshot',
    url: 'https://pa2si-reviews.netlify.app/',
    description:
      'Customer Reviews Carousel: A sleek, sliding interface for showcasing customer testimonials or product reviews ',
  },
  {
    title: 'Tours',
    image: '/tours.png',
    alt: 'Tours website screenshot',
    url: 'https://pa2si-tours.netlify.app/',
    description:
      'Virtual Tours: Explore and interact with information cards - expand for more details or remove them as needed.',
  },
  {
    title: 'Accordeon',
    image: '/accordeon.png',
    alt: 'Accordeon website screenshot',
    url: 'https://pa2si-accordion.netlify.app/',
    description:
      'Accordion FAQ: Conveniently toggle between questions and answers using a straightforward, button-controlled interface.',
  },
];

export default functionalitiesData;
