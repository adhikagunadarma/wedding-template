"use client";

const Hero = () => (
  <section className="w-full relative overflow-hidden">
    {/* 🎞️ Responsive GIF */}
    <img
      src="/images/home.gif"
      alt="Wedding background"
      className="w-full h-auto object-cover block"
    />

    {/* 💍 Caption Overlay with negative margin to lift it up from bottom */}
    <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 md:bottom-20 md:right-24 z-10 text-right">
      <h1 className="text-sm sm:text-base md:text-lg font-light tracking-widest text-[#9f9389] uppercase mb-3">
        The Wedding of
      </h1>
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-script text-[#44322a]">
        Lizzy & Arya
      </h2>
    </div>
  </section>
);

export default Hero;
