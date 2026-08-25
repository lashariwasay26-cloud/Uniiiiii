export type DigitalSatModuleDifficulty = 'Easy/Medium Module' | 'Hard Module';

export type ReadingSubskill = 
  | 'Words in Context' 
  | 'Central Ideas & Details' 
  | 'Text Structure & Purpose' 
  | 'Cross-Text Connections' 
  | 'Command of Evidence' 
  | 'Inferences & Conclusions' 
  | string;

export interface ReadingQuestion {
  id: string;
  moduleNumber: number;
  subskill: ReadingSubskill;
  difficulty: DigitalSatModuleDifficulty;
  passage: string;
  questionText: string;
  options: string[];
  correctAnswer: number; // 0-based index
  nextGenTechnique: string; // e.g., "Anchor-Vector Matching", "0.5-Step Rule", "Scope Bounding"
  strategicTakeaway?: string;
  explanation: {
    passageDeconstruction: string;
    correctReasoning: string;
    distractorAnalysis: {
      optionIndex: number;
      optionText: string;
      trapType: string; // e.g. "Flop Trap", "Scope Expansion", "Extreme Modifier", "Secondary Definition Trap"
      whyIncorrect: string;
    }[];
  };
}

export interface DemonstrationExample extends ReadingQuestion {
  demoNumber: number;
  strategicTakeaway?: string;
}

export interface ReadingModuleOverview {
  moduleNumber: number;
  title: string;
  subtitle: string;
  meltzerChapters?: string[];
  curriculumStandards: string[];
  coreTechniques: {
    name: string;
    summary: string;
    howToApply: string;
  }[];
}
