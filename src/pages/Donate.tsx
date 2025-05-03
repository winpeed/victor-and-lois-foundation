import DynamicHero from "@/components/About/DynamicHero";

const Donate = () => {
  return (
    <div>
      <DynamicHero title="DONATE HERE" />
      <section className="py-10 relative z-50 text-center text-ContactGreen">
        <h3 className="text-ContactGreen text-center font-bold text-xl mb-5">
          ACCOUNT DETAILS
        </h3>
        <div className="justify-between items-center">
          <p className="sm:text-xl text-xs mx-auto font-semibold my-2">
            Account Name
          </p>

          <p className="sm:text-xl text-xs mx-auto font-semibold mb-8">
            <span className="text-black opacity-50">
              The Victor & Lois Abraham Foundation
            </span>
          </p>

          <p className="sm:text-xl text-xs mx-auto  font-semibold my-2">
            Bank Name
          </p>

          <p className="sm:text-xl text-xs mx-auto  font-semibold mb-8">
            <span className="text-black opacity-50"> ACCESS BANK PLC</span>
          </p>

          <p className="sm:text-xl text-xs mx-auto font-semibold my-2">
            Account Numbers
          </p>

          <p className="sm:text-xl text-xs mx-auto font-semibold my-4">
            <span className="text-black opacity-50"> 3001173174 (NGN)</span>
          </p>

          <p className="sm:text-xl text-xs mx-auto font-semibold my-4">
            <span className="text-black opacity-50"> 3001173057 (GBP)</span>
          </p>

          <p className="sm:text-xl text-xs mx-auto font-semibold my-4">
            <span className="text-black opacity-50"> 3001173071 (EUR)</span>
          </p>

          <p className="sm:text-xl text-xs mx-auto font-semibold my-4">
            <span className="text-black opacity-50"> 3001173033 (USD)</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;
