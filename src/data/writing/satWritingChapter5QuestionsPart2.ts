import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Exercises: Diction & Claim Precision',
  description: '10 Questions (Questions 49–58) testing word choice, near-synonyms, quantifiers, and evidentiary support.',
  questions: [
    {
      questionNumber: 49,
      id: 'ch5-q49',
      difficulty: 'Intermediate',
      skillTag: 'Diction - Certainty Level',
      prompt: 'The researchers ___ that the method might improve accuracy.',
      options: ['proved', 'suggested', 'guaranteed', 'established beyond doubt'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence contains tentative language "might improve". "Suggested" matches that degree of certainty.',
        whyCorrect: 'Option B uses "suggested", aligning with tentative modal "might".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'proved', whyWrong: 'Overstates certainty when paired with "might".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'guaranteed', whyWrong: 'Contradicts tentative "might".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'established beyond doubt', whyWrong: 'Overstates claim strength.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ch5-q50',
      difficulty: 'Intermediate',
      skillTag: 'Diction - Effective vs Efficient',
      prompt: 'The method produced the intended result but required excessive time and resources. It was:',
      options: [
        'efficient but ineffective',
        'effective but inefficient',
        'inaccurate but precise',
        'economical but ineffective'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'It achieved the intended result, so it was effective, but it used excessive resources, making it inefficient.',
        whyCorrect: 'Option B accurately distinguishes "effective" (achieves result) from "inefficient" (wastes resources).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'efficient but ineffective', whyWrong: 'Reverses the definitions of efficient and effective.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'inaccurate but precise', whyWrong: 'Concerns measurement, not results/resources.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'economical but ineffective', whyWrong: 'Misapplies "economical" and "ineffective".' }
        ]
      }
    },
    {
      questionNumber: 51,
      id: 'ch5-q51',
      difficulty: 'Hard',
      skillTag: 'Diction - Quantifiers',
      prompt: 'The researchers found that 62% of participants completed the survey. Which statement is supported?',
      options: [
        'Some participants completed the survey.',
        'Most participants completed the survey.',
        'All participants completed the survey.',
        'Few participants completed the survey.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '62% is more than half, so "most" is justified.',
        whyCorrect: 'Option B correctly uses "most" for a majority (>50%).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Some participants...', whyWrong: 'Vague and understates majority finding.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'All participants...', whyWrong: 'Inaccurate absolute claim (62% ≠ 100%).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Few participants...', whyWrong: 'Contradicts 62% majority.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch5-q52',
      difficulty: 'Hard',
      skillTag: 'Diction - Association vs Causation',
      prompt: 'The researchers observed a relationship between the variables but did not establish causation. Which wording is most appropriate?',
      options: [
        'The results prove that X causes Y.',
        'The results demonstrate beyond doubt that X causes Y.',
        'The results suggest an association between X and Y.',
        'The results establish that X inevitably causes Y.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Suggest an association" accurately reflects evidence of a relationship without claiming causation.',
        whyCorrect: 'Option C uses cautious language appropriate for observational data.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'prove that X causes Y', whyWrong: 'Incorrectly claims causation and absolute proof.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'demonstrate beyond doubt', whyWrong: 'Incorrectly claims absolute proof.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'inevitably causes Y', whyWrong: 'Incorrectly claims causation.' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ch5-q53',
      difficulty: 'Hard',
      skillTag: 'Diction - Word Definitions',
      prompt: 'Which word best describes a method that achieves its intended result?',
      options: ['efficient', 'effective', 'economical', 'precise'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Effective" specifically concerns achieving the intended result.',
        whyCorrect: 'Option B is the precise definition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'efficient', whyWrong: 'Refers to resource/time usage, not result achievement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'economical', whyWrong: 'Refers to cost savings.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'precise', whyWrong: 'Refers to exactness/repeatability.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch5-q54',
      difficulty: 'Elite',
      skillTag: 'Diction - Precise vs Accurate',
      prompt: 'A measurement repeatedly gives nearly identical values, but all of those values are substantially different from the true value. The measurements are:',
      options: [
        'accurate but imprecise',
        'precise but inaccurate',
        'both accurate and precise',
        'neither precise nor consistent'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The measurements are consistent with one another (precise), but far from the true value (inaccurate).',
        whyCorrect: 'Option B correctly uses scientific definitions of "precise" and "inaccurate".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'accurate but imprecise', whyWrong: 'Reverses definitions of accuracy and precision.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'both accurate and precise', whyWrong: 'Incorrect because values differ from true value.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'neither precise nor consistent', whyWrong: 'Incorrect because repeated values are nearly identical.' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch5-q55',
      difficulty: 'Elite',
      skillTag: 'Diction - Claim Strength Hierarchy',
      prompt: 'Which sentence makes the strongest claim?',
      options: [
        'The evidence may indicate a relationship.',
        'The evidence suggests a relationship.',
        'The evidence demonstrates a relationship.',
        'The evidence proves a relationship.'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Proves" expresses the strongest degree of certainty beyond doubt.',
        whyCorrect: 'Option D uses "proves", the highest level on the certainty hierarchy.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'may indicate', whyWrong: 'Tentative claim.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'suggests', whyWrong: 'Moderate claim.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'demonstrates', whyWrong: 'Strong claim, but weaker than "proves".' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch5-q56',
      difficulty: 'Elite',
      skillTag: 'Diction - Minority Quantifiers',
      prompt: 'The study found that 18% of participants experienced the effect. Which statement is least justified?',
      options: [
        'Some participants experienced the effect.',
        'A minority of participants experienced the effect.',
        'Few participants experienced the effect.',
        'Most participants experienced the effect.'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '18% is a small minority (<50%), so "most" is completely unjustified and false.',
        whyCorrect: 'Option D claims "most", which requires >50%.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Some participants...', whyWrong: 'Justified (18% is some).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A minority of...', whyWrong: 'Justified (18% is a minority).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Few participants...', whyWrong: 'Justified (18% is a small portion).' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ch5-q57',
      difficulty: 'Elite',
      skillTag: 'Diction - Academic Formality',
      prompt: 'Which revision best matches an academic context without unnecessarily increasing formality?',
      options: [
        'The researchers utilized an innovative methodology to ascertain the results.',
        'The researchers used a new method to determine the results.',
        'The researchers endeavored to utilize a methodology for result ascertainment.',
        'The researchers employed an exceptionally sophisticated methodological approach to ascertain the aforementioned results.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'It remains formal and precise without unnecessary jargon or overformal fluff.',
        whyCorrect: 'Option B uses direct, clear vocabulary ("used a new method to determine").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'utilized an innovative methodology to ascertain', whyWrong: 'Unnecessarily overformal jargon.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'endeavored to utilize a methodology for result ascertainment', whyWrong: 'Extremely bloated overformal jargon.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'exceptionally sophisticated methodological approach to ascertain the aforementioned', whyWrong: 'Ridiculously wordy and pretentious.' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ch5-q58',
      difficulty: 'Elite',
      skillTag: 'Diction - Defensible Claims',
      prompt: 'The researchers have evidence that the policy is associated with increased enrollment but have not established that it caused the increase. Which sentence is most defensible?',
      options: [
        'The policy caused enrollment to increase.',
        'The policy necessarily increases enrollment.',
        'The policy is associated with increased enrollment.',
        'The policy always increases enrollment.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'It states exactly what the evidence establishes ("associated with") and nothing stronger.',
        whyCorrect: 'Option C claims association, perfectly matching the evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'caused enrollment to increase', whyWrong: 'Overstates cause unsupported by evidence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'necessarily increases', whyWrong: 'Asserts necessity unsupported by evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'always increases', whyWrong: 'Asserts absolute universality.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: Logical Comparisons',
  description: '8 Questions (Questions 59–66) testing like-with-like comparisons, comparative pronouns, and modifier scope.',
  questions: [
    {
      questionNumber: 59,
      id: 'ch5-q59',
      difficulty: 'Intermediate',
      skillTag: 'Logical Comparisons - Singular Substitute',
      prompt: 'The tuition at University A is lower than ___ at University B.',
      options: ['University B', 'that', 'those', 'it'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"That" represents the singular noun "tuition" in a comparison.',
        whyCorrect: 'Option B provides "that" (comparing tuition at A with that at B).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'University B', whyWrong: 'Illogical comparison (tuition vs university).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Plural pronoun used for singular noun tuition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'Incorrect pronoun for comparative substitute.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch5-q60',
      difficulty: 'Intermediate',
      skillTag: 'Logical Comparisons - Plural Substitute',
      prompt: 'The facilities at University A are newer than ___ at University B.',
      options: ['that', 'it', 'those', 'them'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Facilities" is plural, so "those" represents the omitted plural noun.',
        whyCorrect: 'Option C provides "those" (comparing facilities at A with those at B).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'Singular pronoun used for plural noun facilities.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'it', whyWrong: 'Singular pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Incorrect pronoun for comparison.' }
        ]
      }
    },
    {
      questionNumber: 61,
      id: 'ch5-q61',
      difficulty: 'Hard',
      skillTag: 'Logical Comparisons - People vs Scores',
      prompt: 'Ali\'s SAT score was higher than ___.',
      options: ['Ahmed', 'Ahmed\'s', 'Ahmed scored', 'the score of Ahmed\'s'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is: Ali\'s score ↔ Ahmed\'s score.',
        whyCorrect: 'Option B uses possessive "Ahmed\'s" to represent "Ahmed\'s score".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Ahmed', whyWrong: 'Illogical comparison (score vs person).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Ahmed scored', whyWrong: 'Mismatched clause structure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the score of Ahmed\'s', whyWrong: 'Double possessive redundancy.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch5-q62',
      difficulty: 'Hard',
      skillTag: 'Logical Comparisons - Programs vs Institutions',
      prompt: 'The engineering program at University A is stronger than ___ at University B.',
      options: [
        'University B',
        'University B\'s',
        'University B is',
        'University B engineering'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"University B\'s" represents "University B\'s engineering program".',
        whyCorrect: 'Option B provides possessive "University B\'s".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'University B', whyWrong: 'Illogical comparison (program vs university).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'University B is', whyWrong: 'Incomplete clause comparison.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'University B engineering', whyWrong: 'Missing possessive or prepositions.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch5-q63',
      difficulty: 'Hard',
      skillTag: 'Logical Comparisons - Parallel Prepositions',
      prompt: 'The university provides more funding for research than ___.',
      options: ['teaching', 'for teaching', 'it teaches', 'teaching receives'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Repeating "for" makes the two funding categories explicitly parallel (funding for research vs funding for teaching).',
        whyCorrect: 'Option B repeats "for teaching".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'teaching', whyWrong: 'Slightly ambiguous (could compare research to teaching itself).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it teaches', whyWrong: 'Mismatched verb phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'teaching receives', whyWrong: 'Mismatched clause structure.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch5-q64',
      difficulty: 'Elite',
      skillTag: 'Logical Comparisons - Modifier Scope with Only',
      prompt: 'Which sentence most clearly establishes that only researchers completed the survey?',
      options: [
        'Researchers only completed the survey.',
        'Researchers completed only the survey.',
        'Only researchers completed the survey.',
        'Researchers completed the survey only.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Only" directly modifies "researchers" when placed immediately before it.',
        whyCorrect: 'Option C explicitly restricts the subject ("Only researchers...").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers only completed', whyWrong: 'Suggests they did nothing except complete it.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'completed only the survey', whyWrong: 'Suggests they completed nothing else besides the survey.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'completed the survey only', whyWrong: 'Suggests they completed nothing else besides the survey.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch5-q65',
      difficulty: 'Elite',
      skillTag: 'Logical Comparisons - Category Matching',
      prompt: 'Which sentence contains the clearest logical comparison?',
      options: [
        'The acceptance rate at A is lower than B.',
        'The acceptance rate at A is lower than that at B.',
        'The acceptance rate at A is lower than B\'s university.',
        'The acceptance rate at A is lower than University B.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is: acceptance rate ↔ acceptance rate.',
        whyCorrect: 'Option B compares "acceptance rate at A" with "that [acceptance rate] at B".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'lower than B', whyWrong: 'Compares acceptance rate to University B.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'lower than B\'s university', whyWrong: 'Compares acceptance rate to university.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'lower than University B', whyWrong: 'Compares acceptance rate to university.' }
        ]
      }
    },
    {
      questionNumber: 66,
      id: 'ch5-q66',
      difficulty: 'Elite',
      skillTag: 'Logical Comparisons - Ambiguous Modifier Scope',
      prompt: 'Which revision best eliminates ambiguity? "The researchers discussed the results with the students in the laboratory."',
      options: [
        'The researchers discussed the results with the students who were in the laboratory.',
        'In the laboratory, the researchers discussed the results with the students.',
        'The researchers, in the laboratory, discussed the results with the students.',
        'The researchers discussed, in the laboratory, the results with the students.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory phrase clearly establishes the location of the discussion.',
        whyCorrect: 'Option B places "In the laboratory" at the start, modifying the entire discussion action cleanly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'students who were in the laboratory', whyWrong: 'Restricts students\' location rather than setting of discussion.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers, in the laboratory, discussed', whyWrong: 'Awkward parenthetical placement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'discussed, in the laboratory, the results', whyWrong: 'Splits verb from object awkwardly.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Block 8 Exercises: Eliminating Redundancy',
  description: '10 Questions (Questions 67–76) testing redundant modifiers, nominalization, and wordy phrases.',
  questions: [
    {
      questionNumber: 67,
      id: 'ch5-q67',
      difficulty: 'Intermediate',
      skillTag: 'Redundancy - Verb Phrases',
      prompt: 'Which is most concise?',
      options: [
        'The committee made a decision to revise the policy.',
        'The committee made the decision of revising the policy.',
        'The committee decided to revise the policy.',
        'The committee conducted a decision regarding policy revision.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Decided" replaces the wordy phrase "made a decision."',
        whyCorrect: 'Option C uses direct verb "decided".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'made a decision to revise', whyWrong: 'Wordy noun phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'made the decision of revising', whyWrong: 'Wordy noun phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'conducted a decision regarding', whyWrong: 'Extremely wordy.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch5-q68',
      difficulty: 'Intermediate',
      skillTag: 'Redundancy - Semantic Overlap',
      prompt: 'Which phrase is generally redundant?',
      options: [
        'research findings',
        'future plans',
        'financial assistance',
        'academic requirements'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A plan normally concerns a future action, making "future" redundant.',
        whyCorrect: 'Option B ("future plans") is inherently redundant in standard context.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'research findings', whyWrong: 'Valid compound noun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'financial assistance', whyWrong: 'Valid noun phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'academic requirements', whyWrong: 'Valid noun phrase.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch5-q69',
      difficulty: 'Hard',
      skillTag: 'Redundancy - Nominalization',
      prompt: 'Which revision is most concise?',
      options: [
        'Researchers conducted an analysis of the results.',
        'Researchers made an analysis of the results.',
        'Researchers analyzed the results.',
        'Researchers performed an analysis regarding the results.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The noun-heavy construction is replaced with the direct verb "analyzed".',
        whyCorrect: 'Option C is direct and concise.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'conducted an analysis of', whyWrong: 'Wordy nominalization.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'made an analysis of', whyWrong: 'Wordy nominalization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'performed an analysis regarding', whyWrong: 'Extremely wordy.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch5-q70',
      difficulty: 'Hard',
      skillTag: 'Redundancy - Due to the Fact That',
      prompt: 'Which revision is best? "Due to the fact that the equipment failed, the experiment was delayed."',
      options: [
        'Due to the equipment failing, the experiment was delayed.',
        'Because the equipment failed, the experiment was delayed.',
        'Owing to the fact of equipment failure, the experiment was delayed.',
        'On account of the fact that the equipment failed, the experiment was delayed.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Because" expresses the causal relationship directly.',
        whyCorrect: 'Option B replaces wordy "Due to the fact that" with "Because".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Due to the equipment failing', whyWrong: 'Awkward gerund construction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Owing to the fact of...', whyWrong: 'Wordy phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'On account of the fact that', whyWrong: 'Wordy phrase.' }
        ]
      }
    },
    {
      questionNumber: 71,
      id: 'ch5-q71',
      difficulty: 'Hard',
      skillTag: 'Redundancy - Has the Ability To',
      prompt: 'Which sentence is most concise without changing the intended meaning?',
      options: [
        'The software has the ability to process large datasets.',
        'The software is capable of having the ability to process large datasets.',
        'The software can process large datasets.',
        'The software possesses the capability of being able to process large datasets.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Can" expresses the same capability directly.',
        whyCorrect: 'Option C replaces "has the ability to" with "can".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has the ability to', whyWrong: 'Wordy phrase for "can".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is capable of having the ability', whyWrong: 'Multiple stacked redundancies.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'possesses the capability of being able', whyWrong: 'Multiple stacked redundancies.' }
        ]
      }
    },
    {
      questionNumber: 72,
      id: 'ch5-q72',
      difficulty: 'Elite',
      skillTag: 'Redundancy - Nominalization Removal',
      prompt: 'Which revision best removes unnecessary nominalization? "The committee conducted an evaluation of the proposal before making a recommendation."',
      options: [
        'The committee conducted an evaluation of the proposal before making a recommendation.',
        'The committee evaluated the proposal before making a recommendation.',
        'The committee did an evaluation of the proposal before making a recommendation.',
        'The committee performed an evaluation concerning the proposal before making a recommendation.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Evaluated" replaces the noun-heavy phrase "conducted an evaluation of" without removing information.',
        whyCorrect: 'Option B uses direct verb "evaluated".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'conducted an evaluation of', whyWrong: 'Retains nominalization.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'did an evaluation of', whyWrong: 'Retains nominalization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'performed an evaluation concerning', whyWrong: 'Retains nominalization and wordy preposition.' }
        ]
      }
    },
    {
      questionNumber: 73,
      id: 'ch5-q73',
      difficulty: 'Elite',
      skillTag: 'Redundancy - Pleonasm',
      prompt: 'Which sentence contains the clearest unnecessary repetition?',
      options: [
        'The researchers repeated the experiment.',
        'The researchers repeated the experiment again.',
        'The researchers conducted the experiment again.',
        'The researchers replicated the experiment.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Repeated" already contains the idea of doing something again.',
        whyCorrect: 'Option B contains pleonasm "repeated... again".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'repeated the experiment', whyWrong: 'Clean and non-redundant.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'conducted the experiment again', whyWrong: 'Clean and non-redundant ("conducted... again").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'replicated the experiment', whyWrong: 'Clean and non-redundant.' }
        ]
      }
    },
    {
      questionNumber: 74,
      id: 'ch5-q74',
      difficulty: 'Elite',
      skillTag: 'Redundancy - In Order To',
      prompt: 'Which revision is most concise while preserving the purpose relationship? "Researchers collected additional data in order to improve the analysis."',
      options: [
        'Researchers collected additional data to improve the analysis.',
        'Researchers collected additional data for the purpose of improving the analysis.',
        'Researchers collected additional data with the intention of improving the analysis.',
        'Researchers collected additional data in order that they might improve the analysis.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The infinitive "to improve" efficiently expresses purpose.',
        whyCorrect: 'Option A replaces "in order to improve" with "to improve".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'for the purpose of improving', whyWrong: 'Wordier phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'with the intention of improving', whyWrong: 'Wordier phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'in order that they might improve', whyWrong: 'Wordier clause.' }
        ]
      }
    },
    {
      questionNumber: 75,
      id: 'ch5-q75',
      difficulty: 'Elite',
      skillTag: 'Redundancy - Contextual In Order To',
      prompt: 'Which sentence should NOT automatically be revised simply because it contains the phrase "in order to"?',
      options: [
        'Researchers collected data in order to improve the analysis.',
        'The committee acted in order to comply with the regulation.',
        'The researchers used a second method in order to distinguish it clearly from the first method.',
        'Researchers conducted the experiment in order to obtain results.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Here, "in order to" can help emphasize the intended purpose and distinguish the purpose from surrounding actions.',
        whyCorrect: 'Option C justifies "in order to" for contrast and clarification.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'data in order to improve', whyWrong: '"to improve" is sufficient.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'acted in order to comply', whyWrong: '"to comply" is sufficient.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'experiment in order to obtain', whyWrong: '"to obtain" is sufficient.' }
        ]
      }
    },
    {
      questionNumber: 76,
      id: 'ch5-q76',
      difficulty: 'Elite',
      skillTag: 'Redundancy - Necessary Qualifications',
      prompt: 'Which revision best preserves necessary qualification? "The results may suggest a possible association between the variables."',
      options: [
        'The results suggest an association between the variables.',
        'The results may suggest an association between the variables.',
        'The results may indicate a possible association between the variables.',
        'The results prove an association between the variables.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence preserves the intended tentative claim ("may suggest") while removing the weaker redundancy of "possible".',
        whyCorrect: 'Option B preserves "may suggest" and cuts "possible".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'results suggest an association', whyWrong: 'Removes modal "may", strengthening the claim beyond intent.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'may indicate a possible', whyWrong: 'Retains redundant "possible" after modal.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'results prove an association', whyWrong: 'Converts tentative claim into absolute claim.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_9: WritingExerciseBlock = {
  blockNumber: 9,
  title: 'Block 9 Exercises: Sentence Boundaries',
  description: '10 Questions (Questions 77–86) testing fragments, run-ons, comma splices, and logical connectors.',
  questions: [
    {
      questionNumber: 77,
      id: 'ch5-q77',
      difficulty: 'Intermediate',
      skillTag: 'Sentence Boundaries - Fragments',
      prompt: 'Which is a complete sentence?',
      options: [
        'Because the researchers needed more evidence.',
        'Although the method was inexpensive.',
        'The researchers repeated the experiment.',
        'After analyzing the results.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Only C expresses a complete independent thought.',
        whyCorrect: 'Option C contains a subject ("researchers"), verb ("repeated"), and complete thought.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Because the researchers...', whyWrong: 'Dependent clause fragment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Although the method...', whyWrong: 'Dependent clause fragment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After analyzing...', whyWrong: 'Prepositional/participial phrase fragment.' }
        ]
      }
    },
    {
      questionNumber: 78,
      id: 'ch5-q78',
      difficulty: 'Intermediate',
      skillTag: 'Sentence Boundaries - Run-ons',
      prompt: 'Which revision correctly fixes the run-on? "The researchers analyzed the data they published the results."',
      options: [
        'The researchers analyzed the data, they published the results.',
        'The researchers analyzed the data; they published the results.',
        'The researchers analyzed the data they, published the results.',
        'The researchers analyzed the data, published the results.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A semicolon correctly separates the two independent clauses.',
        whyCorrect: 'Option B uses a semicolon to separate two complete independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'data, they published', whyWrong: 'Comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'data they, published', whyWrong: 'Misplaced comma.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'data, published the results', whyWrong: 'Missing subject or conjunction.' }
        ]
      }
    },
    {
      questionNumber: 79,
      id: 'ch5-q79',
      difficulty: 'Hard',
      skillTag: 'Sentence Boundaries - Comma Splices',
      prompt: 'Which sentence contains a comma splice?',
      options: [
        'The method was inexpensive, but it was unreliable.',
        'The method was inexpensive; it was unreliable.',
        'The method was inexpensive, it was unreliable.',
        'Although the method was inexpensive, it was unreliable.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Two independent clauses joined only by a comma is a comma splice.',
        whyCorrect: 'Option C joins "The method was inexpensive" and "it was unreliable" with only a comma.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'inexpensive, but it was', whyWrong: 'Correct comma + FANBOYS.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'inexpensive; it was', whyWrong: 'Correct semicolon.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Although..., it was', whyWrong: 'Correct dependent + independent clause structure.' }
        ]
      }
    },
    {
      questionNumber: 80,
      id: 'ch5-q80',
      difficulty: 'Hard',
      skillTag: 'Sentence Boundaries - However Usage',
      prompt: 'Which sentence correctly uses "however"?',
      options: [
        'The method was inexpensive, however, it was unreliable.',
        'The method was inexpensive; however, it was unreliable.',
        'The method was inexpensive however it was unreliable.',
        'The method was inexpensive, however it was unreliable.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"However" is a transitional expression, not a coordinating conjunction, so joining two independent clauses requires a semicolon.',
        whyCorrect: 'Option B correctly uses a semicolon before "however" and comma after.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'inexpensive, however, it was', whyWrong: 'Comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'inexpensive however it was', whyWrong: 'Run-on sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'inexpensive, however it was', whyWrong: 'Comma splice.' }
        ]
      }
    },
    {
      questionNumber: 81,
      id: 'ch5-q81',
      difficulty: 'Hard',
      skillTag: 'Sentence Boundaries - Causal Subordination',
      prompt: 'Which sentence most clearly expresses causation?',
      options: [
        'The equipment failed, and the experiment was delayed.',
        'The equipment failed; the experiment was delayed.',
        'The equipment failed because the experiment was delayed.',
        'Because the equipment failed, the experiment was delayed.'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Because" explicitly establishes the equipment failure as the cause.',
        whyCorrect: 'Option D correctly places "Because" with the cause clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'failed, and the experiment', whyWrong: 'Simple coordination, not explicit cause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'failed; the experiment', whyWrong: 'Semicolon does not declare cause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'failed because the experiment was delayed', whyWrong: 'Reverses logical cause and effect.' }
        ]
      }
    },
    {
      questionNumber: 82,
      id: 'ch5-q82',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Contrast Subordination',
      prompt: 'Which sentence correctly expresses contrast?',
      options: [
        'Because the method was inexpensive, it was unreliable.',
        'Although the method was inexpensive, it was unreliable.',
        'If the method was inexpensive, it was unreliable.',
        'So the method was inexpensive, it was unreliable.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Although" establishes contrast between low cost and unreliability.',
        whyCorrect: 'Option B uses "Although" for contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Because', whyWrong: 'Expresses cause rather than contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'If', whyWrong: 'Expresses condition rather than contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'So', whyWrong: 'Expresses result/coordination rather than contrast.' }
        ]
      }
    },
    {
      questionNumber: 83,
      id: 'ch5-q83',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Conditional Connectors',
      prompt: 'Which sentence correctly expresses a condition?',
      options: [
        'Although the equipment fails, the experiment will be postponed.',
        'Because the equipment fails, the experiment will be postponed.',
        'If the equipment fails, the experiment will be postponed.',
        'The equipment fails, however the experiment will be postponed.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"If" establishes the condition for postponement.',
        whyCorrect: 'Option C uses "If" for conditional relationship.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Although', whyWrong: 'Expresses contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Because', whyWrong: 'Expresses cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'fails, however', whyWrong: 'Comma splice and contrast adverb.' }
        ]
      }
    },
    {
      questionNumber: 84,
      id: 'ch5-q84',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Avoiding False Causation',
      prompt: 'Which sentence avoids incorrectly implying causation?',
      options: [
        'Enrollment increased, and the university increased funding.',
        'Because funding increased, enrollment increased.',
        'Funding increased, therefore enrollment necessarily increased because of it.',
        'Funding increased, proving that enrollment increased because of the policy.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"And" simply coordinates the observations without making an unsupported causal claim.',
        whyCorrect: 'Option A coordinates observations without declaring cause.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Because funding increased...', whyWrong: 'Declares causation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'therefore enrollment necessarily increased', whyWrong: 'Declares necessary causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'proving that enrollment increased because', whyWrong: 'Declares proven causation.' }
        ]
      }
    },
    {
      questionNumber: 85,
      id: 'ch5-q85',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Temporal Sequence',
      prompt: 'Which revision most precisely expresses the intended sequence? "The researchers completed the experiment, they analyzed the results."',
      options: [
        'The researchers completed the experiment, they analyzed the results.',
        'The researchers completed the experiment; however, they analyzed the results.',
        'After the researchers completed the experiment, they analyzed the results.',
        'The researchers completed the experiment because they analyzed the results.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"After" explicitly establishes the temporal sequence.',
        whyCorrect: 'Option C uses "After" and fixes the comma splice.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'completed... they analyzed', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; however,', whyWrong: 'Illogical contrast connector.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because they analyzed', whyWrong: 'Illogical reverse causation.' }
        ]
      }
    },
    {
      questionNumber: 86,
      id: 'ch5-q86',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Coordination Punctuation',
      prompt: 'Which sentence uses coordination correctly?',
      options: [
        'The researchers collected the data, and analyzed the results.',
        'The researchers collected the data and they analyzed the results.',
        'The researchers collected the data, and they analyzed the results.',
        'Both B and C.'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'B coordinates two independent clauses without requiring a comma in informal style; C correctly uses a comma before "and" because it joins two independent clauses.',
        whyCorrect: 'Option D identifies both B and C as grammatically acceptable coordination structures.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'collected the data, and analyzed', whyWrong: 'Incorrect comma before "and" in a simple compound predicate.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'collected the data and they analyzed', whyWrong: 'Valid, but C is also valid.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'collected the data, and they analyzed', whyWrong: 'Valid, but B is also valid.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_10: WritingExerciseBlock = {
  blockNumber: 10,
  title: 'Block 10 Exercises: Punctuation Rules',
  description: '8 Questions (Questions 87–94) testing commas, semicolons, colons, apostrophes, and complex lists.',
  questions: [
    {
      questionNumber: 87,
      id: 'ch5-q87',
      difficulty: 'Intermediate',
      skillTag: 'Punctuation - Compound Predicates',
      prompt: 'Which sentence is correctly punctuated?',
      options: [
        'The researchers analyzed the data, and published the results.',
        'The researchers analyzed the data and published the results.',
        'The researchers analyzed, the data and published the results.',
        'The researchers analyzed the data and, published the results.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'There is one subject ("researchers") with two coordinated verbs ("analyzed" and "published"). No comma is needed before "and".',
        whyCorrect: 'Option B correctly omits comma in compound predicate.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'data, and published', whyWrong: 'Unnecessary comma before "and" when second part is not independent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'analyzed, the data', whyWrong: 'Punctuation splits verb from direct object.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and, published', whyWrong: 'Punctuation splits conjunction from verb.' }
        ]
      }
    },
    {
      questionNumber: 88,
      id: 'ch5-q88',
      difficulty: 'Intermediate',
      skillTag: 'Punctuation - Introductory Dependent Clauses',
      prompt: 'Which sentence correctly uses a comma after an introductory clause?',
      options: [
        'Because the equipment failed the experiment was delayed.',
        'Because, the equipment failed, the experiment was delayed.',
        'Because the equipment failed, the experiment was delayed.',
        'Because the equipment failed the experiment, was delayed.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The introductory dependent clause "Because the equipment failed" is followed by a comma.',
        whyCorrect: 'Option C places comma after the complete introductory clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'failed the experiment was', whyWrong: 'Missing comma after introductory clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Because, the equipment', whyWrong: 'Incorrect comma after "Because".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'failed the experiment, was delayed', whyWrong: 'Comma splits subject and verb.' }
        ]
      }
    },
    {
      questionNumber: 89,
      id: 'ch5-q89',
      difficulty: 'Hard',
      skillTag: 'Punctuation - Nonessential Relative Clauses',
      prompt: 'Which sentence correctly uses commas around nonessential information?',
      options: [
        'The university which was founded in 1850 expanded its engineering program.',
        'The university, which was founded in 1850, expanded its engineering program.',
        'The university which, was founded in 1850 expanded its engineering program.',
        'The university, which was founded in 1850 expanded, its engineering program.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative clause "which was founded in 1850" supplies additional nonessential information and is therefore enclosed by paired commas.',
        whyCorrect: 'Option B places commas both before "which" and after "1850".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'university which was founded...', whyWrong: 'Missing required paired commas.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'which, was founded...', whyWrong: 'Misplaced comma.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'expanded, its', whyWrong: 'Misplaced comma splitting verb from object.' }
        ]
      }
    },
    {
      questionNumber: 90,
      id: 'ch5-q90',
      difficulty: 'Hard',
      skillTag: 'Punctuation - Semicolon Usage',
      prompt: 'Which sentence correctly uses a semicolon?',
      options: [
        'The method was inexpensive, it was reliable.',
        'The method was inexpensive; it was reliable.',
        'The method was inexpensive it; was reliable.',
        'The method was inexpensive; and it was reliable.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both sides are independent clauses joined by a semicolon.',
        whyCorrect: 'Option B correctly uses a semicolon between two independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'inexpensive, it was', whyWrong: 'Comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'inexpensive it; was', whyWrong: 'Misplaced semicolon.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'inexpensive; and it was', whyWrong: 'Semicolon before coordinating conjunction.' }
        ]
      }
    },
    {
      questionNumber: 91,
      id: 'ch5-q91',
      difficulty: 'Hard',
      skillTag: 'Punctuation - Colon Rules',
      prompt: 'Which sentence correctly uses a colon?',
      options: [
        'The study measured: cost, accuracy, and speed.',
        'The study measured three variables: cost, accuracy, and speed.',
        'The study: measured three variables cost, accuracy, and speed.',
        'The study measured three variables, cost: accuracy, and speed.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The material before the colon must form a complete independent clause ("The study measured three variables").',
        whyCorrect: 'Option B places colon after a complete lead-in statement.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'measured: cost', whyWrong: 'Colon directly after verb without complete lead-in.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'study: measured', whyWrong: 'Colon splits subject from verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'cost: accuracy', whyWrong: 'Colon placed inside list.' }
        ]
      }
    },
    {
      questionNumber: 92,
      id: 'ch5-q92',
      difficulty: 'Elite',
      skillTag: 'Punctuation - Essential vs Nonessential',
      prompt: 'Which sentence correctly distinguishes essential from nonessential information?',
      options: [
        'Students, who submit complete applications, will be considered.',
        'Students who submit complete applications will be considered.',
        'Students who submit complete applications, will be considered.',
        'Students, who submit complete applications will be considered.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The clause "who submit complete applications" identifies which students are being discussed, so it is essential and takes no commas.',
        whyCorrect: 'Option B omits commas around the essential clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Students, who... applications, will', whyWrong: 'Uses nonessential commas around essential identifying clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'applications, will', whyWrong: 'Single comma splits subject from verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Students, who...', whyWrong: 'Unmatched single comma.' }
        ]
      }
    },
    {
      questionNumber: 93,
      id: 'ch5-q93',
      difficulty: 'Elite',
      skillTag: 'Punctuation - Possessive Its',
      prompt: 'Which sentence is punctuated correctly?',
      options: [
        'The university changed it\'s financial-aid policy.',
        'The university changed its financial-aid policy.',
        'The university changed its\' financial-aid policy.',
        'The university changed it\'s financial aid policy.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Its" is possessive; "it\'s" means "it is" or "it has."',
        whyCorrect: 'Option B correctly uses possessive pronoun "its".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'it\'s financial-aid', whyWrong: 'Uses contraction "it\'s" for possessive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'its\' financial-aid', whyWrong: 'Invalid apostrophe "its\'".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it\'s financial aid', whyWrong: 'Uses contraction "it\'s" for possessive.' }
        ]
      }
    },
    {
      questionNumber: 94,
      id: 'ch5-q94',
      difficulty: 'Elite',
      skillTag: 'Punctuation - Complex Lists with Semicolons',
      prompt: 'Which sentence uses punctuation to clarify a complex series?',
      options: [
        'The study included students from Lahore, Pakistan, Dhaka, Bangladesh, and Kathmandu, Nepal.',
        'The study included students from Lahore, Pakistan; Dhaka, Bangladesh; and Kathmandu, Nepal.',
        'The study included students from Lahore; Pakistan, Dhaka; Bangladesh, and Kathmandu; Nepal.',
        'The study included students from Lahore, Pakistan: Dhaka, Bangladesh: and Kathmandu, Nepal.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The semicolons distinguish the individual locations, each of which already contains internal commas.',
        whyCorrect: 'Option B uses semicolons to separate major items in a complex list.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Lahore, Pakistan, Dhaka, Bangladesh...', whyWrong: 'Confusing string of commas.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Lahore; Pakistan, Dhaka;...', whyWrong: 'Misplaces semicolons between city and country.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Lahore, Pakistan: Dhaka...', whyWrong: 'Incorrect colons between list items.' }
        ]
      }
    }
  ]
};
