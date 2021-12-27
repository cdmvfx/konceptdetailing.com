const Services = () => {

	const services = [
		{
			label: "Interior",
			bullets: [
				"Thorough Vacuum",
				"Steam Cleaning",
				"Stain Removal",
				"Pet Hair Removal",
				"Trunk and Cargo Area",
				"Dash, Console, Cup Holders, and Storage",
				"Instrument Panel, Gauges, Buttons, Knobs, and Vents"
			]
		},
		{
			label: "Exterior",
			bullets: [
				"Gentle Car Wash",
				"Liquid Carnauba",
				"Hand Drying",
				"Exterior Trim Conditioning",
				"Bug and Tar Removal",
				"Tires, Wheels, and Wheel Wells",
				"Wheels and Chrome Polished and Protected",
				"Gas Compartment Cleaned",
				"Exhaust Tips Cleaned and Polished"
			]
		},
	];

	return (
		<div className="">
			<div className="flex flex-wrap flex-col w-full h-auto py-16 px-8 space-y-16 text-center items-center justify-center bg-neutral-900">
				{
					services.map(({label, bullets}, index) => (
						<div key={`service-${index}`} className="w-full space-y-4">
							<div className="uppercase text-xl tracking-widest">{label}</div>
							<div><hr className="m-auto w-32"/></div>
							<div>
								<ul>
								{
									bullets.map((bullet, index) => (
										<li key={`${label}-bullet-${index}`} className="mb-2">{bullet}</li>
									))
								}
								</ul>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Services
