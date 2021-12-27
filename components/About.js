import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from "../public/photos/marine-1.jpg";
import photo2 from "../public/photos/marines-section.jpg";


const About = () => {

	const aboutPhotos = [
		<Image src={photo1} key="about-photo-1" alt="My first time deployed." />,
		<Image src={photo2} key="about-photo-2" alt="Platoon" />
	]

  return (
    <div className="w-full h-auto bg-neutral-800 ">
      <div className="max-w-xl">
				<Carousel
					showIndicators={false}
					showThumbs={false}
					swipeable={true}
					autoPlay={true}
					interval={3000}
					emulateTouch={true}
					dynamicHeight={true}
				>
					{aboutPhotos}
				</Carousel>
      </div>
      <div className="text-center p-8 space-y-4 w-full">
        <div className="uppercase text-xl tracking-widest">About Me</div>
        <div>
          <hr className="m-auto w-32" />
        </div>
        <div className="text-left space-y-4 indent-4">
          <p className="first-letter:text-2xl">
            My name is Kevin Martinez - Costa Rican born and raised in Florida.
            I officially became a United States Marine in 2008, soon after graduating
            high school. As a machine gunner, I had the great honor to serve
            my country, doing 2 tours in Afghanistan.
          </p>
          <p>
            After 8 years, I left the Marine Corps to pursue my passion - auto detailing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
