import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-neutral-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        <Hero />
        <Integrations />
      </main>

      <Footer />
    </div>
  );
};

export default App;