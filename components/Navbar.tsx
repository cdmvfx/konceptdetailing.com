import Image from "next/image";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import Link from "react-scroll/modules/components/Link";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function Navbar(): JSX.Element {
	const navLinksStart = [
		{
			label: "Services",
			value: "services",
		},
		{
			label: "Testimonials",
			value: "testimonials",
		},
		{
			label: "Gallery",
			value: "gallery",
		},
	];

	const navLinksEnd = [
		{
			label: "About Me",
			value: "about",
		},
		{
			label: "FAQ",
			value: "faq",
		},
		{
			label: "Contact",
			value: "contact",
		},
	];

	const navLinksFull = navLinksStart.concat(navLinksEnd);

	const [menu, setMenu] = useState(false);

	return (
		<div className="fixed z-40 w-full top-0 left-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm border-b border-b-[#ffffff]">
			<AnimatePresence mode="wait" initial={false}>
				{Boolean(menu) && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { ease: "easeInOut" },
						}}
						exit={{ opacity: 0, transition: { ease: "easeOut" } }}
						className="w-screen z-30 h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-10 md:hidden"
					>
						<button
							type="button"
							className="cursor-pointer p-2"
							aria-label="Close Menu"
							onClick={() => {
								setMenu(false);
							}}
						>
							<FaTimes />
						</button>
						{navLinksFull.map(({ label, value }) => (
							<div
								key={`nav-mobile-item-start-${value}`}
								className="cursor-pointer"
							>
								<Link
									activeClass="active"
									to={value}
									spy={false}
									smooth
									offset={-150}
									duration={500}
									rel="nofollow"
									role="button"
									tabIndex={0}
									aria-label={label}
									className="p-4"
									onClick={() => {
										setMenu(false);
									}}
								>
									{label}
								</Link>
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<div className="flex flex-wrap justify-between md:justify-center items-center md:space-x-8 lg:space-x-12 py-4 px-8 md:-ml-[82px]">
				{navLinksStart.map(({ label, value }) => (
					<div
						key={`nav-item-start-${value}`}
						className="hidden md:block uppercase tracking-widest text-xs cursor-pointer"
					>
						<Link
							activeClass="active"
							to={value}
							spy={false}
							smooth
							offset={-70}
							duration={500}
							rel="nofollow"
							role="button"
							tabIndex={0}
							aria-label={label}
						>
							{label}
						</Link>
					</div>
				))}
				<div className="cursor-pointer">
					<Link
						activeClass="active"
						to="hero"
						spy={false}
						smooth
						offset={-70}
						duration={500}
						rel="nofollow"
						role="button"
						tabIndex={0}
						aria-label="Koncept Detailing"
					>
						<Image
							alt="Koncept Detailing"
							src="/images/logo.svg"
							width={80}
							height={80}
						/>
					</Link>
				</div>
				<button
					type="button"
					className="md:hidden uppercase tracking-widest text-xl cursor-pointer"
					aria-label="Open Menu"
					onClick={() => {
						setMenu(true);
					}}
				>
					<RiMenuFill />
				</button>
				{navLinksEnd.map(({ label, value }) => (
					<div
						key={`nav-item-end-${value}`}
						className="hidden md:block uppercase tracking-widest text-xs cursor-pointer"
					>
						<Link
							activeClass="active"
							to={value}
							spy={false}
							smooth
							offset={-70}
							duration={500}
							rel="nofollow"
							role="button"
							tabIndex={0}
							aria-label={label}
						>
							{label}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Navbar;
