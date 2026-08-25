import { DemonstrationExample } from '../readingTypes';

export const T2_DEMONSTRATIONS: DemonstrationExample[] = [
  {
    demoNumber: 1,
    id: 't2-demo-1',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In his 1899 sociological study *The Philadelphia Negro*, W.E.B. Du Bois conducted door-to-door surveys across the Seventh Ward to document the socio-economic conditions of African American residents. Rather than attributing urban poverty to innate personal failing as contemporary commentators frequently did, Du Bois compiled detailed statistical tables on employment, housing quality, and literacy. His empirical analysis demonstrated that systemic racial discrimination in labor markets and housing severely restricted economic mobility for Black workers.`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      'Du Bois used empirical research to demonstrate that systemic discrimination, rather than personal failing, drove economic hardship among Black residents.',
      'Du Bois\'s study was criticized by contemporary commentators for relying exclusively on door-to-door survey methodologies in the Seventh Ward.',
      'The Seventh Ward contained the highest rates of literacy and employment among African American urban communities in 1899.',
      'Du Bois advocated for door-to-door surveys as the only valid sociological method for studying urban housing quality.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Scope Bounding & Main Idea Distillation',
    strategicTakeaway: 'The central idea synthesizes both the methodology (empirical statistical tables/surveys) and the primary thesis (systemic discrimination caused economic restriction, rejecting personal failing explanations).',
    explanation: {
      passageDeconstruction: `Premise 1: Du Bois surveyed residents in 1899 and compiled statistical tables on employment and housing. Premise 2: He rejected contemporary claims blaming poverty on personal failing. Thesis: Systemic discrimination restricted economic mobility.`,
      correctReasoning: `Option A accurately synthesizes the full scope of the passage: Du Bois used empirical data to show systemic discrimination drove poverty, refuting contemporary assumptions about personal failing.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Du Bois used empirical research to demonstrate...', trapType: 'Correct Central Idea', whyIncorrect: 'Correct synthesis of methodology and core thesis.' },
        { optionIndex: 1, optionText: 'Du Bois\'s study was criticized by contemporary commentators...', trapType: 'False Cause Trap', whyIncorrect: 'The passage says contemporary commentators blamed poverty on personal failing, not that they criticized Du Bois\'s methodology.' },
        { optionIndex: 2, optionText: 'The Seventh Ward contained the highest rates of literacy...', trapType: 'Unsupported Comparison', whyIncorrect: 'The text does not state the Seventh Ward had the "highest rates" compared to other communities.' },
        { optionIndex: 3, optionText: 'Du Bois advocated for door-to-door surveys as the only valid...', trapType: 'Extreme Language Trap', whyIncorrect: 'Du Bois used surveys, but never claimed they were the "only valid method".' }
      ]
    }
  },
  {
    demoNumber: 2,
    id: 't2-demo-2',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `Deep-sea hydrothermal vent ecosystems challenge traditional biological paradigms that position sunlight as the indispensable foundation of food webs. At depths exceeding 2,000 meters, where sunlight cannot penetrate, chemoautotrophic bacteria synthesize organic molecules by oxidizing hydrogen sulfide released from geothermal fissures. These microbes serve as primary producers, supporting thriving communities of giant tube worms, blind shrimp, and crabs in extreme pressure and temperature environments.`,
    questionText: `Which choice best describes the main idea of the text?`,
    options: [
      'Hydrothermal vent ecosystems demonstrate that complex marine life can flourish without sunlight through bacterial chemosynthesis.',
      'Hydrogen sulfide oxidation is the most efficient metabolic process found in deep-sea benthic organisms.',
      'Giant tube worms and blind shrimp are the primary energy producers in ocean environments deeper than 2,000 meters.',
      'Geothermal fissures produce hydrogen sulfide primarily to regulate temperature in abyssal zones.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Primary Claim vs Secondary Detail Isolation',
    strategicTakeaway: 'The central point is that life can thrive without sunlight via chemosynthesis. The tube worms and shrimp are secondary details illustrating this primary claim.',
    explanation: {
      passageDeconstruction: `Main thesis: Hydrothermal vents prove ecosystems can exist without sunlight. Mechanism: Chemoautotrophic bacteria oxidize hydrogen sulfide to create organic matter. Impact: Supports tube worms, shrimp, and crabs.`,
      correctReasoning: `Option A captures the overarching thesis: vent ecosystems show complex life flourishing without sunlight through chemosynthesis.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Hydrothermal vent ecosystems demonstrate that...', trapType: 'Correct Thesis', whyIncorrect: 'Correctly summarizes the core claim of the passage.' },
        { optionIndex: 1, optionText: 'Hydrogen sulfide oxidation is the most efficient...', trapType: 'Unsupported Degree Trap', whyIncorrect: 'The text describes chemosynthesis, but never claims it is the "most efficient" process.' },
        { optionIndex: 2, optionText: 'Giant tube worms and blind shrimp are the primary energy producers...', trapType: 'Role Reversal Trap', whyIncorrect: 'Bacteria are the primary producers; tube worms and shrimp are consumers.' },
        { optionIndex: 3, optionText: 'Geothermal fissures produce hydrogen sulfide primarily to regulate...', trapType: 'False Teleology Trap', whyIncorrect: 'Fissures release chemicals geologically, not to "regulate temperature".' }
      ]
    }
  },
  {
    demoNumber: 3,
    id: 't2-demo-3',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `According to a 2022 agricultural study conducted across three Midwestern states, implementing cover cropping during winter months reduced soil nitrate leaching by an average of 48%. Root systems from rye and clover plants absorbed residual nitrogen left in the topsoil after autumn corn harvests, preventing dissolved minerals from draining into local groundwater tributaries during heavy rainfall events.`,
    questionText: `According to the text, how do winter cover crops reduce soil nitrate leaching?`,
    options: [
      'Their roots absorb remaining topsoil nitrogen following corn harvests.',
      'They neutralize rainfall acidity before it contacts Midwestern topsoil.',
      'They eliminate the need for autumn fertilizer applications on corn fields.',
      'Their leaves block solar radiation, preventing nitrate evaporation.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Textual Detail Retrieval',
    strategicTakeaway: 'Detail questions test precise factual comprehension. Locate the specific mechanism sentence: "Root systems from rye and clover plants absorbed residual nitrogen...".',
    explanation: {
      passageDeconstruction: `Question asks for specific detail: HOW cover crops reduce nitrate leaching. Passage explicitly states: "Root systems from rye and clover plants absorbed residual nitrogen left in the topsoil after autumn corn harvests".`,
      correctReasoning: `Option A directly mirrors the passage detail that roots absorb remaining nitrogen after corn harvests.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Their roots absorb remaining topsoil nitrogen...', trapType: 'Direct Literal Match', whyIncorrect: 'Correct. Directly stated in the text.' },
        { optionIndex: 1, optionText: 'They neutralize rainfall acidity...', trapType: 'Unmentioned Fact', whyIncorrect: 'Rainfall acidity is never mentioned in the text.' },
        { optionIndex: 2, optionText: 'They eliminate the need for autumn fertilizer...', trapType: 'Extrapolated Fact', whyIncorrect: 'The text discusses absorbing leftover nitrogen, not eliminating fertilizer.' },
        { optionIndex: 3, optionText: 'Their leaves block solar radiation...', trapType: 'Scientific Fallacy Trap', whyIncorrect: 'Nitrate leaching occurs via water runoff, not evaporation from solar radiation.' }
      ]
    }
  },
  {
    demoNumber: 4,
    id: 't2-demo-4',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In early nineteenth-century Britain, the Luddite movement was widely portrayed by industrial factory owners as a mindless reaction against technological progress. However, modern labor historians emphasize that the textile workers who smashed automated looms were not opposing technology itself, but rather protesting the destruction of fair wages, craft standards, and artisan livelihoods caused by unmonitored factory mechanization.`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      'Luddite opposition was driven by grievances over degraded wages and working conditions rather than hostility toward machinery itself.',
      'Nineteenth-century factory owners successfully eradicated Luddite protests by improving artisan wage standards.',
      'Automated textile looms produced goods of higher craft quality than traditional hand-weaving methods.',
      'Labor historians agree that technological innovation inevitably harms industrial worker livelihoods.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Thesis Extraction',
    strategicTakeaway: 'Look for "However...". The main idea sits right after the pivot word: Luddites opposed wage destruction and loss of artisan status, not technology itself.',
    explanation: {
      passageDeconstruction: `Pivot: "However, modern labor historians emphasize that... workers were not opposing technology itself, but rather protesting... destruction of fair wages".`,
      correctReasoning: `Option A accurately reflects the main point: protests were driven by wage and livelihood concerns rather than hatred of machinery.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Luddite opposition was driven by grievances over degraded wages...', trapType: 'Correct Main Idea', whyIncorrect: 'Correctly summarizes the modern historical view.' },
        { optionIndex: 1, optionText: 'Nineteenth-century factory owners successfully eradicated...', trapType: 'Unsupported History Trap', whyIncorrect: 'The text does not state that factory owners improved wages or eradicated protests.' },
        { optionIndex: 2, optionText: 'Automated textile looms produced goods of higher craft quality...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Quality comparison between automated and hand looms is not discussed.' },
        { optionIndex: 3, optionText: 'Labor historians agree that technological innovation inevitably...', trapType: 'Over-Generalization', whyIncorrect: 'The text discusses Luddites specifically, not an "inevitable" rule for all technology.' }
      ]
    }
  },
  {
    demoNumber: 5,
    id: 't2-demo-5',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `For decades, planetary scientists assumed Mercury\'s proximity to the Sun meant its surface was completely devoid of volatile ice deposits. However, radar data collected by the MESSENGER spacecraft in 2012 revealed radar-bright patches inside permanently shadowed polar craters, where temperatures remain below -170°C despite daytime solar radiation at equator zones.`,
    questionText: `According to the text, what enables ice deposits to persist on Mercury?`,
    options: [
      'Permanently shadowed polar craters maintain extremely cold temperatures.',
      'Mercury\'s dense atmosphere insulates the surface against solar radiation.',
      'Subterranean geothermal activity stabilizes water molecules beneath the crust.',
      'Solar radiation melts the ice during daytime, which refreezes at night.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Targeted Detail Identification',
    explanation: {
      passageDeconstruction: `Target detail: What enables ice to persist on Mercury? Text explicitly identifies "permanently shadowed polar craters, where temperatures remain below -170°C".`,
      correctReasoning: `Option A directly matches the textual cause: permanently shadowed polar craters that stay under -170°C.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Permanently shadowed polar craters maintain extremely cold...', trapType: 'Direct Literal Match', whyIncorrect: 'Correct. Directly stated in the passage.' },
        { optionIndex: 1, optionText: 'Mercury\'s dense atmosphere insulates...', trapType: 'Scientific Factual Contradiction', whyIncorrect: 'Mercury has almost no atmosphere, and the text never claims it insulates.' },
        { optionIndex: 2, optionText: 'Subterranean geothermal activity stabilizes...', trapType: 'Unmentioned Mechanism', whyIncorrect: 'Geothermal activity is not mentioned in the text.' },
        { optionIndex: 3, optionText: 'Solar radiation melts the ice during daytime...', trapType: 'Plausible Myth Trap', whyIncorrect: 'The text states ice persists in shadowed craters away from solar radiation.' }
      ]
    }
  },
  {
    demoNumber: 6,
    id: 't2-demo-6',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In 1928, biologist Alexander Fleming observed that a stray *Penicillium* mold spore had contaminated a culture plate of *Staphylococcus* bacteria, creating a clear zone where bacterial growth was inhibited. While Fleming published his observations, he was unable to isolate and stabilize penicillin in quantities sufficient for clinical use. It was not until more than a decade later that Howard Florey and Ernst Chain developed chemical extraction techniques that enabled mass production of the antibiotic.`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      'The realization of penicillin as a usable medical treatment required both Fleming\'s initial discovery and subsequent purification breakthroughs by Florey and Chain.',
      'Florey and Chain received sole historical credit for discovering penicillin due to Fleming\'s failure to publish his laboratory findings.',
      '*Staphylococcus* bacteria are unique in their vulnerability to *Penicillium* mold spores.',
      'Mass production of penicillin began immediately following Fleming\'s 1928 laboratory observation.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Chronological Thesis Synthesis',
    explanation: {
      passageDeconstruction: `Timeline: 1928 Fleming discovers mold inhibition -> Fleming cannot isolate/stabilize penicillin -> 10 years later Florey & Chain refine extraction for mass production.`,
      correctReasoning: `Option A synthesizes the complete arc: usable penicillin depended on both Fleming's discovery and Florey and Chain's subsequent purification efforts.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'The realization of penicillin as a usable medical treatment...', trapType: 'Correct Synthesis', whyIncorrect: 'Correctly unites both stages of discovery and development.' },
        { optionIndex: 1, optionText: 'Florey and Chain received sole historical credit...', trapType: 'Direct Contradiction', whyIncorrect: 'The text states Fleming published his findings and does not claim he lost historical credit.' },
        { optionIndex: 2, optionText: '*Staphylococcus* bacteria are unique in their vulnerability...', trapType: 'Unsupported Absolute', whyIncorrect: 'The text does not claim *Staphylococcus* is "unique" in vulnerability.' },
        { optionIndex: 3, optionText: 'Mass production of penicillin began immediately...', trapType: 'Chronological Inversion', whyIncorrect: 'Mass production required "more than a decade later", not immediately.' }
      ]
    }
  },
  {
    demoNumber: 7,
    id: 't2-demo-7',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `Architectural conservators evaluating historical masonry structures emphasize that applying modern impermeable synthetic sealants to aged brickwork can paradoxically accelerate structural deterioration. When moisture penetrates through small hairline cracks, the sealant prevents internal water vapor from evaporating outward, causing trapped moisture to freeze, expand, and shatter the brick interior during freeze-thaw winter cycles.`,
    questionText: `According to the text, why do synthetic sealants cause aged brickwork to deteriorate?`,
    options: [
      'They trap internal moisture that freezes and expands during winter months.',
      'They react chemically with historical mortar to erode brick strength.',
      'They absorb solar heat and melt the underlying masonry mortar.',
      'They increase hairline crack formation by adding excess weight to the building.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Cause-Effect Detail Matching',
    explanation: {
      passageDeconstruction: `Passage explains cause of deterioration: sealant prevents evaporation, trapping moisture inside, which freezes and expands in winter, shattering bricks.`,
      correctReasoning: `Option A directly matches the cause stated: trapping internal moisture that freezes and expands in winter.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'They trap internal moisture that freezes and expands...', trapType: 'Direct Textual Match', whyIncorrect: 'Correct. Directly matches the passage explanation.' },
        { optionIndex: 1, optionText: 'They react chemically with historical mortar...', trapType: 'Unmentioned Cause', whyIncorrect: 'Chemical reaction with mortar is not mentioned in the text.' },
        { optionIndex: 2, optionText: 'They absorb solar heat and melt the underlying mortar...', trapType: 'Fabricated Mechanism', whyIncorrect: 'Heat absorption and melting mortar are not described.' },
        { optionIndex: 3, optionText: 'They increase hairline crack formation by adding excess weight...', trapType: 'Plausible Distractor Trap', whyIncorrect: 'Cracks allow moisture in, but sealant weight is not the cause of crack formation.' }
      ]
    }
  },
  {
    demoNumber: 8,
    id: 't2-demo-8',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `While eighteenth-century political theorist Jean-Jacques Rousseau celebrated pre-industrial tribal societies as paragons of egalitarian virtue, contemporary anthropological research presents a more nuanced view. Studies of hunter-gatherer communities reveal that while material wealth inequality was minimal due to nomadic mobility, non-material social hierarchies based on hunting prestige, ritual knowledge, and kinship ties were pronounced and actively maintained.`,
    questionText: `Which choice best summarizes the main idea of the passage?`,
    options: [
      'Hunter-gatherer societies possessed distinct social hierarchies, challenging oversimplified historical portrayals of total egalitarianism.',
      'Rousseau\'s theories on pre-industrial societies were entirely supported by modern anthropological field measurements.',
      'Material wealth inequality was higher in ancient nomadic communities than in modern industrial nations.',
      'Kinship ties were the sole factor determining leadership authority in pre-industrial societies.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Nuance & Main Claim Distillation',
    explanation: {
      passageDeconstruction: `Contrast: Rousseau viewed early societies as pure egalitarian models, but modern research shows that despite minimal wealth inequality, social hierarchies based on prestige and ritual existed.`,
      correctReasoning: `Option A summarizes the thesis: hunter-gatherer societies had distinct social hierarchies, challenging simplified views of total equality.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Hunter-gatherer societies possessed distinct social hierarchies...', trapType: 'Correct Central Point', whyIncorrect: 'Correctly contrasts modern findings with Rousseau\'s view.' },
        { optionIndex: 1, optionText: 'Rousseau\'s theories on pre-industrial societies were entirely supported...', trapType: 'Direct Contradiction', whyIncorrect: 'The text states modern anthropology presents a view contrasting with Rousseau.' },
        { optionIndex: 2, optionText: 'Material wealth inequality was higher in ancient nomadic communities...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states wealth inequality was minimal.' },
        { optionIndex: 3, optionText: 'Kinship ties were the sole factor determining leadership...', trapType: 'Extreme Single-Factor Trap', whyIncorrect: 'Passage mentions prestige, ritual knowledge, and kinship ties, not kinship alone.' }
      ]
    }
  },
  {
    demoNumber: 9,
    id: 't2-demo-9',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In marine linguistics, researchers recorded vocalizations from isolated killer whale pods in the North Pacific and found that each pod uses a distinct set of pulsed calls and whistles, termed a dialect. Calves learn these acoustic signatures exclusively from their mothers and pod members, keeping dialects stable over multiple generations and allowing whales to identify family members across vast ocean distances.`,
    questionText: `According to the text, how do young killer whales acquire their pod's vocal dialect?`,
    options: [
      'They learn the calls directly from their mothers and pod members.',
      'They inherit the vocal patterns genetically at birth.',
      'They imitate vocalizations from neighboring pods during seasonal migrations.',
      'They develop unique acoustic signals independently as they mature.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Fact Verification',
    explanation: {
      passageDeconstruction: `Question asks how calves acquire vocal dialects. Passage explicitly states: "Calves learn these acoustic signatures exclusively from their mothers and pod members".`,
      correctReasoning: `Option A accurately states the direct fact: learning from mothers and pod members.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'They learn the calls directly from their mothers and pod members.', trapType: 'Direct Textual Match', whyIncorrect: 'Correct. Directly stated in text.' },
        { optionIndex: 1, optionText: 'They inherit the vocal patterns genetically at birth.', trapType: 'Genetics vs Learning Trap', whyIncorrect: 'Text states dialects are learned socially, not inherited genetically.' },
        { optionIndex: 2, optionText: 'They imitate vocalizations from neighboring pods...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states they learn exclusively from their own pod.' },
        { optionIndex: 3, optionText: 'They develop unique acoustic signals independently...', trapType: 'Opposite of Pod Stability', whyIncorrect: 'They learn shared pod dialects, rather than developing independent calls.' }
      ]
    }
  },
  {
    demoNumber: 10,
    id: 't2-demo-10',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `While nineteenth-century art historians classified medieval illuminated manuscripts solely as religious artifacts, contemporary scholars highlight their economic and political functions. Commissioning a luxurious gold-leaf manuscript required immense wealth, establishing manuscripts as potent status symbols that secular rulers used to demonstrate diplomatic authority and legitimize dynastic successions.`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      'Illuminated manuscripts served important political and economic functions beyond their religious significance.',
      'Medieval secular rulers prioritized manuscript production over building permanent military fortifications.',
      'Gold-leaf illumination was created exclusively for secular rulers rather than religious monasteries.',
      'Nineteenth-century art historians accurately identified all major cultural roles of medieval manuscripts.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Scope Bounding & Main Idea Distillation',
    explanation: {
      passageDeconstruction: `Passage contrasts old view (purely religious) with modern view (economic and political status symbols used by secular rulers).`,
      correctReasoning: `Option A synthesizes the modern understanding: manuscripts served political and economic functions beyond religion.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Illuminated manuscripts served important political and economic...', trapType: 'Correct Main Idea', whyIncorrect: 'Correctly captures the central point.' },
        { optionIndex: 1, optionText: 'Medieval secular rulers prioritized manuscript production over military...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Military fortifications are never mentioned.' },
        { optionIndex: 2, optionText: 'Gold-leaf illumination was created exclusively for secular rulers...', trapType: 'Unsupported Absolute', whyIncorrect: 'The text does not claim religious monasteries never used gold leaf.' },
        { optionIndex: 3, optionText: 'Nineteenth-century art historians accurately identified all major...', trapType: 'Direct Contradiction', whyIncorrect: 'The text argues 19th-century historians had an incomplete view.' }
      ]
    }
  }
];
