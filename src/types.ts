export type HubId = 'overview' | 'scholarship' | 'sat' | 'essay' | 'pakistani' | 'ai-analysis';

export interface FloatingHubItem {
  id: HubId;
  title: string;
  shortLabel: string;
  iconName: string;
  description: string;
  badge: string;
  colorTheme: string;
  gradient: string;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  country: string;
  degree: 'Undergraduate' | 'Masters' | 'PhD' | 'All Levels';
  coverage: 'Full Ride' | 'Full Tuition' | 'Partial' | 'Stipend Only';
  amount: string;
  deadline: string;
  description: string;
  eligibility: string[];
  documentsRequired: string[];
  applicationUrl: string;
  isPakistani: boolean;
  category: string;
  featured?: boolean;
}

export interface SatQuestion {
  id: string;
  section: 'Reading' | 'Writing' | 'Math' | 'Reading & Writing' | 'Drills';
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  codeOrMathSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SatFlashcard {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  exampleSentence: string;
  synonyms: string[];
}

export interface EssayPrompt {
  id: string;
  source: string;
  title: string;
  promptText: string;
  tips: string[];
}

export interface SampleEssay {
  id: string;
  title: string;
  university: string;
  prompt: string;
  essayText: string;
  keyStrengths: string[];
  wordCount: number;
}

export interface ProfileAnalysisInput {
  fullName?: string;
  gpa: string;
  gpaScale: string;
  satScore: string;
  intendedMajor: string;
  preferredCountries: string[];
  extracurriculars: string;
  financialNeed: 'High' | 'Moderate' | 'Low' | 'None';
  academicLevel: 'High School Senior' | 'High School Junior' | 'Undergraduate Student' | 'Graduate/Master Applicant';
  specificConcerns?: string;
}

export interface ProfileAnalysisResult {
  overallRating: string;
  ratingScore: number; // e.g. 85 / 100
  summary: string;
  reachUniversities: { name: string; country: string; rationale: string; acceptanceRate: string }[];
  targetUniversities: { name: string; country: string; rationale: string; acceptanceRate: string }[];
  safetyUniversities: { name: string; country: string; rationale: string; acceptanceRate: string }[];
  strengths: string[];
  gapsAndWeaknesses: string[];
  actionPlan: { step: number; title: string; action: string; timeline: string }[];
  scholarshipMatchScore: string;
  recommendedScholarships: string[];
}

export interface EssayFeedbackResult {
  overallScore: number;
  hookRating: string;
  clarityAndFlow: string;
  toneAnalysis: string;
  strengths: string[];
  improvementAreas: string[];
  revisedExcerpt?: string;
  recommendedNextSteps: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
