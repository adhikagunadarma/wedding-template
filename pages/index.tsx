// pages/index.tsx
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Couple from "@/components/Couple";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
import MapEmbed from "@/components/MapEmbed";
import Gallery from "@/components/Gallery";
import RSVPForm from "@/components/RSVPForm";
import WeddingWishes from "@/components/WeddingWishes";
import WeddingGift from "@/components/WeddingGift";
import Footer from "@/components/Footer";
import GuestNameProvider from "@/components/GuestNameProvider";
import { Suspense } from "react";


// github pages masih missing assets
// deploy github pages lebih murah cuma butuh domain (200-300k probs) tny chat gpt
// kalo ke S3 kudu bayar nama domain sama r53 jg

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="w-full xl:max-w-[1024px] xl:mx-auto xl:px-4">
        <Suspense fallback={null}>
          <GuestNameProvider />
        </Suspense>
        <Hero />
        <Countdown />
        <Couple />
        <Story />
        <EventDetails />
        <MapEmbed />
        <Gallery />
        <RSVPForm />
        <WeddingWishes />
        <WeddingGift />
        <Footer />
      </div>
    </main>
  );
}
