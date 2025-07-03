"use client";

import Image from "next/image";

const Couple = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#44322a] mb-12">
        Meet the Couple
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-y-12 md:gap-y-0 md:gap-x-24">
        {/* Bride */}
        <div className="flex flex-col items-center w-full md:w-60 text-center space-y-2 -mt-4 md:mt-0">
          <div className="w-[140px] h-[200px] relative">
            <Image src="/images/bride.png" alt="Bride" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-2xl mt-4">Elizabeth Hesia</h3>
          <p className="text-sm uppercase tracking-wide text-gray-600">The Bride</p>
        </div>

        {/* Groom */}
        <div className="flex flex-col items-center w-full md:w-60 text-center space-y-2 mt-4 md:mt-0">
          <div className="w-[140px] h-[200px] relative">
            <Image src="/images/groom.png" alt="Groom" layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-2xl mt-4">Arya</h3>
          <p className="text-sm uppercase tracking-wide text-gray-600">The Groom</p>
        </div>
      </div>
    </section>

  );
};

export default Couple;
