"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Sparkles, RefreshCw, Calculator, Image as ImageIcon, X } from "lucide-react";
import confetti from "canvas-confetti";
import { BirthInput } from "../lib/types";

interface BirthdateFormProps {
  initialValues: BirthInput;
  onCalculate: (values: BirthInput) => void;
  onReset: () => void;
}

export function BirthdateForm({ initialValues, onCalculate, onReset }: BirthdateFormProps) {
  const [birthDate, setBirthDate] = useState(initialValues.birthDate);
  const [birthTime, setBirthTime] = useState(initialValues.birthTime || "00:00");
  const [name, setName] = useState(initialValues.name || "");
  const [profileImage, setProfileImage] = useState<string | undefined>(initialValues.profileImage);

  const todayStr = new Date().toISOString().split("T")[0];

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#60a5fa", "#a855f7", "#ec4899", "#fbbf24"],
      });
    } catch {
      // ignore
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setProfileImage(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setProfileImage(undefined);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;
    triggerConfetti();
    onCalculate({ birthDate, birthTime, name, profileImage });
  };

  const handlePreset = (presetDate: string, presetName: string) => {
    setBirthDate(presetDate);
    setBirthTime("00:00");
    if (!name) setName(presetName);
    triggerConfetti();
    onCalculate({ birthDate: presetDate, birthTime: "00:00", name: name || presetName, profileImage });
  };

  const handleResetForm = () => {
    setBirthDate("1998-05-15");
    setBirthTime("00:00");
    setName("");
    setProfileImage(undefined);
    onReset();
  };

  return (
    <div className="glass-panel rounded-2xl p-5 md:p-7 shadow-2xl border border-slate-800/80 mb-8 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              Enter Your Birth Details
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">
              Get your exact age, heartbeats, sleeping hours, planetary ages, and life milestones!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Birthdate Picker */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-pink-400" />
                Birth Date <span className="text-pink-500">*</span>
              </label>
              <input
                type="date"
                max={todayStr}
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              />
            </div>

            {/* Birth Time Picker */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                Birth Time (Optional)
              </label>
              <input
                type="time"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              />
            </div>

            {/* Optional Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-purple-400" />
                Your Name (For Card)
              </label>
              <input
                type="text"
                placeholder="e.g., Alex Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={30}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white font-medium text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              />
            </div>

            {/* Optional Photo Upload */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-pink-400" />
                Upload Photo (Optional)
              </label>
              {profileImage ? (
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-700/80">
                  <img
                    src={profileImage}
                    alt="Uploaded avatar"
                    className="w-8 h-8 rounded-lg object-cover border border-slate-700"
                  />
                  <span className="text-xs text-slate-300 truncate flex-1 font-medium">Photo Added</span>
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-all"
                    title="Remove Photo"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full text-xs text-slate-400 file:mr-2 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-600/30 file:text-indigo-300 hover:file:bg-indigo-600/40 cursor-pointer bg-slate-900/90 rounded-xl border border-slate-700/80 py-1 px-2"
                />
              )}
            </div>
          </div>

          {/* Quick Presets */}
          <div className="pt-2">
            <span className="text-xs text-slate-400 font-medium mr-2">Try quick samples:</span>
            <div className="inline-flex flex-wrap gap-2 mt-1">
              <button
                type="button"
                onClick={() => handlePreset("2000-01-01", "Millennium Baby")}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-all hover:text-white"
              >
                🚀 Y2K (2000)
              </button>
              <button
                type="button"
                onClick={() => handlePreset("1995-08-14", "Alex")}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-all hover:text-white"
              >
                ⚡ 90s Kid (1995)
              </button>
              <button
                type="button"
                onClick={() => handlePreset("2005-04-12", "Gen Z")}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-all hover:text-white"
              >
                ✨ Gen Z (2005)
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all transform active:scale-98"
            >
              <Calculator className="w-5 h-5" />
              Calculate My Life Statistics
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>

            <button
              type="button"
              onClick={handleResetForm}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm border border-slate-700 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
