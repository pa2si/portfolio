import About from './_sections/About/About';
import Hero from './_sections/Hero/Hero';
import Intermediate from './_sections/Intermediate/Intermediate';
import CustomWebBenefits from './_sections/CustomWebBenefits/CustomWebBenefits';
import Functionalities from './_sections/Functionalities/Functionalities';
import LayoutExamples from './_sections/LayoutExamples/LayoutExamples';
import Contact from './_sections/Contact/Contact';
import MultiLanguage from './_sections/MultiLanguage/MultiLanguage';
import Footer from './_sections/Footer/Footer';

import { menuLinks } from '@/app/_sections/Navbar/data';

export default function Home() {
  // Original menuLinks object destructuring
  const originalMenuLinks = menuLinks;

  // Preprocess to remove '#' from each ID in the menuLinks object
  const processedMenuLinks = Object.fromEntries(
    Object.entries(originalMenuLinks).map(([key, value]) => [
      key,
      value.replace('#', ''),
    ])
  );

  // Destructure the processed menuLinks object to get the IDs without '#'
  const {
    customWebBenefitsId,
    layoutsId,
    multiLanguageId,
    functionalitiesId,
    contactId,
  } = processedMenuLinks;

  return (
    <main>
      <Hero />
      <About />
      <Intermediate
        text="Why choose a custom-built Website?"
        id={customWebBenefitsId}
      />
      <CustomWebBenefits />
      <Intermediate
        text="Explore layouts featuring typical elements and designs"
        id={layoutsId}
      />
      <LayoutExamples />
      <Intermediate
        text="Update your content yourself via a Content Management System *CMS and even have multi language options."
        id={multiLanguageId}
      />
      <MultiLanguage />
      <Intermediate
        text="Discover a selection of custom-coded examples showcasing general functionalities for web apps."
        id={functionalitiesId}
      />
      <Functionalities />

      <Intermediate
        text="Contact me and lets find out what you need!"
        id="contactId"
      />
      <Contact />
      <Footer />
    </main>
  );
}
