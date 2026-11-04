"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, Dumbbell, Flame, Trophy, HeartPulse, ChevronDown, Award, Check, Zap } from "lucide-react";

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

function HyroxLeadSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "HYROX Lead Magnet",
          firstName,
          lastName,
          email,
        }),
      });

      if (res.ok) {
        router.push("/hyrox-thank-you");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#FAF8F5] border-2 border-stone-300 rounded-3xl overflow-hidden shadow-sm grid lg:grid-cols-12 items-center">
          
          {/* Side Photo Column */}
          <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[350px] bg-stone-900">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/pic4.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
              <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded backdrop-blur-sm">
                Limited Time Freebie
              </span>
            </div>
          </div>

          {/* Content & Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black leading-none">
              Free 2-week HYROX Program
            </h2>
            
            {/* 2 Benefits underneath */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0" />
                <span>Builds peak aerobic engine & endurance capacity</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0" />
                <span>Engineered for functional strength & stamina</span>
              </div>
            </div>

            {/* Form Fields Stacked Underneath */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-stone-600 mb-1">First Name</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 bg-white text-black rounded-xl border border-stone-300 text-xs font-medium focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-stone-600 mb-1">Last Name</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 bg-white text-black rounded-xl border border-stone-300 text-xs font-medium focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-stone-600 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white text-black rounded-xl border border-stone-300 text-xs font-medium focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-black text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-stone-800 transition-colors shadow-md disabled:opacity-50"
              >
                {loading ? "Sending..." : "Download Free Program"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Where do the in-person sessions happen?",
      a: "In-person sessions take place at Planet Fitness Durbanville, Cape Town. Times and days are agreed upon when you get started.",
    },
    {
      q: "I am a complete beginner, is this for me?",
      a: "Yes, absolutely! Every program is customized to your current fitness level and movement capability.",
    },
    {
      q: "How do the check-ins work?",
      a: "Every week you submit your logged workouts, progress photos, and body metric updates through your Align365 account for personal feedback.",
    },
    {
      q: "How does billing work?",
      a: "Coaching packages are billed on a simple monthly retainer basis via card payment.",
    },
    {
      q: "Is this medical advice?",
      a: "No. This coaching is for physical conditioning, fitness, and strength training. Please consult a physician before starting any new exercise program.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-black font-sans selection:bg-stone-300 selection:text-black">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Align365Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-black">
            <Link href="/" className="text-black font-black underline underline-offset-4">Home</Link>
            <Link href="/packages" className="hover:text-stone-600 transition-colors">Packages</Link>
            <Link href="/apply" className="hover:text-stone-600 transition-colors">Apply Now</Link>
          </div>

          <div>
            <Link
              href="/apply"
              className="px-5 py-2.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              Choose Your Path <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[88vh] flex items-center justify-center overflow-hidden bg-black">
        <video
          ref={(el) => { if (el) el.muted = true; }}
          className="absolute inset-0 h-full w-full object-cover"
          src="/vid1.mp4"
          poster="/vid1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-black bg-white px-4 py-1.5 rounded-full shadow-lg">
            Personal Trainer & Online Coach ·
          </span>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Transform your training <br className="hidden sm:inline" />
            <span className="text-white underline decoration-stone-300">Elevate your performance</span>
            </h1>
          <p className="text-stone-100 text-sm sm:text-base max-w-2xl mx-auto font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Strength and conditioning coaching online and in-person with structured programming. Get a clear plan for your fitness journey.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="px-8 py-4 bg-black text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-xl border border-white/20"
            >
              Choose Your Path <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About & Intro Section */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black text-black uppercase tracking-widest bg-stone-200 px-3 py-1 rounded">Elevate Your Journey</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Personalised With Professional Expertise
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              Welcome to a conditioning experience presented by Goosain Matthews, an Exercise Science and Sports Conditioning specialist with over 10 years of professional experience. Whether you require structured in-person training at Planet Fitness or remote hybrid programming, your routines are crafted around your exact goals and lifestyle.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#FAF8F5] border border-stone-300 rounded-2xl space-y-3">
              <Dumbbell className="w-8 h-8 text-black" />
              <h3 className="font-bold uppercase text-sm text-black">Weight Loss & Tone</h3>
              <p className="text-xs text-stone-700">Sustainable fat loss through strategic training and macro guidance.</p>
            </div>
            <div className="p-6 bg-[#FAF8F5] border border-stone-300 rounded-2xl space-y-3">
              <Trophy className="w-8 h-8 text-black" />
              <h3 className="font-bold uppercase text-sm text-black">Muscle Building</h3>
              <p className="text-xs text-stone-700">Hypertrophy programs designed for maximum muscle fiber recruitment.</p>
            </div>
            <div className="p-6 bg-[#FAF8F5] border border-stone-300 rounded-2xl space-y-3">
              <Flame className="w-8 h-8 text-black" />
              <h3 className="font-bold uppercase text-sm text-black">Sports Conditioning</h3>
              <p className="text-xs text-stone-700">Hyrox and functional sports performance conditioning.</p>
            </div>
            <div className="p-6 bg-[#FAF8F5] border border-stone-300 rounded-2xl space-y-3">
              <HeartPulse className="w-8 h-8 text-black" />
              <h3 className="font-bold uppercase text-sm text-black">Injury Rehabilitation</h3>
              <p className="text-xs text-stone-700">Biomechanically sound movement patterns and rehab protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-24 text-white overflow-hidden bg-stone-950">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: "url('/pic3.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-white bg-white/20 px-3 py-1 rounded">Seamless Process</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mt-4 mb-12">How it works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm space-y-3">
              <span className="text-white font-black text-xl">01</span>
              <h3 className="text-lg font-bold text-white uppercase">Start with a free session</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                A 30-minute conversation and movement check, so your plan is built around your goal.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm space-y-3">
              <span className="text-white font-black text-xl">02</span>
              <h3 className="text-lg font-bold text-white uppercase">Get your plan</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Your programme lives in your Align365 account, so you always know what to do and can log every set.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm space-y-3">
              <span className="text-white font-black text-xl">03</span>
              <h3 className="text-lg font-bold text-white uppercase">Train with support</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Fixed in-person days, online training days in between, and a weekly check-in so nothing slips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free HYROX Lead Magnet Funnel Section */}
      <HyroxLeadSection />

      {/* Meet Your Coach Section */}
      <section className="py-24 border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative h-[700px] rounded-3xl overflow-hidden border-2 border-stone-300 shadow-xl bg-stone-900 flex items-end justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-top opacity-100"
                style={{ backgroundImage: "url('/pic2.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="relative z-10 p-6 text-center w-full bg-black/90 backdrop-blur-md border-t border-white/10">
                <h3 className="text-lg font-black uppercase text-white tracking-wide">Goosain Matthews</h3>
                <p className="text-xs text-white font-bold uppercase tracking-wider mt-0.5">Exercise Science & Sports Conditioner</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-black text-black uppercase tracking-widest bg-stone-200 px-3 py-1 rounded">Expert Leadership</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-black mt-2">Meet your coach</h2>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed">
              Exercise Science and Sports Conditioning specialist with over 10 years of hands-on expertise in strength and conditioning, injury prevention and rehabilitation. I help people of all ages and abilities to build strength, improve fitness and move better.
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-black uppercase text-black tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-black" /> Professional Qualifications & Specialties
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-2.5 text-xs font-bold text-black">
                  <Check className="w-4 h-4 text-black" /> Exercise Science
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-2.5 text-xs font-bold text-black">
                  <Check className="w-4 h-4 text-black" /> Sports Conditioning
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-2.5 text-xs font-bold text-black">
                  <Check className="w-4 h-4 text-black" /> Kettlebell Training
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-2.5 text-xs font-bold text-black">
                  <Check className="w-4 h-4 text-black" /> Hyrox
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-2.5 text-xs font-bold text-black">
                  <Check className="w-4 h-4 text-black" /> Group Exercise
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-2.5 text-xs font-bold text-black">
                  <Check className="w-4 h-4 text-black" /> Nutrition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Workouts Banner */}
      <section className="py-20 bg-white border-t border-stone-200 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-black uppercase text-black">Experience Workouts That Help You Achieve</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-4 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
              <span className="text-xs font-bold uppercase text-black">Improved Physical Health</span>
            </div>
            <div className="p-4 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
              <span className="text-xs font-bold uppercase text-black">Weight Management</span>
            </div>
            <div className="p-4 bg-[#FAF8F5] border border-stone-300 rounded-xl flex items-center gap-3 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
              <span className="text-xs font-bold uppercase text-black">Enhanced Confidence</span>
            </div>
          </div>
          <div className="pt-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-stone-800 transition-colors shadow"
            >
              View Packages & Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Questions / FAQ Accordion Section with Background Image */}
      <section id="faq" className="relative py-24 text-white overflow-hidden bg-black isolate border-t border-stone-800">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100 z-0"
          style={{ backgroundImage: "url('/pic4.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/85 to-black/95 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-black bg-white px-4 py-1.5 rounded-full mb-4 shadow">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white mb-8 tracking-tight drop-shadow">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-stone-800 bg-black/50 backdrop-blur-md border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {faqs.map((item, idx) => (
                <details key={idx} className="group py-4 first:pt-0 last:pb-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm sm:text-base font-bold text-white hover:text-stone-300 transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-3">
                      <span className="text-stone-400 font-normal">–</span> {item.q}
                    </span>
                    <ChevronDown className="h-4 w-4 text-stone-400 transition-transform duration-300 group-open:rotate-180 group-open:text-white flex-shrink-0" />
                  </summary>
                  <p className="mt-3 pb-2 pl-6 text-xs sm:text-sm leading-relaxed text-stone-300 font-medium">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
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