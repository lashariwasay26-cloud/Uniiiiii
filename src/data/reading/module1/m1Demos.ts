import { DemonstrationExample } from '../readingTypes';

export const MODULE_1_DEMOS: DemonstrationExample[] = [
  {
    demoNumber: 1,
    id: 'm1-demo-1',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In ecological restoration projects, planting native perennials can bolster soil stability against erosion. Botanist Dr. Elena Vance noted that deep root systems act as underground anchors that anchor topsoil even during torrential downpours. Consequently, land management agencies have embraced these botanical practices to ______ degradation in flood-prone river basins.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['arrest', 'accelerate', 'observe', 'ignore'],
    correctAnswer: 0,
    nextGenTechnique: 'Anchor-Vector Matching',
    strategicTakeaway: 'In high-tier Digital SAT modules, "arrest" is frequently tested in its secondary sense meaning "to stop or check the progress of", rather than "to take into police custody".',
    explanation: {
      passageDeconstruction: `The passage explains that native perennials stabilize soil against erosion and act as underground anchors during torrential rain. Land management agencies adopt these practices to combat land degradation in river basins.`,
      correctReasoning: `The context indicates that planting native perennials prevents or stops soil degradation. The secondary definition of "arrest" is "to stop, check, or halt a process". Thus, "arrest degradation" means "halt degradation".`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'accelerate',
          trapType: 'Flop Trap / Opposite Meaning',
          whyIncorrect: 'Accelerate means to speed up or worsen. The native perennials prevent degradation, so agencies would not use them to accelerate degradation.'
        },
        {
          optionIndex: 2,
          optionText: 'observe',
          trapType: 'Weak / Ineffective Verb',
          whyIncorrect: 'Observe means to watch. Agencies are actively planting perennials to prevent damage, not merely to watch degradation happen.'
        },
        {
          optionIndex: 3,
          optionText: 'ignore',
          trapType: 'Logical Contradiction',
          whyIncorrect: 'Ignore means to disregard. Adopting restoration practices is an active effort to address degradation, not ignore it.'
        }
      ]
    }
  },
  {
    demoNumber: 2,
    id: 'm1-demo-2',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `While early twentieth-century art critics dismissed the artist's geometric abstraction as merely decorative, contemporary scholars contend that her compositions possess a rigorous intellectual logic. Far from being an exercise in superficial ornamentation, her work reflects a deeply deliberate effort to ______ the chaos of modern urban existence into serene visual harmony.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['transmute', 'exacerbate', 'countermand', 'disseminate'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot & Secondary Meaning Alignment',
    strategicTakeaway: 'Look for contrast pivots ("Far from being..."). The transition shows a conversion from "chaos of modern urban existence" into "serene visual harmony". "Transmute" precisely captures converting one state into another.',
    explanation: {
      passageDeconstruction: `The passage sets up a contrast between early critics who saw her work as superficial ornamentation and modern scholars who see rigorous logic. The second sentence contrasts superficial art with a deliberate effort to change urban chaos into visual harmony.`,
      correctReasoning: `'Transmute' means to transform or change form, nature, or substance into another (here, transforming chaos into serene visual harmony).`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'exacerbate',
          trapType: 'Opposite Meaning',
          whyIncorrect: 'Exacerbate means to make a problem or bad situation worse. The artist is turning chaos into harmony, not making the chaos worse.'
        },
        {
          optionIndex: 2,
          optionText: 'countermand',
          trapType: 'Inappropriate Domain / False Precision',
          whyIncorrect: 'Countermand means to revoke an official command or order (e.g., military or legal order). It does not fit the context of transforming physical/visual artistic concepts.'
        },
        {
          optionIndex: 3,
          optionText: 'disseminate',
          trapType: 'Vocabulary Shift',
          whyIncorrect: 'Disseminate means to spread or disperse information widely. Spreading urban chaos does not logically yield visual harmony.'
        }
      ]
    }
  },
  {
    demoNumber: 3,
    id: 'm1-demo-3',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In his 1884 treatise on civic architecture, urban theorist Julian Ross urged planners to remain vigilant against the encroachment of purely utilitarian structures. He argued that public buildings should not merely satisfy mechanical functions, but must also ______ the cultural aspirations of the community, serving as enduring monuments of civic pride.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['evince', 'vitiate', 'preclude', 'obfuscate'],
    correctAnswer: 0,
    nextGenTechnique: 'Anchor Synonym Vector',
    strategicTakeaway: 'The target word must mean "demonstrate", "display", or "give clear evidence of". High-level vocabulary like "evince" satisfies this precise semantic requirement.',
    explanation: {
      passageDeconstruction: `Ross argues that public buildings must go beyond utility to display and manifest the cultural aspirations and civic pride of the community.`,
      correctReasoning: `'Evince' means to reveal, manifest, or show clearly (e.g., evincing cultural aspirations). It fits the context of expressing civic pride through architecture.`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'vitiate',
          trapType: 'Opposite Tone / Negative Trap',
          whyIncorrect: 'Vitiate means to spoil, impair, or corrupt the quality or efficiency of something. The author wants public buildings to honor cultural aspirations, not corrupt them.'
        },
        {
          optionIndex: 2,
          optionText: 'preclude',
          trapType: 'Logical Inversion',
          whyIncorrect: 'Preclude means to prevent from happening or make impossible. Buildings should express aspirations, not prevent them.'
        },
        {
          optionIndex: 3,
          optionText: 'obfuscate',
          trapType: 'Negative Tone Trap',
          whyIncorrect: 'Obfuscate means to render obscure, unclear, or unintelligible. Ross wants architecture to represent civic pride clearly, not hide or obscure it.'
        }
      ]
    }
  },
  {
    demoNumber: 4,
    id: 'm1-demo-4',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `During the mid-nineteenth century, steam locomotive technology advanced rapidly across North America. Although early models were notoriously inefficient and prone to frequent mechanical breakdowns, subsequent engineering refinements rendered late-century locomotives far more ______ and capable of sustained long-distance transit.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['reliable', 'unpredictable', 'expensive', 'obsolete'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Clue Pivot ("Although...")',
    strategicTakeaway: 'Notice the contrast pivot "Although early models were... inefficient and prone to breakdowns". The late-century models must be the opposite: reliable and capable.',
    explanation: {
      passageDeconstruction: `The text sets up a direct comparison between early engines (inefficient, broken down) and later engines (improved by engineering refinements).`,
      correctReasoning: `'Reliable' directly contrasts with 'prone to frequent mechanical breakdowns' and aligns with 'capable of sustained long-distance transit'.`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'unpredictable',
          trapType: 'Synonym for Early Models (Wrong Side of Contrast)',
          whyIncorrect: 'Unpredictable matches the early models, not the improved late-century models.'
        },
        {
          optionIndex: 2,
          optionText: 'expensive',
          trapType: 'Unmentioned Attribute',
          whyIncorrect: 'Cost is not mentioned in the passage; the text focuses strictly on mechanical functionality and reliability.'
        },
        {
          optionIndex: 3,
          optionText: 'obsolete',
          trapType: 'Logical Contradiction',
          whyIncorrect: 'Obsolete means no longer produced or used out-of-date. Newer, improved engines would not be obsolete.'
        }
      ]
    }
  },
  {
    demoNumber: 5,
    id: 'm1-demo-5',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In many species of social primates, grooming behaviors serve a purpose that far exceeds hygiene. Primatologists have observed that tactile exchanges operate as a key mechanism for establishing social bonds and soothing tension within the troop. Thus, grooming should be understood not as a minor physiological necessity, but as a vital social currency that helps ______ group cohesion.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['foster', 'undermine', 'curtail', 'simulate'],
    correctAnswer: 0,
    nextGenTechnique: 'Tone & Function Vector',
    strategicTakeaway: 'The passage asserts that grooming builds social bonds and soothes tension. The verb must mean "promote", "encourage", or "strengthen". "Foster" is the precise choice.',
    explanation: {
      passageDeconstruction: `Grooming builds bonds and reduces tension, acting as a social currency that encourages and maintains group cohesion.`,
      correctReasoning: `'Foster' means to encourage the development or growth of something desirable (group cohesion).`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'undermine',
          trapType: 'Flop Trap / Opposite Meaning',
          whyIncorrect: 'Undermine means to weaken or damage. Grooming builds cohesion, it does not weaken it.'
        },
        {
          optionIndex: 2,
          optionText: 'curtail',
          trapType: 'Opposite Meaning',
          whyIncorrect: 'Curtail means to reduce in extent or quantity; restrict. Grooming supports cohesion rather than restricting it.'
        },
        {
          optionIndex: 3,
          optionText: 'simulate',
          trapType: 'Artificiality Trap',
          whyIncorrect: 'Simulate means to imitate or feign. The social cohesion in primate troops is genuine, not simulated or fake.'
        }
      ]
    }
  },
  {
    demoNumber: 6,
    id: 'm1-demo-6',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `Deep-sea hydro-thermal vents support thriving biological ecosystems despite existing in conditions once thought completely inhospitable to life. Located thousands of meters below the ocean surface where sunlight cannot penetrate, these vents host chemosynthetic bacteria that convert inorganic chemicals from vent fluids into organic energy. These microscopic organisms form the foundational base of a food web that sustains giant tube worms, blind shrimp, and predatory crabs, demonstrating that ecosystems can flourish independent of solar energy.`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      'Hydrothermal vent ecosystems rely on chemosynthetic bacteria to thrive without relying on sunlight.',
      'Giant tube worms and blind shrimp are the primary organisms responsible for converting chemical compounds into energy.',
      'Deep-sea environments host a wider variety of species than shallow coastal aquatic habitats do.',
      'Chemosynthetic bacteria are increasingly threatened by changes in ocean water temperature and vent fluid composition.'
    ],
    correctAnswer: 0,
    nextGenTechnique: '0.5-Step Rule & Primary Thesis Isolation',
    strategicTakeaway: 'The main idea must capture both the mechanism (chemosynthetic bacteria converting inorganic chemicals) and the main conclusion (ecosystems flourishing without sunlight).',
    explanation: {
      passageDeconstruction: `1. Opening claim: Deep-sea vents host thriving ecosystems in conditions thought inhospitable. 2. Mechanism: Chemosynthetic bacteria convert vent fluid chemicals into energy without sunlight. 3. Result: These bacteria sustain tube worms, shrimp, and crabs, proving ecosystems can flourish without solar energy.`,
      correctReasoning: `Option A accurately synthesizes the core message: chemosynthetic bacteria enable deep-sea vent ecosystems to flourish without solar energy.`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'Giant tube worms and blind shrimp are the primary organisms responsible for converting chemical compounds into energy.',
          trapType: 'Role Reversal Trap',
          whyIncorrect: 'The text states that chemosynthetic bacteria convert chemicals into energy; tube worms and shrimp consume those bacteria.'
        },
        {
          optionIndex: 2,
          optionText: 'Deep-sea environments host a wider variety of species than shallow coastal aquatic habitats do.',
          trapType: 'Out-of-Bounds Comparison',
          whyIncorrect: 'The passage never mentions or compares shallow coastal habitats.'
        },
        {
          optionIndex: 3,
          optionText: 'Chemosynthetic bacteria are increasingly threatened by changes in ocean water temperature and vent fluid composition.',
          trapType: 'Unmentioned Extrapolation',
          whyIncorrect: 'The text does not mention any threats to chemosynthetic bacteria.'
        }
      ]
    }
  },
  {
    demoNumber: 7,
    id: 'm1-demo-7',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `Historian Marcus Thorne re-examines the rapid expansion of the Silk Road trade networks during the Han Dynasty (202 BCE – 220 CE). While traditional scholarship attributes this commercial integration predominantly to state-sponsored military expeditions securing border corridors, Thorne demonstrates that localized merchant guilds and nomadic intermediaries were the primary drivers of trade continuity. According to Thorne, imperial garrisons frequently suffered from logistical supply shortages, whereas independent trading syndicates possessed the flexible diplomatic and linguistic skills necessary to navigate cross-cultural commercial exchanges across the Central Asian steppe.`,
    questionText: `Which choice best describes the main purpose of the text?`,
    options: [
      'To present Thorne’s argument that non-state actors were more central to Silk Road trade continuity than state military forces.',
      'To refute the claim that the Han Dynasty engaged in military expeditions along Central Asian trade corridors.',
      'To argue that imperial garrisons were completely ineffective at protecting merchant caravans from nomadic raids.',
      'To compare the economic output of state-run monopolies with that of independent merchant guilds during the Han Dynasty.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Thesis Pivot Identification ("While traditional scholarship... Thorne demonstrates...")',
    strategicTakeaway: 'Identify the thesis shift: Traditional view = military state expeditions. Thorne\'s view = merchant guilds and nomadic intermediaries (non-state actors). Purpose = presenting Thorne\'s counterargument.',
    explanation: {
      passageDeconstruction: `Passage contrasts traditional view (state military caused trade expansion) with Thorne's view (local merchant guilds/nomads drove trade continuity due to flexibility, while garrisons suffered logistics issues).`,
      correctReasoning: `Option A correctly captures the main purpose: introducing Thorne's thesis that non-state actors (guilds, nomads) played a more central role in trade continuity than imperial military forces.`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'To refute the claim that the Han Dynasty engaged in military expeditions along Central Asian trade corridors.',
          trapType: 'Extreme Refutation Trap',
          whyIncorrect: 'Thorne acknowledges state military expeditions occurred; he argues they were not the *primary driver* of trade continuity, not that they never happened.'
        },
        {
          optionIndex: 2,
          optionText: 'To argue that imperial garrisons were completely ineffective at protecting merchant caravans from nomadic raids.',
          trapType: 'Extreme Modifier ("completely ineffective")',
          whyIncorrect: 'The text says garrisons suffered supply shortages; it never asserts they were "completely ineffective" or mentions "nomadic raids".'
        },
        {
          optionIndex: 3,
          optionText: 'To compare the economic output of state-run monopolies with that of independent merchant guilds during the Han Dynasty.',
          trapType: 'Fabricated Topic / Scope Expansion',
          whyIncorrect: 'The passage discusses trade continuity and logistics, not a quantitative comparison of "economic output" or "state monopolies".'
        }
      ]
    }
  },
  {
    demoNumber: 8,
    id: 'm1-demo-8',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In neurobiology, the hypothesis that adult mammalian brains are strictly post-mitotic—incapable of generating new neurons—dominated the field for nearly a century. However, groundbreaking investigations by Dr. Elizabeth Gould in the late 1990s demonstrated neurogenesis in the adult hippocampus, a region critical for memory consolidation and spatial navigation. Subsequent studies revealed that environmental enrichment and aerobic exercise significantly enhance hippocampal neurogenesis in rodents. Crucially, researchers noted that chronic psychological stress suppresses neural progenitor cell proliferation, establishing a direct link between psychological state and structural brain plasticity.`,
    questionText: `Based on the text, what is true regarding neural progenitor cell proliferation in adult rodents?`,
    options: [
      'It decreases when rodents undergo prolonged psychological stress.',
      'It occurs at equal rates across all regions of the adult mammalian brain.',
      'It is entirely suppressed when rodents engage in daily aerobic exercise.',
      'It remains unaffected by environmental factors or living conditions.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Fact Retrieval & Synonym Matching',
    strategicTakeaway: 'Locate the exact keyword "neural progenitor cell proliferation". The text states: "chronic psychological stress suppresses neural progenitor cell proliferation". Matches: "decreases when rodents undergo prolonged psychological stress".',
    explanation: {
      passageDeconstruction: `1. Previous dogma: Adult brain cannot generate new neurons. 2. Gould proved neurogenesis in adult hippocampus. 3. Aerobic exercise/enrichment increases hippocampal neurogenesis. 4. Chronic stress suppresses neural progenitor cell proliferation.`,
      correctReasoning: `Option A directly matches the explicit detail that chronic psychological stress suppresses (decreases) neural progenitor cell proliferation.`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'It occurs at equal rates across all regions of the adult mammalian brain.',
          trapType: 'Unsupported Generalization',
          whyIncorrect: 'The text mentions neurogenesis specifically in the hippocampus, not equally across all brain regions.'
        },
        {
          optionIndex: 2,
          optionText: 'It is entirely suppressed when rodents engage in daily aerobic exercise.',
          trapType: 'Flop Trap / Opposite Claim',
          whyIncorrect: 'The text states that aerobic exercise *enhances* (increases) neurogenesis, not suppresses it.'
        },
        {
          optionIndex: 3,
          optionText: 'It remains unaffected by environmental factors or living conditions.',
          trapType: 'Direct Contradiction',
          whyIncorrect: 'The text explicitly says environmental enrichment affects neurogenesis.'
        }
      ]
    }
  },
  {
    demoNumber: 9,
    id: 'm1-demo-9',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `Linguist Dr. Maya Lin examines how rural communities preserve endangered languages through intergenerational storytelling programs. In her field research across North Wales, Lin observed that children enrolled in elder-led oral history workshops demonstrated a 40% increase in active vocabulary retention compared to peers receiving standard classroom grammar instruction. Lin attributes this difference to the emotional resonance and rich contextual immersion provided by traditional narratives, which anchor vocabulary within meaningful cultural frameworks rather than isolated memory drills.`,
    questionText: `According to the text, why did children in elder-led workshops achieve higher vocabulary retention than those in standard classrooms?`,
    options: [
      'Traditional narratives embedded vocabulary in meaningful cultural contexts that provided emotional resonance.',
      'Standard classroom grammar instruction relied on complex technological tools that confused young learners.',
      'Elderly instructors conducted workshops for significantly more hours per week than schoolteachers.',
      'Children in the workshops were required to memorize written transcripts of historical Welsh legends.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Explicit Cause-and-Effect Matching',
    strategicTakeaway: 'The question asks "why". Locate the sentence starting with "Lin attributes this difference to...". The text explicitly cites "emotional resonance and rich contextual immersion provided by traditional narratives".',
    explanation: {
      passageDeconstruction: `1. Finding: Workshop children showed 40% higher retention than classroom kids. 2. Cause: Lin attributes this to emotional resonance and contextual immersion of traditional narratives, anchoring words in cultural frameworks rather than drills.`,
      correctReasoning: `Option A directly paraphrases Lin's explanation in the final sentence of the text.`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'Standard classroom grammar instruction relied on complex technological tools that confused young learners.',
          trapType: 'Unmentioned Detail / Speculation',
          whyIncorrect: 'The passage never mentions technology or student confusion in standard classrooms.'
        },
        {
          optionIndex: 2,
          optionText: 'Elderly instructors conducted workshops for significantly more hours per week than schoolteachers.',
          trapType: 'Fabricated Quantitative Detail',
          whyIncorrect: 'The text never discusses the length or hours of instruction.'
        },
        {
          optionIndex: 3,
          optionText: 'Children in the workshops were required to memorize written transcripts of historical Welsh legends.',
          trapType: 'Contradictory Detail',
          whyIncorrect: 'The passage describes the workshops as "oral history workshops" and notes that narrative contexts were effective compared to "isolated memory drills", not transcript memorization.'
        }
      ]
    }
  },
  {
    demoNumber: 10,
    id: 'm1-demo-10',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In plant biochemistry, the C4 photosynthetic pathway evolved independently in over 60 plant lineages as an adaptation to hot, arid environments. Unlike standard C3 plants, which lose substantial carbon through photorespiration when stomata close to conserve water, C4 plants employ a spatial separation of initial carbon fixation and the Calvin cycle. By utilizing phosphoenolpyruvate carboxylase (PEPC) to capture carbon dioxide in mesophyll cells before transporting it to bundle-sheath cells, C4 plants maintain high photosynthetic efficiency even under severe drought stress, enabling crops like maize and sugarcane to outcompete C3 species in warm climates.`,
    questionText: `Which choice best states the primary function of PEPC in C4 plants according to the text?`,
    options: [
      'It captures carbon dioxide in mesophyll cells prior to its transport to bundle-sheath cells.',
      'It closes stomata automatically whenever atmospheric temperatures exceed optimal thresholds.',
      'It directly converts sunlight into glucose within bundle-sheath cells during photorespiration.',
      'It prevents C4 plants from engaging in the Calvin cycle during periods of severe drought.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Precision Technical Detail Isolation',
    strategicTakeaway: 'When a passage contains complex biological terms (mesophyll, bundle-sheath, PEPC), isolate the sentence containing the exact target term. "By utilizing PEPC to capture carbon dioxide in mesophyll cells before transporting it to bundle-sheath cells..."',
    explanation: {
      passageDeconstruction: `1. C4 pathway evolved as drought adaptation. 2. C3 plants lose carbon during drought when stomata close. 3. C4 uses PEPC to fix CO2 in mesophyll cells first, then transports it to bundle-sheath cells for Calvin cycle, preventing efficiency loss.`,
      correctReasoning: `Option A directly restates the explicit function assigned to PEPC in the sentence: capturing carbon dioxide in mesophyll cells prior to transport.`,
      distractorAnalysis: [
        {
          optionIndex: 1,
          optionText: 'It closes stomata automatically whenever atmospheric temperatures exceed optimal thresholds.',
          trapType: 'Misattributed Mechanism',
          whyIncorrect: 'Stomata closure is mentioned as a general response to conserve water, not a function performed by PEPC.'
        },
        {
          optionIndex: 2,
          optionText: 'It directly converts sunlight into glucose within bundle-sheath cells during photorespiration.',
          trapType: 'Scientific Misstatement Trap',
          whyIncorrect: 'The text explains C4 plants avoid photorespiration; PEPC fixes carbon dioxide, it does not convert sunlight to glucose directly.'
        },
        {
          optionIndex: 3,
          optionText: 'It prevents C4 plants from engaging in the Calvin cycle during periods of severe drought.',
          trapType: 'Opposite Process Trap',
          whyIncorrect: 'PEPC helps transport CO2 *to* the Calvin cycle, ensuring the Calvin cycle continues effectively during drought.'
        }
      ]
    }
  }
];
