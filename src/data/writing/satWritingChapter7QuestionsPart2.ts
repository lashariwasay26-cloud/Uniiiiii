import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Exercises: Precision Under Pressure',
  description: '15 Elite Questions on certainty ladders, scope ladders, temporal precision, negation, placement of "only", information order, and referential cohesion.',
  questions: [
    {
      questionNumber: 43,
      id: 'ch7-b4-q1',
      difficulty: 'Medium',
      skillTag: 'Certainty Ladder',
      prompt: 'Which word expresses the greatest certainty?',
      options: [
        'may',
        'might',
        'likely',
        'guarantees'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Guarantees" represents absolute 100% certainty, whereas "may", "might", and "likely" express varying degrees of possibility.',
        whyCorrect: 'Choice D is at the top of the certainty ladder.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'may', whyWrong: 'Cautious possibility.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'might', whyWrong: 'Cautious possibility.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'likely', whyWrong: 'Moderate probability.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'guarantees', whyWrong: 'Correct. Absolute certainty.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch7-b4-q2',
      difficulty: 'Medium',
      skillTag: 'Scope Ladder',
      prompt: 'Which choice has the broadest scope?',
      options: [
        'some',
        'several',
        'most',
        'all'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"All" encompasses 100% of a population, making it the broadest possible quantifier.',
        whyCorrect: 'Choice D represents total universal scope.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'some', whyWrong: 'Small or indefinite subset.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'several', whyWrong: 'Small number.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'most', whyWrong: 'Majority, but not all.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'all', whyWrong: 'Correct. Complete universal scope.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch7-b4-q3',
      difficulty: 'Medium',
      skillTag: 'Temporal Precision',
      prompt: 'Which word indicates that something happened before another event?',
      options: [
        'subsequently',
        'previously',
        'eventually',
        'currently'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Previously" explicitly refers to a prior timeframe.',
        whyCorrect: 'Choice B indicates prior occurrence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'subsequently', whyWrong: 'Indicates something happened AFTER.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'previously', whyWrong: 'Correct. Indicates prior occurrence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'eventually', whyWrong: 'Indicates occurrence after a delay.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'currently', whyWrong: 'Indicates present occurrence.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch7-b4-q4',
      difficulty: 'Hard',
      skillTag: 'Certainty Revision',
      prompt: 'The passage states:\n> The technique may improve accuracy.\n\nWhich revision changes the certainty?',
      options: [
        'The technique could improve accuracy.',
        'The technique might improve accuracy.',
        'The technique will improve accuracy.',
        'The technique may improve accuracy.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Could", "might", and "may" express possibility. "Will" replaces possibility with definite future certainty.',
        whyCorrect: 'Choice C changes cautious possibility into certainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The technique could improve accuracy.', whyWrong: 'Preserves possibility.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The technique might improve accuracy.', whyWrong: 'Preserves possibility.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The technique will improve accuracy.', whyWrong: 'Correct. Shifts from possibility to certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The technique may improve accuracy.', whyWrong: 'Unchanged.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch7-b4-q5',
      difficulty: 'Hard',
      skillTag: 'Evidence Overstatement',
      prompt: 'The passage states:\n> Several laboratories reproduced the result.\n\nWhich answer overstates the evidence?',
      options: [
        'Multiple laboratories reproduced the result.',
        'Several laboratories reproduced the result.',
        'The result was reproduced in several laboratories.',
        'All laboratories reproduced the result.'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'Replacing "several" with "all" expands a limited sample to 100% of all laboratories, overstating the evidence.',
        whyCorrect: 'Choice D introduces an unsupported universal claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Multiple laboratories reproduced the result.', whyWrong: 'Accurate equivalent.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Several laboratories reproduced the result.', whyWrong: 'Identical to passage.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The result was reproduced in several laboratories.', whyWrong: 'Passive voice restatement preserving evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'All laboratories reproduced the result.', whyWrong: 'Correct to identify. Overstates evidence.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch7-b4-q6',
      difficulty: 'Hard',
      skillTag: 'Referential Clarity',
      prompt: 'Which sentence has the clearest reference?',
      options: [
        'The researchers changed the procedure. This improved it.',
        'The researchers changed the procedure. This change improved efficiency.',
        'The researchers changed the procedure. This did something useful.',
        'The researchers changed the procedure. It was good.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Using "This change" provides a clear noun anchor for the reference pronoun "This".',
        whyCorrect: 'Choice B eliminates ambiguity by specifying "This change".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers changed the procedure. This improved it.', whyWrong: 'Vague standalone "This" and vague "it".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The researchers changed the procedure. This change improved efficiency.', whyWrong: 'Correct. "This change" provides explicit reference anchor.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers changed the procedure. This did something useful.', whyWrong: 'Vague "This" and vague "something useful".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers changed the procedure. It was good.', whyWrong: 'Vague "It".' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ch7-b4-q7',
      difficulty: 'Hard',
      skillTag: 'Cautious Conclusion',
      prompt: 'Evidence:\n> Participants who exercised regularly reported better sleep.\n\nWhich conclusion is most appropriately cautious?',
      options: [
        'Exercise caused better sleep.',
        'Exercise is associated with better reported sleep.',
        'Exercise guarantees better sleep.',
        'Exercise always improves sleep.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Self-reported survey data demonstrates association, not causation or guarantee.',
        whyCorrect: 'Choice B uses "associated with better reported sleep", reflecting observational limits.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Exercise caused better sleep.', whyWrong: 'Asserts unproven causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Exercise is associated with better reported sleep.', whyWrong: 'Correct. Appropriately cautious.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Exercise guarantees better sleep.', whyWrong: 'Absolute claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Exercise always improves sleep.', whyWrong: 'Universal claim.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ch7-b4-q8',
      difficulty: 'Elite',
      skillTag: 'Direct Support',
      prompt: 'Evidence:\n> The new material survived 50 heating cycles, whereas the old material survived 30.\n\nWhich statement is directly supported?',
      options: [
        'The new material is superior in every respect.',
        'The new material survived more heating cycles than the old material.',
        'The new material is cheaper.',
        'The new material will always outperform the old material.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The evidence establishes only a comparison of heating cycles survived (50 vs 30).',
        whyCorrect: 'Choice B states the exact supported comparison without expanding into price or universal superiority.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The new material is superior in every respect.', whyWrong: 'Expands heating cycles to "every respect".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The new material survived more heating cycles than the old material.', whyWrong: 'Correct. Directly supported by 50 vs 30.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The new material is cheaper.', whyWrong: 'Unmentioned price claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new material will always outperform the old material.', whyWrong: 'Un-evidenced universal claim.' }
        ]
      }
    },
    {
      questionNumber: 51,
      id: 'ch7-b4-q9',
      difficulty: 'Elite',
      skillTag: 'Isolating Causes',
      prompt: 'A paragraph states:\n> The number of visitors increased after the museum introduced free admission. However, the city also launched a major advertising campaign that year.\n\nWhich conclusion is most defensible?',
      options: [
        'Free admission caused the increase.',
        'Advertising caused the increase.',
        'Visitor numbers increased after free admission was introduced, but the evidence does not isolate the cause.',
        'Free admission had no effect.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Because free admission and advertising occurred simultaneously, the evidence cannot isolate which factor (or combination) caused the increase.',
        whyCorrect: 'Choice C notes the sequence while explicitly stating that causation cannot be isolated.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Free admission caused the increase.', whyWrong: 'Ignores advertising campaign.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Advertising caused the increase.', whyWrong: 'Ignores free admission.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Visitor numbers increased after free admission was introduced, but the evidence does not isolate the cause.', whyWrong: 'Correct. Defensible and complete.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Free admission had no effect.', whyWrong: 'Unsupported claim.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch7-b4-q10',
      difficulty: 'Elite',
      skillTag: 'Meaning Shift',
      prompt: 'Which choice changes the meaning most significantly?\nOriginal:\n> The researchers generally agreed with the hypothesis.',
      options: [
        'The researchers usually agreed with the hypothesis.',
        'The researchers generally supported the hypothesis.',
        'The researchers always agreed with the hypothesis.',
        'The researchers broadly agreed with the hypothesis.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Generally" allows for exceptions or minor disagreement. Changing it to "always" eliminates all exceptions, significantly changing meaning.',
        whyCorrect: 'Choice C changes general agreement to 100% absolute agreement.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers usually agreed with the hypothesis.', whyWrong: '"Usually" is synonymous with "generally".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The researchers generally supported the hypothesis.', whyWrong: 'Preserves general agreement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers always agreed with the hypothesis.', whyWrong: 'Correct to identify. Significantly alters certainty/exceptions.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers broadly agreed with the hypothesis.', whyWrong: '"Broadly" is synonymous with "generally".' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ch7-b4-q11',
      difficulty: 'Elite',
      skillTag: 'Numerical Meaning',
      prompt: 'Which sentence best preserves the numerical meaning?\nOriginal:\n> Production increased by 20%.',
      options: [
        'Production increased to 20%.',
        'Production increased by 20%.',
        'Production became 20% of its original amount.',
        'Production was 20 units higher.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Increased by 20%" represents relative growth rate. "Increased to 20%" means 20% is the new absolute total, and "20 units" changes percentage to units.',
        whyCorrect: 'Choice B preserves exact numerical meaning.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Production increased to 20%.', whyWrong: 'Alters meaning to target value.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Production increased by 20%.', whyWrong: 'Correct. Preserves relative growth.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Production became 20% of its original amount.', whyWrong: 'Implies an 80% reduction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Production was 20 units higher.', whyWrong: 'Confuses percentage with unit count.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch7-b4-q12',
      difficulty: 'Elite',
      skillTag: 'Mathematical Deduction',
      prompt: 'Evidence:\n• Method A took 40 minutes.\n• Method B took 60 minutes.\n\nWhich statement is supported?',
      options: [
        'Method A is 20 minutes faster than Method B.',
        'Method A is better in every respect.',
        'Method A is twice as efficient as Method B.',
        'Method B is inefficient.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '60 minutes minus 40 minutes equals 20 minutes. Method A taking 40 min vs Method B taking 60 min directly supports "Method A is 20 minutes faster".',
        whyCorrect: 'Choice A is mathematically exact and directly supported.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method A is 20 minutes faster than Method B.', whyWrong: 'Correct. 60 - 40 = 20.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method A is better in every respect.', whyWrong: 'Expands time to "every respect".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Method A is twice as efficient as Method B.', whyWrong: '40 min is not half of 60 min (30 min would be twice as fast).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method B is inefficient.', whyWrong: 'Subjective value judgment.' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch7-b4-q13',
      difficulty: 'Elite',
      skillTag: 'Strengthening Relationships',
      prompt: 'A passage states:\n> The policy was followed by a decline in emissions.\n\nWhich answer improperly strengthens the relationship?',
      options: [
        'Emissions declined after the policy was introduced.',
        'The policy was associated with a decline in emissions.',
        'The policy caused emissions to decline.',
        'A decline in emissions followed the policy.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Was followed by" expresses temporal sequence. Changing it to "caused" upgrades temporal sequence into direct causation.',
        whyCorrect: 'Choice C improperly strengthens sequence into causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Emissions declined after the policy was introduced.', whyWrong: 'Accurate temporal sequence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The policy was associated with a decline in emissions.', whyWrong: 'Accurate correlational/sequence phrasing.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The policy caused emissions to decline.', whyWrong: 'Correct to identify. Strengthens sequence into causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A decline in emissions followed the policy.', whyWrong: 'Accurate temporal sequence.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch7-b4-q14',
      difficulty: 'Elite',
      skillTag: 'Mixed Evidence Synthesis',
      prompt: 'A passage discusses three studies. Study 1 found a strong effect, Study 2 found a weak effect, and Study 3 found no statistically significant effect. Which synthesis is most accurate?',
      options: [
        'All three studies confirmed the effect.',
        'The studies produced mixed evidence regarding the effect.',
        'The studies proved that the effect exists.',
        'Two studies proved the effect while one was irrelevant.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When studies yield strong, weak, and non-significant results, "mixed evidence" accurately characterizes the overall body of research.',
        whyCorrect: 'Choice B represents the safest, most accurate synthesis of varied findings.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'All three studies confirmed the effect.', whyWrong: 'Contradicts Study 3\'s non-significant result.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The studies produced mixed evidence regarding the effect.', whyWrong: 'Correct. Accurately describes varied results.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The studies proved that the effect exists.', whyWrong: 'Ignores non-significant finding.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Two studies proved the effect while one was irrelevant.', whyWrong: 'Dismisses Study 3 as "irrelevant".' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ch7-b4-q15',
      difficulty: 'Elite',
      skillTag: 'Parallel Comparison Revision',
      prompt: 'A sentence reads:\n> Unlike previous studies, the researchers found no significant difference.\n\nWhich revision is best if the intended comparison is between the new study and previous studies?',
      options: [
        'Unlike previous studies, the new study found no significant difference.',
        'Unlike previous researchers, the new study found no significant difference.',
        'Unlike previous studies, researchers found no significant difference.',
        'Previous studies, unlike researchers, found no significant difference.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'To compare the new study with previous studies, the subject following the introductory modifier "Unlike previous studies" must be "the new study".',
        whyCorrect: 'Choice A creates a grammatically parallel comparison between "previous studies" and "the new study".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Unlike previous studies, the new study found no significant difference.', whyWrong: 'Correct. Parallel comparison of studies.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Unlike previous researchers, the new study found no significant difference.', whyWrong: 'Compares researchers with new study.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Unlike previous studies, researchers found no significant difference.', whyWrong: 'Compares studies with researchers.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Previous studies, unlike researchers, found no significant difference.', whyWrong: 'Compares studies with researchers.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Exercises: Advanced Sentence Architecture',
  description: '15 Elite Questions testing independent clause joining, dangling modifiers, parallel structures, comparison alignment, correlative structures, and multi-rule editing.',
  questions: [
    {
      questionNumber: 58,
      id: 'ch7-b5-q1',
      difficulty: 'Medium',
      skillTag: 'Clause Joining',
      prompt: 'Which sentence correctly joins two independent clauses?',
      options: [
        'The researchers repeated the test, the results improved.',
        'The researchers repeated the test; the results improved.',
        'The researchers repeated the test the results improved.',
        'The researchers repeated the test, and because.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A semicolon correctly links two independent clauses without creating a comma splice or run-on.',
        whyCorrect: 'Choice B uses a semicolon to join independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers repeated the test, the results improved.', whyWrong: 'Comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The researchers repeated the test; the results improved.', whyWrong: 'Correct. Proper semicolon usage.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers repeated the test the results improved.', whyWrong: 'Run-on sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers repeated the test, and because.', whyWrong: 'Fragmented ending.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ch7-b5-q2',
      difficulty: 'Medium',
      skillTag: 'Dangling Modifiers',
      prompt: 'Which sentence has a dangling modifier?',
      options: [
        'After reviewing the data, the researchers revised the report.',
        'After reviewing the data, the report was revised by the researchers.',
        'After reviewing the data, several errors were discovered.',
        'The researchers reviewed the data before revising the report.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In Choice C, "After reviewing the data" is followed by "several errors", implying that the errors reviewed the data.',
        whyCorrect: 'Choice C contains a dangling modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After reviewing the data, the researchers revised the report.', whyWrong: 'Correct subject "researchers" follows modifier.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After reviewing the data, the report was revised by the researchers.', whyWrong: 'Passive voice, but "report" is preceded by modifier.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After reviewing the data, several errors were discovered.', whyWrong: 'Correct to identify. "Several errors" cannot review data.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers reviewed the data before revising the report.', whyWrong: 'Active voice without modifier issues.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch7-b5-q3',
      difficulty: 'Medium',
      skillTag: 'Parallelism',
      prompt: 'Which sentence is most parallel?',
      options: [
        'The method is faster, cheaper, and more accurate.',
        'The method is faster, cheaper, and it improves accuracy.',
        'The method is faster, cheaper, and has greater accuracy.',
        'The method is faster, cheaper, and accuracy is improved.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Parallelism requires matching grammatical forms: comparative adjective + comparative adjective + comparative adjective ("faster, cheaper, and more accurate").',
        whyCorrect: 'Choice A maintains adjective parallelism across all three items.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The method is faster, cheaper, and more accurate.', whyWrong: 'Correct. Parallel adjectives.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The method is faster, cheaper, and it improves accuracy.', whyWrong: 'Breaks series with clause "it improves".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The method is faster, cheaper, and has greater accuracy.', whyWrong: 'Breaks series with verb phrase "has greater".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The method is faster, cheaper, and accuracy is improved.', whyWrong: 'Breaks series with passive clause.' }
        ]
      }
    },
    {
      questionNumber: 61,
      id: 'ch7-b5-q4',
      difficulty: 'Hard',
      skillTag: 'Logical Comparison',
      prompt: 'Which sentence most clearly compares two models?',
      options: [
        'The new model is more efficient than the old model\'s energy use.',
        'The new model has greater efficiency than the old model.',
        'The new model is more efficient than that of the old model.',
        'The new model\'s efficiency is greater than the old model.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Comparing two models requires comparing model to model. Choice B directly compares "the new model" with "the old model".',
        whyCorrect: 'Choice B compares model with model.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The new model is more efficient than the old model\'s energy use.', whyWrong: 'Compares model with energy use.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The new model has greater efficiency than the old model.', whyWrong: 'Correct. Compares model to model.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The new model is more efficient than that of the old model.', whyWrong: '"That of" adds unnecessary wordiness.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new model\'s efficiency is greater than the old model.', whyWrong: 'Compares efficiency with model.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch7-b5-q5',
      difficulty: 'Hard',
      skillTag: 'Modifier Attachment',
      prompt: 'Which sentence uses the modifier correctly?',
      options: [
        'Developed in 2020, researchers now use the instrument widely.',
        'Developed in 2020, the instrument is now widely used by researchers.',
        'Developing in 2020, the instrument was widely used.',
        'The researchers, developed in 2020, use the instrument.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory modifier "Developed in 2020" describes the instrument, so "the instrument" must immediately follow the comma.',
        whyCorrect: 'Choice B attaches the modifier to the correct noun ("the instrument").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Developed in 2020, researchers now use the instrument widely.', whyWrong: 'Implies researchers were developed in 2020.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Developed in 2020, the instrument is now widely used by researchers.', whyWrong: 'Correct. Modifier correctly attaches to "the instrument".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Developing in 2020, the instrument was widely used.', whyWrong: 'Active participle "Developing" is incorrect for a passive creation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers, developed in 2020, use the instrument.', whyWrong: 'Implies researchers were developed in 2020.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch7-b5-q6',
      difficulty: 'Hard',
      skillTag: 'Correlative Parallelism',
      prompt: 'Which sentence best maintains parallelism?',
      options: [
        'The researchers not only analyzed the samples but also identified new patterns.',
        'The researchers not only analyzed the samples but also new patterns.',
        'The researchers analyzed not only samples but also identified patterns.',
        'The researchers not only performed analysis but also the identification of patterns.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Correlative structures ("not only... but also...") require parallel grammatical elements after both parts: "not only [analyzed...] but also [identified...]".',
        whyCorrect: 'Choice A follows "not only" with a past-tense verb and "but also" with a past-tense verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers not only analyzed the samples but also identified new patterns.', whyWrong: 'Correct. Verb + object on both sides.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The researchers not only analyzed the samples but also new patterns.', whyWrong: 'Follows "not only" with verb phrase, "but also" with noun phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers analyzed not only samples but also identified patterns.', whyWrong: 'Follows "not only" with noun, "but also" with verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers not only performed analysis but also the identification of patterns.', whyWrong: 'Follows "not only" with verb, "but also" with noun phrase.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch7-b5-q7',
      difficulty: 'Hard',
      skillTag: 'Pronoun Reference',
      prompt: 'Which sentence best controls pronoun reference?',
      options: [
        'Researchers tested the samples before they were stored.',
        'Researchers tested the samples before storing them.',
        'Researchers tested the samples before they were stored by them.',
        'Researchers tested the samples before this happened.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Choice B replaces passive "they were stored" with active gerund "storing them", eliminating potential pronoun confusion.',
        whyCorrect: 'Choice B provides clear, active, concise phrasing.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers tested the samples before they were stored.', whyWrong: '"They" is slightly passive/vague.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Researchers tested the samples before storing them.', whyWrong: 'Correct. Clear gerund structure.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Researchers tested the samples before they were stored by them.', whyWrong: 'Clunky double pronoun "they... by them".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Researchers tested the samples before this happened.', whyWrong: 'Vague standalone "this".' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch7-b5-q8',
      difficulty: 'Elite',
      skillTag: 'Dangling Modifier Revision',
      prompt: 'Original:\n> After examining the equipment, the defect was discovered by the researchers.\n\nWhich revision is best?',
      options: [
        'After examining the equipment, the researchers discovered the defect.',
        'After examining the equipment, the defect was discovered.',
        'The defect, after examining the equipment, was discovered.',
        'Examining the equipment, the defect was discovered by them.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Who examined the equipment? The researchers. Placing "the researchers" immediately after the introductory clause fixes the dangling modifier.',
        whyCorrect: 'Choice A attaches "After examining the equipment" to "the researchers".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After examining the equipment, the researchers discovered the defect.', whyWrong: 'Correct. Correctly attaches modifier to researchers.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After examining the equipment, the defect was discovered.', whyWrong: 'Dangling modifier ("defect" examined equipment).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The defect, after examining the equipment, was discovered.', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Examining the equipment, the defect was discovered by them.', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 66,
      id: 'ch7-b5-q9',
      difficulty: 'Elite',
      skillTag: 'Correlative Parallelism & Meaning',
      prompt: 'Which sentence best preserves both parallelism and meaning?',
      options: [
        'The new system is not only faster but also more reliable.',
        'The new system is not only faster but also reliability is improved.',
        'The new system not only operates faster but also its reliability is greater.',
        'The new system is faster and also reliability.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"not only [adjective] but also [adjective]" ensures parallel syntax (faster... more reliable).',
        whyCorrect: 'Choice A maintains strict adjective-adjective parallelism.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The new system is not only faster but also more reliable.', whyWrong: 'Correct. Parallel adjectives.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The new system is not only faster but also reliability is improved.', whyWrong: 'Pairs adjective with independent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The new system not only operates faster but also its reliability is greater.', whyWrong: 'Pairs verb phrase with clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new system is faster and also reliability.', whyWrong: 'Ungrammatical pairing of adjective and noun.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ch7-b5-q10',
      difficulty: 'Elite',
      skillTag: 'Evidence Preservation',
      prompt: 'A study establishes that contamination **may have affected** the results. Which sentence preserves the evidence?',
      options: [
        'Contamination caused the unreliable results.',
        'Contamination definitely produced the unreliable results.',
        'Contamination may have affected the reliability of the results.',
        'Contamination proves that the results were invalid.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The modal phrase "may have affected" expresses cautious possibility. Changing it to "caused", "definitely produced", or "proves" overstates the evidence.',
        whyCorrect: 'Choice C preserves the exact degree of certainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Contamination caused the unreliable results.', whyWrong: 'Upgrades possibility to direct causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Contamination definitely produced the unreliable results.', whyWrong: 'Upgrades possibility to absolute certainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Contamination may have affected the reliability of the results.', whyWrong: 'Correct. Matches exact modal certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Contamination proves that the results were invalid.', whyWrong: 'Upgrades possibility to proof.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch7-b5-q11',
      difficulty: 'Elite',
      skillTag: 'Modifier Subject',
      prompt: 'Which sentence most clearly identifies the intended subject of the modifier?',
      options: [
        'While examining the fossils, several unusual markings were discovered.',
        'While examining the fossils, the researchers discovered several unusual markings.',
        'While examining the fossils, the markings were discovered.',
        'Examining the fossils, several markings appeared.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Who examined the fossils? The researchers. Placing "the researchers" immediately after the comma fixes the dangling modifier.',
        whyCorrect: 'Choice B attaches the introductory clause to "the researchers".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'While examining the fossils, several unusual markings were discovered.', whyWrong: 'Dangling modifier ("markings" examined fossils).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'While examining the fossils, the researchers discovered several unusual markings.', whyWrong: 'Correct. Properly attaches modifier to researchers.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'While examining the fossils, the markings were discovered.', whyWrong: 'Dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Examining the fossils, several markings appeared.', whyWrong: 'Dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch7-b5-q12',
      difficulty: 'Elite',
      skillTag: 'Concision & Nominalization',
      prompt: 'Which revision is most concise while preserving the logical structure?\n> Researchers conducted an analysis of the data and made a determination that the results were consistent.',
      options: [
        'Researchers conducted an analysis and made a determination.',
        'Researchers analyzed the data and determined that the results were consistent.',
        'Researchers did an analysis and determined consistency.',
        'Researchers made a determination about the data\'s consistency after conducting an analysis.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Replaces wordy nominalizations ("conducted an analysis", "made a determination") with active verbs ("analyzed", "determined").',
        whyCorrect: 'Choice B converts nominalizations into active verbs, maximizing concision and clarity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers conducted an analysis and made a determination.', whyWrong: 'Drops the finding ("results were consistent") completely.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Researchers analyzed the data and determined that the results were consistent.', whyWrong: 'Correct. Eliminates nominalizations while preserving finding.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Researchers did an analysis and determined consistency.', whyWrong: 'Awkward nominalization "did an analysis".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Researchers made a determination about the data\'s consistency after conducting an analysis.', whyWrong: 'Retains wordy nominalizations.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch7-b5-q13',
      difficulty: 'Elite',
      skillTag: 'Structural Control',
      prompt: 'Which sentence has the strongest structural control?',
      options: [
        'The study examined three regions, finding that rainfall differed among them.',
        'The study examined three regions, and rainfall differed, which was found.',
        'Examining three regions, rainfall was found to differ.',
        'The study, examining rainfall, three regions differed.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Choice A combines main clause ("The study examined three regions") with a clear participial phrase ("finding that..."), avoiding dangling modifiers and vague "which" clauses.',
        whyCorrect: 'Choice A exhibits strong structural control.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The study examined three regions, finding that rainfall differed among them.', whyWrong: 'Correct. Clear, controlled structure.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The study examined three regions, and rainfall differed, which was found.', whyWrong: 'Vague "which was found".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Examining three regions, rainfall was found to differ.', whyWrong: 'Dangling modifier ("rainfall" examined three regions).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The study, examining rainfall, three regions differed.', whyWrong: 'Ungrammatical, fractured construction.' }
        ]
      }
    },
    {
      questionNumber: 71,
      id: 'ch7-b5-q14',
      difficulty: 'Elite',
      skillTag: 'Essential Modifiers',
      prompt: 'Which sentence correctly uses an essential modifier?',
      options: [
        'The researchers who conducted the second trial revised the procedure.',
        'The researchers, who conducted the second trial revised the procedure.',
        'The researchers who conducted, the second trial revised the procedure.',
        'The researchers, who conducted the second trial, revised, the procedure.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'An essential restrictive modifier specifies *which* researchers and should NOT be set off by commas.',
        whyCorrect: 'Choice A integrates the essential clause without unnecessary commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The researchers who conducted the second trial revised the procedure.', whyWrong: 'Correct. Essential modifier without commas.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The researchers, who conducted the second trial revised the procedure.', whyWrong: 'Single unmatched comma.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers who conducted, the second trial revised the procedure.', whyWrong: 'Incorrect comma placement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers, who conducted the second trial, revised, the procedure.', whyWrong: 'Excessive commas breaking predicate.' }
        ]
      }
    },
    {
      questionNumber: 72,
      id: 'ch7-b5-q15',
      difficulty: 'Elite',
      skillTag: 'Multi-Problem Revision',
      prompt: 'Which revision best solves the multiple problems in the original?\n> After analyzing the samples, they discovered contamination, which possibly caused the unreliable results.',
      options: [
        'After analyzing the samples, they discovered contamination, which caused the results to be unreliable.',
        'After analyzing the samples, the researchers discovered contamination that may have affected the reliability of the results.',
        'The samples analyzed contamination, which possibly caused unreliable researchers.',
        'After the samples, researchers discovered contamination that definitely caused unreliable results.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The original suffers from ambiguous "they", vague "which", and un-qualifying "possibly caused". Choice B solves all three: "they" → "the researchers", "which" → "that", "possibly caused" → cautious "may have affected the reliability".',
        whyCorrect: 'Choice B simultaneously resolves pronoun ambiguity, modifier attachment, and modal precision.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After analyzing the samples, they discovered contamination, which caused the results to be unreliable.', whyWrong: 'Retains vague pronoun "they" and upgrades to absolute "caused".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After analyzing the samples, the researchers discovered contamination that may have affected the reliability of the results.', whyWrong: 'Correct. Solves all problems simultaneously.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The samples analyzed contamination, which possibly caused unreliable researchers.', whyWrong: 'Nonsensical modifier distortion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After the samples, researchers discovered contamination that definitely caused unreliable results.', whyWrong: 'Adds unsupported "definitely caused".' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Exercises: Integrated Passage Mastery',
  description: '15 Elite Questions on paragraph synthesis, transition categories, non-control limits, safe synthesis, population expansion, and combining multi-source notes.',
  questions: [
    {
      questionNumber: 73,
      id: 'ch7-b6-q1',
      difficulty: 'Medium',
      skillTag: 'Synthesis Function',
      prompt: 'A paragraph gives two examples supporting a general claim. What should a synthesis sentence do?',
      options: [
        'Introduce an unrelated topic.',
        'Combine the examples into an accurate broader statement.',
        'Reject both examples.',
        'Add an unsupported causal explanation.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A synthesis sentence combines separate supporting examples into a unified broader statement matching the general claim.',
        whyCorrect: 'Choice B correctly defines the function of synthesizing supporting examples.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Introduce an unrelated topic.', whyWrong: 'Off-topic.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Combine the examples into an accurate broader statement.', whyWrong: 'Correct. Synthesizes examples.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Reject both examples.', whyWrong: 'Contradicts the supporting role of examples.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Add an unsupported causal explanation.', whyWrong: 'Adds un-evidenced claims.' }
        ]
      }
    },
    {
      questionNumber: 74,
      id: 'ch7-b6-q2',
      difficulty: 'Medium',
      skillTag: 'Transition Identification',
      prompt: 'Which transition signals contrast?',
      options: [
        'Furthermore',
        'However',
        'Therefore',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"However" is the quintessential contrast transition.',
        whyCorrect: 'Choice B signals contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Addition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Correct. Contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Illustration.' }
        ]
      }
    },
    {
      questionNumber: 75,
      id: 'ch7-b6-q3',
      difficulty: 'Medium',
      skillTag: 'Transition Identification',
      prompt: 'Which transition signals result?',
      options: [
        'However',
        'Similarly',
        'Therefore',
        'For instance'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Therefore" indicates a result or consequence.',
        whyCorrect: 'Choice C signals result.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Similarity.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Correct. Result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For instance', whyWrong: 'Illustration.' }
        ]
      }
    },
    {
      questionNumber: 76,
      id: 'ch7-b6-q4',
      difficulty: 'Hard',
      skillTag: 'Accurate Synthesis',
      prompt: 'Notes:\n• A study examined 100 participants.\n• 70 reported improvement.\n• The study did not include a control group.\n\nWhich statement is most accurate?',
      options: [
        'The treatment caused improvement in 70% of participants.',
        'Seventy participants reported improvement, although the study lacked a control group.',
        'The treatment proved effective.',
        'The treatment works for most people.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must state 70 reported improvement while retaining the key limitation (lacked a control group).',
        whyCorrect: 'Choice B incorporates both the finding and the limitation without overclaiming causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The treatment caused improvement in 70% of participants.', whyWrong: 'Asserts causation impossible without a control group.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Seventy participants reported improvement, although the study lacked a control group.', whyWrong: 'Correct. Accurate synthesis with limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The treatment proved effective.', whyWrong: 'Unquantified overstatement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The treatment works for most people.', whyWrong: 'Expands 100 participants to "most people".' }
        ]
      }
    },
    {
      questionNumber: 77,
      id: 'ch7-b6-q5',
      difficulty: 'Hard',
      skillTag: 'Mixed Findings Synthesis',
      prompt: 'Two studies report different findings. Which synthesis is safest?',
      options: [
        'One study must be wrong.',
        'The studies provide mixed evidence.',
        'Both studies prove the same conclusion.',
        'The second study disproves the first.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When two studies report different findings, "mixed evidence" accurately describes the overall research state without falsely dismissing one.',
        whyCorrect: 'Choice B is the safest, most defensible synthesis.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'One study must be wrong.', whyWrong: 'Unjustified dismissal of data.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The studies provide mixed evidence.', whyWrong: 'Correct. Safely synthesizes conflicting findings.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Both studies prove the same conclusion.', whyWrong: 'False assertion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The second study disproves the first.', whyWrong: 'Unjustified conclusion.' }
        ]
      }
    },
    {
      questionNumber: 78,
      id: 'ch7-b6-q6',
      difficulty: 'Hard',
      skillTag: 'Population Expansion',
      prompt: 'A finding applies specifically to:\n> adults aged 65 and older.\n\nWhich statement improperly expands the population?',
      options: [
        'The finding applies to older adults.',
        'The finding was observed among adults aged 65 and older.',
        'The finding applies to all adults.',
        'The study involved older adults.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Expanding a finding from "adults 65 and older" to "all adults" illegally broadens the population boundary.',
        whyCorrect: 'Choice C improperly expands the population to all adults.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The finding applies to older adults.', whyWrong: 'Accurate equivalent.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The finding was observed among adults aged 65 and older.', whyWrong: 'Exact population.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The finding applies to all adults.', whyWrong: 'Correct to identify. Improperly expands population.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The study involved older adults.', whyWrong: 'Accurate equivalent.' }
        ]
      }
    },
    {
      questionNumber: 79,
      id: 'ch7-b6-q7',
      difficulty: 'Hard',
      skillTag: 'Sentence-Connecting Transition',
      prompt: 'A paragraph says:\n> The first trial produced strong results. The second trial produced similar results.\n\nWhich transition best connects the second sentence?',
      options: [
        'However',
        'Therefore',
        'Similarly',
        'Nevertheless'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Because both trials produced matching positive results, the relationship is similarity.',
        whyCorrect: 'Choice C ("Similarly") expresses matching results across trials.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Therefore', whyWrong: 'Result.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Correct. Expresses matching trial results.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Concessive contrast.' }
        ]
      }
    },
    {
      questionNumber: 80,
      id: 'ch7-b6-q8',
      difficulty: 'Elite',
      skillTag: 'Confounding Variable Synthesis',
      prompt: 'Notes:\n• Researchers observed lower energy use in buildings with the new insulation.\n• The buildings also had newer heating systems.\n• The study did not isolate the effect of insulation.\n\nWhich synthesis is best?',
      options: [
        'The insulation caused lower energy use.',
        'Buildings with the new insulation used less energy, although the study could not isolate the insulation\'s effect from other changes.',
        'New insulation always reduces energy use.',
        'Heating systems had no effect.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must report lower energy use alongside the caveat that new heating systems meant insulation\'s effect was not isolated.',
        whyCorrect: 'Choice B preserves observation and confounding limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The insulation caused lower energy use.', whyWrong: 'Ignores confounding heating systems.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Buildings with the new insulation used less energy, although the study could not isolate the insulation\'s effect from other changes.', whyWrong: 'Correct. Complete, accurate synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'New insulation always reduces energy use.', whyWrong: 'Universal claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Heating systems had no effect.', whyWrong: 'Unsupported claim.' }
        ]
      }
    },
    {
      questionNumber: 81,
      id: 'ch7-b6-q9',
      difficulty: 'Elite',
      skillTag: 'Magnitude Comparison',
      prompt: 'Notes:\n• Study A found a 15% increase.\n• Study B found a 5% increase.\n• Both examined the same phenomenon.\n\nWhich statement is best?',
      options: [
        'Both studies found an increase, although the magnitude differed.',
        'Both studies found identical increases.',
        'Study A disproved Study B.',
        'The phenomenon always increases by 15%.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Both studies agree on direction (increase) but differ on magnitude (15% vs 5%).',
        whyCorrect: 'Choice A notes directional agreement alongside magnitude difference.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Both studies found an increase, although the magnitude differed.', whyWrong: 'Correct. Preserves directional agreement and magnitude variance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Both studies found identical increases.', whyWrong: 'Falsely claims 15% = 5%.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Study A disproved Study B.', whyWrong: 'Different magnitudes do not constitute disproof.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The phenomenon always increases by 15%.', whyWrong: 'Ignores Study B\'s 5% finding.' }
        ]
      }
    },
    {
      questionNumber: 82,
      id: 'ch7-b6-q10',
      difficulty: 'Elite',
      skillTag: 'Problem-Solving Transition',
      prompt: 'A paragraph moves from an old technology to a newer technology that solves a limitation of the older one. Which transition is most appropriate?',
      options: [
        'Similarly',
        'In contrast',
        'For example',
        'Specifically'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Transitioning from a limited old technology to an improved new technology introduces a contrast between limitation and solution.',
        whyCorrect: 'Choice B ("In contrast") correctly signals the shift to a superior solution.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Similarly', whyWrong: 'Similarity ignores the improvement.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'Correct. Signals contrast between problem and solution.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Illustration.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Specifically', whyWrong: 'Elaboration.' }
        ]
      }
    },
    {
      questionNumber: 83,
      id: 'ch7-b6-q11',
      difficulty: 'Elite',
      skillTag: 'Caution & Confounding Factors',
      prompt: 'A passage states:\n> Researchers observed that trees grew faster in shaded plots. However, the study was conducted during an unusually dry season.\n\nWhich conclusion is most cautious?',
      options: [
        'Shade always increases tree growth.',
        'Shade caused faster growth.',
        'The observed relationship may have been influenced by conditions during the dry season.',
        'Dry seasons always increase tree growth.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The dry season is a potential confounding variable. A cautious conclusion acknowledges that dry conditions "may have influenced" the observed growth.',
        whyCorrect: 'Choice C reflects appropriate modal caution and acknowledges the dry season.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Shade always increases tree growth.', whyWrong: 'Universal claim ignoring dry season.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Shade caused faster growth.', whyWrong: 'Direct causation ignoring dry season.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The observed relationship may have been influenced by conditions during the dry season.', whyWrong: 'Correct. Cautious and accounts for dry season.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Dry seasons always increase tree growth.', whyWrong: 'Universal claim.' }
        ]
      }
    },
    {
      questionNumber: 84,
      id: 'ch7-b6-q12',
      difficulty: 'Elite',
      skillTag: 'Dual-Variable Synthesis',
      prompt: 'Which statement synthesizes these notes most accurately?\n• Method A: 40 minutes, 92% accuracy.\n• Method B: 60 minutes, 96% accuracy.',
      options: [
        'Method A is superior.',
        'Method B is superior.',
        'Method A is faster, whereas Method B is more accurate.',
        'Method A is faster and more accurate.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Method A has a speed advantage (40 vs 60 min), while Method B has an accuracy advantage (96% vs 92%).',
        whyCorrect: 'Choice C accurately contrasts the speed advantage of A with the accuracy advantage of B.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method A is superior.', whyWrong: 'Subjective value judgment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method B is superior.', whyWrong: 'Subjective value judgment.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Method A is faster, whereas Method B is more accurate.', whyWrong: 'Correct. Direct dual-variable contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method A is faster and more accurate.', whyWrong: 'False; B is more accurate.' }
        ]
      }
    },
    {
      questionNumber: 85,
      id: 'ch7-b6-q13',
      difficulty: 'Elite',
      skillTag: 'Historical to Modern Bridge',
      prompt: 'A paragraph discusses a historical invention and then explains its modern importance. Which sentence best bridges the two?',
      options: [
        'The inventor lived in a large city.',
        'Although the original device was simple, its underlying principle remains important in modern technology.',
        'The invention was documented in several newspapers.',
        'Many other inventions were created during the same period.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A bridge between history and modern importance must connect the historical device to modern technological relevance.',
        whyCorrect: 'Choice B links the original simple device to its modern technological principle.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The inventor lived in a large city.', whyWrong: 'Irrelevant biographical detail.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Although the original device was simple, its underlying principle remains important in modern technology.', whyWrong: 'Correct. Bridges historical device to modern technology.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The invention was documented in several newspapers.', whyWrong: 'Historical detail omitting modern relevance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Many other inventions were created during the same period.', whyWrong: 'General historical context.' }
        ]
      }
    },
    {
      questionNumber: 86,
      id: 'ch7-b6-q14',
      difficulty: 'Elite',
      skillTag: 'Observational Association',
      prompt: 'A study found an association between screen time and sleep disruption among teenagers. It did not establish causation. Which answer preserves the evidence?',
      options: [
        'Screen time causes sleep disruption.',
        'Screen time is associated with sleep disruption among teenagers.',
        'Screen time guarantees sleep disruption.',
        'Screen time is the reason teenagers sleep poorly.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must preserve observational association ("is associated with") and demographic scope ("among teenagers") without asserting causation.',
        whyCorrect: 'Choice B preserves association and population boundary.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Screen time causes sleep disruption.', whyWrong: 'Asserts causation forbidden by study limits.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Screen time is associated with sleep disruption among teenagers.', whyWrong: 'Correct. Preserves association and population.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Screen time guarantees sleep disruption.', whyWrong: 'Absolute guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Screen time is the reason teenagers sleep poorly.', whyWrong: 'Asserts sole causation.' }
        ]
      }
    },
    {
      questionNumber: 87,
      id: 'ch7-b6-q15',
      difficulty: 'Elite',
      skillTag: 'Multi-Study Synthesis',
      prompt: 'A paragraph contains:\n• one study showing improvement,\n• one study showing no significant effect,\n• and one study showing improvement only under specific conditions.\n\nWhich synthesis is strongest?',
      options: [
        'Research conclusively proves that the intervention works.',
        'Research conclusively proves that the intervention fails.',
        'The evidence is mixed, with some studies finding improvement and another finding no significant effect; the observed benefit may also depend on conditions.',
        'The studies contradict each other and are therefore useless.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A comprehensive synthesis must combine all three outcomes: improvement, no effect, and conditional improvement.',
        whyCorrect: 'Choice C synthesizes all three findings with appropriate nuances.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Research conclusively proves that the intervention works.', whyWrong: 'Ignores no-effect and conditional studies.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Research conclusively proves that the intervention fails.', whyWrong: 'Ignores positive studies.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The evidence is mixed, with some studies finding improvement and another finding no significant effect; the observed benefit may also depend on conditions.', whyWrong: 'Correct. Comprehensive 3-part synthesis.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The studies contradict each other and are therefore useless.', whyWrong: 'Dismissive overstatement.' }
        ]
      }
    }
  ]
};
