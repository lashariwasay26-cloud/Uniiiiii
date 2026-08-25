import React, { useState } from 'react';
import { FileText, Sparkles, BookOpen, Send, CheckCircle2, AlertTriangle, Lightbulb, RefreshCw, Copy, Check } from 'lucide-react';
import { COMMON_APP_PROMPTS, SAMPLE_ESSAYS } from '../../data/essayData';
import { EssayFeedbackResult } from '../../types';

export const EssayHub: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'editor' | 'prompts' | 'samples'>('editor');

  // Editor State
  const [essayText, setEssayText] = useState<string>('');
  const [selectedPromptId, setSelectedPromptId] = useState<string>(COMMON_APP_PROMPTS[0].id);
  const [targetUniversity, setTargetUniversity] = useState<string>('Stanford / Top Global Universities');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<EssayFeedbackResult | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [copiedSampleId, setCopiedSampleId] = useState<string | null>(null);

  const wordCount = essayText.trim() ? essayText.trim().split(/\s+/).length : 0;
  const characterCount = essayText.length;

  const handleAnalyzeEssay = async () => {
    if (!essayText || wordCount < 30) {
      alert('Please write at least 30 words before requesting AI essay feedback.');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisError(null);

    const currentPrompt = COMMON_APP_PROMPTS.find((p) => p.id === selectedPromptId);

    try {
      const response = await fetch('/api/analyze-essay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          essayText,
          promptTitle: currentPrompt?.title || 'Personal Statement',
          targetUniversity,
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to analyze essay.');
      }

      const data: EssayFeedbackResult = await response.json();
      setAiFeedback(data);
    } catch (err: any) {
      console.error('Error analyzing essay:', err);
      setAnalysisError(err.message || 'Error communicating with AI service.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCopySample = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSampleId(id);
    setTimeout(() => setCopiedSampleId(null), 2000);
  };

  return (
    <div id="essay-hub" className="space-y-6">
      {/* Hub Hero Header */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 rounded-2xl p-6 md:p-8 text-white border border-teal-800/60 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-semibold mb-3">
            <FileText className="w-3.5 h-3.5" />
            Admissions Workshop & AI Reviewer
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Essay Hub & Personal Statement Suite
          </h2>
          <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">
            Craft winning Common App essays and Statements of Purpose with real-time word counting, AI feedback on Hook & Flow, Common App prompt guides, and accepted Ivy League sample essays.
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
        <button
          onClick={() => setActiveSubTab('editor')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 ${
            activeSubTab === 'editor'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Live Editor & AI Reviewer</span>
        </button>

        <button
          onClick={() => setActiveSubTab('prompts')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 ${
            activeSubTab === 'prompts'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>Common App Prompts</span>
        </button>

        <button
          onClick={() => setActiveSubTab('samples')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 ${
            activeSubTab === 'samples'
              ? 'bg-teal-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Winning Sample Essays</span>
        </button>
      </div>

      {/* SUB-TAB 1: LIVE EDITOR & AI REVIEWER */}
      {activeSubTab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Writing Column */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Select Essay Prompt</label>
                  <select
                    value={selectedPromptId}
                    onChange={(e) => setSelectedPromptId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-teal-500"
                  >
                    {COMMON_APP_PROMPTS.map((prompt) => (
                      <option key={prompt.id} value={prompt.id}>
                        {prompt.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Target Institution / Goal</label>
                  <input
                    type="text"
                    value={targetUniversity}
                    onChange={(e) => setTargetUniversity(e.target.value)}
                    placeholder="e.g. Stanford, MIT, LUMS, Fulbright"
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              {/* Text Area */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Draft Content</span>
                  <span className={`${wordCount > 650 ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>
                    {wordCount} / 650 words ({characterCount} chars)
                  </span>
                </div>
                <textarea
                  id="textarea-essay-draft"
                  rows={14}
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  placeholder="Paste or write your essay draft here... (Aim for 500 - 650 words)"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-200 text-sm leading-relaxed placeholder-slate-600 focus:outline-none focus:border-teal-500 resize-y font-sans"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setEssayText('')}
                  className="text-xs text-slate-500 hover:text-slate-300"
                >
                  Clear Canvas
                </button>

                <button
                  id="btn-analyze-essay"
                  disabled={isAnalyzing || wordCount < 20}
                  onClick={handleAnalyzeEssay}
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-teal-500/20"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Gemini AI Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-teal-200" />
                      <span>Request AI Feedback</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* AI Analysis Side Panel */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" />
              AI Essay Feedback & Critique
            </h3>

            {analysisError && (
              <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs">
                {analysisError}
              </div>
            )}

            {!aiFeedback && !isAnalyzing && (
              <div className="p-8 text-center text-slate-500 text-xs space-y-2 border border-dashed border-slate-800 rounded-xl">
                <p className="font-semibold text-slate-400">No Feedback Generated Yet</p>
                <p>Type your essay draft on the left and click "Request AI Feedback" to receive analysis on tone, structure, hook, and actionable edits.</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="py-12 text-center text-slate-400 space-y-3">
                <RefreshCw className="w-8 h-8 text-teal-400 animate-spin mx-auto" />
                <p className="text-xs font-semibold">Gemini 3.6 Flash evaluating your story...</p>
              </div>
            )}

            {aiFeedback && !isAnalyzing && (
              <div className="space-y-4 text-xs">
                {/* Score Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950 to-slate-950 border border-teal-800 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold">Overall Rating</span>
                    <div className="text-3xl font-extrabold text-teal-300">{aiFeedback.overallScore} <span className="text-sm font-normal text-slate-400">/ 100</span></div>
                  </div>
                  <div className="text-right space-y-0.5">
                    <p className="text-slate-300 font-semibold">Hook: {aiFeedback.hookRating}</p>
                    <p className="text-slate-400">Flow: {aiFeedback.clarityAndFlow}</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="font-bold text-teal-300">Tone Analysis:</span>
                  <p className="text-slate-300">{aiFeedback.toneAnalysis}</p>
                </div>

                {/* Key Strengths */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Strengths:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                    {aiFeedback.strengths.map((str, idx) => (
                      <li key={idx}>{str}</li>
                    ))}
                  </ul>
                </div>

                {/* Areas for Improvement */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400" /> Suggested Revisions:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                    {aiFeedback.improvementAreas.map((area, idx) => (
                      <li key={idx}>{area}</li>
                    ))}
                  </ul>
                </div>

                {/* Optional Revised Excerpt */}
                {aiFeedback.revisedExcerpt && (
                  <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-800/60 space-y-1">
                    <span className="font-bold text-teal-300">Sample Rewritten Excerpt:</span>
                    <p className="text-slate-200 italic">"{aiFeedback.revisedExcerpt}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: COMMON APP PROMPTS */}
      {activeSubTab === 'prompts' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COMMON_APP_PROMPTS.map((prompt) => (
              <div key={prompt.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  {prompt.source}
                </span>
                <h3 className="font-bold text-white text-base">{prompt.title}</h3>
                <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed italic">
                  "{prompt.promptText}"
                </p>

                <div className="space-y-1 text-xs">
                  <span className="font-bold text-teal-400">Strategist Tips:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1">
                    {prompt.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: SAMPLE WINNING ESSAYS */}
      {activeSubTab === 'samples' && (
        <div className="space-y-5">
          {SAMPLE_ESSAYS.map((sample) => (
            <div key={sample.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {sample.university}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1">{sample.title}</h3>
                </div>
                <button
                  onClick={() => handleCopySample(sample.essayText, sample.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  {copiedSampleId === sample.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="whitespace-pre-wrap font-sans text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800 leading-relaxed max-h-80 overflow-y-auto">
                {sample.essayText}
              </pre>

              <div className="space-y-1 text-xs">
                <span className="font-bold text-teal-400">Why Admissions Loved This Essay:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  {sample.keyStrengths.map((strength, idx) => (
                    <li key={idx}>{strength}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
