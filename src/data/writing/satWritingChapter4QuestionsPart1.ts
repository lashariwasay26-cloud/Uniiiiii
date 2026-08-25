import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Micro-Practice: Modifiers & Modifier Placement',
  description: 'Targeted Practice on Intro Modifiers, Dangling Modifiers, Essential Clauses, and Relative Pronouns (Questions 1–5)',
  questions: [
    {
      questionNumber: 1,
      id: 'ch4-q1',
      difficulty: 'Medium',
      skillTag: 'Dangling Modifiers',
      prompt: 'After reviewing the applications, ___ announced the final decisions.',
      options: ['the decisions were', 'the admissions officers', 'there were', 'the announcement'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'An introductory participial modifier ("After reviewing the applications") requires a logical actor immediately following the comma.',
        whyCorrect: 'Option B ("the admissions officers") provides the logical actor who actually reviewed the applications.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the decisions were', whyWrong: 'Decisions cannot review applications.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the admissions officers', whyWrong: 'Correct. Officers review applications.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'there were', whyWrong: 'Expletive "there were" lacks an actor.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the announcement', whyWrong: 'An announcement cannot review applications.' }
        ],
        eliminationShortcut: 'Ask "Who reviewed the applications?" -> The noun after the comma MUST be admissions officers.'
      }
    },
    {
      questionNumber: 2,
      id: 'ch4-q2',
      difficulty: 'Hard',
      skillTag: 'Modifier Attachment',
      prompt: 'The researchers analyzed the samples collected during the experiment.\n\nWhat does the phrase "collected during the experiment" modify?',
      options: ['researchers', 'analyzed', 'samples', 'experiment'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The participial phrase "collected during the experiment" attaches to the noun it logically describes.',
        whyCorrect: 'Option C ("samples") is correct because the samples were collected during the experiment.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'researchers', whyWrong: 'Researchers were not collected during the experiment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'analyzed', whyWrong: 'Analyzed is a verb, not the noun being described.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'samples', whyWrong: 'Correct. Samples were collected.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'experiment', whyWrong: 'Experiment is inside the prepositional phrase.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch4-q3',
      difficulty: 'Hard',
      skillTag: 'Essential vs. Nonessential Clauses',
      prompt: 'The students who completed the requirements received certificates.\n\nWhy are no commas used around "who completed the requirements"?',
      options: [
        'The relative clause is an independent clause.',
        'The relative clause identifies which students are meant.',
        'Relative clauses never use commas.',
        'The sentence has no main verb.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'An essential (restrictive) relative clause narrows down and identifies the specific noun it describes.',
        whyCorrect: 'Option B is correct because the clause identifies which students received certificates (only those who completed the requirements).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'independent clause', whyWrong: 'Relative clauses are dependent.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'identifies which students', whyWrong: 'Correct essential clause reasoning.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'never use commas', whyWrong: 'Nonessential relative clauses require commas.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no main verb', whyWrong: 'The main verb is "received".' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch4-q4',
      difficulty: 'Hard',
      skillTag: 'Relative Pronouns (Who vs. Whom)',
      prompt: 'The researcher interviewed the scientist ___ had developed the method.',
      options: ['whom', 'whose', 'who', 'which'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The relative pronoun serves as the subject of the clause "___ had developed the method".',
        whyCorrect: 'Option C ("who") is the subjective relative pronoun required to perform the action "had developed".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whom', whyWrong: 'Whom is an objective pronoun, not a subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'whose', whyWrong: 'Whose indicates possession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'who', whyWrong: 'Correct. Subject of "had developed".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'which', whyWrong: 'Which is used for non-human things, not a scientist.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch4-q5',
      difficulty: 'Elite',
      skillTag: 'Adverb Placement & Precision',
      prompt: 'The university accepted almost every applicant who had completed the requirements.\n\nWhich interpretation is most directly conveyed?',
      options: [
        'The university came close to accepting every applicant but did not.',
        'Nearly every applicant who completed the requirements was accepted.',
        'The university accepted applicants who almost completed the requirements.',
        'The university almost completed the acceptance process.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The modifier "almost" directly precedes "every applicant", so it limits the quantity of applicants accepted.',
        whyCorrect: 'Option B accurately reflects that nearly all qualifying applicants were accepted.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'came close but did not', whyWrong: 'That would correspond to "almost accepted every applicant".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'nearly every applicant accepted', whyWrong: 'Correct interpretation of "almost every applicant".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'almost completed requirements', whyWrong: 'Misplaces "almost" onto "completed".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'almost completed acceptance', whyWrong: 'Distorts sentence scope.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Micro-Practice: Logical Comparisons',
  description: 'Targeted Practice on Like-With-Like Comparisons, Demonstrative Reference ("That of / Those of"), and Possessives (Questions 6–11)',
  questions: [
    {
      questionNumber: 6,
      id: 'ch4-q6',
      difficulty: 'Medium',
      skillTag: 'Demonstrative Reference ("That of")',
      prompt: 'The salary of an engineer is higher than ___ of a teacher.',
      options: ['a teacher', 'that', 'those', 'it'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is between "salary" (singular) and "salary". "That" represents the singular noun "salary".',
        whyCorrect: 'Option B ("that") creates a grammatically equivalent salary-to-salary comparison.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'a teacher', whyWrong: 'Compares salary directly to a human teacher.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct. Represents singular "salary".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Those is plural; salary is singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'It cannot be followed by "of a teacher" in this comparative context.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch4-q7',
      difficulty: 'Hard',
      skillTag: 'Demonstrative Reference ("Those of")',
      prompt: 'The facilities at University A are more modern than ___ at University B.',
      options: ['University B', 'that', 'those', 'it'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The comparison is between "facilities" (plural) and "facilities".',
        whyCorrect: 'Option C ("those") represents the plural noun "facilities".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'University B', whyWrong: 'Compares facilities to an entire university.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'That is singular; facilities is plural.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Correct plural demonstrative.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'It is singular and grammatically incorrect here.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch4-q8',
      difficulty: 'Hard',
      skillTag: 'Action Comparisons',
      prompt: 'Studying abroad is more expensive than ___ at a local university.',
      options: ['a local university', 'attending', 'students who attend', 'a university'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The first element of comparison is the gerund activity "Studying abroad". The second element must also be a parallel gerund activity.',
        whyCorrect: 'Option B ("attending") compares activity to activity (*studying abroad* ↔ *attending at a local university*).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'a local university', whyWrong: 'Compares an activity to an institution.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'attending', whyWrong: 'Correct. Gerund activity.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'students who attend', whyWrong: 'Compares an activity to students.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'a university', whyWrong: 'Illogical category mismatch.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch4-q9',
      difficulty: 'Hard',
      skillTag: 'Possessive Comparisons',
      prompt: "Sarah's score was higher than ___.",
      options: ['John', 'John score', "John's", 'Johns'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: "The sentence compares Sarah's score to John's score. The possessive noun replaces the repeated noun 'score'.",
        whyCorrect: "Option C (\"John's\") represents \"John's score\".",
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'John', whyWrong: 'Compares a score to a person.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'John score', whyWrong: 'Missing possessive apostrophe.' },
          { optionIndex: 2, optionLabel: 'C', optionText: "John's", whyWrong: "Correct. Stands for John's score." },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Johns', whyWrong: 'Plural form, not possessive.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch4-q10',
      difficulty: 'Elite',
      skillTag: 'Parallel Activity Comparisons',
      prompt: 'The researchers preferred analyzing the original dataset to ___ the revised dataset.',
      options: ['the analysis of', 'analyzing', 'analyze', 'the researchers analyzed'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence uses the preference structure "preferred [Gerund A] to [Gerund B]". Both sides of "to" must be parallel gerunds.',
        whyCorrect: 'Option B ("analyzing") maintains parallel gerund structures (*analyzing dataset A* ↔ *analyzing dataset B*).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the analysis of', whyWrong: 'Noun phrase is nonparallel with gerund "analyzing".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'analyzing', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'analyze', whyWrong: 'Base form is nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the researchers analyzed', whyWrong: 'Full clause breaks parallel construction.' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ch4-q11',
      difficulty: 'Elite',
      skillTag: 'Multi-Layer Equipment Comparison',
      prompt: 'The equipment used by the new laboratory is more advanced than ___ used by the previous laboratory.',
      options: ['the researchers', 'that', 'those researchers', 'the equipment'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is between "equipment" (singular/uncountable) and "equipment".',
        whyCorrect: 'Option B ("that") concisely replaces the singular noun "equipment" without wordy repetition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the researchers', whyWrong: 'Compares equipment to people.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct. Concise demonstrative for singular noun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those researchers', whyWrong: 'Compares equipment to researchers.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the equipment', whyWrong: 'Repetitive when "that" is available.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Micro-Practice: Basic Parallelism & Correlatives',
  description: 'Targeted Practice on Matching Grammatical Forms in Series and Correlative Pairs (Questions 12–16)',
  questions: [
    {
      questionNumber: 12,
      id: 'ch4-q12',
      difficulty: 'Medium',
      skillTag: 'Parallel Series (Verbs)',
      prompt: 'The program teaches students to research, analyze, and ___ .',
      options: ['communication', 'communicating', 'communicate', 'communicated'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'All items in the series are base-form verbs governed by the shared infinitive "to" (*research, analyze, and...*).',
        whyCorrect: 'Option C ("communicate") is a base-form verb matching "research" and "analyze".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'communication', whyWrong: 'Noun is nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'communicating', whyWrong: 'Gerund is nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'communicate', whyWrong: 'Correct base-form verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'communicated', whyWrong: 'Past tense is nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch4-q13',
      difficulty: 'Hard',
      skillTag: 'Parallel Series (Gerunds)',
      prompt: "The university's goals include expanding access, improving instruction, and ___ student retention.",
      options: ['student retention', 'increasing', 'increased', 'increase'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The series consists of gerund phrases: *expanding access, improving instruction, and...*',
        whyCorrect: 'Option B ("increasing") provides a parallel gerund (*increasing student retention*).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'student retention', whyWrong: 'Bare noun phrase breaks gerund series.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'increasing', whyWrong: 'Correct gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'increased', whyWrong: 'Past participle is nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'increase', whyWrong: 'Base verb is nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ch4-q14',
      difficulty: 'Hard',
      skillTag: 'Correlative Conjunctions ("Not Only...But Also")',
      prompt: 'The scholarship not only covers tuition but also ___ housing.',
      options: ['housing is provided', 'provides', 'providing', 'housing'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The structure after "not only" is the present-tense verb phrase "covers tuition". The structure after "but also" must be a parallel verb phrase.',
        whyCorrect: 'Option B ("provides") matches "covers" in tense and grammatical form.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'housing is provided', whyWrong: 'Full clause is nonparallel with verb phrase "covers tuition".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'provides', whyWrong: 'Correct parallel verb phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'providing', whyWrong: 'Gerund is nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'housing', whyWrong: 'Bare noun phrase is nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch4-q15',
      difficulty: 'Elite',
      skillTag: 'Correlative Conjunctions ("Either...Or")',
      prompt: 'Applicants may either submit the application online or ___ a counselor to submit it for them.',
      options: ['a counselor can ask', 'asking', 'ask', 'an application'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The structure after "either" is the base verb phrase "submit the application online". What follows "or" must mirror it.',
        whyCorrect: 'Option C ("ask") is a base verb forming parallel actions available to applicants (*submit ... or ask*).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'a counselor can ask', whyWrong: 'Changes the subject mid-correlative.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'asking', whyWrong: 'Gerund nonparallel with base verb "submit".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'ask', whyWrong: 'Correct parallel base verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'an application', whyWrong: 'Noun phrase nonparallel with action verb.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch4-q16',
      difficulty: 'Elite',
      skillTag: 'Parallel Infinitives',
      prompt: 'The researchers hoped to collect reliable data and ___ experimental error.',
      options: ['reducing', 'reduced', 'to reduce', 'reduction of'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The conjunction "and" connects two infinitive phrases governed by "hoped": *to collect ... and to reduce*.',
        whyCorrect: 'Option C ("to reduce") maintains parallel explicit infinitive structures.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'reducing', whyWrong: 'Gerund nonparallel with infinitive.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'reduced', whyWrong: 'Past participle nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to reduce', whyWrong: 'Correct parallel infinitive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'reduction of', whyWrong: 'Noun phrase nonparallel.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Practice: Sentence-Level Parallelism & Agreement',
  description: 'Targeted Practice on Long Parallel Series, Correlative Agreement, and Substitute Verbs (Questions 17–22)',
  questions: [
    {
      questionNumber: 17,
      id: 'ch4-q17',
      difficulty: 'Medium',
      skillTag: 'Parallel Series (Base Verbs)',
      prompt: 'The program encourages students to research, analyze, and ___ evidence.',
      options: ['evaluation', 'evaluating', 'evaluate', 'evaluated'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The series consists of base verbs governed by the shared infinitive "to": *research, analyze, and evaluate*.',
        whyCorrect: 'Option C ("evaluate") matches the base-form verbs in the series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'evaluation', whyWrong: 'Noun nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'evaluating', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'evaluate', whyWrong: 'Correct base verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'evaluated', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch4-q18',
      difficulty: 'Hard',
      skillTag: 'Correlative Agreement (Rule of Proximity)',
      prompt: 'Either the students or the counselor ___ responsible for submitting the form.',
      options: ['are', 'were', 'is', 'have'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'When "either...or" joins subjects, the verb agrees with the subject closest to it ("counselor", singular).',
        whyCorrect: 'Option C ("is") correctly agrees with the singular noun "counselor".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb ignores proximity to singular "counselor".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural past tense verb is incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct singular present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Plural verb breaks proximity rule.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch4-q19',
      difficulty: 'Hard',
      skillTag: 'Correlative Agreement (Plural Proximity)',
      prompt: 'Neither the counselor nor the students ___ available.',
      options: ['was', 'is', 'has', 'were'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'In "neither...nor", the subject nearest the verb is "students" (plural), requiring a plural verb.',
        whyCorrect: 'Option D ("were") agrees with the nearest plural subject "students".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb ignores plural "students".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Singular verb is incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Singular auxiliary is incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Correct plural verb.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch4-q20',
      difficulty: 'Hard',
      skillTag: 'Additive Phrase Agreement ("Along with")',
      prompt: 'The researcher, along with several assistants, ___ responsible for analyzing the data.',
      options: ['were', 'are', 'was', 'have been'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Additive phrases like "along with several assistants" are parenthetical and do not create a compound subject. The main subject is singular "researcher".',
        whyCorrect: 'Option C ("was") correctly agrees with the singular subject "researcher".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'were', whyWrong: 'Plural verb mistakenly includes parenthetical phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb is incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'was', whyWrong: 'Correct singular verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural auxiliary is incorrect.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ch4-q21',
      difficulty: 'Elite',
      skillTag: 'Parallelism with "Rather Than"',
      prompt: 'The researchers chose to revise the methodology rather than ___ the study.',
      options: ['abandoning', 'to abandon', 'abandon', 'abandonment'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The shared infinitive construction "to revise" controls the base verb "abandon" across "rather than": *to revise ... rather than abandon*.',
        whyCorrect: 'Option C ("abandon") is the parallel base-form verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'abandoning', whyWrong: 'Gerund nonparallel with infinitive.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to abandon', whyWrong: 'Repeating "to" after "rather than" is redundant here.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'abandon', whyWrong: 'Correct parallel base verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'abandonment', whyWrong: 'Noun nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch4-q22',
      difficulty: 'Elite',
      skillTag: 'Substitute Verbs in Comparisons ("Did")',
      prompt: 'The new system processes applications more efficiently than the previous system ___ .',
      options: ['processing', 'did', 'was', 'has'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparative clause requires an auxiliary verb representing the past action of processing applications.',
        whyCorrect: 'Option B ("did") correctly substitutes for the past verb phrase "processed applications".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'processing', whyWrong: 'Participle creates incomplete clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'did', whyWrong: 'Correct substitute auxiliary verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'was', whyWrong: 'Was does not match action verb "processes".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Has tense mismatch.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Practice: Advanced Modifier & Parallelism Interaction',
  description: 'Targeted Practice on Multi-Layer Questions, Demonstrative Reference, and Prepositional Parallelism (Questions 23–27)',
  questions: [
    {
      questionNumber: 23,
      id: 'ch4-q23',
      difficulty: 'Medium',
      skillTag: 'Pronoun Reference in Comparison ("Those")',
      prompt: 'Students who complete the program perform better than ___ who do not.',
      options: ['students', 'those', 'they', 'their'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The demonstrative pronoun "those" represents the plural noun "students" in the comparative clause.',
        whyCorrect: 'Option B ("those") is the correct demonstrative pronoun referring to students.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'students', whyWrong: 'Repetitive when demonstrative pronoun is standard.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct demonstrative pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'they', whyWrong: 'Personal pronoun "they who" is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'their', whyWrong: 'Possessive pronoun is incorrect.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ch4-q24',
      difficulty: 'Hard',
      skillTag: 'Introductory Modifier & Main Subject Attachment',
      prompt: 'Unlike the previous scholarship, the new scholarship ___ full housing support.',
      options: ['students receive', 'receiving', 'provides', 'applicants'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The introductory modifier "Unlike the previous scholarship" must compare scholarship to scholarship. The main clause needs a predicate verb.',
        whyCorrect: 'Option C ("provides") completes the main clause with subject "new scholarship" and predicate "provides".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'students receive', whyWrong: 'Inserts new subject "students", creating illegal comparison (*previous scholarship* ↔ *students*).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'receiving', whyWrong: 'Participle lacks main verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'provides', whyWrong: 'Correct predicate verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'applicants', whyWrong: 'Noun insertion creates dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch4-q25',
      difficulty: 'Hard',
      skillTag: 'Prepositional Parallelism ("In analyzing")',
      prompt: 'The researchers were more interested in analyzing the results than ___ the limitations.',
      options: ['discuss', 'discussing', 'in discussing', 'they discussed'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The structure uses "interested in [Gerund A] than in [Gerund B]". The repeated preposition "in" makes the parallelism explicit.',
        whyCorrect: 'Option C ("in discussing") forms parallel prepositional gerund phrases (*in analyzing* ↔ *in discussing*).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'discuss', whyWrong: 'Base verb nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'discussing', whyWrong: 'Omits required preposition "in".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'in discussing', whyWrong: 'Correct parallel prepositional gerund.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'they discussed', whyWrong: 'Clause nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch4-q26',
      difficulty: 'Elite',
      skillTag: 'Plural Possessive Demonstrative ("Those")',
      prompt: "The researchers' findings were more consistent than ___ of the previous team.",
      options: ['the previous team', 'those', 'that', 'it'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is between "findings" (plural) and "findings".',
        whyCorrect: 'Option B ("those") represents the plural noun "findings".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the previous team', whyWrong: 'Compares findings directly to a human team.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct plural demonstrative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'that', whyWrong: 'That is singular; findings is plural.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'It is singular and ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch4-q27',
      difficulty: 'Elite',
      skillTag: 'Modifier Attachment & Comparison Logic',
      prompt: "Compared with last year's applicants, ___ has increased significantly.",
      options: [
        'the acceptance rate this year',
        "this year's acceptance rate",
        'the acceptance rate',
        'both A and B'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'Both Option A and Option B formulate the acceptance rate as the subject, but evaluating whether applicant-to-rate comparison is intended vs rate-to-rate shows that phrasing must match logical intent.',
        whyCorrect: 'Option D ("both A and B") acknowledges that both syntactic placements function as equivalent noun phrase subjects in this comparative frame.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the acceptance rate this year', whyWrong: 'Valid subject form.' },
          { optionIndex: 1, optionLabel: 'B', optionText: "this year's acceptance rate", whyWrong: 'Valid subject form.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the acceptance rate', whyWrong: 'Lacks temporal contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'both A and B', whyWrong: 'Correct. Both syntactically fulfill subject placement.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Exercises: Clauses, Infinitives, Gerunds & Pronoun Case',
  description: 'Targeted Practice on Modal Verbs, Gerund Lists, Parallel Clauses, and Objective Pronoun Case (Questions 28–34)',
  questions: [
    {
      questionNumber: 28,
      id: 'ch4-q28',
      difficulty: 'Medium',
      skillTag: 'Parallel Modal Verbs',
      prompt: 'Students can research the topic, analyze the evidence, and ___ their findings.',
      options: ['presentation', 'presenting', 'present', 'presented'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The modal "can" governs all three base-form verbs in the series: *can research, analyze, and present*.',
        whyCorrect: 'Option C ("present") is the base-form verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'presentation', whyWrong: 'Noun nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'presenting', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'present', whyWrong: 'Correct base verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'presented', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ch4-q29',
      difficulty: 'Hard',
      skillTag: 'Parallel Gerund Phrases',
      prompt: 'The course involves reading primary sources, evaluating evidence, and ___ arguments.',
      options: ['construct', 'constructing', 'construction', 'constructed'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The verb "involves" takes a series of gerund objects: *reading ..., evaluating ..., and constructing ...*',
        whyCorrect: 'Option B ("constructing") matches the gerund series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'construct', whyWrong: 'Base verb nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'constructing', whyWrong: 'Correct gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'construction', whyWrong: 'Bare noun nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'constructed', whyWrong: 'Past participle nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch4-q30',
      difficulty: 'Hard',
      skillTag: 'Parallel Dependent Clauses',
      prompt: 'The researchers discovered that the method was reliable and that the results ___ reproducible.',
      options: ['was', 'were', 'is', 'has'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Inside the second parallel clause "that the results ___ reproducible", the plural subject "results" requires a plural past-tense verb.',
        whyCorrect: 'Option B ("were") agrees with plural "results".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb disagrees with "results".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Correct plural past verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Present tense is nonparallel with "was".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Auxiliary does not form a valid predicate here.' }
        ]
      }
    },
    {
      questionNumber: 31,
      id: 'ch4-q31',
      difficulty: 'Elite',
      skillTag: 'Parallel "Whether" Clauses',
      prompt: 'The researchers wanted to determine whether the method was effective and ___ the results were reliable.',
      options: ['the reliability of', 'whether', 'reliable', 'determining whether'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence coordinates two parallel dependent clauses introduced by "whether": *whether method was effective and whether results were reliable*.',
        whyCorrect: 'Option B ("whether") introduces the second parallel dependent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the reliability of', whyWrong: 'Noun phrase nonparallel with whether-clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'whether', whyWrong: 'Correct parallel clause connector.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'reliable', whyWrong: 'Adjective insertion breaks clause structure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'determining whether', whyWrong: 'Redundant participle insertion.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch4-q32',
      difficulty: 'Elite',
      skillTag: 'Parallel Coordinated Base Verbs',
      prompt: 'The program encourages students to research local problems, ___ practical solutions, and present their findings.',
      options: ['developing', 'development of', 'develop', 'developed'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The coordinated verbs governed by shared infinitive "to" are: *research ..., develop ..., and present ...*',
        whyCorrect: 'Option C ("develop") is the parallel base verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'developing', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'development of', whyWrong: 'Noun phrase nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'develop', whyWrong: 'Correct base verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'developed', whyWrong: 'Past tense nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch4-q33',
      difficulty: 'Elite',
      skillTag: 'Parallel Pronoun Case (Objective)',
      prompt: 'The award was given to both ___ and ___ .',
      options: ['she / he', 'her / him', 'her / he', 'she / him'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both pronouns are objects of the preposition "to" (*given to both her and him*). Prepositions require objective case pronouns.',
        whyCorrect: 'Option B ("her / him") provides objective case pronouns for both positions.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'she / he', whyWrong: 'Subjective case used after preposition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'her / him', whyWrong: 'Correct objective case.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'her / he', whyWrong: 'Mixed subjective/objective case.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'she / him', whyWrong: 'Mixed subjective/objective case.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch4-q34',
      difficulty: 'Elite',
      skillTag: 'Parallel Infinitives (Shared "To")',
      prompt: "The institution's strategy is to expand access, strengthen partnerships, and ___ sustainable funding systems.",
      options: ['creating', 'creation of', 'create', 'created'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The shared infinitive "to" governs all three base-form verbs: *to expand ..., strengthen ..., and create ...*',
        whyCorrect: 'Option C ("create") matches the base-form verb series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'creating', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'creation of', whyWrong: 'Noun phrase nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'create', whyWrong: 'Correct base verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'created', whyWrong: 'Past participle nonparallel.' }
        ]
      }
    }
  ]
};
