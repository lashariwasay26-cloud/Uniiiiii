import { DemonstrationExample } from '../readingTypes';

export const T3_DEMONSTRATIONS: DemonstrationExample[] = [
  {
    demoNumber: 1,
    id: 't3-demo-1',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `The following text is adapted from a 1918 essay on literary formalism. Critics often treat a novel's plot as a mere sequence of chronological events, viewing narrative pacing as a secondary technical concern. However, pacing is not merely an auxiliary wrapper; it actively dictates the reader's emotional investment, calibrating suspense and thematic resonance. By accelerating during moments of psychological crisis and decelerating during introspective reflections, the author constructs an architecture of feeling that transforms simple plot into profound art.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To argue that narrative pacing is a fundamental artistic element rather than a secondary technique.',
      'To compare plot chronologies across early twentieth-century formalist novels.',
      'To criticize authors who decelerate narrative pacing during introspective scenes.',
      'To prove that emotional suspense is more important than thematic resonance in fiction.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    strategicTakeaway: 'Look for the transition "However". The text moves from traditional critic views (pacing is secondary) to the author\'s main thesis (pacing is fundamental art).',
    explanation: {
      passageDeconstruction: `The passage opens by describing traditional critics who view pacing as secondary. The author uses "However" to pivot and assert that pacing dictates emotional investment and transforms plot into art.`,
      correctReasoning: `Option A accurately captures the primary purpose: elevating narrative pacing from a secondary concern to an active, essential artistic element.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To argue that narrative pacing is a fundamental artistic element...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately describes the author\'s thesis.' },
        { optionIndex: 1, optionText: 'To compare plot chronologies across early twentieth-century...', trapType: 'Scope Expansion', whyIncorrect: 'No comparison of specific novels is made.' },
        { optionIndex: 2, optionText: 'To criticize authors who decelerate narrative pacing...', trapType: 'Flop Trap', whyIncorrect: 'The author praises decelerating during introspection.' },
        { optionIndex: 3, optionText: 'To prove that emotional suspense is more important...', trapType: 'False Hierarchy', whyIncorrect: 'The author mentions both suspense and thematic resonance together.' }
      ]
    }
  },
  {
    demoNumber: 2,
    id: 't3-demo-2',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `Geologists long debated whether the unique basalt columns of Giant's Causeway in Northern Ireland were formed by volcanic activity or human construction. In 1771, French geologist Nicolas Desmarest published an extensive study comparing the Irish basalt formations with ancient lava flows in central France. Desmarest demonstrated that as molten basalt lava cools slowly, it contracts and naturally cracks into regular hexagonal prisms. His work provided definitive evidence that volcanic cooling, not human engineering, produced the columns.`,
    questionText: `Which choice best describes the overall structure of the text?`,
    options: [
      'It outlines a long-standing debate and explains how a scientific study resolved it.',
      'It compares two competing geological theories and concludes that neither is valid.',
      'It presents a recent discovery and calls for further empirical research.',
      'It describes a natural phenomenon and details how humans attempted to replicate it.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    strategicTakeaway: 'Track the flow: Debated origin -> Desmarest\'s comparative study -> Definitive resolution.',
    explanation: {
      passageDeconstruction: `Sentence 1 presents the debate (volcanic vs human). Sentences 2-4 describe Desmarest\'s study demonstrating lava cooling contraction, resolving the debate.`,
      correctReasoning: `Option A perfectly describes the structure: outlining a debate and explaining how a study resolved it.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It outlines a long-standing debate and explains how...', trapType: 'Correct Structural Description', whyIncorrect: 'Accurately mirrors the paragraph organization.' },
        { optionIndex: 1, optionText: 'It compares two competing geological theories and concludes that neither...', trapType: 'Flop Trap', whyIncorrect: 'One theory (volcanic activity) was proven valid.' },
        { optionIndex: 2, optionText: 'It presents a recent discovery and calls for further...', trapType: 'Chronological Misalignment', whyIncorrect: 'Desmarest\'s study was in 1771, not a recent discovery, and no call for further research is made.' },
        { optionIndex: 3, optionText: 'It describes a natural phenomenon and details how humans...', trapType: 'False Claim', whyIncorrect: 'Humans did not attempt to replicate it; humans were mistakenly thought to have built it.' }
      ]
    }
  },
  {
    demoNumber: 3,
    id: 't3-demo-3',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `Microbiologists studying bacterial communication discovered that individual cells release signaling molecules called autoinducers in a process known as quorum sensing. When cell density reaches a critical threshold, accumulated autoinducers bind to cellular receptors, triggering synchronized collective behaviors such as bioluminescence or biofilm formation. *For example, the marine bacterium Vibrio fischeri activates light production only when densely populated inside the light organ of the Hawaiian bobtail squid.*`,
    questionText: `Which choice best describes the function of the highlighted sentence in the overall structure of the text?`,
    options: [
      'It provides a specific biological illustration of the general mechanism described previously.',
      'It introduces a counterexample that challenges the universal applicability of quorum sensing.',
      'It details the historical discovery of autoinducer molecules in marine organisms.',
      'It proposes a new hypothesis regarding the evolutionary benefits of bioluminescence.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    strategicTakeaway: '"For example" signals a functional shift from general theory (quorum sensing) to a specific concrete example (*Vibrio fischeri* in squid).',
    explanation: {
      passageDeconstruction: `Sentences 1-2 define the general biological mechanism of quorum sensing. Sentence 3 begins with "For example" and names a specific bacterium (*Vibrio fischeri*) and host (bobtail squid).`,
      correctReasoning: `Option A accurately states the function: providing a specific biological illustration of the general mechanism.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It provides a specific biological illustration...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately describes how the example supports the general theory.' },
        { optionIndex: 1, optionText: 'It introduces a counterexample that challenges...', trapType: 'Opposite Role', whyIncorrect: 'The squid example confirms quorum sensing, rather than challenging it.' },
        { optionIndex: 2, optionText: 'It details the historical discovery of autoinducer molecules...', trapType: 'Historical Trap', whyIncorrect: 'The sentence describes a biological process, not a historical discovery timeline.' },
        { optionIndex: 3, optionText: 'It proposes a new hypothesis regarding evolutionary benefits...', trapType: 'Unsubstantiated Role', whyIncorrect: 'The sentence states an established fact, not a new hypothesis.' }
      ]
    }
  },
  {
    demoNumber: 4,
    id: 't3-demo-4',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `Traditional agrarian historians argued that the enclosure movement in eighteenth-century England led to the immediate ruin of small landholders. However, economic historian Jane Humphries analyzed parish land registries and wage records from 1750 to 1820, revealing that many smallholding families retained access to common pastures for decades after enclosure acts were passed. Humphries's findings demonstrate that the decline of agrarian smallholders was far more gradual than previously assumed.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To present research that qualifies a long-held historical assumption about the speed of smallholder decline.',
      'To argue that enclosure acts had no economic impact on English parish communities.',
      'To compare agricultural productivity across English parishes between 1750 and 1820.',
      'To refute Humphries\'s claims regarding parish land registries and pasture access.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    strategicTakeaway: 'The pivot "However" introduces Humphries\'s research, which shows the decline was "far more gradual" than previously assumed, thus qualifying (limiting) the traditional view.',
    explanation: {
      passageDeconstruction: `Opening: Traditional view = immediate ruin. Pivot "However": Humphries analyzed records showing gradual decline over decades. Conclusion: Humphries's work modifies the assumed speed.`,
      correctReasoning: `Option A accurately states the purpose: presenting research that qualifies (revises/limits) a traditional assumption.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To present research that qualifies a long-held historical assumption...', trapType: 'Correct Rhetorical Purpose', whyIncorrect: 'Accurately reflects the author\'s goal.' },
        { optionIndex: 1, optionText: 'To argue that enclosure acts had no economic impact...', trapType: 'Extreme Absolutist Trap', whyIncorrect: 'The text says the decline was gradual, not that there was zero impact.' },
        { optionIndex: 2, optionText: 'To compare agricultural productivity across English parishes...', trapType: 'Scope Swap', whyIncorrect: 'Productivity is not measured; land access duration is.' },
        { optionIndex: 3, optionText: 'To refute Humphries\'s claims regarding parish land registries...', trapType: 'Role Reversal', whyIncorrect: 'The passage endorses Humphries\'s research, not refutes it.' }
      ]
    }
  },
  {
    demoNumber: 5,
    id: 't3-demo-5',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In 1910, astronomer Vesto Slipher measured the radial velocity of spiral nebulae and discovered that most were moving away from Earth at astonishing speeds. At the time, astronomers viewed these nebulae as minor dust clouds within our own Milky Way galaxy. It was not until 1929 that Edwin Hubble combined Slipher's velocity measurements with distance estimates to prove that spiral nebulae were actually independent galaxies, laying the observational foundation for the expanding universe theory.`,
    questionText: `Which choice best describes the relationship between the two scientists mentioned in the text?`,
    options: [
      'Slipher provided empirical data that Hubble later utilized to establish a fundamental cosmological discovery.',
      'Hubble disproved Slipher\'s velocity measurements by conducting higher-resolution astronomical observations.',
      'Slipher rejected Hubble\'s theory regarding independent galaxies in favor of the Milky Way model.',
      'Hubble and Slipher conducted joint telescope observations to measure the distance to spiral nebulae.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Relationship & Structural Linkage Analysis',
    explanation: {
      passageDeconstruction: `Slipher measured radial velocity in 1910. Hubble combined Slipher's measurements with distance estimates in 1929 to prove independent galaxies.`,
      correctReasoning: `Option A accurately states that Slipher's data was used by Hubble for a fundamental discovery.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Slipher provided empirical data that Hubble later utilized...', trapType: 'Correct Structural Relationship', whyIncorrect: 'Accurately describes how Slipher\'s velocity data fed into Hubble\'s synthesis.' },
        { optionIndex: 1, optionText: 'Hubble disproved Slipher\'s velocity measurements...', trapType: 'Direct Contradiction', whyIncorrect: 'Hubble combined (validated and used) Slipher\'s data, not disproved it.' },
        { optionIndex: 2, optionText: 'Slipher rejected Hubble\'s theory...', trapType: 'Unmentioned Opposition', whyIncorrect: 'Opposition by Slipher is not mentioned.' },
        { optionIndex: 3, optionText: 'Hubble and Slipher conducted joint telescope observations...', trapType: 'Temporal Anachronism', whyIncorrect: 'They worked decades apart independently, not jointly.' }
      ]
    }
  },
  {
    demoNumber: 6,
    id: 't3-demo-6',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `Many marine conservation initiatives focus heavily on protecting coral reefs due to their high biodiversity and visual appeal. While coral reef preservation is undoubtedly valuable, coastal salt marshes provide equally essential ecological services, sequestering carbon at rates up to ten times higher per hectare than tropical rainforests. By neglecting salt marshes, current environmental policies risk overlooking one of the most effective natural buffers against global climate change.`,
    questionText: `Which choice best describes the function of the second sentence ("While coral reef preservation... rainforests") in the overall structure of the text?`,
    options: [
      'It acknowledges the importance of a common conservation focus while introducing an underappreciated ecosystem with critical benefits.',
      'It refutes the claim that coral reefs possess high marine biodiversity.',
      'It presents statistical evidence showing that tropical rainforests consume more carbon than coastal marshes.',
      'It argues that government funding should be transferred entirely from coral reefs to salt marshes.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1 describes coral reef focus. Sentence 2 ("While coral reef preservation...") grants coral reef value, then introduces salt marshes as sequestering 10x more carbon than rainforests. Sentence 3 warns against neglecting marshes.`,
      correctReasoning: `Option A captures both parts of sentence 2: conceding coral reef value ("While...") while highlighting salt marshes' huge carbon storage benefit.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It acknowledges the importance of a common conservation focus...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately captures the concessive clause and new claim.' },
        { optionIndex: 1, optionText: 'It refutes the claim that coral reefs possess high marine biodiversity.', trapType: 'Direct Contradiction', whyIncorrect: 'The text says coral reef preservation is "undoubtedly valuable".' },
        { optionIndex: 2, optionText: 'It presents statistical evidence showing that tropical rainforests consume more...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states salt marshes sequester carbon 10x higher than rainforests.' },
        { optionIndex: 3, optionText: 'It argues that government funding should be transferred entirely...', trapType: 'Extreme Policy Trap', whyIncorrect: 'The text calls for policy inclusion of marshes, not total funding stripping from reefs.' }
      ]
    }
  },
  {
    demoNumber: 7,
    id: 't3-demo-7',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In his 1938 monograph *Homo Ludens*, cultural theorist Johan Huizinga posited that play is a necessary foundation of human culture, preceding formal social institutions like law and religion. Huizinga argued that play possesses a distinct "magic circle"—an isolated temporal and spatial boundary operating under its own binding rules. Within this magic circle, participants temporarily suspend ordinary social hierarchies, allowing novel forms of cultural expression and rule-based governance to emerge naturally.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To explain Huizinga\'s theory regarding the role of play in generating human culture and social order.',
      'To compare Huizinga\'s concept of the "magic circle" with modern game design methodologies.',
      'To criticize 1930s cultural theorists for overemphasizing formal legal institutions.',
      'To demonstrate that legal systems developed independently of human play behaviors.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage introduces Huizinga's book *Homo Ludens*, explains his thesis that play precedes formal culture, and details his "magic circle" concept.`,
      correctReasoning: `Option A succinctly and accurately summarizes the text's primary purpose: explaining Huizinga's theory.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To explain Huizinga\'s theory regarding the role of play...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately states the core explanatory goal.' },
        { optionIndex: 1, optionText: 'To compare Huizinga\'s concept... with modern game design...', trapType: 'Anachronistic Scope Expansion', whyIncorrect: 'Modern game design is never mentioned.' },
        { optionIndex: 2, optionText: 'To criticize 1930s cultural theorists for overemphasizing...', trapType: 'Unsupported Critique', whyIncorrect: 'The text outlines Huizinga\'s theory, rather than criticizing other theorists.' },
        { optionIndex: 3, optionText: 'To demonstrate that legal systems developed independently...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states play preceded and influenced law and religion.' }
      ]
    }
  },
  {
    demoNumber: 8,
    id: 't3-demo-8',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `Public health officials frequently recommend urban green spaces to improve resident mental health. However, epidemiologist Dr. Sarah Lin notes that the psychological benefits of parks depend heavily on perceived safety and maintenance quality. In a study of twenty urban neighborhoods, Lin found that poorly lit parks with neglected infrastructure showed no correlation with reduced resident anxiety, whereas well-maintained green spaces correlated with a 35% reduction in self-reported stress levels.`,
    questionText: `Which choice best describes the organization of the passage?`,
    options: [
      'A common public health recommendation is presented, a qualification is introduced by a researcher, and empirical study results supporting that qualification are detailed.',
      'A scientific study is criticized, alternative methodology is proposed, and potential urban policy changes are outlined.',
      'Two competing public health recommendations are contrasted, and a compromise solution is recommended.',
      'An urban planning problem is identified, a historical precedent is discussed, and a future study is planned.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Common recommendation (green spaces improve mental health) -> 2. Qualification by Dr. Lin (depends on safety/maintenance) -> 3. Empirical study details (neglected parks = 0 benefit, maintained parks = 35% stress reduction).`,
      correctReasoning: `Option A accurately matches this 3-stage organizational pattern.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'A common public health recommendation is presented...', trapType: 'Correct Structural Overview', whyIncorrect: 'Perfect match to paragraph flow.' },
        { optionIndex: 1, optionText: 'A scientific study is criticized, alternative methodology is proposed...', trapType: 'Role Reversal', whyIncorrect: 'No study is criticized; Dr. Lin\'s own study provides the evidence.' },
        { optionIndex: 2, optionText: 'Two competing public health recommendations are contrasted...', trapType: 'False Dichotomy', whyIncorrect: 'There are not two competing recommendations, but one recommendation with nuanced conditions.' },
        { optionIndex: 3, optionText: 'An urban planning problem is identified, a historical precedent...', trapType: 'Misidentified Genre', whyIncorrect: 'No historical precedent or future study plan is mentioned.' }
      ]
    }
  },
  {
    demoNumber: 9,
    id: 't3-demo-9',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In evolutionary botany, angiosperms (flowering plants) appeared suddenly in the fossil record during the Early Cretaceous period, diversifying rapidly into millions of specialized species. Charles Darwin famously referred to this abrupt evolutionary radiation as an "abominable mystery," as it seemed to contradict his theory of slow, gradual natural selection. *Modern paleobotanists resolved this mystery by showing that co-evolution with specialized insect pollinators enabled rapid reproductive isolation and speciation among early angiosperms.*`,
    questionText: `Which choice best describes the function of the final sentence in the passage?`,
    options: [
      'It presents a scientific explanation that resolves a historical puzzle described earlier in the text.',
      'It refutes Darwin\'s broader theory of natural selection using fossil evidence.',
      'It argues that insect pollinators evolved prior to the Cretaceous period.',
      'It questions the accuracy of modern paleobotanical fossil dating methods.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1: Angiosperms appeared suddenly. Sentence 2: Darwin called it an "abominable mystery" contradicting gradualism. Sentence 3: Modern paleobotanists resolved the mystery through insect co-evolution speciation.`,
      correctReasoning: `Option A accurately states the function of the final sentence: resolving the historical puzzle (Darwin's "abominable mystery").`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It presents a scientific explanation that resolves a historical puzzle...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately describes how sentence 3 completes the passage.' },
        { optionIndex: 1, optionText: 'It refutes Darwin\'s broader theory of natural selection...', trapType: 'Over-Generalization', whyIncorrect: 'Resolving the mystery supports evolutionary theory rather than refuting it.' },
        { optionIndex: 2, optionText: 'It argues that insect pollinators evolved prior to...', trapType: 'Unsupported Extrapolation', whyIncorrect: 'Prior evolution timing is not asserted.' },
        { optionIndex: 3, optionText: 'It questions the accuracy of modern paleobotanical fossil dating...', trapType: 'Direct Contradiction', whyIncorrect: 'The text endorses modern paleobotanical findings.' }
      ]
    }
  },
  {
    demoNumber: 10,
    id: 't3-demo-10',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `Architectural critic Lewis Mumford argued that the invention of the mechanical clock in medieval monasteries exercised a far greater influence on industrial urbanization than the steam engine did. Mumford noted that the clock dissociated time from human events and natural solar rhythms, establishing a standardized regime of synchronized hours. This mechanical temporal discipline created the habits of punctuality, scheduling, and labor efficiency that made modern factory production possible.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To present Mumford\'s argument regarding the foundational role of the mechanical clock in shaping modern industrial society.',
      'To describe how medieval monasteries utilized steam engines to power mechanical clocks.',
      'To advocate for returning to natural solar rhythms in modern workplace scheduling.',
      'To compare the mechanical efficiency of medieval clocks with industrial steam machinery.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage presents Mumford's thesis (mechanical clock influenced urbanization more than steam engine) and details his reasoning (dissociating time from nature, creating temporal discipline required for factories).`,
      correctReasoning: `Option A accurately states the main purpose: presenting Mumford's argument about the clock's foundational role.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To present Mumford\'s argument regarding the foundational role...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the author\'s focus.' },
        { optionIndex: 1, optionText: 'To describe how medieval monasteries utilized steam engines...', trapType: 'Anachronistic Combination Trap', whyIncorrect: 'Monasteries did not use steam engines.' },
        { optionIndex: 2, optionText: 'To advocate for returning to natural solar rhythms...', trapType: 'Prescriptive Policy Trap', whyIncorrect: 'The passage analyzes history, not advocates workplace policy changes.' },
        { optionIndex: 3, optionText: 'To compare the mechanical efficiency of medieval clocks...', trapType: 'Scope Swap', whyIncorrect: 'Mechanical efficiency of gears is not compared; social temporal impact is analyzed.' }
      ]
    }
  }
];
