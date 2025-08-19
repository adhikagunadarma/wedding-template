"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// foto kecilin gereja nunggu pepe+ foto dress code

const EventDetails = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      className="pt-24 pb-16 bg-white text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/paper.png')" }}
    >
      <motion.h2
        className="font-script text-5xl sm:text-6xl md:text-7xl text-[#44322a] mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Event Details
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto space-y-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {/* Holy Matrimony */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={`${basePath}/images/church.png`}
              alt="Holy Matrimony"
              width={450}
              height={250}
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <h3 className="text-2xl font-semibold text-[#44322a]">Holy Matrimony</h3>
            <p className="text-[#7a6c5d] font-light">09:00 AM, Sunday, 01 June 2025</p>
            <p className="text-[#7a6c5d] font-light">Grand Mosque Hall</p>
          </div>
        </motion.div>

        {/* Reception */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right flex flex-col justify-center items-center md:items-end">
            <h3 className="text-2xl font-semibold text-[#44322a]">Reception</h3>
            <p className="text-[#7a6c5d] font-light">11:00 AM, Sunday, 01 June 2025</p>
            <p className="text-[#7a6c5d] font-light">Grand Ballroom</p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <Image
              src={`${basePath}/images/party.png`}
              alt="Reception"
              width={450}
              height={250}
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Dress Code */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={`${basePath}/images/dinner.png`}
              alt="Dress Code"
              width={450}
              height={250}
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <h3 className="text-2xl font-semibold text-[#44322a]">Dress Code</h3>
            <p className="text-[#7a6c5d] font-light">Formal Attire</p>
            <p className="text-[#7a6c5d] font-light">Black & White</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventDetails;
