import { useEffect, useRef, useState } from 'react';

export function usePrefersReducedMotion() {
  const q = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches);
  useEffect(() => {
    const m = window.matchMedia(q);
    const on = () => setReduced(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return reduced;
}

// True once the element has entered the viewport (runs once).
export function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, inView];
}

// Steps through phases with per-phase durations, looping. Pauses when disabled.
export function usePhaseLoop(durations, enabled = true) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const t = setTimeout(() => setPhase((p) => (p + 1) % durations.length), durations[phase]);
    return () => clearTimeout(t);
  }, [phase, enabled, durations]);
  return phase;
}
