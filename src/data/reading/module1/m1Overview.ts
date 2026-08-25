import { ReadingModuleOverview } from '../readingTypes';

export const READING_MODULE_1_OVERVIEW: ReadingModuleOverview = {
  moduleNumber: 1,
  title: 'Information & Key Ideas',
  subtitle: 'Advanced Digital SAT Reading Mastery: Lexical Precision, Central Ideas & Structural Mechanics',
  curriculumStandards: [
    'Standard 1: Lexical Precision & Contextual Decoding',
    'Standard 2: Macro-Structural Synthesis & Central Thesis'
  ],
  coreTechniques: [
    {
      name: 'Uni Route Universal Lexical Vectoring (Custom Trick)',
      summary: 'Never read answer choices first. Map the syntactic polarity (+ / -) and semantic register of the surrounding sentence using a vector scale before evaluating options.',
      howToApply: 'Locate the target word in the text. Cover the choices. Underline direct context clues (contrast transitions, synonym restatements). Write a mental anchor word and match options to your vector.'
    },
    {
      name: 'The 0.5-Step Verification Filter (Custom Trick)',
      summary: 'The correct answer is a direct restatement or a conservative 0.5-step deduction from explicit passage sentences, avoiding ungrounded real-world leaps.',
      howToApply: 'If an option requires making 1 or more logical assumptions beyond literal text statements, eliminate it immediately as an unmentioned extrapolation.'
    },
    {
      name: 'Extreme Word Scrubbing',
      summary: 'Scrutinize absolute modifiers like "always", "never", "only", "entirely", "proved", or "impossible".',
      howToApply: 'Check if the passage uses hedging language like "often", "suggests", or "tends to". If hedged passage language contrasts with absolute option language, eliminate the option.'
    },
    {
      name: 'Scope Bounding',
      summary: 'Filter out choices that introduce true real-world background knowledge not directly supported by the passage.',
      howToApply: 'Verify that you can point your finger at the exact line or phrase in the paragraph that proves the choice. If not, it fails scope bounding.'
    },
    {
      name: 'Secondary Definition Neutralization',
      summary: 'Digital SAT hard modules frequently test common words in secondary academic senses (e.g., "qualify", "check", "reserve", "plastic").',
      howToApply: 'Do not pick option A automatically based on primary dictionary definitions. Verify syntactic and logical coherence within the specific context.'
    }
  ]
};
