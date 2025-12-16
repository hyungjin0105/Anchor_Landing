import React from 'react';

const Integrations: React.FC = () => {
  const tools = [
    "Notion", "Slack", "Google Drive", "Figma", "Linear", "Zoom", "Discord",
    "ChatGPT", "Gemini", "AI Studio", "VS Code", "Chrome"
  ];

  const getIcon = (name: string) => {
    const className = "w-5 h-5 fill-neutral-900";

    switch (name) {
      case "Notion":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M4.22 3.125c.164 0 .324.035.469.102l13.562 6.375c.348.16.563.508.563.895v10.125c0 .59-.68.914-1.137.543l-3.328-2.656a1 1 0 0 1-.375-.781V8.5l-9.043-4.25v12.438a.99.99 0 0 1-.566.89l-2.91 1.344A.625.625 0 0 1 1 18.375V4.125c0-.602.535-1.055 1.121-1l2.1.004zM16.938 10.96V17.5l2.125 1.696V10.59l-2.125.371zM5.5 5.5v11.8l1.625-.75V5.5H5.5z" />
          </svg>
        );
      case "Slack":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M5.042 15.123a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52a2.52 2.52 0 0 1-5.04 0zm7.56-2.52a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v2.52h-2.52a2.52 2.52 0 0 1-2.52-2.52zm0-5.04a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v2.52h-2.52a2.52 2.52 0 0 1-2.52-2.52zm-5.04 5.04v-2.52a2.52 2.52 0 0 1 5.04 0v2.52a2.52 2.52 0 0 1-5.04 0zM8.822 3.763a2.52 2.52 0 0 1 2.52 2.52v2.52H8.822a2.52 2.52 0 0 1-2.52-2.52 2.52 2.52 0 0 1 2.52-2.52zM6.302 11.322a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v2.52H8.822a2.52 2.52 0 0 1-2.52-2.52z" />
          </svg>
        );
      case "Google Drive":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M7.784 14.868L3.634 7.632l4.132-7.18h8.282l4.15 7.18-4.15 7.236H7.784zM23.084 7.632l-4.15-7.18H10.652l4.15 7.18h8.282zM6.354 15.657l-4.15 7.18h8.282l4.15-7.18H6.354z" fill="currentColor" />
            <path d="M8.7 13.25L14.5 3.25H21.5L15.7 13.25H8.7Z" opacity="0.5" />
            <path d="M15.4 14.75L9.6 24.75H2.6L8.4 14.75H15.4Z" opacity="0.5" />
            <path d="M7.5 13.5L1.7 3.5H8.7L14.5 13.5H7.5Z" opacity="0.5" />
          </svg>
        );
      case "Figma":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M12 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
            <path d="M12 6c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
            <path d="M12 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
            <path d="M15 12c1.657 0 3-1.343 3-3s-1.343-3-3-3v6z" />
            <path d="M15 18c1.657 0 3-1.343 3-3s-1.343-3-3-3v6z" fill="none" />
            <circle cx="15" cy="6" r="3" />
            <path d="M12 12v6c0 1.657-1.343 3-3 3s-3-1.343-3-3-1.343-3-3-3z" />
          </svg>
        );
      case "Linear":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M3.72 13.895l4.89-6.32a.855.855 0 0 1 1.258-.103l4.316 4.316a.855.855 0 0 0 1.21-.001l4.887-4.887 1.21 1.21-5.492 5.492a.855.855 0 0 1-1.21.001l-4.316-4.316a.855.855 0 0 0-1.259.103l-4.284 5.536-1.21-1.031z" />
          </svg>
        );
      case "Zoom":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M4.5 6.5A2.5 2.5 0 0 0 2 9v6a2.5 2.5 0 0 0 2.5 2.5h10A2.5 2.5 0 0 0 17 15V9a2.5 2.5 0 0 0-2.5-2.5h-10zM19 14.5v-5l4-2.5v10l-4-2.5z" />
          </svg>
        );
      case "Discord":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.605-.386 1.23-.526 1.571a15.05 15.05 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.571 16.077 16.077 0 0 0-4.129 1.3 17.332 17.332 0 0 0-2.646 8.356c.332.344.917 1.137 3.375 2.618 1.117.674 2.23 1.144 3.003 1.282.463-.615.896-1.272 1.27-1.972a9.7 9.7 0 0 1-1.896-.913l.635-.615c3.21 1.485 5.253.948 5.253.948a9.8 9.8 0 0 1-1.928.933c.368.694.793 1.344 1.248 1.954.773-.138 1.886-.608 3.003-1.282 2.443-1.472 3.043-2.274 3.375-2.618a17.48 17.48 0 0 0-2.637-8.389zM8.88 14.288c-1.155 0-2.102-1.05-2.102-2.35 0-1.299.925-2.35 2.102-2.35 1.176 0 2.123 1.051 2.123 2.35 0 1.3-1.006 2.35-2.123 2.35zm6.24 0c-1.155 0-2.102-1.05-2.102-2.35 0-1.299.925-2.35 2.102-2.35 1.176 0 2.123 1.051 2.123 2.35 0 1.3-1.006 2.35-2.123 2.35z" />
          </svg>
        );
      case "ChatGPT":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M12.001 1.5a4.234 4.234 0 0 1 3.993 2.852l.215.65a3.896 3.896 0 0 1 1.776 3.165 3.896 3.896 0 0 1-.58 2.053l2.844 1.642a4.24 4.24 0 0 1-1.196 7.647h-1.096l-.213.64a3.896 3.896 0 0 1-3.692 2.665 3.896 3.896 0 0 1-2.067-.591l-2.84 1.64a4.235 4.235 0 0 1-6.142-3.891v-1.29l-.215-.65a3.896 3.896 0 0 1-1.776-3.165 3.896 3.896 0 0 1 .58-2.053L1.5 8.16a4.24 4.24 0 0 1 1.196-7.647h1.096l.213-.64A3.896 3.896 0 0 1 7.697 2.09a3.896 3.896 0 0 1 2.067.591l2.237-1.181zM8.303 6.643L5.459 4.996a2.736 2.736 0 0 0-2.36-.264L6.96 7.42l1.343-.777zm5.394-1.554l-2.846 1.644 1.344.776 3.86-2.687a2.74 2.74 0 0 0-2.358-1.267v1.534zm3.939 5.275l-1.343.776v3.29l2.847-1.645v-1.532a2.736 2.736 0 0 0-1.504-2.423v1.534zm-2.022 6.136l-3.863 2.687a2.736 2.736 0 0 0 2.36.264l-1.343-2.693 2.846-1.644v1.386zm-5.394 1.554l2.846-1.644-1.344-.776-3.86 2.687a2.74 2.74 0 0 0 2.358 1.267v-1.534zm-3.939-5.275l1.343-.776v-3.29L3.435 11.83v1.532a2.736 2.736 0 0 0 1.504 2.423v-1.534z" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        );
      case "Gemini":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M11.96 1.5c-1.4 5.2-5.1 9.3-10.46 10.5 5.2 1.4 9.3 5.1 10.46 10.5 1.4-5.2 5.1-9.3 10.46-10.5-5.2-1.4-9.3-5.1-10.46-10.5z" />
          </svg>
        );
      case "AI Studio":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case "VS Code":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <path d="M17.5 3L6.5 11.5L2 9V15L6.5 12.5L17.5 21L22 18V6L17.5 3Z" />
          </svg>
        );
      case "Chrome":
        return (
          <svg viewBox="0 0 24 24" className={className}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.27.02-.53.06-.79l4.5 7.79h6.86c-1.32 1.93-3.48 3-5.42 3zM7.17 6.05L5.75 8.5C7.22 5.75 10.04 4 12 4c2.6 0 4.88 1.39 6.16 3.51l-1.42 2.46-4.5-7.79H7.17zM18.83 17.5l-1.42-2.46c.86-1.51 1.15-3.23.6-4.88l-4.5 7.79h5.32c.56-1.07.86-2.28.86-3.54 0-1.74-.58-3.35-1.56-4.66l1.42-2.46C20.66 9.07 22 10.47 22 12c0 2.27-.97 4.31-2.52 5.73l-.65-.23z" />
          </svg>
        );
      default:
        return <div className="w-5 h-5 bg-neutral-300 rounded-full"></div>;
    }
  };

  return (
    <section id="integration" className="py-24 bg-white border-t border-neutral-100 relative overflow-hidden">
      {/* Blurred glow spot - Blue accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 text-center mb-12 relative z-10">
        <h2 className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">
          Powering the tools you use every day
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {tools.concat(tools).map((tool, index) => (
            <div key={index} className="mx-8 flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default group/item">
              <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center transition-colors group-hover/item:bg-white group-hover/item:shadow-sm">
                {getIcon(tool)}
              </div>
              <span className="text-xl font-medium text-neutral-900">{tool}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {tools.concat(tools).map((tool, index) => (
            <div key={`dup-${index}`} className="mx-8 flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default group/item">
              <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center transition-colors group-hover/item:bg-white group-hover/item:shadow-sm">
                {getIcon(tool)}
              </div>
              <span className="text-xl font-medium text-neutral-900">{tool}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Integrations;