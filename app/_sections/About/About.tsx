import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';

const About = () => {
  return (
    <section
      className="min-h-[35rem] flex items-center justify-center bg-base-200 py-12"
      id="about"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Image container */}
        <div className="w-full h-[400px] md:h-auto relative">
          <Image
            src="/profile.jpg"
            alt="Profile image of Pascal Morgan"
            width={500}
            height={500}
            priority
            className="rounded-l-lg object-cover w-full h-full"
          />
        </div>

        {/* Text container */}
        <div className="p-8 space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-primary">
              About Pascal Morgan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hi, I&apos;m Pascal Morgan, a Fullstack Developer passionate about
              creating unique websites. Ready to bring your vision to life!
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="text-3xl text-primary">
              <FaQuoteRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
