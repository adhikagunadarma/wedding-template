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

export default function Home() {
  return (

    
    <main className="flex flex-col md:flex-row">
    <AudioPlayer />
    {/* Left Sticky Hero */}
    <div className="hidden md:block md:w-1/2 sticky top-0 h-screen">
      <Hero />
    </div>

    {/* Right Scrollable Content */}
    <div className="w-full md:w-1/2">
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

