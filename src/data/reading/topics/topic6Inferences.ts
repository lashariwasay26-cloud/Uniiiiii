import { ReadingChapter } from '../readingChaptersData';
import { T6_DEMONSTRATIONS } from './t6Demos';
import { T6_EXERCISES_PART1 } from './t6Exercises1';
import { T6_EXERCISES_PART2 } from './t6Exercises2';

export const TOPIC_6_INFERENCES: ReadingChapter = {
  id: 'topic-6-inferences',
  chapterNumber: 6,
  title: 'Chapter 6: Deductive Derivation & Logical Completion',
  sectionsCount: 8,
  totalQuestions: 60,
  introduction: 'Masterclass on Inferences & Logical Completion: Completing logical passages conservatively, enforcing strict deductive boundaries, and avoiding ungrounded real-world speculation.',
  curriculumStandards: [
    'Digital SAT Blueprint: Information & Ideas - Inferences & Logical Completion',
    'Core Skill: Conditional Logic Chains & Conservative Deduction'
  ],
  coreTechniques: [
    {
      name: 'The Strict Deductive Barrier (Custom Trick)',
      summary: 'Enforce a 0.5-step maximum extrapolation limit from explicit premises. Reject any conclusion requiring real-world "what-if" leaps or unmentioned variables.',
      howToApply: 'Follow the if/then premise chain established in the text. Look for the option that serves as the necessary, minimal logical outcome.'
    },
    {
      name: 'Penultimate Premise Connection',
      summary: 'Connect the second-to-last sentence directly to the blank to maintain uninterrupted logical flow.',
      howToApply: 'Read the penultimate sentence carefully—it provides the immediate setup and causal mechanism for the blank.'
    },
    {
      name: 'Strict No-Speculation Enforcement',
      summary: 'Never choose an option requiring assumptions about future trends or absolute generalizations lacking textual support.',
      howToApply: 'Eliminate options that expand scope beyond the immediate logical premises established in the text.'
    }
  ],
  contextClueRules: [
    {
      triggerType: 'Logical Completion Blank at End of Passage ("______.")',
      description: 'Signals that the blank must complete the author\'s logical train of thought based exclusively on preceding sentences.',
      example: 'Premise 1: Enzyme X degrades under heat. Premise 2: Sample A was exposed to 90°C heat. Conclusion: Sample A experienced significant degradation of Enzyme X.'
    }
  ],
  demonstrations: T6_DEMONSTRATIONS,
  exercises: [...T6_EXERCISES_PART1, ...T6_EXERCISES_PART2]
};
