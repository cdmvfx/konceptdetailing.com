import { useEffect, useState, useRef } from "react";

export const useIntersectionObserver = (
	callback: () => void,
	options?: IntersectionObserverInit,
): [React.MutableRefObject<IntersectionObserver | null>, boolean] => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsIntersecting(true);
					callback();
				}
			});
		}, options);

		observerRef.current = observer;

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, [callback, options]);

	return [observerRef, isIntersecting];
};
