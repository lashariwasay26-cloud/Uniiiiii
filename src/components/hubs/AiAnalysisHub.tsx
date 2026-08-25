import React, { useState } from 'react';
import { Sparkles, Target, Award, Compass, MessageSquare, Send, CheckCircle2, AlertCircle, RefreshCw, UserCheck, ShieldCheck, ChevronRight } from 'lucide-react';
import { ProfileAnalysisInput, ProfileAnalysisResult, ChatMessage } from '../../types';

export const AiAnalysisHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'evaluator' | 'counselor'>('evaluator');

  // Evaluator Form State
  const [formData, setFormData] = useState<ProfileAnalysisInput>({
    fullName: '',
    gpa: '3.8',
    gpaScale: '4.0',
    satScore: '1420',
    intendedMajor: 'Computer Science & AI',
    preferredCountries: ['United States', 'Germany', 'Pakistan'],
    extracurriculars: 'Robotics team lead, High School Debate champion, Founded local coding club for underrepresented youth, 100 hours community service.',
    financialNeed: 'High',
    academicLevel: 'High School Senior',
    specificConcerns: 'Looking for full-ride or tuition-waiver scholarships for Computer Science.',
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ProfileAnalysisResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Counselor Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'c1',
      sender: 'ai',
      text: 'Hello! I am your **UniRoute AI Admissions Counselor**. Ask me anything about university match criteria, SAT strategies, Common App essays, or HEC/Fulbright/DAAD scholarships!',
      timestamp: 'Just now',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const handleCountryToggle = (country: string) => {
    setFormData((prev) => {
      const exists = prev.preferredCountries.includes(country);
      if (exists) {
        return { ...prev, preferredCountries: prev.preferredCountries.filter((c) => c !== country) };
      } else {
        return { ...prev, preferredCountries: [...prev.preferredCountries, country] };
      }
    });
  };

  const handleRunAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/analyze-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to generate profile analysis.');
      }

      const data: ProfileAnalysisResult = await response.json();
      setAnalysisResult(data);
    } catch (err: any) {
      console.error('Error running AI analysis:', err);
      setErrorMessage(err.message || 'Server error. Please ensure GEMINI_API_KEY is configured.');
    } font: {
      setIsAnalyzing(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isSendingMessage) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputMessage,
      timestamp: 'Now',
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsSendingMessage(true);

    try {
      const response = await fetch('/api/counselor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          history: chatMessages,
        }),
      });

      const data = await response.json();
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || 'I am happy to guide your university pathway further!',
        timestamp: 'Now',
      };
      setChatMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Counselor error:', err);
    } finally {
      setIsSendingMessage(false);
    }
  };

  return (
    <div id="ai-analysis-hub" className="space-y-6">
      {/* Hub Hero Header */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 rounded-2xl p-6 md:p-8 text-white border border-amber-800/60 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Gemini 3.6 Flash Admissions Engine
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            AI Profile Analysis & Counselor
          </h2>
          <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">
            Get an instant AI-backed evaluation of your GPA, test scores, and activities. Receive personalized Reach/Target/Safety university matches and chat directly with your AI Counselor.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
        <button
          onClick={() => setActiveTab('evaluator')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 ${
            activeTab === 'evaluator'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>Profile Match Evaluator</span>
        </button>

        <button
          onClick={() => setActiveTab('counselor')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-2 ${
            activeTab === 'counselor'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>AI Counselor Chat</span>
        </button>
      </div>

      {/* TAB 1: EVALUATOR FORM & RESULTS */}
      {activeTab === 'evaluator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Form */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-amber-400" />
              Enter Your Academic Profile
            </h3>

            <form onSubmit={handleRunAnalysis} className="space-y-3 text-xs text-slate-300">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">GPA</label>
                  <input
                    type="text"
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    placeholder="e.g. 3.8 or 88%"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">SAT / ACT Score</label>
                  <input
                    type="text"
                    value={formData.satScore}
                    onChange={(e) => setFormData({ ...formData, satScore: e.target.value })}
                    placeholder="e.g. 1450 or Optional"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Intended Major / Field</label>
                <input
                  type="text"
                  value={formData.intendedMajor}
                  onChange={(e) => setFormData({ ...formData, intendedMajor: e.target.value })}
                  placeholder="e.g. Computer Science, Medicine, Business"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Target Regions / Countries</label>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['United States', 'United Kingdom', 'Germany', 'Pakistan', 'Canada', 'Australia', 'Europe'].map((c) => {
                    const isSelected = formData.preferredCountries.includes(c);
                    return (
                      <button
                        type="button"
                        key={c}
                        onClick={() => handleCountryToggle(c)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors ${
                          isSelected
                            ? 'bg-amber-600/30 text-amber-300 border-amber-500'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Extracurriculars & Achievements</label>
                <textarea
                  rows={3}
                  value={formData.extracurriculars}
                  onChange={(e) => setFormData({ ...formData, extracurriculars: e.target.value })}
                  placeholder="List clubs, leadership roles, Olympiads, projects, community service..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Financial Need</label>
                  <select
                    value={formData.financialNeed}
                    onChange={(e) => setFormData({ ...formData, financialNeed: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="High">High (Full Ride Required)</option>
                    <option value="Moderate">Moderate (Tuition Waiver)</option>
                    <option value="Low">Low (Partial Grants)</option>
                    <option value="None">None (Self Funded)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Academic Level</label>
                  <select
                    value={formData.academicLevel}
                    onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="High School Senior">High School Senior</option>
                    <option value="High School Junior">High School Junior</option>
                    <option value="Undergraduate Student">Undergraduate Student</option>
                    <option value="Graduate/Master Applicant">Master / PhD Applicant</option>
                  </select>
                </div>
              </div>

              <button
                id="btn-run-ai-analysis"
                type="submit"
                disabled={isAnalyzing}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 disabled:opacity-50 text-white font-bold text-xs transition-all shadow-lg shadow-amber-600/20 flex items-center justify-center gap-2 mt-2"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Gemini AI Processing Profile...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-200" />
                    <span>Generate AI Admission Analysis</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Results Panel */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-xs">
                {errorMessage}
              </div>
            )}

            {!analysisResult && !isAnalyzing && (
              <div className="py-16 text-center text-slate-500 text-xs space-y-2 border border-dashed border-slate-800 rounded-xl">
                <p className="font-semibold text-slate-400 text-sm">Awaiting Profile Input</p>
                <p>Fill in your details on the left and click "Generate AI Admission Analysis" to receive university matches, strengths, and roadmap.</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="py-20 text-center text-slate-400 space-y-3">
                <RefreshCw className="w-10 h-10 text-amber-400 animate-spin mx-auto" />
                <p className="text-sm font-semibold text-white">Analyzing profile metrics with Gemini 3.6 Flash...</p>
                <p className="text-xs text-slate-500">Cross-referencing admission statistics for US, UK, Europe, & Pakistan</p>
              </div>
            )}

            {analysisResult && !isAnalyzing && (
              <div className="space-y-5 text-xs">
                {/* Score Banner */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950 via-slate-950 to-orange-950 border border-amber-800/80 flex items-center justify-between shadow-inner">
                  <div>
                    <span className="text-amber-300 text-[10px] font-bold uppercase tracking-wider">Overall Profile Index</span>
                    <div className="text-3xl font-extrabold text-white mt-0.5">{analysisResult.overallRating}</div>
                    <p className="text-slate-300 mt-1 line-clamp-2">{analysisResult.summary}</p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-xl font-black text-amber-300">
                      {analysisResult.ratingScore}%
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold block mt-1">{analysisResult.scholarshipMatchScore}</span>
                  </div>
                </div>

                {/* University Match Buckets */}
                <div className="space-y-3">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" /> University Match Breakdown
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Reach */}
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        REACH (Aspirational)
                      </span>
                      {analysisResult.reachUniversities.map((uni, idx) => (
                        <div key={idx} className="text-slate-200">
                          <p className="font-bold">{uni.name} ({uni.country})</p>
                          <p className="text-[10px] text-slate-400">{uni.rationale}</p>
                        </div>
                      ))}
                    </div>

                    {/* Target */}
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        TARGET (Strong Match)
                      </span>
                      {analysisResult.targetUniversities.map((uni, idx) => (
                        <div key={idx} className="text-slate-200">
                          <p className="font-bold">{uni.name} ({uni.country})</p>
                          <p className="text-[10px] text-slate-400">{uni.rationale}</p>
                        </div>
                      ))}
                    </div>

                    {/* Safety */}
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        SAFETY (High Probability)
                      </span>
                      {analysisResult.safetyUniversities.map((uni, idx) => (
                        <div key={idx} className="text-slate-200">
                          <p className="font-bold">{uni.name} ({uni.country})</p>
                          <p className="text-[10px] text-slate-400">{uni.rationale}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Customized Action Plan */}
                <div className="space-y-2">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-400" /> Recommended Action Plan
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {analysisResult.actionPlan.map((step) => (
                      <div key={step.step} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                        <div className="flex items-center justify-between font-bold text-amber-300">
                          <span>Step {step.step}: {step.title}</span>
                          <span className="text-[10px] text-slate-500">{step.timeline}</span>
                        </div>
                        <p className="text-[11px] text-slate-300">{step.action}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Scholarships */}
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 space-y-1">
                  <span className="font-bold text-emerald-300">Matched Scholarship Programs:</span>
                  <p className="text-slate-200">{analysisResult.recommendedScholarships.join(' • ')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: AI COUNSELOR CHAT */}
      {activeTab === 'counselor' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">UniRoute AI Counselor</h3>
              <p className="text-xs text-slate-400">Live Q&A on admissions, visas, scholarships, and SAT prep strategies.</p>
            </div>
          </div>

          {/* Chat Messages Log */}
          <div className="space-y-3 max-h-96 overflow-y-auto p-2">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-amber-600 text-white rounded-br-none'
                      : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isSendingMessage && (
              <div className="flex justify-start">
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-xs text-slate-400 animate-pulse">
                  Counselor typing response...
                </div>
              </div>
            )}
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSendMessage} className="flex gap-2 pt-2 border-t border-slate-800">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask e.g., 'What GPA is needed for DAAD?' or 'How do I apply for LUMS NOP?'"
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isSendingMessage}
              className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
