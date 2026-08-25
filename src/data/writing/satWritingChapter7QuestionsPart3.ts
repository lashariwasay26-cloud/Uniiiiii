import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: Advanced Rhetorical Synthesis',
  description: '15 Elite Questions on exact relationships, contrast vs. concession, cause vs. result, correlation vs. causation, necessary vs. sufficient conditions, quantifiers, and statistical language.',
  questions: [
    {
      questionNumber: 88,
      id: 'ch7-b7-q1',
      difficulty: 'Medium',
      skillTag: 'Transition Category',
      prompt: 'Which transition most clearly signals contrast?',
      options: [
        'Furthermore',
        'However',
        'Therefore',
        'Similarly'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"However" is the primary transition expressing contrast.',
        whyCorrect: 'Choice B signals contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Addition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Correct. Contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Similarity.' }
        ]
      }
    },
    {
      questionNumber: 89,
      id: 'ch7-b7-q2',
      difficulty: 'Medium',
      skillTag: 'Transition Category',
      prompt: 'Which transition most clearly signals a result?',
      options: [
        'Consequently',
        'Nevertheless',
        'For example',
        'Similarly'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"Consequently" expresses a result or consequence.',
        whyCorrect: 'Choice A signals result.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Consequently', whyWrong: 'Correct. Result.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Concessive contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Illustration.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Similarity.' }
        ]
      }
    },
    {
      questionNumber: 90,
      id: 'ch7-b7-q3',
      difficulty: 'Medium',
      skillTag: 'Qualification Control',
      prompt: 'Which sentence preserves a qualification?',
      options: [
        'The method works.',
        'The method generally works under controlled conditions.',
        'The method always works.',
        'The method guarantees success.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Words like "generally" and "under controlled conditions" qualify and restrict a claim.',
        whyCorrect: 'Choice B preserves essential qualifications.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The method works.', whyWrong: 'Unqualified claim.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The method generally works under controlled conditions.', whyWrong: 'Correct. Preserves qualifications.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The method always works.', whyWrong: 'Absolute claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The method guarantees success.', whyWrong: 'Absolute guarantee.' }
        ]
      }
    },
    {
      questionNumber: 91,
      id: 'ch7-b7-q4',
      difficulty: 'Hard',
      skillTag: 'Numerical Precision',
      prompt: 'The evidence shows that 60% of participants improved. Which statement is most precise?',
      options: [
        'All participants improved.',
        'Most participants improved.',
        'Participants improved.',
        'Every participant improved.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '60% represents a majority, making "Most" mathematically precise.',
        whyCorrect: 'Choice B accurately expresses 60% as "most".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'All participants improved.', whyWrong: 'Falsely claims 100%.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Most participants improved.', whyWrong: 'Correct. 60% is a majority ("most").' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Participants improved.', whyWrong: 'Ambiguous scope.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Every participant improved.', whyWrong: 'Falsely claims 100%.' }
        ]
      }
    },
    {
      questionNumber: 92,
      id: 'ch7-b7-q5',
      difficulty: 'Hard',
      skillTag: 'Correlation vs Causation',
      prompt: 'A study found an association between two variables but did not establish causation. Which statement is safest?',
      options: [
        'X causes Y.',
        'X is associated with Y.',
        'X guarantees Y.',
        'X produces Y.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When causation is not established, observational language like "is associated with" is required.',
        whyCorrect: 'Choice B states association without claiming causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'X causes Y.', whyWrong: 'Asserts causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'X is associated with Y.', whyWrong: 'Correct. Safely states association.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'X guarantees Y.', whyWrong: 'Asserts absolute guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'X produces Y.', whyWrong: 'Asserts direct production/causation.' }
        ]
      }
    },
    {
      questionNumber: 93,
      id: 'ch7-b7-q6',
      difficulty: 'Hard',
      skillTag: 'Exception Preservation',
      prompt: 'Which sentence preserves the exception?',
      options: [
        'Most participants improved.',
        'All participants improved.',
        'Most participants improved, although those with severe symptoms showed little change.',
        'Participants universally improved.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Preserving an exception requires keeping the qualifying clause ("although those with severe symptoms showed little change").',
        whyCorrect: 'Choice C explicitly retains the exception clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Most participants improved.', whyWrong: 'Omits the severe symptoms exception.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'All participants improved.', whyWrong: 'Universal claim ignoring exception.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Most participants improved, although those with severe symptoms showed little change.', whyWrong: 'Correct. Preserves exception.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Participants universally improved.', whyWrong: 'Universal claim.' }
        ]
      }
    },
    {
      questionNumber: 94,
      id: 'ch7-b7-q7',
      difficulty: 'Hard',
      skillTag: 'Absence vs Proof',
      prompt: 'Which statement incorrectly treats an absence of evidence as proof of absence?',
      options: [
        'Researchers did not detect an effect.',
        'The study found no significant effect.',
        'The study proved that the effect does not exist.',
        'The researchers found insufficient evidence for an effect.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Failing to detect an effect is not proof that the effect does not exist. Claiming proof of non-existence conflates absence of evidence with proof of absence.',
        whyCorrect: 'Choice C incorrectly treats lack of detection as proof of non-existence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers did not detect an effect.', whyWrong: 'Accurate statement of absence of evidence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The study found no significant effect.', whyWrong: 'Accurate statistical statement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The study proved that the effect does not exist.', whyWrong: 'Correct to identify. Falsely claims proof of non-existence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers found insufficient evidence for an effect.', whyWrong: 'Accurate statement of absence of evidence.' }
        ]
      }
    },
    {
      questionNumber: 95,
      id: 'ch7-b7-q8',
      difficulty: 'Elite',
      skillTag: 'Defensible Outcome Synthesis',
      prompt: 'A study reports:\n• Group A improved.\n• Group B did not improve.\n• The groups differed in age.\n\nWhich conclusion is most defensible?',
      options: [
        'The treatment works only for younger people.',
        'The treatment does not work.',
        'The groups showed different outcomes, but age may be a relevant factor.',
        'Age caused the difference.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Must note differing outcomes while suggesting age as a potential factor with cautious modal phrasing ("may be").',
        whyCorrect: 'Choice C accurately summarizes outcomes and proposes age cautiously.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The treatment works only for younger people.', whyWrong: 'Definitive claim assuming age was sole factor.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The treatment does not work.', whyWrong: 'Ignores Group A\'s improvement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The groups showed different outcomes, but age may be a relevant factor.', whyWrong: 'Correct. Defensible and cautious.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Age caused the difference.', whyWrong: 'Asserts unproven causation.' }
        ]
      }
    },
    {
      questionNumber: 96,
      id: 'ch7-b7-q9',
      difficulty: 'Elite',
      skillTag: 'Contrast Synthesis',
      prompt: 'A paragraph says:\n> The original design was inexpensive but inefficient. Engineers later developed a more expensive design that reduced energy consumption.\n\nWhich sentence best synthesizes the comparison?',
      options: [
        'The later design was simply better.',
        'The original design was inexpensive, whereas the later design cost more but reduced energy consumption.',
        'The later design was cheaper and more efficient.',
        'Both designs were equally effective.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must contrast the cheap/inefficient original design with the expensive/energy-efficient later design.',
        whyCorrect: 'Choice B captures cost and energy consumption trade-offs accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The later design was simply better.', whyWrong: 'Subjective value judgment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The original design was inexpensive, whereas the later design cost more but reduced energy consumption.', whyWrong: 'Correct. Direct 2-part trade-off synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The later design was cheaper and more efficient.', whyWrong: 'Falsely claims later design was cheaper.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Both designs were equally effective.', whyWrong: 'False assertion.' }
        ]
      }
    },
    {
      questionNumber: 97,
      id: 'ch7-b7-q10',
      difficulty: 'Elite',
      skillTag: 'Confounding Study Time',
      prompt: 'A study finds that students who used a particular study method scored higher. Students who chose the method also reported spending more time studying. Which conclusion is most appropriate?',
      options: [
        'The method caused higher scores.',
        'More study time may have contributed to the higher scores.',
        'The method guarantees higher scores.',
        'The method is proven to be superior.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Because students who used the method also spent more time studying, study time is a confounding variable that "may have contributed".',
        whyCorrect: 'Choice B identifies study time as a potential contributor.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The method caused higher scores.', whyWrong: 'Ignores confounding study time.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'More study time may have contributed to the higher scores.', whyWrong: 'Correct. Identifies confounding factor.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The method guarantees higher scores.', whyWrong: 'Absolute guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The method is proven to be superior.', whyWrong: 'Unsupported claim.' }
        ]
      }
    },
    {
      questionNumber: 98,
      id: 'ch7-b7-q11',
      difficulty: 'Elite',
      skillTag: 'Necessary Condition Logic',
      prompt: 'Which statement best preserves necessary-condition logic?',
      options: [
        'Having a passport guarantees international travel.',
        'Having a passport may be necessary for international travel, but it is not sufficient by itself.',
        'International travel requires nothing besides a passport.',
        'Anyone with a passport can travel internationally.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A necessary condition is required, but not sufficient by itself to guarantee an outcome.',
        whyCorrect: 'Choice B explicitly defines necessary vs. sufficient condition logic.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Having a passport guarantees international travel.', whyWrong: 'Confuses necessary with sufficient guarantee.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Having a passport may be necessary for international travel, but it is not sufficient by itself.', whyWrong: 'Correct. Preserves necessary-condition logic.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'International travel requires nothing besides a passport.', whyWrong: 'Falsely claims passport is the sole requirement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Anyone with a passport can travel internationally.', whyWrong: 'Confuses necessary with sufficient guarantee.' }
        ]
      }
    },
    {
      questionNumber: 99,
      id: 'ch7-b7-q12',
      difficulty: 'Elite',
      skillTag: 'Conditional Broadening',
      prompt: 'The evidence says:\n> The device performs reliably when temperatures remain below 40°C.\n\nWhich statement improperly broadens the finding?',
      options: [
        'The device performs reliably below 40°C.',
        'The device performed reliably under the tested temperature condition.',
        'The device performs reliably at all temperatures.',
        'Reliability was demonstrated under a specific temperature condition.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Removing the temperature qualification (<40°C) to "at all temperatures" improperly broadens scope.',
        whyCorrect: 'Choice C removes the condition, creating an unsupported universal claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The device performs reliably below 40°C.', whyWrong: 'Accurate equivalent.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The device performed reliably under the tested temperature condition.', whyWrong: 'Accurate equivalent.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The device performs reliably at all temperatures.', whyWrong: 'Correct to identify. Improperly broadens finding.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Reliability was demonstrated under a specific temperature condition.', whyWrong: 'Accurate equivalent.' }
        ]
      }
    },
    {
      questionNumber: 100,
      id: 'ch7-b7-q13',
      difficulty: 'Elite',
      skillTag: 'Contradictory Results Synthesis',
      prompt: 'Two studies produce different results.\nStudy A: 15% increase.\nStudy B: no statistically significant increase.\n\nWhich synthesis is strongest?',
      options: [
        'The research conclusively proves an increase.',
        'The research conclusively disproves an increase.',
        'The studies provide mixed evidence regarding the effect.',
        'Study B must be incorrect.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'When Study A finds a 15% increase and Study B finds no significant increase, "mixed evidence" accurately characterizes the state of research.',
        whyCorrect: 'Choice C synthesizes conflicting findings safely.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The research conclusively proves an increase.', whyWrong: 'Ignores Study B.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The research conclusively disproves an increase.', whyWrong: 'Ignores Study A.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The studies provide mixed evidence regarding the effect.', whyWrong: 'Correct. Safely synthesizes conflicting findings.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Study B must be incorrect.', whyWrong: 'Dismisses valid data.' }
        ]
      }
    },
    {
      questionNumber: 101,
      id: 'ch7-b7-q14',
      difficulty: 'Elite',
      skillTag: 'Historical Principle Bridge',
      prompt: 'A paragraph discusses an old technology and then explains that its underlying principle remains useful today. Which sentence provides the strongest bridge?',
      options: [
        'The technology was invented many years ago.',
        'Although the original device is obsolete, its underlying principle continues to inform modern designs.',
        'Many inventions were developed during the same period.',
        'Historical technologies are interesting to researchers.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A bridge sentence must connect the obsolete historical origin to present-day usefulness ("underlying principle continues to inform modern designs").',
        whyCorrect: 'Choice B bridges history to modern application.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The technology was invented many years ago.', whyWrong: 'Focuses only on history.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Although the original device is obsolete, its underlying principle continues to inform modern designs.', whyWrong: 'Correct. Bridges historical device to modern technology.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Many inventions were developed during the same period.', whyWrong: 'Irrelevant historical context.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Historical technologies are interesting to researchers.', whyWrong: 'Vague commentary.' }
        ]
      }
    },
    {
      questionNumber: 102,
      id: 'ch7-b7-q15',
      difficulty: 'Elite',
      skillTag: '3-Note Balanced Synthesis',
      prompt: 'Notes:\n• A treatment improved recovery in 75% of participants.\n• Participants with a particular condition showed smaller improvements.\n• Long-term effects were not measured.\n\nWhich synthesis is best?',
      options: [
        'The treatment improves recovery for everyone.',
        'The treatment improved recovery for most participants, although improvement was smaller among participants with the specified condition and long-term effects remain unknown.',
        'The treatment permanently improves recovery.',
        'The treatment is ineffective for participants with the specified condition.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must combine 75% ("most"), the subgroup exception (smaller improvement), and unmeasured long-term effects.',
        whyCorrect: 'Choice B incorporates all three notes accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The treatment improves recovery for everyone.', whyWrong: 'Overgeneralizes 75% to everyone.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The treatment improved recovery for most participants, although improvement was smaller among participants with the specified condition and long-term effects remain unknown.', whyWrong: 'Correct. Complete 3-note synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The treatment permanently improves recovery.', whyWrong: 'Contradicts unmeasured long-term effects.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The treatment is ineffective for participants with the specified condition.', whyWrong: 'Falsely claims "ineffective" when notes state "smaller improvements".' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Block 8 Exercises: Multi-Constraint Editing',
  description: '15 Elite Questions testing the 5-constraint model, elimination pyramid, fatal flaws, information value, relevance, scope, certainty, time, and multi-constraint conclusions.',
  questions: [
    {
      questionNumber: 103,
      id: 'ch7-b8-q1',
      difficulty: 'Medium',
      skillTag: 'Relevance Test',
      prompt: 'Which answer is grammatical but most likely irrelevant to a paragraph about improved battery efficiency?',
      options: [
        'The battery stores more energy.',
        'The battery uses a new electrode design.',
        'The battery was developed at a university founded in 1900.',
        'The new design reduces energy loss.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The founding date of the university is an irrelevant historical fact in a technical paragraph on battery efficiency.',
        whyCorrect: 'Choice C is factually true but rhetorically irrelevant.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The battery stores more energy.', whyWrong: 'Relevant to efficiency.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The battery uses a new electrode design.', whyWrong: 'Relevant mechanism.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The battery was developed at a university founded in 1900.', whyWrong: 'Correct to identify. Irrelevant historical detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new design reduces energy loss.', whyWrong: 'Directly relevant to efficiency.' }
        ]
      }
    },
    {
      questionNumber: 104,
      id: 'ch7-b8-q2',
      difficulty: 'Medium',
      skillTag: 'Transition Identification',
      prompt: 'Which transition indicates similarity?',
      options: [
        'However',
        'Similarly',
        'Therefore',
        'Nevertheless'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Similarly" indicates similarity or parallel comparison.',
        whyCorrect: 'Choice B signals similarity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Correct. Similarity.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Concession.' }
        ]
      }
    },
    {
      questionNumber: 105,
      id: 'ch7-b8-q3',
      difficulty: 'Medium',
      skillTag: 'Cautious Modal',
      prompt: 'Which statement is most cautious?',
      options: [
        'The method proves effective.',
        'The method guarantees improvement.',
        'The method may improve performance.',
        'The method always improves performance.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"May improve" uses a cautious modal verb expressing potential outcome.',
        whyCorrect: 'Choice C is the most cautious statement.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The method proves effective.', whyWrong: 'Asserts proof.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The method guarantees improvement.', whyWrong: 'Asserts guarantee.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The method may improve performance.', whyWrong: 'Correct. Cautious modal.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The method always improves performance.', whyWrong: 'Asserts universal certainty.' }
        ]
      }
    },
    {
      questionNumber: 106,
      id: 'ch7-b8-q4',
      difficulty: 'Hard',
      skillTag: 'Preserving Evidence',
      prompt: 'Evidence:\n> 72% of participants improved.\n\nWhich answer preserves the evidence?',
      options: [
        'Everyone improved.',
        'Most participants improved.',
        'All participants improved.',
        'Participants universally improved.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '72% represents a clear majority ("most"). "Everyone", "all", and "universally" claim 100%.',
        whyCorrect: 'Choice B accurately expresses 72% as "most".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Everyone improved.', whyWrong: 'Falsely claims 100%.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Most participants improved.', whyWrong: 'Correct. 72% is a majority ("most").' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'All participants improved.', whyWrong: 'Falsely claims 100%.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Participants universally improved.', whyWrong: 'Falsely claims 100%.' }
        ]
      }
    },
    {
      questionNumber: 107,
      id: 'ch7-b8-q5',
      difficulty: 'Hard',
      skillTag: 'Causal Strength Shift',
      prompt: 'Which answer changes the causal strength?\nOriginal:\n> The results were associated with increased rainfall.',
      options: [
        'The results coincided with increased rainfall.',
        'The results were linked to increased rainfall.',
        'Increased rainfall caused the results.',
        'The results occurred alongside increased rainfall.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Original states "associated with" (correlation). Choice C changes this to "caused", upgrading correlation to direct causation.',
        whyCorrect: 'Choice C changes the causal strength from association to causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The results coincided with increased rainfall.', whyWrong: 'Preserves observational correlation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The results were linked to increased rainfall.', whyWrong: 'Preserves observational link.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Increased rainfall caused the results.', whyWrong: 'Correct to identify. Upgrades to causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The results occurred alongside increased rainfall.', whyWrong: 'Preserves observational timing.' }
        ]
      }
    },
    {
      questionNumber: 108,
      id: 'ch7-b8-q6',
      difficulty: 'Hard',
      skillTag: 'Preserving Limitations',
      prompt: 'Which answer best preserves a limitation?',
      options: [
        'The study proves the treatment works.',
        'The treatment appears promising, although the study did not measure long-term effects.',
        'The treatment permanently improves outcomes.',
        'The treatment guarantees recovery.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must explicitly retain the limitation clause ("although the study did not measure long-term effects").',
        whyCorrect: 'Choice B preserves the long-term uncertainty limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The study proves the treatment works.', whyWrong: 'Omits limitations.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The treatment appears promising, although the study did not measure long-term effects.', whyWrong: 'Correct. Preserves limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The treatment permanently improves outcomes.', whyWrong: 'Contradicts unmeasured long-term effects.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The treatment guarantees recovery.', whyWrong: 'Absolute guarantee.' }
        ]
      }
    },
    {
      questionNumber: 109,
      id: 'ch7-b8-q7',
      difficulty: 'Hard',
      skillTag: 'Contrast Infill',
      prompt: 'Which transition is most appropriate?\n> The first design was inexpensive. ______, it required frequent maintenance.',
      options: [
        'Furthermore',
        'However',
        'Therefore',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Low cost vs high maintenance requirement represents a direct contrast.',
        whyCorrect: 'Choice B ("However") correctly signals contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Addition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Correct. Signals contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Illustration.' }
        ]
      }
    },
    {
      questionNumber: 110,
      id: 'ch7-b8-q8',
      difficulty: 'Elite',
      skillTag: 'Scale Limitations',
      prompt: 'Passage:\n> The researchers observed that the new process reduced production time. However, the experiment was conducted only on small-scale equipment.\n\nWhich conclusion is most accurate?',
      options: [
        'The process reduces production time in all manufacturing environments.',
        'The process reduced production time under the tested conditions, although its performance on large-scale equipment remains uncertain.',
        'The process is guaranteed to improve manufacturing.',
        'The experiment proves the process works universally.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must report reduced production time while retaining the small-scale testing caveat.',
        whyCorrect: 'Choice B preserves findings under tested conditions alongside large-scale uncertainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The process reduces production time in all manufacturing environments.', whyWrong: 'Universal claim ignoring small-scale limitation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The process reduced production time under the tested conditions, although its performance on large-scale equipment remains uncertain.', whyWrong: 'Correct. Preserves findings and small-scale limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The process is guaranteed to improve manufacturing.', whyWrong: 'Absolute guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The experiment proves the process works universally.', whyWrong: 'Universal claim.' }
        ]
      }
    },
    {
      questionNumber: 111,
      id: 'ch7-b8-q9',
      difficulty: 'Elite',
      skillTag: 'Conflicting Results Synthesis',
      prompt: 'Passage:\n> Two studies examined the same treatment. Study A reported substantial improvement, whereas Study B found no statistically significant difference.\n\nWhich synthesis is best?',
      options: [
        'The treatment is proven effective.',
        'The treatment is proven ineffective.',
        'The studies provide conflicting evidence regarding the treatment\'s effect.',
        'Study B should be ignored.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'When Study A finds substantial improvement and Study B finds no significant difference, the evidence is conflicting.',
        whyCorrect: 'Choice C accurately describes conflicting study findings.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The treatment is proven effective.', whyWrong: 'Ignores Study B.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The treatment is proven ineffective.', whyWrong: 'Ignores Study A.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The studies provide conflicting evidence regarding the treatment\'s effect.', whyWrong: 'Correct. Accurately synthesizes conflicting evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Study B should be ignored.', whyWrong: 'Dismisses valid data.' }
        ]
      }
    },
    {
      questionNumber: 112,
      id: 'ch7-b8-q10',
      difficulty: 'Elite',
      skillTag: 'Multiple Confounding Factors',
      prompt: 'Passage:\n> Researchers found that the species became more abundant after a change in habitat management. Because food availability also increased, researchers could not determine which factor produced the change.\n\nWhich statement is best?',
      options: [
        'Habitat management caused the increase.',
        'Increased food availability caused the increase.',
        'Abundance increased after habitat management changed, but the study could not isolate the cause.',
        'Habitat management had no effect.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Must note increased abundance while explicitly stating that confounding food availability prevented isolating the cause.',
        whyCorrect: 'Choice C preserves observation and inability to isolate cause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Habitat management caused the increase.', whyWrong: 'Ignores food availability confounding.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Increased food availability caused the increase.', whyWrong: 'Ignores habitat management.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Abundance increased after habitat management changed, but the study could not isolate the cause.', whyWrong: 'Correct. Preserves observation and inability to isolate cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Habitat management had no effect.', whyWrong: 'Unsupported claim.' }
        ]
      }
    },
    {
      questionNumber: 113,
      id: 'ch7-b8-q11',
      difficulty: 'Elite',
      skillTag: 'Historical Principle Influence',
      prompt: 'A paragraph explains that a historical invention influenced a modern technology. Which conclusion best synthesizes the relationship?',
      options: [
        'The historical invention was the same as the modern technology.',
        'The historical invention established a principle later adapted in modern technology.',
        'Modern technology has nothing to do with historical inventions.',
        'The historical inventor predicted all modern developments.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Influence means establishing a principle that was later adapted in modern technology.',
        whyCorrect: 'Choice B captures principle adaptation without claiming identity or prediction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The historical invention was the same as the modern technology.', whyWrong: 'Falsely asserts identity.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The historical invention established a principle later adapted in modern technology.', whyWrong: 'Correct. Accurately synthesizes influence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Modern technology has nothing to do with historical inventions.', whyWrong: 'Contradicts passage.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The historical inventor predicted all modern developments.', whyWrong: 'Extremist claim.' }
        ]
      }
    },
    {
      questionNumber: 114,
      id: 'ch7-b8-q12',
      difficulty: 'Elite',
      skillTag: 'All Essential Information',
      prompt: 'Which sentence best preserves all essential information?\nNotes:\n• Method A is faster.\n• Method B is more accurate.\n• Both cost approximately the same.',
      options: [
        'Method A is better.',
        'Method B is better.',
        'Method A is faster, while Method B is more accurate, and their costs are similar.',
        'Both methods are identical.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Must integrate speed (A faster), accuracy (B more accurate), and cost equality (similar costs).',
        whyCorrect: 'Choice C incorporates all three notes accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method A is better.', whyWrong: 'Omits speed, accuracy, and cost; subjective.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method B is better.', whyWrong: 'Omits speed, accuracy, and cost; subjective.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Method A is faster, while Method B is more accurate, and their costs are similar.', whyWrong: 'Correct. Integrates all 3 notes.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Both methods are identical.', whyWrong: 'Contradicts speed and accuracy differences.' }
        ]
      }
    },
    {
      questionNumber: 115,
      id: 'ch7-b8-q13',
      difficulty: 'Elite',
      skillTag: 'Significance Continuation',
      prompt: 'A sentence needs to explain why an observation matters.\nObservation:\n> The device consumes 30% less electricity than previous models.\n\nWhich sentence provides significance?',
      options: [
        'The device was developed recently.',
        'This reduction could lower operating costs for facilities that use the device continuously.',
        'Electricity has been used for many years.',
        'Previous models were also developed by engineers.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '30% electricity reduction matters because it can lower operating costs for facilities.',
        whyCorrect: 'Choice B explains the practical economic significance of the electricity reduction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The device was developed recently.', whyWrong: 'Timeline detail, not significance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'This reduction could lower operating costs for facilities that use the device continuously.', whyWrong: 'Correct. Explains practical economic significance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Electricity has been used for many years.', whyWrong: 'General background.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Previous models were also developed by engineers.', whyWrong: 'General background.' }
        ]
      }
    },
    {
      questionNumber: 116,
      id: 'ch7-b8-q14',
      difficulty: 'Elite',
      skillTag: 'Defensible Conclusion',
      prompt: 'A paragraph states:\n> The first experiment succeeded under controlled conditions. A later field trial produced inconsistent results.\n\nWhich conclusion is most defensible?',
      options: [
        'The method is universally successful.',
        'The method is universally unsuccessful.',
        'The method showed promise under controlled conditions but produced less consistent results in field testing.',
        'The field trial disproved the laboratory findings.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Must report initial lab success alongside subsequent field testing inconsistency.',
        whyCorrect: 'Choice C synthesizes controlled success and field inconsistency defensibly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The method is universally successful.', whyWrong: 'Ignores field trial inconsistency.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The method is universally unsuccessful.', whyWrong: 'Ignores lab success.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The method showed promise under controlled conditions but produced less consistent results in field testing.', whyWrong: 'Correct. Defensible, balanced conclusion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The field trial disproved the laboratory findings.', whyWrong: 'Inconsistency does not constitute disproof.' }
        ]
      }
    },
    {
      questionNumber: 117,
      id: 'ch7-b8-q15',
      difficulty: 'Elite',
      skillTag: 'Subgroup & Location Precision',
      prompt: 'A paragraph establishes:\n• a new treatment improves recovery,\n• the improvement is strongest among younger participants,\n• the study involved only one hospital.\n\nWhich answer is most precise?',
      options: [
        'The treatment improves recovery for everyone.',
        'The treatment improved recovery, particularly among younger participants in the hospital studied.',
        'The treatment is most effective for all younger people.',
        'The treatment has been proven effective nationwide.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must include general improvement, age subgroup emphasis ("particularly among younger participants"), and location boundary ("in the hospital studied").',
        whyCorrect: 'Choice B incorporates all three establishing facts precisely.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The treatment improves recovery for everyone.', whyWrong: 'Universal claim.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The treatment improved recovery, particularly among younger participants in the hospital studied.', whyWrong: 'Correct. Precise integration of all 3 facts.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The treatment is most effective for all younger people.', whyWrong: 'Expands single hospital to "all younger people".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The treatment has been proven effective nationwide.', whyWrong: 'Expands single hospital to "nationwide".' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_9: WritingExerciseBlock = {
  blockNumber: 9,
  title: 'Block 9 Exercises: Advanced Revision & Precision',
  description: '15 Elite Questions on job description revision, function, intro vs. support, example vs. generalization, definition vs. explanation, bridge sentences, verb choice, modal verbs, and nominalization.',
  questions: [
    {
      questionNumber: 118,
      id: 'ch7-b9-q1',
      difficulty: 'Medium',
      skillTag: 'Function Identification',
      prompt: 'A sentence needs to provide an example of a general claim. Which function is required?',
      options: [
        'Contrast',
        'Illustration',
        'Conclusion',
        'Definition'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Providing an example is the precise definition of illustration.',
        whyCorrect: 'Choice B identifies illustration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Contrast', whyWrong: 'Shows difference.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Illustration', whyWrong: 'Correct. Provides example.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Conclusion', whyWrong: 'Summarizes/concludes.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Definition', whyWrong: 'Explains meaning.' }
        ]
      }
    },
    {
      questionNumber: 119,
      id: 'ch7-b9-q2',
      difficulty: 'Medium',
      skillTag: 'Significance vs Context',
      prompt: 'Which sentence provides significance rather than merely context?',
      options: [
        'The device was invented in 1985.',
        'The device was developed by engineers at a research institute.',
        'Its low operating cost allowed small facilities to adopt the technology.',
        'The device was initially tested in a laboratory.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Low operating cost enabling adoption explains why the invention mattered (significance). Invention dates and test locations are mere context.',
        whyCorrect: 'Choice C explains practical significance.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The device was invented in 1985.', whyWrong: 'Contextual date.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The device was developed by engineers at a research institute.', whyWrong: 'Contextual background.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Its low operating cost allowed small facilities to adopt the technology.', whyWrong: 'Correct. Explains practical significance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The device was initially tested in a laboratory.', whyWrong: 'Contextual testing location.' }
        ]
      }
    },
    {
      questionNumber: 120,
      id: 'ch7-b9-q3',
      difficulty: 'Medium',
      skillTag: 'Evidence Introduction',
      prompt: 'Which sentence best introduces supporting evidence?',
      options: [
        'Therefore, the theory is correct.',
        'For example, researchers observed the predicted pattern in three experiments.',
        'In contrast, another theory exists.',
        'This is why the discovery matters.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"For example, researchers observed..." introduces specific empirical data that supports a preceding claim.',
        whyCorrect: 'Choice B introduces supporting empirical evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Therefore, the theory is correct.', whyWrong: 'States a conclusion.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example, researchers observed the predicted pattern in three experiments.', whyWrong: 'Correct. Introduces supporting evidence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast, another theory exists.', whyWrong: 'Introduces contrasting theory.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'This is why the discovery matters.', whyWrong: 'States significance.' }
        ]
      }
    },
    {
      questionNumber: 121,
      id: 'ch7-b9-q4',
      difficulty: 'Hard',
      skillTag: 'Evidence vs Interpretation',
      prompt: 'Which sentence best distinguishes evidence from interpretation?',
      options: [
        'Researchers observed a 15% increase, proving the treatment works.',
        'Researchers observed a 15% increase, suggesting that the treatment may be effective.',
        'Researchers observed a 15% increase, guaranteeing effectiveness.',
        'Researchers observed a 15% increase, establishing permanent effectiveness.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Evidence is the 15% increase observation; cautious interpretation is linked via "suggesting that the treatment may be effective".',
        whyCorrect: 'Choice B maintains proper boundary between observation and cautious interpretation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers observed a 15% increase, proving the treatment works.', whyWrong: 'Upgrades interpretation to absolute proof.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Researchers observed a 15% increase, suggesting that the treatment may be effective.', whyWrong: 'Correct. Distinguishes observation from cautious interpretation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Researchers observed a 15% increase, guaranteeing effectiveness.', whyWrong: 'Upgrades interpretation to guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Researchers observed a 15% increase, establishing permanent effectiveness.', whyWrong: 'Upgrades interpretation to permanent proof.' }
        ]
      }
    },
    {
      questionNumber: 122,
      id: 'ch7-b9-q5',
      difficulty: 'Hard',
      skillTag: 'Nominalization Concision',
      prompt: 'Which revision is most concise without losing meaning?\n> The researchers conducted an analysis of the samples.',
      options: [
        'The researchers did an analysis of the samples.',
        'The researchers analyzed the samples.',
        'An analysis was conducted by the researchers.',
        'The samples underwent an analysis by researchers.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Converting "conducted an analysis of" into the active verb "analyzed" eliminates nominalization and wordiness.',
        whyCorrect: 'Choice B is the most concise, active revision.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers did an analysis of the samples.', whyWrong: 'Retains nominalization "did an analysis".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The researchers analyzed the samples.', whyWrong: 'Correct. Converts nominalization to active verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'An analysis was conducted by the researchers.', whyWrong: 'Passive voice nominalization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The samples underwent an analysis by researchers.', whyWrong: 'Wordy passive nominalization.' }
        ]
      }
    },
    {
      questionNumber: 123,
      id: 'ch7-b9-q6',
      difficulty: 'Hard',
      skillTag: 'Cautious Verbs',
      prompt: 'Which verb is most cautious?',
      options: [
        'proves',
        'demonstrates',
        'suggests',
        'guarantees'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Suggests" indicates tentative possibility, making it the most cautious verb among options.',
        whyCorrect: 'Choice C is the most cautious verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'proves', whyWrong: 'Absolute proof.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'demonstrates', whyWrong: 'Strong claim.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'suggests', whyWrong: 'Correct. Cautious interpretation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'guarantees', whyWrong: 'Absolute guarantee.' }
        ]
      }
    },
    {
      questionNumber: 124,
      id: 'ch7-b9-q7',
      difficulty: 'Hard',
      skillTag: 'Low Cost Significance',
      prompt: 'A paragraph has established that a technology is inexpensive. The next sentence must explain why that matters. Which sentence best performs that function?',
      options: [
        'The technology was developed in 2019.',
        'The technology uses a novel design.',
        'Its low cost makes the technology accessible to smaller organizations.',
        'Several engineers worked on the technology.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Low cost matters because it enables smaller organizations to access the technology.',
        whyCorrect: 'Choice C directly connects low cost to practical accessibility significance.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The technology was developed in 2019.', whyWrong: 'Date detail, not significance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The technology uses a novel design.', whyWrong: 'Design detail, not significance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Its low cost makes the technology accessible to smaller organizations.', whyWrong: 'Correct. Explains why low cost matters.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Several engineers worked on the technology.', whyWrong: 'Staffing detail, not significance.' }
        ]
      }
    },
    {
      questionNumber: 125,
      id: 'ch7-b9-q8',
      difficulty: 'Elite',
      skillTag: 'Conclusion & Limitation',
      prompt: 'Passage:\n> Researchers found that the new filter removed 95% of the measured contaminants. The filter\'s long-term performance, however, has not been tested.\n\nWhich conclusion is strongest?',
      options: [
        'The filter completely eliminates contamination.',
        'The filter appears highly effective under the tested conditions, although its long-term performance remains uncertain.',
        'The filter will remain effective indefinitely.',
        'The filter is the best available technology.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Conclusion must synthesize 95% removal efficiency under tested conditions alongside unstudied long-term performance.',
        whyCorrect: 'Choice B preserves high effectiveness under tested conditions and long-term uncertainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The filter completely eliminates contamination.', whyWrong: 'Falsely claims 100% elimination.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The filter appears highly effective under the tested conditions, although its long-term performance remains uncertain.', whyWrong: 'Correct. Preserves findings and limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The filter will remain effective indefinitely.', whyWrong: 'Contradicts unmeasured long-term performance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The filter is the best available technology.', whyWrong: 'Unsupported comparative claim.' }
        ]
      }
    },
    {
      questionNumber: 126,
      id: 'ch7-b9-q9',
      difficulty: 'Elite',
      skillTag: 'Contradictory Modals Revision',
      prompt: 'Which revision best improves precision?\n> The results prove that the treatment might possibly improve recovery.',
      options: [
        'The results prove that the treatment improves recovery.',
        'The results suggest that the treatment may improve recovery.',
        'The results guarantee that the treatment improves recovery.',
        'The results definitely might improve recovery.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Original contains conflicting modal verbs ("prove" vs "might possibly"). Choice B harmonizes verbs to cautious, precise phrasing ("suggest that the treatment may improve").',
        whyCorrect: 'Choice B replaces conflicting modal verbs with harmonized, precise phrasing.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The results prove that the treatment improves recovery.', whyWrong: 'Removes all caution, creating an overstated proof claim.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The results suggest that the treatment may improve recovery.', whyWrong: 'Correct. Harmonizes modals precisely.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The results guarantee that the treatment improves recovery.', whyWrong: 'Adds absolute guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The results definitely might improve recovery.', whyWrong: 'Retains conflicting certainty/possibility ("definitely might").' }
        ]
      }
    },
    {
      questionNumber: 127,
      id: 'ch7-b9-q10',
      difficulty: 'Elite',
      skillTag: 'Dual Trade-Off Synthesis',
      prompt: 'A paragraph discusses two methods.\n• Method A is cheaper.\n• Method B is faster.\n\nWhich sentence synthesizes them?',
      options: [
        'Method A and Method B are both methods.',
        'Method A offers a cost advantage, whereas Method B offers a speed advantage.',
        'Method A is better.',
        'Method B is better.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Synthesizing two methods with complementary advantages requires contrasting cost advantage vs speed advantage.',
        whyCorrect: 'Choice B directly contrasts cost advantage (A) with speed advantage (B).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method A and Method B are both methods.', whyWrong: 'Tautological statement.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method A offers a cost advantage, whereas Method B offers a speed advantage.', whyWrong: 'Correct. Direct dual-advantage synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Method A is better.', whyWrong: 'Subjective value judgment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method B is better.', whyWrong: 'Subjective value judgment.' }
        ]
      }
    },
    {
      questionNumber: 128,
      id: 'ch7-b9-q11',
      difficulty: 'Elite',
      skillTag: 'Bridge to Significance',
      prompt: 'Which sentence functions as a bridge from evidence to significance?',
      options: [
        'Researchers measured a 25% reduction in energy consumption.',
        'The experiment was conducted in a laboratory.',
        'This reduction could substantially lower operating costs for energy-intensive facilities.',
        'The researchers published the results in 2025.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Evidence is "25% reduction in energy consumption". Bridging to significance requires showing how "This reduction could substantially lower operating costs...".',
        whyCorrect: 'Choice C bridges energy reduction to economic significance.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers measured a 25% reduction in energy consumption.', whyWrong: 'This is the raw evidence itself.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The experiment was conducted in a laboratory.', whyWrong: 'Contextual location.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'This reduction could substantially lower operating costs for energy-intensive facilities.', whyWrong: 'Correct. Bridges evidence to significance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers published the results in 2025.', whyWrong: 'Publication context.' }
        ]
      }
    },
    {
      questionNumber: 129,
      id: 'ch7-b9-q12',
      difficulty: 'Elite',
      skillTag: 'Pronoun Ambiguity Revision',
      prompt: 'Which revision best controls a vague pronoun?\nOriginal:\n> The researchers tested the new material against the old one, and it performed better.',
      options: [
        'The researchers tested the new material against the old one, and it performed better.',
        'The researchers tested the new material against the old one, and the new material performed better.',
        'The researchers tested it against the old one, and it performed better.',
        'They tested the material, and it performed better.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Original "it performed better" is ambiguous because "it" could refer to the new material or the old material. Choice B replaces "it" with "the new material".',
        whyCorrect: 'Choice B eliminates pronoun ambiguity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers tested the new material against the old one, and it performed better.', whyWrong: 'Retains vague pronoun "it".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The researchers tested the new material against the old one, and the new material performed better.', whyWrong: 'Correct. Replaces "it" with explicit noun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers tested it against the old one, and it performed better.', whyWrong: 'Multiple vague pronouns.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'They tested the material, and it performed better.', whyWrong: 'Multiple vague pronouns.' }
        ]
      }
    },
    {
      questionNumber: 130,
      id: 'ch7-b9-q13',
      difficulty: 'Elite',
      skillTag: 'Sample Scope Control',
      prompt: 'Which conclusion avoids overgeneralization?\nEvidence:\n> The study examined 120 participants at one hospital.',
      options: [
        'The treatment works for everyone.',
        'The treatment works nationwide.',
        'The treatment showed promising results among the participants studied.',
        'The treatment is universally effective.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '120 participants at one hospital supports conclusions strictly restricted to "among the participants studied".',
        whyCorrect: 'Choice C restricts scope to the studied participants.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The treatment works for everyone.', whyWrong: 'Overgeneralizes 120 people to everyone.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The treatment works nationwide.', whyWrong: 'Overgeneralizes one hospital to nationwide.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The treatment showed promising results among the participants studied.', whyWrong: 'Correct. Restricts scope accurately.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The treatment is universally effective.', whyWrong: 'Universal claim.' }
        ]
      }
    },
    {
      questionNumber: 131,
      id: 'ch7-b9-q14',
      difficulty: 'Elite',
      skillTag: 'Synthesis vs Repetition',
      prompt: 'Which sentence best serves as a conclusion rather than a repetition?',
      options: [
        'The technology reduces energy consumption.',
        'The technology was developed by engineers.',
        'By reducing energy consumption without lowering output, the technology offers a potentially more efficient alternative to conventional systems.',
        'The technology is a technology.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A conclusion should synthesize mechanisms and consequences rather than merely repeating the opening premise ("technology reduces energy consumption").',
        whyCorrect: 'Choice C synthesizes mechanism (reducing energy without lowering output) and consequence (efficient alternative).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The technology reduces energy consumption.', whyWrong: 'Mere repetition of opening premise.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The technology was developed by engineers.', whyWrong: 'Irrelevant background.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'By reducing energy consumption without lowering output, the technology offers a potentially more efficient alternative to conventional systems.', whyWrong: 'Correct. True synthesis.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The technology is a technology.', whyWrong: 'Tautology.' }
        ]
      }
    },
    {
      questionNumber: 132,
      id: 'ch7-b9-q15',
      difficulty: 'Elite',
      skillTag: 'Synthesis & Testing Caveat',
      prompt: 'A paragraph establishes:\n• a new material is lightweight,\n• it retains strength at high temperatures,\n• researchers have tested it only in laboratories.\n\nWhich concluding sentence is strongest?',
      options: [
        'The material is the best material ever developed.',
        'The material is lightweight and strong.',
        'These properties make the material promising for high-temperature applications, although field testing is still needed.',
        'The material will definitely replace existing materials.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Must combine properties (lightweight, high-temp strength) with high-temperature promise and laboratory-only testing limitation ("field testing is still needed").',
        whyCorrect: 'Choice C synthesizes properties, potential, and testing caveat.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The material is the best material ever developed.', whyWrong: 'Extremist value judgment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The material is lightweight and strong.', whyWrong: 'Incomplete summary omitting limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'These properties make the material promising for high-temperature applications, although field testing is still needed.', whyWrong: 'Correct. Synthesizes properties and testing caveat.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The material will definitely replace existing materials.', whyWrong: 'Definitive claim ignoring lab limitation.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_10: WritingExerciseBlock = {
  blockNumber: 10,
  title: 'Block 10 Exercises: Final Elite Mastery',
  description: '16 Elite Questions testing the complete integration of grammar, transitions, modifiers, parallelism, evidence boundaries, scope, certainty, and multi-constraint passage synthesis.',
  questions: [
    {
      questionNumber: 133,
      id: 'ch7-b10-q1',
      difficulty: 'Medium',
      skillTag: 'Transition Identification',
      prompt: 'Which transition best signals addition?',
      options: [
        'However',
        'Furthermore',
        'Therefore',
        'Nevertheless'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Furthermore" signals addition.',
        whyCorrect: 'Choice B signals addition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Furthermore', whyWrong: 'Correct. Addition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Concession.' }
        ]
      }
    },
    {
      questionNumber: 134,
      id: 'ch7-b10-q2',
      difficulty: 'Medium',
      skillTag: 'Transition Identification',
      prompt: 'Which transition best signals an example?',
      options: [
        'For instance',
        'Consequently',
        'However',
        'Similarly'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"For instance" introduces an example.',
        whyCorrect: 'Choice A signals illustration/example.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For instance', whyWrong: 'Correct. Example.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Result.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Similarity.' }
        ]
      }
    },
    {
      questionNumber: 135,
      id: 'ch7-b10-q3',
      difficulty: 'Medium',
      skillTag: 'Modal Precision',
      prompt: 'Which sentence is most precise?',
      options: [
        'The study proves the treatment works.',
        'The study suggests that the treatment may be effective.',
        'The study guarantees effectiveness.',
        'The study establishes universal effectiveness.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Empirical studies suggest tentative effectiveness rather than providing absolute proof or guarantees.',
        whyCorrect: 'Choice B uses cautious, precise modal phrasing ("suggests that... may be effective").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The study proves the treatment works.', whyWrong: 'Asserts absolute proof.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The study suggests that the treatment may be effective.', whyWrong: 'Correct. Cautious and precise.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The study guarantees effectiveness.', whyWrong: 'Asserts guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The study establishes universal effectiveness.', whyWrong: 'Asserts universal scope.' }
        ]
      }
    },
    {
      questionNumber: 136,
      id: 'ch7-b10-q4',
      difficulty: 'Hard',
      skillTag: 'Dangling Modifier Fix',
      prompt: 'Which sentence correctly avoids a dangling modifier?',
      options: [
        'After analyzing the data, several errors were discovered.',
        'After analyzing the data, the researchers discovered several errors.',
        'After analyzing the data, the errors discovered the researchers.',
        'Analyzing the data, several errors appeared.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Who analyzed the data? The researchers. "After analyzing the data" must be immediately followed by "the researchers".',
        whyCorrect: 'Choice B attaches the modifier correctly to "the researchers".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After analyzing the data, several errors were discovered.', whyWrong: 'Dangling modifier ("errors" analyzed data).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After analyzing the data, the researchers discovered several errors.', whyWrong: 'Correct. Properly attaches modifier to researchers.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After analyzing the data, the errors discovered the researchers.', whyWrong: 'Nonsensical active modifier attachment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Analyzing the data, several errors appeared.', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 137,
      id: 'ch7-b10-q5',
      difficulty: 'Hard',
      skillTag: 'Parallel Structure',
      prompt: 'Which sentence has the strongest parallel structure?',
      options: [
        'The method is faster, cheaper, and more reliable.',
        'The method is faster, cheaper, and it has reliability.',
        'The method is faster, cheaper, and reliability is improved.',
        'The method is faster, cheaper, and improving reliability.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Series of comparative adjectives: "faster, cheaper, and more reliable".',
        whyCorrect: 'Choice A maintains adjective parallelism across all three items.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The method is faster, cheaper, and more reliable.', whyWrong: 'Correct. Parallel adjectives.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The method is faster, cheaper, and it has reliability.', whyWrong: 'Breaks series with clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The method is faster, cheaper, and reliability is improved.', whyWrong: 'Breaks series with passive clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The method is faster, cheaper, and improving reliability.', whyWrong: 'Breaks series with participial phrase.' }
        ]
      }
    },
    {
      questionNumber: 138,
      id: 'ch7-b10-q6',
      difficulty: 'Hard',
      skillTag: 'Preserving Scope Limitations',
      prompt: 'Which sentence correctly preserves a limitation?',
      options: [
        'The experiment proves the theory.',
        'The experiment supports the theory under the tested conditions.',
        'The experiment proves the theory universally.',
        'The experiment guarantees the theory\'s accuracy.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Under the tested conditions" explicitly preserves experimental scope limitations.',
        whyCorrect: 'Choice B retains scope qualifications and avoids absolute terms like "proves/guarantees".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The experiment proves the theory.', whyWrong: 'Asserts absolute proof.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The experiment supports the theory under the tested conditions.', whyWrong: 'Correct. Preserves scope limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The experiment proves the theory universally.', whyWrong: 'Universal claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The experiment guarantees the theory\'s accuracy.', whyWrong: 'Absolute guarantee.' }
        ]
      }
    },
    {
      questionNumber: 139,
      id: 'ch7-b10-q7',
      difficulty: 'Hard',
      skillTag: 'Percentage to Quantifier',
      prompt: 'Evidence:\n> 65% of participants improved.\n\nWhich conclusion is justified?',
      options: [
        'All participants improved.',
        'Most participants improved.',
        'Every participant improved.',
        'The treatment always works.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '65% represents a majority ("most"). "All", "every", and "always" claim 100%.',
        whyCorrect: 'Choice B accurately reflects 65% as "most".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'All participants improved.', whyWrong: 'Falsely claims 100%.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Most participants improved.', whyWrong: 'Correct. 65% is a majority ("most").' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Every participant improved.', whyWrong: 'Falsely claims 100%.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The treatment always works.', whyWrong: 'Universal claim.' }
        ]
      }
    },
    {
      questionNumber: 140,
      id: 'ch7-b10-q8',
      difficulty: 'Elite',
      skillTag: 'Dual Factor Synthesis',
      prompt: 'A study found that students who used a particular technique scored higher, but students using the technique also spent more time studying. Which conclusion is most defensible?',
      options: [
        'The technique caused the higher scores.',
        'The higher scores may reflect both the technique and the additional study time.',
        'The technique guarantees higher scores.',
        'The technique is proven superior to every other method.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Higher scores could be influenced by both the technique and confounding additional study time.',
        whyCorrect: 'Choice B accounts for both factors with cautious modal phrasing ("may reflect both").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The technique caused the higher scores.', whyWrong: 'Ignores additional study time.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The higher scores may reflect both the technique and the additional study time.', whyWrong: 'Correct. Accounts for both factors.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The technique guarantees higher scores.', whyWrong: 'Absolute guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The technique is proven superior to every other method.', whyWrong: 'Unsupported comparative claim.' }
        ]
      }
    },
    {
      questionNumber: 141,
      id: 'ch7-b10-q9',
      difficulty: 'Elite',
      skillTag: 'Cost-Maintenance Tradeoff',
      prompt: 'A paragraph states:\n> The first design cost less but required frequent maintenance. The revised design cost more but required substantially less maintenance.\n\nWhich sentence best synthesizes the information?',
      options: [
        'The revised design is better.',
        'The revised design costs more but reduces the maintenance burden associated with the original design.',
        'The original design was inexpensive.',
        'Both designs were equally efficient.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must synthesize higher cost and reduced maintenance of the revised design compared to the original.',
        whyCorrect: 'Choice B captures cost increase and maintenance reduction accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The revised design is better.', whyWrong: 'Subjective value judgment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The revised design costs more but reduces the maintenance burden associated with the original design.', whyWrong: 'Correct. Complete trade-off synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The original design was inexpensive.', whyWrong: 'Incomplete; ignores revised design.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Both designs were equally efficient.', whyWrong: 'False assertion.' }
        ]
      }
    },
    {
      questionNumber: 142,
      id: 'ch7-b10-q10',
      difficulty: 'Elite',
      skillTag: 'Significance Continuation',
      prompt: 'A sentence needs to explain why a statistic matters.\n> The new process reduced production time by 25%.\n\nWhich continuation best provides significance?',
      options: [
        'The process was developed by engineers.',
        'This reduction could allow manufacturers to increase output without expanding production time.',
        'Production facilities have existed for decades.',
        'The researchers published the finding.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '25% production time reduction matters because it allows manufacturers to increase output within existing timeframes.',
        whyCorrect: 'Choice B provides practical manufacturing significance.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The process was developed by engineers.', whyWrong: 'Developer detail, not significance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'This reduction could allow manufacturers to increase output without expanding production time.', whyWrong: 'Correct. Explains practical significance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Production facilities have existed for decades.', whyWrong: 'Historical context.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers published the finding.', whyWrong: 'Publication detail.' }
        ]
      }
    },
    {
      questionNumber: 143,
      id: 'ch7-b10-q11',
      difficulty: 'Elite',
      skillTag: 'Matching Modal Certainty',
      prompt: 'Which sentence preserves the exact certainty of the evidence?\nEvidence:\n> Researchers suggest that the change may have contributed to the decline.',
      options: [
        'The change caused the decline.',
        'The change definitely caused the decline.',
        'The change may have contributed to the decline.',
        'The decline was caused exclusively by the change.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The evidence uses cautious modal phrasing ("may have contributed").',
        whyCorrect: 'Choice C matches the exact modal certainty of the evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The change caused the decline.', whyWrong: 'Upgrades possibility to causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The change definitely caused the decline.', whyWrong: 'Upgrades to absolute certainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The change may have contributed to the decline.', whyWrong: 'Correct. Matches exact evidence certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The decline was caused exclusively by the change.', whyWrong: 'Upgrades to exclusive causation.' }
        ]
      }
    },
    {
      questionNumber: 144,
      id: 'ch7-b10-q12',
      difficulty: 'Elite',
      skillTag: 'Single Location Scope',
      prompt: 'A study examined one hospital and found promising results. Which conclusion is most appropriate?',
      options: [
        'The treatment works nationwide.',
        'The treatment works for everyone.',
        'The treatment showed promising results in the hospital studied.',
        'The treatment is universally effective.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Results from one hospital support conclusions strictly restricted to "in the hospital studied".',
        whyCorrect: 'Choice C restricts scope to the single hospital examined.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The treatment works nationwide.', whyWrong: 'Overgeneralizes to nationwide.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The treatment works for everyone.', whyWrong: 'Overgeneralizes to everyone.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The treatment showed promising results in the hospital studied.', whyWrong: 'Correct. Restricts scope accurately.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The treatment is universally effective.', whyWrong: 'Universal claim.' }
        ]
      }
    },
    {
      questionNumber: 145,
      id: 'ch7-b10-q13',
      difficulty: 'Elite',
      skillTag: 'Parallel Comparison',
      prompt: 'Which sentence best maintains logical comparison?',
      options: [
        'The new system is more efficient than the old system\'s cost.',
        'The new system is more efficient than the old system.',
        'The new system\'s efficiency is greater than the old system.',
        'The new system is more efficiency than the old system.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Compares "the new system" directly with "the old system".',
        whyCorrect: 'Choice B compares system with system.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The new system is more efficient than the old system\'s cost.', whyWrong: 'Compares system with cost.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The new system is more efficient than the old system.', whyWrong: 'Correct. Parallel system-to-system comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The new system\'s efficiency is greater than the old system.', whyWrong: 'Compares efficiency with system.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new system is more efficiency than the old system.', whyWrong: 'Ungrammatical "more efficiency".' }
        ]
      }
    },
    {
      questionNumber: 146,
      id: 'ch7-b10-q14',
      difficulty: 'Elite',
      skillTag: 'Uncontrolled Confounding Synthesis',
      prompt: 'A paragraph says:\n> Researchers found an association between exercise and improved sleep. The study did not control for participants\' diets.\n\nWhich statement is strongest?',
      options: [
        'Exercise causes improved sleep.',
        'Exercise is associated with improved sleep, although diet may also have influenced the results.',
        'Exercise guarantees better sleep.',
        'Diet had no effect.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must state association between exercise and sleep while acknowledging unmeasured dietary confounding.',
        whyCorrect: 'Choice B preserves association and dietary caveat.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Exercise causes improved sleep.', whyWrong: 'Asserts causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Exercise is associated with improved sleep, although diet may also have influenced the results.', whyWrong: 'Correct. Preserves association and dietary caveat.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Exercise guarantees better sleep.', whyWrong: 'Absolute guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Diet had no effect.', whyWrong: 'Unsupported claim.' }
        ]
      }
    },
    {
      questionNumber: 147,
      id: 'ch7-b10-q15',
      difficulty: 'Elite',
      skillTag: 'Full Multi-Note Synthesis',
      prompt: 'Read the complete information:\n• Researchers developed a new material.\n• The material is lighter than conventional materials.\n• It retains its strength at high temperatures.\n• Laboratory tests produced promising results.\n• The material has not yet been tested in industrial environments.\n\nWhich conclusion best integrates **all relevant information**?',
      options: [
        'The material will replace conventional materials in industry.',
        'The material is unquestionably superior to conventional materials.',
        'Because the material combines low weight with high-temperature strength, it appears promising for industrial applications, although further testing is needed outside laboratory conditions.',
        'The material is lighter than conventional materials.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Must integrate low weight, high-temperature strength, industrial promise, and laboratory-only testing limitation.',
        whyCorrect: 'Choice C synthesizes all properties, potential, and testing caveats.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The material will replace conventional materials in industry.', whyWrong: 'Definitive claim ignoring testing limitation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The material is unquestionably superior to conventional materials.', whyWrong: 'Subjective extremist claim.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Because the material combines low weight with high-temperature strength, it appears promising for industrial applications, although further testing is needed outside laboratory conditions.', whyWrong: 'Correct. Integrates all 5 notes accurately.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The material is lighter than conventional materials.', whyWrong: 'Incomplete single-fact summary.' }
        ]
      }
    },
    {
      questionNumber: 148,
      id: 'ch7-b10-q16',
      difficulty: 'Elite',
      skillTag: 'Final Master Synthesis',
      prompt: 'Consider the passage:\n> Researchers studying coastal ecosystems observed that regions with restored wetlands experienced lower levels of shoreline erosion than comparable regions without restoration. However, the restored regions also received greater investment in erosion-control infrastructure. The researchers therefore could not determine how much of the difference was attributable specifically to wetland restoration.\n\nWhich statement best synthesizes the evidence?',
      options: [
        'Wetland restoration prevents shoreline erosion.',
        'Erosion-control infrastructure has no effect on shoreline erosion.',
        'Restored wetlands were associated with lower shoreline erosion, but the study could not isolate the effect of restoration from other investments.',
        'Wetland restoration caused the lower erosion levels.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Must report lower shoreline erosion in restored wetlands alongside the key study limitation that confounding infrastructure investments prevented isolating the effect.',
        whyCorrect: 'Choice C preserves the observed association, comparison, and study limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Wetland restoration prevents shoreline erosion.', whyWrong: 'Direct causal claim ignoring infrastructure investment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Erosion-control infrastructure has no effect on shoreline erosion.', whyWrong: 'Unsupported claim.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Restored wetlands were associated with lower shoreline erosion, but the study could not isolate the effect of restoration from other investments.', whyWrong: 'Correct. Preserves observed relationship, comparison, and limitation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Wetland restoration caused the lower erosion levels.', whyWrong: 'Direct causal claim ignoring infrastructure.' }
        ]
      }
    }
  ]
};
