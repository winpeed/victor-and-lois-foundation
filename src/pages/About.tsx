import AboutMission from "@/components/About/AboutMission";
import CaughInTheWeb from "@/components/About/CaughInTheWeb";
import DynamicHero from "@/components/About/DynamicHero";
import Values from "@/components/About/Values";
import WhatWeDo from "@/components/About/WhatWeDo";

const AboutPage = () => {
  return (
    <div>
      <DynamicHero />
      <div className="py-10 font-medium text-xl text-center w-[90%] mx-auto opacity-50">
        <p className="sm:w-9/12 mx-auto">
          The Victor and Lois Abraham foundation is a faith-based organization
          established in Lagos State, Nigeria in 2024.
        </p>
        <p className="sm:w-9/12 mx-auto">
          Our primary objective is to reach out to drug addicts, alcoholics,
          prostitutes, vulnerable children and those with failed marriages with
          the intention to resuscitate hope and give their lives meaning.
        </p>
      </div>
      <section>
        <Values />
        <AboutMission />
        <WhatWeDo />
        <CaughInTheWeb />
      </section>
    </div>
  );
};

export default AboutPage;
