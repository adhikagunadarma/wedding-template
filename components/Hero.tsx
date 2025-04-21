"use client";
import Leaves from "@/components/Leaves";


const Hero = () => (
  
  <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#fefbf6] px-6 py-20">

    <Leaves />
    <h1 className="text-base md:text-lg font-light tracking-widest text-[#9f9389] uppercase mb-3">
      The Wedding of
    </h1>
    <h2 className="text-5xl md:text-7xl font-[cinzel] text-[#44322a] mb-6">
      Alex & Alice
    </h2>
    <p className="text-[#7a6c5d] text-sm md:text-base mb-1">Sunday, 01 June 2025</p>
    <p className="text-[#7a6c5d] text-sm md:text-base">Jakarta, Indonesia</p>

    <Leaves />
  </section>
);

export default Hero;