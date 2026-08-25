import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: 'Pronoun Reference, Case, Relative Pronouns, and Agreement in Complex Sentences',
  description: 'Antecedents, Pronoun Number/Person Agreement, Singular They, Case (Subjective/Objective/Possessive), Who vs. Whom, Whose vs. Who\'s, and Relative Clauses',
  concepts: [
    {
      id: 'tb5-c1',
      title: '161–162. Pronoun Jobs & Antecedents',
      fullText: `A **pronoun** is a word that replaces a noun, identifies possession, or connects clauses. The **antecedent** is the specific noun or noun phrase to which a pronoun refers.

### Example:
> The researcher submitted **her** report.
* Antecedent: **researcher**
* Pronoun: **her**

For SAT grammar, every pronoun must satisfy 5 checks:
1. Does it agree in number with its antecedent?
2. Is the antecedent clear and unambiguous?
3. Is the pronoun in the correct case (subject/object/possessive)?
4. Is the pronoun necessary (not redundant)?
5. Does the relative pronoun correctly connect the clause?`
    },
    {
      id: 'tb5-c2',
      title: '163–164. Pronoun Number Agreement & Singular "They"',
      fullText: `A pronoun must match its antecedent in number (singular vs. plural).

### Singular Antecedent:
> The researcher submitted **his or her** report.
> Each applicant should submit **their** application. *(Singular gender-neutral "they/their" is standard in modern English.)*

### Plural Antecedent:
> The researchers submitted **their** reports.

Rule: On standardized tests, follow the convention established by the specific question options and ensure the reference is consistent throughout.`
    },
    {
      id: 'tb5-c3',
      title: '165–167. Pronoun Reference Clarity & Demonstratives ("This", "That")',
      fullText: `A pronoun should NEVER leave the reader guessing which noun it replaces.

### Ambiguous Pronoun Reference:
> *When the researcher spoke with the technician, he seemed concerned.* → AMBIGUOUS! *(Does "he" refer to the researcher or the technician?)*

### Vague Demonstrative ("This", "That"):
> *The researchers discussed the equipment, the procedure, and the results. This was controversial.* → VAGUE!
*(What does "this" refer to? The discussion, equipment, procedure, or results? Use a noun phrase: "This discussion was controversial.")*`
    },
    {
      id: 'tb5-c4',
      title: '168–169. "It" and "They" as References',
      fullText: `* **It**: Can refer to a singular non-human noun (*The machine was expensive, but it produced accurate results*) or act as an impersonal dummy subject (*It is important to review data*).
* **They / Their**: Must refer to a clear plural noun antecedent (*The researchers published their findings because they completed analysis*) or a singular person of unspecified gender.`
    },
    {
      id: 'tb5-c5',
      title: '170–173. Pronoun Case (Subjective, Objective, Possessive)',
      fullText: `Pronoun **case** reflects a pronoun's grammatical role in the sentence:

* **Subjective Case**: Used when the pronoun is the subject performing the verb.
  > **I, he, she, we, they, who**
  > *She analyzed the data.*
* **Objective Case**: Used when the pronoun receives the verb's action or follows a preposition.
  > **me, him, her, us, them, whom**
  > *The professor contacted him.*
* **Possessive Case**: Shows ownership.
  > Determiners: *my, your, his, her, its, our, their*
  > Independent pronouns: *mine, yours, his, hers, ours, theirs*`
    },
    {
      id: 'tb5-c6',
      title: '174–178. Case After Prepositions & "Between You and Me"',
      fullText: `Pronouns following prepositions (*with, to, for, by, from, between*) MUST be in the **objective case**.

### Correct:
> The professor spoke with **me**.
> Between you and **me**, the proposal needs revision.

### Incorrect:
> *The professor spoke with I.* → WRONG!
> *Between you and I...* → WRONG! ("between" is a preposition requiring object "me")`
    },
    {
      id: 'tb5-c7',
      title: '179–180. "Who" vs. "Whom" (The He/Him Test)',
      fullText: `* **Who**: Subject pronoun (replaces *he/she/they*).
* **Whom**: Object pronoun (replaces *him/her/them*).

### The He/Him Substitution Test:
1. Turn the clause into a statement and substitute **he** or **him**.
2. If **he** works → use **who**.
3. If **him** works → use **whom**.

### Example 1:
> [Who / Whom] conducted the experiment?
* Test: *He conducted the experiment.* → "He" works → **Who** conducted the experiment?

### Example 2:
> [Who / Whom] did the professor contact?
* Test: *The professor contacted him.* → "Him" works → **Whom** did the professor contact?`
    },
    {
      id: 'tb5-c8',
      title: '181–184. Relative Pronouns in Clauses & Omitted Pronouns',
      fullText: `Relative pronouns (*who, whom, whose, which, that*) introduce relative clauses modifying nouns.

* **Who in Relative Clause (Subject)**: *The researcher* **who** *conducted the experiment...*
* **Whom in Relative Clause (Object)**: *The researcher* **whom** *the professor interviewed...*

### Omitted Object Relative Pronouns:
Object relative pronouns can often be omitted in English:
> *The researcher [whom] the professor interviewed received an award.* → *The researcher the professor interviewed received an award.*

Subject relative pronouns CANNOT be omitted!`
    },
    {
      id: 'tb5-c9',
      title: '185–187. Essential vs. Nonessential Relative Clauses ("That" vs. "Which")',
      fullText: `### Essential (Restrictive) Clauses:
Define or identify which specific noun is meant. Use **that** (or *who*). Do NOT use commas!
> The method **that produced the best results** was adopted.

### Nonessential (Nonrestrictive) Clauses:
Add supplementary information about an already identified noun. Use **which** (or *who*). ALWAYS enclose with commas!
> The revised procedure, **which was developed last year**, produced better results.`
    },
    {
      id: 'tb5-c10',
      title: '188–189. "Whose" vs. "Who\'s"',
      fullText: `* **Whose**: Possessive relative pronoun (*The researcher* **whose** *findings changed the field...*). Can refer to people, organizations, or objects!
* **Who\'s**: Contraction of "who is" or "who has" (*Who\'s responsible?*).`
    },
    {
      id: 'tb5-c11',
      title: '190–194. Advanced Pronoun Agreement in Complex Constructions',
      fullText: `* **Relative Clause Verb Agreement**: The verb inside a relative clause agrees with the antecedent of the relative pronoun.
  > *The researcher who* **studies** *the data...* (singular)
  > *The researchers who* **study** *the data...* (plural)

* **Person Consistency**: Avoid unnecessary shifts between third person (*students*) and second person (*you*).
  > *When a student applies, the student (or he/she/they) should check deadlines.* (NOT "you")`
    },
    {
      id: 'tb5-c12',
      title: '195–198. Redundancy, Double Subjects & Reflexive Pronouns',
      fullText: `### Double Subject / Pronoun Redundancy:
> *The researcher, she analyzed the data.* → WRONG!
> Correct: **The researcher analyzed the data.**

### Reflexive Pronouns (*myself, himself, herself, themselves*):
Reflexive pronouns MUST refer back to a subject already present in the sentence. They CANNOT replace standard object pronouns!
> *The professor spoke with the researcher and myself.* → WRONG!
> Correct: **The professor spoke with the researcher and me.**`
    },
    {
      id: 'tb5-c13',
      title: '205–206. Pronoun Checklist & Summary',
      fullText: `When evaluating pronouns on the SAT, follow this 5-step checklist:
1. Identify the antecedent.
2. Is the antecedent clearly identifiable and unambiguous?
3. Do number and person match?
4. Is the pronoun case correct (subject vs object)?
5. Is the pronoun necessary (no double subjects or misused reflexives)?`
    }
  ]
};

export const THEORY_BLOCK_6: WritingTheoryBlock = {
  blockNumber: 6,
  title: 'Modifiers, Adjective/Adverb Placement, and Logical Modification',
  description: 'Adjectives vs Adverbs, Linking Verbs, Modifier Placement, Dangling Modifiers, Misplaced Modifiers, Limiters (Only, Almost), and Reduced Clauses',
  concepts: [
    {
      id: 'tb6-c1',
      title: '207–208. What Is a Modifier & Adjacency Principle',
      fullText: `A **modifier** is a word, phrase, or clause that provides descriptive detail about another element in a sentence.

Adjacency Principle:
> **Place a modifier as close as possible to the word or phrase it logically describes so that the relationship is unmistakable.**`
    },
    {
      id: 'tb6-c2',
      title: '209–211. Dangling Modifiers',
      fullText: `A **dangling modifier** occurs when an introductory modifying phrase does NOT logically describe the grammatical subject immediately following the comma.

### Incorrect (Dangling):
> *Walking through the laboratory, the equipment appeared modern.*
*(Illogical: The equipment was NOT walking through the laboratory!)*

### Correct:
> Walking through the laboratory, the **researcher** noticed that the equipment appeared modern.`
    },
    {
      id: 'tb6-c3',
      title: '212–214. Participial Phrases (Present, Past, Perfect)',
      fullText: `Participial phrases act as adjectives describing nouns.

* **Present Participial Phrase (-ing)**: *Studying the results, the researcher found an error.*
* **Perfect Participial Phrase (Having + past participle)**: *Having completed the analysis, the researchers published their findings.* *(Marks prior action)*
* **Past Participial Modifier (-ed)**: *The damaged equipment was replaced.*`
    },
    {
      id: 'tb6-c4',
      title: '215–218. Adjectives vs. Adverbs & Linking Verbs',
      fullText: `* **Adjectives**: Modify nouns or pronouns (*careful researcher*, *reliable results*).
* **Adverbs**: Modify verbs, adjectives, or other adverbs (*reviewed carefully*, *extremely difficult*).

### Linking Verbs (*be, seem, become, remain, appear, feel, look, sound, smell, taste*):
Linking verbs connect a subject to a subject complement adjective, NOT an adverb!
> The results seem **reliable**. *(Adjective describing results)*

### Action Verbs vs. Linking Verbs:
> The material feels **smooth**. *(Linking verb → adjective)*
> The researcher felt **carefully** along the surface. *(Action verb → adverb)*`
    },
    {
      id: 'tb6-c5',
      title: '219–221. "Good" vs. "Well", "Bad" vs. "Badly", "Real" vs. "Really"',
      fullText: `* **Good** (Adj) vs. **Well** (Adverb / Health Adj):
  > *The experiment was* **good**. *(Adj)*
  > *The experiment was conducted* **well**. *(Adverb)*
* **Bad** (Adj) vs. **Badly** (Adverb):
  > *The results were* **bad**. *(Adj)*
  > *The researchers performed* **badly**. *(Adverb)*
* **Real** (Adj) vs. **Really** (Adverb):
  > *The problem is* **real**. *(Adj)*
  > *The problem is* **really** *difficult.* *(Adverb modifying adjective)*`
    },
    {
      id: 'tb6-c6',
      title: '224–228. Placement of Limiters ("Only", "Almost", "Just", "Even")',
      fullText: `Limiting modifiers (*only, almost, just, even*) modify the word or phrase immediately following them. Placing them in different positions changes the entire meaning of the sentence!

### Compare:
1. **Only Sarah** submitted the application. *(Sarah submitted it; no one else did.)*
2. Sarah **only submitted** the application. *(She submitted it, but did nothing else.)*
3. Sarah submitted **only the application**. *(She submitted the application, but no other documents.)*`
    },
    {
      id: 'tb6-c7',
      title: '230–232. Misplaced Modifiers & Squinting Modifiers',
      fullText: `### Misplaced Modifiers:
A misplaced modifier is separated from the word it describes, attaching to the wrong word.
> *The researcher found a report in the library describing the experiment.*
> Correct: **In the library, the researcher found a report describing the experiment.**

### Squinting Modifiers:
A modifier placed between two elements such that it could modify either one.
> *Students who practice regularly often improve their scores.*`
    },
    {
      id: 'tb6-c8',
      title: '247–248. Reduced Relative & Participial Clauses',
      fullText: `Relative clauses and participial clauses can be shortened for concision without changing meaning:

* Full: *Students who are interested in research should apply.*
* Reduced: **Students interested in research should apply.**
* Full: *The researchers who were working in the lab discovered an error.*
* Reduced: **The researchers working in the lab discovered an error.**`
    },
    {
      id: 'tb6-c9',
      title: '253–256. Modifier Repair Strategies & Tests',
      fullText: `### The "Who Did It?" Test:
When a sentence begins with an *-ing* or *-ed* modifier, ask: *Who or what performed this action?* Verify that this actor is the exact subject immediately after the comma.

### Two Ways to Repair a Dangling Modifier:
1. **Repair 1 (Change main subject)**: *After analyzing the data, the researchers identified the error.*
2. **Repair 2 (Change modifying clause to full clause)**: *After the data were analyzed, the cause of the error became apparent.*`
    }
  ]
};

export const THEORY_BLOCK_7: WritingTheoryBlock = {
  blockNumber: 7,
  title: 'Sentence Boundaries, Coordination, Subordination, and Clause Structure',
  description: 'Independent vs Dependent Clauses, Subordinating Conjunctions, Comma Splices, Run-ons, FANBOYS, Semicolons, Colons, Dashes, and Parentheses',
  concepts: [
    {
      id: 'tb7-c1',
      title: '261–265. What Is a Clause? Independent vs. Dependent Clauses',
      fullText: `A **clause** is a structural unit containing a subject and a verb.

* **Independent Clause (IC)**: Expresses a complete thought and can stand alone as a sentence.
  > *The researchers analyzed the data.*
* **Dependent Clause (DC)**: Contains a subject and verb but begins with a subordinating conjunction, making it an incomplete thought.
  > *Because the researchers analyzed the data...*

Common Subordinating Conjunctions:
> **because, although, though, even though, while, when, whenever, before, after, since, unless, if, whereas, once, until, as**`
    },
    {
      id: 'tb7-c2',
      title: '266–270. Subordination & Punctuation Rules',
      fullText: `### Rule 1: DC first, IC second → Use a comma!
> **Because the researchers needed more evidence, they repeated the experiment.**
> *(DC, IC)*

### Rule 2: IC first, DC second → NO comma required!
> **The researchers repeated the experiment because they needed more evidence.**
> *(IC DC)*

### Rule 3: "Although" does not join two independent clauses with a comma splice!
> *The experiment was difficult, although the researchers completed it.* (Subordinate clause second)`
    },
    {
      id: 'tb7-c3',
      title: '271–272. Comma Splices and the Four Valid Repairs',
      fullText: `A **comma splice** occurs when two independent clauses are joined ONLY by a comma. This is a fatal structural error on the SAT.

> *The experiment was difficult, the researchers completed it.* → COMMA SPLICE!

### Four Valid Ways to Repair a Comma Splice:
1. **Method 1 (Period / Two Sentences)**: *The experiment was difficult. The researchers completed it.*
2. **Method 2 (Semicolon)**: *The experiment was difficult; the researchers completed it.*
3. **Method 3 (Comma + FANBOYS)**: *The experiment was difficult, but the researchers completed it.*
4. **Method 4 (Subordination)**: *Although the experiment was difficult, the researchers completed it.*`
    },
    {
      id: 'tb7-c4',
      title: '273–275. Semicolons & Conjunctive Adverbs ("However", "Therefore")',
      fullText: `* **Semicolon Rule**: A semicolon connects two complete independent clauses without a conjunction.
  > **Independent Clause ; Independent Clause.**

* **Semicolon + Conjunctive Adverb**: Words like *however, therefore, moreover, consequently, furthermore, nevertheless* are transitional adverbs, NOT coordinating conjunctions. They CANNOT fix a comma splice with a comma alone!
  > Correct: **The experiment was difficult; however, the researchers completed it.**
  > Incorrect: *The experiment was difficult, however, the researchers completed it.*`
    },
    {
      id: 'tb7-c5',
      title: '276–282. Coordinating Conjunctions (FANBOYS) & Compound Predicates',
      fullText: `The 7 Coordinating Conjunctions: **FANBOYS** (*For, And, Nor, But, Or, Yet, So*).

### Rule 1: Comma + FANBOYS Joins Two Independent Clauses:
> **The experiment was difficult, but the researchers completed it.**
> *(IC, [FANBOYS] IC)*

### Rule 2: Compound Predicates do NOT take a comma before "and/but":
When *and* or *but* connects two verbs sharing the same subject, do NOT use a comma!
> **The researcher collected the samples and analyzed the data.** *(Compound predicate: collected and analyzed)*

### The "Subject + Verb" Test:
Look at the right side of *and/but*. If there is a new subject + verb, use a comma. If there is only a verb without a new subject, NO comma!`
    },
    {
      id: 'tb7-c6',
      title: '283–288. "So", "Yet", "For", "Or", and Inversion After "Nor"',
      fullText: `* **So / Yet / For / Or**: Act as FANBOYS connectors when joining independent clauses with a preceding comma.
* **Inversion After "Nor"**: When *nor* connects negative clauses, it causes subject-auxiliary inversion in the second clause!
  > *The researchers did not repeat the experiment,* **nor did they revise** *the procedure.*`
    },
    {
      id: 'tb7-c7',
      title: '289–296. Fragments, Run-Ons, and Comma Splices',
      fullText: `* **Sentence Fragment**: An incomplete sentence lacking an independent clause, main verb, or subject.
  > *Because the researchers needed more evidence.* → FRAGMENT!
* **Run-On Sentence**: Two independent clauses fused together with NO punctuation or conjunction.
  > *The experiment was difficult the researchers completed it.* → RUN-ON!`
    },
    {
      id: 'tb7-c8',
      title: '311–315. Colons, Dashes, and Parentheses',
      fullText: `### Colon Rule:
Material BEFORE a colon MUST be a complete independent clause. The material AFTER the colon explains, illustrates, or lists items.
> **The researchers reached one conclusion: the method was unreliable.**

### Dashes & Parentheses:
Em dashes (—) and parentheses enclose supplementary or interrupting material.
> **The equipment—recently purchased by the laboratory—was unusually accurate.**`
    }
  ]
};

export const THEORY_BLOCK_8: WritingTheoryBlock = {
  blockNumber: 8,
  title: 'Parallelism, Comparisons, and Logical Sentence Structure',
  description: 'Grammatical Parallelism, Correlative Conjunctions, Logical Comparisons, Comparing Like with Like, "That of / Those of", and Quantity Comparisons (Less/Fewer)',
  concepts: [
    {
      id: 'tb8-c1',
      title: '324–326. What Is Parallelism & The List Test',
      fullText: `**Parallelism** requires that items performing the same grammatical role in a sentence or list share matching grammatical structures.

### Example:
> The program teaches students to **research**, **analyze**, and **communicate**.
*(All three items are base infinitives.)*

### Incorrect (Nonparallel):
> *The program teaches students to research, analyzing data, and communication.*

Whenever you see *and, or, but* connecting items in a list, check that every element matches in form (all nouns, all gerunds, all infinitives, or all past-tense verbs).`
    },
    {
      id: 'tb8-c2',
      title: '327–333. Parallel Verbs, Nouns, Adjectives, Infinitives, and Gerunds',
      fullText: `* **Parallel Verbs**: *collected, analyzed, and published*
* **Parallel Nouns**: *creativity, leadership, and service*
* **Parallel Adjectives**: *efficient, reliable, and affordable*
* **Parallel Infinitives**: *to study, to research, and to collaborate*
* **Parallel Gerunds**: *reading, writing, and analyzing*`
    },
    {
      id: 'tb8-c3',
      title: '334–339. Correlative Conjunctions ("Both... And", "Not Only... But Also")',
      fullText: `Correlative conjunction pairs MUST be followed by parallel grammatical structures:
> **both A and B**
> **either A or B**
> **neither A nor B**
> **not only A but also B**
> **whether A or B**

### Correct:
> The program develops **both technical skills and communication skills**. *(Noun phrase & Noun phrase)*
> The program **not only teaches programming but also develops analytical skills**. *(Verb phrase & Verb phrase)*`
    },
    {
      id: 'tb8-c4',
      title: '343–346. Logical Comparisons & Comparing Like with Like',
      fullText: `Comparisons MUST compare items in logically equivalent categories.

### Incorrect (Faulty Comparison):
> *The research program is more rigorous than the introductory course's students.*
*(Illogical: Compares a program with students!)*

### Correct:
> **The research program is more rigorous than the introductory course.**`
    },
    {
      id: 'tb8-c5',
      title: '347–349. Comparatives vs. Superlatives ("More" vs. "Most")',
      fullText: `* **Comparative (er / more)**: Used when comparing EXACTLY TWO things or groups.
  > *Method A is* **more efficient than** *Method B.*
* **Superlative (est / most)**: Used when comparing THREE OR MORE items.
  > *Method A is the* **most efficient** *of the three methods.*`
    },
    {
      id: 'tb8-c6',
      title: '350–353. "Less" vs. "Fewer", "Number" vs. "Amount"',
      fullText: `* **Fewer / Number of**: Used for COUNTABLE plural nouns (*fewer students*, *number of applicants*).
* **Less / Amount of**: Used for MASS / UNCOUNTABLE noncount nouns (*less time*, *amount of funding*).`
    },
    {
      id: 'tb8-c7',
      title: '366–371. Comparative Structures ("As... As", Ellipsis, Ambiguity)',
      fullText: `* **As... As**: *The new method is* **as effective as** *the old method.* (NOT "as effective than")
* **Ellipsis in Comparisons**: Repeated words can be omitted if meaning remains clear (*Sarah scored higher than John [scored]*).`
    },
    {
      id: 'tb8-c8',
      title: '377–381. "Unlike", "Similar To", "Different From"',
      fullText: `* **Unlike**: Must contrast logically equivalent nouns.
  > Correct: **Unlike the previous method, the new method requires less equipment.**
* **Different From**: Formal English uses *different from* before noun phrases (*different from the old model*).`
    },
    {
      id: 'tb8-c9',
      title: '382–386. "That of" and "Those of" in Comparisons',
      fullText: `To avoid faulty comparisons when comparing singular or plural properties of two entities, use **that of** (singular) or **those of** (plural).

### Singular Property ("That of"):
> **The cost of University A is higher than that of University B.** *(that = the cost)*

### Plural Property ("Those of"):
> **The admission standards of University A are stricter than those of University B.** *(those = the admission standards)*

### Common Trap:
> *The university's graduation rate is higher than its competitors.* → FAULTY!
> Correct: **The university's graduation rate is higher than that of its competitors.**`
    }
  ]
};
