// Google Analytics 4 Integration
// Measurement ID: G-VVTZX1C507

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

// Initialize Google Analytics
export const initGA = () => {
    if (typeof window === 'undefined') return;

    // Check if user has consented to cookies
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'accepted') return;

    // Load GA4 script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-VVTZX1C507';
    document.head.appendChild(script1);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer?.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', 'G-VVTZX1C507', {
        send_page_view: true,
    });
};

// Event tracking functions
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window === 'undefined' || !window.gtag) return;

    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'accepted') return;

    window.gtag('event', eventName, params);
};

// Pre-defined events
export const analytics = {
    // CTA clicks
    trackCTAClick: (location: string, buttonText: string) => {
        trackEvent('cta_click', { location, button_text: buttonText });
    },

    // Navigation clicks
    trackNavigationClick: (destination: string) => {
        trackEvent('navigation_click', { destination });
    },

    // Form events
    trackFormSubmit: (formLocation: string) => {
        trackEvent('form_submit', { form_location: formLocation });
    },

    trackFormSuccess: () => {
        trackEvent('form_success');
    },

    // Video events
    trackVideoStart: (videoName: string) => {
        trackEvent('video_start', { video_name: videoName });
    },

    trackVideoProgress: (videoName: string, percent: number) => {
        trackEvent('video_progress', { video_name: videoName, percent });
    },

    trackVideoComplete: (videoName: string) => {
        trackEvent('video_complete', { video_name: videoName });
    },

    // Carousel navigation
    trackCarouselNav: (direction: string, method: string) => {
        trackEvent('carousel_nav', { direction, method });
    },

    // Scroll depth
    trackScrollDepth: (percent: number) => {
        trackEvent('scroll_depth', { percent });
    },

    // Modal opens
    trackModalOpen: (modalType: string) => {
        trackEvent('modal_open', { modal_type: modalType });
    },

    // Cookie consent
    trackCookieConsent: (action: 'accept' | 'reject') => {
        trackEvent('cookie_consent', { action });
    },
};
