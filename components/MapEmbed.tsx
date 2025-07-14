// components/MapEmbed.tsx
"use client";

const MapEmbed = () => {
  return (
    <section className="py-16 bg-[#fefbf6] px-6 text-center">
      <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#44322a] mb-12">
        Find Us Here
      </h2>
      <div className="w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.720418806193!2d106.63387677629126!3d-6.300420193688703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb535f152305%3A0x34406ed8b098f478!2sIndonesia%20Convention%20Exhibition%20(ICE)%20BSD%20City!5e0!3m2!1sen!2sid!4v1745158587098!5m2!1sen!2sid" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapEmbed;