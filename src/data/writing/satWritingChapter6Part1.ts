import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Transition Logic: Core Principles, Transition Families & Strategy',
  description: 'What Transitions Do → Four Core Families → Removal Test → Contrast Strengths → Cause/Effect Direction → Three-Question Method',
  concepts: [
    {
      id: 'ch6-b1-c1',
      title: '1. What a Transition Actually Does',
      fullText: `A transition is not simply a word that "sounds smooth."
Its job is to show the **logical relationship between the idea before it and the idea after it**.

For SAT Writing questions, the key question is:
> **What relationship does the new sentence have with the previous sentence?**

Only after identifying that relationship should you choose a transition.

Consider:
> The city expanded its public transportation network. ___, traffic congestion decreased.

The second sentence describes a **result** of the first.
A transition expressing result is appropriate:
> **Therefore,** traffic congestion decreased.

The important skill is not memorizing *therefore*. It is recognizing:
> **action → consequence.**`
    },
    {
      id: 'ch6-b1-c2',
      title: '2. The Four Core Transition Families',
      fullText: `Most transition questions can initially be classified into four broad relationships:

### A. Continuation / Addition
The second idea continues or adds to the first.
**Common relationships:** another point, additional evidence, another example, reinforcement.
**Examples:** *furthermore, moreover, additionally, also, in addition*.

### B. Contrast
The second idea differs from, limits, or challenges the first.
**Common transitions:** *however, nevertheless, in contrast, by contrast, instead, although*.
*Example:* "The first experiment produced promising results. **However**, the second experiment failed to reproduce them."

### C. Cause and Effect
The second idea results from the first, or the first explains the second.
**Common transitions:** *therefore, consequently, thus, as a result*.
*Example:* "The region experienced unusually heavy rainfall. **Consequently**, several roads were closed." (heavy rainfall → road closures)

### D. Example / Illustration
The second idea provides a specific case that illustrates a broader claim.
**Common transitions:** *for example, for instance, specifically*.
*Example:* "Several renewable-energy technologies have become more affordable. **For example**, the cost of solar panels has declined substantially."`
    },
    {
      id: 'ch6-b1-c3',
      title: '3. Do Not Choose By The Word Alone & The Removal Test',
      fullText: `A dangerous approach is: *"I know that however is a transition, so I'll choose it."* That is insufficient. Every transition question should be solved using:
> **Previous idea + new idea → logical relationship → transition**

### The Removal Test
Sometimes several transitions seem grammatically possible. Use the **removal test**.
Remove each candidate transition mentally and ask:
> *What is the logical relationship between these two sentences?*

*Example:*
> The museum's attendance increased dramatically. ___, its revenue declined.
Without a transition: *attendance increased → revenue declined*. The second result is unexpected relative to the first. Therefore, the relationship is **contrast**, not simple continuation.`
    },
    {
      id: 'ch6-b1-c4',
      title: '4. Nuances in Relationships (Addition vs. Similarity, Contrast Strengths, Cause/Effect Direction)',
      fullText: `### Addition is Not the Same as Similarity
- **Addition:** "The study examined the effects of sleep deprivation. It also measured participants' reaction times." (adds another part of study)
- **Similarity:** "The study found that sleep deprivation reduced concentration. **Similarly**, another experiment found reduced concentration..." (parallel finding)

### Contrast Has Different Strengths
- **Direct contradiction:** *however, in contrast*
- **Unexpected result / Concession:** *nevertheless, nonetheless*
- **Replacement:** *instead*
- **Limitation / Qualification:** *although, while, nevertheless*
*Example:* "The method is inexpensive. **Nevertheless**, it requires considerable time." (introduces a qualification)

### Cause and Effect Direction Matters
Compare:
1. "The experiment produced unexpected results. **Therefore**, the researchers repeated it." (*unexpected results → repeated experiment* = result)
2. "The researchers repeated the experiment. **Because** the first trial produced unexpected results, they wanted additional evidence." (*inconsistent results → repetition* = reason)
A result transition such as *therefore* in case 2 would reverse the logic.`
    },
    {
      id: 'ch6-b1-c5',
      title: '5. General → Specific vs. Specific → General & Transitions Must Fit Both Sides',
      fullText: `### General → Specific
- *Broad claim:* Many architectural styles incorporate elements from earlier traditions.
- *Specific evidence:* **For example**, several modern buildings incorporate classical columns.
Signals: broad claim → specific instance.

### Specific → General
- *Specific evidence:* Several modern buildings incorporate classical columns.
- *Broader conclusion:* **More broadly**, architects continue to adapt historical elements...
Signals: drawing a broader conclusion from a specific example.

### Transitions Must Fit Both Sides
A transition cannot be evaluated from the sentence immediately after it alone.
> The experiment was expensive. ___, it produced highly reliable data.
The second sentence is positive relative to the first. The transition must acknowledge the tension:
> **Nevertheless**, it produced highly reliable data.`
    },
    {
      id: 'ch6-b1-c6',
      title: '6. Block 1 Master Technique & Takeaway',
      fullText: `### The Three-Question Method
For every transition question, ask:
1. What is the main point of the previous sentence?
2. What is the main point of the next sentence?
3. How are those ideas related?
*Classify:* **ADD → CONTRAST → CAUSE/EFFECT → EXAMPLE → SIMILARITY → QUALIFICATION**

### Master Solving Sequence
1. **STEP 1** — Ignore the answer choices. Read the two relevant ideas.
2. **STEP 2** — Reduce each sentence to its core meaning.
3. **STEP 3** — Identify the relationship (e.g., Cheap but slow → qualification/contrast).
4. **STEP 4** — Predict the transition yourself (*however / nevertheless*).
5. **STEP 5** — Compare with the choices.
6. **STEP 6** — Reject transitions that describe a different relationship.

### Block 1 Takeaway
A transition question is fundamentally a **logic question disguised as a vocabulary question**.
The central chain is:
> **Meaning → Relationship → Transition**
not:
> Transition word → Guess.`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Advanced Transition Relationships and Precision',
  description: 'Nuanced Differences → Local vs. Global Logic → The Paragraph-Map Technique → Precision Principle → Relationship Matrix',
  concepts: [
    {
      id: 'ch6-b2-c1',
      title: '1. Not All Relationships Are Simple & Fine Distinctions',
      fullText: `Once you recognize the major transition families, the difficult questions require finer distinctions:
- **Addition vs. Consequence:**
  - *Addition:* "The researchers collected data from 500 participants. **Additionally**, they conducted interviews..."
  - *Consequence:* "The researchers collected insufficient data. **Consequently**, they conducted additional interviews."
- **Contrast vs. Concession:**
  - *Contrast:* "The northern region receives heavy rainfall. **In contrast**, the southern region is drier." (two ideas differ)
  - *Concession:* "The method is relatively expensive. **Nevertheless**, researchers continue to use it." (second idea survives despite the first)
  - *Test:* "Does the second idea merely differ, or does it survive despite the first?" If it survives despite the first, think **concession**.`
    },
    {
      id: 'ch6-b2-c2',
      title: '2. Specific Transition Comparisons',
      fullText: `### However vs. Therefore
- *However:* A → B differs from A. ("The sample size was small. **However**, the findings were consistent...")
- *Therefore:* A → B follows from A. ("The sample size was too small. **Therefore**, researchers collected additional data.")

### Furthermore vs. Similarly
- *Furthermore:* Adds another point that strengthens an argument. ("The method is inexpensive. **Furthermore**, it requires little equipment.")
- *Similarly:* Shows another subject/situation has a comparable characteristic. ("The first method reduced processing time. **Similarly**, the second method reduced processing time.")

### In Contrast vs. Instead
- *In Contrast:* Shows a difference between two ideas. ("Traditional cameras require film. **In contrast**, digital cameras store images electronically.")
- *Instead:* Indicates replacement or an alternative. ("The researchers did not use the original method. **Instead**, they adopted a newer technique.")

### Consequently vs. For This Reason
- *Consequently:* "The roads were flooded. **Consequently**, transportation was disrupted." (second event follows)
- *For This Reason:* Explicitly points back to a reason. ("The researchers lacked sufficient data. **For this reason**, they postponed the analysis.")`
    },
    {
      id: 'ch6-b2-c3',
      title: '3. Chronological Transitions & Meanwhile & Finally vs. Therefore',
      fullText: `### Chronological Transitions
Examples: *initially, subsequently, meanwhile, eventually, previously, later*.
Must emphasize **sequence**: "The researchers first collected samples. **Subsequently**, they analyzed them..."

### Meanwhile vs. Subsequently
- **Meanwhile:** Signals that another event occurs during the *same period*. ("The engineers tested the prototype. **Meanwhile**, the design team prepared the next version.")
- **Subsequently:** Signals one event *follows* another.

### Finally vs. Therefore
"The researchers collected samples. They analyzed them. They compared results. ___, they published findings."
Use **Finally** (last stage in sequence), not *Therefore* (which would imply publication was a logical consequence rather than the final chronological step).`
    },
    {
      id: 'ch6-b2-c4',
      title: '4. Local Logic vs. Global Logic & Paragraph-Map Technique',
      fullText: `### Local Logic vs. Global Logic
- **Local logic:** Relationship between two neighboring sentences.
- **Global logic:** Relationship between the developing ideas of the entire paragraph.

A transition can be locally plausible but globally wrong.
*Paragraph structure:*
1. Introduces traditional explanation.
2. Provides evidence.
3. Introduces alternative explanation.
4. Shows why alternative is more convincing.

A transition like *furthermore* before sentence 3 might connect superficially to sentence 2, but the paragraph's larger movement is toward a **challenge to the traditional explanation**.

### The Paragraph-Map Technique
Reduce the paragraph to a sequence of ideas:
> Old theory → supporting evidence → new evidence → contradiction.
Ask: *What transition expresses movement from supporting evidence to contradiction?* → Contrast / concession.`
    },
    {
      id: 'ch6-b2-c5',
      title: '5. The Precision Principle & Sentence Function',
      fullText: `### Precision Principle
When two choices appear logically possible, **choose the one that describes the relationship more specifically**.
*Example:* "Many researchers have questioned the traditional explanation. ___, several recent experiments have produced results inconsistent with it."
If the second sentence is a specific illustration supporting the claim, **for example** is more precise than generic addition (*furthermore*).

### Sentence Function
Identify the **rhetorical function** of the sentence before choosing its transition:
introduce evidence, explain evidence, contrast evidence, provide an example, draw a conclusion, qualify a claim, shift focus, establish chronology.`
    },
    {
      id: 'ch6-b2-c6',
      title: '6. Relationship Matrix & Block 2 Takeaway',
      fullText: `### Relationship Matrix
| Relationship | Core Question |
|---|---|
| Addition | What else is true? |
| Contrast | How is this different? |
| Concession | What remains true despite this? |
| Cause | Why did this happen? |
| Effect | What happened because of this? |
| Example | What specific case illustrates this? |
| Similarity | What comparable thing is true? |
| Replacement | What alternative replaces the first? |
| Chronology | What happened next/before/during? |
| Conclusion | What follows from the discussion? |
| Qualification | What limitation modifies the claim? |

### Block 2 Takeaway
The advanced transition skill is learning to distinguish **closely related rhetorical relationships**:
> **Meaning → Rhetorical function → Relationship → Transition**`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Concession, Qualification, and Nuanced Contrast',
  description: 'Types of Contrast → Concession vs. Direct Contrast → Scope Test → Instead vs. Nevertheless → 5-Way Decision Tree',
  concepts: [
    {
      id: 'ch6-b3-c1',
      title: '1. Why Advanced Transition Questions Become Difficult',
      fullText: `Basic transition questions ask you to distinguish *addition vs. contrast vs. cause/effect*.
Harder questions require a finer distinction: **What kind of contrast is occurring?**

Two sentences can disagree, but the writer may be doing very different things:
- directly contrasting two facts,
- acknowledging an objection,
- limiting a previous claim,
- showing an unexpected result,
- presenting an exception,
- replacing one approach with another.`
    },
    {
      id: 'ch6-b3-c2',
      title: '2. Direct Contrast vs. Concession & "Despite This" Test',
      fullText: `### Direct Contrast
Places two different conditions, characteristics, or outcomes against one another.
*Example:* "Coastal regions receive substantial rainfall. **In contrast**, some inland regions receive very little." (A = high rainfall, B = low rainfall)

### Concession
The writer essentially says: **"Even though X is true, Y is still true."**
*Example:* "The new material is expensive to manufacture. **Nevertheless**, several companies have adopted it." (cost is an obstacle, but main point holds)

### The "Despite This" Test
Insert **"despite this"** between the ideas.
"The method is time-consuming. ___, researchers continue to use it."
Try: "Despite this, researchers continue to use it." → Makes logical sense → Concession.`
    },
    {
      id: 'ch6-b3-c3',
      title: '3. Unexpected Result, However, Nevertheless, Even So',
      fullText: `### Unexpected Result
Signals something happened contrary to expectation.
"The researchers expected the treatment to increase recovery rates. **Nevertheless**, recovery rates remained unchanged."

### "However" vs. "Nevertheless" / "Nonetheless" / "Even So"
- **However:** Broad transition; can introduce direct difference, contradiction, qualification, unexpected info. If a more precise choice exists, prefer the precise choice.
- **Nevertheless / Nonetheless / Even So:** Emphasize *X is true, but Y remains true anyway*.
*Example:* "The sample was relatively small. **Even so**, the results were consistent across multiple trials."`
    },
    {
      id: 'ch6-b3-c4',
      title: '4. Qualification, Scope Test, Exception & Expectation vs. Reality',
      fullText: `### Qualification & Scope Test
Qualification narrows or limits a broad claim rather than rejecting it.
*Example:* "The policy benefited many students. **However**, its effects were less significant among students from rural areas."

**Scope Test:** Ask: *Does the second sentence destroy the first claim, or make it less broad?*
- Destroy / oppose → **contrast**
- Narrow → **qualification**

### Exception
Identifies a case that does not follow a broader pattern.
"Most species in the region reproduce during summer. **However**, one species reproduces in winter."

### Expectation vs. Reality & Instead
- **Expectation → surprising reality:** "Scientists expected the new material to reduce costs. **Instead**, production costs increased."
- **Instead vs. Nevertheless:**
  - *Instead:* A did not happen → B happened in its place (Replacement).
  - *Nevertheless:* A is true → despite A, B remains true (Concession).`
    },
    {
      id: 'ch6-b3-c5',
      title: '5. "What Survives?" Test & Paragraph-Level Concession',
      fullText: `### The "What Survives?" Test
After reading the second sentence, ask: *What part of the first claim remains true?*
- Survives with a limitation → **qualification**
- Remains true despite an obstacle → **concession**
- Replaced by second → **instead / replacement**
- Simply differs → **contrast**

### Multiple-Layer & Paragraph-Level Concession
"The treatment is relatively inexpensive. **Nevertheless**, it has not been widely adopted because production remains difficult."
1. inexpensive = advantage
2. not widely adopted = unexpected result (concession)
3. production difficulty = explanation for why adoption is low

Concession can also operate across an entire paragraph:
- Para 1: presents advantages
- Para 2: acknowledges limitations
- Para 3: explains why theory remains useful despite limitations`
    },
    {
      id: 'ch6-b3-c6',
      title: '6. Block 3 Five-Way Decision Tree & Takeaway',
      fullText: `### When Two Ideas Appear Different:
1. **Is the second simply different?** → Contrast
2. **Does the second remain true despite the first?** → Concession
3. **Does the second narrow the first?** → Qualification
4. **Does the second replace what would otherwise happen?** → Instead
5. **Does the second violate an expectation?** → Unexpected result

### Block 3 Takeaway
The central diagnostic question is:
> **What is the writer doing with the second idea?**`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Cause, Effect, Evidence, and Logical Direction',
  description: 'Logical Directions → Therefore vs. Consequently vs. Thus → Causation vs. Correlation → Claim vs. Evidence vs. Conclusion',
  concepts: [
    {
      id: 'ch6-b4-c1',
      title: '1. Why Cause-Effect Transitions Are Tricky & Logical Directions',
      fullText: `The real challenge in cause-effect questions is determining **which direction the logic moves**.
You must distinguish:
- **cause → effect** ("The region experienced severe flooding. **As a result**, several roads were closed.")
- **effect → explanation** ("Several roads were closed. **This occurred because** the region experienced flooding.")
- **claim → evidence** ("The species is adaptable. **For example**, it survives in deserts and wetlands.")`
    },
    {
      id: 'ch6-b4-c2',
      title: '2. Cause-Effect Transitions: Therefore, Consequently, As a Result, Thus',
      fullText: `### Therefore
Signals preceding information → conclusion / result.
"The sample was too small. **Therefore**, the researchers repeated the experiment."

### Consequently
Strongly emphasizes an outcome (X happened → Y followed).
"The factory reduced production. **Consequently**, fewer products were available."

### As a result
Describes the consequence of an event.
"The region experienced a dry season. **As a result**, agricultural output declined."

### Thus
Introduces a result or conclusion, especially useful when the relationship is inferential rather than purely physical causation.
"The evidence was consistent across multiple trials. **Thus**, the researchers considered the finding reliable."`
    },
    {
      id: 'ch6-b4-c3',
      title: '3. Causation vs. Correlation & Evidence Relationships',
      fullText: `### Causation vs. Correlation Trap
*Two things happen together ≠ one necessarily caused the other.*
"X increased. Y also increased." does not automatically justify *therefore*. The passage must establish a causal or inferential relationship.

### Claim → Evidence vs. Evidence → Conclusion
- **Claim → Evidence:** Broad statement → specific supporting fact.
  "The technology has become increasingly affordable. **For instance**, average installation costs have fallen substantially."
- **Evidence → Conclusion:** Facts → inference.
  "Installation costs have fallen substantially, and adoption has increased. **Therefore**, the technology is becoming economically viable."`
    },
    {
      id: 'ch6-b4-c4',
      title: '4. "Because" vs. "Therefore" Direction & "For This Reason"',
      fullText: `### "Because" and "Therefore" Have Opposite Directions
- "The researchers repeated the experiment **because** the original findings were inconsistent." (*inconsistent findings → repetition*)
- "The original findings were inconsistent. **Therefore**, the researchers repeated the experiment." (*inconsistent findings → repetition*)
Same underlying logic, opposite sentence organization!

### "For This Reason" vs. "As a Result"
- **For this reason:** Points backward to a reason. ("The sample was too small. **For this reason**, researchers conducted a second study.")
- **As a result:** Points forward from cause to outcome. ("The sample was too small. **As a result**, researchers conducted a second study.")`
    },
    {
      id: 'ch6-b4-c5',
      title: '5. Conclusion Transitions & Accordingly & Logical Direction Test',
      fullText: `### Conclusion Transitions & Accordingly
- **Conclusion transitions:** *therefore, thus, consequently, accordingly*.
- **Accordingly:** Means "in a way appropriate to what has just been established."
*Example:* "The original design failed several safety tests. **Accordingly**, engineers revised the design before further testing."

### Logical Direction Test
1. Write: **A → B**
2. Ask: Which sentence contains A (cause/evidence)?
3. Ask: Which sentence contains B (effect/conclusion)?
4. Determine whether transition signals *A causes B* or *B is explained by A*.`
    },
    {
      id: 'ch6-b4-c6',
      title: '6. Block 4 Advanced Technique & Takeaway',
      fullText: `### Five-Step Analysis
1. What happened first?
2. What happened because of it?
3. Is the writer explaining a cause or announcing a consequence?
4. Is the second sentence actually evidence rather than an effect?
5. Is the writer drawing a conclusion rather than describing direct causation?

### Block 4 Takeaway
Cause-and-effect transition questions are fundamentally about **direction**:
- **Cause → Effect:** *therefore / consequently / as a result*
- **Cause → Explanation:** *because / for this reason*
- **Evidence → Conclusion:** *therefore / thus / accordingly*
- **Claim → Evidence:** *for example / for instance / specifically*`
    }
  ]
};

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: 'Addition, Continuation, Examples, and Evidence',
  description: 'Addition vs. Similarity → Examples vs. Specifically → Evidence Types → Four-Way Distinction',
  concepts: [
    {
      id: 'ch6-b5-c1',
      title: '1. Addition, Continuation & Furthermore vs. Moreover vs. Additionally',
      fullText: `### Addition
Tells the reader: *"Here is another relevant point."*
Signals: *additionally, furthermore, moreover, in addition*.
*Note:* Addition does not require similarity! (e.g. measuring temperature AND recording atmospheric pressure).

### Distinctions
- **Additionally:** Neutral addition of another relevant fact.
- **Furthermore:** Introduces another point that strengthens or extends the argument.
- **Moreover:** Introduces an additional point that is especially relevant, significant, or reinforcing.`
    },
    {
      id: 'ch6-b5-c2',
      title: '2. Similarity & Addition vs. Similarity',
      fullText: `### Similarity
Tells the reader: *"Another subject or situation behaves in a comparable way."*
Signals: *similarly, likewise, in the same way*.

### Addition vs. Similarity
- **Addition:** "The first experiment measured temperature. **Additionally**, it measured humidity." (different measurements added)
- **Similarity:** "The first experiment showed temperature affected growth. **Similarly**, the second experiment found temperature affected seed development." (parallel finding)`
    },
    {
      id: 'ch6-b5-c3',
      title: '3. Examples: For Example vs. Specifically',
      fullText: `### Example Transitions
Introduces a specific instance of a broader idea (*for example, for instance, specifically*).

**General-to-Specific Test:** Ask: *Is sentence 1 broad and sentence 2 a particular case of it?*

### For Example vs. Specifically
- **For example:** Usually introduces a representative instance. ("Many animals communicate through sound. **For example**, whales produce complex vocalizations.")
- **Specifically:** Usually narrows attention to an exact detail. ("Several environmental factors influenced growth. **Specifically**, temperature had the strongest effect.")`
    },
    {
      id: 'ch6-b5-c4',
      title: '4. Evidence Types & Evidence vs. Consequence',
      fullText: `### Evidence Transitions
Connect a claim with information that supports it.

**Evidence vs. Consequence:**
- *Evidence:* "The material appears durable. **For example**, it survived repeated stress tests."
- *Consequence/Conclusion:* "The material survived repeated stress tests. **Therefore**, researchers classified it as durable."

### Types of Evidence
- **Numerical statistic:** "The program has become popular. **For example**, enrollment increased 40%."
- **A Study:** "Regular exercise improves memory. **For instance**, one longitudinal study observed..."
- **An Observation:** "The species is adaptable. **For example**, populations have survived in different climates."`
    },
    {
      id: 'ch6-b5-c5',
      title: '5. Parallel Evidence, Cumulative Evidence & Avoid Inventing Logic',
      fullText: `### Parallel Evidence & Cumulative Evidence
- **Parallel Evidence:** "One experiment found reduced inflammation. **Similarly**, a separate study found lower inflammation..."
- **Cumulative Evidence:** Claim → Evidence 1 → Evidence 2 → Evidence 3 → Conclusion.

### Avoid Inventing Logic
"The number of electric vehicles increased. Battery technology also improved."
Do not automatically conclude battery improvement *caused* the increase unless the text explicitly asserts it. The passage may simply be presenting two related developments.`
    },
    {
      id: 'ch6-b5-c6',
      title: '6. The Four-Way Distinction & Block 5 Master Technique',
      fullText: `### Four-Way Distinction
1. Is it simply another point? → **Addition**
2. Is it a parallel finding? → **Similarity**
3. Is it a specific instance? → **Example**
4. Does it support a broader claim? → **Evidence**

### Block 5 Master Technique
> **GENERAL → SPECIFIC = EXAMPLE**
> **CLAIM → SUPPORT = EVIDENCE**
> **POINT → ANOTHER POINT = ADDITION**
> **IDEA A → PARALLEL IDEA B = SIMILARITY**

### Block 5 Takeaway
Answer the question: **"Why did the writer place this particular sentence here?"**`
    }
  ]
};
