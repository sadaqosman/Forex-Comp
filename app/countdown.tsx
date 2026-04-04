"use client";

import { useEffect, useRef, useState } from "react";

function getTimeLeft(targetTime: number) {
  const difference = targetTime - Date.now();

  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00" };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}

export default function Countdown() {
  const targetTimeRef = useRef<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: "10", hours: "00", minutes: "00" });

  useEffect(() => {
    targetTimeRef.current = Date.now() + 10 * 24 * 60 * 60 * 1000;
    setTimeLeft(getTimeLeft(targetTimeRef.current));

    const interval = window.setInterval(() => {
      if (targetTimeRef.current) {
        setTimeLeft(getTimeLeft(targetTimeRef.current));
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <div className="min-w-[74px] rounded-2xl border border-[var(--color-line)] bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(24,21,18,0.04)]">
        <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{timeLeft.days}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Days
        </p>
      </div>
      <div className="min-w-[74px] rounded-2xl border border-[var(--color-line)] bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(24,21,18,0.04)]">
        <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{timeLeft.hours}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Hours
        </p>
      </div>
      <div className="min-w-[74px] rounded-2xl border border-[var(--color-line)] bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(24,21,18,0.04)]">
        <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)]">{timeLeft.minutes}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Minutes
        </p>
      </div>
    </div>
  );
}
