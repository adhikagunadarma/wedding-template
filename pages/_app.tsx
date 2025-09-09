// pages/_app.tsx



import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { AppProps } from "next/app";
import AudioPlayer from "@/components/AudioPlayer";
import Head from 'next/head';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          font-family: ${geistSans.style.fontFamily}, ${geistMono.style.fontFamily};
        }
      `}</style>
          <Head>
        <link rel="icon" href="/carry.png" type="image/png"  />
        {/* or PNG: <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </Head>
      <Component {...pageProps} />
      <AudioPlayer />
    </>
  );
}

