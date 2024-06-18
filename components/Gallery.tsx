import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { ListBlobResultBlob } from "@vercel/blob";
import Image from "next/image";

const Gallery = ({
  galleryPhotos,
}: {
  galleryPhotos: Array<string>;
}) => {
  return (
    <div
      id="gallery"
      className="w-full h-auto space-y-4 py-16 md:space-y-0 flex flex-col items-center justify-center z-10">
      <div className="w-full block z-10 md:hidden">
        <Carousel
          showIndicators={true}
          showThumbs={false}
          swipeable={true}
          autoPlay={true}
          interval={3000}
          emulateTouch={true}
          dynamicHeight={false}
          renderArrowPrev={(prevClicked, hasPrev, prevLabel) => (
            <div
              className="absolute z-20 top-[48%] p-4 transition-all cursor-pointer ease-in-out hover:scale-150"
              onClick={prevClicked}>
              <MdArrowBackIos />
            </div>
          )}
          renderArrowNext={(nextClicked, hasNext, nextLabel) => (
            <div
              className="absolute z-20 top-[48%] p-4 transition-all cursor-pointer ease-in-out hover:scale-150 right-0"
              onClick={nextClicked}>
              <MdArrowForwardIos />
            </div>
          )}
          renderIndicator={(
            indiClicked,
            indiSelected,
            indiIndex,
            indiLabel
          ) => (
            <div
              style={{
                width: "calc((100% / 42) - .3rem)",
                height: "100%",
              }}
              className={
                "relative bottom-[90%] m-[.1rem] inline-block border-t-2 border-black " +
                (indiSelected ? "border-t-white" : "")
              }
              onClick={indiClicked}></div>
          )}
          statusFormatter={(currentItem, total) =>
            (
              <div
                className="text-2xl p-4"
                style={{ textShadow: "none" }}>
                {currentItem} / {total}
              </div>
            ) as any
          }
          centerMode={false}
          showStatus={false}
          infiniteLoop={true}>
          {galleryPhotos.map((url, index) => (
            <div
              className="p-1 flex items-center justify-center h-full"
              key={`mobile-${url}`}>
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
          showIndicators={true}
          showThumbs={false}
          swipeable={true}
          autoPlay={true}
          interval={3000}
          emulateTouch={true}
          dynamicHeight={false}
          centerMode={true}
          centerSlidePercentage={33}
          infiniteLoop={true}
          showStatus={false}
          renderArrowPrev={(prevClicked, hasPrev, prevLabel) => (
            <div
              className="absolute z-20 top-[48%] p-4 transition-all cursor-pointer ease-in-out hover:scale-150"
              onClick={prevClicked}>
              <MdArrowBackIos />
            </div>
          )}
          renderArrowNext={(nextClicked, hasNext, nextLabel) => (
            <div
              className="absolute z-20 top-[48%] p-4 transition-all cursor-pointer ease-in-out hover:scale-150 right-0"
              onClick={nextClicked}>
              <MdArrowForwardIos />
            </div>
          )}
          renderIndicator={(
            indiClicked,
            indiSelected,
            indiIndex,
            indiLabel
          ) => (
            <div
              style={{
                width: "calc((100% / 42) - .6rem)",
                height: "100%",
              }}
              className={
                "relative bottom-[90%] m-1 inline-block border-t-2 border-black " +
                (indiSelected ? "border-t-white" : "")
              }
              onClick={indiClicked}></div>
          )}
          statusFormatter={(currentItem, total) =>
            (
              <div
                className="text-2xl p-4"
                style={{ textShadow: "none" }}>
                {currentItem} / {total}
              </div>
            ) as any
          }>
          {galleryPhotos.map((url, index) => (
            <div
              className="p-1 flex items-center justify-center h-full"
              key={`desktop-${url}`}>
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
};

export default Gallery;
