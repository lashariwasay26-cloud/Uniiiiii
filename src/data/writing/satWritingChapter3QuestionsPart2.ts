import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_24: WritingExerciseBlock = {
  blockNumber: 24,
  title: 'Exercise Set 24 — Final Integrated Chapter Assessment & Concept Coverage (Qs 1–30)',
  description: 'Complete concept-coverage practice set verifying all Chapter 3 grammar, agreement, modifier, comparison, and clause boundary concepts.',
  questions: [
    {
      questionNumber: 1,
      id: 'ex24-q1',
      difficulty: 'Foundation',
      skillTag: 'Subject–Verb Agreement',
      prompt: 'The collection of essays ___ ready for publication.',
      options: ['are', 'is', 'have', 'were'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Head noun is "collection" (singular). "of essays" is a prepositional modifier.',
        whyCorrect: '"is" is singular and agrees with "collection".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Matches "essays" instead of "collection".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have', whyWrong: 'Plural verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ex24-q2',
      difficulty: 'Intermediate',
      skillTag: 'Subject–Verb Agreement',
      prompt: 'Neither the professor nor the students ___ available.',
      options: ['is', 'was', 'are', 'has'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Nearer subject "students" is plural.',
        whyCorrect: '"are" matches plural "students".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Singular verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was', whyWrong: 'Singular verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Singular verb.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ex24-q3',
      difficulty: 'Intermediate',
      skillTag: 'Additive Phrases',
      prompt: 'The university, along with several partner institutions, ___ the program.',
      options: ['offer', 'offers', 'have offered', 'were offering'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Subject is singular "university". "along with several partner institutions" is additive.',
        whyCorrect: '"offers" is singular.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'offer', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'offers', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have offered', whyWrong: 'Plural verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were offering', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ex24-q4',
      difficulty: 'Intermediate',
      skillTag: 'Special Idiomatic Agreement',
      prompt: 'More than one applicant ___ completed the form.',
      options: ['have', 'are', 'has', 'were'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"More than one applicant" takes a singular verb.',
        whyCorrect: '"has" is singular.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ex24-q5',
      difficulty: 'Intermediate',
      skillTag: 'Quantity Expressions',
      prompt: 'Half of the students ___ accepted.',
      options: ['is', 'was', 'are', 'has'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"students" is plural.',
        whyCorrect: '"are" is plural.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Singular verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was', whyWrong: 'Singular verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Singular verb.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ex24-q6',
      difficulty: 'Foundation',
      skillTag: 'Collective Nouns',
      prompt: 'The committee ___ reached its final decision.',
      options: ['have', 'are', 'has', 'were'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"committee" acting as a unit is singular.',
        whyCorrect: '"has" is singular.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ex24-q7',
      difficulty: 'Intermediate',
      skillTag: 'Indefinite Pronouns',
      prompt: 'Each of the applicants ___ required to submit an essay.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Each" is singular.',
        whyCorrect: '"is" is singular.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ex24-q8',
      difficulty: 'Intermediate',
      skillTag: 'Indefinite Pronouns',
      prompt: 'Every one of the applications ___ been reviewed.',
      options: ['have', 'has', 'are', 'were'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Every one" is singular.',
        whyCorrect: '"has" is singular.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ex24-q9',
      difficulty: 'Foundation',
      skillTag: 'Quantity Expressions',
      prompt: 'All of the information ___ available online.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"information" is noncount/singular.',
        whyCorrect: '"is" is singular.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ex24-q10',
      difficulty: 'Intermediate',
      skillTag: 'Quantity Expressions',
      prompt: 'None of the students ___ available.',
      options: ['is', 'was', 'are', 'has'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"students" is plural.',
        whyCorrect: '"are" is plural.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Singular verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was', whyWrong: 'Singular verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Singular verb.' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ex24-q11',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun–Antecedent Agreement',
      prompt: 'Each student should submit ___ application before the deadline.',
      options: ['their', 'his or her', 'they', 'them'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Each student" is singular. "his or her" is singular possessive under traditional rules.',
        whyCorrect: '"his or her" agrees in singular number.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'their', whyWrong: 'Plural possessive in formal grammar.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'his or her', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'they', whyWrong: 'Subject pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Object pronoun.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ex24-q12',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun–Antecedent Agreement',
      prompt: 'The researchers published their findings after ___ completed the experiment.',
      options: ['it', 'they', 'them', 'its'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Antecedent is "researchers" (plural). Subject required.',
        whyCorrect: '"they" is plural subject pronoun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'it', whyWrong: 'Singular.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'they', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'them', whyWrong: 'Object pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'its', whyWrong: 'Possessive.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ex24-q13',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Case',
      prompt: 'The professor contacted Sarah and ___.',
      options: ['I', 'me', 'myself', 'mine'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Object of verb "contacted": "contacted me".',
        whyCorrect: '"me" is objective case.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'I', whyWrong: 'Subject pronoun.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'me', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mine', whyWrong: 'Possessive.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ex24-q14',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Case After Prepositions',
      prompt: 'Between you and ___, the proposal needs revision.',
      options: ['I', 'me', 'myself', 'mine'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Between" is a preposition requiring object case "me".',
        whyCorrect: '"me" is objective case.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'I', whyWrong: 'Subject pronoun.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'me', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mine', whyWrong: 'Possessive.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ex24-q15',
      difficulty: 'Intermediate',
      skillTag: 'Who vs. Whom',
      prompt: '___ submitted the final report?',
      options: ['Whom', 'Who', 'Whose', 'Whom\'s'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Subject of clause: "Who submitted...?" (He submitted it).',
        whyCorrect: '"Who" is subject pronoun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Whom', whyWrong: 'Object pronoun.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Who', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Whose', whyWrong: 'Possessive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Whom\'s', whyWrong: 'Nonexistent.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ex24-q16',
      difficulty: 'Foundation',
      skillTag: 'Possessive Apostrophes',
      prompt: 'The university changed ___ admission requirements.',
      options: ['it\'s', 'its', 'it is', 'its\''],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"its" is possessive pronoun.',
        whyCorrect: '"its" has no apostrophe.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'it\'s', whyWrong: 'Contraction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'its', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it is', whyWrong: 'Full verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'its\'', whyWrong: 'Nonexistent.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ex24-q17',
      difficulty: 'Intermediate',
      skillTag: 'Whose vs. Who\'s',
      prompt: '___ responsible for submitting the documents?',
      options: ['Who\'s', 'Whose', 'Whom\'s', 'Whoes'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Contraction for "Who is responsible?".',
        whyCorrect: '"Who\'s" = "Who is".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Who\'s', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Whose', whyWrong: 'Possessive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Whom\'s', whyWrong: 'Nonexistent.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Whoes', whyWrong: 'Misspelled.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ex24-q18',
      difficulty: 'Intermediate',
      skillTag: 'Relative Pronouns',
      prompt: 'The researcher ___ conducted the study received an award.',
      options: ['which', 'who', 'whom', 'whose'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Use "who" for people in subject role.',
        whyCorrect: '"who" refers to "researcher".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'which', whyWrong: 'For non-humans.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whom', whyWrong: 'Object pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: 'Possessive.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ex24-q19',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Reference Clarity',
      prompt: 'Which sentence gives the clearest pronoun reference?\n\nWhen the university contacted the student, ___ provided additional documents.',
      options: [
        'When the university contacted the student, they provided additional documents.',
        'When the university contacted the student, the student provided additional documents.',
        'When the university contacted the student, it provided additional documents.',
        'When contacted, they provided additional documents.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Replacing ambiguous pronoun with specific noun "the student" creates crystal clear reference.',
        whyCorrect: 'Specifies "the student" explicitly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'When the university contacted the student, they provided additional documents.', whyWrong: 'Ambiguous "they".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'When the university contacted the student, the student provided additional documents.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'When the university contacted the student, it provided additional documents.', whyWrong: 'Ambiguous "it".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'When contacted, they provided additional documents.', whyWrong: 'Ambiguous.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ex24-q20',
      difficulty: 'Intermediate',
      skillTag: 'Dangling Modifiers',
      prompt: 'Which sentence contains a dangling modifier?',
      options: [
        'After reviewing the applications, the admissions officers announced the decision.',
        'After reviewing the applications, the decision was announced.',
        'The admissions officers announced the decision after reviewing the applications.',
        'The officers reviewed the applications before announcing the decision.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In B, "the decision" follows the comma but cannot review applications.',
        whyCorrect: 'Option B contains a dangling modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After reviewing the applications, the admissions officers announced the decision.', whyWrong: 'Correct structure.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After reviewing the applications, the decision was announced.', whyWrong: 'Correct answer (dangling modifier).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The admissions officers announced the decision after reviewing the applications.', whyWrong: 'Correct structure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The officers reviewed the applications before announcing the decision.', whyWrong: 'Correct structure.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ex24-q21',
      difficulty: 'Intermediate',
      skillTag: 'Restrictive Relative Clauses',
      prompt: 'Which sentence uses a restrictive relative clause correctly?',
      options: [
        'Students, who meet the requirements, may apply.',
        'Students who meet the requirements may apply.',
        'Students which meet the requirements may apply.',
        'Students, that meet the requirements may apply.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Restrictive clauses define which students and take NO commas.',
        whyCorrect: 'Option B is restrictive without commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Students, who meet the requirements, may apply.', whyWrong: 'Commas make it nonessential.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Students who meet the requirements may apply.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Students which meet the requirements may apply.', whyWrong: '"which" for non-humans.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Students, that meet the requirements may apply.', whyWrong: 'Incorrect comma usage.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ex24-q22',
      difficulty: 'Foundation',
      skillTag: 'Parallel Structure',
      prompt: 'The program teaches students to research, analyze, and ___.',
      options: ['writing', 'write', 'analysis', 'written'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Parallel infinitives: "research, analyze, and write".',
        whyCorrect: '"write" matches base verb form.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'writing', whyWrong: 'Gerund.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'write', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'analysis', whyWrong: 'Noun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'written', whyWrong: 'Participle.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ex24-q23',
      difficulty: 'Intermediate',
      skillTag: 'Correlative Parallelism',
      prompt: 'The program develops both technical skills and ___.',
      options: ['communication skills', 'communicating clearly', 'to communicate', 'students communicate'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"both A and B" requires parallel noun phrases: "both technical skills and communication skills".',
        whyCorrect: '"communication skills" is a noun phrase matching "technical skills".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'communication skills', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'communicating clearly', whyWrong: 'Gerund phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to communicate', whyWrong: 'Infinitive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'students communicate', whyWrong: 'Clause.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ex24-q24',
      difficulty: 'Intermediate',
      skillTag: 'Faulty Comparisons',
      prompt: 'Which sentence contains a faulty comparison?',
      options: [
        'The salary of an engineer is higher than that of a teacher.',
        'The facilities at University A are better than those at University B.',
        'The salary of an engineer is higher than a teacher.',
        'The university has more applicants than the college does.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Option C compares "salary" directly to "a teacher" (person), creating a faulty comparison.',
        whyCorrect: 'Option C is faulty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The salary of an engineer is higher than that of a teacher.', whyWrong: 'Correct comparison ("that of").' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The facilities at University A are better than those at University B.', whyWrong: 'Correct comparison ("those at").' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The salary of an engineer is higher than a teacher.', whyWrong: 'Correct answer (faulty comparison).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The university has more applicants than the college does.', whyWrong: 'Correct clause comparison.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ex24-q25',
      difficulty: 'Foundation',
      skillTag: 'Coordinating Conjunctions',
      prompt: 'The university offers scholarships ___ provides housing.',
      options: ['however', 'and', 'therefore', 'nevertheless'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Connecting compound verbs "offers... and provides".',
        whyCorrect: '"and" joins compound predicates.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'however', whyWrong: 'Conjunctive adverb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'therefore', whyWrong: 'Conjunctive adverb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'nevertheless', whyWrong: 'Conjunctive adverb.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ex24-q26',
      difficulty: 'Intermediate',
      skillTag: 'Run-On Sentences',
      prompt: 'Which sentence is a run-on?',
      options: [
        'The program is competitive, but many students apply.',
        'The program is competitive; many students apply.',
        'The program is competitive. Many students apply.',
        'The program is competitive many students apply.'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'Option D fuses two independent clauses together with zero punctuation or conjunctions.',
        whyCorrect: 'Option D is a run-on sentence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The program is competitive, but many students apply.', whyWrong: 'Correct comma + FANBOYS.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The program is competitive; many students apply.', whyWrong: 'Correct semicolon.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The program is competitive. Many students apply.', whyWrong: 'Correct period.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The program is competitive many students apply.', whyWrong: 'Correct answer (run-on).' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ex24-q27',
      difficulty: 'Intermediate',
      skillTag: 'Comma Splices',
      prompt: 'Which sentence contains a comma splice?',
      options: [
        'The course is difficult, but students enjoy it.',
        'The course is difficult; students enjoy it.',
        'The course is difficult. Students enjoy it.',
        'The course is difficult, students enjoy it.'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'Option D joins two independent clauses with only a comma.',
        whyCorrect: 'Option D is a comma splice.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The course is difficult, but students enjoy it.', whyWrong: 'Correct comma + FANBOYS.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The course is difficult; students enjoy it.', whyWrong: 'Correct semicolon.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The course is difficult. Students enjoy it.', whyWrong: 'Correct period.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The course is difficult, students enjoy it.', whyWrong: 'Correct answer (comma splice).' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ex24-q28',
      difficulty: 'Intermediate',
      skillTag: 'Conjunctive Adverbs',
      prompt: 'The deadline was approaching; ___, the students submitted their applications.',
      options: ['therefore', 'but', 'and', 'or'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'After semicolon and before comma, conjunctive adverb "therefore" shows result.',
        whyCorrect: '"therefore" is a conjunctive adverb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'therefore', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'but', whyWrong: 'Coordinating conjunction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and', whyWrong: 'Coordinating conjunction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'or', whyWrong: 'Coordinating conjunction.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ex24-q29',
      difficulty: 'Foundation',
      skillTag: 'Concision and Redundancy',
      prompt: 'Which phrase contains unnecessary redundancy?',
      options: ['the final conclusion', 'the research findings', 'the application deadline', 'the admission requirements'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"conclusion" is inherently final; adding "final" creates redundancy.',
        whyCorrect: '"the final conclusion" is redundant.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the final conclusion', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the research findings', whyWrong: 'Standard phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the application deadline', whyWrong: 'Standard phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the admission requirements', whyWrong: 'Standard phrase.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ex24-q30',
      difficulty: 'Intermediate',
      skillTag: 'Logical Sentence Construction',
      prompt: 'Which sentence is logically constructed?',
      options: [
        'After reviewing the applications, the decision was announced.',
        'After reviewing the applications, the admissions officers announced the decision.',
        'After reviewing the applications, there was a decision.',
        'After reviewing the applications, it was announced.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Option B provides the logical actor ("the admissions officers") who performed the action in the introductory phrase.',
        whyCorrect: 'Option B is logically constructed and avoids dangling modifiers.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After reviewing the applications, the decision was announced.', whyWrong: 'Dangling modifier.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After reviewing the applications, the admissions officers announced the decision.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After reviewing the applications, there was a decision.', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After reviewing the applications, it was announced.', whyWrong: 'Dangling modifier.' }
        ]
      }
    }
  ]
};
