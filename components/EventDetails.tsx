"use client";

import React from "react";
import { Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  return (
    <section className="py-16 bg-white text-center px-6">
      <h2 className="text-3xl md:text-4xl font-[cinzel] text-[#44322a] mb-10">
        Event Details
      </h2>
      <div className="max-w-xl md:max-w-2xl mx-auto space-y-10">
        <div className="flex flex-col items-center gap-2">
          <Clock className="text-[#e5bcb1] w-8 h-8" />
          <h3 className="text-2xl font-semibold text-[#44322a]">Akad Nikah</h3>
          <p className="text-[#7a6c5d]">09:00 AM, Sunday, 01 June 2025</p>
          <p className="text-[#7a6c5d]">Grand Mosque Hall</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Clock className="text-[#e5bcb1] w-8 h-8" />
          <h3 className="text-2xl font-semibold text-[#44322a]">Resepsi</h3>
          <p className="text-[#7a6c5d]">11:00 AM, Sunday, 01 June 2025</p>
          <p className="text-[#7a6c5d]">Grand Ballroom</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MapPin className="text-[#e5bcb1] w-8 h-8" />
          <h3 className="text-2xl font-semibold text-[#44322a]">Location</h3>
          <p className="text-[#7a6c5d]">Jl. Wedding Indah No.123, Jakarta, Indonesia</p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
