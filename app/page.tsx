import About from './_sections/About/About';
import Hero from './_sections/Hero/Hero';
import Intermediate from './_sections/Intermediate/Intermediate';
import CustomWebBenefits from './_sections/CustomWebBenefits/CustomWebBenefits';
import Functionalities from './_sections/Functionalities/Functionalities';
import LayoutExamples from './_sections/LayoutExamples/LayoutExamples';
import Contact from './_sections/Contact/Contact';
import Cms from './_sections/Cms/Cms';
import Footer from './_sections/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Intermediate
        text="Why choose a custom-built Website?"
        id="customWebBenefits"
      />
      <CustomWebBenefits />
      <Intermediate
        text="Explore layouts featuring typical elements and designs"
        id="layouts"
      />
      <LayoutExamples />
      <Intermediate
        text="We could integrate a Content Manage System *CMS and even setup multi language options if needed!"
        id="multiLanguage"
      />
      <Cms />
      <Intermediate
        text="Discover a selection of custom-coded examples showcasing general functionalities for web apps."
        id="functionalities"
      />
      <Functionalities />

      <Intermediate
        text="Contact me and lets find out what you need!"
        id="contact"
      />
      <Contact />
      <Footer />
    </main>
  );
}
