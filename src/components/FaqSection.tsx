"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, BookOpen } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate is this chronological age calculator?",
      answer:
        "Our tool uses the standard Gregorian calendar system and dynamically calculates the exact difference between your birth time and the current universal time. It fully accounts for leap years (29 days in February) and variable month lengths, making it 100% accurate down to the millisecond.",
    },
    {
      question: "How are my biological life statistics calculated?",
      answer:
        "The biological metrics (like total heartbeats, breaths, and hours slept) are estimated using verified scientific averages. For instance, we assume an average resting heart rate of 80 beats per minute, a standard respiratory rate of 16 breaths per minute, and that a human spends roughly 33.3% of their life sleeping.",
    },
    {
      question: "What is the 5-Year Weekend Birthday Tracker?",
      answer:
        "This is a unique fun feature that scans your birth date against the calendar for the next five years. It instantly tells you whether your upcoming birthday will fall on a weekday or a weekend (Friday, Saturday, Sunday), helping you plan your birthday parties and trips well in advance.",
    },
    {
      question: "Is my personal birth date data safe on this website?",
      answer:
        "Yes, 100%. Our tool operates entirely on the client-side, meaning your exact birth date and time input are processed directly within your browser and are never saved or stored on our servers. Your privacy is fully protected.",
    },
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-xl border border-slate-800/80 mb-8">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white">
            Advanced Age Calculator & Personal Life Statistics Clock
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Calculate your exact age down to the second and unlock fascinating real-time biological stats, cosmic planetary milestone ages, and a custom downloadable story card for social media share.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-800/80 bg-slate-900/60 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 font-semibold text-sm text-slate-200 hover:text-white transition-colors"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-indigo-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/40">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
