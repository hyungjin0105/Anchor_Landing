import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { analytics } from '../lib/analytics';

interface Feature {
    id: number;
    label: string;
    title: string;
    description: string[];
    points: string[];
    videoPlaceholder: string;
}

const features: Feature[] = [
    {
        id: 1,
        label: "1 · Everything, Connected",
        title: "Your scattered tools, finally in one flow.",
        description: [
            "Google Drive, Notion, Slack, Chrome tabs, PDFs... your work is fragmented.",
            "We don't replace them. We connect them into a single map."
        ],
        points: [
            "Unify documents, messages, and links",
            "Visualize relationships across platforms",
            "Break down silos between apps"
        ],
        videoPlaceholder: "/videos/feature1.mp4"
    },
    {
        id: 2,
        label: "2 · Your Place, Remembered",
        title: "Go back to the exact spot, not just the file.",
        description: [
            "It's not just about opening a file. It returns you to the exact paragraph you were reading or the block you were editing.",
            "Leave an Anchor anywhere. Return instantly without scrolling."
        ],
        points: [
            "Save time searching for context",
            "Reduce context-switching fatigue",
            "Seamless continuity across days"
        ],
        videoPlaceholder: "/videos/feature2.mp4"
    },
    {
        id: 3,
        label: "3 · Work That Continues",
        title: "Collaboration that starts where you left off.",
        description: [
            "Context is preserved for teamwork too. Discuss on top of precise Anchors, not vague file links.",
            "When you share an Anchor, your team sees exactly what you see."
        ],
        points: [
            "Version history for specific anchor points",
            "Deep linking for shared context",
            "Synchronized team views"
        ],
        videoPlaceholder: "/videos/feature3.mp4"
    }
];

const FeatureCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
    const [videoProgress, setVideoProgress] = useState<{ [key: string]: boolean }>({});
    const videoRef = useRef<HTMLVideoElement>(null);

    const activeFeature = features[activeIndex];

    // Control video playback - wait for animation + 1 second before playing
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Reset video to beginning and pause
        video.currentTime = 0;
        video.pause();
        setVideoProgress({}); // Reset progress tracking

        // Wait for slide animation (500ms) + 0.5 second delay before playing
        const playTimer = setTimeout(() => {
            analytics.trackVideoStart(activeFeature.title);
            video.play().catch(err => console.log('Video play error:', err));
        }, 1000); // 500ms animation + 500ms pause

        // Track video progress
        const handleTimeUpdate = () => {
            const progress = (video.currentTime / video.duration) * 100;
            const videoName = activeFeature.title;

            if (progress >= 25 && !videoProgress[`${videoName} _25`]) {
                analytics.trackVideoProgress(videoName, 25);
                setVideoProgress(prev => ({ ...prev, [`${videoName} _25`]: true }));
            }
            if (progress >= 50 && !videoProgress[`${videoName} _50`]) {
                analytics.trackVideoProgress(videoName, 50);
                setVideoProgress(prev => ({ ...prev, [`${videoName} _50`]: true }));
            }
            if (progress >= 75 && !videoProgress[`${videoName} _75`]) {
                analytics.trackVideoProgress(videoName, 75);
                setVideoProgress(prev => ({ ...prev, [`${videoName} _75`]: true }));
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            clearTimeout(playTimer);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [activeIndex]);

    // Video ended handler - advance to next slide
    const handleVideoEnded = () => {
        analytics.trackVideoComplete(activeFeature.title);
        goToNext();
    };

    const goToNext = () => {
        analytics.trackCarouselNav('next', 'arrow');
        setSlideDirection('right');
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 50);
    };

    const goToPrev = () => {
        analytics.trackCarouselNav('prev', 'arrow');
        setSlideDirection('left');
        setTimeout(() => {
            setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
        }, 50);
    };

    const goToSlide = (index: number) => {
        analytics.trackCarouselNav(index > activeIndex ? 'next' : 'prev', 'dot');
        if (index > activeIndex) {
            setSlideDirection('right');
        } else {
            setSlideDirection('left');
        }
        setTimeout(() => {
            setActiveIndex(index);
        }, 50);
    };

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            // Swipe left
            goToNext();
        }
        if (touchStart - touchEnd < -75) {
            // Swipe right
            goToPrev();
        }
    };

    const handleNavigation = (direction: 'prev' | 'next') => {
        if (direction === 'next') {
            goToNext();
        } else {
            goToPrev();
        }
    };

    return (
        <div className="w-full">
            {/* Desktop: Side-by-side Layout */}
            <div className="hidden md:block">
                <div className="max-w-[1800px] mx-auto px-6 flex gap-12 items-start">
                    {/* Left: Carousel - 70% width for larger video display */}
                    <div className="flex-[70] relative group flex flex-col">
                        {/* Glow behind mockup */}
                        <div className="absolute -inset-4 bg-gradient-to-t from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>

                        {/* Main Carousel Container */}
                        <div
                            className="relative bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-2xl ring-1 ring-neutral-900/5 w-full"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* Mockup Toolbar */}
                            <div className="h-10 border-b border-neutral-100 bg-neutral-50/50 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-neutral-200 border border-neutral-300"></div>
                                    <div className="w-3 h-3 rounded-full bg-neutral-200 border border-neutral-300"></div>
                                    <div className="w-3 h-3 rounded-full bg-neutral-200 border border-neutral-300"></div>
                                </div>
                                <div className="mx-auto w-1/3 h-5 bg-white rounded border border-neutral-100 shadow-sm"></div>
                            </div>

                            {/* Video Area - 14:9 aspect ratio, fills completely */}
                            <div className="w-full bg-neutral-900 relative overflow-hidden" style={{ aspectRatio: '14/9' }}>
                                {/* MP4 Video - controlled playback with fade effects */}
                                <video
                                    ref={videoRef}
                                    key={activeFeature.id}
                                    src={activeFeature.videoPlaceholder}
                                    className="w-full h-full object-cover"
                                    muted
                                    playsInline
                                    onEnded={handleVideoEnded}
                                />

                                {/* Play Overlay (optional, shows when video is paused) */}
                                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 flex items-center justify-center text-white">
                                        <Play size={32} fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => handleNavigation('prev')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 z-10"
                                aria-label="Previous feature"
                            >
                                <ChevronLeft size={20} className="text-neutral-900" />
                            </button>

                            <button
                                onClick={() => handleNavigation('next')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 z-10"
                                aria-label="Next feature"
                            >
                                <ChevronRight size={20} className="text-neutral-900" />
                            </button>
                        </div>

                        {/* Dot Indicators */}
                        <div className="flex justify-center gap-2 mt-6">
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition - all duration - 300 rounded - full ${index === activeIndex
                                            ? 'w-8 h-2 bg-blue-600'
                                            : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                                        } `}
                                    aria-label={`Go to feature ${index + 1} `}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Feature Content Sidebar - 30% width */}
                    <div
                        key={activeFeature.id}
                        className={`flex - [30] space - y - 6 self - center text - left ${slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                            } `}
                    >
                        <div className="text-sm font-mono text-neutral-500 border-b border-neutral-200 pb-1 uppercase tracking-wider">
                            <span>{activeFeature.label}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-neutral-900 tracking-tight text-left">
                            {activeFeature.title}
                        </h2>

                        <div className="space-y-3 text-base text-neutral-500 leading-relaxed font-light text-left">
                            {activeFeature.description.map((p, idx) => (
                                <p key={idx} className="text-left">{p}</p>
                            ))}
                        </div>

                        <ul className="space-y-3 pt-2">
                            {activeFeature.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-neutral-700 font-medium text-sm">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-left">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile: Vertical Stack */}
            <div className="md:hidden space-y-8 px-6">
                {features.map((feature) => (
                    <div key={feature.id} className="space-y-4">
                        {/* Video Container */}
                        <div className="relative bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-lg">
                            <div className="aspect-video bg-neutral-50/30">
                                <video
                                    src={feature.videoPlaceholder}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    playsInline
                                />
                            </div>
                        </div>

                        {/* Feature Info */}
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 border-b border-neutral-200 pb-1 uppercase tracking-wider">
                                <span>{feature.label}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900">{feature.title}</h3>
                            <div className="space-y-2 text-sm text-neutral-600">
                                {feature.description.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}
                            </div>
                            <ul className="space-y-2 pt-2">
                                {feature.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
@keyframes slide -in -right {
          from {
        opacity: 0;
        transform: translateX(50px);
    }
          to {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes slide -in -left {
          from {
        opacity: 0;
        transform: translateX(-50px);
    }
          to {
        opacity: 1;
        transform: translateX(0);
    }
}
        .animate - slide -in -right {
    animation: slide -in -right 0.5s cubic - bezier(0.16, 1, 0.3, 1) forwards;
}
        .animate - slide -in -left {
    animation: slide -in -left 0.5s cubic - bezier(0.16, 1, 0.3, 1) forwards;
}
`}</style>
        </div>
    );
};

export default FeatureCarousel;
