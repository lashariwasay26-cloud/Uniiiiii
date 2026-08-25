import { ReadingChapter } from '../readingChaptersData';
import { T2_DEMONSTRATIONS } from './t2Demos';
import { T2_EXERCISES_PART1 } from './t2Exercises1';
import { T2_EXERCISES_PART2 } from './t2Exercises2';

export const TOPIC_2_CENTRAL_IDEAS: ReadingChapter = {
  id: 'topic-2-central-ideas',
  chapterNumber: 2,
  title: 'Chapter 2: Macro-Structural Synthesis & Central Thesis',
  sectionsCount: 8,
  totalQuestions: 60,
  introduction: 'Masterclass on Identifying Central Claims & Detail Extraction: Isolating the overarching authorial thesis, separating macro arguments from micro supporting examples, and maintaining rigorous scope boundaries.',
  curriculumStandards: [
    'Digital SAT Blueprint: Information & Ideas - Central Ideas & Details',
    'Core Skill: Macro Thesis Isolation & Detail Discrimination'
  ],
  coreTechniques: [
    {
      name: 'The Core Anchor Matrix (Custom Trick)',
      summary: 'Extract the 3-word subject and 3-word predicate of the author\'s primary argument to anchor your search against scope-creep distractors.',
      howToApply: 'Distill the governing thesis into a brief, rigid summary statement before inspecting options to instantly reject narrow detail traps.'
    },
    {
      name: 'The 0.5-Step Restatement Filter',
      summary: 'The correct main idea or detail choice on standardized tests is always a direct restatement or conservative 0.5-step summary of explicit text statements.',
      howToApply: 'Underline the core claim in the text. Find the option that paraphrases this exact claim without extrapolating beyond what is written.'
    },
    {
      name: 'Main Idea vs. Minor Detail Discrimination',
      summary: 'Distractors often present factually accurate details from the passage that represent only a narrow sub-point rather than the central overall argument.',
      howToApply: 'Ask: "Does this option summarize the WHOLE passage or just one supporting example?" If it only describes one detail, eliminate it.'
    }
  ],
  contextClueRules: [
    {
      triggerType: 'Thesis Indicators ("However", "Importantly", "We argue")',
      description: 'The central thesis usually appears immediately after a pivot or toward the conclusion of a research summary.',
      example: '"Previous studies assumed X. However, our new findings reveal that Y is the driver." -> Thesis = Y is the driver.'
    },
    {
      triggerType: 'Detail Retrieval Targets ("According to the text")',
      description: 'Locate the exact keyword in the question prompt within the passage, then read 1 sentence before and 1 sentence after to extract the stated fact.',
      example: '"According to the passage, why did the researchers modify the alloy?" -> Find "alloy" and read the explicit reason stated.'
    }
  ],
  demonstrations: T2_DEMONSTRATIONS,
  exercises: [...T2_EXERCISES_PART1, ...T2_EXERCISES_PART2]
};
