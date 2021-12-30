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
        "Instrument Panel, Gauges, Buttons, Knobs, and Vents",
      ],
    },
    {
      label: "Exterior",
      bullets: [
        "Gentle Car Wash",
        "Liquid Carnauba / Wax",
        "Hand Drying",
        "Exterior Trim Conditioning",
        "Bug and Tar Removal",
        "Tires, Wheels, and Wheel Wells",
        "Wheels and Chrome Polished and Protected",
        "Gas Compartment Cleaned",
        "Exhaust Tips Cleaned and Polished",
      ],
    },
  ];

  return (
    <div className=" border-white border-b">
      <div className="flex flex-wrap flex-col w-full h-auto text-center items-center justify-center py-16 px-8 space-y-16 md:flex-row md:items-baseline md:space-y-0 md:space-x-32  bg-neutral-900">
        {services.map(({ label, bullets }, index) => (
          <div key={`service-${index}`} className="w-full space-y-4 md:space-y-8 md:w-auto">
            <div className="uppercase text-xl tracking-widest md:text-4xl">{label}</div>
            <div>
              <hr className="m-auto w-32 md:w-64" />
            </div>
            <div>
              <ul>
                {bullets.map((bullet, index) => (
                  <li
                    key={`${label}-bullet-${index}`}
                    className="md:text-2xl leading-8 md:leading-10"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
