import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import photo1 from "../public/photos/marine-1.jpg";
import photo2 from "../public/photos/marines-section.jpg";
import SectionHeader from "./elements/SectionHeader";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const About = () => {
  const aboutPhotos = [
    <div
      className="p-4 flex items-center justify-center w-full h-full"
      key="about-photo-1"
    >
      <div>
        <Image src={photo1} key="about-photo-1" alt="My first time deployed." />
      </div>
    </div>,
    <div
      className="p-4 flex items-center justify-center w-full h-full"
      key="about-photo-2"
    >
      <div>
        <Image src={photo2} key="about-photo-2" alt="Platoon" />
      </div>
    </div>,
  ];

  return (
    <div
      id="about"
      className="w-full h-auto bg-neutral-800 md:flex md:p-16 border-white border-b"
    >
      <motion.div className="p-8 space-y-4 md:space-y-8 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { type: "tween", duration: 1, ease: "easeOut" },
          }}
          viewport={{ amount: "500px", once: true }}
          className="uppercase text-xl tracking-widest md:text-left md:text-4xl"
        >
          About Me
        </motion.div>
        <div>
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{
              width: "200px",
              transition: { type: "tween", duration: 1, ease: "easeOut" },
            }}
            viewport={{ amount: "200px", once: true }}
            className="w-32 md:m-0 md:w-full"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: "0" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "tween", ease: "easeOut", duration: 1 },
          }}
          viewport={{ once: true, amount: "200px" }}
          className="text-left space-y-4  leading-8 md:text-2xl md:leading-10"
        >
          <p className="">
            My name is Kevin Martinez - Costa Rican born, raised in Florida. I
            officially became a United States Marine in 2008, soon after
            graduating high school. As a machine gunner, I had the great honor
            to serve my country in Afghanistan.
          </p>
          <p>
            The years in the Marine Corps were the most difficult of my life.
            After 8 years, I left the Marine Corps to pursue my passion - auto
            detailing.
          </p>
        </motion.div>
      </motion.div>
      <div className="flex justify-center w-full">
        <Carousel
          showIndicators={false}
          showThumbs={false}
          swipeable={true}
          autoPlay={true}
          interval={3000}
          emulateTouch={true}
          dynamicHeight={false}
        >
          {aboutPhotos}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
