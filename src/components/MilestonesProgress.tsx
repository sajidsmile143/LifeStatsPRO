"use client";

import React from "react";
import { Award, CheckCircle2, Clock, Sparkles, Trophy } from "lucide-react";
import { MilestoneItem } from "../lib/types";

interface MilestonesProgressProps {
  milestones: MilestoneItem[];
}

export function MilestonesProgress({ milestones }: MilestonesProgressProps) {
  return (
    <div className="glass-panel rounded-2xl p-6 shadow-xl border border-indigo-500/20 mb-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            Major Life Milestones Tracker
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-0.5">
            Track your progress toward monumental achievements in days, heartbeats, and hours!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {milestones.map((m) => (
          <div
            key={m.id}
            className={`glass-card rounded-xl p-4 border flex flex-col justify-between transition-all ${
              m.reached
                ? "border-emerald-500/40 bg-emerald-950/10"
                : "border-slate-800 bg-slate-900/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  {m.reached ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  )}
                  {m.title}
                </h3>
                {m.reached ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Achieved 🎉
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Upcoming ⏳
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 mb-3">{m.description}</p>

              {/* Progress bar */}
              <div className="space-y-1 my-3">
                <div className="flex justify-between text-[11px] font-medium">
                  <span className="text-slate-400">
                    {m.currentValue.toLocaleString()} / {m.targetValue.toLocaleString()} {m.unit}
                  </span>
                  <span className={m.reached ? "text-emerald-400 font-bold" : "text-amber-300"}>
                    {m.progressPercent}%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      m.reached
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                        : "bg-gradient-to-r from-amber-500 to-indigo-500"
                    }`}
                    style={{ width: `${m.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
              <span className="text-slate-500">
                {m.reached ? "Date Reached:" : "Estimated Date:"}
              </span>
              <span className="font-semibold text-slate-200">{m.estimatedDate || "N/A"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
