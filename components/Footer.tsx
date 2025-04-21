// components/Footer.tsx
"use client";

const Footer = () => (
  <footer className="py-12 bg-white text-center px-6">
    <p className="text-sm text-[#7a6c5d]">&copy; {new Date().getFullYear()} Axel & Alice. All rights reserved.</p>
    <p className="text-sm text-[#9f9389] mt-2">Thank you for celebrating with us.</p>
  </footer>
);

export default Footer;