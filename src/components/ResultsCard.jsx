import { useMemo } from 'react';
import { Check, RotateCcw, Lock } from 'lucide-react';
import ProgressBar from './ProgressBar.jsx';
import useCountUp from '../hooks/useCountUp.js';

function Row({ option, pct, mine, index }) {
  const delay = 250 + index * 90;
  const shown = useCountUp(pct, { delay, duration: 900 });
  return (
    <li className="res-row enter" style={{ '--d': delay, '--rise': '6px' }}>
      <div className="res-label">
        <b>{option.label}</b>
        {mine && (
          <span className="you" style={{ animationDelay: `${delay + 500}ms` }}>
            <Check size={11} strokeWidth={3} />
            Your response
          </span>
        )}
        <small>{option.votes.toLocaleString()} responses</small>
      </div>
      <span className="res-pct" aria-hidden="true">
        {shown}%
      </span>
      <ProgressBar value={pct} highlight={mine} delay={delay} label={`${option.label}: ${pct}%`} />
    </li>
  );
}

export default function ResultsCard({ poll, selected, onReset }) {
  const total = useMemo(() => poll.options.reduce((s, o) => s + o.votes, 0), [poll]);
  const shownTotal = useCountUp(total, { delay: 120, duration: 1000 });
  return (
    <div>
      <div className="results-head">
        <div className="enter" style={{ '--d': 0 }}>
          <span className="eyebrow">Poll Results</span>
          <h3 style={{ marginTop: 6 }}>Here’s what the community said.</h3>
          <p>{poll.question}</p>
        </div>
        <div className="total enter" style={{ '--d': 120 }}>
          <small>Total Responses</small>
          <strong>{shownTotal.toLocaleString()}</strong>
        </div>
      </div>
      <ul className="results">
        {poll.options.map((o, i) => (
          <Row key={o.id} option={o} index={i} pct={Math.round((o.votes / total) * 100)} mine={selected === o.id} />
        ))}
      </ul>
      {onReset && (
        <div className="results-foot enter" style={{ '--d': 800 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Lock size={14} />
            Individual responses stay anonymous.
          </span>
          <button className="btn btn-secondary" onClick={onReset}>
            <RotateCcw size={15} />
            Submit another response
          </button>
        </div>
      )}
    </div>
  );
}
