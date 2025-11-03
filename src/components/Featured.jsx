import React from 'react';
import { Play } from 'lucide-react';

const items = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Featured ${i + 1}`,
}));

const Featured = () => {
  return (
    <section id="featured" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Featured</h2>
        <a href="#" className="text-sm font-medium text-pink-300 hover:text-pink-200">See all</a>
      </div>
      <div className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-2">
        {items.map((item) => (
          <div key={item.id} className="group w-64 shrink-0 snap-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-800">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-black/50 p-3 ring-1 ring-white/20 transition group-hover:scale-105">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 backdrop-blur-sm opacity-60 group-hover:opacity-50 transition" />
              <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 10px, transparent 10px, transparent 20px)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="rounded-lg bg-black/50 px-2 py-1 text-xs font-medium text-white/90 ring-1 ring-white/10">18+ Content</div>
              </div>
            </div>
            <p className="mt-2 truncate text-sm font-medium text-white/90">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
