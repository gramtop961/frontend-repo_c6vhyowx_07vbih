import React from 'react';
import { Shield, Lock } from 'lucide-react';

const AgeGate = ({ onConfirm, onExit }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="mx-4 w-full max-w-lg rounded-2xl bg-neutral-900 p-6 shadow-xl ring-1 ring-white/10">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-pink-500/10 p-3 text-pink-400 ring-1 ring-inset ring-pink-500/30">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Adults Only (18+)</h2>
            <p className="mt-1 text-sm text-neutral-300">
              This experience is intended for mature audiences. By entering, you confirm that you are at least 18 years old (or the age of majority in your jurisdiction).
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-neutral-800/60 p-4 ring-1 ring-white/5">
          <div className="flex items-start gap-3">
            <Lock className="mt-0.5 h-5 w-5 text-neutral-300" />
            <p className="text-sm text-neutral-300">
              We promote a respectful, consensual, and safe environment. No explicit previews are shown here.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={onExit}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-neutral-800 px-4 py-2.5 font-medium text-neutral-200 transition hover:bg-neutral-700"
          >
            Leave
          </button>
          <button
            onClick={onConfirm}
            className="inline-flex items-center justify-center rounded-lg bg-pink-500 px-4 py-2.5 font-semibold text-white transition hover:bg-pink-600"
          >
            Enter
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-neutral-400">
          By clicking Enter, you confirm that you are of legal age and agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
