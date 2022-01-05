import { FaStar } from 'react-icons/fa';
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Testimonials = () => {

	const reviews = [
		{
			name: "Lisa",
			image: '',
			text: "Kevin was incredibly professional and came to my work while I was inside. Left my car looking like new!"
		},
		{
			name: "Eddy",
			image: '',
			text: "11/10 Absolutely worth hiring. He really cares about cars and knows his stuff. Don't settle for anyone less!"
		},
		{
			name: "James",
			image: '',
			text: "My car was FILTHY when I brought it to Kevin. In almost no time, he managed to completely transform it to something I'm actually proud to drive!"
		}
	]

	return (
		<div id="testimonials" className="px-8 py-64 text-center space-y-16 bg-neutral-900 flex flex-col md:flex-row items-baseline leading-8 md:space-y-0 md:text-2xl md:leading-10 border-white border-b">
			{
				reviews.map(({name, image, text}, index) => (
					<motion.div 
						initial={{opacity: 0, y: "200px"}}
						whileInView={{opacity: 1, y: 0, transition: {type: "tween", duration: 1, ease: "easeOut"}}}
						viewport={{amount: "200px", once: true}}
						className='space-y-2 flex-1 md:p-8' key={"testimonial-"+index}
					>
						<div className='uppercase text-xl tracking-widest'>{name}</div>
						<div className='flex justify-center text-yellow-600'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
						<div className=''>{text}</div>
					</motion.div>
				))
			}
		</div>
	)
}

export default Testimonials
