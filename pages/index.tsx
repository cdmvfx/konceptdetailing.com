import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { list } from "@vercel/blob";
import { useViewportWidth } from "../hooks/use-viewport-width";

export default function Home({
  galleryPhotos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  const width = useViewportWidth();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const parallaxbackground = document.querySelector(
      "#parallaxbackground"
    ) as Element;

    parallaxbackground.addEventListener("click", (event) => {
      event.preventDefault();
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Koncept Detailing - Cars, SUVs, Motorcycles</title>
        <meta
          name="description"
          content="Former United States Marine based in Tampa, Florida with over 8 years of experience in auto detailing."
        />
        <link rel="icon" href="/images/favicon.ico" />
        <link
          rel="preload"
          as="image"
          href={
            width && width > 1024
              ? "https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/koncept-promo-horizontal.webp"
              : "https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/koncept-promo-vertical.webp"
          }
        />
        <link
          rel="preload"
          as="video"
          href={
            width && width > 1024
              ? "https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/koncept-promo-horizontal.mp4"
              : "https://dg9sgroodeckomox.public.blob.vercel-storage.com/koncept-detailing/koncept-promo-vertical.mp4"
          }
          type="video/mp4"
        />
      </Head>

      <main className="relative overflow-hidden bg-[#111111]">
        <div
          id="parallaxbackground"
          className="pointer-events-none z-10 opacity-10 lg:bg-[length:50%]"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundImage: "url(../images/bg-crosssquares.svg)",
            backgroundRepeat: "repeat",
            backgroundPosition: "center top",
            transform: `translateY(${offsetY * 0.2}px)`,
          }}></div>
        <div
          id="parallaxbackground"
          className="pointer-events-none z-10 opacity-30 lg:bg-[length:50%]"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundImage: "url(../images/bg-rectangles.svg)",
            backgroundRepeat: "repeat",
            backgroundPosition: "center top",
            transform: `translateY(${offsetY * 0.5}px)`,
          }}></div>
        <div
          id="parallaxbackground"
          className="pointer-events-none z-10 opacity-30 lg:bg-[length:50%]"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundImage: "url(../images/bg-tinysquares.svg)",
            backgroundRepeat: "repeat",
            backgroundPosition: "center top",
            transform: `translateY(${offsetY * 0.7}px)`,
          }}></div>
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Gallery galleryPhotos={galleryPhotos} />
        <About />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = (async () => {
  const galleryPhotosBlobs = await list({
    prefix: "koncept-detailing/gallery/",
    mode: "folded",
  });

  galleryPhotosBlobs.blobs.shift();

  const galleryPhotos = galleryPhotosBlobs.blobs.map(
    (image) => image.url
  );

  return {
    props: {
      galleryPhotos: galleryPhotos,
    },
  };
}) satisfies GetStaticProps<{
  galleryPhotos: Array<string>;
}>;
