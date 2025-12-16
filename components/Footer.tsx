import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import PrivacyModal from './PrivacyModal';
import TermsModal from './TermsModal';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyDuTUIpeKI8aI2I6gcte2YkPFWXfOqHeNJny4Cm_pKslcQW_WpE9nJyPno8D1hsOkn/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      // With no-cors mode, we can't read the response, but if no error is thrown, it likely succeeded
      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setEmail('');
        setSubmitted(false);
      }, 3000);

    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="footer" className="bg-neutral-50 pt-32 pb-12 border-t border-neutral-200 relative overflow-hidden">
      {/* Decorative background circle - Blue accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-blue-200/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-neutral-900">
          Ready to connect your work?
        </h2>
        <p className="text-xl text-neutral-500 mb-12 max-w-2xl mx-auto">
          Get early access to a workspace that connects your tools, remembers your place, and keeps your work moving forward.
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto mb-20 space-y-4">
          {/* Name Input */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-white border border-neutral-200 rounded-full px-6 py-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 transition-all shadow-sm"
            disabled={submitted || loading}
          />

          {/* Email Input with Submit Button */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-white border border-neutral-200 rounded-full px-6 py-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 transition-all pr-14 shadow-sm"
              disabled={submitted || loading}
            />
            <button
              type="submit"
              disabled={submitted || loading}
              className={`absolute right-2 top-2 bottom-2 aspect-square rounded-full flex items-center justify-center transition-all duration-300 ${submitted ? 'bg-green-500 text-white' :
                loading ? 'bg-neutral-400 text-white' :
                  'bg-black text-white hover:bg-neutral-800'
                }`}
            >
              {submitted ? <Check size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Success Message */}
          {submitted && (
            <p className="text-green-600 text-sm font-medium">Thank you! We'll be in touch soon.</p>
          )}
        </form>

        <div className="border-t border-neutral-200 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="font-semibold text-neutral-900">Anchor</span>
            <span>© 2025</span>
          </div>
          <div className="flex gap-8">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Terms
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  );
};

export default Footer;