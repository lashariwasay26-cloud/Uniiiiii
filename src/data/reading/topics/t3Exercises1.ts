import { ReadingQuestion } from '../readingTypes';

export const T3_EXERCISES_PART1: ReadingQuestion[] = [
  {
    id: 't3-ex-1',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In marine biology, bioluminescent signaling in deep-sea jellyfish was long assumed to serve solely as a predator deterrent. However, marine ecologist Dr. Hiroshi Tanaka observed that *Atolla* jellyfish flash bright blue bioluminescent rings when physically grasped by a predator. This flashing attracts even larger secondary apex predators, which consume the primary attacker and allow the jellyfish to escape—a phenomenon dubbed the "burglar alarm" effect.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To present a newly observed function of bioluminescence that expands upon traditional assumptions.',
      'To argue that *Atolla* jellyfish are the primary apex predators of deep-sea ocean zones.',
      'To refute the claim that deep-sea organisms utilize bioluminescent signaling.',
      'To describe how marine ecologists record high-speed video footage in abyssal waters.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage moves from traditional assumption (bioluminescence = pure direct predator deterrent) to Dr. Tanaka's discovery ("burglar alarm" effect attracting apex predators to eat the attacker).`,
      correctReasoning: `Option A accurately states the purpose: presenting a newly observed function expanding upon traditional assumptions.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To present a newly observed function of bioluminescence...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the passage goal.' },
        { optionIndex: 1, optionText: 'To argue that *Atolla* jellyfish are the primary apex predators...', trapType: 'Role Reversal', whyIncorrect: 'Jellyfish attract apex predators, but are not apex predators themselves.' },
        { optionIndex: 2, optionText: 'To refute the claim that deep-sea organisms utilize bioluminescent...', trapType: 'Direct Contradiction', whyIncorrect: 'The text confirms and details bioluminescence.' },
        { optionIndex: 3, optionText: 'To describe how marine ecologists record high-speed video...', trapType: 'Unmentioned Technique', whyIncorrect: 'Video technology is not mentioned.' }
      ]
    }
  },
  {
    id: 't3-ex-2',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `Literary critics frequently class Charlotte Brontë's 1847 novel *Jane Eyre* as a classic Gothic romance. While Gothic elements like secluded manors and mysterious secrets are prominent, Brontë's primary focus is realistic social critique. Through Jane's sharp commentary on Victorian governess employment, female economic dependency, and rigid class hierarchies, the novel functions fundamentally as a realistic social novel masked in Gothic conventions.`,
    questionText: `Which choice best describes the overall structure of the text?`,
    options: [
      'It identifies a common genre classification for a novel and argues that its primary function lies in a different literary mode.',
      'It compares Brontë\'s style with that of her contemporaries and proves her superiority in Gothic fiction.',
      'It summarizes the romantic plot of *Jane Eyre* and explains why Victorian readers rejected it.',
      'It outlines nineteenth-century governess employment conditions and attributes them to Gothic literature.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Common genre class (Gothic romance) -> 2. Counter-thesis (primary focus is realistic social critique of class and female dependency) -> 3. Synthesis (realistic novel masked in Gothic conventions).`,
      correctReasoning: `Option A perfectly describes the structure: identifying a common genre classification and arguing for a different primary literary mode.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It identifies a common genre classification for a novel...', trapType: 'Correct Structural Description', whyIncorrect: 'Matches paragraph structure precisely.' },
        { optionIndex: 1, optionText: 'It compares Brontë\'s style with that of her contemporaries...', trapType: 'Scope Expansion', whyIncorrect: 'No comparison to contemporary writers is made.' },
        { optionIndex: 2, optionText: 'It summarizes the romantic plot... and explains why Victorian readers rejected it.', trapType: 'Fabricated History', whyIncorrect: 'Plot summary and reader rejection are not included.' },
        { optionIndex: 3, optionText: 'It outlines governess employment conditions and attributes them to...', trapType: 'False Cause', whyIncorrect: 'Gothic literature did not cause governess employment conditions.' }
      ]
    }
  },
  {
    id: 't3-ex-3',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In materials science, carbon nanotube composites possess extraordinary tensile strength, but commercial production has been hindered by difficulty in achieving uniform dispersion within polymer matrices. *In 2023, chemical engineers solved this agglomeration issue by functionalizing the nanotube surfaces with carboxyl groups, enabling molecular bonding with matrix polymers.* This chemical modification allowed uniform distribution, increasing composite fracture toughness by 400%.`,
    questionText: `Which choice best describes the function of the highlighted sentence in the text?`,
    options: [
      'It details a chemical solution that resolves a manufacturing obstacle mentioned earlier.',
      'It provides empirical data refuting the reported tensile strength of carbon nanotubes.',
      'It compares carboxyl group functionalization with traditional polymer matrix synthesis.',
      'It introduces a theoretical model that predicts future composite material behavior.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentence 1 describes a manufacturing obstacle (agglomeration/difficulty achieving uniform dispersion). Sentence 2 (highlighted) describes how chemical engineers solved it using carboxyl group functionalization. Sentence 3 shows the result (uniform distribution, 400% toughness increase).`,
      correctReasoning: `Option A accurately states the function: detailing a chemical solution that resolves the obstacle mentioned earlier.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It details a chemical solution that resolves a manufacturing obstacle...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately describes how the sentence resolves sentence 1.' },
        { optionIndex: 1, optionText: 'It provides empirical data refuting the reported tensile strength...', trapType: 'Direct Contradiction', whyIncorrect: 'The text confirms tensile strength gains.' },
        { optionIndex: 2, optionText: 'It compares carboxyl group functionalization with traditional...', trapType: 'Missing Comparison', whyIncorrect: 'No comparative breakdown of traditional synthesis methods is presented.' },
        { optionIndex: 3, optionText: 'It introduces a theoretical model that predicts future...', trapType: 'Theoretical vs Applied Trap', whyIncorrect: 'The sentence describes an actual realized chemical modification, not a theoretical future model.' }
      ]
    }
  },
  {
    id: 't3-ex-4',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In urban transport planning, cities often expand bus routes to reduce traffic congestion. However, transport analyst Dr. Elena Rostova demonstrated that expanding bus service without dedicated bus lanes produces negligible reductions in commuter car use. In a comparative study of six European cities, Rostova found that bus routes sharing lanes with private vehicles experienced delays that discouraged transit adoption, whereas dedicated bus rapid transit (BRT) lanes increased ridership by 60%.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To highlight research showing that dedicated lanes are essential for bus expansion to successfully reduce traffic.',
      'To advocate for replacing all city bus networks with subterranean subway systems.',
      'To argue that private vehicle owners should be barred from urban city centers.',
      'To demonstrate that European cities experience higher traffic congestion than cities on other continents.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage presents a common practice (expanding bus routes) and uses Dr. Rostova's study to show that without dedicated lanes, expansion fails, whereas dedicated lanes increase ridership by 60%.`,
      correctReasoning: `Option A accurately captures the main purpose: highlighting research that shows dedicated lanes are essential for success.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To highlight research showing that dedicated lanes are essential...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately states the core takeaway.' },
        { optionIndex: 1, optionText: 'To advocate for replacing all city bus networks with subterranean subways...', trapType: 'Unmentioned Alternative', whyIncorrect: 'Subways are never mentioned.' },
        { optionIndex: 2, optionText: 'To argue that private vehicle owners should be barred...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Barring vehicles is not advocated.' },
        { optionIndex: 3, optionText: 'To demonstrate that European cities experience higher traffic...', trapType: 'Unsupported Comparison', whyIncorrect: 'Intercontinental congestion comparison is not made.' }
      ]
    }
  },
  {
    id: 't3-ex-5',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `While eighteenth-century political theorist Thomas Hobbes argued that sovereign authority must be absolute to prevent chaotic state-of-nature conflict, John Locke proposed a contrasting foundational framework. Locke asserted that government legitimate authority derives strictly from a social contract designed to protect inherent natural rights to life, liberty, and property. Should a sovereign breach this trust, Locke maintained that citizens possess a moral right to alter or abolish the government.`,
    questionText: `Which choice best describes the relationship between Hobbes and Locke as presented in the text?`,
    options: [
      'The text contrasts Hobbes\'s defense of absolute sovereignty with Locke\'s theory of natural rights and conditional governmental legitimacy.',
      'The text uses Locke\'s writings to prove that Hobbes\'s political philosophies were influenced by early American colonial laws.',
      'The text demonstrates that Hobbes and Locke held identical views regarding citizen rebellion against sovereigns.',
      'The text shows that Locke abandoned his natural rights framework after reviewing Hobbes\'s essays.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Relationship & Structural Linkage Analysis',
    explanation: {
      passageDeconstruction: `Text presents Hobbes (absolute sovereignty to prevent chaos) and explicitly introduces Locke as proposing a "contrasting foundational framework" (conditional authority to protect natural rights, right to abolish breaching government).`,
      correctReasoning: `Option A accurately describes the contrasting relationship established between their political philosophies.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'The text contrasts Hobbes\'s defense of absolute sovereignty...', trapType: 'Correct Structural Relationship', whyIncorrect: 'Accurately captures the contrast.' },
        { optionIndex: 1, optionText: 'The text uses Locke\'s writings to prove that Hobbes\'s political...', trapType: 'Historical Invention', whyIncorrect: 'American colonial laws are not mentioned.' },
        { optionIndex: 2, optionText: 'The text demonstrates that Hobbes and Locke held identical views...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states they held contrasting frameworks.' },
        { optionIndex: 3, optionText: 'The text shows that Locke abandoned his natural rights framework...', trapType: 'Direct Contradiction', whyIncorrect: 'Locke developed and maintained his natural rights framework.' }
      ]
    }
  },
  {
    id: 't3-ex-6',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In plant biology, Venus flytraps capture insect prey using rapid leaf closure triggered by sensitive trigger hairs inside their traps. To prevent false alarms caused by falling raindrops or windblown debris, the plant employs a short-term electrical memory mechanism: leaf closure is activated only when a second trigger hair is touched within twenty seconds of the first.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To explain how Venus flytraps prevent wasted energy from false trap closures.',
      'To compare the digestion speeds of Venus flytraps and pitcher plants.',
      'To prove that plant trigger hairs respond exclusively to insect walking frequencies.',
      'To advocate for cultivating Venus flytraps in greenhouse environments.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Passage explains Venus flytrap mechanism (short-term electrical memory requiring two hair touches within 20 seconds) designed specifically to avoid false alarms from rain/debris.`,
      correctReasoning: `Option A accurately states the purpose: explaining how the trap avoids wasted energy from false closures.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To explain how Venus flytraps prevent wasted energy...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the explanation goal.' },
        { optionIndex: 1, optionText: 'To compare the digestion speeds of Venus flytraps and pitcher plants.', trapType: 'Unmentioned Comparison', whyIncorrect: 'Pitcher plants are not mentioned.' },
        { optionIndex: 2, optionText: 'To prove that plant trigger hairs respond exclusively to insect...', trapType: 'Extreme Absolute Trap', whyIncorrect: 'Text says two touches activate it, not that hairs distinguish insect species.' },
        { optionIndex: 3, optionText: 'To advocate for cultivating Venus flytraps...', trapType: 'Prescriptive Policy Trap', whyIncorrect: 'Greenhouse cultivation is not advocated.' }
      ]
    }
  },
  {
    id: 't3-ex-7',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `In architectural history, mid-twentieth-century Brutalism was defined by raw concrete surfaces and exposed structural elements, intended to reflect democratic transparency and social utility. However, by the 1880s, public perception had shifted drastically; critics vilified Brutalist civic buildings as oppressive, cold, and dehumanizing. This aesthetic backlash led to the demolition of numerous iconic structures, illustrating how architectural meaning transforms over time based on changing cultural values.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'It outlines the original intentions behind an architectural style, describes a shift in public reception, and draws a broader conclusion about cultural aesthetics.',
      'It compares two contemporary architectural movements and demonstrates why one gained popularity over the other.',
      'It details the engineering flaws of concrete construction and proposes modern repair techniques.',
      'It defends Brutalist architecture against modern critics by citing historical construction costs.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Original intentions of Brutalism (democratic transparency, social utility) -> 2. Shift in public reception (vilified as oppressive, demolished) -> 3. Broader conclusion (architectural meaning transforms with cultural values).`,
      correctReasoning: `Option A perfectly mirrors this 3-step organization.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It outlines the original intentions behind an architectural style...', trapType: 'Correct Structural Overview', whyIncorrect: 'Accurately captures paragraph flow.' },
        { optionIndex: 1, optionText: 'It compares two contemporary architectural movements...', trapType: 'Missing Second Movement', whyIncorrect: 'Only Brutalism is discussed.' },
        { optionIndex: 2, optionText: 'It details the engineering flaws of concrete construction...', trapType: 'Scope Swap', whyIncorrect: 'Aesthetic reception is discussed, not engineering flaws.' },
        { optionIndex: 3, optionText: 'It defends Brutalist architecture against modern critics by citing...', trapType: 'Fabricated Evidence', whyIncorrect: 'Construction costs are never cited.' }
      ]
    }
  },
  {
    id: 't3-ex-8',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In astrophysics, white dwarfs are dense stellar remnants that have exhausted their nuclear fuel. Over billions of years, white dwarfs slowly radiate their residual thermal energy into space, gradually cooling into dark, inert masses known as black dwarfs. *Because the time required for a white dwarf to cool into a black dwarf exceeds the current age of the universe (13.8 billion years), scientists calculate that no black dwarfs yet exist in the cosmos.*`,
    questionText: `Which choice best describes the function of the final sentence in the passage?`,
    options: [
      'It explains why a theoretical stellar object has not yet been observationally detected.',
      'It provides empirical measurements confirming the discovery of the first black dwarf.',
      'It refutes the theoretical model predicting white dwarf cooling rates.',
      'It argues that the estimated age of the universe must be revised upward.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Sentence Functional Role Analysis',
    explanation: {
      passageDeconstruction: `Sentences 1-2 define white dwarfs and their eventual cooling into black dwarfs. Sentence 3 (final sentence) notes that since required cooling time exceeds 13.8 billion years, no black dwarfs exist yet.`,
      correctReasoning: `Option A accurately states why black dwarfs have not been detected (they take longer to form than the current age of the universe).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It explains why a theoretical stellar object has not yet been...', trapType: 'Correct Functional Role', whyIncorrect: 'Accurately states the explanatory function.' },
        { optionIndex: 1, optionText: 'It provides empirical measurements confirming the discovery...', trapType: 'Direct Contradiction', whyIncorrect: 'The sentence states no black dwarfs yet exist.' },
        { optionIndex: 2, optionText: 'It refutes the theoretical model predicting white dwarf cooling...', trapType: 'Direct Contradiction', whyIncorrect: 'The calculation relies on and confirms the cooling model.' },
        { optionIndex: 3, optionText: 'It argues that the estimated age of the universe must be revised...', trapType: 'Flop Trap', whyIncorrect: 'It uses the established 13.8 billion year age to deduce black dwarf absence, rather than challenging the age.' }
      ]
    }
  },
  {
    id: 't3-ex-9',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Hard Module',
    passage: `While early nineteenth-century musicologists framed Ludwig van Beethoven's late string quartets as unpolished, erratic compositions resulting from his total deafness, late twentieth-century analysts re-evaluated these works as revolutionary structural masterpieces. By breaking away from traditional four-movement classical forms and introducing complex contrapuntal fugues, Beethoven dismantled classical constraints, paving the way for nineteenth-century Romanticism.`,
    questionText: `Which choice best states the main purpose of the text?`,
    options: [
      'To describe how scholarly opinion shifted regarding Beethoven\'s late string quartets and highlight their innovative structural impact.',
      'To prove that Beethoven\'s deafness hindered his ability to compose complex contrapuntal fugues.',
      'To compare Beethoven\'s early string quartets with his late symphonies in terms of movement structure.',
      'To argue that nineteenth-century Romanticism caused Beethoven to abandon traditional classical music forms.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Rhetorical Purpose Mapping',
    explanation: {
      passageDeconstruction: `Contrast: early 19th century view (erratic, unpolished due to deafness) vs late 20th century view (revolutionary structural masterpieces paving the way for Romanticism).`,
      correctReasoning: `Option A captures both the shift in scholarly opinion and the emphasis on structural innovation.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'To describe how scholarly opinion shifted regarding Beethoven\'s...', trapType: 'Correct Main Purpose', whyIncorrect: 'Accurately captures the overall goal.' },
        { optionIndex: 1, optionText: 'To prove that Beethoven\'s deafness hindered his ability...', trapType: 'Direct Contradiction', whyIncorrect: 'Modern analysts view the works as masterpieces, refuting the "hindrance" theory.' },
        { optionIndex: 2, optionText: 'To compare Beethoven\'s early string quartets with his late symphonies...', trapType: 'Scope Swap', whyIncorrect: 'Late quartets are discussed, not early quartets vs late symphonies.' },
        { optionIndex: 3, optionText: 'To argue that nineteenth-century Romanticism caused Beethoven...', trapType: 'Chronological Inversion', whyIncorrect: 'Beethoven\'s late quartets paved the way for Romanticism, not vice versa.' }
      ]
    }
  },
  {
    id: 't3-ex-10',
    moduleNumber: 1,
    subskill: 'Text Structure & Purpose',
    difficulty: 'Easy/Medium Module',
    passage: `In marine ecology, sea otter population recovery in the Pacific Northwest was long anticipated to restore nearshore kelp forests. However, ecologist Dr. Marcus Vance discovered that in areas with high populations of invasive European green crabs, sea otters preferred preying on crabs rather than sea urchins. Because sea urchin populations remained uncontrolled, kelp forest recovery was delayed despite the return of otters.`,
    questionText: `Which choice best describes the overall organization of the passage?`,
    options: [
      'An expected ecological outcome is presented, an unexpected research finding is introduced, and the mechanism delaying that outcome is explained.',
      'A marine conservation policy is criticized, alternative legislation is drafted, and voting results are summarized.',
      'Two invasive species are compared in terms of environmental damage, and an eradication strategy is proposed.',
      'A historical ecological disaster is described, and a successful recovery project is celebrated.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Structural Overview Mapping',
    explanation: {
      passageDeconstruction: `Structure: 1. Anticipated outcome (otter recovery restores kelp) -> 2. Unexpected finding (otters eat invasive crabs instead of urchins) -> 3. Mechanism explained (urchins remain uncontrolled, delaying kelp recovery).`,
      correctReasoning: `Option A accurately states this 3-part organization.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'An expected ecological outcome is presented, an unexpected...', trapType: 'Correct Structural Overview', whyIncorrect: 'Perfect match to text flow.' },
        { optionIndex: 1, optionText: 'A marine conservation policy is criticized, alternative legislation...', trapType: 'Misidentified Genre', whyIncorrect: 'Legislation and voting results are not mentioned.' },
        { optionIndex: 2, optionText: 'Two invasive species are compared in terms of environmental damage...', trapType: 'Scope Swap', whyIncorrect: 'Only green crabs are identified as invasive.' },
        { optionIndex: 3, optionText: 'A historical ecological disaster is described, and a successful...', trapType: 'Flop Trap', whyIncorrect: 'The text explains why kelp recovery was delayed, not celebrating a completed recovery.' }
      ]
    }
  }
];
