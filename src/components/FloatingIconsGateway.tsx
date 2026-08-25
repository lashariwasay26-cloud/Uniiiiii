import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Award, BookOpen, CheckCircle2 } from 'lucide-react';

interface FloatingIconsGatewayProps {
  onOpenScholarships?: () => void;
  onOpenSatPrep?: () => void;
}

export const FloatingIconsGateway: React.FC<FloatingIconsGatewayProps> = ({ onOpenScholarships, onOpenSatPrep }) => {
  return (
    <div id="floating-gateway" className="relative py-8 sm:py-14 px-4 max-w-5xl mx-auto text-center">
      
      {/* Background Soft Ambient Light Glow & Floating Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Animated Ambient Bubbles (Decorative) */}
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="hidden md:flex absolute top-6 left-4 lg:-left-8 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-3.5 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] text-xs font-bold text-slate-800 items-center gap-2 -z-0 pointer-events-none"
      >
        <span className="text-base">🎓</span>
        <span>420+ Global Universities</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
        className="hidden md:flex absolute top-12 right-4 lg:-right-8 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-3.5 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] text-xs font-bold text-slate-800 items-center gap-2 -z-0 pointer-events-none"
      >
        <span className="text-base">💰</span>
        <span>$50M+ In Scholarships</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 2 }}
        className="hidden lg:flex absolute bottom-28 -left-10 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-3.5 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] text-xs font-bold text-slate-800 items-center gap-2 -z-0 pointer-events-none"
      >
        <span className="text-base">🇵🇰</span>
        <span>HEC & Ehsaas Tracks</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 1.5 }}
        className="hidden lg:flex absolute bottom-28 -right-10 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-3.5 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.06)] text-xs font-bold text-slate-800 items-center gap-2 -z-0 pointer-events-none"
      >
        <span className="text-base">✨</span>
        <span>100% Free Guidance</span>
      </motion.div>

      {/* Pill Eyebrow Tag matching design */}
      <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[11px] font-extrabold tracking-[0.2em] text-slate-600 uppercase mb-6 sm:mb-8">
        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
        YOUR GLOBAL EDUCATION ROUTE
      </div>

      {/* Hero Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.08] max-w-3xl mx-auto">
        Your journey to<br />
        <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent">
          the right university
        </span><br />
        starts here.
      </h1>

      {/* Subtitle paragraph */}
      <p className="mt-6 text-slate-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal">
        Discover scholarships, prepare for the SAT, build your application, and find universities that match your goals — all in one place.
      </p>

      {/* Stats Highlight Ribbon */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-600">
        <span className="px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/60 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-indigo-600" /> 420+ Global Universities
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/60 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-emerald-600" /> Fully Funded Grants
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/60 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Digital SAT Prep
        </span>
      </div>

      {/* Interactive Cards Grid */}
      <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-3xl mx-auto">
        
        {/* Card 1: Scholarships */}
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenScholarships}
          className="bg-white text-slate-900 border border-slate-200/80 rounded-[28px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#4338ca] hover:text-white active:bg-[#3730a3] hover:border-[#4338ca] hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[180px] group relative overflow-hidden"
        >
          <div className="w-13 h-13 rounded-2xl bg-indigo-50 group-hover:bg-white/20 flex items-center justify-center mb-3 text-2xl transition-all shadow-sm">
            🎓
          </div>
          <span className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-white tracking-tight transition-colors">
            Scholarships
          </span>
          <span className="text-[11px] text-slate-400 group-hover:text-indigo-200 transition-colors mt-0.5 font-medium">
            10,000+ Grants
          </span>
        </motion.div>

        {/* Card 2: SAT Preparation */}
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenSatPrep}
          className="bg-white text-slate-900 border border-slate-200/80 rounded-[28px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#4338ca] hover:text-white active:bg-[#3730a3] hover:border-[#4338ca] hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[180px] group relative overflow-hidden"
        >
          <div className="w-13 h-13 rounded-2xl bg-blue-50 group-hover:bg-white/20 flex items-center justify-center mb-3 text-2xl transition-all shadow-sm">
            📚
          </div>
          <span className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-white tracking-tight transition-colors">
            SAT Preparation
          </span>
          <span className="text-[11px] text-slate-400 group-hover:text-indigo-200 transition-colors mt-0.5 font-medium">
            Practice Modules
          </span>
        </motion.div>

        {/* Card 3: Pakistani Scholarships */}
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenScholarships}
          className="bg-white text-slate-900 border border-slate-200/80 rounded-[28px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#4338ca] hover:text-white active:bg-[#3730a3] hover:border-[#4338ca] hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[180px] group relative overflow-hidden"
        >
          <div className="w-13 h-13 rounded-2xl bg-emerald-50 group-hover:bg-white/20 flex items-center justify-center mb-3 text-2xl transition-all shadow-sm">
            🇵🇰
          </div>
          <span className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-white tracking-tight transition-colors">
            Pakistani Scholarships
          </span>
          <span className="text-[11px] text-slate-400 group-hover:text-indigo-200 transition-colors mt-0.5 font-medium">
            HEC, Ehsaas, PEEF
          </span>
        </motion.div>

        {/* Card 4: Essay Hub */}
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white text-slate-900 border border-slate-200/80 rounded-[28px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#4338ca] hover:text-white active:bg-[#3730a3] hover:border-[#4338ca] hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[180px] group relative overflow-hidden"
        >
          <div className="w-13 h-13 rounded-2xl bg-amber-50 group-hover:bg-white/20 flex items-center justify-center mb-3 text-2xl transition-all shadow-sm">
            ✍️
          </div>
          <span className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-white tracking-tight transition-colors">
            Essay Hub
          </span>
          <span className="text-[11px] text-slate-400 group-hover:text-indigo-200 transition-colors mt-0.5 font-medium">
            Accepted Examples
          </span>
        </motion.div>

        {/* Card 5: AI Profile Analysis */}
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="col-span-2 sm:col-span-2 lg:col-span-4 bg-gradient-to-r from-white via-indigo-50/30 to-white text-slate-900 border border-slate-200/90 rounded-[28px] p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#4338ca] hover:text-white active:bg-[#3730a3] hover:border-[#4338ca] hover:shadow-xl cursor-pointer transition-all flex items-center justify-center gap-4 text-left min-h-[90px] group"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center shrink-0 transition-all shadow-sm">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-sm sm:text-base font-extrabold text-slate-950 group-hover:text-white block tracking-tight transition-colors">
              AI Profile Analysis & Counselor
            </span>
            <span className="text-xs text-slate-500 group-hover:text-indigo-100 transition-colors">
              Personalized university matching, target score estimation, and admissions guidance.
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};



