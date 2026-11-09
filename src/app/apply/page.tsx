"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Laptop, User, CheckCircle2, Loader2 } from "lucide-react";

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

export default function ApplyPage() {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<"personal" | "online">("personal");
  const [frequency, setFrequency] = useState<number>(3); 
  const [commitment, setCommitment] = useState<"monthly" | "12weeks">("monthly");

  // Step 3 Form Data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    height: "",
    weight: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      service: selectedService === "personal" ? "In-Person Personal Training" : "100% Online Coaching",
      frequency: selectedService === "personal" ? `${frequency} Days/Week` : "N/A",
      commitment: commitment === "12weeks" ? "12-Week Phase" : "Monthly Retainer",
      submittedAt: new Date().toLocaleString(),
    };

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pricing helper for Step 2
  const getPrice = () => {
    if (selectedService === "online") {
      return commitment === "12weeks" ? "R1,700 once off" : "R1,000 / month";
    }
    if (frequency === 1) return "R1,000 / month";
    if (frequency === 2) return "R2,400 / month";
    if (frequency === 3) return "R3,000 / month";
    if (frequency === 4) return "R4,000 / month";
    return "R5,800 / month";
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-black font-sans selection:bg-stone-300 selection:text-black flex flex-col justify-between">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Align365Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-black">
            <Link href="/" className="hover:text-stone-600 transition-colors">Home</Link>
            <Link href="/packages" className="hover:text-stone-600 transition-colors">Packages</Link>
            <Link href="/apply" className="text-black font-black underline underline-offset-4">Apply Now</Link>
          </div>

          <div>
            <Link
              href="/"
              className="px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-black font-bold text-xs uppercase tracking-wider transition-colors border border-stone-300 shadow-sm flex items-center gap-2"
            >
              ← Back To Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Form Container */}
      <main className="py-16 px-6 flex-grow flex items-center justify-center">
        <div className="max-w-xl w-full bg-white border border-stone-300 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
          
          {/* SUCCESS MESSAGE STATE */}
          {isSubmitted ? (
            <div className="text-center space-y-6 py-6 animate-fadeIn">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-black">Application Received</h2>
                <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-black">{formData.firstName}</span>. Your details have been added to our client list, and Goosain will review your submission and contact you at <span className="font-bold text-black">{formData.email}</span>.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-black hover:bg-stone-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shadow-md"
                >
                  Return To Homepage
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Step Indicator Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-stone-600">
                  <span>Step {step} of 3</span>
                  <span>
                    {step === 1 && "Choose Service"}
                    {step === 2 && "Frequency & Option"}
                    {step === 3 && "Personal Details"}
                  </span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-black h-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: SELECT SERVICE */}
              {step === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-black uppercase text-black">Select Your Coaching Path</h1>
                    <p className="text-xs text-stone-700">Choose how you want to train with Goosain Matthews.</p>
                  </div>

                  <div className="space-y-4">
                    {/* Option 1: Personal Training */}
                    <div
                      onClick={() => setSelectedService("personal")}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 ${
                        selectedService === "personal"
                          ? "border-black bg-stone-50 shadow-md"
                          : "border-stone-200 hover:border-stone-400 bg-white"
                      }`}
                    >
                      <div className="p-3 bg-black text-white rounded-xl">
                        <User className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 flex-grow">
                        <div className="flex justify-between items-center">
                          <h3 className="font-black uppercase text-sm text-black">In-Person Personal Training</h3>
                          {selectedService === "personal" && <Check className="w-4 h-4 text-black" />}
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          1-on-1 personal training sessions at Planet Fitness Durbanville.
                        </p>
                      </div>
                    </div>

                    {/* Option 2: 100% Online Coaching */}
                    <div
                      onClick={() => setSelectedService("online")}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 ${
                        selectedService === "online"
                          ? "border-black bg-stone-50 shadow-md"
                          : "border-stone-200 hover:border-stone-400 bg-white"
                      }`}
                    >
                      <div className="p-3 bg-black text-white rounded-xl">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 flex-grow">
                        <div className="flex justify-between items-center">
                          <h3 className="font-black uppercase text-sm text-black">100% Online Coaching</h3>
                          {selectedService === "online" && <Check className="w-4 h-4 text-black" />}
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          Custom programming inside the app, weekly check-in reviews, and form checking from anywhere.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-black hover:bg-stone-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Continue To Options <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: TRAINING FREQUENCY & COMMITMENT OPTION */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-black uppercase text-black">Frequency & Program</h1>
                    <p className="text-xs text-stone-700">Customize your weekly schedule and commitment option.</p>
                  </div>

                  {selectedService === "personal" && (
                    <div className="p-6 bg-stone-50 border border-stone-300 rounded-2xl space-y-6">
                      <div className="text-center space-y-1">
                        <span className="text-4xl font-black text-black">{frequency} Days</span>
                        <p className="text-xs font-bold uppercase text-stone-600 tracking-wider">Target Training Frequency / Week</p>
                      </div>

                      <div className="space-y-2 px-2">
                        <input
                          type="range"
                          min="1"
                          max="5"
                          step="1"
                          value={frequency}
                          onChange={(e) => setFrequency(Number(e.target.value))}
                          className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-black"
                        />
                        <div className="flex justify-between text-[11px] font-bold text-stone-600">
                          <span>1 Day</span>
                          <span>2 Days</span>
                          <span>3 Days</span>
                          <span>4 Days</span>
                          <span>5 Days</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Program Duration Selector: 12-Week vs Monthly */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-stone-700">Choose Program Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setCommitment("12weeks")}
                        className={`p-4 rounded-xl border-2 font-bold text-xs uppercase transition-all cursor-pointer text-left space-y-1 ${
                          commitment === "12weeks"
                            ? "border-black bg-stone-50 text-black shadow-sm"
                            : "border-stone-200 text-stone-600 hover:border-stone-300"
                        }`}
                      >
                        <div className="font-black text-sm">12-Week Phase</div>
                        <div className="text-[10px] font-normal text-stone-500">Structured block strategy</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCommitment("monthly")}
                        className={`p-4 rounded-xl border-2 font-bold text-xs uppercase transition-all cursor-pointer text-left space-y-1 ${
                          commitment === "monthly"
                            ? "border-black bg-stone-50 text-black shadow-sm"
                            : "border-stone-200 text-stone-600 hover:border-stone-300"
                        }`}
                      >
                        <div className="font-black text-sm">Monthly Program</div>
                        <div className="text-[10px] font-normal text-stone-500">Ongoing month-to-month</div>
                      </button>
                    </div>
                  </div>

                  {/* Calculated Price Display */}
                  <div className="p-4 bg-white border border-stone-300 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-600 uppercase">Estimated Investment</span>
                    <span className="text-base font-black text-black">{getPrice()}</span>
                  </div>

                  {/* Navigation Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-4 bg-stone-100 hover:bg-stone-200 text-black font-black text-xs uppercase tracking-wider rounded-xl transition-colors border border-stone-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 py-4 bg-black hover:bg-stone-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Continue To Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PERSONAL DETAILS FORM */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-black uppercase text-black">Your Details</h1>
                    <p className="text-xs text-stone-700">Enter your information to finalize your application.</p>
                  </div>

                  <div className="space-y-4">
                    {/* Name & Surname */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-700">Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="w-full px-4 py-3 text-xs bg-stone-50 border border-stone-300 rounded-xl text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-700">Surname *</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="w-full px-4 py-3 text-xs bg-stone-50 border border-stone-300 rounded-xl text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    {/* Email & Age */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-700">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 text-xs bg-stone-50 border border-stone-300 rounded-xl text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-700">Age *</label>
                        <input
                          type="number"
                          name="age"
                          required
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="28"
                          className="w-full px-4 py-3 text-xs bg-stone-50 border border-stone-300 rounded-xl text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    {/* Height & Weight (Optional) */}
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-200">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                          Height (cm) <span className="font-normal text-stone-400">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="height"
                          value={formData.height}
                          onChange={handleInputChange}
                          placeholder="e.g. 178"
                          className="w-full px-4 py-3 text-xs bg-stone-50 border border-stone-300 rounded-xl text-black focus:outline-none focus:border-black"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                          Weight (kg) <span className="font-normal text-stone-400">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                          placeholder="e.g. 75"
                          className="w-full px-4 py-3 text-xs bg-stone-50 border border-stone-300 rounded-xl text-black focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Navigation Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-4 bg-stone-100 hover:bg-stone-200 text-black font-black text-xs uppercase tracking-wider rounded-xl transition-colors border border-stone-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 py-4 bg-black hover:bg-stone-800 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <Check className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-stone-300 text-stone-600 text-xs">
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