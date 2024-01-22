import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

interface PageLink {
  id: number;
  url: string;
  text: string;
}

interface SocialLink {
  url: string;
  icon: JSX.Element;
}

interface EmailLink {
  id: number;
  email: string;
  icon: JSX.Element;
}

export const pageLinks: PageLink[] = [
  {
    id: 1,
    url: '#about',
    text: 'About',
  },
  {
    id: 2,
    url: '#projects',
    text: 'Projects',
  },
  {
    id: 3,
    url: '#contact',
    text: 'Contact',
  },
];

export const socialLinks: SocialLink[] = [
  {
    url: 'https://www.instagram.com/tortuga.storytelling/',
    icon: <FaInstagram />,
  },
  {
    url: 'https://www.facebook.com/johannaerzaehlt',
    icon: <FaFacebook />,
  },
];

export const email: EmailLink[] = [
  {
    id: 1,
    email: 'tortuga.storytelling@posteo.de',
    icon: <AiOutlineMail />,
  },
];
