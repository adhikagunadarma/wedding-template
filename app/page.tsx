import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Couple from "@/components/Couple";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
import MapEmbed from "@/components/MapEmbed";
import Gallery from "@/components/Gallery";
import RSVPForm from "@/components/RSVPForm";
import WeddingWishes from "@/components/WeddingWishes"
import WeddingGift from "@/components/WeddingGift"
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import SplashModal from "@/components/SplashModal";

export default function Home() {
  return (

    
    <main className="flex flex-col">
      <AudioPlayer />

      {/* Always stacked layout */}
<div className="w-full xl:max-w-[1024px] xl:mx-auto xl:px-4">
        <SplashModal guestName="Adhika" />
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

