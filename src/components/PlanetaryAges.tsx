"use client";

import React from "react";
import { Globe, Rocket, Sparkles, Orbit } from "lucide-react";
import { PlanetaryAge } from "../lib/types";

interface PlanetaryAgesProps {
  planetaryAges: PlanetaryAge[];
}

export function PlanetaryAges({ planetaryAges }: PlanetaryAgesProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <Orbit className="w-5 h-5 text-indigo-400" />
            Your Planetary Ages Across the Solar System
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-0.5">
            How old would you be if you lived on another planet in our solar system?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {planetaryAges.map((p, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-5 border border-indigo-500/10 hover:border-indigo-500/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{p.icon}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  {p.orbitalPeriodDays} Earth Days/Yr
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
              <div className="text-3xl font-black text-indigo-300 font-mono mb-2">
                {p.ageInYears} <span className="text-xs font-normal text-slate-400">years old</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.description}</p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 flex items-center justify-between">
              <span className="text-slate-500">Next Planet Birthday:</span>
              <span className="font-bold text-emerald-400 font-mono">
                in {p.nextPlanetBirthdayDays} Earth days
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
