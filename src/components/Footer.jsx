import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10 bg-neutral-950/60 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-white/90">Safety & Responsibility</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              Only for audiences 18+. We support consent, inclusion, and creator rights. Report concerns and learn about safety resources.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <a href="#" className="text-neutral-300 hover:text-white">Terms</a>
            <a href="#" className="text-neutral-300 hover:text-white">Privacy</a>
            <a href="#" className="text-neutral-300 hover:text-white">Compliance</a>
            <a href="#" className="text-neutral-300 hover:text-white">Report</a>
          </div>
        </div>
        <p className="mt-8 text-xs text-neutral-400">© {new Date().getFullYear()} Velvet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
