"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const RSVPForm = () => {
  const [showForm, setShowForm] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <motion.section
      className="py-16 bg-[#fefbf6] text-center px-6 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <motion.h2
        className="font-script text-5xl sm:text-6xl md:text-7xl text-[#44322a] mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        RSVP
      </motion.h2>

      <motion.p
        className="text-[#7a6c5d] mb-8 font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
      >
        Please let us know if you can join us
      </motion.p>

      {/* Envelope Image */}
      <motion.div
        className="cursor-pointer inline-block"
        onClick={() => setShowForm(true)}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-48 sm:w-64 md:w-72 lg:w-80 mx-auto transition-transform hover:scale-120 duration-300">
          <Image
            src={`${basePath}/images/Envelope.png`}
            alt="Open RSVP Form"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-[#7a6c5d] mt-2 italic">Click to open RSVP</p>
      </motion.div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-[#fefbf6]/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-2xl p-4 rounded-lg relative shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-[#44322a] text-xl font-bold"
                aria-label="Close RSVP"
              >
                ✕
              </button>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc6WuSZvXUkJy0Z5ckBbrLve3mqr_Bb_ShnKB8AvzJV3pQVGQ/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-md"
              >
                Loading…
              </iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default RSVPForm;
