import React from 'react';
import { Play, Shield } from 'lucide-react';

const Hero = ({ onPrimaryClick }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-fuchsia-500/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <Shield className="h-4 w-4" /> Safe, consensual, and respectful
          </span>
          <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Premium Adult Entertainment
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Explore curated selections, tasteful experiences, and creators-first content. No explicit previews here — enter to browse responsibly.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center gap-2 rounded-xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:translate-y-[-1px] hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
            >
              <Play className="h-5 w-5" /> Enter Now
            </button>
            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              View Featured
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
