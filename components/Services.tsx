import { motion } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const services = [
    {
      label: "Interior",
      bullets: [
        "Full Sanitation",
        "Thorough Vacuum",
        "Leather / Cloth Cleaning and Protectant",
        "Windows Cleaned",
        "Fully Dressed with UVA/UVB Protection",
        "Light Carpet Shampoo",
        "Stain Removal / Deodorizing",
        "Pet Hair Removal",
        "Trunk and Cargo Area",
        "Meticulous Brush Cleaning",
        "Cabin Filter",
        "Dash, Console, Cup Holders, and Storage",
        "Instrument Panel, Gauges, Buttons, Knobs, and Vents",
      ],
    },
    {
      label: "Exterior",
      bullets: [
        "Gentle Hand Wash",
        "Gentle Hand Dry",
        "Light Wax",
        "Exterior Trim Conditioning",
        "Plastics Coating",
        "Bug and Tar Removal",
        "Tires, Wheels, and Wheel Wells",
        "Wheels and Chrome Polished and Protected",
        "Gas Compartment Cleaned",
        "Exhaust Tips Cleaned and Polished",
        "Rain X Application",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "tween",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "100px" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "tween", ease: "easeOut" },
    },
  };

  const scrollRef = useRef(null);

  return (
    <div className="" id="services" ref={scrollRef}>
      <div className="flex flex-wrap flex-col w-full h-auto text-center items-center justify-center mt-0 lg:mt-16 py-16 px-8 space-y-16 md:flex-row md:items-baseline md:space-y-0 md:space-x-0">
        {services.map(({ label, bullets }, index) => (
          <motion.div
            key={`service-${index}`}
            className="w-full space-y-4 md:space-y-8 md:w-1/2 md:px-8 xl:w-1/3 xl:flex-grow-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "tween",
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              viewport={{ amount: 500, once: true }}
              className="uppercase text-xl tracking-widest md:text-4xl">
              {label}
            </motion.div>
            <div>
              <motion.hr
                initial={{ width: 0 }}
                whileInView={{
                  width: "200px",
                  transition: {
                    type: "tween",
                    duration: 1,
                    ease: "easeOut",
                  },
                }}
                viewport={{ amount: 500, once: true }}
                className="m-auto w-32 md:w-64"
              />
            </div>
            <div className="leading-8 md:leading-10 md:text-lg lg:text-2xl lg:leading-[3rem] ">
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 500, once: true }}>
                {bullets.map((bullet, index) => (
                  <motion.li
                    variants={item}
                    key={`${label}-bullet-${index}`}>
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
