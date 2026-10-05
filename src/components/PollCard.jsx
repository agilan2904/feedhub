import { useEffect } from 'react';
import { Users, CalendarClock } from 'lucide-react';
import PollOption from './PollOption.jsx';
import SubmitButton from './SubmitButton.jsx';
import SuccessState from './SuccessState.jsx';
import ResultsCard from './ResultsCard.jsx';

// status: voting | submitting | leaving | submitted | results
export default function PollCard({ poll, selected, onSelect, status, onSubmit, onViewResults, onReset }) {
  const voting = status === 'voting' || status === 'submitting' || status === 'leaving';

  // Number keys 1–5 pick an option while voting.
  useEffect(() => {
    if (!voting) return;
    const onKey = (e) => {
      if (e.target.closest?.('input,textarea,select') && e.target.type !== 'radio') return;
      const i = Number(e.key) - 1;
      if (i >= 0 && i < poll.options.length) onSelect(poll.options[i].id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [voting, poll.options, onSelect]);

  return (
    <article className="card poll-card enter" style={{ '--d': 200, '--rise': '16px' }} aria-live="polite">
      {voting && (
        <div className={`stage ${status === 'leaving' ? 'leaving' : ''}`} key="vote">
          <div className="poll-top">
            <span className="eyebrow">Active Poll</span>
            <span className="count">
              <CalendarClock size={15} />
              {poll.closes}
            </span>
          </div>
          <h2 id="poll-q">{poll.question}</h2>
          <p className="hint">{poll.hint}</p>
          <fieldset role="radiogroup" aria-labelledby="poll-q">
            {poll.options.map((o, i) => (
              <PollOption key={o.id} index={i} option={o} selected={selected === o.id} onSelect={onSelect} />
            ))}
          </fieldset>
          <div className="poll-foot">
            <span className="count">
              <span className="avatars" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <Users size={15} />
              {poll.totalResponses.toLocaleString()} responses
            </span>
            <SubmitButton disabled={!selected} loading={status === 'submitting'} onClick={onSubmit} />
          </div>
        </div>
      )}
      {status === 'submitted' && (
        <div className="stage" key="ok">
          <SuccessState onViewResults={onViewResults} onReset={onReset} />
        </div>
      )}
      {status === 'results' && (
        <div className="stage" key="res">
          <ResultsCard poll={poll} selected={selected} onReset={onReset} />
        </div>
      )}
    </article>
  );
}
