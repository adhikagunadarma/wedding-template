"use client";

const RSVPForm = () => (
  <section className="py-16 bg-[#fefbf6] text-center px-6">
    <h2 className="text-3xl md:text-4xl font-[cinzel] text-[#44322a] mb-6">RSVP</h2>
    <p className="text-[#7a6c5d] mb-8 font-light">Please let us know if you can join us</p>
    <div className="max-w-md mx-auto">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdGMHhAzj3bm-UJaeIt88xo-BRRWRIYM0kjrK3a3-q5Pn8gqg/viewform?embedded=true"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  </section>
);

export default RSVPForm;