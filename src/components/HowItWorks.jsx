import { useInView } from '../hooks/useMotion.js';
import Reveal from './Reveal.jsx';
import { steps } from '../data/pollData.js';

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section className="home-section" aria-labelledby="how-h">
      <div className="container">
        <Reveal className="section-intro">
          <span className="kicker">How FeedHub works</span>
          <h2 id="how-h">From question to insight in three steps.</h2>
        </Reveal>
        <div className={`steps-wrap ${inView ? 'in' : ''}`} ref={ref}>
          <span className="steps-line" aria-hidden="true" />
          <ol className="steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={120 + i * 140}>
                <div className="card card-hover step">
                  <span className="step-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
