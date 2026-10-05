import Hero from '../components/Hero.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import FeedbackPreview from '../components/FeedbackPreview.jsx';
import Reveal from '../components/Reveal.jsx';
import { features } from '../data/pollData.js';

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <HowItWorks />
      <section className="home-section tight" aria-labelledby="feat-h">
        <div className="container">
          <Reveal className="section-intro">
            <span className="kicker">Why FeedHub</span>
            <h2 id="feat-h">Built for honest, useful feedback.</h2>
          </Reveal>
          <div className="grid-3">
            {features.map((f, i) => (
              <Reveal key={f.id} delay={i * 120}>
                <FeatureCard feature={f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FeedbackPreview />
    </div>
  );
}
