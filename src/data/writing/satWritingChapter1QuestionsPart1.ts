import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Exercise Set 1 — Core Sentence Boundaries (Qs 1–15)',
  description: 'Independent clauses, compound verbs vs. compound clauses, semicolons, conjunctive adverbs, dependent clauses, mixed boundary challenge, and mini elite drill.',
  questions: [
    {
      questionNumber: 1,
      id: 'ex1-q1',
      difficulty: 'Foundation',
      skillTag: 'Independent Clause Connection',
      prompt: 'Researchers initially expected the newly discovered material to conduct electricity efficiently ___ laboratory testing revealed that its conductivity was substantially lower than predicted.',
      options: [', but', ', however', '; but', 'and however,'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Both sides are independent clauses. The relationship is contrast. The structure requires a comma followed by a coordinating conjunction (FANBOYS: but).',
        beforeAndAfterAnalysis: {
          before: 'Researchers initially expected the newly discovered material to conduct electricity efficiently. (Independent)',
          after: 'laboratory testing revealed that its conductivity was substantially lower than predicted. (Independent)'
        },
        whyCorrect: 'A comma followed by "but" correctly connects two independent clauses and communicates the required contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', however', whyWrong: '"However" is a conjunctive adverb, not a coordinating conjunction. Joining two independent clauses with only ", however" creates a comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; but', whyWrong: 'A semicolon can separate independent clauses, but adding "but" immediately after a semicolon is redundant and creates an incorrect combination.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and however,', whyWrong: '"And" does not express the intended contrast, and the placement of "however" is awkward and grammatically inappropriate.' }
        ],
        eliminationShortcut: 'When you see [Independent Clause] ___ [Independent Clause] with contrast -> choose ", but".'
      }
    },
    {
      questionNumber: 2,
      id: 'ex1-q2',
      difficulty: 'Foundation',
      skillTag: 'Independent Clause Connection',
      prompt: 'The astronomers had expected the comet to remain visible for several weeks ___ atmospheric conditions caused it to disappear from view much sooner.',
      options: [';', ', because', ', but', ': and'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Both sides are complete independent clauses expressing contrast (expected to remain visible vs. disappeared much sooner). ", but" provides the clearest contrast.',
        whyCorrect: 'Independent clause + , but + independent clause correctly joins the clauses and marks contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'A semicolon is grammatically possible between independent clauses, but it does not express the contrast as clearly as "but", making C superior.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', because', whyWrong: '"Because" changes the relationship from contrast to cause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': and', whyWrong: 'A colon plus "and" does not form the required structure.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ex1-q3',
      difficulty: 'Intermediate',
      skillTag: 'Compound Predicate vs. Clause',
      prompt: 'The engineers inspected the bridge carefully ___ recorded several areas of structural weakness.',
      options: [', and they', 'and', '; they', ', however'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence has ONE subject ("The engineers") and TWO coordinated verbs ("inspected" and "recorded"). This is a single independent clause with a compound predicate.',
        whyCorrect: 'When one subject performs two actions joined by "and", no comma or new pronoun is required.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', and they', whyWrong: 'Unnecessarily introduces a new subject pronoun ("they") and comma.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; they', whyWrong: 'A semicolon cannot separate two verbs belonging to the same clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', however', whyWrong: '"However" does not express simple sequence and requires a semicolon or new sentence.' }
        ],
        eliminationShortcut: 'One subject + two verbs -> no comma before "and".'
      }
    },
    {
      questionNumber: 4,
      id: 'ex1-q4',
      difficulty: 'Intermediate',
      skillTag: 'Compound Clause Connection',
      prompt: 'The engineers inspected the bridge carefully ___ they recorded several areas of structural weakness.',
      options: ['and', ', and', '; and', ','],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second portion contains its own subject ("they") and verb ("recorded"). Therefore, there are two independent clauses.',
        whyCorrect: 'Two independent clauses joined by "and" require a preceding comma (, and).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and', whyWrong: 'Joining two independent clauses with only "and" without a comma is missing the required boundary punctuation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', and', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; and', whyWrong: 'A semicolon is not paired with "and" here.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'A comma alone creates a comma splice.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ex1-q5',
      difficulty: 'Intermediate',
      skillTag: 'Semicolons',
      prompt: 'The first trial produced highly consistent results ___ the second trial produced measurements that varied considerably.',
      options: [', whereas', ';', ', however', 'because'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both sides are independent clauses. A semicolon directly connects two closely related independent clauses without a conjunction.',
        whyCorrect: 'Independent clause ; independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', whereas', whyWrong: 'Whereas creates a dependent clause, but a semicolon directly connects the two independent clauses cleanly.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', however', whyWrong: 'Creates a comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Implies false cause relationship.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ex1-q6',
      difficulty: 'Intermediate',
      skillTag: 'Conjunctive Adverbs',
      prompt: 'The original procedure was inexpensive ___ however, it required considerably more time than the revised procedure.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"However" is a conjunctive adverb between two independent clauses. The correct pattern is: Independent clause; however, independent clause.',
        whyCorrect: 'A semicolon must precede "however" when it introduces a new independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Creates a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is not standard for contrastive conjunctive adverbs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: '"And however" is structurally incorrect here.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ex1-q7',
      difficulty: 'Foundation',
      skillTag: 'Introductory Dependent Clause',
      prompt: 'Because the initial measurements were inconsistent ___ the researchers repeated the experiment under controlled conditions.',
      options: [',', ';', 'and', 'no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence opens with a dependent clause ("Because the initial measurements were inconsistent"). An introductory dependent clause must be followed by a comma before the main clause.',
        whyCorrect: 'Dependent clause, independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon requires independent clauses on both sides; the "because" clause is dependent.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and', whyWrong: '"And" is redundant and creates an awkward fragment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'An introductory dependent clause requires a comma boundary.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ex1-q8',
      difficulty: 'Foundation',
      skillTag: 'Trailing Dependent Clause',
      prompt: 'The researchers repeated the experiment under controlled conditions ___ because the initial measurements were inconsistent.',
      options: [',', ';', ':', 'no punctuation'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'When a dependent clause ("because the initial measurements were inconsistent") follows the main clause, no comma is normally required.',
        whyCorrect: 'Independent clause + dependent clause requires no punctuation in standard closely connected cause constructions.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Unnecessary comma before trailing cause clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot precede a dependent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon is incorrect before subordinating conjunction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ex1-q9',
      difficulty: 'Advanced',
      skillTag: 'Mixed Boundary Challenge',
      prompt: 'The researchers initially rejected the hypothesis ___ after reviewing the additional evidence, they reconsidered it.',
      options: [', but', ';', 'because', 'no punctuation'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Before blank: "The researchers initially rejected the hypothesis." (Independent). After blank: "after reviewing the additional evidence, they reconsidered it." (Independent clause containing introductory modifier). Semicolon cleanly separates the two independent clauses.',
        whyCorrect: 'Independent clause; independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', but', whyWrong: 'Comma + but could express contrast, but semicolon is cleaner before introductory phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'because', whyWrong: 'Implies rejection happened because of later review, reversing chronology.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Creates a run-on.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ex1-q10',
      difficulty: 'Elite',
      skillTag: 'Elite Multi-Layer Boundary',
      prompt: 'The revised model performed better than the original during controlled testing ___ in field conditions, however, the difference between the two models was considerably smaller.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Clause 1: "The revised model performed better..." (Independent). Clause 2: "in field conditions, however, the difference..." (Independent clause with introductory prepositional phrase and parenthetical "however"). Major boundary requires a semicolon.',
        whyCorrect: 'Semicolon separates the two independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Creates a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon does not fit contrastive structure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Does not properly handle existing "however".' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ex1-q11',
      difficulty: 'Intermediate',
      skillTag: 'Mini Elite Drill 1',
      prompt: 'The researchers expected the new material to be highly durable ___ subsequent testing revealed several weaknesses.',
      options: [', however', '; however,', ', but', 'because'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Two independent clauses showing contrast. Comma + but is the standard FANBOYS connection.',
        whyCorrect: 'Independent clause, but independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', however', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; however,', whyWrong: 'Blank is immediately followed by "subsequent testing", not "however".' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Wrong cause logic.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ex1-q12',
      difficulty: 'Intermediate',
      skillTag: 'Mini Elite Drill 2',
      prompt: 'The researchers expected the new material to be highly durable ___ subsequent testing revealed several weaknesses.',
      options: [';', ', but', ': but', ', however'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Contrast between expectation and testing result -> ", but" provides explicit contrast.',
        whyCorrect: 'Comma + but.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Semicolon works grammatically, but ", but" explicitly marks contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ': but', whyWrong: 'Colon + but is incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', however', whyWrong: 'Comma splice.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ex1-q13',
      difficulty: 'Foundation',
      skillTag: 'Mini Elite Drill 3',
      prompt: 'After the researchers completed the initial trial ___ they analyzed the results in detail.',
      options: [';', ',', ':', 'and'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Introductory dependent clause ("After the researchers completed...") requires a comma before main clause.',
        whyCorrect: 'Dependent clause, independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Semicolon cannot follow dependent clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect after introductory dependent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Redundant.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ex1-q14',
      difficulty: 'Foundation',
      skillTag: 'Mini Elite Drill 4',
      prompt: 'The researchers completed the initial trial ___ they analyzed the results in detail.',
      options: [';', ',', 'because', 'no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Two independent clauses with no conjunction require a semicolon or period.',
        whyCorrect: 'Semicolon separates independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'because', whyWrong: 'Changes chronology/cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Run-on.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ex1-q15',
      difficulty: 'Intermediate',
      skillTag: 'Mini Elite Drill 5',
      prompt: 'The researchers completed the initial trial, and ___ analyzed the results in detail.',
      options: ['they', 'they had', 'the results', 'afterward'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Because a comma precedes "and" (, and), a full independent subject ("they") must follow.',
        whyCorrect: 'Independent clause, and + subject + verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'they', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'they had', whyWrong: 'Wrong tense.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the results', whyWrong: 'Changes subject/meaning.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'afterward', whyWrong: 'Lacks subject for second clause.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Exercise Set 2 — Advanced Punctuation & Clause Boundaries (Qs 16–30)',
  description: 'Colons vs. semicolons, colons before lists, single and paired dashes, fragments, relative clauses, and dangling modifiers.',
  questions: [
    {
      questionNumber: 16,
      id: 'ex2-q16',
      difficulty: 'Intermediate',
      skillTag: 'Colon for Explanation',
      prompt: 'The researchers reached an unexpected conclusion ___ the supposedly more efficient procedure actually required more time to complete.',
      options: [';', ':', ', and', ', however,'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Before blank: "The researchers reached an unexpected conclusion" (Complete setup). After blank: "the supposedly more efficient procedure actually required..." (Specifies/explains the conclusion). A colon introduces explanation.',
        whyCorrect: 'Complete setup : explanation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Semicolon separates independent clauses but does not explicitly introduce explanation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', and', whyWrong: 'Coordinating conjunction does not introduce explanation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', however,', whyWrong: 'Contrast is wrong relationship.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ex2-q17',
      difficulty: 'Intermediate',
      skillTag: 'Colon for Specification',
      prompt: 'The experiment revealed two significant problems ___ the sensor was highly sensitive to temperature, and its readings became unstable under prolonged use.',
      options: [';', ':', ', however', 'because'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Complete setup ("two significant problems") followed by specification of those two problems. Colon is required.',
        whyCorrect: 'Complete clause : specification/elaboration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Semicolon lacks explanatory introduction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', however', whyWrong: 'Wrong relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Wrong cause logic.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ex2-q18',
      difficulty: 'Foundation',
      skillTag: 'Colon Before List',
      prompt: 'The researchers identified three possible causes of the discrepancy ___ measurement error, environmental variation, and equipment failure.',
      options: [':', ';', ',', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Complete clause ("The researchers identified three possible causes of the discrepancy") followed by list of causes.',
        whyCorrect: 'Complete clause : list.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot precede a non-independent list.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Comma alone is weak before 3-item list after complete clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Grammatically incomplete.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ex2-q19',
      difficulty: 'Intermediate',
      skillTag: 'Colon Setup Requirement',
      prompt: 'The researchers identified ___ three possible causes of the discrepancy: measurement error, environmental variation, and equipment failure.',
      options: ['no punctuation', ':', ',', ';'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"The researchers identified" is incomplete before the proposed punctuation because "identified" requires its direct object ("three possible causes..."). No colon or comma can separate verb from object.',
        whyCorrect: 'No punctuation between verb and object.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'no punctuation', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'Colon after incomplete verb phrase is incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Unnecessary comma separating verb from object.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ';', whyWrong: 'Semicolon requires independent clause on left.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ex2-q20',
      difficulty: 'Intermediate',
      skillTag: 'Colon vs. Semicolon',
      prompt: 'The researchers had one major concern ___ the revised procedure had not yet been tested under realistic conditions.',
      options: [';', ':', ', but', 'because'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'First clause introduces "one major concern"; second clause specifies what that concern was. Colon is required for specification.',
        whyCorrect: 'Complete clause : specification.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Semicolon lacks explicit explanatory connection.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', but', whyWrong: 'Wrong relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Wrong cause logic.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ex2-q21',
      difficulty: 'Intermediate',
      skillTag: 'Single Dash Elaboration',
      prompt: 'The researchers discovered an unexpected problem ___ the instrument\'s accuracy declined dramatically after several hours of continuous use.',
      options: [';', ':', '—', ','],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A dash can create a strong break before an explanation or elaboration.',
        whyCorrect: 'Complete statement — explanation/elaboration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Semicolon works grammatically, but dash provides emphatic break.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'Colon also works; dash is highlighted for emphatic break.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '—', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'Creates comma splice.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ex2-q22',
      difficulty: 'Advanced',
      skillTag: 'Independent Clause Semicolon Boundary',
      prompt: 'The researchers discovered an unexpected problem ___ the instrument\'s accuracy declined dramatically after several hours of continuous use, and the decline was greater than expected.',
      options: ['—', ';', ',', 'no punctuation'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Two major independent clauses ("The researchers discovered..." and "the instrument\'s accuracy declined..., and the decline was..."). Semicolon provides major clause boundary.',
        whyCorrect: 'Semicolon separates major independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '—', whyWrong: 'Dash is weaker than semicolon when second clause itself contains coordinating conjunction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Run-on.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ex2-q23',
      difficulty: 'Foundation',
      skillTag: 'Fixing Sentence Fragments',
      prompt: 'The researchers initially rejected the revised procedure. Because the initial trials had produced inconsistent results. Which choice best fixes the sentence?',
      options: [
        'The researchers initially rejected the revised procedure because the initial trials had produced inconsistent results.',
        'The researchers initially rejected the revised procedure. Because the initial trials had produced inconsistent results.',
        'The researchers initially rejected the revised procedure, because the initial trials had produced inconsistent results.',
        'The researchers initially rejected the revised procedure; because the initial trials had produced inconsistent results.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Second sentence ("Because the initial trials...") is a dependent clause fragment. It must be attached to the main clause without unnecessary punctuation.',
        whyCorrect: 'Independent clause + because + dependent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Leaves fragment unchanged.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Unnecessary comma before cause clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Semicolon cannot precede dependent clause.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ex2-q24',
      difficulty: 'Intermediate',
      skillTag: 'Fixing Noun-Phrase Fragments',
      prompt: 'The research team faced an unexpected obstacle. A shortage of funding that delayed the final phase of the project. Which revision produces a complete sentence?',
      options: [
        'The research team faced an unexpected obstacle: a shortage of funding that delayed the final phase of the project.',
        'The research team faced an unexpected obstacle. A shortage of funding that delayed the final phase of the project.',
        'The research team faced an unexpected obstacle; a shortage of funding that delayed the final phase of the project.',
        'The research team faced an unexpected obstacle, a shortage of funding that delayed the final phase of the project.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"A shortage of funding that delayed..." is a noun phrase fragment. A colon after "obstacle" introduces the explanation/specification.',
        whyCorrect: 'Complete setup : explanatory noun phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Leaves noun-phrase fragment standing alone.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Semicolon requires independent clause after it.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Comma is weaker than colon for explicit specification.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ex2-q25',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Relative Clauses',
      prompt: 'The instrument ___ which had been calibrated repeatedly ___ produced the most accurate measurements.',
      options: [', / ,', '; / ;', ': / :', 'no punctuation / no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Core: "The instrument produced the most accurate measurements." The relative clause "which had been calibrated repeatedly" is nonessential and requires a pair of commas.',
        whyCorrect: 'Matching comma pair around nonessential relative clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', / ,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; / ;', whyWrong: 'Semicolons cannot enclose mid-sentence nonessential clauses.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ': / :', whyWrong: 'Colons cannot enclose parenthetical clauses.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits required parenthetical commas for "which".' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ex2-q26',
      difficulty: 'Intermediate',
      skillTag: 'Essential Relative Clause Logic',
      prompt: 'The instrument that had been calibrated repeatedly produced the most accurate measurements. Why is there no comma around "that had been calibrated repeatedly"?',
      options: [
        'Because "that" can never introduce a nonessential clause.',
        'Because the clause is being treated as essential information identifying the instrument.',
        'Because relative clauses never require commas.',
        'Because "had been calibrated" is not a verb.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The clause specifies/identifies WHICH instrument produced the measurements. Essential information takes no commas.',
        whyCorrect: 'Essential information identifying the noun takes no commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Overgeneralization.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Factually false; nonessential relative clauses require commas.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Factually false; had been calibrated is a verb.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ex2-q27',
      difficulty: 'Intermediate',
      skillTag: 'Introductory Modifier Boundary',
      prompt: 'Having completed the preliminary analysis ___ the researchers discovered that several measurements had been recorded incorrectly.',
      options: [',', ';', ':', 'no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Introductory participial phrase ("Having completed the preliminary analysis") requires a comma before the main clause.',
        whyCorrect: 'Introductory participial phrase, main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot follow a modifier phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect after introductory modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits required introductory comma.' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ex2-q28',
      difficulty: 'Hard',
      skillTag: 'Dangling Modifier Diagnostic',
      prompt: 'Having completed the preliminary analysis ___ several measurement errors were discovered by the researchers.',
      options: [',', ';', ':', 'no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'This question illustrates a dangling modifier error. "Having completed..." is followed by "several measurement errors", making it sound like errors completed the analysis! A comma belongs after the modifier, but the main clause itself must be revised to start with "the researchers".',
        whyCorrect: 'Comma follows introductory phrase, though main clause requires active subject "the researchers".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Comma is standard punctuation, though sentence has a dangling modifier error.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot separate introductory phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon is incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Missing boundary.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ex2-q29',
      difficulty: 'Advanced',
      skillTag: 'Complex Clause Boundary',
      prompt: 'The researchers had initially dismissed the unusual result ___ after repeating the experiment several times, however, they concluded that it represented a genuine phenomenon.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'First clause: "The researchers had initially dismissed..." (Independent). Second clause: "after repeating..., however, they concluded..." (Independent). Major boundary requires a semicolon.',
        whyCorrect: 'Semicolon separates major independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Creates comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon wrong relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Lacks comma and awkward.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ex2-q30',
      difficulty: 'Elite',
      skillTag: 'Dependent + Independent Boundary',
      prompt: 'Although the original model had performed well during laboratory testing ___ its accuracy declined substantially under field conditions, a finding that prompted the researchers to redesign the system.',
      options: [',', ';', ':', 'and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Introductory dependent clause ("Although the original model had performed well...") requires a comma before the main clause ("its accuracy declined..."). Later "a finding that..." is an appositive.',
        whyCorrect: 'Comma separates introductory dependent clause from main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon cannot separate dependent clause from independent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Colon incorrect after dependent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Destroys subordinating structure.' }
        ]
      }
    }
  ],
  scoreGuide: [
    { range: '13–15 correct', status: 'Excellent command of advanced sentence boundaries.' },
    { range: '10–12 correct', status: 'Strong foundation; review colon/semicolon and modifier distinctions.' },
    { range: '7–9 correct', status: 'Good understanding of basic rules; practice complex clauses.' },
    { range: '0–6 correct', status: 'Return to theory sections before re-attempting.' }
  ]
};
