import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Sparkles, CheckCircle2, XCircle, 
  Target, Filter, Lightbulb, Zap, RotateCcw, 
  BookOpenCheck, ArrowRight, ArrowLeft,
  AlertCircle, Grid, ChevronRight
} from 'lucide-react';
import { READING_CHAPTERS_BOOK, ReadingChapter } from '../../data/reading/readingChaptersData';

export const SatReadingSectionExplorer: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [activeMainTab, setActiveMainTab] = useState<'theory' | 'exercises'>('theory');
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  
  // Track user answers
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const currentChapter: ReadingChapter = 
    READING_CHAPTERS_BOOK.find((ch) => ch.id === selectedChapterId) || READING_CHAPTERS_BOOK[0];

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
    setShowExplanation((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleResetCurrentAnswers = () => {
    setUserAnswers({});
    setShowExplanation({});
  };

  // Stats
  const totalChapterQuestions = currentChapter.exercises.length;
  const currentExercise = currentChapter.exercises[exerciseIndex] || currentChapter.exercises[0];

  const totalAnswered = currentChapter.exercises.filter((q) => userAnswers[q.id] !== undefined).length;
  const totalCorrect = currentChapter.exercises.filter((q) => userAnswers[q.id] === q.correctAnswer).length;

  return (
    <div id="sat-reading-section-explorer" className="space-y-6 text-slate-900 min-h-[600px]">
      <AnimatePresence mode="wait">
        {!selectedChapterId ? (
          /* ALL CHAPTERS GRID VIEW (MATCHING MATH CHAPTERS DESIGN) */
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Simple Clean Header */}
            <div className="border-b border-slate-200 pb-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                Available Reading Chapters
              </h2>
            </div>

            {/* White Topic Cards Grid - STRICTLY TWO PER ROW ON ALL SCREENS (grid-cols-2) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {READING_CHAPTERS_BOOK.map((chapter) => {
                const totalQuestions = chapter.exercises.length;

                return (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setSelectedChapterId(chapter.id);
                      setActiveMainTab('theory');
                      setExerciseIndex(0);
                    }}
                    className="bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-400 rounded-2xl p-3.5 sm:p-5 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group relative overflow-hidden shadow-xs hover:shadow-md"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                          Ch. {chapter.chapterNumber}
                        </span>
                        <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-500 font-bold">
                          <span>{chapter.sectionsCount} Sec</span>
                          {totalQuestions > 0 && (
                            <span className="text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200">
                              {totalQuestions} Qs
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-xs sm:text-lg font-black text-slate-950 group-hover:text-slate-800 transition-colors tracking-tight line-clamp-2 leading-tight">
                        {chapter.title}
                      </h3>

                      <p className="text-[10px] sm:text-xs text-slate-500 leading-snug font-medium line-clamp-2">
                        {chapter.introduction}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs font-black text-slate-800 group-hover:text-zinc-800">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-800" />
                        <span>Open Page</span>
                      </span>
                      <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 transition-all group-hover:bg-slate-200">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* SELECTED CHAPTER DETAIL PAGE VIEW (CORE THEORY & EXERCISES TABS) */
          <motion.div
            key="detail-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Top Bar: Back to Topics Button */}
            <div className="flex items-center justify-between bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-xs">
              <button
                onClick={() => setSelectedChapterId(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-900 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-slate-800" />
                <span>← Back to All Reading Topics</span>
              </button>

              <span className="text-xs font-black text-slate-800 bg-white uppercase tracking-wider px-3.5 py-1 rounded-full border border-slate-200 shadow-xs">
                Chapter {currentChapter.chapterNumber} of {READING_CHAPTERS_BOOK.length}
              </span>
            </div>

            {/* MODULE INTRO CARD WITH SUBTITLE & QUOTE */}
            <div className="bg-white border-2 border-slate-900 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <span className="px-3 py-1 rounded-full bg-slate-950 text-white font-black text-xs uppercase tracking-wider">
                  Ch. {currentChapter.chapterNumber} • {currentChapter.title}
                </span>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                    {currentChapter.sectionsCount} Sections
                  </span>
                  <span className="bg-emerald-50 border border-emerald-300 text-emerald-900 px-2.5 py-0.5 rounded-full font-black">
                    {totalChapterQuestions} Practice Qs
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {currentChapter.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {currentChapter.introduction}
                </p>
              </div>

              <p className="text-xs sm:text-sm font-semibold italic text-slate-700 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                "Failure is making 100 mistakes during the test. Success is making 1000 mistakes before the test."
              </p>
            </div>

            {/* TAB BAR WITH 2 STYLED BUTTONS */}
            <div className="bg-white border-2 border-slate-900 p-2 rounded-2xl shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => setActiveMainTab('theory')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                  activeMainTab === 'theory'
                    ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <div>
                  <span className="text-xs font-black tracking-tight block">
                    1. Core Theory, Strategy & Worked Examples
                  </span>
                  <span className="text-[10px] opacity-80 block font-medium">
                    Masterclass Theory & Interleaved Demonstration Walkthroughs
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveMainTab('exercises')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                  activeMainTab === 'exercises'
                    ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <Target className="w-4 h-4 shrink-0" />
                <div>
                  <span className="text-xs font-black tracking-tight block">
                    2. Practice Exercises ({totalChapterQuestions} Qs)
                  </span>
                  <span className="text-[10px] opacity-80 block font-medium">
                    Interactive Test Engine with Instant Verification
                  </span>
                </div>
              </button>
            </div>

            {/* TAB 1: CORE THEORY & WORKED EXAMPLES */}
            {activeMainTab === 'theory' && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                {/* SECTION 1: CORE CONCEPTUAL THEORY & BUILDING BLOCKS */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-8 shadow-xs">
                  {/* CHAPTER HEADER & PHILOSOPHY */}
                  <div className="border-b border-slate-100 pb-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-xs font-bold">
                        <BookOpen className="w-3.5 h-3.5 text-slate-950" />
                        <span>Academic Specialist Masterclass</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-950 text-white font-mono text-xs font-bold">
                        Chapter {currentChapter.chapterNumber} Complete
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                      {currentChapter.title}: Foundational Principles & Logic
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium max-w-4xl">
                      {currentChapter.introduction}
                    </p>
                  </div>

                  {/* THE SAT MENTAL MODEL: NON-SUBJECTIVE LOGIC */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 space-y-3">
                    <div className="flex items-center gap-2 text-slate-950 font-black text-sm uppercase tracking-wider">
                      <Target className="w-4 h-4 text-slate-950" />
                      <span>The SAT Reading Mental Model: Objective Non-Subjective Standardization</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      On the Digital SAT, reading comprehension is <strong>never a matter of subjective interpretation or real-world assumptions</strong>. College Board questions are built around strict mathematical precision: there is <strong>strictly one choice that is 100% supported by the text</strong>, and three choices that are demonstrably flawed.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-1">
                        <span className="font-bold text-slate-950 block">1. The 0.5-Step Rule</span>
                        <p className="text-slate-600">The correct answer requires at most a conservative 0.5-step restatement. If a choice requires a multi-step logical leap, it is a speculative trap.</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-1">
                        <span className="font-bold text-slate-950 block">2. Context Vector Constraint</span>
                        <p className="text-slate-600">A target word's meaning is locked in place by surrounding transition words, semicolons, dashes, and tone anchors.</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-1">
                        <span className="font-bold text-slate-950 block">3. Strict Textual Proof</span>
                        <p className="text-slate-600">Ask: "Can I point my finger directly at the exact phrase that proves this choice?" If you cannot point at evidence, eliminate it.</p>
                      </div>
                    </div>
                  </div>

                  {/* CORE TECHNIQUES & RULES */}
                  <div className="space-y-4">
                    <h4 className="text-base font-black text-slate-950 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-slate-950" />
                      Core Masterclass Techniques
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentChapter.coreTechniques.map((tech, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                          <span className="font-black text-slate-950 text-xs sm:text-sm block">
                            {idx + 1}. {tech.name}
                          </span>
                          <p className="text-xs text-slate-700 font-medium">{tech.summary}</p>
                          <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-[11px] text-slate-600">
                            <strong className="text-slate-900 block">How to Apply:</strong>
                            {tech.howToApply}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CONTEXT CLUE & TRIGGER RULES */}
                  {currentChapter.contextClueRules && currentChapter.contextClueRules.length > 0 && (
                    <div className="space-y-4 pt-2">
                      <h4 className="text-base font-black text-slate-950 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-slate-950" />
                        Trigger & Context Clue Mechanics
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentChapter.contextClueRules.map((rule, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1.5 text-xs">
                            <span className="font-bold text-slate-950 block">{rule.triggerType}</span>
                            <p className="text-slate-700">{rule.description}</p>
                            <p className="text-[11px] text-slate-500 font-mono bg-white p-2 rounded-lg border border-slate-200">
                              {rule.example}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* SECTION 2: INTERLEAVED WORKED DEMONSTRATIONS */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="text-xl font-black text-slate-950 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-slate-950" />
                      Interleaved Worked Demonstration Walkthroughs
                    </h3>
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {currentChapter.demonstrations.length} Walkthroughs
                    </span>
                  </div>

                  <div className="space-y-8">
                    {currentChapter.demonstrations.map((demo) => (
                      <div key={demo.id} className="bg-white border-2 border-slate-900 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-slate-950 text-white font-black text-xs flex items-center justify-center">
                              #{demo.demoNumber}
                            </span>
                            <span className="font-black text-slate-950 text-xs uppercase tracking-wider">
                              {demo.subskill}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold">
                              {demo.difficulty}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-[11px] font-bold">
                              Technique: {demo.nextGenTechnique}
                            </span>
                          </div>
                        </div>

                        {/* Passage Box */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 font-serif text-sm md:text-base text-slate-800 leading-relaxed">
                          <span className="font-sans text-xs font-bold uppercase tracking-wide text-slate-600 block">
                            Passage Text
                          </span>
                          <p className="whitespace-pre-line">{demo.passage}</p>
                        </div>

                        {/* Question Text & Options */}
                        <div className="space-y-4">
                          <h4 className="font-bold text-slate-950 text-sm md:text-base">
                            {demo.questionText}
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {demo.options.map((option, optIdx) => {
                              const isCorrect = optIdx === demo.correctAnswer;
                              return (
                                <div
                                  key={optIdx}
                                  className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-medium flex items-center justify-between ${
                                    isCorrect
                                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-300'
                                      : 'bg-slate-50 border-slate-200 text-slate-700'
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                      isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                                    }`}>
                                      {String.fromCharCode(65 + optIdx)}
                                    </span>
                                    <span>{option}</span>
                                  </div>
                                  {isCorrect && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Strategic Takeaway & Rationale */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 text-xs">
                          <div className="bg-slate-950 text-white p-3.5 rounded-xl space-y-1">
                            <span className="font-bold block uppercase tracking-wider text-[10px] text-slate-400">
                              Key Strategic Takeaway
                            </span>
                            <p className="font-medium text-slate-200">{demo.strategicTakeaway}</p>
                          </div>

                          <div className="space-y-2">
                            <span className="font-bold text-slate-950 block">Passage Deconstruction:</span>
                            <p className="text-slate-700 leading-relaxed">{demo.explanation.passageDeconstruction}</p>
                          </div>

                          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 space-y-1">
                            <span className="font-bold text-emerald-950 block">Correct Choice Derivation:</span>
                            <p className="text-emerald-900 leading-relaxed">{demo.explanation.correctReasoning}</p>
                          </div>

                          {demo.explanation.distractorAnalysis && (
                            <div className="space-y-2 pt-2">
                              <span className="font-bold text-slate-950 block">Distractor Trap Classification:</span>
                              <div className="grid grid-cols-1 gap-2">
                                {demo.explanation.distractorAnalysis.map((dist, dIdx) => (
                                  <div key={dIdx} className="bg-white border border-slate-200 rounded-xl p-3 space-y-1">
                                    <div className="flex items-center justify-between font-bold text-slate-900">
                                      <span>Choice {String.fromCharCode(65 + dist.optionIndex)}: "{dist.optionText}"</span>
                                      <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-mono font-bold">
                                        Trap: {dist.trapType}
                                      </span>
                                    </div>
                                    <p className="text-slate-600">{dist.whyIncorrect}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: PRACTICE EXERCISES ENGINE */}
            {activeMainTab === 'exercises' && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                {/* Score Header */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs text-xs font-bold">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-600">
                      Answered: <strong className="text-slate-950">{totalAnswered}/{totalChapterQuestions}</strong>
                    </span>
                    <span className="text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Score: <strong>{totalCorrect}/{totalAnswered} ({totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0}%)</strong>
                    </span>
                  </div>

                  <button
                    onClick={handleResetCurrentAnswers}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Practice Answers</span>
                  </button>
                </div>

                {/* Quick Question Selector */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2 shadow-xs">
                  <span className="text-xs font-bold text-slate-700 block">Question Navigator:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentChapter.exercises.map((q, idx) => {
                      const isCurrent = exerciseIndex === idx;
                      const hasAns = userAnswers[q.id] !== undefined;
                      const isCorrect = userAnswers[q.id] === q.correctAnswer;

                      let btnBg = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                      if (hasAns) {
                        btnBg = isCorrect ? 'bg-emerald-600 text-white font-bold' : 'bg-rose-600 text-white font-bold';
                      }
                      if (isCurrent) {
                        btnBg += ' ring-2 ring-slate-950 ring-offset-1 font-black';
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => setExerciseIndex(idx)}
                          className={`w-8 h-8 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-center ${btnBg}`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Exercise Card */}
                {currentExercise ? (
                  <div className="bg-white border-2 border-slate-950 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-slate-950 text-white font-bold text-xs">
                          Question {exerciseIndex + 1} of {currentChapter.exercises.length}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-bold text-xs">
                          {currentExercise.subskill}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs">
                        {currentExercise.difficulty}
                      </span>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 font-serif text-sm md:text-base text-slate-800 leading-relaxed">
                      <span className="font-sans text-xs font-bold uppercase tracking-wide text-slate-600 block">
                        Passage Text
                      </span>
                      <p className="whitespace-pre-line">{currentExercise.passage}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-950 text-sm md:text-base">
                        {currentExercise.questionText}
                      </h4>

                      <div className="grid grid-cols-1 gap-3">
                        {currentExercise.options.map((opt, optIdx) => {
                          const userSelected = userAnswers[currentExercise.id] === optIdx;
                          const hasAnswered = userAnswers[currentExercise.id] !== undefined;
                          const isCorrectChoice = currentExercise.correctAnswer === optIdx;

                          let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
                          if (hasAnswered) {
                            if (isCorrectChoice) {
                              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400';
                            } else if (userSelected) {
                              btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-bold ring-1 ring-rose-400';
                            } else {
                              btnStyle = 'bg-slate-50 border-slate-200 text-slate-600 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(currentExercise.id, optIdx)}
                              className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                                  hasAnswered && isCorrectChoice 
                                    ? 'bg-emerald-600 text-white' 
                                    : hasAnswered && userSelected 
                                    ? 'bg-rose-600 text-white' 
                                    : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span className="text-xs md:text-sm">{opt}</span>
                              </div>

                              {hasAnswered && isCorrectChoice && (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                              )}
                              {hasAnswered && userSelected && !isCorrectChoice && (
                                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Nav controls */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <button
                        disabled={exerciseIndex === 0}
                        onClick={() => setExerciseIndex((prev) => Math.max(0, prev - 1))}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-800 font-bold text-xs transition-all cursor-pointer"
                      >
                        ← Previous
                      </button>

                      <button
                        onClick={() => setShowExplanation((prev) => ({ ...prev, [currentExercise.id]: !prev[currentExercise.id] }))}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        {showExplanation[currentExercise.id] ? 'Hide Solution' : 'Show Solution & Breakdown'}
                      </button>

                      <button
                        disabled={exerciseIndex === currentChapter.exercises.length - 1}
                        onClick={() => setExerciseIndex((prev) => Math.min(currentChapter.exercises.length - 1, prev + 1))}
                        className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-black disabled:opacity-40 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1"
                      >
                        Next →
                      </button>
                    </div>

                    {/* Solution breakdown */}
                    {showExplanation[currentExercise.id] && (
                      <div className="border-t border-slate-200 pt-6 space-y-4 text-xs">
                        <div className="bg-emerald-50/80 border border-emerald-300 rounded-2xl p-4 space-y-1.5">
                          <span className="font-bold text-emerald-950 block flex items-center gap-1.5 text-xs">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Correct Choice: Choice {String.fromCharCode(65 + currentExercise.correctAnswer)}
                          </span>
                          <p className="text-slate-800 leading-relaxed">{currentExercise.explanation.correctReasoning}</p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1">
                          <span className="font-bold text-slate-950 block">Passage Context & Sentence Deconstruction:</span>
                          <p className="text-slate-700 leading-relaxed">{currentExercise.explanation.passageDeconstruction}</p>
                        </div>

                        {currentExercise.explanation.distractorAnalysis && currentExercise.explanation.distractorAnalysis.length > 0 && (
                          <div className="space-y-2 pt-1">
                            <span className="font-bold text-slate-950 block">Masterclass Distractor Analysis (Why Alternative Options Fail):</span>
                            <div className="grid grid-cols-1 gap-2">
                              {currentExercise.explanation.distractorAnalysis.map((dist, dIdx) => (
                                <div key={dIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
                                  <div className="flex items-center justify-between font-bold text-slate-900">
                                    <span>Choice {String.fromCharCode(65 + dist.optionIndex)}: "{dist.optionText}"</span>
                                    <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-mono font-bold">
                                      Trap: {dist.trapType}
                                    </span>
                                  </div>
                                  <p className="text-slate-600">{dist.whyIncorrect}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 text-slate-500">
                    No exercise questions found for this module.
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
