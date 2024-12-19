import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="bg-HomeGradientHero relative ">
      <div className="absolute inset-0 bg-Homehero bg-cover bg-center bg-no-repeat z-10"></div>
      <section className="sm:py-60 py-10 relative z-50 text-center text-white">
        <h3 className=" sm:text-4xl text-xl font-extrabold mx-auto sm:w-[70%] w-11/12">
          THE VICTOR AND LOIS ABRAHAM FOUNDATION
        </h3>
        <p className="sm:text-xl text-xs mx-auto sm:w-[43%] font-semibold my-4">
          Embrace the joy of freedom from drug addiction/abuse and prostitution,
          regain your dignity, discover your destiny and realize your dreams.
        </p>
        <Button className="bg-ButtonGreeenGradient rounded-[14px] h-9 w-32 font-medium text-lg">
          View
        </Button>
      </section>
    </div>
  );
};

export default HeroSection;