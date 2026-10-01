"use client";

import React from "react";
import { Compass, Sparkles, Gem, Sun, Flame, Shield } from "lucide-react";
import { ZodiacDetails } from "../lib/types";

interface ZodiacInfoProps {
  zodiac: ZodiacDetails;
}

export function ZodiacInfo({ zodiac }: ZodiacInfoProps) {
  return (
    <div className="glass-panel rounded-2xl p-6 shadow-xl border border-purple-500/20 mb-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-purple-400" />
            Astrological & Birth Profile
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-0.5">
            Western Zodiac, Chinese Zodiac, and traditional birthstones!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Western Zodiac Card */}
        <div className="glass-card rounded-xl p-5 border-purple-500/20 bg-purple-950/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-4xl">{zodiac.westernSymbol}</span>
              <div>
                <h3 className="text-xl font-bold text-white">{zodiac.westernSign}</h3>
                <span className="text-xs text-purple-300 font-semibold">{zodiac.trait}</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Western Zodiac
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mt-4 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-slate-500 block mb-0.5">Element</span>
              <span className="font-bold text-slate-200 flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-400" />
                {zodiac.element}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-slate-500 block mb-0.5">Ruling Planet</span>
              <span className="font-bold text-slate-200 flex items-center gap-1">
                <Sun className="w-3 h-3 text-indigo-400" />
                {zodiac.rulingPlanet}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 col-span-2">
              <span className="text-slate-500 block mb-0.5">Traditional Birthstone</span>
              <span className="font-bold text-pink-300 flex items-center gap-1.5">
                <Gem className="w-3.5 h-3.5 text-pink-400" />
                {zodiac.birthstone}
              </span>
            </div>
          </div>
        </div>

        {/* Chinese Zodiac Card */}
        <div className="glass-card rounded-xl p-5 border-amber-500/20 bg-amber-950/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{zodiac.chineseAnimal.split(" ")[0]}</span>
              <div>
                <h3 className="text-xl font-bold text-white">{zodiac.chineseZodiac}</h3>
                <span className="text-xs text-amber-300 font-semibold">Lunar Zodiac Sign</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Chinese Zodiac
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mt-4 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-slate-500 block mb-0.5">Zodiac Animal</span>
              <span className="font-bold text-amber-200">{zodiac.chineseAnimal}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-slate-500 block mb-0.5">Lunar Element</span>
              <span className="font-bold text-amber-200">{zodiac.chineseElement}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 col-span-2">
              <span className="text-slate-500 block mb-0.5">Astrological Wisdom</span>
              <span className="text-slate-300">
                In Chinese culture, the {zodiac.chineseZodiac} brings unique virtues of longevity
                and energy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
