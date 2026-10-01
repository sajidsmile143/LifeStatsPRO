import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, ArrowLeft, ShieldAlert, Sparkles, Scale, Cpu } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | LifeStats PRO",
  description:
    "Terms and Conditions for LifeStats PRO. Read our terms of service, disclaimer, and client-side processing policies.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 md:py-12">
        {/* Back to Home Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-slate-800 transition-all hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400" />
            Back to Calculator
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="glass-panel rounded-2xl p-6 md:p-10 shadow-2xl border border-indigo-500/20 mb-8 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Terms of Service
              </span>
              <h1 className="text-2xl md:text-4xl font-black text-white">Terms and Conditions</h1>
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-2xl">
            Welcome to <strong className="text-white">LifeStats PRO</strong>. By accessing or using our web application, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <div className="mt-4 text-[11px] text-slate-500">
            Last Updated: October 1, 2026
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* 1. Purpose of the Tool */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h2>1. Informational & Entertainment Purposes</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              All calculations, statistics, bio-metric estimations (such as heartbeats, sleep hours, breaths), planetary ages, and astrological insights provided by LifeStats PRO are generated solely for <strong>analytical curiosity, educational, and entertainment purposes</strong>.
            </p>
            <p className="text-xs md:text-sm text-slate-400">
              Biological statistics are based on verified scientific averages and should not be used as medical diagnosis or professional health advice.
            </p>
          </div>

          {/* 2. Client-Side Data Processing */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <h2>2. Client-Side Processing & Privacy</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              LifeStats PRO processes all date inputs, time values, names, and optional photo uploads <strong>100% locally within your web browser</strong>. We do not transmit or store your personal information on any server.
            </p>
          </div>

          {/* 3. Intellectual Property & Image Downloads */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <Scale className="w-5 h-5 text-pink-400" />
              <h2>3. Usage & Downloadable Story Cards</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              You are granted a non-exclusive license to generate and download personal "Life Summary Story Cards" for sharing across your personal social media accounts (such as WhatsApp, Instagram, TikTok, and Twitter). Commercial re-distribution of our core application source code without permission is strictly prohibited.
            </p>
          </div>

          {/* 4. Limitation of Liability */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <h2>4. Limitation of Liability</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              In no event shall LifeStats PRO or its developers be held liable for any indirect, incidental, or consequential damages arising out of your use of or inability to use the site or its calculated metrics.
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Age Calculator
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
