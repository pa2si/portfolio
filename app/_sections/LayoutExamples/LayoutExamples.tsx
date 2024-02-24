import layoutsData from './data';
import LayoutExample from './_components/LayoutExample';
import { MotionSection } from '@/lib/MotionComponents';

const LayoutExamples = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
        {layoutsData.map((layout, index) => (
          <LayoutExample key={index} {...layout} />
        ))}
      </div>
    </MotionSection>
  );
};
export default LayoutExamples;
