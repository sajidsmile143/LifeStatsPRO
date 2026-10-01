"use client";

import React, { useRef, useState } from "react";
import { Download, Share2, Copy, Check, Sparkles, MessageSquare } from "lucide-react";
import html2canvas from "html2canvas";
import { CompleteAgeResults } from "../lib/types";

interface ViralShareCardProps {
  results: CompleteAgeResults;
  userName?: string;
  profileImage?: string;
}

export function ViralShareCard({ results, userName, profileImage }: ViralShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayName = userName ? userName.trim() : "Me";
  const daysLived = results.age.totalDays.toLocaleString();
  const heartbeats = (results.lifeStats.heartbeats / 1000000000).toFixed(2);
  const sleepYears = results.lifeStats.yearsSlept;
  const zodiacSymbol = results.zodiac.westernSymbol;
  const zodiacSign = results.zodiac.westernSign;
  const birthstone = results.zodiac.birthstone;
  const birthDateStr = results.birthDateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://lifestatspro.com";

  const formattedShareText = `Check out my real-time life statistics! 🌍 I have lived over ${daysLived} days on Earth, my heart has beaten ${heartbeats} Billion times, and I've spent ${sleepYears} years sleeping! ⏰ Calculate your exact stats and download your story card here: ${siteUrl}`;

  // Native HTML5 Canvas 2D fallback renderer (1080x1920 HD Story Image - Perfectly Proportioned)
  const drawNativeCanvasCard = async (): Promise<string> => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";

    // Load profile image if available
    let imgLoaded: HTMLImageElement | null = null;
    if (profileImage) {
      imgLoaded = await new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = profileImage;
      });
    }

    // 1. Background Fill
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 1920);
    bgGradient.addColorStop(0, "#090d16");
    bgGradient.addColorStop(0.5, "#0f172a");
    bgGradient.addColorStop(1, "#1e1b4b");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1080, 1920);

    // 2. Ambient Glowing Circles
    const glow1 = ctx.createRadialGradient(900, 200, 10, 900, 200, 400);
    glow1.addColorStop(0, "rgba(236, 72, 153, 0.25)");
    glow1.addColorStop(1, "rgba(236, 72, 153, 0)");
    ctx.fillStyle = glow1;
    ctx.beginPath();
    ctx.arc(900, 200, 400, 0, Math.PI * 2);
    ctx.fill();

    const glow2 = ctx.createRadialGradient(180, 1700, 10, 180, 1700, 400);
    glow2.addColorStop(0, "rgba(99, 102, 241, 0.25)");
    glow2.addColorStop(1, "rgba(99, 102, 241, 0)");
    ctx.fillStyle = glow2;
    ctx.beginPath();
    ctx.arc(180, 1700, 400, 0, Math.PI * 2);
    ctx.fill();

    // 3. Main Card Outer Box
    const cardX = 90;
    const cardY = 160;
    const cardWidth = 900;
    const cardHeight = 1600;
    const cornerRadius = 48;

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardWidth, cardHeight, cornerRadius);
    ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.stroke();

    // 4. Header: Profile Image OR Zodiac Icon + Name Title + LifeStats PRO badge
    if (imgLoaded) {
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(cardX + 50, cardY + 50, 90, 90, 24);
      ctx.clip();
      ctx.drawImage(imgLoaded, cardX + 50, cardY + 50, 90, 90);
      ctx.restore();

      ctx.beginPath();
      ctx.roundRect(cardX + 50, cardY + 50, 90, 90, 24);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#ec4899";
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.roundRect(cardX + 50, cardY + 50, 90, 90, 24);
      const symbolGrad = ctx.createLinearGradient(cardX + 50, cardY + 50, cardX + 140, cardY + 140);
      symbolGrad.addColorStop(0, "#ec4899");
      symbolGrad.addColorStop(1, "#9333ea");
      ctx.fillStyle = symbolGrad;
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 44px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(zodiacSymbol, cardX + 95, cardY + 112);
    }

    ctx.textAlign = "left";
    ctx.font = "bold 42px sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(userName ? `${userName}'s Journey` : "My Journey on Earth", cardX + 165, cardY + 95);

    ctx.font = "600 26px sans-serif";
    ctx.fillStyle = "#f472b6";
    ctx.fillText(`BORN ${birthDateStr.toUpperCase()}`, cardX + 165, cardY + 132);

    // LifeStats PRO Badge
    ctx.beginPath();
    ctx.roundRect(cardX + cardWidth - 240, cardY + 65, 190, 52, 26);
    ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
    ctx.fill();
    ctx.strokeStyle = "rgba(99, 102, 241, 0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.font = "bold 24px sans-serif";
    ctx.fillStyle = "#a5b4fc";
    ctx.fillText("LifeStats PRO", cardX + cardWidth - 145, cardY + 100);

    // 5. Main Hero Counter Box (Days Alive) - Perfectly Balanced Height & Huge Font
    const heroY = cardY + 185;
    const heroHeight = 320;
    ctx.beginPath();
    ctx.roundRect(cardX + 40, heroY, cardWidth - 80, heroHeight, 36);
    ctx.fillStyle = "rgba(30, 41, 59, 0.75)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.font = "bold 26px sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("TIME LIVED ON EARTH", cardX + cardWidth / 2, heroY + 62);

    // Huge, Bold & Glowing Hero Number "10,477"
    ctx.font = "900 135px sans-serif";
    const textGrad = ctx.createLinearGradient(0, heroY + 90, 0, heroY + 220);
    textGrad.addColorStop(0, "#f472b6");
    textGrad.addColorStop(0.5, "#c084fc");
    textGrad.addColorStop(1, "#818cf8");
    ctx.fillStyle = textGrad;
    ctx.fillText(daysLived, cardX + cardWidth / 2, heroY + 195);

    ctx.font = "bold 28px sans-serif";
    ctx.fillStyle = "#f472b6";
    ctx.fillText("DAYS ALIVE & THRIVING!", cardX + cardWidth / 2, heroY + 268);

    // 6. Key Stats Cards Pill Stack (Clean Emojis & Compact Spacing)
    const pillStartY = heroY + heroHeight + 40;
    const pills = [
      { label: "⏳ Exact Age", val: `${results.age.years}y ${results.age.months}m ${results.age.days}d`, color: "#ffffff" },
      { label: "💓 Heartbeats", val: `${heartbeats} Billion`, color: "#fda4af" },
      { label: "🌙 Sleep Time", val: `~${sleepYears} Years`, color: "#d8b4fe" },
      { label: "✨ Zodiac & Stone", val: `${zodiacSign} (${birthstone})`, color: "#fde047" },
    ];

    pills.forEach((p, idx) => {
      const pY = pillStartY + idx * 148;
      ctx.beginPath();
      ctx.roundRect(cardX + 40, pY, cardWidth - 80, 125, 24);
      ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
      ctx.stroke();

      ctx.textAlign = "left";
      ctx.font = "bold 30px sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText(p.label, cardX + 75, pY + 75);

      ctx.textAlign = "right";
      ctx.font = "bold 34px monospace";
      ctx.fillStyle = p.color;
      ctx.fillText(p.val, cardX + cardWidth - 75, pY + 75);
    });

    // 7. Card Footer - Highlighted Neon Cyan Text
    ctx.textAlign = "center";
    ctx.font = "bold 32px sans-serif";
    ctx.fillStyle = "#22d3ee";
    ctx.fillText("Calculate yours at lifestatspro.com", cardX + cardWidth / 2, cardY + cardHeight - 55);

    ctx.restore();
    return canvas.toDataURL("image/png");
  };

  // 1-Click Dual Engine Download
  const handleDownloadCard = async () => {
    try {
      setDownloading(true);
      let dataUrl = "";

      if (cardRef.current) {
        try {
          const canvas = await html2canvas(cardRef.current, {
            scale: 2.5,
            useCORS: true,
            backgroundColor: "#070b14",
            logging: false,
          });
          dataUrl = canvas.toDataURL("image/png");
        } catch {
          dataUrl = await drawNativeCanvasCard();
        }
      }

      if (!dataUrl) {
        dataUrl = await drawNativeCanvasCard();
      }

      const link = document.createElement("a");
      const safeFileName = displayName.toLowerCase().replace(/[^a-z0-9]/g, "-");
      link.download = `${safeFileName}-my-life-stats.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Canvas generation fallback error:", err);
      const fallbackDataUrl = await drawNativeCanvasCard();
      if (fallbackDataUrl) {
        const link = document.createElement("a");
        link.download = "my-life-stats.png";
        link.href = fallbackDataUrl;
        link.click();
      }
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(formattedShareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const encodedText = encodeURIComponent(formattedShareText);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="glass-panel rounded-2xl p-6 shadow-2xl border border-pink-500/30 mb-8 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-500/10 text-pink-300 border border-pink-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Viral Status & Story Card
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white">Your Life Summary Card</h2>
          <p className="text-xs md:text-sm text-slate-400">
            Download your card image or share directly to WhatsApp Status & Instagram Stories!
          </p>
        </div>

        {/* Action Download PNG Button */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleDownloadCard}
            disabled={downloading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-pink-600/25 transition-all transform active:scale-95 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {downloading ? "Generating High-Res PNG..." : "Download PNG Card"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* The 9:16 Card Component to be Captured */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            ref={cardRef}
            id="life-summary-card"
            className="w-full max-w-sm rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950"
            style={{
              boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
            }}
          >
            {/* Background Decorative Ambient Lighting */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

            {/* Card Header: Profile Picture OR Zodiac Symbol */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4 relative z-10">
              <div className="flex items-center gap-2.5">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile Avatar"
                    className="w-10 h-10 rounded-xl object-cover border-2 border-pink-500/80 shadow-md"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-md text-lg">
                    {zodiacSymbol}
                  </div>
                )}
                <div>
                  <h3 className="text-base font-extrabold text-white leading-tight">
                    {userName ? `${userName}'s Journey` : "My Journey on Earth"}
                  </h3>
                  <p className="text-[10px] text-pink-300 font-semibold tracking-wide uppercase">
                    Born {birthDateStr}
                  </p>
                </div>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                LifeStats PRO
              </span>
            </div>

            {/* Main Viral Highlight Counter */}
            <div className="text-center py-4 my-1 bg-slate-900/60 rounded-2xl border border-slate-800/80 relative z-10">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Time Lived On Earth
              </span>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 font-mono tracking-tight my-1">
                {daysLived}
              </div>
              <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider block mt-1">
                Days Alive & Thriving!
              </span>
            </div>

            {/* Key Stats Pill List with Single Clean Emojis */}
            <div className="space-y-2.5 my-4 relative z-10 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  ⏳ Exact Age
                </span>
                <span className="font-extrabold text-white font-mono">
                  {results.age.years}y {results.age.months}m {results.age.days}d
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  💓 Heartbeats
                </span>
                <span className="font-extrabold text-rose-300 font-mono">
                  {heartbeats} Billion
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  🌙 Sleep Time
                </span>
                <span className="font-extrabold text-purple-300 font-mono">
                  ~{sleepYears} Years
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  ✨ Zodiac & Stone
                </span>
                <span className="font-extrabold text-amber-300">
                  {zodiacSign} ({birthstone})
                </span>
              </div>
            </div>

            {/* Highlighted Footer Tag with Neon Cyan Color */}
            <div className="pt-3 border-t border-slate-800 text-center relative z-10">
              <p className="text-xs font-extrabold text-cyan-300 tracking-wide">
                Calculate yours at <span className="text-cyan-200 underline font-black">lifestatspro.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Direct Sharing Options */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-pink-400" />
              Copy Viral Message Text
            </h4>
            <div className="p-3 rounded-lg bg-slate-950 text-xs text-slate-300 font-mono leading-relaxed border border-slate-800/80">
              {formattedShareText}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={handleCopyText}
                className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700 active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-indigo-400" />}
                {copied ? "Copied!" : "Copy Text"}
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                Share on WhatsApp
              </button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-300 space-y-1.5">
            <p className="font-semibold text-indigo-300 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-300" />
              How to post on WhatsApp Status / Instagram Story:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-400 pl-1">
              <li>Click <strong>"Download PNG Card"</strong> above to save your story image.</li>
              <li>Click <strong>"Share on WhatsApp"</strong> or open Instagram Stories.</li>
              <li>Upload the downloaded image with your custom life statistics text!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
