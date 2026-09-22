"use client";

import { useEffect, useRef } from "react";

/** Counts a number up from zero the first time it scrolls into view.
 *
 *  The final value is what gets server-rendered, so crawlers, readers without
 *  JavaScript and anyone who asked for reduced motion see the real figure and
 *  never a zero. Only with motion allowed does the element start at zero and
 *  ease up to the value over `duration` ms. */
export function useCountUp<T extends HTMLElement>(
  target: number,
  decimals: number,
  duration = 1200
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.textContent = (0).toFixed(decimals);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = target.toFixed(decimals);
    };
  }, [target, decimals, duration]);

  return ref;
}
