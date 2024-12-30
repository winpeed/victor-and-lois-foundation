import CourtesyImage from "@/assets/images/Courtesy.png";

const Courtesy = () => {
  return (
    <div>
      <section className=" py-10 px-10 ">
        <main className="w-[90%] mx-auto sm:flex space-y-4 items-center justify-between text-[#2E9182]">
          <div className="sm:w-[60%] sm:text-2xl ">
            <p className="w-[85%] mt-5 font-semibold">
              “LET US WORK TOGETHER TO RID OUR SOCIETY OF DRUG ABUSE &
              ADDICTION. LET US ALSO JOIN HANDS TOGETHER TO HELP THOSE IN NEED
              TO MAKE OUR SOCIETY AND COUNTRY BETTER.”
            </p>
          </div>
          <div className="sm:w-[35%]">
            <img src={CourtesyImage} alt="CourtesyImage" />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Courtesy;
