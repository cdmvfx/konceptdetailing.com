import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Koncept Detailing - Cars, SUVs, Motorcycles</title>
        <meta name="description" content="Former United States Marine based in Tampa, Florida with over 5 years of experience in auto detailing." />
        <link rel="icon" href="/images/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <main>
				<Navbar />
				<Hero />
				<Services />
				<About />
      </main>

      <footer>
      </footer>
    </div>
  )
}
