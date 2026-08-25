import { DemonstrationExample } from '../readingTypes';

export const T6_DEMONSTRATIONS: DemonstrationExample[] = [
  {
    demoNumber: 1,
    id: 't6-demo-1',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `A team of marine oceanographers analyzing acoustic signatures in the North Atlantic discovered that humpback whale songs exhibited regional dialects that evolved over multi-year cycles. Interestingly, songs recorded near Iceland gradually incorporated melodic structures first observed off the coast of Greenland, indicating that social learning across migratory corridors ______ global cetacean cultural transmission.`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'serves as a primary driver of',
      'exerts a negligible impact on',
      'precludes the possibility of',
      'is entirely distinct from'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    strategicTakeaway: 'The incorporation of Greenlandic song structures into Icelandic whale songs directly shows that social learning drives cultural transmission.',
    explanation: {
      passageDeconstruction: `Icelandic whales adopted Greenlandic song structures across migratory corridors. This proves social learning across corridors actively facilitates/drives cultural transmission.`,
      correctReasoning: `Option A ("serves as a primary driver of") conservatively completes the logical deduction.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'serves as a primary driver of', trapType: 'Correct Logical Completion', whyIncorrect: 'Directly follows from the evidence presented.' },
        { optionIndex: 1, optionText: 'exerts a negligible impact on', trapType: 'Direct Contradiction', whyIncorrect: 'The passage proves a significant impact.' },
        { optionIndex: 2, optionText: 'precludes the possibility of', trapType: 'Opposite Meaning', whyIncorrect: 'Precludes means prevents, contradicting the evidence.' },
        { optionIndex: 3, optionText: 'is entirely distinct from', trapType: 'False Separation', whyIncorrect: 'Social learning is shown to be integral to cultural transmission.' }
      ]
    }
  },
  {
    demoNumber: 2,
    id: 't6-demo-2',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Cognitive psychologists studying memory retrieval found that participants who reviewed study material immediately before sleeping retained 30% more vocabulary words after 48 hours than participants who reviewed the same material in the morning. Subsequent EEG scans during slow-wave sleep revealed active neural replay in the hippocampus corresponding to recently acquired vocabulary patterns, suggesting that ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'slow-wave sleep plays a key role in consolidating newly learned linguistic information.',
      'morning study sessions are completely ineffective for long-term memory formation.',
      'vocabulary retention is impossible without at least 12 hours of continuous sleep.',
      'hippocampal neural replay occurs exclusively during waking hours.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    strategicTakeaway: 'Connect the premises: Pre-sleep review improves retention + EEG shows hippocampal replay during slow-wave sleep -> Slow-wave sleep aids memory consolidation.',
    explanation: {
      passageDeconstruction: `Premise 1: Reviewing before sleep leads to 30% higher retention. Premise 2: EEG scans show neural replay in the hippocampus during slow-wave sleep corresponding to vocabulary patterns. Conclusion: slow-wave sleep helps consolidate new linguistic information.`,
      correctReasoning: `Option A conservatively summarizes the connection between slow-wave sleep neural replay and vocabulary consolidation.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'slow-wave sleep plays a key role in consolidating newly learned...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly synthesizes pre-sleep study benefit and hippocampal EEG replay.' },
        { optionIndex: 1, optionText: 'morning study sessions are completely ineffective...', trapType: 'Extreme Language Trap', whyIncorrect: 'Says morning sessions were less effective, not "completely ineffective".' },
        { optionIndex: 2, optionText: 'vocabulary retention is impossible without at least 12 hours...', trapType: 'Unsupported Absolute', whyIncorrect: '12 hours of sleep is never mentioned.' },
        { optionIndex: 3, optionText: 'hippocampal neural replay occurs exclusively during waking...', trapType: 'Direct Contradiction', whyIncorrect: 'The text states replay occurred during slow-wave sleep.' }
      ]
    }
  },
  {
    demoNumber: 3,
    id: 't6-demo-3',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In a trial evaluating deep-sea manganese nodule harvesting, mining vehicles scraped benthic sediment in the Pacific Ocean at a depth of 4,000 meters. Twenty years later, oceanographers returned to survey the site and found that bacterial biomass in the disturbed tracks remained 80% lower than in adjacent undisturbed seabed, and no deep-sea sponges or corals had recolonized the tracks. These findings suggest that deep-sea benthic ecosystems ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'possess extremely slow recovery rates following physical disturbance to the seabed.',
      'will achieve full ecological recovery within thirty years of mining activity.',
      'are completely immune to disruption caused by mechanical scraping.',
      'recolonize benthic tracks faster in deep ocean zones than in shallow coastal waters.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Premise: 20 years after physical disturbance (mining tracks), bacterial biomass remains 80% lower and zero sponges/corals have recolonized. Conclusion: These deep-sea ecosystems have very slow recovery rates.`,
      correctReasoning: `Option A conservatively concludes that recovery after physical disturbance is extremely slow, directly matching the 20-year lack of recolonization.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'possess extremely slow recovery rates following physical disturbance...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Conservatively summarizes the 20-year lack of recovery.' },
        { optionIndex: 1, optionText: 'will achieve full ecological recovery within thirty years...', trapType: 'Speculative Timeline Trap', whyIncorrect: 'Assumes full recovery in 30 years without any evidence.' },
        { optionIndex: 2, optionText: 'are completely immune to disruption caused by...', trapType: 'Direct Contradiction', whyIncorrect: 'The text proves severe, long-lasting disruption.' },
        { optionIndex: 3, optionText: 'recolonize benthic tracks faster in deep ocean zones than...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Shallow coastal waters are never mentioned.' }
      ]
    }
  },
  {
    demoNumber: 4,
    id: 't6-demo-4',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Biologists studying desert succulents (*Agave americana*) noted that the plants open their stomata exclusively at night to absorb carbon dioxide ($CO_2$), storing it as malic acid until daylight enables photosynthesis. Because nighttime ambient temperatures are significantly lower than daytime temperatures, water evaporation through open stomata is minimized, demonstrating that Crassulacean Acid Metabolism (CAM) is an evolutionary adaptation that ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'enhances water-use efficiency in arid environments.',
      'requires continuous daytime stomatal opening.',
      'eliminates the need for solar light energy during photosynthesis.',
      'accelerates transpiration rates during midday heat spikes.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Nighttime stomatal opening absorbs $CO_2$ when temperatures are lower -> minimizes water evaporation during transpiration. Conclusion: CAM enhances water-use efficiency in arid environments.`,
      correctReasoning: `Option A accurately completes the logic: minimizing water loss in hot/dry conditions enhances water-use efficiency.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'enhances water-use efficiency in arid environments.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly follows from minimized water evaporation in desert plants.' },
        { optionIndex: 1, optionText: 'requires continuous daytime stomatal opening.', trapType: 'Direct Contradiction', whyIncorrect: 'Text explicitly states stomata open exclusively at night.' },
        { optionIndex: 2, optionText: 'eliminates the need for solar light energy during photosynthesis.', trapType: 'Scientific Falsehood Trap', whyIncorrect: 'Text states daylight enables photosynthesis; solar light is still needed.' },
        { optionIndex: 3, optionText: 'accelerates transpiration rates during midday heat spikes.', trapType: 'Direct Contradiction', whyIncorrect: 'Transpiration is minimized, not accelerated.' }
      ]
    }
  },
  {
    demoNumber: 5,
    id: 't6-demo-5',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In a study of primate foraging behavior, researchers observed that wild capuchin monkeys (*Cebus capucinus*) selected flat granite stones of specific weights ($1.5\text{--}2.5\text{ kg}$) to crack open tough palm nuts. When researchers substituted lighter limestone rocks ($0.5\text{ kg}$) in experimental feeding stations, the capuchins inspected the new rocks but consistently rejected them, searching up to 200 meters to retrieve granite stones of their preferred mass. This behavior suggests that capuchins ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'actively evaluate the physical properties of tools required for effective nut cracking.',
      'select nut-cracking stones based entirely on random spatial proximity.',
      'prefer lighter rocks because they require less mechanical lifting force.',
      'are unable to distinguish between granite and limestone rock compositions.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Capuchins rejected light ($0.5\text{ kg}$) rocks and traveled 200m to find heavy ($1.5\text{--}2.5\text{ kg}$) granite stones needed to crack palm nuts. Conclusion: They actively evaluate tool physical properties (mass/weight) for task suitability.`,
      correctReasoning: `Option A conservatively summarizes that capuchins evaluate physical tool properties (weight) rather than choosing randomly.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'actively evaluate the physical properties of tools required...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by their rejection of light rocks and search for heavy stones.' },
        { optionIndex: 1, optionText: 'select nut-cracking stones based entirely on random spatial proximity.', trapType: 'Direct Contradiction', whyIncorrect: 'Travelling 200m to find specific stones proves proximity was NOT the basis.' },
        { optionIndex: 2, optionText: 'prefer lighter rocks because they require less mechanical lifting force.', trapType: 'Direct Contradiction', whyIncorrect: 'They rejected lighter rocks in favor of heavier ones.' },
        { optionIndex: 3, optionText: 'are unable to distinguish between granite and limestone rock...', trapType: 'Direct Contradiction', whyIncorrect: 'Their inspection and rejection of lighter rocks proves they distinguished them.' }
      ]
    }
  },
  {
    demoNumber: 6,
    id: 't6-demo-6',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Linguists analyzing historical shifts in Old English noticed that between 1100 and 1400 CE, inflectional noun endings designating grammatical case (such as nominative, dative, and accusative) were gradually dropped. Concurrently, English sentence structure transitioned from flexible word order to a rigid Subject-Verb-Object ($SVO$) word order, suggesting that as inflectional case markers disappeared, ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'word order became the primary mechanism for indicating grammatical relationships between sentence elements.',
      'English speakers stopped using nouns in written literature.',
      'inflectional endings were reintroduced into Modern English syntax.',
      'grammatical case distinctions became completely ambiguous in all European languages.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Premise 1: Inflectional case endings dropped. Premise 2: Concurrently, sentence structure shifted to rigid Subject-Verb-Object ($SVO$) order. Conclusion: Word order replaced case endings as the way to indicate grammatical relationships.`,
      correctReasoning: `Option A logically completes the historical language transition premise.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'word order became the primary mechanism for indicating grammatical...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly connects loss of case endings to adoption of rigid $SVO$ word order.' },
        { optionIndex: 1, optionText: 'English speakers stopped using nouns in written literature.', trapType: 'Absurd Overgeneralization', whyIncorrect: 'Nouns were not eliminated, only inflectional endings.' },
        { optionIndex: 2, optionText: 'inflectional endings were reintroduced into Modern English syntax.', trapType: 'Direct Contradiction', whyIncorrect: 'The text describes their permanent disappearance.' },
        { optionIndex: 3, optionText: 'grammatical case distinctions became completely ambiguous in all...', trapType: 'Scope Expansion Trap', whyIncorrect: 'Expands the finding from Old English to "all European languages".' }
      ]
    }
  },
  {
    demoNumber: 7,
    id: 't6-demo-7',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `Ecologists monitoring invasive emerald ash borer beetles (*Agrilus planipennis*) noted that female beetles lay eggs in North American white ash trees (*Fraxinus americana*), where larvae consume phloem tissue and kill 99% of infected trees. However, in East Asian Manchurian ash trees (*Fraxinus mandshurica*), where the beetle co-evolved, larval feeding triggers a localized surge in defensive phenolic chemicals that arrests larval development before phloem destruction occurs. This contrast indicates that white ash vulnerability stems from ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'a lack of co-evolved biochemical defense mechanisms against larval feeding.',
      'an overproduction of toxic phenolic chemicals in response to beetle eggs.',
      'a faster phloem tissue growth rate compared to Manchurian ash trees.',
      'an inability to survive in temperate climate zones.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Co-evolved Manchurian ash trees produce defensive phenolic chemicals that stop larvae. North American white ash trees lack this co-evolved defense and suffer 99% mortality. Conclusion: White ash vulnerability stems from lacking co-evolved biochemical defenses.`,
      correctReasoning: `Option A conservatively attributes white ash vulnerability to its lack of co-evolved biochemical defenses.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'a lack of co-evolved biochemical defense mechanisms against...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by the contrast with Manchurian ash co-evolved phenolic response.' },
        { optionIndex: 1, optionText: 'an overproduction of toxic phenolic chemicals in response...', trapType: 'Direct Contradiction', whyIncorrect: 'Manchurian ash produces phenolics, while white ash lacks them.' },
        { optionIndex: 2, optionText: 'a faster phloem tissue growth rate compared to Manchurian ash...', trapType: 'Unmentioned Variable', whyIncorrect: 'Phloem growth rate is never mentioned.' },
        { optionIndex: 3, optionText: 'an inability to survive in temperate climate zones.', trapType: 'Unmentioned Climate Claim', whyIncorrect: 'Climate zone survival is not mentioned.' }
      ]
    }
  },
  {
    demoNumber: 8,
    id: 't6-demo-8',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Archaeologists analyzing pottery sherds from ancient Mesopotamian sites around 3000 BCE discovered that vessels made with fast-spinning potter's wheels exhibited highly uniform wall thickness and standardized liquid volumes compared to earlier hand-molded coil pottery. The adoption of the potter's wheel coincided with a ten-fold increase in vessel production output per workshop, suggesting that this technological innovation ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'facilitated mass production and standardization in ceramic manufacturing.',
      'caused a total decline in overall consumer demand for ceramic vessels.',
      'required individual potters to spend more time crafting each vessel.',
      'eliminated trade between Mesopotamian urban centers.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Potter's wheel -> uniform wall thickness + standardized volumes + 10-fold increase in output per workshop. Conclusion: Facilitated mass production and standardization.`,
      correctReasoning: `Option A accurately completes the inference by connecting standardized vessels and 10x output increase to mass production.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'facilitated mass production and standardization in ceramic...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 10x output gain and standardized vessel dimensions.' },
        { optionIndex: 1, optionText: 'caused a total decline in overall consumer demand...', trapType: 'Direct Contradiction', whyIncorrect: 'A 10-fold increase in production output indicates rising or strong demand, not total decline.' },
        { optionIndex: 2, optionText: 'required individual potters to spend more time crafting each...', trapType: 'Direct Contradiction', whyIncorrect: 'Fast-spinning wheel increased output 10x, reducing craft time per vessel.' },
        { optionIndex: 3, optionText: 'eliminated trade between Mesopotamian urban centers.', trapType: 'Unmentioned Scope', whyIncorrect: 'Inter-city trade elimination is not mentioned.' }
      ]
    }
  },
  {
    demoNumber: 9,
    id: 't6-demo-9',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In quantum chemistry simulations, helium atoms at temperatures near absolute zero ($0.01\text{ K}$) transition into a superfluid state characterized by zero viscosity, enabling the liquid to flow through microscopic capillaries without friction. However, when isotopic Helium-3 is substituted for standard Helium-4, superfluidity occurs only at temperatures below $0.002.5\text{ K}$—a threshold nearly four times lower. This disparity indicates that superfluid transition temperatures are heavily influenced by ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'the specific atomic mass or nuclear composition of the helium isotope.',
      'the atmospheric pressure of the surrounding laboratory room.',
      'the presence of high-frequency acoustic sound waves.',
      'the thermal conductivity of capillary glass walls.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Substituting Helium-3 for Helium-4 (changing the isotope/atomic mass) lowers the superfluid transition temperature from $0.01\text{ K}$ to $0.0025\text{ K}$. Conclusion: Transition temperatures are heavily influenced by atomic mass / nuclear composition of the isotope.`,
      correctReasoning: `Option A conservatively identifies atomic mass / nuclear isotope composition as the key variable.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'the specific atomic mass or nuclear composition of the helium isotope.', trapType: 'Correct Variable Identification', whyIncorrect: 'Directly supported by comparing Helium-3 vs Helium-4 transition temperatures.' },
        { optionIndex: 1, optionText: 'the atmospheric pressure of the surrounding laboratory room.', trapType: 'Unmentioned Variable', whyIncorrect: 'Atmospheric room pressure is not mentioned.' },
        { optionIndex: 2, optionText: 'the presence of high-frequency acoustic sound waves.', trapType: 'Unmentioned Variable', whyIncorrect: 'Acoustic sound waves are not mentioned.' },
        { optionIndex: 3, optionText: 'the thermal conductivity of capillary glass walls.', trapType: 'Unmentioned Variable', whyIncorrect: 'Capillary wall thermal conductivity is not mentioned.' }
      ]
    }
  },
  {
    demoNumber: 10,
    id: 't6-demo-10',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `A marine conservation team studying coral reef acoustic environments recorded ambient reef sounds before and after installing subsea speakers that played healthy reef audio (snapping shrimp clicks and fish grunts) near degraded, bleached reefs. Within one month, degraded reefs with audio playback attracted two to three times more free-swimming fish larvae than unamplified degraded control reefs, demonstrating that larval reef fish ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'use acoustic cues to navigate toward suitable reef habitats.',
      'are completely deaf to low-frequency underwater sound waves.',
      'prefer bleached, silent coral reefs over healthy noisy reefs.',
      'settle exclusively on artificial plastic subsea speakers.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Degraded reefs playing healthy reef audio attracted 2-3x more fish larvae than silent degraded reefs. Conclusion: Free-swimming fish larvae use acoustic cues to navigate toward suitable reef habitats.`,
      correctReasoning: `Option A accurately completes the inference: audio playback attracted larvae, proving they use acoustic cues for habitat navigation.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'use acoustic cues to navigate toward suitable reef habitats.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly follows from 2-3x higher larval attraction to audio-playing reefs.' },
        { optionIndex: 1, optionText: 'are completely deaf to low-frequency underwater sound waves.', trapType: 'Direct Contradiction', whyIncorrect: 'Larval response to audio proves they hear and react to sound.' },
        { optionIndex: 2, optionText: 'prefer bleached, silent coral reefs over healthy noisy reefs.', trapType: 'Direct Contradiction', whyIncorrect: 'Audio-playing reefs attracted 2-3x MORE larvae than silent ones.' },
        { optionIndex: 3, optionText: 'settle exclusively on artificial plastic subsea speakers.', trapType: 'Over-Literal Absurdity', whyIncorrect: 'Audio guided them to the reef area, not exclusively onto speaker plastic.' }
      ]
    }
  }
];
