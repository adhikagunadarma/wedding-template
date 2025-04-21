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
      <h2 className="text-3xl md:text-4xl font-[cinzel] text-[#44322a] mb-4">
        Wedding Wishes
      </h2>
      <p className="text-[#9f9389] mb-8 font-light max-w-xl mx-auto">
        Leave your heartfelt wishes for the couple below ✨
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 mb-10 text-left">
        <Input
          type="text"
          placeholder="Your Name"
          className="bg-white text-[#44322a] border-[#e5bcb1]"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Textarea
          placeholder="Your wish..."
          className="bg-white text-[#44322a] border-[#e5bcb1]"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-[#e5bcb1] hover:bg-[#d7a7a0] text-[#44322a] font-semibold px-6 py-2 w-full"
        >
          Send Wish
        </Button>
      </form>

      <div
        ref={scrollRef}
        className="max-w-xl mx-auto max-h-[300px] overflow-y-auto space-y-6 bg-white p-6 rounded-2xl shadow-inner border border-[#f1e8e1] text-left"
      >
        {wishes.map((wish, idx) => (
          <div key={idx} className="border-b border-[#f1e8e1] pb-4">
            <p className="text-lg font-semibold text-[#44322a] mb-1">{wish.name}</p>
            <p className="text-[#7a6c5d] whitespace-pre-line">{wish.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingWishes;