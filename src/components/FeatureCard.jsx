import { Zap, ShieldCheck, BarChart3 } from 'lucide-react';

const icons = { zap: Zap, shield: ShieldCheck, chart: BarChart3 };
const tones = { zap: 'tile-poll', shield: 'tile-trend', chart: 'tile-violet' };

export default function FeatureCard({ feature }) {
  const Icon = icons[feature.icon];
  return (
    <article className="card card-hover feature">
      <span className={`tile ${tones[feature.icon]}`} aria-hidden="true">
        <Icon size={22} />
      </span>
      <h3>{feature.title}</h3>
      <p>{feature.body}</p>
    </article>
  );
}
