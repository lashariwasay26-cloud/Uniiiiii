import { ReadingQuestion } from '../readingTypes';

export const T1_EXERCISES_PART2: ReadingQuestion[] = [
  {
    id: 't1-ex-26',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In cell biology, mitochondria are often described as powerhouses because they ______ adenosine triphosphate (ATP), the primary chemical energy currency utilized by living cells.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['synthesize', 'consume', 'dissipate', 'inhibit'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `Mitochondria are called powerhouses because they create or generate ATP (the cell's energy currency).`,
      correctReasoning: `'Synthesize' means to produce or combine chemical substances to form a complex product.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'synthesize', trapType: 'Correct Biological Verb', whyIncorrect: 'Correct. Synthesizing ATP means producing cellular energy.' },
        { optionIndex: 1, optionText: 'consume', trapType: 'Opposite Role', whyIncorrect: 'Consuming ATP is what other organelles do; mitochondria generate it.' },
        { optionIndex: 2, optionText: 'dissipate', trapType: 'Waste Action', whyIncorrect: 'Dissipate means scatter or waste energy.' },
        { optionIndex: 3, optionText: 'inhibit', trapType: 'Opposite Function', whyIncorrect: 'Inhibit means prevent or stop, conflicting with "powerhouse".' }
      ]
    }
  },
  {
    id: 't1-ex-27',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The political analyst remarked that the candidate's speech was remarkably ______; despite speaking for over an hour, he managed to avoid taking a definitive stance on any controversial policy issue.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['evasive', 'candid', 'forthright', 'incisive'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Clue Matching',
    explanation: {
      passageDeconstruction: `Semicolon explanation: despite speaking for over an hour, he avoided taking a definitive stance on any controversial issue.`,
      correctReasoning: `'Evasive' means tending to avoid commitment or self-revelation, especially by responding indirectly.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'evasive', trapType: 'Correct Descriptor', whyIncorrect: 'Correct. Evasive describes deliberately avoiding definitive stances.' },
        { optionIndex: 1, optionText: 'candid', trapType: 'Opposite Meaning', whyIncorrect: 'Candid means truthful and straightforward.' },
        { optionIndex: 2, optionText: 'forthright', trapType: 'Opposite Meaning', whyIncorrect: 'Forthright means direct and outspoken.' },
        { optionIndex: 3, optionText: 'incisive', trapType: 'Opposite Quality', whyIncorrect: 'Incisive means intelligently analytical and clear-thinking.' }
      ]
    }
  },
  {
    id: 't1-ex-28',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `To prevent soil degradation in agricultural regions, farmers are increasingly adopting cover crop rotation, which helps ______ soil nitrogen levels naturally without synthetic fertilizers.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['boost', 'deplete', 'siphon', 'squander'],
    correctAnswer: 0,
    nextGenTechnique: 'Positive Action Vector',
    explanation: {
      passageDeconstruction: `Cover crop rotation prevents degradation and improves soil health by increasing nitrogen levels naturally.`,
      correctReasoning: `'Boost' means to help or encourage to increase or improve.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'boost', trapType: 'Correct Positive Verb', whyIncorrect: 'Correct. Boosting nitrogen improves soil fertility.' },
        { optionIndex: 1, optionText: 'deplete', trapType: 'Opposite Action', whyIncorrect: 'Deplete means exhaust nitrogen, which synthetic fertilizers or poor farming do.' },
        { optionIndex: 2, optionText: 'siphon', trapType: 'Negative Drain', whyIncorrect: 'Siphon means drain away or remove.' },
        { optionIndex: 3, optionText: 'squander', trapType: 'Waste Action', whyIncorrect: 'Squander means waste carelessly.' }
      ]
    }
  },
  {
    id: 't1-ex-29',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `While early acoustic recordings from the 1920s suffer from noticeable surface hiss and restricted dynamic range, modern digital restoration techniques can ______ those audio artifacts to reveal the subtle nuances of the original performances.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['attenuate', 'amplify', 'perpetuate', 'exacerbate'],
    correctAnswer: 0,
    nextGenTechnique: 'Secondary Definition Precision',
    explanation: {
      passageDeconstruction: `Modern restoration reduces unwanted surface hiss and noise artifacts to clarify performance nuances.`,
      correctReasoning: `'Attenuate' means to reduce the force, effect, or value of something (here, reducing surface noise and hiss).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'attenuate', trapType: 'Correct Technical Verb', whyIncorrect: 'Correct. Attenuate means reduce or weaken unwanted noise signals.' },
        { optionIndex: 1, optionText: 'amplify', trapType: 'Opposite Action', whyIncorrect: 'Amplify means increase volume, making surface noise worse.' },
        { optionIndex: 2, optionText: 'perpetuate', trapType: 'Negative Trap', whyIncorrect: 'Perpetuate means preserve indefinitely, opposite of filtering out noise.' },
        { optionIndex: 3, optionText: 'exacerbate', trapType: 'Opposite Action', whyIncorrect: 'Exacerbate means make noise artifacts worse.' }
      ]
    }
  },
  {
    id: 't1-ex-30',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `The new public transit line was designed to ______ urban mobility between suburban neighborhoods and the central business district, cutting travel times in half.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['enhance', 'restrict', 'stagnate', 'impede'],
    correctAnswer: 0,
    nextGenTechnique: 'Positive Outcome Vector',
    explanation: {
      passageDeconstruction: `Cutting travel times in half improves or boosts transit and mobility across the city.`,
      correctReasoning: `'Enhance' means to intensify, increase, or further improve the quality or value of something.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'enhance', trapType: 'Correct Positive Verb', whyIncorrect: 'Correct. Enhancing mobility matches cutting travel time.' },
        { optionIndex: 1, optionText: 'restrict', trapType: 'Opposite Meaning', whyIncorrect: 'Restrict means limit or confine.' },
        { optionIndex: 2, optionText: 'stagnate', trapType: 'Opposite Meaning', whyIncorrect: 'Stagnate means cease to flow or develop.' },
        { optionIndex: 3, optionText: 'impede', trapType: 'Opposite Meaning', whyIncorrect: 'Impede means delay or block.' }
      ]
    }
  },
  {
    id: 't1-ex-31',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Although the ambassador's public remarks were phrased in polite diplomatic language, observers noted that her tone was unmistakably ______; she signaled that failure to reach an agreement would result in immediate economic sanctions.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['uncompromising', 'conciliatory', 'deferential', 'ambiguous'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot & Clue Matching',
    explanation: {
      passageDeconstruction: `Contrast: remarks were phrased in polite language, but her underlying tone was strict and firm, threatening immediate sanctions if demands were not met.`,
      correctReasoning: `'Uncompromising' means harsh or inflexible; refusing to give up demands.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'uncompromising', trapType: 'Correct Descriptor', whyIncorrect: 'Correct. Uncompromising matches threatening immediate sanctions.' },
        { optionIndex: 1, optionText: 'conciliatory', trapType: 'Opposite Meaning', whyIncorrect: 'Conciliatory means peacemaking, which contradicts threatening sanctions.' },
        { optionIndex: 2, optionText: 'deferential', trapType: 'Opposite Meaning', whyIncorrect: 'Deferential means respectful or submissive.' },
        { optionIndex: 3, optionText: 'ambiguous', trapType: 'Unclear Trap', whyIncorrect: 'Threatening immediate sanctions is explicit, not ambiguous.' }
      ]
    }
  },
  {
    id: 't1-ex-32',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In marine chemistry, oceanic absorption of excess carbon dioxide leads to ocean acidification, which can ______ the ability of calcifying organisms like shellfish to build protective shells.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['impair', 'bolster', 'stimulate', 'validate'],
    correctAnswer: 0,
    nextGenTechnique: 'Negative Impact Vector',
    explanation: {
      passageDeconstruction: `Ocean acidification harms marine calcifying organisms, reducing or damaging their ability to build shells.`,
      correctReasoning: `'Impair' means to weaken or damage something (especially a human faculty or functioning system).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'impair', trapType: 'Correct Negative Verb', whyIncorrect: 'Correct. Impairing shell construction matches acidification damage.' },
        { optionIndex: 1, optionText: 'bolster', trapType: 'Opposite Action', whyIncorrect: 'Bolster means strengthen.' },
        { optionIndex: 2, optionText: 'stimulate', trapType: 'Opposite Action', whyIncorrect: 'Stimulate means encourage growth or activity.' },
        { optionIndex: 3, optionText: 'validate', trapType: 'Misaligned Verb', whyIncorrect: 'Validate means prove valid or correct.' }
      ]
    }
  },
  {
    id: 't1-ex-33',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In late twentieth-century architecture, postmodernists sought to ______ the rigid aesthetic conventions of International Style functionalism by incorporating playful historical ornament and vibrant color palettes into building facades.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['subvert', 'endorse', 'replicate', 'codify'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `Postmodernists rejected rigid rules and sought to overthrow or undermine established functionalist conventions using ornament and color.`,
      correctReasoning: `'Subvert' means to undermine the power and authority of an established system or institution.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'subvert', trapType: 'Correct Action Verb', whyIncorrect: 'Correct. Subverting rigid rules matches adopting playful non-functional ornament.' },
        { optionIndex: 1, optionText: 'endorse', trapType: 'Opposite Meaning', whyIncorrect: 'Endorse means declare public approval of.' },
        { optionIndex: 2, optionText: 'replicate', trapType: 'Opposite Action', whyIncorrect: 'Replicate means make an exact copy of.' },
        { optionIndex: 3, optionText: 'codify', trapType: 'Systematize Trap', whyIncorrect: 'Codify means arrange rules into a systematic code, reinforcing rather than challenging them.' }
      ]
    }
  },
  {
    id: 't1-ex-34',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Environmental scientists noted that reforestation efforts in degraded watersheds can ______ soil erosion by establishing permanent root systems that bind earth particles together.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['mitigate', 'exacerbate', 'stimulate', 'prolong'],
    correctAnswer: 0,
    nextGenTechnique: 'Cause-and-Effect Alignment',
    explanation: {
      passageDeconstruction: `Root systems bind soil earth particles together, reducing or lessening soil erosion.`,
      correctReasoning: `'Mitigate' means to make less severe, serious, or painful.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'mitigate', trapType: 'Correct Functional Verb', whyIncorrect: 'Correct. Mitigating soil erosion means reducing its severity.' },
        { optionIndex: 1, optionText: 'exacerbate', trapType: 'Opposite Action', whyIncorrect: 'Exacerbate means make erosion worse.' },
        { optionIndex: 2, optionText: 'stimulate', trapType: 'Opposite Action', whyIncorrect: 'Stimulate means spur or trigger erosion.' },
        { optionIndex: 3, optionText: 'prolong', trapType: 'Time Delay Trap', whyIncorrect: 'Prolong means extend in duration.' }
      ]
    }
  },
  {
    id: 't1-ex-35',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `While the preliminary report contained several factual inaccuracies, the committee chairman maintained that these minor errors did not ______ the fundamental validity of the investigation's conclusions.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['compromise', 'corroborate', 'reassure', 'substantiate'],
    correctAnswer: 0,
    nextGenTechnique: 'Negative Vector Matching',
    explanation: {
      passageDeconstruction: `Minor factual errors existed, but the chairman argued they "did not" undermine or weaken the core validity of the conclusions.`,
      correctReasoning: `'Compromise' in this context means to bring into disrepute or danger by unwise action; to weaken or undermine.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'compromise', trapType: 'Correct Secondary Meaning', whyIncorrect: 'Correct. "Did not compromise" means did not undermine or weaken validity.' },
        { optionIndex: 1, optionText: 'corroborate', trapType: 'Flop Trap', whyIncorrect: 'Corroborate means support; errors would not corroborate validity anyway.' },
        { optionIndex: 2, optionText: 'reassure', trapType: 'Tone Shift', whyIncorrect: 'Reassure means comfort or remove fear.' },
        { optionIndex: 3, optionText: 'substantiate', trapType: 'Flop Trap', whyIncorrect: 'Substantiate means prove; errors do not substantiate validity.' }
      ]
    }
  },
  {
    id: 't1-ex-36',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In botanical art, illustrations must be highly ______; artists must depict every floral structure and leaf vein with absolute precision so that botanists can identify plant species reliably.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['accurate', 'fanciful', 'abstract', 'ambiguous'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Clue Matching',
    explanation: {
      passageDeconstruction: `Semicolon explanation: artists must depict every floral structure with absolute precision for reliable identification.`,
      correctReasoning: `'Accurate' means correct in all details; exact.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'accurate', trapType: 'Correct Descriptor', whyIncorrect: 'Correct. Accurate matches absolute precision.' },
        { optionIndex: 1, optionText: 'fanciful', trapType: 'Opposite Quality', whyIncorrect: 'Fanciful means imaginative or unrealistic.' },
        { optionIndex: 2, optionText: 'abstract', trapType: 'Opposite Quality', whyIncorrect: 'Abstract art avoids realistic detail.' },
        { optionIndex: 3, optionText: 'ambiguous', trapType: 'Opposite Quality', whyIncorrect: 'Ambiguous means vague or open to multiple interpretations.' }
      ]
    }
  },
  {
    id: 't1-ex-37',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The archaeologist argued that the ancient civilization's sudden collapse was not caused by a single catastrophic drought, but rather resulted from a ______ series of ecological and economic pressures over several centuries.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['cumulative', 'momentary', 'singular', 'monolithic'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    explanation: {
      passageDeconstruction: `Contrast: not a single sudden catastrophic event, but a building up of pressures over several centuries.`,
      correctReasoning: `'Cumulative' means increasing or increased in quantity, degree, or force by successive additions.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'cumulative', trapType: 'Correct Contrast Word', whyIncorrect: 'Correct. Cumulative describes building up gradually over centuries.' },
        { optionIndex: 1, optionText: 'momentary', trapType: 'Opposite Duration', whyIncorrect: 'Momentary means lasting a very short time.' },
        { optionIndex: 2, optionText: 'singular', trapType: 'First Theory Trap', whyIncorrect: 'Singular means single/unique, matching the single event theory being rejected.' },
        { optionIndex: 3, optionText: 'monolithic', trapType: 'Misaligned Adjective', whyIncorrect: 'Monolithic means large, rigid, and slow to change.' }
      ]
    }
  },
  {
    id: 't1-ex-38',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Modern cryptographic algorithms rely on complex mathematical formulas to ______ sensitive financial transactions against unauthorized interception across public networks.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['safeguard', 'expose', 'jeopardize', 'surrender'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `Cryptographic algorithms protect sensitive financial transactions from unauthorized interception.`,
      correctReasoning: `'Safeguard' means to protect from harm or damage with an appropriate measure.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'safeguard', trapType: 'Correct Functional Verb', whyIncorrect: 'Correct. Safeguard means protect sensitive transactions.' },
        { optionIndex: 1, optionText: 'expose', trapType: 'Opposite Action', whyIncorrect: 'Expose means leave unprotected.' },
        { optionIndex: 2, optionText: 'jeopardize', trapType: 'Opposite Action', whyIncorrect: 'Jeopardize means put at risk.' },
        { optionIndex: 3, optionText: 'surrender', trapType: 'Opposite Action', whyIncorrect: 'Surrender means give up.' }
      ]
    }
  },
  {
    id: 't1-ex-39',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In sociology, the researcher's field observations demonstrated that economic inequality can ______ social trust within neighborhoods, fostering alienation among residents.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['erode', 'fortify', 'cultivate', 'substantiate'],
    correctAnswer: 0,
    nextGenTechnique: 'Cause-and-Effect Alignment',
    explanation: {
      passageDeconstruction: `Economic inequality fosters alienation, which gradually wears away or damages social trust within communities.`,
      correctReasoning: `'Erode' means to gradually destroy or be gradually destroyed.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'erode', trapType: 'Correct Negative Action', whyIncorrect: 'Correct. Erode accurately describes wearing down trust over time.' },
        { optionIndex: 1, optionText: 'fortify', trapType: 'Opposite Meaning', whyIncorrect: 'Fortify means strengthen.' },
        { optionIndex: 2, optionText: 'cultivate', trapType: 'Opposite Meaning', whyIncorrect: 'Cultivate means nurture or grow.' },
        { optionIndex: 3, optionText: 'substantiate', trapType: 'Misaligned Verb', whyIncorrect: 'Substantiate means prove with evidence.' }
      ]
    }
  },
  {
    id: 't1-ex-40',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `The environmental foundation issued grants to local conservation groups to ______ indigenous plant species that had been displaced by invasive weeds.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['reintroduce', 'eradicate', 'curtail', 'suppress'],
    correctAnswer: 0,
    nextGenTechnique: 'Restoration Context Vector',
    explanation: {
      passageDeconstruction: `Conservation groups received grants to bring back native plants that were previously displaced by invasive species.`,
      correctReasoning: `'Reintroduce' means to bring a plant or animal species back into a habitat where it previously lived.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'reintroduce', trapType: 'Correct Restorative Verb', whyIncorrect: 'Correct. Reintroducing native plants restores balance.' },
        { optionIndex: 1, optionText: 'eradicate', trapType: 'Invasive Action Trap', whyIncorrect: 'Eradicate means destroy completely, which applies to invasive weeds, not indigenous plants.' },
        { optionIndex: 2, optionText: 'curtail', trapType: 'Opposite Meaning', whyIncorrect: 'Curtail means reduce.' },
        { optionIndex: 3, optionText: 'suppress', trapType: 'Opposite Meaning', whyIncorrect: 'Suppress means forcibly put an end to.' }
      ]
    }
  },
  {
    id: 't1-ex-41',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Despite the prevailing consensus among contemporary critics, the music theorist argued that the composer's late symphonies were not chaotic noise, but rather possessed an intricate, highly ______ architectural design.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['coherent', 'amorphous', 'disjointed', 'haphazard'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    explanation: {
      passageDeconstruction: `Contrast: critics dismissed late symphonies as "chaotic noise", but the theorist argues they have an intricate, logically organized design.`,
      correctReasoning: `'Coherent' means logical and consistent; forming a unified whole.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'coherent', trapType: 'Correct Contrast Word', whyIncorrect: 'Correct. Coherent design directly contrasts with chaotic noise.' },
        { optionIndex: 1, optionText: 'amorphous', trapType: 'Synonym of Chaos', whyIncorrect: 'Amorphous means lacking clear shape or form.' },
        { optionIndex: 2, optionText: 'disjointed', trapType: 'Synonym of Chaos', whyIncorrect: 'Disjointed means lacking coherent connection.' },
        { optionIndex: 3, optionText: 'haphazard', trapType: 'Synonym of Chaos', whyIncorrect: 'Haphazard means random or lacking organization.' }
      ]
    }
  },
  {
    id: 't1-ex-42',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In neurology, sleep deprivation has been shown to ______ cognitive reaction times, making individuals significantly slower to process visual hazards while driving.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['degrade', 'optimize', 'expedite', 'elevate'],
    correctAnswer: 0,
    nextGenTechnique: 'Negative Outcome Vector',
    explanation: {
      passageDeconstruction: `Sleep deprivation makes people significantly slower to process hazards, impairing or worsening reaction speed and performance.`,
      correctReasoning: `'Degrade' means to lower the quality, performance, or character of something.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'degrade', trapType: 'Correct Negative Verb', whyIncorrect: 'Correct. Degrading reaction times matches becoming slower and impaired.' },
        { optionIndex: 1, optionText: 'optimize', trapType: 'Opposite Meaning', whyIncorrect: 'Optimize means make as effective as possible.' },
        { optionIndex: 2, optionText: 'expedite', trapType: 'Speed Flop', whyIncorrect: 'Expedite means speed up, which would be an improvement, not an impairment.' },
        { optionIndex: 3, optionText: 'elevate', trapType: 'Positive Trap', whyIncorrect: 'Elevate means raise or improve.' }
      ]
    }
  },
  {
    id: 't1-ex-43',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The essayist noted that public political debate has become increasingly ______; politicians rely on polarized sound bites and personal insults rather than nuanced arguments.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['acrimonious', 'harmonious', 'scholarly', 'magnanimous'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Clue Matching',
    explanation: {
      passageDeconstruction: `Semicolon explanation: politicians rely on polarized sound bites and personal insults rather than nuanced arguments.`,
      correctReasoning: `'Acrimonious' means angry and bitter in feeling or expression.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'acrimonious', trapType: 'Correct Tone Descriptor', whyIncorrect: 'Correct. Acrimonious describes bitter, insult-driven debate.' },
        { optionIndex: 1, optionText: 'harmonious', trapType: 'Opposite Meaning', whyIncorrect: 'Harmonious means tuneful, peaceful, or agreeable.' },
        { optionIndex: 2, optionText: 'scholarly', trapType: 'Opposite Quality', whyIncorrect: 'Scholarly means academic and rigorous, opposite of sound bites and insults.' },
        { optionIndex: 3, optionText: 'magnanimous', trapType: 'Opposite Quality', whyIncorrect: 'Magnanimous means generous or forgiving.' }
      ]
    }
  },
  {
    id: 't1-ex-44',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In marine biology, whale falls on the ocean floor create nutrient-rich oasis zones that ______ complex deep-sea ecosystems for several decades.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['sustain', 'dismantle', 'impoverish', 'exhaust'],
    correctAnswer: 0,
    nextGenTechnique: 'Positive Action Vector',
    explanation: {
      passageDeconstruction: `Whale falls provide rich nutrients that support and nourish deep-sea ecosystems over long periods.`,
      correctReasoning: `'Sustain' means to strengthen or support physically, mentally, or functionally over time.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'sustain', trapType: 'Correct Functional Verb', whyIncorrect: 'Correct. Sustaining ecosystems means nourishing them over decades.' },
        { optionIndex: 1, optionText: 'dismantle', trapType: 'Opposite Action', whyIncorrect: 'Dismantle means take apart.' },
        { optionIndex: 2, optionText: 'impoverish', trapType: 'Opposite Outcome', whyIncorrect: 'Impoverish means deprive of strength or richness.' },
        { optionIndex: 3, optionText: 'exhaust', trapType: 'Opposite Outcome', whyIncorrect: 'Exhaust means drain completely.' }
      ]
    }
  },
  {
    id: 't1-ex-45',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `While the young prodigy exhibited extraordinary technical facility on the violin, critics noted that her interpretations lacked emotional ______; her playing was flawless in execution but strangely cold.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['resonance', 'monotony', 'brevity', 'superficiality'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast & Clue Matching',
    explanation: {
      passageDeconstruction: `Contrast: technical perfection vs lack of emotional depth/warmth ("strangely cold").`,
      correctReasoning: `'Resonance' in artistic context means deep emotional impact or evocative power.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'resonance', trapType: 'Correct Artistic Term', whyIncorrect: 'Correct. Emotional resonance means evocative warmth and depth.' },
        { optionIndex: 1, optionText: 'monotony', trapType: 'Negative Trait', whyIncorrect: 'Monotony means dull sameness.' },
        { optionIndex: 2, optionText: 'brevity', trapType: 'Time Trap', whyIncorrect: 'Brevity means conciseness or short duration.' },
        { optionIndex: 3, optionText: 'superficiality', trapType: 'Critic Criticism Flop', whyIncorrect: 'Her playing suffered from superficiality, so saying it "lacked superficiality" would be a praise, contradicting "strangely cold".' }
      ]
    }
  },
  {
    id: 't1-ex-46',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In agricultural science, drip irrigation systems are increasingly favored over flood irrigation because they delivered water directly to crop roots, thereby minimizing water loss through ______.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['evaporation', 'condensation', 'precipitation', 'saturation'],
    correctAnswer: 0,
    nextGenTechnique: 'Scientific Process Alignment',
    explanation: {
      passageDeconstruction: `Delivering water directly to roots reduces unnecessary water loss into the air caused by heat.`,
      correctReasoning: `'Evaporation' is the process of turning liquid into vapor, which causes water loss in open-air irrigation.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'evaporation', trapType: 'Correct Science Term', whyIncorrect: 'Correct. Evaporation causes water loss in open fields.' },
        { optionIndex: 1, optionText: 'condensation', trapType: 'Opposite Phase', whyIncorrect: 'Condensation is vapor turning back into liquid water.' },
        { optionIndex: 2, optionText: 'precipitation', trapType: 'Opposite Process', whyIncorrect: 'Precipitation is rain falling, which adds water.' },
        { optionIndex: 3, optionText: 'saturation', trapType: 'Soil State', whyIncorrect: 'Saturation means soil being completely filled with water.' }
      ]
    }
  },
  {
    id: 't1-ex-47',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The historian maintained that the revolution was not sparked by sudden spontaneous outrage, but was rather the ______ result of decades of systemic socio-economic oppression.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['inevitable', 'accidental', 'transient', 'fortuitous'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    explanation: {
      passageDeconstruction: `Contrast: not sudden spontaneous outrage, but the unavoidable result building over decades of oppression.`,
      correctReasoning: `'Inevitable' means certain to happen; unavoidable.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'inevitable', trapType: 'Correct Contrast Word', whyIncorrect: 'Correct. Inevitable outcome contrasts with accidental or spontaneous outburst.' },
        { optionIndex: 1, optionText: 'accidental', trapType: 'Opposite Meaning', whyIncorrect: 'Accidental means happening by chance.' },
        { optionIndex: 2, optionText: 'transient', trapType: 'Opposite Duration', whyIncorrect: 'Transient means short-lived.' },
        { optionIndex: 3, optionText: 'fortuitous', trapType: 'Positive Luck Trap', whyIncorrect: 'Fortuitous means happening by happy chance.' }
      ]
    }
  },
  {
    id: 't1-ex-48',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In software engineering, open-source platforms rely on a collaborative community of developers who continuously test code to ______ security vulnerabilities before malicious hackers can exploit them.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['rectify', 'ignore', 'exacerbate', 'prolong'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `Developers test code to fix or correct security flaws before hackers can exploit them.`,
      correctReasoning: `'Rectify' means to put right; correct or remedy.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'rectify', trapType: 'Correct Functional Verb', whyIncorrect: 'Correct. Rectifying vulnerabilities means fixing them.' },
        { optionIndex: 1, optionText: 'ignore', trapType: 'Opposite Action', whyIncorrect: 'Ignoring vulnerabilities leaves systems open to hackers.' },
        { optionIndex: 2, optionText: 'exacerbate', trapType: 'Opposite Action', whyIncorrect: 'Exacerbate means make vulnerabilities worse.' },
        { optionIndex: 3, optionText: 'prolong', trapType: 'Time Delay Trap', whyIncorrect: 'Prolong means extend the duration of.' }
      ]
    }
  },
  {
    id: 't1-ex-49',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The art historian emphasized that during the late Baroque period, painters used dramatic chiascuro lighting to ______ emotional intensity in religious scenes, drawing the viewer's eye directly to central figures.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['heighten', 'diminish', 'subvert', 'obfuscate'],
    correctAnswer: 0,
    nextGenTechnique: 'Positive Impact Vector',
    explanation: {
      passageDeconstruction: `Dramatic lighting is used to increase or amplify emotional impact and direct focus to central figures.`,
      correctReasoning: `'Heighten' means to make more intense, prominent, or pronounced.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'heighten', trapType: 'Correct Action Verb', whyIncorrect: 'Correct. Heightening intensity increases emotional impact.' },
        { optionIndex: 1, optionText: 'diminish', trapType: 'Opposite Action', whyIncorrect: 'Diminish means reduce.' },
        { optionIndex: 2, optionText: 'subvert', trapType: 'Opposite Function', whyIncorrect: 'Subvert means undermine.' },
        { optionIndex: 3, optionText: 'obfuscate', trapType: 'Opposite Function', whyIncorrect: 'Obfuscate means blur or obscure, opposite of drawing attention to central figures.' }
      ]
    }
  },
  {
    id: 't1-ex-50',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Despite the author's insistence that her memoirs were completely factual, critics pointed out several instances where she appeared to ______ her involvement in major political events to present herself in a more heroic light.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['embellish', 'downplay', 'repudiate', 'conceal'],
    correctAnswer: 0,
    nextGenTechnique: 'Motivation & Context Vector',
    explanation: {
      passageDeconstruction: `Motivation: to present herself in a more heroic light. Action: exaggerating or adding fictional details to her involvement in major events.`,
      correctReasoning: `'Embellish' means to make something more attractive or heroic by adding decorative or exaggerated details.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'embellish', trapType: 'Correct Action Verb', whyIncorrect: 'Correct. Embellishing role matches inflating involvement to look heroic.' },
        { optionIndex: 1, optionText: 'downplay', trapType: 'Opposite Action', whyIncorrect: 'Downplaying means making her role seem smaller.' },
        { optionIndex: 2, optionText: 'repudiate', trapType: 'Opposite Action', whyIncorrect: 'Repudiating means denying connection.' },
        { optionIndex: 3, optionText: 'conceal', trapType: 'Opposite Action', whyIncorrect: 'Concealing means hiding her involvement completely.' }
      ]
    }
  }
];
