import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Exercises: Rhetorical Synthesis',
  description: '15 Questions (Questions 58–72) testing purpose identification, evidence selection, relevance filtering, and synthesis accuracy.',
  questions: [
    {
      questionNumber: 58,
      id: 'ch6-q58',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Purpose Stating Time',
      prompt: 'Notes:\n• A museum opened in 1924.\n• It contains more than 50,000 artifacts.\n• Its newest exhibition focuses on ancient ceramics.\n• The exhibition opens Friday.\n\nThe writer wants to state when the newest exhibition opens. Which choice best accomplishes this goal?',
      options: [
        'The museum, which opened in 1924, contains more than 50,000 artifacts.',
        'The museum\'s newest exhibition, which focuses on ancient ceramics, opens Friday.',
        'The museum contains an extensive collection of artifacts.',
        'The museum\'s newest exhibition focuses on ancient ceramics.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Directly accomplishes the stated goal of specifying when the exhibition opens.',
        whyCorrect: 'Option B explicitly states that the newest exhibition opens Friday.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The museum, which opened in 1924...', whyWrong: 'Omits when the newest exhibition opens.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The museum contains an extensive collection...', whyWrong: 'Fails to state when the exhibition opens.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The museum\'s newest exhibition focuses...', whyWrong: 'Focuses on topic rather than opening day.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ch6-q59',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Environmental Benefit',
      prompt: 'Notes:\n• A city introduced electric buses in 2022.\n• The buses produce no tailpipe emissions.\n• The city operates 120 electric buses.\n• The buses serve several major routes.\n\nThe writer wants to emphasize the environmental benefit. Which choice best accomplishes this goal?',
      options: [
        'The city introduced 120 electric buses in 2022.',
        'The electric buses serve several major routes.',
        'Because they produce no tailpipe emissions, the city\'s electric buses offer an environmental benefit.',
        'The city\'s electric buses operate on several major routes.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Foregrounds the absence of tailpipe emissions as the environmental benefit.',
        whyCorrect: 'Option C explicitly connects zero tailpipe emissions to the environmental benefit.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The city introduced 120...', whyWrong: 'States quantity and date, not environmental benefit.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The electric buses serve...', whyWrong: 'Describes routes served.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The city\'s electric buses operate...', whyWrong: 'Describes route operations.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch6-q60',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Geographic Population Comparison',
      prompt: 'Notes:\n• Study A surveyed 300 participants.\n• Study B surveyed 500 participants.\n• Both studies found an association between exercise and improved sleep.\n• Study A occurred in Canada.\n• Study B occurred in Australia.\n\nThe writer wants to emphasize that the finding was observed in different populations. Which choice best accomplishes this goal?',
      options: [
        'Two studies found an association between exercise and improved sleep.',
        'Studies conducted in Canada and Australia both found an association between exercise and improved sleep.',
        'Study A surveyed 300 participants, while Study B surveyed 500.',
        'Researchers conducted two studies about exercise.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Combines the common finding with the specific locations (Canada and Australia) representing different populations.',
        whyCorrect: 'Option B highlights that the finding held across different populations in Canada and Australia.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Two studies found...', whyWrong: 'Omits the detail about different geographic populations.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Study A surveyed 300...', whyWrong: 'Compares sample sizes rather than populations.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Researchers conducted two studies...', whyWrong: 'Vague background summary.' }
        ]
      }
    },
    {
      questionNumber: 61,
      id: 'ch6-q61',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Problem and Solution Mechanism',
      prompt: 'Notes:\n• Engineers developed a redesigned bridge support.\n• The original bridge experienced structural problems.\n• The redesigned support distributes weight more evenly.\n• Engineers tested the redesign under heavy loads.\n\nThe writer wants to explain how the redesign addressed the original problem. Which choice best accomplishes this goal?',
      options: [
        'Engineers developed a redesigned support after the original bridge experienced structural problems.',
        'Engineers tested the bridge support under heavy loads.',
        'The redesigned support distributes weight more evenly, addressing the structural problem experienced by the original bridge.',
        'The original bridge experienced structural problems before engineers developed a redesign.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Explains the mechanism (distributing weight more evenly) by which the redesign solves the structural problem.',
        whyCorrect: 'Option C connects problem, redesign, and mechanism directly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Engineers developed...', whyWrong: 'States sequence without explaining the mechanism.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Engineers tested...', whyWrong: 'Mentions testing rather than mechanism.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The original bridge experienced...', whyWrong: 'States chronological sequence only.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch6-q62',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Comparing Advantages',
      prompt: 'Notes:\n• Method A costs less than Method B.\n• Method B processes samples faster.\n• Both methods produce similar accuracy.\n\nThe writer wants to compare the principal advantages of the two methods. Which choice best accomplishes this goal?',
      options: [
        'Method A is less expensive, whereas Method B processes samples faster; both methods produce similar accuracy.',
        'Method A and Method B produce similar accuracy.',
        'Method B processes samples faster than Method A.',
        'Method A costs less than Method B.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Compares the contrasting advantages (cost vs speed) while noting similar accuracy.',
        whyCorrect: 'Option A presents the full comparison of advantages across both methods.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method A and Method B produce similar accuracy.', whyWrong: 'States similarity, not contrasting advantages.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Method B processes samples faster...', whyWrong: 'Describes Method B only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method A costs less...', whyWrong: 'Describes Method A only.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch6-q63',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Supporting Evidence',
      prompt: 'Notes:\n• A new treatment was tested in three hospitals.\n• Patients receiving the treatment recovered faster.\n• The hospitals were located in different regions.\n• Researchers recommend further testing.\n\nThe writer wants to support the claim that the treatment may improve recovery. Which choice best accomplishes this goal?',
      options: [
        'Researchers tested a new treatment in three hospitals.',
        'Patients receiving the treatment recovered faster in three hospitals located in different regions.',
        'Researchers recommend further testing of the treatment.',
        'The three hospitals were located in different regions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Provides direct evidence of faster recovery from trials across regions.',
        whyCorrect: 'Option B presents the empirical finding that directly supports improved recovery.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers tested...', whyWrong: 'Describes testing without mentioning recovery results.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Researchers recommend...', whyWrong: 'Mentions recommendations, not evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The three hospitals were located...', whyWrong: 'Gives geographic detail without evidence of recovery.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch6-q64',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Advantage with Qualification',
      prompt: 'Notes:\n• A company developed a biodegradable packaging material.\n• The material decomposes more quickly than conventional plastic.\n• It costs more to manufacture.\n• It was tested under several environmental conditions.\n\nThe writer wants to highlight the material\'s environmental advantage while acknowledging that it has a limitation. Which choice best accomplishes this goal?',
      options: [
        'The biodegradable material costs more to manufacture but decomposes more quickly than conventional plastic.',
        'The material was tested under several environmental conditions.',
        'The company developed biodegradable packaging.',
        'The biodegradable material costs more to manufacture.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Combines the environmental advantage (decomposes more quickly) with the manufacturing limitation (costs more).',
        whyCorrect: 'Option A balances both required elements (advantage + limitation).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'The material was tested...', whyWrong: 'Background testing detail.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The company developed...', whyWrong: 'General intro.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The biodegradable material costs more...', whyWrong: 'States limitation only.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch6-q65',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Functional Contrast',
      prompt: 'Notes:\n• Researchers discovered that a bird species uses two different types of calls.\n• One call warns nearby birds of predators.\n• The other helps individuals maintain contact.\n• The species lives in dense forests.\n\nThe writer wants to explain the different functions of the calls. Which choice best accomplishes this goal?',
      options: [
        'The bird species lives in dense forests and uses two types of calls.',
        'One call warns birds of predators, whereas the other helps individuals maintain contact.',
        'Researchers discovered two types of calls used by the species.',
        'The species uses calls while living in dense forests.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Explains the distinct function of each of the two call types.',
        whyCorrect: 'Option B contrasts predator warning with maintaining contact.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The bird species lives...', whyWrong: 'Mentions habitat rather than call functions.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Researchers discovered...', whyWrong: 'States discovery without explaining functions.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The species uses calls...', whyWrong: 'Vague mention of habitat.' }
        ]
      }
    },
    {
      questionNumber: 66,
      id: 'ch6-q66',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Principal Finding',
      prompt: 'Notes:\n• A study examined whether background music affects concentration.\n• Participants completed tasks with and without music.\n• Participants performed slightly better without music.\n• The researchers controlled the volume and duration of the music.\n\nThe writer wants to summarize the study\'s principal finding. Which choice best accomplishes this goal?',
      options: [
        'Researchers controlled the volume and duration of the music.',
        'Participants completed tasks under two conditions.',
        'Participants performed slightly better without background music than with it.',
        'The study examined background music and concentration.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Directly states the central result/finding of the experiment.',
        whyCorrect: 'Option C states the principal finding directly and accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers controlled volume...', whyWrong: 'Methodological control detail.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Participants completed tasks...', whyWrong: 'Describes conditions, not the finding.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The study examined...', whyWrong: 'States topic/objective rather than finding.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ch6-q67',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Explaining Expanded Access',
      prompt: 'Notes:\n• A regional rail system opened in 2010.\n• Passenger numbers increased steadily during its first decade.\n• The system added three new lines in 2018.\n• The new lines connected previously underserved neighborhoods.\n\nThe writer wants to explain how the rail system expanded access. Which choice best accomplishes this goal?',
      options: [
        'The regional rail system opened in 2010 and added three new lines in 2018.',
        'Passenger numbers increased during the system\'s first decade.',
        'In 2018, the system added three lines connecting previously underserved neighborhoods.',
        'The rail system experienced steady passenger growth.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Explains expanded access by highlighting the addition of lines connecting underserved neighborhoods.',
        whyCorrect: 'Option C identifies both the action (adding 3 lines) and whom it benefited (underserved neighborhoods).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The regional rail system opened...', whyWrong: 'Dates and timeline without mentioning expanded access to neighborhoods.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Passenger numbers increased...', whyWrong: 'Growth statistic.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The rail system experienced...', whyWrong: 'General growth summary.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch6-q68',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Program Beneficiaries',
      prompt: 'Notes:\n• A university introduced a scholarship program.\n• The scholarship covers tuition and housing.\n• It is available to students from low-income families.\n• The university introduced the program in 2024.\n\nThe writer wants to explain who benefits from the scholarship. Which choice best accomplishes this goal?',
      options: [
        'The university introduced the scholarship program in 2024.',
        'The scholarship covers tuition and housing.',
        'The scholarship provides tuition and housing assistance to students from low-income families.',
        'The university introduced a new scholarship program.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Identifies the intended beneficiaries (students from low-income families) and support provided.',
        whyCorrect: 'Option C explicitly states who benefits (low-income families).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The university introduced...', whyWrong: 'States year of introduction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The scholarship covers...', whyWrong: 'States what is covered without mentioning who benefits.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The university introduced a new...', whyWrong: 'General announcement.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch6-q69',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Environmental Advantages',
      prompt: 'Notes:\n• Researchers studied two species of trees.\n• Species A grows rapidly in warm climates.\n• Species B grows more slowly but tolerates colder temperatures.\n• Both species require substantial sunlight.\n\nThe writer wants to compare the principal environmental advantages of the two species. Which choice best accomplishes this goal?',
      options: [
        'Both species require substantial sunlight.',
        'Species A grows rapidly in warm climates, whereas Species B grows more slowly but tolerates colder temperatures.',
        'Researchers studied two species of trees.',
        'Species A grows rapidly.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Presents the meaningful contrast in environmental advantages (warm climate growth vs cold tolerance).',
        whyCorrect: 'Option B accurately compares the distinct environmental advantages of both species.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Both species require...', whyWrong: 'States shared requirement, not contrasting advantages.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Researchers studied...', whyWrong: 'General intro.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Species A grows rapidly.', whyWrong: 'Describes Species A only.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch6-q70',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Practical Result',
      prompt: 'Notes:\n• A city replaced traditional streetlights with LED lights.\n• LED lights consume less electricity.\n• The replacement reduced municipal energy costs.\n• The city completed the replacement over three years.\n\nThe writer wants to show the practical result of the replacement. Which choice best accomplishes this goal?',
      options: [
        'The city replaced traditional streetlights with LED lights over three years.',
        'LED lights consume less electricity than traditional streetlights.',
        'Replacing traditional streetlights with LEDs reduced the city\'s energy costs.',
        'The city completed the replacement over three years.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Directly states the practical economic result (reduced municipal energy costs).',
        whyCorrect: 'Option C highlights the direct practical outcome resulting from replacement.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The city replaced...', whyWrong: 'Describes action and timeline.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'LED lights consume less...', whyWrong: 'States mechanism/characteristic rather than result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The city completed...', whyWrong: 'States timeline.' }
        ]
      }
    },
    {
      questionNumber: 71,
      id: 'ch6-q71',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Application in Water Scarcity',
      prompt: 'Notes:\n• Researchers developed a new drought-resistant crop.\n• The crop requires less water than conventional varieties.\n• It produced similar yields under normal conditions.\n• Field tests were conducted in four regions.\n\nThe writer wants to emphasize why the crop could be useful in water-scarce regions. Which choice best accomplishes this goal?',
      options: [
        'Researchers conducted field tests in four regions.',
        'The crop requires less water while maintaining similar yields under normal conditions.',
        'The researchers developed a new crop.',
        'The crop produced similar yields under normal conditions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Combines lower water requirement with maintained yields—the key facts relevant to water scarcity.',
        whyCorrect: 'Option B highlights lower water usage alongside yield stability.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers conducted field tests...', whyWrong: 'Background testing detail.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The researchers developed...', whyWrong: 'General intro.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The crop produced similar yields...', whyWrong: 'Omits lower water requirement.' }
        ]
      }
    },
    {
      questionNumber: 72,
      id: 'ch6-q72',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Change in Access',
      prompt: 'Notes:\n• A historical archive digitized thousands of documents.\n• Previously, researchers had to visit the archive in person.\n• The digital collection can be accessed remotely.\n• The archive completed the project in 2025.\n\nThe writer wants to explain how digitization changed researchers\' access to the documents. Which choice best accomplishes this goal?',
      options: [
        'The archive digitized thousands of documents in 2025.',
        'Researchers previously had to visit the archive in person.',
        'Because the documents are now available digitally, researchers can access the collection remotely rather than visiting the archive in person.',
        'The archive completed a major digitization project.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Explicitly contrasts former in-person access with new remote digital access.',
        whyCorrect: 'Option C clearly details the change from in-person to remote digital access.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The archive digitized thousands...', whyWrong: 'States action and year.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Researchers previously had to visit...', whyWrong: 'States past condition only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The archive completed...', whyWrong: 'General project summary.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: Sentence Placement, Logical Flow, and Transition Precision',
  description: '10 Questions (Questions 73–82) testing sentence insertion, information flow, antecedents, and paragraph progression.',
  questions: [
    {
      questionNumber: 73,
      id: 'ch6-q73',
      difficulty: 'Medium',
      skillTag: 'Sentence Placement - Relevant Bridge',
      prompt: 'Researchers developed a new battery material. ___ The material can store more energy than conventional materials.\n\nWhich sentence best fits between the two?',
      options: [
        'The researchers began studying batteries several decades ago.',
        'The new material was tested under several operating conditions.',
        'Battery technology has changed substantially over time.',
        'Many unrelated materials have also been investigated.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Option B provides relevant information about testing the material before discussing its performance results.',
        whyCorrect: 'Testing under operating conditions naturally bridges the creation of the material and its proven energy storage capacity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Began studying decades ago', whyWrong: 'Irrelevant historical jump.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Battery technology changed', whyWrong: 'General background statement interrupting specific flow.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Unrelated materials', whyWrong: 'Off-topic distraction.' }
        ]
      }
    },
    {
      questionNumber: 74,
      id: 'ch6-q74',
      difficulty: 'Medium',
      skillTag: 'Sentence Placement - Immediate Cause',
      prompt: 'The city expanded its public transportation system. ___ As a result, commuting times decreased in several neighborhoods.\n\nWhich sentence best fits in the blank?',
      options: [
        'The expansion added several new bus routes.',
        'The city has existed for more than a century.',
        'Public transportation is used in many countries.',
        'The neighborhoods vary substantially in population.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Specifying the addition of new bus routes details the expansion leading directly to reduced commuting times.',
        whyCorrect: 'Option A provides the immediate development causing the "As a result" commuting time reduction.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'City existed for century', whyWrong: 'Irrelevant history.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Used in many countries', whyWrong: 'Irrelevant global generalization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Neighborhoods vary', whyWrong: 'Irrelevant population fact.' }
        ]
      }
    },
    {
      questionNumber: 75,
      id: 'ch6-q75',
      difficulty: 'Hard',
      skillTag: 'Sentence Placement - Survival Mechanism',
      prompt: 'Researchers found that the species survives extreme drought. ___ This adaptation may explain its ability to inhabit arid regions.\n\nWhich sentence best fits in the blank?',
      options: [
        'The species also reduces its metabolic activity during prolonged dry periods.',
        'The species was first studied in the nineteenth century.',
        'Several unrelated species inhabit the same region.',
        'Researchers used three different laboratories.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Explains the specific mechanism (reducing metabolic activity) that serves as "This adaptation" in the following sentence.',
        whyCorrect: 'Option A introduces the specific adaptation referenced immediately after by "This adaptation".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'First studied 19th century', whyWrong: 'History fact; not an adaptation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Unrelated species', whyWrong: 'Off-topic.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Three laboratories', whyWrong: 'Lab location detail; not an adaptation.' }
        ]
      }
    },
    {
      questionNumber: 76,
      id: 'ch6-q76',
      difficulty: 'Hard',
      skillTag: 'Sentence Placement - Problem Reasoning',
      prompt: 'The first experiment produced inconsistent results. ___ Therefore, the researchers repeated the experiment using a larger sample.\n\nWhich sentence best fits in the blank?',
      options: [
        'The researchers suspected that the small sample contributed to the inconsistency.',
        'The experiment was conducted in a laboratory.',
        'The equipment was manufactured several years earlier.',
        'Similar experiments have been conducted elsewhere.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Provides the logical reasoning connecting inconsistent results to the decision to use a larger sample.',
        whyCorrect: 'Option A identifies the suspected cause (small sample) justifying "Therefore... larger sample".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Conducted in lab', whyWrong: 'Generic location fact.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Equipment manufactured earlier', whyWrong: 'Equipment age detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Experiments elsewhere', whyWrong: 'Off-topic comparison.' }
        ]
      }
    },
    {
      questionNumber: 77,
      id: 'ch6-q77',
      difficulty: 'Hard',
      skillTag: 'Sentence Placement - Maintaining Progression',
      prompt: 'Many desert plants have developed strategies for conserving water. ___ For example, some species store water in specialized tissues.\n\nWhich sentence best fits in the blank?',
      options: [
        'These strategies allow plants to survive periods of limited rainfall.',
        'Desert plants vary considerably in size.',
        'Some deserts receive seasonal rainfall.',
        'Researchers have studied desert plants for decades.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Extends the discussion of "strategies" before introducing the specific example ("For example, some species store water...").',
        whyCorrect: 'Option A maintains the general discussion of strategies prior to the specific illustration.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Vary in size', whyWrong: 'Off-topic size fact.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Seasonal rainfall', whyWrong: 'Desert climate fact.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Studied for decades', whyWrong: 'Research history fact.' }
        ]
      }
    },
    {
      questionNumber: 78,
      id: 'ch6-q78',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Purpose of Second Study',
      prompt: 'The first study found that sleep deprivation reduced concentration. [Sentence X] A second study found a similar effect among university students.\n\nWhich sentence best fits as Sentence X?',
      options: [
        'The researchers therefore concluded that sleep deprivation should be avoided.',
        'Researchers then examined whether the pattern occurred in a different population.',
        'University students often have demanding schedules.',
        'Sleep deprivation has many possible causes.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Establishes the research rationale/purpose for conducting the second study on university students.',
        whyCorrect: 'Option B bridges the first study to the second study by explaining the motive to test a different population.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Concluded sleep avoided', whyWrong: 'Premature advice conclusion.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Demanding schedules', whyWrong: 'Student background detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Many possible causes', whyWrong: 'Off-topic causes fact.' }
        ]
      }
    },
    {
      questionNumber: 79,
      id: 'ch6-q79',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Policy Explanation',
      prompt: 'The city introduced a congestion charge. [Sentence X] Traffic volume subsequently declined in the central district.\n\nWhich sentence best fits as Sentence X?',
      options: [
        'The charge required drivers entering the central district to pay a fee.',
        'The city was founded several centuries ago.',
        'Public transportation is available throughout the city.',
        'Several nearby cities considered similar policies.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Explains what the congestion charge is before presenting its traffic reduction outcome.',
        whyCorrect: 'Option A defines the policy mechanism so "Traffic volume subsequently declined" makes logical sense.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Founded centuries ago', whyWrong: 'Irrelevant history.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Public transit available', whyWrong: 'General transit availability.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nearby cities considered', whyWrong: 'Off-topic comparison.' }
        ]
      }
    },
    {
      questionNumber: 80,
      id: 'ch6-q80',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Data Source',
      prompt: 'Researchers identified a significant decline in the bird population. [Sentence X] This decline was especially pronounced in areas experiencing habitat loss.\n\nWhich sentence best fits as Sentence X?',
      options: [
        'The researchers analyzed population records from several decades.',
        'Habitat loss has become a major concern in many countries.',
        'The birds migrate seasonally.',
        'The study was published in an environmental journal.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Identifies the data source/method (analyzing records from several decades) underlying the population decline finding.',
        whyCorrect: 'Option A naturally provides the source of data before detailed findings are discussed.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Habitat loss major concern', whyWrong: 'General concern statement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Migrate seasonally', whyWrong: 'Irrelevant migration fact.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Published in journal', whyWrong: 'Publication detail.' }
        ]
      }
    },
    {
      questionNumber: 81,
      id: 'ch6-q81',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Addition before Concession',
      prompt: 'The material is relatively inexpensive to manufacture. [Sentence X] Nevertheless, several manufacturers have adopted it.\n\nWhich sentence best fits as Sentence X?',
      options: [
        'Its production process requires less specialized equipment than competing materials.',
        'The material was discovered recently.',
        'Several competing materials are also inexpensive.',
        'Manufacturing technology has changed considerably.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Adds another positive advantage (less specialized equipment) before the concessive statement about adoption.',
        whyCorrect: 'Option A reinforces the advantages of the material before "Nevertheless... manufacturers have adopted it".',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Discovered recently', whyWrong: 'Discovery date fact.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Competing materials inexpensive', whyWrong: 'Distracts from subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Technology changed', whyWrong: 'General manufacturing statement.' }
        ]
      }
    },
    {
      questionNumber: 82,
      id: 'ch6-q82',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Evidence before Conclusion',
      prompt: 'Researchers observed that the treatment improved recovery rates. [Sentence X] These results suggest that the treatment may warrant further testing.\n\nWhich sentence best fits as Sentence X?',
      options: [
        'The improvement was observed across three independent trials.',
        'The treatment was developed several years ago.',
        'The researchers worked at different universities.',
        'Recovery rates vary naturally among patients.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Provides the robust trial evidence that justifies the conclusion "These results suggest... further testing".',
        whyCorrect: 'Option A provides the multi-trial evidence backing the conclusion.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Developed years ago', whyWrong: 'Development age detail.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Worked at different universities', whyWrong: 'Researcher employment detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Recovery rates vary naturally', whyWrong: 'Skeptical statement conflicting with evidence.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Block 8 Exercises: Advanced Rhetorical Synthesis and Distractor Elimination',
  description: '15 Questions (Questions 83–97) testing minimum sufficient information, distractor elimination, and precise purpose fulfillment.',
  questions: [
    {
      questionNumber: 83,
      id: 'ch6-q83',
      difficulty: 'Medium',
      skillTag: 'Advanced Synthesis - Exhibit Subject',
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
        whyCorrect: 'Option B specifies the exact subject matter of the exhibit as requested.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Opened in 1910...', whyWrong: 'Background museum history.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Housed artifacts for century', whyWrong: 'Museum history.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Opens next month', whyWrong: 'Opening date, not subject.' }
        ]
      }
    },
    {
      questionNumber: 84,
      id: 'ch6-q84',
      difficulty: 'Medium',
      skillTag: 'Advanced Synthesis - Practical Result',
      prompt: 'Notes:\n• A city replaced old streetlights with LEDs.\n• LEDs consume less electricity.\n• The replacement reduced municipal energy costs.\n\nThe writer wants to explain the practical result. Which choice best accomplishes this goal?',
      options: [
        'The city replaced its old streetlights with LEDs.',
        'LEDs consume less electricity.',
        'Replacing the streetlights with LEDs reduced municipal energy costs.',
        'The city has modernized its lighting system.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Directly states the practical result (reduced municipal energy costs).',
        whyCorrect: 'Option C highlights the cost reduction resulting from the replacement.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'City replaced streetlights', whyWrong: 'States action only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'LEDs consume less electricity', whyWrong: 'States characteristic.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'City modernized lighting', whyWrong: 'Vague summary.' }
        ]
      }
    },
    {
      questionNumber: 85,
      id: 'ch6-q85',
      difficulty: 'Hard',
      skillTag: 'Advanced Synthesis - Trade-off Comparison',
      prompt: 'Notes:\n• Method A is inexpensive.\n• Method B is faster.\n• Both methods have similar accuracy.\n\nThe writer wants to compare the methods without implying that one is universally superior. Which choice best accomplishes this goal?',
      options: [
        'Method A is cheaper than Method B.',
        'Method B is faster than Method A.',
        'Method A is less expensive, whereas Method B is faster; both have similar accuracy.',
        'Method B is superior because it processes samples faster.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Presents the balanced trade-off (cost vs speed) while noting shared accuracy, avoiding overclaiming superiority.',
        whyCorrect: 'Option C presents a balanced, accurate comparison.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method A is cheaper', whyWrong: 'Incomplete comparison.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method B is faster', whyWrong: 'Incomplete comparison.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method B is superior...', whyWrong: 'Declares an unsupported winner.' }
        ]
      }
    },
    {
      questionNumber: 86,
      id: 'ch6-q86',
      difficulty: 'Hard',
      skillTag: 'Advanced Synthesis - Cautionary Evidence',
      prompt: 'Notes:\n• A treatment improved recovery rates in three trials.\n• The trials involved different hospitals.\n• Researchers recommend additional testing.\n\nThe writer wants to present evidence that the treatment may be effective while maintaining appropriate caution. Which choice best accomplishes this goal?',
      options: [
        'The treatment has been proven effective.',
        'Three trials at different hospitals found improved recovery rates, although additional testing is still needed.',
        'Researchers recommend additional testing.',
        'The treatment improved recovery rates.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Combines the positive trial evidence with the required qualification ("although additional testing is still needed").',
        whyCorrect: 'Option B balances evidence with appropriate caution.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Proven effective', whyWrong: 'Overclaims beyond trial evidence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Recommend testing', whyWrong: 'Omits positive evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Treatment improved', whyWrong: 'Omits cautionary qualification.' }
        ]
      }
    },
    {
      questionNumber: 87,
      id: 'ch6-q87',
      difficulty: 'Hard',
      skillTag: 'Advanced Synthesis - Potential Value with Uncertainty',
      prompt: 'Notes:\n• A crop requires less water.\n• It produces similar yields.\n• It was tested in four regions.\n• Long-term effects remain uncertain.\n\nThe writer wants to explain the crop\'s potential value while acknowledging uncertainty. Which choice best accomplishes this goal?',
      options: [
        'The crop was tested in four regions.',
        'The crop requires less water and produces similar yields, although its long-term effects remain uncertain.',
        'The crop is more efficient than conventional crops.',
        'Researchers remain uncertain about its future.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Connects the crop\'s advantages (less water, similar yields) to the uncertainty regarding long-term effects.',
        whyCorrect: 'Option B captures value and uncertainty without overclaiming.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Tested in four regions', whyWrong: 'Testing background detail.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'More efficient', whyWrong: 'Omits uncertainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Uncertain about future', whyWrong: 'Omits potential value.' }
        ]
      }
    },
    {
      questionNumber: 88,
      id: 'ch6-q88',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Multi-Requirement',
      prompt: 'Notes:\n• A university introduced a scholarship.\n• It covers tuition and housing.\n• It targets low-income students.\n• It began in 2024.\n\nThe writer wants to explain both what the scholarship provides and who it serves. Which choice best accomplishes this goal?',
      options: [
        'The university introduced a scholarship in 2024.',
        'The scholarship covers tuition and housing.',
        'Introduced in 2024, the scholarship provides tuition and housing support to low-income students.',
        'The university expanded its financial-aid programs.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Fulfills both prompt requirements: what it provides (tuition and housing support) and who it serves (low-income students).',
        whyCorrect: 'Option C satisfies both required elements accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Introduced in 2024', whyWrong: 'Omits provisions and recipients.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Covers tuition and housing', whyWrong: 'Omits who it serves.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Expanded financial aid', whyWrong: 'General summary.' }
        ]
      }
    },
    {
      questionNumber: 89,
      id: 'ch6-q89',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Contrast and Shared Characteristic',
      prompt: 'Notes:\n• Researchers studied two species.\n• Species A grows rapidly.\n• Species B grows more slowly but tolerates colder conditions.\n• Both require substantial sunlight.\n\nThe writer wants to compare the species\' contrasting advantages while noting their shared requirement. Which choice best accomplishes this goal?',
      options: [
        'Species A grows rapidly.',
        'Species B tolerates colder conditions.',
        'Species A grows rapidly, whereas Species B better tolerates cold conditions; both require substantial sunlight.',
        'Both species require substantial sunlight.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Captures both contrasting advantages (rapid growth vs cold tolerance) and shared requirement (sunlight).',
        whyCorrect: 'Option C incorporates contrast and shared requirement.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Species A grows rapidly', whyWrong: 'Species A only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Species B tolerates colder', whyWrong: 'Species B only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Both require sunlight', whyWrong: 'Shared requirement only.' }
        ]
      }
    },
    {
      questionNumber: 90,
      id: 'ch6-q90',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Causal Sequence',
      prompt: 'Notes:\n• A city expanded rail service.\n• Public transportation use increased.\n• Traffic congestion subsequently declined.\n\nThe writer wants to describe the sequence of effects. Which choice best accomplishes this goal?',
      options: [
        'The city expanded rail service.',
        'Public transportation use increased after the rail expansion, contributing to a decline in traffic congestion.',
        'Traffic congestion declined.',
        'The city has an extensive rail network.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Connects the sequence: rail expansion → transit use increase → congestion decline.',
        whyCorrect: 'Option B presents the full multi-stage sequence of effects accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Expanded rail service', whyWrong: 'Initial step only.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Traffic congestion declined', whyWrong: 'Final result only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Extensive rail network', whyWrong: 'General status description.' }
        ]
      }
    },
    {
      questionNumber: 91,
      id: 'ch6-q91',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Assessment Support',
      prompt: 'Notes:\n• A material survived repeated stress tests.\n• It remained stable at high temperatures.\n• Researchers describe it as highly durable.\n\nThe writer wants to support the researchers\' assessment of durability. Which choice best accomplishes this goal?',
      options: [
        'Researchers describe the material as highly durable.',
        'The material survived repeated stress tests and remained stable at high temperatures, supporting its characterization as highly durable.',
        'The material was tested repeatedly.',
        'Researchers studied the material\'s durability.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Connects empirical evidence (stress tests, heat stability) to the assessment of durability.',
        whyCorrect: 'Option B presents the supporting evidence for durability.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Describe as highly durable', whyWrong: 'States claim without evidence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Tested repeatedly', whyWrong: 'Vague testing fact.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Studied durability', whyWrong: 'States topic of study.' }
        ]
      }
    },
    {
      questionNumber: 92,
      id: 'ch6-q92',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Accessibility Change',
      prompt: 'Notes:\n• A historical archive digitized 20,000 documents.\n• Researchers previously had to travel to the archive.\n• The documents are now available online.\n\nThe writer wants to emphasize the change in accessibility. Which choice best accomplishes this goal?',
      options: [
        'The archive digitized 20,000 documents.',
        'Researchers previously traveled to the archive.',
        'The digitization project allows researchers to access 20,000 documents online rather than traveling to the archive.',
        'The archive completed a large digitization project.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Explicitly contrasts former travel access with new online access.',
        whyCorrect: 'Option C highlights the change from in-person travel to online access.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Digitized 20,000 documents', whyWrong: 'States action only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Previously traveled', whyWrong: 'States past condition only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Completed large project', whyWrong: 'General project statement.' }
        ]
      }
    },
    {
      questionNumber: 93,
      id: 'ch6-q93',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Overall with Subgroup Variation',
      prompt: 'Notes:\n• A policy increased employment overall.\n• The effect was strongest among younger workers.\n• The effect was weaker among older workers.\n\nThe writer wants to describe the overall result while acknowledging variation between groups. Which choice best accomplishes this goal?',
      options: [
        'The policy increased employment.',
        'The policy increased employment overall, although its effects were stronger among younger workers than older workers.',
        'Younger workers benefited most from the policy.',
        'Older workers experienced weaker effects.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Preserves general result (employment increased overall) and subgroup variation (stronger younger vs weaker older).',
        whyCorrect: 'Option B balances overall result and subgroup qualification.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Policy increased employment', whyWrong: 'Omits variation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Younger benefited most', whyWrong: 'Omits overall policy result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Older experienced weaker', whyWrong: 'Omits overall policy result.' }
        ]
      }
    },
    {
      questionNumber: 94,
      id: 'ch6-q94',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Advantage and Limitation',
      prompt: 'Notes:\n• A new battery charges rapidly.\n• It stores less energy than the leading competing battery.\n• It may be useful for devices requiring frequent short charging periods.\n\nThe writer wants to present the battery\'s principal advantage while acknowledging its limitation. Which choice best accomplishes this goal?',
      options: [
        'The battery charges rapidly.',
        'The battery stores less energy than its leading competitor.',
        'The battery charges rapidly but stores less energy than the leading competitor, making it potentially useful for devices requiring frequent short charging periods.',
        'The battery may be useful for certain devices.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Combines advantage (rapid charging), limitation (less energy stored), and potential application.',
        whyCorrect: 'Option C integrates advantage, limitation, and application context.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Charges rapidly', whyWrong: 'Advantage only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Stores less energy', whyWrong: 'Limitation only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Useful for certain devices', whyWrong: 'Vague conclusion.' }
        ]
      }
    },
    {
      questionNumber: 95,
      id: 'ch6-q95',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Strengthening Claim',
      prompt: 'Notes:\n• Researchers observed improved memory after exercise.\n• The result occurred in three independent studies.\n• The studies involved different age groups.\n\nThe writer wants to strengthen the claim by emphasizing consistency across studies and populations. Which choice best accomplishes this goal?',
      options: [
        'Researchers observed improved memory after exercise.',
        'Three independent studies involving different age groups observed improved memory after exercise.',
        'Researchers studied participants of different ages.',
        'Exercise may improve memory.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Strengthens claim by citing evidence consistency across three independent studies and varied age groups.',
        whyCorrect: 'Option B highlights multi-study consistency across diverse age populations.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Observed improved memory', whyWrong: 'Single observation statement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Studied different ages', whyWrong: 'Methodological demographic detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Exercise may improve memory', whyWrong: 'Weak claim.' }
        ]
      }
    },
    {
      questionNumber: 96,
      id: 'ch6-q96',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Practicality in Low-Resource',
      prompt: 'Notes:\n• A new water filter costs less than conventional filters.\n• It removes several contaminants.\n• It has been tested in rural communities.\n\nThe writer wants to emphasize why the filter could be practical for low-resource communities. Which choice best accomplishes this goal?',
      options: [
        'The filter removes several contaminants.',
        'The filter has been tested in rural communities.',
        'The filter costs less than conventional filters while removing several common contaminants, making it potentially practical for low-resource communities.',
        'Researchers developed a new water filter.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Combines low cost and contaminant removal to explain practical utility in low-resource settings.',
        whyCorrect: 'Option C highlights affordability and effectiveness for low-resource communities.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Removes contaminants', whyWrong: 'Omits affordability.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Tested in rural communities', whyWrong: 'Testing background.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Developed new filter', whyWrong: 'General intro.' }
        ]
      }
    },
    {
      questionNumber: 97,
      id: 'ch6-q97',
      difficulty: 'Elite',
      skillTag: 'Advanced Synthesis - Cautious Argument',
      prompt: 'Notes:\n• Researchers developed a drought-resistant crop.\n• It requires 30% less water.\n• It produced similar yields under normal conditions.\n• Long-term effects remain under study.\n\nThe writer wants to make a cautious argument for the crop\'s potential in water-scarce regions. Which choice best accomplishes this goal?',
      options: [
        'The crop requires 30% less water.',
        'The crop produced similar yields under normal conditions.',
        'Because it requires less water while maintaining similar yields, the crop could be promising for water-scarce regions, although its long-term effects remain under study.',
        'Researchers are studying the crop\'s long-term effects.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Combines evidence (30% less water, similar yield) with intended application and cautious qualification (long-term effects under study).',
        whyCorrect: 'Option C balances promising potential with required caution.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Requires 30% less water', whyWrong: 'Single fact only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Produced similar yields', whyWrong: 'Single fact only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Studying long-term effects', whyWrong: 'Qualification only.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_9: WritingExerciseBlock = {
  blockNumber: 9,
  title: 'Block 9 Exercises: Transition Logic and Multi-Sentence Synthesis',
  description: '15 Questions (Questions 98–112) testing transition logic, misuse traps, multi-sentence synthesis, and paired transitions.',
  questions: [
    {
      questionNumber: 98,
      id: 'ch6-q98',
      difficulty: 'Medium',
      skillTag: 'Multi-Sentence Transition - Advantage Addition',
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
        whyCorrect: 'Option B ("Moreover") correctly signals addition of another supporting point.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'No contrast between two positive features.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Easy operation is not caused by low price.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'No replacement.' }
        ]
      }
    },
    {
      questionNumber: 99,
      id: 'ch6-q99',
      difficulty: 'Medium',
      skillTag: 'Multi-Sentence Transition - Environmental Result',
      prompt: 'Rainfall declined sharply during the summer. ___ Reservoir levels fell.',
      options: [
        'Similarly',
        'For example',
        'As a result',
        'Nevertheless'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Falling reservoir levels are a consequence of sharply declining rainfall.',
        whyCorrect: 'Option C ("As a result") correctly expresses cause → effect.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Similarly', whyWrong: 'Reservoir decline is an effect, not a similar event.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Reservoir decline is a result, not an example of rainfall.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'No concession.' }
        ]
      }
    },
    {
      questionNumber: 100,
      id: 'ch6-q100',
      difficulty: 'Medium',
      skillTag: 'Multi-Sentence Transition - Specific Instance',
      prompt: 'Several species survive extreme temperatures. ___ One species remains active even below freezing.',
      options: [
        'For example',
        'Nevertheless',
        'Therefore',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A species remaining active below freezing is a specific instance of surviving extreme temperatures.',
        whyCorrect: 'Option A ("For example") connects general statement to specific instance.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'No concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'An example is not a conclusion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Incorrect temporal signal.' }
        ]
      }
    },
    {
      questionNumber: 101,
      id: 'ch6-q101',
      difficulty: 'Hard',
      skillTag: 'Multi-Sentence Transition - Parallel Results',
      prompt: 'The first experiment produced promising results. ___ The second experiment produced similar results.',
      options: [
        'In contrast',
        'Similarly',
        'Therefore',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second experiment produced results comparable to the first.',
        whyCorrect: 'Option B ("Similarly") highlights parallel findings.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In contrast', whyWrong: 'Results are similar, not contrasting.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'The second experiment\'s results were not caused by the first.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'No replacement.' }
        ]
      }
    },
    {
      questionNumber: 102,
      id: 'ch6-q102',
      difficulty: 'Hard',
      skillTag: 'Multi-Sentence Transition - Limitation',
      prompt: 'The material is inexpensive to produce. ___ It requires specialized equipment.',
      options: [
        'However',
        'Therefore',
        'Similarly',
        'For example'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Requiring specialized equipment is a limitation contrasting with low production cost.',
        whyCorrect: 'Option A ("However") introduces the contrasting limitation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Therefore', whyWrong: 'Requiring equipment is not caused by being inexpensive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Equipment requirement is a limitation, not a similar advantage.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Equipment requirement is a drawback, not an example of low cost.' }
        ]
      }
    },
    {
      questionNumber: 103,
      id: 'ch6-q103',
      difficulty: 'Hard',
      skillTag: 'Multi-Sentence Transition - Sequential Action',
      prompt: 'Researchers collected the samples. ___ They analyzed them in the laboratory.',
      options: [
        'Nevertheless',
        'Subsequently',
        'In contrast',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Analyzing samples occurred after collecting them in a research sequence.',
        whyCorrect: 'Option B ("Subsequently") indicates chronological sequence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'No concession.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Procedural steps are not opposing.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Analyzing does not replace collecting.' }
        ]
      }
    },
    {
      questionNumber: 104,
      id: 'ch6-q104',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Evidence Contradiction',
      prompt: 'Researchers initially believed that the species lived only near the coast. ___ Later surveys identified populations far inland.',
      options: [
        'Therefore',
        'Similarly',
        'However',
        'For example'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'New survey evidence contradicts the initial belief.',
        whyCorrect: 'Option C ("However") introduces contradictory new evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Therefore', whyWrong: 'Finding inland populations is not a result of believing they lived near the coast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Inland populations conflict with coastal restriction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Inland populations are not an example of coastal restriction.' }
        ]
      }
    },
    {
      questionNumber: 105,
      id: 'ch6-q105',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Cautionary Qualification',
      prompt: 'The treatment improved recovery rates in three independent trials. ___ Researchers recommended additional testing before drawing firm conclusions.',
      options: [
        'Therefore',
        'Nevertheless',
        'For example',
        'Similarly'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Recommending caution/further testing qualifies positive evidence.',
        whyCorrect: 'Option B ("Nevertheless") introduces a cautionary qualification following positive results.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Therefore', whyWrong: 'While plausible, "nevertheless" captures the qualification regarding firm conclusions despite positive results.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Recommending testing is not an example of improved recovery rates.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Caution is not similar to positive recovery rates.' }
        ]
      }
    },
    {
      questionNumber: 106,
      id: 'ch6-q106',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Method Replacement',
      prompt: 'Researchers first analyzed the samples manually. ___ They adopted an automated system that could process more samples.',
      options: [
        'Instead',
        'Similarly',
        'For example',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The automated system replaced the manual analysis method.',
        whyCorrect: 'Option A ("Instead") indicates replacement of the earlier method.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Automated system replaces manual, rather than being similar.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Automated system is a replacement, not an example.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Indicates simultaneous action rather than replacement.' }
        ]
      }
    },
    {
      questionNumber: 107,
      id: 'ch6-q107',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Comparable Study',
      prompt: 'The first study involved younger adults. ___ The second study examined whether the same pattern occurred among older adults.',
      options: [
        'For example',
        'Similarly',
        'Meanwhile',
        'Therefore'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second study investigates a comparable pattern in a different age group.',
        whyCorrect: 'Option B ("Similarly") highlights parallel research investigating the same pattern.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For example', whyWrong: 'Second study is not an example of the first study.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Meanwhile', whyWrong: 'Focuses on timing rather than research parallelism.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Second study is not caused by the first.' }
        ]
      }
    },
    {
      questionNumber: 108,
      id: 'ch6-q108',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Problem Response',
      prompt: 'Engineers identified a structural weakness in the original design. ___ They replaced several components with stronger materials.',
      options: [
        'Consequently',
        'Similarly',
        'For example',
        'Nevertheless'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Replacing components was a direct logical consequence of identifying the structural weakness.',
        whyCorrect: 'Option A ("Consequently") connects the problem to the resulting redesign.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Replacing components is a solution, not a similar weakness.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Replacing components is a response, not an example of a weakness.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Replacing components makes logical sense after finding a weakness; no concession.' }
        ]
      }
    },
    {
      questionNumber: 109,
      id: 'ch6-q109',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Confirmation Emphasis',
      prompt: 'The species appears highly adaptable. ___ It survives in wetlands, forests, and unusually dry environments.',
      options: [
        'In fact',
        'Instead',
        'Nevertheless',
        'Subsequently'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence strengthens and confirms the preceding claim about adaptability with supporting evidence.',
        whyCorrect: 'Option A ("In fact") emphasizes and reinforces the claim.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Instead', whyWrong: 'No replacement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Nevertheless', whyWrong: 'Surviving in varied biomes supports adaptability; no contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'Not a chronological sequence.' }
        ]
      }
    },
    {
      questionNumber: 110,
      id: 'ch6-q110',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Expectation Contrast',
      prompt: 'Researchers expected the treatment to work equally well across all groups. ___ It produced substantially stronger effects among younger participants.',
      options: [
        'Similarly',
        'However',
        'Therefore',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The observed outcome (variation across age) differs from the expectation (equal effectiveness).',
        whyCorrect: 'Option B ("However") introduces the contrasting outcome.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Similarly', whyWrong: 'Stronger effects in one group conflicts with equal effectiveness.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Stronger effect in younger is not caused by expecting equal results.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Variation is not an example of equal results.' }
        ]
      }
    },
    {
      questionNumber: 111,
      id: 'ch6-q111',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Paired Transitions',
      prompt: 'The city expanded rail service. ___ More residents began using public transportation. ___ Traffic congestion subsequently declined.\n\nWhich pair best completes the passage?',
      options: [
        'However / Similarly',
        'As a result / Therefore',
        'Consequently / In contrast',
        'For example / Nevertheless'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sequence is a causal chain: rail expansion → increased transit use → reduced congestion.',
        whyCorrect: 'Option B ("As a result / Therefore") accurately connects both causal steps in the sequence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However / Similarly', whyWrong: 'Contains contrast where cause-and-effect exists.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently / In contrast', whyWrong: 'Introduces contrast where congestion decline is a result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example / Nevertheless', whyWrong: 'Incorrect relationship signals.' }
        ]
      }
    },
    {
      questionNumber: 112,
      id: 'ch6-q112',
      difficulty: 'Elite',
      skillTag: 'Multi-Sentence Transition - Paired Response Sequence',
      prompt: 'The material initially appeared unsuitable for high-temperature applications. ___ Engineers modified its composition. ___ The revised material remained stable at much higher temperatures.\n\nWhich pair best completes the passage?',
      options: [
        'Therefore / Nevertheless',
        'Instead / Similarly',
        'Consequently / As a result',
        'For example / Meanwhile'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The structure is: limitation → response ("Consequently, engineers modified...") → result ("As a result, revised material remained stable...").',
        whyCorrect: 'Option C ("Consequently / As a result") correctly identifies both causal steps.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Therefore / Nevertheless', whyWrong: 'Second blank is a direct result, not concession.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Instead / Similarly', whyWrong: 'Second blank is a result, not similarity.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example / Meanwhile', whyWrong: 'Incorrect relationship signals.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_10: WritingExerciseBlock = {
  blockNumber: 10,
  title: 'Block 10 Exercises: Rhetorical Synthesis Across Notes, Evidence, and Competing Information',
  description: '15 Questions (Questions 113–127) testing note selection, attribution, correlation vs causation, and chronology.',
  questions: [
    {
      questionNumber: 113,
      id: 'ch6-q113',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Age Comparison with Similarity',
      prompt: 'Notes:\n• Museum A opened in 1900.\n• Museum B opened in 1950.\n• Both contain large collections of historical artifacts.\n\nPurpose: Compare the museums\' ages while noting their shared characteristic.',
      options: [
        'Museum A opened earlier than Museum B, and both contain large historical collections.',
        'Museum A contains historical artifacts.',
        'Museum B opened in 1950.',
        'Both museums have large collections.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Compares ages (Museum A opened earlier than Museum B) while noting shared characteristic (large historical collections).',
        whyCorrect: 'Option A fulfills both required elements.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Museum A contains...', whyWrong: 'Museum A only.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Museum B opened in 1950.', whyWrong: 'Museum B opening date only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Both museums have large collections.', whyWrong: 'Shared characteristic only, omits age comparison.' }
        ]
      }
    },
    {
      questionNumber: 114,
      id: 'ch6-q114',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Summarizing Common Finding',
      prompt: 'Notes:\n• Study A found improved concentration after exercise.\n• Study B found improved concentration after exercise.\n\nPurpose: Summarize the common finding.',
      options: [
        'Study A involved exercise.',
        'Two studies found improved concentration after exercise.',
        'Study B examined concentration.',
        'Researchers conducted two studies.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Summarizes the shared finding from both studies in a single concise statement.',
        whyCorrect: 'Option B encapsulates the common finding.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Study A involved exercise', whyWrong: 'Study A only.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Study B examined concentration', whyWrong: 'Study B topic only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Researchers conducted two studies', whyWrong: 'Omits the finding.' }
        ]
      }
    },
    {
      questionNumber: 115,
      id: 'ch6-q115',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Balanced Advantage Comparison',
      prompt: 'Notes:\n• Method A costs less.\n• Method B processes samples faster.\n• Both methods have similar accuracy.\n\nPurpose: Compare the principal advantages without declaring an overall winner.',
      options: [
        'Method A is better because it costs less.',
        'Method B is superior because it is faster.',
        'Method A is less expensive, whereas Method B processes samples faster; both have similar accuracy.',
        'The methods differ in cost and speed.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Presents the trade-off (cost vs speed) and shared accuracy without declaring an unsupported overall winner.',
        whyCorrect: 'Option C provides a balanced comparison without overclaiming.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method A is better...', whyWrong: 'Declares winner.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method B is superior...', whyWrong: 'Declares winner.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Methods differ in cost and speed', whyWrong: 'Vague summary; omits specifics.' }
        ]
      }
    },
    {
      questionNumber: 116,
      id: 'ch6-q116',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Shared Result with Difference',
      prompt: 'Notes:\n• Study A found a strong improvement.\n• Study B found a smaller improvement.\n• Both studies examined the same treatment.\n\nPurpose: Explain the agreement and difference between the studies.',
      options: [
        'Both studies found that the treatment was effective.',
        'Study A and Study B examined the same treatment.',
        'Both studies observed improvement, although the effect was stronger in Study A.',
        'Study A proved the treatment was more effective.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Captures both agreement (both observed improvement) and difference (stronger in Study A).',
        whyCorrect: 'Option C includes both required elements.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Both found treatment effective', whyWrong: 'Omits difference in magnitude.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Examined same treatment', whyWrong: 'Omits findings.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Study A proved...', whyWrong: 'Overclaims ("proved").' }
        ]
      }
    },
    {
      questionNumber: 117,
      id: 'ch6-q117',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Overall Effect with Qualification',
      prompt: 'Notes:\n• A city expanded rail service.\n• Transit use increased.\n• Congestion decreased.\n• Effects were smaller in suburban areas.\n\nPurpose: Describe the overall effect while acknowledging the geographic qualification.',
      options: [
        'The rail expansion reduced congestion.',
        'Transit use increased after the rail expansion.',
        'The rail expansion increased transit use and reduced congestion, although the effects were smaller in suburban areas.',
        'Suburban congestion remained high.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Includes the main causal chain (rail expansion → transit use & congestion reduction) and geographic qualification (smaller in suburban areas).',
        whyCorrect: 'Option C satisfies both required elements.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Reduced congestion', whyWrong: 'Omits suburban qualification.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Transit use increased', whyWrong: 'Omits congestion and qualification.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Suburban congestion high', whyWrong: 'Suburban aspect only.' }
        ]
      }
    },
    {
      questionNumber: 118,
      id: 'ch6-q118',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Observational Evidence',
      prompt: 'Notes:\n• Researchers observed an association between exercise and sleep quality.\n• Participants who exercised regularly reported better sleep.\n• The study was observational.\n\nPurpose: Present evidence without implying causation.',
      options: [
        'Exercise causes better sleep.',
        'Exercise improves sleep quality.',
        'Participants who exercised regularly reported better sleep, suggesting an association between exercise and sleep quality.',
        'Researchers proved that exercise improves sleep.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Frames finding as an association from observational evidence without claiming causation.',
        whyCorrect: 'Option C maintains the observational "association" boundary.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Exercise causes better sleep', whyWrong: 'Claims causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Exercise improves sleep', whyWrong: 'Implies causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Proved exercise improves sleep', whyWrong: 'Overclaims ("proved").' }
        ]
      }
    },
    {
      questionNumber: 119,
      id: 'ch6-q119',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Application with Limitation',
      prompt: 'Notes:\n• A battery charges quickly.\n• It stores less energy than a competing battery.\n• It may be useful for devices needing frequent short charging periods.\n\nPurpose: Explain the battery\'s potential usefulness while acknowledging its limitation.',
      options: [
        'The battery charges quickly.',
        'The battery stores less energy than its competitor.',
        'Although the battery stores less energy than its competitor, its rapid charging may make it useful for devices requiring frequent short charging periods.',
        'The battery is superior for electronic devices.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Combines limitation (stores less energy), advantage (rapid charging), and specific application.',
        whyCorrect: 'Option C integrates limitation and potential application.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Charges quickly', whyWrong: 'Advantage only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Stores less energy', whyWrong: 'Limitation only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Superior for electronic devices', whyWrong: 'Unsupported superiority claim.' }
        ]
      }
    },
    {
      questionNumber: 120,
      id: 'ch6-q120',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Designer vs Renovation',
      prompt: 'Notes:\n• A historical building was completed in 1880.\n• It was designed by Architect X.\n• It was renovated in 2015.\n\nPurpose: Identify the building\'s original designer and distinguish that fact from its later renovation.',
      options: [
        'The building was completed in 1880 and renovated in 2015.',
        'Architect X designed the building, which was later renovated in 2015.',
        'Architect X renovated the building in 2015.',
        'The building has existed since 1880.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Identifies Architect X as original designer and separates that from the 2015 renovation.',
        whyCorrect: 'Option B attributes original design to Architect X and distinguishes it from later renovation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Completed 1880 and renovated 2015', whyWrong: 'Omits Architect X.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Architect X renovated', whyWrong: 'Distorts facts (Architect X designed, did not renovate).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Existed since 1880', whyWrong: 'Background date.' }
        ]
      }
    },
    {
      questionNumber: 121,
      id: 'ch6-q121',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Non-Unanimous Evidence',
      prompt: 'Notes:\n• Three studies investigated the same treatment.\n• Two found substantial improvement.\n• One found little improvement.\n\nPurpose: Summarize the evidence without falsely implying unanimous agreement.',
      options: [
        'Three studies proved that the treatment works.',
        'Two studies found improvement, while a third found little improvement.',
        'All three studies found that the treatment was effective.',
        'The treatment produced inconsistent results.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Preserves exact evidence distribution (2 improvement, 1 little improvement) without implying unanimity.',
        whyCorrect: 'Option B accurately reflects the split in study outcomes.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Three studies proved...', whyWrong: 'Falsely claims unanimity.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'All three studies found...', whyWrong: 'Falsely claims unanimity.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Inconsistent results', whyWrong: 'Vague dismissive summary.' }
        ]
      }
    },
    {
      questionNumber: 122,
      id: 'ch6-q122',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Cautious Argument for Crop',
      prompt: 'Notes:\n• A new crop uses less water.\n• It produces similar yields.\n• It has not yet been studied for long-term ecological effects.\n\nPurpose: Make a cautious argument for its potential usefulness.',
      options: [
        'The crop is superior to conventional crops.',
        'The crop uses less water and produces similar yields, suggesting potential usefulness despite uncertainty about its long-term ecological effects.',
        'The crop has no ecological risks.',
        'The crop uses less water.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Combines key benefits (less water, similar yield) with cautious wording regarding ecological uncertainty.',
        whyCorrect: 'Option B presents benefits alongside qualification.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Superior to conventional', whyWrong: 'Overclaims.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'No ecological risks', whyWrong: 'Contradicts unstudied long-term effects.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Uses less water', whyWrong: 'Incomplete.' }
        ]
      }
    },
    {
      questionNumber: 123,
      id: 'ch6-q123',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Cost Comparison Only',
      prompt: 'Notes:\n• Program A costs $2,000.\n• Program B costs $3,500.\n• Program A serves 100 students.\n• Program B serves 500 students.\n\nPurpose: Compare cost without discussing enrollment.',
      options: [
        'Program A costs $2,000 and serves 100 students.',
        'Program B costs $3,500 and serves 500 students.',
        'Program A costs less than Program B.',
        'Program B serves more students than Program A.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Compares cost directly while completely omitting enrollment information as instructed by prompt.',
        whyCorrect: 'Option C focuses strictly on cost comparison.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Program A costs $2,000 and serves 100', whyWrong: 'Includes enrollment.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Program B costs $3,500 and serves 500', whyWrong: 'Includes enrollment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Program B serves more students', whyWrong: 'Compares enrollment, not cost.' }
        ]
      }
    },
    {
      questionNumber: 124,
      id: 'ch6-q124',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Chronological Development',
      prompt: 'Notes:\n• Researchers proposed a theory in 2005.\n• They tested it in 2010.\n• They revised it in 2018.\n\nPurpose: Summarize the development of the theory chronologically.',
      options: [
        'Researchers proposed a theory and later revised it.',
        'Researchers proposed the theory in 2005, tested it in 2010, and revised it in 2018.',
        'The theory was tested and revised.',
        'Researchers studied the theory for many years.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Preserves the complete three-stage chronological progression with dates.',
        whyCorrect: 'Option B preserves proposal, testing, and revision chronologically.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Proposed and later revised', whyWrong: 'Omits testing phase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Tested and revised', whyWrong: 'Omits proposal and dates.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Studied for many years', whyWrong: 'Vague summary.' }
        ]
      }
    },
    {
      questionNumber: 125,
      id: 'ch6-q125',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Accurately Presenting Differing Findings',
      prompt: 'Notes:\n• Study A found a strong relationship between temperature and growth.\n• Study B found the relationship only under high-light conditions.\n\nPurpose: Present the differing findings accurately.',
      options: [
        'Both studies found that temperature strongly determines growth.',
        'Study A found a strong temperature-growth relationship, whereas Study B found that the relationship depended on light conditions.',
        'Study B disproved Study A.',
        'Temperature affects growth only under high-light conditions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Accurately contrasts Study A\'s general strong finding with Study B\'s conditional finding.',
        whyCorrect: 'Option B presents the distinction accurately without exaggeration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Both studies found strongly determines', whyWrong: 'Omits Study B\'s condition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Study B disproved Study A', whyWrong: 'Exaggerates disagreement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Temperature affects growth only under high-light', whyWrong: 'Ignores Study A\'s general finding.' }
        ]
      }
    },
    {
      questionNumber: 126,
      id: 'ch6-q126',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Causal Chain',
      prompt: 'Notes:\n• A city replaced old streetlights with LEDs.\n• LEDs consume less electricity.\n• Municipal energy costs declined.\n\nPurpose: Explain the causal chain.',
      options: [
        'The city replaced streetlights with LEDs.',
        'LEDs consume less electricity.',
        'Replacing the old streetlights with LEDs reduced electricity consumption, contributing to lower municipal energy costs.',
        'Municipal energy costs declined.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Connects the entire causal chain: intervention (replacing streetlights with LEDs) → mechanism (reduced electricity consumption) → outcome (lower energy costs).',
        whyCorrect: 'Option C expresses the full intervention → mechanism → outcome chain.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'City replaced streetlights', whyWrong: 'Intervention only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'LEDs consume less', whyWrong: 'Mechanism only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Municipal energy costs declined', whyWrong: 'Outcome only.' }
        ]
      }
    },
    {
      questionNumber: 127,
      id: 'ch6-q127',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Evidence with Limitations',
      prompt: 'Notes:\n• Researchers studied 600 participants.\n• Regular exercisers reported better sleep.\n• The study was observational.\n• Researchers controlled for age and occupation.\n\nPurpose: Present the strongest evidence for an association while preserving the study\'s limitations.',
      options: [
        'Exercise improves sleep among 600 participants.',
        'An observational study of 600 participants found that regular exercisers reported better sleep after researchers controlled for age and occupation.',
        'Researchers proved that exercise improves sleep.',
        'Exercise causes better sleep regardless of age or occupation.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Includes sample size, methodology controls, finding, and observational limitation without converting association into causation.',
        whyCorrect: 'Option B presents evidence and controls while preserving the observational limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Exercise improves sleep', whyWrong: 'Implies causation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Proved exercise improves sleep', whyWrong: 'Overclaims ("proved").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Exercise causes better sleep', whyWrong: 'Claims causation.' }
        ]
      }
    }
  ]
};
