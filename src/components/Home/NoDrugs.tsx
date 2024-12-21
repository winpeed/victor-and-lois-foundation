const NoDrugs = ({
  backgroundImage = "NoDrugs.png",
  title = " DON'T DO DRUGS; CHOOSE LIFE, NOT DRUGS",
  text = "“If you can quit for a day, you can quit for a life time”",
  textClassName,
}: {
  backgroundImage: string;
  title: string;
  text: string;
  textClassName: string;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" sm:py-20 py-10 px-10"
    >
      <h3 className="sm:text-3xl text-xl font-extrabold text-white">{title}</h3>
      <p
        className={`text-TextGold ${textClassName} text-lg font-semibold  my-3 italic`}
      >
        {text}
      </p>
    </div>
  );
};

export default NoDrugs;

// bg-[url('/NoDrugs.png')] bg-no-repeat bg-center
