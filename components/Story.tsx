"use client";

const Story = () => {
  return (
<section className="bg-gradient-to-b from-white via-[#fdfaf4] to-[#fefbf6] text-center px-6 pt-16">
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        {/* Image */}
        <img
          src="/images/image-5.JPG"
          alt="Our Story Decoration"
          className="w-full object-cover max-h-[500px] md:max-h-[600px] rounded-md"
        />

        {/* "Our Once" with bigger text and negative top margin */}
        <h2
          className="text-[#44322a] font-script
          text-5xl sm:text-6xl md:text-7xl
          -mt-14 sm:-mt-20 md:-mt-24"
        >
          Our Once
        </h2>

        {/* "Upon a Time" with bigger text and diagonal shift */}
        <h2
          className="text-[#44322a] font-script
          text-5xl sm:text-6xl md:text-7xl
          mt-3 transform translate-x-14 sm:translate-x-16 md:translate-x-18"
        >
          Upon a Time
        </h2>
      </div>

      {/* Story paragraph */}
      <p className="max-w-2xl mx-auto text-gray-700 font-[cinzel] leading-relaxed text-base sm:text-lg md:text-xl mt-10 text-center">
        It all began on a sunny afternoon when Axel and Alice crossed paths at a quaint coffee shop. From shared laughter over latte art to twilight strolls in Jakarta’s old town, their bond grew stronger each day. Now, they invite you to celebrate the next chapter of their fairy tale.
      </p>

       <div className="h-20 sm:h-24 md:h-32" ></div>

    </section>
  );
};

export default Story;
