import { ReadingQuestion } from '../readingTypes';

export const MODULE_1_EXERCISES_PART_1: ReadingQuestion[] = [
  {
    id: 'm1-ex-1',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Architect Maya Lin's design for the Vietnam Veterans Memorial initially sparked intense controversy due to its minimalist black granite walls sunk into the ground. Critics argued the design was too austere, but over time, visitors recognized that its solemn simplicity created a deeply ______ space for reflection and grief.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['poignant', 'ostentatious', 'frivolous', 'superficial'],
    correctAnswer: 0,
    nextGenTechnique: 'Contextual Tone Matching',
    explanation: {
      passageDeconstruction: `The memorial's minimalist design was initially criticized, but over time visitors found that its solemn simplicity created an atmosphere suitable for deep reflection and grief.`,
      correctReasoning: `'Poignant' means evoking a keen sense of sadness or regret; deeply touching. This matches "solemn simplicity" and "reflection and grief".`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'ostentatious', trapType: 'Opposite Meaning', whyIncorrect: 'Ostentatious means showy or pretentious, which contradicts "minimalist" and "simplicity".' },
        { optionIndex: 2, optionText: 'frivolous', trapType: 'Inappropriate Tone', whyIncorrect: 'Frivolous means lacking seriousness, which conflicts with grief and reflection.' },
        { optionIndex: 3, optionText: 'superficial', trapType: 'Negative Critic Perspective', whyIncorrect: 'Superficial means shallow. The passage states visitors grew to appreciate its deep space for reflection.' }
      ]
    }
  },
  {
    id: 'm1-ex-2',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In marine biology, the bioluminescent display of the deep-sea comb jelly is not intended to attract mates, as was previously hypothesized. Instead, video recordings captured by submersible vehicles indicate that the sudden burst of light serves to ______ predators by momentarily blinding their optical sensors in the pitch-black benthic zone.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['disorient', 'invigorate', 'mollify', 'subjugate'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `The light burst temporarily blinds predators in the dark benthic zone. The verb must describe the result of being momentarily blinded.`,
      correctReasoning: `'Disorient' means to cause someone or something to lose their sense of direction or focus, fitting "momentarily blinding their optical sensors".`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'invigorate', trapType: 'Opposite Action', whyIncorrect: 'Invigorate means to give strength or energy to, whereas blinding predators weakens their immediate attack.' },
        { optionIndex: 2, optionText: 'mollify', trapType: 'Tone Shift', whyIncorrect: 'Mollify means to appease or soothe anger, which does not fit blinding a predator.' },
        { optionIndex: 3, optionText: 'subjugate', trapType: 'Extreme Action', whyIncorrect: 'Subjugate means to bring under complete control or conquer; blinding them for a moment is disorientation, not conquest.' }
      ]
    }
  },
  {
    id: 'm1-ex-3',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `While early mobile telephone batteries were bulky and held a charge for only a few hours, recent breakthroughs in lithium-sulfur chemistry have led to energy cells that are remarkably ______ and capable of powering devices for multiple days.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['durable', 'fragile', 'intermittent', 'obsolete'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot ("While early... recent...")',
    explanation: {
      passageDeconstruction: `Early batteries were bulky and held a charge briefly; recent breakthrough batteries last for multiple days.`,
      correctReasoning: `'Durable' means able to withstand wear or last a long time, directly contrasting with short charge life.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'fragile', trapType: 'Opposite Meaning', whyIncorrect: 'Fragile means easily broken or delicate.' },
        { optionIndex: 2, optionText: 'intermittent', trapType: 'Negative Pattern', whyIncorrect: 'Intermittent means stopping and starting at intervals, which is not desirable for continuous battery power.' },
        { optionIndex: 3, optionText: 'obsolete', trapType: 'Chronological Inversion', whyIncorrect: 'New breakthrough batteries are cutting-edge, not obsolete (outdated).' }
      ]
    }
  },
  {
    id: 'm1-ex-4',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Literary scholar Dr. James Aris argues that Victorian Gothic fiction did not merely aim to terrify readers with supernatural tropes. Rather, these eerie narratives worked to ______ anxieties about social mobility and industrialization, giving tangible form to the hidden psychological tensions of the era.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['articulate', 'suppress', 'obliterate', 'exculpate'],
    correctAnswer: 0,
    nextGenTechnique: 'Secondary Meaning Alignment',
    explanation: {
      passageDeconstruction: `Gothic stories gave tangible form to hidden psychological tensions and anxieties about social mobility. The word must mean "give voice or form to".`,
      correctReasoning: `'Articulate' means to express or give clear coherent form to ideas or feelings (giving tangible form to hidden anxieties).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'suppress', trapType: 'Opposite Action', whyIncorrect: 'Suppress means to forcibly put an end to or hold back. Giving tangible form is expressing, not suppressing.' },
        { optionIndex: 2, optionText: 'obliterate', trapType: 'Extreme Destruction', whyIncorrect: 'Obliterate means to destroy completely. The novels expressed the anxieties, they did not destroy them.' },
        { optionIndex: 3, optionText: 'exculpate', trapType: 'Inappropriate Context', whyIncorrect: 'Exculpate means to show or declare that someone is not guilty of wrongdoing (legal domain).' }
      ]
    }
  },
  {
    id: 'm1-ex-5',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In quantum optics, researchers often encounter measurement noise that can disguise delicate photon interactions. To overcome this hurdle, experimentalists utilize cryogenic cooling systems to ______ extraneous thermal interference, preserving signal purity during quantum state transmission.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['mitigate', 'amplify', 'engender', 'propose'],
    correctAnswer: 0,
    nextGenTechnique: 'Action & Effect Vector',
    explanation: {
      passageDeconstruction: `Thermal interference disguises photon interactions (a problem). Cooling systems are used to reduce or eliminate this interference to preserve signal purity.`,
      correctReasoning: `'Mitigate' means to make less severe, serious, or painful (reducing interference).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'amplify', trapType: 'Flop Trap / Opposite', whyIncorrect: 'Amplify means to make larger or stronger, which would increase noise.' },
        { optionIndex: 2, optionText: 'engender', trapType: 'Cause/Effect Trap', whyIncorrect: 'Engender means to cause or give rise to. Cooling reduces noise, it does not create it.' },
        { optionIndex: 3, optionText: 'propose', trapType: 'Wrong Domain', whyIncorrect: 'Propose means to put forward an idea; physical cooling systems reduce noise physically.' }
      ]
    }
  },
  {
    id: 'm1-ex-6',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Although the monarch butterfly's annual migration covers thousands of miles across North America, individual butterflies rely on remarkably ______ navigational cues, such as the position of the sun and Earth’s magnetic field, to maintain their trajectory.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['precise', 'erratic', 'superfluous', 'ambiguous'],
    correctAnswer: 0,
    nextGenTechnique: 'Contextual Clue Matching',
    explanation: {
      passageDeconstruction: `Monarchs travel thousands of miles and maintain their trajectory accurately using celestial and magnetic cues.`,
      correctReasoning: `'Precise' means exact and accurate, explaining how butterflies maintain their trajectory over vast distances.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'erratic', trapType: 'Opposite Meaning', whyIncorrect: 'Erratic means unpredictable, which would prevent maintaining a trajectory.' },
        { optionIndex: 2, optionText: 'superfluous', trapType: 'Logical Contradiction', whyIncorrect: 'Superfluous means unnecessary; navigational cues are essential for migration.' },
        { optionIndex: 3, optionText: 'ambiguous', trapType: 'Opposite Tone', whyIncorrect: 'Ambiguous means open to more than one interpretation or vague.' }
      ]
    }
  },
  {
    id: 'm1-ex-7',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In classical economic theory, markets were presumed to reach equilibrium rapidly through rational self-interest. However, behavioral economists have demonstrated that cognitive biases frequently ______ market predictions, leading to persistent anomalies like asset bubbles and panic selling.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['confound', 'validate', 'subsidize', 'expedite'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot ("However...")',
    explanation: {
      passageDeconstruction: `Classical theory expected rational equilibrium, but behavioral economists show biases mess up or invalidate predictions, causing anomalies like bubbles.`,
      correctReasoning: `'Confound' means to cause surprise or confusion in someone, or to defeat/frustrate (disrupting predictions).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'validate', trapType: 'Flop Trap', whyIncorrect: 'Validate means to confirm; biases disrupt predictions rather than confirm them.' },
        { optionIndex: 2, optionText: 'subsidize', trapType: 'Financial Domain Distractor', whyIncorrect: 'Subsidize means to pay part of the cost of something.' },
        { optionIndex: 3, optionText: 'expedite', trapType: 'Wrong Direction', whyIncorrect: 'Expedite means to make an action happen more quickly.' }
      ]
    }
  },
  {
    id: 'm1-ex-8',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The historical biographer stressed that analyzing seventeenth-century diplomatic letters requires extreme care; reading modern political assumptions into historical correspondence risks creating anachronisms that ______ the authentic intentions of the treaty authors.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['distort', 'corroborate', 'illuminate', 'reconcile'],
    correctAnswer: 0,
    nextGenTechnique: 'Negative Risk Vector',
    explanation: {
      passageDeconstruction: `Reading modern assumptions into historical texts creates anachronisms (errors in chronology), which harms or twists the true historical meaning.`,
      correctReasoning: `'Distort' means to give a misleading or false account or impression of, fitting the risk of misinterpreting historical intent.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'corroborate', trapType: 'Positive Tone Flop', whyIncorrect: 'Corroborate means to confirm or give support to, which anachronisms do not do.' },
        { optionIndex: 2, optionText: 'illuminate', trapType: 'Positive Tone Flop', whyIncorrect: 'Illuminate means to clarify or explain; false assumptions obscure rather than clarify.' },
        { optionIndex: 3, optionText: 'reconcile', trapType: 'Inappropriate Action', whyIncorrect: 'Reconcile means to restore friendly relations or make consistent.' }
      ]
    }
  },
  {
    id: 'm1-ex-9',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Environmental policy experts suggest that city planning departments adopt green roofs across municipal buildings. Beyond absorbing rainwater, these planted roofs reduce urban heat island effects, thereby helping to ______ energy consumption during hot summer months.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['curtail', 'escalate', 'stimulate', 'prolong'],
    correctAnswer: 0,
    nextGenTechnique: 'Benefit Matching',
    explanation: {
      passageDeconstruction: `Green roofs cool buildings and reduce heat, which leads to using less air conditioning energy in summer.`,
      correctReasoning: `'Curtail' means to reduce in extent or quantity, fitting the reduction of energy consumption.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'escalate', trapType: 'Opposite Effect', whyIncorrect: 'Escalate means to increase rapidly, which contradicts energy saving.' },
        { optionIndex: 2, optionText: 'stimulate', trapType: 'Opposite Effect', whyIncorrect: 'Stimulate means to encourage interest or activity in, not reduce.' },
        { optionIndex: 3, optionText: 'prolong', trapType: 'Duration Trap', whyIncorrect: 'Prolong means to extend the duration of.' }
      ]
    }
  },
  {
    id: 'm1-ex-10',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Sociologist Dr. Karen Vance notes that while formal institutions often rely on rigid legal codification, informal community networks depend on an unspoken repertoire of mutual understandings that remain surprisingly ______ even amid rapid demographic shifts.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['resilient', 'ephemeral', 'peripheral', 'antagonistic'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast & Continuity Vector',
    explanation: {
      passageDeconstruction: `Informal community networks rely on unspoken understandings that stay strong/intact ("surprisingly ____") despite rapid demographic changes.`,
      correctReasoning: `'Resilient' means able to withstand or recover quickly from difficult conditions or changes.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'ephemeral', trapType: 'Opposite Trait', whyIncorrect: 'Ephemeral means lasting for a very short time.' },
        { optionIndex: 2, optionText: 'peripheral', trapType: 'Importance Shift', whyIncorrect: 'Peripheral means relating to or situated on the edge; secondary.' },
        { optionIndex: 3, optionText: 'antagonistic', trapType: 'Negative Mood Trap', whyIncorrect: 'Antagonistic means showing active hostility.' }
      ]
    }
  },
  {
    id: 'm1-ex-11',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Despite operating in a market flooded with mass-produced furniture, the artisanal workshop thrived by emphasizing handcrafted woodwork made from locally harvested timber, offering customers products of ______ quality.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['exceptional', 'mediocre', 'dubious', 'negligible'],
    correctAnswer: 0,
    nextGenTechnique: 'Positive Distinction Vector',
    explanation: {
      passageDeconstruction: `The artisanal shop stood out and thrived against mass-produced items by making handcrafted timber goods, signaling superior craft.`,
      correctReasoning: `'Exceptional' means outstanding or unusually good, explaining why the workshop thrived.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'mediocre', trapType: 'Negative Tone', whyIncorrect: 'Mediocre means average or ordinary.' },
        { optionIndex: 2, optionText: 'dubious', trapType: 'Negative Tone', whyIncorrect: 'Dubious means hesitating or doubtful, suspicious.' },
        { optionIndex: 3, optionText: 'negligible', trapType: 'Negative Tone', whyIncorrect: 'Negligible means so small or unimportant as to be not worth considering.' }
      ]
    }
  },
  {
    id: 'm1-ex-12',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In evolutionary botany, angiosperms (flowering plants) executed a rapid diversification during the Cretaceous period that Charles Darwin famously described as an "abominable mystery." Modern genomic sequencing has begun to ______ this evolutionary conundrum by pinpointing ancient gene duplication events that enabled novel floral structures.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['elucidate', 'complicate', 'repress', 'obfuscate'],
    correctAnswer: 0,
    nextGenTechnique: 'Conundrum Solution Vector',
    explanation: {
      passageDeconstruction: `Darwin called angiosperm diversification a mystery/conundrum. Modern gene sequencing helps solve or explain this mystery by finding gene duplication events.`,
      correctReasoning: `'Elucidate' means to make clear or explain (solving the evolutionary mystery).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'complicate', trapType: 'Opposite Action', whyIncorrect: 'Complicate means to make more difficult, which sequencing resolves rather than worsens.' },
        { optionIndex: 2, optionText: 'repress', trapType: 'Inappropriate Action', whyIncorrect: 'Repress means to subdue or restrain by force.' },
        { optionIndex: 3, optionText: 'obfuscate', trapType: 'Opposite Action', whyIncorrect: 'Obfuscate means to confuse or hide meaning.' }
      ]
    }
  },
  {
    id: 'm1-ex-13',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `When writing historical biographies, researchers must cross-reference primary accounts to ensure accuracy. A single diary entry may reflect personal prejudice rather than objective reality, whereas multiple independent reports can ______ a subject's true conduct.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['corroborate', 'disprove', 'falsify', 'ignore'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast & Verification Vector',
    explanation: {
      passageDeconstruction: `One entry might be biased, but having multiple independent accounts helps confirm or support the truth about a historical subject.`,
      correctReasoning: `'Corroborate' means to confirm or give support to (a statement, theory, or finding).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'disprove', trapType: 'Opposite Action', whyIncorrect: 'Multiple matching accounts confirm truth, they do not disprove it.' },
        { optionIndex: 2, optionText: 'falsify', trapType: 'Opposite Action', whyIncorrect: 'Falsify means to alter information so as to mislead.' },
        { optionIndex: 3, optionText: 'ignore', trapType: 'Passive Inaction', whyIncorrect: 'Cross-referencing actively uses reports, not ignores them.' }
      ]
    }
  },
  {
    id: 'm1-ex-14',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Philosopher Hannah Arendt argued that political discourse deteriorates when public debate is dominated by totalizing ideological dogmas. In her view, vibrant democracy requires a pluralistic forum where citizens remain willing to ______ their preconceived notions when presented with persuasive counter-arguments.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['relinquish', 'fortify', 'dogmatize', 'dissemble'],
    correctAnswer: 0,
    nextGenTechnique: 'Prerequisite Action Vector',
    explanation: {
      passageDeconstruction: `Vibrant democracy contrasts with rigid dogma. It requires citizens to be willing to drop or let go of fixed ideas when faced with counter-arguments.`,
      correctReasoning: `'Relinquish' means to voluntarily cease to keep or claim; give up.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'fortify', trapType: 'Opposite Action', whyIncorrect: 'Fortify means to strengthen, which describes holding onto rigid dogmas.' },
        { optionIndex: 2, optionText: 'dogmatize', trapType: 'Same-Side Dogma Trap', whyIncorrect: 'Dogmatize means to state opinion as incontrovertible truth.' },
        { optionIndex: 3, optionText: 'dissemble', trapType: 'Deception Trap', whyIncorrect: 'Dissemble means to conceal one\'s true motives or beliefs.' }
      ]
    }
  },
  {
    id: 'm1-ex-15',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `The unexpected discovery of Roman coin hoards in southern India demonstrates that ancient maritime trade routes between the Mediterranean and the Indian subcontinent were far more ______ than nineteenth-century historians had previously estimated.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['extensive', 'isolated', 'meager', 'hazardous'],
    correctAnswer: 0,
    nextGenTechnique: 'Evidence Expansion Vector',
    explanation: {
      passageDeconstruction: `Finding coin hoards in far-off India proves ancient trade was widespread and active, far more so than old estimations thought.`,
      correctReasoning: `'Extensive' means covering a large area; widespread or far-reaching.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'isolated', trapType: 'Opposite Meaning', whyIncorrect: 'Isolated means far away from other places or remote, disconnected.' },
        { optionIndex: 2, optionText: 'meager', trapType: 'Opposite Meaning', whyIncorrect: 'Meager means lacking in quantity or quality.' },
        { optionIndex: 3, optionText: 'hazardous', trapType: 'Unmentioned Topic', whyIncorrect: 'Hazardous means dangerous; the text focuses on scale/reach of trade, not danger.' }
      ]
    }
  },
  {
    id: 'm1-ex-16',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `While the lead actor’s performance in the theatrical revival was undeniably charismatic, critics noted that his tendency to improvise dialogue threatened to ______ the delicate thematic coherence established by the playwright’s original script.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['impair', 'enhance', 'substantiate', 'canonize'],
    correctAnswer: 0,
    nextGenTechnique: 'Threat & Harm Vector',
    explanation: {
      passageDeconstruction: `Despite charisma, the actor's unscripted improvisations posed a threat ("threatened to ____") to the script's delicate coherence.`,
      correctReasoning: `'Impair' means to weaken or damage (damaging thematic coherence).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'enhance', trapType: 'Flop Trap', whyIncorrect: 'Enhance means improve, whereas unscripted changes threatened the coherence.' },
        { optionIndex: 2, optionText: 'substantiate', trapType: 'Positive Logic', whyIncorrect: 'Substantiate means provide evidence to support.' },
        { optionIndex: 3, optionText: 'canonize', trapType: 'Religious/Literary Honors Trap', whyIncorrect: 'Canonize means regard as being above reproach or place in a canon.' }
      ]
    }
  },
  {
    id: 'm1-ex-17',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In urban ecology, parks and community gardens act as crucial refuges for pollinator insects. Researchers found that planting diverse native wildflowers provided a steady source of nectar, thereby helping to ______ bee populations in heavily paved metropolitan areas.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['sustain', 'deplete', 'stifle', 'displace'],
    correctAnswer: 0,
    nextGenTechnique: 'Positive Environmental Vector',
    explanation: {
      passageDeconstruction: `Native wildflowers supply continuous nectar, functioning as a refuge that helps keep bee populations alive and thriving.`,
      correctReasoning: `'Sustain' means to strengthen or support physically or mentally; keep alive.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'deplete', trapType: 'Opposite Meaning', whyIncorrect: 'Deplete means to use up the supply or resources of.' },
        { optionIndex: 2, optionText: 'stifle', trapType: 'Opposite Meaning', whyIncorrect: 'Stifle means to prevent from breathing, restrain, or suppress.' },
        { optionIndex: 3, optionText: 'displace', trapType: 'Negative Movement', whyIncorrect: 'Displace means to force something to move from its home.' }
      ]
    }
  },
  {
    id: 'm1-ex-18',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `During the late Renaissance, humanists sought to rescue classical Greek and Latin manuscripts from monastic obscurity. Their relentless editorial efforts did not merely assemble dusty codices; rather, they helped ______ a intellectual revival across Europe that laid the groundwork for modern secular scholarship.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['catalyze', 'stymie', 'preempt', 'muffler'],
    correctAnswer: 0,
    nextGenTechnique: 'Ignition / Spark Vector',
    explanation: {
      passageDeconstruction: `Humanist scholars recovered old manuscripts, which acted as a spark/trigger ("helped ____ an intellectual revival") across Europe.`,
      correctReasoning: `'Catalyze' means to cause an action or process to begin or accelerate.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'stymie', trapType: 'Opposite Meaning', whyIncorrect: 'Stymie means prevent or hinder the progress of.' },
        { optionIndex: 2, optionText: 'preempt', trapType: 'Timing Inversion', whyIncorrect: 'Preempt means take action in order to prevent an anticipated event.' },
        { optionIndex: 3, optionText: 'muffle', trapType: 'Opposite Action', whyIncorrect: 'Muffle means deaden a sound or mute.' }
      ]
    }
  },
  {
    id: 'm1-ex-19',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `The novel’s protagonist is depicted as an exceptionally quiet individual who rarely expresses strong opinions in public. Nevertheless, her personal journals reveal an intensely ______ inner life filled with passionate reflections on art and philosophy.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['vibrant', 'dull', 'monotonous', 'superficial'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot ("Nevertheless...")',
    explanation: {
      passageDeconstruction: `While quiet and reserved on the outside, her inner life was the opposite: rich, passionate, and full of reflections.`,
      correctReasoning: `'Vibrant' means full of energy and life, matching "passionate reflections on art".`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'dull', trapType: 'Synonym for Exterior (Wrong Side)', whyIncorrect: 'Dull matches her quiet exterior, not her passionate inner journals.' },
        { optionIndex: 2, optionText: 'monotonous', trapType: 'Opposite Tone', whyIncorrect: 'Monotonous means lacking in variety and interest.' },
        { optionIndex: 3, optionText: 'superficial', trapType: 'Opposite Tone', whyIncorrect: 'Superficial means shallow, contradicting her deep reflections.' }
      ]
    }
  },
  {
    id: 'm1-ex-20',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In climatology, retrofitting coastal infrastructure to withstand rising sea levels demands substantial capital investment. However, municipal planners emphasize that proactive engineering today will ultimately ______ far greater economic losses when severe storm surges occur decades in the future.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['avert', 'induce', 'exacerbate', 'precipitate'],
    correctAnswer: 0,
    nextGenTechnique: 'Prevention & Savings Vector',
    explanation: {
      passageDeconstruction: `Investing in coastal defenses today stops or prevents ("will ultimately ____") major financial losses from future storms.`,
      correctReasoning: `'Avert' means to turn away or prevent (a desirable outcome: preventing losses).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'induce', trapType: 'Opposite Action', whyIncorrect: 'Induce means bring about or cause.' },
        { optionIndex: 2, optionText: 'exacerbate', trapType: 'Opposite Effect', whyIncorrect: 'Exacerbate means make a problem worse.' },
        { optionIndex: 3, optionText: 'precipitate', trapType: 'Cause/Trigger Trap', whyIncorrect: 'Precipitate means cause an event to happen suddenly or prematurely.' }
      ]
    }
  },
  {
    id: 'm1-ex-21',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `While earlier astronomy models viewed planetary orbits as perfect circles, Johannes Kepler introduced mathematical formulas demonstrating that planets actually travel along ______ paths with the Sun located at one focus.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['elliptical', 'concentric', 'linear', 'perpendicular'],
    correctAnswer: 0,
    nextGenTechnique: 'Scientific Definition Alignment',
    explanation: {
      passageDeconstruction: `Kepler disproved perfect circles by showing planetary orbits are oval shapes with two foci (ellipses).`,
      correctReasoning: `'Elliptical' means oval-shaped, directly describing Kepler\'s laws of planetary motion.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'concentric', trapType: 'Circle Redundancy', whyIncorrect: 'Concentric means sharing a center, often circles.' },
        { optionIndex: 2, optionText: 'linear', trapType: 'Incorrect Geometry', whyIncorrect: 'Linear means in a straight line.' },
        { optionIndex: 3, optionText: 'perpendicular', trapType: 'Incorrect Geometry', whyIncorrect: 'Perpendicular means at a 90-degree angle.' }
      ]
    }
  },
  {
    id: 'm1-ex-22',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The political satire of eighteenth-century writer Jonathan Swift was designed not merely to entertain aristocratic parlors, but to ______ the moral hypocrisy and political corruption of contemporary British governance.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['expose', 'extol', 'sanction', 'validate'],
    correctAnswer: 0,
    nextGenTechnique: 'Satire Purpose Vector',
    explanation: {
      passageDeconstruction: `Political satire aims to reveal or uncover ("____") moral hypocrisy and corruption to public criticism.`,
      correctReasoning: `'Expose' means to make visible or reveal the true, often discreditable, nature of something.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'extol', trapType: 'Opposite Tone', whyIncorrect: 'Extol means praise enthusiastically.' },
        { optionIndex: 2, optionText: 'sanction', trapType: 'Approval Trap', whyIncorrect: 'Sanction means give official permission or approval for.' },
        { optionIndex: 3, optionText: 'validate', trapType: 'Approval Trap', whyIncorrect: 'Validate means prove or declare to be correct or valid.' }
      ]
    }
  },
  {
    id: 'm1-ex-23',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `To prevent soil nutrient depletion, sustainable farmers practice crop rotation. By alternating nitrogen-demanding crops like corn with nitrogen-fixing legumes like soybeans, farmers can maintain soil fertility without relying ______ on synthetic chemical fertilizers.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['exclusively', 'peripherally', 'scarcely', 'inadvertently'],
    correctAnswer: 0,
    nextGenTechnique: 'Degree Vector',
    explanation: {
      passageDeconstruction: `Crop rotation helps maintain fertility so farmers don't have to depend solely or 100% on synthetic fertilizers.`,
      correctReasoning: `'Exclusively' means solely; without sharing or relying on anything else.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'peripherally', trapType: 'Minor Extent Trap', whyIncorrect: 'Peripherally means marginally or on the edge.' },
        { optionIndex: 2, optionText: 'scarcely', trapType: 'Negative Misalignment', whyIncorrect: 'Scarcely means barely or hardly.' },
        { optionIndex: 3, optionText: 'inadvertently', trapType: 'Intentionality Trap', whyIncorrect: 'Inadvertently means without intention; accidentally.' }
      ]
    }
  },
  {
    id: 'm1-ex-24',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In cell biology, apoptosis is a highly regulated form of programmed cell death essential for tissue development. When genetic mutations impair this mechanism, damaged cells may divide uncontrollably, giving rise to malignant tumors that ______ nearby healthy tissues.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['encroach upon', 'subsidize', 'rejuvenate', 'harmonize with'],
    correctAnswer: 0,
    nextGenTechnique: 'Invasive Action Vector',
    explanation: {
      passageDeconstruction: `Uncontrolled cell division leads to malignant tumors that intrude into or invade ("____") healthy tissues.`,
      correctReasoning: `'Encroach upon' means to intrude gradually or advance beyond proper limits on another\'s territory or health.`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'subsidize', trapType: 'Financial Domain Distractor', whyIncorrect: 'Subsidize means financially support.' },
        { optionIndex: 2, optionText: 'rejuvenate', trapType: 'Positive Health Flop', whyIncorrect: 'Rejuvenate means make young or vital again.' },
        { optionIndex: 3, optionText: 'harmonize with', trapType: 'Positive Health Flop', whyIncorrect: 'Harmonize means bring into agreement or harmony.' }
      ]
    }
  },
  {
    id: 'm1-ex-25',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Although the ambassador's speech appeared noncommittal to casual listeners, experienced diplomats recognized that her carefully chosen metaphors carried a ______ warning regarding border security enforcement.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['veiled', 'conspicuous', 'superfluous', 'blatant'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot ("noncommittal to casual... carried a ____")',
    explanation: {
      passageDeconstruction: `Casual listeners thought it was noncommittal, but experts saw that metaphors hid a warning beneath the surface.`,
      correctReasoning: `'Veiled' means expressed in an indirect or disguised way (hidden beneath metaphors).`,
      distractorAnalysis: [
        { optionIndex: 1, optionText: 'conspicuous', trapType: 'Opposite Trait', whyIncorrect: 'Conspicuous means clearly visible or standing out.' },
        { optionIndex: 2, optionText: 'superfluous', trapType: 'Relevance Trap', whyIncorrect: 'Superfluous means unnecessary.' },
        { optionIndex: 3, optionText: 'blatant', trapType: 'Opposite Trait', whyIncorrect: 'Blatant means completely obvious or undisguised, which contradicts casual listeners missing it.' }
      ]
    }
  }
];
