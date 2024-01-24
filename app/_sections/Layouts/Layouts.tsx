import layoutsData from './data';
import Layout from './_components/Layout';

const Layouts = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto bg-base-200 bg-opacity-10 shadow-lg shadow-primary p-12 border-t-2 my-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
          {layoutsData.map((layout, index) => (
            <Layout key={index} {...layout} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Layouts;
