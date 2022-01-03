import { useState, useEffect, useCallback } from "react";
import SectionHeader from "./elements/SectionHeader";
import { FaCheck } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import ContactForm from "./elements/ContactForm";

const Contact = () => {
	
  return (
    <div
      id="contact"
      className="flex flex-col space-y-4 md:space-y-8 justify-center items-center p-8 bg-neutral-900 md:p-16"
    >
      <motion.div 
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				transition: { type: "tween", duration: 1, ease: "easeOut" },
			}}
			viewport={{ amount: "500px", once: true }}
			className="uppercase text-xl tracking-widest md:text-4xl">
        Contact
      </motion.div>
      <div>
        <motion.hr 
					initial={{ width: 0 }}
					whileInView={{
						width: "200px",
						transition: { type: "tween", duration: 1, ease: "easeOut" },
					}}
					viewport={{ amount: "200px", once: true }}
					className="m-auto w-32 md:w-64" />
      </div>
      <GoogleReCaptchaProvider reCaptchaKey="6LfkvOcdAAAAAA9bdAgSLgmyCfr0N8uej7Ia4WMQ">
					<ContactForm />
			</GoogleReCaptchaProvider>
    </div>
  );
};

export default Contact;
