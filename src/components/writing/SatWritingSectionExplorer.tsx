import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, CheckCircle2, XCircle, ChevronRight, HelpCircle, Sparkles, Layers, ShieldCheck, Target, ArrowRight, ArrowLeft, RefreshCw, Award, Lightbulb, AlertTriangle, Zap } from 'lucide-react';
import { SAT_WRITING_CHAPTER_1_FULL } from '../../data/writing/satWritingChapter1Full';
import { SAT_WRITING_CHAPTER_2_FULL } from '../../data/writing/satWritingChapter2Full';
import { SAT_WRITING_CHAPTER_3_FULL } from '../../data/writing/satWritingChapter3Full';
import { SAT_WRITING_CHAPTER_4_FULL } from '../../data/writing/satWritingChapter4Full';
import { SAT_WRITING_CHAPTER_5_FULL } from '../../data/writing/satWritingChapter5Full';
import { SAT_WRITING_CHAPTER_6_FULL } from '../../data/writing/satWritingChapter6Full';
import { SAT_WRITING_CHAPTER_7_FULL } from '../../data/writing/satWritingChapter7Full';
import { WritingExerciseQuestion } from '../../data/writing/satWritingTypes';

interface TheoryParsedBlock {
  type: 'normal' | 'example' | 'trap' | 'elimination' | 'principle';
  title: string;
  content: string;
}

function cleanTitle(title: string): string {
  if (!title) return '';
  return title
    .replace(/^Theory\s*Block\s*\d+\s*[\—\-\–]\s*/i, '')
    .replace(/^Exercise\s*Block\s*\d+\s*[\—\-\–]\s*/i, '')
    .replace(/^Block\s*\d+\s*[\—\-\–]\s*/i, '')
    .replace(/\s*\((?:Sections?|Concepts?)\s*[^\)]+\)/gi, '')
    .replace(/^(?:Sections?|Concepts?|Section|Concept)\s*[0-9\–\-\s,\&A-Za-z]+[\—\-\–]\s*/i, '')
    .replace(/^(?:SECTION|CONCEPT|BLOCK|THEORY BLOCK|EXERCISE BLOCK|SECTIONS|CONCEPTS)\s*[0-9\–\-\s,\&A-Za-z]+[\—\-\–]\s*/i, '')
    .replace(/^(?:SECTION|CONCEPT|BLOCK|THEORY BLOCK|EXERCISE BLOCK|SECTIONS|CONCEPTS)\s*[0-9\–\-\s,\&]+\:\s*/i, '')
    .replace(/\bBlock\b\s*/gi, 'Section ')
    .replace(/Section\s+Checkpoint/gi, 'Checkpoint')
    .replace(/Section\s+Mastery/gi, 'Mastery')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanFullText(text: string): string {
  if (!text) return '';
  return text
    .replace(/^(?:SECTION|CONCEPT|BLOCK|THEORY BLOCK|EXERCISE BLOCK|SECTIONS|CONCEPTS)\s*[0-9\–\-\s,\&A-Za-z]*[\—\-\–]\s*/gim, '')
    .replace(/^(?:SECTION|CONCEPT|BLOCK|THEORY BLOCK|EXERCISE BLOCK|SECTIONS|CONCEPTS)\s*[0-9\–\-\s,\&]+(?:\:|\b)/gim, '')
    .replace(/#+\s*BLOCK\s*\d*\s*CHECKPOINT/gi, '# SECTION CHECKPOINT')
    .replace(/\bBlock\b/g, 'Section')
    .trim();
}

function parseTheoryText(text: string): TheoryParsedBlock[] {
  const lines = text.split('\n');
  const blocks: TheoryParsedBlock[] = [];
  let currentBlock: TheoryParsedBlock = { type: 'normal', title: '', content: '' };
  let currentLines: string[] = [];

  const flushBlock = () => {
    const content = currentLines.join('\n').trim();
    // Only push if there is actual content for the block, or if it's the only block with a title
    if (content) {
      blocks.push({
        type: currentBlock.type,
        title: currentBlock.title,
        content: content
      });
    }
    currentLines = [];
  };

  const isHeader = (line: string) => {
    const raw = line.trim();
    if (!raw) return null;

    const isMarkdownHeading = /^#+\s+/.test(raw);
    const isBoldHeading = /^\*\*[^*]+\*\*:?$/.test(raw);

    const cleanLine = raw
      .replace(/^#+\s*/, '')
      .replace(/^[\*\-]\s*/, '')
      .replace(/^>\s*/, '')
      .replace(/^\*\*\s*/, '')
      .replace(/\s*\*\*$/, '')
      .trim();

    if (!cleanLine) return null;

    const isColonTerminated = cleanLine.endsWith(':');

    // Check if it's a known header keyword or uppercase header line
    const isKnownHeaderLabel =
      isMarkdownHeading ||
      isBoldHeading ||
      /^(SAT TRAP|TRAP|IMPORTANT WARNING|COMMON ERROR|WARNING|DANGLING|MISPLACED|FAULTY|ILLOGICAL|AMBIGUOUS|PITFALL)/i.test(cleanLine) ||
      /^(EXAMPLE|EXAMPLES|WORKED EXAMPLE|ELITE EXAMPLE|ADVANCED WORKED EXAMPLE|WRONG EXAMPLE|WRONG|COMPARE|CLEAR VS|CORRECT VS|BEFORE VS|WORKED WALKTHROUGH|SENTENCE EXAMPLE|FRAGMENT TYPE|FRAGMENT)/i.test(cleanLine) ||
      /^(TRICK|TRICKS|ELIMINATION TECHNIQUE|SAT ELIMINATION|ELIMINATION METHOD|ELITE LESSON|FAST RECOGNITION|THE FAST TEST|SHORTCUT|SAT SHORTCUT|THE TECHNIQUE|ELIMINATION|THE LAYERING METHOD|LOGICAL ACTOR|\"WHO DID IT\?\"|REMOVAL TEST|SUBJECT-OBJECT TEST|FAST METHOD|ADVANCED METHOD|RECOGNITION TECHNIQUE)/i.test(cleanLine) ||
      /^(MASTER PRINCIPLE|THE CORE TEST|CORE MODIFIER|CORE-SENTENCE|IMPORTANT DISTINCTION|IMPORTANT|WHY THIS MATTERS|DECISION RULE|PAIRING PRINCIPLE|RULE|MASTER RULE|SECTION \d+|BLOCK \d+|CHAPTER \d+|PURPOSE OF THIS CHAPTER|CORE TEST)/i.test(cleanLine) ||
      (isColonTerminated && /^[A-Z0-9\s—–\-\(\)\"\']{3,65}\:$/i.test(cleanLine));

    if (!isKnownHeaderLabel) {
      return null;
    }

    // Determine card category type
    // 1. Red Box (Trap)
    if (/TRAP|WARNING|ERROR|DANGLING|MISPLACED|PITFALL|FAULTY|AMBIGUOUS/i.test(cleanLine)) {
      return { type: 'trap' as const, title: cleanLine };
    }

    // 2. Yellow Box (Example)
    if (/EXAMPLE|COMPARE|WRONG|WORKED|SKELETON|REVERSE ORDER|FRAGMENT|CLEAR VS|BEFORE|CORRECT|INCORRECT|WALKTHROUGH/i.test(cleanLine)) {
      return { type: 'example' as const, title: cleanLine };
    }

    // 3. Blue Box (Trick / Method / Shortcut / Elimination / Layering)
    if (/TECHNIQUE|TRICK|SHORTCUT|FAST|METHOD|TEST|DRILL|ELIMINATION|LAYER|ROUTINE|RECOGNITION/i.test(cleanLine)) {
      return { type: 'elimination' as const, title: cleanLine };
    }

    // 4. Green Box (Principle / Rule / Takeaway / Concept)
    return { type: 'principle' as const, title: cleanLine };
  };

  lines.forEach(line => {
    const header = isHeader(line);
    if (header) {
      flushBlock();
      currentBlock = { type: header.type, title: header.title, content: '' };
    } else {
      currentLines.push(line);
    }
  });

  flushBlock();
  return blocks;
}

function cleanInlineMarkdown(str: string): React.ReactNode {
  if (!str) return null;
  const cleaned = str.replace(/^#+\s*/, '').replace(/^>\s*/, '');
  const parts = cleaned.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          return <strong key={i} className="font-extrabold text-slate-950">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length >= 2 && !part.startsWith('**')) {
          return <em key={i} className="italic text-slate-900">{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </>
  );
}

function renderFormattedContent(content: string) {
  if (!content) return null;
  const lines = content.split('\n');

  return (
    <div className="space-y-2.5">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Subheaders starting with ### or ## or #
        if (/^#+\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#+\s+/, '');
          return (
            <div key={idx} className="font-extrabold text-slate-950 text-xs sm:text-sm pt-2 pb-1 flex items-center gap-2 border-b border-slate-200">
              <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"></span>
              <span>{cleanInlineMarkdown(title)}</span>
            </div>
          );
        }

        // Section or Step labels like "FRAGMENT TYPE 1 — DEPENDENT CLAUSE:" or "STEP 1: Find the main verb." or "Common causes include:"
        if ((/^([A-Z0-9\s—–\-\:\(\)]+)\:$/i.test(trimmed) && trimmed.length < 80) || /^STEP\s+\d+/i.test(trimmed)) {
          return (
            <div key={idx} className="font-extrabold text-slate-950 text-xs sm:text-sm pt-1.5 pb-0.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
              <span>{cleanInlineMarkdown(trimmed)}</span>
            </div>
          );
        }

        // Blockquotes starting with > or quoted sentences starting with "..." or "Core: ..." or "Correct: ..."
        if (
          /^>\s*/.test(trimmed) ||
          (trimmed.startsWith('"') && trimmed.length > 10) ||
          /^(Core|Correct|Incorrect|Subject|Verb|Object|Phrase|Clause)\:/i.test(trimmed) ||
          trimmed.includes('->')
        ) {
          const quoteText = trimmed.replace(/^>\s*/, '');
          return (
            <div key={idx} className="my-1.5 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-bold text-slate-950 leading-relaxed shadow-2xs font-mono">
              {cleanInlineMarkdown(quoteText)}
            </div>
          );
        }

        // Numbered lists starting with 1. 2. 3. or 1) 2)
        if (/^\d+[\.\)]\s+/.test(trimmed)) {
          const listText = trimmed.replace(/^\d+[\.\)]\s+/, '');
          const matchNum = trimmed.match(/^(\d+)[\.\)]/);
          const num = matchNum ? matchNum[1] : '';
          return (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-1 my-1">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                {num}
              </span>
              <span className="flex-1 pt-0.5">{cleanInlineMarkdown(listText)}</span>
            </div>
          );
        }

        // Bullet lists starting with * or - or •
        if (/^[\*\-•]\s+/.test(trimmed)) {
          const listText = trimmed.replace(/^[\*\-•]\s+/, '');
          return (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-1 my-1">
              <span className="text-indigo-600 font-black text-base shrink-0 leading-none mt-0.5">•</span>
              <span className="flex-1">{cleanInlineMarkdown(listText)}</span>
            </div>
          );
        }

        // Standard text paragraph
        return (
          <p key={idx} className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed my-0.5">
            {cleanInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function renderExampleContent(content: string) {
  const parts = content.split('\n');
  return (
    <div className="space-y-2">
      {parts.map((p, pIdx) => {
        const trimmed = p.trim();
        if (!trimmed) return null;

        if (/^#+\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#+\s+/, '');
          return (
            <div key={pIdx} className="font-extrabold text-amber-950 text-xs sm:text-sm pt-1.5 pb-0.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></span>
              <span>{cleanInlineMarkdown(title)}</span>
            </div>
          );
        }

        if (
          trimmed.startsWith('"') ||
          trimmed.startsWith('>') ||
          trimmed.includes('->') ||
          trimmed.startsWith('Core:') ||
          trimmed.startsWith('Correct:') ||
          trimmed.startsWith('Incorrect:') ||
          trimmed.startsWith('Subject:') ||
          trimmed.startsWith('Verb:') ||
          trimmed.startsWith('Object:')
        ) {
          const text = trimmed.replace(/^>\s*/, '');
          return (
            <div key={pIdx} className="p-3 sm:p-3.5 rounded-xl bg-white border border-amber-200 text-xs sm:text-sm font-extrabold text-slate-950 leading-relaxed shadow-2xs font-mono">
              {cleanInlineMarkdown(text)}
            </div>
          );
        }
        return (
          <p key={pIdx} className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
            {cleanInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

const FormattedConceptText: React.FC<{ text: string }> = ({ text }) => {
  const blocks = parseTheoryText(text);

  return (
    <div className="space-y-3">
      {blocks.map((block, idx) => {
        if (block.type === 'example') {
          return (
            <div
              key={idx}
              className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200/80 pb-2.5">
                <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{block.title || 'WORKED EXAMPLE'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 border border-amber-300 uppercase tracking-wider">
                  Yellow Card Example
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-900 leading-relaxed font-sans space-y-2">
                {renderExampleContent(block.content)}
              </div>
            </div>
          );
        }

        if (block.type === 'trap') {
          return (
            <div
              key={idx}
              className="bg-rose-50/90 border-2 border-rose-300 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-rose-200/80 pb-2">
                <span className="text-xs font-black text-rose-950 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>{block.title || 'SAT TRAP & COMMON PITFALL'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-950 border border-rose-300 uppercase tracking-wider">
                  High-Frequency Trap
                </span>
              </div>
              <div className="text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
                {renderFormattedContent(block.content)}
              </div>
            </div>
          );
        }

        if (block.type === 'elimination') {
          return (
            <div
              key={idx}
              className="bg-sky-50/90 border-2 border-sky-400 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-sky-200/80 pb-2">
                <span className="text-xs font-black text-sky-950 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>{block.title || 'SAT TRICK & FAST METHOD'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-sky-200 text-sky-950 border border-sky-300 uppercase tracking-wider">
                  Blue Box Trick
                </span>
              </div>
              <div className="text-xs sm:text-sm text-sky-950 font-medium leading-relaxed">
                {renderFormattedContent(block.content)}
              </div>
            </div>
          );
        }

        if (block.type === 'principle') {
          return (
            <div
              key={idx}
              className="bg-emerald-50/90 border-2 border-emerald-300 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-emerald-200/80 pb-2">
                <span className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{block.title || 'MASTER PRINCIPLE & CORE TEST'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-950 border border-emerald-300 uppercase tracking-wider">
                  Core Rule
                </span>
              </div>
              <div className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                {renderFormattedContent(block.content)}
              </div>
            </div>
          );
        }

        return (
          <div key={idx} className="bg-white/95 border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs my-3 space-y-2.5">
            {renderFormattedContent(block.content)}
          </div>
        );
      })}
    </div>
  );
};

interface WritingChapterSummary {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  sectionsCount: number;
  questionsCount: number;
  introduction: string;
  isAvailable: boolean;
}

const WRITING_CHAPTERS_LIST: WritingChapterSummary[] = [
  {
    id: 'ch1',
    chapterNumber: 1,
    chapterTitle: 'Sentence Structure & Boundaries',
    sectionsCount: 22,
    questionsCount: 105,
    introduction: 'Welcome to Chapter 1: Sentence Structure & Boundaries. This master-level chapter covers clauses, connectors, punctuation rules, transitions, and boundary diagnostics...',
    isAvailable: true
  },
  {
    id: 'ch2',
    chapterNumber: 2,
    chapterTitle: 'Punctuation',
    sectionsCount: 18,
    questionsCount: 100,
    introduction: 'Welcome to Chapter 2: Punctuation. Master the complete structural punctuation decision system, including sentence boundary rules, comma usage and restrictions, colons, semicolons, dashes, apostrophes, and punctuation interaction.',
    isAvailable: true
  },
  {
    id: 'ch3',
    chapterNumber: 3,
    chapterTitle: 'Grammar & Agreement',
    sectionsCount: 13,
    questionsCount: 70,
    introduction: 'Welcome to Chapter 3: Grammar & Agreement. Master the complete grammar and agreement system, including subject–verb agreement, verb tenses, sequence, subjunctive mood, pronoun reference & case, modifier placement, parallelism, and logical comparisons.',
    isAvailable: true
  },
  {
    id: 'ch4',
    chapterNumber: 4,
    chapterTitle: 'Modifiers, Comparisons & Parallelism',
    sectionsCount: 10,
    questionsCount: 70,
    introduction: 'Welcome to Chapter 4: Modifiers, Comparisons & Parallelism. Master the complete system for modifiers, comparisons, and structural parallelism across 10 sequential blocks.',
    isAvailable: true
  }
];

export const SatWritingSectionExplorer: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  const chapterMap: Record<string, typeof SAT_WRITING_CHAPTER_1_FULL> = {
    ch1: SAT_WRITING_CHAPTER_1_FULL,
    ch2: SAT_WRITING_CHAPTER_2_FULL,
    ch3: SAT_WRITING_CHAPTER_3_FULL,
    ch4: SAT_WRITING_CHAPTER_4_FULL,
    ch5: SAT_WRITING_CHAPTER_5_FULL,
    ch6: SAT_WRITING_CHAPTER_6_FULL,
    ch7: SAT_WRITING_CHAPTER_7_FULL,
  };

  const CHAPTER_METADATA = [
    {
      id: 'ch1',
      chapterNumber: 1,
      chapterTitle: 'Sentence Structure & Boundaries',
      sectionsCount: SAT_WRITING_CHAPTER_1_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_1_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 1: Sentence Structure & Boundaries. This master-level chapter covers clauses, connectors, punctuation rules, transitions, and boundary diagnostics.',
      isAvailable: true
    },
    {
      id: 'ch2',
      chapterNumber: 2,
      chapterTitle: 'Punctuation',
      sectionsCount: SAT_WRITING_CHAPTER_2_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_2_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 2: Punctuation. Master the complete structural punctuation decision system, including sentence boundary rules, comma usage and restrictions, colons, semicolons, dashes, apostrophes, and punctuation interaction.',
      isAvailable: true
    },
    {
      id: 'ch3',
      chapterNumber: 3,
      chapterTitle: 'Grammar & Agreement',
      sectionsCount: SAT_WRITING_CHAPTER_3_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_3_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 3: Grammar & Agreement. Master the complete grammar and agreement system, including subject–verb agreement, verb tenses, sequence, subjunctive mood, pronoun reference & case, modifier placement, parallelism, and logical comparisons.',
      isAvailable: true
    },
    {
      id: 'ch4',
      chapterNumber: 4,
      chapterTitle: 'Modifiers, Comparisons & Parallelism',
      sectionsCount: SAT_WRITING_CHAPTER_4_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_4_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 4: Modifiers, Comparisons & Parallelism. Master the complete system for modifiers, comparisons, and structural parallelism across 10 sequential blocks.',
      isAvailable: true
    },
    {
      id: 'ch5',
      chapterNumber: 5,
      chapterTitle: 'Advanced Editing: Precision, Concision, Logic & Structure',
      sectionsCount: SAT_WRITING_CHAPTER_5_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_5_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 5: Advanced Editing: Precision, Concision, Logic & Structure. Master the complete system for advanced editing, rhetorical precision, concision, and 5-layer diagnosis across 15 blocks and 152 questions.',
      isAvailable: true
    },
    {
      id: 'ch6',
      chapterNumber: 6,
      chapterTitle: 'Transitions, Sentence Placement & Rhetorical Synthesis',
      sectionsCount: SAT_WRITING_CHAPTER_6_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_6_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 6: Transitions, Sentence Placement & Rhetorical Synthesis. Master logical category classification, transition precision, sentence placement bridging, bullet-note synthesis, and goal-matching algorithms across 15 blocks and 152 questions.',
      isAvailable: true
    },
    {
      id: 'ch7',
      chapterNumber: 7,
      chapterTitle: 'Elite Writing: Complete Integration of All SAT Writing Skills',
      sectionsCount: SAT_WRITING_CHAPTER_7_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_7_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 7: Elite Writing: Complete Integration of All SAT Writing Skills. Master the full integration of sentence mechanics, modifier control, parallelism, certainty ladders, scope precision, and multi-constraint passage synthesis across 10 blocks and 148 questions.',
      isAvailable: true
    }
  ];

  const chapter = selectedChapterId && chapterMap[selectedChapterId] ? chapterMap[selectedChapterId] : SAT_WRITING_CHAPTER_1_FULL;

  // Active View Tab: 'theory' or 'practice'
  const [activeTab, setActiveTab] = useState<'theory' | 'practice'>('theory');

  // Theory State
  const [selectedBlockIndex, setSelectedBlockIndex] = useState<number>(0);
  const [selectedConceptIndex, setSelectedConceptIndex] = useState<number>(0);

  // Practice State
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<Record<string, number>>({});
  const [selectedExerciseTab, setSelectedExerciseTab] = useState<number>(0); // 0 = All Questions, 1-4 = Specific Exercise

  const exercisesList = useMemo(() => {
    const qList = chapter.exerciseBlocks.flatMap((b) => b.questions);
    const qWithGlobalNumber = qList.map((q, idx) => ({
      ...q,
      globalQuestionNumber: idx + 1,
    }));

    const totalQs = qWithGlobalNumber.length;
    const q1Count = Math.ceil(totalQs / 4);
    const e1 = qWithGlobalNumber.slice(0, q1Count);
    const e2 = qWithGlobalNumber.slice(q1Count, q1Count * 2);
    const e3 = qWithGlobalNumber.slice(q1Count * 2, q1Count * 3);
    const e4 = qWithGlobalNumber.slice(q1Count * 3);

    return [
      { exerciseNumber: 1, title: `Exercise 1: Targeted Practice Part 1 (${e1.length} Qs)`, questions: e1 },
      { exerciseNumber: 2, title: `Exercise 2: Targeted Practice Part 2 (${e2.length} Qs)`, questions: e2 },
      { exerciseNumber: 3, title: `Exercise 3: Mixed Practice (${e3.length} Qs)`, questions: e3 },
      { exerciseNumber: 4, title: `Exercise 4: Comprehensive Chapter Assessment (${e4.length} Qs)`, questions: e4 },
    ];
  }, [chapter]);

  const allQuestions = useMemo(() => exercisesList.flatMap((e) => e.questions), [exercisesList]);
  const totalQuestionsCount = allQuestions.length;
  const totalAnsweredCount = Object.keys(userSelectedAnswers).length;
  const totalCorrectCount = allQuestions.filter(
    (q) => userSelectedAnswers[q.id] === q.correctAnswer
  ).length;

  const activeExercises = useMemo(() => {
    if (selectedExerciseTab === 0) {
      return [
        {
          exerciseNumber: 0,
          title: `All ${totalQuestionsCount} Practice Questions`,
          questions: allQuestions,
        },
      ];
    }
    return exercisesList.filter((e) => e.exerciseNumber === selectedExerciseTab);
  }, [exercisesList, selectedExerciseTab, allQuestions, totalQuestionsCount]);

  const handleSelectAnswer = (questionId: string, optionIdx: number) => {
    setUserSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleResetPractice = () => {
    setUserSelectedAnswers({});
  };

  return (
    <div id="sat-writing-section-explorer" className="space-y-6 text-slate-900 min-h-[600px] pb-12">
      {!selectedChapterId ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-6"
        >
          {/* Simple Clean Header */}
          <div className="border-b border-slate-200 pb-2.5">
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              Available Writing Chapters
            </h2>
          </div>

          {/* White Topic Cards Grid - STRICTLY TWO PER ROW ON ALL SCREENS (grid-cols-2) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {CHAPTER_METADATA.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedChapterId(item.id);
                  setActiveTab('theory');
                  setSelectedBlockIndex(0);
                  setSelectedConceptIndex(0);
                }}
                className="bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-400 rounded-2xl p-3.5 sm:p-5 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group relative overflow-hidden shadow-xs hover:shadow-md"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                      CH. {item.chapterNumber}
                    </span>
                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-500 font-bold">
                      <span>{item.sectionsCount} Sec</span>
                      {item.questionsCount > 0 && (
                        <span className="text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200">
                          {item.questionsCount} Qs
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-lg font-black text-slate-950 group-hover:text-slate-800 transition-colors tracking-tight line-clamp-2 leading-tight">
                    {item.chapterTitle}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-slate-500 leading-snug font-medium line-clamp-2">
                    {item.introduction}
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
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Back Navigation Button & Info */}
          <div className="flex items-center justify-between bg-white border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-xs">
            <button
              onClick={() => setSelectedChapterId(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-900 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-slate-800" />
              <span>← Back to Writing Chapters</span>
            </button>

            <span className="text-xs font-black text-slate-800 bg-white uppercase tracking-wider px-3.5 py-1 rounded-full border border-slate-200 shadow-xs">
              Chapter {chapter.chapterNumber} of {WRITING_CHAPTERS_LIST.length}
            </span>
          </div>

          {/* CHAPTER WELCOME INTRO CARD */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Welcome to Chapter {chapter.chapterNumber}: {chapter.chapterTitle}. {chapter.introduction}
            </p>
          </div>

          {/* TWO TAB NAVIGATION BUTTONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <button
              onClick={() => setActiveTab('theory')}
              className={`p-3.5 sm:p-4 rounded-2xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2 text-center border ${
                activeTab === 'theory'
                  ? 'bg-slate-800 text-white border-slate-800 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 border-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>1. Core Theory & Worked Examples</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`p-3.5 sm:p-4 rounded-2xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-2 text-center border ${
                activeTab === 'practice'
                  ? 'bg-slate-800 text-white border-slate-800 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 border-slate-200'
              }`}
            >
              <Target className="w-4 h-4 shrink-0" />
              <span>2. Practice Exercises ({totalQuestionsCount} Qs)</span>
            </button>
          </div>

          {/* PRACTICE & MASTER THESE CONCEPTS BANNER */}
          <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>PRACTICE & MASTER THESE CONCEPTS</span>
              </div>
              <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                Put your knowledge into action with {totalQuestionsCount} curated practice questions featuring step-by-step solutions, interactive diagrams, and instant feedback.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('practice');
              }}
              className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shrink-0 transition-all shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Start Practice Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* THEORY VIEW */}
          {activeTab === 'theory' && (
            <div className="space-y-6">
              {/* Numbered Theory Block Cards */}
              {chapter.theoryBlocks.map((block) => (
                <div
                  key={block.blockNumber}
                  className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4"
                >
                    <div className="border-b border-slate-100 pb-3 flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-base sm:text-xl font-black text-slate-950 tracking-tight flex items-center gap-2.5">
                        <span className="p-2 rounded-xl bg-indigo-100 text-indigo-800 shrink-0">
                          <BookOpen className="w-5 h-5" />
                        </span>
                        <span>{cleanTitle(block.title)}</span>
                      </h3>
                      {block.description && (
                        <span className="text-xs text-slate-500 font-medium">{cleanTitle(block.description)}</span>
                      )}
                    </div>

                    {/* Render Concepts in this Block */}
                    <div className="space-y-4 pt-1">
                      {block.concepts.map((concept) => (
                        <div key={concept.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                          <h4 className="text-sm sm:text-base font-black text-slate-950 border-b border-slate-200/60 pb-2">
                            {cleanTitle(concept.title)}
                          </h4>

                          <FormattedConceptText text={cleanFullText(concept.fullText)} />

                          {concept.rules && concept.rules.length > 0 && (
                            <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200/80 space-y-2">
                              <span className="text-xs font-black text-indigo-950 uppercase tracking-wider block">
                                📌 Key Rules & Non-Negotiables
                              </span>
                              <ul className="space-y-1 text-xs text-indigo-900 font-medium">
                                {concept.rules.map((rule, rIdx) => (
                                  <li key={rIdx} className="flex items-start gap-2">
                                    <span className="text-indigo-600 font-bold">•</span>
                                    <span>{rule}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {concept.examples && concept.examples.length > 0 && (
                            <div className="space-y-3 pt-2">
                              <div className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-slate-800" />
                                <span>Worked-Out Step-by-Step Examples</span>
                              </div>
                              <div className="space-y-3">
                                {concept.examples.map((ex, exIdx) => (
                                  <div
                                    key={exIdx}
                                    className="bg-amber-50/70 border-2 border-amber-300/90 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs"
                                  >
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                      <span className="text-xs font-black text-amber-950 uppercase tracking-wider">
                                        {ex.label ? ex.label.toUpperCase() : `EXAMPLE ${exIdx + 1}: WORKED WALKTHROUGH`}
                                      </span>
                                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                                        ex.isCorrect !== undefined
                                          ? ex.isCorrect
                                            ? 'bg-emerald-100/90 text-emerald-900 border-emerald-300'
                                            : 'bg-rose-100/90 text-rose-900 border-rose-300'
                                          : 'bg-amber-100/90 text-amber-900 border-amber-300'
                                      }`}>
                                        {ex.isCorrect !== undefined
                                          ? ex.isCorrect ? 'Correct Structure' : 'Incorrect / Trap'
                                          : 'Textbook Walkthrough'}
                                      </span>
                                    </div>

                                    {ex.sentence && (
                                      <div className="p-3.5 rounded-xl bg-white border border-amber-200 text-xs sm:text-sm font-extrabold text-slate-950 leading-relaxed font-mono shadow-2xs">
                                        {ex.sentence}
                                      </div>
                                    )}

                                    {ex.explanation && (
                                      <div className="p-4 rounded-xl bg-white border border-amber-200/90 space-y-2 text-xs sm:text-sm leading-relaxed shadow-2xs">
                                        <div className="font-black text-slate-950 flex items-center gap-1.5 text-xs uppercase tracking-wider border-b border-amber-100 pb-2">
                                          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                                          <span>STEP-BY-STEP SOLUTION & GRAMMATICAL PROOF</span>
                                        </div>
                                        <p className="text-slate-800 font-medium text-xs sm:text-sm leading-relaxed pt-0.5">
                                          {ex.explanation}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* PRACTICE QUESTIONS VIEW */}
          {activeTab === 'practice' && (
            <div className="space-y-8">
              {/* Top Practice Summary Bar */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-600" />
                      <span>{totalQuestionsCount} Practice Exercises</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Choose an exercise set or scroll down to work through questions sequentially with instant feedback.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <div className="text-xs font-black text-slate-900">
                        {totalAnsweredCount} / {totalQuestionsCount} Answered
                      </div>
                      <div className="text-[11px] font-bold text-indigo-600 font-mono">
                        Score: {totalCorrectCount}/{totalAnsweredCount} ({totalAnsweredCount > 0 ? Math.round((totalCorrectCount / totalAnsweredCount) * 100) : 0}%)
                      </div>
                    </div>
                    <button
                      onClick={handleResetPractice}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset All</span>
                    </button>
                  </div>
                </div>

                {/* Exercise Navigation Tabs (0 = All Questions, 1-4 = Specific Exercises) */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  <button
                    onClick={() => setSelectedExerciseTab(0)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                      selectedExerciseTab === 0
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>All Questions</span>
                    <span className={`text-[10px] font-mono ${selectedExerciseTab === 0 ? 'text-slate-300' : 'text-slate-400'}`}>
                      ({totalAnsweredCount}/{totalQuestionsCount})
                    </span>
                  </button>
                  {exercisesList.map((ex) => {
                    const exAnswered = ex.questions.filter((q) => userSelectedAnswers[q.id] !== undefined).length;
                    const isSelected = selectedExerciseTab === ex.exerciseNumber;
                    return (
                      <button
                        key={ex.exerciseNumber}
                        onClick={() => setSelectedExerciseTab(ex.exerciseNumber)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-xs'
                            : 'bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span>Exercise {ex.exerciseNumber}</span>
                        <span className={`text-[10px] font-mono ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                          ({exAnswered}/{ex.questions.length})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Exercises Questions Feed */}
              <div className="space-y-10">
                {activeExercises.map((ex) => {
                  return (
                    <div
                      key={ex.exerciseNumber}
                      id={`exercise-${ex.exerciseNumber}`}
                      className="space-y-6 pt-2"
                    >
                      {/* Clean Light Exercise Header (No Dark Blue Box) */}
                      <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-black text-xs flex items-center justify-center shadow-xs shrink-0">
                            E{ex.exerciseNumber}
                          </span>
                          <h3 className="text-base sm:text-lg font-black text-slate-950">
                            {ex.title}
                          </h3>
                        </div>
                        <span className="text-xs font-extrabold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/80">
                          {ex.questions.length} Questions
                        </span>
                      </div>

                      {/* Question Cards Stack */}
                      <div className="space-y-6">
                        {ex.questions.map((q) => {
                          const selectedOption = userSelectedAnswers[q.id];
                          const isSubmitted = selectedOption !== undefined;
                          const isCorrect = selectedOption === q.correctAnswer;

                          return (
                            <div
                              key={q.id}
                              className={`bg-white border-2 rounded-3xl p-5 sm:p-8 space-y-6 transition-all shadow-xs ${
                                isSubmitted
                                  ? isCorrect
                                    ? 'border-emerald-400 bg-emerald-50/10'
                                    : 'border-rose-400 bg-rose-50/10'
                                  : 'border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {/* Question Top Header */}
                              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 text-xs gap-2">
                                <div className="flex items-center gap-2">
                                  <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                                    {q.globalQuestionNumber}
                                  </span>
                                  <span className="px-3 py-1 rounded-full font-black bg-slate-900 text-white uppercase text-[10px]">
                                    {q.difficulty}
                                  </span>
                                  <span className="px-2.5 py-1 rounded-full font-bold bg-slate-100 text-slate-700 text-[10px]">
                                    Tag: {q.skillTag}
                                  </span>
                                </div>

                                <div>
                                  {isSubmitted ? (
                                    isCorrect ? (
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs border border-emerald-300">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        Correct Answer
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 font-extrabold text-xs border border-rose-300">
                                        <XCircle className="w-4 h-4 text-rose-600" />
                                        Incorrect
                                      </span>
                                    )
                                  ) : (
                                    <span className="text-xs text-slate-400 font-medium">
                                      Select an option below
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Question Prompt */}
                              <div className="space-y-3">
                                <p className="text-base sm:text-lg font-extrabold text-slate-950 leading-relaxed font-sans">
                                  {q.prompt}
                                </p>
                              </div>

                              {/* Options List */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {q.options.map((optionText, optIdx) => {
                                  const isThisSelected = selectedOption === optIdx;
                                  let btnStyle = 'bg-white border-slate-200 text-slate-900 hover:bg-indigo-50/80 hover:border-indigo-400 shadow-2xs';

                                  if (isSubmitted) {
                                    if (optIdx === q.correctAnswer) {
                                      btnStyle = 'bg-emerald-500 border-emerald-600 text-white font-bold shadow-xs';
                                    } else if (isThisSelected) {
                                      btnStyle = 'bg-rose-500 border-rose-600 text-white font-bold shadow-xs';
                                    } else {
                                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                                    }
                                  }

                                  return (
                                    <button
                                      key={optIdx}
                                      onClick={() => handleSelectAnswer(q.id, optIdx)}
                                      className={`text-left p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-center justify-between cursor-pointer ${btnStyle}`}
                                    >
                                      <div className="flex items-center gap-3">
                                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                                          isSubmitted
                                            ? optIdx === q.correctAnswer || isThisSelected
                                              ? 'bg-white/20 text-white'
                                              : 'bg-slate-100 text-slate-600'
                                            : 'bg-slate-100 text-slate-800 border border-slate-300'
                                        }`}>
                                          {String.fromCharCode(65 + optIdx)}
                                        </span>
                                        <span className="leading-snug">{optionText}</span>
                                      </div>
                                      {isSubmitted && optIdx === q.correctAnswer && (
                                        <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                      )}
                                      {isSubmitted && isThisSelected && optIdx !== q.correctAnswer && (
                                        <XCircle className="w-5 h-5 text-white shrink-0" />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Comprehensive Solution Banner */}
                              {isSubmitted && (
                                <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/80 border border-indigo-200 space-y-4 text-xs sm:text-sm text-slate-800">
                                  <div className="font-extrabold text-indigo-950 flex items-center gap-2 border-b border-indigo-200 pb-2">
                                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                                    <span>Complete Explanatory Breakdown</span>
                                  </div>

                                  {/* Core Reasoning */}
                                  <div className="space-y-1">
                                    <span className="font-black text-indigo-900 uppercase text-[10px] tracking-wider block">Core Reasoning & Rule</span>
                                    <p className="leading-relaxed">{q.explanation.coreReasoning}</p>
                                  </div>

                                  {/* Before & After Analysis */}
                                  {q.explanation.beforeAndAfterAnalysis && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-white border border-indigo-100">
                                      <div>
                                        <span className="font-bold text-slate-500 text-[10px] block">BEFORE THE BLANK:</span>
                                        <p className="font-semibold text-slate-900">{q.explanation.beforeAndAfterAnalysis.before}</p>
                                      </div>
                                      <div>
                                        <span className="font-bold text-slate-500 text-[10px] block">AFTER THE BLANK:</span>
                                        <p className="font-semibold text-slate-900">{q.explanation.beforeAndAfterAnalysis.after}</p>
                                      </div>
                                    </div>
                                  )}

                                  {/* Why Correct */}
                                  <div className="space-y-1 text-emerald-950 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                                    <span className="font-black text-emerald-900 uppercase text-[10px] tracking-wider block">Why Option {String.fromCharCode(65 + q.correctAnswer)} is Correct</span>
                                    <p>{q.explanation.whyCorrect}</p>
                                  </div>

                                  {/* Distractor Analysis */}
                                  {q.explanation.distractorAnalysis && (
                                    <div className="space-y-2 pt-1">
                                      <span className="font-black text-slate-900 uppercase text-[10px] tracking-wider block">Distractor Elimination Breakdown</span>
                                      <div className="space-y-1.5">
                                        {q.explanation.distractorAnalysis.map((d, dIdx) => (
                                          <div key={dIdx} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 text-xs">
                                            <span className="font-black text-slate-900 min-w-[24px]">[{d.optionLabel}]:</span>
                                            <span className="text-slate-700">{d.whyWrong}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Elimination Shortcut */}
                                  {q.explanation.eliminationShortcut && (
                                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-semibold text-xs flex items-center gap-2">
                                      <span className="font-black uppercase text-[10px] text-amber-900">⚡ Fast Elimination Shortcut:</span>
                                      <span>{q.explanation.eliminationShortcut}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

