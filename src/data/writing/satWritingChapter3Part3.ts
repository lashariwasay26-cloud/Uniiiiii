import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_9: WritingTheoryBlock = {
  blockNumber: 9,
  title: 'Pronouns, Reference, Case, and Agreement',
  description: 'Complete Pronoun Diagnostic Framework, Antecedents, Case, Person Shifts, Indefinite Pronoun Agreement, Relative Pronouns, and Ambiguous References',
  concepts: [
    {
      id: 'tb9-c1',
      title: '396–398. What Is a Pronoun & Antecedent Agreement',
      fullText: `A **pronoun** stands in for a noun or noun phrase. The noun it refers to is its **antecedent**.

* **Singular antecedent** → Singular pronoun (*The researcher submitted her application*)
* **Plural antecedent** → Plural pronoun (*The researchers submitted their findings*)`
    },
    {
      id: 'tb9-c2',
      title: '399–403. Pronoun Agreement with "Each", "Every", and "One"',
      fullText: `Antecedents introduced by *each*, *every*, or *one* are grammatically **singular**.

### Examples:
> **Each of the students** submitted **his or her** application.
> **Every applicant** must bring **his or her** identification.
> **One** should carefully review **one's** application. *(Maintain "one" → "one's")*`
    },
    {
      id: 'tb9-c3',
      title: '404–405. Person Consistency & Unnecessary Person Shifts',
      fullText: `A sentence must maintain consistent grammatical person (*first person: I/we; second person: you; third person: he/she/it/they/students*).

### Problematic Person Shift:
> *When a student applies to university, you should check the deadline.* → WRONG!
> Correct: **When a student applies to university, the student should check the deadline.**`
    },
    {
      id: 'tb9-c4',
      title: '406–412. Pronoun Case in Compound Subjects/Objects & After Prepositions',
      fullText: `* **Subjective Forms**: *I, he, she, we, they, who*
* **Objective Forms**: *me, him, her, us, them, whom*

### Compound Test:
Remove the second person in a compound to test the remaining pronoun!
> *The professor advised Sarah and* **me**. *(Test: The professor advised me.)*
> *Sarah and* **I** *completed the project.* *(Test: I completed the project.)*`
    },
    {
      id: 'tb9-c5',
      title: '413–417. Possessives vs. Contractions ("Its/It\'s", "Their/They\'re", "Your/You\'re")',
      fullText: `* **Its** (Possessive) vs **It's** (It is)
* **Their** (Possessive) vs **They're** (They are) vs **There** (Location/Placeholder)
* **Your** (Possessive) vs **You're** (You are)

Possessive pronouns NEVER use apostrophes!`
    },
    {
      id: 'tb9-c6',
      title: '418–422. "Who" vs. "Whom", "Whose" vs. "Who\'s"',
      fullText: `* **Who**: Subject (*Who submitted the application?* → *He submitted it*)
* **Whom**: Object (*Whom did the professor contact?* → *The professor contacted him*)
* **Whose**: Possessive (*The researcher whose study...*)
* **Who\'s**: Contraction (*Who\'s responsible?* = *Who is responsible?*)`
    },
    {
      id: 'tb9-c7',
      title: '428–434. Repairing Ambiguous & Distant Antecedents',
      fullText: `Every pronoun MUST have a clear, immediate antecedent.

### Ambiguous:
> *The researchers discussed the results with the technicians, and they were concerned.*
> Clear Revision: **The researchers were concerned after discussing the results with the technicians.**`
    },
    {
      id: 'tb9-c8',
      title: '457–461. The Master Pronoun Rules & Section 9 Checkpoint',
      fullText: `For every pronoun on the SAT:
1. **Clear Antecedent Rule**: Find the exact noun the pronoun replaces.
2. **Number Rule**: Match singular antecedent to singular pronoun, plural to plural.
3. **Case Rule**: Identify subject vs. object vs. possessive role.
4. **Reference Rule**: Ensure the pronoun cannot refer to multiple nouns.`
    }
  ]
};

export const THEORY_BLOCK_10: WritingTheoryBlock = {
  blockNumber: 10,
  title: 'Subject–Verb Agreement & Special Agreement Structures',
  description: 'Advanced Diagnostics for Subject-Verb Agreement, Intervening Phrases, Additive/Disjunctive Rules, Quantity Expressions, and Special Noun Forms (Concepts 462–510)',
  concepts: [
    {
      id: 'tb10-c1',
      title: '462–470. Advanced Subject Identification & Removing Intervening Modifier Phrases',
      fullText: `The single most common SAT subject-verb trap involves placing long prepositional phrases, participial phrases, or appositives between the subject and the verb.

### The Stripping Rule:
Cross out all prepositional phrases (*of..., in..., on..., with...*) and relative clauses (*who..., which..., that...*) to isolate the true head noun.

> **The box** ~~of old photographs and historical records~~ **was** stored in the attic.
> *(Subject: "box" [singular] → Verb: "was" [singular])*`
    },
    {
      id: 'tb10-c2',
      title: '471–480. Additive Phrases vs. Compound Subjects & Disjunctive Proximity',
      fullText: `* **Additive Phrases** (*along with, together with, as well as, in addition to, accompanied by*) DO NOT form compound subjects. The subject remains singular if the main head noun is singular.
> **The professor**, *as well as her students*, **is** attending the seminar.

* **Compound Subjects** joined by *and* take a **plural verb**.
> **The professor and her students are** attending the seminar.

* **Disjunctive Subjects** (*either...or, neither...nor, not only...but also*): The verb agrees with the **nearer subject** (The Rule of Proximity).
> Neither the professor nor the **students were** prepared.
> Neither the students nor the **professor was** prepared.`
    },
    {
      id: 'tb10-c3',
      title: '481–490. Quantity Expressions, Indefinite Pronouns, and "One of the... who"',
      fullText: `* **Fractional/Percent Expressions** (*half of, most of, 50% of, all of, some of*): The verb agrees with the noun **following** the preposition *of*.
> Half of the **funding was** allocated. *(funding = noncount → singular)*
> Half of the **students were** present. *(students = plural count → plural)*

* **Indefinite Pronouns**: *Each, every, everyone, someone, nobody, either, neither* are ALWAYS **singular**.
> **Each** of the candidates **has** submitted a résumé.

* **"One of the [plural noun] who [plural verb]" vs. "The only one of the [plural noun] who [singular verb]"**:
> She is **one of the researchers who have** published groundbreaking work. *(who refers to researchers)*
> She is **the only one of the researchers who has** received the grant. *(who refers to "the only one")*`
    },
    {
      id: 'tb10-c4',
      title: '491–500. Collective Nouns, Plural Forms with Singular Meanings, & Inverted Structures',
      fullText: `* **Collective Nouns** (*committee, team, jury, faculty, audience*): Function as **singular** when acting as a unified group.
> The **committee has** reached its decision.

* **Nouns Plural in Form but Singular in Meaning**: Academic subjects (*mathematics, physics, economics*), diseases (*measles*), and news (*news*) take **singular verbs**.
> **Physics is** a demanding discipline.

* **Inverted Sentences** (*There is/are, Here is/are, Down the hill ran...*): The true subject comes AFTER the verb.
> There **are** three primary **reasons** for the policy change.`
    },
    {
      id: 'tb10-c5',
      title: '501–510. Noncount Nouns, Gerund Subjects, & Agreement Master Checklist',
      fullText: `* **Noncount Nouns** (*information, equipment, advice, evidence, research, luggage*): Always take **singular verbs**.
> The **information** provided by the department **is** accurate.

* **Gerund Subjects**: A verb ending in *-ing* acting as a noun phrase subject takes a **singular verb**.
> **Analyzing complex datasets requires** patience.

* **Master Agreement Checklist**:
1. Strip all intervening prepositions and dependent clauses.
2. Find the head noun.
3. Determine countability and grammatical number.
4. Match singular subject to singular verb (*s*-ending in present tense) and plural subject to plural verb.`
    }
  ]
};

export const THEORY_BLOCK_11: WritingTheoryBlock = {
  blockNumber: 11,
  title: 'Modifiers, Modifier Placement, and Logical Sentence Construction',
  description: 'Adjectives vs. Adverbs, Misplaced Modifiers, Limiter Placement, Dangling Participial Phrases, Restrictive/Nonrestrictive Relative Clauses (Concepts 511–551)',
  concepts: [
    {
      id: 'tb11-c1',
      title: '511–520. Adjectives vs. Adverbs & Comparative Forms',
      fullText: `* **Adjectives** modify nouns or pronouns (*a quick decision*).
* **Adverbs** modify verbs, adjectives, or other adverbs (*analyzed quickly*, *remarkably clear*).

### Common SAT Adjective/Adverb Traps:
> *The system operates efficient.* → WRONG! (*efficiently* modifies verb *operates*)
> *The team performed good.* → WRONG! (*well* modifies verb *performed*)`
    },
    {
      id: 'tb11-c2',
      title: '521–530. Misplaced Modifiers & Precise Limiter Placement',
      fullText: `A modifier must be placed **as close as possible** to the specific word it describes.

### Limiter Placement (*only, almost, nearly, just, even*):
> *The researcher almost analyzed fifty samples.* → WRONG! (Implies she almost performed the analysis, but didn't.)
> Correct: **The researcher analyzed almost fifty samples.** (Modifies the number *fifty*.)`
    },
    {
      id: 'tb11-c3',
      title: '531–540. Dangling Modifiers & Introductory Participial Phrases',
      fullText: `When a sentence begins with an introductory modifying phrase (especially a participial phrase starting with an *-ing* verb or past participle), the **noun immediately following the comma MUST be the logical actor performing that action**.

### Dangling Modifier Example:
> *After completing the lab experiment, the report was drafted by the team.* → WRONG! (The report did not complete the experiment!)
> Correct: **After completing the lab experiment, the team drafted the report.**`
    },
    {
      id: 'tb11-c4',
      title: '541–551. Restrictive vs. Nonrestrictive Modifiers & Relative Pronouns',
      fullText: `* **Restrictive Clauses** (*Essential info, NO commas, uses "that" or "who"*):
> Students **who score above 700** receive distinction. *(Only those specific students)*

* **Nonrestrictive Clauses** (*Extra/parenthetical info, ENCLOSED IN COMMAS, uses "which" or "who"*):
> The library, **which was built in 1920**, is undergoing renovations.

* **Relative Pronoun Choices**:
  * *Who / Whom*: For people only.
  * *Which*: For non-human things in nonessential clauses.
  * *That*: For non-human things or groups in essential clauses.`
    }
  ]
};

export const THEORY_BLOCK_12: WritingTheoryBlock = {
  blockNumber: 12,
  title: 'Parallelism, Comparisons, and Coordination',
  description: 'Parallel Structure in Series & Correlatives, Logical Comparisons ("That of / Those of"), Sentence Boundaries, and Clause Coordination (Concepts 552–594)',
  concepts: [
    {
      id: 'tb12-c1',
      title: '552–562. Parallel Structure in Lists and Compound Predicates',
      fullText: `Items in a list, series, or comparison must share the **exact same grammatical structure**.

* **Nouns**: *reading, writing, and arithmetic* (or *researchers, scientists, and technicians*)
* **Infinitives**: *to research, to analyze, and to publish* (or *to research, analyze, and publish*)
* **Gerunds**: *studying, reviewing, and practicing*

> *The course teaches students to research data, analyzing results, and write reports.* → WRONG!
> Correct: **The course teaches students to research data, analyze results, and write reports.**`
    },
    {
      id: 'tb12-c2',
      title: '563–573. Parallelism with Correlative Conjunction Pairs',
      fullText: `Correlative conjunctions work in fixed pairs and require strict parallel grammatical structures immediately following each half:

* **Not only** [Structure A] **but also** [Structure B]
* **Either** [Structure A] **or** [Structure B]
* **Neither** [Structure A] **nor** [Structure B]
* **Both** [Structure A] **and** [Structure B]

> *The professor not only gave a lecture but also assigned homework.* *(Verb phrase + Verb phrase)*`
    },
    {
      id: 'tb12-c3',
      title: '574–583. Logical Comparisons & Comparison Traps ("That of / Those of")',
      fullText: `You can only compare **things of the same logical category**. Comparing a person to a property or an institution to a salary is an illogical comparison.

### Illogical Comparison:
> *The salary of a doctor is higher than a teacher.* → WRONG! (Compares salary to a human teacher.)

### Correct Illogical Comparison Fixes:
1. **Singular**: *The salary of a doctor is higher than* **that of** *a teacher.*
2. **Plural**: *The facilities at School A are better than* **those at** *School B.*
3. **Possessive**: *The salary of a doctor is higher than a teacher's.*`
    },
    {
      id: 'tb12-c4',
      title: '584–594. Clause Coordination, Subordination, Comma Splices, & Run-Ons',
      fullText: `An **independent clause** contains a subject and verb and expresses a complete thought. Joining two independent clauses requires specific valid punctuation boundary patterns:

### The 4 Valid Boundary Patterns:
1. **Period**: *Clause 1. Clause 2.*
2. **Semicolon**: *Clause 1; Clause 2.*
3. **Comma + FANBOYS**: *Clause 1, and Clause 2.* (*For, And, Nor, But, Or, Yet, So*)
4. **Semicolon + Conjunctive Adverb + Comma**: *Clause 1; however, Clause 2.*

### Fatal Boundary Errors:
* **Comma Splice**: *Clause 1, Clause 2.* → WRONG!
* **Run-on / Fused Sentence**: *Clause 1 Clause 2.* → WRONG!`
    }
  ]
};

export const THEORY_BLOCK_13: WritingTheoryBlock = {
  blockNumber: 13,
  title: 'Chapter Integration, Error Detection, and Final Practice',
  description: 'Comprehensive Integration, Master 10-Step Editing Sequence, High-Frequency SAT Trap Summary, Concision/Redundancy Rules, and Final Strategy (Concepts 595–624)',
  concepts: [
    {
      id: 'tb13-c1',
      title: '595–604. The Complete Master Grammar Check & Editing Sequence',
      fullText: `When evaluating complex grammar questions, execute this fixed 10-step sequence:

1. **Find the main subject.**
2. **Find the main verb.**
3. **Check subject-verb agreement.**
4. **Check pronoun agreement & clarity.**
5. **Check pronoun case.**
6. **Check modifier placement & logic.**
7. **Check parallel structure in lists & correlative pairs.**
8. **Check logical comparisons (comparing like with like).**
9. **Check coordination & punctuation boundaries.**
10. **Verify concision and logical sentence meaning.**`
    },
    {
      id: 'tb13-c2',
      title: '605–613. High-Frequency SAT Trap Summary',
      fullText: `### Top 7 SAT Grammar Traps to Watch For:
1. **Subject-Verb Trap**: Intervening prepositional phrases hiding the head noun.
2. **Pronoun Trap**: Singular indefinite pronouns (*each, everyone*) paired with plural verbs or pronouns.
3. **Case Trap**: Compound objects using "I" instead of "me" (*between you and I*).
4. **Modifier Trap**: Introductory participial phrases attaching to the wrong subject.
5. **Parallelism Trap**: Mixing gerunds, infinitives, and nouns in lists or comparisons.
6. **Comparison Trap**: Comparing a singular or plural property directly to a person or institution without *that of* / *those of*.
7. **Punctuation / Conjunction Trap**: Comma splices joining independent clauses without a coordinating conjunction or semicolon.`
    },
    {
      id: 'tb13-c3',
      title: '614–619. Consistency, Concision, Redundancy, and Precision',
      fullText: `* **Concision**: Choose the most concise option that preserves complete grammatical correctness and meaning (*Because the deadline was approaching* instead of *Due to the fact that the deadline was approaching*).
* **Redundancy**: Avoid repeating the same idea twice (*the final conclusion at the end* → *the conclusion*).
* **Precision**: Replace vague pronouns (*this, them*) with specific descriptive nouns when clarity requires it.`
    },
    {
      id: 'tb13-c4',
      title: '620–624. Chapter 3 Master Strategy & Complete Core Method',
      fullText: `### The Core Method:
> **Find the grammatical structure first before choosing the answer option.**

Never select an option merely because it "sounds right" in your head. Analyze:
> **Subject → Verb → Relationship → Modifier → Comparison → Coordination → Punctuation → Meaning**`
    }
  ]
};
