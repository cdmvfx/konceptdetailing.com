import { Link, animateScroll } from "react-scroll";
import { PopupWidget, PopupButton } from "react-calendly";
import { motion } from "framer-motion";
import {useState, useEffect} from 'react';

const Hero = () => {

	const [width, setWidth] = useState(0);

	function handleResize() {
		setWidth(window.innerWidth);
	}
  
  useEffect(() => {
    
    window.addEventListener("resize", handleResize)
    
    handleResize();
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const container = {
    start: { y: 50, opacity: 0 },
    end: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", staggerChildren: 0.2, delayChildren: 22 },
    },
  };

  const item = {
    start: { y: 50, opacity: 0, filter: "blur(10px)" },
    end: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "tween", ease: "easeOut", duration: 1 },
    },
  };

  return (
    <div className="h-screen w-full border-white border-b z-10" id="hero">
      <motion.div
        variants={container}
        initial="start"
        animate="end"
        className="flex flex-col items-center z-30 justify-center h-screen uppercase relative"
      >
        <motion.div
          variants={item}
          className="mb-4 font-bold italic text-3xl text-center max-w-[13ch] md:max-w-none kd-heading"
        >
          From Koncept to Reality
        </motion.div>
        <motion.div variants={item} className="kd-heading">
          <PopupButton
            url="https://calendly.com/konceptdetailing"
            text="SCHEDULE A DETAIL"
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideGdprBanner: true,
              hideLandingPageDetails: false,
              primaryColor: "00a2ff",
              textColor: "4d5055",
            }}
            styles={{
              letterSpacing: "2px",
              border: "1px solid white",
              cursor: "pointer",
              textAlign: "center",
              padding: "1rem",
            }}
          />
        </motion.div>
      </motion.div>
			{width !== 0 && <div className="w-full h-screen absolute top-0 left-0 overflow-hidden border-b border-white">
				<video className="w-full h-full object-cover object-[25%] absolute z-10" autoPlay={true} muted={true} loop={false}>
					<source 
						src={
							parseInt(width) > 1024 
							? "https://cdmvfx.s3.us-east-2.amazonaws.com/Koncept+Detailing/Videos/Koncept+Landing+Video+V2+Horizontal.mp4" 
							: "https://cdmvfx.s3.us-east-2.amazonaws.com/Koncept+Detailing/Videos/Koncept+Landing+Video+V2+Vertical.mp4"} 
						type="video/mp4" 
					/>
				</video>
			</div>}
    </div>
  );
};

export default Hero;
