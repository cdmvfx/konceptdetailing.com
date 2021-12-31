import Image from "next/image"
import { useState } from "react"
import { RiMenuFill } from 'react-icons/ri'
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {

	const navLinksStart = [
		{
			label: "Services",
			value: "services"
		},
		{
			label: "About Me",
			value: "about"
		},
		{
			label: "Testimonials",
			value: "testimonials"
		}
	]

	const navLinksEnd = [
		{
			label: "Gallery",
			value: "gallery"
		},
		{
			label: "FAQ",
			value: "faq"
		},
		{
			label: "Contact",
			value: "contact"
		}
	]

	const navLinksFull = navLinksStart.concat(navLinksEnd);

	const [menu, setMenu] = useState(false);

	return (
		<div className="fixed w-full top-0 left-0 z-50">
			{menu && 
				<div className="w-screen h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-10 backdrop-filter backdrop-blur-sm md:hidden">
					<div className="cursor-pointer" onClick={() => setMenu(false)}>X</div>
					{navLinksFull.map(({label, value}, index ) => (
						<div key={`nav-mobile-item-start-${index}`} className="cursor-pointer">
							<Link 
								activeClass="active"
								to={value}
								spy={false}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{label}
							</Link>
						</div>
					))}
				</div>
			}
			<div className="flex flex-wrap justify-between md:justify-center items-center md:space-x-8 lg:space-x-12 py-4 px-8">
				{
					navLinksStart.map(({label, value}, index) => (
						<div key={`nav-item-start-${index}`} className="hidden md:block uppercase tracking-widest text-xs cursor-pointer">
							<Link 
								activeClass="active"
								to={value}
								spy={false}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{label}
							</Link>
						</div>
					))
				}
				<div className="cursor-pointer">
				<Link 
								activeClass="active"
								to="hero"
								spy={false}
								smooth={true}
								offset={-70}
								duration={500}
							>
								<Image alt="Koncept Detailing" src="/images/logo.svg" width={80} height={80} />
							</Link>
							</div>
				<div className="md:hidden uppercase tracking-widest text-xl cursor-pointer" onClick={() => setMenu(true)}><RiMenuFill /></div>
				{
					navLinksEnd.map(({label, value}, index) => (
						<div key={`nav-item-end-${index}`} className="hidden md:block uppercase tracking-widest text-xs cursor-pointer">
							<Link 
								activeClass="active"
								to={value}
								spy={false}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{label}
							</Link>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Navbar
