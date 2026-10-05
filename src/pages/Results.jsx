import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, ChevronDown } from 'lucide-react';
import KpiCard from '../components/KpiCard.jsx';
import ResultsCard from '../components/ResultsCard.jsx';
import ResultsChart from '../components/ResultsChart.jsx';
import RecentPollCard from '../components/RecentPollCard.jsx';
import Reveal from '../components/Reveal.jsx';
import { EmptyState, KpiSkeleton, PanelSkeleton } from '../components/States.jsx';
import {
  activePoll,
  kpis,
  recentPolls,
  otherActivePolls,
  dateRanges,
  statusFilters,
  drafts,
} from '../data/pollData.js';

const allPolls = [...recentPolls, ...otherActivePolls];

function Segmented({ options, value, onChange, label }) {
  const ref = useRef(null);
  const [pill, setPill] = useState({ x: 0, w: 0 });
  useLayoutEffect(() => {
    const el = ref.current?.querySelector('[aria-pressed="true"]');
    if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth });
  }, [value]);
  return (
    <div className="seg" role="group" aria-label={label} ref={ref}>
      <span className="seg-pill" style={{ width: pill.w, transform: `translateX(${pill.x}px)` }} aria-hidden="true" />
      {options.map((o) => (
        <button key={o} aria-pressed={value === o} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

export default function Results({ selected }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState('Last 30 days');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, [range]);

  const listed = useMemo(() => {
    if (filter === 'Drafts') return drafts;
    return filter === 'All' ? allPolls : allPolls.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <div className="page container">
      <header className="page-head">
        <div>
          <h1 className="enter" style={{ '--d': 40 }}>
            Feedback results
          </h1>
          <p className="enter" style={{ '--d': 100 }}>
            See what people are saying.
          </p>
        </div>
        <label className="select with-icon enter" style={{ '--d': 160 }}>
          <span className="sr-only">Date range</span>
          <CalendarDays size={16} className="cal" />
          <select value={range} onChange={(e) => setRange(e.target.value)}>
            {dateRanges.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          <ChevronDown size={16} />
        </label>
      </header>

      <section style={{ marginTop: 32 }} aria-label="Key metrics">
        <div className="grid-4">
          {loading
            ? kpis.map((k) => <KpiSkeleton key={k.id} />)
            : kpis.map((k, i) => <KpiCard key={k.id} stat={k} index={i} />)}
        </div>
      </section>

      <section className="split" style={{ marginTop: 20 }}>
        {loading ? (
          <PanelSkeleton />
        ) : (
          <div className="card panel enter">
            <ResultsCard poll={activePoll} selected={selected} />
          </div>
        )}
        {loading ? (
          <PanelSkeleton rows={4} />
        ) : (
          <div className="card panel enter" style={{ '--d': 120 }}>
            <ResultsChart range={range} />
          </div>
        )}
      </section>

      <section className="section" aria-labelledby="all-h">
        <Reveal className="section-head">
          <div>
            <h2 id="all-h">Recent Polls</h2>
            <p>
              {listed.length} {listed.length === 1 ? 'poll' : 'polls'}
            </p>
          </div>
          <Segmented options={statusFilters} value={filter} onChange={setFilter} label="Filter by status" />
        </Reveal>
        <div className="grid-3 recent-grid" key={filter}>
          {listed.length === 0 ? (
            <EmptyState title="No polls yet" body="Your active and completed polls will appear here." />
          ) : (
            listed.map((p, i) => (
              <RecentPollCard
                key={p.id}
                poll={p}
                index={i}
                onView={() => navigate(p.status === 'Active' ? '/active' : '/results')}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
