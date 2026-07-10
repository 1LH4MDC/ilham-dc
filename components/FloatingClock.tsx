"use client";

import { useEffect, useState } from "react";

export default function FloatingClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTime(new Date().toLocaleTimeString("en-GB"));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <time
      className="fixed top-6 right-6 z-50 text-sm md:text-base font-bold tracking-widest font-mono text-zinc-700 dark:text-zinc-300"
      suppressHydrationWarning
    >
      {time}
    </time>
  );
}