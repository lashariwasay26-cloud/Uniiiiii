import { WritingExerciseBlock, WritingExerciseQuestion } from './satWritingTypes';

const BLOCK_19_QUESTIONS: WritingExerciseQuestion[] = [
  {
    questionNumber: 1,
    id: 'ch2-ex19-q1',
    difficulty: 'Foundation',
    skillTag: 'Introductory phrase',
    prompt: 'After completing the initial experiment ___ the researchers reviewed the results.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The opening phrase "After completing the initial experiment" is an introductory modifier before the main clause.',
      whyCorrect: 'Choice B is correct because a comma appropriately separates an introductory prepositional/participial phrase from the independent clause that follows.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fails to separate the introductory modifier from the subject.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct. Comma marks the introductory phrase boundary.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolons can only connect two independent clauses, but the opening phrase is dependent.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon must follow a complete independent clause.' }
      ]
    }
  },
  {
    questionNumber: 2,
    id: 'ch2-ex19-q2',
    difficulty: 'Foundation',
    skillTag: 'Shared subject / compound predicate',
    prompt: 'The researchers analyzed the samples ___ and recorded the measurements.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The subject "The researchers" controls both verbs ("analyzed" and "recorded"). This is a compound predicate.',
      whyCorrect: 'Choice A is correct because no punctuation should separate two verbs sharing a single subject.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct. No comma needed in a compound predicate.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Incorrectly inserts a comma before "and" when there is no new independent subject.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'A semicolon cannot separate verbs within a compound predicate.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon cannot interrupt a compound verb phrase.' }
      ]
    }
  },
  {
    questionNumber: 3,
    id: 'ch2-ex19-q3',
    difficulty: 'Foundation',
    skillTag: 'Two independent clauses',
    prompt: 'The researchers analyzed the samples ___ and the technicians recorded the measurements.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'There are two complete independent clauses joined by "and" ("The researchers analyzed..." and "the technicians recorded...").',
      whyCorrect: 'Choice B is correct because a comma paired with a coordinating conjunction (FANBOYS) properly joins two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Omitting the comma before "and" creates a run-on when joining two full clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct. Comma + FANBOYS conjunction joins two independent clauses.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Using both a semicolon AND a conjunction "and" is redundant.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon is unnecessary when "and" is explicitly connecting coordinated independent clauses.' }
      ]
    }
  },
  {
    questionNumber: 4,
    id: 'ch2-ex19-q4',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The university\'s engineering department ___ which was founded decades ago ___ recently expanded its research facilities.',
    options: ['NO CHANGE', ', which was founded decades ago,', '; which was founded decades ago;', ': which was founded decades ago:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The relative clause "which was founded decades ago" supplies nonessential supplementary detail.',
      whyCorrect: 'Choice B is correct because nonessential clauses inside a sentence must be enclosed by paired commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Leaves nonessential information unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', which was founded decades ago,', whyWrong: 'Correct. Paired commas enclose nonessential information.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; which was founded decades ago;', whyWrong: 'Semicolons cannot enclose a dependent relative clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': which was founded decades ago:', whyWrong: 'Colons cannot frame parenthetical phrases inside a clause.' }
      ]
    }
  },
  {
    questionNumber: 5,
    id: 'ch2-ex19-q5',
    difficulty: 'Intermediate',
    skillTag: 'Essential relative clause',
    prompt: 'The students ___ who received scholarships ___ attended the ceremony. (Note: The intended meaning is that ONLY the scholarship recipients attended.)',
    options: ['NO CHANGE', ', who received scholarships,', '; who received scholarships;', '—who received scholarships—'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Because the context specifies that ONLY scholarship recipients attended, "who received scholarships" is restrictive/essential.',
      whyCorrect: 'Choice A is correct because essential relative clauses must remain integrated without commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct. Essential restrictive clause takes no commas.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', who received scholarships,', whyWrong: 'Commas would incorrectly make the clause nonessential, changing the logical meaning to ALL students.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; who received scholarships;', whyWrong: 'Semicolons cannot enclose a modifier.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—who received scholarships—', whyWrong: 'Dashes would make the modifier nonessential.' }
      ]
    }
  },
  {
    questionNumber: 6,
    id: 'ch2-ex19-q6',
    difficulty: 'Intermediate',
    skillTag: 'Independent clause + independent clause',
    prompt: 'The original experiment produced inconsistent results ___ the researchers designed a second experiment.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Both sides are complete independent clauses without a coordinating conjunction.',
      whyCorrect: 'Choice C is correct because a semicolon properly joins two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Creates a fused run-on sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Creates a comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct. Semicolon joins independent clauses.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon is reserved for explanatory/specification relationships.' }
      ]
    }
  },
  {
    questionNumber: 7,
    id: 'ch2-ex19-q7',
    difficulty: 'Intermediate',
    skillTag: 'Semicolon + transition',
    prompt: 'The original experiment produced inconsistent results ___ therefore, the researchers designed a second experiment.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'The transition "therefore" is a conjunctive adverb connecting two independent clauses.',
      whyCorrect: 'Choice C is correct following the pattern: IC ; conjunctive adverb, IC.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Creates a run-on with transition.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Creates a comma splice before a conjunctive adverb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct. Semicolon before transition word.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon is not used before conjunctive adverbs in standard coordination.' }
      ]
    }
  },
  {
    questionNumber: 8,
    id: 'ch2-ex19-q8',
    difficulty: 'Foundation',
    skillTag: 'Introductory dependent clause',
    prompt: 'Although the initial results were promising ___ the researchers repeated the experiment.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"Although the initial results were promising" is an introductory dependent clause.',
      whyCorrect: 'Choice B is correct because a comma separates an introductory dependent clause from the main clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fails to mark the clause boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct. Comma after introductory dependent clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolons require independent clauses on both sides.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon requires a complete thought before it.' }
      ]
    }
  },
  {
    questionNumber: 9,
    id: 'ch2-ex19-q9',
    difficulty: 'Foundation',
    skillTag: 'Integrated dependent clause',
    prompt: 'The researchers repeated the experiment ___ because the initial results were inconsistent.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'When a subordinating clause starting with "because" follows the main clause, it is tightly integrated.',
      whyCorrect: 'Choice A is correct because no comma is needed before an integrated ending dependent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct. Integrated ending dependent clause takes no comma.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Unnecessary comma before a integrated "because" clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon cannot precede a dependent clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon is inappropriate before a subordinating conjunction.' }
      ]
    }
  },
  {
    questionNumber: 10,
    id: 'ch2-ex19-q10',
    difficulty: 'Foundation',
    skillTag: 'Independent clauses',
    prompt: 'The researchers reviewed the evidence ___ they revised their original conclusion.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Both sides are independent clauses.',
      whyCorrect: 'Choice C is correct because a semicolon properly joins two complete sentences.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Creates a fused run-on.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Creates a comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct. Semicolon separates independent clauses.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon is less appropriate than a semicolon when joining sequential actions.' }
      ]
    }
  },
  {
    questionNumber: 11,
    id: 'ch2-ex19-q11',
    difficulty: 'Intermediate',
    skillTag: 'Colon introducing list',
    prompt: 'The experiment required three conditions ___ constant temperature, stable pressure, and controlled humidity.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The clause before the blank ("The experiment required three conditions") is a complete thought introducing a specific list.',
      whyCorrect: 'Choice D is correct because a colon properly introduces a list after a complete independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fails to introduce the list.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'A comma creates a weak boundary before an explicit formal list.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'A semicolon cannot introduce a list of phrases.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct. Colon introduces a list following a complete thought.' }
      ]
    }
  },
  {
    questionNumber: 12,
    id: 'ch2-ex19-q12',
    difficulty: 'Intermediate',
    skillTag: 'No colon after incomplete construction',
    prompt: 'The experiment required ___ constant temperature, stable pressure, and controlled humidity.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"The experiment required" is NOT a complete grammatical thought (verb "required" needs direct objects).',
      whyCorrect: 'Choice A is correct because no punctuation should interrupt a verb and its direct objects.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct. Direct objects complete the verb without punctuation.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Interrupts verb and object.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon cannot follow an incomplete phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon cannot follow an incomplete sentence.' }
      ]
    }
  },
  {
    questionNumber: 13,
    id: 'ch2-ex19-q13',
    difficulty: 'Intermediate',
    skillTag: 'Colon introducing explanation',
    prompt: 'The researchers discovered one major problem ___ the sensors were malfunctioning.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: '"The researchers discovered one major problem" is complete. The second clause specifies what that problem was.',
      whyCorrect: 'Choice D is correct because a colon introduces an explanation or specification after a complete thought.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Creates a fused sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Creates a comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'While grammatically possible, a colon is far more precise for an explanatory relationship.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct. Colon introduces explanatory clause.' }
      ]
    }
  },
  {
    questionNumber: 14,
    id: 'ch2-ex19-q14',
    difficulty: 'Foundation',
    skillTag: 'No punctuation after verb',
    prompt: 'The researchers examined ___ temperature, pressure, and humidity.',
    options: ['NO CHANGE', ':', ';', ','],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The verb "examined" directly takes the list items as its objects.',
      whyCorrect: 'Choice A is correct because no punctuation belongs directly between a transitive verb and its objects.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct. No punctuation after transitive verb.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'Colon after an incomplete clause violates colon rules.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon after verb is ungrammatical.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'Comma separates verb from its direct object.' }
      ]
    }
  },
  {
    questionNumber: 15,
    id: 'ch2-ex19-q15',
    difficulty: 'Intermediate',
    skillTag: 'Colon introducing quotation',
    prompt: 'The researcher made one observation ___ "The measurements were inconsistent."',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: '"The researcher made one observation" is a complete clause introducing a direct quotation statement.',
      whyCorrect: 'Choice D is correct because a colon introduces a direct quote following an independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing required boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'A comma is used for informal dialog verbs, but a colon is preferred after a complete independent introduction.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolons are not used to introduce quotes.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct. Colon introduces quotation after complete thought.' }
      ]
    }
  },
  {
    questionNumber: 16,
    id: 'ch2-ex19-q16',
    difficulty: 'Advanced',
    skillTag: 'Paired supplementary punctuation',
    prompt: 'The revised procedure ___ which required specialized equipment ___ produced more reliable results.',
    options: ['NO CHANGE', ', which required specialized equipment,', '—which required specialized equipment—', 'Both B and C could be grammatically appropriate.'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: '"which required specialized equipment" is nonessential. Both paired commas and paired dashes can enclose nonessential information.',
      whyCorrect: 'Choice D is correct because both paired commas and paired em-dashes are valid enclosure systems for parenthetical phrases.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated nonessential clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', which required specialized equipment,', whyWrong: 'Valid, but C is also valid, making D the complete answer.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—which required specialized equipment—', whyWrong: 'Valid, but B is also valid, making D the complete answer.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Both B and C could be grammatically appropriate.', whyWrong: 'Correct. Both paired commas and paired dashes function legally.' }
      ]
    }
  },
  {
    questionNumber: 17,
    id: 'ch2-ex19-q17',
    difficulty: 'Advanced',
    skillTag: 'Paired supplementary punctuation',
    prompt: 'The researchers ___ after reviewing the evidence ___ revised their original conclusion.',
    options: ['NO CHANGE', ', after reviewing the evidence,', '—after reviewing the evidence—', 'Both B and C could be grammatically appropriate.'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: '"after reviewing the evidence" is an inserted parenthetical phrase.',
      whyCorrect: 'Choice D is correct because both paired commas and paired dashes properly enclose interrupting material.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Lacks required paired punctuation.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', after reviewing the evidence,', whyWrong: 'Valid, but C is also valid.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—after reviewing the evidence—', whyWrong: 'Valid, but B is also valid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Both B and C could be grammatically appropriate.', whyWrong: 'Correct. Both enclosure systems work.' }
      ]
    }
  },
  {
    questionNumber: 18,
    id: 'ch2-ex19-q18',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory colon',
    prompt: 'The researchers discovered the source of the problem ___ the sensors had been damaged.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The second clause explains the "source of the problem".',
      whyCorrect: 'Choice D is correct because a colon establishes an explanatory relationship following a complete sentence.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Creates a fused sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Creates a comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon is less specific than a colon for explanations.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct. Explanatory colon.' }
      ]
    }
  },
  {
    questionNumber: 19,
    id: 'ch2-ex19-q19',
    difficulty: 'Advanced',
    skillTag: 'Emphatic dash',
    prompt: 'The researchers discovered the source of the problem ___ the sensors had been damaged. (Note: The writer intends to create a strong, emphatic break.)',
    options: ['NO CHANGE', ':', '—', ';'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'When the prompt explicitly specifies a strong, emphatic break, an em dash is chosen.',
      whyCorrect: 'Choice C is correct because an em dash creates a strong, dramatic break.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'While a colon explains, the em dash fulfills the requested "emphatic break".' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—', whyWrong: 'Correct. Em dash creates an emphatic break.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ';', whyWrong: 'Semicolon provides a neutral boundary without emphasis.' }
      ]
    }
  },
  {
    questionNumber: 20,
    id: 'ch2-ex19-q20',
    difficulty: 'Intermediate',
    skillTag: 'Supplementary phrase',
    prompt: 'The revised procedure ___ after several months of testing ___ produced more reliable results. (The phrase is supplementary.)',
    options: ['NO CHANGE', ', after several months of testing,', '—after several months of testing—', 'Both B and C could be grammatically appropriate.'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The inserted phrase is nonessential supplementary detail.',
      whyCorrect: 'Choice D is correct because both paired commas and paired dashes are valid.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated interruption.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', after several months of testing,', whyWrong: 'Valid, but C is also valid.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—after several months of testing—', whyWrong: 'Valid, but B is also valid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Both B and C could be grammatically appropriate.', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 21,
    id: 'ch2-ex19-q21',
    difficulty: 'Foundation',
    skillTag: 'Possessive determiner',
    prompt: 'The university revised ___ admissions policy.',
    options: ['it\'s', 'its', 'universities', 'university\'s'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"its" is the possessive pronoun referring to the university.',
      whyCorrect: 'Choice B is correct because possessive pronouns do not take apostrophes.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'it\'s', whyWrong: 'Contraction for "it is" or "it has".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'its', whyWrong: 'Correct. Possessive pronoun without apostrophe.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'universities', whyWrong: 'Plural noun, not possessive.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'university\'s', whyWrong: 'Redundant with "The university" preceding.' }
      ]
    }
  },
  {
    questionNumber: 22,
    id: 'ch2-ex19-q22',
    difficulty: 'Intermediate',
    skillTag: 'Plural possessive',
    prompt: 'The ___ projects were displayed at the exhibition. (The intended meaning is that multiple students jointly produced the projects.)',
    options: ['student\'s', 'students', 'students\'', 'student\'s\''],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Multiple students (plural "students") possessing projects requires plural possessive: "students\'".',
      whyCorrect: 'Choice C is correct because the apostrophe follows the plural -s for regular plural possession.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'student\'s', whyWrong: 'Singular possessive (one student).' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'students', whyWrong: 'Ordinary plural noun without possessive marker.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'students\'', whyWrong: 'Correct. Plural possessive.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'student\'s\'', whyWrong: 'Illformed double apostrophe.' }
      ]
    }
  },
  {
    questionNumber: 23,
    id: 'ch2-ex19-q23',
    difficulty: 'Foundation',
    skillTag: 'Singular possessive',
    prompt: 'The ___ research influenced several later studies. (The intended meaning is that the research belonged to one scientist.)',
    options: ['scientist', 'scientists', 'scientist\'s', 'scientists\''],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'One scientist possessing research requires singular possessive "scientist\'s".',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'scientist', whyWrong: 'Noun without possessive.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'scientists', whyWrong: 'Ordinary plural.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'scientist\'s', whyWrong: 'Correct. Singular possessive.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'scientists\'', whyWrong: 'Plural possessive.' }
      ]
    }
  },
  {
    questionNumber: 24,
    id: 'ch2-ex19-q24',
    difficulty: 'Foundation',
    skillTag: 'They\'re = they are',
    prompt: '___ preparing the final report before the deadline.',
    options: ['Their', 'There', 'They\'re', 'Theirs'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'The sentence needs subject + verb: "They are preparing..." = "They\'re preparing...".',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Their', whyWrong: 'Possessive determiner.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'There', whyWrong: 'Adverb of place.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'They\'re', whyWrong: 'Correct. Contraction for "They are".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Theirs', whyWrong: 'Possessive pronoun.' }
      ]
    }
  },
  {
    questionNumber: 25,
    id: 'ch2-ex19-q25',
    difficulty: 'Foundation',
    skillTag: 'Possessive relative pronoun',
    prompt: 'The committee asked ___ research had influenced the project.',
    options: ['who\'s', 'whose', 'who', 'whos'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"whose" is the possessive relative pronoun.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'who\'s', whyWrong: 'Contraction for "who is" or "who has".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'whose', whyWrong: 'Correct. Possessive relative pronoun.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'who', whyWrong: 'Subject pronoun.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'whos', whyWrong: 'Misspelled.' }
      ]
    }
  },
  {
    questionNumber: 26,
    id: 'ch2-ex19-q26',
    difficulty: 'Intermediate',
    skillTag: 'Introductory participial phrase',
    prompt: 'Reviewing the evidence ___ the researchers revised the conclusion.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"Reviewing the evidence" is an introductory participial phrase modifying "the researchers".',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct. Comma after introductory participial phrase.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon requires independent clause before it.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon requires complete thought before it.' }
      ]
    }
  },
  {
    questionNumber: 27,
    id: 'ch2-ex19-q27',
    difficulty: 'Advanced',
    skillTag: 'Dangling modifier',
    prompt: 'Reviewing the evidence ___ the conclusion seemed obvious. Which revision correctly fixes the modifier problem?',
    options: ['NO CHANGE', 'Reviewing the evidence, the researchers found the conclusion obvious.', 'Reviewing the evidence; the conclusion seemed obvious.', 'Reviewing the evidence: the conclusion seemed obvious.'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'A conclusion cannot review evidence. The subject following the comma must be the logical actor ("the researchers").',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Dangling modifier.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'Reviewing the evidence, the researchers found the conclusion obvious.', whyWrong: 'Correct. Places logical actor after comma.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'Reviewing the evidence; the conclusion seemed obvious.', whyWrong: 'Semicolon after dependent phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Reviewing the evidence: the conclusion seemed obvious.', whyWrong: 'Colon after incomplete phrase.' }
      ]
    }
  },
  {
    questionNumber: 28,
    id: 'ch2-ex19-q28',
    difficulty: 'Intermediate',
    skillTag: 'Essential relative clause',
    prompt: 'The researchers ___ who conducted the experiment ___ published the results. (The clause identifies which researchers are meant.)',
    options: ['NO CHANGE', ', who conducted the experiment,', '—who conducted the experiment—', '(who conducted the experiment)'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The clause identifies which researchers are meant, making it essential.',
      whyCorrect: 'Choice A is correct because essential clauses take no commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct. Integrated restrictive modifier.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', who conducted the experiment,', whyWrong: 'Commas incorrectly make it nonessential.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—who conducted the experiment—', whyWrong: 'Dashes make it nonessential.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '(who conducted the experiment)', whyWrong: 'Parentheses make it nonessential.' }
      ]
    }
  },
  {
    questionNumber: 29,
    id: 'ch2-ex19-q29',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The researchers ___ who had completed the preliminary study ___ analyzed the samples. (The information is supplementary.)',
    options: ['NO CHANGE', ', who had completed the preliminary study,', ': who had completed the preliminary study:', '; who had completed the preliminary study;'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The information is supplementary, requiring paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated nonessential clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', who had completed the preliminary study,', whyWrong: 'Correct. Paired commas.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ': who had completed the preliminary study:', whyWrong: 'Colons cannot enclose modifiers.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '; who had completed the preliminary study;', whyWrong: 'Semicolons cannot enclose modifiers.' }
      ]
    }
  },
  {
    questionNumber: 30,
    id: 'ch2-ex19-q30',
    difficulty: 'Foundation',
    skillTag: 'No subject-verb separation',
    prompt: 'The collection of rare manuscripts ___ is housed in the university library.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The subject is "The collection of rare manuscripts" and the verb is "is housed". No comma should separate a subject from its verb.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct. No subject-verb separation.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Incorrectly separates subject from verb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon interrupts predicate.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon interrupts subject and verb.' }
      ]
    }
  }
];

export const EXERCISE_BLOCK_19: WritingExerciseBlock = {
  blockNumber: 19,
  title: 'Exercise Set 19 — Targeted Practice: Commas, Sentence Boundaries, Colons, Semicolons, and Dashes',
  description: 'Targeted practice covering fundamental to advanced punctuation boundaries, possessives, and modifiers.',
  questions: BLOCK_19_QUESTIONS
};

const BLOCK_20_QUESTIONS: WritingExerciseQuestion[] = [
  {
    questionNumber: 1,
    id: 'ch2-ex20-q1',
    difficulty: 'Intermediate',
    skillTag: 'Semicolon + transition',
    prompt: 'The researchers had expected the experiment to produce consistent results ___ the measurements varied considerably across the three trials.',
    options: ['NO CHANGE', ', however,', '; however,', ': however,'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Two independent clauses connected by the transition "however".',
      whyCorrect: 'Choice C is correct because semicolon + transition + comma properly connects two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', however,', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; however,', whyWrong: 'Correct.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': however,', whyWrong: 'Colon before transition is inappropriate.' }
      ]
    }
  },
  {
    questionNumber: 2,
    id: 'ch2-ex20-q2',
    difficulty: 'Intermediate',
    skillTag: 'Independent clauses',
    prompt: 'The initial results were promising ___ the researchers nevertheless decided to repeat the experiment.',
    options: ['NO CHANGE', ';', ',', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Both clauses are independent. "nevertheless" is already inside the second clause.',
      whyCorrect: 'Choice B is correct because a semicolon separates two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon is less appropriate than a semicolon for simple contrast.' }
      ]
    }
  },
  {
    questionNumber: 3,
    id: 'ch2-ex20-q3',
    difficulty: 'Foundation',
    skillTag: 'Integrated dependent clause',
    prompt: 'The researchers repeated the experiment ___ the initial results were inconsistent.',
    options: ['NO CHANGE', ';', ',', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"because the initial results were inconsistent" is an integrated ending dependent clause.',
      whyCorrect: 'Choice A is correct because no punctuation is required before an integrated subordinating clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon before dependent clause is invalid.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Unnecessary comma.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon before subordinating clause is invalid.' }
      ]
    }
  },
  {
    questionNumber: 4,
    id: 'ch2-ex20-q4',
    difficulty: 'Foundation',
    skillTag: 'Integrated dependent clause',
    prompt: 'The researchers repeated the experiment ___ they wanted to determine whether the unusual results could be reproduced.',
    options: ['NO CHANGE', ';', ',', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The "because" clause is dependent and naturally follows the main clause.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Invalid semicolon before dependent clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Unnecessary comma.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Invalid colon.' }
      ]
    }
  },
  {
    questionNumber: 5,
    id: 'ch2-ex20-q5',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory colon',
    prompt: 'The experiment produced an unexpected result ___ the control group performed better than the experimental group.',
    options: ['NO CHANGE', ';', ',', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The second clause specifies what the "unexpected result" was.',
      whyCorrect: 'Choice D is correct because a colon introduces a specific explanation.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon is less specific than a colon.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 6,
    id: 'ch2-ex20-q6',
    difficulty: 'Intermediate',
    skillTag: 'Semicolon + transition',
    prompt: 'The original method was inexpensive ___ however, it required considerable manual labor.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Structure: IC ; however, IC.',
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
    questionNumber: 7,
    id: 'ch2-ex20-q7',
    difficulty: 'Intermediate',
    skillTag: 'Semicolon + transition',
    prompt: 'The original method was inexpensive; ___ it required considerable manual labor.',
    options: ['however,', 'however', ', however,', ': however,'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The semicolon is already in place; "however" must be followed by a comma.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'however,', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'however', whyWrong: 'Missing comma after transition.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ', however,', whyWrong: 'Double punctuation after semicolon.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': however,', whyWrong: 'Double punctuation.' }
      ]
    }
  },
  {
    questionNumber: 8,
    id: 'ch2-ex20-q8',
    difficulty: 'Foundation',
    skillTag: 'Sentence + transition',
    prompt: 'The original method was inexpensive. ___ it required considerable manual labor.',
    options: ['However,', 'However', '; however,', ', however,'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'A period ends the first sentence; "However" begins a new sentence and takes a comma.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'However,', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Missing comma after sentence-initial transition.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; however,', whyWrong: 'Double boundary after period.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ', however,', whyWrong: 'Double boundary.' }
      ]
    }
  },
  {
    questionNumber: 9,
    id: 'ch2-ex20-q9',
    difficulty: 'Intermediate',
    skillTag: 'Parenthetical transition',
    prompt: 'The researchers ___ however ___ decided to repeat the experiment.',
    options: ['NO CHANGE', ', however,', '; however;', ': however:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"however" is parenthetical inside the clause.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated parenthetical.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', however,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; however;', whyWrong: 'Semicolons cannot enclose an internal word.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': however:', whyWrong: 'Colons cannot enclose an internal word.' }
      ]
    }
  },
  {
    questionNumber: 10,
    id: 'ch2-ex20-q10',
    difficulty: 'Foundation',
    skillTag: 'Transition expressing consequence',
    prompt: 'The first experiment failed; ___ the researchers developed a revised procedure. (The transition indicates a result or consequence.)',
    options: ['however,', 'therefore,', 'nevertheless,', 'instead,'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The second clause is a consequence of the first.',
      whyCorrect: 'Choice B is correct ("therefore,").',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'however,', whyWrong: 'Expresses contrast, not consequence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'therefore,', whyWrong: 'Correct. Expresses consequence.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'nevertheless,', whyWrong: 'Expresses concession/contrast.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'instead,', whyWrong: 'Expresses alternative.' }
      ]
    }
  },
  {
    questionNumber: 11,
    id: 'ch2-ex20-q11',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory colon',
    prompt: 'The researchers identified one major source of error ___ the sensors had been calibrated incorrectly.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The second clause specifies the source of error.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon is less specific than a colon for explanations.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 12,
    id: 'ch2-ex20-q12',
    difficulty: 'Advanced',
    skillTag: 'Emphatic dash',
    prompt: 'The researchers identified one major source of error ___ the sensors had been calibrated incorrectly. (The writer wants to create a stronger, more emphatic break.)',
    options: ['NO CHANGE', ',', ';', '—'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The question explicitly requests an emphatic break.',
      whyCorrect: 'Choice D is correct ("—").',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Neutral boundary.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—', whyWrong: 'Correct. Em dash provides emphatic break.' }
      ]
    }
  },
  {
    questionNumber: 13,
    id: 'ch2-ex20-q13',
    difficulty: 'Intermediate',
    skillTag: 'Colon before list',
    prompt: 'The study involved three stages ___ data collection, statistical analysis, and peer review.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: '"The study involved three stages" is complete and introduces a list.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Weak boundary before list.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon cannot introduce a list.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 14,
    id: 'ch2-ex20-q14',
    difficulty: 'Advanced',
    skillTag: 'Colon before complex list',
    prompt: 'The researchers reviewed the data from three cities ___ Boston, Massachusetts; Austin, Texas; and Seattle, Washington.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'Introduces a list of city/state items containing internal commas.',
      whyCorrect: 'Choice D is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing boundary.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma before list containing internal commas creates confusion.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon before list is invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Correct.' }
      ]
    }
  },
  {
    questionNumber: 15,
    id: 'ch2-ex20-q15',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory colon',
    prompt: 'The researchers reached a conclusion ___ the original hypothesis was incorrect.',
    options: ['NO CHANGE', ';', ':', ','],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'The second clause specifies the conclusion.',
      whyCorrect: 'Choice C is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Fused.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Semicolon is less specific.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Correct.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'Comma splice.' }
      ]
    }
  },
  {
    questionNumber: 16,
    id: 'ch2-ex20-q16',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The laboratory ___ which opened in 1985 ___ recently expanded its facilities. (The relative clause provides additional information.)',
    options: ['NO CHANGE', ', which opened in 1985,', '; which opened in 1985;', 'which opened in 1985'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Supplementary relative clause requires paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', which opened in 1985,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; which opened in 1985;', whyWrong: 'Semicolons cannot enclose modifiers.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'which opened in 1985', whyWrong: 'Unpunctuated.' }
      ]
    }
  },
  {
    questionNumber: 17,
    id: 'ch2-ex20-q17',
    difficulty: 'Intermediate',
    skillTag: 'Essential relative clause',
    prompt: 'The laboratory ___ that opened in 1985 ___ recently expanded its facilities. (The clause identifies which laboratory is being discussed.)',
    options: ['NO CHANGE', ', that opened in 1985,', '; that opened in 1985;', '—that opened in 1985—'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The clause identifies which laboratory is meant; it is essential and takes no commas.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', that opened in 1985,', whyWrong: 'Commas make essential info supplementary.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; that opened in 1985;', whyWrong: 'Semicolons invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—that opened in 1985—', whyWrong: 'Dashes make essential info nonessential.' }
      ]
    }
  },
  {
    questionNumber: 18,
    id: 'ch2-ex20-q18',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The scientist ___ who developed the new method ___ received an international award. (The scientist\'s identity is already clear because the sentence refers to one specific named individual in context.)',
    options: ['NO CHANGE', ', who developed the new method,', '; who developed the new method;', ': who developed the new method:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Specific individual identified in context; clause adds supplementary info.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', who developed the new method,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; who developed the new method;', whyWrong: 'Invalid semicolons.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': who developed the new method:', whyWrong: 'Invalid colons.' }
      ]
    }
  },
  {
    questionNumber: 19,
    id: 'ch2-ex20-q19',
    difficulty: 'Intermediate',
    skillTag: 'Essential relative clause',
    prompt: 'The students ___ who completed the optional training ___ were permitted to operate the equipment. (The clause identifies which students were permitted to operate the equipment.)',
    options: ['NO CHANGE', ', who completed the optional training,', '—who completed the optional training—', ': who completed the optional training:'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Identifies subset of students; essential clause takes no commas.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', who completed the optional training,', whyWrong: 'Incorrect commas.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—who completed the optional training—', whyWrong: 'Incorrect dashes.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': who completed the optional training:', whyWrong: 'Incorrect colons.' }
      ]
    }
  },
  {
    questionNumber: 20,
    id: 'ch2-ex20-q20',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential participial phrase',
    prompt: 'The revised procedure ___ developed after several months of testing ___ produced more reliable results. (The participial phrase is supplementary.)',
    options: ['NO CHANGE', ', developed after several months of testing,', '; developed after several months of testing;', ': developed after several months of testing:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Supplementary participial phrase requires paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', developed after several months of testing,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; developed after several months of testing;', whyWrong: 'Semicolons invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': developed after several months of testing:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 21,
    id: 'ch2-ex20-q21',
    difficulty: 'Foundation',
    skillTag: 'Introductory phrase',
    prompt: 'After reviewing the evidence ___ the researchers revised their original conclusion.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Introductory prepositional/participial phrase requires a comma.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Missing comma.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon requires independent clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon requires complete thought before.' }
      ]
    }
  },
  {
    questionNumber: 22,
    id: 'ch2-ex20-q22',
    difficulty: 'Advanced',
    skillTag: 'Dangling modifier',
    prompt: 'After reviewing the evidence ___ the original conclusion seemed less convincing. Which choice best fixes the sentence?',
    options: ['NO CHANGE', ', the researchers found the original conclusion less convincing.', '; the researchers found the original conclusion less convincing.', ': the original conclusion seemed less convincing.'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'A conclusion cannot review evidence. Places the logical actor "the researchers" immediately after the comma.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Dangling modifier.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', the researchers found the original conclusion less convincing.', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; the researchers found the original conclusion less convincing.', whyWrong: 'Semicolon after dependent phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': the original conclusion seemed less convincing.', whyWrong: 'Dangling modifier remains.' }
      ]
    }
  },
  {
    questionNumber: 23,
    id: 'ch2-ex20-q23',
    difficulty: 'Foundation',
    skillTag: 'Introductory participial phrase',
    prompt: 'Walking through the laboratory ___ the researchers noticed that several instruments had been left running.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Introductory modifier takes a comma.',
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
    questionNumber: 24,
    id: 'ch2-ex20-q24',
    difficulty: 'Foundation',
    skillTag: 'Integrated modifier',
    prompt: 'The researchers noticed several instruments ___ left running after the experiment.',
    options: ['NO CHANGE', ', left running,', '; left running;', ': left running:'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"left running after the experiment" is an integrated restrictive modifier.',
      whyCorrect: 'Choice A is correct (no punctuation).',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', left running,', whyWrong: 'Commas unnecessarily interrupt object phrase.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; left running;', whyWrong: 'Semicolons invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': left running:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 25,
    id: 'ch2-ex20-q25',
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
        { optionIndex: 1, optionLabel: 'B', optionText: ', collected during the first trial,', whyWrong: 'Commas make essential info nonessential.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—collected during the first trial—', whyWrong: 'Dashes make essential info nonessential.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': collected during the first trial:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 26,
    id: 'ch2-ex20-q26',
    difficulty: 'Foundation',
    skillTag: 'No subject-verb comma',
    prompt: 'The collection of manuscripts from several universities ___ is now available to researchers.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'No comma should separate subject ("The collection of manuscripts...") from verb ("is").',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Separates subject and verb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon interrupts predicate.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon interrupts subject and verb.' }
      ]
    }
  },
  {
    questionNumber: 27,
    id: 'ch2-ex20-q27',
    difficulty: 'Intermediate',
    skillTag: 'Nonessential relative clause',
    prompt: 'The collection ___ which includes manuscripts from several universities ___ is now available to researchers. (The relative clause is supplementary.)',
    options: ['NO CHANGE', ', which includes manuscripts from several universities,', '; which includes manuscripts from several universities;', ': which includes manuscripts from several universities:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Supplementary relative clause requires paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', which includes manuscripts from several universities,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; which includes manuscripts from several universities;', whyWrong: 'Semicolons invalid.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': which includes manuscripts from several universities:', whyWrong: 'Colons invalid.' }
      ]
    }
  },
  {
    questionNumber: 28,
    id: 'ch2-ex20-q28',
    difficulty: 'Foundation',
    skillTag: 'Compound predicate',
    prompt: 'The researchers analyzed the temperature and pressure readings ___ and recorded the results.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Shared subject ("researchers") controls "analyzed" and "recorded". No comma needed.',
      whyCorrect: 'Choice A is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Correct.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Comma in compound predicate.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Semicolon in compound verb phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon in compound verb phrase.' }
      ]
    }
  },
  {
    questionNumber: 29,
    id: 'ch2-ex20-q29',
    difficulty: 'Foundation',
    skillTag: 'Two independent clauses',
    prompt: 'The researchers analyzed the temperature readings ___ and the technicians recorded the pressure readings.',
    options: ['NO CHANGE', ',', ';', ':'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Two independent clauses connected by "and". Requires comma.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Run-on sentence.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Correct. Comma + FANBOYS.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Redundant semicolon with "and".' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'Colon unnecessary with "and".' }
      ]
    }
  },
  {
    questionNumber: 30,
    id: 'ch2-ex20-q30',
    difficulty: 'Intermediate',
    skillTag: 'Supplementary phrase',
    prompt: 'The research team ___ after several months of preparation ___ began the experiment. (The phrase is supplementary.)',
    options: ['NO CHANGE', ', after several months of preparation,', '; after several months of preparation;', ': after several months of preparation:'],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Supplementary phrase inside main clause requires paired commas.',
      whyCorrect: 'Choice B is correct.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'NO CHANGE', whyWrong: 'Unpunctuated interruption.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', after several months of preparation,', whyWrong: 'Correct.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; after several months of preparation;', whyWrong: 'Invalid semicolons.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': after several months of preparation:', whyWrong: 'Invalid colons.' }
      ]
    }
  }
];

export const EXERCISE_BLOCK_20: WritingExerciseBlock = {
  blockNumber: 20,
  title: 'Exercise Set 20 — Mixed and Difficult SAT-Style Punctuation Practice',
  description: 'Mixed SAT-style punctuation practice combining sentence boundaries, transitions, colons, modifiers, and subject-verb internal structures.',
  questions: BLOCK_20_QUESTIONS
};
