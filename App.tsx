import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-neutral-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        <Integrations />
        
        <div id="features" className="relative">
             {/* Subtle vertical line running through features */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent hidden md:block"></div>

            <FeatureSection 
              label="1 · Everything, Connected"
              title="Your scattered tools, finally in one flow."
              description={[
                "Google Drive, Notion, Slack, Chrome tabs, PDFs... your work is fragmented.",
                "We don't replace them. We connect them into a single map."
              ]}
              points={[
                "Unify documents, messages, and links",
                "Visualize relationships across platforms",
                "Break down silos between apps"
              ]}
              imageSide="right"
              visualType="network"
            />

            <FeatureSection 
              label="2 · Your Place, Remembered"
              title="Go back to the exact spot, not just the file."
              description={[
                "It's not just about opening a file. It returns you to the exact paragraph you were reading or the block you were editing.",
                "Leave an Anchor anywhere. Return instantly without scrolling."
              ]}
              points={[
                "Save time searching for context",
                "Reduce context-switching fatigue",
                "Seamless continuity across days"
              ]}
              imageSide="left"
              visualType="anchor"
            />

            <FeatureSection 
              label="3 · Work That Continues"
              title="Collaboration that starts where you left off."
              description={[
                "Context is preserved for teamwork too. Discuss on top of precise Anchors, not vague file links.",
                "When you share an Anchor, your team sees exactly what you see."
              ]}
              points={[
                "Version history for specific anchor points",
                "Deep linking for shared context",
                "Synchronized team views"
              ]}
              imageSide="right"
              visualType="collaboration"
            />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;