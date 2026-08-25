import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, CheckCircle2, XCircle, ChevronRight, HelpCircle, 
  Target, Filter, Lightbulb, Zap, ShieldAlert, ArrowRight, RotateCcw, 
  Award, Check, Eye, EyeOff
} from 'lucide-react';
import { READING_MODULE_1_PACKAGE } from '../../data/reading/module1Index';
import { DigitalSatModuleDifficulty, ReadingSubskill } from '../../data/reading/readingTypes';

export const SatReadingModule1Viewer: React.FC = () => {
  const { overview, demonstrations, exercises } = READING_MODULE_1_PACKAGE;
  
  const [activeTab, setActiveTab] = useState<'overview' | 'demos' | 'exercises'>('demos');
  const [selectedDemoIndex, setSelectedDemoIndex] = useState<number>(0);
  
  // Exercise filters & state
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const [subskillFilter, setSubskillFilter] = useState<'ALL' | ReadingSubskill>('ALL');
  const [difficultyFilter, setDifficultyFilter] = useState<'ALL' | DigitalSatModuleDifficulty>('ALL');
  
  // User answer tracking
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  // Filter exercises
  const filteredExercises = exercises.filter(ex => {
    const matchSubskill = subskillFilter === 'ALL' || ex.subskill === subskillFilter;
    const matchDiff = difficultyFilter === 'ALL' || ex.difficulty === difficultyFilter;
    return matchSubskill && matchDiff;
  });

  const currentExercise = filteredExercises[exerciseIndex] || filteredExercises[0];

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
    setShowExplanation(prev => ({ ...prev, [questionId]: true }));
  };

  const handleResetAnswers = () => {
    setUserAnswers({});
    setShowExplanation({});
  };

  // Calculate score statistics
  const totalAnswered = Object.keys(userAnswers).length;
  const totalCorrect = Object.entries(userAnswers).filter(([qId, ansIdx]) => {
    const q = exercises.find(item => item.id === qId);
    return q && q.correctAnswer === ansIdx;
  }).length;

  const currentDemo = demonstrations[selectedDemoIndex] || demonstrations[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* MODULE HEADER BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-10 border border-indigo-700/40 shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            Digital SAT Reading • Module 1
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            {overview.title}
          </h1>
          <p className="text-indigo-200/90 text-sm md:text-base leading-relaxed font-medium">
            {overview.subtitle}
          </p>
          
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            {overview.meltzerChapters.map((ch, idx) => (
              <span key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-indigo-100 font-mono">
                {ch}
              </span>
            ))}
          </div>

          {/* METRIC STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-indigo-800/60 text-center">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl font-black text-white">10</div>
              <div className="text-[11px] text-indigo-300 font-medium">Worked Demos</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl font-black text-white">50</div>
              <div className="text-[11px] text-indigo-300 font-medium">Practice Exercises</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl font-black text-emerald-400">{totalCorrect} / {totalAnswered}</div>
              <div className="text-[11px] text-indigo-300 font-medium">Your Accuracy</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl font-black text-indigo-300">100%</div>
              <div className="text-[11px] text-indigo-300 font-medium">Digital SAT Aligned</div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('demos')}
          className={`flex items-center gap-2 px-6 py-3.5 border-b-2 font-bold text-sm transition-all cursor-pointer ${
            activeTab === 'demos'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          10 Demonstration Examples
        </button>
        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex items-center gap-2 px-6 py-3.5 border-b-2 font-bold text-sm transition-all cursor-pointer ${
            activeTab === 'exercises'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Target className="w-4 h-4" />
          50 Practice Exercises
          {totalAnswered > 0 && (
            <span className="ml-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono">
              {totalCorrect}/{totalAnswered}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 px-6 py-3.5 border-b-2 font-bold text-sm transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          Next-Gen Strategy Rules
        </button>
      </div>

      {/* TAB 1: OVERVIEW & STRATEGIES */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Next-Gen Elimination Strategies for Module 1</h2>
              <p className="text-sm text-slate-600 mt-1">
                Master these 5 core tactical rules to reliably conquer Words in Context and Central Ideas/Details questions on the Digital SAT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {overview.coreTechniques.map((tech, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 space-y-3 hover:border-indigo-200 transition-all">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Zap className="w-4 h-4 text-indigo-600" />
                    Rule {idx + 1}: {tech.name}
                  </div>
                  <p className="text-xs font-medium text-slate-800 leading-relaxed">
                    {tech.summary}
                  </p>
                  <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-600 space-y-1">
                    <span className="font-bold text-slate-700 block">How to apply:</span>
                    <p>{tech.howToApply}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DEMONSTRATION EXAMPLES */}
      {activeTab === 'demos' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* DEMO SELECTOR SIDEBAR */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 px-1">
              Select Demonstration Example
            </h3>
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {demonstrations.map((demo, idx) => {
                const isSelected = selectedDemoIndex === idx;
                return (
                  <button
                    key={demo.id}
                    onClick={() => setSelectedDemoIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-[1.01]'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span>Demo #{demo.demoNumber}</span>
                      <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : demo.difficulty === 'Hard Module' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {demo.difficulty}
                      </span>
                    </div>
                    <div className={`text-xs font-medium line-clamp-1 ${isSelected ? 'text-indigo-100' : 'text-slate-600'}`}>
                      {demo.subskill}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DEMO DETAILED VIEW */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              {/* BADGES */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs">
                    Demonstration #{currentDemo.demoNumber}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium text-xs">
                    {currentDemo.subskill}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full font-bold text-xs ${
                  currentDemo.difficulty === 'Hard Module' 
                    ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                    : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                }`}>
                  Mimics {currentDemo.difficulty}
                </span>
              </div>

              {/* PASSAGE */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 font-serif text-sm md:text-base text-slate-800 leading-relaxed">
                <span className="font-sans text-xs font-bold uppercase tracking-wide text-slate-600 block">
                  SAT Reading Passage
                </span>
                <p>{currentDemo.passage}</p>
              </div>

              {/* QUESTION */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm md:text-base">
                  {currentDemo.questionText}
                </h4>

                {/* OPTIONS */}
                <div className="grid grid-cols-1 gap-2.5">
                  {currentDemo.options.map((opt, optIdx) => {
                    const isCorrect = optIdx === currentDemo.correctAnswer;
                    return (
                      <div
                        key={optIdx}
                        className={`p-4 rounded-xl border flex items-center justify-between font-medium text-xs md:text-sm ${
                          isCorrect 
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold' 
                            : 'bg-slate-50/80 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                            isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isCorrect && (
                          <span className="flex items-center gap-1 text-xs text-emerald-700 font-bold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Correct Choice
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STRATEGIC TAKEAWAY */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  Strategic Key Takeaway
                </div>
                <p className="text-xs text-amber-900 font-medium leading-relaxed">
                  {currentDemo.strategicTakeaway}
                </p>
              </div>

              {/* EXPLANATION BREAKDOWN */}
              <div className="border-t border-slate-200 pt-6 space-y-4">
                <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-indigo-600" />
                  Step-by-Step Breakdown & Strategy
                </h5>

                {/* PASSAGE DECONSTRUCTION */}
                <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-4 space-y-1">
                  <span className="text-xs font-bold text-indigo-900 block">1. Passage Deconstruction:</span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentDemo.explanation.passageDeconstruction}
                  </p>
                </div>

                {/* CORRECT REASONING */}
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 space-y-1">
                  <span className="text-xs font-bold text-emerald-900 block">2. Why Choice {String.fromCharCode(65 + currentDemo.correctAnswer)} is Correct:</span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentDemo.explanation.correctReasoning}
                  </p>
                </div>

                {/* DISTRACTOR ANALYSIS */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-900 block">3. Distractor Analysis (Why Wrong Choices Fail):</span>
                  <div className="grid grid-cols-1 gap-2">
                    {currentDemo.explanation.distractorAnalysis.map((dist, dIdx) => (
                      <div key={dIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs space-y-1">
                        <div className="flex items-center justify-between font-bold text-slate-800">
                          <span>Option {String.fromCharCode(65 + dist.optionIndex)}: "{dist.optionText}"</span>
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px]">
                            Trap: {dist.trapType}
                          </span>
                        </div>
                        <p className="text-slate-600">{dist.whyIncorrect}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 50 PRACTICE EXERCISES */}
      {activeTab === 'exercises' && (
        <div className="space-y-6">
          {/* FILTER CONTROLS BAR */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                <Filter className="w-4 h-4 text-indigo-600" />
                Filter Question Type:
              </div>
              <button
                onClick={() => { setSubskillFilter('ALL'); setExerciseIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  subskillFilter === 'ALL' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All (50)
              </button>
              <button
                onClick={() => { setSubskillFilter('Words in Context'); setExerciseIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  subskillFilter === 'Words in Context' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Words in Context (25)
              </button>
              <button
                onClick={() => { setSubskillFilter('Central Ideas & Details'); setExerciseIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  subskillFilter === 'Central Ideas & Details' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Central Ideas & Details (25)
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                Difficulty:
              </div>
              <button
                onClick={() => { setDifficultyFilter('ALL'); setExerciseIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  difficultyFilter === 'ALL' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => { setDifficultyFilter('Easy/Medium Module'); setExerciseIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  difficultyFilter === 'Easy/Medium Module' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-800'
                }`}
              >
                Easy/Medium Module
              </button>
              <button
                onClick={() => { setDifficultyFilter('Hard Module'); setExerciseIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  difficultyFilter === 'Hard Module' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800'
                }`}
              >
                Hard Module
              </button>
            </div>
          </div>

          {/* QUESTION SELECTOR STRIP */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Question Jump ({filteredExercises.length} items available)</span>
              {totalAnswered > 0 && (
                <button
                  onClick={handleResetAnswers}
                  className="flex items-center gap-1 text-rose-600 hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Clear All Answers
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
              {filteredExercises.map((ex, idx) => {
                const userAns = userAnswers[ex.id];
                const isCurrent = idx === exerciseIndex;
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === ex.correctAnswer;

                return (
                  <button
                    key={ex.id}
                    onClick={() => setExerciseIndex(idx)}
                    className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                      isCurrent
                        ? 'ring-2 ring-indigo-600 ring-offset-1 bg-indigo-600 text-white'
                        : isAnswered
                        ? isCorrect ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE QUESTION CARD */}
          {currentExercise ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 font-bold text-xs">
                    Question {exerciseIndex + 1} of {filteredExercises.length}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium text-xs">
                    {currentExercise.subskill}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-mono font-bold">
                    Technique: {currentExercise.nextGenTechnique}
                  </span>
                  <span className={`px-3 py-1 rounded-full font-bold text-xs ${
                    currentExercise.difficulty === 'Hard Module' 
                      ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                      : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                  }`}>
                    Mimics {currentExercise.difficulty}
                  </span>
                </div>
              </div>

              {/* PASSAGE */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 font-serif text-sm md:text-base text-slate-800 leading-relaxed">
                <span className="font-sans text-xs font-bold uppercase tracking-wide text-slate-600 block">
                  Reading Passage
                </span>
                <p>{currentExercise.passage}</p>
              </div>

              {/* QUESTION TEXT */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm md:text-base">
                  {currentExercise.questionText}
                </h4>

                {/* OPTIONS LIST */}
                <div className="grid grid-cols-1 gap-3">
                  {currentExercise.options.map((opt, optIdx) => {
                    const userSelected = userAnswers[currentExercise.id] === optIdx;
                    const hasAnswered = userAnswers[currentExercise.id] !== undefined;
                    const isCorrectChoice = currentExercise.correctAnswer === optIdx;

                    let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
                    if (hasAnswered) {
                      if (isCorrectChoice) {
                        btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                      } else if (userSelected) {
                        btnStyle = 'bg-rose-50 border-rose-300 text-rose-900 font-bold';
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
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
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

              {/* NAVIGATION BUTTONS */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  disabled={exerciseIndex === 0}
                  onClick={() => setExerciseIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                >
                  ← Previous Question
                </button>

                <button
                  onClick={() => setShowExplanation(prev => ({ ...prev, [currentExercise.id]: !prev[currentExercise.id] }))}
                  className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  {showExplanation[currentExercise.id] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  {showExplanation[currentExercise.id] ? 'Hide Solution' : 'Show Solution & Breakdown'}
                </button>

                <button
                  disabled={exerciseIndex === filteredExercises.length - 1}
                  onClick={() => setExerciseIndex(prev => Math.min(filteredExercises.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1"
                >
                  Next Question →
                </button>
              </div>

              {/* EXPLANATION ACCORDION */}
              {showExplanation[currentExercise.id] && (
                <div className="border-t border-slate-200 pt-6 space-y-4 animate-fadeIn">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-1">
                    <span className="text-xs font-bold text-emerald-900 block flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Correct Choice: Option {String.fromCharCode(65 + currentExercise.correctAnswer)}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {currentExercise.explanation.correctReasoning}
                    </p>
                  </div>

                  <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 space-y-1">
                    <span className="text-xs font-bold text-indigo-900 block">Passage Deconstruction:</span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {currentExercise.explanation.passageDeconstruction}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-900 block">Distractor Elimination Analysis:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {currentExercise.explanation.distractorAnalysis.map((dist, dIdx) => (
                        <div key={dIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs space-y-1">
                          <div className="flex items-center justify-between font-bold text-slate-800">
                            <span>Option {String.fromCharCode(65 + dist.optionIndex)}: "{dist.optionText}"</span>
                            <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px]">
                              {dist.trapType}
                            </span>
                          </div>
                          <p className="text-slate-600">{dist.whyIncorrect}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 text-slate-500">
              No questions found matching your filter selections.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
