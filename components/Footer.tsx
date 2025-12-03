import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
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

        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto mb-20">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full bg-white border border-neutral-200 rounded-full px-6 py-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 transition-all pr-14 shadow-sm"
            disabled={submitted}
          />
          <button
            type="submit"
            disabled={submitted}
            className={`absolute right-2 top-2 bottom-2 aspect-square rounded-full flex items-center justify-center transition-all duration-300 ${submitted ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-neutral-800'}`}
          >
            {submitted ? <Check size={20} /> : <ArrowRight size={20} />}
          </button>
        </form>

        <div className="border-t border-neutral-200 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="font-semibold text-neutral-900">Anchor</span>
            <span>© 2024</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;