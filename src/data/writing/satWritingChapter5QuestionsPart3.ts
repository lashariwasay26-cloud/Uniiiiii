import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_11: WritingExerciseBlock = {
  blockNumber: 11,
  title: 'Block 11 Exercises: Sentence Variety & Emphasis',
  description: '10 Questions (Questions 95–104) testing clause placement, active vs. passive voice, and focus control.',
  questions: [
    {
      questionNumber: 95,
      id: 'ch5-q95',
      difficulty: 'Intermediate',
      skillTag: 'Emphasis - Subordination Placement',
      prompt: 'Which revision places the greatest emphasis on the reason for the decision?',
      options: [
        'The committee revised the policy because the initial results were inconsistent.',
        'Because the initial results were inconsistent, the committee revised the policy.',
        'The committee revised the policy, and the initial results were inconsistent.',
        'The initial results were inconsistent; therefore, the committee revised the policy.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Placing the dependent cause clause at the very beginning of the sentence emphasizes the reason.',
        whyCorrect: 'Option B leads with the reason in an introductory dependent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'revised the policy because...', whyWrong: 'Puts emphasis on the main action at the start.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'revised... and initial results...', whyWrong: 'Simple coordination fails to highlight the causal reason.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'results were inconsistent; therefore...', whyWrong: 'Splits clauses evenly across semicolon.' }
        ]
      }
    },
    {
      questionNumber: 96,
      id: 'ch5-q96',
      difficulty: 'Intermediate',
      skillTag: 'Emphasis - Active Voice Focus',
      prompt: 'Which sentence uses active voice to place primary focus on the researchers?',
      options: [
        'The data were analyzed by the researchers.',
        'The researchers analyzed the data.',
        'Analysis of the data was conducted by the researchers.',
        'The data underwent analysis by the researchers.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Active voice places the actor ("the researchers") in the subject position performing the action directly.',
        whyCorrect: 'Option B is active voice: "The researchers analyzed the data."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'data were analyzed by...', whyWrong: 'Passive voice with focus on data.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Analysis of data was conducted...', whyWrong: 'Wordy passive voice with nominalization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'data underwent analysis by...', whyWrong: 'Passive construction.' }
        ]
      }
    },
    {
      questionNumber: 97,
      id: 'ch5-q97',
      difficulty: 'Hard',
      skillTag: 'Emphasis - Main Claim Primacy',
      prompt: 'The university expanded its scholarship program. The program attracts rural applicants. Which revision best subordinates the descriptive detail to highlight the main action?',
      options: [
        'The university expanded its scholarship program, which attracts rural applicants.',
        'The scholarship program attracts rural applicants, and the university expanded it.',
        'Because the scholarship program attracts rural applicants, the university expanded it.',
        'The scholarship program, which the university expanded, attracts rural applicants.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Placing "expanded its scholarship program" in the main clause makes it the structural focus, while "which attracts rural applicants" provides secondary background detail.',
        whyCorrect: 'Option A keeps main action in main clause and subordinates descriptive feature.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'program attracts... and university expanded', whyWrong: 'Gives equal emphasis to both thoughts.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Because the program attracts...', whyWrong: 'Forces cause/effect relationship not stated in original.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'program, which university expanded, attracts', whyWrong: 'Makes attracting rural applicants the main claim.' }
        ]
      }
    },
    {
      questionNumber: 98,
      id: 'ch5-q98',
      difficulty: 'Hard',
      skillTag: 'Emphasis - Passive Voice Justification',
      prompt: 'When is passive voice preferable to active voice in technical writing?',
      options: [
        'When the sentence needs to be as long as possible.',
        'When the actor is unknown or less important than the object or action.',
        'When the writer wants to create a fragment.',
        'When using pronouns.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Passive voice is appropriate when the focus belongs on the action or object rather than who performed it.',
        whyCorrect: 'Option B correctly identifies the valid rhetorical function of passive voice.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'needs to be long', whyWrong: 'Length is not a valid stylistic goal.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'create a fragment', whyWrong: 'Fragments are grammatical errors.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'when using pronouns', whyWrong: 'Pronouns function equally in active and passive voice.' }
        ]
      }
    },
    {
      questionNumber: 99,
      id: 'ch5-q99',
      difficulty: 'Hard',
      skillTag: 'Emphasis - Choppy Sentences',
      prompt: 'Which revision best eliminates choppy sentence rhythm? "The method was new. The researchers tested it. They found several errors."',
      options: [
        'The method was new, so the researchers tested it, and they found several errors.',
        'Testing the new method, the researchers found several errors.',
        'The method was new. They tested it and found errors.',
        'Because the method was new, it was tested by the researchers who found errors.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Combining three choppy sentences into one concise participial structure ("Testing the new method...") flows smoothly.',
        whyCorrect: 'Option B smoothly integrates the background and main finding.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'new, so... tested it, and they found', whyWrong: 'Run-on string of coordinated clauses.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'method was new. They tested it...', whyWrong: 'Retains short choppy periods.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'tested by the researchers who found', whyWrong: 'Wordy passive voice construction.' }
        ]
      }
    },
    {
      questionNumber: 100,
      id: 'ch5-q100',
      difficulty: 'Elite',
      skillTag: 'Emphasis - End Weight',
      prompt: 'Which sentence best creates rhetorical emphasis at the end of the sentence?',
      options: [
        'Inconsistencies were identified by the researchers after analyzing the data.',
        'After analyzing the data, the researchers identified several critical inconsistencies.',
        'The researchers identified several critical inconsistencies after analyzing the data.',
        'Data analysis was performed by researchers, and inconsistencies were identified.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Leading with the introductory modifier allows the sentence to end with the key finding ("several critical inconsistencies").',
        whyCorrect: 'Option B applies the principle of end weight to focus on the key finding.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Inconsistencies were identified...', whyWrong: 'Ends on weak phrase "after analyzing the data".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'identified several... after analyzing', whyWrong: 'Buries key finding in middle.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Data analysis was performed...', whyWrong: 'Passive voice with awkward end.' }
        ]
      }
    },
    {
      questionNumber: 101,
      id: 'ch5-q101',
      difficulty: 'Elite',
      skillTag: 'Emphasis - Contrast Transitions',
      prompt: 'The method is inexpensive. It requires specialized training. Which revision creates the sharpest contrast?',
      options: [
        'The method is inexpensive, and it requires specialized training.',
        'Although the method is inexpensive, it requires specialized training.',
        'The method is inexpensive because it requires specialized training.',
        'The method is inexpensive; furthermore, it requires specialized training.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Although" highlights the conflict between low cost and complex training.',
        whyCorrect: 'Option B uses "Although" for clear contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'inexpensive, and it requires', whyWrong: 'Simple addition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'inexpensive because it requires', whyWrong: 'Illogical cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'inexpensive; furthermore', whyWrong: 'Additive transition.' }
        ]
      }
    },
    {
      questionNumber: 102,
      id: 'ch5-q102',
      difficulty: 'Elite',
      skillTag: 'Emphasis - Main Cause Identification',
      prompt: 'Which sentence highlights the equipment failure as the main reason for delay?',
      options: [
        'The experiment was delayed, and the equipment failed.',
        'The equipment failed; consequently, the experiment was delayed.',
        'The experiment was delayed after the equipment failed.',
        'The equipment failed, which coincided with the delay of the experiment.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Consequently" explicitly emphasizes that the failure produced the delay.',
        whyCorrect: 'Option B connects the cause directly to the consequence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'delayed, and the equipment failed', whyWrong: 'Reverses logical sequence in coordination.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'delayed after the equipment failed', whyWrong: 'Focuses on timing rather than primary cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'coincided with the delay', whyWrong: 'Expresses coincidence rather than cause.' }
        ]
      }
    },
    {
      questionNumber: 103,
      id: 'ch5-q103',
      difficulty: 'Elite',
      skillTag: 'Emphasis - Action Verb vs Nominalization',
      prompt: 'Which revision replaces a passive nominalization with a clear active verb phrase?',
      options: [
        'A determination was made by the team.',
        'The team made a determination.',
        'The team determined the outcome.',
        'Determination of the outcome was carried out by the team.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"The team determined the outcome" uses an active verb ("determined") and clear subject ("The team").',
        whyCorrect: 'Option C is active, direct, and eliminates nominalization.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'A determination was made by...', whyWrong: 'Passive nominalization.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'made a determination', whyWrong: 'Active subject with nominalization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Determination... was carried out', whyWrong: 'Passive nominalization.' }
        ]
      }
    },
    {
      questionNumber: 104,
      id: 'ch5-q104',
      difficulty: 'Elite',
      skillTag: 'Emphasis - Logical Flow',
      prompt: 'Which sentence best preserves logical flow by placing given information before new information?',
      options: [
        'A new scholarship policy was announced by the university. Expanding access to rural applicants is the goal of this policy.',
        'The university announced a new scholarship policy. This policy aims to expand access to rural applicants.',
        'Expanding access to rural applicants is the goal. The university announced a new scholarship policy for this.',
        'Rural applicants will have expanded access. The university made an announcement of a new scholarship policy.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence 1 ends with "new scholarship policy", and Sentence 2 immediately connects with "This policy".',
        whyCorrect: 'Option B follows the Given-to-New principle cleanly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'announced by the university. Expanding access...', whyWrong: 'Second sentence leads with new concept before connecting to policy.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Expanding access... is the goal...', whyWrong: 'Disconnects announcement from policy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Rural applicants will have... The university made...', whyWrong: 'Abrupt topic shift.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_12: WritingExerciseBlock = {
  blockNumber: 12,
  title: 'Block 12 Exercises: Agreement & Reference',
  description: '12 Questions (Questions 105–116) testing pronoun antecedents, collective nouns, case, and relative pronouns.',
  questions: [
    {
      questionNumber: 105,
      id: 'ch5-q105',
      difficulty: 'Intermediate',
      skillTag: 'Agreement - Collective Nouns',
      prompt: 'The research team published ___ findings.',
      options: ['its', 'their', 'his', 'our'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In standard American English, collective singular nouns ("team") take singular possessive pronouns ("its").',
        whyCorrect: 'Option A uses singular possessive pronoun "its".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'their', whyWrong: 'Plural pronoun for singular collective noun in formal SAT style.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'his', whyWrong: 'Gendered singular pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'our', whyWrong: 'First-person plural pronoun.' }
        ]
      }
    },
    {
      questionNumber: 106,
      id: 'ch5-q106',
      difficulty: 'Intermediate',
      skillTag: 'Agreement - Pronoun Case',
      prompt: 'The grant was awarded to Dr. Khan and ___.',
      options: ['I', 'me', 'myself', 'we'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The pronoun is the object of the preposition "to" ("awarded to me").',
        whyCorrect: 'Option B uses object pronoun "me".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'I', whyWrong: 'Subject pronoun used as object.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive pronoun used without reflexive context.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'we', whyWrong: 'Subject pronoun.' }
        ]
      }
    },
    {
      questionNumber: 107,
      id: 'ch5-q107',
      difficulty: 'Hard',
      skillTag: 'Agreement - Unclear Pronoun Antecedents',
      prompt: 'The university discussed the policy with the committee after ___ reviewed the data.',
      options: ['it', 'the committee', 'they', 'she'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Using "the committee" avoids ambiguity, as "it" or "they" could refer to either the university or the committee.',
        whyCorrect: 'Option B replaces the ambiguous pronoun with the specific noun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'it', whyWrong: 'Ambiguous pronoun (university vs committee).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'they', whyWrong: 'Ambiguous pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'she', whyWrong: 'Gendered singular pronoun without antecedent.' }
        ]
      }
    },
    {
      questionNumber: 108,
      id: 'ch5-q108',
      difficulty: 'Hard',
      skillTag: 'Agreement - Indefinite Pronouns',
      prompt: 'Each of the participants submitted ___ survey.',
      options: ['their', 'his or her', 'its', 'they'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Each" is a singular indefinite pronoun, requiring a singular possessive pronoun ("his or her").',
        whyCorrect: 'Option B provides singular possessive phrase "his or her".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'their', whyWrong: 'Plural pronoun paired with singular "Each".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'its', whyWrong: 'Inanimate pronoun for participants.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'they', whyWrong: 'Subject pronoun.' }
        ]
      }
    },
    {
      questionNumber: 109,
      id: 'ch5-q109',
      difficulty: 'Hard',
      skillTag: 'Agreement - Who vs Whom',
      prompt: 'The researcher ___ conducted the study received an award.',
      options: ['whom', 'who', 'which', 'whose'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative pronoun serves as the subject of the clause "conducted the study" (he conducted → who).',
        whyCorrect: 'Option B uses subject pronoun "who".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whom', whyWrong: 'Object pronoun used in subject position.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'which', whyWrong: 'Used for non-human items.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: 'Possessive pronoun.' }
        ]
      }
    },
    {
      questionNumber: 110,
      id: 'ch5-q110',
      difficulty: 'Elite',
      skillTag: 'Agreement - Ambiguous Object Pronouns',
      prompt: 'Which revision eliminates ambiguous reference? "The manager informed the employee that he would be transferred."',
      options: [
        'The manager informed the employee that he would be transferred.',
        'The manager informed the employee that the employee would be transferred.',
        'The manager informed the employee about transferring him.',
        'He was told by the manager that he would be transferred.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"He" in the original could refer to either manager or employee. Replacing "he" with "the employee" eliminates ambiguity.',
        whyCorrect: 'Option B names the specific noun directly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'he would be transferred', whyWrong: 'Retains ambiguous "he".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'transferring him', whyWrong: 'Retains ambiguous "him".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'He was told... that he...', whyWrong: 'Double ambiguous pronouns.' }
        ]
      }
    },
    {
      questionNumber: 111,
      id: 'ch5-q111',
      difficulty: 'Elite',
      skillTag: 'Agreement - Whom as Object of Preposition',
      prompt: 'The committee interviewed several candidates, two of ___ were selected.',
      options: ['who', 'whom', 'which', 'them'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The pronoun is the object of preposition "of" ("two of whom").',
        whyCorrect: 'Option B correctly uses object pronoun "whom".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'who', whyWrong: 'Subject pronoun following preposition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'which', whyWrong: 'Inanimate relative pronoun for candidates.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Creates a comma splice ("candidates, two of them were selected").' }
        ]
      }
    },
    {
      questionNumber: 112,
      id: 'ch5-q112',
      difficulty: 'Elite',
      skillTag: 'Agreement - Subject/Verb Separation',
      prompt: 'The results of the study, which included data from five regions, ___ presented at the conference.',
      options: ['was', 'were', 'is', 'has been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject is plural "results" (ignore intervening phrase "of the study..."). Plural subject requires plural verb "were".',
        whyCorrect: 'Option B matches plural subject "results".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular verb.' }
        ]
      }
    },
    {
      questionNumber: 113,
      id: 'ch5-q113',
      difficulty: 'Elite',
      skillTag: 'Agreement - Compound Preposition Objects',
      prompt: 'The dean presented awards to Sarah and ___ for their research.',
      options: ['I', 'me', 'myself', 'she'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Object of preposition "to" requires object pronoun ("to me").',
        whyCorrect: 'Option B uses object pronoun "me".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'I', whyWrong: 'Subject pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Incorrect reflexive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'she', whyWrong: 'Subject pronoun.' }
        ]
      }
    },
    {
      questionNumber: 114,
      id: 'ch5-q114',
      difficulty: 'Elite',
      skillTag: 'Agreement - Institutional Antecedents',
      prompt: 'The committee submitted ___ report to the board.',
      options: ['their', 'its', 'his', 'our'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Collective singular noun "committee" takes singular possessive pronoun "its".',
        whyCorrect: 'Option B uses "its".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'their', whyWrong: 'Plural pronoun for singular collective noun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'his', whyWrong: 'Gendered singular pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'our', whyWrong: 'First person pronoun.' }
        ]
      }
    },
    {
      questionNumber: 115,
      id: 'ch5-q115',
      difficulty: 'Elite',
      skillTag: 'Agreement - Compound Subject Agreement',
      prompt: 'Neither the lead researcher nor her assistants ___ present at the meeting.',
      options: ['was', 'were', 'is', 'has been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'With "neither... nor", the verb agrees with the closer subject ("assistants", which is plural).',
        whyCorrect: 'Option B uses plural verb "were" agreeing with "assistants".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular verb.' }
        ]
      }
    },
    {
      questionNumber: 116,
      id: 'ch5-q116',
      difficulty: 'Elite',
      skillTag: 'Agreement - Compound Singular Subject Agreement',
      prompt: 'Neither the assistants nor the lead researcher ___ present at the meeting.',
      options: ['were', 'was', 'are', 'have been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'With "neither... nor", the verb agrees with the closer subject ("the lead researcher", which is singular).',
        whyCorrect: 'Option B uses singular verb "was".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'were', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural verb.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_13: WritingExerciseBlock = {
  blockNumber: 13,
  title: 'Block 13 Exercises: Multi-Layered Editing',
  description: '10 Questions (Questions 117–126) testing priority hierarchy of errors, minimum change principle, and systematic diagnosis.',
  questions: [
    {
      questionNumber: 117,
      id: 'ch5-q117',
      difficulty: 'Intermediate',
      skillTag: 'Multi-Layered Editing - Priority Hierarchy',
      prompt: 'A sentence contains a comma splice and a minor wordiness issue. Which error should be fixed first according to the editing hierarchy?',
      options: [
        'The wordiness issue',
        'The comma splice',
        'Both should be ignored',
        'Neither; rewrite the entire sentence from scratch'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Structural errors (comma splices) take priority over style/efficiency issues.',
        whyCorrect: 'Option B prioritizes structural fixes over wordiness.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The wordiness issue', whyWrong: 'Style/concision is lower priority than grammar/structure.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Both should be ignored', whyWrong: 'Errors must be corrected.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'rewrite from scratch', whyWrong: 'Violates minimum-change principle.' }
        ]
      }
    },
    {
      questionNumber: 118,
      id: 'ch5-q118',
      difficulty: 'Intermediate',
      skillTag: 'Multi-Layered Editing - Minimum Change Principle',
      prompt: 'When fixing a grammatical error in a sentence, the writer should prefer:',
      options: [
        'the revision that completely alters the sentence structure',
        'the smallest revision that corrects the error while preserving meaning',
        'adding multiple new adjectives',
        'converting active voice to passive voice'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The Minimum-Change Principle states that editing should fix the concrete error with the smallest effective modification.',
        whyCorrect: 'Option B correctly defines the minimum-change rule.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'completely alters structure', whyWrong: 'Over-editing increases risk of introducing new errors.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'adding multiple new adjectives', whyWrong: 'Adds unneeded fluff.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'converting active to passive', whyWrong: 'Unjustified voice change.' }
        ]
      }
    },
    {
      questionNumber: 119,
      id: 'ch5-q119',
      difficulty: 'Hard',
      skillTag: 'Multi-Layered Editing - Error Diagnosis',
      prompt: 'Identify the primary error: "Running across the campus, the library was seen by the student."',
      options: [
        'Comma splice',
        'Dangling modifier',
        'Subject-verb agreement error',
        'Redundancy'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Running across the campus" modifies "the library", creating a dangling modifier.',
        whyCorrect: 'Option B correctly identifies the dangling modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Comma splice', whyWrong: 'No comma splice exists.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Subject-verb agreement error', whyWrong: 'Verb "was seen" agrees with "library".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Redundancy', whyWrong: 'No redundancy error present.' }
        ]
      }
    },
    {
      questionNumber: 120,
      id: 'ch5-q120',
      difficulty: 'Hard',
      skillTag: 'Multi-Layered Editing - Targeted Revision',
      prompt: 'Fix the dangling modifier in Q119 with minimal change:',
      options: [
        'Running across the campus, the student saw the library.',
        'As the library was seen, the student ran across campus.',
        'The library, running across the campus, was seen by the student.',
        'Running across campus was how the library was seen by the student.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Placing "the student" directly after the introductory modifier corrects the error cleanly.',
        whyCorrect: 'Option A replaces "the library was seen" with "the student saw the library".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'As the library was seen...', whyWrong: 'Distorts meaning.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The library, running across...', whyWrong: 'Retains illogical modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Running across campus was how...', whyWrong: 'Awkward and passive.' }
        ]
      }
    },
    {
      questionNumber: 121,
      id: 'ch5-q121',
      difficulty: 'Hard',
      skillTag: 'Multi-Layered Editing - Four Pass System',
      prompt: 'Which step comes FIRST in the Four-Pass Editing System?',
      options: ['Efficiency Pass', 'Logic Pass', 'Structure Pass', 'Agreement Pass'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Pass 1 is Structure (sentence boundaries, clauses, fragments, run-ons).',
        whyCorrect: 'Option C is the first pass.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Efficiency Pass', whyWrong: 'Efficiency is Pass 4 (final pass).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Logic Pass', whyWrong: 'Logic is Pass 3.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Agreement Pass', whyWrong: 'Agreement is Pass 2.' }
        ]
      }
    },
    {
      questionNumber: 122,
      id: 'ch5-q122',
      difficulty: 'Elite',
      skillTag: 'Multi-Layered Editing - Structural Priority',
      prompt: 'The sentence contains: 1) a subject-verb agreement error, 2) a comma splice, 3) a redundant adjective. Order the fixes by priority (highest to lowest):',
      options: ['3, 1, 2', '2, 1, 3', '1, 3, 2', '3, 2, 1'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence boundary errors (comma splice = 2) are highest priority, followed by agreement errors (= 1), followed by efficiency/redundancy (= 3).',
        whyCorrect: 'Option B orders 2 (Structure) → 1 (Agreement) → 3 (Efficiency).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '3, 1, 2', whyWrong: 'Puts efficiency first.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '1, 3, 2', whyWrong: 'Puts comma splice last.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '3, 2, 1', whyWrong: 'Reverses true priority order.' }
        ]
      }
    },
    {
      questionNumber: 123,
      id: 'ch5-q123',
      difficulty: 'Elite',
      skillTag: 'Multi-Layered Editing - Valid Style vs Concrete Error',
      prompt: 'Which sentence contains an ACTUAL grammatical/logical error rather than just a stylistic preference?',
      options: [
        'The team completed their report on time.',
        'Because the results were delayed, the presentation was postponed.',
        'The acceptance rate at University A is lower than University B.',
        'The researchers decided to analyze the data carefully.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Comparing "acceptance rate" to "University B" is a concrete logical comparison error.',
        whyCorrect: 'Option C contains an illogical comparison error.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'team completed their report', whyWrong: 'Common usage (or minor collective pronoun preference).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Because the results were delayed...', whyWrong: 'Grammatically flawless.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'decided to analyze... carefully', whyWrong: 'Grammatically flawless.' }
        ]
      }
    },
    {
      questionNumber: 124,
      id: 'ch5-q124',
      difficulty: 'Elite',
      skillTag: 'Multi-Layered Editing - Multiple Errors Resolution',
      prompt: 'Analyze: "The committee conducted an evaluation of the proposal, however they did not approve it." Fix all errors efficiently:',
      options: [
        'The committee evaluated the proposal; however, it did not approve it.',
        'The committee conducted an evaluation of the proposal; however, they did not approve it.',
        'The committee evaluated the proposal, but did not approve it.',
        'Evaluating the proposal, the committee did not approve it.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Fixes comma splice, cuts wordy nominalization "conducted an evaluation", avoids ambiguous pronoun "they/it", and produces a smooth sentence.',
        whyCorrect: 'Option C creates a clean, concise compound predicate without comma splices or wordiness.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'evaluated...; however, it did not approve it', whyWrong: 'Repetitive pronouns "it... it".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'conducted an evaluation...; however, they', whyWrong: 'Retains wordy nominalization and plural pronoun for committee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Evaluating the proposal, the committee...', whyWrong: 'Changes logical flow slightly.' }
        ]
      }
    },
    {
      questionNumber: 125,
      id: 'ch5-q125',
      difficulty: 'Elite',
      skillTag: 'Multi-Layered Editing - Over-Editing Prevention',
      prompt: 'A student wants to edit: "Although the study was small, its findings were statistically significant." Which edit should be made?',
      options: [
        'Change "Although" to "In spite of the fact that"',
        'Change "small" to "diminutive in size"',
        'Change "statistically significant" to "very important"',
        'No edit is needed; the sentence is clear, correct, and concise.'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'The sentence has no grammatical or logical errors and is clear and concise.',
        whyCorrect: 'Option D correctly recognizes that no edit is needed.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In spite of the fact that', whyWrong: 'Adds wordiness.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'diminutive in size', whyWrong: 'Adds pretentious wordiness.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'very important', whyWrong: 'Replaces precise statistical term with vague phrase.' }
        ]
      }
    },
    {
      questionNumber: 126,
      id: 'ch5-q126',
      difficulty: 'Elite',
      skillTag: 'Multi-Layered Editing - Master Sequence',
      prompt: 'What is the correct sequence of the 5-layer editing approach?',
      options: [
        'Efficiency → Precision → Logic → Agreement → Structure',
        'Structure → Agreement → Logic → Precision → Efficiency',
        'Precision → Logic → Structure → Efficiency → Agreement',
        'Agreement → Structure → Efficiency → Logic → Precision'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The standard editing hierarchy runs: Structure → Agreement → Logic → Precision → Efficiency.',
        whyCorrect: 'Option B matches the 5-layer framework.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Efficiency first...', whyWrong: 'Reverses priority.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Precision first...', whyWrong: 'Incorrect order.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Agreement first...', whyWrong: 'Structure must precede agreement.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_14: WritingExerciseBlock = {
  blockNumber: 14,
  title: 'Block 14 Exercises: Rhetorical Precision & Meaning Control',
  description: '12 Questions (Questions 127–138) testing evidence-matched claims, correlation vs. causation, and Given-to-New flow.',
  questions: [
    {
      questionNumber: 127,
      id: 'ch5-q127',
      difficulty: 'Intermediate',
      skillTag: 'Rhetorical Precision - Claim Strength',
      prompt: 'The study found a strong statistical relationship between sleep duration and academic performance. Which verb best expresses this finding without overstating the evidence?',
      options: ['proves', 'correlates with', 'causes', 'guarantees'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A statistical relationship indicates correlation, not proven causation.',
        whyCorrect: 'Option B accurately uses "correlates with".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'proves', whyWrong: 'Overstates statistical finding.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'causes', whyWrong: 'Claims causation from correlation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'guarantees', whyWrong: 'Absolute overstatement.' }
        ]
      }
    },
    {
      questionNumber: 128,
      id: 'ch5-q128',
      difficulty: 'Intermediate',
      skillTag: 'Rhetorical Precision - Given to New',
      prompt: 'Which sentence pair best demonstrates the "Given to New" information principle?',
      options: [
        'The lab acquired a centrifuge. A centrifuge is used to separate fluids.',
        'A centrifuge was acquired by the lab. It separates fluids.',
        'Fluids are separated by centrifuges. The lab bought one.',
        'The lab acquired a centrifuge. Separating fluids is what it does.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 ends with "a centrifuge" (new info). Sentence 2 starts with "A centrifuge" (given info connecting back).',
        whyCorrect: 'Option A creates smooth information flow.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'acquired by the lab. It separates...', whyWrong: 'Passive opening.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Fluids are separated... bought one', whyWrong: 'Abrupt topic shift.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'centrifuge. Separating fluids is...', whyWrong: 'Less direct connection.' }
        ]
      }
    },
    {
      questionNumber: 129,
      id: 'ch5-q129',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Precision - Correlation vs Causation',
      prompt: 'A researcher notes that ice cream sales and sunburn rates both increase during summer. Which conclusion is rhetorically sound?',
      options: [
        'Ice cream consumption causes sunburns.',
        'Sunburns drive people to buy ice cream.',
        'Both variables increase during warmer months, suggesting a common seasonal influence.',
        'Eating ice cream guarantees a sunburn.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Recognizes correlation without falsely claiming one variable causes the other.',
        whyCorrect: 'Option C correctly attributes both to a third underlying variable (seasonal weather).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Ice cream causes sunburns', whyWrong: 'False causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Sunburns drive ice cream sales', whyWrong: 'False causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'guarantees a sunburn', whyWrong: 'Absurd causal claim.' }
        ]
      }
    },
    {
      questionNumber: 130,
      id: 'ch5-q130',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Precision - Modality Alignment',
      prompt: 'The evidence suggests a potential correlation. Which claim matches this level of certainty?',
      options: [
        'The data definitively prove a connection.',
        'The data indicate a possible connection.',
        'The data establish an undeniable link.',
        'The data demonstrate that X always results in Y.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Indicate a possible connection" aligns precisely with tentative "suggests a potential correlation".',
        whyCorrect: 'Option B accurately matches the modality level.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'definitively prove', whyWrong: 'Overstates certainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'undeniable link', whyWrong: 'Overstates certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'always results in', whyWrong: 'Overstates certainty.' }
        ]
      }
    },
    {
      questionNumber: 131,
      id: 'ch5-q131',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Precision - Concision & Meaning',
      prompt: 'Which edit reduces wordiness WITHOUT altering the scope of the claim? "In the vast majority of cases, the treatment yields positive outcomes."',
      options: [
        'The treatment always yields positive outcomes.',
        'Usually, the treatment yields positive outcomes.',
        'The treatment yields positive outcomes.',
        'The treatment might yield positive outcomes.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Usually" replaces "In the vast majority of cases" without over-generalizing to "always" or weakening to "might".',
        whyCorrect: 'Option B preserves the high-frequency scope while trimming fluff.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'always yields', whyWrong: 'Changes scope to 100% absolute.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'yields positive outcomes', whyWrong: 'Removes frequency qualifier entirely.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'might yield', whyWrong: 'Weakens claim to mere possibility.' }
        ]
      }
    },
    {
      questionNumber: 132,
      id: 'ch5-q132',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Precision - Five-Control Check',
      prompt: 'Perform a Five-Control Check: "The author\'s thesis proves beyond doubt that climate change causes migration." Context: The source paper describes a tentative model. What is the primary defect?',
      options: [
        'Structure error',
        'Accuracy defect (claim strength overstates source evidence)',
        'Parallelism defect',
        'Punctuation error'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The claim uses "proves beyond doubt" for a source that only describes a tentative model.',
        whyCorrect: 'Option B correctly identifies the accuracy/certainty mismatch.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Structure error', whyWrong: 'Sentence is structurally valid.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Parallelism defect', whyWrong: 'No list or parallel elements present.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Punctuation error', whyWrong: 'Punctuation is correct.' }
        ]
      }
    },
    {
      questionNumber: 133,
      id: 'ch5-q133',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Precision - Tone & Formality Alignment',
      prompt: 'Which choice fits a formal scientific summary?',
      options: [
        'The results were super cool and totally blew the team away.',
        'The results were statistically significant and unexpected.',
        'The results were kinda crazy, to be honest.',
        'The findings were awesome beyond measure.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Statistically significant and unexpected" maintains professional academic register.',
        whyCorrect: 'Option B provides appropriate formal register.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'super cool and totally blew...', whyWrong: 'Informal slang.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'kinda crazy, to be honest', whyWrong: 'Informal slang.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'awesome beyond measure', whyWrong: 'Hyperbolic subjective tone.' }
        ]
      }
    },
    {
      questionNumber: 134,
      id: 'ch5-q134',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Precision - Passive Voice Context',
      prompt: 'Why is passive voice rhetorically effective here? "The ancient scroll was preserved in a climate-controlled vault."',
      options: [
        'It masks the identity of a criminal.',
        'The object (scroll) and action (preserved) matter more than who placed it in the vault.',
        'It avoids using verbs.',
        'It makes the sentence harder to read.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The scroll\'s state of preservation is the central topic; the specific technician who stored it is irrelevant.',
        whyCorrect: 'Option B justifies passive voice for object focus.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'masks identity of criminal', whyWrong: 'Irrelevant context.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'avoids using verbs', whyWrong: '"was preserved" is a verb phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'makes sentence harder to read', whyWrong: 'Not a valid goal.' }
        ]
      }
    },
    {
      questionNumber: 135,
      id: 'ch5-q135',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Precision - Cohesion & Transition',
      prompt: 'Which transition best bridges a statement of policy with its unexpected negative outcome?',
      options: [
        'Furthermore',
        'Consequently',
        'Paradoxically',
        'Similarly'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Paradoxically" specifically signals an outcome that contradicts expectation.',
        whyCorrect: 'Option C captures the counter-intuitive result.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Addition transition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Standard result transition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Comparison transition.' }
        ]
      }
    },
    {
      questionNumber: 136,
      id: 'ch5-q136',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Precision - Meaning Distortions',
      prompt: 'Original: "Scientists suspect that solar flares might disrupt satellite communications." Which edit DISTORTS the meaning?',
      options: [
        'Solar flares may interfere with satellite communications, according to scientists.',
        'Scientists have proven that solar flares destroy satellite communications.',
        'It is suspected by scientists that satellite communications could be disrupted by solar flares.',
        'Scientists believe solar flares can potentially disrupt satellite communications.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Changing "suspect... might disrupt" to "proven... destroy" drastically distorts certainty and severity.',
        whyCorrect: 'Option B distorts the original claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'may interfere with...', whyWrong: 'Preserves tentative claim.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'suspected... could be disrupted', whyWrong: 'Preserves tentative claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'can potentially disrupt', whyWrong: 'Preserves tentative claim.' }
        ]
      }
    },
    {
      questionNumber: 137,
      id: 'ch5-q137',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Precision - Quantitative Scope',
      prompt: 'A study surveyed 1,000 households and found that 512 owned at least one pet. How should the summary describe pet ownership?',
      options: ['A small minority of households', 'Just over half of the households', 'Nearly all households', 'An insignificant fraction of households'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '512 out of 1,000 is 51.2%, which is accurately described as "just over half."',
        whyCorrect: 'Option B is quantitatively exact.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'small minority', whyWrong: '51.2% is a majority, not minority.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Nearly all', whyWrong: '51.2% is far from "nearly all".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'insignificant fraction', whyWrong: '51.2% is a major portion.' }
        ]
      }
    },
    {
      questionNumber: 138,
      id: 'ch5-q138',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Precision - Information Hierarchy',
      prompt: 'Which arrangement places the main research finding in the most prominent position?',
      options: [
        'Although funding was limited and weather conditions were poor, the team discovered a new species of orchid.',
        'The team discovered a new species of orchid, although funding was limited and weather conditions were poor.',
        'Because funding was limited, a new species of orchid was discovered by the team in poor weather.',
        'In poor weather, with limited funding, orchid species discovery was achieved.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Subordinating background obstacles ("Although...") allows the sentence to culminate in the major finding in the main clause.',
        whyCorrect: 'Option A places the main discovery prominently in the independent clause.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'orchid, although funding...', whyWrong: 'Puts minor obstacles at the end.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Because funding was limited...', whyWrong: 'Creates false cause relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'discovery was achieved', whyWrong: 'Passive, nominalized conclusion.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_15: WritingExerciseBlock = {
  blockNumber: 15,
  title: 'Block 15 Exercises: Chapter Mastery Exam',
  description: '14 Questions (Questions 139–152) testing complete synthesis across all 15 blocks of Chapter 5.',
  questions: [
    {
      questionNumber: 139,
      id: 'ch5-q139',
      difficulty: 'Hard',
      skillTag: 'Mastery Synthesis - Concision & Modifiers',
      prompt: 'Having finished the experiment, the results were double-checked by the lead scientist. Fix the sentence efficiently:',
      options: [
        'Having finished the experiment, the lead scientist double-checked the results.',
        'Having finished the experiment, the results were double-checked.',
        'After the experiment was finished by them, the results were double-checked by the lead scientist.',
        'The results, having finished the experiment, were double-checked.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Corrects dangling modifier by putting "the lead scientist" as subject and uses active voice.',
        whyCorrect: 'Option A attaches introductory modifier to logical actor.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'results were double-checked', whyWrong: 'Dangling modifier.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After the experiment was finished by them...', whyWrong: 'Wordy passive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The results, having finished...', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 140,
      id: 'ch5-q140',
      difficulty: 'Hard',
      skillTag: 'Mastery Synthesis - Parallel Structure & Punctuation',
      prompt: 'The manager emphasized three core priorities: punctuality, communicating clearly, and to solve problems efficiently. Fix parallel structure:',
      options: [
        'punctuality, clear communication, and efficient problem-solving',
        'to be punctual, communicating clearly, and solving problems',
        'punctuality, communicating clearly, and solving problems',
        'punctual, communicating, and problem-solving'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'All three items must be parallel noun phrases.',
        whyCorrect: 'Option A provides parallel noun phrases: punctuality / clear communication / efficient problem-solving.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'to be punctual, communicating...', whyWrong: 'Mixes infinitive, gerund, and participle.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'punctuality, communicating...', whyWrong: 'Mixes noun and gerund.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'punctual, communicating...', whyWrong: 'Mixes adjective and gerund.' }
        ]
      }
    },
    {
      questionNumber: 141,
      id: 'ch5-q141',
      difficulty: 'Hard',
      skillTag: 'Mastery Synthesis - Logical Comparisons',
      prompt: 'The energy consumption of electric vehicles is significantly lower than gasoline-powered cars. Fix the comparison:',
      options: [
        'lower than gasoline-powered cars.',
        'lower than that of gasoline-powered cars.',
        'lower than gasoline cars consumption.',
        'lower than when compared to gasoline-powered cars.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Compares "energy consumption" (singular noun) with "that [energy consumption] of gasoline-powered cars."',
        whyCorrect: 'Option B uses singular pronoun substitute "that of".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'lower than gasoline-powered cars', whyWrong: 'Illogical comparison (consumption vs cars).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'gasoline cars consumption', whyWrong: 'Missing possessive apostrophe.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'when compared to gasoline-powered cars', whyWrong: 'Wordy and retains illogical comparison.' }
        ]
      }
    },
    {
      questionNumber: 142,
      id: 'ch5-q142',
      difficulty: 'Hard',
      skillTag: 'Mastery Synthesis - Pronoun Reference & Subject Verb Agreement',
      prompt: 'Neither the principal nor the teachers ___ satisfied with the new schedule, which has lost ___ original flexibility.',
      options: ['was... its', 'were... its', 'were... their', 'was... their'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Neither... nor" agrees with closer subject "teachers" (plural → "were"). "Schedule" is singular inanimate ("its").',
        whyCorrect: 'Option B provides "were... its".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was... its', whyWrong: 'Singular verb "was" fails with plural "teachers".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were... their', whyWrong: 'Plural pronoun "their" fails with singular "schedule".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was... their', whyWrong: 'Both verb and pronoun are wrong.' }
        ]
      }
    },
    {
      questionNumber: 143,
      id: 'ch5-q143',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Sentence Boundary & Colon Rules',
      prompt: 'The survey revealed several key findings: higher engagement, improved retention, and lower stress. Is this colon used correctly?',
      options: [
        'Yes, because the clause before the colon is independent.',
        'No, because colons can only introduce quotes.',
        'No, because a semicolon should replace the colon.',
        'Yes, because colons can follow any verb.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"The survey revealed several key findings" is a complete independent clause introducing a list.',
        whyCorrect: 'Option A correctly identifies valid colon usage.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'only introduce quotes', whyWrong: 'False rule; colons introduce lists and explanations.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'semicolon should replace', whyWrong: 'Semicolon cannot introduce a list of fragments.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'can follow any verb', whyWrong: 'False rule; lead-in must be independent clause.' }
        ]
      }
    },
    {
      questionNumber: 144,
      id: 'ch5-q144',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Diction & Redundancy',
      prompt: 'The CEO made a decision to completely eliminate past history errors in the report. Eliminate all redundancies:',
      options: [
        'The CEO decided to eliminate historical errors in the report.',
        'The CEO made a decision to eliminate past errors in the report.',
        'The CEO decided to completely eliminate past errors in the report.',
        'The CEO made a decision to eliminate history errors in the report.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"made a decision" → "decided", "completely eliminate" → "eliminate", "past history" → "historical".',
        whyCorrect: 'Option A cuts all three redundancies cleanly.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'made a decision to eliminate past errors', whyWrong: 'Retains "made a decision".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'decided to completely eliminate past errors', whyWrong: 'Retains "completely eliminate" and "past".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'made a decision to eliminate history errors', whyWrong: 'Retains nominalized verb and awkward noun.' }
        ]
      }
    },
    {
      questionNumber: 145,
      id: 'ch5-q145',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Relative Pronoun & Case',
      prompt: 'The scholar ___ paper won the award was praised by the dean, ___ presented the trophy.',
      options: ['who\'s... whom', 'whose... who', 'whose... which', 'who\'s... who'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Possessive "whose paper" + subject relative pronoun "who presented".',
        whyCorrect: 'Option B uses possessive "whose" and subject pronoun "who".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'who\'s... whom', whyWrong: 'Uses contraction "who\'s" (who is) and object pronoun "whom".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whose... which', whyWrong: 'Uses inanimate "which" for human dean.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'who\'s... who', whyWrong: 'Uses contraction "who\'s".' }
        ]
      }
    },
    {
      questionNumber: 146,
      id: 'ch5-q146',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Subordination & Logical Connectors',
      prompt: 'The test results were promising, ___, further trial runs are required before public release.',
      options: ['therefore', 'nevertheless', 'because', 'furthermore'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Promising results vs needing more trials creates contrast ("nevertheless"). Note: with surrounding commas or semicolon context.',
        whyCorrect: 'Option B provides contrast adverb "nevertheless".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'therefore', whyWrong: 'Result connector contradicts contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'because', whyWrong: 'Cause connector contradicts contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'furthermore', whyWrong: 'Additive connector.' }
        ]
      }
    },
    {
      questionNumber: 147,
      id: 'ch5-q147',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Dangling Participial Clauses',
      prompt: 'By analyzing fossilized pollen grains, ancient climate patterns can be reconstructed by geologists. Fix the sentence:',
      options: [
        'By analyzing fossilized pollen grains, geologists can reconstruct ancient climate patterns.',
        'Analyzing fossilized pollen grains, ancient climate patterns are reconstructed.',
        'By analyzing fossilized pollen grains, reconstructing ancient climate patterns is possible by geologists.',
        'Ancient climate patterns, by analyzing fossilized pollen grains, can be reconstructed by geologists.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Geologists are doing the analyzing. Placing "geologists" as subject fixes dangling modifier.',
        whyCorrect: 'Option A attaches introductory phrase to human actor.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'ancient climate patterns are reconstructed', whyWrong: 'Dangling modifier.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'reconstructing... is possible by geologists', whyWrong: 'Wordy passive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Ancient climate patterns, by analyzing...', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 148,
      id: 'ch5-q148',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Essential Clauses & Commas',
      prompt: 'Which sentence correctly omits commas because the clause is essential?',
      options: [
        'Artifacts, that were discovered in 1922, are on display.',
        'The artifacts that were discovered in 1922 are on display.',
        'The artifacts, discovered in 1922 are on display.',
        'Artifacts that were discovered in 1922, are on display.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"That" clauses are restrictive (essential) and take no commas.',
        whyCorrect: 'Option B correctly uses no commas around restrictive "that" clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Artifacts, that were...', whyWrong: 'Commas should not precede "that".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'artifacts, discovered... are', whyWrong: 'Unmatched single comma.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '1922, are', whyWrong: 'Single comma splits clause from verb.' }
        ]
      }
    },
    {
      questionNumber: 149,
      id: 'ch5-q149',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Active Voice & Wordiness',
      prompt: 'A decision was arrived at by the board to make an expansion of the budget. Make fully concise:',
      options: [
        'The board decided to expand the budget.',
        'The board arrived at a decision for budget expansion.',
        'The board came to a decision to expand the budget.',
        'An expansion of the budget was decided upon by the board.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Converts "A decision was arrived at by" to "decided" and "make an expansion of" to "expand".',
        whyCorrect: 'Option A cuts all passive nominalizations cleanly.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'arrived at a decision for', whyWrong: 'Retains nominalization.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'came to a decision to', whyWrong: 'Retains nominalization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was decided upon by', whyWrong: 'Passive voice.' }
        ]
      }
    },
    {
      questionNumber: 150,
      id: 'ch5-q150',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Diagnostic Order',
      prompt: 'You encounter a complex 4-line sentence on the SAT. What should you evaluate FIRST?',
      options: [
        'Check if there are any subtle diction preferences.',
        'Check sentence boundaries and clause structure (fragments, run-ons, splices).',
        'Check for redundant adverbs.',
        'Check if active voice can be converted to passive.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence boundaries and clause structure form Pass 1 (Structure) of the Master Editing Framework.',
        whyCorrect: 'Option B identifies clause boundaries as Pass 1 priority.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'subtle diction preferences', whyWrong: 'Diction is Pass 4.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'redundant adverbs', whyWrong: 'Redundancy is Pass 5.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'active to passive', whyWrong: 'Not a standard diagnostic step.' }
        ]
      }
    },
    {
      questionNumber: 151,
      id: 'ch5-q151',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Five-Layer Diagnosis',
      prompt: 'Sentence: "The survey of 500 urban households indicate that most families prefers public transit, which is faster than private cars." Identify ALL errors:',
      options: [
        'Subject-verb agreement ("indicate" → "indicates", "prefers" → "prefer")',
        'Comma splice',
        'Dangling modifier',
        'Illogical comparison'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Subject "survey" (singular) requires "indicates". Subject "families" (plural) requires "prefer".',
        whyCorrect: 'Option A accurately identifies the two subject-verb agreement errors.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Comma splice', whyWrong: 'No comma splice present.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Dangling modifier', whyWrong: 'No modifier error present.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Illogical comparison', whyWrong: 'Comparison ("faster than private cars") is logical.' }
        ]
      }
    },
    {
      questionNumber: 152,
      id: 'ch5-q152',
      difficulty: 'Elite',
      skillTag: 'Mastery Framework - Final Mastery Verification',
      prompt: 'Select the sentence that satisfies ALL criteria: 1) correct clause boundaries, 2) perfect subject-verb & pronoun agreement, 3) logical comparison, 4) parallel structure, and 5) zero redundancy.',
      options: [
        'After evaluating the data, the lead researcher concluded that the new algorithm was faster, more reliable, and less expensive than the original algorithm.',
        'After evaluating the data, it was concluded by the lead researcher that the new algorithm was faster, more reliable, and also had a lower cost than the original algorithm.',
        'Evaluating the data, the lead researcher concluded that the new algorithm was faster than the original algorithm, reliable, and cheap in cost.',
        'After evaluating the data, the lead researcher made a decision that the new algorithm was faster, more reliable, and less expensive than the original algorithm.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Option A: 1) Introductory modifier correctly attached to "lead researcher". 2) Parallel adjectives ("faster, more reliable, and less expensive"). 3) Precise logical comparison with "original algorithm". 4) Active voice ("concluded"). 5) Zero redundancy.',
        whyCorrect: 'Option A passes all 5 diagnostic layers seamlessly.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'it was concluded by... also had a lower cost', whyWrong: 'Dangling modifier, passive voice, broken parallelism.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'faster than the original algorithm, reliable, and cheap in cost', whyWrong: 'Broken parallelism and wordy end phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'made a decision that', whyWrong: 'Contains wordy nominalization "made a decision".' }
        ]
      }
    }
  ]
};
