"use client";

import React, { useState } from "react";
import Image from "next/image";

const RSVPForm = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-16 bg-[#fefbf6] text-center px-6 relative">
      <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#44322a] mb-12">
        RSVP
      </h2>
      <p className="text-[#7a6c5d] mb-8 font-light">Please let us know if you can join us</p>

      {/* Envelope Image */}
      <div className="cursor-pointer inline-block" onClick={() => setShowForm(true)}>
        <div className="w-48 sm:w-64 md:w-72 lg:w-80 mx-auto transition-transform hover:scale-105 duration-300">
          <Image
            src="/images/Envelope.png" // Update with your actual image path
            alt="Open RSVP Form"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <p className="text-sm text-[#7a6c5d] mt-2 italic">Click to open RSVP</p>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-[#fefbf6]/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl p-4 rounded-lg relative shadow-xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-[#44322a] text-xl font-bold"
              aria-label="Close RSVP"
            >
              ✕
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdGMHhAzj3bm-UJaeIt88xo-BRRWRIYM0kjrK3a3-q5Pn8gqg/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-md"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default RSVPForm;
