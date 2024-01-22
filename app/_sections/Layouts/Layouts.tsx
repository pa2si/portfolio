import layoutsData from './data';
import Image from 'next/image';

const Layouts = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto bg-base-200 bg-opacity-10 shadow-lg shadow-primary p-12 border-t-2 my-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
          {layoutsData.map((layout, index) => (
            <div
              key={index}
              className="card bordered bg-white md:hover:scale-105 transform transition duration-300 ease-in-out shadow-lg"
            >
              <a href={layout.url} target="_blank" rel="noopener noreferrer">
                <figure>
                  <Image
                    src={layout.image}
                    alt={layout.alt}
                    width={500}
                    height={300}
                    priority
                    className="rounded-t-md border-b-2 shadow-sm"
                  />
                </figure>
              </a>
              <div className="card-body">
                <h2 className="card-title">{layout.title}</h2>
                <p>{layout.description}</p>
                <div className="card-actions justify-center mt-6 md:hidden">
                  <a
                    href={layout.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Layouts;
