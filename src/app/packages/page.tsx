"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

function Align365Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-full border-[2.5px] border-black flex items-center justify-center p-0.5">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-none stroke-black"
          strokeWidth="6"
          strokeLinecap="round"
        >
          <path d="M 50 15 L 15 85" />
          <path d="M 50 15 L 85 85" />
          <path d="M 32 60 Q 50 40 68 60" />
        </svg>
      </div>
      <div className="flex flex-col font-sans -space-y-1">
        <span className="font-black text-black text-lg tracking-tight leading-none">ALIGN</span>
        <span className="font-black text-black text-sm tracking-widest leading-none">365</span>
      </div>
    </div>
  );
}

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<"personal" | "online">("personal");

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-black font-sans selection:bg-stone-300 selection:text-black">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Align365Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-black">
            <Link href="/" className="hover:text-stone-600 transition-colors">Home</Link>
            <Link href="/packages" className="text-black font-black underline underline-offset-4">Packages</Link>
            <Link href="/apply" className="hover:text-stone-600 transition-colors">Apply Now</Link>
          </div>

          <div>
            <Link
              href="/apply"
              className="px-5 py-2.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Banner with pic3.jpg Background */}
      <section className="relative py-24 text-white overflow-hidden bg-black text-center isolate">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60 z-0"
          style={{ backgroundImage: "url('/pic3.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70 z-0" />

        <div className="relative z-30 max-w-4xl mx-auto px-6 space-y-4">
          <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-black bg-white px-4 py-1.5 rounded-full shadow-lg">
            Transparent Investment
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Monthly Coaching Packages
          </h1>
          <p className="text-stone-200 text-sm max-w-xl mx-auto font-medium drop-shadow">
            Choose between 1-on-1 Personal Training in Durbanville or structured Remote Online Coaching.
          </p>

          {/* Section Toggle Buttons */}
          <div className="pt-6 flex justify-center">
            <div className="bg-black/90 backdrop-blur-md p-1.5 rounded-full border border-white/30 flex items-center gap-2 shadow-2xl relative z-40">
              <button
                type="button"
                onClick={() => setActiveTab("personal")}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "personal"
                    ? "bg-white text-black shadow-md"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                Personal Training
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("online")}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "online"
                    ? "bg-white text-black shadow-md"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                Online Training
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        {/* SECTION 1: PERSONAL TRAINING */}
        {activeTab === "personal" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-black uppercase text-black">In-Person Personal Training</h2>
              <p className="text-xs text-stone-700">
                1-on-1 strength and conditioning sessions at Planet Fitness Durbanville paired with full app tracking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Option 1: 2x a week */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-300 p-8 flex flex-col justify-between group">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/pic1.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
                
                <div className="relative z-10 space-y-6 text-white">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">2 Sessions / Week</span>
                    <h3 className="text-2xl font-black uppercase text-white mt-1"></h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">R2,800</span>
                      <span className="text-xs text-stone-300 font-bold uppercase">/ month</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-xs text-stone-200 font-medium">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> 8 In-person sessions per month
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Custom workout app scheduling
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Weekly check-ins & form analysis
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Direct WhatsApp support
                    </li>
                  </ul>
                </div>
                <div className="relative z-10 pt-8">
                  <Link
                    href="/apply"
                    className="w-full py-3.5 bg-white hover:bg-stone-200 text-black font-black text-xs uppercase tracking-wider rounded-xl block text-center transition-colors shadow-md"
                  >
                    Apply For 2x A Week
                  </Link>
                </div>
              </div>

              {/* Option 2: 3x a week (Featured Most Popular) */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-black p-8 flex flex-col justify-between group">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/pic2.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />

                <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow z-20">
                  Most Popular
                </div>

                <div className="relative z-10 space-y-6 text-white">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">3 Sessions / Week</span>
                    <h3 className="text-2xl font-black uppercase text-white mt-1"></h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">R3,900</span>
                      <span className="text-xs text-stone-300 font-bold uppercase">/ month</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-xs text-stone-100 font-medium">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> 12 In-person sessions per month
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Full app access & program adjustments
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Weekly check-ins & macro guidance
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Priority WhatsApp support
                    </li>
                  </ul>
                </div>
                <div className="relative z-10 pt-8">
                  <Link
                    href="/apply"
                    className="w-full py-3.5 bg-white hover:bg-stone-200 text-black font-black text-xs uppercase tracking-wider rounded-xl block text-center transition-colors shadow-lg"
                  >
                    Apply For 3x A Week
                  </Link>
                </div>
              </div>

              {/* Option 3: 4x a week */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-300 p-8 flex flex-col justify-between group">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/pic5.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />

                <div className="relative z-10 space-y-6 text-white">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">4 Sessions / Week</span>
                    <h3 className="text-2xl font-black uppercase text-white mt-1"></h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">R4,800</span>
                      <span className="text-xs text-stone-300 font-bold uppercase">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-xs text-stone-200 font-medium">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> 16 In-person sessions per month
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Complete app tracking & custom splits
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Weekly progress & form review
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Nutrition habits & priority support
                    </li>
                  </ul>
                </div>
                <div className="relative z-10 pt-8">
                  <Link
                    href="/apply"
                    className="w-full py-3.5 bg-white hover:bg-stone-200 text-black font-black text-xs uppercase tracking-wider rounded-xl block text-center transition-colors shadow-md"
                  >
                    Apply For 4x A Week
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: ONLINE TRAINING */}
        {activeTab === "online" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-black uppercase text-black">Remote Online Coaching</h2>
              <p className="text-xs text-stone-700">
                Full fitness programming delivered to your phone with complete accountability and continuous remote feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Option 1: Monthly */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-300 p-8 flex flex-col justify-between group">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/pic4.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />

                <div className="relative z-10 space-y-6 text-white">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black bg-white px-2.5 py-1 rounded-full">
                      Flexible Retainer
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white mt-3">Monthly</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">R1,200</span>
                      <span className="text-xs text-stone-300 font-bold uppercase">/ month</span>
                    </div>
                  </div>
                  <ul className="space-y-3.5 text-xs text-stone-200 font-medium">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Tailored monthly workout program
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Interactive exercise video guidance
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Weekly check-in reviews & adjustments
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Form feedback & WhatsApp support
                    </li>
                  </ul>
                </div>
                <div className="relative z-10 pt-8">
                  <Link
                    href="/apply"
                    className="w-full py-3.5 bg-white hover:bg-stone-200 text-black font-black text-xs uppercase tracking-wider rounded-xl block text-center transition-colors shadow-md"
                  >
                    Apply For Monthly
                  </Link>
                </div>
              </div>

              {/* Option 2: 12 Weeks (Best Value) */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-black p-8 flex flex-col justify-between group">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/pic3.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />

                <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow z-20">
                  Best Value
                </div>

                <div className="relative z-10 space-y-6 text-white">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">Full Commitment</span>
                    <h3 className="text-2xl font-black uppercase text-white mt-3">12 Weeks</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">R2,100</span>
                      <span className="text-xs text-stone-300 font-bold uppercase">once off</span>
                    </div>
                  </div>
                  <ul className="space-y-3.5 text-xs text-stone-100 font-medium">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Full 12-week structured training phase
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Progressive app workout updates
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Weekly form reviews & metric tracking
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0" /> Priority WhatsApp coaching support
                    </li>
                  </ul>
                </div>
                <div className="relative z-10 pt-8">
                  <Link
                    href="/apply"
                    className="w-full py-3.5 bg-white hover:bg-stone-200 text-black font-black text-xs uppercase tracking-wider rounded-xl block text-center transition-colors shadow-lg"
                  >
                    Apply For 12 Weeks
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-stone-200 text-stone-600 text-xs">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Align365Logo />
          <div>© 2026 Align365 · Not medical advice</div>
          <div className="flex gap-6 font-bold uppercase text-black">
            <Link href="/" className="hover:text-stone-600">Home</Link>
            <Link href="/packages" className="hover:text-stone-600">Packages</Link>
            <Link href="/apply" className="hover:text-stone-600">Apply</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}