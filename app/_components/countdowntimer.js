"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({ weddingDate }) {
  // Set your wedding date here
  //   const weddingDate = new Date("2026-05-25T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="w-full flex flex-col items-center justify-center py-4">
      <h2 className="mb-6 font-amatic">Countdown to Forever</h2>

      <div className="flex gap-4 flex-wrap justify-center">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="w-20 h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center justify-center shadow-md">
      <span className="text-xl font-bold text-[#431D19] font-dmSans">
        {value}
      </span>

      <span className="text-xs uppercase tracking-widest text-[#431D19] font-dmSans">
        {label}
      </span>
    </div>
  );
}
