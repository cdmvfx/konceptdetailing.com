import { useEffect, useState } from "react";

export const useViewportWidth = () => {
	const [width, setWidth] = useState<number | null>(null);

	function handleResize() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return width;
};