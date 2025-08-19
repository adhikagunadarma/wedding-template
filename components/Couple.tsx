"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// image gif yg baru

const Couple = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* 💍 Section Title: Fade in */}
      <motion.h2
        className="font-script text-5xl sm:text-6xl md:text-7xl text-[#44322a] mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        Meet the Couple
      </motion.h2>

      {/* 👩‍❤️‍👨 Couple Cards: Staggered appearance */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-start gap-y-12 md:gap-y-0 md:gap-x-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {/* 👰 Bride */}
        <motion.div
          className="flex flex-col items-center w-full md:w-60 text-center space-y-2 -mt-4 md:mt-0"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[280px] h-[400px] relative">
            <Image
              src={`${basePath}/images/bride.png`}
              alt="Bride"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h3 className="text-2xl mt-4 font-semibold">Elizabeth Hesia</h3>
          <p className="text-sm uppercase tracking-wide text-gray-600 font-light">
            The Bride
          </p>
        </motion.div>

        {/* 🤵 Groom */}
        <motion.div
          className="flex flex-col items-center w-full md:w-60 text-center space-y-2 mt-4 md:mt-0"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[280px] h-[400px] relative">
            <Image
              src={`${basePath}/images/groom.png`}
              alt="Groom"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h3 className="text-2xl mt-4 font-semibold">Arya</h3>
          <p className="text-sm uppercase tracking-wide text-gray-600 font-light">
            The Groom
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Couple;
