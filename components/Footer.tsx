// components/Footer.tsx
"use client";

const Footer = () => (
  <footer className="py-12 text-center px-6 ">
    <img
      src="/images/footer.png"
      alt="Thank you for celebrating with us"
      className="mx-auto w-full max-w-[180px] md:max-w-[220px]"
    />
    <p className="text-sm text-[#9f9389] mt-4">&copy; {new Date().getFullYear()} Lizzy & Arya. All rights reserved.</p>
  </footer>
);

export default Footer;