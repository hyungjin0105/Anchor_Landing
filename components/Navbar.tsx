import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { analytics } from '../lib/analytics';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    analytics.trackNavigationClick(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 text-black" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-3 h-3 bg-black rounded-full"></div>
          Anchor
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('integration')} className="text-sm text-neutral-500 hover:text-black transition-colors">Integration</button>
          <button onClick={() => scrollToSection('footer')} className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
            Get Early Access
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-100 p-6 md:hidden flex flex-col space-y-4 shadow-xl">
          <button onClick={() => scrollToSection('integration')} className="text-left text-neutral-600">Integration</button>
          <button onClick={() => scrollToSection('footer')} className="bg-black text-white px-5 py-3 rounded-lg text-sm font-medium text-center">
            Get Early Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;