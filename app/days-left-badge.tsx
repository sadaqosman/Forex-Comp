"use client";

import { useEffect, useRef, useState } from "react";

const targetDate = new Date("2026-04-13T23:59:59+03:00").getTime();

function getDaysLeft(targetTime: number) {
  const difference = targetTime - Date.now();

  if (difference <= 0) {
    return "00";
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  return String(days).padStart(2, "0");
}

export default function DaysLeftBadge() {
  const targetTimeRef = useRef<number | null>(targetDate);
  const [daysLeft, setDaysLeft] = useState("08");

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (targetTimeRef.current) {
        setDaysLeft(getDaysLeft(targetTimeRef.current));
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-full border border-[var(--color-line-strong)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)]">
      {daysLeft} days left
    </div>
  );
}
