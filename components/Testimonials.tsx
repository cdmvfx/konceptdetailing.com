import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials(): JSX.Element {
	const reviews = [
		{
			name: "John Brennan",
			image: "",
			text: `Shoutout to Kevin for all the detailing and work he did on my car today. Beyond grateful of everything he's done!!\nExtremely punctual, attentive, kept me updated throughout, did an immaculate job with the vehicle and an overall fantastic human being! More than highly recommend!\n10 stars out of 5! And no, that's not an error!`,
		},
		{
			name: "Harry Gonzales",
			image: "",
			text: "Amazing job! Kevin takes his time and is very meticulous with great attention to detail. you can tell he is passionate and takes pride in his work. Made my car look brand new!",
		},
		{
			name: "Annamaria Alice Havrillova",
			image: "",
			text: "Kevin did such an amazing job with my baby! My car was way overdue for detailing. After 6.5 years of having it, it looked dated and old. Kevin gave it much needed facelift and made it look brand new again.\nThe windows are beautifully clean, no smog or dirty film residue left on them as it sometimes happens when I have it just car washed. He also made sure to go over every surface on the inside and get into every crevice he could. My headlights look brand new.\nI am super impressed and he offers a very affordable price for his work. Thank you so much!!!! I will be coming back for sure. 🙂",
		},
		{
			name: "Madeline Cunnings",
			image: "",
			text: "Kevin did an amazing job & made my car look brand new!  Super affordable & very convenient!!! My paint had tons of scratches due to the previous owner not taking very good care of it. However Kevin made all imperfections disappear. She's as shiny as ever!",
		},
		{
			name: "Jessilyne Low",
			image: "",
			text: "Kevin is the best of the best. He always keeps my Jeep Cherokee looking brand new! If you're looking for someone who perfects everything and pays attention to even the smallest details then Kevin is your guy! Thanks so much Kevin!!",
		},
		{
			name: "Joanna Sanchez",
			image: "",
			text: "Kevin does an exceptional job. Not only is he tremendously skilled, but he absolutely LOVES detailing and it shows in his work. 10/10 recommended! Thank you for keeping my baby so beautiful Kevin!",
		},
		{
			name: "Kiara Rivera",
			image: "",
			text: "Definitely one of the best details I've had!! Reliable, affordable and he uses good quality products. Highly recommend!!",
		},
		{
			name: "Jessica Lauren McLawhorn",
			image: "",
			text: "Kevin did an amazing job on my 2014 Dodge Journey! It's the best I've ever seen it look on the inside and outside! Having a 2 year old makes it a little bit harder keeping the inside clean with all the cereal, goldfish & all sorts of snacks in the floor board. He had the outside shining like new and the inside was spotless! He is your guy when it comes to detailing!!",
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		responsive: [
			{
				breakpoint: 2000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					centerMode: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					arrows: true,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div id="testimonials" className="w-full py-16">
			<Slider {...settings}>
				{reviews.map(({ name, text }) => (
					<motion.div
						initial={{ opacity: 0, y: "200px" }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								type: "tween",
								duration: 1,
								ease: "easeOut",
							},
						}}
						viewport={{ once: true }}
						className="space-y-2 flex-1 p-4 text-center kd-heading md:text-2xl md:leading-10 "
						key={`testimonial-${name}`}
					>
						<div className="uppercase text-xl tracking-widest">
							{name}
						</div>
						<div className="flex justify-center text-yellow-600">
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<div className="">{text}</div>
					</motion.div>
				))}
			</Slider>
		</div>
	);
}

export default Testimonials;
