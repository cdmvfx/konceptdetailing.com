import { motion, AnimatePresence, useAnimation } from "framer-motion";


const FAQ = () => {

	const faq = [
		{
			q: "Where are you located?",
			a: "I am based in Tampa, and will drive up to 20 miles to detail your vehicle."
		},
		{
			q: "I'm not in Tampa. Can you drive to me?",
			a: "Yes, but I will charge you for an additional $10 per 10 miles to cover the gas and time expenses."
		},
		{
			q: "How much do you charge?",
			a: "Every detail is different depending on the size of the vehicle, level of dirtiness, and tier of detailing you'd like. To get an accurate quote, please contact me with details!"
		}
	];
  return (
    <div id="faq" className="text-center px-8 py-32 space-y-4 md:space-y-8 w-full bg-neutral-900">
      <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { type: "tween", duration: 1, ease: "easeOut" },
          }}
          viewport={{ amount: "500px", once: true }}
					className="uppercase text-xl tracking-widest md:text-4xl">FAQ</motion.div>
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
			<div className="space-y-8 leading-8 md:text-2xl md:leading-10 md:max-w-2xl md:m-auto">
				{
					faq.map(({q, a}, index) => (
						<div className="" key={'faq-' + index}>
							<div className="font-extrabold">{q}</div>
							<div>{a}</div>
						</div>
					))
				}
			</div>
    </div>
  );
};

export default FAQ;
