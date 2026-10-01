import React from "react";
import Link from "next/link";
import { AdSpace } from "./AdSpace";
import { Clock, ShieldCheck, Heart, Lock, FileText, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800/80 bg-slate-950/80 pt-8 pb-12 text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-4">
        {/* Bottom AdSense Placeholder */}
        <AdSpace label="Bottom Footer" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-b border-slate-800/60">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center font-bold">
              <Clock className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-white text-sm">LifeStats PRO</span>
            <span className="text-slate-500 hidden sm:inline">| Advanced Age & Life Statistics Calculator</span>
          </div>

          {/* Footer Navigation Links for Google AdSense Compliance */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 text-xs font-medium">
            <Link
              href="/privacy"
              className="flex items-center gap-1 text-slate-300 hover:text-indigo-400 transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-indigo-400" /> Privacy Policy
            </Link>

            <span className="text-slate-700">•</span>

            <Link
              href="/terms"
              className="flex items-center gap-1 text-slate-300 hover:text-indigo-400 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" /> Terms of Service
            </Link>

            <span className="text-slate-700">•</span>

            <Link
              href="/contact"
              className="flex items-center gap-1 text-slate-300 hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-pink-400" /> Contact Us
            </Link>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} LifeStats PRO. All calculations for entertainment & analytical curiosity.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for curiosity & fun.
          </p>
        </div>
      </div>
    </footer>
  );
}
