import { ReadingQuestion } from '../readingTypes';

export const T4_EXERCISES_PART2: ReadingQuestion[] = [
  {
    id: 't4-ex-26',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In educational psychology, flipped classroom models—where students watch video lectures at home and perform problem-solving activities in class—increase active student engagement and allow instructors to provide personalized coaching during problem-solving sessions.

Text 2:
While flipped classrooms benefit self-motivated students, educational researcher Dr. Kevin Park cautions that the model exacerbates socioeconomic achievement gaps. Students in low-income households frequently lack reliable high-speed internet access or quiet home study environments, leaving them unprepared for in-class activities compared to their peers.`,
    questionText: `Based on the texts, how does Dr. Park\'s perspective in Text 2 relate to the flipped classroom model presented in Text 1?`,
    options: [
      'Dr. Park identifies an equity limitation of the model that disproportionately disadvantages students in low-income households.',
      'Dr. Park argues that problem-solving activities should be eliminated from all school curricula.',
      'Dr. Park proves that video lectures cause permanent eye strain in elementary school students.',
      'Dr. Park claims that high-income students perform worse in flipped classrooms than in traditional classrooms.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 highlights benefits of flipped classrooms (active engagement, personalized coaching). Text 2 warns that low-income students lacking internet/study space are disadvantaged, widening achievement gaps.`,
      correctReasoning: `Option A accurately captures Park's equity critique of the model described in Text 1.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Park identifies an equity limitation of the model that...', trapType: 'Correct Comparative Relationship', whyIncorrect: 'Accurately reflects Park\'s specific reservation.' },
        { optionIndex: 1, optionText: 'Dr. Park argues that problem-solving activities should be eliminated...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Park critiques home prep access equity, not in-class problem-solving.' },
        { optionIndex: 2, optionText: 'Dr. Park proves that video lectures cause permanent eye strain...', trapType: 'Fabricated Medical Claim', whyIncorrect: 'Eye strain is not mentioned.' },
        { optionIndex: 3, optionText: 'Dr. Park claims that high-income students perform worse...', trapType: 'Direct Contradiction', whyIncorrect: 'Park notes high-income students enter class better prepared.' }
      ]
    }
  },
  {
    id: 't4-ex-27',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In urban economics, imposing rent control caps on residential apartments protects low-income tenants from sudden displacement, maintaining neighborhood demographic diversity and housing stability during urban revitalization.

Text 2:
Housing economist Dr. Rachel Vance contends that rent control policies produce severe unintended consequences. Vance's longitudinal data show that rent caps discourage property owners from performing necessary maintenance, convert rental units into private condominiums, and reduce overall housing construction, worsening housing shortages for future residents.`,
    questionText: `Based on the texts, what is the primary point of disagreement between proponents of rent control (Text 1) and Dr. Vance (Text 2)?`,
    options: [
      'Whether the overall economic consequences of rent control caps are beneficial or harmful to long-term housing markets.',
      'Whether high-rise residential buildings require steel reinforced foundations.',
      'Whether property owners should be required to pay municipal real estate taxes.',
      'Whether suburban single-family homes receive federal mortgage subsidies.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Disagreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1: Rent control protects low-income tenants and maintains stability/diversity. Text 2: Rent control discourages maintenance, reduces rental units, and worsens housing shortages.`,
      correctReasoning: `Option A pinpoints the core disagreement: overall benefits (tenant protection) vs overall harm (reduced supply, poor maintenance, shortages).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Whether the overall economic consequences of rent control caps are...', trapType: 'Correct Point of Disagreement', whyIncorrect: 'Accurately captures the primary policy debate.' },
        { optionIndex: 1, optionText: 'Whether high-rise residential buildings require steel reinforced...', trapType: 'Unmentioned Issue', whyIncorrect: 'Structural foundations are not mentioned.' },
        { optionIndex: 2, optionText: 'Whether property owners should be required to pay municipal...', trapType: 'Unmentioned Issue', whyIncorrect: 'Real estate taxes are not mentioned.' },
        { optionIndex: 3, optionText: 'Whether suburban single-family homes receive federal mortgage...', trapType: 'Unmentioned Issue', whyIncorrect: 'Suburban mortgages are not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-28',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In cognitive ergonomics, standing desks are promoted as an effective workplace intervention to reduce sedentary behavior, improving metabolic health and reducing lower back pain among office workers.

Text 2:
Ergonomist Dr. Simon Cole notes that while standing desks reduce prolonged sitting, standing continuously for more than two hours increases lower limb vein pressure and cause lower back fatigue. Cole advocates for sit-stand adjustable desks that encourage alternating between sitting and standing every 30 minutes.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'Prolonged uninterrupted sitting poses health risks for office workers.',
      'Workers should be forced to stand continuously for eight hours per workday.',
      'Adjustable sit-stand desks increase lower back pain compared to fixed chairs.',
      'Metabolic health is unaffected by physical activity during the workday.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 states standing desks reduce sedentary behavior and back pain. Text 2 notes "while standing desks reduce prolonged sitting...", acknowledging sitting risks while advocating alternating positions. Both agree prolonged sitting is harmful.`,
      correctReasoning: `Option A accurately states the shared underlying premise accepted by both texts.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Prolonged uninterrupted sitting poses health risks for office workers.', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately reflects consensus between both texts.' },
        { optionIndex: 1, optionText: 'Workers should be forced to stand continuously for eight hours...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly warns against standing continuously for over 2 hours.' },
        { optionIndex: 2, optionText: 'Adjustable sit-stand desks increase lower back pain compared to...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly advocates sit-stand adjustable desks.' },
        { optionIndex: 3, optionText: 'Metabolic health is unaffected by physical activity during the workday.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 explicitly notes metabolic health benefits.' }
      ]
    }
  },
  {
    id: 't4-ex-29',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In evolutionary anthropology, the "Expensive Tissue Hypothesis" proposes that the human brain evolved its disproportionately large size because early hominins shifted to a higher-quality meat diet, allowing the energy-demanding digestive tract to shrink and free up metabolic energy for brain growth.

Text 2:
Anthropologist Dr. Sarah Jenkins analyzed hominin fossil teeth and isotope ratios, finding that increased brain size in *Homo erectus* occurred prior to significant increases in meat consumption. Jenkins argues that cooked starches and underground tubers provided the dense, reliable glucose supply required for brain enlargement, challenging the exclusive focus on meat.`,
    questionText: `Based on the texts, how does Dr. Jenkins (Text 2) challenge the hypothesis presented in Text 1?`,
    options: [
      'By presenting fossil and isotopic evidence that brain expansion occurred prior to major meat dietary increases and was fueled by cooked starches.',
      'By proving that early hominins were strictly carnivores who never consumed plant material.',
      'By demonstrating that hominin digestive tracts expanded in size as brain mass increased.',
      'By asserting that *Homo erectus* possessed a smaller brain than earlier australopithecines.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1: Meat diet allowed gut shrinkage, freeing energy for brain growth. Text 2: Brain growth occurred PRIOR to meat consumption increase, and cooked starches/tubers provided the glucose needed, challenging the meat hypothesis.`,
      correctReasoning: `Option A accurately states Jenkins's challenge: timeline mismatch (brain growth preceded meat increase) and alternative fuel source (cooked starches).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By presenting fossil and isotopic evidence that brain expansion...', trapType: 'Correct Challenge Description', whyIncorrect: 'Accurately captures Jenkins\'s counter-evidence.' },
        { optionIndex: 1, optionText: 'By proving that early hominins were strictly carnivores...', trapType: 'Direct Contradiction', whyIncorrect: 'Jenkins highlights plant tubers and starches.' },
        { optionIndex: 2, optionText: 'By demonstrating that hominin digestive tracts expanded in size...', trapType: 'Direct Contradiction', whyIncorrect: 'Gut expansion is not asserted by Jenkins.' },
        { optionIndex: 3, optionText: 'By asserting that *Homo erectus* possessed a smaller brain...', trapType: 'Direct Contradiction', whyIncorrect: 'Jenkins discusses increased brain size in *Homo erectus*.' }
      ]
    }
  },
  {
    id: 't4-ex-30',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In software engineering, open-source software allows developers globally to view, modify, and distribute source code freely. Proponents argue that open-source development accelerates software innovation, enhances security through crowdsourced bug detection, and lowers costs for startup businesses.

Text 2:
Cybersecurity researcher Dr. Alan Wu warns that open-source software dependencies create severe supply chain vulnerabilities. When malicious actors inject hidden exploits into popular open-source code libraries, thousands of downstream commercial applications automatically inherit those security vulnerabilities without realizing it.`,
    questionText: `Based on the texts, how does Dr. Wu\'s perspective in Text 2 relate to the open-source software model described in Text 1?`,
    options: [
      'Dr. Wu identifies a major security vulnerability inherent in software supply chain dependencies that qualifies the security claims in Text 1.',
      'Dr. Wu argues that all open-source software should be outlawed by international cyber treaties.',
      'Dr. Wu proves that proprietary closed-source code never contains security bugs.',
      'Dr. Wu claims that crowdsourced bug detection is 100% effective against malicious actors.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 claims open-source enhances security via crowdsourced bug detection. Text 2 warns of supply chain vulnerabilities when malicious exploits are injected into open-source libraries used downstream.`,
      correctReasoning: `Option A accurately describes Wu's qualification of Text 1's security claims regarding open-source dependencies.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Wu identifies a major security vulnerability inherent in software...', trapType: 'Correct Comparative Relationship', whyIncorrect: 'Accurately captures Wu\'s specific qualification.' },
        { optionIndex: 1, optionText: 'Dr. Wu argues that all open-source software should be outlawed...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Outlawing open-source software is not advocated.' },
        { optionIndex: 2, optionText: 'Dr. Wu proves that proprietary closed-source code never contains...', trapType: 'Absolute Flop Trap', whyIncorrect: 'Wu does not claim proprietary code is perfect.' },
        { optionIndex: 3, optionText: 'Dr. Wu claims that crowdsourced bug detection is 100% effective...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 mentions crowdsourced bug detection, but Wu in Text 2 highlights remaining vulnerabilities.' }
      ]
    }
  },
  {
    id: 't4-ex-31',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In marine biology, acoustic pingers attached to commercial fishing nets emit high-frequency sound pulses designed to deter dolphins and porpoises from becoming entangled in gillnets, successfully reducing cetacean bycatch by over 70% in coastal fisheries.

Text 2:
While acoustic pingers reduce net entanglement, marine mammal ecologist Dr. Nina Rossi cautions that widespread pinger deployment creates "acoustic exclusion zones." Rossi's tracking data show that porpoises avoid pinged fishing areas entirely, displacing them from critical shallow-water feeding grounds and forcing them into deeper waters with lower prey density.`,
    questionText: `Based on the texts, how would Dr. Rossi (Text 2) most likely respond to the praise of acoustic pingers in Text 1?`,
    options: [
      'By pointing out that while pingers successfully reduce net entanglement, their widespread use displaces cetaceans from vital feeding habitats.',
      'By arguing that acoustic pingers increase cetacean entanglement rates by attracting inquisitive dolphins to nets.',
      'By claiming that coastal gillnets have zero impact on marine mammal populations.',
      'By advocating for replacing acoustic pingers with underwater high-power laser barriers.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1 praises pingers for reducing bycatch by 70%. Text 2 acknowledges entanglement reduction, but highlights the negative side effect: acoustic exclusion displacing porpoises from critical shallow feeding grounds.`,
      correctReasoning: `Option A accurately states Rossi's balanced response: acknowledging entanglement reduction while pointing out habitat displacement.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By pointing out that while pingers successfully reduce net entanglement...', trapType: 'Correct Nuanced Response', whyIncorrect: 'Accurately reflects Rossi\'s balanced critique.' },
        { optionIndex: 1, optionText: 'By arguing that acoustic pingers increase cetacean entanglement rates...', trapType: 'Direct Contradiction', whyIncorrect: 'Rossi agrees pingers reduce entanglement.' },
        { optionIndex: 2, optionText: 'By claiming that coastal gillnets have zero impact on marine mammal...', trapType: 'Direct Contradiction', whyIncorrect: 'Gillnet impact is acknowledged by both.' },
        { optionIndex: 3, optionText: 'By advocating for replacing acoustic pingers with underwater high-power...', trapType: 'Fabricated Technology', whyIncorrect: 'Laser barriers are not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-32',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In cognitive aging research, regular engagement in complex mental activities like playing chess or learning a foreign language builds "cognitive reserve," delaying the clinical onset of dementia symptoms by up to five years.

Text 2:
Neurologist Dr. Thomas Wright notes that while mental stimulation strengthens neural networks, cognitive reserve does not halt underlying neurodegenerative brain pathology. Wright's neuroimaging data show that once dementia symptoms finally manifest in highly educated individuals with high cognitive reserve, cognitive decline progresses at a significantly faster rate.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'Engaging in complex mental activities can delay the initial manifestation of dementia symptoms.',
      'Mental stimulation completely cures underlying neurodegenerative brain pathology.',
      'Chess and foreign language study accelerate brain tissue atrophy in healthy young adults.',
      'Individuals with low cognitive reserve experience zero cognitive decline in late adulthood.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 states mental activities build cognitive reserve, delaying dementia onset by up to 5 years. Text 2 grants "while mental stimulation strengthens neural networks... once symptoms finally manifest...", accepting that initial symptom onset is delayed.`,
      correctReasoning: `Option A accurately states the shared point of agreement regarding delayed symptom onset.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Engaging in complex mental activities can delay the initial...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately reflects overlap between both texts.' },
        { optionIndex: 1, optionText: 'Mental stimulation completely cures underlying neurodegenerative...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly states mental stimulation does NOT halt pathology.' },
        { optionIndex: 2, optionText: 'Chess and foreign language study accelerate brain tissue atrophy...', trapType: 'Direct Contradiction', whyIncorrect: 'Both texts view mental activities as beneficial for neural networks/reserve.' },
        { optionIndex: 3, optionText: 'Individuals with low cognitive reserve experience zero cognitive decline...', trapType: 'Direct Contradiction', whyIncorrect: 'Cognitive decline occurs in late adulthood across reserve levels.' }
      ]
    }
  },
  {
    id: 't4-ex-33',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In environmental economics, carbon offset markets allow companies to neutralize their greenhouse gas emissions by purchasing carbon credits from tropical reforestation projects, creating financial mechanisms that fund global forest conservation.

Text 2:
Climate policy researcher Dr. Maya Lin contends that voluntary carbon offsets function primarily as corporate greenwashing. Lin's audits of reforestation offset projects revealed widespread over-crediting, where trees were planted in areas already prone to wildfires or where forests would have been preserved anyway without offset funding.`,
    questionText: `Based on the texts, how does Dr. Lin\'s critique in Text 2 relate to the carbon offset model described in Text 1?`,
    options: [
      'Dr. Lin presents empirical audit evidence that challenges the practical validity and conservation effectiveness of offset projects.',
      'Dr. Lin proves that tropical reforestation absorbs zero carbon dioxide from the atmosphere.',
      'Dr. Lin advocates doubling corporate purchases of voluntary carbon offset credits.',
      'Dr. Lin demonstrates that reforestation projects trigger regional drought conditions.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1 presents carbon offsets as an effective mechanism funding conservation. Text 2 uses audit evidence to challenge offsets as corporate greenwashing with widespread over-crediting and flawed project sites.`,
      correctReasoning: `Option A accurately captures Lin's empirical challenge to the practical validity of the offset model.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Lin presents empirical audit evidence that challenges the practical...', trapType: 'Correct Empirical Challenge', whyIncorrect: 'Accurately captures Lin\'s specific critique.' },
        { optionIndex: 1, optionText: 'Dr. Lin proves that tropical reforestation absorbs zero carbon dioxide...', trapType: 'Direct Contradiction', whyIncorrect: 'Trees absorb $CO_2$; Lin critiques accounting and project execution, not biology.' },
        { optionIndex: 2, optionText: 'Dr. Lin advocates doubling corporate purchases of voluntary carbon...', trapType: 'Opposite Vector', whyIncorrect: 'Lin critiques voluntary offsets, rather than advocating doubling them.' },
        { optionIndex: 3, optionText: 'Dr. Lin demonstrates that reforestation projects trigger regional drought...', trapType: 'Unmentioned Mechanism', whyIncorrect: 'Drought creation is not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-34',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In space exploration, sending robotic rovers to Mars provides invaluable geological and atmospheric data at a fraction of the cost and risk of human crewed missions. Advanced instruments on rovers like *Perseverance* can analyze rock samples and detect biosignatures without endangering human life.

Text 2:
While robotic rovers yield significant scientific data, astronautical engineer Dr. Marcus Vance argues that human field geologists on Mars could accomplish in a single afternoon what takes a remote rover months to execute. Vance contends that crewed missions are essential for rapid, complex scientific discovery and establishing long-term human presence.`,
    questionText: `Based on the texts, what is the primary difference in focus between the author of Text 1 and Dr. Vance (Text 2)?`,
    options: [
      'Text 1 emphasizes the lower cost and safety of robotic rovers, whereas Dr. Vance emphasizes the speed and scientific versatility of human explorers.',
      'Text 1 argues that Mars exploration should be abandoned entirely, whereas Dr. Vance advocates crewed missions to Jupiter.',
      'Text 1 claims robotic rovers are more expensive than crewed missions, whereas Dr. Vance claims rovers cost nothing.',
      'Text 1 advocates establishing human permanent cities on Mars, whereas Dr. Vance opposes all space travel.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 focuses on robotic rovers being cost-effective and safe. Text 2 acknowledges rover data, but focuses on humans being vastly faster and more versatile field geologists.`,
      correctReasoning: `Option A accurately states the primary difference in focus between lower cost/safety (Text 1) vs speed/versatility (Text 2).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Text 1 emphasizes the lower cost and safety of robotic rovers...', trapType: 'Correct Comparative Contrast', whyIncorrect: 'Accurately characterizes both focus areas.' },
        { optionIndex: 1, optionText: 'Text 1 argues that Mars exploration should be abandoned entirely...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 praises robotic Mars exploration.' },
        { optionIndex: 2, optionText: 'Text 1 claims robotic rovers are more expensive than crewed...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 explicitly states rovers are a "fraction of the cost".' },
        { optionIndex: 3, optionText: 'Text 1 advocates establishing human permanent cities...', trapType: 'Role Reversal', whyIncorrect: 'Text 2 mentions long-term human presence; Text 1 focuses on rovers.' }
      ]
    }
  },
  {
    id: 't4-ex-35',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In evolutionary biology, the "Red Queen Hypothesis" posits that species must continuously adapt, evolve, and proliferate simply to maintain relative fitness against co-evolving competing organisms in an ever-shifting evolutionary arms race.

Text 2:
Paleobiologist Dr. Elena Rostova analyzed macroevolutionary fossil records across 500 million years and found that marine invertebrate species often experience millions of years of evolutionary stasis without morphological change. Rostova argues that the Red Queen Hypothesis applies primarily to host-parasite co-evolution rather than driving all morphological speciation.`,
    questionText: `Based on the texts, how do Dr. Rostova\'s findings in Text 2 relate to the Red Queen Hypothesis described in Text 1?`,
    options: [
      'They limit the universal scope of the Red Queen Hypothesis by showing that many species experience long stasis rather than continuous morphological change.',
      'They completely disprove the existence of host-parasite co-evolution in marine ecosystems.',
      'They demonstrate that terrestrial mammals evolve at slower rates than marine invertebrates.',
      'They confirm that every fossil organism undergoes continuous rapid morphological evolution.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1 states Red Queen Hypothesis as continuous adaptation required for survival against competing organisms. Text 2 shows fossil stasis across millions of years, arguing Red Queen applies specifically to host-parasite co-evolution rather than all speciation.`,
      correctReasoning: `Option A accurately captures Rostova's qualification limiting the universal scope of the hypothesis.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'They limit the universal scope of the Red Queen Hypothesis by showing...', trapType: 'Correct Qualification Description', whyIncorrect: 'Accurately reflects Rostova\'s argument.' },
        { optionIndex: 1, optionText: 'They completely disprove the existence of host-parasite co-evolution...', trapType: 'Direct Contradiction', whyIncorrect: 'Rostova explicitly notes Red Queen applies to host-parasite co-evolution.' },
        { optionIndex: 2, optionText: 'They demonstrate that terrestrial mammals evolve at slower rates...', trapType: 'Unmentioned Comparison', whyIncorrect: 'Terrestrial mammals are not compared.' },
        { optionIndex: 3, optionText: 'They confirm that every fossil organism undergoes continuous rapid...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly highlights millions of years of evolutionary stasis.' }
      ]
    }
  },
  {
    id: 't4-ex-36',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In public health, mandatory water fluoridation is celebrated as one of the most effective disease-prevention measures of the twentieth century, reducing dental caries (cavities) in children by 25% across municipal populations regardless of socioeconomic status.

Text 2:
While recognizing fluoridation\'s dental benefits, bioethicist Dr. Clara Vance argues that adding medicinal compounds to public water supplies infringes on individual medical autonomy, as residents cannot opt out without purchasing costly filtration systems. Vance advocates for targeted topical fluoride programs in schools rather than mass water treatment.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'Fluoride exposure provides measurable dental health benefits in reducing cavities.',
      'Public water supplies should be treated with high concentrations of antibiotics.',
      'Individual medical autonomy is the only consideration in public health policy.',
      'School-based topical fluoride programs are completely ineffective.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 praises water fluoridation for reducing cavities by 25%. Text 2 starts: "While recognizing fluoridation\'s dental benefits...". Both agree fluoride provides measurable dental health benefits.`,
      correctReasoning: `Option A accurately states the shared point of agreement between both texts.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Fluoride exposure provides measurable dental health benefits...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately captures overlap between both texts.' },
        { optionIndex: 1, optionText: 'Public water supplies should be treated with high concentrations of antibiotics.', trapType: 'Unmentioned Compound', whyIncorrect: 'Antibiotics in water are not mentioned.' },
        { optionIndex: 2, optionText: 'Individual medical autonomy is the only consideration in public health policy.', trapType: 'Extreme Absolutist Trap', whyIncorrect: 'Neither text claims autonomy is the ONLY consideration.' },
        { optionIndex: 3, optionText: 'School-based topical fluoride programs are completely ineffective.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly advocates school-based topical fluoride programs.' }
      ]
    }
  },
  {
    id: 't4-ex-37',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In historiography, the "Great Man Theory" popularized by Thomas Carlyle in the nineteenth century asserts that world history is fundamentally shaped by the heroic deeds, decisive leadership, and individual genius of extraordinary political and military figures.

Text 2:
Social historian Dr. Marcus Reed argues that Carlyle\'s framework ignores the broad structural forces—such as demographic shifts, economic conditions, technological innovations, and collective popular movements—that truly dictate historical change. Reed contends that leaders are merely products of their social environments rather than independent drivers of history.`,
    questionText: `Based on the texts, how would Dr. Reed (Text 2) most likely view Carlyle\'s "Great Man Theory" described in Text 1?`,
    options: [
      'As a flawed, individualistic model that overlooks the underlying social, economic, and technological forces shaping history.',
      'As a flawless historical analysis supported by modern demographic census records.',
      'As an accurate explanation for why military commanders control economic inflation rates.',
      'As a theory that overemphasizes the role of peasant agricultural labor in historical change.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1: Great Man Theory = history shaped by individual genius leaders. Text 2: Reed argues this ignores broad structural forces (demographics, economics, tech, popular movements) and treats leaders as products rather than drivers.`,
      correctReasoning: `Option A accurately states Reed's critique: a flawed model overlooking underlying structural forces.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'As a flawed, individualistic model that overlooks the underlying...', trapType: 'Correct Specific Critique', whyIncorrect: 'Accurately captures Reed\'s refutation.' },
        { optionIndex: 1, optionText: 'As a flawless historical analysis supported by modern demographic...', trapType: 'Direct Contradiction', whyIncorrect: 'Reed explicitly critiques Carlyle\'s framework.' },
        { optionIndex: 2, optionText: 'As an accurate explanation for why military commanders control...', trapType: 'Fabricated Role', whyIncorrect: 'Military control of inflation is not mentioned.' },
        { optionIndex: 3, optionText: 'As a theory that overemphasizes the role of peasant agricultural...', trapType: 'Role Reversal', whyIncorrect: 'Reed claims Carlyle OVERemphasized leaders and IGNORED popular movements.' }
      ]
    }
  },
  {
    id: 't4-ex-38',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In consumer psychology, offering customers a wide array of product choices increases purchasing satisfaction by providing a sense of autonomy and ensuring shoppers find a product tailored to their specific preferences.

Text 2:
Behavioral economist Dr. Sheena Iyengar conducted famous jam-tasting experiments revealing the "paradox of choice." When presented with 24 jam varieties, only 3% of shoppers made a purchase, whereas 30% purchased when offered just 6 choices. Iyengar demonstrated that excessive options trigger choice overload and decision paralysis.`,
    questionText: `Based on the texts, what is the primary point of disagreement between Text 1 and Dr. Iyengar (Text 2)?`,
    options: [
      'Whether increasing the number of product options always improves consumer purchasing decisions and sales conversion.',
      'Whether fruit jam should be manufactured with organic cane sugar.',
      'Whether retail stores should operate exclusively through online e-commerce platforms.',
      'Whether consumer autonomy can be measured using heart rate monitors.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Disagreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1: Wide array of choices increases satisfaction and tailored purchasing. Text 2: Excessive choices (24 vs 6) cause decision paralysis and reduce purchases from 30% to 3%.`,
      correctReasoning: `Option A accurately states the core point of disagreement: whether more options always improve decisions/purchasing vs causing paralysis.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Whether increasing the number of product options always improves...', trapType: 'Correct Point of Disagreement', whyIncorrect: 'Accurately pinpoints the core conflict.' },
        { optionIndex: 1, optionText: 'Whether fruit jam should be manufactured with organic cane sugar.', trapType: 'Unmentioned Issue', whyIncorrect: 'Organic sugar is not mentioned.' },
        { optionIndex: 2, optionText: 'Whether retail stores should operate exclusively through online...', trapType: 'Unmentioned Issue', whyIncorrect: 'Online e-commerce is not mentioned.' },
        { optionIndex: 3, optionText: 'Whether consumer autonomy can be measured using heart rate...', trapType: 'Unmentioned Issue', whyIncorrect: 'Heart rate monitors are not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-39',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In paleontology, the "K-Pg Extinction Event" 66 million years ago was traditionally attributed solely to the Chicxulub asteroid impact in modern Mexico, which produced a global dust cloud blocking sunlight and causing ecological collapse.

Text 2:
Geologist Dr. Gerta Keller presents radioactive isotope dating from India\'s Deccan Traps, showing massive volcanic eruptions occurred simultaneously with the asteroid impact. Keller argues that volcanic sulfur dioxide and carbon dioxide emissions had already destabilized global climate, making the asteroid impact the final trigger in a multi-causal extinction event rather than the sole isolated cause.`,
    questionText: `Based on the texts, how does Dr. Keller\'s perspective in Text 2 differ from the traditional view in Text 1?`,
    options: [
      'Dr. Keller views the extinction as a multi-causal event involving pre-existing volcanic climate stress alongside the asteroid impact, whereas Text 1 attributes it solely to the asteroid.',
      'Dr. Keller argues that the Chicxulub asteroid never struck Earth, whereas Text 1 claims it landed in Asia.',
      'Dr. Keller claims that non-avian dinosaurs survived the K-Pg event into the Eocene epoch.',
      'Dr. Keller attributes the extinction event exclusively to solar flare activity.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1: Traditional view = Chicxulub asteroid impact was the sole cause. Text 2: Keller view = Deccan Traps volcanism destabilized climate prior to impact, making it a multi-causal event.`,
      correctReasoning: `Option A accurately captures Keller's multi-causal perspective incorporating volcanism alongside the asteroid impact.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Keller views the extinction as a multi-causal event involving...', trapType: 'Correct Comparative Contrast', whyIncorrect: 'Accurately characterizes both positions.' },
        { optionIndex: 1, optionText: 'Dr. Keller argues that the Chicxulub asteroid never struck Earth...', trapType: 'Direct Contradiction', whyIncorrect: 'Keller acknowledges the asteroid impact as the final trigger.' },
        { optionIndex: 2, optionText: 'Dr. Keller claims that non-avian dinosaurs survived...', trapType: 'Unmentioned Survival Claim', whyIncorrect: 'Eocene survival is not claimed.' },
        { optionIndex: 3, optionText: 'Dr. Keller attributes the extinction event exclusively to solar flare...', trapType: 'Fabricated Cause', whyIncorrect: 'Solar flares are not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-40',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In urban ecology, installing vertical green walls on high-rise buildings absorbs urban noise pollution, sequesters particulate smog, and cools building exteriors through transpirational plant cooling.

Text 2:
While vertical green walls offer microclimate benefits, structural architect Dr. Carlos Ruiz warns that irrigation system leaks behind green wall panels can cause unseen structural corrosion in steel reinforcement beams. Ruiz advocates for modular self-contained planter boxes with external drainage channels to prevent water contact with building facades.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'Vertical green walls can provide environmental microclimate benefits for urban buildings.',
      'Building exteriors should be constructed entirely from untreated timber.',
      'Irrigation system leaks improve steel reinforcement beam durability over time.',
      'Noise pollution in cities has zero impact on human psychological health.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 highlights noise reduction, smog absorption, and cooling benefits. Text 2 grants "While vertical green walls offer microclimate benefits...", acknowledging those benefits before warning of hidden corrosion risks. Both agree green walls offer microclimate benefits.`,
      correctReasoning: `Option A accurately captures the shared consensus premise.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Vertical green walls can provide environmental microclimate benefits...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately reflects overlap between both texts.' },
        { optionIndex: 1, optionText: 'Building exteriors should be constructed entirely from untreated timber.', trapType: 'Unmentioned Material', whyIncorrect: 'Untreated timber is not mentioned.' },
        { optionIndex: 2, optionText: 'Irrigation system leaks improve steel reinforcement beam durability...', trapType: 'Direct Contradiction', whyIncorrect: 'Ruiz explicitly warns leaks cause structural corrosion.' },
        { optionIndex: 3, optionText: 'Noise pollution in cities has zero impact on human psychological health.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 notes green walls absorb noise pollution as a benefit.' }
      ]
    }
  },
  {
    id: 't4-ex-41',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In linguistics, the "Sapir-Whorf Hypothesis" (linguistic relativity) asserts that the structure of a human language strongly influences or determines the cognitive worldview and perceptual categories of its speakers.

Text 2:
Cognitive neuroscientist Dr. Steven Pinker critiques linguistic relativity, demonstrating that human thought occurs in a non-verbal mental medium termed "mentalese." Pinker points to cross-cultural studies showing that color perception, spatial orientation, and emotional categories are remarkably consistent across speakers of wildly different languages.`,
    questionText: `Based on the texts, how does Dr. Pinker\'s argument in Text 2 challenge the Sapir-Whorf Hypothesis in Text 1?`,
    options: [
      'By arguing that thought occurs in a non-verbal mental medium ("mentalese") and that perceptual categories are consistent across different languages.',
      'By proving that all human languages share identical spoken vocabulary words.',
      'By demonstrating that non-verbal animals possess higher linguistic fluency than humans.',
      'By asserting that language acquisition is governed exclusively by environmental reward conditioning.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1: Sapir-Whorf Hypothesis = language structure determines/influences thought and perception. Text 2: Pinker = thought occurs in non-verbal "mentalese", and cross-cultural studies show consistent perception across different languages.`,
      correctReasoning: `Option A accurately states Pinker's refutation: non-verbal mentalese and cross-language perceptual consistency.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By arguing that thought occurs in a non-verbal mental medium...', trapType: 'Correct Challenge Description', whyIncorrect: 'Accurately captures Pinker\'s counter-argument.' },
        { optionIndex: 1, optionText: 'By proving that all human languages share identical spoken vocabulary...', trapType: 'Direct Contradiction', whyIncorrect: 'Languages have wildly different vocabularies.' },
        { optionIndex: 2, optionText: 'By demonstrating that non-verbal animals possess higher linguistic...', trapType: 'Unmentioned Claim', whyIncorrect: 'Animal linguistic fluency is not discussed.' },
        { optionIndex: 3, optionText: 'By asserting that language acquisition is governed exclusively by...', trapType: 'Unmentioned Behaviorism', whyIncorrect: 'Behaviorist reward conditioning is not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-42',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In wildlife conservation, establishing continuous wildlife corridors connecting fragmented forest reserves allows isolated animal populations to migrate, mate, and maintain genetic diversity, preventing inbreeding depression.

Text 2:
While wildlife corridors facilitate genetic exchange, disease ecologist Dr. Hiroshi Sato warns that continuous corridors also act as conduits for infectious pathogens. Sato\'s tracking data revealed that a facial tumor disease spread rapidly across isolated Tasmanian devil reserves via newly constructed habitat corridors.`,
    questionText: `Based on the texts, how does Dr. Sato\'s warning in Text 2 qualify the recommendation in Text 1?`,
    options: [
      'By pointing out that while corridors facilitate genetic exchange, they can also facilitate the rapid spread of infectious diseases between isolated populations.',
      'By proving that wildlife corridors cause genetic inbreeding depression in small mammals.',
      'By advocating for replacing all wildlife corridors with high-voltage electric fences.',
      'By demonstrating that Tasmanian devils are immune to infectious pathogen transmission.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 recommends corridors for genetic exchange and preventing inbreeding. Text 2 grants genetic exchange benefits, but warns corridors also spread infectious pathogens (e.g., Tasmanian devil facial tumor disease).`,
      correctReasoning: `Option A accurately captures Sato's qualification: corridors facilitate genetic exchange, but also spread infectious diseases.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By pointing out that while corridors facilitate genetic exchange...', trapType: 'Correct Qualification Description', whyIncorrect: 'Accurately characterizes Sato\'s reservation.' },
        { optionIndex: 1, optionText: 'By proving that wildlife corridors cause genetic inbreeding...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 states corridors PREVENT inbreeding depression.' },
        { optionIndex: 2, optionText: 'By advocating for replacing all wildlife corridors with high-voltage...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Electric fences are not advocated.' },
        { optionIndex: 3, optionText: 'By demonstrating that Tasmanian devils are immune to infectious...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 states facial tumor disease spread rapidly among Tasmanian devils.' }
      ]
    }
  },
  {
    id: 't4-ex-43',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In macroeconomics, the Phillips Curve model posits a durable inverse relationship between inflation and unemployment: when central banks stimulate the economy to lower unemployment, inflation predictably rises, and vice versa.

Text 2:
Economic historian Dr. Alan Vance highlights the 1970s "stagflation" crisis—where high unemployment coincided with soaring inflation across Western economies—as empirical refutation of the simple Phillips Curve. Vance demonstrates that supply shocks (such as OPEC oil embargoes) and inflationary expectations can push inflation and unemployment up simultaneously, shattering the assumed inverse tradeoff.`,
    questionText: `Based on the texts, how would Dr. Vance (Text 2) view the Phillips Curve model described in Text 1?`,
    options: [
      'As an incomplete model whose assumed inverse relationship fails during supply-shock stagflation events.',
      'As an accurate predictive model that perfectly explained 1970s macroeconomic conditions.',
      'As a theory that applies exclusively to agricultural barter economies.',
      'As a model that successfully eliminated global oil embargoes in the 1970s.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1: Phillips Curve = durable inverse relationship between inflation and unemployment. Text 2: Vance highlights 1970s stagflation (high unemployment AND high inflation simultaneously due to supply shocks), refuting the simple inverse tradeoff.`,
      correctReasoning: `Option A accurately states Vance's view: an incomplete model whose inverse assumption fails during stagflation.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'As an incomplete model whose assumed inverse relationship fails...', trapType: 'Correct Specific Critique', whyIncorrect: 'Accurately captures Vance\'s empirical refutation.' },
        { optionIndex: 1, optionText: 'As an accurate predictive model that perfectly explained 1970s...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 states 1970s stagflation shattered the model.' },
        { optionIndex: 2, optionText: 'As a theory that applies exclusively to agricultural barter...', trapType: 'Unmentioned Scope', whyIncorrect: 'Barter economies are not mentioned.' },
        { optionIndex: 3, optionText: 'As a model that successfully eliminated global oil embargoes...', trapType: 'Fabricated Role', whyIncorrect: 'Oil embargoes were external supply shocks, not eliminated by economic models.' }
      ]
    }
  },
  {
    id: 't4-ex-44',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In agronomy, vertical indoor farming using LED grow lights and hydroponic nutrient solutions allows year-round crop production without weather dependence, using 95% less water than traditional soil farming.

Text 2:
While indoor vertical farms conserve water and land, energy analyst Dr. Elena Rostova points out that LED lighting and climate control systems require massive electricity inputs. Rostova\'s lifecycle analysis revealed that unless vertical farms are powered by 100% renewable energy, their carbon footprint per kilogram of lettuce is four times higher than open-field agriculture.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement about vertical indoor farming?`,
    options: [
      'Vertical indoor farming offers significant water conservation benefits compared to traditional soil farming.',
      'Indoor vertical farms require zero electrical power for operation.',
      'Open-field agriculture should be banned immediately in all agricultural nations.',
      'LED grow lights produce higher carbon emissions than diesel tractors in all circumstances.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 notes vertical farming uses 95% less water than traditional soil farming. Text 2 grants "While indoor vertical farms conserve water and land...", acknowledging water conservation before raising electricity concerns. Both agree vertical farming conserves water.`,
      correctReasoning: `Option A accurately states the shared consensus point between both texts.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Vertical indoor farming offers significant water conservation benefits...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately captures overlap between both texts.' },
        { optionIndex: 1, optionText: 'Indoor vertical farms require zero electrical power for operation.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 explicitly highlights massive electricity inputs.' },
        { optionIndex: 2, optionText: 'Open-field agriculture should be banned immediately in all...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Banning open-field agriculture is not advocated.' },
        { optionIndex: 3, optionText: 'LED grow lights produce higher carbon emissions than diesel tractors...', trapType: 'Unsubstantiated Specific Comparison', whyIncorrect: 'Diesel tractors are not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-45',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In behavioral economics, "nudging"—altering choice architecture through subtle defaults without restricting options—is praised as an effective public policy tool. Automatically enrolling employees into retirement savings plans dramatically increases savings rates while preserving personal freedom to opt out.

Text 2:
Ethicist Dr. Samuel Park warns that nudging operates through subconscious cognitive exploitation rather than transparent democratic persuasion. Park argues that when governments use subtle psychological defaults to steer citizen behavior, it erodes democratic accountability and opens the door to manipulative paternalism by state agencies.`,
    questionText: `Based on the texts, what is the primary difference in perspective between proponents of nudging (Text 1) and Dr. Park (Text 2)?`,
    options: [
      'Text 1 views nudging as a beneficial policy tool that preserves personal freedom, whereas Dr. Park views it as subconscious manipulation that erodes democratic accountability.',
      'Text 1 argues that automatic retirement enrollment should be illegal, whereas Dr. Park advocates mandatory savings.',
      'Text 1 claims nudging restricts all citizen freedom, whereas Dr. Park claims nudging increases freedom.',
      'Text 1 advocates replacing public policy with private corporate monopolies, whereas Dr. Park opposes corporate profits.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1: Nudging is a beneficial policy tool that increases savings while preserving freedom to opt out. Text 2: Nudging operates via subconscious exploitation and manipulative paternalism, eroding democratic accountability.`,
      correctReasoning: `Option A accurately captures the primary contrast: beneficial tool preserving freedom (Text 1) vs manipulative paternalism eroding accountability (Text 2).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Text 1 views nudging as a beneficial policy tool that preserves...', trapType: 'Correct Comparative Contrast', whyIncorrect: 'Accurately characterizes both focus areas.' },
        { optionIndex: 1, optionText: 'Text 1 argues that automatic retirement enrollment should be illegal...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 explicitly praises automatic enrollment.' },
        { optionIndex: 2, optionText: 'Text 1 claims nudging restricts all citizen freedom...', trapType: 'Role Reversal', whyIncorrect: 'Text 1 claims it preserves freedom, whereas Text 2 criticizes it.' },
        { optionIndex: 3, optionText: 'Text 1 advocates replacing public policy with private corporate...', trapType: 'Unmentioned Ideology', whyIncorrect: 'Corporate monopolies are not mentioned.' }
      ]
    }
  },
  {
    id: 't4-ex-46',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In marine biology, manta rays migrate across ocean basins following seasonal plankton blooms. Satellite tracking tags reveal that manta rays dive to depths exceeding 1,000 meters to feed on deep-water mesopelagic prey during night hours.

Text 2:
While manta rays utilize deep-water prey, marine ecologist Dr. Nina Rossi cautions that deep-sea bottom trawling fisheries destroy mesopelagic coral habitats. Rossi\'s data show that habitat destruction along sea mounds reduces mesopelagic prey density, threatening manta ray populations that rely on these deep feeding grounds.`,
    questionText: `Based on the texts, both authors would most likely agree with which statement?`,
    options: [
      'Manta rays utilize deep-water prey resources as part of their feeding behavior.',
      'Bottom trawling fisheries improve ocean floor habitat quality for mesopelagic prey.',
      'Manta rays feed exclusively on shallow surface plankton during daytime.',
      'Mesopelagic coral habitats are immune to commercial fishing net damage.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Agreement Vectoring',
    explanation: {
      passageDeconstruction: `Text 1 states manta rays dive over 1,000m to feed on deep-water mesopelagic prey. Text 2 grants "While manta rays utilize deep-water prey...". Both agree manta rays utilize deep-water prey resources.`,
      correctReasoning: `Option A accurately states the shared consensus premise.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Manta rays utilize deep-water prey resources as part of their...', trapType: 'Correct Shared Agreement', whyIncorrect: 'Accurately captures overlap between both texts.' },
        { optionIndex: 1, optionText: 'Bottom trawling fisheries improve ocean floor habitat quality...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 states bottom trawling destroys mesopelagic coral habitats.' },
        { optionIndex: 2, optionText: 'Manta rays feed exclusively on shallow surface plankton during daytime.', trapType: 'Direct Contradiction', whyIncorrect: 'Text 1 explicitly states they dive to 1,000m at night to feed.' },
        { optionIndex: 3, optionText: 'Mesopelagic coral habitats are immune to commercial fishing...', trapType: 'Direct Contradiction', whyIncorrect: 'Text 2 states bottom trawling destroys these coral habitats.' }
      ]
    }
  },
  {
    id: 't4-ex-47',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In ancient history, the Pax Romana (27 BCE – 180 CE) is celebrated as a golden age of peace and stability across the Mediterranean, where unified Roman law, paved roads, and maritime trade suppression fostered unprecedented economic prosperity.

Text 2:
Provincial historian Dr. Marcus Vance argues that the "peace" of the Pax Romana was maintained through brutal military suppression, mass enslavement, and heavy taxation of conquered provincial populations. Vance asserts that the economic prosperity celebrated in Roman imperial centers came at the direct expense of exploited border provinces.`,
    questionText: `Based on the texts, how does Dr. Vance\'s characterization in Text 2 challenge the traditional view in Text 1?`,
    options: [
      'By demonstrating that Roman peace and prosperity relied on military suppression, mass enslavement, and provincial exploitation rather than unmixed universal stability.',
      'By proving that paved Roman roads were never built in provincial territories.',
      'By claiming that maritime trade declined completely during the reign of Augustus.',
      'By asserting that conquered provincial populations enjoyed higher living standards than Roman citizens.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1: Pax Romana = golden age of peace, law, roads, trade, and economic prosperity. Text 2: Vance = peace maintained by brutal military suppression, enslavement, and taxation, where prosperity in imperial centers came from exploiting provinces.`,
      correctReasoning: `Option A accurately captures Vance's challenge to the golden age narrative.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By demonstrating that Roman peace and prosperity relied on military...', trapType: 'Correct Challenge Description', whyIncorrect: 'Accurately captures Vance\'s revisionist challenge.' },
        { optionIndex: 1, optionText: 'By proving that paved Roman roads were never built...', trapType: 'Unmentioned Direct Contradiction', whyIncorrect: 'Road construction is acknowledged.' },
        { optionIndex: 2, optionText: 'By claiming that maritime trade declined completely...', trapType: 'Unmentioned Claim', whyIncorrect: 'Trade decline is not claimed.' },
        { optionIndex: 3, optionText: 'By asserting that conquered provincial populations enjoyed higher...', trapType: 'Direct Contradiction', whyIncorrect: 'Vance states provincial populations were exploited and taxed heavily.' }
      ]
    }
  },
  {
    id: 't4-ex-48',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In renewable energy, green hydrogen—produced by splitting water molecules using solar or wind electricity—offers a zero-emission fuel solution for heavy transportation sectors like shipping and aviation that cannot be easily electrified with lithium batteries.

Text 2:
While green hydrogen is zero-emission at point of use, energy economist Dr. Rachel Lin cautions that current electrolysis technology loses 30% of input energy during production. Lin argues that until electrolyzer efficiency improves and renewable electricity becomes abundant, using renewable power directly in battery-electric systems is far more efficient than producing green hydrogen.`,
    questionText: `Based on the texts, how does Dr. Lin\'s analysis in Text 2 relate to the green hydrogen technology described in Text 1?`,
    options: [
      'Dr. Lin highlights an efficiency limitation in current production that makes direct renewable electrification preferable until technology improves.',
      'Dr. Lin proves that green hydrogen produces higher carbon emissions than diesel fuel when burned.',
      'Dr. Lin advocates replacing all lithium batteries with compressed natural gas tanks.',
      'Dr. Lin claims that solar and wind electricity generation is incapable of splitting water molecules.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 presents green hydrogen as a zero-emission fuel for hard-to-electrify sectors like shipping. Text 2 grants zero-emission point of use, but points out a 30% energy loss during electrolysis, arguing direct battery electrification is currently more efficient.`,
      correctReasoning: `Option A accurately captures Lin's efficiency qualification regarding green hydrogen production.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Lin highlights an efficiency limitation in current production...', trapType: 'Correct Comparative Relationship', whyIncorrect: 'Accurately captures Lin\'s specific qualification.' },
        { optionIndex: 1, optionText: 'Dr. Lin proves that green hydrogen produces higher carbon emissions...', trapType: 'Direct Contradiction', whyIncorrect: 'Lin acknowledges green hydrogen is zero-emission at point of use.' },
        { optionIndex: 2, optionText: 'Dr. Lin advocates replacing all lithium batteries with compressed...', trapType: 'Unmentioned Fuel', whyIncorrect: 'Natural gas is not mentioned.' },
        { optionIndex: 3, optionText: 'Dr. Lin claims that solar and wind electricity generation is incapable...', trapType: 'Direct Contradiction', whyIncorrect: 'Electrolysis using renewables is acknowledged by both.' }
      ]
    }
  },
  {
    id: 't4-ex-49',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Hard Module',
    passage: `Text 1:
In cognitive ergonomics, artificial intelligence decision-support systems in hospital emergency rooms reduce diagnostic errors by rapidly analyzing patient vital signs and lab results against millions of historical clinical records.

Text 2:
Medical ethicist Dr. Clara Vance warns that relying on AI decision-support systems causes "automation bias," where physicians uncritically accept algorithm recommendations. Vance's study showed that when an AI system generated an erroneous diagnosis due to corrupted lab data, attending physicians failed to catch the error in 85% of cases.`,
    questionText: `Based on the texts, how would Dr. Vance (Text 2) most likely respond to the optimism regarding AI decision-support systems in Text 1?`,
    options: [
      'By warning that over-reliance on AI systems can induce automation bias, leading physicians to overlook algorithmic diagnostic errors.',
      'By asserting that hospital emergency rooms should eliminate all electronic vital sign monitors.',
      'By claiming that AI algorithms have a 0% error rate in analyzing historical clinical records.',
      'By arguing that corrupted lab data improves physician diagnostic accuracy.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Perspective Matrix Construction',
    explanation: {
      passageDeconstruction: `Text 1 praises AI decision-support for reducing diagnostic errors via rapid record analysis. Text 2 warns of "automation bias" where physicians uncritically accept AI output, failing to catch algorithmic errors 85% of the time when lab data is corrupted.`,
      correctReasoning: `Option A accurately captures Vance's warning about automation bias leading physicians to overlook AI errors.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'By warning that over-reliance on AI systems can induce automation bias...', trapType: 'Correct Specific Warning', whyIncorrect: 'Accurately captures Vance\'s response.' },
        { optionIndex: 1, optionText: 'By asserting that hospital emergency rooms should eliminate all...', trapType: 'Extreme Policy Trap', whyIncorrect: 'Eliminating vital sign monitors is not advocated.' },
        { optionIndex: 2, optionText: 'By claiming that AI algorithms have a 0% error rate...', trapType: 'Direct Contradiction', whyIncorrect: 'Vance explicitly details an instance where AI made an erroneous diagnosis.' },
        { optionIndex: 3, optionText: 'By arguing that corrupted lab data improves physician diagnostic...', trapType: 'Direct Contradiction', whyIncorrect: 'Corrupted data led to undetected errors.' }
      ]
    }
  },
  {
    id: 't4-ex-50',
    moduleNumber: 1,
    subskill: 'Cross-Text Connections',
    difficulty: 'Easy/Medium Module',
    passage: `Text 1:
In marine biology, sea turtle conservation projects protect nesting beaches by installing wire mesh cages over buried turtle eggs, preventing nocturnal predators like raccoons and foxes from excavating nests.

Text 2:
While wire mesh cages reduce predator nest destruction, herpetologist Dr. David Chen cautions that steel mesh can distort local geomagnetic cues that hatchlings use for spatial orientation. Chen recommends non-magnetic plastic polymer mesh to protect nests without interfering with hatchling geomagnetic navigation.`,
    questionText: `Based on the texts, how does Dr. Chen\'s recommendation in Text 2 relate to the nest protection practice described in Text 1?`,
    options: [
      'Dr. Chen supports nest protection but recommends modifying the cage material to prevent magnetic interference with hatchling navigation.',
      'Dr. Chen argues that all sea turtle nests should be left completely uncovered to attract natural predators.',
      'Dr. Chen proves that raccoons and foxes are incapable of digging through sandy soil.',
      'Dr. Chen advocates replacing wire mesh cages with automated night searchlights.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Comparative Perspective Contrast',
    explanation: {
      passageDeconstruction: `Text 1 describes placing wire mesh cages over nests to stop predators. Text 2 acknowledges mesh cages stop predators, but warns steel distorts geomagnetic orientation, recommending non-magnetic plastic polymer mesh.`,
      correctReasoning: `Option A accurately states Chen's recommendation: supporting protection while swapping steel for non-magnetic plastic to prevent orientation interference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'Dr. Chen supports nest protection but recommends modifying the cage...', trapType: 'Correct Modification Recommendation', whyIncorrect: 'Accurately captures Chen\'s proposal.' },
        { optionIndex: 1, optionText: 'Dr. Chen argues that all sea turtle nests should be left completely...', trapType: 'Opposite Vector', whyIncorrect: 'Chen supports nest protection via plastic mesh.' },
        { optionIndex: 2, optionText: 'Dr. Chen proves that raccoons and foxes are incapable of digging...', trapType: 'Direct Contradiction', whyIncorrect: 'Both texts acknowledge predators dig up nests.' },
        { optionIndex: 3, optionText: 'Dr. Chen advocates replacing wire mesh cages with automated night...', trapType: 'Unmentioned Technology', whyIncorrect: 'Searchlights are not mentioned.' }
      ]
    }
  }
];
