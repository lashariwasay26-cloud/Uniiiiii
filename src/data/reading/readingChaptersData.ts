import { DemonstrationExample, ReadingQuestion } from './readingTypes';
import { TOPIC_1_WORDS_IN_CONTEXT } from './topics/topic1WordsInContext';
import { TOPIC_2_CENTRAL_IDEAS } from './topics/topic2CentralIdeas';
import { TOPIC_3_TEXT_STRUCTURE } from './topics/topic3TextStructure';
import { TOPIC_4_CROSS_TEXT } from './topics/topic4CrossText';
import { TOPIC_5_COMMAND_OF_EVIDENCE } from './topics/topic5CommandOfEvidence';
import { TOPIC_6_INFERENCES } from './topics/topic6Inferences';

export interface ReadingChapter {
  id: string;
  chapterNumber: number;
  title: string;
  sectionsCount: number;
  totalQuestions: number;
  introduction: string;
  curriculumStandards: string[];
  coreTechniques: {
    name: string;
    summary: string;
    howToApply: string;
  }[];
  contextClueRules?: {
    triggerType: string;
    description: string;
    example: string;
  }[];
  demonstrations: DemonstrationExample[];
  exercises: ReadingQuestion[];
}

// Module 1 Core Reading Topics (All 6 Core Subskills)
export const MODULE_1_READING_TOPICS: ReadingChapter[] = [
  TOPIC_1_WORDS_IN_CONTEXT,
  TOPIC_2_CENTRAL_IDEAS,
  TOPIC_3_TEXT_STRUCTURE,
  TOPIC_4_CROSS_TEXT,
  TOPIC_5_COMMAND_OF_EVIDENCE,
  TOPIC_6_INFERENCES
];

export const READING_CHAPTERS_BOOK: ReadingChapter[] = MODULE_1_READING_TOPICS;
