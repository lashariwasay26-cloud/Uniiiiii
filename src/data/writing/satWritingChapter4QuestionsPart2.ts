import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: Complex Sentences & Comparative Traps',
  description: 'Targeted Practice on Colon Lists, Demonstrative Reference, Relative Pronouns, and Prepositional Gerunds (Questions 35–42)',
  questions: [
    {
      questionNumber: 35,
      id: 'ch4-q35',
      difficulty: 'Medium',
      skillTag: 'Colon Lists (Gerunds)',
      prompt: 'The program offers several opportunities: conducting research, ___ findings, and mentoring younger students.',
      options: ['present', 'presenting', 'presentation of', 'presented'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The colon introduces a list of gerund phrases: *conducting research, presenting findings, and mentoring younger students*.',
        whyCorrect: 'Option B ("presenting") matches the gerund phrase pattern.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'present', whyWrong: 'Base verb nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'presenting', whyWrong: 'Correct gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'presentation of', whyWrong: 'Noun phrase nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'presented', whyWrong: 'Past participle nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch4-q36',
      difficulty: 'Hard',
      skillTag: 'Demonstrative Singular Reference ("That")',
      prompt: "The university's research funding is greater than ___ of its competitors.",
      options: ['those', 'that', 'their', 'them'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The noun represented by the demonstrative pronoun is "funding" (singular/uncountable).',
        whyCorrect: 'Option B ("that") is the singular demonstrative pronoun replacing "funding".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'those', whyWrong: 'Those is plural; funding is singular/uncountable.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct singular demonstrative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'their', whyWrong: 'Possessive pronoun "their of" is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Personal pronoun "them of" is ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch4-q37',
      difficulty: 'Hard',
      skillTag: 'Demonstrative Plural Reference ("Those")',
      prompt: "The university's research facilities are larger than ___ of comparable institutions.",
      options: ['that', 'those', 'them', 'their'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The noun represented by the pronoun is "facilities" (plural).',
        whyCorrect: 'Option B ("those") is the plural demonstrative pronoun replacing "facilities".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'That is singular; facilities is plural.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct plural demonstrative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'them', whyWrong: 'Personal pronoun ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'their', whyWrong: 'Possessive pronoun ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch4-q38',
      difficulty: 'Hard',
      skillTag: 'Parallel Relative Verbs',
      prompt: 'Students who research independently and ___ evidence carefully develop strong academic skills.',
      options: ['analyzing', 'analyze', 'analysis of', 'analyzed'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative subject "who" governs two parallel base-form verbs: *who research ... and analyze ...*',
        whyCorrect: 'Option B ("analyze") matches "research" in tense and base form.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'analyzing', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'analyze', whyWrong: 'Correct base verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'analysis of', whyWrong: 'Noun phrase nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'analyzed', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch4-q39',
      difficulty: 'Elite',
      skillTag: 'Prepositional Gerund Series ("By")',
      prompt: 'The researchers improved the method by collecting additional data, analyzing the results, and ___ alternative models.',
      options: ['testing', 'test', 'tested', 'the testing of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'All three items follow "by + gerund": *by collecting ..., analyzing ..., and testing ...*',
        whyCorrect: 'Option A ("testing") completes the parallel gerund series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'testing', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'test', whyWrong: 'Base verb nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'tested', whyWrong: 'Past participle nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the testing of', whyWrong: 'Noun phrase nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ch4-q40',
      difficulty: 'Elite',
      skillTag: 'Correlative Predicates ("Not Only...But Also")',
      prompt: 'The revised procedure not only reduces errors but also ___ the reliability of the results.',
      options: ['improving', 'improvement of', 'improves', 'improved'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The two coordinated predicates governed by "revised procedure" are present-tense singular verbs: *reduces ... improves*.',
        whyCorrect: 'Option C ("improves") is the present-tense singular verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'improving', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'improvement of', whyWrong: 'Noun phrase nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'improves', whyWrong: 'Correct present-tense verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'improved', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 41,
      id: 'ch4-q41',
      difficulty: 'Elite',
      skillTag: 'Relative Pronoun Predicates ("That")',
      prompt: 'The researchers developed a method that reduces errors and ___ the reliability of the results.',
      options: ['improving', 'improves', 'improvement', 'improved'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative subject "that" governs both present-tense singular verbs in the relative clause: *that reduces ... and improves ...*',
        whyCorrect: 'Option B ("improves") matches "reduces" as a present-tense singular verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'improving', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'improves', whyWrong: 'Correct present-tense verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'improvement', whyWrong: 'Noun nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'improved', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch4-q42',
      difficulty: 'Elite',
      skillTag: 'Introductory Participial Series',
      prompt: 'While collecting data, analyzing the results, and ___ regional experts, the researchers identified several patterns.',
      options: ['consulting', 'consulted', 'consultation with', 'consult'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The introductory modifier contains a parallel series of participial phrases governed by "While": *collecting ..., analyzing ..., and consulting ...*',
        whyCorrect: 'Option A ("consulting") matches the participial series modifying "researchers".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'consulting', whyWrong: 'Correct parallel participle.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'consulted', whyWrong: 'Past participle nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'consultation with', whyWrong: 'Noun phrase nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'consult', whyWrong: 'Base verb nonparallel.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Block 8 Exercises: Agreement, Coordination & Sentence Revision',
  description: 'Targeted Practice on Modals, Perfect-Progressive Auxiliaries, Correlative Proximity, and Additive Phrases (Questions 43–49)',
  questions: [
    {
      questionNumber: 43,
      id: 'ch4-q43',
      difficulty: 'Medium',
      skillTag: 'Parallel Present-Tense Verbs',
      prompt: 'The program provides scholarships, connects students with mentors, and ___ research opportunities.',
      options: ['offers', 'offering', 'offer', 'offered'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The singular subject "program" controls a series of three present-tense singular verbs: *provides ..., connects ..., and offers ...*',
        whyCorrect: 'Option A ("offers") is the present-tense singular verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'offers', whyWrong: 'Correct singular present verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'offering', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'offer', whyWrong: 'Plural verb disagrees with singular "program".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'offered', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch4-q44',
      difficulty: 'Hard',
      skillTag: 'Parallel Base Verbs after Modal ("Should")',
      prompt: 'Students should research the issue, evaluate the evidence, and ___ their conclusions.',
      options: ['formulate', 'formulation', 'formulated', 'formulating'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The modal auxiliary "should" governs all three base-form verbs: *research ..., evaluate ..., and formulate ...*',
        whyCorrect: 'Option A ("formulate") is the base-form verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'formulate', whyWrong: 'Correct base verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'formulation', whyWrong: 'Noun nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'formulated', whyWrong: 'Past participle nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'formulating', whyWrong: 'Gerund nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch4-q45',
      difficulty: 'Hard',
      skillTag: 'Perfect-Progressive Auxiliaries ("Have been")',
      prompt: 'The researchers have been collecting data, analyzing results, and ___ alternative models.',
      options: ['test', 'tested', 'testing', 'to test'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The shared auxiliary "have been" governs a series of present participles: *collecting ..., analyzing ..., and testing ...*',
        whyCorrect: 'Option C ("testing") completes the progressive participle series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'test', whyWrong: 'Base verb nonparallel with "have been".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'tested', whyWrong: 'Past participle nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'testing', whyWrong: 'Correct present participle.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to test', whyWrong: 'Infinitive nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch4-q46',
      difficulty: 'Elite',
      skillTag: 'Subject-Verb Agreement in Parallel Series',
      prompt: 'The program trains students, connects them with mentors, and ___ research opportunities.',
      options: ['provides', 'providing', 'provide', 'provided'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The subject "program" is singular and governs three present-tense singular verbs: *trains ..., connects ..., and provides ...*',
        whyCorrect: 'Option A ("provides") correctly matches singular subject "program".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'provides', whyWrong: 'Correct singular verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'providing', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'provide', whyWrong: 'Plural verb disagrees with "program".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'provided', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch4-q47',
      difficulty: 'Elite',
      skillTag: 'Parallel Clause Coordination ("Whether")',
      prompt: 'The researchers wanted to determine whether the method was reliable and ___ implementing it was affordable.',
      options: ['the cost of', 'whether', 'affordability of', 'implementation'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence coordinates two dependent clauses introduced by "whether": *whether method was reliable and whether implementing it was affordable*.',
        whyCorrect: 'Option B ("whether") introduces the parallel clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the cost of', whyWrong: 'Noun phrase nonparallel with clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'whether', whyWrong: 'Correct clause connector.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'affordability of', whyWrong: 'Noun phrase nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'implementation', whyWrong: 'Bare noun nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch4-q48',
      difficulty: 'Elite',
      skillTag: 'Correlative Agreement (Singular Proximity)',
      prompt: 'Either the researchers or the committee ___ responsible for approving the proposal.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In "either...or", agreement follows the nearest subject ("committee", singular).',
        whyCorrect: 'Option C ("is") agrees with singular "committee".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb ignores proximity to singular "committee".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb is incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct singular verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural auxiliary is incorrect.' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ch4-q49',
      difficulty: 'Elite',
      skillTag: 'Additive Phrase Agreement ("Along with")',
      prompt: 'The director, along with several researchers, ___ responsible for evaluating the proposal.',
      options: ['are', 'were', 'have', 'is'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'Additive phrases like "along with several researchers" do not make the subject plural. The true subject is singular "director".',
        whyCorrect: 'Option D ("is") agrees with singular subject "director".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb incorrectly counts additive phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb is incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have', whyWrong: 'Plural auxiliary is incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'is', whyWrong: 'Correct singular verb.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_9: WritingExerciseBlock = {
  blockNumber: 9,
  title: 'Block 9 Exercises: Structural Ambiguity & Prepositional Traps',
  description: 'Targeted Practice on Correlatives, Prepositional "To", Proportional Comparatives, and Auxiliary Inversion (Questions 50–56)',
  questions: [
    {
      questionNumber: 50,
      id: 'ch4-q50',
      difficulty: 'Medium',
      skillTag: 'Correlative Pairing ("Both...And")',
      prompt: 'The program is both affordable ___ accessible.',
      options: ['as well as', 'and', 'but', 'or'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The correlative conjunction "both" pairs strictly with "and".',
        whyCorrect: 'Option B ("and") completes the fixed pair *both ... and*.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'as well as', whyWrong: 'False correlative trap! Do not mix "both" with "as well as".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and', whyWrong: 'Correct fixed correlative pair.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'but', whyWrong: 'Incorrect pair.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'or', whyWrong: 'Incorrect pair.' }
        ]
      }
    },
    {
      questionNumber: 51,
      id: 'ch4-q51',
      difficulty: 'Hard',
      skillTag: 'Prepositional "To" vs Infinitive "To"',
      prompt: 'The researchers objected to changing the methodology and ___ the experiment.',
      options: ['repeat', 'repeated', 'repeating', 'to repeat'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In "objected to", "to" is a preposition, requiring gerund objects: *objected to changing ... and repeating ...*',
        whyCorrect: 'Option C ("repeating") provides the parallel gerund after preposition "to".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'repeat', whyWrong: 'Mistakes preposition "to" for infinitive marker.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'repeated', whyWrong: 'Past tense nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'repeating', whyWrong: 'Correct gerund after preposition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to repeat', whyWrong: 'Ungrammatical infinitive after prepositional verb "objected to".' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch4-q52',
      difficulty: 'Hard',
      skillTag: 'Prepositional Expression ("Look forward to")',
      prompt: 'The students look forward to receiving their results and ___ their next application.',
      options: ['preparing', 'prepare', 'prepared', 'to prepare'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In "look forward to", "to" is a preposition. Both actions must be gerunds: *to receiving ... and preparing ...*',
        whyCorrect: 'Option A ("preparing") is the parallel gerund.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'preparing', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'prepare', whyWrong: 'Base verb nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'prepared', whyWrong: 'Past tense nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to prepare', whyWrong: 'Infinitive nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ch4-q53',
      difficulty: 'Elite',
      skillTag: 'Singular Demonstrative Reference ("That")',
      prompt: "The university's research funding is greater than ___ of comparable institutions.",
      options: ['those', 'that', 'their', 'them'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The singular/uncountable noun "funding" requires the singular demonstrative pronoun "that".',
        whyCorrect: 'Option B ("that") stands for "funding".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'those', whyWrong: 'Those is plural; funding is uncountable.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct singular demonstrative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'their', whyWrong: 'Possessive pronoun ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Personal pronoun ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch4-q54',
      difficulty: 'Elite',
      skillTag: 'Proportional Comparative ("The More...The More")',
      prompt: 'The more carefully researchers analyze the evidence, ___ their conclusions become.',
      options: ['the more reliable', 'more reliable', 'the most reliable', 'more reliably'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The proportional comparative construction follows the paired pattern *The more [adverb] ..., the more [adjective] ...*',
        whyCorrect: 'Option A ("the more reliable") completes the paired comparative structure.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the more reliable', whyWrong: 'Correct paired comparative.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'more reliable', whyWrong: 'Omits required article "the".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the most reliable', whyWrong: 'Superlative breaks comparative pairing.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'more reliably', whyWrong: 'Adverb nonparallel with predicate adjective after "become".' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch4-q55',
      difficulty: 'Elite',
      skillTag: 'Auxiliary Inversion after Initial "Not Only"',
      prompt: 'Not only ___ the researchers revise the method, but they also repeated the experiment.',
      options: ['the researchers', 'did', 'were', 'had'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When "not only" begins a sentence, auxiliary inversion is required before the subject (*Not only did the researchers revise ...*).',
        whyCorrect: 'Option B ("did") supplies the required past-tense auxiliary for subject "researchers" and base verb "revise".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the researchers', whyWrong: 'Omits required auxiliary inversion.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'did', whyWrong: 'Correct auxiliary inversion.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Were is incorrect auxiliary for base verb "revise".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'had', whyWrong: 'Had would require past participle "revised".' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch4-q56',
      difficulty: 'Elite',
      skillTag: 'Prepositional Series ("Focuses on")',
      prompt: 'The researchers focused on analyzing the evidence, evaluating competing interpretations, and ___ evidence-based conclusions.',
      options: ['constructing', 'construct', 'constructed', 'construction of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'All three items are gerund phrases governed by preposition "on": *on analyzing ..., evaluating ..., and constructing ...*',
        whyCorrect: 'Option A ("constructing") completes the parallel gerund series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'constructing', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'construct', whyWrong: 'Base verb nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'constructed', whyWrong: 'Past participle nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'construction of', whyWrong: 'Noun phrase nonparallel.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_10: WritingExerciseBlock = {
  blockNumber: 10,
  title: 'Block 10 Cumulative Mastery Exercise Set',
  description: 'Comprehensive Mastery Assessment Testing Modifiers, Comparisons, Parallel Series, Correlatives, Agreement, and Inversions (Questions 57–70)',
  questions: [
    {
      questionNumber: 57,
      id: 'ch4-q57',
      difficulty: 'Medium',
      skillTag: 'Cumulative Parallel Series',
      prompt: 'The university encourages students to research independently, analyze evidence carefully, and ___ their conclusions clearly.',
      options: ['communicating', 'communicate', 'communication', 'communicated'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The three coordinated base-form verbs governed by shared infinitive "to" are: *research ..., analyze ..., and communicate ...*',
        whyCorrect: 'Option B ("communicate") matches the base-form verb series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'communicating', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'communicate', whyWrong: 'Correct base verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'communication', whyWrong: 'Noun nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'communicated', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ch4-q58',
      difficulty: 'Medium',
      skillTag: 'Cumulative Correlative Pairing',
      prompt: 'The program provides both financial assistance ___ academic advising.',
      options: ['as well as', 'and', 'but', 'or'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Correlative conjunction "both" pairs strictly with "and".',
        whyCorrect: 'Option B ("and") completes the pair *both ... and*.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'as well as', whyWrong: 'False correlative.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and', whyWrong: 'Correct correlative pair.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'but', whyWrong: 'Incorrect pair.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'or', whyWrong: 'Incorrect pair.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ch4-q59',
      difficulty: 'Hard',
      skillTag: 'Cumulative Prepositional Gerund Series',
      prompt: 'The researchers improved the method by collecting additional data, evaluating the results, and ___ alternative models.',
      options: ['testing', 'test', 'tested', 'to test'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'All three verb phrases follow preposition "by": *by collecting ..., evaluating ..., and testing ...*',
        whyCorrect: 'Option A ("testing") is the parallel gerund.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'testing', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'test', whyWrong: 'Base verb nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'tested', whyWrong: 'Past participle nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to test', whyWrong: 'Infinitive nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch4-q60',
      difficulty: 'Hard',
      skillTag: 'Cumulative Demonstrative Comparison',
      prompt: "The university's research funding is greater than ___ of comparable institutions.",
      options: ['those', 'that', 'their', 'them'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Uncountable noun "funding" requires singular demonstrative pronoun "that".',
        whyCorrect: 'Option B ("that") stands for "funding".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'those', whyWrong: 'Those is plural.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct singular demonstrative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'their', whyWrong: 'Ungrammatical possessive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Ungrammatical pronoun.' }
        ]
      }
    },
    {
      questionNumber: 61,
      id: 'ch4-q61',
      difficulty: 'Hard',
      skillTag: 'Cumulative Proximity Agreement',
      prompt: 'Either the researchers or the committee ___ responsible for reviewing the proposal.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In "either...or", agreement follows the nearest subject ("committee", singular).',
        whyCorrect: 'Option C ("is") agrees with singular "committee".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb ignores nearest subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb is incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct singular verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural auxiliary is incorrect.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch4-q62',
      difficulty: 'Hard',
      skillTag: 'Cumulative Additive Agreement',
      prompt: 'The director, along with several researchers, ___ responsible for evaluating the proposal.',
      options: ['are', 'were', 'have', 'is'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'Additive phrase "along with several researchers" is parenthetical. Main subject is singular "director".',
        whyCorrect: 'Option D ("is") agrees with singular subject "director".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb incorrectly counts additive phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb is incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have', whyWrong: 'Plural auxiliary is incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'is', whyWrong: 'Correct singular verb.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch4-q63',
      difficulty: 'Elite',
      skillTag: 'Cumulative Intro Modifier Attachment',
      prompt: 'Unlike the previous program, the new initiative provides students with greater access to research opportunities.\n\nWhich element is the introductory modifier logically modifying?',
      options: ['students', 'research opportunities', 'the new initiative', 'access'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The introductory modifier "Unlike the previous program" directly attaches to and describes the main subject "the new initiative".',
        whyCorrect: 'Option C ("the new initiative") is the logical subject being compared to the previous program.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'students', whyWrong: 'Students cannot be compared to a program.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'research opportunities', whyWrong: 'Not the main subject.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the new initiative', whyWrong: 'Correct subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'access', whyWrong: 'Not the main subject.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch4-q64',
      difficulty: 'Elite',
      skillTag: 'Cumulative Dependent Clause Coordination',
      prompt: 'The researchers wanted to determine whether the revised method was reliable and ___ the results could be reproduced independently.',
      options: ['the reproducibility of', 'whether', 'reproducing', 'reliable'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Coordinates two parallel dependent clauses introduced by "whether".',
        whyCorrect: 'Option B ("whether") introduces the second parallel dependent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the reproducibility of', whyWrong: 'Noun phrase nonparallel with clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'whether', whyWrong: 'Correct clause connector.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'reproducing', whyWrong: 'Participle nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'reliable', whyWrong: 'Adjective insertion breaks clause structure.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch4-q65',
      difficulty: 'Elite',
      skillTag: 'Cumulative Correlative Infinitives',
      prompt: 'The program seeks not only to expand access to underserved communities but also ___ additional academic support.',
      options: ['providing', 'provide', 'to provide', 'provided'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Structure after "not only" is infinitive phrase "to expand access". Structure after "but also" must be parallel infinitive phrase "to provide support".',
        whyCorrect: 'Option C ("to provide") forms parallel infinitive phrases.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'providing', whyWrong: 'Gerund nonparallel with infinitive.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'provide', whyWrong: 'Missing required infinitive marker "to" after "but also".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to provide', whyWrong: 'Correct parallel infinitive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'provided', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 66,
      id: 'ch4-q66',
      difficulty: 'Elite',
      skillTag: 'Cumulative Prepositional "To" Gerunds',
      prompt: 'The researchers objected to changing the methodology and ___ the experiment before collecting sufficient evidence.',
      options: ['repeat', 'repeating', 'to repeat', 'repeated'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In "objected to", "to" is a preposition, requiring gerunds: *objected to changing ... and repeating ...*',
        whyCorrect: 'Option B ("repeating") is the parallel gerund.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'repeat', whyWrong: 'Base verb nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'repeating', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to repeat', whyWrong: 'Infinitive after preposition "objected to" is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'repeated', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ch4-q67',
      difficulty: 'Elite',
      skillTag: 'Cumulative Plural Demonstrative Comparison',
      prompt: "The university's research facilities are more advanced than ___ of comparable institutions.",
      options: ['that', 'those', 'their', 'them'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Plural noun "facilities" requires plural demonstrative pronoun "those".',
        whyCorrect: 'Option B ("those") replaces "facilities".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'That is singular; facilities is plural.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct plural demonstrative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'their', whyWrong: 'Ungrammatical possessive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Ungrammatical pronoun.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch4-q68',
      difficulty: 'Elite',
      skillTag: 'Cumulative Proportional Comparative',
      prompt: 'The more carefully the researchers analyze the evidence, ___ their conclusions become.',
      options: ['more reliable', 'the more reliable', 'the most reliable', 'more reliably'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Paired comparative structure: *The more [adverb] ..., the more [adjective] ...*',
        whyCorrect: 'Option B ("the more reliable") completes the paired comparative pattern.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'more reliable', whyWrong: 'Omits required article "the".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the more reliable', whyWrong: 'Correct paired comparative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the most reliable', whyWrong: 'Superlative breaks comparative pairing.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'more reliably', whyWrong: 'Adverb nonparallel with predicate adjective after "become".' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch4-q69',
      difficulty: 'Elite',
      skillTag: 'Cumulative Negative Auxiliary Inversion',
      prompt: 'Not only ___ the researchers revise the methodology, but they also repeated the experiment.',
      options: ['the researchers', 'did', 'were', 'had'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Initial "not only" triggers mandatory auxiliary inversion before subject (*did the researchers revise*).',
        whyCorrect: 'Option B ("did") is the past auxiliary for subject "researchers" and base verb "revise".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the researchers', whyWrong: 'Omits required auxiliary inversion.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'did', whyWrong: 'Correct auxiliary inversion.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Were cannot govern base verb "revise".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'had', whyWrong: 'Had requires past participle "revised".' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch4-q70',
      difficulty: 'Elite',
      skillTag: 'Cumulative Inner Parallel Series',
      prompt: 'The university seeks to expand access, improve instruction, and support students who research independently, evaluate evidence, and ___ their findings.',
      options: ['present', 'presenting', 'presentation', 'presented'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Outer series: *expand, improve, support*. Inner series governed by relative subject "who": *research ..., evaluate ..., and present ...*',
        whyCorrect: 'Option A ("present") is the base verb completing the inner relative series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'present', whyWrong: 'Correct inner base verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'presenting', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'presentation', whyWrong: 'Noun nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'presented', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    }
  ]
};
