import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Active from './pages/Active.jsx';
import Results from './pages/Results.jsx';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState('voting'); // voting | submitting | leaving | submitted | results

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const submit = () => {
    setStatus('submitting');
    setTimeout(() => setStatus('leaving'), 800);
    setTimeout(() => setStatus('submitted'), 1000);
  };
  const reset = () => {
    setSelected(null);
    setStatus('voting');
  };
  const voted = status === 'submitted' || status === 'results';

  const poll = {
    selected,
    onSelect: setSelected,
    status,
    onSubmit: submit,
    onReset: reset,
    onViewResults: () => {
      setStatus('results');
      navigate('/results');
    },
  };

  return (
    <>
      <a href="#main" className="sr-only">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="main" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/active" element={<Active poll={poll} />} />
          <Route path="/results" element={<Results selected={voted ? selected : null} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
