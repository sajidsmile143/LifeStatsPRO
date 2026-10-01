import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, ArrowLeft, MessageSquare, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | LifeStats PRO",
  description:
    "Get in touch with the LifeStats PRO support team. Have feedback, questions, or inquiries? Email us at support@lifestatspro.com.",
};

export default function ContactPage() {
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
        <div className="glass-panel rounded-2xl p-6 md:p-10 shadow-2xl border border-indigo-500/20 mb-8 relative overflow-hidden text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Support & Contact
              </span>
              <h1 className="text-2xl md:text-4xl font-black text-white">Get in Touch</h1>
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-2xl">
            Have questions about our real-time age calculator, bio-metric statistics, or need assistance? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email Support Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-1">Email Support</h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                For general inquiries, feature requests, partnership opportunities, or feedback, send us an email directly:
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm text-indigo-300 font-bold flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <a href="mailto:support@lifestatspro.com" className="hover:underline">
                  support@lifestatspro.com
                </a>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> Response time: Usually within 24–48 hours
            </div>
          </div>

          {/* Privacy & Help Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white mb-1">Privacy & Data Security</h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                As a reminder, LifeStats PRO operates entirely in your web browser. We do not store or track your birth date on any server.
              </p>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-300 hover:text-white transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-indigo-400" /> Read our Privacy Policy →
              </Link>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400" /> 100% Client-Side Executed
            </div>
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
