import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Background from '../components/Background'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import styles from '../styles/Home.module.css'

export default function Home() {

	
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
		
		const parallaxbackground = document.querySelector('#parallaxbackground');

		parallaxbackground.addEventListener('click', (event) => {  
			event.preventDefault();  
		});

		return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Koncept Detailing - Cars, SUVs, Motorcycles</title>
        <meta name="description" content="Former United States Marine based in Tampa, Florida with over 5 years of experience in auto detailing." />
        <link rel="icon" href="/images/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,700&display=swap" rel="stylesheet" />
			</Head>

      <main className='relative overflow-hidden bg-[#111111]'>
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
					}}
				></div>
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
					}}
				></div>
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
					}}
				></div>
				<Navbar />
				<Hero name="main"/>
				<Services id="services" />
				<About id="about" />
				<Testimonials id="testimonials" />
				<Gallery id="gallery" />
				<FAQ id="faq" />
				<Contact id="contact" />
      </main>

      <footer>
      </footer>
    </div>
  )
}
