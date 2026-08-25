import { ReadingQuestion } from '../readingTypes';

export const T2_EXERCISES_PART1: ReadingQuestion[] = [
  {
    id: 't2-ex-1',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In urban forestry, planting silver maple trees near public roadways has come under scrutiny. While silver maples grow rapidly and provide quick shade canopy, their shallow, aggressive root systems frequently crack asphalt pavement and rupture underground sewer pipes, imposing high long-term maintenance burdens on municipal infrastructure budgets.`,
    questionText: `Which choice best states the main idea of the passage?`,
    options: [
      'Silver maples offer rapid shade benefits but cause severe infrastructure damage due to their shallow roots.',
      'Municipalities should completely ban planting trees near public roadways and urban pavements.',
      'Underground sewer pipes are more vulnerable to root damage than asphalt roads are.',
      'Silver maples require more water than other urban shade tree species.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Main Point Synthesis',
    explanation: {
      passageDeconstruction: `Contrast: rapid growth and shade vs shallow root damage to asphalt and sewer pipes imposing high costs.`,
      correctReasoning: `Option A balances both sides: rapid shade benefits vs severe long-term infrastructure damage.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Silver maples offer rapid shade benefits but cause severe...', trapType: 'Correct Synthesis', whyIncorrect: 'Correctly summarizes both pro and con.' },
        { optionIndex: 1, optionText: 'Municipalities should completely ban planting trees...', trapType: 'Extreme Recommendation', whyIncorrect: 'Passage criticizes silver maples specifically, not all urban trees.' },
        { optionIndex: 2, optionText: 'Underground sewer pipes are more vulnerable...', trapType: 'Unsupported Comparison', whyIncorrect: 'Passage lists both sewer pipes and asphalt without saying which is more vulnerable.' },
        { optionIndex: 3, optionText: 'Silver maples require more water than other urban shade tree...', trapType: 'Unmentioned Fact', whyIncorrect: 'Water consumption is not mentioned.' }
      ]
    }
  },
  {
    id: 't2-ex-2',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `According to a 2021 study on marine biology, emperor penguins maintain body heat during Antarctic blizzards through a behavior known as huddling. Hundreds of penguins pack tightly together, continuously rotating positions so that birds on the icy perimeter move to the warm interior while interior birds shift outward, ensuring equal heat distribution across the colony.`,
    questionText: `According to the text, how do emperor penguins ensure all colony members stay warm during blizzards?`,
    options: [
      'They continuously rotate positions between the outer edge and the inner center of the huddle.',
      'They build snow shelters along coastal ice ledges to block high winds.',
      'They increase metabolic activity by consuming lipid-rich fish before blizzards.',
      'Dominant adult males remain permanently at the center to protect chicks.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Textual Detail Retrieval',
    explanation: {
      passageDeconstruction: `Direct detail question: How do penguins ensure all members stay warm? Text explicitly states: "continuously rotating positions so that birds on the icy perimeter move to the warm interior while interior birds shift outward".`,
      correctReasoning: `Option A accurately states the rotation mechanism.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'They continuously rotate positions between the outer edge...', trapType: 'Direct Textual Match', whyIncorrect: 'Correct. Directly stated in text.' },
        { optionIndex: 1, optionText: 'They build snow shelters along coastal ice ledges...', trapType: 'Fabricated Detail', whyIncorrect: 'Building snow shelters is not mentioned.' },
        { optionIndex: 2, optionText: 'They increase metabolic activity by consuming lipid-rich fish...', trapType: 'Unmentioned Mechanism', whyIncorrect: 'Pre-blizzard fish consumption is not mentioned.' },
        { optionIndex: 3, optionText: 'Dominant adult males remain permanently at the center...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states birds rotate positions continuously, rather than keeping some birds permanently at the center.' }
      ]
    }
  },
  {
    id: 't2-ex-3',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `While early aviation history often focuses exclusively on the Wright brothers\' 1903 engine-powered flight at Kitty Hawk, aviation historians emphasize that their success depended heavily on glider experiments conducted in Germany by Otto Lilienthal during the 1890s. Lilienthal published detailed aerodynamic data on curved wing surfaces that provided the Wrights with essential mathematical formulas for calculating lift and pitch control.`,
    questionText: `Which choice best describes the main idea of the text?`,
    options: [
      'The Wright brothers\' flight achievements relied significantly on earlier aerodynamic research by Otto Lilienthal.',
      'Otto Lilienthal successfully conducted the first engine-powered flight in Germany during the 1890s.',
      'The Wright brothers invented the concept of curved wings without consulting external aerodynamic data.',
      'Kitty Hawk was chosen for flight tests because German gliders were unsuitable for American wind conditions.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Main Idea Synthesis',
    explanation: {
      passageDeconstruction: `Thesis: Wright brothers\' 1903 success depended heavily on 1890s glider research and mathematical aerodynamic data published by Otto Lilienthal.`,
      correctReasoning: `Option A accurately captures how earlier research enabled the Wright brothers\' breakthrough.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'The Wright brothers\' flight achievements relied significantly...', trapType: 'Correct Main Point', whyIncorrect: 'Correct synthesis of historical influence.' },
        { optionIndex: 1, optionText: 'Otto Lilienthal successfully conducted the first engine-powered flight...', trapType: 'Direct Contradiction', whyIncorrect: 'Lilienthal did glider experiments, whereas the Wright brothers did the first engine-powered flight.' },
        { optionIndex: 2, optionText: 'The Wright brothers invented the concept of curved wings...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states Lilienthal published data on curved wing surfaces.' },
        { optionIndex: 3, optionText: 'Kitty Hawk was chosen for flight tests because German gliders...', trapType: 'Fabricated Reason', whyIncorrect: 'Why Kitty Hawk was chosen is not discussed.' }
      ]
    }
  },
  {
    id: 't2-ex-4',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In agricultural science, soil salinization poses a major threat to crop yields in arid regions where irrigation water evaporates quickly, leaving concentrated mineral salts behind in the topsoil. Researchers found that planting halophytes—salt-tolerant native shrubs—helps restore degraded fields by absorbing excess sodium ions through their roots and storing them safely in leaf tissue.`,
    questionText: `According to the text, how do halophytes help rehabilitate salt-damaged soil?`,
    options: [
      'They absorb sodium ions through their roots and store them in leaf tissue.',
      'They increase groundwater evaporation rates to wash salts away.',
      'They release synthetic chemicals that neutralize mineral salts in topsoil.',
      'They block irrigation water from reaching crop roots.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Textual Detail Retrieval',
    explanation: {
      passageDeconstruction: `Direct detail: How do halophytes restore soil? Text states: "absorbing excess sodium ions through their roots and storing them safely in leaf tissue".`,
      correctReasoning: `Option A directly matches the stated biological mechanism.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'They absorb sodium ions through their roots...', trapType: 'Direct Textual Match', whyIncorrect: 'Correct. Directly stated in text.' },
        { optionIndex: 1, optionText: 'They increase groundwater evaporation rates...', trapType: 'Direct Contradiction', whyIncorrect: 'Evaporation causes salinization, so increasing it would worsen damage.' },
        { optionIndex: 2, optionText: 'They release synthetic chemicals...', trapType: 'Natural vs Synthetic Trap', whyIncorrect: 'Halophytes are native shrubs, not synthetic chemical producers.' },
        { optionIndex: 3, optionText: 'They block irrigation water...', trapType: 'Harmful Action Trap', whyIncorrect: 'Blocking water would harm crops, not rehabilitate fields.' }
      ]
    }
  },
  {
    id: 't2-ex-5',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `Although seventeenth-century natural philosopher Isaac Newton is best remembered for formulating universal laws of motion and gravitation, historians of science note that he spent nearly as much time practicing alchemy and interpreting biblical chronology. Rather than viewing these pursuits as distinct or contradictory, Newton considered his alchemical experiments and scriptural calculations integral parts of a unified quest to comprehend divine order in the cosmos.`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      'Newton viewed alchemy and biblical studies as complementary parts of a unified search for universal order.',
      'Newton abandoned his work on physics and gravitation after discovering alchemy.',
      'Seventeenth-century scholars universally condemned Newton\'s scriptural calculations as unscientific.',
      'Newton\'s laws of motion were derived directly from his alchemical experiments.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Main Idea Synthesis',
    explanation: {
      passageDeconstruction: `Main point: Newton did not see physics, alchemy, and biblical chronology as opposing, but as part of a single quest to understand divine cosmic order.`,
      correctReasoning: `Option A correctly synthesizes Newton\'s unified worldview.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Newton viewed alchemy and biblical studies as complementary...', trapType: 'Correct Main Idea', whyIncorrect: 'Correctly summarizes the passage thesis.' },
        { optionIndex: 1, optionText: 'Newton abandoned his work on physics...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states he spent nearly as much time on them, not that he abandoned physics.' },
        { optionIndex: 2, optionText: 'Seventeenth-century scholars universally condemned...', trapType: 'Unmentioned Reception', whyIncorrect: 'Public condemnation by scholars is not mentioned.' },
        { optionIndex: 3, optionText: 'Newton\'s laws of motion were derived directly from alchemy...', trapType: 'Over-Stated Causal Link', whyIncorrect: 'Text says he pursued both, not that laws of motion came directly from alchemical experiments.' }
      ]
    }
  },
  {
    id: 't2-ex-6',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In marine ecology, sea otters play a crucial role as a keystone species in kelp forest ecosystems along the Pacific coast. By feeding extensively on sea urchins—herbivorous invertebrates that consume the holdfasts of giant kelp—sea otters prevent urchin barrens and maintain dense underwater kelp habitats that shelter hundreds of marine species.`,
    questionText: `According to the text, how do sea otters help preserve kelp forest ecosystems?`,
    options: [
      'By preying on sea urchins that would otherwise destroy kelp holdfasts.',
      'By planting giant kelp spores along the ocean floor.',
      'By repelling large sharks that feed on marine vegetation.',
      'By filtering ocean water to increase sunlight penetration.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Detail Verification',
    explanation: {
      passageDeconstruction: `Direct detail: How do otters protect kelp? Text explicitly says: "feeding extensively on sea urchins—herbivorous invertebrates that consume the holdfasts of giant kelp".`,
      correctReasoning: `Option A directly mirrors the otter-urchin-kelp food web relationship described.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By preying on sea urchins that would otherwise destroy...', trapType: 'Direct Textual Match', whyIncorrect: 'Correct. Directly stated in text.' },
        { optionIndex: 1, optionText: 'By planting giant kelp spores...', trapType: 'Unrealistic Action', whyIncorrect: 'Otters do not plant spores.' },
        { optionIndex: 2, optionText: 'By repelling large sharks...', trapType: 'Unmentioned Predator', whyIncorrect: 'Sharks are not mentioned.' },
        { optionIndex: 3, optionText: 'By filtering ocean water...', trapType: 'Fabricated Mechanism', whyIncorrect: 'Water filtering is not an otter behavior.' }
      ]
    }
  },
  {
    id: 't2-ex-7',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `While conventional economic models assume that consumers make purchasing decisions based purely on rational utility calculations, behavioral economists have demonstrated that cognitive biases heavily influence financial choices. For example, the loss aversion bias causes individuals to feel the psychological pain of a monetary loss twice as intensely as the pleasure of an equivalent gain, leading people to make overly conservative investment choices.`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      'Behavioral economics shows that cognitive biases like loss aversion cause consumer choices to diverge from purely rational calculations.',
      'Traditional economic models accurately predict consumer behavior in stock market investments.',
      'Loss aversion bias causes investors to take excessive risks to avoid small monetary losses.',
      'The pleasure of financial gain is psychologically more powerful than the pain of equivalent loss.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Thesis & Example Distillation',
    explanation: {
      passageDeconstruction: `Thesis: Cognitive biases disrupt purely rational choice assumptions. Example: Loss aversion causes pain of loss to outweigh pleasure of gain, making choices conservative.`,
      correctReasoning: `Option A accurately states the overall main point (cognitive biases diverge choices from purely rational economic models).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Behavioral economics shows that cognitive biases...', trapType: 'Correct Main Idea', whyIncorrect: 'Correct. Accurately synthesizes thesis and example.' },
        { optionIndex: 1, optionText: 'Traditional economic models accurately predict consumer behavior...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states traditional rational models fail to account for biases.' },
        { optionIndex: 2, optionText: 'Loss aversion bias causes investors to take excessive risks...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states loss aversion leads to "overly conservative" choices.' },
        { optionIndex: 3, optionText: 'The pleasure of financial gain is psychologically more powerful...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states the pain of loss is felt twice as intensely as pleasure of gain.' }
      ]
    }
  },
  {
    id: 't2-ex-8',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In climatology, ice core samples extracted from the Greenland ice sheet provide a detailed atmospheric record spanning over 100,000 years. By measuring the ratio of oxygen isotopes trapped in ancient air bubbles inside the ice, scientists can reconstruct historic global temperature shifts and carbon dioxide concentrations with annual precision.`,
    questionText: `According to the text, what information do scientists obtain from analyzing air bubbles in ice cores?`,
    options: [
      'Ratios of oxygen isotopes that reveal historic global temperatures and carbon dioxide levels.',
      'Direct measurements of ancient ocean current speeds across the North Atlantic.',
      'Volcanic ash layers that indicate exact years of prehistoric eruptions.',
      'Fossilized plant pollen that shows changes in Arctic vegetation.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Detail Matching',
    explanation: {
      passageDeconstruction: `Direct question: What do air bubbles in ice cores reveal? Text explicitly states: "measuring the ratio of oxygen isotopes trapped in ancient air bubbles... scientists can reconstruct historic global temperature shifts and carbon dioxide concentrations".`,
      correctReasoning: `Option A accurately summarizes oxygen isotope ratios revealing temperature and carbon dioxide data.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Ratios of oxygen isotopes that reveal historic global temperatures...', trapType: 'Direct Textual Match', whyIncorrect: 'Correct. Directly stated in text.' },
        { optionIndex: 1, optionText: 'Direct measurements of ancient ocean current speeds...', trapType: 'Unmentioned Variable', whyIncorrect: 'Ocean current speeds are not mentioned.' },
        { optionIndex: 2, optionText: 'Volcanic ash layers that indicate exact years...', trapType: 'Unmentioned Variable', whyIncorrect: 'Volcanic ash is not mentioned.' },
        { optionIndex: 3, optionText: 'Fossilized plant pollen that shows changes...', trapType: 'Unmentioned Variable', whyIncorrect: 'Plant pollen is not mentioned.' }
      ]
    }
  },
  {
    id: 't2-ex-9',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `Early twentieth-century literary critic T.S. Eliot famously proposed the concept of the "objective correlative," arguing that poetry should not express emotions through direct personal confession. Instead, Eliot asserted that poets must construct a specific set of objects, situations, and chains of events that serve as a formula for a particular emotion, evoking that feeling in the reader automatically through sensory imagery.`,
    questionText: `Which choice best summarizes Eliot\'s concept of the "objective correlative"?`,
    options: [
      'Evoking emotion in readers by presenting specific objects and situations rather than stating feelings directly.',
      'Writing poetry exclusively about objective scientific phenomena rather than subjective human experiences.',
      'Expressing raw personal confessions without filtering them through literary structure or imagery.',
      'Correlating a poet\'s personal biography with historical events occurring during their lifetime.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Concept Definition Summary',
    explanation: {
      passageDeconstruction: `Definition: Objective correlative avoids direct personal confession and instead uses specific objects, situations, and events to evoke emotion in readers.`,
      correctReasoning: `Option A clearly and accurately defines Eliot\'s concept as described in the text.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Evoking emotion in readers by presenting specific objects...', trapType: 'Correct Definition', whyIncorrect: 'Correctly summarizes the concept.' },
        { optionIndex: 1, optionText: 'Writing poetry exclusively about objective scientific phenomena...', trapType: 'Literal Word Confusion', whyIncorrect: 'Takes "objective" literally as science, ignoring the artistic context.' },
        { optionIndex: 2, optionText: 'Expressing raw personal confessions...', trapType: 'Direct Contradiction', whyIncorrect: 'Eliot explicitly rejected direct personal confession.' },
        { optionIndex: 3, optionText: 'Correlating a poet\'s personal biography...', trapType: 'Etymological Trap', whyIncorrect: 'Fabricates a biographical correlation not found in the text.' }
      ]
    }
  },
  {
    id: 't2-ex-10',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In plant physiology, stomata are microscopic pores located on leaf surfaces that regulate gas exchange and water loss. When soil moisture is abundant, guard cells surrounding each stoma swell with water, opening the pore to absorb carbon dioxide for photosynthesis; conversely, during dry conditions, guard cells lose turgor pressure and shrink, closing the pore to prevent desiccation.`,
    questionText: `According to the text, what causes leaf stomata to close during dry conditions?`,
    options: [
      'Guard cells lose turgor pressure and shrink.',
      'Carbon dioxide levels build up inside the leaf tissue.',
      'Photosynthesis speeds up to absorb remaining soil moisture.',
      'Direct sunlight causes guard cells to expand rapidly.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Cause Detail Retrieval',
    explanation: {
      passageDeconstruction: `Question asks for cause of closure during dry conditions. Text explicitly says: "during dry conditions, guard cells lose turgor pressure and shrink, closing the pore".`,
      correctReasoning: `Option A directly states the exact physical cause given in the passage.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Guard cells lose turgor pressure and shrink.', trapType: 'Direct Textual Match', whyIncorrect: 'Correct. Directly stated in text.' },
        { optionIndex: 1, optionText: 'Carbon dioxide levels build up inside...', trapType: 'Fabricated Cause', whyIncorrect: 'Not stated as the cause of closure.' },
        { optionIndex: 2, optionText: 'Photosynthesis speeds up to absorb remaining moisture...', trapType: 'Scientific Fallacy', whyIncorrect: 'Dry conditions close stomata to conserve water, which slows gas exchange.' },
        { optionIndex: 3, optionText: 'Direct sunlight causes guard cells to expand rapidly.', trapType: 'Direct Contradiction', whyIncorrect: 'Swelling expands guard cells when water is abundant, whereas dryness causes shrinking.' }
      ]
    }
  }
];
