import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_11: WritingExerciseBlock = {
  blockNumber: 11,
  title: 'Block 11 Exercises: Final Review - Core Transition Rules',
  description: '5 Questions (Questions 128–132) testing key transition relationships in concise context.',
  questions: [
    {
      questionNumber: 128,
      id: 'ch6-q128',
      difficulty: 'Medium',
      skillTag: 'Review - Transition Addition',
      prompt: 'The telescope is relatively inexpensive. ___ It is also easy to operate.',
      options: [
        'However',
        'Moreover',
        'Therefore',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Adds a second positive characteristic (easy to operate) to the first (inexpensive).',
        whyCorrect: 'Option B ("Moreover") signals addition of another supporting feature.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'No contrast between two positive features.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Easy operation is not caused by low price.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'No replacement.' }
        ]
      }
    },
    {
      questionNumber: 129,
      id: 'ch6-q129',
      difficulty: 'Medium',
      skillTag: 'Review - Transition Result',
      prompt: 'Rainfall declined sharply during the summer. ___ Reservoir levels fell.',
      options: [
        'Similarly',
        'For example',
        'As a result',
        'Nevertheless'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Falling reservoir levels are a direct result of sharply declining rainfall.',
        whyCorrect: 'Option C ("As a result") signals cause and effect.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Similarly', whyWrong: 'Reservoir decline is an effect, not a similar event.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Reservoir decline is an effect, not an example of rainfall.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'No concession.' }
        ]
      }
    },
    {
      questionNumber: 130,
      id: 'ch6-q130',
      difficulty: 'Hard',
      skillTag: 'Review - Transition Example',
      prompt: 'Several species survive extreme temperatures. ___ One species remains active even below freezing.',
      options: [
        'For example',
        'Nevertheless',
        'Therefore',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A species remaining active below freezing is a specific instance illustrating survival in extreme temperatures.',
        whyCorrect: 'Option A ("For example") provides the specific instance.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'No concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'An example is not a conclusion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Incorrect temporal signal.' }
        ]
      }
    },
    {
      questionNumber: 131,
      id: 'ch6-q131',
      difficulty: 'Hard',
      skillTag: 'Review - Transition Similarity',
      prompt: 'The first experiment produced promising results. ___ The second experiment produced similar results.',
      options: [
        'In contrast',
        'Similarly',
        'Therefore',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second experiment yielded results comparable to the first.',
        whyCorrect: 'Option B ("Similarly") indicates parallel findings.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In contrast', whyWrong: 'Results are similar, not contrasting.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Second experiment results are not caused by the first.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'No replacement.' }
        ]
      }
    },
    {
      questionNumber: 132,
      id: 'ch6-q132',
      difficulty: 'Hard',
      skillTag: 'Review - Transition Contrast',
      prompt: 'The material is inexpensive to produce. ___ It requires specialized equipment.',
      options: [
        'However',
        'Therefore',
        'Similarly',
        'For example'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Requiring specialized equipment is a limitation that contrasts with low production cost.',
        whyCorrect: 'Option A ("However") signals contrasting limitation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Therefore', whyWrong: 'Requiring equipment is not caused by being inexpensive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Equipment requirement is a limitation, not a similar advantage.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Equipment requirement is a drawback, not an example of low cost.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_12: WritingExerciseBlock = {
  blockNumber: 12,
  title: 'Block 12 Exercises: Final Review - Rhetorical Synthesis Essentials',
  description: '5 Questions (Questions 133–137) testing synthesis purpose alignment and distractor avoidance.',
  questions: [
    {
      questionNumber: 133,
      id: 'ch6-q133',
      difficulty: 'Medium',
      skillTag: 'Review Synthesis - Exhibit Topic',
      prompt: 'Notes:\n• A museum opened in 1910.\n• It houses 40,000 artifacts.\n• Its new exhibit examines ancient trade routes.\n• The exhibit opens next month.\n\nThe writer wants to introduce the subject of the new exhibit. Which choice best accomplishes this goal?',
      options: [
        'The museum opened in 1910 and houses 40,000 artifacts.',
        'The museum\'s new exhibit examines ancient trade routes.',
        'The museum has housed artifacts for more than a century.',
        'The exhibit opens next month.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Directly introduces the subject (ancient trade routes) of the new exhibit.',
        whyCorrect: 'Option B explicitly states the topic of the new exhibit.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Opened in 1910...', whyWrong: 'Museum history.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Housed artifacts for century', whyWrong: 'Museum history.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Opens next month', whyWrong: 'Opening date, not subject.' }
        ]
      }
    },
    {
      questionNumber: 134,
      id: 'ch6-q134',
      difficulty: 'Medium',
      skillTag: 'Review Synthesis - Practical Outcome',
      prompt: 'Notes:\n• A city replaced old streetlights with LEDs.\n• LEDs consume less electricity.\n• The replacement reduced municipal energy costs.\n\nThe writer wants to explain the practical result. Which choice best accomplishes this goal?',
      options: [
        'The city replaced its old streetlights with LEDs.',
        'LEDs consume less electricity.',
        'Replacing the streetlights with LEDs reduced municipal energy costs.',
        'The city has modernized its lighting system.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Directly identifies reduced energy costs as the practical result.',
        whyCorrect: 'Option C highlights the financial savings outcome.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'City replaced streetlights', whyWrong: 'States action only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'LEDs consume less electricity', whyWrong: 'States mechanism.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Modernized lighting system', whyWrong: 'Vague summary.' }
        ]
      }
    },
    {
      questionNumber: 135,
      id: 'ch6-q135',
      difficulty: 'Hard',
      skillTag: 'Review Synthesis - Balanced Comparison',
      prompt: 'Notes:\n• Method A is inexpensive.\n• Method B is faster.\n• Both methods have similar accuracy.\n\nThe writer wants to compare the methods without implying that one is universally superior. Which choice best accomplishes this goal?',
      options: [
        'Method A is cheaper than Method B.',
        'Method B is faster than Method A.',
        'Method A is less expensive, whereas Method B is faster; both have similar accuracy.',
        'Method B is superior because it processes samples faster.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Compares the contrasting benefits while noting identical accuracy without asserting superior rank.',
        whyCorrect: 'Option C presents a balanced, non-judgmental comparison.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method A is cheaper', whyWrong: 'Incomplete.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method B is faster', whyWrong: 'Incomplete.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method B is superior...', whyWrong: 'Asserts superiority.' }
        ]
      }
    },
    {
      questionNumber: 136,
      id: 'ch6-q136',
      difficulty: 'Hard',
      skillTag: 'Review Synthesis - Evidence with Qualification',
      prompt: 'Notes:\n• A treatment improved recovery rates in three trials.\n• The trials involved different hospitals.\n• Researchers recommend additional testing.\n\nThe writer wants to present evidence that the treatment may be effective while maintaining appropriate caution. Which choice best accomplishes this goal?',
      options: [
        'The treatment has been proven effective.',
        'Three trials at different hospitals found improved recovery rates, although additional testing is still needed.',
        'Researchers recommend additional testing.',
        'The treatment improved recovery rates.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Pairs empirical recovery evidence with the required caveat ("although additional testing is still needed").',
        whyCorrect: 'Option B presents evidence and maintains appropriate scientific caution.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Proven effective', whyWrong: 'Overclaims.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Recommend testing', whyWrong: 'Omits evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Treatment improved', whyWrong: 'Omits caution.' }
        ]
      }
    },
    {
      questionNumber: 137,
      id: 'ch6-q137',
      difficulty: 'Hard',
      skillTag: 'Review Synthesis - Value with Uncertainty',
      prompt: 'Notes:\n• A crop requires less water.\n• It produces similar yields.\n• It was tested in four regions.\n• Long-term effects remain uncertain.\n\nThe writer wants to explain the crop\'s potential value while acknowledging uncertainty. Which choice best accomplishes this goal?',
      options: [
        'The crop was tested in four regions.',
        'The crop requires less water and produces similar yields, although its long-term effects remain uncertain.',
        'The crop is more efficient than conventional crops.',
        'Researchers remain uncertain about its future.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Captures key benefits (less water, similar yields) and acknowledges long-term uncertainty.',
        whyCorrect: 'Option B connects value to acknowledged uncertainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Tested in four regions', whyWrong: 'Testing location background.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'More efficient', whyWrong: 'Omits uncertainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Uncertain about future', whyWrong: 'Omits value.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_13: WritingExerciseBlock = {
  blockNumber: 13,
  title: 'Block 13 Exercises: Mastery Challenge - Hard Synthesis Tasks',
  description: '5 Questions (Questions 138–142) testing precision in prompt matching under strict constraints.',
  questions: [
    {
      questionNumber: 138,
      id: 'ch6-q138',
      difficulty: 'Hard',
      skillTag: 'Mastery Synthesis - Specific Date Focus',
      prompt: 'Notes:\n• A museum opened in 1924.\n• It contains more than 50,000 artifacts.\n• Its newest exhibition focuses on ancient ceramics.\n• The exhibition opens Friday.\n\nThe writer wants to state when the newest exhibition opens. Which choice best accomplishes this goal?',
      options: [
        'The museum, which opened in 1924, contains more than 50,000 artifacts.',
        'The museum\'s newest exhibition, which focuses on ancient ceramics, opens Friday.',
        'The museum contains an extensive collection of artifacts.',
        'The museum\'s newest exhibition focuses on ancient ceramics.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Directly answers the prompt requirement to state when the exhibition opens.',
        whyCorrect: 'Option B explicitly specifies opening on Friday.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Museum opened in 1924...', whyWrong: 'Museum founding year, not exhibition opening.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Contains extensive collection', whyWrong: 'Artifact count summary.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Focuses on ancient ceramics', whyWrong: 'Topic, not opening day.' }
        ]
      }
    },
    {
      questionNumber: 139,
      id: 'ch6-q139',
      difficulty: 'Hard',
      skillTag: 'Mastery Synthesis - Environmental Focus',
      prompt: 'Notes:\n• A city introduced electric buses in 2022.\n• The buses produce no tailpipe emissions.\n• The city operates 120 electric buses.\n• The buses serve several major routes.\n\nThe writer wants to emphasize the environmental benefit. Which choice best accomplishes this goal?',
      options: [
        'The city introduced 120 electric buses in 2022.',
        'The electric buses serve several major routes.',
        'Because they produce no tailpipe emissions, the city\'s electric buses offer an environmental benefit.',
        'The city\'s electric buses operate on several major routes.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Highlights zero tailpipe emissions as the core environmental benefit.',
        whyCorrect: 'Option C highlights the environmental benefit explicitly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'City introduced 120...', whyWrong: 'Fleet quantity/year.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Serve several major routes', whyWrong: 'Routes served.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Operate on major routes', whyWrong: 'Routes served.' }
        ]
      }
    },
    {
      questionNumber: 140,
      id: 'ch6-q140',
      difficulty: 'Hard',
      skillTag: 'Mastery Synthesis - Geographic Demographics',
      prompt: 'Notes:\n• Study A surveyed 300 participants.\n• Study B surveyed 500 participants.\n• Both studies found an association between exercise and improved sleep.\n• Study A occurred in Canada.\n• Study B occurred in Australia.\n\nThe writer wants to emphasize that the finding was observed in different populations. Which choice best accomplishes this goal?',
      options: [
        'Two studies found an association between exercise and improved sleep.',
        'Studies conducted in Canada and Australia both found an association between exercise and improved sleep.',
        'Study A surveyed 300 participants, while Study B surveyed 500.',
        'Researchers conducted two studies about exercise.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Specifies the two distinct countries (Canada and Australia) to show the finding held across different populations.',
        whyCorrect: 'Option B names Canada and Australia to show geographic population diversity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Two studies found...', whyWrong: 'Omits geographic locations.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Surveyed 300 vs 500', whyWrong: 'Compares sample sizes.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Conducted two studies', whyWrong: 'Vague background.' }
        ]
      }
    },
    {
      questionNumber: 141,
      id: 'ch6-q141',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Solution Mechanism',
      prompt: 'Notes:\n• Engineers developed a redesigned bridge support.\n• The original bridge experienced structural problems.\n• The redesigned support distributes weight more evenly.\n• Engineers tested the redesign under heavy loads.\n\nThe writer wants to explain how the redesign addressed the original problem. Which choice best accomplishes this goal?',
      options: [
        'Engineers developed a redesigned support after the original bridge experienced structural problems.',
        'Engineers tested the bridge support under heavy loads.',
        'The redesigned support distributes weight more evenly, addressing the structural problem experienced by the original bridge.',
        'The original bridge experienced structural problems before engineers developed a redesign.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Explains the physical mechanism (distributing weight more evenly) that solves the structural problem.',
        whyCorrect: 'Option C details the exact mechanism solving the original issue.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Engineers developed redesigned support...', whyWrong: 'Timeline sequence without explanation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Engineers tested under heavy loads', whyWrong: 'Testing procedure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Original experienced problems before...', whyWrong: 'Timeline sequence without explanation.' }
        ]
      }
    },
    {
      questionNumber: 142,
      id: 'ch6-q142',
      difficulty: 'Elite',
      skillTag: 'Mastery Synthesis - Principal Advantage Contrast',
      prompt: 'Notes:\n• Method A costs less than Method B.\n• Method B processes samples faster.\n• Both methods produce similar accuracy.\n\nThe writer wants to compare the principal advantages of the two methods. Which choice best accomplishes this goal?',
      options: [
        'Method A is less expensive, whereas Method B processes samples faster; both methods produce similar accuracy.',
        'Method A and Method B produce similar accuracy.',
        'Method B processes samples faster than Method A.',
        'Method A costs less than Method B.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Fully compares lower cost (Method A) with faster processing (Method B) alongside similar accuracy.',
        whyCorrect: 'Option A fulfills the comparison of advantages across both methods.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Produce similar accuracy', whyWrong: 'Shared accuracy only.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Method B processes faster', whyWrong: 'Method B advantage only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method A costs less', whyWrong: 'Method A advantage only.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_14: WritingExerciseBlock = {
  blockNumber: 14,
  title: 'Block 14 Exercises: Mastery Challenge - Elite Synthesis and Placement',
  description: '5 Questions (Questions 143–147) testing complex multi-variable synthesis and evidence evaluation.',
  questions: [
    {
      questionNumber: 143,
      id: 'ch6-q143',
      difficulty: 'Hard',
      skillTag: 'Elite Synthesis - Multicenter Evidence',
      prompt: 'Notes:\n• A new treatment was tested in three hospitals.\n• Patients receiving the treatment recovered faster.\n• The hospitals were located in different regions.\n• Researchers recommend further testing.\n\nThe writer wants to support the claim that the treatment may improve recovery. Which choice best accomplishes this goal?',
      options: [
        'Researchers tested a new treatment in three hospitals.',
        'Patients receiving the treatment recovered faster in three hospitals located in different regions.',
        'Researchers recommend further testing of the treatment.',
        'The three hospitals were located in different regions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Provides empirical evidence of faster recovery from trials conducted across regions.',
        whyCorrect: 'Option B presents the finding supporting improved recovery.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Tested in three hospitals', whyWrong: 'Testing background.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Recommend further testing', whyWrong: 'Recommendation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Hospitals in different regions', whyWrong: 'Geographic detail only.' }
        ]
      }
    },
    {
      questionNumber: 144,
      id: 'ch6-q144',
      difficulty: 'Hard',
      skillTag: 'Elite Synthesis - Environmental Benefit with Cost Caveat',
      prompt: 'Notes:\n• A company developed a biodegradable packaging material.\n• The material decomposes more quickly than conventional plastic.\n• It costs more to manufacture.\n• It was tested under several environmental conditions.\n\nThe writer wants to highlight the material\'s environmental advantage while acknowledging that it has a limitation. Which choice best accomplishes this goal?',
      options: [
        'The biodegradable material costs more to manufacture but decomposes more quickly than conventional plastic.',
        'The material was tested under several environmental conditions.',
        'The company developed biodegradable packaging.',
        'The biodegradable material costs more to manufacture.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Combines the environmental advantage (faster decomposition) with the cost limitation.',
        whyCorrect: 'Option A pairs the advantage and cost limitation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Tested under several conditions', whyWrong: 'Testing detail.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Company developed packaging', whyWrong: 'General intro.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Costs more to manufacture', whyWrong: 'Limitation only.' }
        ]
      }
    },
    {
      questionNumber: 145,
      id: 'ch6-q145',
      difficulty: 'Elite',
      skillTag: 'Elite Synthesis - Functional Distinction',
      prompt: 'Notes:\n• Researchers discovered that a bird species uses two different types of calls.\n• One call warns nearby birds of predators.\n• The other helps individuals maintain contact.\n• The species lives in dense forests.\n\nThe writer wants to explain the different functions of the calls. Which choice best accomplishes this goal?',
      options: [
        'The bird species lives in dense forests and uses two types of calls.',
        'One call warns birds of predators, whereas the other helps individuals maintain contact.',
        'Researchers discovered two types of calls used by the species.',
        'The species uses calls while living in dense forests.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Explains the distinct function of each call type (predator warning vs maintaining contact).',
        whyCorrect: 'Option B contrasts predator warning with maintaining contact.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Lives in dense forests...', whyWrong: 'Habitat and call count.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Discovered two types of calls', whyWrong: 'Discovery fact.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Uses calls while living...', whyWrong: 'Vague habitat connection.' }
        ]
      }
    },
    {
      questionNumber: 146,
      id: 'ch6-q146',
      difficulty: 'Elite',
      skillTag: 'Elite Synthesis - Principal Finding Focus',
      prompt: 'Notes:\n• A study examined whether background music affects concentration.\n• Participants completed tasks with and without music.\n• Participants performed slightly better without music.\n• The researchers controlled the volume and duration of the music.\n\nThe writer wants to summarize the study\'s principal finding. Which choice best accomplishes this goal?',
      options: [
        'Researchers controlled the volume and duration of the music.',
        'Participants completed tasks under two conditions.',
        'Participants performed slightly better without background music than with it.',
        'The study examined background music and concentration.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Directly states the primary finding/result of the experiment.',
        whyCorrect: 'Option C states the central finding directly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Controlled volume and duration', whyWrong: 'Methodological control detail.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Completed tasks under two conditions', whyWrong: 'Design condition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Examined background music...', whyWrong: 'Topic summary.' }
        ]
      }
    },
    {
      questionNumber: 147,
      id: 'ch6-q147',
      difficulty: 'Elite',
      skillTag: 'Elite Synthesis - Expanded Access Mechanism',
      prompt: 'Notes:\n• A regional rail system opened in 2010.\n• Passenger numbers increased steadily during its first decade.\n• The system added three new lines in 2018.\n• The new lines connected previously underserved neighborhoods.\n\nThe writer wants to explain how the rail system expanded access. Which choice best accomplishes this goal?',
      options: [
        'The regional rail system opened in 2010 and added three new lines in 2018.',
        'Passenger numbers increased during the system\'s first decade.',
        'In 2018, the system added three lines connecting previously underserved neighborhoods.',
        'The rail system experienced steady passenger growth.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Explains expanded access by highlighting the connection of previously underserved neighborhoods.',
        whyCorrect: 'Option C details how access was expanded to underserved neighborhoods.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Opened in 2010 and added 3 lines...', whyWrong: 'Timeline history.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Passenger numbers increased...', whyWrong: 'Growth statistic.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Experienced steady growth', whyWrong: 'General growth summary.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_15: WritingExerciseBlock = {
  blockNumber: 15,
  title: 'Block 15 Exercises: Chapter 6 Final Comprehensive Mastery Framework',
  description: '5 Questions (Questions 148–152) completing the full 152-question Chapter 6 exercise bank across all master rules.',
  questions: [
    {
      questionNumber: 148,
      id: 'ch6-q148',
      difficulty: 'Hard',
      skillTag: 'Final Mastery - Beneficiary Identification',
      prompt: 'Notes:\n• A university introduced a scholarship program.\n• The scholarship covers tuition and housing.\n• It is available to students from low-income families.\n• The university introduced the program in 2024.\n\nThe writer wants to explain who benefits from the scholarship. Which choice best accomplishes this goal?',
      options: [
        'The university introduced the scholarship program in 2024.',
        'The scholarship covers tuition and housing.',
        'The scholarship provides tuition and housing assistance to students from low-income families.',
        'The university introduced a new scholarship program.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Identifies the specific target population (students from low-income families) benefiting from the scholarship.',
        whyCorrect: 'Option C states who benefits from the scholarship.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Introduced in 2024', whyWrong: 'Year introduced.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Covers tuition and housing', whyWrong: 'Coverage details without specifying beneficiaries.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Introduced a new scholarship', whyWrong: 'General announcement.' }
        ]
      }
    },
    {
      questionNumber: 149,
      id: 'ch6-q149',
      difficulty: 'Hard',
      skillTag: 'Final Mastery - Environmental Advantage Contrast',
      prompt: 'Notes:\n• Researchers studied two species of trees.\n• Species A grows rapidly in warm climates.\n• Species B grows more slowly but tolerates colder temperatures.\n• Both species require substantial sunlight.\n\nThe writer wants to compare the principal environmental advantages of the two species. Which choice best accomplishes this goal?',
      options: [
        'Both species require substantial sunlight.',
        'Species A grows rapidly in warm climates, whereas Species B grows more slowly but tolerates colder temperatures.',
        'Researchers studied two species of trees.',
        'Species A grows rapidly.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Compares the distinct environmental advantages (warm climate rapid growth vs cold tolerance).',
        whyCorrect: 'Option B accurately compares environmental advantages.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Require substantial sunlight', whyWrong: 'Shared requirement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Studied two species', whyWrong: 'General intro.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Species A grows rapidly', whyWrong: 'Species A only.' }
        ]
      }
    },
    {
      questionNumber: 150,
      id: 'ch6-q150',
      difficulty: 'Elite',
      skillTag: 'Final Mastery - Economic Result',
      prompt: 'Notes:\n• A city replaced traditional streetlights with LED lights.\n• LED lights consume less electricity.\n• The replacement reduced municipal energy costs.\n• The city completed the replacement over three years.\n\nThe writer wants to show the practical result of the replacement. Which choice best accomplishes this goal?',
      options: [
        'The city replaced traditional streetlights with LED lights over three years.',
        'LED lights consume less electricity than traditional streetlights.',
        'Replacing traditional streetlights with LEDs reduced the city\'s energy costs.',
        'The city completed the replacement over three years.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Focuses on the practical economic result (reduced municipal energy costs).',
        whyCorrect: 'Option C highlights the practical cost-reduction result.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Replaced over three years', whyWrong: 'Timeline.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consume less electricity', whyWrong: 'Mechanism.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Completed replacement over three years', whyWrong: 'Timeline.' }
        ]
      }
    },
    {
      questionNumber: 151,
      id: 'ch6-q151',
      difficulty: 'Elite',
      skillTag: 'Final Mastery - Water Scarcity Utility',
      prompt: 'Notes:\n• Researchers developed a new drought-resistant crop.\n• The crop requires less water than conventional varieties.\n• It produced similar yields under normal conditions.\n• Field tests were conducted in four regions.\n\nThe writer wants to emphasize why the crop could be useful in water-scarce regions. Which choice best accomplishes this goal?',
      options: [
        'Researchers conducted field tests in four regions.',
        'The crop requires less water while maintaining similar yields under normal conditions.',
        'The researchers developed a new crop.',
        'The crop produced similar yields under normal conditions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Combines lower water demand with maintained yields—the key facts explaining utility in water-scarce regions.',
        whyCorrect: 'Option B highlights lower water requirement alongside yield stability.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Conducted field tests in four regions', whyWrong: 'Testing background.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Developed a new crop', whyWrong: 'General intro.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Produced similar yields...', whyWrong: 'Omits lower water requirement.' }
        ]
      }
    },
    {
      questionNumber: 152,
      id: 'ch6-q152',
      difficulty: 'Elite',
      skillTag: 'Final Mastery - Access Shift',
      prompt: 'Notes:\n• A historical archive digitized thousands of documents.\n• Previously, researchers had to visit the archive in person.\n• The digital collection can be accessed remotely.\n• The archive completed the project in 2025.\n\nThe writer wants to explain how digitization changed researchers\' access to the documents. Which choice best accomplishes this goal?',
      options: [
        'The archive digitized thousands of documents in 2025.',
        'Researchers previously had to visit the archive in person.',
        'Because the documents are now available digitally, researchers can access the collection remotely rather than visiting the archive in person.',
        'The archive completed a major digitization project.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Contrasts past in-person visits with new remote digital access.',
        whyCorrect: 'Option C details the transformation from physical in-person access to remote digital access.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Digitized thousands in 2025', whyWrong: 'Project date.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Previously had to visit in person', whyWrong: 'Past condition only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Completed major digitization project', whyWrong: 'General project statement.' }
        ]
      }
    }
  ]
};
