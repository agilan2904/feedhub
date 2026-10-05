import { useEffect, useState } from 'react';

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Counts from 0 to `target` with an ease-out curve.
export default function useCountUp(target, { duration = 900, delay = 0, decimals = 0 } = {}) {
  const [v, setV] = useState(reduced() ? target : 0);
  useEffect(() => {
    if (reduced()) {
      setV(target);
      return;
    }
    let raf, start;
    const t = setTimeout(() => {
      const step = (ts) => {
        start ??= ts;
        const p = Math.min(1, (ts - start) / duration);
        setV(Number((target * (1 - Math.pow(1 - p, 3))).toFixed(decimals)));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay, decimals]);
  return v;
}

export function formatValue(v, format) {
  if (format === 'percent') return `${Math.round(v)}%`;
  if (format === 'score') return `${v.toFixed(1)} / 5`;
  return Math.round(v).toLocaleString();
}
