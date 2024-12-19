import whatWeDo from "@/assets/images/whatWeDo.png";

const WhatWeDo = () => {
  return (
    <div>
      <section className="bg-[#F5EDED] py-10 ">
        <main className="w-[90%] mx-auto sm:flex space-y-4 items-center justify-between">
          <div className="text-center sm:w-[60%]">
            <h3 className="sm:text-3xl text-xl font-extrabold text-black">
              WHAT WE DO
            </h3>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              We create awareness of the dangers of drug abuse/addiction among
              students, teenagers, youths, and general public as a whole.
            </p>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              We offer prevention programs / education and work to assist and
              support drug addicts and prostitutes in living a new life. This is
              driven by our philosophy that 'if you can quit for a day, you can
              quit for a life time'.
            </p>
          </div>
          <div className="sm:w-[35%]">
            <img src={whatWeDo} alt="values" />
          </div>
        </main>
      </section>
    </div>
  );
};

export default WhatWeDo;
