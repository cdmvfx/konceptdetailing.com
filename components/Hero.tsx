import { PopupButton } from "react-calendly";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useViewportWidth } from "../hooks/use-viewport-width";

function Hero(): JSX.Element {
	const rootRef = useRef<HTMLDivElement>(null);

	const width = useViewportWidth();

	const container = {
		start: { y: 50, opacity: 0 },
		end: {
			y: 0,
			opacity: 1,
			transition: {
				type: "tween",
				staggerChildren: 0.2,
				delayChildren: 22,
			},
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
		<div
			className="h-screen w-full border-white border-b z-10"
			id="hero"
			ref={rootRef}
		>
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
						rootElement={rootRef.current as HTMLElement}
						className="hover:bg-white hover:text-black transition-all"
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
			<div className="w-full h-screen absolute top-0 left-0 overflow-hidden border-b border-white">
				<video
					className="w-full h-full object-cover absolute z-10"
					poster={
						width && width > 1024
							? "https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/koncept-promo-horizontal.webp"
							: "https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/koncept-promo-vertical.webp"
					}
					preload="auto"
					playsInline
					autoPlay
					muted
					loop={false}
				>
					<source
						src={
							width && width > 1024
								? "https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/koncept-promo-horizontal.mp4"
								: "https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/koncept-promo-vertical.mp4"
						}
						type="video/mp4"
					/>
				</video>
			</div>
		</div>
	);
}

export default Hero;
