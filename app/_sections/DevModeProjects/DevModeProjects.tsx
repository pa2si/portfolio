import DevModeProject from './_components/DevModeProject';
import devModeProjectsData from './data';
import { MotionSection } from '@/lib/MotionComponents';

const DevModeProjects = () => {
  const slideIn = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
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
        className="p-4 ${
       
            flex flex-wrap justify-center items-center gap-8
  
 "
      >
        {devModeProjectsData.map((devModeProject, index) => (
          <DevModeProject key={index} {...devModeProject} />
        ))}
      </div>
    </MotionSection>
  );
};
export default DevModeProjects;
