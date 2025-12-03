import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Advanced Organic Connectivity Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // High DPI scaling for crisp rendering on Retina displays
    const dpr = window.devicePixelRatio || 1;
    
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    
    setCanvasSize();

    // Mouse interaction state
    const mouse = { x: -9999, y: -9999 };
    // "Energy" represents how active the mouse is. 0 = still, 1 = moving fast.
    let mouseEnergy = 0; 

    // Particle Configuration
    // Increased particle count for denser network
    const PARTICLE_COUNT = width < 768 ? 100 : 230; 
    const CONNECTION_DISTANCE = 130;
    // Reveal radius - particles outside this are hidden
    const MOUSE_RADIUS = width < 768 ? 200 : 400;
    const PRIMARY_COLOR = '37, 99, 235'; // Blue-600

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      baseSize: number;
      currentSize: number;
      density: number;
      angle: number;
      baseSpeed: number;
      
      minOrbit: number;
      maxOrbit: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.baseSize = Math.random() * 2.5 + 1;
        this.currentSize = this.baseSize;
        this.density = (Math.random() * 20) + 1;
        
        this.angle = Math.random() * Math.PI * 2;
        // Slower base speed for calm effect
        this.baseSpeed = 0.003 + Math.random() * 0.008; 
        
        // Motion ranges
        this.minOrbit = 5 + Math.random() * 10; 
        this.maxOrbit = 40 + Math.random() * 40; 
      }

      update() {
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let influence = 0;
        // Influence calculation for movement physics (separate from visibility)
        // We want them to move even if they are just on the edge of visibility
        if (distance < MOUSE_RADIUS * 1.2) {
            influence = 1 - (distance / (MOUSE_RADIUS * 1.2));
        }

        // --- Speed Control ---
        const currentSpeed = this.baseSpeed + (mouseEnergy * 0.05);
        this.angle += currentSpeed;
        
        // --- 3D Depth Effect ---
        const depth = Math.sin(this.angle);
        // Scale factor affects size to simulate Z-axis
        const scaleFactor = 1 + (depth * 0.8 * influence); 
        this.currentSize = Math.max(0.5, this.baseSize * scaleFactor);

        // --- Orbit Radius Control ---
        const currentOrbitRadius = (this.minOrbit + (this.maxOrbit - this.minOrbit) * mouseEnergy) * influence;

        // Orbital Movement
        const oscillationX = Math.cos(this.angle) * currentOrbitRadius;
        const oscillationY = Math.sin(this.angle) * currentOrbitRadius;

        // Interactive Force (Repulsion/Attraction mix)
        let forceX = 0;
        let forceY = 0;
        
        if (distance < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          const directionX = dx / distance;
          const directionY = dy / distance;
          
          const forceStrength = force * this.density * (0.2 + mouseEnergy * 0.4);
          
          forceX = -directionX * forceStrength;
          forceY = -directionY * forceStrength;
        }

        const targetX = this.baseX + oscillationX + forceX;
        const targetY = this.baseY + oscillationY + forceY;

        this.x += (targetX - this.x) * 0.05;
        this.y += (targetY - this.y) * 0.05;
      }

      draw() {
        if (!ctx) return;

        // --- Visibility / Reveal Logic ---
        // Calculate distance from current actual position to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        // If outside radius, completely hidden
        if (distToMouse > MOUSE_RADIUS) return;

        // Calculate transparency based on distance from mouse center (Reveal Effect)
        // Closer to mouse = more visible. Edge of radius = transparent.
        const revealAlpha = Math.pow(1 - (distToMouse / MOUSE_RADIUS), 1.5); // Power for smoother falloff

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        
        // --- Depth-based Coloring ---
        // Map size to opacity: Larger (closer) = higher opacity, Smaller (farther) = lower opacity
        const normalizedSize = Math.min(Math.max((this.currentSize - 0.5) / 4, 0), 1);
        const depthAlpha = 0.1 + (normalizedSize * 0.8);
        
        // Combine depth alpha with reveal alpha
        const finalAlpha = depthAlpha * revealAlpha;

        if (finalAlpha < 0.01) return; // Optimization

        ctx.fillStyle = `rgba(${PRIMARY_COLOR}, ${finalAlpha})`;
        ctx.fill();
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Decay mouse energy
      mouseEnergy *= 0.96; 
      if (mouseEnergy < 0.01) mouseEnergy = 0;

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connect();
      
      requestAnimationFrame(animate);
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        // Optimization: only check connection if particle A is visible
        const dxA = mouse.x - particles[a].x;
        const dyA = mouse.y - particles[a].y;
        const distA = Math.sqrt(dxA * dxA + dyA * dyA);
        if (distA > MOUSE_RADIUS) continue;

        const revealAlphaA = Math.pow(1 - (distA / MOUSE_RADIUS), 1.5);

        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
             // Check visibility of particle B
            const dxB = mouse.x - particles[b].x;
            const dyB = mouse.y - particles[b].y;
            const distB = Math.sqrt(dxB * dxB + dyB * dyB);
            
            // If B is also out of range, skip
            if (distB > MOUSE_RADIUS) continue;
            
            const revealAlphaB = Math.pow(1 - (distB / MOUSE_RADIUS), 1.5);
            
            // Line visibility is average of points visibility
            const lineRevealAlpha = (revealAlphaA + revealAlphaB) / 2;

            // Adjust line opacity based on particle sizes (depth)
            const sizeAvg = (particles[a].currentSize + particles[b].currentSize) / 2;
            const sizeFactor = sizeAvg / 2.5; // Normalizing factor
            
            // Faint lines for far particles, stronger lines for close ones
            const depthAlpha = (1 - (distance / CONNECTION_DISTANCE)) * sizeFactor * 0.3;
            
            const finalAlpha = depthAlpha * lineRevealAlpha;
            
            if (finalAlpha > 0.01) {
                ctx.strokeStyle = `rgba(${PRIMARY_COLOR}, ${finalAlpha})`; 
                ctx.lineWidth = 0.5 * sizeFactor;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
          }
        }
      }
    };

    init();
    animate();

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouseEnergy = 1;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -9999;
        mouse.y = -9999;
        mouseEnergy = 0;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-white">
      {/* Background Animation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Soft Gradient Overlay for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-white/90 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-md text-xs font-semibold text-blue-600 uppercase tracking-widest animate-fade-in-up shadow-sm">
          The Workspace OS
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-neutral-900 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          See how everything connects.
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Your apps, files, notes, and conversations — all linked through a single anchor layer that remembers your context.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto animate-fade-in-up mb-16" style={{ animationDelay: '0.3s' }}>
          <button className="bg-neutral-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl shadow-neutral-900/20 active:scale-95">
            Get Early Access
          </button>
          <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 text-neutral-900 backdrop-blur-sm group bg-white/50">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play size={14} className="fill-blue-600 text-blue-600 ml-0.5" />
            </div>
            <span className="font-medium">Watch Demo</span>
          </button>
        </div>

        <div className="mb-20 text-sm font-medium text-neutral-400 animate-fade-in-up flex items-center gap-6" style={{ animationDelay: '0.4s' }}>
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            macOS
          </span>
          <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="22" x2="12" y2="2"/></svg>
            Windows
          </span>
        </div>

        {/* Hero Visual Mockup - Enhanced */}
        <div className="w-full max-w-5xl relative group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {/* Glow behind mockup */}
            <div className="absolute -inset-4 bg-gradient-to-t from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
            
            <div className="relative bg-white rounded-xl border border-neutral-200/80 overflow-hidden shadow-2xl ring-1 ring-neutral-900/5 aspect-video flex flex-col">
                {/* Mockup Toolbar */}
                <div className="h-10 border-b border-neutral-100 bg-neutral-50/50 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-neutral-200 border border-neutral-300"></div>
                        <div className="w-3 h-3 rounded-full bg-neutral-200 border border-neutral-300"></div>
                        <div className="w-3 h-3 rounded-full bg-neutral-200 border border-neutral-300"></div>
                    </div>
                    <div className="mx-auto w-1/3 h-5 bg-white rounded border border-neutral-100 shadow-sm"></div>
                </div>
                
                {/* Mockup Body */}
                <div className="flex-1 bg-neutral-50/30 flex items-center justify-center relative">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto shadow-lg shadow-blue-500/30 flex items-center justify-center text-white">
                             <Play size={32} fill="currentColor" />
                        </div>
                        <p className="text-neutral-400 font-medium tracking-wide text-sm">PRODUCT DEMO VIDEO</p>
                    </div>
                    
                    {/* Decorative UI Elements */}
                    <div className="absolute top-8 left-8 w-48 h-32 bg-white rounded-lg border border-neutral-100 shadow-lg p-4 rotate-[-3deg] hidden md:block transition-transform group-hover:rotate-[-6deg] duration-700">
                        <div className="w-8 h-8 rounded bg-orange-100 mb-3"></div>
                        <div className="h-2 bg-neutral-100 rounded w-full mb-2"></div>
                        <div className="h-2 bg-neutral-100 rounded w-2/3"></div>
                    </div>
                    
                    <div className="absolute bottom-8 right-8 w-56 h-40 bg-white rounded-lg border border-neutral-100 shadow-lg p-4 rotate-[2deg] hidden md:block transition-transform group-hover:rotate-[4deg] duration-700">
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-8 h-8 rounded bg-blue-100"></div>
                            <div className="w-16 h-4 bg-neutral-50 rounded"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-neutral-100 rounded w-full"></div>
                            <div className="h-2 bg-neutral-100 rounded w-full"></div>
                            <div className="h-2 bg-neutral-100 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* CSS Animation classes */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;