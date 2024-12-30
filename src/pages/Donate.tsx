import DynamicHero from "@/components/About/DynamicHero";

const Donate = () => {
  return (
    <div>
      <DynamicHero title="DONATE HERE" />
      <section className="py-10 relative z-50 text-center text-ContactGreen">
        <h3 className="text-ContactGreen text-center font-bold text-xl">
          ACCOUNT DETAILS BELOW
        </h3>
        <div className="sm:flex justify-between items-center">
          <p className="sm:text-xl text-xs mx-auto font-semibold my-4">
            Account Name:
            <span className="text-black opacity-50"> Victor Abraham </span>
          </p>
          <p className="sm:text-xl text-xs mx-auto font-semibold my-4">
            Account Number:
            <span className="text-black opacity-50"> 0074088682</span>
          </p>
        </div>
        <p className="sm:text-xl text-xs mx-auto  font-semibold my-4">
          Bank Name:
          <span className="text-black opacity-50"> ACCESS BANK PLC</span>
        </p>
      </section>
    </div>
  );
};

export default Donate;
