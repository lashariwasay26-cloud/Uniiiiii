import { ReadingQuestion } from '../readingTypes';

export const T1_EXERCISES_PART1: ReadingQuestion[] = [
  {
    id: 't1-ex-1',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In urban architecture, green roofs coated with vegetation help reduce heat absorption in city centers. Environmental engineer Dr. Aris Thorne noted that these plant layers act as thermal shields that ______ building interiors from extreme atmospheric temperature spikes.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['insulate', 'expose', 'evaluate', 'dismantle'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `Green roofs reduce heat absorption and act as thermal shields. The verb must describe protecting building interiors from atmospheric heat spikes.`,
      correctReasoning: `'Insulate' means to protect from heat, cold, or noise by surrounding with non-conducting material.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'insulate', trapType: 'Correct Functional Verb', whyIncorrect: 'Correct. Insulate means protect from temperature fluctuations.' },
        { optionIndex: 1, optionText: 'expose', trapType: 'Opposite Action', whyIncorrect: 'Expose means uncover or subject to heat, contradicting "thermal shield".' },
        { optionIndex: 2, optionText: 'evaluate', trapType: 'Irrelevant Verb', whyIncorrect: 'Plant layers do not assess or evaluate temperatures.' },
        { optionIndex: 3, optionText: 'dismantle', trapType: 'Destructive Action', whyIncorrect: 'Dismantle means take apart, which makes no sense for thermal protection.' }
      ]
    }
  },
  {
    id: 't1-ex-2',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Although early archaeologists viewed the intricate stone carvings at the ruins as merely decorative embellishments, recent structural analyses indicate that the patterns served a crucial civil function: they helped ______ water runoff during monsoon rainfalls.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['channel', 'evaporate', 'contaminate', 'stagnate'],
    correctAnswer: 0,
    nextGenTechnique: 'Context Clue Alignment',
    explanation: {
      passageDeconstruction: `The carvings were not just decorative; they served a civil function regarding water runoff during monsoon rains.`,
      correctReasoning: `'Channel' means to direct towards a particular path or purpose (e.g. directing water runoff).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'channel', trapType: 'Correct Action Verb', whyIncorrect: 'Correct. Channeling water runoff is a standard civil engineering function.' },
        { optionIndex: 1, optionText: 'evaporate', trapType: 'Unrealistic Mechanism', whyIncorrect: 'Stone carvings direct water, they do not cause instant evaporation.' },
        { optionIndex: 2, optionText: 'contaminate', trapType: 'Negative Trap', whyIncorrect: 'Contaminate means make impure, an undesirable feature for civil drainage.' },
        { optionIndex: 3, optionText: 'stagnate', trapType: 'Opposite of Runoff', whyIncorrect: 'Stagnate means stop flowing, which opposes handling heavy monsoon runoff.' }
      ]
    }
  },
  {
    id: 't1-ex-3',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `While the political philosopher's early treatises were characterized by uncompromising dogmatism, his mature essays reflect a more ______ stance, acknowledging the merits of competing governance theories.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['pragmatic', 'obstinate', 'fanatical', 'subversive'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    strategicTakeaway: 'The contrast pivot "While early... mature essays..." pits "uncompromising dogmatism" against "acknowledging the merits of competing theories".',
    explanation: {
      passageDeconstruction: `Contrast: early dogmatism vs mature stance acknowledging competing ideas.`,
      correctReasoning: `'Pragmatic' means dealing with things sensibly and realistically in a way that is based on practical considerations rather than rigid dogma.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'pragmatic', trapType: 'Correct Contrast Word', whyIncorrect: 'Correct. Pragmatic stance contrasts with rigid dogmatism.' },
        { optionIndex: 1, optionText: 'obstinate', trapType: 'Synonym of Early Dogmatism', whyIncorrect: 'Obstinate means stubborn, matching early dogmatism rather than mature flexibility.' },
        { optionIndex: 2, optionText: 'fanatical', trapType: 'Synonym of Early Dogmatism', whyIncorrect: 'Fanatical means excessively zealous, opposite of acknowledging competing theories.' },
        { optionIndex: 3, optionText: 'subversive', trapType: 'Off-Topic Trap', whyIncorrect: 'Subversive means seeking to overthrow an established system, which is irrelevant.' }
      ]
    }
  },
  {
    id: 't1-ex-4',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The botanist noted that the desert orchid survives prolonged periods of drought by entering a metabolic state of extreme quiescence, during which its biological processes remain completely ______ until rainfall reactivates them.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['dormant', 'strenuous', 'volatile', 'spontaneous'],
    correctAnswer: 0,
    nextGenTechnique: 'Anchor-Vector Matching',
    explanation: {
      passageDeconstruction: `The orchid enters "quiescence" (inactivity), and processes remain in this inactive state "until rainfall reactivates them".`,
      correctReasoning: `'Dormant' means having normal physical functions suspended or slowed down for a period of time; in a state of rest.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'dormant', trapType: 'Correct Scientific Vocabulary', whyIncorrect: 'Correct. Dormant matches quiescence and waiting for reactivation.' },
        { optionIndex: 1, optionText: 'strenuous', trapType: 'Opposite Meaning', whyIncorrect: 'Strenuous means requiring great exertion, conflicting with quiescence.' },
        { optionIndex: 2, optionText: 'volatile', trapType: 'Negative Trap', whyIncorrect: 'Volatile means liable to change rapidly and unpredictably.' },
        { optionIndex: 3, optionText: 'spontaneous', trapType: 'Irrelevant Concept', whyIncorrect: 'Spontaneous means occurring without external cause, whereas rainfall causes reactivation.' }
      ]
    }
  },
  {
    id: 't1-ex-5',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In literary history, the Renaissance poet's influence was so ______ that nearly every major playwright of the subsequent generation incorporated his distinctive meter and imagery into their own theatrical works.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['pervasive', 'negligible', 'fleeting', 'peripheral'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Clue Matching',
    explanation: {
      passageDeconstruction: `Nearly every major playwright of the next generation incorporated his meter and imagery. This shows his influence was widespread and felt everywhere.`,
      correctReasoning: `'Pervasive' means spreading widely throughout an area or a group of people.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'pervasive', trapType: 'Correct Adjective', whyIncorrect: 'Correct. Pervasive describes widespread, deep influence.' },
        { optionIndex: 1, optionText: 'negligible', trapType: 'Opposite Meaning', whyIncorrect: 'Negligible means so small as to be meaningless.' },
        { optionIndex: 2, optionText: 'fleeting', trapType: 'Opposite Duration', whyIncorrect: 'Fleeting means lasting for a very short time.' },
        { optionIndex: 3, optionText: 'peripheral', trapType: 'Opposite Focus', whyIncorrect: 'Peripheral means secondary or marginal, contradicting adoption by nearly every playwright.' }
      ]
    }
  },
  {
    id: 't1-ex-6',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Despite the legal team's persistent efforts to uncover documentary evidence, the archives yielded only fragmented notes that failed to ______ the client's claim of prior patent ownership.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['substantiate', 'refute', 'relinquish', 'disseminate'],
    correctAnswer: 0,
    nextGenTechnique: 'Collocation & Negative Pivot Alignment',
    explanation: {
      passageDeconstruction: `The legal team wanted evidence to support the claim, but archives yielded only fragmented notes that "failed to" prove it.`,
      correctReasoning: `'Substantiate' means to provide evidence to support or prove the truth of something.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'substantiate', trapType: 'Correct Legal Term', whyIncorrect: 'Correct. To failed to substantiate means failed to prove/support.' },
        { optionIndex: 1, optionText: 'refute', trapType: 'Opposite Legal Outcome', whyIncorrect: 'Fragmented notes failed to prove ownership; saying "failed to refute" would imply they succeeded in proving it.' },
        { optionIndex: 2, optionText: 'relinquish', trapType: 'Misaligned Verb', whyIncorrect: 'Relinquish means to voluntarily give up, which makes no sense for evidence.' },
        { optionIndex: 3, optionText: 'disseminate', trapType: 'Irrelevant Verb', whyIncorrect: 'Disseminate means to broadcast or spread widely.' }
      ]
    }
  },
  {
    id: 't1-ex-7',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In marine conservation, establishing marine protected areas has been shown to ______ fish stocks in surrounding waters by allowing spawning grounds to recover without disruption from industrial trawlers.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['replenish', 'deplete', 'squander', 'scrutinize'],
    correctAnswer: 0,
    nextGenTechnique: 'Cause-and-Effect Alignment',
    explanation: {
      passageDeconstruction: `Allowing spawning grounds to recover without industrial disruption causes fish stocks in surrounding waters to rebuild.`,
      correctReasoning: `'Replenish' means to fill something up again or restore to a former level.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'replenish', trapType: 'Correct Positive Action', whyIncorrect: 'Correct. Replenish means restore fish stocks.' },
        { optionIndex: 1, optionText: 'deplete', trapType: 'Opposite Action', whyIncorrect: 'Deplete means exhaust or reduce stock, conflicting with conservation goals.' },
        { optionIndex: 2, optionText: 'squander', trapType: 'Negative Action', whyIncorrect: 'Squander means waste recklessly.' },
        { optionIndex: 3, optionText: 'scrutinize', trapType: 'Observation vs Action Trap', whyIncorrect: 'Scrutinize means examine closely, whereas protected zones rebuild actual numbers.' }
      ]
    }
  },
  {
    id: 't1-ex-8',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The museum curator was praise-worthy for her ______ curation style; rather than cluttering gallery walls with hundreds of items, she selected only six quintessential masterworks for the exhibition space.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['judicious', 'indiscriminate', 'haphazard', 'profuse'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Punctuation Clue',
    explanation: {
      passageDeconstruction: `Semicolon explanation: rather than cluttering with hundreds of items, she selected only six quintessential masterworks.`,
      correctReasoning: `'Judicious' means having, showing, or done with good judgment or sense; careful and selective.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'judicious', trapType: 'Correct Quality Verb', whyIncorrect: 'Correct. Judicious describes careful, wise, selective curation.' },
        { optionIndex: 1, optionText: 'indiscriminate', trapType: 'Opposite Trait', whyIncorrect: 'Indiscriminate means done at random or without careful judgment.' },
        { optionIndex: 2, optionText: 'haphazard', trapType: 'Opposite Trait', whyIncorrect: 'Haphazard means lacking organization or planning.' },
        { optionIndex: 3, optionText: 'profuse', trapType: 'Quantity Flop', whyIncorrect: 'Profuse means abundant or plentiful, which describes the "hundreds of items" she avoided.' }
      ]
    }
  },
  {
    id: 't1-ex-9',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Although the new software update promised to simplify workflow procedures, employees found that the added verification steps actually ______ their daily task completion speed.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['impeded', 'expedited', 'augmented', 'facilitated'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    explanation: {
      passageDeconstruction: `Contrast: software promised to "simplify workflow", but added verification steps actually slowed down daily task completion.`,
      correctReasoning: `'Impeded' means delayed or prevented someone or something by obstructing them.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'impeded', trapType: 'Correct Contrast Word', whyIncorrect: 'Correct. Impeded means slowed down or hindered speed.' },
        { optionIndex: 1, optionText: 'expedited', trapType: 'Opposite Meaning', whyIncorrect: 'Expedited means sped up, matching the broken promise rather than the actual outcome.' },
        { optionIndex: 2, optionText: 'augmented', trapType: 'Misaligned Meaning', whyIncorrect: 'Augmented means increased in size, which does not fit hindering completion speed.' },
        { optionIndex: 3, optionText: 'facilitated', trapType: 'Opposite Meaning', whyIncorrect: 'Facilitated means made easier, contradicting employee frustration.' }
      ]
    }
  },
  {
    id: 't1-ex-10',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In paleontology, the discovery of a nearly complete sauropod skeleton in Patagonia provided a rare ______ to existing phylogenetic models, forcing researchers to revise their timeline of evolutionary diversification.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['challenge', 'endorsement', 'affirmation', 'precedent'],
    correctAnswer: 0,
    nextGenTechnique: 'Cause-and-Effect Alignment',
    explanation: {
      passageDeconstruction: `The skeleton forced researchers to "revise their timeline". This means the discovery contested or called into question existing models.`,
      correctReasoning: `'Challenge' means a call to prove or justify something; a demand for explanation or testing of validity.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'challenge', trapType: 'Correct Noun', whyIncorrect: 'Correct. A challenge forces revisions of existing models.' },
        { optionIndex: 1, optionText: 'endorsement', trapType: 'Opposite Action', whyIncorrect: 'Endorsement means approval or support, which would not force revisions.' },
        { optionIndex: 2, optionText: 'affirmation', trapType: 'Opposite Action', whyIncorrect: 'Affirmation means confirming existing models, contradicting the need to revise.' },
        { optionIndex: 3, optionText: 'precedent', trapType: 'Misaligned Term', whyIncorrect: 'Precedent means an earlier event serving as an example, not a discovery that disrupts models.' }
      ]
    }
  },
  {
    id: 't1-ex-11',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In climate science, satellite measurements of Arctic ice thickness have yielded data that are surprisingly ______; researchers must cross-reference multiple sensor feeds to filter out atmospheric signal interference.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['equivocal', 'unassailable', 'definitive', 'irrefutable'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Clue Matching',
    explanation: {
      passageDeconstruction: `Researchers must cross-reference multiple sensor feeds to filter out atmospheric signal interference. This means the raw data is unclear or subject to multiple interpretations.`,
      correctReasoning: `'Equivocal' means open to more than one interpretation; uncertain or ambiguous.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'equivocal', trapType: 'Correct Descriptor', whyIncorrect: 'Correct. Equivocal matches data that is ambiguous due to signal interference.' },
        { optionIndex: 1, optionText: 'unassailable', trapType: 'Opposite Trait', whyIncorrect: 'Unassailable means unable to be attacked or questioned, contradicting the need to filter interference.' },
        { optionIndex: 2, optionText: 'definitive', trapType: 'Opposite Trait', whyIncorrect: 'Definitive means conclusive, contradicting the need for cross-referencing.' },
        { optionIndex: 3, optionText: 'irrefutable', trapType: 'Opposite Trait', whyIncorrect: 'Irrefutable means impossible to deny, opposite of equivocal.' }
      ]
    }
  },
  {
    id: 't1-ex-12',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The biographer noted that while the prime minister was often portrayed in newspapers as a fierce and confrontational orator, her private correspondence reveals a remarkably ______ personality that prioritized consensus over dispute.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['conciliatory', 'bellicose', 'pugnacious', 'draconian'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    explanation: {
      passageDeconstruction: `Contrast: portrayed publicly as "fierce and confrontational", but private correspondence reveals a trait that "prioritized consensus over dispute".`,
      correctReasoning: `'Conciliatory' means intended or likely to placate or pacify; peacemaking.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'conciliatory', trapType: 'Correct Contrast Word', whyIncorrect: 'Correct. Conciliatory means seeking peace and consensus.' },
        { optionIndex: 1, optionText: 'bellicose', trapType: 'Public Persona Trap', whyIncorrect: 'Bellicose means aggressive and willing to fight, matching her public image rather than private personality.' },
        { optionIndex: 2, optionText: 'pugnacious', trapType: 'Public Persona Trap', whyIncorrect: 'Pugnacious means eager or quick to argue, opposite of prioritizing consensus.' },
        { optionIndex: 3, optionText: 'draconian', trapType: 'Extreme Trap', whyIncorrect: 'Draconian means excessively harsh or severe.' }
      ]
    }
  },
  {
    id: 't1-ex-13',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `Environmental policy experts emphasize that municipal recycling programs cannot completely ______ the growing problem of plastic waste unless manufacturing companies simultaneously reduce their reliance on single-use packaging.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['alleviate', 'aggravate', 'perpetuate', 'replicate'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `Recycling programs aim to reduce or lighten the problem of plastic waste, but cannot do so fully without reduction in single-use packaging.`,
      correctReasoning: `'Alleviate' means to make suffering, deficiency, or a problem less severe.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'alleviate', trapType: 'Correct Goal Action', whyIncorrect: 'Correct. Alleviate means lessen or lighten the problem.' },
        { optionIndex: 1, optionText: 'aggravate', trapType: 'Opposite Action', whyIncorrect: 'Aggravate means make worse.' },
        { optionIndex: 2, optionText: 'perpetuate', trapType: 'Negative Trap', whyIncorrect: 'Perpetuate means cause to continue indefinitely.' },
        { optionIndex: 3, optionText: 'replicate', trapType: 'Misaligned Verb', whyIncorrect: 'Replicate means duplicate or copy.' }
      ]
    }
  },
  {
    id: 't1-ex-14',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `In theoretical physics, the mathematician's proof was hailed for its remarkable ______; in just three pages, it established a groundbreaking relationship between quantum mechanics and general relativity that had eluded researchers for decades.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['economy', 'verbosity', 'redundancy', 'ambiguity'],
    correctAnswer: 0,
    nextGenTechnique: 'Secondary Definition Trap Neutralization',
    explanation: {
      passageDeconstruction: `The proof was brief ("in just three pages") yet established a major groundbreaking relationship.`,
      correctReasoning: `'Economy' in academic prose means careful management or sparing use of resources/words (conciseness and efficiency).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'economy', trapType: 'Correct Secondary Definition', whyIncorrect: 'Correct. Economy of expression means brevity and efficiency.' },
        { optionIndex: 1, optionText: 'verbosity', trapType: 'Opposite Meaning', whyIncorrect: 'Verbosity means using far too many words.' },
        { optionIndex: 2, optionText: 'redundancy', trapType: 'Negative Trait', whyIncorrect: 'Redundancy means unnecessary repetition.' },
        { optionIndex: 3, optionText: 'ambiguity', trapType: 'Negative Trait', whyIncorrect: 'Ambiguity means lack of clarity.' }
      ]
    }
  },
  {
    id: 't1-ex-15',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `During the late nineteenth century, the rapid expansion of transatlantic steamship travel served to ______ cultural exchanges between North American writers and European literary circles.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['foster', 'stifle', 'inhibit', 'curtail'],
    correctAnswer: 0,
    nextGenTechnique: 'Positive Cause-and-Effect Alignment',
    explanation: {
      passageDeconstruction: `Rapid steamship expansion made travel easier, which helped encourage and grow cultural exchanges.`,
      correctReasoning: `'Foster' means to encourage or promote the development of something.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'foster', trapType: 'Correct Verb', whyIncorrect: 'Correct. Foster means promote or encourage.' },
        { optionIndex: 1, optionText: 'stifle', trapType: 'Opposite Meaning', whyIncorrect: 'Stifle means suppress or extinguish.' },
        { optionIndex: 2, optionText: 'inhibit', trapType: 'Opposite Meaning', whyIncorrect: 'Inhibit means hinder or restrain.' },
        { optionIndex: 3, optionText: 'curtail', trapType: 'Opposite Meaning', whyIncorrect: 'Curtail means reduce in extent or quantity.' }
      ]
    }
  },
  {
    id: 't1-ex-16',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Although the company's spokespersons insisted that the merger would benefit consumers, consumer advocacy groups remained ______ about whether the consolidation would actually lower subscription prices.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['skeptical', 'sanguine', 'enthusiastic', 'credulous'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    explanation: {
      passageDeconstruction: `Contrast: Spokespersons insisted it would benefit consumers, "although" advocacy groups expressed doubt about lower prices.`,
      correctReasoning: `'Skeptical' means not easily convinced; having doubts or reservations.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'skeptical', trapType: 'Correct Contrast Word', whyIncorrect: 'Correct. Skeptical matches having doubt despite official claims.' },
        { optionIndex: 1, optionText: 'sanguine', trapType: 'Opposite Trait', whyIncorrect: 'Sanguine means optimistic or hopeful, matching spokespersons rather than critics.' },
        { optionIndex: 2, optionText: 'enthusiastic', trapType: 'Opposite Trait', whyIncorrect: 'Enthusiastic means showing intense enjoyment, opposite of doubtful.' },
        { optionIndex: 3, optionText: 'credulous', trapType: 'Opposite Trait', whyIncorrect: 'Credulous means overly gullible or quick to believe, contradicting advocate caution.' }
      ]
    }
  },
  {
    id: 't1-ex-17',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In evolutionary anthropology, teeth fossils are prized because enamel is exceptionally ______; it resists chemical decay and physical erosion far better than softer organic bone tissue does.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['resilient', 'malleable', 'transitory', 'perishable'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Clue Matching',
    explanation: {
      passageDeconstruction: `Semicolon explanation: enamel resists chemical decay and physical erosion far better than softer bone tissue.`,
      correctReasoning: `'Resilient' means able to withstand or recover quickly from difficult conditions or wear.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'resilient', trapType: 'Correct Descriptor', whyIncorrect: 'Correct. Resilient describes strong resistance to decay.' },
        { optionIndex: 1, optionText: 'malleable', trapType: 'Opposite Physical Trait', whyIncorrect: 'Malleable means easily bent or shaped under pressure.' },
        { optionIndex: 2, optionText: 'transitory', trapType: 'Opposite Duration', whyIncorrect: 'Transitory means short-lived or temporary.' },
        { optionIndex: 3, optionText: 'perishable', trapType: 'Opposite Trait', whyIncorrect: 'Perishable means likely to decay or spoil quickly.' }
      ]
    }
  },
  {
    id: 't1-ex-18',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `To avoid introducing personal bias into the historical record, the archivist took care to present the primary documents without ______ commentary, allowing readers to draw their own independent conclusions.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['partisan', 'disinterested', 'objective', 'scrupulous'],
    correctAnswer: 0,
    nextGenTechnique: 'Negative Vector Matching',
    explanation: {
      passageDeconstruction: `Goal: avoid personal bias. Method: presenting primary documents without biased or opinionated commentary.`,
      correctReasoning: `'Partisan' means prejudiced in favor of a particular cause or side; biased.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'partisan', trapType: 'Correct Biased Term', whyIncorrect: 'Correct. Presenting without partisan commentary avoids personal bias.' },
        { optionIndex: 1, optionText: 'disinterested', trapType: 'Flop Trap', whyIncorrect: 'Disinterested means neutral/unbiased. Removing disinterested commentary would mean adding bias.' },
        { optionIndex: 2, optionText: 'objective', trapType: 'Flop Trap', whyIncorrect: 'Objective means fair and unbiased; the archivist wants objective commentary, not to omit it.' },
        { optionIndex: 3, optionText: 'scrupulous', trapType: 'Flop Trap', whyIncorrect: 'Scrupulous means extremely attentive to detail and morals.' }
      ]
    }
  },
  {
    id: 't1-ex-19',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In molecular biology, ribosomes are cellular structures that ______ protein synthesis by translating messenger RNA sequences into amino acid chains.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['execute', 'thwart', 'defer', 'dismantle'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `Ribosomes perform the process of protein synthesis by translating mRNA into amino acid chains.`,
      correctReasoning: `'Execute' means to carry out or put into effect a plan, order, or course of action.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'execute', trapType: 'Correct Functional Verb', whyIncorrect: 'Correct. Execute means perform or carry out protein synthesis.' },
        { optionIndex: 1, optionText: 'thwart', trapType: 'Opposite Action', whyIncorrect: 'Thwart means prevent from accomplishing something.' },
        { optionIndex: 2, optionText: 'defer', trapType: 'Time Delay Trap', whyIncorrect: 'Defer means put off to a later time.' },
        { optionIndex: 3, optionText: 'dismantle', trapType: 'Destructive Action', whyIncorrect: 'Dismantle means take apart, whereas ribosomes construct proteins.' }
      ]
    }
  },
  {
    id: 't1-ex-20',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `Despite the initial skepticism surrounding her unconventional research methodology, Dr. Kim's breakthrough findings were eventually hailed as a ______ triumph that transformed the field of quantum chemistry.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['monumental', 'trivial', 'marginal', 'dubious'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast & Intensity Alignment',
    explanation: {
      passageDeconstruction: `Contrast: initial skepticism vs eventual findings hailed as a massive success that transformed the entire field.`,
      correctReasoning: `'Monumental' means great in importance, extent, or size.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'monumental', trapType: 'Correct High-Impact Word', whyIncorrect: 'Correct. Monumental matches transforming an entire field.' },
        { optionIndex: 1, optionText: 'trivial', trapType: 'Opposite Scale', whyIncorrect: 'Trivial means of little value or importance.' },
        { optionIndex: 2, optionText: 'marginal', trapType: 'Opposite Scale', whyIncorrect: 'Marginal means minor or peripheral.' },
        { optionIndex: 3, optionText: 'dubious', trapType: 'Skepticism Persistence Trap', whyIncorrect: 'Dubious means hesitating or doubting, which reflects the initial skepticism, not the final triumph.' }
      ]
    }
  },
  {
    id: 't1-ex-21',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In urban planning, widening highways often fails to alleviate traffic congestion because it attracts more drivers—a phenomenon known as induced demand that effectively ______ any temporary reductions in commute times.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['nullifies', 'amplifies', 'preserves', 'validates'],
    correctAnswer: 0,
    nextGenTechnique: 'Negative Outcome Alignment',
    explanation: {
      passageDeconstruction: `Widening roads attracts more drivers, which cancels out or undoes any temporary reduction in commute times.`,
      correctReasoning: `'Nullifies' means to make legally null and void; to invalidate or cancel out.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'nullifies', trapType: 'Correct Functional Verb', whyIncorrect: 'Correct. Nullifies means cancels out the reductions in commute times.' },
        { optionIndex: 1, optionText: 'amplifies', trapType: 'Opposite Action', whyIncorrect: 'Amplifies means increases, which contradicts failing to reduce traffic.' },
        { optionIndex: 2, optionText: 'preserves', trapType: 'Opposite Outcome', whyIncorrect: 'Preserves means maintains, but traffic gains are lost.' },
        { optionIndex: 3, optionText: 'validates', trapType: 'Misaligned Verb', whyIncorrect: 'Validates means confirms accuracy or legality.' }
      ]
    }
  },
  {
    id: 't1-ex-22',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `The literary critic observed that the author's latest novel is strikingly ______; it shifts fluidly between comic satire, gothic tragedy, and speculative sci-fi without losing narrative coherence.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['eclectic', 'monolithic', 'formulaic', 'pedestrian'],
    correctAnswer: 0,
    nextGenTechnique: 'Elaboration Clue Matching',
    explanation: {
      passageDeconstruction: `Semicolon explanation: the novel shifts fluidly between comic satire, gothic tragedy, and speculative sci-fi.`,
      correctReasoning: `'Eclectic' means deriving ideas, style, or taste from a broad and diverse range of sources.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'eclectic', trapType: 'Correct Style Descriptor', whyIncorrect: 'Correct. Eclectic describes blending diverse genres.' },
        { optionIndex: 1, optionText: 'monolithic', trapType: 'Opposite Style', whyIncorrect: 'Monolithic means rigid, uniform, or indivisible.' },
        { optionIndex: 2, optionText: 'formulaic', trapType: 'Opposite Style', whyIncorrect: 'Formulaic means following a set pattern, lacking originality.' },
        { optionIndex: 3, optionText: 'pedestrian', trapType: 'Negative Trap', whyIncorrect: 'Pedestrian means dull, ordinary, or lacking inspiration.' }
      ]
    }
  },
  {
    id: 't1-ex-23',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In marine ecology, coral reefs provide essential habitats for marine biodiversity, but rising ocean temperatures threaten to ______ these fragile ecosystems by causing mass bleaching events.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['devastate', 'fortify', 'rejuvenate', 'stabilize'],
    correctAnswer: 0,
    nextGenTechnique: 'Cause-and-Effect Alignment',
    explanation: {
      passageDeconstruction: `Rising ocean temperatures cause mass bleaching events, which severely damage fragile coral reef ecosystems.`,
      correctReasoning: `'Devastate' means to destroy or ruin completely.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'devastate', trapType: 'Correct Negative Action', whyIncorrect: 'Correct. Devastate accurately describes damage from mass bleaching.' },
        { optionIndex: 1, optionText: 'fortify', trapType: 'Opposite Action', whyIncorrect: 'Fortify means strengthen.' },
        { optionIndex: 2, optionText: 'rejuvenate', trapType: 'Opposite Action', whyIncorrect: 'Rejuvenate means make young or vigorous again.' },
        { optionIndex: 3, optionText: 'stabilize', trapType: 'Opposite Action', whyIncorrect: 'Stabilize means make steady.' }
      ]
    }
  },
  {
    id: 't1-ex-24',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Hard Module',
    passage: `While the CEO asserted that the restructuring plan was designed to improve operational efficiency, union leaders argued that its true intent was to ______ workforce protections and lower labor costs.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['curtail', 'bolster', 'sanction', 'ratify'],
    correctAnswer: 0,
    nextGenTechnique: 'Contrast Pivot Alignment',
    explanation: {
      passageDeconstruction: `Contrast: CEO claimed efficiency gains, "while" union leaders argued the plan aimed to reduce/cut workforce protections and lower costs.`,
      correctReasoning: `'Curtail' means to reduce in extent or quantity; impose a restriction on.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'curtail', trapType: 'Correct Negative Action', whyIncorrect: 'Correct. Curtail means cut back or reduce protections.' },
        { optionIndex: 1, optionText: 'bolster', trapType: 'Opposite Meaning', whyIncorrect: 'Bolster means strengthen or support, which union leaders would favor rather than oppose.' },
        { optionIndex: 2, optionText: 'sanction', trapType: 'Ambiguous Legal Term', whyIncorrect: 'Sanction can mean authorize or penalize, but does not fit cutting protections directly.' },
        { optionIndex: 3, optionText: 'ratify', trapType: 'Misaligned Legal Verb', whyIncorrect: 'Ratify means formally approve a contract or treaty.' }
      ]
    }
  },
  {
    id: 't1-ex-25',
    moduleNumber: 1,
    subskill: 'Words in Context',
    difficulty: 'Easy/Medium Module',
    passage: `In astronomy, gas giant planets like Jupiter possess gravitational fields so strong that they can ______ the trajectories of incoming comets, redirecting them away from the inner solar system.`,
    questionText: `As used in the text, which choice completes the text with the most logical and precise word or phrase?`,
    options: ['alter', 'maintain', 'prohibit', 'conceal'],
    correctAnswer: 0,
    nextGenTechnique: 'Functional Action Vector',
    explanation: {
      passageDeconstruction: `Strong gravity changes comet flight paths, "redirecting them away from the inner solar system".`,
      correctReasoning: `'Alter' means to change or cause to change in character or composition (here, changing flight trajectories).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'alter', trapType: 'Correct Action Verb', whyIncorrect: 'Correct. Altering trajectories matches redirecting them.' },
        { optionIndex: 1, optionText: 'maintain', trapType: 'Opposite Action', whyIncorrect: 'Maintain means keep unchanged.' },
        { optionIndex: 2, optionText: 'prohibit', trapType: 'Misaligned Verb', whyIncorrect: 'Gravity physically changes paths; it does not issue a prohibition.' },
        { optionIndex: 3, optionText: 'conceal', trapType: 'Irrelevant Verb', whyIncorrect: 'Conceal means hide from view.' }
      ]
    }
  }
];
