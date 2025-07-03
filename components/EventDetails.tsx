"use client";

import React from "react";
import Image from "next/image";

const EventDetails = () => {
  return (
    <section
      className="pt-24 pb-16 bg-white text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/paper.png')" }}
    >
      <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#44322a] mb-12">
        Event Details
      </h2>

      <div className="max-w-5xl mx-auto space-y-20">

        {/* Holy Matrimony */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/church.png"
              alt="Holy Matrimony"
              width={500}
              height={300}
              className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <h3 className="text-2xl font-semibold text-[#44322a]">Holy Matrimony</h3>
            <p className="text-[#7a6c5d]">09:00 AM, Sunday, 01 June 2025</p>
            <p className="text-[#7a6c5d]">Grand Mosque Hall</p>
          </div>
        </div>

        {/* Reception: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right flex flex-col justify-center items-center md:items-end">
            <h3 className="text-2xl font-semibold text-[#44322a]">Reception</h3>
            <p className="text-[#7a6c5d]">11:00 AM, Sunday, 01 June 2025</p>
            <p className="text-[#7a6c5d]">Grand Ballroom</p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <Image
              src="/images/party.png"
              alt="Reception"
              width={500}
              height={300}
              className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;
