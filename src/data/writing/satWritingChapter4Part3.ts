import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_8: WritingTheoryBlock = {
  blockNumber: 8,
  title: 'Advanced Parallelism: Agreement, Coordination, and Sentence Revision',
  description: 'Parallelism Under Pressure, Core Reduction Technique, Intervening Phrases, Subject-Verb Agreement Interactions, Tense Chronology, Modals, Auxiliaries, Appositives, and Nested Parallelism (Concepts 1–40)',
  concepts: [
    {
      id: 'tb8-c1',
      title: '1–3. Parallelism is a Relationship & The Core-Reduction Technique',
      fullText: `Parallelism under pressure refers to sentences where structural errors are disguised by subject-verb agreement, tense changes, long modifiers, or intervening phrases.

### The Core-Reduction Technique:
Reduce the sentence to its smallest meaningful structure.

> *The research team, after several months of preparation, carefully collected the evidence from multiple locations, analyzed the results using specialized software, and eventually published its conclusions.*
* **Reduction**: *team collected ... team analyzed ... team published* (All parallel past-tense verbs governed by subject *team*).

Intervening prepositional phrases or parentheticals do not destroy parallelism if the core verb structure is consistent.`
    },
    {
      id: 'tb8-c2',
      title: '4–7. Subject–Verb Agreement Hiding Parallelism & The "Same Subject?" Test',
      fullText: `### Subject-Verb Agreement Interaction:
> *The program provides scholarships, supports mentorship initiatives, and encourages students to participate in research.*
* Subject: **program** (singular)
* Verbs: **provides**, **supports**, **encourages** (All present-tense singular verbs matching *program*)

### The "Same Subject?" Test:
For every coordinated verb, ask:
> **Who performs this action?**
If the same subject performs all actions, they form a parallel series controlled by that subject.`
    },
    {
      id: 'tb8-c3',
      title: '8–12. Tense Parallelism, Structural Repair, and Preserving Meaning',
      fullText: `### Tense Parallelism & Chronology:
* Do NOT force identical tense when actions occur at different times!
> *The researchers discovered that the method had failed because earlier tests had produced inconsistent results.* (Past perfect correctly shows events before discovery).

### Structural Repair Rules:
When *A and B* are mismatched:
1. Change A to match B, or
2. Change B to match A.
Always choose the repair that preserves the author's **intended meaning** most clearly!`
    },
    {
      id: 'tb8-c4',
      title: '13–23. Modals, Auxiliaries, Passives, Split Infinitives, and Negation',
      fullText: `### Modals, Auxiliaries & Passives:
* **Modals** (*can, could, may, might, must, should, will, would*): Require base form (*should research, evaluate, and formulate*).
* **Auxiliaries**: *The researchers have collected, analyzed, and published the evidence.*
* **Passives**: *The applications were reviewed, evaluated, and ranked by the committee.*
* **Split Infinitives**: *to significantly improve* (A split infinitive is NOT a parallelism error!).
* **Negation**: *did not identify, explain, or establish a solution.*`
    },
    {
      id: 'tb8-c5',
      title: '24–32. Correlatives, "As Well As", Appositives, and Relative Clauses',
      fullText: `### Correlative & Additive Structures:
* **Neither...Nor**: *neither confirmed the hypothesis nor rejected the alternative explanation*
* **Either...Or**: *will either approve the proposal or request revisions*
* **"As Well As"**: *The director, as well as the researchers, was involved in the project.* (Main subject remains singular *director*)
* **Appositive Parallelism**: *The university's president, a former researcher and administrator, announced the initiative.* (*researcher and administrator* are parallel inside appositive)`
    },
    {
      id: 'tb8-c6',
      title: '33–40. Nested Parallel Structures, The Nesting Test, Exercises, and Takeaway',
      fullText: `### The Nesting Test for Multi-Level Parallelism:
1. Solve the outer structure first (*expand, improve, support*).
2. Solve the inner structure second (*conduct, publish, mentor*).
3. Verify that the two levels do not mix!

### Block 8 Takeaway:
The most powerful technique is **core reduction**:
> **Remove modifiers → identify subject → identify conjunction → identify coordinated units → check forms → restore modifiers.**`
    }
  ]
};

export const THEORY_BLOCK_9: WritingTheoryBlock = {
  blockNumber: 9,
  title: 'Elite Parallelism: Structural Ambiguity, Logical Comparisons, and Editing Strategy',
  description: 'Grammatical vs. Logical Parallelism, The Comparable-Entity Test, Compressed Comparisons, Inversions ("Not Only..."), False Correlatives, "Object To", and Diagnostic Layering (Concepts 1–42)',
  concepts: [
    {
      id: 'tb9-c1',
      title: '1–6. Grammatical vs. Logical Parallelism & The Comparable-Entity Test',
      fullText: `A sentence may contain grammatically matching structures while still comparing the wrong things.

### Example:
> *The new university offers more research opportunities than experienced professors.*
* Grammar looks smooth, but comparison is: *research opportunities* ↔ *professors* (Defective!).
* **Correction**: **The new university offers more research opportunities than the previous university does.**

### The Comparable-Entity Test:
Whenever you see *more than, less than, as...as, unlike, compared with, rather than*, ask:
1. What is being compared?
2. Are those things logically comparable?`
    },
    {
      id: 'tb9-c2',
      title: '7–13. Compressed Comparisons, Ellipsis, Modals, and Auxiliaries',
      fullText: `### Valid Compressed Comparisons & Ellipsis:
* *The revised method is more reliable than the researchers originally expected.* (Expectation comparison)
* *The researchers collected more data than the assistants did.* (*did* = collected data)
* *The new system processes applications faster than the old system does.* (*does* = processes applications)
* *The new system can process applications faster than the old system can.*
* Do NOT "fix" valid ellipsis!`
    },
    {
      id: 'tb9-c3',
      title: '14–20. "So...That", "Such...That", "The More...The More", and Negative Inversion',
      fullText: `### Specialized Comparative & Inverted Constructions:
* **So...That**: *so effective that the researchers adopted it*
* **Such...That**: *such a reliable method that other laboratories adopted it*
* **The More...The More**: *The more carefully researchers analyze the data, the more reliable their conclusions become.*
* **Inversion after Negative Openings**: *Not only did the study identify the problem, but it also revealed a possible solution.* (Initial *not only* triggers auxiliary inversion *did the study identify*; do NOT revert to normal word order!)`
    },
    {
      id: 'tb9-c4',
      title: '21–27. Correlative Matching, False Correlatives, and "As Well As"',
      fullText: `### Correlative Conjunction Matching:
Fixed pairs: *both...and, either...or, neither...nor, not only...but also, whether...or*.

### False Correlative Traps:
* **Weak**: *The program is both affordable as well as accessible.* → WRONG!
* **Correct**: **The program is both affordable and accessible.**
* Do NOT mix *both* with *as well as*!`
    },
    {
      id: 'tb9-c5',
      title: '28–38. "Rather Than", Prepositional "To" vs Infinitive "To", and Prepositional Government',
      fullText: `### Prepositional "To" vs Infinitive "To":
* **Infinitive "To"**: *decided to change* → *to + base verb*
* **Prepositional "To"**:
  * *objected to changing the methodology* (*to* is a preposition → requires gerund *-ing*!)
  * *look forward to receiving their results* (*to* is a preposition → requires gerund *-ing*!)
  * *The researchers objected to changing the method and repeating the experiment.* (Both gerunds governed by preposition *to*)`
    },
    {
      id: 'tb9-c6',
      title: '39–42. Block 9 Exercises and Takeaway',
      fullText: `### Block 9 Takeaway:
Elite parallelism questions require you to distinguish:
* **grammatical matching** from **logical matching**
* **surface similarity** from **actual syntactic structure**

### The Order of Diagnostic Checks:
> **Identify pair → identify grammatical level → identify hidden ellipsis → check prepositions → check comparison → check logical equivalence.**`
    }
  ]
};

export const THEORY_BLOCK_10: WritingTheoryBlock = {
  blockNumber: 10,
  title: 'Cumulative Mastery: Parallelism, Comparisons, and Elite Editing',
  description: 'The Complete 9-Step Parallelism Framework, Master Examples, The Five Most Common Elite Traps, The 10-Second Method, Cumulative Checklist, and Final Takeaway (Concepts 1–21)',
  concepts: [
    {
      id: 'tb10-c1',
      title: '1. The Complete 9-Step Parallelism Framework',
      fullText: `When you encounter a possible parallelism question, execute this exact sequence:

* **STEP 1 — Find the connector**: *and, or, but, nor, both...and, either...or, neither...nor, not only...but also, whether...or, rather than, than, as, unlike, compared with*.
* **STEP 2 — Identify what is connected**: Do not assume the nearest words are the connected elements.
* **STEP 3 — Reduce the sentence**: Temporarily remove introductory phrases, parentheticals, relative clauses, prepositional phrases, and adverbs.
* **STEP 4 — Identify the grammatical level**: Determine if connected elements are nouns, verbs, gerunds, infinitives, prepositional phrases, or clauses.
* **STEP 5 — Check structural compatibility**: Ensure equivalent forms match.
* **STEP 6 — Check agreement**: Find the true subject; ensure correct singular/plural verb agreement.
* **STEP 7 — Check comparison logic**: Verify that compared items belong to the same logical category.
* **STEP 8 — Check reference**: Verify pronouns (*that, those, one, do, does, did*).
* **STEP 9 — Check meaning**: Verify that the final sentence expresses the intended relationship.`
    },
    {
      id: 'tb10-c2',
      title: '2–8. Master Examples Across All Parallel Structures',
      fullText: `### 1. Outer vs. Inner Parallelism:
> *The university's new program not only expands access to underserved students but also provides them with opportunities to conduct research, collaborate with faculty, and publish their findings.*
* Outer: *expands ... provides* (Present verbs)
* Inner: *conduct ... collaborate ... publish* (Base infinitives)

### 2. Demonstrative Reference in Comparisons:
> *The university's engineering facilities are more advanced than those of comparable institutions.*
* *those* = *facilities* (Plural demonstrative pronoun)

### 3. Prepositional vs Infinitive "To":
* Infinitive: *chose to revise ... rather than abandon*
* Preposition: *objected to changing ... and repeating*`
    },
    {
      id: 'tb10-c3',
      title: '9–15. Master Examples: Modifiers, Agreement, Ellipsis, and Inversion',
      fullText: `### Master Examples Summary:
* **Modifier Comparison**: *Unlike the previous program, the new initiative provides students with greater access...* (*new initiative* ↔ *previous program*)
* **Correlative Agreement**: *Either the researchers or the committee is responsible...* (Nearer subject *committee* controls *is*)
* **Additive Agreement**: *The director, as well as several researchers, was responsible...* (Main subject *director* controls *was*)
* **Auxiliary Ellipsis**: *The new system processes applications faster than the old system does.* (*does* = processes applications)
* **Comparative Pair**: *The more carefully researchers analyze the evidence, the more reliable their conclusions become.*
* **Auxiliary Inversion**: *Not only did the researchers revise the method, but they also repeated the experiment.*`
    },
    {
      id: 'tb10-c4',
      title: '16. The Five Most Common Elite Traps',
      fullText: `### 1. Matching the Wrong Elements:
Comparing nearby words instead of actual coordinated structures. **Fix**: Trace the conjunction.

### 2. Letting Modifiers Distract You:
Long phrases disguise a correct parallel series. **Fix**: Reduce to the skeleton.

### 3. Confusing Grammatical and Logical Comparison:
Sentence sounds smooth while comparing unrelated entities. **Fix**: Ask *X compared with what?*

### 4. Confusing Prepositional "To" with Infinitive "To":
Mistaking *objected to / look forward to* for infinitives. **Fix**: Use gerunds after prepositions!

### 5. Forcing Symmetry when Meaning Requires Asymmetry:
Changing verb tenses when actions occurred at different times. **Fix**: Test grammatical function and chronology, not visual symmetry!`
    },
    {
      id: 'tb10-c5',
      title: '17–19. The 10-Second Method & Final Chapter Diagnostic Template',
      fullText: `### The 10-Second Method Under Time Pressure:
1. **Circle** the connector (*and, or, but, than, rather than, both, either, neither, not only*).
2. **Draw** an invisible line around each connected unit.
3. **Reduce** them to their cores.
4. **Compare** grammatical forms.
5. **Check** logical meaning.

### Final Diagnostic Template:
> *"The connector is [X]. It joins [A] and [B]. Both are [Y] structures. The main subject is [Z], so the correct agreement form is [W]. The comparison is between [P] and [Q], which is logically valid."*`
    },
    {
      id: 'tb10-c6',
      title: '20–21. Chapter 4 Master Checklist & Final Takeaway',
      fullText: `### Chapter 4 Master Checklist:
* [x] Identified the actual connector and connected elements.
* [x] Removed distracting modifiers to find grammatical skeleton.
* [x] Checked structural forms and subject-verb agreement.
* [x] Distinguished infinitive *to* from prepositional *to*.
* [x] Checked demonstrative pronouns (*that / those*).
* [x] Verified comparison logic and final sentence meaning.

### Chapter 4 Final Takeaway:
> **Do not judge a sentence by how similar its words look. Judge it by the grammatical relationship between the structures being connected.**

**CONNECTOR → STRUCTURE → CORE → AGREEMENT → COMPARISON → REFERENCE → LOGIC → MEANING**`
    }
  ]
};
