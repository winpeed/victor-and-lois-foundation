import { useState } from "react";
import InputField from "../input/InputField";
import { AddressInfo, ContactInfo } from "../menubars/Footer";
import { Button } from "../ui/button";
import successImage from "@/assets/images/successImage.png";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState(false);
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
          <div>
            <h3 className="text-ContactGreen text-center font-bold text-xl">
              ENQUIRY FORM
            </h3>
            <section className="my-5">
              <InputField name="name" placeholder="Name" label="Full Name" />
              <InputField
                name="Email"
                placeholder="Email"
                type="email"
                label="Email Address"
              />
              <InputField
                name="Number"
                placeholder="+2340000000000"
                label="Phone Number"
              />
              <div>
                <h3 className="text-sm font-semibold text-ContactGreen">
                  Enquiry
                </h3>
                <textarea
                  rows={7}
                  placeholder="Enter your enquiry"
                  className="bg-white mt-1 rounded-[20px] w-full px-4 py-2  focus:ring-1 focus:ring-[#00000033] border border-[#00000033] focus:outline-none"
                />
              </div>
              <Button
                onClick={() => setContactForm(true)}
                className="bg-ContactGreen rounded-[10px] w-full h-12 text-lg my-3"
              >
                Submit
              </Button>
            </section>
          </div>
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
