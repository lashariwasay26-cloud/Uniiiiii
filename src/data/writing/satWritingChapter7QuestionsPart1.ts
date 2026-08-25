import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Exercises: Multi-Rule Decision Making',
  description: '12 Elite Questions on multi-constraint decision making, single-rule traps, minimum change, new error tests, local/global balance, and certainty/scope/causation control.',
  questions: [
    {
      questionNumber: 1,
      id: 'ch7-b1-q1',
      difficulty: 'Medium',
      skillTag: 'Minimum Change Principle',
      prompt: 'A sentence contains a comma splice. Which answer should be preferred if it fixes the error without changing the meaning?',
      options: [
        'Rewrite the entire paragraph.',
        'Replace the comma with a semicolon.',
        'Add several descriptive phrases.',
        'Change the subject of the second clause.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Replacing the comma with a semicolon makes the minimum necessary structural correction without altering sentence meaning or introducing new complexity.',
        whyCorrect: 'Choice B is correct because replacing the comma with a semicolon fixes the comma splice with the smallest possible intervention.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Rewrite the entire paragraph.', whyWrong: 'Rewriting the entire paragraph violates the minimum-change principle and risks introducing new errors.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Replace the comma with a semicolon.', whyWrong: 'Correct. Minimum structural fix.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Add several descriptive phrases.', whyWrong: 'Adding descriptive phrases adds clutter without addressing the independent clause boundary error.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Change the subject of the second clause.', whyWrong: 'Changing the subject alters the meaning unnecessarily.' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ch7-b1-q2',
      difficulty: 'Medium',
      skillTag: 'Certainty Control',
      prompt: 'A passage says a new method **may reduce costs**. Which answer preserves the evidence?',
      options: [
        'The method reduces costs.',
        'The method will reduce costs.',
        'The method may reduce costs.',
        'The method always reduces costs.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The modal verb "may" establishes possibility, not certainty. "The method may reduce costs" preserves the degree of evidentiary certainty.',
        whyCorrect: 'Choice C matches the cautious tone and possibility established by the passage.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The method reduces costs.', whyWrong: 'States a definitive fact, upgrading possibility to certainty.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The method will reduce costs.', whyWrong: '"Will" expresses guaranteed future certainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The method may reduce costs.', whyWrong: 'Correct. Preserves the exact modal certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The method always reduces costs.', whyWrong: '"Always" introduces an absolute universal claim unsupported by "may".' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch7-b1-q3',
      difficulty: 'Medium',
      skillTag: 'Elite Decision Framework',
      prompt: 'Which statement best describes elite editing?',
      options: [
        'Choose the shortest answer.',
        'Choose the most sophisticated vocabulary.',
        'Choose the answer that satisfies all relevant constraints.',
        'Choose the answer with the most information.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Elite editing is the process of finding the single answer that simultaneously satisfies all grammatical, logical, rhetorical, evidence, and concision constraints.',
        whyCorrect: 'Choice C reflects the multi-constraint survival model of elite writing.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choose the shortest answer.', whyWrong: 'Concision is a constraint, but the shortest answer can drop essential qualifications.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choose the most sophisticated vocabulary.', whyWrong: 'Vocabulary complexity often hides unsupported claims.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choose the answer that satisfies all relevant constraints.', whyWrong: 'Correct. Satisfies all constraints.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choose the answer with the most information.', whyWrong: 'More information often buries main points or adds unsupported details.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch7-b1-q4',
      difficulty: 'Hard',
      skillTag: 'Transition Logic',
      prompt: 'A sentence correctly establishes a contrast, but one answer choice uses a transition that implies causation. Which should be eliminated?',
      options: [
        'However',
        'Nevertheless',
        'In contrast',
        'Therefore'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Therefore" belongs to the cause/effect family, whereas the sentence requires a contrast transition.',
        whyCorrect: 'Choice D introduces causation when contrast is required.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Indicates contrast, fitting the sentence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Indicates concessive contrast, fitting the sentence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Indicates direct contrast, fitting the sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Correct to eliminate. "Therefore" indicates result/causation.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch7-b1-q5',
      difficulty: 'Hard',
      skillTag: 'Causation Control',
      prompt: 'Notes:\n• Researchers observed an association between temperature and growth.\n• The study did not establish causation.\n\nWhich answer is acceptable?',
      options: [
        'Temperature caused growth.',
        'Temperature was associated with growth.',
        'Temperature determined growth.',
        'Temperature produced growth.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Because the notes explicitly state that causation was not established, the answer must use non-causal observational wording like "was associated with".',
        whyCorrect: 'Choice B preserves the observational relationship without claiming causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Temperature caused growth.', whyWrong: 'Explicitly claims causation forbidden by the notes.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Temperature was associated with growth.', whyWrong: 'Correct. Preserves association.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Temperature determined growth.', whyWrong: '"Determined" implies deterministic causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Temperature produced growth.', whyWrong: '"Produced" implies direct causal generation.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ch7-b1-q6',
      difficulty: 'Hard',
      skillTag: 'New Error Test',
      prompt: 'A choice fixes a modifier but creates a pronoun whose antecedent is unclear. What should you do?',
      options: [
        'Select it because the modifier is fixed.',
        'Ignore the pronoun.',
        'Reject it because the complete sentence must remain clear.',
        'Select the longest answer.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'An elite answer must solve the initial error without creating a new one. A choice that fixes a modifier but introduces pronoun ambiguity fails the "New Error" test.',
        whyCorrect: 'Choice C recognizes that the entire resulting sentence must remain structurally and logically sound.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Select it because the modifier is fixed.', whyWrong: 'Violates the New Error rule by ignoring the introduced pronoun ambiguity.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Ignore the pronoun.', whyWrong: 'Pronoun ambiguity makes a sentence incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Reject it because the complete sentence must remain clear.', whyWrong: 'Correct. Answers creating new errors must be rejected.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Select the longest answer.', whyWrong: 'Length is irrelevant to correctness.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch7-b1-q7',
      difficulty: 'Hard',
      skillTag: 'Information Bridge',
      prompt: 'A paragraph explains a scientific discovery and then discusses its possible application. Which sentence is most likely to serve as a bridge?',
      options: [
        'The researchers were born in different countries.',
        'The mechanism discovered by the researchers could make the technology more efficient.',
        'The laboratory opened in 1984.',
        'The researchers published several unrelated papers.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A bridge sentence connects the preceding idea (discovery mechanism) to the following idea (technological application).',
        whyCorrect: 'Choice B mentions the discovered mechanism and links it to technological efficiency.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers were born in different countries.', whyWrong: 'Irrelevant biographical detail.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The mechanism discovered by the researchers could make the technology more efficient.', whyWrong: 'Correct. Bridges discovery to application.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The laboratory opened in 1984.', whyWrong: 'Irrelevant historical context.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers published several unrelated papers.', whyWrong: 'Explicitly off-topic.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch7-b1-q8',
      difficulty: 'Elite',
      skillTag: 'Scope & Evidence Control',
      prompt: 'A passage states:\n> Three hospitals reported lower infection rates after adopting the procedure.\n\nWhich choice preserves the evidence?',
      options: [
        'The procedure lowers infection rates in hospitals.',
        'The procedure can lower infection rates.',
        'The procedure eliminated infections.',
        'The procedure always lowers infection rates.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Observing lower rates in three hospitals supports a cautious claim ("can lower infection rates"). Universal claims ("always", "eliminated") exceed the evidence.',
        whyCorrect: 'Choice B is appropriately cautious and preserves the possible implication without overgeneralizing.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The procedure lowers infection rates in hospitals.', whyWrong: 'Overgeneralizes three hospitals to all hospitals.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The procedure can lower infection rates.', whyWrong: 'Correct. Cautious and supported.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The procedure eliminated infections.', whyWrong: 'Extremist claim ("eliminated" vs "lower").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The procedure always lowers infection rates.', whyWrong: '"Always" introduces unsupported universal certainty.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch7-b1-q9',
      difficulty: 'Elite',
      skillTag: 'Meaning Control',
      prompt: 'A sentence says:\n> The new device processes samples faster than the old device.\n\nWhich answer changes the meaning rather than merely improving wording?',
      options: [
        'The new device processes samples more quickly than the old device.',
        'The new device has a faster processing speed than the old device.',
        'The new device is superior to the old device in every respect.',
        'The new device processes samples faster than the old device.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The original establishes a specific speed advantage. Claiming it is "superior in every respect" adds claims about cost, durability, and accuracy that are not in the original.',
        whyCorrect: 'Choice C changes the meaning by expanding speed into universal superiority.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The new device processes samples more quickly than the old device.', whyWrong: 'Preserves exact meaning.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The new device has a faster processing speed than the old device.', whyWrong: 'Preserves speed comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The new device is superior to the old device in every respect.', whyWrong: 'Correct to identify. Alters meaning significantly.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new device processes samples faster than the old device.', whyWrong: 'Identical to original.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch7-b1-q10',
      difficulty: 'Elite',
      skillTag: 'Concision & Qualifier Control',
      prompt: 'A choice removes a redundant phrase but also removes a necessary qualifier.\nOriginal:\n> The discovery may potentially lead to new applications.\n\nWhich revision is best?',
      options: [
        'The discovery will lead to new applications.',
        'The discovery may lead to new applications.',
        'The discovery leads to new applications.',
        'The discovery always leads to new applications.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"May potentially" is redundant because both words express possibility. Removing "potentially" while keeping "may" eliminates redundancy while preserving possibility.',
        whyCorrect: 'Choice B removes redundancy without converting "may" into certainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The discovery will lead to new applications.', whyWrong: 'Replaces possibility with certainty.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The discovery may lead to new applications.', whyWrong: 'Correct. Removes redundancy, preserves uncertainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The discovery leads to new applications.', whyWrong: 'Presents hypothetical application as present fact.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The discovery always leads to new applications.', whyWrong: 'Adds absolute certainty.' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ch7-b1-q11',
      difficulty: 'Elite',
      skillTag: 'Explanatory Relationships',
      prompt: 'A paragraph states:\n> The first trial produced weak results. Researchers later discovered that the equipment had been improperly calibrated.\n\nWhich sentence best connects the two ideas?',
      options: [
        'The weak results therefore proved that the method failed.',
        'The equipment had been used in several other studies.',
        'The calibration problem provided a possible explanation for the weak initial results.',
        'The researchers had expected the method to succeed.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The calibration problem offers a potential explanation for why the initial trial failed, connecting the two statements logically.',
        whyCorrect: 'Choice C establishes an appropriate explanatory link with cautious wording ("possible explanation").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The weak results therefore proved that the method failed.', whyWrong: 'Overclaims failure when calibration was the issue.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The equipment had been used in several other studies.', whyWrong: 'Irrelevant detail.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The calibration problem provided a possible explanation for the weak initial results.', whyWrong: 'Correct. Logically connects the two facts.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers had expected the method to succeed.', whyWrong: 'Focuses on expectation rather than connecting results to calibration.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ch7-b1-q12',
      difficulty: 'Elite',
      skillTag: 'Distractor Analysis',
      prompt: 'Which answer is most dangerous?',
      options: [
        'Grammatically correct but irrelevant.',
        'Grammatically incorrect but relevant.',
        'Grammatically correct and relevant but unsupported.',
        'Grammatically correct, relevant, supported, and precise.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A choice that is grammatically correct and relevant tricks students into selecting it, but if it introduces an unsupported claim, it is wrong.',
        whyCorrect: 'Choice C represents the most seductive elite distractor.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Grammatically correct but irrelevant.', whyWrong: 'Irrelevance is relatively easy to spot.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Grammatically incorrect but relevant.', whyWrong: 'Grammar errors are easily eliminated.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Grammatically correct and relevant but unsupported.', whyWrong: 'Correct. Seduces solvers because it passes grammar and topic filters.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Grammatically correct, relevant, supported, and precise.', whyWrong: 'This is the definition of the correct answer.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Exercises: Advanced Distractor Analysis',
  description: '15 Elite Questions on four-choice differentiation, hidden quantifiers, hidden time markers, hidden causal verbs, hidden comparisons, and 3-layer reading.',
  questions: [
    {
      questionNumber: 13,
      id: 'ch7-b2-q1',
      difficulty: 'Medium',
      skillTag: 'Certainty Control',
      prompt: 'A choice changes:\n> may improve\nto:\n> will improve\n\nWhat has changed?',
      options: [
        'punctuation',
        'certainty',
        'chronology only',
        'sentence boundary'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Changing "may" (possibility) to "will" (definite certainty) alters the degree of evidentiary certainty.',
        whyCorrect: 'Choice B correctly identifies the change in certainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'punctuation', whyWrong: 'No punctuation was changed.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'certainty', whyWrong: 'Correct. "May" vs "will" alters certainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'chronology only', whyWrong: 'Certainty is the primary change.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'sentence boundary', whyWrong: 'Sentence boundaries are unaffected.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ch7-b2-q2',
      difficulty: 'Medium',
      skillTag: 'Scope Control',
      prompt: 'Evidence says:\n> Several students improved.\n\nWhich answer changes the scope?',
      options: [
        'Some students improved.',
        'Several students improved.',
        'Most students improved.',
        'A number of students improved.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Several" indicates a small, unspecified number (>2), whereas "most" asserts a majority (>50%). Changing "several" to "most" illegally expands the scope.',
        whyCorrect: 'Choice C changes the scope of the claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Some students improved.', whyWrong: '"Some" is comparable in scope to "several".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Several students improved.', whyWrong: 'Preserves original scope.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Most students improved.', whyWrong: 'Correct. Expands scope to a majority.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A number of students improved.', whyWrong: 'Preserves small indefinite scope.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch7-b2-q3',
      difficulty: 'Medium',
      skillTag: 'Causal Strength',
      prompt: 'Which pair expresses the strongest causal claim?',
      options: [
        'occurred after',
        'was associated with',
        'coincided with',
        'caused'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Caused" is a direct causal verb. "Occurred after" expresses sequence, and "associated with" or "coincided with" express correlation.',
        whyCorrect: 'Choice D expresses direct deterministic causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'occurred after', whyWrong: 'Sequence only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was associated with', whyWrong: 'Correlation only.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'coincided with', whyWrong: 'Simultaneous timing only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'caused', whyWrong: 'Correct. Direct causal claim.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch7-b2-q4',
      difficulty: 'Hard',
      skillTag: 'Sequence vs Causation',
      prompt: 'Evidence:\n> The city expanded the railway system in 2010. Population increased in 2012.\n\nWhich statement is safest?',
      options: [
        'The railway expansion caused population growth.',
        'Population increased after the railway expansion.',
        'The railway expansion guaranteed population growth.',
        'The railway expansion was the reason population increased.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The evidence establishes two dates (2010 and 2012), proving temporal sequence. It does not establish causation.',
        whyCorrect: 'Choice B states the temporal sequence without making an unsupported causal claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The railway expansion caused population growth.', whyWrong: 'Claims causation unsupported by date sequence alone.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Population increased after the railway expansion.', whyWrong: 'Correct. Factually states sequence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The railway expansion guaranteed population growth.', whyWrong: 'Adds unsupported guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The railway expansion was the reason population increased.', whyWrong: 'Claims sole causation.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch7-b2-q5',
      difficulty: 'Hard',
      skillTag: 'Comparison Alignment',
      prompt: 'Which sentence contains the strongest potential comparison problem?',
      options: [
        'Unlike older models, the new model uses less energy.',
        'Compared with earlier models, the new model is faster.',
        'Unlike earlier models, researchers found the new model more efficient.',
        'The new model uses less energy than earlier models.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In Choice C, "researchers" is placed immediately after "Unlike earlier models", creating an illogical comparison between earlier models and researchers.',
        whyCorrect: 'Choice C misaligns compared entities.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Unlike older models, the new model uses less energy.', whyWrong: 'Compares older models with new model.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Compared with earlier models, the new model is faster.', whyWrong: 'Compares models with new model.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Unlike earlier models, researchers found the new model more efficient.', whyWrong: 'Correct. Compares models with researchers.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new model uses less energy than earlier models.', whyWrong: 'Compares new model with earlier models.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch7-b2-q6',
      difficulty: 'Hard',
      skillTag: 'Evidence Boundaries',
      prompt: 'A passage says:\n> The method reduced processing time by 20 percent.\n\nWhich choice preserves the evidence?',
      options: [
        'The method greatly improved every aspect of performance.',
        'The method reduced processing time by 20 percent.',
        'The method transformed the field.',
        'The method made processing dramatically better in every respect.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The evidence establishes only a 20% reduction in processing time. Expansions to "every aspect" or "transformed the field" are unsupported.',
        whyCorrect: 'Choice B states the exact supported finding.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The method greatly improved every aspect of performance.', whyWrong: 'Expands processing time to "every aspect".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The method reduced processing time by 20 percent.', whyWrong: 'Correct. Preserves evidence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The method transformed the field.', whyWrong: 'Unsupported dramatic claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The method made processing dramatically better in every respect.', whyWrong: 'Unsupported universal claim.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch7-b2-q7',
      difficulty: 'Hard',
      skillTag: 'Grammar vs Evidence',
      prompt: 'Which answer should be rejected even though it is grammatically correct?',
      options: [
        'One that changes "may" to "will."',
        'One that removes a redundant phrase while preserving meaning.',
        'One that clarifies an ambiguous pronoun.',
        'One that preserves the original degree of certainty.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Changing "may" to "will" is grammatically correct, but it alters evidentiary strength from possibility to certainty, making it wrong.',
        whyCorrect: 'Choice A alters the evidence ceiling despite being grammatically valid.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'One that changes "may" to "will."', whyWrong: 'Correct. Grammatical, but alters evidence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'One that removes a redundant phrase while preserving meaning.', whyWrong: 'This is desirable.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'One that clarifies an ambiguous pronoun.', whyWrong: 'This is desirable.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'One that preserves the original degree of certainty.', whyWrong: 'This is desirable.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch7-b2-q8',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis',
      prompt: 'Notes:\n• Study A found a strong association.\n• Study B found a weaker association.\n• Neither study established causation.\n\nWhich synthesis is best?',
      options: [
        'Both studies proved that X causes Y.',
        'Study A and Study B found associations between X and Y, although neither established causation.',
        'X causes Y more strongly according to Study A.',
        'Study B disproved Study A.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A valid synthesis must incorporate both findings (associations found) and the key methodological limitation (neither established causation).',
        whyCorrect: 'Choice B preserves both findings and the limitation without overclaiming.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Both studies proved that X causes Y.', whyWrong: 'Contradicts the note that neither proved causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Study A and Study B found associations between X and Y, although neither established causation.', whyWrong: 'Correct. Complete, accurate synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'X causes Y more strongly according to Study A.', whyWrong: 'Incorrectly asserts causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Study B disproved Study A.', whyWrong: 'Weaker association does not disprove a stronger association.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ch7-b2-q9',
      difficulty: 'Elite',
      skillTag: 'Transition Category',
      prompt: 'A paragraph begins by describing an old technology and then introduces a new technology. Which transition is most appropriate if the new technology differs fundamentally from the old one?',
      options: [
        'Similarly',
        'In contrast',
        'For example',
        'Therefore'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When two items differ fundamentally, the logical relationship between them is contrast.',
        whyCorrect: 'Choice B ("In contrast") correctly signals fundamental difference.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Similarly', whyWrong: 'Indicates similarity, contradicting fundamental difference.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'Correct. Expresses contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Indicates illustration.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Indicates result.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch7-b2-q10',
      difficulty: 'Elite',
      skillTag: 'Modifier Interpretation',
      prompt: 'A sentence reads:\n> Based on the researchers\' findings, the theory was revised.\n\nWhich is the best interpretation?',
      options: [
        'The findings were irrelevant.',
        'The findings provided a basis for revising the theory.',
        'The theory caused the findings.',
        'The researchers were revised.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Based on" indicates that the introductory clause provided the foundation/reason for the main action.',
        whyCorrect: 'Choice B accurately explains that findings served as the foundation for revision.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The findings were irrelevant.', whyWrong: 'Contradicts "based on".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The findings provided a basis for revising the theory.', whyWrong: 'Correct. Accurately interprets the modifier relationship.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The theory caused the findings.', whyWrong: 'Reverses logical direction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers were revised.', whyWrong: 'Dangling modifier distortion.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch7-b2-q11',
      difficulty: 'Elite',
      skillTag: 'Unsupported Expansion',
      prompt: 'Which choice contains an unsupported expansion?\nOriginal:\n> The experiment produced consistent results across three trials.',
      options: [
        'The experiment produced consistent results across three trials.',
        'The experiment consistently produced the same result across three trials.',
        'The experiment produced highly reliable results that prove the method will work universally.',
        'Across three trials, the experiment produced consistent results.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The original notes consistency across 3 trials. Claiming it "proves the method will work universally" expands a 3-trial observation into universal proof.',
        whyCorrect: 'Choice C introduces universal proof unsupported by 3 trials.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The experiment produced consistent results across three trials.', whyWrong: 'Exact original text.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The experiment consistently produced the same result across three trials.', whyWrong: 'Accurate restatement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The experiment produced highly reliable results that prove the method will work universally.', whyWrong: 'Correct to identify. Contains unsupported universal expansion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Across three trials, the experiment produced consistent results.', whyWrong: 'Accurate restatement.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ch7-b2-q12',
      difficulty: 'Elite',
      skillTag: 'Chronology Control',
      prompt: 'A passage says:\n> Researchers initially expected the treatment to have little effect. Later trials showed substantial improvement.\n\nWhich choice preserves the chronology?',
      options: [
        'Researchers eventually expected little improvement before later trials.',
        'Researchers initially expected little improvement, but later trials showed substantial improvement.',
        'Later trials caused researchers to initially expect little improvement.',
        'Researchers always expected substantial improvement.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Chronology requires: initial expectation (little effect) → contrast ("but") → later results (substantial improvement).',
        whyCorrect: 'Choice B preserves the timeline and contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers eventually expected little improvement before later trials.', whyWrong: 'Confuses "initially" with "eventually".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Researchers initially expected little improvement, but later trials showed substantial improvement.', whyWrong: 'Correct. Preserves exact timeline.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Later trials caused researchers to initially expect little improvement.', whyWrong: 'Reverses cause and effect in time.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Researchers always expected substantial improvement.', whyWrong: 'Contradicts initial expectation.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch7-b2-q13',
      difficulty: 'Elite',
      skillTag: 'Modifier Precision',
      prompt: 'A sentence contains a modifier that correctly describes the subject but the answer choice adds an unnecessary second modifier. What should you do?',
      options: [
        'Prefer the longer answer because it gives more detail.',
        'Prefer the shorter answer if both preserve the intended meaning.',
        'Choose the answer with more adjectives.',
        'Always remove all modifiers.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When two choices both convey the required meaning, prefer the shorter answer to avoid wordiness and unneeded detail.',
        whyCorrect: 'Choice B follows the concision and minimum-change principles.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Prefer the longer answer because it gives more detail.', whyWrong: 'More detail is often unnecessary clutter.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Prefer the shorter answer if both preserve the intended meaning.', whyWrong: 'Correct. Concision principle.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choose the answer with more adjectives.', whyWrong: 'Adjectives do not equal correctness.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Always remove all modifiers.', whyWrong: 'Necessary modifiers must be kept.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch7-b2-q14',
      difficulty: 'Elite',
      skillTag: 'Multi-Dimensional Comparison',
      prompt: 'Notes:\n• The new process costs less.\n• It takes longer.\n• Accuracy is unchanged.\n\nWhich answer provides the most complete comparison?',
      options: [
        'The new process is better.',
        'The new process is cheaper.',
        'The new process costs less but takes longer, while maintaining comparable accuracy.',
        'The new process is superior because it is cheaper.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A complete comparison must integrate all three dimensions (cost, speed, accuracy) without making an arbitrary value judgment ("better/superior").',
        whyCorrect: 'Choice C incorporates cost, speed, and accuracy.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The new process is better.', whyWrong: 'Subjective value judgment omitting speed and accuracy.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The new process is cheaper.', whyWrong: 'Incomplete; ignores speed and accuracy.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The new process costs less but takes longer, while maintaining comparable accuracy.', whyWrong: 'Correct. Complete 3-part comparison.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new process is superior because it is cheaper.', whyWrong: 'Subjective judgment ignoring longer time.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch7-b2-q15',
      difficulty: 'Elite',
      skillTag: 'Scope Distortion',
      prompt: 'A choice correctly fixes punctuation but changes:\n> "some researchers"\nto:\n> "all researchers."\n\nWhat should happen?',
      options: [
        'Accept it because punctuation is correct.',
        'Reject it because the scope has changed.',
        'Accept it because "all" sounds stronger.',
        'Accept it if the sentence is shorter.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Even if punctuation is fixed, changing "some" to "all" illegally expands the scope, introducing an unsupported claim.',
        whyCorrect: 'Choice B recognizes that scope changes make an answer wrong regardless of punctuation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Accept it because punctuation is correct.', whyWrong: 'Punctuation does not override scope errors.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Reject it because the scope has changed.', whyWrong: 'Correct. Reject due to scope alteration.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Accept it because "all" sounds stronger.', whyWrong: 'Stronger claims are wrong if unsupported.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Accept it if the sentence is shorter.', whyWrong: 'Length does not override scope.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Exercises: Rhetorical Purpose Under Competing Constraints',
  description: '15 Elite Questions testing function-first editing, intro vs. support, evidence vs. interpretation, claim vs. qualification, paragraph architecture, missing link, and balanced synthesis.',
  questions: [
    {
      questionNumber: 28,
      id: 'ch7-b3-q1',
      difficulty: 'Medium',
      skillTag: 'Sentence Function',
      prompt: 'A paragraph introduces a new scientific instrument and then describes how it works. What is the most likely purpose of the second sentence?',
      options: [
        'Introduce an unrelated scientist.',
        'Explain the instrument\'s operation.',
        'Provide an unrelated historical fact.',
        'Conclude the entire field of science.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Describing how an instrument functions serves the rhetorical purpose of explaining its operation.',
        whyCorrect: 'Choice B directly matches the function of explaining how the instrument works.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Introduce an unrelated scientist.', whyWrong: 'Off-topic.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Explain the instrument\'s operation.', whyWrong: 'Correct. Matches the described function.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Provide an unrelated historical fact.', whyWrong: 'Off-topic.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Conclude the entire field of science.', whyWrong: 'Gross overstatement of function.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ch7-b3-q2',
      difficulty: 'Medium',
      skillTag: 'Significance Statement',
      prompt: 'A paragraph provides evidence and then asks why the evidence matters. Which type of sentence is most appropriate?',
      options: [
        'A significance statement.',
        'An unrelated example.',
        'A new historical background paragraph.',
        'A repetition of the evidence.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Answering why evidence matters is the precise definition and function of a significance statement.',
        whyCorrect: 'Choice A identifies the exact type of sentence required.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'A significance statement.', whyWrong: 'Correct. Explains why evidence matters.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'An unrelated example.', whyWrong: 'Does not explain significance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'A new historical background paragraph.', whyWrong: 'Adds background rather than explaining significance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A repetition of the evidence.', whyWrong: 'Repetition adds no explanatory value.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch7-b3-q3',
      difficulty: 'Medium',
      skillTag: 'Evidence vs Interpretation',
      prompt: 'Which statement best distinguishes evidence from interpretation?',
      options: [
        'Evidence reports an observation; interpretation explains its significance.',
        'Evidence is always more detailed than interpretation.',
        'Interpretation must always be certain.',
        'Evidence and interpretation are identical.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Evidence consists of empirical observations/data; interpretation provides the analysis or explanation of what those observations mean.',
        whyCorrect: 'Choice A accurately defines the fundamental distinction between evidence and interpretation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Evidence reports an observation; interpretation explains its significance.', whyWrong: 'Correct. Precise distinction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Evidence is always more detailed than interpretation.', whyWrong: 'Detail level varies.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Interpretation must always be certain.', whyWrong: 'Interpretation is often cautious or tentative.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Evidence and interpretation are identical.', whyWrong: 'They perform distinct functions.' }
        ]
      }
    },
    {
      questionNumber: 31,
      id: 'ch7-b3-q4',
      difficulty: 'Hard',
      skillTag: 'Significance Identification',
      prompt: 'Notes:\n• A telescope detects distant objects.\n• Earlier telescopes could not detect them.\n• Astronomers can therefore study more distant galaxies.\n\nWhich sentence best explains the significance?',
      options: [
        'The telescope was developed by engineers.',
        'The telescope uses advanced technology.',
        'The telescope allows astronomers to study galaxies that earlier instruments could not detect.',
        'Astronomers have used telescopes for many years.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Significance answers "Why does this matter?". Being able to study galaxies that earlier instruments could not detect explains the practical scientific consequence.',
        whyCorrect: 'Choice C links the technological capability to its scientific significance.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The telescope was developed by engineers.', whyWrong: 'General background detail.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The telescope uses advanced technology.', whyWrong: 'Vague description.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The telescope allows astronomers to study galaxies that earlier instruments could not detect.', whyWrong: 'Correct. Explains practical scientific significance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Astronomers have used telescopes for many years.', whyWrong: 'General historical context.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch7-b3-q5',
      difficulty: 'Hard',
      skillTag: 'Example Function',
      prompt: 'A paragraph presents a general claim and then needs an example. Which answer is most appropriate?',
      options: [
        'A specific case illustrating the general claim.',
        'A completely new general claim.',
        'A conclusion unrelated to the claim.',
        'A repetition of the paragraph\'s title.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'An example serves to illustrate a general claim by presenting a specific instance or case.',
        whyCorrect: 'Choice A defines the exact function of an example sentence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'A specific case illustrating the general claim.', whyWrong: 'Correct. Illustrates general claim.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A completely new general claim.', whyWrong: 'Adds another claim rather than an example.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'A conclusion unrelated to the claim.', whyWrong: 'Off-topic.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A repetition of the paragraph\'s title.', whyWrong: 'Repetition is not an illustration.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch7-b3-q6',
      difficulty: 'Hard',
      skillTag: 'Synthesis & Limitation',
      prompt: 'Notes establish that a new treatment:\n• improved recovery time,\n• was tested on 80 patients,\n• and has not been studied long-term.\n\nWhich answer best synthesizes the notes?',
      options: [
        'The treatment is proven to be permanently effective.',
        'The treatment improved recovery time in an 80-patient study, although its long-term effects remain uncertain.',
        'The treatment is the best available treatment.',
        'The treatment guarantees faster recovery.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A complete synthesis must combine the positive outcome (improved recovery time), sample context (80 patients), and qualification (long-term effects unstudied).',
        whyCorrect: 'Choice B incorporates all key notes including the limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The treatment is proven to be permanently effective.', whyWrong: 'Contradicts the unstudied long-term limitation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The treatment improved recovery time in an 80-patient study, although its long-term effects remain uncertain.', whyWrong: 'Correct. Preserves findings and limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The treatment is the best available treatment.', whyWrong: 'Unsupported value judgment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The treatment guarantees faster recovery.', whyWrong: 'Adds unsupported guarantee.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch7-b3-q7',
      difficulty: 'Hard',
      skillTag: 'Relationship Explanation',
      prompt: 'A passage says:\n> The first experiment produced inconsistent results. Researchers then modified the procedure, after which the results became consistent.\n\nWhich sentence best explains the relationship?',
      options: [
        'The researchers modified the procedure after observing inconsistent initial results.',
        'The experiment was conducted by experienced researchers.',
        'The results were interesting and scientifically important.',
        'The researchers had conducted experiments previously.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The first sentence states inconsistent results, and the second states that modification led to consistency. Choice A explains that inconsistency triggered the modification.',
        whyCorrect: 'Choice A explicitly explains the cause-and-effect relationship behind the modification.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers modified the procedure after observing inconsistent initial results.', whyWrong: 'Correct. Explains the relationship.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The experiment was conducted by experienced researchers.', whyWrong: 'Background detail omitting relationship.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The results were interesting and scientifically important.', whyWrong: 'Vague commentary.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers had conducted experiments previously.', whyWrong: 'General background.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ch7-b3-q8',
      difficulty: 'Elite',
      skillTag: 'Significance Bridge',
      prompt: 'A paragraph discusses a newly discovered painting. The surrounding sentences establish:\n• it was painted in the seventeenth century,\n• it uses an unusual pigment,\n• chemical analysis revealed the pigment\'s composition.\n\nThe paragraph then asks why this analysis matters. Which answer is best?',
      options: [
        'The painter lived in Europe.',
        'The pigment was visually attractive.',
        'Identifying the pigment\'s composition may help researchers understand the materials available to artists during that period.',
        'Chemical analysis is commonly used by scientists.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Answering why chemical analysis matters requires connecting the chemical finding to historical art research significance.',
        whyCorrect: 'Choice C explains how identifying the pigment helps researchers understand historical materials.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The painter lived in Europe.', whyWrong: 'Geographic detail irrelevant to analysis significance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The pigment was visually attractive.', whyWrong: 'Aesthetic opinion irrelevant to chemical analysis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Identifying the pigment\'s composition may help researchers understand the materials available to artists during that period.', whyWrong: 'Correct. Explains why the analysis matters.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Chemical analysis is commonly used by scientists.', whyWrong: 'General statement that does not explain why THIS analysis matters.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch7-b3-q9',
      difficulty: 'Elite',
      skillTag: 'Defensible Synthesis',
      prompt: 'Notes:\n• City A introduced electric buses.\n• The buses reduced local emissions.\n• The study measured emissions for one year.\n• The study did not evaluate maintenance costs.\n\nWhich answer is most defensible?',
      options: [
        'Electric buses are the best transportation option.',
        'Electric buses reduced local emissions in City A during the one-year study, although maintenance costs were not evaluated.',
        'Electric buses are cheaper than conventional buses.',
        'Electric buses will eliminate all transportation emissions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A defensible answer incorporates location (City A), finding (reduced local emissions), timeframe (one year), and limitation (maintenance costs un-evaluated).',
        whyCorrect: 'Choice B synthesizes findings and limitations accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Electric buses are the best transportation option.', whyWrong: 'Unsupported value judgment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Electric buses reduced local emissions in City A during the one-year study, although maintenance costs were not evaluated.', whyWrong: 'Correct. Defensible and complete.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Electric buses are cheaper than conventional buses.', whyWrong: 'Contradicts note that maintenance costs were not evaluated.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Electric buses will eliminate all transportation emissions.', whyWrong: 'Extreme claim unsupported by local 1-year study.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch7-b3-q10',
      difficulty: 'Elite',
      skillTag: 'Transition & Bridge',
      prompt: 'A sentence is required to transition from a historical background discussion to the modern application of a technology. Which choice is most appropriate?',
      options: [
        'The technology was first documented centuries ago.',
        'Today, the same principle is used in modern sensors to detect changes in temperature.',
        'Several unrelated technologies were developed during the same period.',
        'Historical records contain many interesting details.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Bridging history to modern application requires mentioning how historical principles connect to present-day use ("Today, the same principle is used...").',
        whyCorrect: 'Choice B establishes the connection between historical principle and modern application.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The technology was first documented centuries ago.', whyWrong: 'Focuses entirely on history without transitioning to modern application.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Today, the same principle is used in modern sensors to detect changes in temperature.', whyWrong: 'Correct. Bridges history ("same principle") to modern use ("Today").' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Several unrelated technologies were developed during the same period.', whyWrong: 'Off-topic.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Historical records contain many interesting details.', whyWrong: 'Vague historical commentary.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch7-b3-q11',
      difficulty: 'Elite',
      skillTag: 'Reconciling Apparent Tension',
      prompt: 'A paragraph states:\n> Researchers found that the material was stronger under low temperatures. However, they also found that it became brittle under those conditions.\n\nWhich answer best resolves the apparent tension?',
      options: [
        'The material was simply stronger.',
        'The material\'s increased strength came with greater brittleness at low temperatures.',
        'The researchers made a mistake.',
        'Low temperatures always improve materials.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Resolving tension between two co-occurring properties (stronger vs. brittle) requires expressing them as a trade-off or coupled phenomenon.',
        whyCorrect: 'Choice B integrates both findings into a unified trade-off relationship.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The material was simply stronger.', whyWrong: 'Ignores brittleness.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The material\'s increased strength came with greater brittleness at low temperatures.', whyWrong: 'Correct. Synthesizes both properties into a trade-off.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers made a mistake.', whyWrong: 'Unsupported assumption.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Low temperatures always improve materials.', whyWrong: 'Brittleness is a flaw, not an improvement.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch7-b3-q12',
      difficulty: 'Elite',
      skillTag: 'Synthesis & Evidence Boundaries',
      prompt: 'A passage establishes:\n• Method A is faster.\n• Method B is more accurate.\n• Neither method is shown to be cheaper.\n\nWhich statement is best?',
      options: [
        'Method A is superior to Method B.',
        'Method A is faster, whereas Method B is more accurate; the evidence does not establish a cost difference.',
        'Method A is faster, more accurate, and cheaper.',
        'Method B is the better method in every respect.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The statement must accurately summarize the speed advantage of A, accuracy advantage of B, and explicit lack of cost evidence.',
        whyCorrect: 'Choice B states the exact facts and acknowledges the lack of cost evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method A is superior to Method B.', whyWrong: 'Unsupported value judgment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method A is faster, whereas Method B is more accurate; the evidence does not establish a cost difference.', whyWrong: 'Correct. Complete, accurate, evidence-bound.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Method A is faster, more accurate, and cheaper.', whyWrong: 'Falsely claims A is more accurate and cheaper.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method B is the better method in every respect.', whyWrong: 'Falsely claims B is better in every respect.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ch7-b3-q13',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Purpose vs Truth',
      prompt: 'Which answer is most likely wrong even if every factual statement in it is true?',
      options: [
        'An answer that directly performs the requested rhetorical function.',
        'An answer that provides an irrelevant true fact.',
        'An answer that accurately synthesizes the notes.',
        'An answer that preserves the evidence\'s limitations.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A choice can contain 100% true facts but be wrong if it is irrelevant to the paragraph\'s required function.',
        whyCorrect: 'Choice B highlights that truth alone does not make an answer correct if it lacks relevance.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'An answer that directly performs the requested rhetorical function.', whyWrong: 'This is the definition of a correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'An answer that provides an irrelevant true fact.', whyWrong: 'Correct. Irrelevant facts are wrong despite being true.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'An answer that accurately synthesizes the notes.', whyWrong: 'This is desirable.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'An answer that preserves the evidence\'s limitations.', whyWrong: 'This is desirable.' }
        ]
      }
    },
    {
      questionNumber: 41,
      id: 'ch7-b3-q14',
      difficulty: 'Elite',
      skillTag: 'Functional Purpose',
      prompt: 'A paragraph\'s purpose is to explain **why a discovery is important**. Which answer best fulfills that purpose?',
      options: [
        'The discovery was made in 2018.',
        'The scientist who made the discovery had studied the subject for years.',
        'The discovery gave researchers a way to measure the phenomenon more accurately.',
        'The discovery was published in a scientific journal.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Explaining importance requires giving the practical or scientific impact of the discovery (measuring a phenomenon more accurately).',
        whyCorrect: 'Choice C explains why the discovery mattered.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The discovery was made in 2018.', whyWrong: 'Gives date, not importance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The scientist who made the discovery had studied the subject for years.', whyWrong: 'Biographical context, not importance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The discovery gave researchers a way to measure the phenomenon more accurately.', whyWrong: 'Correct. Explains scientific importance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The discovery was published in a scientific journal.', whyWrong: 'Publication detail, not importance.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch7-b3-q15',
      difficulty: 'Elite',
      skillTag: 'Controlled Claim Synthesis',
      prompt: 'Notes:\n• Researchers observed higher plant growth in shaded plots.\n• The study involved one species.\n• Researchers suggest that the result may be related to soil moisture.\n• They did not directly measure soil moisture.\n\nWhich sentence is best?',
      options: [
        'Shade increases plant growth because it increases soil moisture.',
        'Shade universally increases plant growth.',
        'The study found greater growth in shaded plots for one species, possibly because of differences in soil moisture.',
        'Soil moisture caused the observed growth increase.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Must preserve observation (growth in shade), single species boundary, and soil moisture as an unmeasured possibility ("possibly").',
        whyCorrect: 'Choice C reflects observation, single-species scope, and hypothetical moisture connection.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Shade increases plant growth because it increases soil moisture.', whyWrong: 'Asserts unmeasured soil moisture as proven cause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Shade universally increases plant growth.', whyWrong: 'Universal claim ignoring single species.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The study found greater growth in shaded plots for one species, possibly because of differences in soil moisture.', whyWrong: 'Correct. Controlled, complete claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Soil moisture caused the observed growth increase.', whyWrong: 'Asserts causation for unmeasured moisture.' }
        ]
      }
    }
  ]
};
