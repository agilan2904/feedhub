import { useEffect, useState } from 'react';

export default function ProgressBar({ value, highlight, label, delay = 0, small }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), delay + 30);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="track"
      style={small ? { height: 8 } : undefined}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <div className={`fill ${highlight ? 'mine' : ''}`} style={{ transform: `scaleX(${on ? value / 100 : 0})` }} />
    </div>
  );
}
