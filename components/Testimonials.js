import { FaStar } from 'react-icons/fa';

const Testimonials = () => {

	const reviews = [
		{
			name: "Lisa",
			image: '',
			text: "Kevin was incredibly professional and came to my work while I was inside. Left my car looking like new!"
		},
		{
			name: "Eddy",
			image: '',
			text: "11/10 Absolutely worth hiring. He really cares about cars and knows his stuff. Don't settle for anyone less!"
		},
		{
			name: "James",
			image: '',
			text: "My car was FILTHY when I brought it to Kevin. In almost no time, he managed to completely transform it to something I'm actually proud to drive!"
		}
	]

	return (
		<div className="px-8 py-16 text-center space-y-16 bg-neutral-900 flex flex-col md:flex-row items-baseline leading-8 md:space-y-0 md:text-2xl md:leading-10 border-white border-b">
			{
				reviews.map(({name, image, text}, index) => (
					<div className='space-y-2 flex-1 md:p-8'>
						<div className='uppercase text-xl tracking-widest'>{name}</div>
						<div className='flex justify-center text-yellow-600'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
						<div className=''>{text}</div>
					</div>
				))
			}
		</div>
	)
}

export default Testimonials
