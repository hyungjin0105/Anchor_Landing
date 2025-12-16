import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { initGA, analytics } from '../lib/analytics';

const CookieConsent: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            // Show banner after 1 second delay
            setTimeout(() => setShowBanner(true), 1000);
        } else if (consent === 'accepted') {
            // Initialize analytics if already consented
            initGA();
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        analytics.trackCookieConsent('accept');
        initGA();
        setShowBanner(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie_consent', 'rejected');
        analytics.trackCookieConsent('reject');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
            <div className="max-w-5xl mx-auto pointer-events-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-6 md:p-8 relative animate-fade-in-up">
                    {/* Close Button */}
                    <button
                        onClick={handleReject}
                        className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        {/* Icon */}
                        <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Cookie size={24} className="text-blue-600" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                We value your privacy
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                We use cookies and analytics to improve your experience and understand how visitors interact with our website.
                                By clicking "Accept", you consent to the use of Google Analytics.
                                See our{' '}
                                <a href="#" className="text-blue-600 hover:underline" onClick={(e) => {
                                    e.preventDefault();
                                    // This will be handled by the Footer's Privacy modal
                                    document.querySelector<HTMLButtonElement>('[data-privacy-link]')?.click();
                                }}>
                                    Privacy Policy
                                </a>
                                {' '}for more details.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={handleReject}
                                className="px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors text-sm font-medium"
                            >
                                Reject
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors text-sm font-medium shadow-lg"
                            >
                                Accept Cookies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
