import DynamicHero from "@/components/About/DynamicHero";
import NoDrugs from "@/components/Home/NoDrugs";
import Courtesy from "@/components/ServicesComp/Courtesy";
import InfoCard from "@/components/ServicesComp/InfoCard";

const Service = () => {
  return (
    <div>
      <DynamicHero
        backgroundImage="servicesImage.png"
        title="OUR SERVICES"
        text="We offer a range of services that cater for both male and female. We provide our services to people of all nationalities that are involved in  different stages of drug and substance abuse and also those involved in prostitution. Our service delivery is  categorized into Three areas/levels:"
      />
      <InfoCard />
      <Courtesy />
      <NoDrugs
        backgroundImage="serviceChain.png"
        title="EMPOWERING LIVES, BREAKING CHAINS, BUILDING FUTURES"
        text='"We are dedicated to raising awareness about drug abuse and addiction while providing rehabilitation and support for those affected. Together, we can help break the cycle and create a brighter future for all."'
        textClassName="text-white md:w-9/12 text-base"
      />
    </div>
  );
};

export default Service;
