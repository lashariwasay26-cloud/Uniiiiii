import { ReadingQuestion } from '../readingTypes';

export const MODULE_1_EXERCISES_PART_2: ReadingQuestion[] = [
  {
    id: 'm1-ex-26',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In urban ornithology, recent telemetry studies show that peregrine falcons nesting on city skyscrapers have altered their hunting schedules compared to rural populations. While wild falcons hunt exclusively during daylight, urban falcons frequently capture migratory birds at night. Researchers attribute this nocturnal behavior to artificial lighting around high-rise structures, which illuminates passing prey and allows urban falcons to exploit a food source previously unavailable to their species.`,
    questionText: `Which choice best states the main idea of the text?`,
    options: [
      'Artificial urban lighting enables peregrine falcons to hunt migratory birds at night.',
      'Rural falcons are facing severe food shortages due to lack of artificial lighting.',
      'Skyscrapers provide better nesting spots for falcons than natural cliff sides do.',
      'Migratory birds prefer flying near lit skyscrapers to avoid nighttime predators.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Primary Cause & Effect Isolation',
    explanation: {
      passageDeconstruction: `Urban falcons hunt at night unlike rural falcons. Artificial lights on skyscrapers illuminate passing migratory birds, letting urban falcons hunt them at night.`,
      correctReasoning: `Option A encapsulates the main point: artificial lighting in cities enables falcons to hunt at night.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'Rural falcons are facing severe food shortages due to lack of artificial lighting.', trapType: 'Unmentioned Extrapolation', whyIncorrect: 'The text makes no mention of food shortages among rural falcons.' },
        { optionIndex: 2, optionText: 'Skyscrapers provide better nesting spots for falcons than natural cliff sides do.', trapType: 'Unsupported Comparison', whyIncorrect: 'The text mentions skyscrapers as nesting locations, but does not compare their quality to natural cliffs.' },
        { optionIndex: 3, optionText: 'Migratory birds prefer flying near lit skyscrapers to avoid nighttime predators.', trapType: 'Reversal Trap', whyIncorrect: 'Lighting exposes migratory birds to predators (falcons); it is not a safe choice they prefer.' }
      ]
    }
  },
  {
    id: 'm1-ex-27',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `Historian Dr. Samuel Vance re-examines the financial collapse of the South Sea Company in 1720. While standard economic accounts frame the episode as a frenzy driven purely by speculative public mania, Vance shows that institutional corruption within the British Parliament was central to the crisis. Senior politicians received secret shares in exchange for passing legislation that guaranteed the company’s monopoly over national debt conversion, artificially inflating stock values before insiders liquidated their holdings and left retail investors bankrupt.`,
    questionText: `Which choice best states the primary thesis of Vance’s research as presented in the text?`,
    options: [
      'Parliamentary corruption played a critical role in driving the South Sea financial bubble.',
      'Public enthusiasm alone was sufficient to inflate stock prices during the 1720 economic crisis.',
      'The South Sea Company successfully managed Britain’s national debt for several decades.',
      'Retail investors were legally prohibited from purchasing shares in national monopolies.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Thesis Shift Detection ("While standard accounts... Vance shows...")',
    explanation: {
      passageDeconstruction: `Text contrasts standard view (public frenzy) with Vance's research (political corruption and insider dealing caused the crash).`,
      correctReasoning: `Option A directly reflects Vance's thesis that parliamentary corruption was central to the crisis.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'Public enthusiasm alone was sufficient to inflate stock prices during the 1720 economic crisis.', trapType: 'Traditional View (Rejected by Vance)', whyIncorrect: 'Vance specifically argues against public frenzy being the sole driver.' },
        { optionIndex: 2, optionText: 'The South Sea Company successfully managed Britain’s national debt for several decades.', trapType: 'Direct Contradiction', whyIncorrect: 'The company caused a financial collapse in 1720.' },
        { optionIndex: 3, optionText: 'Retail investors were legally prohibited from purchasing shares in national monopolies.', trapType: 'Fabricated Fact', whyIncorrect: 'The text notes retail investors bought shares and went bankrupt; they were not prohibited.' }
      ]
    }
  },
  {
    id: 'm1-ex-28',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In marine biology, sea otter presence is known to maintain the health of coastal kelp forests. Otters feed heavily on sea urchins, which are herbivorous invertebrates that graze on kelp holdfasts. When sea otter populations decline, urchin populations surge unchecked, devouring kelp beds and turning lush underwater forests into barren seascapes. Reintroducing sea otters to coastal ecosystems has consistently restored kelp density and biodiversity.`,
    questionText: `Based on the text, what direct effect occurs when sea otter populations decline?`,
    options: [
      'Sea urchin populations increase rapidly and destroy kelp forests.',
      'Kelp forests grow thicker and expand into deeper oceanic trenches.',
      'Herbivorous invertebrates migrate to land to search for food sources.',
      'Predatory fish species replace sea otters as the primary urchin consumers.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Fact Lookup',
    explanation: {
      passageDeconstruction: `Passage explicitly states: "When sea otter populations decline, urchin populations surge unchecked, devouring kelp beds..."`,
      correctReasoning: `Option A directly matches the explicit cause-and-effect stated in the text.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'Kelp forests grow thicker and expand into deeper oceanic trenches.', trapType: 'Direct Contradiction', whyIncorrect: 'Declining otters lead to destroyed kelp forests, not thicker kelp.' },
        { optionIndex: 2, optionText: 'Herbivorous invertebrates migrate to land to search for food sources.', trapType: 'Absurd Extrapolation', whyIncorrect: 'Urchins are aquatic sea invertebrates; they do not land-migrate.' },
        { optionIndex: 3, optionText: 'Predatory fish species replace sea otters as the primary urchin consumers.', trapType: 'Unmentioned Detail', whyIncorrect: 'The text mentions no fish replacing otters.' }
      ]
    }
  },
  {
    id: 'm1-ex-29',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In linguistics, the Sapir-Whorf hypothesis posits that the grammatical structure of a language shapes its speakers' cognitive perception of the world. While extreme versions of linguistic determinism have been widely rejected by modern cognitive scientists, recent experimental studies offer subtle support for linguistic relativity. For instance, speakers of languages that require grammatical gender markers for inanimate objects (such as assigning feminine gender to "key") describe those objects using adjectives aligned with traditional gender stereotypes significantly more often than speakers of gender-neutral languages do.`,
    questionText: `Which choice best states the main conclusion supported by the text?`,
    options: [
      'Grammatical gender structures in language can subtly influence how speakers describe objects.',
      'Modern cognitive scientists fully endorse extreme versions of linguistic determinism.',
      'Speakers of gender-neutral languages are incapable of perceiving physical object attributes.',
      'The Sapir-Whorf hypothesis has been completely disproven across all linguistic domains.'
    ],
    correctAnswer: 0,
    nextGenTechnique: '0.5-Step Rule & Nuance Matching',
    explanation: {
      passageDeconstruction: `Extreme determinism is rejected, but subtle linguistic relativity is supported by experiments showing gendered grammar influences adjective choices for objects.`,
      correctReasoning: `Option A accurately states the passage's main finding regarding subtle grammatical influence on descriptions.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'Modern cognitive scientists fully endorse extreme versions of linguistic determinism.', trapType: 'Direct Contradiction', whyIncorrect: 'The text says extreme determinism was "widely rejected".' },
        { optionIndex: 2, optionText: 'Speakers of gender-neutral languages are incapable of perceiving physical object attributes.', trapType: 'Extreme Absurdity', whyIncorrect: 'The text makes no such claim.' },
        { optionIndex: 3, optionText: 'The Sapir-Whorf hypothesis has been completely disproven across all linguistic domains.', trapType: 'Extreme Overstatement', whyIncorrect: 'The text says recent studies offer subtle support for relativity.' }
      ]
    }
  },
  {
    id: 'm1-ex-30',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `Archaeologists excavating a Bronze Age settlement in southern Scandinavia discovered preserved barley grains in ceramic storage jars. Radiocarbon dating indicated the grain stores dated to 1300 BCE, coinciding with a prolonged regional drought documented in lake sediment cores. Rather than abandoning the site, residents adapted by building irrigation channels connected to nearby glacial streams, allowing agricultural yields to remain stable despite unfavorable weather.`,
    questionText: `According to the text, how did the settlement residents respond to the regional drought?`,
    options: [
      'They constructed irrigation channels linked to glacial streams to sustain farming.',
      'They permanently abandoned the settlement and migrated south to Scandinavia.',
      'They shifted their primary diet from barley farming to deep-sea fishing.',
      'They relied on trade agreements with neighboring tribes to import food.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Fact Isolation',
    explanation: {
      passageDeconstruction: `During the drought, residents adapted by building irrigation channels from glacial streams to keep crop yields stable.`,
      correctReasoning: `Option A directly restates the residents' response stated in the passage.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'They permanently abandoned the settlement and migrated south to Scandinavia.', trapType: 'Direct Contradiction', whyIncorrect: 'Text explicitly states "Rather than abandoning the site...".' },
        { optionIndex: 2, optionText: 'They shifted their primary diet from barley farming to deep-sea fishing.', trapType: 'Unmentioned Detail', whyIncorrect: 'The passage never mentions fishing.' },
        { optionIndex: 3, optionText: 'They relied on trade agreements with neighboring tribes to import food.', trapType: 'Fabricated Solution', whyIncorrect: 'The passage mentions irrigation, not trade imports.' }
      ]
    }
  },
  {
    id: 'm1-ex-31',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In astrophysics, solar flares release massive amounts of electromagnetic radiation across the solar system. When these energetic particles collide with Earth's magnetosphere, they induce geomagnetic storms capable of disrupting satellite communications and power grids. However, a team led by Dr. Aris Thorne developed a predictive algorithm that analyzes sunspot magnetic complexity 48 hours prior to flare eruption. By giving power utilities advance warning to adjust grid voltages, Thorne's system significantly reduces the risk of storm-induced blackout events.`,
    questionText: `Which choice best describes the primary function of Thorne's predictive algorithm?`,
    options: [
      'It analyzes magnetic complexity in sunspots to provide advance warnings for power utilities.',
      'It physically deflects solar radiation before it enters Earth’s atmosphere.',
      'It eliminates geomagnetic storms by stabilizing sunspot magnetic fields.',
      'It restores power grid voltage automatically after blackouts occur.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Explicit Function Retrieval',
    explanation: {
      passageDeconstruction: `Algorithm analyzes sunspot magnetic complexity 48 hours before flares, giving advance warning to power companies to protect grids.`,
      correctReasoning: `Option A accurately states the algorithm's precise function.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'It physically deflects solar radiation before it enters Earth’s atmosphere.', trapType: 'Sci-Fi Extrapolation', whyIncorrect: 'The software algorithm provides data warnings, not physical deflection shields.' },
        { optionIndex: 2, optionText: 'It eliminates geomagnetic storms by stabilizing sunspot magnetic fields.', trapType: 'Absurd Scope', whyIncorrect: 'Software on Earth cannot stabilize solar magnetic fields on the Sun.' },
        { optionIndex: 3, optionText: 'It restores power grid voltage automatically after blackouts occur.', trapType: 'Timing Inversion', whyIncorrect: 'The algorithm gives 48-hour *advance warning* to *prevent* blackouts, not fix them afterwards.' }
      ]
    }
  },
  {
    id: 'm1-ex-32',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In museum conservation, preserving medieval parchment manuscripts requires controlling relative humidity. High humidity promotes mold growth and ink dissolution, while low humidity causes parchment to dry out, warp, and crack. Conservators maintain storage rooms at a constant 50% relative humidity and 18°C temperature, creating a stable environment that slows organic decay and preserves text legibility for centuries.`,
    questionText: `According to the text, why is low humidity harmful to medieval parchment manuscripts?`,
    options: [
      'It causes the parchment material to dry out, warp, and crack.',
      'It encourages mold growth and dissolves iron gall ink.',
      'It causes temperature fluctuations in storage rooms.',
      'It increases chemical reaction speeds between ink and ambient light.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Cause Matching',
    explanation: {
      passageDeconstruction: `Text specifies: "while low humidity causes parchment to dry out, warp, and crack."`,
      correctReasoning: `Option A directly states the harmful effect of low humidity.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'It encourages mold growth and dissolves iron gall ink.', trapType: 'Condition Swap', whyIncorrect: 'High humidity (not low humidity) causes mold and ink dissolution.' },
        { optionIndex: 2, optionText: 'It causes temperature fluctuations in storage rooms.', trapType: 'Unmentioned Relationship', whyIncorrect: 'Humidity level is not described as causing temperature fluctuations.' },
        { optionIndex: 3, optionText: 'It increases chemical reaction speeds between ink and ambient light.', trapType: 'Unmentioned Detail', whyIncorrect: 'The text does not discuss light reaction speeds.' }
      ]
    }
  },
  {
    id: 'm1-ex-33',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In literary criticism, the study of authorial intent underwent a major shift following Roland Barthes's 1967 essay "The Death of the Author." Barthes argued that a text's meaning is created by the reader during interpretation rather than dictated by the author's personal biography. Modern literary theorists note that while biographical context can provide useful historical background, prioritizing authorial intent above all else limits a literary work's interpretative possibilities and ignores how reader perspectives evolve over time.`,
    questionText: `Which choice best states the main argument of modern literary theorists as presented in the text?`,
    options: [
      'Relying solely on authorial intent restricts the range of interpretations a text can offer.',
      'An author’s personal biography is completely irrelevant to understanding historical texts.',
      'Roland Barthes argued that readers should consult authors before interpreting novels.',
      'Literary works lose all historical value when read by modern audiences.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Summary of Modern View',
    explanation: {
      passageDeconstruction: `Barthes argued meaning comes from the reader. Modern theorists add that while biography offers context, placing authorial intent above all else restricts interpretative possibilities.`,
      correctReasoning: `Option A summarizes the modern theorists' argument that focusing exclusively on authorial intent limits text interpretation.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'An author’s personal biography is completely irrelevant to understanding historical texts.', trapType: 'Extreme Overstatement', whyIncorrect: 'Text states biography "can provide useful historical background".' },
        { optionIndex: 2, optionText: 'Roland Barthes argued that readers should consult authors before interpreting novels.', trapType: 'Direct Reversal', whyIncorrect: 'Barthes proclaimed "The Death of the Author," saying meaning comes from readers.' },
        { optionIndex: 3, optionText: 'Literary works lose all historical value when read by modern audiences.', trapType: 'Extreme Fabricated Claim', whyIncorrect: 'The text makes no claim about losing historical value.' }
      ]
    }
  },
  {
    id: 'm1-ex-34',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `During the Renaissance, European cartography transformed with the adoption of Mercator projection maps. Invented by Gerardus Mercator in 1569, this projection preserved straight lines of constant compass bearing, making it invaluable for nautical navigation. However, the projection distorts landmass sizes near the poles, making landmasses like Greenland appear vastly larger than South America when South America is actually more than eight times larger.`,
    questionText: `Based on the text, what is a primary drawback of the Mercator map projection?`,
    options: [
      'It distorts the relative sizes of landmasses located near polar regions.',
      'It makes straight compass navigation lines impossible for sailors to calculate.',
      'It shrinks equatorial landmasses like South America to microscopic size.',
      'It was discarded by cartographers immediately after its release in 1569.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Explicit Fact Matching',
    explanation: {
      passageDeconstruction: `Mercator maps help sailors with straight compass lines, but distort landmass sizes near poles (making Greenland look bigger than South America).`,
      correctReasoning: `Option A accurately states the drawback explicit in the text.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'It makes straight compass navigation lines impossible for sailors to calculate.', trapType: 'Direct Contradiction', whyIncorrect: 'Mercator map preserved straight compass lines, making it invaluable.' },
        { optionIndex: 2, optionText: 'It shrinks equatorial landmasses like South America to microscopic size.', trapType: 'Extreme Exaggeration', whyIncorrect: 'The text says Greenland appears larger than South America, not that South America becomes microscopic.' },
        { optionIndex: 3, optionText: 'It was discarded by cartographers immediately after its release in 1569.', trapType: 'Direct Contradiction', whyIncorrect: 'Text notes it transformed cartography and was invaluable for navigation.' }
      ]
    }
  },
  {
    id: 'm1-ex-35',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In behavioral economics, the endowment effect describes the phenomenon wherein individuals value an item more highly simply because they own it. In a landmark study by Thaler and Kahneman, participants assigned a mug randomly were willing to sell it for an average of $7.12, whereas participants without a mug were willing to pay only $2.87 to acquire one. Researchers conclude that loss aversion—the psychological tendency to weigh losses more heavily than equivalent gains—drives this disparity, as owners perceive selling as a loss.`,
    questionText: `Which choice best states the primary cause of the endowment effect according to the researchers?`,
    options: [
      'Loss aversion causes owners to feel the pain of losing an item more acutely than non-owners value gaining it.',
      'Participants intentionally misreport item values to manipulate market prices during experiments.',
      'Non-owners lack sufficient financial income to purchase consumer goods at retail price.',
      'Consumers naturally assign zero monetary value to items they do not currently own.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Cause Identification',
    explanation: {
      passageDeconstruction: `Endowment effect: people value items higher if they own them. Study: sellers wanted $7.12, buyers offered $2.87. Cause: loss aversion makes selling feel like a loss, weighing losses heavier than gains.`,
      correctReasoning: `Option A correctly identifies loss aversion as the driving cause explained in the final sentence.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'Participants intentionally misreport item values to manipulate market prices during experiments.', trapType: 'Fabricated Motive', whyIncorrect: 'The text mentions no intentional manipulation or price misreporting.' },
        { optionIndex: 2, optionText: 'Non-owners lack sufficient financial income to purchase consumer goods at retail price.', trapType: 'Irrelevant Economic Extrapolation', whyIncorrect: 'Financial income is not discussed in the passage.' },
        { optionIndex: 3, optionText: 'Consumers naturally assign zero monetary value to items they do not currently own.', trapType: 'Factually Incorrect ($2.87 offered)', whyIncorrect: 'Non-owners offered $2.87, not zero.' }
      ]
    }
  },
  {
    id: 'm1-ex-36',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In evolutionary biology, monarch butterfly caterpillars feed exclusively on milkweed plants. Milkweed contains cardenolides—toxic cardiac glycosides that are harmless to caterpillars but poisonous to birds. As caterpillars consume milkweed leaves, they store these toxins in their bodies and retain them through metamorphosis into adulthood. When birds ingest monarchs, the cardenolides induce severe vomiting, teaching avian predators to avoid the butterfly's distinctive orange-and-black wing patterns.`,
    questionText: `Based on the text, how do monarch butterflies protect themselves from bird predators?`,
    options: [
      'They store toxic compounds from milkweed that cause birds to become ill upon eating them.',
      'They produce camouflage patterns that make them invisible against green leaves.',
      'They emit ultrasonic sounds that disorient birds during flight.',
      'They mimic the appearance of larger predatory birds to scare off small avian species.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Fact Retrieval',
    explanation: {
      passageDeconstruction: `Caterpillars eat milkweed, sequestering toxic cardenolides. The toxins stay in adults, causing birds to vomit and learn to avoid monarchs.`,
      correctReasoning: `Option A directly summarizes the defense mechanism described in the text.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'They produce camouflage patterns that make them invisible against green leaves.', trapType: 'Direct Contradiction', whyIncorrect: 'Monarchs have "distinctive orange-and-black wing patterns" (warning coloration, not camouflage).' },
        { optionIndex: 2, optionText: 'They emit ultrasonic sounds that disorient birds during flight.', trapType: 'Unmentioned Mechanism', whyIncorrect: 'The text makes no mention of sound or ultrasound.' },
        { optionIndex: 3, optionText: 'They mimic the appearance of larger predatory birds to scare off small avian species.', trapType: 'Fabricated Mimicry', whyIncorrect: 'Monarchs warn predators with toxins, not bird mimicry.' }
      ]
    }
  },
  {
    id: 'm1-ex-37',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `Anthropologist Dr. Clara Ruiz studied the agricultural terraces built by the Inca Empire in the Andes Mountains during the 15th century. These stone-walled terraces prevented soil erosion on steep mountain slopes and regulated thermal microclimates. The dark stone walls absorbed solar heat during the daytime and radiated it back into crop soil at night, protecting maize and potato crops from freezing night frosts at high altitudes.`,
    questionText: `Which choice best describes a primary environmental benefit of the stone walls in Inca terraces?`,
    options: [
      'They absorbed daylight solar heat and released it into soil at night to prevent crops from freezing.',
      'They funneled rainwater into subterranean aqueducts to power domestic machinery.',
      'They reflected solar radiation back into the atmosphere to cool crops during hot mountain summers.',
      'They allowed farmers to cultivate tropical fruits that require high humidity.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Technical Mechanism Fact Isolation',
    explanation: {
      passageDeconstruction: `Terraces prevented erosion and regulated temperature: stone walls absorbed heat by day and radiated it into soil by night to stop frost damage.`,
      correctReasoning: `Option A directly restates the explicit thermal function of the stone walls.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'They funneled rainwater into subterranean aqueducts to power domestic machinery.', trapType: 'Anachronistic Technology Trap', whyIncorrect: 'Machinery power is not mentioned in the text.' },
        { optionIndex: 2, optionText: 'They reflected solar radiation back into the atmosphere to cool crops during hot mountain summers.', trapType: 'Opposite Thermal Action', whyIncorrect: 'The walls absorbed heat to warm crops at night, not reflect heat to cool crops.' },
        { optionIndex: 3, optionText: 'They allowed farmers to cultivate tropical fruits that require high humidity.', trapType: 'Scope Expansion', whyIncorrect: 'The text mentions maize and potatoes, not tropical fruit cultivation.' }
      ]
    }
  },
  {
    id: 'm1-ex-38',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In urban planning, transit-oriented development (TOD) focuses on creating compact, walkable neighborhoods centered around high-capacity public transit stations. By placing housing, shops, and offices within a five-minute walk of train lines, TOD projects reduce residents' reliance on personal automobiles. Studies show that communities implementing TOD experience lower greenhouse gas emissions and reduced traffic congestion compared to car-dependent suburban developments.`,
    questionText: `According to the text, what is a primary goal of transit-oriented development?`,
    options: [
      'To lower car dependency by clustering housing and businesses near public transit stations.',
      'To build highway expansion projects that reduce traffic congestion in suburbs.',
      'To eliminate all commercial shops and offices from residential areas.',
      'To encourage suburban residents to purchase electric personal automobiles.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Goal Identification',
    explanation: {
      passageDeconstruction: `TOD creates walkable communities near transit stations so people rely less on cars, lowering emissions and congestion.`,
      correctReasoning: `Option A accurately states the primary goal of TOD.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'To build highway expansion projects that reduce traffic congestion in suburbs.', trapType: 'Opposite Strategy', whyIncorrect: 'TOD focuses on transit and walkability, not building suburban highways.' },
        { optionIndex: 2, optionText: 'To eliminate all commercial shops and offices from residential areas.', trapType: 'Direct Contradiction', whyIncorrect: 'TOD places shops and offices *together* with housing.' },
        { optionIndex: 3, optionText: 'To encourage suburban residents to purchase electric personal automobiles.', trapType: 'Unmentioned Detail', whyIncorrect: 'TOD aims to reduce auto reliance altogether, not promote buying electric cars.' }
      ]
    }
  },
  {
    id: 'm1-ex-39',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In cognitive psychology, working memory capacity refers to the limited system responsible for temporarily holding and manipulating information during complex tasks. While early models treated working memory as a single storage buffer, Baddeley and Hitch introduced a multi-component model comprising the phonological loop (speech-based information), the visuospatial sketchpad (visual data), and a central executive that coordinates attentional control. Research shows that dual-task performance drops significantly when two tasks compete for the same specialized sub-component, but remains high when tasks utilize different components.`,
    questionText: `Which choice best states why dual-task performance declines according to Baddeley and Hitch’s model?`,
    options: [
      'Dual tasks suffer when both tasks draw on the same specialized working memory component.',
      'The central executive shuts down completely whenever visual information is presented.',
      'Phonological processing operates at a lower speed than visuospatial processing in all individuals.',
      'Working memory capacity expands automatically when individuals perform multiple tasks.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Specific Cause Isolation',
    explanation: {
      passageDeconstruction: `Baddeley and Hitch split working memory into components (phonological loop, visuospatial sketchpad, central executive). Performance drops when two tasks compete for the *same* component.`,
      correctReasoning: `Option A directly restates the exact condition under which dual-task performance drops.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'The central executive shuts down completely whenever visual information is presented.', trapType: 'Extreme Fabricated Claim', whyIncorrect: 'The passage never says the central executive shuts down.' },
        { optionIndex: 2, optionText: 'Phonological processing operates at a lower speed than visuospatial processing in all individuals.', trapType: 'Unsupported Comparison', whyIncorrect: 'The passage compares no processing speeds.' },
        { optionIndex: 3, optionText: 'Working memory capacity expands automatically when individuals perform multiple tasks.', trapType: 'Direct Contradiction', whyIncorrect: 'Working memory is described as a "limited system", not expanding automatically.' }
      ]
    }
  },
  {
    id: 'm1-ex-40',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In botany, mangrove trees thrive along tropical coastlines in saline intertidal zones where most terrestrial plants would perish. Mangroves survive high salt concentrations through specialized adaptations: species like the red mangrove feature impermeable root membranes that filter out 90% of sea salt during water absorption, while yellow mangroves secrete excess salt through glands on their leaves.`,
    questionText: `According to the text, how do red mangroves handle high salt levels in seawater?`,
    options: [
      'Their root membranes filter out salt when absorbing water.',
      'They secrete salt through glands located on their leaves.',
      'They store salt in underground tubers during the winter.',
      'They shed salt-saturated bark at the end of every growing season.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Species Differentiation Matching',
    explanation: {
      passageDeconstruction: `Red mangroves use root membranes to filter out 90% of salt. Yellow mangroves secrete salt through leaf glands. Question asks specifically for red mangroves.`,
      correctReasoning: `Option A correctly assigns root membrane filtering to red mangroves.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'They secrete salt through glands located on their leaves.', trapType: 'Species Swap Trap', whyIncorrect: 'Leaf glands belong to yellow mangroves, not red mangroves.' },
        { optionIndex: 2, optionText: 'They store salt in underground tubers during the winter.', trapType: 'Fabricated Mechanism', whyIncorrect: 'Underground tubers are not mentioned.' },
        { optionIndex: 3, optionText: 'They shed salt-saturated bark at the end of every growing season.', trapType: 'Fabricated Mechanism', whyIncorrect: 'Bark shedding is not mentioned.' }
      ]
    }
  },
  {
    id: 'm1-ex-41',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In musicology, the transition from the Harpsichord to the Fortepiano during the mid-eighteenth century revolutionized keyboard composition. Unlike the harpsichord, which plucked strings at a uniform volume regardless of key pressure, the fortepiano used leather-covered hammers that struck strings with force proportional to the performer's touch. This technological breakthrough allowed composers like C.P.E. Bach and Mozart to incorporate dynamic gradations (crescendo and diminuendo) directly into keyboard scores, giving rise to expressive classical phrasing.`,
    questionText: `Which choice best describes the principal advantage of the fortepiano over the harpsichord as discussed in the text?`,
    options: [
      'It enabled players to vary volume dynamically through key pressure.',
      'It required fewer strings and was significantly cheaper to manufacture.',
      'It eliminated the need for performers to learn musical notation.',
      'It maintained perfect string tuning regardless of humidity changes.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Core Mechanism Identification',
    explanation: {
      passageDeconstruction: `Harpsichord plucked strings at uniform volume. Fortepiano hammered strings with force proportional to touch, enabling dynamic volume changes (crescendo/diminuendo).`,
      correctReasoning: `Option A accurately states the primary advantage noted in the passage.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'It required fewer strings and was significantly cheaper to manufacture.', trapType: 'Unmentioned Economic Factor', whyIncorrect: 'Cost and string counts are not mentioned.' },
        { optionIndex: 2, optionText: 'It eliminated the need for performers to learn musical notation.', trapType: 'Absurd Extrapolation', whyIncorrect: 'Composers wrote dynamic scores; notation was still required.' },
        { optionIndex: 3, optionText: 'It maintained perfect string tuning regardless of humidity changes.', trapType: 'Unmentioned Technical Detail', whyIncorrect: 'Tuning stability is not mentioned.' }
      ]
    }
  },
  {
    id: 'm1-ex-42',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In agricultural science, drip irrigation systems deliver water directly to plant roots through a network of narrow tubes and emitters. Compared to traditional flood or overhead sprinkler methods, drip irrigation minimizes water loss from evaporation and wind drift. In dry farming regions, adopting drip systems has reduced agricultural water consumption by up to 50% while simultaneously increasing crop harvest yields.`,
    questionText: `Based on the text, why is drip irrigation more efficient than flood or sprinkler irrigation?`,
    options: [
      'It delivers water straight to plant roots, reducing evaporation and wind drift.',
      'It relies on natural rainfall rather than artificial tubing networks.',
      'It cools the ambient air temperature around crops during heat waves.',
      'It eliminates the need for nitrogen fertilizers in dry soil.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Cause Matching',
    explanation: {
      passageDeconstruction: `Drip irrigation delivers water to roots directly, avoiding water loss from evaporation and wind drift compared to flood/sprinkler methods.`,
      correctReasoning: `Option A directly restates why drip irrigation reduces water waste.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'It relies on natural rainfall rather than artificial tubing networks.', trapType: 'Direct Contradiction', whyIncorrect: 'Text states it uses "a network of narrow tubes and emitters".' },
        { optionIndex: 2, optionText: 'It cools the ambient air temperature around crops during heat waves.', trapType: 'Unmentioned Benefit', whyIncorrect: 'Air cooling is not mentioned in the passage.' },
        { optionIndex: 3, optionText: 'It eliminates the need for nitrogen fertilizers in dry soil.', trapType: 'Scope Shift', whyIncorrect: 'Fertilizers are not discussed in the passage.' }
      ]
    }
  },
  {
    id: 'm1-ex-43',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In marine geology, the discovery of hydrothermal vents in 1977 challenged the long-held assumption that deep-sea sediment transport was purely driven by gravitational settling of surface debris. Scientists observed localized hydrothermal plumes carrying mineral-rich particulate matter hundreds of meters above the seafloor, generating internal hydrothermal eddies. These rising plumes redistribute copper, zinc, and iron across ocean basins, serving as a major vector for chemical exchange between Earth's interior mantle and the global ocean system.`,
    questionText: `Which choice best states the main idea of the passage?`,
    options: [
      'Hydrothermal plumes transport mantle minerals into ocean basins, altering views on ocean chemical transport.',
      'Gravitational settling remains the sole mechanism for mineral transport in deep oceanic waters.',
      'Hydrothermal vents have permanently stopped copper and zinc from dissolving in seawater.',
      'Surface debris settling is more important for mineral distribution than hydrothermal plumes.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Main Idea Synthesis',
    explanation: {
      passageDeconstruction: `Passage shows hydrothermal vents challenged old views of gravitational settling by demonstrating rising mineral plumes that spread mantle metals across ocean basins.`,
      correctReasoning: `Option A synthesizes both the mechanism (mineral plumes) and the broader significance (altering views on chemical exchange).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'Gravitational settling remains the sole mechanism for mineral transport in deep oceanic waters.', trapType: 'Direct Contradiction', whyIncorrect: 'The passage explicitly states this assumption was challenged by hydrothermal plumes.' },
        { optionIndex: 2, optionText: 'Hydrothermal vents have permanently stopped copper and zinc from dissolving in seawater.', trapType: 'Reversal Trap', whyIncorrect: 'Vents *redistribute* copper and zinc into seawater, not stop them.' },
        { optionIndex: 3, optionText: 'Surface debris settling is more important for mineral distribution than hydrothermal plumes.', trapType: 'Unsupported Comparison', whyIncorrect: 'The text highlights the major role of plumes without claiming surface settling is superior.' }
      ]
    }
  },
  {
    id: 'm1-ex-44',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In animal behavior, European honeybees communicate the location of distant food sources using a specialized movement called the "waggle dance." Performed inside the dark hive on vertical honeycombs, the angle of the bee's dance relative to vertical indicates the direction of the flowers relative to the sun. Furthermore, the duration of the waggle phase correlates directly with the distance from the hive to the food patch, allowing nestmates to navigate accurately.`,
    questionText: `According to the text, how does a honeybee indicate the distance of a food source during the waggle dance?`,
    options: [
      'By altering the duration of the dance’s waggle phase.',
      'By changing the color of nectar brought back to the hive.',
      'By buzzing at different pitch frequencies during flight.',
      'By flying in concentric circles around the hive entrance.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Fact Isolation (Distance vs Direction)',
    explanation: {
      passageDeconstruction: `Direction is shown by the dance angle relative to vertical. Distance is shown by the duration of the waggle phase.`,
      correctReasoning: `Option A correctly connects waggle phase duration to food distance.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'By changing the color of nectar brought back to the hive.', trapType: 'Fabricated Indicator', whyIncorrect: 'Nectar color is not mentioned.' },
        { optionIndex: 2, optionText: 'By buzzing at different pitch frequencies during flight.', trapType: 'Fabricated Indicator', whyIncorrect: 'Buzzing pitches are not mentioned.' },
        { optionIndex: 3, optionText: 'By flying in concentric circles around the hive entrance.', trapType: 'Fabricated Indicator', whyIncorrect: 'The dance happens inside the dark hive on comb, not in circles outside.' }
      ]
    }
  },
  {
    id: 'm1-ex-45',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In economic history, the enclosure movement in eighteenth-century Britain transformed rural agriculture by privatizing formerly communal pasture land. Supporters argued that consolidation allowed wealthy landowners to invest in technological innovations like seed drills and selective breeding, which increased food production. However, social historians emphasize that enclosure displaced hundreds of thousands of smallholder farmers and agricultural laborers, forcing them off ancestral lands and driving rural poverty that fueled urban factory migration.`,
    questionText: `Which choice best describes the dual impact of the enclosure movement as presented in the text?`,
    options: [
      'It increased agricultural output through technological investment while displacing small farmers and driving rural poverty.',
      'It eliminated urban factory jobs while distributing communal pastures equally among smallholder farmers.',
      'It caused a nationwide famine by banning selective breeding and technological innovation.',
      'It preserved ancestral land rights for smallholder laborers while reducing food production.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Dual-Perspective Synthesis',
    explanation: {
      passageDeconstruction: `Passage contrasts two sides: landowners invested in tech to raise food yields (positive output), but small farmers were displaced and forced into poor urban factory labor (negative social impact).`,
      correctReasoning: `Option A accurately synthesizes both the economic yield increase and the negative social displacement.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'It eliminated urban factory jobs while distributing communal pastures equally among smallholder farmers.', trapType: 'Direct Reversal', whyIncorrect: 'It drove migration *to* urban factories and *privatized* communal land.' },
        { optionIndex: 2, optionText: 'It caused a nationwide famine by banning selective breeding and technological innovation.', trapType: 'Direct Contradiction', whyIncorrect: 'Innovations increased food production.' },
        { optionIndex: 3, optionText: 'It preserved ancestral land rights for smallholder laborers while reducing food production.', trapType: 'Direct Contradiction', whyIncorrect: 'Land rights were stripped and food production increased.' }
      ]
    }
  },
  {
    id: 'm1-ex-46',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In astronomy, exoplanet detection often relies on the transit method, where scientists monitor stars for periodic dips in brightness. When an orbiting planet passes directly between its host star and Earth, it blocks a tiny fraction of the star's light. By measuring the depth and frequency of these light dips, astronomers can determine the planet's size and orbital period.`,
    questionText: `According to the text, what causes the dip in a star’s brightness during a transit event?`,
    options: [
      'An orbiting exoplanet passing directly between its host star and Earth.',
      'Solar flares erupting from the surface of distant red dwarf stars.',
      'Interstellar dust clouds absorbing radiation in outer space.',
      'The host star collapsing into a white dwarf at the end of its lifespan.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Cause Lookup',
    explanation: {
      passageDeconstruction: `The light dip occurs when an exoplanet passes between its host star and Earth, blocking light.`,
      correctReasoning: `Option A directly states the cause of light dips during transit.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'Solar flares erupting from the surface of distant red dwarf stars.', trapType: 'Unmentioned Event', whyIncorrect: 'Flares are not mentioned as causing transit light dips.' },
        { optionIndex: 2, optionText: 'Interstellar dust clouds absorbing radiation in outer space.', trapType: 'Unmentioned Mechanism', whyIncorrect: 'Dust clouds are not discussed.' },
        { optionIndex: 3, optionText: 'The host star collapsing into a white dwarf at the end of its lifespan.', trapType: 'Catastrophic Extrapolation', whyIncorrect: 'Star collapse is not the cause of periodic exoplanet transits.' }
      ]
    }
  },
  {
    id: 'm1-ex-47',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In neurobiology, circadian rhythms are 24-hour biological cycles governed by the suprachiasmatic nucleus (SCN) in the hypothalamus. The SCN receives direct light input from specialized intrinsically photosensitive retinal ganglion cells (ipRGCs) in the eye. When blue wavelengths of sunlight stimulate ipRGCs, the SCN suppresses the pineal gland's production of melatonin, promoting daytime alertness. Conversely, the absence of light signals triggers melatonin release, inducing sleepiness.`,
    questionText: `Which choice best states how exposure to blue light wavelengths affects melatonin production according to the text?`,
    options: [
      'It stimulates the SCN to suppress melatonin production by the pineal gland.',
      'It triggers the pineal gland to release maximum levels of melatonin immediately.',
      'It bypasses the eye and acts directly on the suprachiasmatic nucleus.',
      'It permanently damages ipRGC cells, preventing natural sleep cycles.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Chain-of-Events Precision Matching',
    explanation: {
      passageDeconstruction: `Blue light hits ipRGCs -> signals SCN -> SCN suppresses pineal gland's melatonin production -> promotes alertness.`,
      correctReasoning: `Option A correctly traces the mechanism: blue light causes SCN to suppress melatonin.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'It triggers the pineal gland to release maximum levels of melatonin immediately.', trapType: 'Opposite Action', whyIncorrect: 'Blue light suppresses melatonin; absence of light triggers melatonin release.' },
        { optionIndex: 2, optionText: 'It bypasses the eye and acts directly on the suprachiasmatic nucleus.', trapType: 'Direct Contradiction', whyIncorrect: 'Text states blue light stimulates ipRGC cells *in the eye*.' },
        { optionIndex: 3, optionText: 'It permanently damages ipRGC cells, preventing natural sleep cycles.', trapType: 'Extreme Negative Distortion', whyIncorrect: 'Natural light stimulation is healthy regulation, not permanent cell damage.' }
      ]
    }
  },
  {
    id: 'm1-ex-48',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Easy/Medium Module',
    passage: `In architectural history, the gothic style of the 12th century introduced flying buttresses—external masonry arches that redistributed the heavy outward thrust of stone vaulted ceilings down into ground foundations. By removing the weight burden from interior walls, flying buttresses allowed architects to construct much taller cathedrals with thin walls filled with massive stained-glass windows, flooding interiors with colored natural light.`,
    questionText: `Based on the text, what structural change became possible because of flying buttresses?`,
    options: [
      'Architects could build taller buildings with thinner walls and large stained-glass windows.',
      'Cathedrals required thick windowless stone walls to support vaulted roofs.',
      'Interior walls had to be built twice as thick to absorb outward thrust.',
      'Building heights were restricted to protect ground foundations from cracking.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Direct Outcome Matching',
    explanation: {
      passageDeconstruction: `Flying buttresses transferred weight outwards, enabling taller cathedrals with thin walls and large stained-glass windows.`,
      correctReasoning: `Option A accurately states the structural possibility introduced by flying buttresses.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'Cathedrals required thick windowless stone walls to support vaulted roofs.', trapType: 'Pre-Gothic Trait / Direct Contradiction', whyIncorrect: 'Flying buttresses *eliminated* the need for thick windowless walls.' },
        { optionIndex: 2, optionText: 'Interior walls had to be built twice as thick to absorb outward thrust.', trapType: 'Opposite Structural Action', whyIncorrect: 'Weight was removed from interior walls.' },
        { optionIndex: 3, optionText: 'Building heights were restricted to protect ground foundations from cracking.', trapType: 'Direct Contradiction', whyIncorrect: 'Flying buttresses enabled *taller* cathedrals.' }
      ]
    }
  },
  {
    id: 'm1-ex-49',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In cognitive ergonomics, the "gulf of execution" describes the barrier users face when trying to figure out how to operate a device. Usability expert Don Norman notes that when a device lacks clear affordances—visual cues that signal how an object should be interacted with, such as a flat plate suggesting "push"—users must rely on trial and error. Well-designed interfaces bridge the gulf of execution by providing intuitive affordances that immediately convey correct operational actions without requiring instruction manuals.`,
    questionText: `Which choice best states how intuitive affordances improve device usability according to Norman?`,
    options: [
      'They provide clear visual cues that instantly signal how to interact with the device.',
      'They force users to read complete instruction manuals before operating hardware.',
      'They eliminate the need for physical controls like buttons or door handles.',
      'They increase trial-and-error experimentation during device operation.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Definition & Role Isolation',
    explanation: {
      passageDeconstruction: `Gulf of execution = user confusion. Lacking affordances = user relies on trial and error. Intuitive affordances = visual cues signaling how to interact without manuals.`,
      correctReasoning: `Option A restates the primary function of intuitive affordances explained in the text.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'They force users to read complete instruction manuals before operating hardware.', trapType: 'Direct Contradiction', whyIncorrect: 'Text states intuitive affordances convey actions "without requiring instruction manuals".' },
        { optionIndex: 2, optionText: 'They eliminate the need for physical controls like buttons or door handles.', trapType: 'Distorted Claim', whyIncorrect: 'Affordances *are* visual cues on physical controls (e.g. flat plate for pushing).' },
        { optionIndex: 3, optionText: 'They increase trial-and-error experimentation during device operation.', trapType: 'Reversal Trap', whyIncorrect: 'Intuitive affordances *prevent* trial-and-error.' }
      ]
    }
  },
  {
    id: 'm1-ex-50',
    moduleNumber: 1,
    subskill: 'Central Ideas & Details',
    difficulty: 'Hard Module',
    passage: `In historical linguistics, the comparative method enables scholars to reconstruct extinct ancestral languages by systematically comparing phonological and grammatical patterns across descendant "daughter" languages. By identifying regular sound correspondences—such as Latin "p" systematically corresponding to English "f" in cognate words (e.g., *pater* and *father*)—linguists can establish genetic language family relationships and reconstruct proto-languages spoken thousands of years before the invention of writing.`,
    questionText: `Which choice best states the primary purpose of the comparative method in historical linguistics?`,
    options: [
      'To reconstruct extinct unwritten proto-languages by comparing sound patterns in descendant languages.',
      'To prove that all modern languages originated from written Latin manuscripts.',
      'To eliminate differences between spoken dialect accents in contemporary speech.',
      'To demonstrate that sound changes occur randomly across language families.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Primary Purpose Isolation',
    explanation: {
      passageDeconstruction: `Comparative method compares patterns across daughter languages (sound correspondences) to reconstruct extinct proto-languages before writing.`,
      correctReasoning: `Option A accurately states the primary purpose outlined in the text.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'To prove that all modern languages originated from written Latin manuscripts.', trapType: 'Extreme Distortion', whyIncorrect: 'Latin is given as one example of a daughter/cognate language, not the origin of all languages.' },
        { optionIndex: 2, optionText: 'To eliminate differences between spoken dialect accents in contemporary speech.', trapType: 'Prescriptive Myth Trap', whyIncorrect: 'Linguistics studies historical language relationships, not eliminating modern accents.' },
        { optionIndex: 3, optionText: 'To demonstrate that sound changes occur randomly across language families.', trapType: 'Direct Contradiction', whyIncorrect: 'Method relies on *regular* sound correspondences, not random changes.' }
      ]
    }
  }
];
