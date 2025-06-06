import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `
        font-bold ${isActive ? "text-ActivePink" : "text-TextGreen"}
      `;
  };

  const [open, setOpen] = useState(false);
  const showNav = () => setOpen(!open);
  return (
    <div className="py-6 bg-white shadow-md">
      <section className="sm:w-[90%] w-[95%] mx-auto flex justify-between items-center">
        {!open ? (
          <button className="md:hidden cursor-pointer mr-5" onClick={showNav}>
            <FaBars height={15} />
          </button>
        ) : (
          <button className="md:hidden cursor-pointer mr-5" onClick={showNav}>
            <FaTimes />
          </button>
        )}
        <div className="flex gap-1 items-center md:w-[25%]">
          <Link to="/">
            <img
              src="/VictorLoisLogo.jpeg"
              alt="logo"
              height={45}
              width={45}
              style={{ objectFit: "contain" }}
            />
          </Link>
          <p className="text-xs font-semibold">
            The Victor & Lois Abraham Foundation
          </p>
        </div>
        <div className="md:flex hidden gap-14 items-center font-bold">
          <Link className={`${getLinkClass("/")}`} to={"/"}>
            Home
          </Link>
          <Link className={`${getLinkClass("/about")}`} to="/about">
            About Us
          </Link>
          <Link className={`${getLinkClass("/blog")}`} to="/blog">
            Information Center
          </Link>
          <Link className={`${getLinkClass("/explore")}`} to="/explore">
            Explore
          </Link>
          <Link className={`${getLinkClass("/contact")}`} to="/contact">
            Contact Us
          </Link>
        </div>
        <div className=" bg-purple-400">
          <Button
            onClick={() => navigate("/donate")}
            className="uppercase bg-bgGreen font-medium text-xs h-9 px-2 rounded-[4px]"
          >
            Donate
          </Button>
        </div>
        {open && (
          <div
            className="flex z-[500] flex-col justify-center mx-auto left-0 right-0 items-center w-[100%] absolute top-[11%] bg-white shadow-sm  p-8 "
            style={{
              transform: open ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.95s ease-in-out",
            }}
          >
            <nav className="flex flex-col gap-14 justify-between items-center w-full mb-[50px]">
              <Link to="/" onClick={showNav} className={`${getLinkClass("/")}`}>
                Home
              </Link>
              <Link
                to="/about"
                onClick={showNav}
                className={getLinkClass("#about")}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                onClick={showNav}
                className={`${getLinkClass("/blog")} `}
              >
                Information Center
              </Link>
              <Link
                to="/explore"
                onClick={showNav}
                className={`${getLinkClass("/explore")} `}
              >
                Explore
              </Link>
              <Link
                to="/contact"
                onClick={showNav}
                className={getLinkClass("/contact")}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
