import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Exercises: Concision',
  description: '10 Questions (Questions 1–10) testing concision, removing redundancy, and avoiding empty wordiness.',
  questions: [
    {
      questionNumber: 1,
      id: 'ch5-q1',
      difficulty: 'Intermediate',
      skillTag: 'Concision - Redundancy',
      prompt: 'The researchers returned back to the laboratory after the experiment. Which revision is most concise?',
      options: [
        'The researchers returned back to the laboratory after the experiment.',
        'The researchers returned to the laboratory after the experiment.',
        'The researchers went back to return to the laboratory after the experiment.',
        'The researchers returned again back to the laboratory after the experiment.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The word "returned" already contains the meaning of going back. "Back" is redundant.',
        whyCorrect: 'Option B removes the redundant word "back" while preserving the exact meaning and proper grammar.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'returned back...', whyWrong: 'Contains redundant "back" after "returned".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'went back to return...', whyWrong: 'Highly repetitive and wordy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'returned again back...', whyWrong: 'Adds multiple redundant modifiers ("again", "back").' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ch5-q2',
      difficulty: 'Intermediate',
      skillTag: 'Concision - Wordy Phrases',
      prompt: 'The committee made a decision to reject the proposal. Which revision is most concise without changing the meaning?',
      options: [
        'The committee made a final decision to reject the proposal.',
        'The committee decided to reject the proposal.',
        'The committee was making a decision regarding rejecting the proposal.',
        'The committee made the decision that was to reject the proposal.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Decided" directly expresses the action represented by "made a decision."',
        whyCorrect: 'Option B replaces the wordy noun phrase "made a decision" with the direct verb "decided".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'made a final decision...', whyWrong: 'Adds unnecessary modifier "final".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'was making a decision regarding...', whyWrong: 'Increases wordiness with progressive tense and preposition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'made the decision that was to...', whyWrong: 'Creates an unnecessary clause.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch5-q3',
      difficulty: 'Intermediate',
      skillTag: 'Concision - Nominalization',
      prompt: 'The researchers conducted an analysis of the data to determine why the results differed. Which revision is most concise?',
      options: [
        'The researchers conducted an analysis of the data for the purpose of determining why the results differed.',
        'The researchers analyzed the data to determine why the results differed.',
        'The researchers made an analysis of the data to determine the reason why the results differed.',
        'The researchers conducted data analysis in order to determine the reason why the results differed.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Replaces the nominalization "conducted an analysis" with the direct verb "analyzed" and retains the purpose clause efficiently.',
        whyCorrect: 'Option B uses "analyzed" and "to determine", cutting all nominalization and unnecessary filler words.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'for the purpose of determining...', whyWrong: 'Replaces "to determine" with wordy "for the purpose of determining".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'made an analysis... the reason why...', whyWrong: 'Retains nominalization and wordy "the reason why".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'in order to determine the reason why...', whyWrong: 'Uses wordy "in order to" and "the reason why".' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch5-q4',
      difficulty: 'Hard',
      skillTag: 'Concision - Overlapping Time Modifiers',
      prompt: 'At this point in time, researchers do not currently have sufficient evidence to support the claim. Which revision is most concise while preserving the meaning?',
      options: [
        'At this point in time, researchers do not currently have sufficient evidence to support the claim.',
        'Currently, researchers do not currently have sufficient evidence to support the claim.',
        'Researchers do not currently have sufficient evidence to support the claim.',
        'Researchers do not have evidence at this point in time currently to support the claim.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The sentence already contains "currently", so "at this point in time" is completely redundant.',
        whyCorrect: 'Option C removes "At this point in time" and keeps "currently", maintaining perfect meaning without repetition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'At this point in time... currently...', whyWrong: 'Repeats present-time idea twice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Currently... currently...', whyWrong: 'Repeats "currently" twice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'at this point in time currently...', whyWrong: 'Stacks two identical time modifiers together.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch5-q5',
      difficulty: 'Hard',
      skillTag: 'Concision - Existential Openings',
      prompt: 'There are several researchers who believe that the proposed method is unreliable. Which revision is most direct?',
      options: [
        'There are several researchers who believe that the proposed method is unreliable.',
        'Several researchers believe that the proposed method is unreliable.',
        'Several researchers are people who believe that the proposed method is unreliable.',
        'There exist several researchers who believe that the proposed method is unreliable.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The direct subject "Several researchers" can immediately perform the verb "believe", eliminating "There are... who".',
        whyCorrect: 'Option B places the true subject in control at the start of the sentence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'There are several researchers who...', whyWrong: 'Uses wordy "There are... who" construction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are people who believe...', whyWrong: 'Adds redundant "are people who".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'There exist several researchers who...', whyWrong: 'Replaces "are" with "exist", keeping the weak opening.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ch5-q6',
      difficulty: 'Hard',
      skillTag: 'Concision - Verb Precision',
      prompt: 'The university provides assistance to students who need financial support. Which revision is most concise without unnecessarily changing the intended meaning?',
      options: [
        'The university assists students who need financial support.',
        'The university helps students financially.',
        'The university provides help to students with financial needs.',
        'The university gives assistance to students requiring support.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"Assists" directly replaces "provides assistance" while preserving the specific relationship with the students.',
        whyCorrect: 'Option A replaces "provides assistance to" with "assists" and retains "who need financial support".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'helps students financially', whyWrong: 'Changes the specific phrase "need financial support" to a broader claim.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'provides help to...', whyWrong: 'Wordy noun phrase substitution.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'gives assistance to...', whyWrong: 'Replaces "provides assistance" with equally wordy "gives assistance".' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch5-q7',
      difficulty: 'Elite',
      skillTag: 'Concision - Adverbial Redundancy',
      prompt: 'The researchers carefully examined the data in a detailed manner before publishing their conclusions. Which revision is most effective?',
      options: [
        'The researchers carefully examined the data in detail before publishing their conclusions.',
        'The researchers carefully examined the data before publishing their conclusions.',
        'The researchers examined the data in a detailed manner before publishing their conclusions.',
        'The researchers conducted a careful examination of the data before publishing their conclusions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Carefully" already communicates the manner of examination. "In a detailed manner" adds unnecessary repetition.',
        whyCorrect: 'Option B removes "in a detailed manner" because "carefully examined" already expresses the idea cleanly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'carefully examined... in detail', whyWrong: 'Combines "carefully" and "in detail", which overlap.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'examined... in a detailed manner', whyWrong: 'Uses wordy "in a detailed manner" instead of concise adverb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'conducted a careful examination', whyWrong: 'Uses nominalization "conducted an examination".' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch5-q8',
      difficulty: 'Elite',
      skillTag: 'Concision - Shared Subjects',
      prompt: 'The research team collected the data, and the research team analyzed the data. Which revision is most concise while preserving the meaning?',
      options: [
        'The research team collected and analyzed the data.',
        'The research team collected the data and the research team analyzed the data.',
        'The research team collected the data and analyzed the data separately.',
        'The research team, collecting the data, analyzed the data.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Both verbs share the same subject ("the research team") and object ("the data"), so repeated elements can be safely shared.',
        whyCorrect: 'Option A coordinates verbs "collected and analyzed" with a single shared subject and object.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'collected the data and the research team analyzed the data', whyWrong: 'Repeats both subject and object unnecessarily.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'analyzed the data separately', whyWrong: 'Adds "separately", changing the original meaning.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The research team, collecting...', whyWrong: 'Turns first action into a participle modifier.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch5-q9',
      difficulty: 'Elite',
      skillTag: 'Concision - Precision & Ambiguity',
      prompt: 'The program helps students prepare for university and scholarship opportunities. Which revision best eliminates the ambiguity created by the original sentence?',
      options: [
        'The program helps students prepare for university and scholarship opportunities.',
        'The program helps students prepare for university and identify scholarship opportunities.',
        'The program helps students with preparation for university and scholarship opportunities.',
        'The program provides assistance to students preparing for university and scholarship opportunities.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The original suggests students "prepare for scholarship opportunities." The revision supplies the missing logical verb "identify".',
        whyCorrect: 'Option B adds "identify", creating two parallel verb phrases governing different objects.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'prepare for university and scholarship opportunities', whyWrong: 'Retains ambiguous "prepare for scholarship opportunities".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'helps students with preparation for...', whyWrong: 'Increases wordiness with noun "preparation".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'provides assistance to students...', whyWrong: 'Uses wordy "provides assistance to" without fixing verb ambiguity.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch5-q10',
      difficulty: 'Elite',
      skillTag: 'Concision - Causal Phrases',
      prompt: 'The experiment was delayed due to the fact that the equipment had failed. Which revision is most concise?',
      options: [
        'The experiment was delayed because the equipment had failed.',
        'The experiment was delayed due to the equipment\'s failure that had occurred.',
        'The experiment had a delay because of the fact that the equipment had failed.',
        'The experiment was delayed on account of the fact that the equipment had failed.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"Because" expresses the causal relationship directly.',
        whyCorrect: 'Option A replaces "due to the fact that" with the single direct conjunction "because".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'due to the equipment\'s failure that had occurred', whyWrong: 'Wordy and adds redundant "that had occurred".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'had a delay because of the fact that', whyWrong: 'Retains "because of the fact that".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'on account of the fact that', whyWrong: 'Replaces one wordy phrase with another.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Exercises: Precision',
  description: '10 Questions (Questions 11–20) testing word choice, near-synonyms, quantifiers, and exact claim strength.',
  questions: [
    {
      questionNumber: 11,
      id: 'ch5-q11',
      difficulty: 'Intermediate',
      skillTag: 'Precision - Diction',
      prompt: 'Researchers ___ specialized software to analyze the data.',
      options: ['utilized', 'used', 'got', 'did use'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Used" directly expresses the ordinary action. "Utilized" adds unnecessary formality without adding precision.',
        whyCorrect: 'Option B is direct and precise for ordinary tool usage.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'utilized', whyWrong: 'Overly formal without adding semantic specificity.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'got', whyWrong: 'Imprecise and overly informal.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'did use', whyWrong: 'Unnecessarily emphatic.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ch5-q12',
      difficulty: 'Intermediate',
      skillTag: 'Precision - Near Synonyms',
      prompt: 'The researchers ___ the experimental method for use in rural laboratories.',
      options: ['adopted', 'adapted', 'implied', 'inferred'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The researchers modified the method for a new context. That is adapt.',
        whyCorrect: 'Option B correctly uses "adapted" (modified for a new situation).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'adopted', whyWrong: 'Means accepted or began using as-is, not modified.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'implied', whyWrong: 'Means suggested indirectly.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'inferred', whyWrong: 'Means deduced from evidence.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch5-q13',
      difficulty: 'Hard',
      skillTag: 'Precision - Near Synonyms',
      prompt: 'The university ___ the revised admissions policy last year.',
      options: ['adapted', 'adopted', 'inferred', 'implied'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The university accepted/began using the policy. That is adopt.',
        whyCorrect: 'Option B correctly uses "adopted" (officially accepted or put into effect).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'adapted', whyWrong: 'Means modified for a new purpose.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'inferred', whyWrong: 'Means concluded from evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'implied', whyWrong: 'Means suggested indirectly.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ch5-q14',
      difficulty: 'Hard',
      skillTag: 'Precision - Imply vs Infer',
      prompt: 'The results ___ that the method may be unreliable, although the researchers did not state this directly.',
      options: ['inferred', 'implied', 'adopted', 'adapted'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The results themselves can imply a conclusion. The reader or researcher would infer it.',
        whyCorrect: 'Option B is correct because the subject ("results") provides an indirect hint/suggestion.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'inferred', whyWrong: 'Results cannot "infer" (draw conclusions); only people do.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'adopted', whyWrong: 'Contextually meaningless here.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'adapted', whyWrong: 'Contextually meaningless here.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch5-q15',
      difficulty: 'Hard',
      skillTag: 'Precision - Causation vs Correlation',
      prompt: 'Because the two events occurred during the same period, the researchers concluded that the first event ___ the second. Which choice most accurately expresses a causal claim?',
      options: ['preceded', 'coincided with', 'caused', 'accompanied'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Only "caused" directly states that the first event produced the second.',
        whyCorrect: 'Option C explicitly asserts a causal relationship.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'preceded', whyWrong: 'Expresses chronology, not causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'coincided with', whyWrong: 'Expresses simultaneous timing, not causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'accompanied', whyWrong: 'Expresses association, not causation.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch5-q16',
      difficulty: 'Hard',
      skillTag: 'Precision - Sequence vs Causation',
      prompt: 'The university expanded its scholarship program. ___, enrollment increased. Which choice avoids unnecessarily asserting causation?',
      options: ['Therefore', 'Consequently', 'As a result', 'Afterward'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Afterward" establishes sequence without claiming that the scholarship expansion caused the enrollment increase.',
        whyCorrect: 'Option D denotes chronological order without assuming cause and effect.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Therefore', whyWrong: 'Asserts direct logical consequence/causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Asserts direct causal result.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'As a result', whyWrong: 'Asserts explicit causation.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch5-q17',
      difficulty: 'Elite',
      skillTag: 'Precision - Pronoun Antecedent Ambiguity',
      prompt: 'The university changed its scholarship policy because it was outdated. What is the primary precision problem?',
      options: [
        'The sentence uses unnecessary repetition.',
        'The pronoun "it" has an unclear antecedent.',
        'The verb "changed" is grammatically incorrect.',
        'The sentence lacks a subject.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"It" could refer to the university or the policy. The intended antecedent is probably the policy, but the sentence does not make that certain.',
        whyCorrect: 'Option B accurately diagnoses the ambiguous pronoun antecedent.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'uses unnecessary repetition', whyWrong: 'There is no repetition in the sentence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'verb changed is grammatically incorrect', whyWrong: '"Changed" is a completely valid past tense verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'lacks a subject', whyWrong: 'The sentence has clear subjects ("The university", "it").' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch5-q18',
      difficulty: 'Elite',
      skillTag: 'Precision - Comparative Specificity',
      prompt: 'The revised method is better than the original method. Which revision is most precise if the context establishes that speed is the criterion being evaluated?',
      options: [
        'The revised method is better than the original method.',
        'The revised method is more advantageous than the original method.',
        'The revised method is faster than the original method.',
        'The revised method is superior in a better way than the original method.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Faster" identifies the exact dimension of comparison rather than relying on the broad and potentially vague "better."',
        whyCorrect: 'Option C specifically names the criterion (speed) via "faster".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'better than', whyWrong: 'Retains vague adjective "better".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'more advantageous', whyWrong: 'Remains broad and vague.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'superior in a better way', whyWrong: 'Wordy and repetitive without specifying speed.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch5-q19',
      difficulty: 'Elite',
      skillTag: 'Precision - Causal Claims',
      prompt: 'Researchers found that the policy change coincided with a substantial increase in enrollment. Which revision would make the strongest causal claim?',
      options: [
        'The policy change preceded an increase in enrollment.',
        'The policy change accompanied an increase in enrollment.',
        'The policy change caused an increase in enrollment.',
        'The policy change occurred during an increase in enrollment.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Caused" explicitly states a causal relationship. The other choices describe timing or association.',
        whyCorrect: 'Option C uses "caused", making the strongest possible claim of causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'preceded', whyWrong: 'Claims timing (before), not cause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'accompanied', whyWrong: 'Claims association, not cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'occurred during', whyWrong: 'Claims simultaneous timing, not cause.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch5-q20',
      difficulty: 'Elite',
      skillTag: 'Precision - Scope & Qualifiers',
      prompt: 'The method is used primarily in rural laboratories. Which revision changes the meaning by removing an important qualifier?',
      options: [
        'The method is used in rural laboratories.',
        'The method is primarily used in rural laboratories.',
        'The method is used mostly in rural laboratories.',
        'The method is used mainly in rural laboratories.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The original says rural laboratories are the primary setting, not necessarily the only setting. Removing "primarily" changes the information being communicated.',
        whyCorrect: 'Option A deletes "primarily", converting a qualified claim into an unqualified one.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'primarily used', whyWrong: 'Keeps "primarily", preserving original scope.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'used mostly', whyWrong: '"Mostly" is a synonym for "primarily", keeping scope.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'used mainly', whyWrong: '"Mainly" is a synonym for "primarily", keeping scope.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Exercises: Modifier Placement',
  description: '8 Questions (Questions 21–28) testing dangling modifiers, misplaced adverbs, and relative clause attachment.',
  questions: [
    {
      questionNumber: 21,
      id: 'ch5-q21',
      difficulty: 'Intermediate',
      skillTag: 'Modifier Placement - Introductory Modifiers',
      prompt: 'After analyzing the data, ___ identified several inconsistencies.',
      options: [
        'several inconsistencies were',
        'the researchers',
        'it was',
        'there were'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The researchers must be the ones who analyzed the data. The logical actor must immediately follow the introductory modifier.',
        whyCorrect: 'Option B places "the researchers" immediately after the comma.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'several inconsistencies were', whyWrong: 'Dangling modifier: inconsistencies cannot analyze data.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it was', whyWrong: 'Dangling modifier: "it" cannot analyze data.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'there were', whyWrong: 'Dangling modifier: "there" cannot analyze data.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch5-q22',
      difficulty: 'Intermediate',
      skillTag: 'Modifier Placement - Past Participle',
      prompt: 'Designed for rural laboratories, ___ requires little maintenance.',
      options: [
        'the new device',
        'researchers found that the new device',
        'the laboratory\'s researchers said the device',
        'it was discovered that the device'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The device is what was designed.',
        whyCorrect: 'Option A places "the new device" immediately after the modifier.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'researchers found that...', whyWrong: 'Dangling modifier: researchers were not designed for laboratories.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the laboratory\'s researchers...', whyWrong: 'Dangling modifier: researchers were not designed.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it was discovered...', whyWrong: 'Dangling modifier: "it" was not designed.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch5-q23',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Target Identification',
      prompt: 'After reviewing the proposal, the committee rejected it. Which element does the introductory phrase modify?',
      options: ['proposal', 'it', 'committee', 'rejection'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The committee is performing the action of reviewing.',
        whyCorrect: 'Option C correctly identifies "committee" as the subject being modified.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'proposal', whyWrong: 'The proposal is the object being reviewed, not the reviewer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'it', whyWrong: '"It" refers to proposal, not the reviewer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'rejection', whyWrong: '"Rejection" is an abstract noun, not the actor.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ch5-q24',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Dangling Modifiers',
      prompt: 'Using specialized software, the researchers analyzed the data. Which revision creates a dangling modifier?',
      options: [
        'Using specialized software, the researchers analyzed the data.',
        'The researchers analyzed the data using specialized software.',
        'Using specialized software, the data was analyzed by the researchers.',
        'The researchers used specialized software to analyze the data.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The grammatical subject following the modifier is "data". Data cannot logically perform the action of using software.',
        whyCorrect: 'Option C creates a dangling modifier because "data" follows "Using specialized software".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Using specialized software, the researchers...', whyWrong: 'Correctly attaches modifier to "researchers".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The researchers analyzed the data using...', whyWrong: 'Correct sentence structure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers used specialized software...', whyWrong: 'Correct active sentence structure.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch5-q25',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Fixing Dangling Modifiers',
      prompt: 'After examining the evidence, it became clear that the method was unreliable. Which revision most clearly fixes the modifier problem?',
      options: [
        'After examining the evidence, it became clear that the method was unreliable.',
        'After examining the evidence, the researchers concluded that the method was unreliable.',
        'The evidence, after examining it, made the method unreliable.',
        'It became clear after examining the evidence that the method was unreliable.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The researchers are explicitly identified as the ones examining the evidence.',
        whyCorrect: 'Option B supplies the human subject "the researchers" immediately after the introductory phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'it became clear...', whyWrong: 'Retains dangling modifier attached to dummy pronoun "it".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The evidence, after examining it...', whyWrong: 'Suggests the evidence examined itself.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'It became clear after...', whyWrong: 'Keeps "it" as subject without logical actor.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch5-q26',
      difficulty: 'Elite',
      skillTag: 'Modifier Placement - Adverb Scope',
      prompt: 'Only the researchers who completed the additional training were permitted to operate the equipment. What does "only" restrict?',
      options: [
        'the equipment',
        'the operation',
        'researchers who completed the additional training',
        'the training'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The restriction applies to the group of researchers who completed the additional training.',
        whyCorrect: 'Option C correctly identifies the scope of "only" when placed directly before "the researchers".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the equipment', whyWrong: '"Only" is at the start of the sentence, not before "equipment".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the operation', whyWrong: '"Only" does not modify "operate".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the training', whyWrong: '"Only" modifies the researchers, not the training itself.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch5-q27',
      difficulty: 'Elite',
      skillTag: 'Modifier Placement - Relative Clause Attachment',
      prompt: 'The university announced a scholarship for students that covers full tuition. Which revision most clearly places the modifier?',
      options: [
        'The university announced a scholarship for students that covers full tuition.',
        'The university announced a scholarship that covers full tuition for students.',
        'The university announced for students a scholarship that covers full tuition.',
        'The university, which covers full tuition, announced a scholarship for students.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative clause directly follows "scholarship", clearly modifying the scholarship rather than the students.',
        whyCorrect: 'Option B places "that covers full tuition" immediately after "scholarship".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'for students that covers full tuition', whyWrong: 'Misplaces modifier next to "students", suggesting students cover tuition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'announced for students a scholarship...', whyWrong: 'Awkward word order.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The university, which covers full tuition...', whyWrong: 'Suggests the university covers tuition directly.' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ch5-q28',
      difficulty: 'Elite',
      skillTag: 'Modifier Placement - Passive Voice & Dangling Modifiers',
      prompt: 'After reviewing the evidence, there were several weaknesses in the proposal. Which revision is most effective?',
      options: [
        'After reviewing the evidence, there were several weaknesses in the proposal.',
        'After reviewing the evidence, several weaknesses in the proposal were identified.',
        'After reviewing the evidence, the committee identified several weaknesses in the proposal.',
        'The proposal, after reviewing the evidence, had several weaknesses.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The committee logically performs "reviewing". It also provides the actor for "identified".',
        whyCorrect: 'Option C places "the committee" as the subject performing the reviewing.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'there were several weaknesses...', whyWrong: 'Dangling modifier attached to existential "there".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'several weaknesses... were identified', whyWrong: 'Dangling modifier attached to "weaknesses".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The proposal, after reviewing...', whyWrong: 'Suggests proposal reviewed the evidence.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Exercises: Combining Ideas Efficiently',
  description: '10 Questions (Questions 29–38) testing coordination, subordination, semicolons, colons, and sentence boundaries.',
  questions: [
    {
      questionNumber: 29,
      id: 'ch5-q29',
      difficulty: 'Intermediate',
      skillTag: 'Sentence Structure - Compound Predicates',
      prompt: 'The researchers analyzed the data ___ identified several inconsistencies.',
      options: [', and they', 'and', '; and', ', however'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject "researchers" is shared, so the two verbs can be coordinated directly without a comma.',
        whyCorrect: 'Option B joins "analyzed" and "identified" into a simple compound predicate.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', and they', whyWrong: 'Unnecessary comma and pronoun when predicate is shared.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; and', whyWrong: 'Incorrect semicolon before coordinating conjunction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', however', whyWrong: 'Creates a comma splice/run-on structure.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch5-q30',
      difficulty: 'Intermediate',
      skillTag: 'Sentence Structure - Coordination',
      prompt: 'The equipment failed, ___ the experiment was delayed.',
      options: ['because', 'and', 'although', 'unless'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both clauses are independent, and comma + "and" (or comma + "so") correctly coordinates them.',
        whyCorrect: 'Option B provides comma + "and" joining two independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'because', whyWrong: 'Comma before "because" in this order creates awkward punctuation; "Because" at start is preferred.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'although', whyWrong: 'Creates contradictory contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'unless', whyWrong: 'Il-logical conditional connector.' }
        ]
      }
    },
    {
      questionNumber: 31,
      id: 'ch5-q31',
      difficulty: 'Hard',
      skillTag: 'Sentence Structure - Subordination',
      prompt: '___ the equipment failed, the experiment was delayed.',
      options: ['Because', 'And', '; Because', 'The equipment'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence requires a subordinating conjunction to establish causation.',
        whyCorrect: 'Option A introduces the cause via "Because".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'And', whyWrong: 'Sentence cannot start with "And" here to subordinate the clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; Because', whyWrong: 'Semicolon cannot start a sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The equipment', whyWrong: 'Creates a comma splice (two independent clauses joined only by comma).' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch5-q32',
      difficulty: 'Hard',
      skillTag: 'Sentence Structure - Semicolons & Transitions',
      prompt: 'The researchers analyzed the data; ___, they identified several inconsistencies.',
      options: ['however', 'because', 'although', 'while'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The semicolon separates two independent clauses, while "however" signals contrast.',
        whyCorrect: 'Option A correctly uses transitional adverb "however" following a semicolon.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'because', whyWrong: 'Subordinating conjunction after semicolon is ungrammatical.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'although', whyWrong: 'Subordinating conjunction after semicolon is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'while', whyWrong: 'Subordinating conjunction after semicolon is ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch5-q33',
      difficulty: 'Hard',
      skillTag: 'Sentence Structure - Combining Sentences',
      prompt: 'Which sentence correctly combines the two ideas? "The university created a research program. The program supports rural students."',
      options: [
        'The university created a research program, the program supports rural students.',
        'The university created a research program that supports rural students.',
        'The university created a research program, because supports rural students.',
        'The university created a research program; that supports rural students.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative clause efficiently modifies "research program".',
        whyCorrect: 'Option B uses "that supports rural students" to seamlessly combine the sentences.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'program, the program supports', whyWrong: 'Comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'because supports', whyWrong: 'Ungrammatical construction missing subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'program; that supports', whyWrong: 'Semicolon before dependent clause.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch5-q34',
      difficulty: 'Hard',
      skillTag: 'Sentence Structure - Causation Precision',
      prompt: 'Which sentence most clearly expresses causation?',
      options: [
        'The equipment failed, and the experiment was delayed.',
        'The equipment failed; the experiment was delayed.',
        'Because the equipment failed, the experiment was delayed.',
        'The equipment failed, while the experiment was delayed.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Only C explicitly establishes the causal relationship via "Because".',
        whyCorrect: 'Option C uses subordinating conjunction "Because".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'failed, and the experiment', whyWrong: 'Expresses coordination/sequence, not explicit cause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'failed; the experiment', whyWrong: 'Semicolon joins statements without naming cause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'failed, while the experiment', whyWrong: 'Expresses simultaneous contrast/timing.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ch5-q35',
      difficulty: 'Elite',
      skillTag: 'Sentence Structure - Contrast Efficiency',
      prompt: 'Which sentence most efficiently expresses contrast?',
      options: [
        'The method is inexpensive, but it is difficult to implement.',
        'The method is inexpensive but difficult to implement.',
        'The method is inexpensive, however it is difficult to implement.',
        'The method is inexpensive; but difficult to implement.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject is shared, so the repeated "it is" can be removed without losing meaning.',
        whyCorrect: 'Option B removes "it is" and comma, yielding "inexpensive but difficult to implement".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'inexpensive, but it is difficult', whyWrong: 'Wordier due to repeated subject and verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'inexpensive, however it is', whyWrong: 'Comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'inexpensive; but difficult', whyWrong: 'Semicolon before coordinating conjunction.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch5-q36',
      difficulty: 'Elite',
      skillTag: 'Sentence Structure - Semicolon Usage',
      prompt: 'Which sentence correctly uses a semicolon?',
      options: [
        'The researchers analyzed the data; because the results were inconsistent.',
        'The researchers analyzed the data; they identified several inconsistencies.',
        'The researchers analyzed; the data because the results were inconsistent.',
        'Because the researchers analyzed the data; they identified several inconsistencies.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both sides of the semicolon must be independent clauses.',
        whyCorrect: 'Option B has complete independent clauses on both sides of the semicolon.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '; because...', whyWrong: 'Semicolon used before dependent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'analyzed; the data...', whyWrong: 'Semicolon splits verb from object.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Because... data; they...', whyWrong: 'Semicolon used after dependent clause.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch5-q37',
      difficulty: 'Elite',
      skillTag: 'Sentence Structure - Chronology Control',
      prompt: 'The researchers repeated the experiment. They obtained similar results. Which revision most clearly emphasizes chronology?',
      options: [
        'The researchers repeated the experiment, and they obtained similar results.',
        'The researchers repeated the experiment; they obtained similar results.',
        'After repeating the experiment, the researchers obtained similar results.',
        'The researchers repeated the experiment because they obtained similar results.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"After" explicitly establishes that the second event followed the first.',
        whyCorrect: 'Option C uses "After repeating..." to establish clear chronological sequence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'repeated... and they obtained', whyWrong: 'Simple coordination, less emphatic for sequence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'repeated...; they obtained', whyWrong: 'Semicolon states facts without explicit time marker.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'repeated... because they obtained', whyWrong: 'Reverses logical cause and effect.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch5-q38',
      difficulty: 'Elite',
      skillTag: 'Sentence Structure - Causal Connectors',
      prompt: 'The researchers repeated the experiment. Their results became more reliable. Which revision most clearly expresses a causal relationship?',
      options: [
        'The researchers repeated the experiment, and their results became more reliable.',
        'After repeating the experiment, their results became more reliable.',
        'Because the researchers repeated the experiment, their results became more reliable.',
        'The researchers repeated the experiment; their results became more reliable.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Because" establishes causation.',
        whyCorrect: 'Option C uses "Because", explicitly declaring causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'repeated... and their results', whyWrong: 'Expresses addition/coordination.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After repeating...', whyWrong: 'Expresses chronology, not explicit cause; also has dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'repeated...; their results', whyWrong: 'Semicolon does not explicitly state cause.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Exercises: Parallel Structure',
  description: '10 Questions (Questions 39–48) testing matching forms across lists, correlative pairs, and comparisons.',
  questions: [
    {
      questionNumber: 39,
      id: 'ch5-q39',
      difficulty: 'Intermediate',
      skillTag: 'Parallel Structure - Infinitive Verbs',
      prompt: 'The program teaches students to research, analyze, and ___ evidence.',
      options: ['evaluating', 'evaluate', 'evaluation', 'evaluated'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The three actions are parallel infinitive/verb forms governed by "to".',
        whyCorrect: 'Option B provides "evaluate", matching "research" and "analyze".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'evaluating', whyWrong: 'Gerund form (-ing) breaks parallel infinitives.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'evaluation', whyWrong: 'Noun form breaks parallel verbs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'evaluated', whyWrong: 'Past tense verb breaks parallel base infinitives.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ch5-q40',
      difficulty: 'Intermediate',
      skillTag: 'Parallel Structure - Adjectives',
      prompt: 'The method is efficient, reliable, and ___.',
      options: ['affordability', 'afford', 'affordable', 'saves money'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The first two elements are adjectives ("efficient", "reliable"), so the third should also be an adjective.',
        whyCorrect: 'Option C provides "affordable", an adjective matching "efficient" and "reliable".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'affordability', whyWrong: 'Noun form breaks parallel adjectives.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'afford', whyWrong: 'Verb form breaks parallel adjectives.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'saves money', whyWrong: 'Verb phrase breaks parallel adjectives.' }
        ]
      }
    },
    {
      questionNumber: 41,
      id: 'ch5-q41',
      difficulty: 'Hard',
      skillTag: 'Parallel Structure - Past Tense Verbs',
      prompt: 'The researchers collected the data, analyzed the results, and ___ their findings.',
      options: ['publishing', 'publication of', 'published', 'to publish'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The coordinated verbs are: collected / analyzed / published.',
        whyCorrect: 'Option C provides "published" in simple past tense.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'publishing', whyWrong: 'Gerund breaks simple past tense series.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'publication of', whyWrong: 'Noun phrase breaks verb series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to publish', whyWrong: 'Infinitive breaks past tense series.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch5-q42',
      difficulty: 'Hard',
      skillTag: 'Parallel Structure - Infinitives',
      prompt: 'The university aims to increase access, improve instruction, and ___ costs.',
      options: ['reducing', 'reduce', 'reduction of', 'reduced'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'All three elements are infinitive/verb forms governed by "aims to".',
        whyCorrect: 'Option B provides "reduce", matching "increase" and "improve".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'reducing', whyWrong: 'Participle breaks infinitive structure.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'reduction of', whyWrong: 'Noun phrase breaks infinitive structure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'reduced', whyWrong: 'Past tense breaks infinitive structure.' }
        ]
      }
    },
    {
      questionNumber: 43,
      id: 'ch5-q43',
      difficulty: 'Hard',
      skillTag: 'Parallel Structure - Noun Phrases',
      prompt: 'The program provides both academic advising and ___.',
      options: [
        'helps students financially',
        'financial guidance',
        'advising students financially',
        'to provide financial assistance'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both elements following "both... and" must be parallel noun phrases: academic advising / financial guidance.',
        whyCorrect: 'Option B provides "financial guidance", matching "academic advising".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'helps students financially', whyWrong: 'Verb phrase after "and" paired with noun phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'advising students financially', whyWrong: 'Redundant and less balanced.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to provide financial assistance', whyWrong: 'Infinitive phrase paired with noun phrase.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch5-q44',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Correlative Pairs',
      prompt: 'The revised method is not only faster but also ___.',
      options: [
        'it is more reliable',
        'more reliable',
        'reliability is greater',
        'provides greater reliability'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The structure following "not only... but also" must match: faster / more reliable (both adjective phrases).',
        whyCorrect: 'Option B provides "more reliable", parallel to "faster".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'it is more reliable', whyWrong: 'Full clause paired with adjective phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'reliability is greater', whyWrong: 'Clause paired with adjective.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'provides greater reliability', whyWrong: 'Verb phrase paired with adjective.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch5-q45',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Gerund Comparisons',
      prompt: 'The researchers preferred analyzing the data to ___ the experiment.',
      options: ['repeat', 'repeated', 'repeating', 'repetition of'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Both sides of the comparison "prefer X to Y" use gerunds: analyzing / repeating.',
        whyCorrect: 'Option C provides "repeating", parallel to "analyzing".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'repeat', whyWrong: 'Base verb paired with gerund.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'repeated', whyWrong: 'Past participle paired with gerund.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'repetition of', whyWrong: 'Noun phrase paired with gerund.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch5-q46',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Three-Item Lists',
      prompt: 'Which revision produces the strongest parallel structure?',
      options: [
        'The university\'s goals are increasing access, to improve instruction, and reducing costs.',
        'The university\'s goals are to increase access, improving instruction, and to reduce costs.',
        'The university\'s goals are to increase access, improve instruction, and reduce costs.',
        'The university\'s goals are increasing access, improving instruction, and to reduce costs.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'All three elements must use the same infinitive structure governed by "to".',
        whyCorrect: 'Option C provides "to increase access, improve instruction, and reduce costs".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'increasing... to improve... reducing', whyWrong: 'Mixes gerunds and infinitives.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to increase... improving... to reduce', whyWrong: 'Mixes infinitives and gerunds.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'increasing... improving... to reduce', whyWrong: 'Mixes gerunds and infinitives.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch5-q47',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Either... Or',
      prompt: 'Which sentence correctly uses "either ... or"?',
      options: [
        'Students can either submit the form online or delivering it in person.',
        'Students can either submit the form online or deliver it in person.',
        'Students can either submitting the form online or deliver it in person.',
        'Students can either submission of the form online or deliver it in person.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The alternatives following "either" and "or" must be parallel base verbs: submit / deliver.',
        whyCorrect: 'Option B matches "submit" with "deliver".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'submit... or delivering', whyWrong: 'Mixes base verb with gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'submitting... or deliver', whyWrong: 'Mixes gerund with base verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'submission... or deliver', whyWrong: 'Mixes noun phrase with verb.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch5-q48',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Shared Infinitives',
      prompt: 'Which revision is most concise while preserving parallel structure?',
      options: [
        'The researchers wanted to collect the data, to analyze the results, and to publish their findings.',
        'The researchers wanted to collect the data, analyze the results, and publish their findings.',
        'The researchers wanted collecting the data, analyzing the results, and publishing their findings.',
        'The researchers wanted to collect the data, analysis of the results, and publishing their findings.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The shared infinitive marker "to" can govern all three coordinated verbs, eliminating unnecessary repetition of "to".',
        whyCorrect: 'Option B uses shared "to" governing "collect", "analyze", and "publish".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'to collect... to analyze... to publish', whyWrong: 'Unnecessarily repeats "to" three times.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'wanted collecting...', whyWrong: 'Ungrammatical after "wanted" (requires infinitives).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to collect... analysis... publishing', whyWrong: 'Mismatched grammatical forms.' }
        ]
      }
    }
  ]
};
