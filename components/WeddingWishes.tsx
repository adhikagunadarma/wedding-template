"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Wish {
  name: string;
  message: string;
}

const STORAGE_KEY = "weddingWishes";

const WeddingWishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load saved wishes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch {}
    }
  }, []);

  // Save wishes to localStorage and scroll to bottom on update
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const newWish: Wish = { name: name.trim() || "Anonymous", message };
    setWishes(prev => [...prev, newWish]);
    setName("");
    setMessage("");
  };

  return (
<section className="py-16 px-6 bg-[#fefbf6] text-center">
  {/* Title */}
  <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-[#44322a] mb-12">
    Wedding Wishes
  </h2>

<div className="flex justify-center mb-10 px-4 sm:px-6">
  {/* Desktop (landscape frame) */}
  <div
    className="hidden md:flex relative w-full max-w-4xl aspect-[3/2] bg-[url('/images/Frame.png')] bg-no-repeat bg-center bg-contain items-center justify-center p-10"
    style={{
      backgroundSize: "100% 100%",
    }}
  >
    <div
      ref={scrollRef}
      className="w-full max-w-[85%] max-h-[300px] overflow-y-auto space-y-6 bg-white/90 px-6 py-6 rounded-xl text-left border border-[#f1e8e1] backdrop-blur-sm shadow-md"
    >
      {wishes.map((wish, idx) => (
        <div key={idx} className="border-b border-[#f1e8e1] pb-4">
          <p className="text-lg font-semibold text-[#44322a] mb-1">{wish.name}</p>
          <p className="text-[#7a6c5d] whitespace-pre-line text-base">{wish.message}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Mobile & Tablet */}
  <div
    className="md:hidden relative w-full max-w-[105%] sm:max-w-[100%] aspect-[4/5] sm:aspect-[3/4] bg-[url('/images/Frame-potrait.png')] bg-no-repeat bg-center bg-contain flex items-center justify-center p-5 sm:p-6"
    style={{
      backgroundSize: "100% 100%",
    }}
  >
    <div
      ref={scrollRef}
      className="w-full max-w-[88%] max-h-[280px] sm:max-h-[340px] overflow-y-auto space-y-5 bg-white/90 px-4 py-5 rounded-xl text-left border border-[#f1e8e1] backdrop-blur-sm shadow"
    >
      {wishes.map((wish, idx) => (
        <div key={idx} className="border-b border-[#f1e8e1] pb-3">
          <p className="text-base font-semibold text-[#44322a] mb-1">{wish.name}</p>
          <p className="text-[#7a6c5d] whitespace-pre-line text-sm">{wish.message}</p>
        </div>
      ))}
    </div>
  </div>
</div>


  {/* Caption */}
  <p className="text-[#9f9389] mb-8 font-light max-w-xl mx-auto">
    Leave your heartfelt wishes for the couple below ✨
  </p>

  {/* Form */}
  <form
    onSubmit={handleSubmit}
    className="max-w-xl mx-auto space-y-4 mb-10 text-left"
  >
    <Input
      type="text"
      placeholder="Your Name"
      className="bg-white text-[#44322a] border-[#e5bcb1]"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <Textarea
      placeholder="Your wish..."
      className="bg-white text-[#44322a] border-[#e5bcb1]"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <Button
      type="submit"
      className="bg-[#e5bcb1] hover:bg-[#d7a7a0] text-[#44322a] font-semibold px-6 py-2 w-full"
    >
      Send Wish
    </Button>
  </form>
</section>

  );
};

export default WeddingWishes;