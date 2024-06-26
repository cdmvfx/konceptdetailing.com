import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";
import Image from "next/image";

function About(): JSX.Element {
	return (
		<div
			id="about"
			className="relative w-full lg:flex lg:flex-row md:p-16 flex flex-col items-center"
		>
			<div className="p-8 space-y-4 md:space-y-8 w-full lg:w-1/2">
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: {
							type: "tween",
							duration: 1,
							ease: "easeOut",
						},
					}}
					viewport={{ once: true }}
					className="uppercase text-xl tracking-widest md:text-left md:text-4xl"
				>
					FROM MACHINE GUNNER TO DETAILER
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
						viewport={{ once: true }}
						className="w-32 md:m-0 md:w-full"
					/>
				</div>
				<motion.div
					initial={{ opacity: 0, y: "0" }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							type: "tween",
							ease: "easeOut",
							duration: 1,
						},
					}}
					viewport={{ once: true }}
					className="text-left space-y-4  leading-8 md:text-xl md:leading-10"
				>
					<p className="">
						My name is Kevin Martinez - Costa Rican born, raised in
						Florida. I officially became a United States Marine in
						2008, soon after graduating high school. As a machine
						gunner, I had the great honor to serve my country in
						Afghanistan.
					</p>
					<p>
						The years in the Marine Corps were the most difficult of
						my life. After 8 years, I left the Marine Corps to
						pursue my passion: auto detailing.
					</p>
				</motion.div>
			</div>
			{/* <div>
				<Image src={collageVertical}/>
			</div> */}
			<div className="block h-full relative w-3/4 lg:1/2 z-10">
				<div
					className="kd-about-photo kd-about-photo-1-lg"
					style={{
						backgroundImage: "url(../images/image-ph.svg)",
						backgroundSize: "100% auto",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						border: "1px solid white",
					}}
				>
					<motion.div
						className=""
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [
								0, 0.3, 0, 0.4, 0.1, 0.4, 0, 0.1, 0.3, 0.6, 0,
								0.1, 0.3, 0, 0.4, 0.1, 0.4, 0, 0.1, 0.3, 0.6, 1,
							],
							transition: {
								duration: 1,
								type: "tween",
								ease: "easeOut",
							},
						}}
						viewport={{ amount: 1, once: true }}
					>
						<Image
							src="https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/marine-1.jpg"
							alt="Kevin Martinez Marine"
							width={800}
							height={800}
						/>
					</motion.div>
				</div>
				<div
					className="kd-about-photo kd-about-photo-2-lg"
					style={{
						backgroundImage: "url(../images/image-ph.svg)",
						backgroundSize: "100% auto",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						border: "1px solid white",
					}}
				>
					<motion.div
						className=""
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [
								0, 0.3, 0, 0.4, 0.1, 0.4, 0, 0.1, 0.3, 0.6, 0,
								0.1, 0.3, 0, 0.4, 0.1, 0.4, 0, 0.1, 0.3, 0.6, 1,
							],
							transition: {
								duration: 1,
								type: "tween",
								ease: "easeOut",
								delay: 0,
							},
						}}
						viewport={{ amount: 1, once: true }}
					>
						<Image
							src="https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/marines-section.jpg"
							alt="Kevin Martinez Squad"
							width={800}
							height={800}
						/>
					</motion.div>
				</div>
				<div
					className="kd-about-photo kd-about-photo-3-lg"
					style={{
						backgroundImage: "url(../images/image-ph.svg)",
						backgroundSize: "100% auto",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						border: "1px solid white",
					}}
				>
					<motion.div
						className=""
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: [
								0, 0.3, 0, 0.4, 0.1, 0.4, 0, 0.1, 0.3, 0.6, 0,
								0.1, 0.3, 0, 0.4, 0.1, 0.4, 0, 0.1, 0.3, 0.6, 1,
							],
							transition: {
								duration: 1,
								type: "tween",
								ease: "easeOut",
								delay: 0,
							},
						}}
						viewport={{ amount: 1, once: true }}
					>
						<Image
							src="https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/kevin-cr-sm.jpg"
							alt="Kevin Martinez Costa Rica"
							width={800}
							height={800}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default About;
