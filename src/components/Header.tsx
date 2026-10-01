"use client";

import React, { useState } from "react";
import { Clock, Sparkles, Share2 } from "lucide-react";
import { ShareModal } from "./ShareModal";

export function Header() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 px-4 py-3.5 transition-all">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-lg shadow-indigo-500/20 text-white font-bold">
              <Clock className="w-5 h-5 animate-spin-slow" />
              <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  LifeStats <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">PRO</span>
                </h1>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Advanced Age & Life Statistics Calculator
              </p>
            </div>
          </div>

          {/* Action Button - Opens sleek custom Share Modal */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all active:scale-95 shadow-sm"
              title="Share App"
            >
              <Share2 className="w-3.5 h-3.5 text-pink-400" />
              <span>Share App</span>
            </button>
          </div>
        </div>
      </header>

      {/* Share Modal */}
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </>
  );
}
