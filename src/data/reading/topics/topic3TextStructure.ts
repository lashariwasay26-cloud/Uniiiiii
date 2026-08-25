import { ReadingChapter } from '../readingChaptersData';
import { T3_DEMONSTRATIONS } from './t3Demos';
import { T3_EXERCISES_PART1 } from './t3Exercises1';
import { T3_EXERCISES_PART2 } from './t3Exercises2';

export const TOPIC_3_TEXT_STRUCTURE: ReadingChapter = {
  id: 'topic-3-text-structure',
  chapterNumber: 3,
  title: 'Chapter 3: Rhetorical Architecture & Functional Mechanics',
  sectionsCount: 8,
  totalQuestions: 60,
  introduction: 'Masterclass on Text Structure & Rhetorical Purpose: Deconstructing paragraph-level organizational flow, tracking argumentative transitions, and analyzing the precise functional role of specific sentences.',
  curriculumStandards: [
    'Digital SAT Blueprint: Craft & Structure - Text Structure & Purpose',
    'Core Skill: Rhetorical Function & Organizational Mapping'
  ],
  coreTechniques: [
    {
      name: 'Uni Route Rhetorical Blueprinting (Custom Trick)',
      summary: 'Build a 4-step structural flowchart (Consensus -> Pivot -> Evidence -> Implication) for every passage to immediately categorize functional purpose.',
      howToApply: 'Map each sentence\'s macro-function (e.g., introducing a theory vs. presenting contradictory data) before looking at choices.'
    },
    {
      name: 'Overall Purpose vs Function of a Sentence',
      summary: 'Differentiate between the overall goal of the whole passage versus the functional role of a single sentence.',
      howToApply: 'Check whether the prompt asks for the main purpose of the text or the specific function of an underlined sentence.'
    },
    {
      name: 'Eliminating Content-Based Distractors',
      summary: 'Incorrect purpose options often summarize what the passage says rather than describing what the passage DOES rhetorically.',
      howToApply: 'Look for active rhetorical verbs in options (e.g., "qualifies", "reconciles", "illustrates") and ensure the verb matches the author\'s action.'
    }
  ],
  contextClueRules: [
    {
      triggerType: 'Pivotal Contrast ("However", "Yet")',
      description: 'Signals a shift from summarizing existing consensus or background context to presenting the author\'s main thesis or new evidence.',
      example: '"Critics argued X. However, new research shows Y." -> Function: Shifts from traditional view to new evidence.'
    },
    {
      triggerType: 'Illustrative Phrases ("For instance", "Specifically")',
      description: 'Signals that a sentence provides a concrete supporting case study for a general assertion made in the preceding sentence.',
      example: '"Plant defenses vary widely. For instance, acacia trees produce nectar..." -> Function: Provides an example of the preceding claim.'
    }
  ],
  demonstrations: T3_DEMONSTRATIONS,
  exercises: [...T3_EXERCISES_PART1, ...T3_EXERCISES_PART2]
};
