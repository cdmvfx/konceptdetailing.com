import Image from "next/image"

const Navbar = () => {

	const navLinksStart = [
		{
			label: "Services",
			value: "services"
		},
		{
			label: "About Me",
			value: "about-me"
		}
	]

	const navLinksEnd = [
		{
			label: "Portfolio",
			value: "portfolio"
		},
		{
			label: "Contact",
			value: "contact"
		}
	]

	return (
		<div className="fixed w-full top-0 left-0">
			<div className="flex flex-wrap justify-between md:justify-center items-center md:space-x-10 py-4 px-8">
				{
					navLinksStart.map(({label, value}, index) => (
						<div className="hidden md:block uppercase tracking-widest text-xs">{label}</div>
					))
				}
				<div><Image src="/images/logo.svg" width={80} height={80} /></div>
				<div className="md:hidden uppercase tracking-widest text-xs">menu</div>
				{
					navLinksEnd.map(({label, value}, index) => (
						<div className="hidden md:block uppercase tracking-widest text-xs">{label}</div>
					))
				}
			</div>
		</div>
	)
}

export default Navbar
