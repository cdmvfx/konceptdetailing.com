import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";

function MyApp({ Component, pageProps }: NextAppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-WWEDT5P2KF" />
    </>
  );
}

export default MyApp;
