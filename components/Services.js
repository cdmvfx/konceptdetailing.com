import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect } from 'react';


const Services = () => {
  const services = [
    {
      label: "Interior",
      bullets: [
        "Thorough Vacuum",
        "Steam Cleaning",
        "Stain Removal",
        "Pet Hair Removal",
        "Trunk and Cargo Area",
        "Dash, Console, Cup Holders, and Storage",
        "Instrument Panel, Gauges, Buttons, Knobs, and Vents",
      ],
    },
    {
      label: "Exterior",
      bullets: [
        "Gentle Car Wash",
        "Liquid Carnauba / Wax",
        "Hand Drying",
        "Exterior Trim Conditioning",
        "Bug and Tar Removal",
        "Tires, Wheels, and Wheel Wells",
        "Wheels and Chrome Polished and Protected",
        "Gas Compartment Cleaned",
        "Exhaust Tips Cleaned and Polished",
      ],
    },
  ];


	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				type: "tween"
			}
		}
	}
	
	const item = {
		hidden: { opacity: 0, y: "100px" },
		show: { opacity: 1, y: 0, transition: { duration: 1, type: "tween", ease: "easeOut" } }
	}

  return (
    <div className="" id="services">
      <div
				className="flex flex-wrap flex-col w-full h-auto text-center items-center justify-center py-64 px-8 space-y-16 md:flex-row md:items-baseline md:space-y-0 md:space-x-0 bg-neutral-900"
			>
        {services.map(({ label, bullets }, index) => (
          <motion.div
            key={`service-${index}`}
            className="w-full space-y-4 md:space-y-8 md:w-1/2 md:px-8 xl:w-1/3 xl:flex-grow-1"
          >
            <motion.div 
							initial={{opacity: 0}}
							whileInView={{opacity: 1, transition: {type: "tween", duration: 1, ease: "easeOut"}}}
							viewport={{amount: "500px", once: true}}
							className="uppercase text-xl tracking-widest md:text-4xl"
						>
              {label}
            </motion.div>
            <div>
              <motion.hr 
								initial={{width: 0}}
								whileInView={{width: "200px", transition: {type: "tween", duration: 1, ease: "easeOut"}}}
								viewport={{amount: "500px", once: true}}
								className="m-auto w-32 md:w-64"
							/>
            </div>
            <div className="leading-8 md:leading-10 md:text-lg lg:text-2xl lg:leading-[3rem] ">
              <motion.ul
								variants={container}
								initial="hidden"
								whileInView="show"
								viewport={{amount: "200px", once: true}}
							>
                {bullets.map((bullet, index) => (
                  <motion.li 
										variants={item}
										key={`${label}-bullet-${index}`}
									>
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
