import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpenCheck, CheckCircle2, XCircle, Calculator, Sparkles, HelpCircle, BookOpen, ChevronRight, ArrowLeft, Target, ChevronDown, ChevronUp, X, Grid, Layers, Compass, TrendingUp, Sliders } from 'lucide-react';
import { SAT_QUESTIONS, SAT_FLASHCARDS, SAT_FORMULAS } from '../../data/satData';
import { SatQuestion, SatFlashcard } from '../../types';
import { SatReadingSectionExplorer } from '../reading/SatReadingSectionExplorer';
import { SatWritingSectionExplorer } from '../writing/SatWritingSectionExplorer';
import { SatMathSectionExplorer } from '../math/SatMathSectionExplorer';
import { SatMathStatisticsChapter } from '../math/SatMathStatisticsChapter';

interface SatPreparationHubProps {
  initialCategory?: 'reading' | 'writing' | 'math' | 'drills' | 'stats';
  onBackToHome?: () => void;
}

export type MainCategory = 'reading' | 'writing' | 'math' | 'drills' | 'stats';

export const SatPreparationHub: React.FC<SatPreparationHubProps> = ({
  initialCategory = 'reading',
  onBackToHome,
}) => {
  const [activeCategory, setActiveCategory] = useState<MainCategory>(initialCategory);
  const [isOptionPopupOpen, setIsOptionPopupOpen] = useState(false);

  // Sync if initialCategory prop changes
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  // Practice / Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  // Sub-tools for Drills & Reading
  const [drillsSubView, setDrillsSubView] = useState<'quiz' | 'calculator' | 'flashcards'>('quiz');
  const [readingSubView, setReadingSubView] = useState<'framework' | 'quiz'>('framework');

  // Flashcards State
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // SAT Score Predictor State
  const [rwScore, setRwScore] = useState<number>(680);
  const [mathScore, setMathScore] = useState<number>(720);

  // Filter questions based on activeCategory
  const getFilteredQuestions = (): SatQuestion[] => {
    if (activeCategory === 'reading') {
      return SAT_QUESTIONS.filter((q) => q.section === 'Reading' || q.section === 'Reading & Writing');
    }
    if (activeCategory === 'writing') {
      return SAT_QUESTIONS.filter((q) => q.section === 'Writing' || q.section === 'Reading & Writing');
    }
    // Drills -> All questions / mixed
    return SAT_QUESTIONS;
  };

  const filteredQuestions = getFilteredQuestions();
  const safeQuestionIndex = currentQuestionIndex % (filteredQuestions.length || 1);
  const currentQuestion: SatQuestion | undefined = filteredQuestions[safeQuestionIndex];
  const currentFlashcard: SatFlashcard = SAT_FLASHCARDS[currentFlashcardIndex % SAT_FLASHCARDS.length];

  const handleSelectCategoryFromModal = (category: MainCategory) => {
    setActiveCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setIsOptionPopupOpen(false);
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted || !currentQuestion) return;
    setIsAnswerSubmitted(true);
    setAnsweredCount((prev) => prev + 1);
    if (selectedOption === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % (filteredQuestions.length || 1));
  };

  const totalScore = rwScore + mathScore;
  const getPercentile = (total: number) => {
    if (total >= 1500) return 'Top 1% (99th Percentile - Ivy League Target)';
    if (total >= 1400) return 'Top 5% (95th Percentile - Top 30 Universities)';
    if (total >= 1300) return 'Top 15% (85th Percentile - Strong Global Target)';
    if (total >= 1200) return 'Top 25% (75th Percentile - Competitive Merit)';
    return 'Good Baseline Score - Focus on Reading or Writing Drills';
  };

  return (
    <div id="sat-prep-hub" className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Top Bar: Back Button & Module Selector Popup Launcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {onBackToHome ? (
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-slate-900" />
            Back to Options
          </button>
        ) : <div />}

        <div className="flex items-center gap-2">
          {/* Current Active Category Pill */}
          <span className="px-3.5 py-1.5 rounded-full bg-black border border-black text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
            {activeCategory === 'reading' && '📖 1. Reading'}
            {activeCategory === 'writing' && '✍️ 2. Writing'}
            {activeCategory === 'math' && '📐 3. Math'}
            {activeCategory === 'drills' && '⚡ 4. Drills'}
            {activeCategory === 'stats' && '📊 5. Advanced Stats'}
          </span>

          {/* Popup Modal Launcher Button */}
          <button
            onClick={() => setIsOptionPopupOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            <Grid className="w-4 h-4 text-white" />
            <span>Switch Option</span>
          </button>
        </div>
      </div>

      {/* READING SECTION FRAMEWORK EXPLORER */}
      {activeCategory === 'reading' && (
        <SatReadingSectionExplorer />
      )}

      {/* WRITING SECTION EXPLORER */}
      {activeCategory === 'writing' && (
        <SatWritingSectionExplorer />
      )}

      {/* MATH SECTION EXPLORER */}
      {activeCategory === 'math' && (
        <SatMathSectionExplorer />
      )}

      {/* ADVANCED STATISTICS HANDBOOK & LAB */}
      {activeCategory === 'stats' && (
        <SatMathStatisticsChapter />
      )}

      {/* DRILLS SUB-TABS: SPEED QUIZ, SCORE PREDICTOR & VOCAB FLASHCARDS */}
      {activeCategory === 'drills' && (
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 text-xs font-bold">
          <button
            onClick={() => setDrillsSubView('quiz')}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer text-center ${
              drillsSubView === 'quiz' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-200/60'
            }`}
          >
            ⚡ Speed Practice
          </button>
          <button
            onClick={() => setDrillsSubView('calculator')}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer text-center ${
              drillsSubView === 'calculator' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-200/60'
            }`}
          >
            📊 Score Predictor
          </button>
          <button
            onClick={() => setDrillsSubView('flashcards')}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer text-center ${
              drillsSubView === 'flashcards' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-700 hover:bg-slate-200/60'
            }`}
          >
            🎴 Vocab Flashcards
          </button>
        </div>
      )}

      {/* MAIN PRACTICE QUIZ CONTAINER (FOR DRILLS SPEED QUIZ) */}
      {(activeCategory === 'drills' && drillsSubView === 'quiz') && (
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          {currentQuestion ? (
            <>
              {/* Question Header & Score Tracker */}
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 text-xs gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full font-black bg-indigo-600 text-white uppercase text-[10px]">
                    {currentQuestion.section}
                  </span>
                  <span className="text-slate-600 font-bold">Topic: {currentQuestion.topic}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 font-medium">
                    Score: <strong className="text-slate-950 font-black">{score}/{answeredCount}</strong>
                  </span>
                  <span className="text-slate-400 font-medium">
                    Question {safeQuestionIndex + 1} of {filteredQuestions.length}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-3">
                <p className="text-base sm:text-lg font-extrabold text-slate-950 leading-relaxed">
                  {currentQuestion.question}
                </p>

                {currentQuestion.codeOrMathSnippet && (
                  <pre className="p-3.5 bg-slate-900 rounded-2xl text-xs font-mono text-indigo-300 border border-slate-800 overflow-x-auto">
                    {currentQuestion.codeOrMathSnippet}
                  </pre>
                )}
              </div>

              {/* Options List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  let btnStyle = 'bg-white border-slate-200 text-slate-900 hover:bg-indigo-50/80 hover:border-indigo-400 shadow-xs';

                  if (isAnswerSubmitted) {
                    if (idx === currentQuestion.correctIndex) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-xs';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-indigo-600 border-indigo-600 text-white font-bold shadow-md';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      className={`text-left p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected && !isAnswerSubmitted ? 'bg-indigo-700 text-white' : 'bg-slate-100 text-slate-800 border border-slate-300'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {isAnswerSubmitted && idx === currentQuestion.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && idx !== currentQuestion.correctIndex && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Solution & Explanation Banner */}
              {isAnswerSubmitted && (
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-2 text-xs sm:text-sm">
                  <div className="font-extrabold text-indigo-950 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-indigo-600" />
                    Solution & Explanation:
                  </div>
                  <p className="text-slate-700 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                {!isAnswerSubmitted ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleSubmitAnswer}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-xs transition-all cursor-pointer shadow-sm"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-10 space-y-3">
              <p className="text-slate-600 font-bold">No questions available in this module yet.</p>
              <button
                onClick={() => setIsOptionPopupOpen(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
              >
                Switch Option
              </button>
            </div>
          )}
        </div>
      )}

      {/* SCORE PREDICTOR VIEW (DRILLS) */}
      {activeCategory === 'drills' && drillsSubView === 'calculator' && (
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-950">Digital SAT Score Predictor</h3>
              <p className="text-xs text-slate-500">Estimate your composite score (400–1600) and target percentile.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            {/* Reading & Writing Slider */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex justify-between font-extrabold text-sm text-slate-950">
                <span>Reading & Writing Section</span>
                <span className="text-indigo-600 font-black">{rwScore} / 800</span>
              </div>
              <input
                type="range"
                min="200"
                max="800"
                step="10"
                value={rwScore}
                onChange={(e) => setRwScore(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Math Slider */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex justify-between font-extrabold text-sm text-slate-950">
                <span>Math Section</span>
                <span className="text-indigo-600 font-black">{mathScore} / 800</span>
              </div>
              <input
                type="range"
                min="200"
                max="800"
                step="10"
                value={mathScore}
                onChange={(e) => setMathScore(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Composite Score Result Box */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 text-center space-y-2 shadow-sm text-white">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Projected Digital SAT Score</span>
            <div className="text-5xl font-black">{totalScore} <span className="text-lg text-slate-400 font-normal">/ 1600</span></div>
            <p className="text-xs text-indigo-300 font-extrabold mt-2">{getPercentile(totalScore)}</p>
          </div>
        </div>
      )}

      {/* VOCAB FLASHCARDS VIEW (DRILLS) */}
      {activeCategory === 'drills' && drillsSubView === 'flashcards' && (
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 text-center">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>High-Yield SAT Vocabulary Cards</span>
            <span>Card {currentFlashcardIndex + 1} of {SAT_FLASHCARDS.length}</span>
          </div>

          {/* Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[220px] p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-indigo-600 transition-all shadow-sm flex flex-col items-center justify-center relative group"
          >
            <span className="absolute top-4 right-4 text-[10px] font-bold text-slate-400 group-hover:text-indigo-600">Click to Flip 🔄</span>
            {!isFlipped ? (
              <div className="space-y-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white">{currentFlashcard.partOfSpeech}</span>
                <h3 className="text-3xl font-black text-slate-950 tracking-wide">{currentFlashcard.word}</h3>
                <p className="text-xs text-slate-500">{currentFlashcard.phonetic}</p>
              </div>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm">
                <p className="text-base text-slate-950 font-bold">"{currentFlashcard.definition}"</p>
                <p className="text-slate-600 italic">Example: {currentFlashcard.exampleSentence}</p>
                <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                  {currentFlashcard.synonyms.map((syn, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-[10px] text-indigo-700 font-bold">
                      {syn}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentFlashcardIndex((prev) => (prev > 0 ? prev - 1 : SAT_FLASHCARDS.length - 1));
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-all cursor-pointer"
            >
              Previous Card
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setCurrentFlashcardIndex((prev) => (prev + 1) % SAT_FLASHCARDS.length);
              }}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white transition-all cursor-pointer shadow-sm"
            >
              Next Card
            </button>
          </div>
        </div>
      )}

      {/* POPUP MODAL WITH THE 4 OPTIONS */}
      <AnimatePresence>
        {isOptionPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOptionPopupOpen(false)}
              className="absolute inset-0"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200 rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative z-10 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Icon */}
              <button
                onClick={() => setIsOptionPopupOpen(false)}
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
                  Choose one of the 5 official learning options below to switch your practice session.
                </p>
              </div>

              {/* 5 OPTIONS IN A GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                {/* OPTION 1: READING */}
                <button
                  onClick={() => handleSelectCategoryFromModal('reading')}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'reading'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg text-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📖</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                        activeCategory === 'reading'
                          ? 'bg-white/20 text-white'
                          : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                      }`}>
                        54 Qs Target
                      </span>
                    </div>
                    <h3 className={`text-base font-extrabold tracking-tight ${
                      activeCategory === 'reading' ? 'text-white' : 'text-slate-950 group-hover:text-indigo-900'
                    }`}>
                      1. Reading
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${
                      activeCategory === 'reading' ? 'text-indigo-100' : 'text-slate-600'
                    }`}>
                      Craft & structure, passage analysis, inferences & context vocabulary.
                    </p>
                  </div>
                  <div className={`mt-3 flex items-center justify-between text-xs font-bold ${
                    activeCategory === 'reading' ? 'text-white' : 'text-indigo-600 group-hover:text-indigo-700'
                  }`}>
                    <span>Select Reading</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 2: WRITING */}
                <button
                  onClick={() => handleSelectCategoryFromModal('writing')}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'writing'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg text-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">✍️</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                        activeCategory === 'writing'
                          ? 'bg-white/20 text-white'
                          : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                      }`}>
                        Grammar Rules
                      </span>
                    </div>
                    <h3 className={`text-base font-extrabold tracking-tight ${
                      activeCategory === 'writing' ? 'text-white' : 'text-slate-950 group-hover:text-indigo-900'
                    }`}>
                      2. Writing
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${
                      activeCategory === 'writing' ? 'text-indigo-100' : 'text-slate-600'
                    }`}>
                      Standard English conventions, punctuation, sentence clauses & transitions.
                    </p>
                  </div>
                  <div className={`mt-3 flex items-center justify-between text-xs font-bold ${
                    activeCategory === 'writing' ? 'text-white' : 'text-indigo-600 group-hover:text-indigo-700'
                  }`}>
                    <span>Select Writing</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 3: MATH */}
                <button
                  onClick={() => handleSelectCategoryFromModal('math')}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'math'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg text-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📐</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                        activeCategory === 'math'
                          ? 'bg-white/20 text-white'
                          : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                      }`}>
                        26 Chapters
                      </span>
                    </div>
                    <h3 className={`text-base font-extrabold tracking-tight ${
                      activeCategory === 'math' ? 'text-white' : 'text-slate-950 group-hover:text-indigo-900'
                    }`}>
                      3. Math
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${
                      activeCategory === 'math' ? 'text-indigo-100' : 'text-slate-600'
                    }`}>
                      College Panda theory, step-by-step solutions, Desmos tricks & 50+ Qs per chapter.
                    </p>
                  </div>
                  <div className={`mt-3 flex items-center justify-between text-xs font-bold ${
                    activeCategory === 'math' ? 'text-white' : 'text-indigo-600 group-hover:text-indigo-700'
                  }`}>
                    <span>Select Math</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 4: DRILLS */}
                <button
                  onClick={() => handleSelectCategoryFromModal('drills')}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'drills'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg text-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">⚡</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                        activeCategory === 'drills'
                          ? 'bg-white/20 text-white'
                          : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                      }`}>
                        Full Practice
                      </span>
                    </div>
                    <h3 className={`text-base font-extrabold tracking-tight ${
                      activeCategory === 'drills' ? 'text-white' : 'text-slate-950 group-hover:text-indigo-900'
                    }`}>
                      4. Drills
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${
                      activeCategory === 'drills' ? 'text-indigo-100' : 'text-slate-600'
                    }`}>
                      Timed mixed speed drills, 400-1600 Score Predictor & Vocab Flashcards.
                    </p>
                  </div>
                  <div className={`mt-3 flex items-center justify-between text-xs font-bold ${
                    activeCategory === 'drills' ? 'text-white' : 'text-indigo-600 group-hover:text-indigo-700'
                  }`}>
                    <span>Select Speed Drills</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 5: ADVANCED STATS */}
                <button
                  onClick={() => handleSelectCategoryFromModal('stats')}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'stats'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg text-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📊</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                        activeCategory === 'stats'
                          ? 'bg-white/20 text-white'
                          : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                      }`}>
                        Master Guide
                      </span>
                    </div>
                    <h3 className={`text-base font-extrabold tracking-tight ${
                      activeCategory === 'stats' ? 'text-white' : 'text-slate-950 group-hover:text-indigo-900'
                    }`}>
                      5. Stats & Data
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${
                      activeCategory === 'stats' ? 'text-indigo-100' : 'text-slate-600'
                    }`}>
                      Descriptive metrics, parametric & non-parametric tests, and Pandas integration.
                    </p>
                  </div>
                  <div className={`mt-3 flex items-center justify-between text-xs font-bold ${
                    activeCategory === 'stats' ? 'text-white' : 'text-indigo-600 group-hover:text-indigo-700'
                  }`}>
                    <span>Select Stats</span>
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
