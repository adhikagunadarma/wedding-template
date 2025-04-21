// components/Gallery.tsx
import React from "react";

const Gallery = () => {
  const images = [
    "/images/image-1.JPG",
    "/images/image-2.JPG",
    "/images/image-3.JPG",
    "/images/image-4.JPG",
    "/images/image-5.JPG",
    "/images/image-6.JPG",
    "/images/image-7.JPG",
    "/images/image-8.JPG",
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-serif text-primary mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={src} alt={`Wedding Photo ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
