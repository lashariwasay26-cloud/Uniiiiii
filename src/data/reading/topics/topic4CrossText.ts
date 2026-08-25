import { ReadingChapter } from '../readingChaptersData';
import { T4_DEMONSTRATIONS } from './t4Demos';
import { T4_EXERCISES_PART1 } from './t4Exercises1';
import { T4_EXERCISES_PART2 } from './t4Exercises2';

export const TOPIC_4_CROSS_TEXT: ReadingChapter = {
  id: 'topic-4-cross-text',
  chapterNumber: 4,
  title: 'Chapter 4: Comparative Perspective Analysis & Dual-Text Synthesis',
  sectionsCount: 8,
  totalQuestions: 60,
  introduction: 'Masterclass on Cross-Text Connections: Analyzing paired passages, synthesizing contrasting academic viewpoints, and mapping agreement, disagreement, and qualification vectors.',
  curriculumStandards: [
    'Digital SAT Blueprint: Craft & Structure - Comparative Synthesis',
    'Core Skill: Paired Text Alignment & Stance Divergence'
  ],
  coreTechniques: [
    {
      name: 'The Dual-Text Vector Engine (Custom Trick)',
      summary: 'Create a side-by-side stance table for Text 1 and Text 2 to instantly isolate points of convergence and divergence before reviewing choices.',
      howToApply: 'Summarize Text 1 in 3 words and Text 2 in 3 words. Note whether Text 2 agrees, qualifies, or directly refutes Text 1.'
    },
    {
      name: 'Agreement vs Disagreement Vectoring',
      summary: 'Identify the exact sub-claim where the authors overlap versus where their opinions diverge.',
      howToApply: 'Distractors often claim the authors disagree on something they both accept, or claim they agree on something they debate.'
    },
    {
      name: 'Avoiding One-Text-Only Traps',
      summary: 'An option that accurately summarizes Text 1 but ignores Text 2\'s response is always incorrect for Cross-Text Synthesis prompts.',
      howToApply: 'Ensure the chosen option explicitly addresses the relationship between BOTH authors.'
    }
  ],
  contextClueRules: [
    {
      triggerType: 'Direct Refutation in Text 2 ("However", "Fails to consider")',
      description: 'Text 2 directly challenges a key premise or methodology of Text 1.',
      example: 'Text 1 argues AI automates writing. Text 2 argues AI lacks human emotional resonance. Response: Text 2 author would claim Text 1 overstates AI\'s creative capability.'
    }
  ],
  demonstrations: T4_DEMONSTRATIONS,
  exercises: [...T4_EXERCISES_PART1, ...T4_EXERCISES_PART2]
};
