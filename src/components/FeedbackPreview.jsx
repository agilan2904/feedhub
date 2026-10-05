import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Users } from 'lucide-react';
import { activePoll } from '../data/pollData.js';
import { useInView, usePhaseLoop, usePrefersReducedMotion } from '../hooks/useMotion.js';

// idle → hover → select → recorded → results → reset
const DURATIONS = [1200, 700, 900, 900, 3200, 600];

export default function FeedbackPreview() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.35 });
  const reduced = usePrefersReducedMotion();
  const loop = usePhaseLoop(DURATIONS, inView && !reduced);
  const phase = reduced ? 4 : loop;
  const total = activePoll.options.reduce((s, o) => s + o.votes, 0);
  const sel = phase >= 2 && phase <= 4 ? 0 : null;
  const results = phase === 4;

  return (
    <section className="home-section" aria-labelledby="prev-h">
      <div className="container">
        <div ref={ref} className={`preview reveal scale ${inView ? 'in' : ''}`}>
          <div className="preview-copy">
            <span className="kicker">Live preview</span>
            <h2 id="prev-h">See feedback in action.</h2>
            <p className="lead">One tap to answer. Results the moment you submit, with your own choice highlighted.</p>
            <button className="btn btn-lg btn-primary" onClick={() => navigate('/active')}>
              Try the live poll <ArrowRight size={18} />
            </button>
          </div>
          <div
            className={`mini-poll demo ${results ? 'show-results' : ''} ${phase === 5 ? 'resetting' : ''}`}
            aria-hidden="true"
          >
            <div className="mini-head">
              <span className="eyebrow">{results ? 'Results' : 'Active poll'}</span>
              <span className="count">
                <Users size={14} />
                {total.toLocaleString()}
              </span>
            </div>
            <p className="mini-q">{activePoll.question}</p>
            {activePoll.options.map((o, i) => {
              const pct = Math.round((o.votes / total) * 100);
              return (
                <div
                  key={o.id}
                  className={`demo-opt ${phase === 1 && i === 0 ? 'hover' : ''} ${sel === i ? 'sel' : ''}`}
                >
                  <span
                    className="bar"
                    style={{ transform: `scaleX(${results ? pct / 100 : 0})`, transitionDelay: `${i * 90}ms` }}
                  />
                  <span className="r">{sel === i && <Check size={10} strokeWidth={4} />}</span>
                  <span>{o.label}</span>
                  {results && sel === i && <span className="you">Your response</span>}
                  <span className="pct" style={{ transitionDelay: `${200 + i * 90}ms` }}>
                    {pct}%
                  </span>
                </div>
              );
            })}
            <div className={`mini-toast ${phase === 3 ? 'on' : ''}`}>
              <Check size={14} strokeWidth={3} />
              Response recorded
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
