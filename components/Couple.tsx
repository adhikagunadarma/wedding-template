"use client";

const Couple = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-[cinzel] text-[#44322a] mb-8">
        Meet the Couple
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Groom */}
        <div className="w-60">
          <img
            src="/images/groom.jpg"
            alt="Groom"
            className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto mb-4"
          />
          <p className="text-xl font-semibold font-serif text-[#44322a]">Axel</p>
          <p className="text-sm text-[#7a6c5d]">Son of Lorem & Ipsum</p>
        </div>
        {/* Bride */}
        <div className="w-60">
          <img
            src="/images/bride.jpg"
            alt="Bride"
            className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto mb-4"
          />
          <p className="text-xl font-semibold font-serif text-[#44322a]">Alice</p>
          <p className="text-sm text-[#7a6c5d]">Daughter of Dolor & Sit</p>
        </div>
      </div>
    </section>
  );
};

export default Couple;
