import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, Cookie, ArrowLeft, Eye, Server } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LifeStats PRO",
  description:
    "Privacy Policy for LifeStats PRO. Learn how our client-side age calculator protects your data and how Google AdSense cookies are managed.",
};

export default function PrivacyPage() {
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
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Legal & Transparency
              </span>
              <h1 className="text-2xl md:text-4xl font-black text-white">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-2xl">
            At <strong className="text-white">LifeStats PRO</strong>, your privacy is our top priority.
            This Privacy Policy explains how our client-side tools work and how third-party services
            (like Google AdSense) collect data.
          </p>
          <div className="mt-4 text-[11px] text-slate-500">
            Last Updated: October 1, 2026
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* 1. Client-Side Data Processing */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <Server className="w-5 h-5 text-emerald-400" />
              <h2>1. 100% Client-Side Processing (No Server Storage)</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Our Advanced Age & Life Statistics Calculator operates entirely within your web browser (client-side execution). When you enter your birth date, birth time, or name:
            </p>
            <ul className="list-disc list-inside text-xs md:text-sm text-slate-400 space-y-1.5 pl-2">
              <li>Your personal data is <strong>NEVER transmitted</strong> to any external database or remote server.</li>
              <li>Calculations are performed instantly using local JavaScript algorithms in your browser memory.</li>
              <li>We do not collect, store, or sell any personally identifiable information (PII).</li>
            </ul>
          </div>

          {/* 2. Google AdSense & Third-Party Cookies */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <Cookie className="w-5 h-5 text-amber-400" />
              <h2>2. Google AdSense & Third-Party Advertising Cookies</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              We use third-party advertising vendors, including <strong>Google AdSense</strong>, to serve advertisements when you visit our website.
            </p>
            <div className="space-y-2 text-xs md:text-sm text-slate-400 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <p>
                <strong className="text-amber-300">Third-Party Cookies & DART Cookies:</strong> Google uses cookies (including the DART cookie) to serve ads to users based on their visits to this site and other sites on the Internet.
              </p>
              <p>
                Users may opt out of personalized advertising by visiting Google's{" "}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 underline hover:text-indigo-300"
                >
                  Ads Settings
                </a>.
              </p>
              <p>
                Alternatively, users can opt out of a third-party vendor's use of cookies for personalized advertising by visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 underline hover:text-indigo-300"
                >
                  www.aboutads.info
                </a>.
              </p>
            </div>
          </div>

          {/* 3. Log Files & Analytics */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <Eye className="w-5 h-5 text-indigo-400" />
              <h2>3. Standard Web Analytics & Log Files</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Like most standard website servers, automated hosting log files may record internet protocol (IP) addresses, browser types, Internet Service Provider (ISP), referring/exit pages, platform type, and date/time stamps. This information is non-personally identifiable and is used solely to analyze web traffic trends and maintain site security.
            </p>
          </div>

          {/* 4. Security & User Control */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-extrabold text-white">
              <Lock className="w-5 h-5 text-pink-400" />
              <h2>4. Data Security & Consent</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              By using LifeStats PRO, you hereby consent to our Privacy Policy and agree to its terms. If you have any questions regarding your privacy while using our web application, feel free to contact us.
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
