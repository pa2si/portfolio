import About from './_sections/About/About';
import Hero from './_sections/Hero/Hero';
import Intermediate from '../utils/Intermediate/Intermediate';
import CustomWebBenefits from './_sections/CustomWebBenefits/CustomWebBenefits';
import Functionalities from './_sections/Functionalities/Functionalities';
import Layouts from './_sections/Layouts/Layouts';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Intermediate
        text="Why choose a custom-built Website?"
        id="informations"
      />
      <CustomWebBenefits />
      <Intermediate text="Explore layouts featuring typical elements and designs" />
      <Layouts />
      <Intermediate
        text="Discover a selection of custom-coded examples showcasing general functionalities for web apps."
        id="layouts"
      />
      <Functionalities />
    </main>
  );
}
