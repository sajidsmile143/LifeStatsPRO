"use client";

import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { AdSpace } from "../components/AdSpace";
import { BirthdateForm } from "../components/BirthdateForm";
import { LiveAgeCounter } from "../components/LiveAgeCounter";
import { LifeStatsGrid } from "../components/LifeStatsGrid";
import { NextBirthday } from "../components/NextBirthday";
import { ViralShareCard } from "../components/ViralShareCard";
import { PlanetaryAges } from "../components/PlanetaryAges";
import { ZodiacInfo } from "../components/ZodiacInfo";
import { MilestonesProgress } from "../components/MilestonesProgress";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";

import { BirthInput, CompleteAgeResults } from "../lib/types";
import { calculateCompleteAge } from "../lib/calculator";
import { Clock, Sparkles } from "lucide-react";

export default function Home() {
  const [birthInput, setBirthInput] = useState<BirthInput>({
    birthDate: "1998-05-15",
    birthTime: "00:00",
    name: "",
    profileImage: undefined,
  });

  const [results, setResults] = useState<CompleteAgeResults | null>(null);

  // Initial calculation on load
  useEffect(() => {
    setResults(calculateCompleteAge(birthInput));
  }, []);

  // Real-time live counter ticking effect every 1 second
  useEffect(() => {
    if (!birthInput.birthDate) return;

    const interval = setInterval(() => {
      setResults(calculateCompleteAge(birthInput));
    }, 1000);

    return () => clearInterval(interval);
  }, [birthInput]);

  const handleCalculate = (newInput: BirthInput) => {
    setBirthInput(newInput);
    setResults(calculateCompleteAge(newInput));
  };

  const handleReset = () => {
    const defaultInput = { birthDate: "1998-05-15", birthTime: "00:00", name: "", profileImage: undefined };
    setBirthInput(defaultInput);
    setResults(calculateCompleteAge(defaultInput));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Navigation Header */}
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 md:py-8">
        {/* Top Hero Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            100% Free & Real-Time Bio-Metrics
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
            Advanced Age & <span className="text-gradient">Life Stats Calculator</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            Discover your live ticking age, total sleeping years, estimated heartbeats, planetary ages,
            and create your custom <span className="text-pink-400 font-semibold">Life Story Card</span>!
          </p>
        </div>

        {/* 1. Top Google AdSense Space Placeholder */}
        <AdSpace label="Top Header" />

        {/* Birthdate Form Component */}
        <BirthdateForm
          initialValues={birthInput}
          onCalculate={handleCalculate}
          onReset={handleReset}
        />

        {/* 2. Google AdSense Space Placeholder Under Calculator Button */}
        <AdSpace label="Under Calculator" />

        {/* Calculated Results Display */}
        {results && (
          <div className="space-y-8 animate-fadeIn">
            {/* Live Age Counter Section */}
            <LiveAgeCounter age={results.age} userName={birthInput.name} />

            {/* Virality Card Feature (Life Summary Card & Download) */}
            <ViralShareCard
              results={results}
              userName={birthInput.name}
              profileImage={birthInput.profileImage}
            />

            {/* Life Statistics Bio-Dashboard */}
            <LifeStatsGrid stats={results.lifeStats} />

            {/* Next Birthday & Weekend Birthday Tracker */}
            <NextBirthday
              countdown={results.nextBirthday}
              upcomingWeekendBirthdays={results.upcomingWeekendBirthdays}
            />

            {/* Planetary Ages */}
            <PlanetaryAges planetaryAges={results.planetaryAges} />

            {/* Zodiac & Astrological Details */}
            <ZodiacInfo zodiac={results.zodiac} />

            {/* Life Milestones Progress */}
            <MilestonesProgress milestones={results.milestones} />
          </div>
        )}

        {/* SEO & Educational FAQ Section */}
        <FaqSection />
      </main>

      {/* 3. Footer containing Bottom AdSense Space Placeholder */}
      <Footer />
    </div>
  );
}
