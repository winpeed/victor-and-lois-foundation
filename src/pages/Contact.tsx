import DynamicHero from "@/components/About/DynamicHero";
import BreakFree from "@/components/Contact/BreakFree";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <DynamicHero backgroundImage="ContactImage.png" title="CONTACT US" />
      <ContactForm />
      <div>
        <BreakFree />
      </div>
    </div>
  );
};

export default Contact;
