import { useRef, useState } from "react";
import InputField from "../input/InputField";
import { AddressInfo, ContactInfo } from "../menubars/Footer";
import { Button } from "../ui/button";
import successImage from "@/assets/images/successImage.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [contactForm, setContactForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
  
    if (!formRef.current) {
      setError(true);
      console.error("Form reference is not available.");
      return;
    }
  
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          setContactForm(true); // Show success screen
        },
        (error) => {
          setLoading(false);
          setError(true); // Handle errors
          console.error("FAILED...", error.text);
        }
      );
  };
  

  return (
    <section className="py-20 sm:flex justify-between w-[90%] mx-auto">
      <div className="sm:w-[47%]">
        {contactForm ? (
          <section className="flex justify-center items-center h-full">
            <div>
              <img src={successImage} alt="successImage" />
              <p className="my-2 font-medium text-center">
                Form filled successfully
              </p>
              <Button className="bg-ContactGreen rounded-[10px] w-full h-8 text-lg ">
                <Link to={"/"}>Go back home</Link>
              </Button>
            </div>
          </section>
        ) : (
          <form ref={formRef} onSubmit={sendEmail}>
            <h3 className="text-ContactGreen text-center font-bold text-xl">
              CONTACT FORM
            </h3>
            <section className="my-5">
              <InputField
                name="user_name"
                placeholder="Name"
                label="Full Name"
              />
              <InputField
                name="user_email"
                placeholder="Email"
                type="email"
                label="Email Address"
              />
              <InputField
                name="user_number"
                placeholder="+2340000000000"
                label="Phone Number"
              />
              <div>
                <h3 className="text-sm font-semibold text-ContactGreen">
                  Message
                </h3>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Enter your message"
                  className="bg-white mt-1 rounded-[20px] w-full px-4 py-2 focus:ring-1 focus:ring-[#00000033] border border-[#00000033] focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                className="bg-ContactGreen rounded-[10px] w-full h-12 text-lg my-3"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
              {error && (
                <p className="text-red-500 text-center mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </section>
          </form>
        )}
      </div>
      <div className="opacity-70 sm:w-[47%]">
        <ContactInfo />
        <div className="mt-10">
          <AddressInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
