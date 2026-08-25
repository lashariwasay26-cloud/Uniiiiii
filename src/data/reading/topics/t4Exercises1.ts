import { ReadingQuestion } from '../readingTypes';

export const T4_EXERCISES_PART1: ReadingQuestion[] = [
  {
    id: 't4-ex-1',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In marine conservation, establishing no-take marine protected areas (MPAs) is regarded as the gold standard for fish population recovery. Closing marine zones to commercial fishing allows breeding stocks to mature, increasing average fish size and driving larval spillover into adjacent fishing grounds.

Text 2:
While no-take MPAs increase local fish density, fisheries economist Dr. Hiroshi Sato argues that closing fishing grounds without compensating local coastal communities simply displaces fishing effort into unregulated nearby waters. Sato advocates for co-managed territorial user-rights fisheries (TURFs), which grant local communities exclusive harvest rights to encourage sustainable self-policing.`,
    questionText: `Based on the texts, how does Dr. Sato\'s perspective in Text 2 differ from the perspective presented in Text 1?`,
    options: [
      'Dr. Sato emphasizes the community displacement risks of uncompensated MPAs and advocates for TURFs, whereas Text 1 focuses on the biological benefits of no-take zones.',
      'Dr. Sato argues that commercial fishing should be banned in all international waters, whereas Text 1 opposes fishing restrictions.',
      'Dr. Sato claims that fish populations decline inside no-take MPAs, whereas Text 1 claims fish densities remain unchanged.',
      'Dr. Sato advocates replacing community co-management with automated satellite surveillance.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 focuses on biological benefits of no-take MPAs (mature breeding stocks, spillover). Text 2 acknowledges local fish density gains, but warns of effort displacement if uncompensated, proposing TURFs for community self-policing.`,
      correctReasoning: `Option A accurately captures the contrast between Sato's focus on community rights/displacement vs Text 1's focus on biological recovery.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Sato emphasizes the community displacement risks...', trapType: 'Correct Comparative Contrast', whyIncorrect: 'Accurately characterizes both viewpoints.' },
        { optionIndex: 1, optionText: 'Dr. Sato argues that commercial fishing should be banned in all...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Sato advocates TURFs (community user rights), not a global total fishing ban.' },
        { optionIndex: 2, optionText: 'Dr. Sato claims that fish populations decline inside no-take MPAs...', trapType: 'Direct Contradiction', whyIncorrect: 'Sato explicitly agrees that MPAs increase local fish density.' },
        { optionIndex: 3, optionText: 'Dr. Sato advocates replacing community co-management...', trapType: 'Direct Contradiction', whyIncorrect: 'Sato explicitly advocates for community co-managed TURFs.' }
      ]
    }
  },
  {
    id: 't4-ex-2',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In behavioral psychology, positive reinforcement—rewarding desired behaviors with praise or incentives—is recognized as the most durable method for habit formation in children. Studies show that positive reinforcement builds intrinsic motivation and long-term behavioral compliance.

Text 2:
While positive reinforcement encourages helpful habits, educational researcher Dr. Laura Gomez warns that continuous material rewards (such as toys or money) can inadvertently create the "overjustification effect." Gomez\'s experiments showed that when material rewards were discontinued, children\'s intrinsic interest in performing the task plummeted below baseline levels.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'Positive reinforcement can influence children\'s behavioral habit formation.',
      'Continuous material rewards are the only way to sustain long-term intrinsic motivation.',
      'Children should be punished severely whenever they fail to comply with rules.',
      'Praise and monetary rewards produce identical psychological outcomes in all contexts.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 states positive reinforcement is effective for habit formation. Text 2 grants "While positive reinforcement encourages helpful habits...", acknowledging its influence while warning against continuous material rewards. Both agree positive reinforcement influences habit formation.`,
      correctReasoning: `Option A accurately states the shared baseline premise accepted by both texts.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Positive reinforcement can influence children\'s behavioral...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately reflects consensus between both texts.' },
        { optionIndex: 1, optionText: 'Continuous material rewards are the only way to sustain...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 states continuous material rewards destroy intrinsic interest.' },
        { optionIndex: 2, optionText: 'Children should be punished severely whenever...', trapType: 'Unmentioned Negative', whyIncorrect: 'Punishment is not advocated by either text.' },
        { optionIndex: 3, optionText: 'Praise and monetary rewards produce identical psychological outcomes...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 distinguishes praise/intrinsic rewards from continuous material rewards.' }
      ]
    }
  },
  {
    id: 't4-ex-3',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In monetary economics, central banks rely on interest rate reductions to stimulate economic growth during recessions. Lower borrowing costs encourage commercial bank lending, boosting corporate capital investment and consumer spending across the economy.

Text 2:
Macroeconomist Dr. Julian Vance contends that interest rate cuts lose efficacy when interest rates approach zero—a phenomenon known as the "liquidity trap." When interest rates are near zero, commercial banks hoard cash reserves rather than expanding loans, and consumers delay purchases due to deflationary expectations, rendering traditional central bank rate cuts ineffective.`,
    questionText: `Based on the texts, how would Dr. Vance (Text 2) most likely view the central bank strategy described in Text 1?`,
    options: [
      'As a strategy that becomes ineffective when interest rates approach zero during severe liquidity traps.',
      'As a policy that always triggers hyperinflation regardless of prevailing interest rates.',
      'As an innovative approach that eliminates commercial bank cash hoarding.',
      'As a mechanism that works effectively only during periods of rapid economic expansion.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1 describes rate reductions as a standard stimulus tool. Text 2 introduces the limitation: when rates approach zero (liquidity trap), rate cuts fail to stimulate lending or spending.`,
      correctReasoning: `Option A accurately captures Vance's qualification of the strategy described in Text 1.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'As a strategy that becomes ineffective when interest rates...', trapType: 'Correct Specific Qualification', whyIncorrect: 'Accurately reflects Vance\'s liquidity trap argument.' },
        { optionIndex: 1, optionText: 'As a policy that always triggers hyperinflation...', trapType: 'Unmentioned Inflation Claim', whyIncorrect: 'Hyperinflation is not mentioned.' },
        { optionIndex: 2, optionText: 'As an innovative approach that eliminates commercial bank cash hoarding.', trapType: 'Direct Contradiction', whyIncorrect: 'Vance states banks hoard cash during liquidity traps despite low rates.' },
        { optionIndex: 3, optionText: 'As a mechanism that works effectively only during periods of rapid...', trapType: 'Scope Swap', whyIncorrect: 'Rate cuts are intended for recessions, but fail specifically when approaching zero.' }
      ]
    }
  },
  {
    id: 't4-ex-4',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In forestry management, controlled prescribed burns are utilized to clear underbrush and dry leaf litter from forest floors. By removing accumulated combustible biomass during damp spring conditions, prescribed burns prevent disastrous high-intensity summer wildfires.

Text 2:
While prescribed burning reduces ground fuel loads, environmental health researcher Dr. Samuel Park cautions that smoke emissions contain fine particulate matter ($PM_{2.5}$) that poses severe respiratory risks to nearby rural communities. Park advocates combining mechanical brush thinning with restricted, wind-calculated burn windows to minimize smoke exposure.`,
    questionText: `Based on the texts, how does Dr. Park\'s perspective in Text 2 relate to the forestry practice described in Text 1?`,
    options: [
      'Dr. Park acknowledges the fuel-reduction benefit of prescribed burns but recommends mechanical thinning and wind-calculated timing to mitigate health risks.',
      'Dr. Park argues that prescribed burns should be completely banned in favor of unrestricted logging.',
      'Dr. Park proves that leaf litter accumulation has no effect on wildfire intensity.',
      'Dr. Park advocates conducting prescribed burns during peak summer drought periods.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 presents prescribed burns as a preventive tool clearing fuel. Text 2 grants that burns reduce fuel, but warns of smoke $PM_{2.5}$ health risks, advocating mechanical thinning plus wind-calculated burn windows.`,
      correctReasoning: `Option A accurately states Park's nuanced relationship to the practice described in Text 1.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Park acknowledges the fuel-reduction benefit...', trapType: 'Correct Nuanced Relationship', whyIncorrect: 'Accurately reflects Park\'s concession and modification.' },
        { optionIndex: 1, optionText: 'Dr. Park argues that prescribed burns should be completely banned...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Park advocates controlled burn windows combined with thinning, not a total ban.' },
        { optionIndex: 2, optionText: 'Dr. Park proves that leaf litter accumulation has no effect...', trapType: 'Direct Contradiction', whyIncorrect: 'Park agrees that burning reduces ground fuel loads.' },
        { optionIndex: 3, optionText: 'Dr. Park advocates conducting prescribed burns during peak summer...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 notes burns occur in damp spring, and Park cautions against summer risk.' }
      ]
    }
  },
  {
    id: 't4-ex-5',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In quantum physics, Copenhagen interpretation theorists assert that subatomic particles exist in a probabilistic superposition of multiple states until a conscious measurement occurs, at which point the wave function collapses into a single definite physical state.

Text 2:
Physicist Dr. Hugh Everett proposed the Many-Worlds Interpretation, arguing that wave function collapse never occurs. Everett argued that during a quantum measurement, the universe splits into multiple non-interacting branches, with each possible measurement outcome realized in its own parallel physical universe.`,
    questionText: `Based on the texts, what is the primary point of disagreement between Copenhagen interpretation theorists (Text 1) and Dr. Everett (Text 2)?`,
    options: [
      'Whether the quantum wave function physically collapses upon measurement or branches into parallel universes.',
      'Whether subatomic particles are composed of chemical elements.',
      'Whether light speed travel can be achieved in classical physics.',
      'Whether quantum measurement requires nuclear particle accelerators.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Disagreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1: Wave function COLLAPSES into a single definite state upon measurement. Text 2: Collapse NEVER occurs; universe SPLITS into parallel branches where all outcomes are realized.`,
      correctReasoning: `Option A accurately captures the direct point of disagreement: collapse vs branching.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Whether the quantum wave function physically collapses...', trapType: 'Correct Point of Disagreement', whyIncorrect: 'Accurately pinpoints the core conflict.' },
        { optionIndex: 1, optionText: 'Whether subatomic particles are composed of chemical elements.', trapType: 'Unmentioned Issue', whyIncorrect: 'Chemical element composition is not discussed.' },
        { optionIndex: 2, optionText: 'Whether light speed travel can be achieved...', trapType: 'Unmentioned Issue', whyIncorrect: 'Light speed travel is not discussed.' },
        { optionIndex: 3, optionText: 'Whether quantum measurement requires nuclear particle accelerators.', trapType: 'Unmentioned Issue', whyIncorrect: 'Particle accelerators are not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-6',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In marine biology, humpback whale song sequences were long believed to be fixed instinctual mating displays performed exclusively by males during breeding seasons.

Text 2:
Ethologist Dr. Elena Rostova recorded humpback populations in the South Pacific over fifteen years and discovered that whale songs evolve continuously through cultural transmission. When migrating whales from western ocean basins introduce novel melodic motifs, local whale populations adopt and incorporate these changes within months, demonstrating cultural learning across whale pods.`,
    questionText: `Based on the texts, how do Dr. Rostova\'s findings in Text 2 challenge the traditional view described in Text 1?`,
    options: [
      'By demonstrating that humpback whale songs evolve dynamically through cultural learning rather than being fixed instinctual displays.',
      'By proving that humpback whale songs are performed exclusively by juvenile calves.',
      'By showing that humpback whales communicate exclusively through ultrasonic clicks.',
      'By confirming that whale songs remain identical across all ocean basins.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1 describes traditional view (fixed instinctual displays). Text 2 shows songs evolve continuously through cultural transmission when novel motifs are introduced by migrating whales.`,
      correctReasoning: `Option A accurately describes how Rostova's findings (dynamic evolution through cultural learning) challenge the fixed instinctual view in Text 1.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By demonstrating that humpback whale songs evolve dynamically...', trapType: 'Correct Challenge Description', whyIncorrect: 'Accurately captures Text 2\'s refutation of Text 1.' },
        { optionIndex: 1, optionText: 'By proving that humpback whale songs are performed exclusively by juvenile...', trapType: 'Unmentioned Performer', whyIncorrect: 'Calf performance is not asserted.' },
        { optionIndex: 2, optionText: 'By showing that humpback whales communicate exclusively through ultrasonic...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 discusses melodic song motifs.' },
        { optionIndex: 3, optionText: 'By confirming that whale songs remain identical across all ocean basins.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 notes migrating whales introduce novel motifs across basins.' }
      ]
    }
  },
  {
    id: 't4-ex-7',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In legal philosophy, originalist legal scholars contend that the United States Constitution must be interpreted according to the public meaning of its text at the time it was enacted. Originalists argue that altering constitutional meaning through judicial reinterpretation undermines democratic legislative processes and replaces rule of law with judicial preference.

Text 2:
Constitutional scholar Dr. Maya Lin advocates for the "Living Constitution" framework, arguing that original public meaning cannot address modern technological and social developments unforeseen in 1787. Lin asserts that constitutional principles are intentionally broad, granting judges authority to apply core values like liberty and privacy to contemporary challenges.`,
    questionText: `Based on the texts, how would Dr. Lin (Text 2) most likely respond to the originalist argument presented in Text 1?`,
    options: [
      'By contending that rigid adherence to eighteenth-century public meaning leaves constitutional principles unable to address modern technological and social challenges.',
      'By agreeing that original public meaning is the sole legitimate method for deciding constitutional cases.',
      'By claiming that originalist legal scholars wish to abolish the United States Supreme Court.',
      'By arguing that constitutional principles should be rewritten every ten years by direct popular referendum.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1: Originalism = interpret text based on 1787 public meaning to preserve rule of law. Text 2: Lin = "Living Constitution" where 1787 public meaning cannot address unforeseen modern tech/social challenges, so broad core values must be applied by judges to modern problems.`,
      correctReasoning: `Option A accurately states Lin's counter-argument against rigid originalism.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By contending that rigid adherence to eighteenth-century public meaning...', trapType: 'Correct Counter-Argument', whyIncorrect: 'Accurately captures Lin\'s response.' },
        { optionIndex: 1, optionText: 'By agreeing that original public meaning is the sole legitimate method...', trapType: 'Direct Contradiction', whyIncorrect: 'Lin rejects originalism in favor of Living Constitutionalism.' },
        { optionIndex: 2, optionText: 'By claiming that originalist legal scholars wish to abolish...', trapType: 'Fabricated Extremism', whyIncorrect: 'Abolishing the Supreme Court is not mentioned.' },
        { optionIndex: 3, optionText: 'By arguing that constitutional principles should be rewritten every ten years...', trapType: 'Fabricated Policy', whyIncorrect: 'Decennial popular referendums are not advocated.' }
      ]
    }
  },
  {
    id: 't4-ex-8',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In agricultural biotechnology, drought-tolerant genetically modified (GM) maize varieties have allowed farmers in arid regions to maintain crop yields during severe droughts, preventing localized agricultural collapse and farm bankruptcies.

Text 2:
While GM maize varieties improve drought resilience, environmental analyst Dr. David Chen notes that corporate patent enforcement on GM seeds restricts farmers from saving harvested seeds for the next planting season. Chen advocates for open-source plant breeding programs that distribute drought-resilient traits without restrictive patent fees.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'GM maize varieties possess traits that assist farmers during drought conditions.',
      'Farmers should be legally barred from participating in open-source plant breeding.',
      'Corporate seed patents produce zero financial burden for smallholding farmers.',
      'Drought-tolerant crops are less productive than traditional non-GM crops during dry years.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 states GM maize allows farmers to maintain yields during severe droughts. Text 2 grants "While GM maize varieties improve drought resilience...". Both agree GM maize offers traits that aid farmers in droughts.`,
      correctReasoning: `Option A accurately states the shared consensus point between both texts.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'GM maize varieties possess traits that assist farmers...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately captures shared premise.' },
        { optionIndex: 1, optionText: 'Farmers should be legally barred from participating in open-source...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly advocates open-source plant breeding.' },
        { optionIndex: 2, optionText: 'Corporate seed patents produce zero financial burden...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 critiques restrictive patent fees.' },
        { optionIndex: 3, optionText: 'Drought-tolerant crops are less productive than traditional...', trapType: 'Direct Contradiction', whyIncorrect: 'Both texts confirm GM drought crops maintain productivity better during dry years.' }
      ]
    }
  },
  {
    id: 't4-ex-9',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In nineteenth-century European history, Otto von Bismarck's policy of Realpolitik—basing diplomacy strictly on practical power considerations rather than ideological moralizing—is credited with unifying Germany in 1871 and maintaining European balance of power for two decades.

Text 2:
Historian Dr. Anna Weber argues that while Realpolitik achieved immediate diplomatic goals, its cynical disregard for international law created a dangerous precedent. Weber demonstrates that by normalizing covert alliances and aggressive militarism, Bismarck's diplomatic framework eroded mutual trust among European powers, laying the structural groundwork for the outbreak of World War I.`,
    questionText: `Based on the texts, how does Dr. Weber\'s evaluation in Text 2 differ from the characterization of Realpolitik in Text 1?`,
    options: [
      'Dr. Weber highlights the long-term destabilizing consequences of Realpolitik on European trust, whereas Text 1 focuses on its short-term diplomatic success.',
      'Dr. Weber argues that Bismarck failed to achieve German unification in 1871, whereas Text 1 claims unification occurred in 1890.',
      'Dr. Weber contends that Realpolitik was based entirely on pacifist moral principles, whereas Text 1 views it as militaristic.',
      'Dr. Weber advocates applying Realpolitik to modern United Nations diplomatic treaties.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 highlights Realpolitik's success (unifying Germany, maintaining 20-year power balance). Text 2 grants immediate success, but highlights long-term destabilization (eroded trust, structural groundwork for WWI).`,
      correctReasoning: `Option A accurately states the contrast: Weber's focus on long-term destabilization vs Text 1's focus on short-term success.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Weber highlights the long-term destabilizing consequences...', trapType: 'Correct Comparative Contrast', whyIncorrect: 'Accurately characterizes both texts.' },
        { optionIndex: 1, optionText: 'Dr. Weber argues that Bismarck failed to achieve German unification...', trapType: 'Direct Contradiction', whyIncorrect: 'Weber acknowledges immediate diplomatic goals were achieved.' },
        { optionIndex: 2, optionText: 'Dr. Weber contends that Realpolitik was based entirely on pacifist...', trapType: 'Direct Contradiction', whyIncorrect: 'Weber notes Realpolitik normalized aggressive militarism.' },
        { optionIndex: 3, optionText: 'Dr. Weber advocates applying Realpolitik to modern United Nations...', trapType: 'Unsubstantiated Modern Policy', whyIncorrect: 'UN treaties are not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-10',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In nutrition science, dietary fiber is essential for digestive health. Soluble fiber dissolves in water to form a gel-like substance that lowers blood cholesterol levels and stabilizes blood glucose concentrations after meals.

Text 2:
Insoluble fiber does not dissolve in water; instead, it absorbs fluids and adds bulk to digestive waste, accelerating movement through the intestinal tract. Clinical trials confirm that combining both soluble and insoluble fiber sources provides comprehensive cardiovascular and gastrointestinal protection.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'Different forms of dietary fiber contribute to distinct aspects of human health.',
      'Insoluble fiber dissolves in water to lower blood cholesterol levels.',
      'Dietary fiber should be removed from clinical nutrition guidelines.',
      'Soluble fiber is harmful to blood glucose stabilization.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 details soluble fiber lowering cholesterol and stabilizing glucose. Text 2 details insoluble fiber adding bulk and accelerating movement, concluding both together give comprehensive protection. Both agree distinct forms of fiber contribute to health.`,
      correctReasoning: `Option A accurately states the shared consensus point.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Different forms of dietary fiber contribute to distinct aspects...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately reflects consensus between both texts.' },
        { optionIndex: 1, optionText: 'Insoluble fiber dissolves in water to lower blood cholesterol levels.', trapType: 'Role Swap Trap', whyIncorrect: 'Text 1 says SOLUBLE fiber dissolves in water and lowers cholesterol.' },
        { optionIndex: 2, optionText: 'Dietary fiber should be removed from clinical nutrition guidelines.', trapType: 'Direct Contradiction', whyIncorrect: 'Both texts endorse dietary fiber health benefits.' },
        { optionIndex: 3, optionText: 'Soluble fiber is harmful to blood glucose stabilization.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 explicitly states soluble fiber STABILIZES blood glucose.' }
      ]
    }
  }
];
