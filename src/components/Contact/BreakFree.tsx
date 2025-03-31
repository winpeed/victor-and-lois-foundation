import BreakFreeImage from "@/assets/images/BreakFree.png";

const BreakFree = () => {
  return (
    <section className=" bg-LightPink py-10">
      <div className="w-[90%] mx-auto">
        <h3
          style={{
            fontFamily: "Inknut Antiqua, serif",
          }}
          className="sm:text-4xl text-xl  font-bold"
        >
          "Break Free:
          <span className="text-[#1D2671]">Choose Life Over Drugs"</span>
        </h3>
        <main className="sm:flex space-y-4 justify-between">
          <div className="sm:w-[55%]">
            <p className=" font-medium sm:w-[75%] sm:mx-0 mx-auto sm:mt-20 mt-5 italic">
              In a world full of choices, be
              <span className="font-semibold"> "Too Smart for Drugs"</span> and
              stand tall. Remember, when you
              <span className="font-semibold"> "Say No to Drugs," </span> you're
              saying yes to a brighter future. Experience what it truly feels
              like to
              <span className="font-semibold">
                "Fly on the Wings of Freedom from Drug Abuse and Addiction."
              </span>
              Drugs don't just alter your mind—they destroy lives. Let’s break
              the cycle because
              <span className="font-semibold">"Drugs Ruin Lives."</span>
            </p>
          </div>
          <div className="sm:w-[45%]">
            <img
              src={BreakFreeImage}
              alt="BreakFree"
              className="w-11/12 h-full"
            />
          </div>
        </main>
      </div>
    </section>
  );
};

export default BreakFree;
