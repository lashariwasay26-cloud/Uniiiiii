import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_22: WritingExerciseBlock = {
  blockNumber: 22,
  title: 'Exercise Set 22 — Subject-Verb Agreement, Verbs & Pronouns Practice (Qs 1–30)',
  description: 'Targeted practice covering subject-verb agreement, intervening phrases, quantity phrases, indefinite pronouns, collective nouns, and verb tense.',
  questions: [
    {
      questionNumber: 1,
      id: 'ex22-q1',
      difficulty: 'Foundation',
      skillTag: 'Subject-Verb Agreement',
      prompt: 'The list of required documents ___ available online.',
      options: ['are', 'is', 'have been', 'were'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject is the singular head noun "list". The prepositional phrase "of required documents" does not change the subject\'s singular number.',
        whyCorrect: '"is" is singular and correctly agrees with the singular subject "list".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Incorrectly matches the verb with the plural noun "documents" inside the prepositional phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have been', whyWrong: '"have" is plural and creates an unnecessary tense shift.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: '"were" is plural.' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ex22-q2',
      difficulty: 'Intermediate',
      skillTag: 'Additive Phrases',
      prompt: 'The students, along with their professor, ___ attending the conference.',
      options: ['are', 'is', 'has', 'was'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The subject is the plural noun "students". The additive phrase "along with their professor" is set off by commas and does not change the subject\'s plural number.',
        whyCorrect: '"are" is plural and correctly agrees with the plural subject "students".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Incorrectly treats "along with" as creating a singular subject.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: '"has" is singular and grammatically incomplete with "attending".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was', whyWrong: '"was" is singular.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ex22-q3',
      difficulty: 'Intermediate',
      skillTag: 'Correlative Agreement',
      prompt: 'Neither the professor nor the students ___ prepared.',
      options: ['was', 'is', 'were', 'has'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'With "neither... nor", the verb agrees with the subject closest to it ("students", which is plural).',
        whyCorrect: '"were" is plural and matches the nearer subject "students".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Ignores the nearer plural subject "students".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Singular verb fails to match nearer plural subject "students".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Singular and inappropriate participle complement.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ex22-q4',
      difficulty: 'Foundation',
      skillTag: 'Inverted Sentences',
      prompt: 'There ___ several reasons for the change.',
      options: ['is', 'are', 'was', 'has'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In "there" sentences, "there" is a placeholder; the true subject follows the verb ("several reasons", which is plural).',
        whyCorrect: '"are" is plural and agrees with "reasons".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Fails to agree with the plural subject "reasons".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'was', whyWrong: '"was" is singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Singular verb.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ex22-q5',
      difficulty: 'Intermediate',
      skillTag: 'Indefinite Pronoun Agreement',
      prompt: 'Each of the applicants ___ required to submit an essay.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Each" is grammatically singular. The prepositional phrase "of the applicants" does not change "each" to plural.',
        whyCorrect: '"is" is singular and agrees with "Each".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Mistakes "applicants" for the subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ex22-q6',
      difficulty: 'Intermediate',
      skillTag: 'Special Idiomatic Agreement',
      prompt: 'More than one student ___ submitted the application.',
      options: ['have', 'are', 'has', 'were'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The phrase "more than one" followed by a singular noun takes a singular verb in standard formal English.',
        whyCorrect: '"has" is singular and matches "more than one student".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb; breaks standard formal rule for "more than one student".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ex22-q7',
      difficulty: 'Intermediate',
      skillTag: 'Quantity Expressions',
      prompt: 'Half of the funding ___ allocated to research.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'With quantity expressions like "half of", the verb agrees with the noun after "of" ("funding", which is noncount/singular).',
        whyCorrect: '"is" is singular and matches noncount "funding".',
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
      id: 'ex22-q8',
      difficulty: 'Intermediate',
      skillTag: 'Quantity Expressions',
      prompt: 'Half of the students ___ interested in the program.',
      options: ['is', 'are', 'was', 'has'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In "half of the students", "students" is plural, so the quantity phrase takes a plural verb.',
        whyCorrect: '"are" is plural and agrees with "students".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Singular verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'was', whyWrong: 'Singular verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Singular verb.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ex22-q9',
      difficulty: 'Foundation',
      skillTag: 'Noncount Nouns',
      prompt: 'The equipment in the laboratories ___ expensive.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Equipment" is an uncountable/noncount noun and takes a singular verb. "in the laboratories" is an intervening prepositional phrase.',
        whyCorrect: '"is" is singular and agrees with "equipment".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Matches the plural object of preposition "laboratories" instead of "equipment".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ex22-q10',
      difficulty: 'Intermediate',
      skillTag: 'Relative Clause Agreement',
      prompt: 'The researchers who ___ the method are presenting their findings.',
      options: ['studies', 'study', 'studying', 'has studied'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative pronoun "who" refers to the plural antecedent "researchers", so the verb inside the relative clause must be plural ("study").',
        whyCorrect: '"study" is the plural verb agreeing with "researchers".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'studies', whyWrong: 'Singular verb form.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'study', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'studying', whyWrong: 'Incomplete participle lacking finite auxiliary.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has studied', whyWrong: 'Singular present perfect auxiliary.' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ex22-q11',
      difficulty: 'Foundation',
      skillTag: 'Subject-Verb Agreement',
      prompt: 'The collection of essays ___ been published.',
      options: ['have', 'are', 'has', 'were'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Head noun is singular "collection". "of essays" is a modifying prepositional phrase.',
        whyCorrect: '"has" is singular and correctly forms "has been published".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ex22-q12',
      difficulty: 'Intermediate',
      skillTag: 'Gerund Subjects',
      prompt: 'Studying abroad ___ careful financial planning.',
      options: ['require', 'requires', 'requiring', 'have required'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A gerund phrase functioning as a subject ("Studying abroad") is grammatically singular.',
        whyCorrect: '"requires" is the singular verb matching the gerund subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'require', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'requires', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'requiring', whyWrong: 'Incomplete participle.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have required', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ex22-q13',
      difficulty: 'Intermediate',
      skillTag: 'Correlative Agreement',
      prompt: 'Either the students or the professor ___ responsible for the report.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'With "either... or", the verb agrees with the nearer subject ("professor", which is singular).',
        whyCorrect: '"is" is singular and agrees with "professor".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Matches the farther subject "students" instead of nearer "professor".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ex22-q14',
      difficulty: 'Foundation',
      skillTag: 'Collective Nouns',
      prompt: 'The committee ___ reached its decision.',
      options: ['have', 'are', 'has', 'were'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In standard formal American English, collective nouns like "committee" taking a singular pronoun reference ("its") act as a singular unit.',
        whyCorrect: '"has" is singular and agrees with "committee".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ex22-q15',
      difficulty: 'Foundation',
      skillTag: 'Noncount Nouns',
      prompt: 'The information provided by the universities ___ useful.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Head noun is noncount "information". "provided by the universities" is a participial modifier.',
        whyCorrect: '"is" is singular and agrees with "information".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Matches "universities" instead of "information".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ex22-q16',
      difficulty: 'Foundation',
      skillTag: 'Subject-Verb Agreement',
      prompt: 'The collection of essays ___ been reviewed by the professor.',
      options: ['have', 'has', 'are', 'were'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Subject is singular "collection".',
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
      questionNumber: 17,
      id: 'ex22-q17',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun-Antecedent Agreement',
      prompt: 'The researchers discussed the findings with the professor, and ___ agreed with the conclusion.',
      options: ['they', 'it', 'he', 'them'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The subject performing the action in the second clause refers back to the plural noun "researchers".',
        whyCorrect: '"they" is a plural subject pronoun referring to "researchers".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'they', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'it', whyWrong: 'Singular non-human pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'he', whyWrong: 'Singular pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Object pronoun used in subject position.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ex22-q18',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Case in Compounds',
      prompt: 'The professor contacted Sarah and ___.',
      options: ['I', 'me', 'myself', 'mine'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Testing object pronoun in compound object position. Remove "Sarah and": "The professor contacted me."',
        whyCorrect: '"me" is the objective case required after verb "contacted".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'I', whyWrong: 'Subject pronoun used in object position.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'me', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive pronoun misused as object without reflexive antecedent.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mine', whyWrong: 'Possessive pronoun.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ex22-q19',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Agreement',
      prompt: 'Each of the applicants must submit ___ application.',
      options: ['their', 'his or her', 'them', 'they'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Each" is singular. Under traditional formal agreement rules, singular "his or her" (or singular "their" in modern contexts) matches "each". Here "his or her" is the traditional singular possessive option.',
        whyCorrect: '"his or her" is singular and agrees with "each".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'their', whyWrong: 'Plural possessive under traditional formal rules.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'his or her', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'them', whyWrong: 'Object pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'they', whyWrong: 'Subject pronoun.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ex22-q20',
      difficulty: 'Intermediate',
      skillTag: 'Dangling Modifier Repair',
      prompt: 'After reviewing the data, ___ identified several errors.',
      options: ['several errors were', 'the researchers', 'it was', 'there were'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject following the introductory participial phrase "After reviewing the data" must be the logical actor who reviewed the data ("the researchers").',
        whyCorrect: '"the researchers" is the logical subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'several errors were', whyWrong: 'Creates a dangling modifier (errors did not review data).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the researchers', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it was', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'there were', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ex22-q21',
      difficulty: 'Foundation',
      skillTag: 'Parallelism',
      prompt: 'The course teaches students to research, analyze, and ___.',
      options: ['writing', 'write', 'analysis', 'written'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'List of parallel infinitives after "to": "research, analyze, and write".',
        whyCorrect: '"write" matches base forms "research" and "analyze".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'writing', whyWrong: 'Gerund breaks infinitive series.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'write', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'analysis', whyWrong: 'Noun breaks verb series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'written', whyWrong: 'Past participle breaks base verb series.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ex22-q22',
      difficulty: 'Intermediate',
      skillTag: 'Comparisons',
      prompt: 'The facilities at University A are better than ___ at University B.',
      options: ['University B', 'those', 'they', 'them'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Comparing facilities to facilities. Use plural demonstrative "those" to replace "the facilities".',
        whyCorrect: '"those" correctly stands for "the facilities".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'University B', whyWrong: 'Faulty comparison (compares facilities to a university).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'they', whyWrong: 'Personal pronoun cannot take prepositional phrase modifier "at University B".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Object pronoun cannot take "at University B".' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ex22-q23',
      difficulty: 'Foundation',
      skillTag: 'Coordinating Conjunctions',
      prompt: 'The program is demanding, ___ it provides substantial benefits.',
      options: ['however', 'therefore', 'but', 'because'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Connecting two independent clauses with contrast using a comma requires a coordinating conjunction (FANBOYS: "but").',
        whyCorrect: 'Comma + "but" correctly joins independent clauses and shows contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'however', whyWrong: '"however" is a conjunctive adverb; joining clauses with comma + however creates a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'therefore', whyWrong: '"therefore" is a conjunctive adverb and shows cause/result, not contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'but', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: '"because" expresses cause, not contrast.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ex22-q24',
      difficulty: 'Intermediate',
      skillTag: 'Conjunctive Adverbs & Semicolons',
      prompt: 'The program is competitive; ___, many students apply.',
      options: ['but', 'however', 'and', 'or'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Following a semicolon and before a comma, a conjunctive adverb like "however" is required to express contrast.',
        whyCorrect: '"however" is a conjunctive adverb used after a semicolon.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'but', whyWrong: 'Coordinating conjunctions are not preceded by a semicolon when followed by a comma.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'however', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and', whyWrong: 'Coordinating conjunction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'or', whyWrong: 'Coordinating conjunction.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ex22-q25',
      difficulty: 'Foundation',
      skillTag: 'Inverted Sentences',
      prompt: 'There ___ several reasons for the change.',
      options: ['is', 'are', 'has', 'was'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Subject is plural "several reasons".',
        whyCorrect: '"are" agrees with plural "reasons".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Singular verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Singular verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was', whyWrong: 'Singular verb.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ex22-q26',
      difficulty: 'Intermediate',
      skillTag: 'Correlative Agreement',
      prompt: 'Neither the students nor the professor ___ available.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Verb agrees with nearer subject "professor" (singular).',
        whyCorrect: '"is" is singular.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Matches farther subject "students".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural verb.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ex22-q27',
      difficulty: 'Foundation',
      skillTag: 'Possessive Apostrophes',
      prompt: 'The university changed ___ admission policy.',
      options: ['it\'s', 'its', 'it is', 'its\''],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Possessive form of "it" is "its" (NO apostrophe!). "it\'s" means "it is".',
        whyCorrect: '"its" is the possessive pronoun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'it\'s', whyWrong: 'Contraction for "it is".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'its', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it is', whyWrong: 'Uncontracted verb phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'its\'', whyWrong: 'Nonexistent English word.' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ex22-q28',
      difficulty: 'Intermediate',
      skillTag: 'Who vs. Whom',
      prompt: '___ responsible for submitting the application?',
      options: ['Whom is', 'Who is', 'Whose is', 'Who are'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Subject of clause performing action: "Who is responsible?" (Test: He is responsible).',
        whyCorrect: '"Who is" provides subject pronoun "Who" and singular verb "is".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Whom is', whyWrong: '"Whom" is object case.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Who is', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Whose is', whyWrong: 'Possessive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Who are', whyWrong: 'Plural verb with singular meaning.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ex22-q29',
      difficulty: 'Intermediate',
      skillTag: 'Relative Pronouns',
      prompt: 'The researcher ___ study was published received an award.',
      options: ['who\'s', 'who', 'whose', 'whom'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Possessive relationship ("the study of the researcher"). Use possessive relative pronoun "whose".',
        whyCorrect: '"whose" expresses possession.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'who\'s', whyWrong: 'Contraction for "who is".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who', whyWrong: 'Subject pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whose', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whom', whyWrong: 'Object pronoun.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ex22-q30',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Case After Prepositions',
      prompt: 'Between you and ___, the method needs revision.',
      options: ['I', 'me', 'myself', 'mine'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Between" is a preposition requiring objective case pronouns ("between you and me").',
        whyCorrect: '"me" is objective case.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'I', whyWrong: 'Subject pronoun misused after preposition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'me', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mine', whyWrong: 'Possessive.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_23: WritingExerciseBlock = {
  blockNumber: 23,
  title: 'Exercise Set 23 — Modifiers, Clause Structure & Parallelism Practice (Qs 31–60)',
  description: 'Practice on restrictive vs nonrestrictive clauses, modifier placement, dangling modifiers, sentence boundaries, and correlative parallelism.',
  questions: [
    {
      questionNumber: 31,
      id: 'ex23-q31',
      difficulty: 'Intermediate',
      skillTag: 'Relative Clauses',
      prompt: 'The university awarded scholarships to students ___ strong academic records.',
      options: ['which had', 'who had', 'that having', 'whom had'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Use "who" for people ("students"). The relative pronoun functions as the subject of the clause ("who had").',
        whyCorrect: '"who had" correctly refers to students as human subjects.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'which had', whyWrong: '"which" is for non-human objects, not students.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who had', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'that having', whyWrong: 'Incomplete participle construction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whom had', whyWrong: '"whom" is objective case, but subject is required.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ex23-q32',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Clauses',
      prompt: 'The students, ___ had completed the requirements, received certificates.',
      options: ['that', 'who', 'whom', 'what'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In formal American English, nonessential clauses set off by commas modifying people use "who" (NOT "that").',
        whyCorrect: '"who" is appropriate for nonessential human clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: '"that" is not used in nonessential clauses enclosed in commas.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whom', whyWrong: 'Subject case "who" is required.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'what', whyWrong: 'Incorrect relative pronoun.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ex23-q33',
      difficulty: 'Intermediate',
      skillTag: 'Limiter Placement',
      prompt: 'The researcher almost analyzed every sample.\n\nIf the intended meaning is that **nearly every sample was analyzed**, which revision is clearest?',
      options: [
        'The researcher analyzed almost every sample.',
        'Almost the researcher analyzed every sample.',
        'The researcher almost every sample analyzed.',
        'Every sample the researcher almost analyzed.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"Almost" must be placed immediately before "every sample" to modify the quantity of samples.',
        whyCorrect: '"analyzed almost every sample" places "almost" directly before the target phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researcher analyzed almost every sample.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Almost the researcher analyzed every sample.', whyWrong: 'Suggests the researcher almost existed.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researcher almost every sample analyzed.', whyWrong: 'Illogical word order.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Every sample the researcher almost analyzed.', whyWrong: 'Suggests analysis was not completed.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ex23-q34',
      difficulty: 'Intermediate',
      skillTag: 'Dangling Modifier Repair',
      prompt: 'Walking through the campus, ___ noticed that the library was quiet.',
      options: ['the library', 'there was', 'I', 'the campus'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Subject after comma must be the person walking through the campus ("I").',
        whyCorrect: '"I" is the logical subject performing "Walking".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the library', whyWrong: 'Creates dangling modifier.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'there was', whyWrong: 'Dangling modifier.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'I', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the campus', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ex23-q35',
      difficulty: 'Intermediate',
      skillTag: 'Parallelism',
      prompt: 'The course requires reading, analyzing, and ___.',
      options: ['writing', 'to write', 'write', 'written'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Parallel list of gerunds: "reading, analyzing, and writing".',
        whyCorrect: '"writing" is a gerund matching "reading" and "analyzing".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'writing', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to write', whyWrong: 'Infinitive breaks gerund pattern.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'write', whyWrong: 'Base verb breaks pattern.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'written', whyWrong: 'Participle breaks pattern.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ex23-q36',
      difficulty: 'Intermediate',
      skillTag: 'Comparisons',
      prompt: 'The salary of an engineer is higher than ___ of a teacher.',
      options: ['a teacher', 'that', 'those', 'it'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Comparing singular salary to salary. Use "that" to stand for "the salary".',
        whyCorrect: '"that" correctly represents "the salary".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'a teacher', whyWrong: 'Faulty comparison (salary to a person).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Plural demonstrative; "salary" is singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'Personal pronoun cannot take "of a teacher".' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ex23-q37',
      difficulty: 'Intermediate',
      skillTag: 'As...As Comparison',
      prompt: 'The new program is as demanding ___ the previous program.',
      options: ['than', 'as', 'like', 'from'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The standard comparative equality pair is "as [adjective] as".',
        whyCorrect: '"as" completes "as demanding as".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'than', whyWrong: 'Incorrect pair (*as demanding than*).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'as', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'like', whyWrong: 'Incorrect pair.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'from', whyWrong: 'Incorrect pair.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ex23-q38',
      difficulty: 'Foundation',
      skillTag: 'Compound Predicates',
      prompt: 'The university offers scholarships ___ provides housing.',
      options: ['however', 'and', 'therefore', 'nevertheless'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Connecting two verbs controlled by the same subject ("offers... and provides") requires "and".',
        whyCorrect: '"and" connects compound predicates smoothly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'however', whyWrong: 'Conjunctive adverb unsuited for joining predicate verbs.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'therefore', whyWrong: 'Conjunctive adverb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'nevertheless', whyWrong: 'Conjunctive adverb.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ex23-q39',
      difficulty: 'Intermediate',
      skillTag: 'Comma Splices',
      prompt: 'The program is competitive, many students apply.\n\nThe error is:',
      options: ['pronoun disagreement', 'dangling modifier', 'comma splice', 'faulty comparison'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Joining two independent clauses with only a comma is a comma splice.',
        whyCorrect: '"comma splice" correctly identifies the error.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'pronoun disagreement', whyWrong: 'No pronoun error.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'dangling modifier', whyWrong: 'No modifier error.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'comma splice', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'faulty comparison', whyWrong: 'No comparison present.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ex23-q40',
      difficulty: 'Foundation',
      skillTag: 'Special Idiomatic Agreement',
      prompt: 'More than one applicant ___ submitted the required form.',
      options: ['have', 'are', 'has', 'were'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"More than one applicant" is grammatically singular.',
        whyCorrect: '"has" is singular.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural verb.' }
        ]
      }
    }
  ]
};
