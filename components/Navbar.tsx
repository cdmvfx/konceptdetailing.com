import Image from "next/image";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navLinksStart = [
    {
      label: "Services",
      value: "services",
    },
    {
      label: "About Me",
      value: "about",
    },
    {
      label: "Testimonials",
      value: "testimonials",
    },
  ];

  const navLinksEnd = [
    {
      label: "Gallery",
      value: "gallery",
    },
    {
      label: "FAQ",
      value: "faq",
    },
    {
      label: "Contact",
      value: "contact",
    },
  ];

  const navLinksFull = navLinksStart.concat(navLinksEnd);

  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed z-40 w-full top-0 left-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm border-b border-b-[#ffffff]">
      <AnimatePresence mode="wait" initial={false}>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { ease: "easeInOut" },
            }}
            exit={{ opacity: 0, transition: { ease: "easeOut" } }}
            className="w-screen z-30 h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-10 md:hidden">
            <div
              className="cursor-pointer"
              onClick={() => setMenu(false)}>
              X
            </div>
            {navLinksFull.map(({ label, value }, index) => (
              <div
                key={`nav-mobile-item-start-${index}`}
                className="cursor-pointer">
                <Link
                  activeClass="active"
                  to={value}
                  spy={false}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => setMenu(false)}>
                  {label}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-wrap justify-between md:justify-center items-center md:space-x-8 lg:space-x-12 py-4 px-8 md:-ml-[82px]">
        {navLinksStart.map(({ label, value }, index) => (
          <div
            key={`nav-item-start-${index}`}
            className="hidden md:block uppercase tracking-widest text-xs cursor-pointer">
            <Link
              activeClass="active"
              to={value}
              spy={false}
              smooth={true}
              offset={-70}
              duration={500}>
              {label}
            </Link>
          </div>
        ))}
        <div className="cursor-pointer">
          <Link
            activeClass="active"
            to="hero"
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}>
            <Image
              alt="Koncept Detailing"
              src="/images/logo.svg"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div
          className="md:hidden uppercase tracking-widest text-xl cursor-pointer"
          onClick={() => setMenu(true)}>
          <RiMenuFill />
        </div>
        {navLinksEnd.map(({ label, value }, index) => (
          <div
            key={`nav-item-end-${index}`}
            className="hidden md:block uppercase tracking-widest text-xs cursor-pointer">
            <Link
              activeClass="active"
              to={value}
              spy={false}
              smooth={true}
              offset={-70}
              duration={500}>
              {label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
