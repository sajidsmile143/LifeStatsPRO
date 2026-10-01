"use client";

import React from "react";
import { Gift, Calendar, Sparkles, PartyPopper, CheckCircle2 } from "lucide-react";
import { NextBirthdayCountdown, WeekendBirthdayInfo } from "../lib/types";

interface NextBirthdayProps {
  countdown: NextBirthdayCountdown;
  upcomingWeekendBirthdays: WeekendBirthdayInfo[];
}

export function NextBirthday({ countdown, upcomingWeekendBirthdays }: NextBirthdayProps) {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Next Birthday Countdown Card */}
        <div className="glass-panel rounded-2xl p-6 shadow-xl border border-indigo-500/20 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
            <Gift className="w-32 h-32 text-indigo-400" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Next Birthday Countdown</h3>
                  <p className="text-xs text-slate-400">
                    Turning <span className="text-indigo-300 font-bold">{countdown.nextAge}</span> on{" "}
                    <span className="text-white font-semibold">{countdown.nextBirthdayDate}</span> (
                    {countdown.dayOfWeek})
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
                {countdown.dayOfWeek}
              </span>
            </div>

            {/* Countdown timer numbers */}
            <div className="grid grid-cols-4 gap-2.5 my-5 text-center">
              <div className="glass-card rounded-xl p-3 border-indigo-500/30">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                  {countdown.days}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Days
                </div>
              </div>
              <div className="glass-card rounded-xl p-3 border-indigo-500/30">
                <div className="text-2xl sm:text-3xl font-black text-indigo-300 font-mono">
                  {String(countdown.hours).padStart(2, "0")}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Hours
                </div>
              </div>
              <div className="glass-card rounded-xl p-3 border-indigo-500/30">
                <div className="text-2xl sm:text-3xl font-black text-purple-300 font-mono">
                  {String(countdown.minutes).padStart(2, "0")}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Mins
                </div>
              </div>
              <div className="glass-card rounded-xl p-3 border-amber-500/30 bg-amber-500/5">
                <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono animate-tick">
                  {String(countdown.seconds).padStart(2, "0")}
                </div>
                <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  Secs
                </div>
              </div>
            </div>

            {/* Progress of current age year */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-400">Current Year Progress</span>
                <span className="text-indigo-300">{countdown.progressPercent}% Completed</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-900 border border-slate-800 p-0.5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${countdown.progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Weekend Birthday Tracker */}
        <div className="glass-panel rounded-2xl p-6 shadow-xl border border-purple-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <PartyPopper className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Weekend Birthday Tracker</h3>
                <p className="text-xs text-slate-400">Day of the week for your next 5 birthdays</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {upcomingWeekendBirthdays.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                    item.isWeekend
                      ? "bg-gradient-to-r from-purple-900/30 to-pink-900/20 border-purple-500/40 text-white shadow-md"
                      : "bg-slate-900/60 border-slate-800 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-mono font-bold text-slate-400 w-12">
                      Age {item.age}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.dateStr}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {item.dayOfWeek}
                      </div>
                    </div>
                  </div>

                  <div>
                    {item.isWeekend ? (
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-bold bg-pink-500/20 text-pink-300 border border-pink-500/40">
                        <PartyPopper className="w-3.5 h-3.5 text-pink-400" />
                        Weekend Party!
                      </span>
                    ) : (
                      <span className="text-xs text-slate-500 font-medium px-2 py-0.5 rounded bg-slate-950/60">
                        Weekday
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
