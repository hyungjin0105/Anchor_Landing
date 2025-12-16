import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { initGA, analytics } from './lib/analytics';

const App: React.FC = () => {
  const [scrollTracked, setScrollTracked] = useState({
    '25': false,
    '50': false,
    '75': false,
    '100': false,
  });

  useEffect(() => {
    // Initialize analytics if consent already given
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'accepted') {
      initGA();
    }

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent >= 25 && !scrollTracked['25']) {
        analytics.trackScrollDepth(25);
        setScrollTracked(prev => ({ ...prev, '25': true }));
      }
      if (scrollPercent >= 50 && !scrollTracked['50']) {
        analytics.trackScrollDepth(50);
        setScrollTracked(prev => ({ ...prev, '50': true }));
      }
      if (scrollPercent >= 75 && !scrollTracked['75']) {
        analytics.trackScrollDepth(75);
        setScrollTracked(prev => ({ ...prev, '75': true }));
      }
      if (scrollPercent >= 100 && !scrollTracked['100']) {
        analytics.trackScrollDepth(100);
        setScrollTracked(prev => ({ ...prev, '100': true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTracked]);

  return (
    <div className="bg-white min-h-screen text-neutral-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        <Hero />
        <Integrations />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;