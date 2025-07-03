"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const TARGET_DATE = new Date("2026-06-01T15:00:00"); // <- defined outside

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(calculateTimeLeft(TARGET_DATE));
    update();

    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []); // ✅ Empty dependency array

  if (!timeLeft) return null; // or return a loading state

  return (
    <section className="py-16 bg-[#fefbf6] text-center">
      <Image
        src="/images/ring2.png"
        alt="Counting the Days Illustration"
        width={300}
        height={200}
        className="mx-auto mb-6"
      />
      <h2 className="text-3xl md:text-4xl font-[cinzel] text-[#44322a] mb-6">
        Counting the Days
      </h2>
      <p className="text-[#9f9389] mb-8 font-light">Until we say "I do"</p>

      <div className="flex justify-center items-center gap-6 md:gap-12 text-[#44322a] font-[cinzel]">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold">
              {value.toString().padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base tracking-widest mt-2">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
