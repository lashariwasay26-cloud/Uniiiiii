import { DemonstrationExample } from '../readingTypes';

export const T5_DEMONSTRATIONS: DemonstrationExample[] = [
  {
    demoNumber: 1,
    id: 't5-demo-1',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `To test whether subterranean mycorrhizal fungi facilitate nitrogen transfer between mature oak trees and surrounding saplings, forest ecologists labeled soil nitrogen with a stable isotope ($^{15}\\text{N}$) near mature oak roots. They compared saplings connected to the oak's fungal network with saplings whose roots were isolated by fine mesh barriers that prevented fungal hyphae penetration. The researchers hypothesized that fungal connectivity significantly increases nitrogen uptake in young saplings during periods of light deprivation.`,
    questionText: `Which finding, if true, would most directly support the researchers' hypothesis?`,
    options: [
      'Under low-light conditions, saplings connected to the fungal network exhibited significantly higher concentrations of $^{15}\\text{N}$ than mesh-isolated saplings did.',
      'Mesh-isolated saplings absorbed higher levels of groundwater under full-sunlight conditions than connected saplings did.',
      'Mature oak trees re-absorbed equal amounts of $^{15}\\text{N}$ regardless of sapling density nearby.',
      'Fungal hyphae density was identical in soil samples taken near mesh barriers and open soil.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    strategicTakeaway: 'Hypothesis: Fungal connectivity increases nitrogen ($^{15}\\text{N}$) uptake in saplings during light deprivation (low light). Option A directly measures $^{15}\\text{N}$ concentration under low light.',
    explanation: {
      passageDeconstruction: `Hypothesis: Fungal connectivity increases nitrogen ($^{15}\\text{N}$) uptake in saplings during light deprivation. Variable 1: fungal connection vs isolation. Variable 2: $^{15}\\text{N}$ concentration. Variable 3: low light.`,
      correctReasoning: `Option A provides direct evidence: under low-light conditions, connected saplings had significantly higher $^{15}\\text{N}$ concentration than isolated saplings.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Under low-light conditions, saplings connected to the fungal...', trapType: 'Correct Targeted Evidence', whyIncorrect: 'Directly supports the hypothesis with all key variables.' },
        { optionIndex: 1, optionText: 'Mesh-isolated saplings absorbed higher levels of groundwater...', trapType: 'Wrong Variable Trap', whyIncorrect: 'Measures groundwater under full sun, not nitrogen under low light.' },
        { optionIndex: 2, optionText: 'Mature oak trees re-absorbed equal amounts of $^{15}\\text{N}$...', trapType: 'Irrelevant Subject Trap', whyIncorrect: 'Focuses on mature oaks rather than sapling nitrogen uptake.' },
        { optionIndex: 3, optionText: 'Fungal hyphae density was identical...', trapType: 'Baseline Measurement Trap', whyIncorrect: 'Measures hyphae density rather than nitrogen transfer performance.' }
      ]
    }
  },
  {
    demoNumber: 2,
    id: 't5-demo-2',
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
    strategicTakeaway: 'Match variables: Urban mice vs rural mice -> $CT_{\\text{max}}$ (heat tolerance). Direct evidence requires higher $CT_{\\text{max}}$ in urban mice.',
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
    demoNumber: 3,
    id: 't5-demo-3',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A marine ecologist hypothesized that plastic microfibers ingested by mussels weaken their ability to adhere to rocky surfaces by disrupting the secretion of mussel adhesive proteins (byssal threads). To test this hypothesis, she exposed three groups of mussels to varying microplastic concentrations (0 mg/L, 10 mg/L, and 50 mg/L) for 30 days and measured both the number of byssal threads produced per mussel and the detachment force required to dislodge them.`,
    questionText: `Which finding, if true, would most directly weaken the ecologist's hypothesis?`,
    options: [
      'Mussels exposed to 50 mg/L microplastics produced the same average number of byssal threads and required equal detachment force as the 0 mg/L control group.',
      'Mussels exposed to 10 mg/L microplastics produced fewer byssal threads than mussels exposed to 0 mg/L microplastics.',
      'Mussels in the 50 mg/L group required significantly less force to dislodge than mussels in the 10 mg/L group.',
      'Microplastic accumulation in mussel gut tissue increased proportionally with exposure concentration.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Weakening Evidence Selection',
    explanation: {
      passageDeconstruction: `Hypothesis: Microplastics WEAKEN adhesion by disrupting byssal thread production/force. To WEAKEN this claim, we need evidence showing microplastics have NO negative effect on thread count or detachment force.`,
      correctReasoning: `Option A shows that even at 50 mg/L microplastics, mussels produced equal thread counts and required equal detachment force as the control, directly weakening the hypothesis.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Mussels exposed to 50 mg/L microplastics produced the same...', trapType: 'Correct Weakening Evidence', whyIncorrect: 'Demonstrates zero disruption, directly weakening the hypothesis.' },
        { optionIndex: 1, optionText: 'Mussels exposed to 10 mg/L microplastics produced fewer byssal...', trapType: 'Supporting Evidence Trap', whyIncorrect: 'Supports the hypothesis rather than weakening it.' },
        { optionIndex: 2, optionText: 'Mussels in the 50 mg/L group required significantly less force...', trapType: 'Supporting Evidence Trap', whyIncorrect: 'Supports the hypothesis that higher microplastics reduce adhesion.' },
        { optionIndex: 3, optionText: 'Microplastic accumulation in mussel gut tissue increased...', trapType: 'Ingestion Confirming Trap', whyIncorrect: 'Confirms ingestion occurred, but does not address adhesion strength.' }
      ]
    }
  },
  {
    demoNumber: 4,
    id: 't5-demo-4',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An archaeologist studying ancient Maya agricultural systems hypothesized that wetland raised fields (*chinampas*) were constructed primarily to cultivate maize during dry season droughts rather than year-round staple production. To test this, she extracted soil pollen samples from stratified layers of ancient raised field canals and analyzed pollen density across seasonal sediment deposits.`,
    questionText: `Which finding, if true, would most directly support the archaeologist's hypothesis?`,
    options: [
      'Maize pollen density in raised field sediment layers was abundant exclusively during dry season deposits, while remaining undetectable in wet season deposits.',
      'Maize pollen density was identical in wet season and dry season sediment deposits across all excavated canals.',
      'Raised field canal layers contained high densities of pollen from non-agricultural wetland weeds.',
      'Clay pottery fragments discovered in raised field layers matched designs from neighboring coastal communities.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Chinampas cultivated maize PRIMARILY during dry season droughts rather than year-round.`,
      correctReasoning: `Option A provides direct evidence: maize pollen was abundant exclusively in dry season deposits and absent in wet season deposits.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Maize pollen density in raised field sediment layers was abundant...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Directly supports dry-season-exclusive cultivation hypothesis.' },
        { optionIndex: 1, optionText: 'Maize pollen density was identical in wet season and dry season...', trapType: 'Weakening Evidence Trap', whyIncorrect: 'Suggests year-round cultivation, directly weakening the dry-season hypothesis.' },
        { optionIndex: 2, optionText: 'Raised field canal layers contained high densities of pollen from non-agricultural...', trapType: 'Irrelevant Pollen Trap', whyIncorrect: 'Weed pollen does not address maize cultivation seasons.' },
        { optionIndex: 3, optionText: 'Clay pottery fragments discovered in raised field layers matched...', trapType: 'Artefact Distractor', whyIncorrect: 'Pottery designs do not indicate agricultural crop seasons.' }
      ]
    }
  },
  {
    demoNumber: 5,
    id: 't5-demo-5',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `Researchers investigating bird communication hypothesized that urban traffic noise forces song sparrows (*Melospiza melodia*) to shift their vocalizations to higher minimum frequencies to prevent low-frequency acoustic masking by traffic sounds. They recorded male sparrow songs across 20 urban parks with varying ambient noise levels ($40\\text{--}75\\text{ dB}$) and analyzed the minimum audio frequency (in Hz) of each song motif.`,
    questionText: `Which finding, if true, would most directly support the researchers' hypothesis?`,
    options: [
      'Male sparrows in urban parks with ambient noise levels of 75 dB produced songs with significantly higher minimum frequencies than sparrows in 40 dB parks.',
      'Male sparrows in 75 dB parks produced songs with longer overall durations than sparrows in 40 dB parks did.',
      'Female sparrows in 40 dB parks showed equal mating preference for high-frequency and low-frequency male songs.',
      'Urban noise levels peaked during morning rush-hour traffic when sparrows were most vocal.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Higher urban traffic noise -> sparrows shift songs to HIGHER minimum frequencies. Variables: noise level (dB) vs minimum song frequency (Hz).`,
      correctReasoning: `Option A provides direct evidence: sparrows in noisy parks (75 dB) sang at significantly higher minimum frequencies than sparrows in quiet parks (40 dB).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Male sparrows in urban parks with ambient noise levels of 75 dB...', trapType: 'Correct Variable Match', whyIncorrect: 'Directly links high ambient noise to higher minimum song frequency.' },
        { optionIndex: 1, optionText: 'Male sparrows in 75 dB parks produced songs with longer overall durations...', trapType: 'Wrong Variable Trap', whyIncorrect: 'Song duration is not minimum audio frequency.' },
        { optionIndex: 2, optionText: 'Female sparrows in 40 dB parks showed equal mating preference...', trapType: 'Mating Preference Trap', whyIncorrect: 'Female preference does not measure male frequency shifts.' },
        { optionIndex: 3, optionText: 'Urban noise levels peaked during morning rush-hour traffic...', trapType: 'Timing Baseline Trap', whyIncorrect: 'Traffic timing does not prove frequency shifts occurred.' }
      ]
    }
  },
  {
    demoNumber: 6,
    id: 't5-demo-6',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A team of plant physiologists hypothesized that applying exogenous salicylic acid to tomato plants increases drought tolerance by triggering stomatal closure, thereby reducing transpiration water loss. To evaluate this, they sprayed two groups of tomato plants with either a salicylic acid solution or a water control spray, subjected both groups to 14 days of water withdrawal, and monitored daily leaf stomatal conductance and total transpiration rate.`,
    questionText: `Which finding, if true, would most directly support the physiologists' hypothesis?`,
    options: [
      'Tomato plants sprayed with salicylic acid exhibited significantly lower stomatal conductance and reduced transpiration rates during water withdrawal compared to control plants.',
      'Tomato plants sprayed with water control produced larger fruit yields when fully irrigated than salicylic acid-treated plants.',
      'Leaf chlorophyll concentrations were identical in salicylic acid-treated plants and control plants prior to water withdrawal.',
      'Soil moisture depletion was faster in pots containing salicylic acid-treated plants than in pots containing control plants.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Salicylic acid -> triggers stomatal closure (lower stomatal conductance) -> reduces transpiration water loss.`,
      correctReasoning: `Option A directly supports the mechanism and prediction: lower stomatal conductance and reduced transpiration rates in treated plants during drought.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Tomato plants sprayed with salicylic acid exhibited significantly lower...', trapType: 'Correct Mechanism Match', whyIncorrect: 'Directly validates stomatal closure and transpiration reduction.' },
        { optionIndex: 1, optionText: 'Tomato plants sprayed with water control produced larger fruit yields...', trapType: 'Irrrelevant Condition Trap', whyIncorrect: 'Measures fruit yield under full irrigation, not drought transpiration.' },
        { optionIndex: 2, optionText: 'Leaf chlorophyll concentrations were identical...', trapType: 'Pre-Treatment Baseline Trap', whyIncorrect: 'Pre-withdrawal chlorophyll does not measure drought stomatal response.' },
        { optionIndex: 3, optionText: 'Soil moisture depletion was faster in pots containing salicylic acid...', trapType: 'Weakening Evidence Trap', whyIncorrect: 'Faster depletion implies higher transpiration, directly weakening the hypothesis.' }
      ]
    }
  },
  {
    demoNumber: 7,
    id: 't5-demo-7',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `An entomologist hypothesized that Monarch butterflies (*Danaus plexippus*) rely primarily on magnetic inclination cues rather than polarized skylight patterns for long-distance directional navigation during autumn migration. To test this, she placed migrating Monarchs in a flight simulator equipped with magnetic coil systems that inverted the ambient magnetic field while maintaining normal polarized skylight.`,
    questionText: `Which finding, if true, would most directly support the entomologist's hypothesis?`,
    options: [
      'Monarchs in the simulator immediately reversed their flight orientation when the magnetic field was inverted, despite uninhibited polarized skylight cues.',
      'Monarchs maintained their southward flight orientation unchanged when the magnetic field was inverted.',
      'Monarchs exhibited higher wingbeat frequencies under artificial magnetic coils than under outdoor solar conditions.',
      'Monarchs placed in total darkness ceased flying completely regardless of magnetic field configuration.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Monarchs rely PRIMARILY on magnetic inclination cues (not polarized skylight) for directional orientation. Test: Invert magnetic field while keeping polarized skylight normal.`,
      correctReasoning: `Option A provides decisive evidence: inverting the magnetic field immediately reversed flight direction, proving magnetic cues override skylight.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Monarchs in the simulator immediately reversed their flight orientation...', trapType: 'Correct Decisive Evidence', whyIncorrect: 'Proves magnetic field manipulation overrides skylight cues.' },
        { optionIndex: 1, optionText: 'Monarchs maintained their southward flight orientation unchanged...', trapType: 'Weakening Evidence Trap', whyIncorrect: 'Shows inverting magnetic field had no effect, weakening magnetic hypothesis.' },
        { optionIndex: 2, optionText: 'Monarchs exhibited higher wingbeat frequencies...', trapType: 'Wrong Metric Trap', whyIncorrect: 'Wingbeat frequency does not measure directional navigation orientation.' },
        { optionIndex: 3, optionText: 'Monarchs placed in total darkness ceased flying completely...', trapType: 'Confounding Absence Trap', whyIncorrect: 'Flight cessation in darkness does not prove magnetic reliance over skylight.' }
      ]
    }
  },
  {
    demoNumber: 8,
    id: 't5-demo-8',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An environmental scientist hypothesized that installing permeable asphalt driveways in suburban residential neighborhoods reduces stormwater runoff volume into local streams by allowing rainwater to infiltrate the underlying soil matrix. She measured stream stormwater discharge rates during storm events across two residential watersheds: Neighborhood A (which retrofitted 80% of driveways with permeable asphalt) and Neighborhood B (which retained 100% standard impermeable concrete driveways).`,
    questionText: `Which finding, if true, would most directly support the scientist's hypothesis?`,
    options: [
      'Neighborhood A recorded significantly lower peak stream discharge volumes during heavy rainfall events than Neighborhood B did.',
      'Neighborhood B contained higher total tree canopy coverage than Neighborhood A did.',
      'Permeable asphalt installation costs per driveway were higher in Neighborhood A than in neighboring commercial zones.',
      'Annual municipal maintenance expenses for concrete driveways in Neighborhood B exceeded initial installation costs.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Permeable asphalt driveways (Neighborhood A) -> reduces stormwater runoff volume (peak stream discharge) compared to impermeable driveways (Neighborhood B).`,
      correctReasoning: `Option A directly verifies the hypothesis: Neighborhood A had significantly lower peak stream discharge during heavy rain.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Neighborhood A recorded significantly lower peak stream discharge...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Directly validates reduced stormwater runoff.' },
        { optionIndex: 1, optionText: 'Neighborhood B contained higher total tree canopy coverage...', trapType: 'Confounding Factor Trap', whyIncorrect: 'Tree canopy is a confounding variable, not evidence of driveway permeability performance.' },
        { optionIndex: 2, optionText: 'Permeable asphalt installation costs per driveway were higher...', trapType: 'Economic Distractor', whyIncorrect: 'Installation costs do not measure runoff volume.' },
        { optionIndex: 3, optionText: 'Annual municipal maintenance expenses for concrete driveways...', trapType: 'Economic Distractor', whyIncorrect: 'Maintenance expenses do not address stormwater runoff.' }
      ]
    }
  },
  {
    demoNumber: 9,
    id: 't5-demo-9',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A cognitive neuroscientist hypothesized that playing musical instruments in childhood enhances auditory working memory capacity in adulthood by increasing white matter microstructural integrity in the arcuate fasciculus tract. She conducted diffusion tensor imaging (DTI) brain scans on adults who received at least five years of childhood instrument training and non-musician control adults, while measuring their scores on an auditory digit-span memory task.`,
    questionText: `Which finding, if true, would most directly support the neuroscientist's hypothesis?`,
    options: [
      'Adults with childhood instrument training exhibited both significantly higher fractional anisotropy (a measure of microstructural integrity) in the arcuate fasciculus and higher auditory digit-span memory scores than non-musicians.',
      'Non-musician adults performed equally well on visual memory tasks as adults with childhood instrument training did.',
      'Adults with childhood instrument training reported listening to recorded classical music more frequently than non-musicians.',
      'Fractional anisotropy in the optic nerve tract was identical across both adult groups.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Childhood instrument training -> increases arcuate fasciculus white matter microstructural integrity -> enhances adult auditory working memory.`,
      correctReasoning: `Option A provides complete evidence matching all links: higher white matter integrity (fractional anisotropy) in arcuate fasciculus AND higher auditory memory scores in childhood musicians.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Adults with childhood instrument training exhibited both significantly...', trapType: 'Correct Complete Linkage', whyIncorrect: 'Validates both neural structure mechanism and memory performance.' },
        { optionIndex: 1, optionText: 'Non-musician adults performed equally well on visual memory tasks...', trapType: 'Wrong Modality Trap', whyIncorrect: 'Visual memory does not address auditory working memory.' },
        { optionIndex: 2, optionText: 'Adults with childhood instrument training reported listening to recorded...', trapType: 'Behavioral Preference Trap', whyIncorrect: 'Music listening habits do not measure brain white matter or memory capacity.' },
        { optionIndex: 3, optionText: 'Fractional anisotropy in the optic nerve tract was identical...', trapType: 'Wrong Neural Location', whyIncorrect: 'Optic nerve is visual; hypothesis specifies arcuate fasciculus.' }
      ]
    }
  },
  {
    demoNumber: 10,
    id: 't5-demo-10',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An agricultural scientist hypothesized that applying biochar (pyrolyzed organic matter) to sandy soils increases tomato crop yield by enhancing soil water retention capacity during hot weather. He treated half of a sandy farm field with biochar soil amendment and left the other half unamended as a control, maintaining identical irrigation across both sections during a summer heatwave.`,
    questionText: `Which finding, if true, would most directly support the scientist's hypothesis?`,
    options: [
      'Biochar-treated soil retained significantly higher volumetric water content throughout the heatwave, and tomato plants in the biochar section produced a 35% higher fruit yield by weight than control section plants.',
      'Control section plants required less frequent nitrogen fertilizer applications than biochar-treated plants did.',
      'Weed density in the biochar-treated section was 20% higher than in the control section.',
      'Tomato fruit harvest dates were identical in both the biochar-treated section and the control section.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Biochar -> enhances soil water retention -> increases tomato crop yield in sandy soil during heatwaves.`,
      correctReasoning: `Option A directly supports both mechanism (higher soil water retention) and outcome (35% higher tomato fruit yield).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Biochar-treated soil retained significantly higher volumetric water...', trapType: 'Correct Direct Match', whyIncorrect: 'Directly validates water retention mechanism and yield increase.' },
        { optionIndex: 1, optionText: 'Control section plants required less frequent nitrogen fertilizer...', trapType: 'Wrong Variable Trap', whyIncorrect: 'Fertilizer frequency does not measure water retention or yield.' },
        { optionIndex: 2, optionText: 'Weed density in the biochar-treated section was 20% higher...', trapType: 'Unintended Consequence Trap', whyIncorrect: 'Weed density does not measure tomato crop yield.' },
        { optionIndex: 3, optionText: 'Tomato fruit harvest dates were identical in both...', trapType: 'Timing Baseline Trap', whyIncorrect: 'Harvest timing does not measure total fruit yield weight.' }
      ]
    }
  }
];
