import '../styles/globals.css'
import type { AppProps as NextAppProps } from "next/app";

function MyApp({ Component, pageProps }: NextAppProps) {
  return <Component {...pageProps} />
}

export default MyApp
