import { brand } from '../data/pollData.js';

export function LogoMark({ size = 34 }) {
  return (
    <span className="logo-mark" style={{ width: size, height: size }} aria-hidden="true">
      <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 20 20" fill="currentColor">
        <rect x="2.5" y="10" width="3.4" height="7" rx="1.7" />
        <rect x="8.3" y="4" width="3.4" height="13" rx="1.7" />
        <rect x="14.1" y="7.5" width="3.4" height="9.5" rx="1.7" />
      </svg>
      <i className="logo-tail" />
    </span>
  );
}

export default function Logo({ onClick, size }) {
  return (
    <button className="logo" onClick={onClick} aria-label={`${brand.name} home`}>
      <LogoMark size={size} />
      <span>{brand.name}</span>
    </button>
  );
}
