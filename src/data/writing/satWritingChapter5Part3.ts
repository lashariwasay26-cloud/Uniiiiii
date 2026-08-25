import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_11: WritingTheoryBlock = {
  blockNumber: 11,
  title: 'Sentence Variety, Emphasis, and Strategic Revision',
  description: 'Core Concept → Sentence Types → Controlling Focus → Active vs. Passive → Transitions',
  concepts: [
    {
      id: 'ch5-b11-c1',
      title: '1. CORE CONCEPT: SENTENCE STRUCTURE CONTROLS EMPHASIS',
      fullText: `Two sentences can communicate nearly identical information but emphasize different ideas because of their structure:
- *The researchers repeated the experiment because the initial results were inconsistent.*
- *Because the initial results were inconsistent, the researchers repeated the experiment.* (Places greater emphasis on the reason)`
    },
    {
      id: 'ch5-b11-c2',
      title: '2. SENTENCE TYPES & RHYTHM',
      fullText: `- **Simple**: One independent clause (*The researchers repeated the experiment.*)
- **Compound**: Two or more independent clauses (*The researchers repeated the experiment, and they analyzed the new results.*)
- **Complex**: One independent clause + at least one dependent clause (*Because the results were inconsistent, they repeated the experiment.*)
- **Compound-Complex**: Multiple independent + dependent clauses.

Avoid choppy writing (too many short simple sentences) and overloaded writing (excessive clause stacking).`
    },
    {
      id: 'ch5-b11-c3',
      title: '3. INFORMATION HIERARCHY & ACTIVE VS PASSIVE',
      fullText: `Place the main claim in the independent clause. Subordinate secondary background information.

### Active vs Passive Emphasis
- *The researchers analyzed the data.* (Focuses on researchers)
- *The data were analyzed by the researchers.* (Focuses on data)

Passive voice is useful when the action or object matters more than the actor, or when the actor is unknown/unimportant.`
    },
    {
      id: 'ch5-b11-c4',
      title: '4. TRANSITIONS SHOULD EXPRESS LOGIC',
      fullText: `Transitions must match the logical category:
- **Addition**: *moreover, furthermore, additionally*
- **Contrast**: *however, nevertheless, nonethless*
- **Cause/Result**: *therefore, consequently, thus, so*
- **Example**: *for example, for instance*
- **Sequence**: *subsequently, meanwhile, afterward*

A transition cannot create a logical relationship that evidence does not support.`
    },
    {
      id: 'ch5-b11-c5',
      title: '5. BLOCK 11 TECHNIQUE: THE EMPHASIS TEST',
      fullText: `1. Identify the main claim.
2. Identify supporting/background information.
3. Place main claim in the independent clause.
4. Subordinate background information.
5. Check whether modifier placement emphasizes the intended word.`
    }
  ]
};

export const THEORY_BLOCK_12: WritingTheoryBlock = {
  blockNumber: 12,
  title: 'Agreement, Reference, and Pronoun Precision',
  description: 'Core Concept → Pronoun-Antecedent Relationship → Collective & Indefinite Pronouns → Case & Who/Whom',
  concepts: [
    {
      id: 'ch5-b12-c1',
      title: '1. CORE CONCEPT: PRONOUNS MUST HAVE CLEAR REFERENCES',
      fullText: `A pronoun (*it, they, them, this, that, which, who*) must clearly refer to a specific, unambiguous noun antecedent.

Unclear:
> *The university discussed the scholarship policy with the foundation after it received new funding.* (What received funding?)

Clear:
> *The university discussed the scholarship policy with the foundation after the university received new funding.*`
    },
    {
      id: 'ch5-b12-c2',
      title: '2. SINGULAR/PLURAL AGREEMENT & COLLECTIVE NOUNS',
      fullText: `Pronouns must agree in number with their antecedents:
- *team, committee, university, organization* are treated as singular collective nouns in American English (*The committee released its decision.*).
- *Each of the universities submitted its report.* (*Each* is singular).
- *Every applicant must submit his or her transcript.* (*Every* is singular).`
    },
    {
      id: 'ch5-b12-c3',
      title: '3. PRONOUN CASE (SUBJECT VS OBJECT)',
      fullText: `- **Subject pronouns**: *I, he, she, we, they, who* (*Ali and I submitted...*)
- **Object pronouns**: *me, him, her, us, them, whom* (*The counselor advised Sarah and me.*)

### The Removal Test
Remove the compound noun to check case:
> *The counselor advised [Sarah and] me.* → "advised me" = Correct!`
    },
    {
      id: 'ch5-b12-c4',
      title: '4. WHO VS WHOM & THAT VS WHICH',
      fullText: `### Who vs. Whom
Replace mentally with *he/him*:
- *he* → *who* (*Who submitted the application?* → *He submitted it.*)
- *him* → *whom* (*Whom did the committee select?* → *The committee selected him.*)

### Relative Pronoun Reference
- *who*: refers to people.
- *which*: refers to things/animals (nonrestrictive clauses with commas).
- *that*: refers to things/people (restrictive clauses without commas).`
    },
    {
      id: 'ch5-b12-c5',
      title: '5. BLOCK 12 TECHNIQUE: THE PRONOUN REPLACEMENT TEST',
      fullText: `1. Replace the pronoun with the noun you think it refers to.
2. Read the sentence.
3. Check if two nouns fit equally well — if so, revise to name the specific noun.
4. Verify singular/plural agreement and grammatical case.`
    }
  ]
};

export const THEORY_BLOCK_13: WritingTheoryBlock = {
  blockNumber: 13,
  title: 'Integrated Editing: Finding the Highest-Impact Error',
  description: 'Core Concept → Grammar vs. Style → Error Priority Hierarchy → Four-Pass Editing System',
  concepts: [
    {
      id: 'ch5-b13-c1',
      title: '1. CORE CONCEPT: REAL SENTENCES CONTAIN MULTIPLE LAYERS',
      fullText: `In a difficult editing question, several things may look wrong at once. The challenge is to identify the **actual error** rather than fixing something that is merely stylistically optional.`
    },
    {
      id: 'ch5-b13-c2',
      title: '2. ERROR PRIORITY HIERARCHY',
      fullText: `When several revisions are possible, prioritize:
- **Level 1 — Meaning-Changing Errors**: ambiguous reference, illogical comparison, incorrect logical connector.
- **Level 2 — Structural Errors**: fragments, run-ons, comma splices, agreement errors, dangling modifiers.
- **Level 3 — Precision Errors**: incorrect diction, excessive certainty, unclear modifier scope.
- **Level 4 — Efficiency**: redundancy, wordiness, unnecessary repetition.`
    },
    {
      id: 'ch5-b13-c3',
      title: '3. THE "IS IT ACTUALLY WRONG?" TEST',
      fullText: `Before changing a sentence, ask: *Can I identify a concrete grammatical, logical, or semantic problem?*
If the answer is no, the sentence may simply reflect a different valid stylistic choice.`
    },
    {
      id: 'ch5-b13-c4',
      title: '4. THE FOUR-PASS EDITING SYSTEM',
      fullText: `- **Pass 1 — Structure**: clauses, fragments, run-ons, boundaries, punctuation.
- **Pass 2 — Agreement**: subject/verb, pronoun/antecedent, singular/plural, case.
- **Pass 3 — Logic**: comparisons, modifiers, cause/effect, reference, certainty.
- **Pass 4 — Efficiency**: redundancy, wordiness, weak diction.

*Rule:* Do not begin with Pass 4!`
    },
    {
      id: 'ch5-b13-c5',
      title: '5. THE MINIMUM-CHANGE PRINCIPLE',
      fullText: `When a sentence contains one error, prefer the smallest revision that fixes it. Do not rewrite an entire sentence simply because you prefer another style.`
    }
  ]
};

export const THEORY_BLOCK_14: WritingTheoryBlock = {
  blockNumber: 14,
  title: 'Advanced Revision, Rhetorical Precision, and Meaning Control',
  description: 'Core Concept → Precision of Claim → Correlation vs. Causation → Given to New Information',
  concepts: [
    {
      id: 'ch5-b14-c1',
      title: '1. CORE CONCEPT: CORRECT GRAMMAR IS NOT THE FINAL LEVEL',
      fullText: `At an advanced level, a sentence can be grammatically correct and still be weak because it obscures the main idea, overstates evidence, buries important information, or forces the reader to reconstruct intended relationships.

Advanced editing asks:
1. *Is the sentence grammatically correct?*
2. *Does the sentence communicate exactly what the writer intends?*`
    },
    {
      id: 'ch5-b14-c2',
      title: '2. PRECISION OF CLAIM & MATCHING CERTAINTY',
      fullText: `Vocabulary must correspond to the strength of evidence:
- **Very Strong**: *demonstrates, establishes, confirms*
- **Moderate**: *indicates, supports, suggests*
- **Tentative**: *may indicate, may suggest, could reflect*`
    },
    {
      id: 'ch5-b14-c3',
      title: '3. CORRELATION VS CAUSATION',
      fullText: `Temporal sequence alone (*after*) or statistical association (*coincided with*) does NOT prove causation (*caused* / *because*).

Safer formulation:
> *Enrollment increased after the policy was introduced, suggesting that the policy may have contributed to the increase.*`
    },
    {
      id: 'ch5-b14-c4',
      title: '4. INFORMATION ORDER & GIVEN → NEW PRINCIPLE',
      fullText: `Readers process information more easily when familiar/known information comes before new information.

Example:
> *The university's scholarship program has expanded rapidly. The expansion has attracted more international applicants.* (*The expansion* connects directly to previous information.)`
    },
    {
      id: 'ch5-b14-c5',
      title: '5. BLOCK 14 TECHNIQUE: FIVE-CONTROL CHECK',
      fullText: `Before finalizing an advanced sentence, check:
1. **Accuracy**: Is the claim true as stated?
2. **Logic**: Are relationships supported by evidence?
3. **Reference**: Can every pronoun and modifier be traced clearly?
4. **Emphasis**: Is the main idea structurally prominent?
5. **Economy**: Is unnecessary language removed without losing meaning?`
    }
  ]
};

export const THEORY_BLOCK_15: WritingTheoryBlock = {
  blockNumber: 15,
  title: 'Mastery Review and Integrated Final Practice',
  description: 'Master Concept Review → 5 Master Layers → Master Editing Order → Final Chapter Master Framework',
  concepts: [
    {
      id: 'ch5-b15-c1',
      title: '1. CHAPTER 5 MASTER CONCEPT',
      fullText: `Advanced sentence editing requires controlling five layers simultaneously:
1. **Structure**
2. **Agreement**
3. **Logic**
4. **Precision**
5. **Efficiency**

A sentence can succeed at four levels and fail at one (*e.g., grammatical correctness with ambiguous reference*).`
    },
    {
      id: 'ch5-b15-c2',
      title: '2. THE MASTER EDITING ORDER',
      fullText: `Use this order under time pressure:
1. **Meaning**
2. **Structure**
3. **Agreement**
4. **Logic**
5. **Reference**
6. **Modifier placement**
7. **Parallelism**
8. **Punctuation**
9. **Diction**
10. **Concision**`
    },
    {
      id: 'ch5-b15-c3',
      title: '3. THE FIVE-SECOND DIAGNOSTIC',
      fullText: `Ask:
1. *Who is doing the action?*
2. *What is the main verb?*
3. *Where are the independent clauses?*
4. *What does each pronoun refer to?*
5. *What exactly is being compared?*`
    },
    {
      id: 'ch5-b15-c4',
      title: '4. MASTER CHECKS FOR COMPARISONS, MODIFIERS & PRONOUNS',
      fullText: `- **Comparisons**: *A compared with B*. Match categories.
- **Modifiers**: *What word does this actually modify?*
- **Pronouns**: *Can only one noun reasonably be the antecedent?*
- **Parallelism**: *Are coordinated elements grammatically equivalent?*
- **Punctuation**: Match punctuation to clause structure.`
    },
    {
      id: 'ch5-b15-c5',
      title: '5. FINAL CHAPTER 5 TAKEAWAY & COMPLETION STATUS',
      fullText: `Advanced writing correction is about developing a reliable diagnostic process:
> **Structure → Agreement → Reference → Logic → Precision → Parallelism → Punctuation → Efficiency**

### Chapter 5 Completion Status
- **Blocks:** 15/15 ✅
- **Exercise bank:** Questions **1–152** across complete chapter sequence.
- **Difficulty target:** Predominantly medium, hard, and elite.

*Ultimate Objective:* Clear meaning + correct structure + precise logic + efficient expression.`
    }
  ]
};
