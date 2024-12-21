import { PhoneIcon } from "@/assets/SVG/FooterIcons";
import emailIcon from "@/assets/SVG/email.svg";
import web from "@/assets/SVG/web.svg";
import twitter from "@/assets/SVG/twitter.svg";
import insta from "@/assets/SVG/insta.svg";
import facebook from "@/assets/SVG/facebook.svg";
import youtube from "@/assets/SVG/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#F6EEEE] py-6">
        <section className="w-[90%] mx-auto lg:flex space-y-4 justify-between text-FooterGreen">
          <div className="lg:w-[20%] ">
            <h3 className="font-extrabold text-xl">CONTACT INFO</h3>
            <section className="font-semibold space-y-1 ">
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <p>+234 909 199 0711</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={emailIcon} alt="email" />
                <p>vandlfoundation@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={web} alt="email" />
                <p>info@vandlfoundation.org.ng</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={twitter} alt="twitter" />
                <p>vandlfoundation</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={insta} alt="insta" />
                <p>vandlfoundation</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={facebook} alt="facebook" />
                <p>vandlfoundation</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={youtube} alt="youtube" />
                <p>vandlfoundation</p>
              </div>
            </section>
          </div>
          <div className="lg:w-[50%] mx-auto">
            <Link to="/">
              <div className="h-48 w-48 mx-auto">
                <img
                  src="/VictorLoisLogo.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
            </Link>
            <section className="text-center text-sm font-medium">
              <h3 className="font-extrabold text-xl">ABOUT US</h3>
              <p>
                The Victor and Lois Foundation is a non-profit, faith-based
                organisation established in Lagos, Nigeria in 2024. It is worthy
                to note that the founding fathers have been working among drug
                addicts and prostitutes since 1986.
              </p>
              <p>
                Our primary objective is to reach out to drug addicts,
                alcoholics, prostitutes, vulnerable children and those with
                failed marriages with the intention to ressucitate hope and give
                their lives meaning.
              </p>
            </section>
          </div>
          <div className="lg:w-[25%] font-semibold">
            <h3 className="font-extrabold text-xl">OFFICE ADDRESS</h3>
            <p>
              5 Makanjuola Street, Ikotun-Egbe, Alimosho LGA, Lagos State,
              Nigeria.
            </p>
            <h3 className="mt-5 font-extrabold text-xl">WORKING HOURS</h3>
            <p>Monday - Friday: 8:00am - 6:00pm</p>
            <p>However, we are available 24/7 in case of emergency.</p>
          </div>
        </section>
      </div>
      <section className="bg-white text-center my-5 text-FooterGreen">
        <p className="font-medium">
          COPYRIGHT © VANDLFOUNDATION <span className="font-bold"> 2024</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
