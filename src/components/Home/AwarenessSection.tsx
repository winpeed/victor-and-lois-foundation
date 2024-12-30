'use client'
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

type RenderCardProps = {
  backgroundImage: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
};

const RenderCard = ({
  backgroundImage,
  title,
  description,
  buttonText,
  onButtonClick,
}: RenderCardProps) => {
  return (
    <section
      className="rounded-[5px] text-center text-white h-[250px] flex justify-center items-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h3 className="font-extrabold text-lg">{title}</h3>
        <p className="text-xs w-[80%] mx-auto font-medium my-3">
          {description}
        </p>
        <Button
          className="bg-transparent h-7 rounded-[10px] border px-3 border-white text-xs font-bold"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

const AwarenessSection = () => {
  const navigate = useNavigate()
  return (
    <div className="w-[90%] mx-auto py-5">
      <main className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        <RenderCard
          backgroundImage="/AwarenessImage.png"
          title="CREATE AWARENESS"
          description="Help to create awareness on the dangers of drug addiction and prostitution."
          buttonText="LEARN MORE"
          onButtonClick={() => navigate('/about')}
        />
        <RenderCard
          backgroundImage="/PreventAbuse.png"
          title="PREVENT ABUSE"
          description="Assist to prevent drug abuse"
          buttonText="GET INVOLVED"
          onButtonClick={() => navigate('/about')}
        />
        <RenderCard
          backgroundImage="/Rehabilitation.png"
          title="REHABILITATE"
          description="Help to treat and nurture those coming out from drug addiction and prostitution"
          buttonText="SUPPORT US"
           onButtonClick={() => navigate('/explore')}
        />
        <RenderCard
          backgroundImage="/Needy.png"
          title="HELP THE NEEDY"
          description="Your generous gifts and donations will go a long way in providing sustainable support"
          buttonText="DONATE NOW"
           onButtonClick={() => navigate('/donate')}
        />
      </main>
    </div>
  );
};

export default AwarenessSection;
