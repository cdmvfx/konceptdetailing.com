import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {

	function importAll(r) {
		let images = [];
		r.keys().map((item, index) => { images[index] = r(item); });
		return images;
	}
	
	const images = importAll(require.context('../public/photos/gallery', false, /\.(png|jpe?g|svg)$/));

	const gallery = images.map((image, index) => (
		<div className="p-4 flex items-center justify-center h-full" key={`gallery-photo-${index}`}><div><img className="" src={image.default.src} alt=""/></div></div>
	));

	return (
		<div id="gallery" className="w-full h-auto space-y-4 md:space-y-0 md:py-4 flex flex-col items-center justify-center bg-black border-white border-b">
			<div className="w-full block md:hidden">
				<Carousel
					showIndicators={false}
					showThumbs={false}
					swipeable={true}
					autoPlay={true}
					interval={3000}
					emulateTouch={true}
					dynamicHeight={false}
					centerMode={false}
					infiniteLoop={true}
				>
					{gallery}
				</Carousel>
			</div>
			<div className="w-full hidden md:block">
				<Carousel
					showIndicators={false}
					showThumbs={false}
					swipeable={true}
					autoPlay={true}
					interval={3000}
					emulateTouch={true}
					dynamicHeight={false}
					centerMode={true}
					centerSlidePercentage={33}
					infiniteLoop={true}
				>
					{gallery}
				</Carousel>
			</div>
		</div>
	)
}

export default Gallery
