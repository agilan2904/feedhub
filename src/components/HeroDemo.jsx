import { Check, Star, TrendingUp } from 'lucide-react';
import { demoPoll } from '../data/pollData.js';
import { usePhaseLoop, usePrefersReducedMotion } from '../hooks/useMotion.js';

// idle → scan 3 → scan 2 → scan 1 → select → results → insight → reset  (~8.5s loop)
const DURATIONS = [900, 650, 650, 650, 1100, 1500, 2300, 700];
const HOVER = { 1: 2, 2: 1, 3: 0 };

export default function HeroDemo() {
  const reduced = usePrefersReducedMotion();
  const loop = usePhaseLoop(DURATIONS, !reduced);
  const phase = reduced ? 6 : loop;
  const selected = phase >= 4 && phase <= 6 ? 0 : null;
  const showResults = phase === 5 || phase === 6;
  const { insight } = demoPoll;

  return (
    <div className={`demo ${showResults ? 'show-results' : ''} ${phase === 7 ? 'resetting' : ''}`} aria-hidden="true">
      <div className="demo-glow" />

      <div className="demo-main">
        <div className="demo-card">
          <div className="demo-head">
            <span className="demo-q">{demoPoll.question}</span>
            <span className="badge badge-active">
              <span className="bdot" />
              Live
            </span>
          </div>
          <small className="demo-meta">{demoPoll.meta}</small>
          <div className="stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={18}
                className={selected !== null ? 'on' : ''}
                style={{ transitionDelay: `${i * 70}ms` }}
              />
            ))}
          </div>
          {demoPoll.options.map((o, i) => (
            <div
              key={o.label}
              className={`demo-opt ${HOVER[phase] === i ? 'hover' : ''} ${selected === i ? 'sel' : ''}`}
            >
              <span
                className="bar"
                style={{ transform: `scaleX(${showResults ? o.pct / 100 : 0})`, transitionDelay: `${i * 90}ms` }}
              />
              <span className="r">{selected === i && <Check size={10} strokeWidth={4} />}</span>
              <span>{o.label}</span>
              <span className="pct" style={{ transitionDelay: `${200 + i * 90}ms` }}>
                {o.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {demoPoll.quotes.map((q, i) => (
        <div
          key={q.text}
          className={`chip-float c${i + 1} ${phase >= 4 && phase <= 6 ? 'on' : ''}`}
          style={{ transitionDelay: `${i * 260}ms` }}
        >
          <span className="av" style={{ background: q.tone }} />“{q.text}”
        </div>
      ))}

      <div className={`insight ${phase === 6 ? 'on' : ''}`}>
        <div className="insight-top">
          <span>Insight</span>
          <TrendingUp size={15} />
        </div>
        <b className="grad-text">{insight.value}%</b>
        <span className="insight-label">{insight.label}</span>
        <div className="split-bar">
          <i style={{ width: `${insight.split[0]}%` }} />
          <i style={{ width: `${insight.split[1]}%` }} />
          <i style={{ width: `${insight.split[2]}%` }} />
        </div>
      </div>
    </div>
  );
}
