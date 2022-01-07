import { useEffect, useState } from "react";

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
		const parallaxbackground = document.querySelector('#parallaxbackground')  
		parallaxbackground.addEventListener('click', (event) => {  
			event.preventDefault();  
		});
  }, []);

  return (
    <div id="parallaxbackground" className="w-full h-full overflow-hidden pointer-events-none ">
			<div
				className="absolute top-0 left-0 w-full h-full opacity-20 "
				style={{ 
							backgroundImage: "url(../images/bg-crosssquares.svg)",
							backgroundPosition: "center",
							backgroundRepeat: "repeat",
							transform: `translateY(${offsetY * 0.5}px)`,
						}}
			></div>
			<div
				className="absolute top-0 left-0 w-full h-full opacity-10"
				style={{ 
							backgroundImage: "url(../images/bg-tinysquares.svg)",
							backgroundPosition: "center",
							backgroundRepeat: "repeat",
							transform: `translateY(${offsetY * .7}px)`,
						}}
			></div>
			<div
				className="absolute top-0 left-0 w-full h-full opacity-20"
				style={{ 
							backgroundImage: "url(../images/bg-rectangles.svg)",
							backgroundPosition: "center",
							backgroundRepeat: "repeat",
							transform: `translateY(${offsetY * .2}px)`,
						}}
			></div>
		</div>
  );
};

export default Background;
