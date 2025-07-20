"use client";

import { motion } from "framer-motion";

const Story = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-white via-[#fdfaf4] to-[#fefbf6] text-center px-6 pt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        {/* Image */}
        <motion.img
          src="/images/image-5.JPG"
          alt="Our Story Decoration"
          className="w-full object-cover max-h-[500px] md:max-h-[600px] rounded-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        />

        {/* "Our Once" */}
        <motion.h2
          className="text-[#44322a] font-script text-5xl sm:text-6xl md:text-7xl -mt-14 sm:-mt-20 md:-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Once
        </motion.h2>

        {/* "Upon a Time" */}
        <motion.h2
          className="text-[#44322a] font-script text-5xl sm:text-6xl md:text-7xl mt-3 transform translate-x-14 sm:translate-x-16 md:translate-x-18"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Upon a Time
        </motion.h2>
      </div>

      {/* Story paragraph */}
      <motion.p
        className="max-w-2xl mx-auto text-gray-700 font-light leading-relaxed text-base sm:text-lg md:text-xl mt-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        It all began on a sunny afternoon when Axel and Alice crossed paths at a quaint coffee shop.
        From shared laughter over latte art to twilight strolls in Jakarta’s old town, their bond grew stronger each day.
        Now, they invite you to celebrate the next chapter of their fairy tale.
      </motion.p>

      <div className="h-20 sm:h-24 md:h-32"></div>
    </motion.section>
  );
};

export default Story;
