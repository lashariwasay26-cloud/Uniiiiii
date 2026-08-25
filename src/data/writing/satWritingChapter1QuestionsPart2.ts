import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Exercise Set 3 — Advanced Boundaries & Clause Mechanics (Qs 31–42)',
  description: 'Contrasting independent clauses, compound predicates, introductory prepositional phrases, appositives, nonessential relative clauses, and conjunctive adverbs.',
  questions: [
    {
      questionNumber: 31,
      id: 'ex3-q31',
      difficulty: 'Intermediate',
      skillTag: 'Independent Clause Contrast',
      prompt: 'The researchers had expected the material to remain stable under extreme temperatures ___ subsequent testing showed that its molecular structure changed significantly.',
      options: [', however', '; however,', ', but', ': however,'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Both sides are independent clauses. The relationship is contrast. The structure requires a comma followed by a coordinating conjunction (FANBOYS: but).',
        whyCorrect: 'Comma + but connects two independent clauses expressing contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', however', whyWrong: 'Creates a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; however,', whyWrong: 'Blank is followed immediately by "subsequent testing", not "however".' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': however,', whyWrong: 'Colon + however is grammatically improper here.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ex3-q32',
      difficulty: 'Intermediate',
      skillTag: 'Coordinating Conjunction Selection',
      prompt: 'The researchers had expected the material to remain stable under extreme temperatures ___ subsequent testing revealed a significant structural change.',
      options: [', but', '; but', ', however', 'because'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Comma + but connects two independent clauses showing contrast.',
        whyCorrect: 'Independent clause, but independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; but', whyWrong: 'Semicolon + but is redundant/incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', however', whyWrong: 'Comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'False cause relationship.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ex3-q33',
      difficulty: 'Foundation',
      skillTag: 'Compound Predicate',
      prompt: 'The research team collected samples from five locations ___ analyzed their chemical composition in the laboratory.',
      options: [', and', '; and', ';', 'and'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'Single subject ("The research team") performing two actions ("collected" and "analyzed"). Compound predicate requires no comma before "and".',
        whyCorrect: 'Verb 1 and Verb 2 (no comma needed).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', and', whyWrong: 'Unnecessary comma before compound predicate.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; and', whyWrong: 'Semicolon cannot separate compound predicate.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon requires independent clause on right.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ex3-q34',
      difficulty: 'Foundation',
      skillTag: 'Compound Clause Connection',
      prompt: 'The research team collected samples from five locations ___ the technicians analyzed their chemical composition in the laboratory.',
      options: ['and', ', and', ';', ','],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Second clause has its own subject ("the technicians") and verb ("analyzed"). Two independent clauses connected by "and" require a comma.',
        whyCorrect: 'Independent clause, and independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and', whyWrong: 'Lacks required boundary comma.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', and', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon alone works, but ", and" provides clearer addition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'Comma splice.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ex3-q35',
      difficulty: 'Foundation',
      skillTag: 'Introductory Modifier Boundary',
      prompt: 'After reviewing the preliminary data ___ the researchers concluded that the original hypothesis required modification.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Introductory prepositional/participial phrase ("After reviewing the preliminary data") requires a comma before main clause.',
        whyCorrect: 'Introductory phrase, main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot follow a phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect after introductory phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Redundant.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ex3-q36',
      difficulty: 'Foundation',
      skillTag: 'Introductory Prepositional Phrase',
      prompt: 'During the final phase of the experiment ___ several unexpected equipment failures occurred.',
      options: [',', ';', ':', 'no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Introductory prepositional phrase ("During the final phase of the experiment") takes a comma before main clause.',
        whyCorrect: 'Introductory phrase, main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot follow a phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Comma is standard after long introductory prepositional phrase.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ex3-q37',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Appositive',
      prompt: 'The lead researcher ___ Dr. Nadia Karim ___ presented the findings at the conference.',
      options: [', / ,', '; / ;', ': / :', 'no punctuation / no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Dr. Nadia Karim is a nonessential appositive renaming "The lead researcher". Requires a pair of commas.',
        whyCorrect: 'Matching comma pair around nonessential appositive.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', / ,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; / ;', whyWrong: 'Semicolons cannot enclose mid-sentence appositives.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ': / :', whyWrong: 'Colons cannot enclose mid-sentence appositives.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits required parenthetical commas.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ex3-q38',
      difficulty: 'Intermediate',
      skillTag: 'Essential Appositive',
      prompt: 'The physicist ___ Albert Einstein developed the theory of relativity.',
      options: [', / ,', '; / ;', ': / :', 'no punctuation / no punctuation'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Albert Einstein" is essential to specify WHICH physicist developed the theory. Essential appositives take NO commas.',
        whyCorrect: 'Essential appositive takes no commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', / ,', whyWrong: 'Commas would incorrectly imply there is only one physicist.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; / ;', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ': / :', whyWrong: 'Incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation / no punctuation', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ex3-q39',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Relative Clause',
      prompt: 'The satellite ___ which was launched earlier this year ___ has already transmitted several valuable images.',
      options: [', / ,', '; / ;', ': / :', 'no punctuation / no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"which was launched earlier this year" is a nonessential relative clause. Requires matching pair of commas.',
        whyCorrect: 'Commas surround nonessential "which" clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', / ,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; / ;', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ': / :', whyWrong: 'Incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits required commas around "which".' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ex3-q40',
      difficulty: 'Intermediate',
      skillTag: 'Essential Relative Clause Logic',
      prompt: 'The satellite that was launched earlier this year has already transmitted several valuable images. Why are no commas used around "that was launched earlier this year"?',
      options: [
        '"That" always requires an essential clause.',
        'The clause identifies which satellite is being discussed.',
        'Relative clauses beginning with "that" cannot contain verbs.',
        'A comma cannot appear before a verb.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The clause restricts/identifies which specific satellite is meant. Essential clauses take no commas.',
        whyCorrect: 'Identifies which noun is meant (essential information).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Circular rule.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Factually false.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Factually false.' }
        ]
      }
    },
    {
      questionNumber: 41,
      id: 'ex3-q41',
      difficulty: 'Intermediate',
      skillTag: 'Semicolon + Conjunctive Adverb',
      prompt: 'The first experiment produced highly consistent results ___ therefore, the researchers expected the second experiment to produce similar results.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Two independent clauses joined by conjunctive adverb "therefore". Semicolon must precede "therefore".',
        whyCorrect: 'Independent clause; therefore, independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Creates comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect here.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: '"And therefore" without semicolon creates awkward structure.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ex3-q42',
      difficulty: 'Advanced',
      skillTag: 'Complex Sentence Boundary Semicolon',
      prompt: 'The researchers had initially considered the anomaly insignificant ___ after several independent laboratories reproduced the result, however, they began investigating it more closely.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'First clause independent. Second clause contains introductory dependent modifier and parenthetical "however". Semicolon separates the two independent clauses.',
        whyCorrect: 'Semicolon separates major independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon wrong relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Awkward.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Exercise Set 4 — Complex Punctuation & Lists (Qs 43–54)',
  description: 'Paired commas around interrupters, participial phrases, semicolons between independent clauses, internal list semicolons, colons for lists, and multi-clause boundaries.',
  questions: [
    {
      questionNumber: 43,
      id: 'ex4-q43',
      difficulty: 'Intermediate',
      skillTag: 'Paired Commas for Interrupters',
      prompt: 'The newly developed sensor ___ despite having been tested extensively under laboratory conditions ___ produced inconsistent readings in the field.',
      options: [', / ,', '; / ;', ': / :', 'no punctuation / no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"despite having been tested..." is a parenthetical prepositional phrase interrupting main subject ("sensor") and verb ("produced"). Requires paired commas.',
        whyCorrect: 'Matching comma pair around interrupter.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', / ,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; / ;', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ': / :', whyWrong: 'Incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Missing required boundary commas.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ex4-q44',
      difficulty: 'Intermediate',
      skillTag: 'Trailing Participial Phrase',
      prompt: 'The researchers examined the samples ___ comparing their chemical composition with that of previously studied materials.',
      options: [',', ';', ':', '.'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Main clause followed by trailing participial phrase ("comparing their chemical composition..."). A comma separates the main clause from the participial phrase.',
        whyCorrect: 'Main clause, trailing participial phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot precede participial phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '.', whyWrong: 'Creates participial fragment.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ex4-q45',
      difficulty: 'Intermediate',
      skillTag: 'Independent Clause Semicolon',
      prompt: 'The researchers examined the samples ___ they compared their chemical composition with that of previously studied materials.',
      options: [',', ';', ':', 'no punctuation'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Two independent clauses without conjunction require a semicolon.',
        whyCorrect: 'Semicolon separates independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon is for explicit explanation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Run-on.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ex4-q46',
      difficulty: 'Intermediate',
      skillTag: 'Conjunctive Adverb Semicolon',
      prompt: 'The original method was relatively inexpensive ___ however, it required specialized equipment that was difficult to obtain.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Independent clause; however, independent clause.',
        whyCorrect: 'Semicolon required before "however".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Structure is flawed with "and however".' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ex4-q47',
      difficulty: 'Intermediate',
      skillTag: 'Comma Splice Revision',
      prompt: 'The original method was relatively inexpensive, however, it required specialized equipment that was difficult to obtain. Which revision is correct?',
      options: [
        'The original method was relatively inexpensive, however, it required specialized equipment that was difficult to obtain.',
        'The original method was relatively inexpensive; however, it required specialized equipment that was difficult to obtain.',
        'The original method was relatively inexpensive: however, it required specialized equipment that was difficult to obtain.',
        'The original method was relatively inexpensive; however it required specialized equipment that was difficult to obtain.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Fixes comma splice by placing semicolon before "however" and comma after it.',
        whyCorrect: 'Independent clause; however, independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Maintains comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Colon incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Missing comma after however.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ex4-q48',
      difficulty: 'Intermediate',
      skillTag: 'Conjunctive Adverb Connection',
      prompt: 'The researchers expected the treatment to reduce the symptoms ___ nevertheless, the results showed almost no improvement.',
      options: [',', ';', 'and', 'because'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Nevertheless" is a conjunctive adverb. Semicolon must precede it when connecting independent clauses.',
        whyCorrect: 'Independent clause; nevertheless, independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and', whyWrong: 'Incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Wrong cause logic.' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ex4-q49',
      difficulty: 'Intermediate',
      skillTag: 'Internal List Semicolons',
      prompt: 'The research team included specialists from Lahore, Pakistan; Cambridge, Massachusetts; and Berlin, Germany. Why are semicolons used?',
      options: [
        'They separate 3 independent clauses.',
        'They separate items in a list when individual items already contain internal commas.',
        'They introduce examples.',
        'They separate dependent clauses.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Complex list rule: when list items contain internal commas (City, Country), semicolons separate the major list items to prevent confusion.',
        whyCorrect: 'Separates list items containing internal commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'These are city/country phrases, not clauses.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Incorrect.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ex5-q50',
      difficulty: 'Foundation',
      skillTag: 'Colon Before List',
      prompt: 'The researchers examined three variables ___ temperature, pressure, and humidity.',
      options: [':', ';', ',', 'no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Complete clause ("The researchers examined three variables") followed by a 3-item list. Colon introduces list.',
        whyCorrect: 'Complete clause : list.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot precede non-independent list.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Colon is superior after complete setup.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Missing boundary.' }
        ]
      }
    },
    {
      questionNumber: 51,
      id: 'ex5-q51',
      difficulty: 'Foundation',
      skillTag: 'No Colon After Incomplete Verb',
      prompt: 'The researchers examined ___ temperature, pressure, and humidity.',
      options: [':', ';', ',', 'no punctuation'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"The researchers examined" is incomplete. Direct objects follow directly without colon or comma.',
        whyCorrect: 'No punctuation between verb and direct objects.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Colon after verb is incorrect.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Unnecessary comma after verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ex5-q52',
      difficulty: 'Intermediate',
      skillTag: 'Colon for Discovery',
      prompt: 'The researchers made an unexpected discovery ___ the supposedly stable compound decomposed at temperatures far below those predicted by the model.',
      options: [':', ';', ',', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Complete clause ("The researchers made an unexpected discovery") followed by clause specifying the discovery. Colon introduces explanation.',
        whyCorrect: 'Complete setup : explanation/specification.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon works grammatically, but colon explicitly introduces discovery.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Lacks required boundary.' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ex5-q53',
      difficulty: 'Foundation',
      skillTag: 'Introductory Prepositional Modifier',
      prompt: 'After analyzing thousands of measurements collected over several years ___ the researchers discovered a pattern that had previously gone unnoticed.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Introductory modifier phrase takes a comma before main clause.',
        whyCorrect: 'Introductory phrase, main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot follow a modifier phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Redundant.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ex5-q54',
      difficulty: 'Elite',
      skillTag: 'Multi-Clause Boundary Synthesis',
      prompt: 'Although the initial results appeared promising ___ the researchers remained cautious because the experiment had been conducted under highly controlled conditions ___ conditions that differed substantially from those encountered in real-world applications.',
      options: [', / ,', '; / ;', ': / ,', ', / :'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Boundary 1: Introductory dependent clause ("Although...") requires comma before main clause ("the researchers remained..."). Boundary 2: Appositive repetition ("conditions that differed...") requires a comma before "conditions".',
        whyCorrect: 'Comma after introductory clause, comma before appositive.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', / ,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; / ;', whyWrong: 'Semicolons cannot follow dependent clauses or introduce appositives.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ': / ,', whyWrong: 'Colon incorrect after dependent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', / :', whyWrong: 'Colon possible for boundary 2, but comma is standard appositive boundary.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Exercise Set 5 — Transitions & Logical Connections (Qs 55–65)',
  description: 'Addition, result, contrast, example, purpose, and concession transition words in paragraph context.',
  questions: [
    {
      questionNumber: 55,
      id: 'ex5-q55',
      difficulty: 'Foundation',
      skillTag: 'Addition Transition',
      prompt: 'The telescope was designed to detect faint objects in distant galaxies. ___, its sensors can also record changes in nearby stars.',
      options: ['However', 'In addition', 'As a result', 'For example'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence 1 describes capability A. Sentence 2 describes capability B. Relationship is addition of another capability.',
        whyCorrect: 'In addition connects related additional facts.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'No contrast between capabilities.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In addition', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'As a result', whyWrong: 'No cause-and-effect relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Recording nearby stars is not an example of detecting distant galaxies.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ex5-q56',
      difficulty: 'Foundation',
      skillTag: 'Result Transition',
      prompt: 'The initial trial produced inconsistent results. ___, the researchers decided to repeat the experiment under controlled conditions.',
      options: ['Consequently', 'However', 'In contrast', 'For instance'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 describes a problem (inconsistent results). Sentence 2 describes the action taken BECAUSE of that problem. Cause -> Effect.',
        whyCorrect: 'Consequently expresses cause and effect.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Consequently', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Action is logical response, not contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'No contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For instance', whyWrong: 'Repeating experiment is not an example of inconsistent results.' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ex5-q57',
      difficulty: 'Foundation',
      skillTag: 'Contrast Transition',
      prompt: 'The material remained stable under normal conditions. ___, when exposed to high pressure, its structure changed rapidly.',
      options: ['Furthermore', 'However', 'Therefore', 'Specifically'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Normal conditions (stable) vs High pressure (changed rapidly) = Contrast.',
        whyCorrect: 'However marks contrast between normal and high pressure behavior.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Wrong direction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'False causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Specifically', whyWrong: 'Not an elaboration of stability.' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ex5-q58',
      difficulty: 'Foundation',
      skillTag: 'Example Transition',
      prompt: 'Several species of birds migrate over long distances. ___, the Arctic tern travels thousands of miles each year between its breeding grounds and wintering areas.',
      options: ['For example', 'Nevertheless', 'Consequently', 'In addition'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'General statement ("Several species of birds...") followed by specific instance ("the Arctic tern...").',
        whyCorrect: 'For example introduces a specific instance of a general claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For example', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Wrong direction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'False causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In addition', whyWrong: 'Arctic tern is an illustration, not a separate additional concept.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ex5-q59',
      difficulty: 'Foundation',
      skillTag: 'Advantage vs. Disadvantage Contrast',
      prompt: 'The original design was inexpensive to manufacture. ___, it required frequent repairs.',
      options: ['In addition', 'However', 'Therefore', 'Likewise'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Advantage (inexpensive) vs Disadvantage (frequent repairs) = Contrast.',
        whyCorrect: 'However marks contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In addition', whyWrong: 'Ignores contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Inexpensive cost does not cause frequent repairs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Likewise', whyWrong: 'Repairs are not similar to low cost.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ex5-q60',
      difficulty: 'Intermediate',
      skillTag: 'Purpose Transition',
      prompt: 'The researchers wanted to increase the accuracy of their measurements. ___, they installed a high-precision sensor.',
      options: ['To do so', 'In contrast', 'For instance', 'However'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 states a goal/purpose. Sentence 2 describes the action taken to achieve that goal.',
        whyCorrect: 'To do so connects a goal to the action taken to achieve it.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'To do so', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'No contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For instance', whyWrong: 'Installing sensor is an action toward goal, not an example of goal itself.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'However', whyWrong: 'No contrast.' }
        ]
      }
    },
    {
      questionNumber: 61,
      id: 'ex5-q61',
      difficulty: 'Intermediate',
      skillTag: 'Entity Comparison Contrast',
      prompt: 'The first survey included only university students. ___, the second survey gathered responses from a diverse cross-section of the population.',
      options: ['In contrast', 'For example', 'Therefore', 'In addition'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Comparing survey 1 (students only) with survey 2 (diverse population).',
        whyCorrect: 'In contrast highlights difference between two entities.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In contrast', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Survey 2 is not an example of survey 1.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'False cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In addition', whyWrong: 'Focus is explicit contrast in population.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ex5-q62',
      difficulty: 'Intermediate',
      skillTag: 'Infrastructure Result',
      prompt: 'The laboratory upgraded its computing infrastructure. ___, researchers were able to process large datasets in a fraction of the time previously required.',
      options: ['As a result', 'However', 'Similarly', 'Instead'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Action (upgrade infrastructure) -> Effect (faster processing).',
        whyCorrect: 'As a result expresses cause and effect.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'As a result', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'No contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Not a parallel case, but direct consequence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Not replacement.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ex5-q63',
      difficulty: 'Intermediate',
      skillTag: 'Botanical Example',
      prompt: 'Many plants in arid environments have developed specialized adaptations to conserve water. ___, cacti store water in thick, fleshy stems.',
      options: ['For instance', 'Therefore', 'On the other hand', 'Subsequently'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'General claim (arid plants adapt) -> Specific instance (cacti store water in stems).',
        whyCorrect: 'For instance introduces a specific example.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For instance', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Therefore', whyWrong: 'False cause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'On the other hand', whyWrong: 'No contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'Not chronological sequence.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ex5-q64',
      difficulty: 'Intermediate',
      skillTag: 'Confirmation / Indeed Transition',
      prompt: 'The engineers expected the new alloy to resist corrosion better than standard steel. ___, field tests showed almost no degradation after months of exposure to salt water.',
      options: ['Indeed', 'However', 'Instead', 'Consequently'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Expectation -> Field test results CONFIRMED expectation. "Indeed" emphasizes confirmation.',
        whyCorrect: 'Indeed reinforces and confirms the preceding statement.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Indeed', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Test confirmed expectation, did not contradict it.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'No replacement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Consequently', whyWrong: 'Field test results are evidence, not a cause created by expectation.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ex5-q65',
      difficulty: 'Intermediate',
      skillTag: 'Concession / Nevertheless',
      prompt: 'The ancient text was damaged and difficult to decipher. ___, scholar Elena Vance was able to translate key passages by comparing it with related manuscripts.',
      options: ['Nevertheless', 'Furthermore', 'Thus', 'Similarly'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Obstacle (text damaged) vs Success (translated key passages) = Concession/Contrast.',
        whyCorrect: 'Nevertheless expresses success despite difficulty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Furthermore', whyWrong: 'Ignores contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Thus', whyWrong: 'Damage does not cause translation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'No parallel comparison.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Exercise Set 6 — Subject-Verb Agreement & Modifiers (Qs 66–75)',
  description: 'Subject-verb agreement with prepositional phrases, collective nouns, compound subjects, and dangling modifiers.',
  questions: [
    {
      questionNumber: 66,
      id: 'ex6-q66',
      difficulty: 'Intermediate',
      skillTag: 'Prepositional Phrase Distraction',
      prompt: 'The collection of rare manuscripts from several European libraries ___ displayed in the central gallery.',
      options: ['is', 'are', 'were', 'have been'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Head noun = "collection" (singular). Prepositional phrases ("of rare manuscripts", "from several European libraries") do not control verb.',
        whyCorrect: 'The collection is displayed (singular subject + singular verb).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb distracted by libraries/manuscripts.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural past.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural present perfect.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ex6-q67',
      difficulty: 'Intermediate',
      skillTag: 'Series Subject',
      prompt: 'The series of experiments conducted by the research team ___ produced valuable insights.',
      options: ['has', 'have', 'were', 'are'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Head noun = "series" (singular). "The series... has produced".',
        whyCorrect: 'Singular subject "series" matches singular verb "has".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Plural distracted by experiments.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'are', whyWrong: 'Plural.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ex6-q68',
      difficulty: 'Intermediate',
      skillTag: 'Parenthetical Along With',
      prompt: 'The lead researcher, along with several graduate students, ___ preparing the final manuscript.',
      options: ['is', 'are', 'were', 'have been'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Head noun = "The lead researcher" (singular). "along with..." is parenthetical and does not make subject plural.',
        whyCorrect: 'Singular subject "lead researcher" takes singular verb "is".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural error induced by "students".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural past.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ex6-q69',
      difficulty: 'Intermediate',
      skillTag: 'Neither...Nor Closest Subject (Plural)',
      prompt: 'Neither the laboratory director nor the senior technicians ___ available to inspect the equipment.',
      options: ['was', 'were', 'is', 'has been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'With neither...nor, verb agrees with subject CLOSEST to it ("senior technicians" -> plural).',
        whyCorrect: 'Senior technicians (plural) matches "were".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb does not match plural closest subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ex6-q70',
      difficulty: 'Intermediate',
      skillTag: 'Neither...Nor Closest Subject (Singular)',
      prompt: 'Neither the senior technicians nor the laboratory director ___ available to inspect the equipment.',
      options: ['were', 'was', 'are', 'have been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Closest subject = "laboratory director" (singular) -> "was".',
        whyCorrect: 'Laboratory director (singular) matches "was".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'were', whyWrong: 'Plural verb does not match closest subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural.' }
        ]
      }
    },
    {
      questionNumber: 71,
      id: 'ex6-q71',
      difficulty: 'Intermediate',
      skillTag: 'Dangling Modifier Revision 1',
      prompt: 'Having analyzed the chemical composition of the soil, ___',
      options: [
        'the researchers identified several unexpected minerals.',
        'several unexpected minerals were identified by the researchers.',
        'the soil was found to contain several unexpected minerals.',
        'the study revealed several unexpected minerals.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Who analyzed? "the researchers". The noun immediately following comma MUST be "the researchers".',
        whyCorrect: 'Places actor "the researchers" immediately after modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier (implies minerals analyzed soil).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier (implies soil analyzed itself).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier (implies study analyzed soil).' }
        ]
      }
    },
    {
      questionNumber: 72,
      id: 'ex6-q72',
      difficulty: 'Intermediate',
      skillTag: 'Dangling Modifier Submersible',
      prompt: 'Designed to operate in extreme underwater conditions, ___',
      options: [
        'the researchers deployed the submersible in the Arctic Ocean.',
        'the submersible was deployed by researchers in the Arctic Ocean.',
        'the Arctic Ocean was where the submersible was deployed.',
        'the deployment of the submersible occurred in the Arctic Ocean.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'What was designed? "the submersible". The submersible must immediately follow comma.',
        whyCorrect: 'Noun "submersible" immediately follows modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Dangling modifier (implies researchers were designed for underwater conditions).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier (implies Arctic Ocean was designed).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier (implies deployment was designed).' }
        ]
      }
    },
    {
      questionNumber: 73,
      id: 'ex6-q73',
      difficulty: 'Intermediate',
      skillTag: 'Infinitive Modifier Goal',
      prompt: 'To determine whether the treatment was effective, ___',
      options: [
        'the experiment was repeated by the research team.',
        'the research team repeated the experiment under controlled conditions.',
        'repetitions of the experiment were conducted.',
        'the results were analyzed carefully.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Who intended to determine? "the research team".',
        whyCorrect: 'Actor "the research team" immediately follows infinitive goal phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Dangling modifier.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 74,
      id: 'ex6-q74',
      difficulty: 'Intermediate',
      skillTag: 'Participial Review Modifier',
      prompt: 'While reviewing historical records from the nineteenth century, ___',
      options: [
        'an unexamined correspondence between two astronomers was found.',
        'the archivist discovered an unexamined correspondence between two astronomers.',
        'the discovery of an unexamined correspondence occurred.',
        'two astronomers\' unexamined correspondence was found.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Who was reviewing? "the archivist".',
        whyCorrect: 'Actor "archivist" immediately follows introductory modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Dangling modifier (correspondence reviewing records).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 75,
      id: 'ex6-q75',
      difficulty: 'Intermediate',
      skillTag: 'Passive Built Modifier',
      prompt: 'Built more than two centuries ago, ___',
      options: [
        'the historic observatory has undergone extensive renovation.',
        'architects renovated the historic observatory.',
        'the renovation of the historic observatory was completed.',
        'extensive repairs were made to the historic observatory.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'What was built? "the historic observatory".',
        whyCorrect: 'Subject "historic observatory" follows modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier (implies architects built 200 years ago).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Exercise Set 7 — Comprehensive SAT Mastery (Qs 76–90)',
  description: 'Mixed practice covering independent boundaries, colons, sub-verb agreement, and modifier placement.',
  questions: [
    {
      questionNumber: 76,
      id: 'ex7-q76',
      difficulty: 'Intermediate',
      skillTag: 'Semicolon Independent Clauses',
      prompt: 'The researchers gathered samples from four distinct geological formations ___ each formation yielded distinct chemical signatures.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Two independent clauses without conjunction -> Semicolon.',
        whyCorrect: 'Semicolon connects independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon possible, but semicolon is standard clean boundary.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Lacks comma.' }
        ]
      }
    },
    {
      questionNumber: 77,
      id: 'ex7-q77',
      difficulty: 'Intermediate',
      skillTag: 'Comma + But Contrast',
      prompt: 'The team expected the sensor to fail under extreme pressure ___ it continued to function reliably throughout the deep-sea trial.',
      options: [', but', ', however', '; but', 'because'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Two independent clauses expressing contrast -> Comma + but.',
        whyCorrect: 'Comma + but.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', however', whyWrong: 'Comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; but', whyWrong: 'Redundant.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'False cause.' }
        ]
      }
    },
    {
      questionNumber: 78,
      id: 'ex7-q78',
      difficulty: 'Foundation',
      skillTag: 'Colon List Setup',
      prompt: 'The museum acquired three rare artifacts ___ a Roman coin, a Greek amphora, and an Egyptian amulet.',
      options: [':', ';', ',', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Complete clause ("acquired three rare artifacts") followed by list -> Colon.',
        whyCorrect: 'Complete clause : list.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Colon superior.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Incomplete.' }
        ]
      }
    },
    {
      questionNumber: 79,
      id: 'ex7-q79',
      difficulty: 'Foundation',
      skillTag: 'No Colon After Incomplete Verb',
      prompt: 'The museum acquired ___ a Roman coin, a Greek amphora, and an Egyptian amulet.',
      options: [':', ';', ',', 'no punctuation'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"The museum acquired" is incomplete. Direct objects follow without punctuation.',
        whyCorrect: 'No punctuation between verb and direct objects.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Colon after verb is wrong.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Unnecessary.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 80,
      id: 'ex7-q80',
      difficulty: 'Foundation',
      skillTag: 'Introductory Although Clause',
      prompt: 'Although the manuscript was heavily damaged ___ scholars managed to reconstruct most of the text.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Introductory dependent clause -> Comma before main clause.',
        whyCorrect: 'Dependent clause, independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot follow dependent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Redundant.' }
        ]
      }
    },
    {
      questionNumber: 81,
      id: 'ex7-q81',
      difficulty: 'Foundation',
      skillTag: 'Independent Clause Semicolon',
      prompt: 'The manuscript was heavily damaged ___ scholars managed to reconstruct most of the text.',
      options: [',', ';', 'because', 'although'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Two independent clauses without conjunction -> Semicolon.',
        whyCorrect: 'Semicolon separates independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'because', whyWrong: 'False cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'although', whyWrong: 'Creates dependent clause without main clause boundary.' }
        ]
      }
    },
    {
      questionNumber: 82,
      id: 'ex7-q82',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Relative Commas',
      prompt: 'The astronomer Dr. Mae Jemison ___ who joined NASA in 1987 ___ became the first African American woman in space.',
      options: [', / ,', '; / ;', ': / :', 'no punctuation / no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"who joined NASA in 1987" is a nonessential relative clause. Requires pair of commas.',
        whyCorrect: 'Matching comma pair.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', / ,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; / ;', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ': / :', whyWrong: 'Incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits required commas.' }
        ]
      }
    },
    {
      questionNumber: 83,
      id: 'ex7-q83',
      difficulty: 'Intermediate',
      skillTag: 'Essential Appositive Logic',
      prompt: 'The astronaut Mae Jemison joined NASA in 1987. Why are no commas around "Mae Jemison" in "The astronaut Mae Jemison"?',
      options: [
        'Essential appositive specifying which astronaut',
        'Astronaut is an adjective',
        'Commas never separate nouns',
        'Mae Jemison is a dependent clause'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Specifies WHICH astronaut. Essential appositives take no commas.',
        whyCorrect: 'Essential appositive specifying which noun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Factually false.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Factually false.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Factually false.' }
        ]
      }
    },
    {
      questionNumber: 84,
      id: 'ex7-q84',
      difficulty: 'Intermediate',
      skillTag: 'Plural Findings Agreement',
      prompt: 'The findings published in the journal Nature ___ generated widespread interest among climate scientists.',
      options: ['has', 'have', 'is', 'was'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Head noun = "findings" (plural). "The findings... have generated".',
        whyCorrect: 'Plural subject "findings" matches plural verb "have".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Singular verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was', whyWrong: 'Singular.' }
        ]
      }
    },
    {
      questionNumber: 85,
      id: 'ex7-q85',
      difficulty: 'Intermediate',
      skillTag: 'Group Singular Agreement',
      prompt: 'A group of researchers from several international institutions ___ currently conducting field studies in Antarctica.',
      options: ['is', 'are', 'were', 'have been'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Head noun = "group" (singular). "A group... is conducting".',
        whyCorrect: 'Singular subject "group" matches singular verb "is".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural error distracted by researchers/institutions.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural.' }
        ]
      }
    },
    {
      questionNumber: 86,
      id: 'ex7-q86',
      difficulty: 'Intermediate',
      skillTag: 'Team Singular Agreement',
      prompt: 'The team of engineers and technicians ___ completed the preliminary stress tests.',
      options: ['has', 'have', 'were', 'are'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Head noun = "team" (singular). "The team... has completed".',
        whyCorrect: 'Singular subject "team" matches singular verb "has".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Plural distracted by engineers/technicians.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'are', whyWrong: 'Plural.' }
        ]
      }
    },
    {
      questionNumber: 87,
      id: 'ex7-q87',
      difficulty: 'Intermediate',
      skillTag: 'Neither...Nor Closest Assistive Tense',
      prompt: 'Neither the principal investigator nor her assistants ___ expected such dramatic results.',
      options: ['had', 'has', 'is', 'was'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Closest subject = "assistants" (plural). "had expected" works properly for past perfect agreement.',
        whyCorrect: 'Past perfect verb matches assistants.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'had', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'has', whyWrong: 'Singular.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was', whyWrong: 'Singular.' }
        ]
      }
    },
    {
      questionNumber: 88,
      id: 'ex7-q88',
      difficulty: 'Intermediate',
      skillTag: 'Paleontologist Modifier Attachment',
      prompt: 'After examining the fossil under an electron microscope, ___',
      options: [
        'the paleontologist identified microstructures characteristic of early avian species.',
        'microstructures characteristic of early avian species were identified.',
        'the fossil revealed microstructures characteristic of early avian species.',
        'identification of microstructures occurred.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Who examined fossil? "the paleontologist".',
        whyCorrect: 'Actor "paleontologist" follows comma.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier (implies fossil examined itself).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 89,
      id: 'ex7-q89',
      difficulty: 'Intermediate',
      skillTag: 'Weather Station Modifier Attachment',
      prompt: 'Located in a valley surrounded by steep peaks, ___',
      options: [
        'the weather station records extreme daily temperature fluctuations.',
        'meteorologists record extreme daily temperature fluctuations at the weather station.',
        'extreme daily temperature fluctuations are recorded.',
        'recording of daily temperature fluctuations occurs.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'What is located in valley? "the weather station".',
        whyCorrect: 'Subject "weather station" follows modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier (implies meteorologists are located in valley).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 90,
      id: 'ex7-q90',
      difficulty: 'Foundation',
      skillTag: 'Three Parameters Colon List',
      prompt: 'The study evaluated three parameters ___ soil moisture, ambient temperature, and solar radiation.',
      options: [':', ';', ',', 'no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Complete clause ("The study evaluated three parameters") followed by list -> Colon.',
        whyCorrect: 'Complete clause : list.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Colon superior.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Missing boundary.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Exercise Set 8 — Final Master Review & Verification (Qs 91–105)',
  description: 'Final comprehensive evaluation across all sentence structure, punctuation, transition, and agreement concepts.',
  questions: [
    {
      questionNumber: 91,
      id: 'ex8-q91',
      difficulty: 'Intermediate',
      skillTag: 'Solar Flares As a Result',
      prompt: 'The satellite transmission was interrupted by solar flares. ___, ground stations lost contact with the spacecraft for six hours.',
      options: ['As a result', 'However', 'In contrast', 'For instance'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Cause (solar flares) -> Effect (lost contact).',
        whyCorrect: 'As a result.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'As a result', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'No contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'No contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For instance', whyWrong: 'Not an example.' }
        ]
      }
    },
    {
      questionNumber: 92,
      id: 'ex8-q92',
      difficulty: 'Intermediate',
      skillTag: 'Nevertheless Disproof',
      prompt: 'The initial hypothesis seemed plausible. ___, further experimentation disproved its core assumption.',
      options: ['Nevertheless', 'Furthermore', 'Consequently', 'Similarly'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Plausible vs Disproved = Contrast/Concession.',
        whyCorrect: 'Nevertheless.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Furthermore', whyWrong: 'No addition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'Plausibility did not cause disproof.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'No parallel.' }
        ]
      }
    },
    {
      questionNumber: 93,
      id: 'ex8-q93',
      difficulty: 'Foundation',
      skillTag: 'Cities Colon Setup',
      prompt: 'The historian examined primary sources in three cities ___ London, England; Paris, France; and Rome, Italy.',
      options: [':', ';', ',', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Complete clause ("examined primary sources in three cities") followed by list -> Colon.',
        whyCorrect: 'Complete clause : list.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Colon superior.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Incomplete.' }
        ]
      }
    },
    {
      questionNumber: 94,
      id: 'ex8-q94',
      difficulty: 'Intermediate',
      skillTag: 'Complex List Semicolon Rationale',
      prompt: 'The historian examined primary sources in London, England; Paris, France; and Rome, Italy. Why are semicolons used in the list?',
      options: [
        'To separate independent clauses',
        'To separate list items that contain internal commas',
        'To indicate pauses',
        'To introduce dependent clauses'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Items contain internal commas (City, Country). Semicolons prevent comma confusion.',
        whyCorrect: 'Separates list items containing internal commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Factually false.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Factually false.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Factually false.' }
        ]
      }
    },
    {
      questionNumber: 95,
      id: 'ex8-q95',
      difficulty: 'Intermediate',
      skillTag: 'Discovery Has Provided Agreement',
      prompt: 'The discovery of several ancient tools near the riverbank ___ provided new evidence about early human settlement.',
      options: ['has', 'have', 'are', 'were'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Head noun = "discovery" (singular). "The discovery... has provided".',
        whyCorrect: 'Singular subject matches singular verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Plural error distracted by tools.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural.' }
        ]
      }
    },
    {
      questionNumber: 96,
      id: 'ex8-q96',
      difficulty: 'Intermediate',
      skillTag: 'Tools Plural Agreement',
      prompt: 'The tools discovered near the riverbank ___ dated to the late Pleistocene epoch.',
      options: ['were', 'was', 'is', 'has been'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Head noun = "tools" (plural). "The tools... were dated".',
        whyCorrect: 'Plural subject matches plural verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was', whyWrong: 'Singular.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular.' }
        ]
      }
    },
    {
      questionNumber: 97,
      id: 'ex8-q97',
      difficulty: 'Intermediate',
      skillTag: 'Curator Catalog Modifier',
      prompt: 'Having spent months cataloging the artifact collection, ___',
      options: [
        'the curator prepared a detailed exhibition catalog.',
        'a detailed exhibition catalog was prepared by the curator.',
        'the exhibition catalog was finally completed.',
        'preparation of the exhibition catalog took place.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Who spent months cataloging? "the curator".',
        whyCorrect: 'Actor "curator" immediately follows modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 98,
      id: 'ex8-q98',
      difficulty: 'Intermediate',
      skillTag: 'Infinitive Thermal Expansion Goal',
      prompt: 'To reduce thermal expansion during operation, ___',
      options: [
        'the engineers crafted the component from a specialized titanium alloy.',
        'a specialized titanium alloy was used to craft the component.',
        'the component was crafted from a specialized titanium alloy.',
        'crafting of the component required specialized titanium alloy.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Who intended to reduce thermal expansion? "the engineers".',
        whyCorrect: 'Actor "engineers" immediately follows goal phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 99,
      id: 'ex8-q99',
      difficulty: 'Foundation',
      skillTag: 'Report Nonessential Which',
      prompt: 'The report, ___ was released early Tuesday morning, details the environmental impact of the oil spill.',
      options: ['which', 'that', 'whom', 'whose'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Nonessential clause enclosed by commas describing a thing ("report") -> "which".',
        whyCorrect: 'Which introduces nonessential clause for things.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'which', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'That is not used after comma in nonessential relative clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whom', whyWrong: 'Whom is for people.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: 'Whose is possessive.' }
        ]
      }
    },
    {
      questionNumber: 100,
      id: 'ex8-q100',
      difficulty: 'Foundation',
      skillTag: 'Report Essential That',
      prompt: 'The report ___ was released early Tuesday morning details the environmental impact of the oil spill.',
      options: ['that', 'which', 'whom', 'whose'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Essential clause identifying the report without commas -> "that".',
        whyCorrect: 'That introduces essential clause without commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'which', whyWrong: 'Which without commas is less standard on SAT.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whom', whyWrong: 'Whom is for people.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: 'Whose is possessive.' }
        ]
      }
    },
    {
      questionNumber: 101,
      id: 'ex8-q101',
      difficulty: 'Foundation',
      skillTag: 'Scientist Possessive Whose',
      prompt: 'The scientist ___ research led to the discovery was awarded a Nobel Prize.',
      options: ['whose', 'who', 'whom', 'which'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Modifies "research" indicating possession (the scientist\'s research) -> "whose".',
        whyCorrect: 'Whose indicates possession.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whose', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who', whyWrong: 'Who research is ungrammatical.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whom', whyWrong: 'Whom research is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'which', whyWrong: 'Which is for things.' }
        ]
      }
    },
    {
      questionNumber: 102,
      id: 'ex8-q102',
      difficulty: 'Intermediate',
      skillTag: 'Object Relative Pronoun Whom',
      prompt: 'The scientist ___ the board selected to lead the department has published over fifty papers.',
      options: ['whom', 'who', 'whose', 'which'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Replace pronoun in relative clause: "The board selected HIM" -> WHOM.',
        whyCorrect: 'Whom serves as object of verb "selected".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whom', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who', whyWrong: 'Who is subject pronoun; object is needed here.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whose', whyWrong: 'Not possessive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'which', whyWrong: 'Scientist is a person.' }
        ]
      }
    },
    {
      questionNumber: 103,
      id: 'ex8-q103',
      difficulty: 'Foundation',
      skillTag: 'Consensus That Clause',
      prompt: 'The committee reached a consensus ___ the proposed budget should be approved without amendments.',
      options: ['that', ', that', '; that', ': that'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"that" introduces noun clause explaining consensus without punctuation.',
        whyCorrect: 'Integrates noun clause directly into sentence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', that', whyWrong: 'Unnecessary comma.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; that', whyWrong: 'Semicolon before "that" clause is wrong.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': that', whyWrong: 'Colon before "that" is improper.' }
        ]
      }
    },
    {
      questionNumber: 104,
      id: 'ex8-q104',
      difficulty: 'Intermediate',
      skillTag: 'Successful Trial Semicolon However',
      prompt: 'The experiment was successful ___ however, the team decided to run additional trials to confirm the findings.',
      options: [';', ',', ':', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Two independent clauses joined by "however" -> Semicolon before "however".',
        whyCorrect: 'Independent clause; however, independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Incorrect.' }
        ]
      }
    },
    {
      questionNumber: 105,
      id: 'ex8-q105',
      difficulty: 'Intermediate',
      skillTag: 'Although Additional Trials Comma',
      prompt: 'Although the team ran additional trials to confirm the findings ___ the initial conclusions remained unchanged.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Introductory dependent clause ("Although...") -> Comma before main clause.',
        whyCorrect: 'Dependent clause, independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot follow dependent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Redundant.' }
        ]
      }
    }
  ],
  scoreGuide: [
    { range: '14–15 correct', status: 'Mastery Level: Outstanding grasp of SAT Writing sentence boundaries and mechanics.' },
    { range: '11–13 correct', status: 'Advanced Level: Minor refinement needed on edge-case modifiers or lists.' },
    { range: '8–10 correct', status: 'Proficient Level: Strong basics; review complex multi-clause rules.' },
    { range: '0–7 correct', status: 'Foundational Level: Review Theory Blocks 1–22 thoroughly before re-testing.' }
  ]
};
