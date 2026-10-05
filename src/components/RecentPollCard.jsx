import { ArrowRight, MessageCircle, CalendarDays } from 'lucide-react';
import StatusBadge from './StatusBadge.jsx';

export default function RecentPollCard({ poll, onView, index = 0 }) {
  const delay = 100 + index * 80;
  return (
    <button
      className="card card-hover recent enter"
      style={{ '--d': delay }}
      onClick={onView}
      aria-label={`View results: ${poll.title}`}
    >
      <div className="recent-top">
        <StatusBadge status={poll.status} />
        <span className="chip">{poll.category}</span>
      </div>
      <h3>{poll.title}</h3>
      <div className="recent-meta">
        <span>
          <MessageCircle size={14} />
          {poll.responses.toLocaleString()} responses
        </span>
        <span>
          <CalendarDays size={14} />
          {poll.date}
        </span>
      </div>
      <div
        className="mini-track"
        title={`${poll.participation}% participation`}
        style={{ animationDelay: `${delay + 200}ms` }}
      >
        <i style={{ width: `${poll.participation}%` }} />
      </div>
      <div className="recent-foot">
        <span style={{ color: 'var(--muted)', fontSize: 13 }}>{poll.participation}% participation</span>
        <span className="view">
          View <ArrowRight size={15} />
        </span>
      </div>
    </button>
  );
}
