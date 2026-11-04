import Link from "next/link";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";

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

export default function HyroxThankYouPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-black font-sans flex flex-col justify-between selection:bg-stone-300 selection:text-black">
      {/* Navigation Header */}
      <nav className="bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Align365Logo />
          </Link>
          <Link
            href="/apply"
            className="px-5 py-2.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-sm"
          >
            Apply for Coaching <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-20 text-center space-y-8 my-auto">
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-stone-600 bg-stone-200 px-3 py-1 rounded">
            Success!
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
            Your Free Program is Ready
          </h1>
          <p className="text-stone-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We’ve securely saved your details and sent a copy of the **2-Week HYROX & Hybrid Training System** directly to your email inbox. You can also download it right here below.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/downloads/align365-2week-hyrox.pdf"
            download
            className="px-8 py-4 bg-black text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2 shadow-xl"
          >
            <Download className="w-4 h-4" /> Download PDF Now
          </a>
          <Link
            href="/"
            className="px-8 py-4 bg-white border border-stone-300 text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-stone-100 transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
          >
            Return Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-stone-200 text-stone-600 text-xs text-center">
        <div>© 2026 Align365 · All rights reserved</div>
      </footer>
    </div>
  );
}