import { NavLink } from 'react-router-dom';
import { LogoMark } from './Logo.jsx';
import Reveal from './Reveal.jsx';
import { brand, navItems } from '../data/pollData.js';

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal className="container footer-in">
        <span className="footer-brand">
          <LogoMark size={26} />
          <b>{brand.name}</b>
          <span>{brand.tagline}</span>
        </span>
        <nav aria-label="Footer">
          {navItems.map((n) => (
            <NavLink key={n.id} to={n.path} end>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <span>© 2026 {brand.name}. Prototype with sample data.</span>
      </Reveal>
    </footer>
  );
}
