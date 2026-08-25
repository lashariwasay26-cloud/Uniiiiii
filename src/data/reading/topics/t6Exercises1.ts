import { ReadingQuestion } from '../readingTypes';

export const T6_EXERCISES_PART1: ReadingQuestion[] = [
  {
    id: 't6-ex-1',
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
    id: 't6-ex-2',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Plant ecologists analyzing drought responses in European beech trees (*Fagus sylvatica*) observed that during severe summer heatwaves, trees growing in high-density unthinned forest stands experienced embolisms in 45% of their xylem vessels. In contrast, beech trees in low-density thinned stands experienced xylem embolisms in only 12% of vessels, because reduced competition for soil water allowed trees in thinned stands to maintain higher hydraulic pressure, suggesting that forest density management ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'can mitigate the physiological impact of severe drought on tree hydraulic systems.',
      'has zero measurable impact on tree survival during summer heatwaves.',
      'completely eliminates the need for rainfall in temperate forest ecosystems.',
      'causes xylem vessels to collapse faster in low-density thinned stands.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Premise: High density = 45% xylem embolisms under drought; Low density (thinned) = 12% xylem embolisms due to less competition for soil water. Conclusion: Forest density management can mitigate physiological drought impact on tree hydraulic systems.`,
      correctReasoning: `Option A logically completes the text by concluding that managing forest density mitigates drought impact.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'can mitigate the physiological impact of severe drought on tree...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by the lower embolism rate in thinned stands.' },
        { optionIndex: 1, optionText: 'has zero measurable impact on tree survival during summer...', trapType: 'Direct Contradiction', whyIncorrect: 'Embolisms dropped from 45% to 12%, proving a major impact.' },
        { optionIndex: 2, optionText: 'completely eliminates the need for rainfall in temperate...', trapType: 'Absurd Absolute Trap', whyIncorrect: 'Thinning reduces water competition, but rainfall is still needed.' },
        { optionIndex: 3, optionText: 'causes xylem vessels to collapse faster in low-density...', trapType: 'Direct Contradiction', whyIncorrect: 'Low density reduced embolisms from 45% to 12%.' }
      ]
    }
  },
  {
    id: 't6-ex-3',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In behavioral neuroscience experiments, rats trained to press a lever for food rewards exhibited high activity in the nucleus accumbens during cue presentation. When researchers administered a dopamine receptor antagonist directly into the nucleus accumbens, the rats continued pressing the lever when food was present, but ceased responding to predictive audio cues that previously triggered lever pressing. This result implies that dopamine in the nucleus accumbens is required specifically for ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'cue-triggered anticipatory motivation rather than the physical consumption of rewards.',
      'the mechanical muscular execution of lever pressing movements.',
      'the sensory digestion of food nutrients in the stomach.',
      'long-term auditory hearing preservation in rodent inner ears.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Blocking dopamine -> rats still ate food when present, but STOPPED responding to predictive audio cues that triggered lever pressing. Conclusion: Dopamine is required specifically for cue-triggered anticipatory motivation rather than physical reward consumption.`,
      correctReasoning: `Option A accurately distinguishes cue-triggered motivation from physical consumption.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'cue-triggered anticipatory motivation rather than the physical...', trapType: 'Correct Logical Completion', whyIncorrect: 'Directly matches the loss of response to cues while keeping food consumption.' },
        { optionIndex: 1, optionText: 'the mechanical muscular execution of lever pressing movements.', trapType: 'Direct Contradiction', whyIncorrect: 'Rats still pressed the lever when food was present, proving muscle execution was intact.' },
        { optionIndex: 2, optionText: 'the sensory digestion of food nutrients in the stomach.', trapType: 'Wrong Physiological Domain', whyIncorrect: 'Stomach digestion is not governed by nucleus accumbens dopamine.' },
        { optionIndex: 3, optionText: 'long-term auditory hearing preservation in rodent inner ears.', trapType: 'Wrong Sensory System', whyIncorrect: 'Inner ear hearing preservation is not dopamine-dependent motivation.' }
      ]
    }
  },
  {
    id: 't6-ex-4',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Astronomers analyzing light spectra from exoplanet K2-18b detected atmospheric water vapor, methane, and carbon dioxide, while noting a total absence of ammonia ($NH_3$). Photochemical climate models indicate that in a hydrogen-rich atmosphere, ammonia is rapidly dissolved into liquid water oceans if a planetary surface ocean exists, suggesting that the lack of atmospheric ammonia on K2-18b ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'is consistent with the presence of a global liquid water ocean beneath its atmosphere.',
      'proves K2-18b possesses a solid iron surface with zero atmospheric gases.',
      'indicates that K2-18b has surface temperatures exceeding 1,000 degrees Celsius.',
      'demonstrates that photochemical climate models are entirely inaccurate.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Premise 1: Photochemical models state ammonia dissolves into liquid oceans if present. Premise 2: K2-18b atmosphere lacks ammonia. Conclusion: This absence is consistent with the presence of a liquid water ocean.`,
      correctReasoning: `Option A conservatively completes the logic based on the photochemical model mechanism.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'is consistent with the presence of a global liquid water ocean...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly follows from photochemical model stating oceans absorb ammonia.' },
        { optionIndex: 1, optionText: 'proves K2-18b possesses a solid iron surface with zero...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states K2-18b has water vapor, methane, and $CO_2$ in its atmosphere.' },
        { optionIndex: 2, optionText: 'indicates that K2-18b has surface temperatures exceeding...', trapType: 'Unmentioned Temperature', whyIncorrect: 'Extreme 1,000°C temperatures are not mentioned.' },
        { optionIndex: 3, optionText: 'demonstrates that photochemical climate models are entirely...', trapType: 'Opposite Deduction', whyIncorrect: 'The observation aligns with the photochemical model predictions.' }
      ]
    }
  },
  {
    id: 't6-ex-5',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In an economic study of consumer adoption of electric vehicles (EVs), researchers found that offering direct upfront purchase rebates ($5,000$) at dealership point-of-sale increased monthly EV sales by 32%. Conversely, offering an equivalent $5,000$ tax credit claimable during annual tax filings twelve months later produced only a 4% increase in monthly EV sales, indicating that consumers ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'heavily discount delayed financial incentives compared to immediate price reductions.',
      'prefer paying full price for gasoline vehicles over receiving any financial rebate.',
      'are indifferent to the timing of government tax credit disbursemal.',
      'value annual tax filing credits more than immediate cash discounts.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Upfront $5,000 rebate -> +32% sales. Delayed 12-month $5,000 tax credit -> +4% sales. Conclusion: Consumers heavily discount delayed incentives compared to immediate price reductions.`,
      correctReasoning: `Option A accurately completes the economic inference regarding hyperbolic time discounting.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'heavily discount delayed financial incentives compared to immediate...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 32% (immediate) vs 4% (delayed 12-month) sales gain.' },
        { optionIndex: 1, optionText: 'prefer paying full price for gasoline vehicles over receiving...', trapType: 'Gasoline Vehicle Distractor', whyIncorrect: 'Gasoline vehicles are not compared.' },
        { optionIndex: 2, optionText: 'are indifferent to the timing of government tax credit disbursemal.', trapType: 'Direct Contradiction', whyIncorrect: '32% vs 4% proves timing makes a massive difference.' },
        { optionIndex: 3, optionText: 'value annual tax filing credits more than immediate cash discounts.', trapType: 'Opposite Deduction', whyIncorrect: 'Reversed: immediate cash drove 32% vs 4% for tax credits.' }
      ]
    }
  },
  {
    id: 't6-ex-6',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Volcanologists studying supervolcanic eruptions discovered that quartz crystals from the Bishop Tuff deposit in California contain microscopic melt inclusions preserved during magma chamber assembly. Isotopic diffusion rates within these inclusions reveal that the magma chamber transitioned from a semi-solid crystal mush to an eruptible liquid state in less than 500 years prior to eruption, challenging previous models suggesting that supervolcanic magma chambers ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'require tens of thousands of years of continuous liquid state accumulation before erupting.',
      'erupt instantaneously without any prior thermal magma assembly.',
      'form exclusively in oceanic trench subduction zones.',
      'cool into solid granite without ever producing volcanic ash.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `New finding: Magma chamber accumulated into eruptible liquid in <500 years. This challenges previous models that assumed supervolcanoes required tens of thousands of years of liquid accumulation.`,
      correctReasoning: `Option A logically completes the contrast between <500 years (new) and long timelines (previous models).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'require tens of thousands of years of continuous liquid state...', trapType: 'Correct Contrast Completion', whyIncorrect: 'Directly contrasts <500 years fast assembly with traditional long-timeline models.' },
        { optionIndex: 1, optionText: 'erupt instantaneously without any prior thermal magma assembly.', trapType: 'Extreme Absurdity', whyIncorrect: '500 years is fast for geology, but not "instantaneous".' },
        { optionIndex: 2, optionText: 'form exclusively in oceanic trench subduction zones.', trapType: 'Unmentioned Location', whyIncorrect: 'Geographic trench zones are not mentioned.' },
        { optionIndex: 3, optionText: 'cool into solid granite without ever producing volcanic ash.', trapType: 'Unmentioned Mechanism', whyIncorrect: 'Ashless granite cooling is not discussed.' }
      ]
    }
  },
  {
    id: 't6-ex-7',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In molecular biology experiments, researchers treated human cancer cell cultures with a small-molecule inhibitor targeting the enzyme telomerase. Initial cell division rates remained normal for twenty generations, but after twenty-five generations, telomeres eroded to critical threshold lengths, triggering massive cell senescence and apoptosis. This delayed therapeutic response indicates that telomerase inhibitors ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'do not cause immediate cell death, but rather induce eventual apoptosis as telomeres shorten over successive divisions.',
      'accelerate cancer cell division during early treatment generations.',
      'permanently lengthen telomeres in healthy human somatic cells.',
      'destroy cancer cell membranes within minutes of initial administration.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Initial cell division was normal for 20 generations; cell death (apoptosis) occurred only after 25 generations when telomeres eroded to critical lengths. Conclusion: Inhibitors don't kill immediately, but cause eventual apoptosis as telomeres shorten over successive divisions.`,
      correctReasoning: `Option A accurately summarizes the delayed, division-dependent mechanism of telomerase inhibition.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'do not cause immediate cell death, but rather induce eventual apoptosis...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by normal division for 20 generations followed by delayed apoptosis at gen 25.' },
        { optionIndex: 1, optionText: 'accelerate cancer cell division during early treatment generations.', trapType: 'Distorted Premise Trap', whyIncorrect: 'Text states division rate remained normal, not accelerated.' },
        { optionIndex: 2, optionText: 'permanently lengthen telomeres in healthy human somatic cells.', trapType: 'Direct Contradiction', whyIncorrect: 'Inhibitor caused telomeres to erode/shorten, not lengthen.' },
        { optionIndex: 3, optionText: 'destroy cancer cell membranes within minutes of initial administration.', trapType: 'Direct Contradiction', whyIncorrect: 'It took 25 cell generations, not minutes.' }
      ]
    }
  },
  {
    id: 't6-ex-8',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `A team of climatologists analyzing ice core samples from Greenland reconstructed atmospheric methane ($CH_4$) concentrations over the past 800,000 years. They observed that every major spike in atmospheric methane aligned precisely with orbital eccentricity cycles that intensified tropical monsoon rains, expanding wetland gas emissions, suggesting that natural pre-industrial methane fluctuations were driven primarily by ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'orbitally driven variations in tropical wetland hydrology.',
      'widespread agricultural rice cultivation in ancient Europe.',
      'sudden asteroid impacts altering atmospheric nitrogen layers.',
      'volcanic basalt eruptions in sub-Antarctic island chains.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Methane spikes aligned precisely with orbital cycles that intensified tropical monsoon rains and expanded wetland emissions. Conclusion: Pre-industrial methane spikes were driven by orbitally driven variations in tropical wetland hydrology.`,
      correctReasoning: `Option A directly synthesizes orbital cycles, monsoon rains, and wetland emissions into a concise logical conclusion.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'orbitally driven variations in tropical wetland hydrology.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly synthesizes orbital cycles, monsoon rains, and wetland gas emissions.' },
        { optionIndex: 1, optionText: 'widespread agricultural rice cultivation in ancient Europe.', trapType: 'Anachronistic Distractor', whyIncorrect: 'Pre-industrial 800,000-year ice core data predates ancient European agriculture.' },
        { optionIndex: 2, optionText: 'sudden asteroid impacts altering atmospheric nitrogen layers.', trapType: 'Unmentioned Event', whyIncorrect: 'Asteroid impacts are not mentioned.' },
        { optionIndex: 3, optionText: 'volcanic basalt eruptions in sub-Antarctic island chains.', trapType: 'Unmentioned Event', whyIncorrect: 'Volcanic basalt eruptions are not mentioned.' }
      ]
    }
  },
  {
    id: 't6-ex-9',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In a trial evaluating autonomous vehicle collision-avoidance algorithms, researchers compared two decision models: Model A (trained exclusively on synthetic computer-generated traffic simulations) and Model B (trained on real-world driving footage combined with synthetic simulations). When deployed on closed physical test tracks featuring unexpected pedestrian obstacles, Model A produced a 28% failure rate, whereas Model B produced a 2% failure rate, indicating that synthetic traffic simulations alone ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'are insufficient to fully prepare autonomous vehicle algorithms for real-world driving complexities.',
      'outperform real-world driving footage in training emergency collision avoidance.',
      'completely eliminate the need for physical test track evaluations.',
      'cause sensor hardware failures in autonomous vehicle steering columns.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Synthetic simulations alone (Model A) -> 28% failure rate on test tracks. Synthetic + real-world footage (Model B) -> 2% failure rate. Conclusion: Synthetic simulations alone are insufficient to fully prepare autonomous vehicle algorithms.`,
      correctReasoning: `Option A conservatively concludes that synthetic simulations alone are insufficient.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'are insufficient to fully prepare autonomous vehicle algorithms for...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 28% failure (synthetic alone) vs 2% failure (combined).' },
        { optionIndex: 1, optionText: 'outperform real-world driving footage in training emergency...', trapType: 'Opposite Deduction', whyIncorrect: 'Model A (synthetic alone) performed vastly worse than Model B.' },
        { optionIndex: 2, optionText: 'completely eliminate the need for physical test track evaluations.', trapType: 'Direct Contradiction', whyIncorrect: 'Test tracks revealed the severe 28% failure rate.' },
        { optionIndex: 3, optionText: 'cause sensor hardware failures in autonomous vehicle steering...', trapType: 'Hardware Failure Distractor', whyIncorrect: 'Steering column hardware failure is not mentioned.' }
      ]
    }
  },
  {
    id: 't6-ex-10',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Marine biologists tracking deep-diving elephant seals (*Mirounga angustirostris*) fitted with satellite depth tags noted that the seals descend to depths of 1,200 meters during 30-minute foraging dives. Muscle tissue biopsies revealed exceptionally high concentrations of myoglobin—an iron-binding protein that stores oxygen in muscle tissue—allowing elephant seals to maintain aerobic muscle metabolism during extended breath-hold dives, demonstrating that high myoglobin concentration is an adaptation that ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'supports prolonged underwater aerobic foraging in oxygen-deprived deep ocean environments.',
      'allows elephant seals to breathe dissolved oxygen through specialized skin pores.',
      'eliminates the requirement for elephant seals to surface for atmospheric air.',
      'prevents blood circulation to cerebral brain tissue during deep ocean dives.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `High myoglobin (oxygen-binding protein in muscle) maintains aerobic muscle metabolism during 30-minute, 1,200m dives. Conclusion: Myoglobin supports prolonged underwater aerobic foraging in deep ocean environments.`,
      correctReasoning: `Option A conservatively completes the biological function inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'supports prolonged underwater aerobic foraging in oxygen-deprived...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by myoglobin storing oxygen for 30-minute 1,200m dives.' },
        { optionIndex: 1, optionText: 'allows elephant seals to breathe dissolved oxygen through specialized...', trapType: 'Scientific Falsehood', whyIncorrect: 'Mammals cannot breathe dissolved oxygen through skin pores.' },
        { optionIndex: 2, optionText: 'eliminates the requirement for elephant seals to surface for...', trapType: 'Absurd Absolute', whyIncorrect: 'Seals still must surface to breathe atmospheric air.' },
        { optionIndex: 3, optionText: 'prevents blood circulation to cerebral brain tissue during deep...', trapType: 'Harmful Physiological Claim', whyIncorrect: 'Blocking brain circulation would cause brain death.' }
      ]
    }
  }
];
