import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ArrowRight, MessageSquare, GraduationCap, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

interface FloatingAssistantBubbleProps {
  onOpenScholarships?: () => void;
}

export const FloatingAssistantBubble: React.FC<FloatingAssistantBubbleProps> = ({ onOpenScholarships }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [chatResponse, setChatResponse] = useState<string | null>(null);

  const QUICK_PROMPTS = [
    { label: '🎓 How to apply for Full-Ride Scholarships?', query: 'Tell me how to find fully funded full-ride scholarships for international students.' },
    { label: '🇵🇰 What grants are available for Pakistani students?', query: 'List HEC, PEEF, Ehsaas, and overseas scholarship options for Pakistani applicants.' },
    { label: '📚 How to prepare for the Digital SAT?', query: 'Give me high-yield Digital SAT Math and Reading/Writing preparation tips.' },
    { label: '✍️ Tips for Common App Personal Statement?', query: 'What makes a compelling Common App essay structure?' },
  ];

  const handleAsk = (queryText: string) => {
    setUserQuery(queryText);
    if (queryText.toLowerCase().includes('scholarship') || queryText.toLowerCase().includes('pakistan') || queryText.toLowerCase().includes('full-ride')) {
      setChatResponse('UniRoute hosts over 420+ global universities and 10,000+ curated scholarship opportunities including Fulbright, Chevening, DAAD, and HEC. Click below to view all open scholarship tracks!');
    } else if (queryText.toLowerCase().includes('sat')) {
      setChatResponse('The Digital SAT consists of two 35-minute Reading & Writing modules and two 35-minute Math modules. Focus on algebra, problem solving, and contextual vocabulary. Check our SAT Preparation section on the homepage for practice tools!');
    } else if (queryText.toLowerCase().includes('essay') || queryText.toLowerCase().includes('common app')) {
      setChatResponse('Your personal statement should focus on a pivotal growth story, personal core values, or intellectual curiosity. Visit our Essay Hub for Ivy League accepted samples!');
    } else {
      setChatResponse(`UniRoute Assistant: For "${queryText}", you can explore our curated Scholarships directory, SAT modules, and AI counselor features on this gateway!`);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-[calc(100vw-2.5rem)] sm:w-96 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">
                  💡
                </div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-tight flex items-center gap-1.5">
                    UniRoute Assistant
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[11px] text-indigo-100/90">Instant guidance & admissions advice</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-4 max-h-[380px] overflow-y-auto space-y-3 text-xs">
              {!chatResponse ? (
                <>
                  <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-slate-700 leading-relaxed">
                    👋 Welcome! I am your <strong>UniRoute AI Floating Counselor</strong>. How can I help you with your university journey today?
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Suggested Quick Prompts</p>
                    {QUICK_PROMPTS.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAsk(item.query)}
                        className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50/80 border border-slate-100 hover:border-indigo-200 transition-all text-slate-800 font-medium flex items-center justify-between group cursor-pointer"
                      >
                        <span className="line-clamp-1">{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 font-medium">
                    🔍 <strong>Question:</strong> {userQuery}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100/80 text-indigo-950 leading-relaxed font-normal">
                    {chatResponse}
                  </div>

                  {onOpenScholarships && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenScholarships();
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <GraduationCap className="w-4 h-4" />
                      Explore All Scholarships Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setChatResponse(null);
                      setUserQuery('');
                    }}
                    className="w-full py-2 text-center text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                  >
                    ← Ask another question
                  </button>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-100 bg-slate-50/80 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about scholarships, SAT, or universities..."
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && userQuery.trim() && handleAsk(userQuery)}
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={() => userQuery.trim() && handleAsk(userQuery)}
                className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-3.5 sm:p-4 shadow-[0_10px_30px_rgba(79,70,229,0.4)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.6)] flex items-center gap-2.5 transition-all cursor-pointer border border-white/20"
      >
        <span className="text-xl sm:text-2xl leading-none">💡</span>
        <span className="hidden sm:inline font-bold text-xs pr-1">UniRoute Assistant</span>
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
        </span>
      </motion.button>
    </div>
  );
};
