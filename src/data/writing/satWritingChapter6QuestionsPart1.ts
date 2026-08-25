import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Exercises: Transition Logic Foundations',
  description: 'Block 1 focuses on core conceptual foundations for transition relationships. Exercises begin in Block 2.',
  questions: []
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Exercises: Advanced Transition Relationships and Precision',
  description: '15 Questions (Questions 1–15) testing transition precision, addition vs consequence, contrast vs concession, and local vs global logic.',
  questions: [
    {
      questionNumber: 1,
      id: 'ch6-q1',
      difficulty: 'Medium',
      skillTag: 'Transition Logic - Addition',
      prompt: 'The researchers collected information from several surveys. ___, they conducted interviews with participants.',
      options: [
        'However',
        'Additionally',
        'Therefore',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second sentence adds another research method to the first.',
        whyCorrect: 'Option B ("Additionally") correctly signals that conducting interviews is an added research activity alongside collecting surveys.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Incorrectly signals a contrast where no contradiction exists.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Incorrectly presents the interviews as a result/conclusion rather than an added method.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Incorrectly implies that interviews replaced the surveys.' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ch6-q2',
      difficulty: 'Medium',
      skillTag: 'Transition Logic - Consequence',
      prompt: 'The region receives abundant sunlight. ___, solar energy has become an important source of electricity there.',
      options: [
        'Nevertheless',
        'Consequently',
        'In contrast',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second idea follows as a direct result or consequence of the abundant sunlight mentioned in the first.',
        whyCorrect: 'Option B ("Consequently") properly establishes the cause-and-effect relationship between abundant sunlight and solar energy adoption.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Incorrectly signals concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Incorrectly signals a comparison of differences.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Solar energy being important is a consequence, not a specific instance of sunlight.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch6-q3',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Contrast',
      prompt: 'The first experiment produced promising results. ___, a second experiment failed to reproduce those findings.',
      options: [
        'Furthermore',
        'For example',
        'However',
        'Similarly'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The outcome of the second experiment conflicts directly with the outcome of the first.',
        whyCorrect: 'Option C ("However") correctly introduces the contrasting and contradictory result of the second experiment.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Incorrectly signals addition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Failure to reproduce findings is not an example of promising results.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Failing to reproduce findings is opposite, not similar.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch6-q4',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Exemplification',
      prompt: 'Many species have developed ways to survive in extremely cold environments. ___, some Antarctic fish produce proteins that prevent ice formation in their blood.',
      options: [
        'For example',
        'Nevertheless',
        'Therefore',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence provides a specific instance (Antarctic fish producing anti-ice proteins) of the broader claim about cold adaptation.',
        whyCorrect: 'Option A ("For example") correctly connects the general statement to its specific illustration.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Incorrectly signals concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Incorrectly signals a cause-effect conclusion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Incorrectly signals simultaneous temporal action.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch6-q5',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Specification',
      prompt: 'The original method was inexpensive but required several hours to complete. The researchers therefore developed a faster alternative. ___, the new method reduced processing time substantially.',
      options: [
        'However',
        'As a result',
        'For example',
        'Specifically'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'The second sentence specifies the exact improvement made by the new method that was just mentioned.',
        whyCorrect: 'Option D ("Specifically") precisely introduces the detailed manner in which the new method fulfilled its goal of being faster.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Reducing processing time matches the goal of a faster alternative; there is no contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'As a result', whyWrong: 'Less precise than "specifically" because reducing processing time IS the faster alternative, not merely a secondary consequence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Less precise than "specifically" for detailing the exact mechanism.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ch6-q6',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Direct Contrast',
      prompt: 'The northern region experienced unusually heavy rainfall. ___, the southern region experienced a prolonged drought.',
      options: [
        'Similarly',
        'In contrast',
        'Therefore',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence directly compares two differing regional weather conditions.',
        whyCorrect: 'Option B ("In contrast") correctly highlights the stark difference between heavy rainfall in the north and drought in the south.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Similarly', whyWrong: 'Rainfall and drought are opposite, not similar.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Northern rainfall does not cause southern drought in this simple comparative statement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Drought in the south is not an example of heavy rainfall in the north.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch6-q7',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Consequence',
      prompt: 'The original hypothesis explained several observations. Recent evidence, however, has revealed results that the hypothesis cannot explain. ___, researchers have begun developing alternative models.',
      options: [
        'For example',
        'Consequently',
        'Similarly',
        'Meanwhile'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Developing new models is a direct response and consequence of the limitations revealed by recent evidence.',
        whyCorrect: 'Option B ("Consequently") accurately signals the logical result following the unexplainable findings.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For example', whyWrong: 'Developing models is an action taken, not an example of unexplainable results.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Incorrectly signals a parallel finding.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Fails to signal the cause-and-effect relationship.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch6-q8',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Chronology',
      prompt: 'The laboratory first tested the samples for contamination. ___, researchers measured their chemical composition.',
      options: [
        'Nevertheless',
        'Subsequently',
        'In contrast',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence describes a sequential procedure: testing for contamination happened first, and measuring chemical composition happened next.',
        whyCorrect: 'Option B ("Subsequently") accurately indicates that the second action occurred after the first step.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Incorrectly signals concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Incorrectly signals opposition between procedure steps.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Measuring chemical composition is a second step, not an example of contamination testing.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch6-q9',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Concession / Qualification',
      prompt: 'The new material is inexpensive to produce. ___, manufacturing it requires specialized equipment that many small facilities do not possess.',
      options: [
        'Furthermore',
        'Nevertheless',
        'Similarly',
        'Therefore'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second sentence introduces a limitation (requiring specialized equipment) that qualifies the advantage described in the first sentence (inexpensive to produce).',
        whyCorrect: 'Option B ("Nevertheless") captures the concession/qualification relationship between the material\'s low cost and its manufacturing obstacle.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Incorrectly treats a limitation as an additional advantage.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Incorrectly implies similarity between an advantage and a drawback.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Requiring specialized equipment is not a result of being inexpensive.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch6-q10',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Replacement',
      prompt: 'The researchers did not discard the original technique after discovering its limitations. ___, they modified it to address the problems identified during testing.',
      options: [
        'Instead',
        'Similarly',
        'Therefore',
        'For example'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second action (modifying the technique) replaced the alternative action that was not taken (discarding the technique).',
        whyCorrect: 'Option A ("Instead") correctly indicates replacement when one action occurs in place of another.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Modifying is an alternative to discarding, not a similar action.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Does not capture the negative-positive replacement structure ("did not X; instead Y").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Modifying is not an example of discarding.' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ch6-q11',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Parallelism / Similarity',
      prompt: 'The first study examined the effect of temperature on plant growth. The second study examined the effect of humidity. ___, both studies found that environmental conditions significantly influenced growth.',
      options: [
        'In contrast',
        'Similarly',
        'Nevertheless',
        'Subsequently'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both studies arrived at parallel conclusions regarding the influence of environmental conditions on growth.',
        whyCorrect: 'Option B ("Similarly") highlights the shared/parallel finding between the two independent studies.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In contrast', whyWrong: 'The studies agreed on the main finding; there is no contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Nevertheless', whyWrong: 'Incorrectly signals concession.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'Focuses on chronological sequence rather than the shared scientific finding.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ch6-q12',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Concession / Limitation',
      prompt: 'A city may invest heavily in public transportation. Such investment can reduce car dependence. ___, if routes are poorly designed, residents may continue to rely on private vehicles.',
      options: [
        'For example',
        'Nevertheless',
        'Similarly',
        'Subsequently'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The final sentence introduces a crucial limitation or qualification to the claim that public transit investment reduces car reliance.',
        whyCorrect: 'Option B ("Nevertheless") effectively introduces the qualifying condition that can undermine the expected benefit.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For example', whyWrong: 'Poor route design causing continued car reliance is a limitation, not an example of reduced car dependence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'The final sentence presents a opposing caveat, not a parallel benefit.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'Focuses incorrectly on pure chronological progression.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch6-q13',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Sequence',
      prompt: 'Which transition best completes the logical sequence?\n\n"Researchers first identified the unusual pattern. They then examined historical records to determine whether the pattern had occurred previously. ___, they compared the historical findings with their new observations."',
      options: [
        'However',
        'Subsequently',
        'Nevertheless',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The passage outlines a clear chronological research sequence: "first identified...", "then examined...", "___ compared..."',
        whyCorrect: 'Option B ("Subsequently") fits the next chronological step in the research timeline.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Incorrectly signals contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Nevertheless', whyWrong: 'Incorrectly signals concession.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Comparing findings is the next step in the procedure, not an example of examining records.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ch6-q14',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Conflict',
      prompt: 'Which transition best establishes the relationship?\n\n"Several studies report that the new treatment improves recovery time. ___, one large-scale trial found no significant difference between treated and untreated patients."',
      options: [
        'Furthermore',
        'For example',
        'However',
        'Therefore'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The large-scale trial finding ("no significant difference") conflicts directly with earlier studies reporting improved recovery time.',
        whyCorrect: 'Option C ("However") accurately signals the conflict between the trial result and preceding evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Incorrectly treats conflicting data as additional supporting data.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Finding no difference is not an example of improved recovery.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Incorrectly presents conflicting data as a logical conclusion.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch6-q15',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Global Flow / Consequence',
      prompt: 'Which transition best completes the paragraph?\n\n"Early researchers assumed that the species relied primarily on visual cues. Later observations revealed that the species also responds strongly to chemical signals. These findings changed scientists\' understanding of how the species locates food. ___, researchers now investigate whether chemical signals play an equally important role in other related species."',
      options: [
        'In contrast',
        'Consequently',
        'For example',
        'Meanwhile'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The current research direction (investigating chemical signals in related species) is a logical consequence of the revised scientific understanding.',
        whyCorrect: 'Option B ("Consequently") connects the paragraph\'s overarching conclusion to the new research direction it inspired.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In contrast', whyWrong: 'New research builds upon changed understanding rather than contrasting with it.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Investigating other species is a new application/direction, not a specific example of how food is located.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Ignores the causal continuation of the paragraph.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Exercises: Concession, Qualification, and Nuanced Contrast',
  description: '12 Questions (Questions 16–27) testing direct contrast, concession, qualification, scope limits, and unexpected outcomes.',
  questions: [
    {
      questionNumber: 16,
      id: 'ch6-q16',
      difficulty: 'Medium',
      skillTag: 'Nuanced Contrast - Direct Contrast',
      prompt: 'The northern region receives abundant rainfall. ___, the southern region is considerably drier.',
      options: [
        'Nevertheless',
        'In contrast',
        'Therefore',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Directly compares two differing geographic conditions (wet north vs dry south).',
        whyCorrect: 'Option B ("In contrast") correctly sets up the comparison between the two differing regions.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Concession is unnecessary here as the dry south is not surviving an obstacle from the north.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Northern rainfall does not cause southern dryness here.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'A dry southern region is not an example of abundant rainfall.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch6-q17',
      difficulty: 'Medium',
      skillTag: 'Nuanced Contrast - Concession',
      prompt: 'The procedure is relatively expensive. ___, researchers continue to use it because it produces highly reliable results.',
      options: [
        'Nevertheless',
        'For example',
        'Similarly',
        'Subsequently'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second statement remains true (researchers continue using it) despite the obstacle mentioned in the first (high cost).',
        whyCorrect: 'Option A ("Nevertheless") accurately conveys concession—the main action continues despite the drawback.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Continued use is not an example of expense.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Expense and continued use are opposing ideas, not similar ones.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'Fails to signal the concessive relationship.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch6-q18',
      difficulty: 'Hard',
      skillTag: 'Nuanced Contrast - Exception',
      prompt: 'Most of the surveyed students preferred online instruction. ___, a small group strongly preferred traditional classroom instruction.',
      options: [
        'Therefore',
        'However',
        'Similarly',
        'Subsequently'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The small group represents a contrasting exception to the general preference pattern among most students.',
        whyCorrect: 'Option B ("However") correctly introduces the exception to the broad survey result.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Therefore', whyWrong: 'Preferring traditional classroom is not a result of most preferring online.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'The preferences are opposite.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'Suggests a time sequence rather than a contrast in survey responses.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch6-q19',
      difficulty: 'Hard',
      skillTag: 'Nuanced Contrast - Expectation vs Reality',
      prompt: 'The researchers expected the revised method to reduce processing time. ___, processing actually became slower.',
      options: [
        'Instead',
        'Furthermore',
        'Similarly',
        'Consequently'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The actual outcome (slower processing) occurred in place of the expected outcome (faster processing).',
        whyCorrect: 'Option A ("Instead") captures the replacement of expected results by an opposing reality.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Furthermore', whyWrong: 'Incorrectly treats slower processing as an additional benefit.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Slower processing is opposite to expected reduction in time.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Consequently', whyWrong: 'Slower processing was not the intended consequence of expecting a reduction.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch6-q20',
      difficulty: 'Hard',
      skillTag: 'Nuanced Contrast - Qualification',
      prompt: 'The policy improved access to higher education. ___, its effects were less pronounced in remote communities.',
      options: [
        'Specifically',
        'Similarly',
        'However',
        'Therefore'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The second sentence does not refute the general improvement in access; it qualifies or limits the scope of the claim.',
        whyCorrect: 'Option C ("However") introduces the qualification narrowing the policy\'s success scope.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Specifically', whyWrong: 'Being "less pronounced" is a limitation, not a specific instance of improved access.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Lacking impact in remote areas is not similar to improving access.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Reduced impact in remote communities is not a result of improving overall access.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ch6-q21',
      difficulty: 'Elite',
      skillTag: 'Nuanced Contrast - Limitation',
      prompt: 'The first model accurately predicted most of the observed outcomes. ___, it failed to account for unusually severe events.',
      options: [
        'Nevertheless',
        'For example',
        'Meanwhile',
        'Therefore'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The model remains useful overall, but the writer acknowledges an important limitation.',
        whyCorrect: 'Option A ("Nevertheless") correctly signals the concessive contrast between overall accuracy and specific failure.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Failing to predict severe events is a limitation, not an example of accurate prediction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Meanwhile', whyWrong: 'Fails to signal the contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Failure is not a result of being accurate.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch6-q22',
      difficulty: 'Elite',
      skillTag: 'Nuanced Contrast - Replacement',
      prompt: 'The researchers initially planned to analyze the samples using the original technique. The technique proved unreliable. ___, they adopted a newer method.',
      options: [
        'Nevertheless',
        'Instead',
        'Similarly',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Adopting the newer method replaced the original plan after it proved unreliable.',
        whyCorrect: 'Option B ("Instead") accurately expresses replacement of the initial plan by the new action.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Adopting a new method was a sensible change due to unreliability, not something done "despite" unreliability.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Adopting a new method is a change, not a similar action.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Adopting a new method is not an example of unreliability.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch6-q23',
      difficulty: 'Elite',
      skillTag: 'Nuanced Contrast - Scope Limitation',
      prompt: 'The new treatment is effective for many patients. ___, researchers caution that its benefits may depend on the patient\'s age and medical history.',
      options: [
        'Furthermore',
        'In addition',
        'However',
        'Similarly'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The caution regarding age and medical history limits the broad claim of effectiveness.',
        whyCorrect: 'Option C ("However") introduces the qualification restricting the scope of the treatment\'s benefit.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Treats a cautionary limitation as an additional benefit.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In addition', whyWrong: 'Treats a cautionary limitation as an additional benefit.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'A caution is not similar to a broad declaration of effectiveness.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ch6-q24',
      difficulty: 'Elite',
      skillTag: 'Nuanced Contrast - Expectation vs Reality',
      prompt: 'The city expected the new transportation system to reduce commuting times. ___, average commuting times increased during the first year.',
      options: [
        'Instead',
        'Furthermore',
        'Similarly',
        'For example'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The actual outcome (increased commuting times) replaced and contradicted the expected outcome (reduced times).',
        whyCorrect: 'Option A ("Instead") correctly signals that the opposite result occurred in place of the expectation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Furthermore', whyWrong: 'Incorrectly treats an increased commute time as an additional expected benefit.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Increasing time is opposite to reducing time.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'An increase in time is not an example of reduced commuting times.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch6-q25',
      difficulty: 'Elite',
      skillTag: 'Nuanced Contrast - Persistence',
      prompt: 'The evidence supporting the hypothesis is limited. ___, several independent experiments have produced similar findings.',
      options: [
        'Nevertheless',
        'In contrast',
        'Instead',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The findings remain significant and notable despite the obstacle that overall evidence is limited.',
        whyCorrect: 'Option A ("Nevertheless") properly conveys concession—the independent findings hold value despite the limitation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'Less precise than concession when emphasizing that findings hold true despite limited evidence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Independent experiments do not replace limited evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Fails to signal the logical concession.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch6-q26',
      difficulty: 'Elite',
      skillTag: 'Nuanced Contrast - Subgroup Variation',
      prompt: 'The survey found that most participants favored the proposal. ___, the researchers noted that support was substantially lower among older participants.',
      options: [
        'However',
        'Consequently',
        'For example',
        'Similarly'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Identifies a subgroup exception/qualification (lower support among older participants) to the general majority finding.',
        whyCorrect: 'Option A ("However") introduces the qualification narrowing the general survey result.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Lower support among older people is not caused by overall majority support.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Substantially lower support is not an example of favoring the proposal.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Lower support is opposite to high overall favorability.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch6-q27',
      difficulty: 'Elite',
      skillTag: 'Nuanced Contrast - Explanation Limit',
      prompt: 'The first explanation accounts for the observed pattern under normal conditions. ___, it cannot explain the unusual results observed during the most recent experiment.',
      options: [
        'Nevertheless',
        'However',
        'Similarly',
        'Subsequently'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second sentence directly identifies a limitation of the first explanation.',
        whyCorrect: 'Option B ("However") directly introduces the limitation confronting the first explanation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'The sentence states a direct limitation rather than showing persistence despite an obstacle.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Inability to explain is not similar to accounting for patterns.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'Fails to convey the logical contrast.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Exercises: Cause, Effect, Evidence, and Logical Direction',
  description: '15 Questions (Questions 28–42) testing cause vs effect, evidence vs conclusion, and logical direction.',
  questions: [
    {
      questionNumber: 28,
      id: 'ch6-q28',
      difficulty: 'Medium',
      skillTag: 'Logical Direction - Cause to Effect',
      prompt: 'The region experienced severe flooding. ___, several roads were closed.',
      options: [
        'Nevertheless',
        'As a result',
        'Similarly',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Road closures were a direct physical consequence of the severe flooding.',
        whyCorrect: 'Option B ("As a result") correctly expresses the cause → effect relationship.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Road closures follow logically from flooding; there is no concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Road closures are a consequence of flooding, not a parallel event.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Road closures are a result, not a specific instance of flooding.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ch6-q29',
      difficulty: 'Medium',
      skillTag: 'Logical Direction - Problem to Response',
      prompt: 'The original sample was too small. ___, the researchers collected additional data.',
      options: [
        'Therefore',
        'However',
        'Similarly',
        'For example'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Collecting additional data was a direct logical response to the problem of a small sample.',
        whyCorrect: 'Option A ("Therefore") accurately connects the problem to the logical action taken in response.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Collecting data in response to a small sample is logical, not contrasting.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Collecting data is a response, not a similar condition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Collecting data is an action, not an example of a small sample.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch6-q30',
      difficulty: 'Hard',
      skillTag: 'Logical Direction - Claim to Evidence',
      prompt: 'The treatment appears promising. ___, patients receiving it showed faster recovery in several independent trials.',
      options: [
        'For example',
        'Nevertheless',
        'Instead',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence provides specific trial evidence supporting the broad claim that the treatment appears promising.',
        whyCorrect: 'Option A ("For example") properly introduces the supporting trial evidence.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Faster recovery supports "promising"; there is no contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Faster recovery does not replace "promising".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Fails to show that the second sentence is evidence for the first.' }
        ]
      }
    },
    {
      questionNumber: 31,
      id: 'ch6-q31',
      difficulty: 'Hard',
      skillTag: 'Logical Direction - Action to Explanation',
      prompt: 'The researchers repeated the experiment ___ the original results were inconsistent.',
      options: [
        'therefore',
        'because',
        'consequently',
        'accordingly'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second clause gives the reason (explanation) for why the researchers repeated the experiment.',
        whyCorrect: 'Option B ("because") correctly connects an action to its underlying cause/explanation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'therefore', whyWrong: 'Reverses the logic (would imply repeating caused inconsistent results).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'consequently', whyWrong: 'Reverses the logic (signals effect rather than reason).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'accordingly', whyWrong: 'Reverses the logic.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch6-q32',
      difficulty: 'Hard',
      skillTag: 'Logical Direction - Cause to Response',
      prompt: 'The original findings were inconsistent. ___, the researchers repeated the experiment.',
      options: [
        'Because',
        'Therefore',
        'Although',
        'Similarly'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Here the cause comes first ("findings inconsistent") and the result comes second ("repeated experiment").',
        whyCorrect: 'Option B ("Therefore") accurately connects the cause to the resulting action.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Because', whyWrong: 'Grammatically and logically incorrect at the start of the second sentence in this order.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Although', whyWrong: 'Incorrectly signals concession.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Incorrectly signals similarity.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch6-q33',
      difficulty: 'Hard',
      skillTag: 'Logical Direction - Evidence to Confidence',
      prompt: 'Several independent studies reached similar conclusions. ___, researchers became more confident that the result was reliable.',
      options: [
        'However',
        'Consequently',
        'Instead',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Increased confidence is a direct result following from accumulated independent evidence.',
        whyCorrect: 'Option B ("Consequently") accurately expresses the result following from consistent findings.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Increased confidence matches consistent conclusions; no contrast exists.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Incorrectly implies replacement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Becoming confident is a consequence, not a specific example of a study.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch6-q34',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Evidence to Conclusion',
      prompt: 'The treatment reduced symptoms in 80 percent of participants across three independent trials. ___, researchers concluded that the treatment warranted further investigation.',
      options: [
        'Nevertheless',
        'Accordingly',
        'Instead',
        'Meanwhile'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The conclusion to investigate further is drawn in a manner appropriate to the positive evidence established.',
        whyCorrect: 'Option B ("Accordingly") properly signals a conclusion or action taken in response to established facts.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Investigating further is logical after positive results, not done despite them.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Incorrectly implies replacement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Ignores the inferential connection.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ch6-q35',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Sentence Splitting',
      prompt: 'The researchers expanded the sample size because the original study involved too few participants. Which transition would best preserve the same logical relationship if the sentence were divided?',
      options: [
        'However',
        'For example',
        'For this reason',
        'Similarly'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In "Original study involved too few participants. ___, researchers expanded sample size," the first sentence provides the reason for the expansion.',
        whyCorrect: 'Option C ("For this reason") points backward to the insufficient sample size as the motivating reason.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Incorrectly signals contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Expanding sample size is a response, not an example of having too few participants.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Incorrectly signals similarity.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch6-q36',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Environmental Causation',
      prompt: 'The region received significantly less rainfall than usual. ___, agricultural output declined.',
      options: [
        'As a result',
        'Nevertheless',
        'Similarly',
        'For example'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Declining agricultural output is presented as a direct consequence of low rainfall.',
        whyCorrect: 'Option A ("As a result") correctly expresses the cause → effect relationship.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Decline in output follows drought logically.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Output decline is a result, not a similar event.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Agricultural decline is an outcome, not an example of rainfall.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch6-q37',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Evidence to Inference',
      prompt: 'The species survives in deserts, wetlands, and alpine environments. ___, scientists consider it unusually adaptable.',
      options: [
        'Therefore',
        'Instead',
        'However',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The conclusion that the species is adaptable is an inference drawn from the observational evidence.',
        whyCorrect: 'Option A ("Therefore") accurately connects evidence to conclusion.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Instead', whyWrong: 'Incorrectly implies replacement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Surviving in varied biomes supports being adaptable; no contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Fails to signal the logical deduction.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch6-q38',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Problem to Response',
      prompt: 'The researchers discovered that the original measurement method produced inconsistent results. ___, they developed a more precise procedure.',
      options: [
        'Accordingly',
        'Similarly',
        'For example',
        'Nevertheless'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Developing a more precise procedure was an action taken logically in response to the problem of inconsistent results.',
        whyCorrect: 'Option A ("Accordingly") appropriately signals an action taken in accordance with established evidence.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Developing a new procedure is a response to inconsistent results, not a similar problem.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Developing a procedure is a response, not an example of inconsistent results.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Developing a fix makes logical sense after discovering an error, rather than being a concessive surprise.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch6-q39',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Identification',
      prompt: 'Which transition best expresses evidence → conclusion?\n\n"Multiple independent trials produced nearly identical results. ___, the researchers considered the finding highly reliable."',
      options: [
        'For example',
        'Therefore',
        'In contrast',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second sentence ("researchers considered finding reliable") is an inference drawn from the evidence in the first sentence.',
        whyCorrect: 'Option B ("Therefore") correctly expresses evidence → conclusion.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For example', whyWrong: 'Expresses claim → evidence, which is the reverse direction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Expresses contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Expresses replacement.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ch6-q40',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Identification',
      prompt: 'Which transition best expresses cause → effect?\n\n"The city expanded its rail network substantially. ___, more residents began using public transportation."',
      options: [
        'As a result',
        'Nevertheless',
        'Similarly',
        'For example'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Increased transit use is a direct outcome of rail expansion.',
        whyCorrect: 'Option A ("As a result") directly expresses cause → effect.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Expresses concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Expresses similarity.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Expresses exemplification.' }
        ]
      }
    },
    {
      questionNumber: 41,
      id: 'ch6-q41',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Identification',
      prompt: 'Which transition best expresses claim → evidence?\n\n"The technology has become increasingly accessible to small businesses. ___, installation costs have fallen sharply over the past decade."',
      options: [
        'Therefore',
        'For instance',
        'Nevertheless',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Falling installation costs is specific evidence illustrating the general claim about accessibility.',
        whyCorrect: 'Option B ("For instance") correctly signals claim → evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Therefore', whyWrong: 'Expresses evidence → conclusion (wrong direction).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Nevertheless', whyWrong: 'Expresses concession.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Expresses replacement.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch6-q42',
      difficulty: 'Elite',
      skillTag: 'Logical Direction - Reasoning Chain',
      prompt: 'Which transition best completes the reasoning?\n\n"The initial survey included participants from only one city. The findings therefore could not reliably represent the national population. ___, the researchers conducted a nationwide survey."',
      options: [
        'Consequently',
        'Similarly',
        'For example',
        'Nevertheless'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Conducting a nationwide survey is a direct response and result following the identified limitation of the initial survey.',
        whyCorrect: 'Option A ("Consequently") correctly completes the reasoning chain from problem to response.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Incorrectly signals similarity.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Nationwide survey is an action taken, not an example of unreliable findings.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Fixing a recognized flaw is logical, not concessive.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Exercises: Addition, Continuation, Examples, and Evidence',
  description: '15 Questions (Questions 43–57) testing addition, continuation, similarity, examples, and evidence relationships.',
  questions: [
    {
      questionNumber: 43,
      id: 'ch6-q43',
      difficulty: 'Medium',
      skillTag: 'Addition Relationships - Advantage',
      prompt: 'The new system reduces energy consumption. ___, it requires less maintenance than the previous system.',
      options: [
        'However',
        'Additionally',
        'Instead',
        'Consequently'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second sentence adds another distinct advantage (less maintenance) to the first advantage (less energy).',
        whyCorrect: 'Option B ("Additionally") correctly introduces an added benefit.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Both points are positive; no contrast exists.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Less maintenance does not replace reduced energy consumption.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Consequently', whyWrong: 'Less maintenance is not caused by reduced energy consumption.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch6-q44',
      difficulty: 'Medium',
      skillTag: 'Example Relationships - Specific Instance',
      prompt: 'Many animals have developed strategies for surviving extreme temperatures. ___, some desert mammals remain underground during the hottest part of the day.',
      options: [
        'For example',
        'Nevertheless',
        'Similarly',
        'Therefore'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Remaining underground is a specific example illustrating the broad claim about survival strategies.',
        whyCorrect: 'Option A ("For example") properly connects the general claim to its specific instance.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Incorrectly signals concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Requires two parallel specific examples being compared.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Remaining underground is a specific strategy, not a conclusion.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch6-q45',
      difficulty: 'Hard',
      skillTag: 'Similarity Relationships - Parallel Findings',
      prompt: 'The first experiment found that the treatment improved concentration. ___, a second experiment reported improved performance on memory tasks.',
      options: [
        'Similarly',
        'Instead',
        'Therefore',
        'However'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second experiment produced a beneficial finding parallel to the finding of the first experiment.',
        whyCorrect: 'Option A ("Similarly") highlights the parallel nature of the two beneficial findings.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Instead', whyWrong: 'The second finding adds a parallel result rather than replacing the first.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Memory improvement is not caused by the first study\'s concentration finding.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'However', whyWrong: 'Both findings are positive; there is no contrast.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch6-q46',
      difficulty: 'Hard',
      skillTag: 'Addition Relationships - Data Collection',
      prompt: 'The researchers measured participants\' reaction times. ___, they recorded their accuracy on each task.',
      options: [
        'Additionally',
        'Nevertheless',
        'Therefore',
        'In contrast'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The researchers added another measurement (accuracy) to their initial measurement (reaction times).',
        whyCorrect: 'Option A ("Additionally") accurately indicates the addition of another research measurement.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Measuring accuracy is not done despite measuring reaction time.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Measuring accuracy is not a result of measuring reaction time.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In contrast', whyWrong: 'The two measurements are complementary parts of a study, not opposing facts.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch6-q47',
      difficulty: 'Hard',
      skillTag: 'Example Relationships - Specific Factor',
      prompt: 'Several factors influence coastal erosion. ___, rising sea levels can increase the rate at which shorelines retreat.',
      options: [
        'For example',
        'Similarly',
        'Therefore',
        'Nevertheless'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Rising sea levels is a specific example of one of the "several factors" affecting erosion.',
        whyCorrect: 'Option A ("For example") connects the general mention of factors to a concrete instance.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Requires a comparison between two specific factors.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Rising sea levels is a factor, not a conclusion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Incorrectly signals concession.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch6-q48',
      difficulty: 'Hard',
      skillTag: 'Addition Relationships - Extension',
      prompt: 'The policy improved access to transportation. ___, surveys found that commuting became more affordable for many residents.',
      options: [
        'Furthermore',
        'Instead',
        'However',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The survey finding adds reinforcing supporting information that extends the positive assessment of the policy.',
        whyCorrect: 'Option A ("Furthermore") properly introduces additional reinforcing evidence.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Instead', whyWrong: 'Affordable commuting supports improved access; it does not replace it.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Both sentences are positive benefits; no contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Focuses on timing rather than logical extension of argument.' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ch6-q49',
      difficulty: 'Elite',
      skillTag: 'Evidence Relationships - Supporting Observation',
      prompt: 'The researchers concluded that the species is highly adaptable. ___, populations have been observed surviving in environments ranging from grasslands to wetlands.',
      options: [
        'For example',
        'Nevertheless',
        'Accordingly',
        'Instead'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The observation of survival in varied biomes provides specific illustration/evidence supporting the claim that the species is adaptable.',
        whyCorrect: 'Option A ("For example") connects the claim to the specific supporting observation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Surviving in varied biomes supports adaptability, rather than conflicting with it.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Accordingly', whyWrong: 'Surviving in biomes is the evidence that leads to the conclusion, not a step taken accordingly.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Incorrectly implies replacement.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ch6-q50',
      difficulty: 'Elite',
      skillTag: 'Similarity Relationships - Parallel Study',
      prompt: 'The first study found that reduced sleep impaired concentration. ___, a separate study found that sleep deprivation also reduced participants\' accuracy on complex tasks.',
      options: [
        'Similarly',
        'Consequently',
        'Instead',
        'Nevertheless'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The separate study provides a parallel finding showing that sleep deprivation impairs cognitive performance.',
        whyCorrect: 'Option A ("Similarly") highlights the parallel nature of the findings across two separate studies.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'The separate study\'s finding was not caused by the first study\'s finding.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'The second study adds a parallel result rather than replacing the first.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Both studies show negative effects of sleep loss; there is no contrast.' }
        ]
      }
    },
    {
      questionNumber: 51,
      id: 'ch6-q51',
      difficulty: 'Elite',
      skillTag: 'Example Relationships - Specific Details',
      prompt: 'The new material has several practical advantages. ___, it is lightweight, inexpensive, and highly resistant to corrosion.',
      options: [
        'For example',
        'However',
        'Therefore',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The specific qualities (lightweight, inexpensive, corrosion-resistant) are concrete examples of the general "practical advantages".',
        whyCorrect: 'Option A ("For example") directly introduces the specific advantages illustrating the general statement.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'These details support "practical advantages"; no contrast exists.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Being lightweight is a specific quality, not a conclusion derived from having advantages.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Ignores the exemplification relationship.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch6-q52',
      difficulty: 'Elite',
      skillTag: 'Specification - Narrowing Attention',
      prompt: 'The researchers examined several characteristics of the new species. ___, they measured its growth rate and reproductive cycle.',
      options: [
        'Specifically',
        'Nevertheless',
        'Consequently',
        'Instead'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence narrows the general statement ("several characteristics") to the exact details examined.',
        whyCorrect: 'Option A ("Specifically") accurately signals narrowing attention to exact characteristics.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Measuring growth is not done despite examining characteristics.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'Measuring growth rate is the act of examination, not an effect caused by it.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Does not replace the examination.' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ch6-q53',
      difficulty: 'Elite',
      skillTag: 'Evidence Relationships - Specific Proof',
      prompt: 'The program has produced several measurable benefits. ___, graduation rates have increased among participating students.',
      options: [
        'For example',
        'In contrast',
        'Accordingly',
        'Instead'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Increased graduation rates serve as specific evidence illustrating one of the "measurable benefits".',
        whyCorrect: 'Option A ("For example") connects the general claim of benefits to a specific measurable instance.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'Increased graduation is a positive benefit; no contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Accordingly', whyWrong: 'Graduation rates are evidence of benefit, not an action taken in response.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Does not indicate replacement.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch6-q54',
      difficulty: 'Elite',
      skillTag: 'Addition Relationships - Reinforcing Finding',
      prompt: 'The first trial demonstrated that the procedure was feasible. ___, researchers found that the procedure could be completed with fewer resources than previously expected.',
      options: [
        'Moreover',
        'However',
        'Instead',
        'Subsequently'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second finding (fewer resources needed) strengthens the positive assessment by adding another key advantage.',
        whyCorrect: 'Option A ("Moreover") effectively introduces an additional reinforcing finding.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Requiring fewer resources is positive; no contrast with feasibility.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Fewer resources does not replace feasibility.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'Focuses on time order rather than building a persuasive addition.' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch6-q55',
      difficulty: 'Elite',
      skillTag: 'Similarity Relationships - Parallel Across Populations',
      prompt: 'The two studies examined different populations. ___, both reported a similar relationship between physical activity and memory.',
      options: [
        'Similarly',
        'Nevertheless',
        'Consequently',
        'Specifically'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The crucial relationship is the parallel finding reported by both studies despite differing populations.',
        whyCorrect: 'Option A ("Similarly") highlights the parallel findings across both studies.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'While populations differed, "similarly" directly highlights the parallel results.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'Reporting results was not caused by examining different populations.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Specifically', whyWrong: 'Fails to emphasize the parallel finding.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch6-q56',
      difficulty: 'Elite',
      skillTag: 'Example Relationships - Action Instance',
      prompt: 'The city has implemented several measures to reduce traffic congestion. ___, officials expanded bus service along several heavily traveled routes.',
      options: [
        'For instance',
        'Nevertheless',
        'Accordingly',
        'Instead'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Expanding bus service is a concrete example of one of the "several measures" implemented by the city.',
        whyCorrect: 'Option A ("For instance") introduces the specific measure illustrating the general statement.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Expanding bus service supports reducing congestion; no contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Accordingly', whyWrong: 'Less precise than "for instance" when providing a specific example of a measure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Does not indicate replacement.' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ch6-q57',
      difficulty: 'Elite',
      skillTag: 'Addition Relationships - Favorable Finding',
      prompt: 'The researchers found that the material retained its strength after repeated heating. ___, it remained stable when exposed to high levels of humidity.',
      options: [
        'Furthermore',
        'Instead',
        'However',
        'Therefore'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence adds another favorable experimental finding (stability under humidity) to the first (strength under heat).',
        whyCorrect: 'Option A ("Furthermore") introduces the additional supporting finding.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Instead', whyWrong: 'Humidity stability does not replace heat strength.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Both findings are positive qualities; no contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Humidity stability is not caused by heat resistance.' }
        ]
      }
    }
  ]
};
