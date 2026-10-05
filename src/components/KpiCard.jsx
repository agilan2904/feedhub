import { Users, TrendingUp, Star, Vote, Activity, ArrowUpRight } from 'lucide-react';
import useCountUp, { formatValue } from '../hooks/useCountUp.js';

const icons = { users: Users, trend: TrendingUp, star: Star, poll: Vote, pulse: Activity };

export default function KpiCard({ stat, index = 0 }) {
  const Icon = icons[stat.icon];
  const delay = 100 + index * 70;
  const v = useCountUp(stat.value, { delay, decimals: stat.format === 'score' ? 1 : 0 });
  return (
    <div className="card card-hover kpi enter" style={{ '--d': delay }}>
      <div className="kpi-top">
        <span className="kpi-label">{stat.label}</span>
        {Icon && (
          <span className={`tile tile-${stat.icon}`} aria-hidden="true">
            <Icon size={18} />
          </span>
        )}
      </div>
      <div>
        <div className="kpi-value" aria-label={formatValue(stat.value, stat.format)}>
          {formatValue(v, stat.format)}
        </div>
        {stat.trend && (
          <span className="trend">
            <b>
              <ArrowUpRight size={13} />
              {stat.trend}
            </b>
            {stat.trendLabel}
          </span>
        )}
      </div>
    </div>
  );
}
