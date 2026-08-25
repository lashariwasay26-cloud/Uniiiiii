import { ReadingQuestion } from '../readingTypes';

export const T5_EXERCISES_PART2: ReadingQuestion[] = [
  {
    id: 't5-ex-26',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A marine ecologist hypothesized that restoring native oyster reefs (*Crassostrea virginica*) in degraded estuaries improves water clarity by filtering suspended phytoplankton and organic silt. To test this, she measured water turbidity (in NTU) and chlorophyll-a concentrations in four estuarine bays prior to and two years after constructing artificial oyster reef structures.`,
    questionText: `Which finding, if true, would most directly support the ecologist's hypothesis?`,
    options: [
      'Bays with restored oyster reefs exhibited a 70% decrease in water turbidity and a 55% reduction in chlorophyll-a concentrations compared to unrestored control bays.',
      'Unrestored control bays experienced elevated water temperatures during summer heatwaves.',
      'Oyster shell density on restored reefs doubled within twelve months of artificial structure installation.',
      'Commercial crab fishing harvests increased equally in both restored and unrestored bays.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Restoring native oyster reefs -> filters phytoplankton/silt -> improves water clarity (lowers water turbidity and chlorophyll-a).`,
      correctReasoning: `Option A provides direct empirical evidence: 70% drop in turbidity and 55% reduction in chlorophyll-a in restored bays compared to unrestored bays.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Bays with restored oyster reefs exhibited a 70% decrease in water...', trapType: 'Correct Direct Match', whyIncorrect: 'Validates reduced turbidity and chlorophyll-a directly.' },
        { optionIndex: 1, optionText: 'Unrestored control bays experienced elevated water temperatures...', trapType: 'Temperature Distractor', whyIncorrect: 'Temperature changes do not measure water clarity or filtration.' },
        { optionIndex: 2, optionText: 'Oyster shell density on restored reefs doubled within twelve...', trapType: 'Biological Density Trap', whyIncorrect: 'Oyster growth confirms reef establishment, but does not measure water clarity impact.' },
        { optionIndex: 3, optionText: 'Commercial crab fishing harvests increased equally in both...', trapType: 'Commercial Harvest Trap', whyIncorrect: 'Crab harvests do not measure water turbidity.' }
      ]
    }
  },
  {
    id: 't5-ex-27',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A developmental psychologist hypothesized that exposing toddlers to interactive wooden puzzle play enhances spatial visualization skills more effectively than exposing them to digital puzzle applications on tablet touchscreens. She randomly assigned 120 toddlers to engage in daily 20-minute puzzle sessions for six weeks using either physical wooden puzzles or touchscreen digital puzzles, then evaluated their performance on a mental rotation assembly task.`,
    questionText: `Which finding, if true, would most directly support the psychologist's hypothesis?`,
    options: [
      'Toddlers in the wooden puzzle group completed the mental rotation assembly task 40% faster and made 60% fewer spatial placement errors than toddlers in the digital touchscreen group.',
      'Toddlers in the digital touchscreen group spent more total time tapping on screen animations during puzzle sessions.',
      'Parents of toddlers in the wooden puzzle group reported higher daily household income levels.',
      'Toddlers in both puzzle groups produced identical scores on a vocabulary recognition test.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Physical wooden puzzles enhance spatial visualization (mental rotation performance) MORE effectively than digital touchscreen puzzles.`,
      correctReasoning: `Option A provides direct evidence: wooden puzzle group completed mental rotation 40% faster with 60% fewer errors than the touchscreen group.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Toddlers in the wooden puzzle group completed the mental rotation...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Directly validates superior spatial visualization performance.' },
        { optionIndex: 1, optionText: 'Toddlers in the digital touchscreen group spent more total time...', trapType: 'Screen Engagement Trap', whyIncorrect: 'Screen tapping time does not measure spatial visualization ability.' },
        { optionIndex: 2, optionText: 'Parents of toddlers in the wooden puzzle group reported higher...', trapType: 'Socioeconomic Confounding Trap', whyIncorrect: 'Household income is a confounding variable, not proof of puzzle method.' },
        { optionIndex: 3, optionText: 'Toddlers in both puzzle groups produced identical scores on a...', trapType: 'Wrong Cognitive Domain', whyIncorrect: 'Vocabulary scores do not address spatial visualization skills.' }
      ]
    }
  },
  {
    id: 't5-ex-28',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An agronomist hypothesized that applying vesicular-arbuscular mycorrhizal (VAM) fungal inoculants to soybean seeds increases crop drought tolerance by expanding the effective root absorption surface area for soil phosphorus and water. He planted VAM-inoculated and non-inoculated soybean seeds in low-phosphorus clay soil subjected to simulated drought stress, measuring root surface area, leaf phosphorus content, and seed yield at harvest.`,
    questionText: `Which finding, if true, would most directly support the agronomist's hypothesis?`,
    options: [
      'VAM-inoculated soybeans developed a three-fold larger effective root surface area, contained 80% higher leaf phosphorus, and produced a 45% higher seed yield under drought stress than non-inoculated soybeans.',
      'Non-inoculated soybeans required higher quantities of synthetic nitrogen fertilizer during early vegetative growth stages.',
      'Soil fungal spore density in unplanted agricultural fields remained constant throughout the winter season.',
      'Soybean seed germination rates under saturated soil conditions were identical for both groups.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: VAM fungal inoculants -> expand root absorption surface area -> increase phosphorus/water absorption -> improve soybean drought crop yield.`,
      correctReasoning: `Option A directly supports root surface expansion (3x), higher leaf phosphorus (+80%), and higher seed yield (+45%) under drought.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'VAM-inoculated soybeans developed a three-fold larger effective...', trapType: 'Correct Complete Match', whyIncorrect: 'Directly validates mechanism (root area, phosphorus) and outcome (yield).' },
        { optionIndex: 1, optionText: 'Non-inoculated soybeans required higher quantities of synthetic...', trapType: 'Wrong Nutrient Trap', whyIncorrect: 'Nitrogen fertilizer does not measure VAM phosphorus absorption or drought yield.' },
        { optionIndex: 2, optionText: 'Soil fungal spore density in unplanted agricultural fields remained...', trapType: 'Unplanted Field Distractor', whyIncorrect: 'Unplanted field spore counts do not address soybean crop performance.' },
        { optionIndex: 3, optionText: 'Soybean seed germination rates under saturated soil conditions...', trapType: 'Saturated Soil Distractor', whyIncorrect: 'Saturated germination does not test drought tolerance performance.' }
      ]
    }
  },
  {
    id: 't5-ex-29',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A materials scientist hypothesized that incorporating cellulose nanocrystals (CNCs) extracted from wood pulp into bio-based PLA plastic packaging films increases tensile strength and reduces oxygen permeability without impairing biodegradability. She fabricated PLA films with CNC concentrations of 0%, 2%, 5%, and 10% by weight, testing tensile mechanical strength, oxygen transmission rates ($OTR$), and soil compost degradation rates over 90 days.`,
    questionText: `Which finding, if true, would most directly support the scientist's hypothesis?`,
    options: [
      'PLA films with 5% CNCs exhibited a 120% increase in tensile strength, a 65% reduction in $OTR$, and achieved complete soil compost degradation within 90 days identical to 0% control films.',
      'PLA films with 10% CNCs required higher manufacturing temperatures during extrusion processing.',
      'Wood pulp raw materials used for CNC extraction were harvested from certified sustainable pine plantations.',
      'Films with 0% CNCs degradation rates slowed dramatically when submerged in cold ocean water.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Adding CNCs to PLA films -> increases tensile strength AND reduces oxygen permeability ($OTR$) WITHOUT impairing biodegradability (compost degradation).`,
      correctReasoning: `Option A validates all three required conditions: +120% tensile strength, -65% $OTR$, and complete compost degradation identical to control.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'PLA films with 5% CNCs exhibited a 120% increase in tensile...', trapType: 'Correct Complete Validation', whyIncorrect: 'Directly confirms strength gain, oxygen barrier, and preserved biodegradability.' },
        { optionIndex: 1, optionText: 'PLA films with 10% CNCs required higher manufacturing temperatures...', trapType: 'Processing Parameter Trap', whyIncorrect: 'Extrusion temperature does not measure tensile strength, barrier, or degradation.' },
        { optionIndex: 2, optionText: 'Wood pulp raw materials used for CNC extraction were harvested...', trapType: 'Sustainability Sourcing Trap', whyIncorrect: 'Wood pulp origin does not address plastic film physical properties.' },
        { optionIndex: 3, optionText: 'Films with 0% CNCs degradation rates slowed dramatically when...', trapType: 'Ocean Water Distractor', whyIncorrect: 'Ocean degradation of control films does not prove CNC reinforcement benefit.' }
      ]
    }
  },
  {
    id: 't5-ex-30',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A cognitive psychologist hypothesized that acoustic white noise playback ($60\text{ dB}$) enhances reading comprehension in children diagnosed with Attention-Deficit/Hyperactivity Disorder (ADHD) by compensating for lower neural dopamine levels via stochastic resonance. She evaluated reading comprehension performance in ADHD children and neurotypical control children under two auditory conditions: silent background vs $60\text{ dB}$ white noise.`,
    questionText: `Which finding, if true, would most directly support the psychologist's hypothesis?`,
    options: [
      'Children with ADHD scored significantly higher on reading comprehension under 60 dB white noise than in silence, whereas neurotypical children scored highest in silence.',
      'Neurotypical children completed reading passages faster in silence than children with ADHD did under white noise.',
      'Children with ADHD reported preferring classical instrumental music over white noise during study hours.',
      'Auditory noise levels in school cafeteria environments averaged 78 dB during lunch hours.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: $60\text{ dB}$ white noise enhances reading comprehension specifically in ADHD children (via stochastic resonance), but not necessarily in neurotypical children.`,
      correctReasoning: `Option A provides precise evidence: ADHD children scored significantly higher under white noise vs silence, while neurotypical children performed best in silence.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Children with ADHD scored significantly higher on reading comprehension...', trapType: 'Correct Differential Match', whyIncorrect: 'Directly validates white noise benefit specific to ADHD readers.' },
        { optionIndex: 1, optionText: 'Neurotypical children completed reading passages faster in silence...', trapType: 'Reading Speed Trap', whyIncorrect: 'Reading speed does not measure reading comprehension accuracy.' },
        { optionIndex: 2, optionText: 'Children with ADHD reported preferring classical instrumental music...', trapType: 'Preference Distractor', whyIncorrect: 'Music preference does not measure white noise comprehension benefit.' },
        { optionIndex: 3, optionText: 'Auditory noise levels in school cafeteria environments averaged...', trapType: 'Environmental Baseline Trap', whyIncorrect: 'Cafeteria noise levels do not test $60\text{ dB}$ white noise comprehension.' }
      ]
    }
  },
  {
    id: 't5-ex-31',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `An evolutionary ecologist hypothesized that bright floral coloration in desert annual plants evolved primarily to attract specialized native bee pollinators rather than to reflect intense ultraviolet solar radiation to prevent thermal overheating. To test this, she manipulated flower color in experimental plots using non-toxic floral dyes (converting native yellow flowers to red or white) while measuring pollinator visitation rates and internal floral tissue temperatures under direct desert sunlight.`,
    questionText: `Which finding, if true, would most directly support the ecologist's hypothesis?`,
    options: [
      'Altering floral color from native yellow to red drastically reduced native bee visitation rates by 85%, while internal floral tissue temperatures remained identical across yellow, red, and white flowers.',
      'Yellow, red, and white flowers all exhibited equal visitation rates from non-pollinating desert ants.',
      'Unmanipulated native yellow flowers produced higher seed counts when irrigated with supplemental water.',
      'Desert annual plants in mountain elevations possessed larger leaves than plants in lowland valleys.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Bright floral color evolved PRIMARILY FOR BEE POLLINATOR ATTRACTION, NOT FOR THERMAL OVERHEATING PREVENTION (UV reflection).`,
      correctReasoning: `Option A supports pollinator attraction (changing color dropped bee visits by 85%) while ruling out thermal protection (tissue temperatures remained identical).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Altering floral color from native yellow to red drastically reduced...', trapType: 'Correct Target Isolation', whyIncorrect: 'Proves color drives bee attraction while ruling out thermal protection.' },
        { optionIndex: 1, optionText: 'Yellow, red, and white flowers all exhibited equal visitation rates...', trapType: 'Wrong Pollinator Trap', whyIncorrect: 'Non-pollinating ant visits do not test specialized native bee attraction.' },
        { optionIndex: 2, optionText: 'Unmanipulated native yellow flowers produced higher seed counts...', trapType: 'Irrigation Distractor', whyIncorrect: 'Water irrigation response does not isolate color evolution cause.' },
        { optionIndex: 3, optionText: 'Desert annual plants in mountain elevations possessed larger leaves...', trapType: 'Leaf Size Distractor', whyIncorrect: 'Elevation leaf size changes do not address floral color evolution.' }
      ]
    }
  },
  {
    id: 't5-ex-32',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A food scientist hypothesized that replacing synthetic sodium nitrite with natural celery powder in cured sausages inhibits *Clostridium botulinum* bacterial growth with equal antimicrobial efficacy while eliminating carcinogenic nitrosamine formation during high-heat frying. She prepared cured sausage batches with either sodium nitrite or celery powder, inoculated them with *C. botulinum* spores, cooked them at $190^\circ\text{C}$, and measured bacterial colony counts and nitrosamine concentration.`,
    questionText: `Which finding, if true, would most directly support the food scientist's hypothesis?`,
    options: [
      'Celery powder-cured sausages maintained zero detectable *C. botulinum* colony growth identical to sodium nitrite sausages, but contained non-detectable nitrosamine levels after frying compared to high nitrosamine levels in sodium nitrite sausages.',
      'Sausages cured with sodium nitrite maintained a brighter red color after 30 days of refrigerated storage than celery powder sausages did.',
      'Celery powder production costs per kilogram exceeded synthetic sodium nitrite costs by 40%.',
      'Uncured control sausages without preservatives produced high *C. botulinum* colony counts within 48 hours.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Celery powder -> equals sodium nitrite in antimicrobial efficacy (*C. botulinum* inhibition) AND eliminates carcinogenic nitrosamine formation during frying.`,
      correctReasoning: `Option A directly verifies both parts: zero *C. botulinum* growth (equal efficacy) and non-detectable nitrosamines after frying vs high nitrosamines in nitrite sausages.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Celery powder-cured sausages maintained zero detectable *C. botulinum*...', trapType: 'Correct Complete Match', whyIncorrect: 'Validates both antimicrobial parity and nitrosamine elimination.' },
        { optionIndex: 1, optionText: 'Sausages cured with sodium nitrite maintained a brighter red color...', trapType: 'Color Distractor', whyIncorrect: 'Visual sausage red color does not measure bacterial safety or nitrosamines.' },
        { optionIndex: 2, optionText: 'Celery powder production costs per kilogram exceeded synthetic...', trapType: 'Economic Distractor', whyIncorrect: 'Production cost does not address antimicrobial safety or nitrosamine chemistry.' },
        { optionIndex: 3, optionText: 'Uncured control sausages without preservatives produced high *C. botulinum*...', trapType: 'Control Baseline Trap', whyIncorrect: 'Confirms uncured sausages spoil, but fails to prove celery powder equals nitrite.' }
      ]
    }
  },
  {
    id: 't5-ex-33',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A marine geochemist hypothesized that Arctic ocean acidification accelerates the dissolution rate of biogenic aragonite shells produced by pteropods (planktonic sea snails) more severely than calcitic shells produced by foraminifera, due to aragonite's higher thermodynamic solubility. He exposed living pteropods and foraminifera to seawater $pH$ levels projected for 2100 ($pH\text{ 7.6}$) and current baseline ($pH\text{ 8.1}$) in micro-CT imaging tanks, measuring shell mass loss per day.`,
    questionText: `Which finding, if true, would most directly support the geochemist's hypothesis?`,
    options: [
      'At $pH\text{ 7.6}$, pteropod aragonite shells exhibited a four-fold higher rate of shell mass dissolution per day than foraminifera calcitic shells did, whereas dissolution rates for both species were negligible at $pH\text{ 8.1}$.',
      'Pteropods swimming velocity in $pH\text{ 7.6}$ seawater decreased by 20% compared to baseline $pH\text{ 8.1}$.',
      'Foraminifera population densities in North Atlantic surface waters exceeded pteropod population densities by a factor of ten.',
      'Aragonite shell dissolution rates at $pH\text{ 7.6}$ were identical in Arctic seawater and tropical seawater.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Ocean acidification ($pH\text{ 7.6}$) accelerates shell dissolution MORE severely in aragonite shells (pteropods) than in calcitic shells (foraminifera).`,
      correctReasoning: `Option A provides direct differential evidence: at $pH\text{ 7.6}$, pteropod aragonite shells dissolved at a 4-fold higher rate per day than foraminifera calcitic shells.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'At $pH\text{ 7.6}$, pteropod aragonite shells exhibited a four-fold higher rate...', trapType: 'Correct Differential Match', whyIncorrect: 'Directly validates greater dissolution in aragonite pteropods under low $pH$.' },
        { optionIndex: 1, optionText: 'Pteropods swimming velocity in $pH\text{ 7.6}$ seawater decreased by 20%...', trapType: 'Locomotion Distractor', whyIncorrect: 'Swimming speed does not measure shell dissolution mass loss.' },
        { optionIndex: 2, optionText: 'Foraminifera population densities in North Atlantic surface waters...', trapType: 'Population Density Trap', whyIncorrect: 'Population counts do not measure per-shell chemical dissolution rates.' },
        { optionIndex: 3, optionText: 'Aragonite shell dissolution rates at $pH\text{ 7.6}$ were identical in Arctic...', trapType: 'Temperature Uniformity Trap', whyIncorrect: 'Geographic uniformity does not compare aragonite dissolution to calcite.' }
      ]
    }
  },
  {
    id: 't5-ex-34',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An urban transportation planner hypothesized that protected bicycle lanes separated from motor traffic by concrete barriers increase bicycle commuting volume by reducing cyclists' fear of vehicular collisions, whereas painted visual bike lanes fail to generate significant ridership increases. He tracked daily commuter bicycle counts across streets retrofitted with either concrete-protected bike lanes, painted bike lanes, or unstriped standard roads over two years.`,
    questionText: `Which finding, if true, would most directly support the planner's hypothesis?`,
    options: [
      'Streets retrofitted with concrete-protected bike lanes experienced a 180% increase in daily commuter cyclists, compared to a 4% increase on streets with painted bike lanes and 0% on unstriped roads.',
      'Commercial delivery vans parked illegally in painted bike lanes three times more frequently than in concrete-protected lanes.',
      'Municipal construction costs for concrete-protected bike lanes were five times higher per mile than painted lanes.',
      'Surveyed motorists reported higher driving speeds on streets retrofitted with painted bike lanes.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Concrete-protected bike lanes increase bicycle commuting volume significantly, whereas painted bike lanes do not.`,
      correctReasoning: `Option A directly supports the hypothesis: concrete-protected lanes saw a 180% ridership increase vs only 4% for painted lanes and 0% for unstriped roads.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Streets retrofitted with concrete-protected bike lanes experienced a 180%...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Directly validates ridership increase for protected lanes vs painted lanes.' },
        { optionIndex: 1, optionText: 'Commercial delivery vans parked illegally in painted bike lanes three times...', trapType: 'Obstruction Distractor', whyIncorrect: 'Explains why painted lanes are bad, but does not directly measure bike commuter volume.' },
        { optionIndex: 2, optionText: 'Municipal construction costs for concrete-protected bike lanes were five...', trapType: 'Cost Distractor', whyIncorrect: 'Construction cost does not measure bicycle commuting volume.' },
        { optionIndex: 3, optionText: 'Surveyed motorists reported higher driving speeds on streets...', trapType: 'Motorist Behavior Trap', whyIncorrect: 'Motorist driving speed does not measure bicycle commuter counts.' }
      ]
    }
  },
  {
    id: 't5-ex-35',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A plant evolutionary biologist hypothesized that wild tomato species (*Solanum habrochaites*) resist potato psyllid insect pests (*Bactericera cockerelli*) through glandular trichome secretion of acylsugars that physically entrap and poison nymphal insects, rather than through systemic leaf alkaloid defenses. To test this, she compared psyllid nymph mortality on wild tomatoes with intact trichomes, wild tomatoes with trichomes mechanically shaved off, and cultivated tomatoes (*S. lycopersicum*) lacking acylsugars.`,
    questionText: `Which finding, if true, would most directly support the biologist's hypothesis?`,
    options: [
      'Psyllid nymph mortality was 95% on intact wild tomatoes, but dropped to 8% when wild tomato trichomes were mechanically shaved off, matching the 6% mortality observed on cultivated tomatoes.',
      'Psyllid adult females laid equal numbers of eggs on wild tomatoes and cultivated tomatoes in total darkness.',
      'Systemic leaf alkaloid concentrations were identical in intact wild tomatoes and shaved wild tomatoes.',
      'Cultivated tomatoes produced larger fruits when grown in green houses free of psyllid insects.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Wild tomato psyllid resistance is driven BY GLANDULAR TRICHOME ACYLSUGAR SECRETION, NOT BY SYSTEMIC LEAF ALKALOIDS.`,
      correctReasoning: `Option A provides decisive evidence: removing trichomes caused mortality to drop from 95% to 8% (matching cultivated tomatoes), proving trichomes drive resistance.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Psyllid nymph mortality was 95% on intact wild tomatoes, but dropped...', trapType: 'Correct Target Isolation', whyIncorrect: 'Proves trichomes drive 95% mortality, as removing them destroys resistance.' },
        { optionIndex: 1, optionText: 'Psyllid adult females laid equal numbers of eggs on wild tomatoes...', trapType: 'Egg Laying Distractor', whyIncorrect: 'Egg laying counts do not measure nymphal entrapment or mortality.' },
        { optionIndex: 2, optionText: 'Systemic leaf alkaloid concentrations were identical in intact wild...', trapType: 'Baseline Control Control', whyIncorrect: 'Shows alkaloids didn\'t change, but fails to prove trichomes cause mortality.' },
        { optionIndex: 3, optionText: 'Cultivated tomatoes produced larger fruits when grown in green houses...', trapType: 'Fruit Size Distractor', whyIncorrect: 'Greenhouse fruit size does not address psyllid resistance mechanisms.' }
      ]
    }
  },
  {
    id: 't5-ex-36',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An environmental engineer hypothesized that installing constructed floating wetlands (CFWs) planted with native cattails (*Typha latifolia*) in urban stormwater retention ponds reduces dissolved phosphorus pollution by absorbing orthophosphates into plant tissue. He monitored water orthophosphate concentrations ($mg/L$) and cattail tissue phosphorus content across three stormwater ponds: Pond A (retrofitted with 30% CFW cover), Pond B (retrofitted with 10% CFW cover), and Pond C (unplanted control).`,
    questionText: `Which finding, if true, would most directly support the engineer's hypothesis?`,
    options: [
      'Pond A recorded a 68% reduction in water orthophosphate concentrations over 12 months, compared to a 22% reduction in Pond B and 2% in Pond C, with cattail tissue showing a 400% increase in accumulated phosphorus.',
      'Pond C recorded higher water temperatures during summer months due to lack of floating wetland shade.',
      'Cattail plants in Pond A grew 30 centimeters taller than cattails grown in commercial greenhouse nursery pots.',
      'Unplanted control Pond C contained higher populations of invasive bullfrogs than Pond A.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Constructed floating wetlands (cattails) -> absorb orthophosphates into plant tissue -> reduce dissolved phosphorus pollution in water.`,
      correctReasoning: `Option A directly supports both water orthophosphate reduction (Pond A 68% vs Pond B 22% vs Pond C 2%) and plant tissue absorption (+400%).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Pond A recorded a 68% reduction in water orthophosphate concentrations...', trapType: 'Correct Direct Match', whyIncorrect: 'Validates both water phosphorus reduction and cattail tissue uptake.' },
        { optionIndex: 1, optionText: 'Pond C recorded higher water temperatures during summer months...', trapType: 'Temperature Distractor', whyIncorrect: 'Water temperature does not measure orthophosphate absorption.' },
        { optionIndex: 2, optionText: 'Cattail plants in Pond A grew 30 centimeters taller than cattails...', trapType: 'Plant Height Distractor', whyIncorrect: 'Plant height does not measure phosphorus concentration per gram.' },
        { optionIndex: 3, optionText: 'Unplanted control Pond C contained higher populations of invasive bullfrogs...', trapType: 'Faunal Distractor', whyIncorrect: 'Bullfrog populations do not address phosphorus water pollution.' }
      ]
    }
  },
  {
    id: 't5-ex-37',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A cognitive psychologist hypothesized that mindfulness meditation training reduces intrusive thoughts during stressful tasks by strengthening executive control network activity (prefrontal cortex) and attenuating default mode network (DMN) reactivity. She conducted functional MRI ($f\text{MRI}$) brain scans on adults before and after an 8-week mindfulness course while subjecting them to an elevated stress cognitive test, comparing them to a waitlist control group.`,
    questionText: `Which finding, if true, would most directly support the psychologist's hypothesis?`,
    options: [
      'Mindfulness-trained adults exhibited both significantly increased prefrontal cortex activation and reduced DMN activation during the stress test, alongside a 50% reduction in self-reported intrusive thoughts, compared to control adults.',
      'Control group adults completed the stress cognitive test in less total time than mindfulness-trained adults did.',
      'Mindfulness-trained adults reported sleeping an average of 45 minutes longer per night following the 8-week course.',
      'Default mode network activation during quiet resting state scans was identical across both groups prior to the 8-week course.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Mindfulness training -> strengthens prefrontal cortex AND attenuates DMN reactivity -> reduces intrusive thoughts during stress.`,
      correctReasoning: `Option A directly confirms all three links: increased prefrontal activation, reduced DMN activation, and 50% fewer intrusive thoughts.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Mindfulness-trained adults exhibited both significantly increased...', trapType: 'Correct Complete Match', whyIncorrect: 'Validates prefrontal enhancement, DMN attenuation, and intrusive thought reduction.' },
        { optionIndex: 1, optionText: 'Control group adults completed the stress cognitive test in less total time...', trapType: 'Completion Time Trap', whyIncorrect: 'Test completion speed does not measure intrusive thoughts or neural networks.' },
        { optionIndex: 2, optionText: 'Mindfulness-trained adults reported sleeping an average of 45 minutes...', trapType: 'Sleep Duration Distractor', whyIncorrect: 'Sleep duration does not address intrusive thoughts or $f\text{MRI}$ networks.' },
        { optionIndex: 3, optionText: 'Default mode network activation during quiet resting state scans was...', trapType: 'Pre-Test Baseline Trap', whyIncorrect: 'Identical pre-test baseline is a control, but does not prove mindfulness effect.' }
      ]
    }
  },
  {
    id: 't5-ex-38',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An astrophysicist hypothesized that repeating fast radio bursts (FRBs) originating from magnetars (highly magnetized neutron stars) are driven by crustal fractures ("starquakes") that release magnetic energy, predicting that energy output across consecutive FRB bursts follows a power-law distribution identical to terrestrial earthquakes. She analyzed 500 burst events from repeating source FRB 121102 recorded by a radio telescope array.`,
    questionText: `Which finding, if true, would most directly support the astrophysicist's hypothesis?`,
    options: [
      'The energy distribution of consecutive bursts from FRB 121102 fitted a Gutenberg-Richter power-law curve with an exponent ($b\text{-value}$) statistically indistinguishable from terrestrial seismic earthquakes.',
      'FRB 121102 was located in a dwarf galaxy situated 3 billion light-years from Earth.',
      'Radio telescope receivers recorded equal signal-to-noise ratios during daytime and nighttime observations of FRB 121102.',
      'Non-repeating FRB sources emitted higher peak frequencies than FRB 121102.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Repeating FRBs from magnetars are driven by starquakes, predicting energy output across bursts follows a power-law distribution identical to terrestrial earthquakes.`,
      correctReasoning: `Option A provides direct mathematical evidence: FRB 121102 burst energy fitted a Gutenberg-Richter power-law curve matching earthquake seismic $b\text{-values}$.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'The energy distribution of consecutive bursts from FRB 121102 fitted...', trapType: 'Correct Mathematical Match', whyIncorrect: 'Directly validates power-law earthquake distribution match.' },
        { optionIndex: 1, optionText: 'FRB 121102 was located in a dwarf galaxy situated 3 billion light-years...', trapType: 'Location Distractor', whyIncorrect: 'Galaxy location does not address burst energy power-law distribution.' },
        { optionIndex: 2, optionText: 'Radio telescope receivers recorded equal signal-to-noise ratios...', trapType: 'Receiver Performance Trap', whyIncorrect: 'Telescope noise ratio does not test magnetar starquake physics.' },
        { optionIndex: 3, optionText: 'Non-repeating FRB sources emitted higher peak frequencies than FRB 121102.', trapType: 'Non-Repeating Source Trap', whyIncorrect: 'Comparing to non-repeating sources does not prove starquake power-law math.' }
      ]
    }
  },
  {
    id: 't5-ex-39',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A behavioral biologist hypothesized that female guppies (*Poecilia reticulata*) prefer male mates with orange skin pigmentation because carotenoid pigments in orange spots indicate strong immune function and parasite resistance. She quantified male orange spot surface area, measured parasite loads (*Gyrodactylus* flatworms), and conducted mate choice trials using two-way choice aquariums under full spectrum lighting.`,
    questionText: `Which finding, if true, would most directly support the biologist's hypothesis?`,
    options: [
      'Female guppies spent 80% of mate choice trial time displaying toward males with larger orange spots, and those males exhibited significantly lower *Gyrodactylus* parasite loads and higher immunocompetence than pale males.',
      'Male guppies with large orange spots consumed higher quantities of algae containing green chlorophyll pigments.',
      'Female guppies placed in turbid water were unable to distinguish between male guppies and non-predatory river minnows.',
      'Male guppies in predator-dense streams produced smaller orange spots than male guppies in predator-free streams.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Female guppies prefer orange males BECAUSE orange carotenoid spots indicate lower parasite loads and stronger immune function.`,
      correctReasoning: `Option A directly supports both mate choice preference (80% time) and the underlying health mechanism (lower parasite load, higher immunocompetence).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Female guppies spent 80% of mate choice trial time displaying toward...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Directly validates female choice preference and health indicator mechanism.' },
        { optionIndex: 1, optionText: 'Male guppies with large orange spots consumed higher quantities of algae...', trapType: 'Dietary Chlorophyll Trap', whyIncorrect: 'Algae chlorophyll consumption does not measure parasite resistance or choice.' },
        { optionIndex: 2, optionText: 'Female guppies placed in turbid water were unable to distinguish...', trapType: 'Turbidity Vision Trap', whyIncorrect: 'Turbidity vision failure does not test parasite immunocompetence indicators.' },
        { optionIndex: 3, optionText: 'Male guppies in predator-dense streams produced smaller orange spots...', trapType: 'Predation Trade-off Trap', whyIncorrect: 'Predator spot reduction explains camouflage, not female mate choice indicator.' }
      ]
    }
  },
  {
    id: 't5-ex-40',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A clinical pharmacologist hypothesized that co-administering piperine (a black pepper extract) with curcumin increases curcumin's systemic bioavailability in humans by inhibiting hepatic glucuronidation enzymes that otherwise rapidly metabolize curcumin. She measured serum curcumin concentrations ($ng/mL$) over 24 hours in human volunteers taking either pure curcumin capsules or curcumin combined with $20\text{ mg}$ piperine.`,
    questionText: `Which finding, if true, would most directly support the pharmacologist's hypothesis?`,
    options: [
      'Volunteers taking curcumin combined with piperine achieved a 2,000% increase in peak serum curcumin concentration ($C_{\\text{max}}$) and extended serum half-life compared to volunteers taking pure curcumin.',
      'Piperine capsules taken alone produced zero detectable changes in resting heart rate or blood pressure.',
      'Curcumin powder dissolved in warm olive oil was absorbed faster than curcumin dissolved in water.',
      'Volunteers taking pure curcumin reported zero adverse gastrointestinal side effects during the 24-hour trial.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Co-administering piperine with curcumin increases curcumin's systemic bioavailability (serum concentration) by inhibiting metabolic breakdown.`,
      correctReasoning: `Option A provides massive direct evidence: a 2,000% increase in peak serum curcumin concentration ($C_{\\text{max}}$) and extended half-life with piperine.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Volunteers taking curcumin combined with piperine achieved a 2,000%...', trapType: 'Correct Direct Match', whyIncorrect: 'Directly confirms massive bioavailability increase with piperine.' },
        { optionIndex: 1, optionText: 'Piperine capsules taken alone produced zero detectable changes in resting...', trapType: 'Safety Baseline Trap', whyIncorrect: 'Heart rate safety does not address curcumin serum bioavailability.' },
        { optionIndex: 2, optionText: 'Curcumin powder dissolved in warm olive oil was absorbed faster than...', trapType: 'Dietary Fat Distractor', whyIncorrect: 'Olive oil solubility does not test piperine glucuronidation inhibition.' },
        { optionIndex: 3, optionText: 'Volunteers taking pure curcumin reported zero adverse gastrointestinal...', trapType: 'Side Effect Distractor', whyIncorrect: 'Lack of side effects does not measure serum curcumin bioavailability.' }
      ]
    }
  },
  {
    id: 't5-ex-41',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `An environmental scientist hypothesized that converting abandoned agricultural fields to perennial switchgrass (*Panicum virgatum*) bioenergy crops increases soil organic carbon ($SOC$) sequestration in deep subsoil layers ($30\text{--}100\text{ cm}$) more effectively than annual corn-soybean rotations due to switchgrass's deep, extensive root system. She measured deep subsoil $SOC$ stocks ($Mg\text{ C/ha}$) across 20 farm sites five years post-conversion.`,
    questionText: `Which finding, if true, would most directly support the scientist's hypothesis?`,
    options: [
      'Deep subsoil ($30\text{--}100\text{ cm}$) $SOC$ stocks under switchgrass increased by $2.4\text{ Mg C/ha/yr}$, whereas deep subsoil $SOC$ under annual corn-soybean rotations showed zero net change over five years.',
      'Annual corn-soybean fields produced higher total aboveground biomass per hectare than switchgrass fields did.',
      'Switchgrass seed harvest required specialized machinery during autumn harvesting months.',
      'Soil bulk density in surface layers ($0\text{--}10\text{ cm}$) was identical across both cropping systems.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Perennial switchgrass increases deep subsoil ($30\text{--}100\text{ cm}$) $SOC$ sequestration more effectively than annual corn-soybean rotations.`,
      correctReasoning: `Option A directly proves this: switchgrass gained $2.4\text{ Mg C/ha/yr}$ in $30\text{--}100\text{ cm}$ subsoil $SOC$, vs zero change for corn-soybean.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Deep subsoil ($30\text{--}100\text{ cm}$) $SOC$ stocks under switchgrass increased...', trapType: 'Correct Direct Match', whyIncorrect: 'Directly validates deep subsoil carbon sequestration advantage for switchgrass.' },
        { optionIndex: 1, optionText: 'Annual corn-soybean fields produced higher total aboveground biomass...', trapType: 'Aboveground Biomass Trap', whyIncorrect: 'Aboveground biomass is not deep subsoil $SOC$ carbon.' },
        { optionIndex: 2, optionText: 'Switchgrass seed harvest required specialized machinery...', trapType: 'Machinery Distractor', whyIncorrect: 'Harvest machinery does not measure soil carbon sequestration.' },
        { optionIndex: 3, optionText: 'Soil bulk density in surface layers ($0\text{--}10\text{ cm}$) was identical...', trapType: 'Wrong Soil Depth', whyIncorrect: 'Surface layer ($0\text{--}10\text{ cm}$) density does not test deep subsoil ($30\text{--}100\text{ cm}$) carbon.' }
      ]
    }
  },
  {
    id: 't5-ex-42',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A marine ecologist hypothesized that sea otters (*Enhydra lutris*) function as a keystone species in North Pacific coastal ecosystems by preying on herbivorous sea urchins, thereby preventing sea urchins from overgrazing underwater kelp forests (*Macrocystis pyrifera*). She monitored kelp canopy density, sea urchin biomass, and sea otter presence across 15 Aleutian island coastal sites over ten years.`,
    questionText: `Which finding, if true, would most directly support the ecologist's hypothesis?`,
    options: [
      'Coastal sites where sea otters re-established exhibited an 85% decline in sea urchin biomass and a five-fold expansion of kelp forest canopy density compared to otter-absent sites.',
      'Sea urchin shells harvested near coastal fishing ports contained high concentrations of calcium carbonate.',
      'Kelp forest canopy density decreased across all ocean sites during severe El Niño warm-water ocean events.',
      'Sea otters spent 40% of daily activity resting in floating surface kelp beds.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Sea otters -> prey on sea urchins -> reduce urchin biomass -> prevent kelp overgrazing (expand kelp canopy).`,
      correctReasoning: `Option A provides direct empirical evidence: otter re-establishment caused an 85% drop in urchin biomass and a 5-fold expansion of kelp canopy vs otter-absent sites.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Coastal sites where sea otters re-established exhibited an 85% decline...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Validates complete trophic cascade: otters -> lower urchins -> higher kelp.' },
        { optionIndex: 1, optionText: 'Sea urchin shells harvested near coastal fishing ports contained...', trapType: 'Shell Chemistry Trap', whyIncorrect: 'Calcium carbonate chemistry does not measure trophic kelp grazing.' },
        { optionIndex: 2, optionText: 'Kelp forest canopy density decreased across all ocean sites during...', trapType: 'Climate Confounding Trap', whyIncorrect: 'El Niño warm water affects all kelp, but does not test otter urchin predation.' },
        { optionIndex: 3, optionText: 'Sea otters spent 40% of daily activity resting in floating surface...', trapType: 'Behavioral Resting Distractor', whyIncorrect: 'Resting behavior in kelp beds does not prove urchin predation trophic control.' }
      ]
    }
  },
  {
    id: 't5-ex-43',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A neurobiologist hypothesized that deep brain stimulation (DBS) of the subthalamic nucleus alleviates motor tremors in Parkinson's disease patients by suppressing pathologically synchronized beta-band ($13\text{--}30\text{ Hz}$) neural oscillations in the basal ganglia. He recorded local field potentials (LFPs) from subthalamic nucleus electrodes in Parkinson's patients during DBS-ON versus DBS-OFF states while assessing tremor severity using accelerometers.`,
    questionText: `Which finding, if true, would most directly support the neurobiologist's hypothesis?`,
    options: [
      'Switching DBS to ON caused a 75% suppression of beta-band ($13\text{--}30\text{ Hz}$) LFP power, which correlated directly with an 80% reduction in objective limb tremor amplitude measured by accelerometers.',
      'Parkinson\'s disease patients reported higher subjective fatigue levels during DBS-OFF states.',
      'Subthalamic nucleus electrodes recorded high alpha-band ($8\text{--}12\text{ Hz}$) power during deep slow-wave sleep.',
      'Accelerometer recordings indicated that leg tremors were less pronounced when patients were seated in high-backed chairs.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Subthalamic DBS -> suppresses synchronized beta-band ($13\text{--}30\text{ Hz}$) oscillations -> alleviates motor tremor amplitude.`,
      correctReasoning: `Option A confirms both mechanism (75% suppression of $13\text{--}30\text{ Hz}$ beta power) and outcome (80% reduction in tremor amplitude) during DBS-ON.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Switching DBS to ON caused a 75% suppression of beta-band ($13\text{--}30\text{ Hz}$)...', trapType: 'Correct Direct Match', whyIncorrect: 'Directly connects beta power suppression to tremor amplitude reduction.' },
        { optionIndex: 1, optionText: 'Parkinson\'s disease patients reported higher subjective fatigue levels...', trapType: 'Fatigue Distractor', whyIncorrect: 'Subjective fatigue does not measure motor tremor amplitude or beta power.' },
        { optionIndex: 2, optionText: 'Subthalamic nucleus electrodes recorded high alpha-band ($8\text{--}12\text{ Hz}$)...', trapType: 'Wrong Frequency Band', whyIncorrect: 'Alpha band ($8\text{--}12\text{ Hz}$) during sleep does not test beta band ($13\text{--}30\text{ Hz}$) tremor suppression.' },
        { optionIndex: 3, optionText: 'Accelerometer recordings indicated that leg tremors were less pronounced...', trapType: 'Seating Posture Distractor', whyIncorrect: 'Seated posture impact does not test subthalamic DBS beta suppression.' }
      ]
    }
  },
  {
    id: 't5-ex-44',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An agricultural scientist hypothesized that planting winter cover crops (such as cereal rye, *Secale cereale*) between main crop harvest seasons reduces soil nitrate leaching into groundwater by absorbing excess residual nitrogen in root tissue. She measured nitrate concentrations ($mg/L$) in groundwater lysimeters placed $1.5\text{ meters}$ below farm fields with winter cereal rye cover crops versus bare fallow fields over three winter seasons.`,
    questionText: `Which finding, if true, would most directly support the scientist's hypothesis?`,
    options: [
      'Groundwater lysimeters under winter cereal rye cover crops recorded a 72% lower nitrate concentration compared to lysimeters under bare fallow fields, while rye root tissue accumulated $45\text{ kg N/ha}$.',
      'Bare fallow fields produced higher soil surface temperatures during sunny afternoon hours in spring.',
      'Cereal rye cover crop seeds cost less per bushel than crimson clover cover crop seeds.',
      'Groundwater lysimeter installation required drilling deep boreholes using hydraulic equipment.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Winter cereal rye cover crops -> absorb residual nitrogen into root tissue -> reduce soil nitrate leaching into groundwater.`,
      correctReasoning: `Option A provides direct evidence: 72% lower groundwater nitrate concentration under cereal rye and root tissue nitrogen accumulation ($45\text{ kg N/ha}$).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Groundwater lysimeters under winter cereal rye cover crops recorded a 72%...', trapType: 'Correct Direct Match', whyIncorrect: 'Validates both reduced groundwater nitrate leaching and root nitrogen uptake.' },
        { optionIndex: 1, optionText: 'Bare fallow fields produced higher soil surface temperatures during...', trapType: 'Temperature Distractor', whyIncorrect: 'Soil surface temperature does not measure groundwater nitrate leaching.' },
        { optionIndex: 2, optionText: 'Cereal rye cover crop seeds cost less per bushel than crimson clover...', trapType: 'Seed Cost Distractor', whyIncorrect: 'Seed purchase cost does not measure nitrate leaching reduction.' },
        { optionIndex: 3, optionText: 'Groundwater lysimeter installation required drilling deep boreholes...', trapType: 'Equipment Distractor', whyIncorrect: 'Borehole drilling methods do not measure nitrate leaching.' }
      ]
    }
  },
  {
    id: 't5-ex-45',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A cognitive psychologist hypothesized that exposure to natural forest environments ("forest bathing") reduces physiological stress responses by suppressing sympathetic nervous system activity and activating parasympathetic autonomic control. He measured heart rate variability ($HRV$, specifically high-frequency power indicating parasympathetic activity) and salivary cortisol levels in adults after 30-minute walks in either an old-growth forest park or an urban concrete commercial district.`,
    questionText: `Which finding, if true, would most directly support the psychologist's hypothesis?`,
    options: [
      'Adults walking in the forest park exhibited a 50% increase in high-frequency $HRV$ power (parasympathetic activation) and a 35% drop in salivary cortisol compared to when walking in the urban district.',
      'Adults walking in the urban commercial district wore more formal footwear during weekday walk trials.',
      'Salivary cortisol levels measured prior to walk initiation were identical across all participants.',
      'Adults walking in the forest park reported seeing higher numbers of songbird species during morning trials.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Forest walking -> activates parasympathetic control (higher high-frequency $HRV$) AND reduces physiological stress (lower salivary cortisol).`,
      correctReasoning: `Option A provides direct physiological confirmation: +50% high-frequency $HRV$ power and a 35% drop in salivary cortisol in the forest vs urban walk.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Adults walking in the forest park exhibited a 50% increase in high-frequency...', trapType: 'Correct Complete Match', whyIncorrect: 'Directly confirms parasympathetic activation ($HRV$) and reduced stress (cortisol).' },
        { optionIndex: 1, optionText: 'Adults walking in the urban commercial district wore more formal footwear...', trapType: 'Footwear Distractor', whyIncorrect: 'Participant footwear does not measure autonomic nervous system stress.' },
        { optionIndex: 2, optionText: 'Salivary cortisol levels measured prior to walk initiation were...', trapType: 'Pre-Test Control Baseline', whyIncorrect: 'Identical baseline is necessary control, but does not prove forest walking benefit.' },
        { optionIndex: 3, optionText: 'Adults walking in the forest park reported seeing higher numbers of songbird...', trapType: 'Wildlife Count Distractor', whyIncorrect: 'Songbird sightings do not measure autonomic heart rate variability or cortisol.' }
      ]
    }
  },
  {
    id: 't5-ex-46',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A conservation biologist hypothesized that constructing artificial bat roost boxes in agricultural vineyards reduces destructive moth pest populations (*Lobesia botrana*) by providing day roosts for insectivorous bats. She installed 50 bat boxes across Vineyard A while leaving adjacent Vineyard B without bat boxes, monitoring bat activity using ultrasonic acoustic detectors and measuring moth larval damage on grape clusters over two years.`,
    questionText: `Which finding, if true, would most directly support the biologist's hypothesis?`,
    options: [
      'Vineyard A recorded a six-fold increase in acoustic bat feeding passes and a 65% reduction in grape cluster moth larval damage compared to Vineyard B.',
      'Vineyard B received higher rainfall during spring grape flowering months than Vineyard A did.',
      'Artificial bat box construction costs were tax-deductible under local agricultural conservation grants.',
      'Moth larvae collected from Vineyard B grew larger when fed artificial sugar jelly in laboratory dishes.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Artificial bat boxes -> increase insectivorous bat activity -> reduce moth pest populations (*L. botrana*) and grape larval damage.`,
      correctReasoning: `Option A directly supports both increased bat activity (6-fold acoustic passes) and reduced pest damage (65% reduction in grape cluster moth damage) in Vineyard A.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Vineyard A recorded a six-fold increase in acoustic bat feeding passes...', trapType: 'Correct Direct Match', whyIncorrect: 'Validates both increased bat foraging and reduced crop damage.' },
        { optionIndex: 1, optionText: 'Vineyard B received higher rainfall during spring grape flowering months...', trapType: 'Weather Confounding Trap', whyIncorrect: 'Rainfall differences confound crop results rather than proving bat pest control.' },
        { optionIndex: 2, optionText: 'Artificial bat box construction costs were tax-deductible under...', trapType: 'Financial Grant Distractor', whyIncorrect: 'Tax deductibility does not measure bat activity or moth pest reduction.' },
        { optionIndex: 3, optionText: 'Moth larvae collected from Vineyard B grew larger when fed artificial...', trapType: 'Laboratory Jelly Distractor', whyIncorrect: 'Laboratory jelly feeding does not measure field bat predation impact.' }
      ]
    }
  },
  {
    id: 't5-ex-47',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A materials chemist hypothesized that applying hydrophobic silane nanoparticle coatings to historic limestone monuments prevents salt weathering degradation by blocking liquid water absorption while remaining vapor-permeable to allow interior moisture evaporation. She coated limestone blocks with silane nanoparticles, subjected them to 50 sodium sulfate salt-freeze/thaw cycles, and measured capillary water absorption coefficients and salt spalling mass loss.`,
    questionText: `Which finding, if true, would most directly support the chemist's hypothesis?`,
    options: [
      'Silane-coated limestone blocks exhibited an 88% reduction in liquid water capillary absorption and zero salt spalling mass loss after 50 cycles, while maintaining 92% of original water vapor permeability.',
      'Uncoated limestone blocks turned a darker shade of grey when exposed to atmospheric sulfur dioxide gas.',
      'Silane nanoparticle coatings increased the total surface weight of limestone blocks by 15% immediately upon application.',
      'Sodium sulfate salt crystals dissolved completely when placed in boiling distilled water.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Hypothesis Target Isolator',
    explanation: {
      passageDeconstruction: `Hypothesis: Silane nanoparticle coating -> blocks liquid water absorption (-capillary absorption) AND prevents salt weathering (zero spalling mass loss) WHILE maintaining vapor permeability.`,
      correctReasoning: `Option A validates all three required targets: -88% liquid absorption, 0 spalling mass loss, and 92% vapor permeability maintained.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Silane-coated limestone blocks exhibited an 88% reduction in liquid water...', trapType: 'Correct Complete Match', whyIncorrect: 'Directly validates water block, zero spalling, and preserved vapor permeability.' },
        { optionIndex: 1, optionText: 'Uncoated limestone blocks turned a darker shade of grey when exposed...', trapType: 'Color Discoloration Trap', whyIncorrect: 'Gas discoloration does not test liquid water block or salt freeze/thaw spalling.' },
        { optionIndex: 2, optionText: 'Silane nanoparticle coatings increased the total surface weight of limestone...', trapType: 'Coating Weight Distractor', whyIncorrect: 'Initial coating weight does not prove water resistance or salt weathering protection.' },
        { optionIndex: 3, optionText: 'Sodium sulfate salt crystals dissolved completely when placed in boiling...', trapType: 'Salt Solubility Chemistry', whyIncorrect: 'Salt solubility in boiling water does not measure limestone monument protection.' }
      ]
    }
  },
  {
    id: 't5-ex-48',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `A marine ecologist hypothesized that invasive lionfish (*Pterois volitans*) deplete native coral reef fish biodiversity in the Caribbean by preying indiscriminately on juvenile reef fish, due to native fish lacking evolutionary predator-recognition responses to lionfish hunting behavior. She introduced tagged lionfish to three isolated patch reefs, monitoring native juvenile fish survival rates and species richness over six months against three lionfish-free control reefs.`,
    questionText: `Which finding, if true, would most directly support the ecologist's hypothesis?`,
    options: [
      'Patch reefs with introduced lionfish suffered a 79% reduction in juvenile native fish survival and a 45% drop in overall species richness, with native juveniles exhibiting zero fleeing behavior during lionfish approaches.',
      'Lionfish captured on Caribbean reefs contained high concentrations of omega-3 fatty acids in their muscle tissue.',
      'Control patch reefs experienced minor fluctuations in sea surface temperature during winter storm events.',
      'Lionfish venomous dorsal spines caused localized swelling when handled by research divers.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Invasive lionfish -> prey on native juvenile reef fish -> reduce juvenile survival and species richness, facilitated by native fish lacking predator recognition (zero fleeing).`,
      correctReasoning: `Option A directly supports all parts: 79% drop in juvenile survival, 45% drop in species richness, and zero fleeing behavior by native juveniles.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Patch reefs with introduced lionfish suffered a 79% reduction in juvenile...', trapType: 'Correct Complete Match', whyIncorrect: 'Directly validates juvenile depletion, biodiversity loss, and lack of fleeing behavior.' },
        { optionIndex: 1, optionText: 'Lionfish captured on Caribbean reefs contained high concentrations of omega-3...', trapType: 'Nutritional Chemistry Trap', whyIncorrect: 'Fatty acid tissue composition does not measure reef fish predation or biodiversity.' },
        { optionIndex: 2, optionText: 'Control patch reefs experienced minor fluctuations in sea surface...', trapType: 'Temperature Distractor', whyIncorrect: 'Winter temperature fluctuations do not test lionfish predation impact.' },
        { optionIndex: 3, optionText: 'Lionfish venomous dorsal spines caused localized swelling when handled...', trapType: 'Diver Injury Trap', whyIncorrect: 'Spine venom effects on research divers do not measure reef fish biodiversity loss.' }
      ]
    }
  },
  {
    id: 't5-ex-49',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Hard Module',
    passage: `A neuroscientist hypothesized that transcranial direct current stimulation (tDCS) applied over the left dorsolateral prefrontal cortex (DLPFC) enhances creative problem-solving ability by facilitating cognitive flexibility and remote associate thinking. She randomly assigned 90 adults to receive active tDCS ($2\text{ mA}$), sham tDCS (placebo), or no stimulation during a Remote Associates Test (RAT) testing word-association problem solving.`,
    questionText: `Which finding, if true, would most directly support the neuroscientist's hypothesis?`,
    options: [
      'Participants receiving active left DLPFC tDCS solved 58% more Remote Associates Test problems correctly and responded 30% faster than both sham tDCS and no-stimulation participants.',
      'Participants receiving sham tDCS reported mild tingling sensations under electrode pads during the first 30 seconds of application.',
      'Remote Associates Test problems were printed in 12-point Times New Roman font on white paper booklets.',
      'Participants in the no-stimulation group scored equally well on a test of basic single-digit arithmetic addition.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Active tDCS over left DLPFC -> enhances creative problem-solving ability (Remote Associates Test performance) compared to sham/no-stimulation.`,
      correctReasoning: `Option A directly supports the hypothesis: active tDCS participants solved 58% more RAT problems correctly and 30% faster than sham/no-stimulation groups.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Participants receiving active left DLPFC tDCS solved 58% more Remote...', trapType: 'Correct Direct Evidence', whyIncorrect: 'Validates superior creative problem-solving performance under active tDCS.' },
        { optionIndex: 1, optionText: 'Participants receiving sham tDCS reported mild tingling sensations...', trapType: 'Sham Sensation Control', whyIncorrect: 'Tingling sensation verifies blinding control, but does not measure problem-solving performance.' },
        { optionIndex: 2, optionText: 'Remote Associates Test problems were printed in 12-point Times New...', trapType: 'Typography Distractor', whyIncorrect: 'Font size and paper color do not address tDCS cognitive enhancement.' },
        { optionIndex: 3, optionText: 'Participants in the no-stimulation group scored equally well on a test of...', trapType: 'Wrong Cognitive Domain', whyIncorrect: 'Basic arithmetic addition does not test creative remote associate problem-solving.' }
      ]
    }
  },
  {
    id: 't5-ex-50',
    moduleNumber: 1,
    subskill: 'Command of Evidence',
    difficulty: 'Easy/Medium Module',
    passage: `An agricultural scientist hypothesized that intercropping corn (*Zea mays*) with nitrogen-fixing cowpeas (*Vigna unguiculata*) increases total land equivalent ratio ($LER$) and reduces required synthetic nitrogen fertilizer inputs compared to monoculture corn. He evaluated crop yields and nitrogen fertilizer requirements across intercropped plots and monoculture corn plots over three growing seasons.`,
    questionText: `Which finding, if true, would most directly support the scientist's hypothesis?`,
    options: [
      'Intercropped corn-cowpea plots achieved a land equivalent ratio ($LER$) of $1.42$ while requiring 40% less synthetic nitrogen fertilizer to match the grain yield of monoculture corn.',
      'Monoculture corn plots produced taller stalks during early vegetative growth stages than intercropped corn did.',
      'Cowpea seeds contained higher percentage protein by dry weight than corn kernels did.',
      'Harvesting intercropped plots required 15% more manual labor hours than harvesting monoculture corn.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Variable Matching',
    explanation: {
      passageDeconstruction: `Hypothesis: Intercropping corn with cowpeas -> increases land equivalent ratio ($LER > 1.0$) AND reduces required synthetic nitrogen fertilizer.`,
      correctReasoning: `Option A directly proves both targets: an $LER$ of $1.42$ ($>1.0$) and a 40% reduction in synthetic nitrogen fertilizer.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Intercropped corn-cowpea plots achieved a land equivalent ratio ($LER$)...', trapType: 'Correct Direct Match', whyIncorrect: 'Directly confirms $LER > 1.0$ and reduced nitrogen fertilizer requirement.' },
        { optionIndex: 1, optionText: 'Monoculture corn plots produced taller stalks during early vegetative...', trapType: 'Stalk Height Distractor', whyIncorrect: 'Stalk height does not measure $LER$ efficiency or nitrogen fertilizer reduction.' },
        { optionIndex: 2, optionText: 'Cowpea seeds contained higher percentage protein by dry weight than...', trapType: 'Nutritional Value Distractor', whyIncorrect: 'Protein percentage does not measure $LER$ yield efficiency or fertilizer input.' },
        { optionIndex: 3, optionText: 'Harvesting intercropped plots required 15% more manual labor hours...', trapType: 'Labor Hour Distractor', whyIncorrect: 'Labor hours do not address $LER$ efficiency or nitrogen fertilizer reduction.' }
      ]
    }
  }
];
