import { DemonstrationExample } from '../readingTypes';

export const T4_DEMONSTRATIONS: DemonstrationExample[] = [
  {
    demoNumber: 1,
    id: 't4-demo-1',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
Scholars have long attributed the decline of the Indus Valley Civilization around 1900 BCE primarily to catastrophic tectonic shifts that altered river courses, drying up vital agricultural tributaries. According to this model, environmental collapse occurred so rapidly that urban centers like Harappa were abandoned within a few decades.

Text 2:
Recent isotopic analysis of sediment cores from ancient Indus agricultural sites presents a more gradual picture. Climate data indicate a centuries-long weakening of the summer monsoon, which reduced rainfall incrementally. Rather than fleeing sudden environmental collapse, residents adapted over generations by decentralizing their cities and migrating toward smaller rural farming communities.`,
    questionText: `Based on the texts, how would the author of Text 2 most likely respond to the characterization of the Indus Valley Civilization's decline in Text 1?`,
    options: [
      'By contending that the decline was a gradual process of adaptation rather than a sudden catastrophic abandonment.',
      'By asserting that tectonic shifts caused even more severe damage than Text 1 suggests.',
      'By agreeing that Harappa was abandoned rapidly but arguing that other cities expanded.',
      'By claiming that monsoon rainfall changes affected agriculture far less than river drying did.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    strategicTakeaway: 'Text 1 claims decline was sudden and catastrophic due to river shifts. Text 2 presents a gradual picture over centuries with adaptation over generations.',
    explanation: {
      passageDeconstruction: `Text 1 describes rapid, catastrophic collapse from tectonic river shifts. Text 2 counters with isotopic data showing a centuries-long monsoon decline and gradual rural migration.`,
      correctReasoning: `Option A accurately states Text 2's counter-perspective: the decline was gradual adaptation rather than sudden catastrophic collapse.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By contending that the decline was a gradual process...', trapType: 'Correct Perspective', whyIncorrect: 'Accurately captures Text 2\'s main thesis.' },
        { optionIndex: 1, optionText: 'By asserting that tectonic shifts caused even more severe...', trapType: 'Opposite Vector', whyIncorrect: 'Text 2 argues against sudden tectonic collapse entirely.' },
        { optionIndex: 2, optionText: 'By agreeing that Harappa was abandoned rapidly...', trapType: 'Partial Concession Trap', whyIncorrect: 'Text 2 rejects sudden rapid abandonment.' },
        { optionIndex: 3, optionText: 'By claiming that monsoon rainfall changes affected...', trapType: 'False Hierarchy', whyIncorrect: 'Text 2 highlights monsoon changes as the main driver.' }
      ]
    }
  },
  {
    demoNumber: 2,
    id: 't4-demo-2',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
Linguists studying language acquisition generally view immersion as the most effective method for achieving fluency in a foreign language. By forcing learners to navigate real-world social contexts entirely in the target language, immersion accelerates natural grammatical intuition.

Text 2:
While immersion provides valuable exposure, educational psychologist Dr. Marcus Reed argues that without structured explicit grammar instruction, adult immersion learners frequently fossilize grammatical errors. Reed's studies show that combining formal grammar lessons with immersion yields significantly higher accuracy than immersion alone.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'Language immersion provides valuable exposure that aids foreign language acquisition.',
      'Explicit grammar instruction is completely unnecessary for adult foreign language learners.',
      'Adult learners acquire foreign languages at the exact same rate as child learners.',
      'Immersion programs should eliminate formal grammar lessons entirely.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    strategicTakeaway: 'Look for shared premises. Text 1 calls immersion most effective. Text 2 grants "While immersion provides valuable exposure...". Both accept that immersion is valuable.',
    explanation: {
      passageDeconstruction: `Text 1 praises immersion as the most effective method. Text 2 begins with "While immersion provides valuable exposure...", acknowledging its value while adding that formal lessons improve accuracy. Both agree immersion provides value.`,
      correctReasoning: `Option A captures the shared consensus: both authors agree immersion provides valuable exposure for learning a language.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Language immersion provides valuable exposure...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately reflects overlap between both authors.' },
        { optionIndex: 1, optionText: 'Explicit grammar instruction is completely unnecessary...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly argues grammar instruction IS necessary to prevent errors.' },
        { optionIndex: 2, optionText: 'Adult learners acquire foreign languages at the exact same rate...', trapType: 'Out-of-Scope Comparison', whyIncorrect: 'Neither text compares adult vs child learning rates.' },
        { optionIndex: 3, optionText: 'Immersion programs should eliminate formal grammar lessons...', trapType: 'Opposite Vector', whyIncorrect: 'Text 2 argues formal grammar lessons should be included.' }
      ]
    }
  },
  {
    demoNumber: 3,
    id: 't4-demo-3',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
Advocates of universal basic income (UBI) argue that distributing unconditional cash payments to all citizens eliminates administrative bureaucracy and poverty traps associated with traditional welfare programs. Proponents point to pilot studies showing that recipients use UBI funds primarily for essential living expenses, education, and starting small businesses.

Text 2:
Economist Dr. Aris Thorne contends that UBI pilot studies are fundamentally flawed because they are temporary. When recipients know guaranteed payments will expire after two years, their spending behavior does not reflect how people would act under a permanent lifelong UBI. Thorne argues that a permanent UBI would trigger broad inflationary pressures that erode purchasing power for low-income families.`,
    questionText: `Based on the texts, how would Dr. Thorne (Text 2) most likely critique the evidence cited by advocates in Text 1?`,
    options: [
      'By arguing that spending patterns in temporary pilot studies cannot reliably predict behavior under a permanent policy.',
      'By claiming that pilot study recipients spent all their UBI funds on luxury goods rather than essential living expenses.',
      'By asserting that traditional welfare programs have lower administrative costs than UBI programs.',
      'By demonstrating that small business creation always fails in pilot study communities.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1 cites pilot study evidence showing positive spending (essentials, education, business). Text 2 directly critiques pilot studies because they are temporary and cannot reflect permanent lifelong policy behavior.`,
      correctReasoning: `Option A accurately states Thorne's specific critique of the pilot study evidence cited in Text 1.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By arguing that spending patterns in temporary pilot studies...', trapType: 'Correct Specific Critique', whyIncorrect: 'Accurately reflects Thorne\'s direct objection to pilot study validity.' },
        { optionIndex: 1, optionText: 'By claiming that pilot study recipients spent all their funds on luxury...', trapType: 'Direct Contradiction', whyIncorrect: 'Thorne critiques the study\'s temporary duration, not claiming recipients bought luxury goods.' },
        { optionIndex: 2, optionText: 'By asserting that traditional welfare programs have lower costs...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Thorne does not compare traditional welfare administrative costs.' },
        { optionIndex: 3, optionText: 'By demonstrating that small business creation always fails...', trapType: 'Extreme Fabricated Claim', whyIncorrect: 'Thorne does not claim small business creation always fails.' }
      ]
    }
  },
  {
    demoNumber: 4,
    id: 't4-demo-4',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In agricultural ecology, synthetic chemical pesticides are essential for protecting crop yields against invasive pest outbreaks. Without synthetic pesticides, global food production would drop by an estimated 30%, leading to catastrophic food shortages and skyrocketing agricultural commodity prices.

Text 2:
While synthetic pesticides boost short-term agricultural output, ecologist Dr. Clara Vance notes that their overuse leads to pest resistance and destroys beneficial pollinator populations. Vance advocates for Integrated Pest Management (IPM), which combines biological controls, crop rotation, and targeted minimal pesticide use to maintain ecosystem balance while securing food yields.`,
    questionText: `Based on the texts, how does Dr. Vance\'s perspective in Text 2 differ from the perspective presented in Text 1?`,
    options: [
      'Dr. Vance emphasizes the long-term ecological risks of pesticide overuse and recommends an integrated approach, whereas Text 1 focuses on short-term yield protection.',
      'Dr. Vance argues that all synthetic pesticides should be banned immediately, whereas Text 1 supports unrestricted pesticide application.',
      'Dr. Vance contends that pest outbreaks have no measurable impact on crop production, whereas Text 1 views pests as a serious threat.',
      'Dr. Vance advocates replacing crop rotation with heavy fertilizer applications, whereas Text 1 opposes fertilizer use.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 highlights the essential role of synthetic pesticides in preventing a 30% yield loss. Text 2 acknowledges short-term output, but warns of long-term risks (resistance, pollinator loss) and proposes IPM (combining biological controls and minimal pesticide use).`,
      correctReasoning: `Option A accurately captures the contrast: Vance's focus on long-term ecological risks and IPM vs Text 1's focus on yield protection.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Vance emphasizes the long-term ecological risks...', trapType: 'Correct Comparative Contrast', whyIncorrect: 'Accurately characterizes both positions.' },
        { optionIndex: 1, optionText: 'Dr. Vance argues that all synthetic pesticides should be banned...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Vance advocates "targeted minimal pesticide use", not an immediate total ban.' },
        { optionIndex: 2, optionText: 'Dr. Vance contends that pest outbreaks have no measurable impact...', trapType: 'Direct Contradiction', whyIncorrect: 'Vance recognizes pests as a challenge requiring IPM.' },
        { optionIndex: 3, optionText: 'Dr. Vance advocates replacing crop rotation...', trapType: 'Direct Contradiction', whyIncorrect: 'Vance explicitly includes crop rotation in IPM.' }
      ]
    }
  },
  {
    demoNumber: 5,
    id: 't4-demo-5',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In Renaissance art history, Giorgio Vasari's 1550 biography *Lives of the Artists* established Leonardo da Vinci as the ultimate genius of the Italian Renaissance. Vasari portrayed Leonardo as a solitary polymath whose natural artistic brilliance transcended formal workshop training and academic tradition.

Text 2:
Modern art historians emphasize that Leonardo's creative breakthroughs were deeply rooted in the collaborative workshop of Andrea del Verrocchio in Florence. Rather than working in isolated genius, Leonardo developed his mastery of sfumato lighting, metallurgy, and anatomical drawing alongside fellow apprentices like Perugino and Botticelli in a highly commercialized artistic environment.`,
    questionText: `Based on the texts, how would the modern art historians in Text 2 view Vasari's depiction of Leonardo in Text 1?`,
    options: [
      'As an oversimplified romantic myth that ignores Leonardo\'s collaborative training in Verrocchio\'s workshop.',
      'As an accurate record of Leonardo\'s rejection of Renaissance apprenticeship systems.',
      'As a biased critique intended to ruin Leonardo\'s artistic reputation in Florence.',
      'As a comprehensive historical account supported by recent archival receipts.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1: Vasari portrays Leonardo as a solitary polymath whose brilliance transcended workshop training. Text 2: Modern historians argue his breakthroughs were rooted in collaborative workshop training in Verrocchio's commercial environment.`,
      correctReasoning: `Option A accurately captures how modern historians would critique Vasari's view: an oversimplified myth ignoring collaborative workshop training.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'As an oversimplified romantic myth that ignores Leonardo\'s...', trapType: 'Correct Critique', whyIncorrect: 'Accurately captures Text 2\'s refutation of Text 1\'s solitary genius narrative.' },
        { optionIndex: 1, optionText: 'As an accurate record of Leonardo\'s rejection...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 states he benefited from, rather than rejected, workshop training.' },
        { optionIndex: 2, optionText: 'As a biased critique intended to ruin Leonardo\'s reputation...', trapType: 'Flop Trap', whyIncorrect: 'Vasari portrayed Leonardo as the "ultimate genius", not seeking to ruin his reputation.' },
        { optionIndex: 3, optionText: 'As a comprehensive historical account supported by...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 refutes Vasari\'s account using modern historical findings.' }
      ]
    }
  },
  {
    demoNumber: 6,
    id: 't4-demo-6',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
Solar photovoltaic panels generate clean renewable electricity without producing greenhouse gas emissions during operation. As manufacturing costs have fallen by 85% over the past decade, solar energy has become the most cost-effective power generation technology in sunny geographic regions.

Text 2:
While operational solar power is pollution-free, energy analyst Dr. Mei Lin cautions that solar panel manufacturing and disposal present significant environmental challenges. Processing silicon crystals requires toxic chemical solvents, and decommissioned solar panels generate millions of tons of electronic waste containing heavy metals like lead and cadmium if not properly recycled.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement about solar energy?`,
    options: [
      'Operating solar panels produces clean electricity without direct greenhouse gas emissions.',
      'Solar panels generate toxic heavy metals while converting sunlight into electricity.',
      'Decommissioned solar panels should be buried in standard municipal landfills.',
      'Solar energy is more expensive to produce today than it was ten years ago.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 states solar panels generate clean electricity without greenhouse gas emissions during operation. Text 2 begins: "While operational solar power is pollution-free...". Both agree that operating solar panels produces clean/pollution-free electricity.`,
      correctReasoning: `Option A accurately states the shared premise accepted by both authors regarding operational cleanliness.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Operating solar panels produces clean electricity without direct...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately reflects overlap between both texts.' },
        { optionIndex: 1, optionText: 'Solar panels generate toxic heavy metals while converting sunlight...', trapType: 'Scientific Process Swap', whyIncorrect: 'Heavy metals are in panel waste, not generated during sunlight conversion.' },
        { optionIndex: 2, optionText: 'Decommissioned solar panels should be buried in standard landfills.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 warns against un-recycled toxic waste disposal.' },
        { optionIndex: 3, optionText: 'Solar energy is more expensive to produce today than it was...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 explicitly states costs fell by 85% over the past decade.' }
      ]
    }
  },
  {
    demoNumber: 7,
    id: 't4-demo-7',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In evolutionary paleontology, the "Island Rule" posits that large terrestrial mammal species dwarf in size when isolated on islands due to limited resource availability, while small mammal species gigantify due to reduced predator pressure.

Text 2:
Biologist Dr. Kevin Patel conducted a meta-analysis of 1,200 insular mammal species and found that body size changes on islands do not follow a universal rule. Patel's data showed that while dwarfism occurred consistently in large herbivores like elephants, body size responses among carnivores and small rodents varied wildly depending on island size, climate variability, and human introduction of competing species.`,
    questionText: `Based on the texts, how does Dr. Patel\'s research in Text 2 relate to the "Island Rule" described in Text 1?`,
    options: [
      'It qualifies the scope of the Island Rule by showing that body size shifts are contingent on specific ecological factors rather than being universal.',
      'It completely validates the Island Rule by demonstrating that all island rodents undergo predictable gigantism.',
      'It proves that dwarfism occurs exclusively among island carnivores rather than large herbivores.',
      'It demonstrates that island size has no measurable influence on mammalian body mass.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 states the Island Rule as a general rule (large mammals dwarf, small mammals gigantify). Text 2 shows that body size changes do NOT follow a universal rule, but vary based on climate, island size, and competing species (though dwarfism was consistent in large herbivores).`,
      correctReasoning: `Option A accurately captures Patel's qualification: body size shifts are contingent on specific factors rather than universal.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'It qualifies the scope of the Island Rule by showing that body size shifts...', trapType: 'Correct Qualification', whyIncorrect: 'Accurately describes how Text 2 limits Text 1\'s rule.' },
        { optionIndex: 1, optionText: 'It completely validates the Island Rule by demonstrating that all island...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 states rodent responses "varied wildly".' },
        { optionIndex: 2, optionText: 'It proves that dwarfism occurs exclusively among island carnivores...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 notes dwarfism occurred consistently in large herbivores.' },
        { optionIndex: 3, optionText: 'It demonstrates that island size has no measurable influence...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 identifies island size as one of the key factors influencing response.' }
      ]
    }
  },
  {
    demoNumber: 8,
    id: 't4-demo-8',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
Urban planners advocating for high-density housing argue that multi-family apartment buildings reduce suburban sprawl, lower per-capita infrastructure maintenance costs, and shorten commuter travel distances, contributing to lower carbon emissions.

Text 2:
Housing economist Dr. Marcus Thorne notes that high-density construction frequently encounters intense local neighborhood opposition due to concerns over traffic congestion and school overcrowding. Thorne argues that unless high-density housing is accompanied by major public transit investments and school expansions, municipal approval processes will remain stalled by community pushback.`,
    questionText: `Based on the texts, how would Dr. Thorne (Text 2) most likely view the high-density housing proposal in Text 1?`,
    options: [
      'As a beneficial concept that requires complementary infrastructure investments in transit and schools to achieve municipal implementation.',
      'As an impossible goal that should be abandoned in favor of expanded single-family suburban sprawl.',
      'As a plan that would immediately eliminate all urban traffic congestion without public transit.',
      'As a policy that is opposed primarily by environmental activists concerned with carbon emissions.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1 describes benefits of high-density housing (reduced sprawl, lower infrastructure costs, lower emissions). Text 2 notes community opposition (traffic, school overcrowding) and argues that public transit and school investments are necessary for municipal approval.`,
      correctReasoning: `Option A accurately captures Thorne's conditional perspective: housing proposals require complementary infrastructure investments to succeed.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'As a beneficial concept that requires complementary infrastructure...', trapType: 'Correct Conditional Perspective', whyIncorrect: 'Accurately captures Thorne\'s practical requirement.' },
        { optionIndex: 1, optionText: 'As an impossible goal that should be abandoned in favor of expanded...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Thorne does not advocate abandoning density for sprawl.' },
        { optionIndex: 2, optionText: 'As a plan that would immediately eliminate all urban traffic...', trapType: 'Direct Contradiction', whyIncorrect: 'Thorne notes community fear of increased traffic congestion.' },
        { optionIndex: 3, optionText: 'As a policy that is opposed primarily by environmental activists...', trapType: 'Misidentified Opponents', whyIncorrect: 'Opposition comes from local neighborhoods concerned with traffic and schools, not environmental activists.' }
      ]
    }
  },
  {
    demoNumber: 9,
    id: 't4-demo-9',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In literary criticism, the "Intentional Fallacy"—a concept introduced by W.K. Wimsatt and Monroe Beardsley in 1946—asserts that an author's stated personal intentions are irrelevant to the interpretation of a literary text. Wimsatt and Beardsley argued that a poem or novel must be evaluated as an autonomous object solely through its internal verbal design.

Text 2:
Literary theorist Dr. Evelyn Vance contends that total exclusion of authorial intention creates an artificial vacuum that impoverishes literary analysis. Vance demonstrates that understanding historical letters, political contexts, and authorial statements routinely resolves ambiguities in complex texts like Jonathan Swift's satire, where internal text alone can easily be misinterpreted as earnest endorsement.`,
    questionText: `Based on the texts, how would Dr. Vance (Text 2) most likely respond to Wimsatt and Beardsley\'s claim in Text 1?`,
    options: [
      'By arguing that excluding authorial context can lead to misinterpretations of satirical and complex literary texts.',
      'By agreeing that an author\'s personal letters should never be published or analyzed by literary critics.',
      'By claiming that Jonathan Swift intended his satires to be read as literal historical documentaries.',
      'By asserting that internal verbal design is completely useless in evaluating poetry.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1: Wimsatt & Beardsley argue author intention is irrelevant; evaluate text solely on internal verbal design. Text 2: Vance argues excluding intention creates a vacuum, citing Swift's satire where internal text alone can be misinterpreted as earnest endorsement without authorial/historical context.`,
      correctReasoning: `Option A accurately states Vance's refutation: excluding authorial context causes misinterpretations, especially in satire.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By arguing that excluding authorial context can lead to misinterpretations...', trapType: 'Correct Perspective Response', whyIncorrect: 'Accurately captures Vance\'s core argument.' },
        { optionIndex: 1, optionText: 'By agreeing that an author\'s personal letters should never be published...', trapType: 'Direct Contradiction', whyIncorrect: 'Vance explicitly values historical letters.' },
        { optionIndex: 2, optionText: 'By claiming that Jonathan Swift intended his satires to be read...', trapType: 'Direct Contradiction', whyIncorrect: 'Swift wrote satire, not literal documentaries.' },
        { optionIndex: 3, optionText: 'By asserting that internal verbal design is completely useless...', trapType: 'Extreme Absolutist Trap', whyIncorrect: 'Vance argues against total exclusion of context, not that verbal design is useless.' }
      ]
    }
  },
  {
    demoNumber: 10,
    id: 't4-demo-10',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
Artificial intelligence models trained on large language datasets possess remarkable translation capabilities, outperforming human translators in speed and technical vocabulary consistency across millions of medical and legal documents.

Text 2:
While AI translation engines process technical terminology efficiently, literary translator Clara Rossi argues that AI consistently fails to capture poetic rhythm, humor, and cultural metaphor. Rossi contends that literary translation requires human empathy and creative interpretation that algorithms cannot replicate.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'AI translation models demonstrate strong capabilities in handling technical vocabulary.',
      'Human translators should be replaced entirely by AI models in literary publishing.',
      'AI models capture subtle cultural metaphors better than human translators do.',
      'Literary poetry translation can be automated with total accuracy.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 states AI models outperform human translators in technical vocabulary consistency. Text 2 grants "While AI translation engines process technical terminology efficiently...". Both agree AI is strong in technical terminology/vocabulary.`,
      correctReasoning: `Option A accurately states the shared point of agreement.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'AI translation models demonstrate strong capabilities in handling...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately reflects consensus between both texts.' },
        { optionIndex: 1, optionText: 'Human translators should be replaced entirely by AI models in literary...', trapType: 'Direct Contradiction', whyIncorrect: 'Rossi in Text 2 strongly opposes AI in literary publishing.' },
        { optionIndex: 2, optionText: 'AI models capture subtle cultural metaphors better than human...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly states AI fails to capture cultural metaphors.' },
        { optionIndex: 3, optionText: 'Literary poetry translation can be automated with total accuracy.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 argues algorithm cannot replicate literary translation.' }
      ]
    }
  }
];
