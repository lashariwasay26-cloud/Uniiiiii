import { ReadingChapter } from '../readingChaptersData';
import { T1_DEMONSTRATIONS } from './t1Demos';
import { T1_EXERCISES_PART1 } from './t1Exercises1';
import { T1_EXERCISES_PART2 } from './t1Exercises2';

export const TOPIC_1_WORDS_IN_CONTEXT: ReadingChapter = {
  id: 'topic-1-words-in-context',
  chapterNumber: 1,
  title: 'Chapter 1: Lexical Precision & Contextual Decoding',
  sectionsCount: 8,
  totalQuestions: 60,
  introduction: 'Masterclass on Decoding Vocabulary in Context: Utilizing surrounding semantic anchors, secondary definitions, syntactic vectoring, and custom lexical mapping strategies to decipher unfamiliar terms without outside reliance.',
  curriculumStandards: [
    'Digital SAT Blueprint: Craft & Structure - Vocabulary in Context',
    'Core Skill: Semantic Vector Mapping & Register Alignment'
  ],
  coreTechniques: [
    {
      name: 'Uni Route Universal Lexical Vectoring (Custom Trick)',
      summary: 'Never read answer choices first. Map the syntactic polarity (+ / -) and semantic register of the surrounding sentence using a vector scale before evaluating options.',
      howToApply: 'Locate the target word in the text. Cover the choices. Underline direct context clues (contrast transitions, synonym restatements). Write a mental anchor word and match options to your vector.'
    },
    {
      name: 'Secondary Definition Neutralization',
      summary: 'Standardized tests routinely test common high-school words used in secondary or less common academic meanings (e.g., "arrest" = to stop/check; "plastic" = adaptable/malleable; "qualify" = to limit or restrict).',
      howToApply: 'Never pick the most common primary dictionary definition automatically. Blank out the target word and predict a simple replacement based solely on surrounding context clues.'
    },
    {
      name: 'Anchor-Vector Matching',
      summary: 'Identify the exact phrase or clause in the sentence that acts as a synonym or antonym anchor for the blank.',
      howToApply: 'Locate structural punctuation (colons, dashes, semicolons) or transition words (however, similarly, far from being) that dictate the directional vector of the blank.'
    },
    {
      name: 'Collocation & Register Precision',
      summary: 'Ensure the chosen word fits naturally into formal academic prose and correctly pairs with prepositions in the sentence (e.g., "attributable to", "incongruous with").',
      howToApply: 'Test the full candidate word inside the sentence structure to verify prepositional harmony and formal academic register.'
    }
  ],
  contextClueRules: [
    {
      triggerType: 'Contrast Pivot ("far from being", "rather than")',
      description: 'Signals that the blank must be the exact logical opposite of a provided descriptive phrase.',
      example: '"Far from being an exercise in superficial ornamentation, her work reflects a deeply deliberate effort..." -> Blank = "transmute" or "harmonize".'
    },
    {
      triggerType: 'Elaboration Punctuation (Colon or Dash)',
      description: 'A colon or dash introduces an immediate explanation that defines the target blank.',
      example: '"The deep root systems act as underground anchors: they ______ soil loss during storms." -> Blank = "prevent" or "arrest".'
    },
    {
      triggerType: 'Parallel Conjunction ("and", "as well as")',
      description: 'Signals that the blank must match the positive/negative polarity of the adjoining descriptor.',
      example: '"The museum curator sought a solemn and ______ space for reflection." -> Blank = "poignant" or "reverent".'
    }
  ],
  demonstrations: T1_DEMONSTRATIONS,
  exercises: [...T1_EXERCISES_PART1, ...T1_EXERCISES_PART2]
};
