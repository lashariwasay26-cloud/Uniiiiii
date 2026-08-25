import { ReadingQuestion } from '../readingTypes';

export const T6_EXERCISES_PART2: ReadingQuestion[] = [
  {
    id: 't6-ex-26',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `In a trial evaluating urban green roof insulation performance, thermal engineers measured winter heating loss across three municipal buildings: Building A (retrofitted with an extensive sedum green roof), Building B (retrofitted with a standard white reflective roof), and Building C (retaining a conventional dark asphalt roof). Building A experienced a 42% reduction in winter heat loss compared to Building C, whereas Building B experienced only a 6% reduction, indicating that sedum green roofs ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'provide superior thermal insulation during cold weather compared to reflective or asphalt roofs.',
      'increase interior heating expenses by cooling top-floor office ceilings in winter.',
      'require higher electricity inputs to operate building heating systems than conventional asphalt roofs.',
      'are less effective at preventing heat loss than white reflective roofs.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Green roof (A) reduced winter heat loss by 42%. Reflective white roof (B) reduced heat loss by 6%. Dark asphalt (C) was the baseline. Conclusion: Sedum green roofs provide superior thermal insulation during cold weather compared to reflective or asphalt roofs.`,
      correctReasoning: `Option A accurately completes the inference based on the 42% vs 6% vs 0% heat loss reduction data.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'provide superior thermal insulation during cold weather compared to...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 42% (green) vs 6% (reflective) vs baseline asphalt.' },
        { optionIndex: 1, optionText: 'increase interior heating expenses by cooling top-floor office...', trapType: 'Direct Contradiction', whyIncorrect: 'Reducing heat loss by 42% lowers heating expenses, not increases them.' },
        { optionIndex: 2, optionText: 'require higher electricity inputs to operate building heating systems...', trapType: 'Direct Contradiction', whyIncorrect: 'Lower heat loss reduces heating energy needs.' },
        { optionIndex: 3, optionText: 'are less effective at preventing heat loss than white reflective roofs.', trapType: 'Opposite Deduction', whyIncorrect: 'Green roof was 42% effective, reflective was only 6% effective.' }
      ]
    }
  },
  {
    id: 't6-ex-27',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `Archaeobotanists analyzing charred seed remains from early Neolithic agricultural sites in the Fertile Crescent noted that around 8500 BCE, wild einkorn wheat (*Triticum monococcum*) possessed brittle rachises that shattered upon maturity, dispersing seeds naturally. By 7500 BCE, however, non-shattering tough rachises dominated cultivated field deposits, preventing seed dispersal unless harvested and threshed by humans, suggesting that non-shattering rachises ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'were an evolutionary trait selected for by human harvesting practices.',
      'prevented Neolithic farmers from cultivating wheat crops successfully.',
      'evolved to protect wheat seeds from seed-eating desert rodents.',
      'caused einkorn wheat yields to drop to zero across the Fertile Crescent.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Wild wheat shattered naturally (brittle rachis). Over 1,000 years of human cultivation (8500 BCE to 7500 BCE), non-shattering tough rachises dominated (requiring human harvesting/threshing). Conclusion: Non-shattering rachises were selected for by human harvesting practices.`,
      correctReasoning: `Option A logically completes the agricultural domestication inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'were an evolutionary trait selected for by human harvesting practices.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by the shift from wild shattering to human-harvested non-shattering wheat.' },
        { optionIndex: 1, optionText: 'prevented Neolithic farmers from cultivating wheat crops successfully.', trapType: 'Direct Contradiction', whyIncorrect: 'Tough rachises allowed successful harvesting and cultivation expansion.' },
        { optionIndex: 2, optionText: 'evolved to protect wheat seeds from seed-eating desert rodents.', trapType: 'Unmentioned Rodent Claim', whyIncorrect: 'Rodent protection is not mentioned.' },
        { optionIndex: 3, optionText: 'caused einkorn wheat yields to drop to zero across the Fertile Crescent.', trapType: 'Direct Contradiction', whyIncorrect: 'Non-shattering wheat became the dominant cultivated crop.' }
      ]
    }
  },
  {
    id: 't6-ex-28',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `In a clinical trial evaluating sublingual immunotherapy for peanut allergy, allergic children received daily micro-doses of liquid peanut protein under the tongue for twelve months. Blood antibody analysis revealed that plasma $IgE$ levels (associated with allergic reactivity) decreased by 60%, while protective $IgG_4$ neutralizing antibody levels increased ten-fold. When challenged with oral peanut powder at trial completion, 82% of treated children tolerated $2,000\text{ mg}$ of peanut protein without anaphylaxis, indicating that sublingual immunotherapy ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'induces immune tolerance that reduces allergic reactivity to peanut proteins.',
      'causes severe anaphylactic reactions at lower doses than standard peanut exposure.',
      'permanently alters the recipient\'s genetic DNA sequence.',
      'increases plasma $IgE$ levels to trigger systemic allergic symptoms.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Lower $IgE$ (-60%), 10x higher protective $IgG_4$, and 82% tolerating $2,000\text{ mg}$ peanut protein without anaphylaxis. Conclusion: Sublingual immunotherapy induces immune tolerance that reduces allergic reactivity.`,
      correctReasoning: `Option A logically summarizes the clinical findings (reduced $IgE$, higher $IgG_4$, peanut tolerance).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'induces immune tolerance that reduces allergic reactivity to peanut...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 82% tolerance, 10x $IgG_4$, and 60% lower $IgE$.' },
        { optionIndex: 1, optionText: 'causes severe anaphylactic reactions at lower doses than standard...', trapType: 'Direct Contradiction', whyIncorrect: '82% tolerated $2,000\text{ mg}$ WITHOUT anaphylaxis.' },
        { optionIndex: 2, optionText: 'permanently alters the recipient\'s genetic DNA sequence.', trapType: 'Scientific Falsehood', whyIncorrect: 'Immunotherapy modulates antibody levels, not nuclear DNA.' },
        { optionIndex: 3, optionText: 'increases plasma $IgE$ levels to trigger systemic allergic symptoms.', trapType: 'Direct Contradiction', whyIncorrect: '$IgE$ DECREASED by 60%.' }
      ]
    }
  },
  {
    id: 't6-ex-29',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `Physicists studying high-temperature superconductivity in copper-oxide ceramic superconductors (cuprates) observed that when oxygen vacancies were introduced into the crystal lattice, superconductivity persisted at temperatures up to $135\text{ K}$ ($-138^\circ\text{C}$). However, when planar copper atoms were replaced with zinc atoms, the superconducting critical temperature ($T_c$) plummeted to $0\text{ K}$, indicating that copper-oxygen planar lattices ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'contain essential structural pathways responsible for high-temperature superconductivity in cuprates.',
      'prevent electron pair formation in ceramic superconducting materials.',
      'function identically when substituted with any transition metal element.',
      'spontaneously melt into liquid metal at room temperature.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Oxygen vacancies allowed $135\text{ K}$ superconductivity. Replacing planar copper with zinc completely destroyed superconductivity ($T_c \rightarrow 0\text{ K}$). Conclusion: Copper-oxygen planar lattices contain essential structural pathways responsible for high-temperature superconductivity.`,
      correctReasoning: `Option A accurately concludes that copper-oxygen planes are essential for superconductivity.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'contain essential structural pathways responsible for high-temperature...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by the total destruction of $T_c$ when copper is replaced by zinc.' },
        { optionIndex: 1, optionText: 'prevent electron pair formation in ceramic superconducting materials.', trapType: 'Direct Contradiction', whyIncorrect: 'Copper-oxygen planes enable superconductivity up to $135\text{ K}$.' },
        { optionIndex: 2, optionText: 'function identically when substituted with any transition metal element.', trapType: 'Direct Contradiction', whyIncorrect: 'Substituting zinc plummeted $T_c$ to $0\text{ K}$, proving non-identical function.' },
        { optionIndex: 3, optionText: 'spontaneously melt into liquid metal at room temperature.', trapType: 'Absurd Physical Claim', whyIncorrect: 'Ceramics do not melt into liquid metal at room temp.' }
      ]
    }
  },
  {
    id: 't6-ex-30',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `In an investigation of forest canopy water uptake, ecologist Dr. Clara Lin measured sap flow direction in coastal redwood trees (*Sequoia sempervirens*) during summer fog events. Surprisingly, sap flow sensors recorded reverse water flow—moving from fog-drenched canopy leaves down through branches into root systems—supplying up to 30% of the tree's total annual water intake, demonstrating that coastal redwoods ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'can absorb atmospheric moisture through canopy leaves to supplement root soil water.',
      'depend exclusively on groundwater absorbed through deep taproots.',
      'suffer severe dehydration during summer fog conditions.',
      'transport water exclusively in an upward direction from roots to leaves.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Fog events caused reverse sap flow: leaves absorbed water from fog and transported it downward into branches and roots (30% of annual intake). Conclusion: Redwoods can absorb atmospheric moisture through leaves to supplement root soil water.`,
      correctReasoning: `Option A logically completes the foliar water uptake inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'can absorb atmospheric moisture through canopy leaves to supplement...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by downward sap flow from leaves during fog supplying 30% water.' },
        { optionIndex: 1, optionText: 'depend exclusively on groundwater absorbed through deep taproots.', trapType: 'Direct Contradiction', whyIncorrect: 'Fog provides 30% of annual water intake through leaves.' },
        { optionIndex: 2, optionText: 'suffer severe dehydration during summer fog conditions.', trapType: 'Direct Contradiction', whyIncorrect: 'Fog provides a major water intake benefit (30%).' },
        { optionIndex: 3, optionText: 'transport water exclusively in an upward direction from roots...', trapType: 'Direct Contradiction', whyIncorrect: 'Sensors recorded reverse downward water flow from leaves.' }
      ]
    }
  },
  {
    id: 't6-ex-31',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `Experimental psychologists tested the "generation effect" by presenting two groups of participants with word pairs to memorize: Group A read intact word pairs (e.g., *fast-quick*), while Group B generated word pairs from fragments (e.g., *fast-q__ck*). On a recall test 24 hours later, Group B recalled 45% more target words than Group A, suggesting that the cognitive effort required to actively generate information ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'enhances memory encoding and long-term retrieval strength.',
      'impairs the ability to recall linguistic fragments.',
      'produces identical memory retention to passive reading.',
      'causes severe cognitive fatigue that erases recall after 24 hours.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Generating word fragments (active generation) -> +45% higher word recall 24 hours later compared to reading intact pairs. Conclusion: Active cognitive effort enhances memory encoding and retrieval strength.`,
      correctReasoning: `Option A accurately summarizes the generation effect memory benefit.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'enhances memory encoding and long-term retrieval strength.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by Group B recalling 45% more words after active generation.' },
        { optionIndex: 1, optionText: 'impairs the ability to recall linguistic fragments.', trapType: 'Direct Contradiction', whyIncorrect: 'Active generation improved target word recall by 45%.' },
        { optionIndex: 2, optionText: 'produces identical memory retention to passive reading.', trapType: 'Direct Contradiction', whyIncorrect: 'Group B scored 45% higher than passive reading Group A.' },
        { optionIndex: 3, optionText: 'causes severe cognitive fatigue that erases recall after 24 hours.', trapType: 'Direct Contradiction', whyIncorrect: 'Recall was 45% higher 24 hours later, not erased.' }
      ]
    }
  },
  {
    id: 't6-ex-32',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `In a trial of agricultural wastewater treatment, environmental engineers passed pig farm runoff through tanks containing cultured microalgae (*Chlorella vulgaris*). Within seven days, microalgae absorbed 92% of dissolved ammonium nitrogen and 85% of soluble orthophosphate, while algal biomass doubled in weight. When harvested, the algal biomass yielded 30% lipids convertible to biodiesel, suggesting that microalgae cultivation ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'can simultaneously remediate agricultural wastewater and generate bioenergy feedstocks.',
      'increases nitrogen pollution levels in treated farm wastewater.',
      'requires sterile drinking water to produce algal biomass.',
      'is completely incapable of absorbing dissolved phosphorus compounds.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Microalgae absorbed 92% nitrogen and 85% phosphorus from wastewater (remediation) AND yielded 30% lipids for biodiesel (bioenergy). Conclusion: Microalgae can simultaneously remediate wastewater and generate bioenergy feedstocks.`,
      correctReasoning: `Option A accurately connects both outcomes (wastewater cleaning + biofuel yield).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'can simultaneously remediate agricultural wastewater and generate bioenergy...', trapType: 'Correct Logical Synthesis', whyIncorrect: 'Directly combines the 92% nitrogen/85% phosphorus cleanup with the 30% lipid biodiesel yield.' },
        { optionIndex: 1, optionText: 'increases nitrogen pollution levels in treated farm wastewater.', trapType: 'Direct Contradiction', whyIncorrect: 'Nitrogen dropped by 92%.' },
        { optionIndex: 2, optionText: 'requires sterile drinking water to produce algal biomass.', trapType: 'Direct Contradiction', whyIncorrect: 'Grew successfully in pig farm wastewater runoff.' },
        { optionIndex: 3, optionText: 'is completely incapable of absorbing dissolved phosphorus compounds.', trapType: 'Direct Contradiction', whyIncorrect: 'Absorbed 85% of orthophosphate.' }
      ]
    }
  },
  {
    id: 't6-ex-33',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `Evolutionary geneticists analyzing whole-genome sequences of ancient human remains from Europe discovered that the lactase persistence gene variant ($LCT\text{-13910*T}$), which allows adults to digest milk lactose, was completely absent in Neolithic hunter-gatherers and early farmers prior to 4000 BCE. The variant increased rapidly in frequency only after 3000 BCE, coinciding with archaeological evidence of large-scale pastoral dairy farming, indicating that lactase persistence in humans ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'co-evolved with cultural practices of livestock domestication and dairy consumption.',
      'originated millions of years before early hominins domesticated animals.',
      'prevented ancient humans from raising cattle and sheep.',
      'was present in 100% of European hunter-gatherers prior to 4000 BCE.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Milk lactose digestion gene ($LCT\text{-13910*T}$) absent before 4000 BCE, but rose rapidly after 3000 BCE alongside pastoral dairy farming. Conclusion: Lactase persistence co-evolved with livestock domestication and dairy consumption.`,
      correctReasoning: `Option A conservatively connects gene rise timing to dairy cultural practices.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'co-evolved with cultural practices of livestock domestication and dairy...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by gene rise after 3000 BCE aligning with dairy farming evidence.' },
        { optionIndex: 1, optionText: 'originated millions of years before early hominins domesticated animals.', trapType: 'Direct Contradiction', whyIncorrect: 'Gene was completely absent before 4000 BCE.' },
        { optionIndex: 2, optionText: 'prevented ancient humans from raising cattle and sheep.', trapType: 'Direct Contradiction', whyIncorrect: 'Gene frequency rose alongside pastoral dairy farming.' },
        { optionIndex: 3, optionText: 'was present in 100% of European hunter-gatherers prior to 4000 BCE.', trapType: 'Direct Contradiction', whyIncorrect: 'Text explicitly states it was "completely absent" before 4000 BCE.' }
      ]
    }
  },
  {
    id: 't6-ex-34',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Neurologists assessing motor function recovery in post-stroke hemiparesis patients evaluated Constraint-Induced Movement Therapy (CIMT), in which the patient's non-affected arm is restrained in a mitt for 90% of waking hours, forcing intensive use of the affected arm. After three weeks, fMRI brain scans revealed significant cortical reorganization in the motor cortex corresponding to the affected arm, accompanied by a 60% improvement in manual dexterity tests, suggesting that forcing use of the impaired limb ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'promotes neuroplasticity and functional motor recovery in stroke-damaged brain regions.',
      'permanently paralyzes the non-affected arm restrained in the mitt.',
      'prevents the motor cortex from reorganizing neural pathways.',
      'causes severe cognitive decline in visual memory capacity.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Restraining non-affected arm forced use of affected arm -> fMRI showed cortical reorganization + 60% dexterity gain. Conclusion: Forcing use of impaired limb promotes neuroplasticity and functional motor recovery.`,
      correctReasoning: `Option A accurately summarizes cortical reorganization (neuroplasticity) and dexterity gain (motor recovery).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'promotes neuroplasticity and functional motor recovery in stroke-damaged...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by cortical reorganization and 60% dexterity improvement.' },
        { optionIndex: 1, optionText: 'permanently paralyzes the non-affected arm restrained in the mitt.', trapType: 'Absurd Harmful Claim', whyIncorrect: 'Mitt restraint is temporary therapy, not permanent paralysis.' },
        { optionIndex: 2, optionText: 'prevents the motor cortex from reorganizing neural pathways.', trapType: 'Direct Contradiction', whyIncorrect: 'Text explicitly notes "significant cortical reorganization".' },
        { optionIndex: 3, optionText: 'causes severe cognitive decline in visual memory capacity.', trapType: 'Unrelated Domain', whyIncorrect: 'Visual memory capacity is not discussed.' }
      ]
    }
  },
  {
    id: 't6-ex-35',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In quantum optics, researchers directed single photons through a beam splitter into two optical paths of equal length, creating an interference pattern when reunited at a photodetector. However, when a quantum detector was placed on Path A to measure which specific path the photon traversed, the interference pattern immediately vanished, returning to a classical particle distribution. This collapse of the interference pattern demonstrates that measuring path information ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'destroys the quantum wave superposition state of the photon.',
      'accelerates the photon velocity beyond the speed of light.',
      'permanently damages the optical beam splitter hardware.',
      'proves photons are classical billiard balls unaffected by observation.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Interference pattern existed -> measuring specific path on Path A caused interference pattern to vanish (return to classical particle distribution). Conclusion: Measuring path information destroys the quantum wave superposition state.`,
      correctReasoning: `Option A accurately completes the quantum physics inference regarding wave function collapse upon measurement.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'destroys the quantum wave superposition state of the photon.', trapType: 'Correct Physics Deduction', whyIncorrect: 'Directly supported by the vanishing interference pattern upon path detection.' },
        { optionIndex: 1, optionText: 'accelerates the photon velocity beyond the speed of light.', trapType: 'Scientific Falsehood', whyIncorrect: 'Photons cannot exceed light speed.' },
        { optionIndex: 2, optionText: 'permanently damages the optical beam splitter hardware.', trapType: 'Hardware Distractor', whyIncorrect: 'Detecting path does not physically break beam splitters.' },
        { optionIndex: 3, optionText: 'proves photons are classical billiard balls unaffected by observation.', trapType: 'Direct Contradiction', whyIncorrect: 'The fact observation changed the outcome proves observation DOES affect quantum states.' }
      ]
    }
  },
  {
    id: 't6-ex-36',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Conservation ecologists evaluating habitat fragmentation in tropical rainforests measured bird species extinction rates across isolated forest patches of varying sizes ($1\text{ ha}$, $10\text{ ha}$, and $100\text{ ha}$) over twenty years. Patches of $1\text{ ha}$ lost 50% of their native bird species within five years, whereas $100\text{ ha}$ patches retained 90% of native bird species over twenty years, demonstrating that larger continuous reserve areas ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'are essential for mitigating local extinction risks in forest bird populations.',
      'accelerate bird species extinction compared to tiny habitat fragments.',
      'require zero conservation management or anti-poaching enforcement.',
      'eliminate all natural rainfall in tropical rainforest ecosystems.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `$1\text{ ha}$ patches lost 50% species in 5 yrs; $100\text{ ha}$ patches retained 90% species over 20 yrs. Conclusion: Larger continuous reserve areas are essential for mitigating local extinction risks.`,
      correctReasoning: `Option A accurately completes the conservation island biogeography inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'are essential for mitigating local extinction risks in forest bird...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 90% retention in $100\text{ ha}$ vs 50% loss in $1\text{ ha}$ patches.' },
        { optionIndex: 1, optionText: 'accelerate bird species extinction compared to tiny habitat fragments.', trapType: 'Opposite Deduction', whyIncorrect: '$100\text{ ha}$ retained 90% vs $1\text{ ha}$ losing 50%.' },
        { optionIndex: 2, optionText: 'require zero conservation management or anti-poaching enforcement.', trapType: 'Unwarranted Policy Absolute', whyIncorrect: 'Management/poaching details are not discussed.' },
        { optionIndex: 3, optionText: 'eliminate all natural rainfall in tropical rainforest ecosystems.', trapType: 'Absurd Physical Claim', whyIncorrect: 'Reserve size does not eliminate tropical rainfall.' }
      ]
    }
  },
  {
    id: 't6-ex-37',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In paleoclimatology, geochemists analyzed magnesium-to-calcium ($Mg/Ca$) ratios in fossil foraminifera shells from equatorial Pacific sediment cores covering the mid-Pliocene Warm Period ($3.3\text{--}3.0\text{ million years ago}$). The data revealed sea surface temperatures $3^\circ\text{C}$ warmer than pre-industrial levels, despite atmospheric $CO_2$ concentrations ($400\text{ ppm}$) matching modern levels. This thermal discrepancy suggests that mid-Pliocene warming ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'was amplified by slow climate feedbacks like reduced ice sheet albedo and greenhouse gases beyond $CO_2$.',
      'was caused entirely by solar luminosity dropping to zero.',
      'proves that atmospheric $CO_2$ has no effect on planetary temperatures.',
      'prevented all marine life from secreting calcium carbonate shells.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Mid-Pliocene $CO_2$ matched modern $400\text{ ppm}$, but temperatures were $3^\circ\text{C}$ warmer than pre-industrial levels. Conclusion: Pliocene warming was amplified by slow climate feedbacks (ice albedo, other gases) beyond equilibrium $CO_2$ alone.`,
      correctReasoning: `Option A provides a conservative climate feedback conclusion explaining the higher temperature at equal $CO_2$.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'was amplified by slow climate feedbacks like reduced ice sheet albedo...', trapType: 'Correct Climate Deduction', whyIncorrect: 'Directly explains why $3^\circ\text{C}$ higher temps occurred at modern $400\text{ ppm}$ $CO_2$.' },
        { optionIndex: 1, optionText: 'was caused entirely by solar luminosity dropping to zero.', trapType: 'Scientific Falsehood', whyIncorrect: 'Zero solar luminosity would freeze the planet to absolute zero.' },
        { optionIndex: 2, optionText: 'proves that atmospheric $CO_2$ has no effect on planetary temperatures.', trapType: 'Extreme Overgeneralization', whyIncorrect: 'Higher temps at $400\text{ ppm}$ vs pre-industrial $280\text{ ppm}$ confirm $CO_2$ warming.' },
        { optionIndex: 3, optionText: 'prevented all marine life from secreting calcium carbonate shells.', trapType: 'Direct Contradiction', whyIncorrect: 'Data came from foraminifera shells that WERE secreted and preserved.' }
      ]
    }
  },
  {
    id: 't6-ex-38',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Agronomists testing nitrogen fertilizer application timing on winter wheat (*Triticum aestivum*) compared single autumn applications at planting against split applications (30% at planting, 70% during spring tiller emergence). Split application plots exhibited 35% higher nitrogen fertilizer recovery efficiency in grain tissue and reduced nitrate runoff by 60%, indicating that aligning fertilizer timing with active crop growth stages ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'improves nutrient uptake efficiency and decreases environmental runoff losses.',
      'causes wheat crops to suffer severe nitrogen deficiency during spring.',
      'doubles required synthetic fertilizer purchasing costs for farmers.',
      'eliminates the need for sunlight during crop photosynthesis.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Split application aligned with active spring growth -> +35% higher nitrogen recovery efficiency in grain + 60% lower nitrate runoff. Conclusion: Aligning timing with active crop growth stages improves nutrient uptake efficiency and decreases environmental runoff.`,
      correctReasoning: `Option A directly completes the agronomic inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'improves nutrient uptake efficiency and decreases environmental runoff...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by +35% uptake efficiency and 60% lower runoff.' },
        { optionIndex: 1, optionText: 'causes wheat crops to suffer severe nitrogen deficiency during spring.', trapType: 'Direct Contradiction', whyIncorrect: '70% applied during spring tiller emergence provided ample nitrogen.' },
        { optionIndex: 2, optionText: 'doubles required synthetic fertilizer purchasing costs for farmers.', trapType: 'Unsubstantiated Economic Claim', whyIncorrect: 'Split application used the same total fertilizer amount, just split.' },
        { optionIndex: 3, optionText: 'eliminates the need for sunlight during crop photosynthesis.', trapType: 'Absurd Physical Claim', whyIncorrect: 'Photosynthesis still requires sunlight.' }
      ]
    }
  },
  {
    id: 't6-ex-39',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In an investigation of sleep deprivation and immune function, researchers sampled blood leukocytes from healthy adults following 24 hours of total sleep deprivation. Gene expression profiling revealed a 50% suppression of pro-inflammatory cytokines ($IL\text{-6}$ and $TNF\text{-\alpha}$) and a significant down-regulation of natural killer ($NK$) cell cytotoxic activity against viral-infected cells, suggesting that acute sleep loss ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'impairs innate immune defense mechanisms required for pathogen defense.',
      'enhances human resistance to respiratory viral infections.',
      'permanently cures autoimmune inflammatory disorders.',
      'stimulates higher natural killer cell activity in blood plasma.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `24-hr sleep loss -> -50% pro-inflammatory cytokines + down-regulation of NK cell cytotoxic activity against viral cells. Conclusion: Acute sleep loss impairs innate immune defense mechanisms required for pathogen defense.`,
      correctReasoning: `Option A accurately completes the immunological inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'impairs innate immune defense mechanisms required for pathogen defense.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by suppressed cytokines and down-regulated NK cell activity.' },
        { optionIndex: 1, optionText: 'enhances human resistance to respiratory viral infections.', trapType: 'Opposite Deduction', whyIncorrect: 'Down-regulating viral-fighting NK cells lowers resistance.' },
        { optionIndex: 2, optionText: 'permanently cures autoimmune inflammatory disorders.', trapType: 'Unwarranted Clinical Absolute', whyIncorrect: 'Autoimmune cures are not demonstrated.' },
        { optionIndex: 3, optionText: 'stimulates higher natural killer cell activity in blood plasma.', trapType: 'Direct Contradiction', whyIncorrect: 'Text states NK activity was down-regulated, not stimulated higher.' }
      ]
    }
  },
  {
    id: 't6-ex-40',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `A marine geologist analyzing core samples from deep ocean trenches discovered layers of coarse turbidite sand deposits interbedded with fine pelagic clay. Radiocarbon dating revealed that each turbidite layer coincided with historically documented major subduction zone megathrust earthquakes ($M_w > 8.0$), indicating that deep-sea turbidite layers ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'can serve as geological records for reconstructing paleoseismic earthquake histories.',
      'are formed exclusively by surface tropical hurricane rainstorms.',
      'prevent submarine volcanic eruptions along ocean trenches.',
      'dissolve completely when exposed to deep ocean pressure.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Coarse turbidite layers interbedded in clay coincided with documented megathrust earthquakes ($M_w > 8.0$). Conclusion: Deep-sea turbidite layers can serve as geological records for reconstructing paleoseismic earthquake histories.`,
      correctReasoning: `Option A logically completes the paleoseismology inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'can serve as geological records for reconstructing paleoseismic...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by coincidence of turbidite layers with $M_w > 8.0$ earthquakes.' },
        { optionIndex: 1, optionText: 'are formed exclusively by surface tropical hurricane rainstorms.', trapType: 'Direct Contradiction', whyIncorrect: 'Text attributes them to megathrust earthquakes, not surface hurricanes.' },
        { optionIndex: 2, optionText: 'prevent submarine volcanic eruptions along ocean trenches.', trapType: 'Unmentioned Mechanism', whyIncorrect: 'Volcanic eruption prevention is not mentioned.' },
        { optionIndex: 3, optionText: 'dissolve completely when exposed to deep ocean pressure.', trapType: 'Direct Contradiction', whyIncorrect: 'Deposits were preserved in core samples, proving they did not dissolve.' }
      ]
    }
  },
  {
    id: 't6-ex-41',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `Ecologists evaluating ecosystem services in agricultural landscapes compared crop pollination efficiency in strawberry fields bordered by native wildflower hedgerows versus fields surrounded by sterile concrete fencing. Wildflower-bordered fields harbored three times more wild bee species, resulting in a 40% increase in market-grade fruit set weight due to complete flower pollination. This result indicates that establishing native wildflower habitats ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'enhances wild pollinator diversity and improves agricultural crop yield quality.',
      'decreases wild bee populations by attracting pest predator species.',
      'requires removing all crop plants from agricultural fields.',
      'has zero measurable impact on strawberry fruit weight or pollination.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Wildflower hedgerows -> 3x wild bee species -> +40% increase in market-grade fruit set weight. Conclusion: Wildflower habitats enhance wild pollinator diversity and improve agricultural crop yield quality.`,
      correctReasoning: `Option A directly synthesizes pollinator diversity (+3x bee species) and crop yield improvement (+40% fruit weight).`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'enhances wild pollinator diversity and improves agricultural crop yield...', trapType: 'Correct Logical Synthesis', whyIncorrect: 'Directly supported by 3x bee species and 40% fruit weight gain.' },
        { optionIndex: 1, optionText: 'decreases wild bee populations by attracting pest predator species.', trapType: 'Direct Contradiction', whyIncorrect: 'Wild bee species increased three-fold.' },
        { optionIndex: 2, optionText: 'requires removing all crop plants from agricultural fields.', trapType: 'Absurd Absolute', whyIncorrect: 'Hedgerows border crop fields; crops are not removed.' },
        { optionIndex: 3, optionText: 'has zero measurable impact on strawberry fruit weight or pollination.', trapType: 'Direct Contradiction', whyIncorrect: 'Fruit set weight increased by 40%.' }
      ]
    }
  },
  {
    id: 't6-ex-42',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `In a trial evaluating urban wastewater treatment, environmental engineers passed municipal sewage through constructed wetland basins planted with common reed (*Phragmites australis*). Within 48 hours, root-associated rhizosphere bacteria degraded 95% of dissolved organic carbon pollutants, while plant roots absorbed heavy metals like copper and zinc into root tissue, demonstrating that constructed reed wetlands ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'effectively remove organic pollutants and heavy metals from municipal wastewater.',
      'increase heavy metal toxicity in treated municipal drinking water.',
      'require chemical chlorine bleach to destroy rhizosphere bacteria.',
      'are completely incapable of breaking down organic carbon compounds.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Rhizosphere bacteria degraded 95% of organic carbon pollutants + roots absorbed copper and zinc heavy metals. Conclusion: Constructed reed wetlands effectively remove organic pollutants and heavy metals.`,
      correctReasoning: `Option A accurately summarizes both organic cleanup and heavy metal removal.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'effectively remove organic pollutants and heavy metals from municipal...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 95% organic carbon degradation and copper/zinc root absorption.' },
        { optionIndex: 1, optionText: 'increase heavy metal toxicity in treated municipal drinking water.', trapType: 'Direct Contradiction', whyIncorrect: 'Roots absorbed heavy metals out of the wastewater.' },
        { optionIndex: 2, optionText: 'require chemical chlorine bleach to destroy rhizosphere bacteria.', trapType: 'Unmentioned Chemical', whyIncorrect: 'Chlorine bleach is not mentioned.' },
        { optionIndex: 3, optionText: 'are completely incapable of breaking down organic carbon compounds.', trapType: 'Direct Contradiction', whyIncorrect: 'Degraded 95% of dissolved organic carbon.' }
      ]
    }
  },
  {
    id: 't6-ex-43',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `Neuroscientists assessing memory reconsolidation administered a protein synthesis inhibitor (anisomycin) to mice immediately after reactivating a conditioned fear memory with an audio tone. When tested 24 hours later, mice given anisomycin during memory reactivation showed zero fear response to the tone, whereas mice given anisomycin without memory reactivation retained strong fear responses. This contrast suggests that reactivating a stored memory ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'renders it temporarily labile and dependent on new protein synthesis for re-storage.',
      'permanently protects it from any chemical interference or disruption.',
      'causes immediate physical destruction of auditory hearing channels.',
      'transfers the memory trace from the brain to spinal nerve cords.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Anisomycin during memory reactivation -> erased fear response (0%). Anisomycin without reactivation -> fear memory intact. Conclusion: Reactivating a memory renders it temporarily labile and dependent on new protein synthesis to be re-stored.`,
      correctReasoning: `Option A accurately states the memory reconsolidation principle.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'renders it temporarily labile and dependent on new protein synthesis...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by anisomycin erasing memory ONLY when administered during reactivation.' },
        { optionIndex: 1, optionText: 'permanently protects it from any chemical interference or disruption.', trapType: 'Direct Contradiction', whyIncorrect: 'Anisomycin disrupted and erased the reactivated memory.' },
        { optionIndex: 2, optionText: 'causes immediate physical destruction of auditory hearing channels.', trapType: 'Wrong Sensory Claim', whyIncorrect: 'Hearing was not destroyed, specifically fear memory was erased.' },
        { optionIndex: 3, optionText: 'transfers the memory trace from the brain to spinal nerve cords.', trapType: 'Anatomical Falsehood', whyIncorrect: 'Memories are not stored in spinal cords.' }
      ]
    }
  },
  {
    id: 't6-ex-44',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Agronomists studying soil salinization in irrigated arid lands measured barley crop yields (*Hordeum vulgare*) under increasing soil electrical conductivity ($EC_e$) levels ($2\text{--}16\text{ dS/m}$). Barley grain yield remained unaffected up to $8\text{ dS/m}$, but declined by 5% for each additional $dS/m$ above $8\text{ dS/m}$, demonstrating that barley exhibits a salinity tolerance threshold above which ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'yield reductions occur in proportion to soil electrical conductivity.',
      'grain yields increase exponentially regardless of salt levels.',
      'plants convert soil sodium into atmospheric nitrogen gas.',
      'irrigation water requirement drops to zero.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Yield unaffected up to $8\text{ dS/m}$ (threshold), but declines 5% per $dS/m$ above $8\text{ dS/m}$. Conclusion: Above the threshold, yield reductions occur in proportion to soil electrical conductivity.`,
      correctReasoning: `Option A directly completes the proportional yield reduction model above threshold.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'yield reductions occur in proportion to soil electrical conductivity.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 5% yield decline per $dS/m$ above $8\text{ dS/m}$.' },
        { optionIndex: 1, optionText: 'grain yields increase exponentially regardless of salt levels.', trapType: 'Direct Contradiction', whyIncorrect: 'Yields DECLINED by 5% per $dS/m$.' },
        { optionIndex: 2, optionText: 'plants convert soil sodium into atmospheric nitrogen gas.', trapType: 'Chemical Falsehood', whyIncorrect: 'Sodium cannot be converted into nitrogen gas.' },
        { optionIndex: 3, optionText: 'irrigation water requirement drops to zero.', trapType: 'Unrelated Variable', whyIncorrect: 'Water requirement is not discussed.' }
      ]
    }
  },
  {
    id: 't6-ex-45',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In an investigation of deep-sea hydrothermal vent ecology, geobiologists analyzed chemosynthetic primary production near black smoker vents ($350^\circ\text{C}$). They discovered that giant tube worms (*Riftia pachyptila*) lack a functional digestive mouth or gut; instead, their internal trophosome tissue is packed with endosymbiotic sulfur-oxidizing bacteria that convert hydrogen sulfide ($H_2S$) into organic carbon carbohydrates for the host worm. This structural dependence demonstrates that *Riftia* survival is entirely contingent upon ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'a mutualistic endosymbiosis with chemosynthetic sulfur-oxidizing bacteria.',
      'ingesting photosynthetic surface phytoplankton drifting from upper ocean layers.',
      'filtering microplastics out of deep ocean water currents.',
      'maintaining an internal body temperature exceeding 350 degrees Celsius.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Tube worms lack mouth/gut and rely on internal trophosome bacteria converting $H_2S$ into carbohydrates. Conclusion: Survival is contingent upon mutualistic endosymbiosis with chemosynthetic sulfur-oxidizing bacteria.`,
      correctReasoning: `Option A directly summarizes the obligate endosymbiotic relationship described.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'a mutualistic endosymbiosis with chemosynthetic sulfur-oxidizing...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by lack of gut and reliance on trophosome bacteria converting $H_2S$.' },
        { optionIndex: 1, optionText: 'ingesting photosynthetic surface phytoplankton drifting from upper...', trapType: 'Direct Contradiction', whyIncorrect: 'Text states tube worms lack a mouth/gut to ingest food.' },
        { optionIndex: 2, optionText: 'filtering microplastics out of deep ocean water currents.', trapType: 'Microplastic Distractor', whyIncorrect: 'Microplastic filtering is not mentioned.' },
        { optionIndex: 3, optionText: 'maintaining an internal body temperature exceeding 350 degrees...', trapType: 'Thermal Falsehood', whyIncorrect: 'Vent fluids are $350^\circ\text{C}$, but worm internal body temp is not $350^\circ\text{C}$.' }
      ]
    }
  },
  {
    id: 't6-ex-46',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `In a study of urban acoustic environments, environmental scientists measured song volume in European robins (*Erithacus rubecula*) across city parks with varying nighttime streetlight intensity. Robins in artificially lit parks sang at higher decibel levels during nighttime hours than robins in dark rural parks. When artificial lights were switched off experimentally, nighttime singing ceased within 15 minutes, indicating that nocturnal vocalization in urban robins ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'is triggered directly by artificial light pollution disrupting circadian cues.',
      'occurs independently of ambient environmental lighting conditions.',
      'prevents robins from finding daytime food sources.',
      'is performed exclusively during cold winter blizzard events.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Robins sang at night in lit parks; switching off artificial lights caused singing to cease within 15 mins. Conclusion: Nocturnal vocalization is triggered directly by artificial light pollution disrupting circadian cues.`,
      correctReasoning: `Option A logically completes the light pollution causal inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'is triggered directly by artificial light pollution disrupting circadian...', trapType: 'Correct Causal Deduction', whyIncorrect: 'Directly supported by singing ceasing within 15 mins of switching lights off.' },
        { optionIndex: 1, optionText: 'occurs independently of ambient environmental lighting conditions.', trapType: 'Direct Contradiction', whyIncorrect: 'Turning lights off stopped singing, proving lighting dependency.' },
        { optionIndex: 2, optionText: 'prevents robins from finding daytime food sources.', trapType: 'Unmentioned Daytime Claim', whyIncorrect: 'Daytime food foraging is not discussed.' },
        { optionIndex: 3, optionText: 'is performed exclusively during cold winter blizzard events.', trapType: 'Unmentioned Weather Claim', whyIncorrect: 'Blizzards are not mentioned.' }
      ]
    }
  },
  {
    id: 't6-ex-47',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `Cognitive neuroscientists studying tool use in stroke patients with ideational apraxia observed that patients could name a hammer and describe its function when shown a photograph, but were unable to execute the correct motor pantomime (swinging action) when handed a physical hammer. Brain $f\text{MRI}$ damage mapping showed localized lesions in the left inferior parietal lobule ($IPL$), suggesting that the left $IPL$ is involved specifically in ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'translating conceptual tool knowledge into motor action programs.',
      'recognizing visual photographs of household objects.',
      'understanding spoken auditory vocabulary names.',
      'generating linguistic speech descriptions of object functions.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Deduction',
    explanation: {
      passageDeconstruction: `Patients COULD name hammer and describe function (conceptual knowledge intact), but COULD NOT execute swinging motor pantomime (action program failed) due to left $IPL$ lesions. Conclusion: Left $IPL$ is involved specifically in translating conceptual tool knowledge into motor action programs.`,
      correctReasoning: `Option A logically synthesizes intact conceptual knowledge with impaired motor action program.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'translating conceptual tool knowledge into motor action programs.', trapType: 'Correct Logical Synthesis', whyIncorrect: 'Directly matches intact conceptual naming alongside failed motor pantomime.' },
        { optionIndex: 1, optionText: 'recognizing visual photographs of household objects.', trapType: 'Direct Contradiction', whyIncorrect: 'Patients COULD recognize photo and name the hammer.' },
        { optionIndex: 2, optionText: 'understanding spoken auditory vocabulary names.', trapType: 'Direct Contradiction', whyIncorrect: 'Naming and describing function were intact.' },
        { optionIndex: 3, optionText: 'generating linguistic speech descriptions of object functions.', trapType: 'Direct Contradiction', whyIncorrect: 'Patients COULD describe its function.' }
      ]
    }
  },
  {
    id: 't6-ex-48',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `An agricultural soil scientist evaluated soil compaction recovery in farm fields following ten years of continuous no-till farming versus conventional moldboard plowing. Soil bulk density in no-till fields decreased by 18%, while earthworm burrow density increased four-fold, creating vertical macropores that improved rainwater infiltration rates by 250%, suggesting that long-term no-till management ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'restores soil structure and enhances hydrological infiltration capacity.',
      'destroys earthworm populations by compacting subsurface clay.',
      'requires heavy moldboard plowing every spring to maintain porosity.',
      'completely prevents rainwater from penetrating the topsoil layer.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `10 yrs no-till -> -18% bulk density, 4x earthworm burrows, +250% rainwater infiltration. Conclusion: Long-term no-till management restores soil structure and enhances hydrological infiltration capacity.`,
      correctReasoning: `Option A accurately completes the soil conservation inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'restores soil structure and enhances hydrological infiltration capacity.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 4x earthworm burrows and 250% higher water infiltration.' },
        { optionIndex: 1, optionText: 'destroys earthworm populations by compacting subsurface clay.', trapType: 'Direct Contradiction', whyIncorrect: 'Earthworm burrows increased four-fold.' },
        { optionIndex: 2, optionText: 'requires heavy moldboard plowing every spring to maintain porosity.', trapType: 'Direct Contradiction', whyIncorrect: 'No-till avoided plowing entirely to achieve these benefits.' },
        { optionIndex: 3, optionText: 'completely prevents rainwater from penetrating the topsoil layer.', trapType: 'Direct Contradiction', whyIncorrect: 'Rainwater infiltration increased by 250%.' }
      ]
    }
  },
  {
    id: 't6-ex-49',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Hard Module',
    passage: `In quantum computing research, engineers constructed superconducting transmon qubits cooled to $15\text{ mK}$ in a dilution refrigerator. When magnetic shielding around the quantum processor was upgraded from single-layer mu-metal to a dual-layer superconducting shield, qubit coherence times ($T_1$ relaxation) increased from $45\text{ microseconds}$ to $320\text{ microseconds}$, indicating that environmental magnetic field fluctuations ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'act as a primary source of quantum decoherence in transmon qubits.',
      'have zero impact on superconducting qubit coherence lifetimes.',
      'increase qubit $T_1$ relaxation times when shielding is removed.',
      'spontaneously raise dilution refrigerator temperatures above $300\text{ K}$.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Upgrading magnetic shielding -> qubit coherence time ($T_1$) increased from $45\mu s$ to $320\mu s$. Conclusion: Environmental magnetic field fluctuations act as a primary source of quantum decoherence in transmon qubits.`,
      correctReasoning: `Option A directly completes the physics inference linking magnetic fluctuations to decoherence.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'act as a primary source of quantum decoherence in transmon qubits.', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by 7x increase in coherence time ($T_1$) upon upgrading magnetic shielding.' },
        { optionIndex: 1, optionText: 'have zero impact on superconducting qubit coherence lifetimes.', trapType: 'Direct Contradiction', whyIncorrect: 'Coherence time jumped from $45\mu s$ to $320\mu s$, proving a massive impact.' },
        { optionIndex: 2, optionText: 'increase qubit $T_1$ relaxation times when shielding is removed.', trapType: 'Opposite Deduction', whyIncorrect: 'Removing shielding would expose qubits to magnetic noise, reducing $T_1$.' },
        { optionIndex: 3, optionText: 'spontaneously raise dilution refrigerator temperatures above $300\text{ K}$.', trapType: 'Absurd Thermal Claim', whyIncorrect: 'Magnetic fluctuations do not warm dilution fridges to room temp ($300\text{ K}$).' }
      ]
    }
  },
  {
    id: 't6-ex-50',
    moduleNumber: 1,
    subskill: 'Inferences & Conclusions',
    difficulty: 'Easy/Medium Module',
    passage: `Marine biologists tracking North Atlantic right whales (*Eubalaena glacialis*) analyzed ship strike mortality records before and after mandatory vessel speed limits ($10\text{ knots}$) were enforced in seasonal calving zones. Annual right whale lethal ship strike casualties dropped from an average of $3.2$ whales per year to $0.4$ whales per year following speed limit enforcement, demonstrating that reducing vessel speeds ______`,
    questionText: `Which choice most logically completes the text?`,
    options: [
      'significantly lowers lethal collision risks for right whales in shipping corridors.',
      'increases commercial cargo vessel collision frequencies with marine mammals.',
      'causes right whales to abandon seasonal calving grounds completely.',
      'has zero effect on right whale mortality rates.'
    ],
    correctAnswer: 0,
    nextGenTechnique: 'Conservative Logical Completion',
    explanation: {
      passageDeconstruction: `Enforcing 10-knot vessel speed limit -> lethal ship strike casualties dropped from 3.2/yr to 0.4/yr. Conclusion: Reducing vessel speeds significantly lowers lethal collision risks for right whales in shipping corridors.`,
      correctReasoning: `Option A accurately completes the marine conservation inference.`,
      distractorAnalysis: [
        { optionIndex: 0, optionText: 'significantly lowers lethal collision risks for right whales in shipping...', trapType: 'Correct Logical Conclusion', whyIncorrect: 'Directly supported by ship strike casualties dropping from 3.2 to 0.4 per year.' },
        { optionIndex: 1, optionText: 'increases commercial cargo vessel collision frequencies with marine...', trapType: 'Direct Contradiction', whyIncorrect: 'Collisions dropped drastically from 3.2 to 0.4.' },
        { optionIndex: 2, optionText: 'causes right whales to abandon seasonal calving grounds completely.', trapType: 'Unmentioned Behavior', whyIncorrect: 'Calving ground abandonment is not mentioned.' },
        { optionIndex: 3, optionText: 'has zero effect on right whale mortality rates.', trapType: 'Direct Contradiction', whyIncorrect: 'Mortality dropped by 87.5% (3.2 to 0.4).' }
      ]
    }
  }
];
