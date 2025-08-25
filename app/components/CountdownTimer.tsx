"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24); // 24 hours from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <motion.div
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-2 min-w-[80px]"
      >
        <div className="text-4xl md:text-6xl font-bold text-white">
          {formatNumber(value)}
        </div>
      </motion.div>
      <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-white text-4xl font-bold animate-pulse">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-white text-4xl font-bold animate-pulse">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
