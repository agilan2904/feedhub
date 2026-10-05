import { Check } from 'lucide-react';

export default function PollOption({ option, index, selected, onSelect }) {
  return (
    <label
      className={`option enter ${selected ? 'selected' : ''}`}
      style={{ '--d': 260 + index * 50, '--rise': '8px' }}
    >
      <input type="radio" name="poll" value={option.id} checked={selected} onChange={() => onSelect(option.id)} />
      <span className="radio" aria-hidden="true">
        <Check size={13} strokeWidth={3.5} />
      </span>
      <span className="opt-text">
        <b>{option.label}</b>
        <span>{option.description}</span>
      </span>
      <span className="opt-key" aria-hidden="true">
        {index + 1}
      </span>
    </label>
  );
}
