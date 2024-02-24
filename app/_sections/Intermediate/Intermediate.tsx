const Intermediate = ({ text, id }: { text: string; id?: string }) => {
  return (
    <section
      className="min-h-[17rem] max-w-7xl mx-auto flex items-center bg-base-100 py-10"
      id={id}
    >
      <div className="mx-auto lg:w-4/6 flex items-center justify-center ">
        <div className=" min-h-full flex justify-center items-center ">
          <div className="border-2-b-primary w-3/4 rounded-lg">
            <p className="text-4xl font-bold text-center sm:text-5xl">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intermediate;
