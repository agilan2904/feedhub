import { ArrowRight, RotateCcw } from 'lucide-react';

export default function SuccessState({ onViewResults, onReset }) {
  return (
    <div className="success" role="status">
      <div className="check-wrap" aria-hidden="true">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle className="c-bg" cx="36" cy="36" r="34" />
          <circle className="c-ring" cx="36" cy="36" r="34" />
          <path className="c-tick" d="M24 37l8 8 16-17" />
        </svg>
      </div>
      <h2 className="enter" style={{ '--d': 300 }}>
        Thanks for sharing.
      </h2>
      <p className="enter" style={{ '--d': 380 }}>
        Your response has been recorded.
      </p>
      <div className="success-actions enter" style={{ '--d': 700 }}>
        <button className="btn btn-primary" onClick={onViewResults}>
          View Results <ArrowRight size={16} />
        </button>
        <button className="btn btn-ghost" onClick={onReset}>
          <RotateCcw size={15} />
          Submit another response
        </button>
      </div>
    </div>
  );
}
