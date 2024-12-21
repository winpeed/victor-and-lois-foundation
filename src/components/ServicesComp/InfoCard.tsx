import rehabilitation from "@/assets/images/rehabilitation.png";
import prevention from "@/assets/images/prevention.png";
import afterCare from "@/assets/images/afterCare.png";

export const Card = ({
  text,
  title,
  image,
}: {
  text: string;
  title: string;
  image: string;
}) => {
  return (
    <section className="h-full w-full flex flex-col justify-between bg-white px-7 py-10 rounded-[50px]">
      <div className="w-1/2 mx-auto h-[40%]">
        <img src={image} alt="image" className="h-auto w-full" />
      </div>
      <div className="sm:h-[50%]">
        <h3 className="sm:text-2xl my-3 font-extrabold text-center text-TextGreen">
          {title}
        </h3>
        <p className="my-3 text-sm text-center text-TextGreen">{text}</p>
      </div>
      {/* <div className="h-[5%]">
        <Button className="bg-[#4F9160] rounded-[10px] w-full h-8 text-sm ">
          MORE
        </Button>
      </div> */}
    </section>
  );
};

const InfoCard = () => {
  return (
    <div className="bg-LightGreen py-10 px-10">
      <section className="grid sm:grid-cols-3 gap-7  ">
        <Card
          image={prevention}
          title="PREVENTION"
          text="We offer preventive programs to protect people from developing a substance abuse problem in the first place while also providing assistance for those who are already victims."
        />
        <Card
          image={rehabilitation}
          title="REHABILITATION"
          text="We assist drug addicts and prostitutes to quit using a faith-based approach.  Beneficiaries engage in various life-changing activities that are tailored to their needs and help them have a chance to dream again."
        />
        <Card
          image={afterCare}
          title="AFTERCARE"
          text="We work towards integrating  beneficiaries of our programs into society and reconciling them with their families/loved ones. We also follow-up with them through different means to ensure lasting and permanent change."
        />
      </section>
    </div>
  );
};

export default InfoCard;
