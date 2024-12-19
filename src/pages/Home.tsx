import AwarenessSection from "@/components/Home/AwarenessSection";
import HeroSection from "@/components/Home/HeroSection";
import Mission from "@/components/Home/Mission";
import NoDrugs from "@/components/Home/NoDrugs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AwarenessSection />
      <div className="mt-5">
        <Mission />
      </div>
      <div className="my-10">
        <NoDrugs />
      </div>
    </div>
  );
};

export default Home;
