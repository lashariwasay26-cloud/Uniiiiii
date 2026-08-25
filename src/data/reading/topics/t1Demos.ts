import { DemonstrationExample } from '../readingTypes';

export const T1_DEMONSTRATIONS: DemonstrationExample[] = [
  {
    demoNumber: 1,
    id: 't1-demo-1',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In ecological restoration projects, planting native perennials can bolster soil stability against erosion. Botanist Dr. Elena Vance noted that deep root systems act as underground anchors that hold topsoil even during torrential downpours. Consequently, land management agencies have embraced these botanical practices to ______ degradation in flood-prone river basins.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['arrest', 'accelerate', 'observe', 'ignore'],
    correctAnswer: 0,
    nextGenTechnique: 'Secondary Definition Trap Neutralization',
    strategicTakeaway: 'On the Digital SAT, "arrest" is frequently tested in its secondary sense meaning "to stop, check, or halt", rather than "to take into police custody".',
    explanation: {
      passageDeconstruction: `The passage explains that native perennials stabilize soil against erosion and act as underground anchors. Land management agencies adopt these practices to stop or check land degradation.`,
      correctReasoning: `The context indicates that planting native perennials prevents or halts soil degradation. The secondary definition of "arrest" is "to stop, check, or halt a process". Thus, "arrest degradation" means "halt degradation".`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'arrest', trapType: 'Correct Secondary Meaning', whyIncorrect: 'Correct. Secondary definition meaning to stop or halt.' },
        { optionIndex: 1, optionText: 'accelerate', trapType: 'Flop Trap / Opposite Meaning', whyIncorrect: 'Accelerate means to speed up or worsen degradation, contradicting soil restoration goals.' },
        { optionIndex: 2, optionText: 'observe', trapType: 'Weak / Ineffective Verb', whyIncorrect: 'Agencies are actively planting perennials to stop damage, not merely to observe it.' },
        { optionIndex: 3, optionText: 'ignore', trapType: 'Logical Contradiction', whyIncorrect: 'Active restoration efforts directly oppose ignoring degradation.' }
      ]
    }
  },
  {
    demoNumber: 2,
    id: 't1-demo-2',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `While early twentieth-century art critics dismissed the artist's geometric abstraction as merely decorative, contemporary scholars contend that her compositions possess a rigorous intellectual logic. Far from being an exercise in superficial ornamentation, her work reflects a deeply deliberate effort to ______ the chaos of modern urban existence into serene visual harmony.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['transmute', 'exacerbate', 'countermand', 'disseminate'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot & Secondary Meaning Alignment',
    strategicTakeaway: 'Look for contrast pivots ("Far from being..."). The phrase indicates converting "the chaos of modern urban existence" into "serene visual harmony". "Transmute" precisely captures converting one state into another.',
    explanation: {
      passageDeconstruction: `The passage sets up a contrast between early critics who saw her work as superficial ornamentation and modern scholars who see rigorous logic. The second sentence contrasts superficiality with a deliberate effort to change urban chaos into visual harmony.`,
      correctReasoning: `'Transmute' means to transform or change form, nature, or substance into another (here, transforming chaos into serene visual harmony).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'transmute', trapType: 'Correct Precise Verb', whyIncorrect: 'Correct. Means to transform or convert substance.' },
        { optionIndex: 1, optionText: 'exacerbate', trapType: 'Opposite Meaning', whyIncorrect: 'Exacerbate means to make worse or intensify chaos, contradicting "serene visual harmony".' },
        { optionIndex: 2, optionText: 'countermand', trapType: 'Inappropriate Register', whyIncorrect: 'Countermand means to revoke an order, which does not fit changing visual chaos into harmony.' },
        { optionIndex: 3, optionText: 'disseminate', trapType: 'Irrelevant Action', whyIncorrect: 'Disseminate means to spread widely (like information), not to transform visual elements.' }
      ]
    }
  },
  {
    demoNumber: 3,
    id: 't1-demo-3',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Architect Maya Lin's design for the Vietnam Veterans Memorial initially sparked intense controversy due to its minimalist black granite walls sunk into the earth. Critics argued the design was too austere, but over time, visitors recognized that its solemn simplicity created a deeply ______ space for reflection and grief.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['poignant', 'ostentatious', 'frivolous', 'superficial'],
    correctAnswer: 0,
    nextGenTechnique: 'Tone & Connotation Alignment',
    strategicTakeaway: 'Align the word with emotional context cues ("solemn simplicity", "reflection and grief"). "Poignant" means deeply touching and evoking a keen sense of sorrow.',
    explanation: {
      passageDeconstruction: `The memorial was initially criticized as austere, but visitors found that its solemn simplicity created a deeply moving environment for grief and reflection.`,
      correctReasoning: `'Poignant' means evoking a keen sense of sadness, sorrow, or regret; deeply touching.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'poignant', trapType: 'Correct Connotation', whyIncorrect: 'Correct. Evokes profound sadness and reflection.' },
        { optionIndex: 1, optionText: 'ostentatious', trapType: 'Opposite Meaning', whyIncorrect: 'Ostentatious means showy or pretentious, contradicting "minimalist" and "simplicity".' },
        { optionIndex: 2, optionText: 'frivolous', trapType: 'Inappropriate Tone', whyIncorrect: 'Frivolous means lacking seriousness, conflicting with "solemn" and "grief".' },
        { optionIndex: 3, optionText: 'superficial', trapType: 'Critic Perspective Trap', whyIncorrect: 'Superficial means shallow, which contradicts a "deep space for reflection".' }
      ]
    }
  },
  {
    demoNumber: 4,
    id: 't1-demo-4',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In marine biology, the bioluminescent display of the deep-sea comb jelly is not intended to attract mates, as was previously hypothesized. Instead, video recordings captured by submersible vehicles indicate that the sudden burst of light serves to ______ predators by momentarily blinding their optical sensors in the pitch-black benthic zone.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['disorient', 'invigorate', 'mollify', 'subjugate'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    strategicTakeaway: 'The light burst momentarily blinds optical sensors in pitch darkness. The correct verb must describe the immediate psychological/physiological effect of being blinded.',
    explanation: {
      passageDeconstruction: `The light burst temporarily blinds predators in the dark ocean. The verb must reflect the confusion caused by sudden blindness.`,
      correctReasoning: `'Disorient' means to cause someone or something to lose their sense of direction, orientation, or focus.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'disorient', trapType: 'Correct Action', whyIncorrect: 'Correct. Momentarily blinding predators causes disorientation.' },
        { optionIndex: 1, optionText: 'invigorate', trapType: 'Opposite Action', whyIncorrect: 'Invigorate means to energize, whereas blinding predators disrupts them.' },
        { optionIndex: 2, optionText: 'mollify', trapType: 'Tone Shift', whyIncorrect: 'Mollify means to soothe anger, which does not match blinding an attacking predator.' },
        { optionIndex: 3, optionText: 'subjugate', trapType: 'Extreme Action Trap', whyIncorrect: 'Subjugate means to conquer completely; momentarily blinding is disorientation, not conquest.' }
      ]
    }
  },
  {
    demoNumber: 5,
    id: 't1-demo-5',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `While early mobile telephone batteries were bulky and held a charge for only a few hours, recent breakthroughs in lithium-sulfur chemistry have led to energy cells that are remarkably ______ and capable of powering devices for multiple days.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['durable', 'fragile', 'intermittent', 'obsolete'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    strategicTakeaway: 'The sentence uses a "While early... recent breakthroughs..." contrast structure. The blank must contrast with lasting "for only a few hours".',
    explanation: {
      passageDeconstruction: `Early batteries were short-lived; new batteries power devices for multiple days.`,
      correctReasoning: `'Durable' means able to withstand wear or last a long time, directly matching powering devices for multiple days.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'durable', trapType: 'Correct Contrast Word', whyIncorrect: 'Correct. Lasting multiple days indicates high durability.' },
        { optionIndex: 1, optionText: 'fragile', trapType: 'Opposite Meaning', whyIncorrect: 'Fragile means delicate or easily broken.' },
        { optionIndex: 2, optionText: 'intermittent', trapType: 'Negative Pattern', whyIncorrect: 'Intermittent means starting and stopping irregularly, which is undesirable for batteries.' },
        { optionIndex: 3, optionText: 'obsolete', trapType: 'Chronological Inversion', whyIncorrect: 'New cutting-edge batteries are not obsolete (outdated).' }
      ]
    }
  },
  {
    demoNumber: 6,
    id: 't1-demo-6',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The historian argued that the treaty was not a definitive peace agreement but rather a temporary ______ that merely postponed open conflict between the rival empires for a single decade.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['respite', 'mandate', 'catalyst', 'ratification'],
    correctAnswer: 0,
    nextGenTechnique: 'Anchor-Vector Matching',
    strategicTakeaway: 'The treaty "merely postponed open conflict for a single decade". The word must mean a temporary pause or relief from difficulty.',
    explanation: {
      passageDeconstruction: `The treaty postponed conflict temporarily rather than creating permanent peace.`,
      correctReasoning: `'Respite' means a short period of rest or relief from something difficult or unpleasant (here, a temporary break from open war).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'respite', trapType: 'Correct Noun Choice', whyIncorrect: 'Correct. Respite means temporary pause or relief.' },
        { optionIndex: 1, optionText: 'mandate', trapType: 'Irrelevant Concept', whyIncorrect: 'Mandate means an official order or authorization.' },
        { optionIndex: 2, optionText: 'catalyst', trapType: 'Opposite Function', whyIncorrect: 'A catalyst accelerates change or conflict, whereas the treaty postponed it.' },
        { optionIndex: 3, optionText: 'ratification', trapType: 'Process vs Result Trap', whyIncorrect: 'Ratification is the formal approval of a document, not the delay period itself.' }
      ]
    }
  },
  {
    demoNumber: 7,
    id: 't1-demo-7',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Neuroscientists long believed that adult brain structure was fixed, but recent MRI longitudinal studies have demonstrated that neural pathways exhibit remarkable ______ in response to intensive musical training.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['plasticity', 'rigidity', 'stagnation', 'opacity'],
    correctAnswer: 0,
    nextGenTechnique: 'Secondary Definition Trap Neutralization',
    strategicTakeaway: '"Plasticity" in scientific prose refers to the capacity to be shaped, molded, or altered (neuroplasticity), directly opposing "fixed".',
    explanation: {
      passageDeconstruction: `Contrast: early belief that brain structure was "fixed" vs new studies showing pathways change in response to musical training.`,
      correctReasoning: `'Plasticity' refers to adaptability or capacity to be molded/changed (e.g. brain adaptability).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'plasticity', trapType: 'Correct Scientific Definition', whyIncorrect: 'Correct. Means capacity to adapt or change.' },
        { optionIndex: 1, optionText: 'rigidity', trapType: 'Opposite Meaning', whyIncorrect: 'Rigidity means stiffness or unchangeability, matching the old flawed belief.' },
        { optionIndex: 2, optionText: 'stagnation', trapType: 'Negative Trap', whyIncorrect: 'Stagnation means lack of activity or growth.' },
        { optionIndex: 3, optionText: 'opacity', trapType: 'Irrelevant Property', whyIncorrect: 'Opacity means non-transparency, which is irrelevant to neural path adaptation.' }
      ]
    }
  },
  {
    demoNumber: 8,
    id: 't1-demo-8',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `The novelist's prose style is famously ______; she conveys intricate philosophical themes using concise sentences and plain everyday vocabulary rather than ornate embellishments.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['unadorned', 'convoluted', 'flamboyant', 'ambiguous'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Punctuation Clue',
    strategicTakeaway: 'The semicolon introduces the explanation: "concise sentences and plain everyday vocabulary rather than ornate embellishments". The blank must mean simple and unembellished.',
    explanation: {
      passageDeconstruction: `Semicolon explanation describes concise sentences, plain words, and lack of ornate embellishments.`,
      correctReasoning: `'Unadorned' means plain, simple, not decorated or embellished.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'unadorned', trapType: 'Correct Descriptor', whyIncorrect: 'Correct. Unadorned means plain and unembellished.' },
        { optionIndex: 1, optionText: 'convoluted', trapType: 'Opposite Meaning', whyIncorrect: 'Convoluted means complex and intricate.' },
        { optionIndex: 2, optionText: 'flamboyant', trapType: 'Opposite Meaning', whyIncorrect: 'Flamboyant means elaborate or showy, contradicting "plain everyday vocabulary".' },
        { optionIndex: 3, optionText: 'ambiguous', trapType: 'Off-Topic Trap', whyIncorrect: 'Ambiguous means unclear or having double meaning, which is not mentioned.' }
      ]
    }
  },
  {
    demoNumber: 9,
    id: 't1-demo-9',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Although the preliminary data suggested a strong correlation between dietary fiber and cardiovascular health, the lead researcher stressed the need to ______ the findings through larger, multi-center clinical trials before issuing public health guidelines.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['corroborate', 'repudiate', 'obfuscate', 'concede'],
    correctAnswer: 0,
    nextGenTechnique: 'Collocation & Register Precision',
    strategicTakeaway: 'Researchers need to confirm or support preliminary findings with larger trials before issuing public recommendations.',
    explanation: {
      passageDeconstruction: `Preliminary data suggests a trend, but public guidelines require confirmation through bigger trials.`,
      correctReasoning: `'Corroborate' means to confirm or give support to a statement, theory, or finding.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'corroborate', trapType: 'Correct Academic Term', whyIncorrect: 'Correct. Corroborate means confirm with further evidence.' },
        { optionIndex: 1, optionText: 'repudiate', trapType: 'Opposite Action', whyIncorrect: 'Repudiate means to reject or deny the truth of something.' },
        { optionIndex: 2, optionText: 'obfuscate', trapType: 'Negative Action', whyIncorrect: 'Obfuscate means to render unclear or obscure.' },
        { optionIndex: 3, optionText: 'concede', trapType: 'Misaligned Context', whyIncorrect: 'Concede means to admit that something is true after first denying it.' }
      ]
    }
  },
  {
    demoNumber: 10,
    id: 't1-demo-10',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The economist noted that while short-term market fluctuations can appear chaotic, long-term trends generally ______ the underlying fundamentals of consumer demand and industrial output.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['mirror', 'subvert', 'precede', 'obscure'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    strategicTakeaway: 'Contrast between short-term noise ("chaotic fluctuations") and long-term trends that reflect or represent underlying fundamentals accurately.',
    explanation: {
      passageDeconstruction: `Short-term fluctuations are chaotic, but long-term trends reflect true economic fundamentals.`,
      correctReasoning: `'Mirror' means to correspond closely to or reflect accurately.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'mirror', trapType: 'Correct Meaning', whyIncorrect: 'Correct. Mirror means accurately reflect or correspond to.' },
        { optionIndex: 1, optionText: 'subvert', trapType: 'Opposite Action', whyIncorrect: 'Subvert means to undermine or destroy.' },
        { optionIndex: 2, optionText: 'precede', trapType: 'Chronological Misalignment', whyIncorrect: 'Precede means to come before in time, which does not match long-term trends reflecting realities.' },
        { optionIndex: 3, optionText: 'obscure', trapType: 'Flop Trap', whyIncorrect: 'Obscure means to hide; short-term fluctuations obscure, whereas long-term trends reveal/mirror.' }
      ]
    }
  }
];
