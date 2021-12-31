import { Link, animateScroll } from 'react-scroll';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/photos/red-mercedes-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen w-full  border-white border-b"
			id="hero"
    >
      <div className="flex flex-col items-center justify-center h-screen uppercase tracking-widest">
        <div className="mb-4">From Koncept to Reality</div>
        <div className="p-2 border cursor-pointer border-solid border-white text-center">
				<Link 
					activeClass="active"
					to="contact"
					spy={false}
					smooth={true}
					offset={-70}
					duration={500}
				>
					Contact
				</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
