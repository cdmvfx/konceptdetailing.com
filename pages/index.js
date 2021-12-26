import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Koncept Detailing - Cars, SUVs, Motorcycles</title>
        <meta name="description" content="Former United States Marine based in Tampa, Florida with over 5 years of experience in auto detailing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
				<Navbar />
				<Hero />
      </main>

      <footer>
      </footer>
    </div>
  )
}
