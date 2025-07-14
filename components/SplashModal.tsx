"use client";

import { useEffect, useState } from "react";

const SplashModal = ({ guestName = "Guest" }: { guestName?: string }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSplash]);

  useEffect(() => {
    if (!showSplash) {
      const timer = setTimeout(() => setIsVisible(false), 500); // delay unmount
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  const handleOpenInvitation = () => {
    setShowSplash(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] transition-opacity duration-500 ${
        showSplash ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* 🔲 Blurry Background */}
      <div className="absolute inset-0 backdrop-blur-md bg-[#fefbf6]/80" />

      {/* 📩 Modal */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-[#fefbf6] rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden text-center border border-[#e6e0d6]">
          <img
            src="/images/home.gif"
            alt="Wedding background"
            className="w-full h-auto object-cover"
          />
          <div className="px-6 py-8 bg-[#fefbf6]">
            <h1 className="text-sm sm:text-base md:text-lg font-light tracking-widest text-[#9f9389] uppercase mb-2">
              The Wedding of
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-script text-[#44322a] mb-6">
              Lizzy & Arya
            </h2>
            <p className="text-[#44322a] text-sm sm:text-base mb-4">
              Dear <span className="font-semibold">{guestName}</span>,
            </p>
            <button
              onClick={handleOpenInvitation}
              className="px-6 py-3 bg-[#44322a] text-white rounded-full shadow-md hover:bg-[#2f231c] transition"
            >
              Open Invitation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashModal;
