"use client";

import { motion } from "framer-motion";

const MapEmbed = () => {
  return (
    <motion.section
      className="py-16 bg-[#fefbf6] px-6 text-center"
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
        Find Us Here
      </motion.h2>

      <motion.div
        className="w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.74075248456!2d106.61729558578413!3d-6.2411416992178745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbc0ca3c7539%3A0x6fe1ad1d96d0fa85!2sSaint%20Lawrence%20Catholic%20Church%2C%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1755696834020!5m2!1sen!2sid" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </motion.section>
  );
};

export default MapEmbed;
