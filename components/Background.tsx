import { useEffect, useState } from "react";

const Background = () => {

  return (
			<div
				id="parallaxbackground" 
				className="pointer-events-none"
				style={{ 
					width: "1080px",
					height: "1280px",
					position: "absolute",
					backgroundImage: "url(../images/bg-crosssquares.svg)",
					backgroundRepeat: "repeat",
					backgroundSize: "contain",
					transform: `translateY(${offsetY * 0.5}px)`,
				}}
			>
				testing
			</div>
  );
};

export default Background;
