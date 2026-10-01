"use client";

import React from "react";
import { Clock, Flame, Calendar, Activity } from "lucide-react";
import { AgeBreakdown } from "../lib/types";

interface LiveAgeCounterProps {
  age: AgeBreakdown;
  userName?: string;
}

export function LiveAgeCounter({ age, userName }: LiveAgeCounterProps) {
  const nameDisplay = userName ? `${userName}'s Exact Age` : "Your Exact Age Today";

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-2xl border border-indigo-500/30 mb-8 relative overflow-hidden">
      {/* Background glow badge */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Live Real-Time Ticking
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white">{nameDisplay}</h2>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-slate-400 text-xs bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>Updating live</span>
        </div>
      </div>

      {/* Main Age Units Breakdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-6">
        {/* Years */}
        <div className="glass-card rounded-xl p-4 text-center border-indigo-500/20">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Years
          </span>
          <div className="text-3xl md:text-4xl font-black text-white text-gradient">
            {age.years}
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">Full Years</span>
        </div>

        {/* Months */}
        <div className="glass-card rounded-xl p-4 text-center border-purple-500/20">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Months
          </span>
          <div className="text-3xl md:text-4xl font-black text-white text-gradient">
            {age.months}
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">Months</span>
        </div>

        {/* Days */}
        <div className="glass-card rounded-xl p-4 text-center border-pink-500/20">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Days
          </span>
          <div className="text-3xl md:text-4xl font-black text-white text-gradient">
            {age.days}
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">Days</span>
        </div>

        {/* Hours */}
        <div className="glass-card rounded-xl p-4 text-center border-blue-500/20">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Hours
          </span>
          <div className="text-3xl md:text-4xl font-black text-indigo-300 font-mono">
            {String(age.hours).padStart(2, "0")}
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">Hours</span>
        </div>

        {/* Minutes */}
        <div className="glass-card rounded-xl p-4 text-center border-cyan-500/20">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Minutes
          </span>
          <div className="text-3xl md:text-4xl font-black text-purple-300 font-mono">
            {String(age.minutes).padStart(2, "0")}
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">Minutes</span>
        </div>

        {/* Seconds */}
        <div className="glass-card rounded-xl p-4 text-center border-amber-500/20 bg-amber-500/5">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1 flex items-center justify-center gap-1">
            <Clock className="w-3 h-3 animate-spin" /> Seconds
          </span>
          <div className="text-3xl md:text-4xl font-black text-amber-300 font-mono animate-tick">
            {String(age.seconds).padStart(2, "0")}
          </div>
          <span className="text-[10px] text-amber-400/70 mt-1 block font-semibold">Ticking</span>
        </div>
      </div>

      {/* Lifetime Cumulative Totals */}
      <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Flame className="w-4 h-4 text-amber-400" />
          Lifetime Totals (Cumulative)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div className="text-lg md:text-xl font-bold text-slate-100 font-mono">
              {age.totalDays.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">Total Days Lived</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div className="text-lg md:text-xl font-bold text-indigo-300 font-mono">
              {age.totalWeeks.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">Total Weeks Lived</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div className="text-lg md:text-xl font-bold text-purple-300 font-mono">
              {age.totalHours.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">Total Hours Lived</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
            <div className="text-lg md:text-xl font-bold text-pink-300 font-mono">
              {age.totalSeconds.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">Total Seconds Lived</div>
          </div>
        </div>
      </div>
    </div>
  );
}
