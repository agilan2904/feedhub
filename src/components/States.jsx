import { Inbox } from 'lucide-react';

export function EmptyState({ title = 'No polls yet', body = 'Your active and completed polls will appear here.' }) {
  return (
    <div className="empty" role="status">
      <span className="tile tile-poll" aria-hidden="true">
        <Inbox size={22} />
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export function KpiSkeleton() {
  return (
    <div className="card kpi" aria-hidden="true">
      <div className="kpi-top">
        <span className="skel" style={{ width: 110, height: 14 }} />
        <span className="skel" style={{ width: 38, height: 38, borderRadius: 10 }} />
      </div>
      <div>
        <span className="skel" style={{ display: 'block', width: 90, height: 30, marginBottom: 8 }} />
        <span className="skel" style={{ display: 'block', width: 140, height: 12 }} />
      </div>
    </div>
  );
}

export function PanelSkeleton({ rows = 5 }) {
  return (
    <div className="card panel" aria-hidden="true">
      <span className="skel" style={{ display: 'block', width: 180, height: 18, marginBottom: 8 }} />
      <span className="skel" style={{ display: 'block', width: 260, height: 12, marginBottom: 28 }} />
      <div className="bars">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i}>
            <span className="skel" style={{ display: 'block', width: `${40 + i * 7}%`, height: 12, marginBottom: 8 }} />
            <span className="skel" style={{ display: 'block', height: 8 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
