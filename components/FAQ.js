const FAQ = () => {

	const faq = [
		{
			q: "Where are you located?",
			a: "I am based in Tampa, and will drive up to 20 miles to detail your vehicle."
		},
		{
			q: "I'm not in Tampa. Can you drive to me?",
			a: "Yes, but I will charge you for an additional $10 per 10 miles to cover the gas and time expenses."
		},
		{
			q: "How much do you charge?",
			a: "Every detail is different depending on the size of the vehicle, level of dirtiness, and tier of detailing you'd like. To get an accurate quote, please contact me with details!"
		}
	];
  return (
    <div className="text-center p-8 space-y-4 md:space-y-8 w-full bg-neutral-800 border-white border-b">
      <div className="uppercase text-xl tracking-widest md:text-4xl">FAQ</div>
      <div>
        <hr className="m-auto w-32 md:w-64" />
      </div>
			<div className="space-y-8 leading-8 md:text-2xl md:leading-10 md:max-w-2xl md:m-auto">
				{
					faq.map(({q, a}, index) => (
						<div className="">
							<div className="font-extrabold">{q}</div>
							<div>{a}</div>
						</div>
					))
				}
			</div>
    </div>
  );
};

export default FAQ;
