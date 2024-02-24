interface SingleCmsData {
  title: string;
  image: string;
  alt: string;
  url: string;
  description: string;
}

const cmsData: SingleCmsData[] = [
  {
    title: 'Tortuga Storytelling',
    image: '/tortuga.png',
    alt: 'Tortuga Storytelling screenshot',
    url: 'https://tortuga-cms.vercel.app/en/',
    description: 'Website with integrated CMS and multi language option',
  },
];

export default cmsData;
