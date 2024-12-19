import caughtInWeb from "@/assets/images/caughtInWeb.png";

const CaughInTheWeb = () => {
  return (
    <div>
      <section className="bg-white py-10 ">
        <main className="w-[90%] mx-auto flex flex-col-reverse gap-y-4  sm:flex-row-reverse items-center justify-between">
          <div className="text-center sm:w-[60%]">
            <h3 className="sm:text-3xl text-xl font-extrabold text-black">
              ALREADY CAUGHT IN THE WEB?
            </h3>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              Do You Need Help Overcoming Addiction or Prostitution?
            </p>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              Addiction does not discriminate. It affects people worldwide
              whatever may be their background, age, gender or race.
            </p>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              Prostitution saps out life from the owner and leaves an empty
              shell.
            </p>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              Whichever is your situation, you can quit today, embrace the joy
              of freedom, recover your self-worth and realize your dreams.
            </p>
          </div>
          <div className="sm:w-[35%]">
            <img src={caughtInWeb} alt="values" />
          </div>
        </main>
      </section>
    </div>
  );
};

export default CaughInTheWeb;
