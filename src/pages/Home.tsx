import AwarenessSection from "@/components/Home/AwarenessSection";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/menubars/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AwarenessSection />
    </div>
  );
};

export default Home;
