import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Modifier Logic and Placement',
  description: 'Understanding Modifier Relationships, Placement, Introductory Phrases, Dangling & Misplaced Modifiers, Adverbs, and Essential vs. Nonessential Clauses (Concepts 1–41)',
  concepts: [
    {
      id: 'tb1-c1',
      title: '1–4. What Is a Modifier & The Core Modifier Question',
      fullText: `A **modifier** is a word, phrase, or clause that gives additional information about another part of a sentence.

Modifiers can describe:
* nouns
* pronouns
* verbs
* adjectives
* adverbs
* entire clauses

### Example:
> The researcher **from the university** presented the findings.
The phrase *from the university* modifies *researcher*. It tells us which researcher.

### The Core Modifier Question:
Whenever you encounter a modifier, ask:
1. **What exactly is this modifier describing?**
2. **Is the modifier positioned close enough to that word to make the meaning clear?**

### The Core-Sentence Technique:
Strip away descriptive material temporarily to find the core subject and verb.
> *The students from rural areas who had completed the application early received scholarships.*
* **Core**: *The students received scholarships.*
* **Restored Modifiers**: *from rural areas* → *students*; *who had completed the application early* → *students*.`
    },
    {
      id: 'tb1-c2',
      title: '5–10. Modifier Placement, Dangling Modifiers, and the "Who Did It?" Technique',
      fullText: `A modifier should normally appear **close to the word it modifies**.

### Clear vs. Potentially Confusing:
* **Clear**: *The researcher analyzed the samples collected during the experiment.* (*collected during the experiment* modifies *samples*)
* **Confusing**: *The researcher collected during the experiment analyzed the samples.* (Suggests *researcher* was collected!)

### The Dangling Modifier:
A **dangling modifier** occurs when an introductory modifier has no logical word to modify in the sentence.

* **Incorrect**: *After reviewing the applications, the decision was announced.* (Who reviewed the applications? A decision cannot review applications!)
* **Correct**: **After reviewing the applications, the admissions officers announced the decision.**

### The "Who Did It?" Technique:
For introductory modifiers beginning with *-ing*, *by + -ing*, *while + -ing*, or *having + past participle*, ask:
> **Who performed the action in the modifier?**
Then look at the grammatical subject immediately following the comma. If they do not logically match, you have a dangling modifier!`
    },
    {
      id: 'tb1-c3',
      title: '11–17. Participial Phrases, Relative Clause Attachment, and the Nearest-Noun Trap',
      fullText: `### Participial Phrases:
* **Present Participial**: *Studying the data carefully, the researchers discovered an error.* (*researchers* studied the data)
* **Past Participial**: *Designed for international students, the scholarship provides financial assistance.* (*scholarship* was designed)
* **The Logical Actor Method**: Ensure the implied actor of the participial phrase is the exact grammatical subject of the main clause.

### Relative Clause Attachment & Nearest-Noun Trap:
> *The university introduced a program for students who need financial assistance.*
* The relative clause *who need financial assistance* modifies *students*, not *program*.
* Do NOT assume a modifier always modifies the nearest noun. Grammar and logical meaning determine the relationship!`
    },
    {
      id: 'tb1-c4',
      title: '18–20. Misplaced Adverbs: "Only", "Almost", and "Nearly"',
      fullText: `Adverbs can radically change meaning depending on where they are placed.

### Misplaced "Only":
* *Only students who meet the requirements may apply.* → No one except qualifying students may apply.
* *Students who only meet the requirements may apply.* → Students merely meet the requirements and do nothing beyond that.

### Misplaced "Almost" and "Nearly":
* *The university accepted almost every applicant.* → Nearly every applicant was accepted.
* *The university almost accepted every applicant.* → The university came close to accepting every applicant, but ultimately did not.`
    },
    {
      id: 'tb1-c5',
      title: '21–27. Essential vs. Nonessential Information & Who vs. Whom / Whose',
      fullText: `### Essential (Restrictive) vs. Nonessential (Nonrestrictive):
* **Essential** (NO COMMAS, identifies specific noun): *Students who meet the requirements may apply.*
* **Nonessential** (ENCLOSED IN COMMAS, adds extra info): *Maria, who submitted her application early, received priority.*
* **The Removal Test**: Temporarily remove the modifier. If the core identity changes or becomes vague, it is essential.

### Relative Pronoun Choices:
* **Who** (Subject): *The students who completed the exam received certificates.*
* **That** (Essential things): *The program that offers the scholarship begins in September.*
* **Who vs. Whom (Subject-Object Test)**:
  * *Who*: Perform action (*Who conducted the research?* → *They conducted it*)
  * *Whom*: Receive action (*Whom did the professor contact?* → *The professor contacted them*)
* **Whose vs. Who's**:
  * *Whose*: Possessive (*The researcher whose study was published...*)
  * *Who's*: Contraction for *Who is* or *Who has* (*Who's responsible?*)`
    },
    {
      id: 'tb1-c6',
      title: '28–41. Modifier Solving System, Worked Examples, and Block 1 Takeaway',
      fullText: `### SAT Modifier Solving System:
1. Circle the modifier.
2. Identify what it logically describes.
3. Strip away unnecessary phrases to find the core subject.
4. Check whether the subject can logically perform the action.
5. Check essential vs. nonessential punctuation.
6. Verify final sentence meaning.

### Block 1 Central Principle:
> **Identify the modifier, identify its logical target, and then verify its grammatical placement.**
> *Strip → identify core → map modifier → check logic → check punctuation → restore meaning.*`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Advanced Modifier Logic, Comparisons, and Comparison Traps',
  description: 'Logic of Comparisons, Like-With-Like Rule, "That Of" / "Those Of", Category Shifts, People vs. People, Actions vs. Actions, Superlatives, Quantity Expressions (Fewer vs. Less), and Comparison Traps (Concepts 42–92)',
  concepts: [
    {
      id: 'tb2-c1',
      title: '42–44. What a Comparison Does & The Like-With-Like Rule',
      fullText: `A **comparison** establishes a relationship between two elements using structures such as *more...than, less...than, fewer...than, as...as, similar to, different from, compared with, unlike*.

### The Like-With-Like Rule:
When comparing two things, the compared elements must be **grammatically and logically equivalent**.

* **Incorrect**: *The salary of an engineer is higher than a teacher.* (Compares salary to a human teacher!)
* **Correct**: **The salary of an engineer is higher than that of a teacher.** (Compares salary to salary)

### The "What Is Being Compared?" Technique:
Whenever you see *than, as...as, compared with*, ask:
1. What is the first item?
2. What is the second item?
3. Are they the same type of thing?`
    },
    {
      id: 'tb2-c2',
      title: '45–48. "That Of" vs. "Those Of" Reference',
      fullText: `Use **that of** for singular nouns and **those of** for plural nouns to avoid repetitive or faulty comparisons.

### Examples:
* **Singular**: *The acceptance rate of University A is higher than* **that of University B**. (*that* = acceptance rate)
* **Plural**: *The policies of University A differ from* **those of University B**. (*those* = policies)
* **Number Mismatch Trap**: *The facilities at University A are better than that at University B.* → WRONG! (*facilities* is plural, so *those* is required)`
    },
    {
      id: 'tb2-c3',
      title: '49–53. Category Shifts, Comparing People, Actions, and Implied Verbs',
      fullText: `### Category Shifts:
* **Incorrect**: *The research program is more advanced than the university.*
* **Correct**: **The research program is more advanced than the program at the other university.**

### Comparing People with People & Actions with Actions:
* **Comparing Possessives**: *Sarah's score is higher than John's.* (*John's* = John's score)
* **Comparing Activities**: *Studying abroad is more expensive than studying at a local university.* (Activity ↔ Activity)

### Comparison with Implied Verb / Clause:
> *The university received more applications than the college did.* (*did* = received applications)`
    },
    {
      id: 'tb2-c4',
      title: '54–62. Comparatives, Superlatives, Quantity Expressions ("Fewer" vs. "Less")',
      fullText: `### Comparatives vs. Superlatives:
* **Comparative (-er / more)**: Compares 2 items (*University A is more selective than University B*). Avoid double comparatives (*more higher* → WRONG!).
* **Superlative (-est / most)**: Compares 1 item against a group of 3 or more (*University A is the most selective of the three*).

### "As ... As" and "Not As ... As":
* *The new program is as demanding as the old program.*
* Do NOT substitute *than* in *as...as* constructions (*not as expensive than* → WRONG!).

### Quantity Expressions ("Fewer" vs. "Less" & "Number" vs. "Amount"):
* **Fewer / Number**: Used with countable plural nouns (*fewer applicants, number of students*).
* **Less / Amount**: Used with uncountable quantities (*less time, amount of money*).`
    },
    {
      id: 'tb2-c5',
      title: '63–77. Prepositional Comparisons ("Similar To", "Different From", "Unlike") & Elite Traps',
      fullText: `### Prepositional Standard Usage:
* **Similar to** (not *similar with*)
* **Different from** (not *different than* in formal context)
* **Compared with** (preserves comparison category)
* **Unlike**: *Unlike the previous scholarship, the new scholarship covers full tuition.* (Scholarship ↔ Scholarship)

### Elite Comparison Traps:
1. **Equipment Trap**: *The new laboratory's equipment is more advanced than the researchers.* → WRONG! (Correct: *...than the equipment used by the researchers.*)
2. **Possessive Trap**: *The students' performance was better than the instructors.* → WRONG! (Correct: *...than the instructors'.*)
3. **Action Trap**: *The researchers preferred analyzing the data to the original method.* → WRONG! (Correct: *...to using the original method.*)`
    },
    {
      id: 'tb2-c6',
      title: '78–92. Comparison Solving System, Worked Examples, and Block 2 Takeaway',
      fullText: `### Comparison Solving System:
1. Locate comparison marker (*than, as, compared with, unlike, similar to*).
2. Identify item A and item B.
3. Mentally expand omitted words.
4. Verify category match and singular/plural number (*that of* vs *those of*).
5. Ensure parallel structure and logical meaning.

### Block 2 Central Principle:
> **Compare like with like.**
> *Identify both sides → expand omitted words → match categories → check number → check parallel structure → verify meaning.*`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Parallelism: Matching Grammatical Structures',
  description: 'Principles of Parallelism, Matching Forms across Conjunctions, Lists, Nouns, Verbs, Gerunds, Infinitives, Correlative Conjunctions, and Advanced Structural Traps (Concepts 1–52)',
  concepts: [
    {
      id: 'tb3-c1',
      title: '1–3. The Core Idea of Parallelism & The "Match the Form" Technique',
      fullText: `**Parallelism** is the principle that items performing the same grammatical role in a sentence must be expressed in the same grammatical form.

Conjunctions that trigger parallelism:
* *and, or, but, nor, rather than, as well as, either...or, neither...nor, not only...but also*

### The "Match the Form" Technique:
1. What grammatical form does the first element use?
2. Does the second (or third) element use the exact same form?

* **Parallel**: *The program teaches students to research, analyze, and communicate.* (Base verbs)
* **Not Parallel**: *The program teaches students to research, analyzing, and communication.* (Mixed forms)`
    },
    {
      id: 'tb3-c2',
      title: '4–11. Parallel Forms: Nouns, Verbs, Gerunds, Infinitives, Adjectives, Adverbs, Phrases, Clauses',
      fullText: `### Examples of Parallel Grammatical Units:
* **Nouns**: *discipline, leadership, and teamwork*
* **Verbs**: *Students research the topic and present their findings.*
* **Gerunds (-ing)**: *involves reading, writing, and analyzing*
* **Infinitives (to + verb)**: *to study, to travel, and to conduct research* (or *to study, travel, and conduct*)
* **Adjectives**: *challenging, comprehensive, and practical*
* **Adverbs**: *carefully, efficiently, and independently*
* **Prepositional Phrases**: *through independent study or through guided practice*
* **Clauses**: *that the method was effective and that the results were reproducible*`
    },
    {
      id: 'tb3-c3',
      title: '12–17. Correlative Conjunctions & The "Mirror" Technique',
      fullText: `Correlative conjunctions come in fixed pairs and require identical grammatical structures immediately following each part:

* **Either A or B**
* **Neither A nor B**
* **Both A and B**
* **Not only A but also B**
* **Whether A or B**

### The "Mirror" Technique:
Imagine a mirror. Everything following the first half must structurally mirror what follows the second half!

* **Parallel**: *The program is not only demanding but also rewarding.* (Adjective + Adjective)
* **Parallel**: *Students can either study independently or work with a tutor.* (Verb phrase + Verb phrase)`
    },
    {
      id: 'tb3-c4',
      title: '18–26. Long Parallel Structures & The Core-Structure Technique',
      fullText: `The difficulty of parallelism questions increases when each element contains long modifiers or prepositional phrases.

### The Core-Structure Technique:
1. Find the conjunction.
2. Separate the connected elements.
3. Strip away descriptive modifiers.
4. Identify the grammatical form of each core.
5. Compare the cores!

> *The program encourages students to conduct independent research, to collaborate with faculty members, and to present their findings publicly.*
* **Skeleton**: *to conduct ... to collaborate ... to present* (All infinitive phrases = Parallel!)`
    },
    {
      id: 'tb3-c5',
      title: '27–40. Parallelism Traps, Tense Parallelism, and Dangling Parallel Structures',
      fullText: `### Tense Parallelism & Meaning:
* Parallel actions occurring in the same time frame require matching tense: *collected the data, analyzed the results, and published the findings*.
* Tense DOES NOT have to be identical if actions occur at different times: *The researchers collected the data and are analyzing it now.*

### Advanced Traps:
1. **Hidden Nonparallelism**: *expanding access, improving instruction, and student retention* → WRONG! (*student retention* is a noun phrase; change to *increasing student retention*).
2. **Modifier Masking**: *to analyze complex evidence, to write persuasive arguments, and communicating findings clearly* → WRONG! (Change to *to communicate*).
3. **Dangling Parallel Structures**: *By analyzing the results and reviewing the evidence, the conclusion became clearer.* → WRONG! (A conclusion cannot analyze or review!)`
    },
    {
      id: 'tb3-c6',
      title: '41–52. Parallelism Checklist, Worked Examples, and Block 3 Takeaway',
      fullText: `### Parallelism Master Checklist:
1. Find the conjunction / correlative pair.
2. Isolate connected elements and strip modifiers.
3. Compare core grammatical forms.
4. Check logical subject and agreement.
5. Verify meaning and clarity.

### Block 3 Central Principle:
> **Parallelism is making equivalent grammatical structures correspond to one another.**
> *Find conjunction → isolate elements → remove modifiers → identify grammatical form → compare → restore sentence.*`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Sentence-Level Parallelism, Comparisons, and Structural Balance',
  description: 'Parallelism Across Long Sentences, Skeleton Method, Prepositional Ranges, Correlative Agreement Rules, Substitute Verbs ("Do/Does/Did"), and Structural Balance (Concepts 1–42)',
  concepts: [
    {
      id: 'tb4-c1',
      title: '1–5. Parallelism Across Long Sentences & The Skeleton Method',
      fullText: `Block 4 moves from simple lists into **nested and sentence-level structures** where grammatical relationships are separated by multiple words or clauses.

### The Skeleton Method for Long Sentences:
1. Find the main verb.
2. Find the conjunctions.
3. Identify everything connected by those conjunctions.
4. Reduce each element to its grammatical skeleton.
5. Compare the skeletons.

### Prepositional Ranges & Paired Structures:
* **Prepositional Series**: *support for tuition, for housing, and for travel* (or *for tuition, housing, and travel*).
* **From...To Range**: *serves students from rural communities to major cities*.
* **Between...And**: *difference between the two programs and their admission requirements*.`
    },
    {
      id: 'tb4-c2',
      title: '6–11. Correlative Conjunctions & Subject-Verb Agreement Rules',
      fullText: `When *either...or* or *neither...nor* connects two subjects, subject-verb agreement follows the **Rule of Proximity** (the verb agrees with the subject closest to it).

### Examples:
* *Either the students or the counselor* **is** *responsible.* (*counselor* is singular → *is*)
* *Either the counselor or the students* **are** *responsible.* (*students* is plural → *are*)
* *Neither the teachers nor the student* **was** *available.* (*student* is singular → *was*)

### Do NOT let the first subject control the verb!
Always identify the subject nearest the verb when using disjunctive correlative conjunctions.`
    },
    {
      id: 'tb4-c3',
      title: '12–14. "As Well As" & Additive Phrases vs. Compound Subjects',
      fullText: `Unlike *and*, additive phrases such as **as well as, along with, together with, in addition to, accompanied by** DO NOT create compound subjects!

### Examples:
* *The researcher, as well as the assistants,* **was** *present.* (Main subject: *researcher* [singular] → *was*)
* *The professor, along with several researchers,* **was** *invited.* (Main subject: *professor* [singular] → *was*)

### Common Trap:
Do NOT add the nouns inside additive phrases to the main subject. Mentally strip them out!`
    },
    {
      id: 'tb4-c4',
      title: '15–24. Parallelism with "Rather Than" & Comparative Clause Substitutes ("Do / Does / Did")',
      fullText: `### "Rather Than" Parallel Patterns:
* **Base Verbs**: *decided to revise the method rather than abandon the study.*
* **Nouns**: *chose efficiency rather than complexity.*
* **Gerunds**: *preferred analyzing the results rather than repeating the experiment.*

### Comparative Clauses & Substitute Verbs (*Do / Does / Did*):
Forms of *do* replace repeated verb phrases in comparative clauses to make them concise and structurally complete.

* *The new program attracted more students than the previous program did.* (*did* = attracted students)
* *The new system processes applications more efficiently than the old system does.* (*does* = processes applications)`
    },
    {
      id: 'tb4-c5',
      title: '25–30. Structural Balance: Grammatical, Logical, and Semantic Alignment',
      fullText: `Parallelism does NOT mean visual symmetry or identical word count. It requires **structural equivalence**.

### The Three Forms of Structural Balance:
1. **Grammatical Balance**: Equivalent syntactic structures match.
2. **Logical Balance**: Comparable ideas are actually comparable.
3. **Semantic Balance**: The sentence conveys exactly what the writer intends.

When all three align, the sentence is clear, powerful, and correct.`
    },
    {
      id: 'tb4-c6',
      title: '31–42. Advanced Worked Examples, Practice, and Block 4 Takeaway',
      fullText: `### Advanced Analysis Sequence:
1. Identify paired structure.
2. Strip modifiers and locate grammatical skeleton.
3. Check logical subject and verb agreement.
4. Check comparison logic and substitute verbs.
5. Restore modifiers and verify meaning.

### Block 4 Central Principle:
> **At advanced difficulty, parallelism cannot be solved by looking only for identical word endings. Locate the structural skeleton!**`
    }
  ]
};
