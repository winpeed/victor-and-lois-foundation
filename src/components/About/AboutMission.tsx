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
             To guide individuals away from addiction through compassionate, faith-centered support, while equipping communities with the tools to prevent substance abuse and promote restoration.
            </p>
            <p className="opacity-50 font-medium text-xl w-[85%] mx-auto mt-5">
              To see transformed lives through a faith-based approach—empowering drug users to heal and thrive, and inspiring communities with hope, education, and resilience.
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
