import { ReadingQuestion } from '../readingTypes';

export const T3_EXERCISES_PART2: ReadingQuestion[] = [
  {
    id: 't3-ex-26',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In entomology, monarch butterflies migrate thousands of miles from North America to overwintering forests in central Mexico. Entomologists discovered that monarch navigation relies on a time-compensated sun compass located in their antennae. Antennae clocks process light signals to calibrate flight direction relative to the Sun's position, allowing monarchs to maintain a steady southward trajectory throughout the day despite solar movement across the sky.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To explain how monarch butterflies utilize antennal light signals to navigate during migration.',
      'To argue that central Mexico\'s overwintering forests should receive immediate conservation protection.',
      'To compare the flight speeds of monarch butterflies with other migratory insect species.',
      'To prove that solar movement across the sky disrupts monarch navigational accuracy.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage introduces monarch migration and explains the biological mechanism (time-compensated sun compass in antennae processing light signals to calibrate flight direction).`,
      correctReasoning: `Option A accurately states the main purpose: explaining how monarch butterflies use antennal light signals to navigate.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To explain how monarch butterflies utilize antennal light signals...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the explanation goal.' },
        { optionIndex: 1, optionText: 'To argue that central Mexico\'s overwintering forests should receive...', trapType: 'Prescriptive Policy Trap', whyIncorrect: 'Forest conservation policy is not advocated.' },
        { optionIndex: 2, optionText: 'To compare the flight speeds of monarch butterflies with other...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Other insect species are not mentioned.' },
        { optionIndex: 3, optionText: 'To prove that solar movement across the sky disrupts monarch...', trapType: 'Direct Contradiction', whyIncorrect: 'The text states the antennal compass allows steady trajectory despite solar movement.' }
      ]
    }
  },
  {
    id: 't3-ex-27',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `Although early twentieth-century historians portrayed the Industrial Revolution in Britain as a sudden technological explosion occurring between 1760 and 1830, modern quantitative economic historians present a more gradualist model. By measuring national accounts and per capita income growth, researchers demonstrated that macroeconomic growth rates during this period were surprisingly modest, as industrial innovations were initially concentrated in a few localized sectors like cotton spinning and iron refining.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'It contrasts an older historical portrayal of the Industrial Revolution with a modern gradualist model supported by macroeconomic data.',
      'It details the invention of cotton spinning machinery and explains its immediate adoption across all British manufacturing sectors.',
      'It presents two competing economic theories and refutes both using eighteenth-century agricultural tax records.',
      'It outlines a modern economic model and calls for a return to early twentieth-century historical methodologies.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Contrast: early 20th century view (sudden technological explosion) vs modern view (gradualist model showing modest initial growth localized to cotton and iron).`,
      correctReasoning: `Option A accurately captures this structural contrast.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It contrasts an older historical portrayal... with a modern gradualist model...', trapType: 'Correct Structural Description', whyIncorrect: 'Accurately reflects the paragraph comparison.' },
        { optionIndex: 1, optionText: 'It details the invention of cotton spinning machinery and explains its immediate adoption...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states innovations were initially localized, not immediately adopted across all sectors.' },
        { optionIndex: 2, optionText: 'It presents two competing economic theories and refutes both...', trapType: 'Flop Trap', whyIncorrect: 'The text endorses the gradualist model rather than refuting both.' },
        { optionIndex: 3, optionText: 'It outlines a modern economic model and calls for a return to early...', trapType: 'Role Reversal', whyIncorrect: 'Text favors modern gradualism over older views.' }
      ]
    }
  },
  {
    id: 't3-ex-28',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In marine biology, whale fall ecosystems develop when a dead whale carcass sinks to the abyssal ocean floor. *In the first stage, known as the mobile-scavenger phase, sleeper sharks, hagfish, and giant isopods strip away the soft blubber and muscle tissue over a period of up to two years.* Subsequent stages involve bone-eating worms and chemosynthetic bacteria consuming remaining lipids, supporting complex biological communities for decades.`,
    questionText: `Which choice best describes the function of the highlighted sentence in the text?`,
    options: [
      'It describes the initial biological stage in a multi-phase ecological succession process.',
      'It refutes the claim that deep-sea scavengers consume bone tissue.',
      'It compares the feeding habits of sleeper sharks with surface pelagic predators.',
      'It introduces a theoretical hypothesis regarding deep-sea nutrient dispersal.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1 introduces whale fall ecosystems on the ocean floor. Sentence 2 (highlighted) explicitly describes "the first stage, known as the mobile-scavenger phase". Sentence 3 describes "subsequent stages".`,
      correctReasoning: `Option A accurately states the function: describing the initial stage in a multi-phase succession process.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It describes the initial biological stage in a multi-phase...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately captures the highlighted sentence\'s role.' },
        { optionIndex: 1, optionText: 'It refutes the claim that deep-sea scavengers consume bone tissue.', trapType: 'Direct Contradiction', whyIncorrect: 'Sentence 3 confirms bone-eating worms consume bone lipids.' },
        { optionIndex: 2, optionText: 'It compares the feeding habits of sleeper sharks with surface pelagic...', trapType: 'Missing Comparison', whyIncorrect: 'Surface pelagic predators are not mentioned.' },
        { optionIndex: 3, optionText: 'It introduces a theoretical hypothesis regarding deep-sea...', trapType: 'Fact vs Hypothesis Trap', whyIncorrect: 'The sentence describes an observed multi-stage process, not an unverified hypothesis.' }
      ]
    }
  },
  {
    id: 't3-ex-29',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `While mid-twentieth-century linguists assumed that sign languages were mere crude visual gestures mirroring spoken grammar, pioneering research by William Stokoe in the 1960s overturned this view. Stokoe demonstrated that American Sign Language (ASL) possesses its own distinct phonology, morphology, and syntax independent of English. His work proved that sign languages are fully fledged natural languages capable of expressing abstract concepts with complete grammatical complexity.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To highlight Stokoe\'s groundbreaking research demonstrating that sign languages are autonomous, complex natural languages.',
      'To describe how spoken English grammar was incorporated into early sign language dictionaries.',
      'To argue that visual gestures are superior to spoken phonology in communicating complex emotions.',
      'To criticize 1960s linguists for refusing to publish Stokoe\'s research on sign language syntax.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Contrast: mid-20th century view (sign languages = crude visual gestures) vs Stokoe's 1960s breakthrough (ASL has distinct phonology, morphology, syntax, fully fledged natural language).`,
      correctReasoning: `Option A accurately summarizes the purpose: highlighting Stokoe's research proving sign language autonomy and complexity.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To highlight Stokoe\'s groundbreaking research demonstrating...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the main thesis.' },
        { optionIndex: 1, optionText: 'To describe how spoken English grammar was incorporated...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states ASL possesses syntax independent of English.' },
        { optionIndex: 2, optionText: 'To argue that visual gestures are superior to spoken phonology...', trapType: 'Unsupported Hierarchy', whyIncorrect: 'Text places sign languages on equal footing as natural languages, not "superior".' },
        { optionIndex: 3, optionText: 'To criticize 1960s linguists for refusing to publish...', trapType: 'Fabricated History', whyIncorrect: 'Refusal to publish is not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-30',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In agricultural science, soil compaction caused by heavy machinery reduces crop root penetration and water infiltration. Researchers tested two mitigation strategies: mechanical subsoiling (deep plowing) and bio-tillage using deep-rooting radish cover crops. While mechanical subsoiling provided immediate compaction relief, bio-tillage created long-lasting root channels that improved soil structure across three subsequent growing seasons without disrupting soil microbes.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'An agricultural problem is introduced, two mitigation strategies are tested, and their comparative effects over time are described.',
      'A new plowing machine is described, its high purchasing cost is criticized, and an alternative manufacturer is recommended.',
      'Two cover crop species are evaluated for drought resistance, and a planting schedule is outlined.',
      'A soil degradation crisis is declared untreatable, and farm abandonment rates are summarized.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Problem (soil compaction) -> 2. Two strategies tested (mechanical subsoiling vs radish bio-tillage) -> 3. Comparative results (subsoiling = immediate relief; bio-tillage = 3-year lasting channels without microbial disruption).`,
      correctReasoning: `Option A accurately states this 3-step organization.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'An agricultural problem is introduced, two mitigation strategies...', trapType: 'Correct Structural Overview', whyIncorrect: 'Matches paragraph structure precisely.' },
        { optionIndex: 1, optionText: 'A new plowing machine is described, its high purchasing cost...', trapType: 'Fabricated Critique', whyIncorrect: 'Machine cost is not mentioned.' },
        { optionIndex: 2, optionText: 'Two cover crop species are evaluated for drought resistance...', trapType: 'Scope Swap', whyIncorrect: 'Compaction mitigation is tested, not drought resistance.' },
        { optionIndex: 3, optionText: 'A soil degradation crisis is declared untreatable...', trapType: 'Direct Contradiction', whyIncorrect: 'Text shows two functional treatments.' }
      ]
    }
  },
  {
    id: 't3-ex-31',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In astrophysics, dark matter cannot be directly observed because it emits no electromagnetic radiation. *However, astrophysicists infer its existence and distribution through gravitational lensing—the bending of light from distant background galaxies as it passes near massive, invisible dark matter halos.* By measuring the degree of light distortion, scientists construct detailed maps of cosmic mass distribution across the universe.`,
    questionText: `Which choice best describes the function of the highlighted sentence in the passage?`,
    options: [
      'It introduces an indirect observational method that enables scientists to detect an invisible cosmic entity.',
      'It refutes the theoretical framework predicting dark matter halos.',
      'It compares gravitational lensing with traditional radio telescope imaging.',
      'It presents empirical evidence proving that background galaxies emit no light.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1 states dark matter cannot be observed directly because it emits no light. Sentence 2 (highlighted) begins with "However" and introduces gravitational lensing as the indirect method to infer its presence. Sentence 3 shows the result (mapping cosmic mass).`,
      correctReasoning: `Option A accurately states the function: introducing an indirect observational method to detect an invisible entity.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It introduces an indirect observational method that enables...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately captures the highlighted sentence\'s purpose.' },
        { optionIndex: 1, optionText: 'It refutes the theoretical framework predicting dark matter halos.', trapType: 'Direct Contradiction', whyIncorrect: 'Gravitational lensing confirms dark matter halos rather than refuting them.' },
        { optionIndex: 2, optionText: 'It compares gravitational lensing with traditional radio telescope...', trapType: 'Missing Comparison', whyIncorrect: 'Radio telescopes are not mentioned.' },
        { optionIndex: 3, optionText: 'It presents empirical evidence proving that background galaxies emit no light.', trapType: 'Direct Contradiction', whyIncorrect: 'Background galaxies emit light that is bent by lensing.' }
      ]
    }
  },
  {
    id: 't3-ex-32',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In literary history, Mary Ann Evans published her acclaimed nineteenth-century novels under the male pen name George Eliot. While many assumed she adopted a pseudonym solely to bypass Victorian prejudice against female authors, literary historians emphasize that Evans also sought to shield her private life from gossip and ensure her fiction was evaluated independently of her unconventional personal relationships.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To present multiple reasons behind Evans\'s choice of a pseudonym beyond simply avoiding gender bias.',
      'To prove that Victorian readers preferred male authors over female authors in every literary genre.',
      'To compare the novels of George Eliot with those written by Charlotte Brontë.',
      'To argue that Evans regret using a pen name later in her literary career.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage presents Evans/Eliot using a pen name. It acknowledges the common view (bypassing gender bias) and highlights additional motivations (privacy, avoiding personal gossip).`,
      correctReasoning: `Option A accurately summarizes the purpose: presenting multiple reasons for using a pseudonym beyond simple gender bias.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To present multiple reasons behind Evans\'s choice of a pseudonym...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the expanded explanation.' },
        { optionIndex: 1, optionText: 'To prove that Victorian readers preferred male authors...', trapType: 'Extreme Generalization', whyIncorrect: 'Text mentions prejudice against female authors, but does not assert male preference in every genre.' },
        { optionIndex: 2, optionText: 'To compare the novels of George Eliot with those written by Charlotte Brontë.', trapType: 'Unmentioned Comparison', whyIncorrect: 'Brontë is not mentioned.' },
        { optionIndex: 3, optionText: 'To argue that Evans regret using a pen name later...', trapType: 'Fabricated History', whyIncorrect: 'Regret is never mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-33',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `While early twentieth-century economists treated natural resources as limitless inputs in industrial production functions, ecological economist Herman Daly introduced the concept of steady-state economics in the 1970s. Daly argued that human economic systems are subsystems embedded within a finite global biosphere. Consequently, continuous physical growth must eventually encounter planetary boundaries, necessitating a transition toward an economy focused on qualitative development and resource throughput stability rather than quantitative expansion.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To explain Daly\'s steady-state economic model as a challenge to traditional assumptions of infinite economic expansion.',
      'To prove that natural resources are infinite when managed by market pricing mechanisms.',
      'To detail the historical debate between Daly and early nineteenth-century agricultural economists.',
      'To advocate for immediate nationalization of all heavy manufacturing industries.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Contrast: old economic assumption (resources as limitless inputs) vs Daly's steady-state model (economy is a subsystem of a finite biosphere, physical growth hits planetary boundaries, shift to qualitative stability needed).`,
      correctReasoning: `Option A accurately states the purpose: explaining Daly's model as a challenge to infinite growth assumptions.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To explain Daly\'s steady-state economic model as a challenge...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the main thesis.' },
        { optionIndex: 1, optionText: 'To prove that natural resources are infinite when managed...', trapType: 'Direct Contradiction', whyIncorrect: 'The text emphasizes planetary boundaries and finite resources.' },
        { optionIndex: 2, optionText: 'To detail the historical debate between Daly and early nineteenth-century...', trapType: 'Anachronistic Debate', whyIncorrect: 'Early 20th century economists are mentioned, but no formal direct debate with 19th century economists is detailed.' },
        { optionIndex: 3, optionText: 'To advocate for immediate nationalization of all heavy manufacturing...', trapType: 'Unmentioned Policy Trap', whyIncorrect: 'Industry nationalization is not advocated.' }
      ]
    }
  },
  {
    id: 't3-ex-34',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In cellular biology, mitochondria are known as the powerhouses of the cell, generating ATP through oxidative phosphorylation. Scientists discovered that mitochondria evolved from free-living alpha-proteobacteria that were engulfed by ancestral eukaryotic cells over 1.5 billion years ago—a process known as endosymbiosis. Supporting this theory, mitochondria retain their own circular DNA and replicate independently via binary fission inside host cells.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'A cellular component\'s primary function is stated, its evolutionary origin theory is introduced, and supporting biological evidence is detailed.',
      'A scientific controversy is summarized, two competing hypotheses are tested, and a winner is declared.',
      'A cell organelle is described, its structural defects are analyzed, and a genetic therapy is proposed.',
      'An evolutionary timeline is criticized, and revised fossil dates are published.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Primary function (ATP generation powerhouse) -> 2. Endosymbiotic origin theory introduced (engulfed bacteria 1.5B years ago) -> 3. Supporting evidence (circular DNA, independent binary fission replication).`,
      correctReasoning: `Option A accurately describes this 3-step structural organization.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'A cellular component\'s primary function is stated, its evolutionary...', trapType: 'Correct Structural Overview', whyIncorrect: 'Matches paragraph structure precisely.' },
        { optionIndex: 1, optionText: 'A scientific controversy is summarized, two competing hypotheses...', trapType: 'Missing Competing Hypothesis', whyIncorrect: 'No competing hypothesis is presented.' },
        { optionIndex: 2, optionText: 'A cell organelle is described, its structural defects are analyzed...', trapType: 'Fabricated Defects', whyIncorrect: 'Structural defects and therapies are not mentioned.' },
        { optionIndex: 3, optionText: 'An evolutionary timeline is criticized, and revised fossil dates...', trapType: 'Misidentified Genre', whyIncorrect: 'Fossil dates are not published.' }
      ]
    }
  },
  {
    id: 't3-ex-35',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In paleoclimatology, tree-ring width series (dendrochronology) serve as high-resolution proxies for annual precipitation. *However, ecologist Dr. Maria Santos warns that temperature stress during extreme heatwaves can induce stomatal closure, suppressing tree growth even during high-rainfall years.* Santos argues that failing to decouple moisture signals from thermal stress leads to significant paleoclimate overestimations.`,
    questionText: `Which choice best describes the function of the highlighted sentence in the passage?`,
    options: [
      'It introduces a physiological limitation that complicates the straightforward interpretation of a climate proxy.',
      'It provides empirical data confirming the absolute accuracy of dendrochronology.',
      'It refutes the claim that trees require stomatal opening for gas exchange.',
      'It compares tree-ring width data with ice-core temperature measurements.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1 introduces tree-ring width as a proxy for precipitation. Sentence 2 (highlighted) begins with "However" and warns that extreme heat induces stomatal closure suppressing growth despite rain. Sentence 3 shows the consequence (overestimation if signals aren't decoupled).`,
      correctReasoning: `Option A accurately states the function: introducing a physiological limitation complicating proxy interpretation.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It introduces a physiological limitation that complicates...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately describes how sentence 2 qualifies sentence 1.' },
        { optionIndex: 1, optionText: 'It provides empirical data confirming the absolute accuracy...', trapType: 'Direct Contradiction', whyIncorrect: 'Sentence 2 warns of inaccuracies, rather than confirming absolute accuracy.' },
        { optionIndex: 2, optionText: 'It refutes the claim that trees require stomatal opening...', trapType: 'Biochemical Fallacy', whyIncorrect: 'Sentence 2 confirms heat causes closure, not refuting gas exchange principles.' },
        { optionIndex: 3, optionText: 'It compares tree-ring width data with ice-core temperature...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Ice-core measurements are not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-36',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In urban architecture, green roofs (rooftops planted with vegetation) offer substantial environmental benefits, including stormwater runoff reduction and building insulation. However, structural engineers emphasize that retrofitting older buildings with green roofs requires extensive structural reinforcement. The added weight of saturated soil and plant biomass during heavy rains can exceed retrofitted load capacities, posing structural risk if unaddressed.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To highlight a structural engineering requirement that must be addressed when installing green roofs on older buildings.',
      'To argue that green roofs should be banned on all commercial properties.',
      'To compare stormwater absorption rates across different green roof plant species.',
      'To prove that green roofs provide no insulation benefit during winter months.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage acknowledges green roof benefits, then uses "However" to focus on the structural engineering requirement for reinforcement on older buildings to prevent overloading.`,
      correctReasoning: `Option A accurately states the purpose: highlighting a structural engineering requirement when retrofitting green roofs on older buildings.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To highlight a structural engineering requirement that must be...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the author\'s warning.' },
        { optionIndex: 1, optionText: 'To argue that green roofs should be banned on all commercial properties.', trapType: 'Extreme Recommendation Trap', whyIncorrect: 'Banning green roofs is not advocated; engineering reinforcement is required.' },
        { optionIndex: 2, optionText: 'To compare stormwater absorption rates across different green roof plant...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Plant species comparison is not made.' },
        { optionIndex: 3, optionText: 'To prove that green roofs provide no insulation benefit...', trapType: 'Direct Contradiction', whyIncorrect: 'Sentence 1 explicitly states green roofs offer building insulation benefits.' }
      ]
    }
  },
  {
    id: 't3-ex-37',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `While mid-nineteenth-century literary critics viewed American poet Walt Whitman's *Leaves of Grass* as an undisciplined collection of unrhymed free verse, modern scholars recognize it as a deliberate formal revolution. By discarding traditional European poetic meters and adopting the expansive cadence of biblical prose and oratorical speech, Whitman constructed an open-ended poetic structure capable of reflecting the geographic vastness and democratic diversity of the young United States.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To explain how modern scholars view Whitman\'s stylistic choices as an intentional formal innovation designed to reflect American national identity.',
      'To criticize Whitman for failing to master traditional European poetic meters.',
      'To argue that biblical prose is superior to oratorical speech as a foundation for poetry.',
      'To demonstrate that nineteenth-century American readers unanimously embraced free verse.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Contrast: early 19th century critique (undisciplined free verse) vs modern view (deliberate formal revolution adopting biblical/oratorical cadences to express American vastness and democracy).`,
      correctReasoning: `Option A accurately captures the modern scholarly perspective on Whitman's intentional stylistic choices.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To explain how modern scholars view Whitman\'s stylistic choices...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately states the central thesis.' },
        { optionIndex: 1, optionText: 'To criticize Whitman for failing to master traditional European meters.', trapType: 'Direct Contradiction', whyIncorrect: 'Modern scholars view discarding European meters as a deliberate innovation, not a failure.' },
        { optionIndex: 2, optionText: 'To argue that biblical prose is superior to oratorical speech...', trapType: 'False Hierarchy', whyIncorrect: 'Whitman combined both cadences without declaring one superior.' },
        { optionIndex: 3, optionText: 'To demonstrate that nineteenth-century American readers unanimously...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states early critics viewed it as undisciplined.' }
      ]
    }
  },
  {
    id: 't3-ex-38',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In marine zoology, electric eels generate high-voltage electrical discharges using thousands of modified muscle cells called electrocytes. Scientists discovered that these discharges serve a dual purpose: high-frequency pulses paralyze prey by triggering involuntary muscle spasms, while low-frequency pulses act as a active sensory radar to navigate murky Amazonian river waters.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'A physiological mechanism is identified, and two distinct functional uses of that mechanism are described.',
      'A marine species is introduced, its extinction risk is evaluated, and a habitat reserve is proposed.',
      'Two predator hunting strategies are contrasted, and the more effective strategy is selected.',
      'A scientific myth is presented, and laboratory experiment results refute it.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Mechanism identified (electrocytes generating electrical discharges) -> 2. Dual functional uses described (high-frequency = paralyze prey; low-frequency = sensory radar navigation).`,
      correctReasoning: `Option A accurately describes this 2-part organization.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'A physiological mechanism is identified, and two distinct functional...', trapType: 'Correct Structural Overview', whyIncorrect: 'Matches paragraph structure precisely.' },
        { optionIndex: 1, optionText: 'A marine species is introduced, its extinction risk is evaluated...', trapType: 'Conservation Trap', whyIncorrect: 'Extinction risk and habitat reserves are not mentioned.' },
        { optionIndex: 2, optionText: 'Two predator hunting strategies are contrasted, and the more effective...', trapType: 'False Dichotomy', whyIncorrect: 'The two pulse frequencies are complementary functions, not competing hunting strategies.' },
        { optionIndex: 3, optionText: 'A scientific myth is presented, and laboratory experiment results refute it.', trapType: 'Misidentified Genre', whyIncorrect: 'No myth or refutation is presented.' }
      ]
    }
  },
  {
    id: 't3-ex-39',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In modern sociology, Pierre Bourdieu introduced the concept of "cultural capital" to explain how non-economic assets—such as formal education, artistic literacy, and linguistic style—perpetuate social stratification across generations. Bourdieu demonstrated that educational systems implicitly reward the cultural capital of upper-class families while penalizing working-class habits, converting inherited social privilege into apparent individual academic merit.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To explain Bourdieu\'s theory of cultural capital and its role in maintaining social inequality through education.',
      'To advocate for eliminating formal artistic education from secondary school curricula.',
      'To compare Bourdieu\'s sociological theories with economic models of wealth inheritance.',
      'To prove that academic achievement is determined exclusively by genetic intelligence.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage introduces Bourdieu's concept of cultural capital (education, artistic literacy, style) and explains how schools reward upper-class cultural capital, reproducing social stratification.`,
      correctReasoning: `Option A accurately states the purpose: explaining Bourdieu's theory of cultural capital and its role in social inequality.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To explain Bourdieu\'s theory of cultural capital and its role...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the explanation goal.' },
        { optionIndex: 1, optionText: 'To advocate for eliminating formal artistic education...', trapType: 'Prescriptive Policy Trap', whyIncorrect: 'Eliminating artistic education is not advocated.' },
        { optionIndex: 2, optionText: 'To compare Bourdieu\'s sociological theories with economic models...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Economic models of wealth inheritance are not compared.' },
        { optionIndex: 3, optionText: 'To prove that academic achievement is determined exclusively...', trapType: 'Direct Contradiction', whyIncorrect: 'Bourdieu\'s theory emphasizes social/cultural capital over innate genetic intelligence.' }
      ]
    }
  },
  {
    id: 't3-ex-40',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In agricultural botany, coffee plants produce caffeine in their leaves and nectar. While caffeine in leaves deters herbivorous insects by acting as a natural toxin, researchers discovered that low concentrations of caffeine in floral nectar enhance pollinator memory. Honeybees feeding on caffeinated nectar were three times more likely to remember a flower's scent and return to pollinate the same species.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'A chemical compound produced by a plant is identified, its protective leaf function is noted, and its surprising benefit for pollination is detailed.',
      'Two coffee species are evaluated for yield efficiency, and a hybridization program is outlined.',
      'An agricultural toxin is analyzed, its environmental damage is condemned, and a synthetic replacement is proposed.',
      'Honeybee foraging behaviors are described, and a decline in hive populations is explained.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Chemical identified (caffeine in coffee leaves and nectar) -> 2. Protective leaf function (deters herbivorous insects) -> 3. Surprising nectar benefit (enhances pollinator memory 3x).`,
      correctReasoning: `Option A accurately captures this structural progression.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'A chemical compound produced by a plant is identified, its protective...', trapType: 'Correct Structural Overview', whyIncorrect: 'Matches paragraph structure precisely.' },
        { optionIndex: 1, optionText: 'Two coffee species are evaluated for yield efficiency...', trapType: 'Scope Swap', whyIncorrect: 'Coffee species yield is not compared.' },
        { optionIndex: 2, optionText: 'An agricultural toxin is analyzed, its environmental damage is condemned...', trapType: 'Flop Trap', whyIncorrect: 'Caffeine is a natural plant defense, not a condemned agricultural pollutant.' },
        { optionIndex: 3, optionText: 'Honeybee foraging behaviors are described, and a decline in hive...', trapType: 'Missing Hive Decline', whyIncorrect: 'Hive population decline is not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-41',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `While early historians attributed the fall of the Western Roman Empire primarily to barbarian invasions, modern environmental historians highlight the role of catastrophic climate instability. *High-resolution tree-ring and ice-core data indicate that the fifth century CE was marked by severe megadroughts and sudden cooling spells that decimated Mediterranean grain harvests.* These climate shocks triggered widespread famine, economic collapse, and mass migrations, severely weakening Roman state capacity prior to external military incursions.`,
    questionText: `Which choice best describes the function of the highlighted sentence in the passage?`,
    options: [
      'It presents empirical paleoclimate data that supports the modern environmental explanation for Roman collapse.',
      'It refutes the claim that fifth-century CE tree rings reflect precipitation changes.',
      'It compares Mediterranean agricultural output with northern European grain harvests.',
      'It demonstrates that barbarian armies used environmental warfare tactics.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1 introduces the contrast between traditional views (barbarian invasions) and modern views (climate instability). Sentence 2 (highlighted) provides paleoclimate tree-ring/ice-core data showing megadroughts and cooling. Sentence 3 shows how this led to famine and state weakening.`,
      correctReasoning: `Option A accurately states the function: presenting empirical paleoclimate data supporting the modern environmental explanation.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It presents empirical paleoclimate data that supports the modern...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately describes how sentence 2 supports sentence 1.' },
        { optionIndex: 1, optionText: 'It refutes the claim that fifth-century CE tree rings reflect...', trapType: 'Direct Contradiction', whyIncorrect: 'The text endorses tree-ring data.' },
        { optionIndex: 2, optionText: 'It compares Mediterranean agricultural output with northern European...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Northern European harvests are not mentioned.' },
        { optionIndex: 3, optionText: 'It demonstrates that barbarian armies used environmental warfare...', trapType: 'Fabricated Cause', whyIncorrect: 'Environmental warfare tactics by barbarians are not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-42',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In marine geology, deep-sea trenches are formed at convergent tectonic boundaries where one oceanic plate slides beneath another into the Earth's mantle—a process known as subduction. Subduction zones generate intense megathrust earthquakes and volcanic arcs, shaping the deepest regions of the ocean floor, such as the Mariana Trench, which descends over 10,900 meters below sea level.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To explain the geological process of subduction and its role in creating deep-sea trenches.',
      'To compare the water pressure of the Mariana Trench with shallower ocean basins.',
      'To advocate for submarine exploration of convergent tectonic boundaries.',
      'To prove that megathrust earthquakes can be prevented by mantle drilling.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage defines deep-sea trench formation via subduction at convergent boundaries and notes resulting earthquakes, volcanic arcs, and Mariana Trench depth.`,
      correctReasoning: `Option A accurately states the main purpose: explaining subduction and trench formation.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To explain the geological process of subduction and its role...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the explanation goal.' },
        { optionIndex: 1, optionText: 'To compare the water pressure of the Mariana Trench...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Water pressure comparison is not made.' },
        { optionIndex: 2, optionText: 'To advocate for submarine exploration...', trapType: 'Prescriptive Policy Trap', whyIncorrect: 'Submarine exploration is not advocated.' },
        { optionIndex: 3, optionText: 'To prove that megathrust earthquakes can be prevented...', trapType: 'Unrealistic Prevention Trap', whyIncorrect: 'Preventing earthquakes by mantle drilling is not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-43',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `Although early twentieth-century economists viewed corporate vertical integration—owning every stage of production from raw materials to retail—as the optimal strategy for industrial efficiency, transaction cost economist Oliver Williamson proposed a more selective theory in the 1970s. Williamson demonstrated that internalizing production stages is beneficial only when market transaction costs (such as contract negotiation and supplier opportunism risks) are high; otherwise, outsourcing to specialized market suppliers yields higher operational efficiency.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To present Williamson\'s transaction cost theory, which qualified earlier assumptions about the universal benefits of vertical integration.',
      'To argue that corporate vertical integration is obsolete in all modern technology industries.',
      'To refute the claim that contract negotiation poses financial risks to manufacturing firms.',
      'To detail the historical merger between two early twentieth-century industrial monopolies.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Contrast: early view (vertical integration = always optimal) vs Williamson's theory (integration is beneficial ONLY when market transaction costs are high; otherwise outsourcing is better).`,
      correctReasoning: `Option A accurately states the purpose: presenting Williamson's theory that qualified earlier assumptions.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To present Williamson\'s transaction cost theory, which qualified...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the nuanced thesis.' },
        { optionIndex: 1, optionText: 'To argue that corporate vertical integration is obsolete in all...', trapType: 'Extreme Absolutist Trap', whyIncorrect: 'Text states integration is still beneficial when transaction costs are high.' },
        { optionIndex: 2, optionText: 'To refute the claim that contract negotiation poses financial risks...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states contract negotiation and supplier opportunism ARE risks.' },
        { optionIndex: 3, optionText: 'To detail the historical merger between two early twentieth-century...', trapType: 'Fabricated History', whyIncorrect: 'Specific corporate mergers are not detailed.' }
      ]
    }
  },
  {
    id: 't3-ex-44',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In avian biology, flamingos possess specialized filter-feeding bills adapted for straining microscopic algae and brine shrimp from alkaline lakes. Flamingos feed upside down by submerging their heads and using their muscular tongues as a pump to force water through comb-like structures called lamellae, which trap food organisms while expelling excess water.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'A specialized anatomical adaptation is introduced, and its precise physical feeding mechanism is described.',
      'An endangered bird species is identified, and habitat loss in alkaline lakes is analyzed.',
      'Two feeding strategies in aquatic birds are contrasted, and evolutionary speed is measured.',
      'A nutritional deficiency in flamingos is diagnosed, and a diet modification is recommended.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Specialized adaptation introduced (filter-feeding bill) -> 2. Precise physical mechanism described (feeding upside down, tongue pump, lamellae trapping algae/shrimp).`,
      correctReasoning: `Option A accurately states this 2-part organization.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'A specialized anatomical adaptation is introduced, and its precise...', trapType: 'Correct Structural Overview', whyIncorrect: 'Matches paragraph structure precisely.' },
        { optionIndex: 1, optionText: 'An endangered bird species is identified, and habitat loss...', trapType: 'Conservation Trap', whyIncorrect: 'Endangerment and habitat loss are not mentioned.' },
        { optionIndex: 2, optionText: 'Two feeding strategies in aquatic birds are contrasted...', trapType: 'Missing Contrast', whyIncorrect: 'Only flamingos are described.' },
        { optionIndex: 3, optionText: 'A nutritional deficiency in flamingos is diagnosed...', trapType: 'Veterinary Trap', whyIncorrect: 'Nutritional deficiencies are not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-45',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In cognitive psychology, the "spacing effect" demonstrates that long-term memory retention is significantly higher when learning sessions are spaced over time rather than crammed into a single block. *Functional neuroimaging reveals that spaced learning allows time for neural protein synthesis and synaptic consolidation between study sessions, transforming fragile short-term memory traces into durable long-term storage.*`,
    questionText: `Which choice best describes the function of the highlighted sentence in the passage?`,
    options: [
      'It details the underlying neurological mechanism that accounts for a cognitive phenomenon introduced earlier.',
      'It presents empirical data refuting the existence of the spacing effect.',
      'It compares massed study sessions with computer-assisted memory testing.',
      'It proposes a revised definition of short-term sensory memory.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1 introduces the "spacing effect" (spaced learning leads to higher retention than cramming). Sentence 2 (highlighted) provides the neuroimaging explanation (protein synthesis and synaptic consolidation transforming short-term into long-term storage).`,
      correctReasoning: `Option A accurately states the function: detailing the underlying neurological mechanism.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It details the underlying neurological mechanism that accounts...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately states how sentence 2 explains sentence 1.' },
        { optionIndex: 1, optionText: 'It presents empirical data refuting the existence of the spacing effect.', trapType: 'Direct Contradiction', whyIncorrect: 'Sentence 2 explains and confirms the spacing effect.' },
        { optionIndex: 2, optionText: 'It compares massed study sessions with computer-assisted...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Computer-assisted testing is not mentioned.' },
        { optionIndex: 3, optionText: 'It proposes a revised definition of short-term sensory memory.', trapType: 'Scope Swap', whyIncorrect: 'Re-defining sensory memory is not the purpose.' }
      ]
    }
  },
  {
    id: 't3-ex-46',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In marine biology, cuttlefish are famed for their ability to instantaneously alter their skin color and texture for camouflage. Skin color changes are controlled by chromatophores—pigment-filled sacs expanded or contracted by small muscles under direct neural command. Meanwhile, skin texture changes are achieved through papillae, muscular projection bundles in the skin that can extend outward to mimic rough rocks or smooth ocean sand.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To explain the biological mechanisms behind cuttlefish color and texture camouflage.',
      'To argue that cuttlefish possess higher intelligence than other marine invertebrates.',
      'To compare cuttlefish camouflage speed with that of tropical chameleons.',
      'To describe how marine biologists capture cuttlefish for aquarium research.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage explains cuttlefish camouflage mechanisms: color via chromatophores under neural command, texture via muscular papillae mimicry.`,
      correctReasoning: `Option A accurately states the purpose: explaining the biological mechanisms behind cuttlefish color and texture camouflage.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To explain the biological mechanisms behind cuttlefish color...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the explanation goal.' },
        { optionIndex: 1, optionText: 'To argue that cuttlefish possess higher intelligence than other...', trapType: 'Unmentioned Intelligence Claim', whyIncorrect: 'Intelligence is not evaluated.' },
        { optionIndex: 2, optionText: 'To compare cuttlefish camouflage speed with that of tropical chameleons.', trapType: 'Unmentioned Species', whyIncorrect: 'Chameleons are not mentioned.' },
        { optionIndex: 3, optionText: 'To describe how marine biologists capture cuttlefish...', trapType: 'Unmentioned Field Method', whyIncorrect: 'Aquarium capture is not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-47',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `While nineteenth-century historians viewed medieval European guilds as monopolistic trade barriers that suppressed technical innovation, modern economic historians offer a revised perspective. Scholars like S.R. Epstein demonstrate that guilds facilitated innovation by enforcing apprenticeship quality standards and protecting master craftsmen\'s trade secrets, creating economic incentives for skill investment and technology diffusion across regional trade networks.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To present modern research that challenges nineteenth-century views on the role of guilds in technological innovation.',
      'To prove that medieval guilds eliminated all commercial competition in European cities.',
      'To compare medieval European guild apprenticeship systems with modern industrial trade unions.',
      'To argue that master craftsmen should receive royalty payments for historical trade secrets.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Contrast: 19th-century view (monopolistic trade barriers suppressing innovation) vs modern view (Epstein showing guilds facilitated innovation via quality standards and secret protection).`,
      correctReasoning: `Option A accurately captures the revised scholarly perspective.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To present modern research that challenges nineteenth-century views...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately states the core goal.' },
        { optionIndex: 1, optionText: 'To prove that medieval guilds eliminated all commercial competition...', trapType: 'Direct Contradiction', whyIncorrect: 'Text presents modern view showing guilds fostered economic incentives rather than purely suppressing trade.' },
        { optionIndex: 2, optionText: 'To compare medieval European guild apprenticeship systems with modern...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Modern trade unions are not mentioned.' },
        { optionIndex: 3, optionText: 'To argue that master craftsmen should receive royalty payments...', trapType: 'Prescriptive Policy Trap', whyIncorrect: 'Royalty payments are not advocated.' }
      ]
    }
  },
  {
    id: 't3-ex-48',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In climatology, urban trees reduce city temperatures through both direct shading and evapotranspiration. During evapotranspiration, roots absorb soil moisture, which travels through plant tissue and evaporates from leaf stomata as water vapor, cooling surrounding ambient air as latent heat is absorbed.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'A cooling benefit of urban trees is introduced, and the physical process of evapotranspiration is detailed.',
      'A severe heatwave is described, and emergency air conditioning shelters are mapped.',
      'Two tree species are compared in terms of water consumption, and irrigation costs are calculated.',
      'An urban deforestation crisis is analyzed, and replanting legislation is drafted.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Cooling benefits of urban trees introduced (shading and evapotranspiration) -> 2. Physical process of evapotranspiration detailed (root absorption, leaf evaporation, latent heat absorption).`,
      correctReasoning: `Option A accurately describes this 2-part organization.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'A cooling benefit of urban trees is introduced, and the physical...', trapType: 'Correct Structural Overview', whyIncorrect: 'Matches paragraph structure precisely.' },
        { optionIndex: 1, optionText: 'A severe heatwave is described, and emergency air conditioning...', trapType: 'Misidentified Genre', whyIncorrect: 'Emergency shelters are not mentioned.' },
        { optionIndex: 2, optionText: 'Two tree species are compared in terms of water consumption...', trapType: 'Missing Species Comparison', whyIncorrect: 'Specific species are not compared.' },
        { optionIndex: 3, optionText: 'An urban deforestation crisis is analyzed, and replanting...', trapType: 'Misidentified Genre', whyIncorrect: 'Deforestation crises and legislation are not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-49',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In early modern European history, the invention of the printing press was long assumed to have immediately created a unified national reading public in England. *However, historian Tessa Watt demonstrated that cheap printed broadsides and ballad sheets relied heavily on oral performance and woodcut illustrations, blending print culture with existing illiterate folk traditions rather than replacing them.*`,
    questionText: `Which choice best describes the function of the highlighted sentence in the passage?`,
    options: [
      'It introduces historical evidence that qualifies an assumption about the immediate impact of print technology.',
      'It refutes the claim that woodcut illustrations were used in sixteenth-century broadsides.',
      'It proves that printed broadsides replaced oral ballad traditions within a single generation.',
      'It compares English print literacy rates with those of continental European nations.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1 introduces the assumption (printing press immediately created a unified national reading public). Sentence 2 (highlighted) begins with "However" and shows Tessa Watt's evidence (broadsides relied on oral performance and woodcuts, blending print with illiterate traditions).`,
      correctReasoning: `Option A accurately states the function: qualifying an assumption about the immediate impact of print technology.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It introduces historical evidence that qualifies an assumption...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately describes how sentence 2 modifies sentence 1.' },
        { optionIndex: 1, optionText: 'It refutes the claim that woodcut illustrations were used...', trapType: 'Direct Contradiction', whyIncorrect: 'The sentence confirms woodcuts were heavily used.' },
        { optionIndex: 2, optionText: 'It proves that printed broadsides replaced oral ballad traditions...', trapType: 'Direct Contradiction', whyIncorrect: 'The text states print blended with oral tradition "rather than replacing them".' },
        { optionIndex: 3, optionText: 'It compares English print literacy rates with those of continental...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Continental European literacy rates are not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-50',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In cognitive science, "synesthesia" is a neurological condition where stimulation of one sensory pathway leads to involuntary experiences in a second pathway. For example, individuals with chromesthesia perceive vivid colors whenever they hear specific musical tones. Research shows synesthesia runs in families and involves hyper-connected neural pathways between adjoining sensory regions in the brain cortex.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To define synesthesia, provide a specific example, and summarize current understanding of its neurological cause.',
      'To argue that all accomplished musical composers possess chromesthesia.',
      'To compare visual color perception in synesthetes with non-synesthetes during night conditions.',
      'To advocate for mandatory neurological screening of children in primary schools.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Sentence 1 defines synesthesia. Sentence 2 provides an example (chromesthesia: tones -> colors). Sentence 3 summarizes neurological causes (genetics, hyper-connected cortex pathways).`,
      correctReasoning: `Option A perfectly describes the 3-part purpose of the passage.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To define synesthesia, provide a specific example, and summarize...', trapType: 'Correct Main Purpose', whyIncorrect: 'Perfect match to passage flow.' },
        { optionIndex: 1, optionText: 'To argue that all accomplished musical composers possess chromesthesia.', trapType: 'Extreme Absolutist Trap', whyIncorrect: 'Text gives chromesthesia as an example, not claiming all composers have it.' },
        { optionIndex: 2, optionText: 'To compare visual color perception in synesthetes with non-synesthetes...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Night vision comparisons are not made.' },
        { optionIndex: 3, optionText: 'To advocate for mandatory neurological screening...', trapType: 'Prescriptive Policy Trap', whyIncorrect: 'Mandatory screening is not advocated.' }
      ]
    }
  }
];
