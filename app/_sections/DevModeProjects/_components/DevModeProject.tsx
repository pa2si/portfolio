import Image from 'next/image';
import devModeProjectsData from '../data';

type DevModeProjectProps = (typeof devModeProjectsData)[number];

const DevModeProject = ({
  title,
  image,
  alt,
  url,
  description,
}: DevModeProjectProps) => {
  return (
    <div className="card  relative bordered md:hover:scale-105 transform transition duration-300 ease-in-out shadow-lg">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <figure className="relative h-[15rem] min-w-[15rem] sm:min-w-[30rem]">
          <Image
            src={image}
            alt={alt}
            sizes="40vw"
            fill
            priority
            className="absolute object-cover rounded-t-md border-b-2 shadow-sm"
          />
        </figure>
      </a>
      {/* card */}
      <div className="card-body bg flex flex-col ">
        <h2 className="card-title">{title}</h2>
        <p className="flex-grow">{description}</p>
        <div className="card-actions justify-center mt-6 md:hidden">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            View Website
          </a>
        </div>
      </div>
    </div>
  );
};
export default DevModeProject;
