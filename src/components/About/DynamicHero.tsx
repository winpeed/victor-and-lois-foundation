const DynamicHero = ({
  backgroundImage = "AboutUsBackground.png",
  title = "About Us",
}: {
  backgroundImage?: string;
  title?: string;
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
      <h3 className="text-center pt-[200px] sm:text-4xl text-xl font-extrabold text-white uppercase">
        {title}
      </h3>
    </div>
  );
};

export default DynamicHero;
