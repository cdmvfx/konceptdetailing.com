import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Image from "next/image";

function getStatusFormatter(currentItem: number, total: number): string {
	return `<div className="text-2xl p-4" style={{ textShadow: "none" }}>
			${currentItem} / ${total}
		</div>`;
}

function Gallery({
	galleryPhotos,
}: {
	galleryPhotos: Array<string>;
}): JSX.Element {
	return (
		<div
			id="gallery"
			className="w-full h-auto space-y-4 py-16 md:space-y-0 flex flex-col items-center justify-center z-10"
		>
			<div className="w-full block z-10 md:hidden">
				<Carousel
					showIndicators
					showThumbs={false}
					swipeable
					autoPlay
					interval={3000}
					emulateTouch
					dynamicHeight={false}
					renderArrowPrev={(prevClicked) => (
						<div
							className="absolute z-20 top-[48%] p-4 transition-all cursor-pointer ease-in-out hover:scale-150"
							onClick={prevClicked}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									prevClicked();
								}
							}}
							tabIndex={0}
							role="button"
							aria-label="Previous"
						>
							<MdArrowBackIos />
						</div>
					)}
					renderArrowNext={(nextClicked) => (
						<div
							className="absolute z-20 top-[48%] p-4 transition-all cursor-pointer ease-in-out hover:scale-150 right-0"
							onClick={nextClicked}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									nextClicked();
								}
							}}
							tabIndex={0}
							role="button"
							aria-label="Next"
						>
							<MdArrowForwardIos />
						</div>
					)}
					renderIndicator={(indiClicked, indiSelected) => (
						<div
							style={{
								width: "calc((100% / 42) - .3rem)",
								height: "100%",
							}}
							className={`relative bottom-[90%] m-[.1rem] inline-block border-t-2 border-black ${
								indiSelected ? "border-t-white" : ""
							}`}
							onClick={indiClicked}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									indiClicked(e);
								}
							}}
							tabIndex={0}
							role="button"
							aria-label="Indicator"
						/>
					)}
					statusFormatter={getStatusFormatter}
					centerMode={false}
					showStatus={false}
					infiniteLoop
				>
					{galleryPhotos.map((url) => (
						<div
							className="p-1 flex items-center justify-center h-full"
							key={`mobile-${url}`}
						>
							<Image
								className="object-fit h-full relative"
								src={url}
								alt=""
								width={500}
								height={500}
							/>
						</div>
					))}
				</Carousel>
			</div>
			<div className="w-full hidden md:block z-10">
				<Carousel
					showIndicators
					showThumbs={false}
					swipeable
					autoPlay
					interval={3000}
					emulateTouch
					dynamicHeight={false}
					centerMode
					centerSlidePercentage={33}
					infiniteLoop
					showStatus={false}
					renderArrowPrev={(prevClicked) => (
						<div
							className="absolute z-20 top-[48%] p-4 transition-all cursor-pointer ease-in-out hover:scale-150"
							onClick={prevClicked}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									prevClicked();
								}
							}}
							tabIndex={0}
							role="button"
							aria-label="Previous"
						>
							<MdArrowBackIos />
						</div>
					)}
					renderArrowNext={(nextClicked) => (
						<div
							className="absolute z-20 top-[48%] p-4 transition-all cursor-pointer ease-in-out hover:scale-150 right-0"
							onClick={nextClicked}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									nextClicked();
								}
							}}
							tabIndex={0}
							role="button"
							aria-label="Next"
						>
							<MdArrowForwardIos />
						</div>
					)}
					renderIndicator={(indiClicked, indiSelected) => (
						<div
							style={{
								width: "calc((100% / 42) - .6rem)",
								height: "100%",
							}}
							className={`relative bottom-[90%] m-1 inline-block border-t-2 border-black ${
								indiSelected ? "border-t-white" : ""
							}`}
							onClick={indiClicked}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									indiClicked(e);
								}
							}}
							tabIndex={0}
							role="button"
							aria-label="Indicator"
						/>
					)}
					statusFormatter={getStatusFormatter}
				>
					{galleryPhotos.map((url) => (
						<div
							className="p-1 flex items-center justify-center h-full"
							key={`desktop-${url}`}
						>
							<Image
								className="object-fit h-full relative"
								src={url}
								alt=""
								width={600}
								height={600}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}

export default Gallery;
