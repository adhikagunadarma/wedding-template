"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

interface Wish {
  name: string;
  message: string;
  created_at?: string;
}

const WeddingWishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchWishes = async () => {
      const { data, error } = await supabase
        .from("arya_lizzy_wish_wedding")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Failed to fetch wishes:", error.message);
        return;
      }

      setWishes(data as Wish[]);
    };

    fetchWishes();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [wishes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    const newWish: Wish = {
      name: name.trim() || "Anonymous",
      message: message.trim(),
    };

    const { error } = await supabase
      .from("arya_lizzy_wish_wedding")
      .insert(newWish);

    if (error) {
      console.error("Failed to submit wish:", error.message);
      setLoading(false);
      return;
    }

    setWishes((prev) => [...prev, newWish]);
    setName("");
    setMessage("");
    setLoading(false);
  };

  return (
    <motion.section
      className="py-16 px-6 bg-[#fefbf6] text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <motion.h2
        className="font-script text-5xl sm:text-6xl md:text-7xl text-[#44322a] mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Wedding Wishes
      </motion.h2>

      <motion.p
        className="text-[#9f9389] mb-8 font-light max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Leave your heartfelt wishes for the couple below ✨
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 mb-10 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
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
          disabled={loading}
          className="bg-[#e5bcb1] hover:bg-[#d7a7a0] text-[#44322a] font-semibold px-6 py-2 w-full"
        >
          {loading ? "Sending..." : "Send Wish"}
        </Button>
      </motion.form>

      <motion.div
        className="max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          ref={scrollRef}
          className="w-full max-h-[340px] overflow-y-auto space-y-6 bg-white/90 px-6 py-6 rounded-xl text-left border border-[#f1e8e1] backdrop-blur-sm shadow-md"
        >
          {wishes.map((wish, idx) => (
            <div key={idx} className="border-b border-[#f1e8e1] pb-4">
              <p className="text-lg font-semibold text-[#44322a] mb-1">
                {wish.name}
              </p>
              <p className="text-[#7a6c5d] whitespace-pre-line text-base">
                {wish.message}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WeddingWishes;
