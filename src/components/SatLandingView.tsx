import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, ChevronRight, Target } from 'lucide-react';

interface SatLandingViewProps {
  onBackToHome: () => void;
  onSelectIntro: () => void;
  onSelectLearning: (category?: 'reading' | 'writing' | 'math' | 'drills') => void;
}

export const SatLandingView: React.FC<SatLandingViewProps> = ({
  onBackToHome,
  onSelectIntro,
  onSelectLearning,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSelectOption = (category: 'reading' | 'writing' | 'math' | 'drills') => {
    setIsPopupOpen(false);
    onSelectLearning(category);
  };

  return (
    <div className="min-h-[75vh] flex flex-col justify-between py-6 sm:py-10 relative">
      {/* Back Button */}
      <div>
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600" />
          Back to Home
        </button>
      </div>

      {/* Main Centered Content */}
      <div className="my-auto max-w-3xl mx-auto w-full text-center py-8">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Eyebrow Tag */}
        <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[11px] font-extrabold tracking-[0.2em] text-slate-600 uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          DIGITAL SAT PREPARATION
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-3">
          Select Your SAT Route
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-10">
          Learn the official College Board Digital SAT format or jump right into practice drills.
        </p>

        {/* Two Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto">
          {/* Option 1: Introduction to SAT */}
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSelectIntro}
            className="bg-white text-slate-900 border border-slate-200/80 rounded-[28px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#4338ca] hover:text-white active:bg-[#3730a3] hover:border-[#4338ca] hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[220px] group relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 group-hover:bg-white/20 flex items-center justify-center mb-4 text-3xl transition-all shadow-sm">
              📖
            </div>
            <span className="text-base sm:text-lg font-extrabold text-slate-950 group-hover:text-white tracking-tight transition-colors">
              Introduction to SAT
            </span>
            <span className="text-xs text-slate-500 group-hover:text-indigo-200 transition-colors mt-1.5 font-medium">
              Format, Modules & Scoring Guide
            </span>
          </motion.div>

          {/* Option 2: Start Learning - Opens Popup Modal */}
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-slate-900 border border-slate-200/80 rounded-[28px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#4338ca] hover:text-white active:bg-[#3730a3] hover:border-[#4338ca] hover:shadow-xl cursor-pointer transition-all flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[220px] group relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-white/20 flex items-center justify-center mb-4 text-3xl transition-all shadow-sm">
              🚀
            </div>
            <span className="text-base sm:text-lg font-extrabold text-slate-950 group-hover:text-white tracking-tight transition-colors">
              Start Learning
            </span>
            <span className="text-xs text-slate-500 group-hover:text-indigo-200 transition-colors mt-1.5 font-medium">
              Practice Drills, Flashcards & Tools
            </span>
          </motion.div>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center text-xs text-slate-400">
        College Board Digital SAT Aligned • Free Practice
      </div>

      {/* POPUP MODAL WITH ONLY 4 OPTIONS */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200 rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative z-10 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Icon */}
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-black uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5 text-indigo-600" />
                  Digital SAT Core Modules
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Select Learning Option
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Choose one of the 4 official Digital SAT modules below to launch your practice session.
                </p>
              </div>

              {/* 4 OPTIONS IN A GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
                {/* OPTION 1: READING */}
                <button
                  onClick={() => handleSelectOption('reading')}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📖</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase">
                        54 Qs Target
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-950 group-hover:text-indigo-900 tracking-tight">
                      1. Reading
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Craft & structure, passage analysis, inferences & context vocabulary.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Start Reading</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 2: WRITING */}
                <button
                  onClick={() => handleSelectOption('writing')}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">✍️</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase">
                        Grammar Rules
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-950 group-hover:text-indigo-900 tracking-tight">
                      2. Writing
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Standard English conventions, punctuation, sentence clauses & transitions.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Start Writing</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 3: MATH */}
                <button
                  onClick={() => handleSelectOption('math')}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📐</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase">
                        Master Prep
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-950 group-hover:text-indigo-900 tracking-tight">
                      3. Math
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      College Panda theory, step-by-step solutions, Desmos tricks & 50+ Qs per chapter.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Start Math</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 4: DRILLS */}
                <button
                  onClick={() => handleSelectOption('drills')}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">⚡</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase">
                        Full Practice
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-950 group-hover:text-indigo-900 tracking-tight">
                      4. Drills
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Timed mixed speed drills, 400-1600 Score Predictor & Vocab Flashcards.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Start Speed Drills</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
