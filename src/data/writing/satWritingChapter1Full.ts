import { FullSatWritingChapter } from './satWritingTypes';
import { THEORY_BLOCK_1, THEORY_BLOCK_2, THEORY_BLOCK_3, THEORY_BLOCK_4, THEORY_BLOCK_5, THEORY_BLOCK_6 } from './satWritingChapter1Part1';
import { THEORY_BLOCK_7, THEORY_BLOCK_8, THEORY_BLOCK_9, THEORY_BLOCK_10, THEORY_BLOCK_11 } from './satWritingChapter1Part2';
import { THEORY_BLOCK_12, THEORY_BLOCK_13, THEORY_BLOCK_14, THEORY_BLOCK_15, THEORY_BLOCK_16, THEORY_BLOCK_17 } from './satWritingChapter1Part3';
import { THEORY_BLOCK_18, THEORY_BLOCK_19, THEORY_BLOCK_20, THEORY_BLOCK_21, THEORY_BLOCK_22 } from './satWritingChapter1Part4';
import { EXERCISE_BLOCK_1, EXERCISE_BLOCK_2 } from './satWritingChapter1QuestionsPart1';
import { EXERCISE_BLOCK_3, EXERCISE_BLOCK_4, EXERCISE_BLOCK_5, EXERCISE_BLOCK_6, EXERCISE_BLOCK_7, EXERCISE_BLOCK_8 } from './satWritingChapter1QuestionsPart2';

export const SAT_WRITING_CHAPTER_1_FULL: FullSatWritingChapter = {
  chapterNumber: 1,
  chapterTitle: 'Chapter 1 — Sentence Structure & Boundaries',
  subtitle: 'Mastering Clauses, Connectors, Punctuation Rules, Transitions, and Boundary Diagnostics for SAT Writing',
  introduction: `A large class of SAT Writing questions tests whether ideas have been connected correctly.
The challenge is not simply knowing what a comma, period, or semicolon is.
The real skill is determining:
1. What kind of grammatical unit appears before the punctuation?
2. What kind of grammatical unit appears after it?
3. Are the two ideas independent or dependent?
4. What relationship exists between them?
5. Which punctuation or connector can legally join them?
6. Which answer choices can be eliminated immediately?`,
  purpose: 'To provide authoritative, exhaustive instruction and 105 practice questions on SAT sentence structure, clauses, punctuation boundaries, transitions, and modifier placement without any omissions or shortcuts.',
  masterPrinciple: 'Before choosing an answer, identify the structures on BOTH sides of the tested location. Ask: "What is immediately before the blank?" "What is immediately after the blank?" Then determine whether each side is capable of standing as a complete sentence.',
  theoryBlocks: [
    THEORY_BLOCK_1,
    THEORY_BLOCK_2,
    THEORY_BLOCK_3,
    THEORY_BLOCK_4,
    THEORY_BLOCK_5,
    THEORY_BLOCK_6,
    THEORY_BLOCK_7,
    THEORY_BLOCK_8,
    THEORY_BLOCK_9,
    THEORY_BLOCK_10,
    THEORY_BLOCK_11,
    THEORY_BLOCK_12,
    THEORY_BLOCK_13,
    THEORY_BLOCK_14,
    THEORY_BLOCK_15,
    THEORY_BLOCK_16,
    THEORY_BLOCK_17,
    THEORY_BLOCK_18,
    THEORY_BLOCK_19,
    THEORY_BLOCK_20,
    THEORY_BLOCK_21,
    THEORY_BLOCK_22
  ],
  exerciseBlocks: [
    EXERCISE_BLOCK_1,
    EXERCISE_BLOCK_2,
    EXERCISE_BLOCK_3,
    EXERCISE_BLOCK_4,
    EXERCISE_BLOCK_5,
    EXERCISE_BLOCK_6,
    EXERCISE_BLOCK_7,
    EXERCISE_BLOCK_8
  ]
};
