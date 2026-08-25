import { WritingExerciseBlock, WritingExerciseQuestion } from './satWritingTypes';

const BLOCK_21_QUESTIONS: WritingExerciseQuestion[] = [
  {
    questionNumber: 1,
    id: 'ch2-ex21-q1',
    difficulty: 'Intermediate',
    skillTag: 'Semicolon + transition',
    prompt: 'The researchers expected the revised procedure to improve accuracy ___ the first three trials produced nearly identical results.',
    options: ['NO CHANGE', ', however,', '; however,', ': however,'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Two independent clauses joined by "however". Requires IC ; however, IC.',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', however,', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; however,', whyWrong: 'Correct.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': however,', whyWrong: 'Invalid colon.' }
      ]
    }
  },
  {
    questionNumber: 2,
    id: 'ch2-ex21-q2',
    difficulty: 'Foundation',
    skillTag: 'Introductory dependent clause',
    prompt: 'Because the initial results were inconsistent ___ the researchers repeated the experiment.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Introductory dependent clause starting with "Because" requires a comma before the main clause.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fails to separate clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon requires independent clause before.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon requires independent clause before.' }
      ]
    }
  },
  {
    questionNumber: 3,
    id: 'ch2-ex21-q3',
    difficulty: 'Foundation',
    skillTag: 'Integrated dependent clause',
    prompt: 'The researchers repeated the experiment ___ because the initial results were inconsistent.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Subordinating clause starting with "because" follows the main clause and is integrated.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Unnecessary comma.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Invalid semicolon.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Invalid colon.' }
      ]
    }
  },
  {
    questionNumber: 4,
    id: 'ch2-ex21-q4',
    difficulty: 'Foundation',
    skillTag: 'Compound predicate',
    prompt: 'The researchers analyzed the samples ___ and recorded the measurements.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Compound predicate ("analyzed" and "recorded") under subject "The researchers".',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma in compound predicate.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon in compound predicate.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon in compound predicate.' }
      ]
    }
  },
  {
    questionNumber: 5,
    id: 'ch2-ex21-q5',
    difficulty: 'Foundation',
    skillTag: 'Two independent clauses',
    prompt: 'The researchers analyzed the samples ___ and the technicians recorded the measurements.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Two independent clauses joined by coordinating conjunction "and".',
      whyCorrect: 'Choice B is correct (comma + FANBOYS).',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Run-on.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Redundant semicolon with "and".' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Unnecessary colon.' }
      ]
    }
  },
  {
    questionNumber: 6,
    id: 'ch2-ex21-q6',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory colon',
    prompt: 'The experiment produced an unexpected result ___ the control group performed better than the experimental group.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'Second clause specifies what the unexpected result was.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Less specific than colon.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 7,
    id: 'ch2-ex21-q7',
    difficulty: 'Intermediate',
    skillTag: 'Semicolon + transition',
    prompt: 'The original method was inexpensive; ___ it required considerable manual labor.',
    options: ['however,', 'however', ', however,', ': however,'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Semicolon is present; transition word requires a comma following it.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'however,', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'however', whyWrong: 'Missing comma after transition.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ', however,', whyWrong: 'Redundant comma.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': however,', whyWrong: 'Redundant colon.' }
      ]
    }
  },
  {
    questionNumber: 8,
    id: 'ch2-ex21-q8',
    difficulty: 'Foundation',
    skillTag: 'Sentence + transition',
    prompt: 'The original method was inexpensive. ___ it required considerable manual labor.',
    options: ['However,', 'However', '; however,', ', however,'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Sentence-initial transition "However" must be followed by a comma.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'However,', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Missing comma.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; however,', whyWrong: 'Double boundary.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ', however,', whyWrong: 'Double boundary.' }
      ]
    }
  },
  {
    questionNumber: 9,
    id: 'ch2-ex21-q9',
    difficulty: 'Intermediate',
    skillTag: 'Parenthetical transition',
    prompt: 'The researchers ___ however ___ decided to repeat the experiment.',
    options: ['NO CHANGE', ', however,', '; however;', ': however:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Internal parenthetical transition enclosed by paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', however,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; however;', whyWrong: 'Invalid semicolons.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': however:', whyWrong: 'Invalid colons.' }
      ]
    }
  },
  {
    questionNumber: 10,
    id: 'ch2-ex21-q10',
    difficulty: 'Intermediate',
    skillTag: 'Colon before list',
    prompt: 'The study involved three stages ___ data collection, statistical analysis, and peer review.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'Independent clause precedes explicit list.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Weak boundary.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon before list is invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 11,
    id: 'ch2-ex21-q11',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The laboratory ___ which was founded in 1985 ___ recently expanded its research facilities. (The relative clause provides supplementary information.)',
    options: ['NO CHANGE', ', which was founded in 1985,', '; which was founded in 1985;', ': which was founded in 1985:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Supplementary relative clause enclosed by paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', which was founded in 1985,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; which was founded in 1985;', whyWrong: 'Invalid semicolons.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': which was founded in 1985:', whyWrong: 'Invalid colons.' }
      ]
    }
  },
  {
    questionNumber: 12,
    id: 'ch2-ex21-q12',
    difficulty: 'Intermediate',
    skillTag: 'Essential relative clause',
    prompt: 'The laboratory ___ that was founded in 1985 ___ recently expanded its research facilities. (The clause identifies which laboratory is being discussed.)',
    options: ['NO CHANGE', ', that was founded in 1985,', '; that was founded in 1985;', ': that was founded in 1985:'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Essential clause identifying noun takes no commas.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', that was founded in 1985,', whyWrong: 'Commas make essential info nonessential.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; that was founded in 1985;', whyWrong: 'Semicolons invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': that was founded in 1985:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 13,
    id: 'ch2-ex21-q13',
    difficulty: 'Intermediate',
    skillTag: 'Essential relative clause',
    prompt: 'The students ___ who completed the advanced training ___ were permitted to operate the equipment. (The clause identifies which students were permitted to operate the equipment.)',
    options: ['NO CHANGE', ', who completed the advanced training,', '—who completed the advanced training—', ': who completed the advanced training:'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Clause identifies which subset of students; essential modifier takes no punctuation.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', who completed the advanced training,', whyWrong: 'Commas invalid.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—who completed the advanced training—', whyWrong: 'Dashes invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': who completed the advanced training:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 14,
    id: 'ch2-ex21-q14',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The students ___ who had completed the advanced training ___ were permitted to operate the equipment. (The students have already been clearly identified, and the clause provides additional information.)',
    options: ['NO CHANGE', ', who had completed the advanced training,', '; who had completed the advanced training;', ': who had completed the advanced training:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Students identified in context; clause is supplementary and takes paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated nonessential clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', who had completed the advanced training,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; who had completed the advanced training;', whyWrong: 'Semicolons invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': who had completed the advanced training:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 15,
    id: 'ch2-ex21-q15',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The scientist ___ who developed the new method ___ received an international award. (The scientist is already identified as a specific individual in context.)',
    options: ['NO CHANGE', ', who developed the new method,', '; who developed the new method;', ': who developed the new method:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Scientist identified; clause is supplementary.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', who developed the new method,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; who developed the new method;', whyWrong: 'Invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': who developed the new method:', whyWrong: 'Invalid.' }
      ]
    }
  },
  {
    questionNumber: 16,
    id: 'ch2-ex21-q16',
    difficulty: 'Foundation',
    skillTag: 'No subject-verb comma',
    prompt: 'The collection of manuscripts from several universities ___ is now available to researchers.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Subject "collection..." cannot be separated from verb "is".',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Separates subject and verb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon in predicate.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon in predicate.' }
      ]
    }
  },
  {
    questionNumber: 17,
    id: 'ch2-ex21-q17',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The collection ___ which includes manuscripts from several universities ___ is now available to researchers. (The relative clause is supplementary.)',
    options: ['NO CHANGE', ', which includes manuscripts from several universities,', '; which includes manuscripts from several universities;', ': which includes manuscripts from several universities:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Supplementary relative clause enclosed by paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', which includes manuscripts from several universities,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; which includes manuscripts from several universities;', whyWrong: 'Invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': which includes manuscripts from several universities:', whyWrong: 'Invalid.' }
      ]
    }
  },
  {
    questionNumber: 18,
    id: 'ch2-ex21-q18',
    difficulty: 'Foundation',
    skillTag: 'Introductory phrase',
    prompt: 'After reviewing the evidence ___ the researchers revised their original conclusion.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Introductory phrase takes a comma before main clause.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing comma.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon invalid.' }
      ]
    }
  },
  {
    questionNumber: 19,
    id: 'ch2-ex21-q19',
    difficulty: 'Advanced',
    skillTag: 'Dangling modifier',
    prompt: 'After reviewing the evidence ___ the original conclusion seemed less convincing. Which choice best corrects the sentence?',
    options: ['NO CHANGE', ', the researchers found the original conclusion less convincing.', '; the researchers found the original conclusion less convincing.', ': the original conclusion seemed less convincing.'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Dangling modifier fixed by supplying logical subject "the researchers" after comma.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Dangling modifier.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', the researchers found the original conclusion less convincing.', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; the researchers found the original conclusion less convincing.', whyWrong: 'Semicolon after phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': the original conclusion seemed less convincing.', whyWrong: 'Unresolved dangling modifier.' }
      ]
    }
  },
  {
    questionNumber: 20,
    id: 'ch2-ex21-q20',
    difficulty: 'Foundation',
    skillTag: 'Introductory participial phrase',
    prompt: 'Walking through the laboratory ___ the researchers noticed several instruments that had been left running.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Introductory participial phrase takes a comma.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon invalid.' }
      ]
    }
  },
  {
    questionNumber: 21,
    id: 'ch2-ex21-q21',
    difficulty: 'Foundation',
    skillTag: 'Integrated modifier',
    prompt: 'The researchers noticed several instruments ___ left running after the experiment.',
    options: ['NO CHANGE', ', left running,', '; left running;', ': left running:'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Integrated modifier phrase requires no commas.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', left running,', whyWrong: 'Unnecessary commas.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; left running;', whyWrong: 'Invalid semicolons.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': left running:', whyWrong: 'Invalid colons.' }
      ]
    }
  },
  {
    questionNumber: 22,
    id: 'ch2-ex21-q22',
    difficulty: 'Foundation',
    skillTag: 'Essential modifier',
    prompt: 'The samples ___ collected during the first trial ___ were stored at a lower temperature. (The phrase identifies which samples are being discussed.)',
    options: ['NO CHANGE', ', collected during the first trial,', '—collected during the first trial—', ': collected during the first trial:'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Identifies which samples; essential modifier takes no commas.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', collected during the first trial,', whyWrong: 'Commas make essential modifier nonessential.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—collected during the first trial—', whyWrong: 'Dashes invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': collected during the first trial:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 23,
    id: 'ch2-ex21-q23',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory colon',
    prompt: 'The researchers discovered one major problem ___ several sensors had recorded incorrect measurements. (The second clause explains the problem.)',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'Second clause explains the "major problem". Colon is ideal.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon is less specific than a colon for explanation.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 24,
    id: 'ch2-ex21-q24',
    difficulty: 'Advanced',
    skillTag: 'Emphatic dash',
    prompt: 'The researchers discovered one major problem ___ several sensors had recorded incorrect measurements. (The writer wants an emphatic break.)',
    options: ['NO CHANGE', ',', ';', '—'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'Explicit request for an emphatic break selecting em dash.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Neutral boundary.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 25,
    id: 'ch2-ex21-q25',
    difficulty: 'Intermediate',
    skillTag: 'Colon before list',
    prompt: 'The experiment required three conditions ___ constant temperature, stable pressure, and controlled humidity.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'Independent clause precedes explicit list.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Weak boundary.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon invalid before list.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 26,
    id: 'ch2-ex21-q26',
    difficulty: 'Foundation',
    skillTag: 'No punctuation after verb',
    prompt: 'The researchers examined ___ temperature, pressure, and humidity.',
    options: ['NO CHANGE', ':', ';', ','],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Transitive verb "examined" takes objects directly.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'Colon after incomplete phrase.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'Comma between verb and object.' }
      ]
    }
  },
  {
    questionNumber: 27,
    id: 'ch2-ex21-q27',
    difficulty: 'Advanced',
    skillTag: 'Colon before complex list',
    prompt: 'The researchers reviewed data from three locations ___ Boston, Massachusetts; Austin, Texas; and Seattle, Washington.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'Colon precedes complex list containing internal commas.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma creates visual confusion.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon before list is invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 28,
    id: 'ch2-ex21-q28',
    difficulty: 'Advanced',
    skillTag: 'Emphatic paired dashes',
    prompt: 'The revised procedure ___ which required specialized equipment ___ produced more reliable results. (The writer wants the supplementary information to receive strong emphasis.)',
    options: ['NO CHANGE', ', which required specialized equipment,', '—which required specialized equipment—', ': which required specialized equipment:'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Strong emphasis requested for supplementary phrase selecting paired dashes.',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', which required specialized equipment,', whyWrong: 'Standard commas lack strong emphasis.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—which required specialized equipment—', whyWrong: 'Correct. Emphatic paired dashes.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': which required specialized equipment:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 29,
    id: 'ch2-ex21-q29',
    difficulty: 'Foundation',
    skillTag: 'Possessive pronoun',
    prompt: 'The university revised ___ admissions policy.',
    options: ['it\'s', 'its', 'its\'', 'their'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"its" is possessive pronoun for singular noun "university".',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'it\'s', whyWrong: 'Contraction.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'its', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'its\'', whyWrong: 'Invalid word.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'their', whyWrong: 'Plural pronoun.' }
      ]
    }
  },
  {
    questionNumber: 30,
    id: 'ch2-ex21-q30',
    difficulty: 'Intermediate',
    skillTag: 'Plural possessive',
    prompt: 'The ___ projects were displayed at the exhibition. (The projects belong to several students.)',
    options: ['student\'s', 'students', 'students\'', 'student\'s\''],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Plural possessive for "students" is "students\'".',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'student\'s', whyWrong: 'Singular possessive.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'students', whyWrong: 'Ordinary plural.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'students\'', whyWrong: 'Correct.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'student\'s\'', whyWrong: 'Invalid.' }
      ]
    }
  },
  {
    questionNumber: 31,
    id: 'ch2-ex21-q31',
    difficulty: 'Foundation',
    skillTag: 'Singular possessive',
    prompt: 'The ___ research influenced several later studies. (The research belongs to one scientist.)',
    options: ['scientist', 'scientists', 'scientist\'s', 'scientists\''],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Singular possessive for "scientist" is "scientist\'s".',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'scientist', whyWrong: 'Non-possessive.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'scientists', whyWrong: 'Plural.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'scientist\'s', whyWrong: 'Correct.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'scientists\'', whyWrong: 'Plural possessive.' }
      ]
    }
  },
  {
    questionNumber: 32,
    id: 'ch2-ex21-q32',
    difficulty: 'Foundation',
    skillTag: 'They\'re = they are',
    prompt: '___ preparing the final report before the deadline.',
    options: ['Their', 'There', 'They\'re', 'Theirs'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: '"They\'re" = "They are".',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Their', whyWrong: 'Possessive.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'There', whyWrong: 'Adverb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'They\'re', whyWrong: 'Correct.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Theirs', whyWrong: 'Possessive pronoun.' }
      ]
    }
  },
  {
    questionNumber: 33,
    id: 'ch2-ex21-q33',
    difficulty: 'Foundation',
    skillTag: 'Possessive pronoun',
    prompt: 'The researcher ___ work influenced the field received an award.',
    options: ['who\'s', 'whose', 'who', 'whos'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Possessive pronoun "whose".',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'who\'s', whyWrong: 'Contraction for who is/has.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'whose', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'who', whyWrong: 'Subject pronoun.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'whos', whyWrong: 'Misspelled.' }
      ]
    }
  },
  {
    questionNumber: 34,
    id: 'ch2-ex21-q34',
    difficulty: 'Intermediate',
    skillTag: 'Supplementary phrase',
    prompt: 'The research team ___ after several months of preparation ___ began the experiment. (The phrase is supplementary.)',
    options: ['NO CHANGE', ', after several months of preparation,', '; after several months of preparation;', ': after several months of preparation:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Supplementary phrase inside main clause takes paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', after several months of preparation,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; after several months of preparation;', whyWrong: 'Invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': after several months of preparation:', whyWrong: 'Invalid.' }
      ]
    }
  },
  {
    questionNumber: 35,
    id: 'ch2-ex21-q35',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory colon',
    prompt: 'The researchers had one objective ___ to determine whether the revised method could produce more reliable results.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'First part is complete thought. Second part specifies the objective.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Weak boundary.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon before infinitive phrase is invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 36,
    id: 'ch2-ex21-q36',
    difficulty: 'Intermediate',
    skillTag: 'Semicolon + transition',
    prompt: 'The original method was inexpensive ___ nevertheless, it required considerable manual labor.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'IC ; conjunctive adverb, IC.',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon before transition is invalid.' }
      ]
    }
  },
  {
    questionNumber: 37,
    id: 'ch2-ex21-q37',
    difficulty: 'Foundation',
    skillTag: 'Semicolon between clauses',
    prompt: 'The researchers reviewed the evidence ___ they revised their original conclusion.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Two independent clauses joined by semicolon.',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon less specific.' }
      ]
    }
  },
  {
    questionNumber: 38,
    id: 'ch2-ex21-q38',
    difficulty: 'Foundation',
    skillTag: 'Compound predicate',
    prompt: 'The researchers reviewed the evidence ___ and revised their original conclusion.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Compound predicate ("reviewed" and "revised") under subject "researchers". No comma.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma in compound verb phrase.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon in compound verb phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon in compound verb phrase.' }
      ]
    }
  },
  {
    questionNumber: 39,
    id: 'ch2-ex21-q39',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The collection ___ which was assembled over several decades ___ contains thousands of historical documents. (The clause is supplementary.)',
    options: ['NO CHANGE', ', which was assembled over several decades,', '; which was assembled over several decades;', ': which was assembled over several decades:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Supplementary relative clause takes paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', which was assembled over several decades,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; which was assembled over several decades;', whyWrong: 'Invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': which was assembled over several decades:', whyWrong: 'Invalid.' }
      ]
    }
  },
  {
    questionNumber: 40,
    id: 'ch2-ex21-q40',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory colon',
    prompt: 'The researchers discovered a serious problem ___ several sensors had recorded incorrect measurements. (The second clause explains the problem.)',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'Explanatory relationship after complete independent clause.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon is less specific.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  }
];

export const EXERCISE_BLOCK_21: WritingExerciseBlock = {
  blockNumber: 21,
  title: 'Exercise Set 21 — Comprehensive Chapter Assessment, Advanced Traps, and Mastery Review',
  description: 'Comprehensive 40-question chapter assessment covering all punctuation rules, advanced traps, and mastery review.',
  questions: BLOCK_21_QUESTIONS
};
