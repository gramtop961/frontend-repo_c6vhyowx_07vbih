import React, { useEffect, useState, useRef } from 'react';
import AgeGate from './components/AgeGate';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  const [allowed, setAllowed] = useState(false);
  const featuredRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('adult_allowed');
    if (saved === 'true') setAllowed(true);
  }, []);

  const handleEnter = () => {
    setAllowed(true);
    localStorage.setItem('adult_allowed', 'true');
  };

  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  const scrollToFeatured = () => {
    const el = document.getElementById('featured');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {!allowed && <AgeGate onConfirm={handleEnter} onExit={handleExit} />}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Velvet</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#featured" className="hover:text-white">Featured</a>
            <a href="#" className="hover:text-white">Creators</a>
            <a href="#" className="hover:text-white">Subscriptions</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setAllowed(false)} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">Age Gate</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onPrimaryClick={scrollToFeatured} />
        <Categories />
        <div ref={featuredRef}>
          <Featured />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
