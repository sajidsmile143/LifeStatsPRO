"use client";

import React, { useState } from "react";
import { X, Copy, Check, MessageSquare, Send, Link as LinkIcon, Sparkles, Share2 } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://lifestatspro.com";
  const shareText = `🚀 Check out LifeStats PRO! Calculate your exact live age down to the second, total heartbeats, sleeping years, planet ages, and download your custom Life Story Card! 🌟`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText}\n${siteUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(`${shareText}\n${siteUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
  };

  const handleTwitter = () => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(siteUrl);
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`, "_blank");
  };

  const handleFacebook = () => {
    const encodedUrl = encodeURIComponent(siteUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank");
  };

  const handleTelegram = () => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(siteUrl);
    window.open(`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-md rounded-3xl p-6 border border-slate-700/80 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white">Share LifeStats PRO</h3>
            <p className="text-xs text-slate-400">Share with friends & family across social media!</p>
          </div>
        </div>

        {/* Share Buttons Grid */}
        <div className="grid grid-cols-2 gap-3 my-5">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            WhatsApp
          </button>

          {/* Twitter / X */}
          <button
            onClick={handleTwitter}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/30 text-xs font-bold transition-all"
          >
            <svg className="w-4 h-4 text-sky-400 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter / X
          </button>

          {/* Facebook */}
          <button
            onClick={handleFacebook}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-bold transition-all"
          >
            <svg className="w-4 h-4 text-blue-400 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </button>

          {/* Telegram */}
          <button
            onClick={handleTelegram}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all"
          >
            <Send className="w-4 h-4 text-cyan-400" />
            Telegram
          </button>
        </div>

        {/* Copy Link Section */}
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1">
              <LinkIcon className="w-3.5 h-3.5 text-indigo-400" /> Web App URL
            </span>
            <span className="text-[10px] text-slate-500">Copy to Share Anywhere</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={siteUrl}
              className="w-full px-3 py-1.5 rounded-lg bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800 focus:outline-none"
            />
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex-shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
