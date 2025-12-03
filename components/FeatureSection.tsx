import React, { useRef, useEffect, useState } from 'react';
import { FeatureProps } from '../types';
import { Link2, MapPin, Users, Minus, Circle, MoreHorizontal, MousePointer2, MessageSquare } from 'lucide-react';

const FeatureSection: React.FC<FeatureProps> = ({ 
  label, 
  title, 
  description, 
  points, 
  imageSide,
  visualType 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderVisual = () => {
      // Feature 1: Network / Connectivity (Matching the screenshot)
      if (visualType === 'network') {
          return (
              <div className="relative w-full h-full flex items-center justify-center bg-neutral-50/50">
                  {/* Background Grid */}
                  <div className="absolute inset-0" style={{ 
                       backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                       backgroundSize: '40px 40px'
                   }}></div>

                  {/* Central Orbit Circle */}
                  <div className="absolute w-[280px] h-[280px] rounded-full border border-neutral-200/60"></div>
                  
                  {/* Floating Cards Container - Rotating slowly */}
                  <div className="relative w-[280px] h-[280px] animate-spin-slow">
                      {/* Top Right: Blue Link */}
                      <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-10">
                          <Link2 className="text-blue-600 w-6 h-6" strokeWidth={2} />
                      </div>
                      
                      {/* Top Left: Minus Line */}
                      <div className="absolute top-16 left-8 w-14 h-14 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <Minus className="text-neutral-300 w-6 h-6" strokeWidth={2} />
                      </div>

                      {/* Bottom Left: Circle */}
                      <div className="absolute bottom-8 left-12 w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-10">
                          <Circle className="text-neutral-300 w-6 h-6" strokeWidth={2} />
                      </div>

                      {/* Bottom Right: Dots */}
                      <div className="absolute bottom-16 right-6 w-14 h-14 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <MoreHorizontal className="text-neutral-300 w-6 h-6" strokeWidth={2} />
                      </div>

                      {/* Connecting abstract lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-neutral-200" style={{ transform: 'rotate(-45deg)' }}>
                          <line x1="50%" y1="30%" x2="50%" y2="70%" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="30%" y1="50%" x2="70%" y2="50%" strokeWidth="1" strokeDasharray="4 4" />
                      </svg>
                  </div>
                  
                  {/* Central Element */}
                  <div className="absolute w-20 h-20 bg-white rounded-full shadow-xl border border-neutral-100 flex items-center justify-center z-20">
                      <div className="w-3 h-3 bg-neutral-900 rounded-full"></div>
                  </div>
              </div>
          )
      }

      // Feature 2: Anchor / Memory
      if (visualType === 'anchor') {
          return (
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-neutral-50/50 p-12">
                   {/* Background Grid */}
                   <div className="absolute inset-0" style={{ 
                       backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                       backgroundSize: '40px 40px'
                   }}></div>

                  {/* Document Interface */}
                  <div className="w-full max-w-[320px] bg-white rounded-xl border border-neutral-200 shadow-xl overflow-hidden relative">
                      {/* Window Controls */}
                      <div className="h-8 border-b border-neutral-100 flex items-center px-3 gap-1.5 bg-neutral-50">
                          <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 space-y-4">
                          <div className="space-y-2">
                              <div className="h-2 bg-neutral-100 rounded w-1/3 mb-4"></div>
                              <div className="h-2 bg-neutral-100 rounded w-full"></div>
                              <div className="h-2 bg-neutral-100 rounded w-full"></div>
                              <div className="h-2 bg-neutral-100 rounded w-5/6"></div>
                          </div>
                          
                          {/* Active Anchor Block */}
                          <div className="relative py-2 -mx-2 px-2 rounded-lg bg-blue-50/50 border border-blue-100 transition-all duration-500">
                               <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
                               <div className="h-2 bg-neutral-800 rounded w-full mb-2 opacity-80"></div>
                               <div className="h-2 bg-neutral-800 rounded w-3/4 opacity-80"></div>
                               
                               {/* Floating Label */}
                               <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg flex items-center gap-1 animate-pulse">
                                   <MapPin size={10} className="text-blue-400" />
                                   Resume here
                               </div>
                          </div>

                          <div className="space-y-2 opacity-50">
                              <div className="h-2 bg-neutral-100 rounded w-11/12"></div>
                              <div className="h-2 bg-neutral-100 rounded w-full"></div>
                          </div>
                      </div>
                  </div>
              </div>
          )
      }

      // Feature 3: Collaboration
      if (visualType === 'collaboration') {
        return (
            <div className="relative w-full h-full flex items-center justify-center bg-neutral-50/50">
                {/* Background Grid */}
                <div className="absolute inset-0" style={{ 
                       backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                       backgroundSize: '40px 40px'
                   }}></div>

                 <div className="w-64 h-72 bg-white rounded-xl border border-neutral-200 shadow-xl relative p-5 rotate-[-2deg] transition-transform hover:rotate-0 duration-500 z-10">
                     <div className="flex items-center justify-between mb-6">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-neutral-200 border-2 border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[8px] text-neutral-500">+2</div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     </div>
                     
                     <div className="space-y-3">
                         <div className="h-2 bg-neutral-100 rounded w-full"></div>
                         <div className="h-2 bg-neutral-100 rounded w-5/6"></div>
                         
                         {/* Shared Anchor Highlight */}
                         <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 relative group cursor-pointer">
                             <div className="h-2 bg-blue-200 rounded w-3/4 mb-1"></div>
                             <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                             
                             {/* User Cursor */}
                             <div className="absolute -bottom-4 -right-3 z-20 flex flex-col items-start">
                                 <MousePointer2 className="w-4 h-4 text-blue-600 fill-blue-600 transform -rotate-12" />
                                 <div className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full rounded-tl-none shadow-sm mt-0.5">
                                     Sarah
                                 </div>
                             </div>
                         </div>
                         
                         <div className="h-2 bg-neutral-100 rounded w-full"></div>
                     </div>

                     {/* Comment Bubble */}
                     <div className="absolute -right-12 top-20 bg-white p-3 rounded-lg rounded-tl-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100 w-40 animate-bounce-slow">
                         <div className="flex items-start gap-2">
                             <div className="w-5 h-5 rounded-full bg-orange-100 flex-shrink-0 mt-0.5"></div>
                             <div>
                                 <p className="text-[10px] font-semibold text-neutral-900">Alex M.</p>
                                 <p className="text-[10px] text-neutral-500 leading-tight">Let's anchor the discussion to this block.</p>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        )
      }
      return null;
  }

  return (
    <div 
      ref={sectionRef} 
      className={`py-32 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center gap-20 ${imageSide === 'right' ? '' : 'md:flex-row-reverse'}`}>
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-neutral-500 border-b border-neutral-200 pb-1 uppercase tracking-wider">
              <span>{label}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900 tracking-tight">
              {title}
            </h2>
            
            <div className="space-y-4 text-lg text-neutral-500 leading-relaxed font-light">
              {description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <ul className="space-y-4 pt-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Content */}
          <div className="flex-1 w-full aspect-square md:aspect-[4/3] relative group">
              <div className="absolute inset-0 bg-neutral-50 rounded-3xl border border-neutral-200 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-neutral-300">
                   {renderVisual()}
              </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-bounce-slow {
            animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default FeatureSection;