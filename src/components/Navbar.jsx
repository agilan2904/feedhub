import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Bell, ChevronDown, Menu, X, Settings, LogOut, UserRound, Home, Vote, BarChart3 } from 'lucide-react';
import Logo from './Logo.jsx';
import { navItems, user } from '../data/pollData.js';

const icons = { home: Home, active: Vote, results: BarChart3 };

function useSlidingPill(key) {
  const wrap = useRef(null);
  const [pill, setPill] = useState({ x: 0, w: 0, ready: false });
  useLayoutEffect(() => {
    const measure = () => {
      const el = wrap.current?.querySelector('[aria-current="page"]');
      if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth, ready: true });
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [key]);
  return [wrap, pill];
}

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [wrap, pill] = useSlidingPill(pathname);
  const [userOpen, setUserOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const userRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setUserOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = (e) => {
      if (!userRef.current?.contains(e.target)) setUserOpen(false);
    };
    const esc = (e) => {
      if (e.key === 'Escape') {
        setUserOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-in">
        <Logo onClick={() => navigate('/')} />

        <nav className="nav-links" aria-label="Primary" ref={wrap}>
          <span
            className="nav-pill"
            style={{ width: pill.w, transform: `translateX(${pill.x}px)`, opacity: pill.ready ? 1 : 0 }}
            aria-hidden="true"
          />
          {navItems.map(({ id, label, path }) => (
            <NavLink key={id} to={path} end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <button className="icon-btn" aria-label={`Notifications, ${user.unread} unread`}>
            <Bell size={18} />
            <span className="notif-dot" />
          </button>
          <div className="rel" ref={userRef}>
            <button
              className="user"
              aria-haspopup="menu"
              aria-expanded={userOpen}
              onClick={() => setUserOpen((o) => !o)}
            >
              <span className="avatar">{user.initials}</span>
              {user.name}
              <ChevronDown size={14} />
            </button>
            {userOpen && (
              <div className="menu" role="menu">
                <div className="menu-head">
                  <b>{user.name}</b>
                  <small>Student · Learning Platform</small>
                </div>
                <button role="menuitem">
                  <UserRound size={16} />
                  Profile
                </button>
                <button role="menuitem">
                  <Settings size={16} />
                  Settings
                </button>
                <button role="menuitem">
                  <LogOut size={16} />
                  Sign out
                </button>
              </div>
            )}
          </div>
          <button
            className="icon-btn menu-btn"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="mobile-panel" aria-label="Mobile">
          {navItems.map(({ id, label, path }, i) => {
            const Icon = icons[id];
            return (
              <NavLink
                key={id}
                to={path}
                end
                className={({ isActive }) => `mlink ${isActive ? 'active' : ''}`}
                style={{ '--d': i * 40 }}
              >
                <Icon size={18} />
                {label}
              </NavLink>
            );
          })}
          <div className="mobile-user">
            <span className="avatar">{user.initials}</span>
            {user.name}
          </div>
        </nav>
      )}
    </header>
  );
}
