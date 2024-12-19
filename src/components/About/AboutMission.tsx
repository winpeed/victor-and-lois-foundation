import missionImage from "@/assets/images/missionImage.png";

const AboutMission = () => {
  return (
    <div>
      <section className="bg-white py-10 ">
        <main className="w-[90%] mx-auto flex flex-col-reverse gap-y-4  sm:flex-row-reverse items-center justify-between">
          <div className="text-center sm:w-[60%]">
            <h3 className="sm:text-3xl text-xl font-extrabold text-black">
              MISSION AND VISION
            </h3>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              Our Mission is to prevent individuals from venturing into the
              downward road of addiction and prostitution, and bring out one at
              a time, those who are already caught in the web through a
              faith-based approach.
            </p>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              Our Vision is to create life changing dreams for drug addicts and
              prostitutes through making transformational changes to their
              lives.
            </p>
          </div>
          <div className="sm:w-[35%]">
            <img src={missionImage} alt="values" />
          </div>
        </main>
      </section>
    </div>
  );
};

export default AboutMission;
