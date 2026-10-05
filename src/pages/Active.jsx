import { useNavigate } from 'react-router-dom';
import { Clock, ShieldCheck } from 'lucide-react';
import PollCard from '../components/PollCard.jsx';
import RecentPollCard from '../components/RecentPollCard.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { activePoll, otherActivePolls } from '../data/pollData.js';

export default function Active({ poll }) {
  const navigate = useNavigate();
  return (
    <div className="page container">
      <header className="page-head centered">
        <div className="enter" style={{ '--d': 40 }}>
          <StatusBadge status="Active" label="Active Poll" />
        </div>
        <h1 className="enter" style={{ '--d': 100 }}>
          Tell us what you think.
        </h1>
        <p className="enter" style={{ '--d': 160 }}>
          <span>
            <Clock size={15} />
            {activePoll.duration}
          </span>
          <span>
            <ShieldCheck size={15} />
            Anonymous
          </span>
        </p>
      </header>
      <PollCard poll={activePoll} {...poll} onViewResults={poll.onViewResults} />
      <section className="section" aria-labelledby="more-h">
        <div className="section-head">
          <div>
            <h2 id="more-h">Also open</h2>
            <p>Two more polls are collecting responses.</p>
          </div>
        </div>
        <div className="grid-3 recent-grid">
          {otherActivePolls.map((p, i) => (
            <RecentPollCard key={p.id} poll={p} index={i} onView={() => navigate('/results')} />
          ))}
        </div>
      </section>
    </div>
  );
}
