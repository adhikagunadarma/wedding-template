"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const filmImages = [1, 2, 3, 4, 5];
  const staticImages = [6, 7, 8];
  const allImages = [...filmImages, ...staticImages];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + allImages.length) % allImages.length);
  };

  return (
    <section className="py-16 bg-[#fefbf6]">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-script text-[#44322a] mb-12">
          Our Gallery
        </h2>

        <div className="relative grid grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Filmroll images */}
          <div className="relative h-full overflow-hidden flex flex-col items-center justify-center -rotate-3">
            {filmImages.map((i, idx) => (
              <div
                key={i}
                onClick={() => openModal(idx)}
                className={`cursor-pointer relative w-full max-w-[90px] sm:max-w-[110px] md:max-w-[130px] aspect-[2/3] ${
                  idx !== 0 ? "-mt-[10px] sm:-mt-[14px]" : ""
                }`}
              >
                <img
                  src="/images/filmroll.png"
                  alt="Filmroll portrait frame"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <img
                  src={`/images/image-${i}.JPG`}
                  alt={`Image ${i}`}
                  className="relative z-10 w-full h-full object-cover p-1 sm:p-2"
                />
              </div>
            ))}
          </div>

          {/* Right Column - Static layout */}
          <div className="flex flex-col gap-6 justify-between">
            {staticImages.map((i, idx) => (
              <div
                key={i}
                onClick={() => openModal(filmImages.length + idx)}
                className="cursor-pointer w-full overflow-hidden rounded-xl shadow-lg aspect-[3/2]"
              >
                <img
                  src={`/images/image-${i}.JPG`}
                  alt={`Image ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="absolute bottom-0 left-[20%] translate-y-1/2 z-10 text-left -rotate-5">
            <h2 className="text-black font-[cinzel] font-script text-6xl sm:text-7xl md:text-8xl leading-none">
              Love is in
            </h2>
            <h2 className="text-black font-[cinzel] font-script text-6xl sm:text-7xl md:text-8xl leading-none mt-2 translate-x-5 sm:translate-x-8 md:translate-x-10">
              The air
            </h2>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
          {/* Image viewer */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-red-300"
          >
            <X size={36} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={`/images/image-${allImages[currentIndex]}.JPG`}
            alt="Large view"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg transition duration-300 ease-in-out transform scale-95 opacity-0 animate-fadeIn"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
