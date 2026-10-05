import { ArrowRight } from 'lucide-react';

export default function SubmitButton({ disabled, loading, onClick }) {
  return (
    <button className="btn btn-primary" disabled={disabled || loading} onClick={onClick} aria-live="polite">
      {loading ? (
        <>
          <span className="spinner" aria-hidden="true" />
          Submitting…
        </>
      ) : (
        <>
          Submit Response <ArrowRight size={16} />
        </>
      )}
    </button>
  );
}
