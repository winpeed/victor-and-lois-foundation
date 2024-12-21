const DynamicHero = ({
  backgroundImage = "AboutUsBackground.png",
  title = "About Us",
  text,
}: {
  backgroundImage?: string;
  title?: string;
  text?: string;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" relative h-[270px] "
    >
      <div className={`${text ? "sm:pt-[70px] pt-10" : "pt-[200px]"}`}>
        <h3 className="text-center  sm:text-4xl text-xl font-extrabold text-white uppercase">
          {title}
        </h3>
        <p className="text-center text-sm font-semibold sm:w-8/12 w-11/12 mx-auto my-5 text-white">{text}</p>
      </div>
    </div>
  );
};

export default DynamicHero;
