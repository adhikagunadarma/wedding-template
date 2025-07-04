import React from "react";

const Gallery = () => {
  const filmImages = [1, 2, 3, 4, 5];

  return (
    <section className="py-16 bg-[#fefbf6]">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-[#44322a] mb-12">
          Our Gallery
        </h2>

        <div className="relative grid grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Clipped filmroll */}
          <div className="relative h-full overflow-hidden flex flex-col items-center justify-center -rotate-3">
            {filmImages.map((i, idx) => (
              <div
                key={i}
                className={`relative w-full max-w-[90px] sm:max-w-[110px] md:max-w-[130px] aspect-[2/3] ${
                  idx !== 0 ? "-mt-[10px] sm:-mt-[14px]" : ""
                }`}
              >
                <img
                  src="/images/filmroll.png"
                  alt="Filmroll portrait frame"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <img
                  // src={`/images/image-${i}.JPG`}
                  src={`/images/image-9.jpg`}
                  alt={`Image ${i}`}
                  className="relative z-10 w-full h-full object-cover p-1 sm:p-2"
                />
              </div>
            ))}
          </div>

          {/* Right Column - Static height layout */}
          <div className="flex flex-col gap-6 justify-between">
            {[6, 7, 8].map((i) => (
              <div
                key={i}
                className="w-full overflow-hidden rounded-xl shadow-lg aspect-[3/2]"
              >
                <img
                  src={`/images/image-${i}.JPG`}
                  alt={`Image ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Caption - overlapping bottom of image grid, slightly left */}
          <div className="absolute bottom-0 left-[20%] translate-y-1/2 z-10 text-left -rotate-5">
            <h2 className="text-black font-[cinzel] font-script text-6xl sm:text-7xl md:text-8xl leading-none">
              Love is in
            </h2>
            <h2 className="text-black font-[cinzel] font-script text-5xl sm:text-6xl md:text-7xl leading-none mt-2 transform translate-x-5 sm:translate-x-8 md:translate-x-10">
              The air
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
