import React from 'react';
import { Grid3X3, Star, Sparkles } from 'lucide-react';

const categories = [
  { name: 'Amateur', color: 'from-pink-500/20 to-fuchsia-500/20' },
  { name: 'Professional', color: 'from-indigo-500/20 to-blue-500/20' },
  { name: 'Romance', color: 'from-rose-500/20 to-orange-500/20' },
  { name: 'Sensual', color: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Live', color: 'from-emerald-500/20 to-teal-500/20' },
  { name: 'VR', color: 'from-cyan-500/20 to-sky-500/20' },
];

const Categories = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center gap-2">
        <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
          <Grid3X3 className="h-5 w-5 text-white/90" />
        </div>
        <h2 className="text-xl font-semibold text-white">Browse by category</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#featured"
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${cat.color} p-4 transition hover:scale-[1.02] hover:border-white/20`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/90">{cat.name}</p>
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-white/70">
                  <Sparkles className="h-4 w-4" /> Curated picks
                </div>
              </div>
              <div className="rounded-xl bg-black/20 p-2 ring-1 ring-inset ring-white/10">
                <Star className="h-4 w-4 text-yellow-300" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at 0% 0%, rgba(255,255,255,0.12), transparent 40%)' }} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
