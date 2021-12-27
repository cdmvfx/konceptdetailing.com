import Image from "next/image"
import { useState } from "react"

const Navbar = () => {

	const navLinksStart = [
		{
			label: "Services",
			value: "services"
		},
		{
			label: "About Me",
			value: "about-me"
		},
		{
			label: "Gallery",
			value: "gallery"
		}
	]

	const navLinksEnd = [
		{
			label: "Testimonials",
			value: "testimonials"
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

	const [menu, setMenu] = useState(false);

	return (
		<div className="fixed w-full top-0 left-0">
			{menu && 
				<div className="w-screen h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-10 backdrop-filter backdrop-blur-sm md:hidden">
					<div className="cursor-pointer" onClick={() => setMenu(false)}>X</div>
					{navLinksStart.map(({label, value}, index ) => (
						<div key={`nav-mobile-item-start-${index}`}>{label}</div>
					))}
					{navLinksEnd.map(({label, value}, index ) => (
						<div key={`nav-mobile-item-end-${index}`}>{label}</div>
					))}
				</div>
			}
			<div className="flex flex-wrap justify-between md:justify-center items-center md:space-x-10 py-4 px-8">
				{
					navLinksStart.map(({label, value}, index) => (
						<div key={`nav-item-start-${index}`} className="hidden md:block uppercase tracking-widest text-xs">{label}</div>
					))
				}
				<div><Image alt="Koncept Detailing" src="/images/logo.svg" width={80} height={80} /></div>
				<div className="md:hidden uppercase tracking-widest text-xs cursor-pointer" onClick={() => setMenu(true)}>menu</div>
				{
					navLinksEnd.map(({label, value}, index) => (
						<div key={`nav-item-end-${index}`} className="hidden md:block uppercase tracking-widest text-xs">{label}</div>
					))
				}
			</div>
		</div>
	)
}

export default Navbar
