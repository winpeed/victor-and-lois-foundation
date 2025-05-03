import OurValues from "@/assets/images/OurValues.png";

const Values = () => {
  return (
    <div>
      <section className="bg-LightPink py-10 ">
        <main className="w-[90%] mx-auto sm:flex space-y-4 items-center justify-between">
          <div className="text-center sm:w-[60%]">
            <h3 className="sm:text-3xl text-xl font-extrabold text-black">
              OUR VALUES
            </h3>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              At Victor & Lois Abraham Foundation, we are committed to the
              core values of faith, mercy, compassion, respect, integrity,
              accountability and innovation.
            </p>
          </div>
          <div className="sm:w-[35%]">
            <img src={OurValues} alt="values" />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Values;
