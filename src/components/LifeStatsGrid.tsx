"use client";

import React from "react";
import {
  Heart,
  Moon,
  Wind,
  Footprints,
  Utensils,
  Eye,
  Sparkles,
  Smile,
  Droplets,
  Activity,
} from "lucide-react";
import { LifeStats } from "../lib/types";

interface LifeStatsGridProps {
  stats: LifeStats;
}

export function LifeStatsGrid({ stats }: LifeStatsGridProps) {
  const cards = [
    {
      title: "Estimated Heartbeats",
      value: stats.heartbeats.toLocaleString(),
      subtitle: "~80 beats/min continuous average",
      icon: Heart,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-500/10 border-rose-500/30",
      live: true,
      badge: "Beating Live",
      extra: "Pumping millions of liters of blood!",
    },
    {
      title: "Hours Spent Sleeping",
      value: stats.hoursSlept.toLocaleString(),
      subtitle: `~${stats.yearsSlept} total years in dreamland`,
      icon: Moon,
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/30",
      live: false,
      badge: "33% of Lifetime",
      extra: "Essential rest for brain & body recovery",
    },
    {
      title: "Breaths Taken",
      value: stats.breaths.toLocaleString(),
      subtitle: "~16 breaths/minute average",
      icon: Wind,
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/30",
      live: true,
      badge: "Breathing Live",
      extra: "Continuous vital oxygen exchange",
    },
    {
      title: "Total Steps Walked",
      value: stats.stepsWalked.toLocaleString(),
      subtitle: "~6,500 steps per day average",
      icon: Footprints,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/30",
      live: false,
      badge: "Earth Journey",
      extra: `Equivalent to walking around Earth ${Math.round(stats.stepsWalked / 50000000)} times!`,
    },
    {
      title: "Food Consumed",
      value: `${stats.foodEatenKg.toLocaleString()} kg`,
      subtitle: "~1.8 kg food & nourishment daily",
      icon: Utensils,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/30",
      live: false,
      badge: "Nourishment",
      extra: `Equal to ~${Math.round(stats.foodEatenKg / 1000)} metric tons of food!`,
    },
    {
      title: "Eye Blinks",
      value: stats.blinks.toLocaleString(),
      subtitle: "~17 blinks per minute",
      icon: Eye,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/30",
      live: true,
      badge: "Hydrating Eyes",
      extra: "Keeping eyes lubricated & protected",
    },
    {
      title: "Dreams Experienced",
      value: stats.dreamsCount.toLocaleString(),
      subtitle: "~4.5 dreams every night",
      icon: Sparkles,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10 border-pink-500/30",
      live: false,
      badge: "REM State",
      extra: "Adventures inside subconscious mind",
    },
    {
      title: "Minutes of Laughter",
      value: `${stats.laughterMinutes.toLocaleString()} min`,
      subtitle: "~15 minutes of joy per day",
      icon: Smile,
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-500/10 border-yellow-500/30",
      live: false,
      badge: "Joy & Happiness",
      extra: `${Math.round(stats.laughterMinutes / 60)} hours of pure smiles`,
    },
    {
      title: "Water Consumed",
      value: `${stats.waterDrankLiters.toLocaleString()} Liters`,
      subtitle: "~2.2 Liters daily hydration",
      icon: Droplets,
      iconColor: "text-sky-400",
      bgColor: "bg-sky-500/10 border-sky-500/30",
      live: false,
      badge: "Hydration",
      extra: "Fueling 37 trillion human cells",
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-400" />
            Your Life Statistics Dashboard
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-0.5">
            Fascinating bio-metrics based on human physiology averages!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-5 border relative flex flex-col justify-between ${card.bgColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white">
                    <Icon
                      className={`w-5 h-5 ${card.iconColor} ${card.title.includes("Heartbeats") ? "animate-pulse-heart" : ""}`}
                    />
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700/80">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {card.title}
                </h3>
                <div className="text-2xl md:text-3xl font-black text-white mb-1 font-mono tracking-tight">
                  {card.value}
                </div>
                <p className="text-xs text-slate-400 font-medium mb-3">{card.subtitle}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400 flex-shrink-0" />
                <span>{card.extra}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
