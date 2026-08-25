import { ReadingChapter } from '../readingChaptersData';
import { T5_DEMONSTRATIONS } from './t5Demos';
import { T5_EXERCISES_PART1 } from './t5Exercises1';
import { T5_EXERCISES_PART2 } from './t5Exercises2';

export const TOPIC_5_COMMAND_OF_EVIDENCE: ReadingChapter = {
  id: 'topic-5-command-of-evidence',
  chapterNumber: 5,
  title: 'Chapter 5: Empirical Evidence & Quantitative Grounding',
  sectionsCount: 8,
  totalQuestions: 60,
  introduction: 'Masterclass on Command of Evidence (Textual & Quantitative): Evaluating quote relevance, matching findings directly to stated hypotheses, and interpreting data tables, bar graphs, and scatterplots with exactness.',
  curriculumStandards: [
    'Digital SAT Blueprint: Information & Ideas - Command of Evidence (Textual & Quantitative)',
    'Core Skill: Hypothesis Variable Matching & Data Table Coordinate Reading'
  ],
  coreTechniques: [
    {
      name: 'Uni Route Hypothesis Target Isolator (Custom Trick)',
      summary: 'Before looking at choices or graph data, underline the EXACT hypothesis stated in the text. Your selected choice MUST directly support or weaken THAT hypothesis, not a secondary fact.',
      howToApply: 'Ask: "What is the researcher trying to prove?" Match numerical or textual evidence directly to the variable named in the hypothesis.'
    },
    {
      name: 'Data Table & Graph Zero-Extrapolation Rule',
      summary: 'On quantitative evidence questions, never assume a trend continues beyond visible data points on the chart. Read exact row/column coordinates.',
      howToApply: 'Locate the exact categories or years mentioned in options inside graph legends and axes.'
    },
    {
      name: 'Relevance vs. Truth Verification',
      summary: 'Distractors often present accurate numbers from tables that answer the wrong question, or quotes describing a related topic without proving the specific claim.',
      howToApply: 'Verify both truth (does the data/text state this?) and relevance (does this prove the specific hypothesis?).'
    }
  ],
  contextClueRules: [
    {
      triggerType: 'Hypothesis Prompt ("Which finding, if true, would support...")',
      description: 'Requires finding the finding that creates a direct logical link to the researcher\'s prediction.',
      example: 'Hypothesis: Drought causes plant species A to outcompete species B. Evidence: Species A maintains 40% higher biomass than B during drought years.'
    }
  ],
  demonstrations: T5_DEMONSTRATIONS,
  exercises: [...T5_EXERCISES_PART1, ...T5_EXERCISES_PART2]
};
