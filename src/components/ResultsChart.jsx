import { useMemo, useState } from 'react';
import { participationTrend } from '../data/pollData.js';

const W = 560,
  H = 220,
  PAD = { t: 16, r: 12, b: 28, l: 32 };

export default function ResultsChart({ data = participationTrend, range }) {
  const [hover, setHover] = useState(null);
  const { pts, line, area, ticks } = useMemo(() => {
    const min = 50,
      max = 80;
    const x = (i) => PAD.l + (i * (W - PAD.l - PAD.r)) / (data.length - 1);
    const y = (v) => PAD.t + (1 - (v - min) / (max - min)) * (H - PAD.t - PAD.b);
    const pts = data.map((d, i) => ({ ...d, x: x(i), y: y(d.value) }));
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const area = `${line} L${pts.at(-1).x},${H - PAD.b} L${pts[0].x},${H - PAD.b} Z`;
    return { pts, line, area, ticks: [50, 60, 70, 80].map((v) => ({ v, y: y(v) })) };
  }, [data]);
  const last = data.at(-1),
    first = data[0];
  const shown = hover !== null ? pts[hover] : null;

  return (
    <div className="trend-chart">
      <div className="chart-head">
        <div>
          <h3>Participation trend</h3>
          <p className="sub">{range ?? 'Monthly average'} · % of invited people who responded</p>
        </div>
        <div className="total">
          <small>{shown ? shown.label : 'This month'}</small>
          <strong>{shown ? shown.value : last.value}%</strong>
          <span className="trend">
            <b>+{last.value - first.value} pts</b>since {first.label}
          </span>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Participation rose from ${first.value}% in ${first.label} to ${last.value}% in ${last.label}`}
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="trendStroke" x1="0" x2="1">
            <stop offset="0" stopColor="#6366F1" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#6366F1" stopOpacity=".18" />
            <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        {ticks.map((t) => (
          <g key={t.v} className="trend-grid">
            <line x1={PAD.l} x2={W - PAD.r} y1={t.y} y2={t.y} />
            <text x={PAD.l - 8} y={t.y + 4} textAnchor="end" className="trend-label">
              {t.v}
            </text>
          </g>
        ))}
        <path d={area} className="trend-area" fill="url(#trendFill)" />
        <path d={line} className="trend-line" pathLength="1" />
        {shown && <line className="trend-cursor" x1={shown.x} x2={shown.x} y1={PAD.t} y2={H - PAD.b} />}
        {pts.map((p, i) => (
          <g key={p.label}>
            <circle
              cx={p.x}
              cy={p.y}
              r={hover === i ? 6 : 4}
              className="trend-dot"
              style={{ animationDelay: `${600 + i * 90}ms` }}
            />
            <text x={p.x} y={H - 8} textAnchor="middle" className="trend-label">
              {p.label}
            </text>
            <rect x={p.x - 24} y={0} width={48} height={H} fill="transparent" onMouseEnter={() => setHover(i)} />
          </g>
        ))}
      </svg>
    </div>
  );
}
