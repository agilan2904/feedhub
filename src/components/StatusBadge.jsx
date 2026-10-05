export default function StatusBadge({ status, label }) {
  const active = status === 'Active';
  return (
    <span className={`badge ${active ? 'badge-active' : 'badge-completed'}`}>
      <span className="bdot" aria-hidden="true" />
      {label ?? status}
    </span>
  );
}
