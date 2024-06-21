import { useEffect, useState } from "react";

export const useViewportWidth = (): number | null => {
	const [width, setWidth] = useState<number | null>(null);

	function handleResize(): void {
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
