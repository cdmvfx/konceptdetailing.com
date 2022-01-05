import { Link, animateScroll } from 'react-scroll';
import { PopupWidget, PopupButton } from "react-calendly";
import { motion } from 'framer-motion';

const Hero = () => {

	const container = {
		start: {y: 50, opacity: 0},
		end: {y: 0, opacity: 1, transition: {type: "tween", staggerChildren: .2} }
	};

	const item = {
		start: {y: 50, opacity: 0, filter: "blur(10px)"},
		end: {y: 0, opacity: 1, filter: "blur(0px)", transition: {type: "tween", ease: "easeOut", duration: 1 }}
	}
	
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/photos/red-mercedes-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen w-full  border-white border-b"
			id="hero"
    >
      <motion.div 
			variants={container}
			initial="start"
			animate="end"
			className="flex flex-col items-center justify-center h-screen uppercase"
			>
        <motion.div variants={item} className="mb-4 font-bold italic text-xl md:text-4xl text-center" style={{fontFamily:"Montserrat"}}>From Koncept to Reality</motion.div>
        <motion.div variants={item} className="kd-heading">
				<PopupButton 
					url="https://calendly.com/konceptdetailing" 
				  text="SCHEDULE A DETAIL"
					pageSettings={{
						backgroundColor: 'ffffff',
						hideEventTypeDetails: false,
						hideGdprBanner: true,
						hideLandingPageDetails: false,
						primaryColor: '00a2ff',
						textColor: '4d5055'
					}}
					styles={{letterSpacing: "2px", border: "1px solid white", cursor: "pointer", textAlign: "center", padding: "1rem" }}
				/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
