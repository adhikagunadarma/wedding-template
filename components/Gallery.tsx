"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


const Gallery = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const filmImages = [1, 2, 3, 4, 5, 6, 7, 8];
  const leftColumn = filmImages.filter((_, idx) => idx % 2 === 0);
  const rightColumn = filmImages.filter((_, idx) => idx % 2 !== 0);

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
    setCurrentIndex((currentIndex + 1) % filmImages.length);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + filmImages.length) % filmImages.length);
  };

  return (
    <section className="py-16 bg-[#fefbf6]">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-script text-[#44322a] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Love in Kodachrome
        </motion.h2>

        <motion.div
          className="relative flex justify-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Two Filmroll Columns */}
          {[leftColumn, rightColumn].map((column, colIdx) => (
            <motion.div
              key={colIdx}
              className={`flex flex-col items-center justify-center ${
                colIdx === 0 ? "rotate-1" : "rotate-1"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: colIdx * 0.15 }}
            >
              {column.map((i, idx) => (
                <div
                  key={i}
                  onClick={() =>
                    openModal(colIdx === 0 ? leftColumn[idx] - 1 : rightColumn[idx] - 1)
                  }
                  className={`cursor-pointer relative aspect-[3/2] w-[150px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] ${
                    idx !== 0 ? "-mt-[6px] sm:-mt-[8px]" : ""
                  }`}
                >
                  {/* Filmroll frame */}

                <Image
                  src={`${basePath}/images/filmroll.png`}
                  alt="filmroll"
                  width={450}
                  height={250}
                  className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                  />

                  {/* Actual photo */}
                  <Image
                    src={`${basePath}/images/image-${i}.JPG`}
                    alt={`Image ${i}`}
                    width={450}
                    height={250}
                    className="relative z-10 w-full h-full object-cover p-[5px] sm:p-2 md:p-3"
                  />
                </div>
              ))}
            </motion.div>
          ))}

          {/* Caption */}
          {/* <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-black font-[cinzel] font-script text-6xl sm:text-7xl md:text-8xl leading-none">
              Love is in
            </h2>
            <h2 className="text-black font-[cinzel] font-script text-6xl sm:text-7xl md:text-8xl leading-none mt-2 translate-x-4">
              The Air
            </h2>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Modal Viewer */}
      {modalOpen && currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-red-300"
          >
            <X size={36} />
          </button>

          <Image
            src={`${basePath}/images/image-${filmImages[currentIndex]}.JPG`}
            alt="Large view"
            width={450}
            height={250}
            className="relative z-20 max-w-[90%] max-h-[90%] rounded-xl shadow-lg animate-fadeIn"
          />

          <button
            onClick={prevImage}
            className="absolute left-8 z-30 text-white hover:text-gray-300"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-8 z-30 text-white hover:text-gray-300"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
