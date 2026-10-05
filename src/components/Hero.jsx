import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import HeroDemo from './HeroDemo.jsx';
import { brand } from '../data/pollData.js';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="home-hero" aria-labelledby="hero-h">
      <div className="hero-bg" aria-hidden="true">
        <span className="dots" />
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow-badge enter" style={{ '--d': 60 }}>
            <span className="bdot" />
            Feedback platform
          </span>
          <h1 id="hero-h" className="display enter" style={{ '--d': 120 }}>
            Make every
            <br />
            <span className="grad-text">voice</span> count.
          </h1>
          <p className="lead enter" style={{ '--d': 200 }}>
            Collect meaningful feedback, understand what people think, and turn every response into better decisions.
          </p>
          <div className="cta-row enter" style={{ '--d': 280 }}>
            <button className="btn btn-lg btn-grad" onClick={() => navigate('/active')}>
              Give Feedback <ArrowRight size={18} />
            </button>
            <button className="btn btn-lg btn-secondary" onClick={() => navigate('/results')}>
              Explore Results
            </button>
          </div>
          <div className="hero-note enter" style={{ '--d': 360 }}>
            <span>
              <Clock size={15} />
              Under a minute
            </span>
            <span>
              <ShieldCheck size={15} />
              Anonymous by default
            </span>
            <span className="muted-strong">{brand.support}</span>
          </div>
        </div>
        <div className="enter" style={{ '--d': 240, '--rise': '20px' }}>
          <HeroDemo />
        </div>
      </div>
    </section>
  );
}
