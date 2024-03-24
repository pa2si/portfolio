import SingleCms from './_components/SingleCms';
import { MotionSection } from '@/lib/MotionComponents';
import cmsData from './data';

const MultiLanguage = () => {
  const slideIn = {
    initial: {
      opacity: 0.3,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
      },
    },
  };

  return (
    <MotionSection
      className="max-w-7xl mx-auto bg-base-300 bg-opacity-10 shadow-lg shadow-primary p-12 border-t-2 my-8 rounded-lg"
      variants={slideIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div
        className={`p-4 ${
          cmsData.length <= 2
            ? 'flex justify-center items-center gap-8'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        }`}
      >
        {cmsData.map((singleCms, index) => (
          <SingleCms key={index} {...singleCms} />
        ))}
      </div>
    </MotionSection>
  );
};
export default MultiLanguage;
