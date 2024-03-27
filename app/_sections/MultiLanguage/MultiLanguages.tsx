import MultiLanguageItem from './_components/MultiLanguageItem';
import { MotionSection } from '@/lib/MotionComponents';
import multiLanguageData from './data';

const MultiLanguages = () => {
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
          multiLanguageData.length <= 2
            ? 'flex justify-center items-center gap-8'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        }`}
      >
        {multiLanguageData.map((multiLanguageItem, index) => (
          <MultiLanguageItem key={index} {...multiLanguageItem} />
        ))}
      </div>
    </MotionSection>
  );
};
export default MultiLanguages;
