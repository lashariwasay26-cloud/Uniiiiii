import { ReadingQuestion } from '../readingTypes';

export const T5_EXERCISES_PART1: ReadingQuestion[] = [
  {
    id: 't5-ex-1',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An evolutionary biologist hypothesized that urban populations of white-footed mice have evolved higher heat tolerance compared to rural populations due to the elevated temperatures caused by the urban heat island effect. To test this, she collected mice from urban city parks and rural forests and measured their maximum critical thermal limit ($CT_{\\text{max}}$) in a controlled laboratory setting.`,
    questionText: `Which finding, if true, would most directly support the biologist's hypothesis?`,
    options: [
      'Urban white-footed mice exhibited a significantly higher average $CT_{\\text{max}}$ than rural white-footed mice did.',
      'Rural white-footed mice had higher overall population densities than urban white-footed mice.',
      'Both urban and rural mice exhibited lower $CT_{\\text{max}}$ values when tested at colder temperatures.',
      'Urban city parks contained fewer predator species than rural forests did.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Urban mice have evolved higher heat tolerance ($CT_{\\text{max}}$) than rural mice due to urban heat island effects.`,
      correctReasoning: `Option A directly supports the hypothesis by showing urban mice have a significantly higher average $CT_{\\text{max}}$.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Urban white-footed mice exhibited a significantly higher average $CT_{\\text{max}}$...', trapType: 'Correct Variable Match', whyIncorrect: 'Directly supports the specific hypothesis.' },
        { optionIndex: 1, optionText: 'Rural white-footed mice had higher overall population densities...', trapType: 'Wrong Metric Trap', whyIncorrect: 'Population density does not measure heat tolerance.' },
        { optionIndex: 2, optionText: 'Both urban and rural mice exhibited lower $CT_{\\text{max}}$...', trapType: 'Symmetrical Baseline Trap', whyIncorrect: 'Shows both groups react similarly to cold, failing to prove urban heat adaptation.' },
        { optionIndex: 3, optionText: 'Urban city parks contained fewer predator species...', trapType: 'Irrelevant Variable Trap', whyIncorrect: 'Predator counts do not address heat tolerance.' }
      ]
    }
  },
  {
    id: 't5-ex-2',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A marine biologist hypothesized that coral reef resilience to thermal bleaching is significantly enhanced by the presence of herbivorous parrotfish (*Scaridae*), which scrape away macroalgae that otherwise smother juvenile coral polyps. To test this, he monitored coral recovery rates across 12 Caribbean reefs with varying parrotfish population densities following a major marine heatwave.`,
    questionText: `Which finding, if true, would most directly support the biologist's hypothesis?`,
    options: [
      'Reefs with high parrotfish densities showed 60% higher juvenile coral recruitment and lower macroalgal cover following the heatwave compared to reefs with low parrotfish densities.',
      'Macroalgal cover increased on all reefs during winter months when sea surface temperatures dropped.',
      'Parrotfish population densities were lowest near coastal urban areas with high commercial boat traffic.',
      'Juvenile coral polyps exhibited identical growth rates under artificial laboratory lighting.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Herbivorous parrotfish -> scrape away macroalgae -> enhance coral reef resilience and recovery after heatwaves.`,
      correctReasoning: `Option A provides direct empirical evidence: reefs with high parrotfish density had lower macroalgae cover and 60% higher juvenile coral recruitment.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Reefs with high parrotfish densities showed 60% higher juvenile...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Directly links high parrotfish density to reduced macroalgae and higher coral recovery.' },
        { optionIndex: 1, optionText: 'Macroalgal cover increased on all reefs during winter months...', trapType: 'Seasonal Baseline Trap', whyIncorrect: 'Winter macroalgae changes do not measure heatwave recovery resilience.' },
        { optionIndex: 2, optionText: 'Parrotfish population densities were lowest near coastal urban...', trapType: 'Habitat Correlation Trap', whyIncorrect: 'Explains where parrotfish live, but does not prove their effect on coral resilience.' },
        { optionIndex: 3, optionText: 'Juvenile coral polyps exhibited identical growth rates...', trapType: 'Laboratory Distractor', whyIncorrect: 'Lab lighting growth rates do not address field parrotfish grazing impact.' }
      ]
    }
  },
  {
    id: 't5-ex-3',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `An environmental toxicologist hypothesized that microplastic accumulation in river sediments impairs the burrowing efficiency of freshwater mayfly nymphs (*Ephemeroptera*), leaving them exposed to predatory fish. She placed mayfly nymphs in aquariums with river sediments containing varying microplastic concentrations ($0\\text{ g/kg}$, $5\\text{ g/kg}$, and $20\\text{ g/kg}$) and measured average burrowing depth and time to complete burrowing.`,
    questionText: `Which finding, if true, would most directly support the toxicologist's hypothesis?`,
    options: [
      'Mayfly nymphs in the $20\\text{ g/kg}$ microplastic sediment took three times longer to burrow and achieved only half the burrowing depth of nymphs in the $0\\text{ g/kg}$ control sediment.',
      'Mayfly nymphs in all sediment treatments produced identical survival rates when predatory fish were absent from aquariums.',
      'Sediment samples collected from urban rivers contained higher microplastic concentrations than sediment samples from mountain streams.',
      'Predatory fish consumed equal quantities of commercial pellet food regardless of aquarium microplastic concentration.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Microplastic accumulation in sediments -> impairs mayfly burrowing efficiency (longer time, shallower depth).`,
      correctReasoning: `Option A directly supports the hypothesis: $20\\text{ g/kg}$ microplastic sediment increased burrowing time 3x and reduced depth by 50%.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Mayfly nymphs in the $20\\text{ g/kg}$ microplastic sediment took three times...', trapType: 'Correct Variable Match', whyIncorrect: 'Directly validates impaired burrowing efficiency.' },
        { optionIndex: 1, optionText: 'Mayfly nymphs in all sediment treatments produced identical survival...', trapType: 'Absence of Confounding Trap', whyIncorrect: 'Survival without predators does not measure burrowing speed or depth.' },
        { optionIndex: 2, optionText: 'Sediment samples collected from urban rivers contained higher...', trapType: 'Environmental Distribution Trap', whyIncorrect: 'Shows where microplastics exist, but does not measure burrowing impact.' },
        { optionIndex: 3, optionText: 'Predatory fish consumed equal quantities of commercial pellet food...', trapType: 'Predator Appetite Trap', whyIncorrect: 'Fish pellet consumption does not address mayfly burrowing.' }
      ]
    }
  },
  {
    id: 't5-ex-4',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A cognitive psychologist hypothesized that taking handwritten notes during academic lectures leads to deeper conceptual understanding than typing notes on a laptop, because handwriting forces students to summarize ideas rather than transcribing text verbatim. She randomly assigned college students to take notes either by hand or on a laptop during a 30-minute lecture, then administered a conceptual synthesis exam.`,
    questionText: `Which finding, if true, would most directly support the psychologist's hypothesis?`,
    options: [
      'Handwriting note-takers wrote fewer total words but scored significantly higher on conceptual synthesis exam questions than laptop note-takers did.',
      'Laptop note-takers recorded a higher total word count and typed significantly faster than handwriting note-takers did.',
      'Handwriting note-takers and laptop note-takers performed identically on factual recall questions testing direct dates and names.',
      'Students who owned personal laptops reported typing for an average of three hours per day.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Handwriting -> forces summarization (fewer words) -> leads to deeper conceptual understanding (higher conceptual exam scores) than typing.`,
      correctReasoning: `Option A directly supports the hypothesis: handwriting note-takers wrote fewer words (summarizing) and scored significantly higher on conceptual synthesis.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Handwriting note-takers wrote fewer total words but scored significantly...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Directly validates summarization mechanism and conceptual superiority.' },
        { optionIndex: 1, optionText: 'Laptop note-takers recorded a higher total word count...', trapType: 'Verbatim Trap', whyIncorrect: 'Higher word count reflects verbatim transcription, not conceptual understanding.' },
        { optionIndex: 2, optionText: 'Handwriting note-takers and laptop note-takers performed identically...', trapType: 'Factual Recall Trap', whyIncorrect: 'Factual recall is not conceptual synthesis.' },
        { optionIndex: 3, optionText: 'Students who owned personal laptops reported typing...', trapType: 'Behavioral Distractor', whyIncorrect: 'Typing habits do not measure conceptual test performance.' }
      ]
    }
  },
  {
    id: 't5-ex-5',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A behavioral economist hypothesized that sending household electricity customers monthly utility bills featuring neighbor benchmark comparisons ("social proof") reduces home electricity consumption more effectively than sending bills that show financial cost savings alone. To test this, she conducted a randomized trial across 10,000 households split into three billing groups: Social Proof, Cost Savings, and Standard Control.`,
    questionText: `Which finding, if true, would most directly support the economist's hypothesis?`,
    options: [
      'Households in the Social Proof group reduced their monthly kilowatt-hour electricity consumption by 6.2%, compared to a 1.8% reduction in the Cost Savings group and 0.2% in the Control group.',
      'Households in the Cost Savings group opened their billing envelopes 25% faster than households in the Social Proof group did.',
      'Total utility billing revenue decreased equally across all three experimental groups during winter heating months.',
      'Households in the Social Proof group reported higher satisfaction with municipal garbage collection services.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Monthly bills with neighbor benchmark comparisons ("Social Proof") reduce electricity consumption MORE than bills showing financial cost savings alone.`,
      correctReasoning: `Option A provides direct empirical evidence: Social Proof reduced consumption by 6.2%, vs Cost Savings (1.8%) and Control (0.2%).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Households in the Social Proof group reduced their monthly kilowatt-hour...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Validates superior consumption reduction in Social Proof group.' },
        { optionIndex: 1, optionText: 'Households in the Cost Savings group opened their billing envelopes...', trapType: 'Envelope Opening Trap', whyIncorrect: 'Opening speed does not measure electricity consumption reduction.' },
        { optionIndex: 2, optionText: 'Total utility billing revenue decreased equally across all three...', trapType: 'Revenue Symmetrical Trap', whyIncorrect: 'Symmetrical revenue change fails to prove Social Proof superiority.' },
        { optionIndex: 3, optionText: 'Households in the Social Proof group reported higher satisfaction...', trapType: 'Irrelevant Metric Trap', whyIncorrect: 'Garbage collection satisfaction is unrelated to electricity saving.' }
      ]
    }
  },
  {
    id: 't5-ex-6',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An plant ecologist hypothesized that invasive kudzu vines (*Pueraria montana*) suppress native forest understory growth by overtopping tree canopies and intercepting sunlight, rather than by secreting toxic Allelopathic chemicals into the soil. To test this, she compared native seedling growth under artificial shade structures matching kudzu canopy coverage against native seedling growth in soil drenched with kudzu root chemical extracts under full sunlight.`,
    questionText: `Which finding, if true, would most directly support the ecologist's hypothesis?`,
    options: [
      'Native seedlings grown under artificial shade structures exhibited severe growth suppression, whereas native seedlings in kudzu root chemical extract under full sunlight grew normally.',
      'Native seedlings in kudzu root chemical extract exhibited severe growth suppression regardless of sunlight availability.',
      'Kudzu root chemical extracts contained high concentrations of nitrogen and potassium compounds.',
      'Native tree seedlings grown in greenhouses produced larger leaves when supplied with artificial fertilizer.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Kudzu suppresses growth BY INTERCEPTING SUNLIGHT (shade), NOT BY ALLELOPATHIC CHEMICALS.`,
      correctReasoning: `Option A supports this distinction directly: artificial shade suppressed growth, while root chemical extract under full sunlight allowed normal growth.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Native seedlings grown under artificial shade structures exhibited...', trapType: 'Correct Mechanism Match', whyIncorrect: 'Proves shade drives suppression while root chemicals do not.' },
        { optionIndex: 1, optionText: 'Native seedlings in kudzu root chemical extract exhibited severe...', trapType: 'Weakening Evidence Trap', whyIncorrect: 'Proves allelopathy is active, directly weakening the ecologist\'s hypothesis.' },
        { optionIndex: 2, optionText: 'Kudzu root chemical extracts contained high concentrations of nitrogen...', trapType: 'Chemical Composition Trap', whyIncorrect: 'Nitrogen content does not measure allelopathic growth suppression.' },
        { optionIndex: 3, optionText: 'Native tree seedlings grown in greenhouses produced larger leaves...', trapType: 'Greenhouse Fertilizer Trap', whyIncorrect: 'Fertilizer growth does not address kudzu shade vs chemical mechanism.' }
      ]
    }
  },
  {
    id: 't5-ex-7',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A sports physiologist hypothesized that wearing compression garments during post-exercise recovery accelerates muscle glycogen resynthesis by increasing microvascular blood flow to fatigued muscle tissue. To evaluate this, he measured muscle biopsy glycogen concentrations and microvascular perfusion in athletes 1, 2, and 4 hours post-workout while wearing either lower-limb compression tights or loose-fitting cotton pants.`,
    questionText: `Which finding, if true, would most directly support the physiologist's hypothesis?`,
    options: [
      'Athletes wearing compression tights exhibited both significantly higher microvascular blood perfusion and faster muscle glycogen resynthesis rates at 2 and 4 hours post-workout than athletes wearing loose pants.',
      'Athletes wearing loose pants reported equal subjective comfort levels during post-workout rest as athletes wearing compression tights.',
      'Muscle glycogen concentrations prior to workout initiation were identical across both athlete groups.',
      'Athletes wearing compression tights produced higher peak power output during pre-workout sprinting drills.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Compression garments -> increase microvascular blood flow -> accelerate post-exercise muscle glycogen resynthesis.`,
      correctReasoning: `Option A directly supports both blood flow mechanism and glycogen resynthesis outcome in compression garments.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Athletes wearing compression tights exhibited both significantly higher...', trapType: 'Correct Direct Match', whyIncorrect: 'Directly validates microvascular blood flow and glycogen resynthesis.' },
        { optionIndex: 1, optionText: 'Athletes wearing loose pants reported equal subjective comfort...', trapType: 'Comfort Distractor', whyIncorrect: 'Subjective comfort does not measure microvascular flow or glycogen.' },
        { optionIndex: 2, optionText: 'Muscle glycogen concentrations prior to workout initiation were...', trapType: 'Pre-Workout Baseline Trap', whyIncorrect: 'Identical baseline is required control, but does not prove compression benefit.' },
        { optionIndex: 3, optionText: 'Athletes wearing compression tights produced higher peak power...', trapType: 'Pre-Workout Performance Trap', whyIncorrect: 'Pre-workout power output does not measure post-workout recovery glycogen.' }
      ]
    }
  },
  {
    id: 't5-ex-8',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An archaeologist hypothesized that ancient obsidian blades discovered at a coastal trade site were transported via sea canoes from volcanic islands located 200 kilometers offshore, rather than traded along overland mountain paths from inland quarries. She conducted X-ray fluorescence (XRF) spectrometry on the obsidian blades to match their trace element chemical fingerprints against known geological quarry sources.`,
    questionText: `Which finding, if true, would most directly support the archaeologist's hypothesis?`,
    options: [
      'XRF chemical signatures of the coastal obsidian blades matched the unique trace element profile of volcanic island quarries 200 km offshore, while differing completely from inland mountain quarry signatures.',
      'Coastal trade site layers contained high concentrations of fish bones and shellfish fragments.',
      'Obsidian blades discovered at inland mountain sites were sharper than obsidian blades found at coastal sites.',
      'Sea canoes constructed by coastal communities were coated with tree resin waterproofing.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Obsidian blades originated from volcanic island quarries 200 km offshore (sea canoe trade), NOT inland mountain quarries.`,
      correctReasoning: `Option A provides direct chemical fingerprint evidence matching coastal blades exclusively to the volcanic island quarries.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'XRF chemical signatures of the coastal obsidian blades matched...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Directly matches chemical profile to offshore island quarries.' },
        { optionIndex: 1, optionText: 'Coastal trade site layers contained high concentrations of fish bones...', trapType: 'Dietary Distractor', whyIncorrect: 'Fish bones indicate diet, not obsidian quarry origin.' },
        { optionIndex: 2, optionText: 'Obsidian blades discovered at inland mountain sites were sharper...', trapType: 'Blade Sharpness Trap', whyIncorrect: 'Sharpness does not indicate geological quarry source.' },
        { optionIndex: 3, optionText: 'Sea canoes constructed by coastal communities were coated...', trapType: 'Canoe Feature Distractor', whyIncorrect: 'Resin coating proves canoe construction, not obsidian source island.' }
      ]
    }
  },
  {
    id: 't5-ex-9',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A neurobiologist hypothesized that deep sleep ($N_3$ stage slow-wave sleep) facilitates brain waste clearance via the glymphatic system by triggering interstitial space expansion in cortical tissue, allowing cerebrospinal fluid (CSF) to flush metabolic byproducts like amyloid-beta. To test this, she used real-time two-photon imaging in mice to measure cortical interstitial space volume and CSF tracer clearance rates during $N_3$ sleep versus awake states.`,
    questionText: `Which finding, if true, would most directly support the neurobiologist's hypothesis?`,
    options: [
      'During $N_3$ slow-wave sleep, cortical interstitial space volume in mice expanded by 60%, resulting in a two-fold increase in CSF amyloid-beta clearance compared to awake states.',
      'Mice deprived of $N_3$ sleep consumed 30% more food energy during awake hours than non-deprived mice did.',
      'Cerebrospinal fluid tracer clearance rates in the spinal cord were identical during $N_3$ sleep and awake states.',
      'Cortical neurons exhibited higher electrical firing rates during awake state exploratory behavior than during $N_3$ sleep.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: $N_3$ slow-wave sleep -> triggers cortical interstitial space expansion -> increases CSF clearance of metabolic waste (amyloid-beta).`,
      correctReasoning: `Option A provides direct evidence: 60% interstitial space expansion and a 2-fold increase in amyloid-beta clearance during $N_3$ sleep vs awake.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'During $N_3$ slow-wave sleep, cortical interstitial space volume...', trapType: 'Correct Direct Match', whyIncorrect: 'Validates both interstitial expansion and waste clearance.' },
        { optionIndex: 1, optionText: 'Mice deprived of $N_3$ sleep consumed 30% more food energy...', trapType: 'Appetite Distractor', whyIncorrect: 'Food consumption does not measure glymphatic CSF clearance.' },
        { optionIndex: 2, optionText: 'Cerebrospinal fluid tracer clearance rates in the spinal cord...', trapType: 'Wrong Body Location', whyIncorrect: 'Spinal cord clearance does not address cortical brain glymphatic clearance.' },
        { optionIndex: 3, optionText: 'Cortical neurons exhibited higher electrical firing rates during awake...', trapType: 'Electrophysiological Distractor', whyIncorrect: 'Neuronal firing rate does not measure interstitial volume or waste flush.' }
      ]
    }
  },
  {
    id: 't5-ex-10',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An urban economist hypothesized that introducing free municipal public transit passes for low-income residents increases employment rates by removing transportation cost barriers to job interviews and commutes. She evaluated a pilot program in City X where 5,000 low-income job seekers received free transit passes, comparing their 12-month employment outcomes against a demographically matched control group of job seekers who paid standard transit fares.`,
    questionText: `Which finding, if true, would most directly support the economist's hypothesis?`,
    options: [
      'Pass recipients in City X achieved a 42% job placement rate within 12 months, compared to a 19% placement rate among control group job seekers paying standard fares.',
      'Municipal public transit bus routes in City X added ten new bus stops in suburban commercial corridors during the pilot year.',
      'Control group job seekers purchased monthly transit passes at automated ticket kiosks.',
      'Municipal sales tax revenue in City X increased by 2% during the pilot program year.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Free public transit passes for low-income job seekers -> removes cost barrier -> increases employment rates (job placement).`,
      correctReasoning: `Option A directly supports the hypothesis: pass recipients achieved a 42% placement rate vs 19% in the standard-fare control group.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Pass recipients in City X achieved a 42% job placement rate...', trapType: 'Correct Direct Match', whyIncorrect: 'Directly validates increased employment rates among pass recipients.' },
        { optionIndex: 1, optionText: 'Municipal public transit bus routes in City X added ten new bus stops...', trapType: 'Infrastructure Confounding Trap', whyIncorrect: 'New bus stops affect overall transit service, not specifically the free pass impact.' },
        { optionIndex: 2, optionText: 'Control group job seekers purchased monthly transit passes at automated...', trapType: 'Transaction Method Distractor', whyIncorrect: 'Kiosk purchase location does not address job placement rates.' },
        { optionIndex: 3, optionText: 'Municipal sales tax revenue in City X increased by 2%...', trapType: 'Macroeconomic Metric Trap', whyIncorrect: 'Citywide sales tax revenue does not measure individual job seeker placement.' }
      ]
    }
  }
];
