import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Foundations of Sentence Grammar and Subject–Verb Agreement',
  description: 'Subject Identification, Head Nouns, Prepositional Phrase Traps, Collective Nouns, and Inverted Sentence Structures',
  concepts: [
    {
      id: 'tb1-c1',
      title: '1. The Subject of a Sentence',
      fullText: `The **subject** is the noun, pronoun, or noun phrase that performs the action or is being described by the verb.

### Example:
> The researcher analyzes the data.
* **Subject**: researcher
* **Verb**: analyzes

The subject determines the form of the verb.

### Another example:
> The researchers analyze the data.
* **Subject**: researchers
* **Verb**: analyze

The verb changes because the subject is plural. The foundational rule is:
> **singular subject → singular verb**
> **plural subject → plural verb**`
    },
    {
      id: 'tb1-c2',
      title: '2. Subjects Can Be Long',
      fullText: `One of the most common grammar traps on the SAT is a sentence in which the subject is separated from its verb by several words or interrupting phrases.

### Example:
> The collection of historical documents is stored in the university library.

At first glance, **documents** may appear to be the noun immediately before the verb.
But the grammatical subject is:
> **collection**

The phrase **of historical documents** is a prepositional phrase modifying **collection**.
Therefore:
> **collection is** (NOT collection *are*)

### Core Rule:
Do not automatically match the verb with the noun closest to it!
1. Find the complete subject.
2. Remove interrupting phrases mentally.
3. Identify the head noun of the subject.
4. Make the verb agree with that head noun.`
    },
    {
      id: 'tb1-c3',
      title: '3. The Head Noun',
      fullText: `The **head noun** is the central noun in a noun phrase that controls the verb.

Consider:
> The collection of rare manuscripts is valuable.

* Complete subject: *The collection of rare manuscripts*
* Head noun: **collection** (singular)
* Therefore: **collection → is**

### Correct:
> The collection of rare manuscripts **is** valuable.

### Incorrect:
> The collection of rare manuscripts **are** valuable.

The noun **manuscripts** is plural, but it is inside a modifying prepositional phrase and is NOT the head noun.`
    },
    {
      id: 'tb1-c4',
      title: '4. Prepositional Phrases Between Subject and Verb',
      fullText: `Prepositional phrases frequently create subject–verb agreement traps by placing a plural noun right next to a singular verb, or vice versa.

Common prepositions include:
> **of, in, on, with, by, for, among, between, from, under, near, alongside**

A noun inside such a phrase is the object of the preposition and CANNOT serve as the subject of the sentence.

### Example 1:
> The list of required courses **is** available online.
* Subject: **list** (singular)
* Prepositional phrase: *of required courses*
* Verb: **is** (singular)

### Example 2:
> The results of the experiment **indicate** a significant difference.
* Subject: **results** (plural)
* Prepositional phrase: *of the experiment*
* Verb: **indicate** (plural)

### Example 3:
> The quality of the samples **was** inconsistent.
* Subject: **quality** (singular)
* Prepositional phrase: *of the samples*
* Verb: **was** (singular)`
    },
    {
      id: 'tb1-c5',
      title: '5. The "Of" Phrase Trap',
      fullText: `The **of** construction deserves special attention because it appears frequently in standardized-test grammar questions.

Compare these two sentences:
> The number of applicants **is** increasing.
and
> A number of applicants **are** waiting outside.

These sentences look nearly identical, but they behave differently:

### "The number of":
The head noun is **number**, making it singular.
> The number of applicants **is** increasing.

### "A number of":
The phrase **a number of** functions as an idiomatic quantity modifier meaning "many".
Therefore, the plural noun that follows controls agreement.
> A number of applicants **are** waiting outside.`
    },
    {
      id: 'tb1-c6',
      title: '6. Collective Nouns',
      fullText: `Collective nouns refer to groups made up of multiple individuals.

Examples of collective nouns:
> **team, committee, family, audience, class, group, government, organization, faculty, jury**

In standard formal American English, when the group acts as a single unified unit, the collective noun takes a **singular verb**.

### Example:
> The committee **has** reached a decision.
*(The committee acts as one single entity.)*

### Example:
> The research team **is** preparing its report.
*(The team is treated as one unit.)*`
    },
    {
      id: 'tb1-c7',
      title: '7. Compound Subjects Joined by "And"',
      fullText: `When two or more subjects are joined by **and**, they form a compound subject that takes a **plural verb**.

### Example:
> The researcher and the technician **analyze** the samples.
*(Two people → plural verb)*

### Example:
> The university and the research institute **collaborate** on the project.
*(Two institutions → plural verb)*`
    },
    {
      id: 'tb1-c8',
      title: '8. When "And" Does Not Create a Plural Subject',
      fullText: `Not every occurrence of **and** creates a plural subject. Sometimes two nouns joined by **and** refer to a single combined item, concept, or person.

### Example:
> Bread and butter **is** a common breakfast combination.
*(Bread and butter is treated as a single compound dish.)*

### Core Rule:
Do not mechanically select a plural verb every time you see **and**. Check whether the two nouns form a single unified concept.`
    },
    {
      id: 'tb1-c9',
      title: '9. Subjects Joined by "Or" or "Nor"',
      fullText: `When subjects are joined by **or** or **nor**, the verb agrees with the subject **closest to the verb** (the Rule of Proximity).

### Example 1:
> Neither the students nor the teacher **is** available.
* Closest subject: *teacher* (singular) → **is**

### Example 2:
> Neither the teacher nor the students **are** available.
* Closest subject: *students* (plural) → **are**`
    },
    {
      id: 'tb1-c10',
      title: '10. The "Neither/Nor" Strategy',
      fullText: `When you see correlative structures:
> **either A or B**
> **neither A nor B**

Look immediately at Subject B (the subject closest to the verb).
1. Is Subject B singular? Use a singular verb.
2. Is Subject B plural? Use a plural verb.

Ignore Subject A entirely when making the verb agreement choice.`
    },
    {
      id: 'tb1-c11',
      title: '11. "Each" and "Every"',
      fullText: `Words such as **each** and **every** (and compound words like *everyone, everybody, anyone, anybody, someone, somebody, no one, nobody*) are grammatically **singular** when they function as subjects.

### Example:
> Each of the students **is** required to submit a report.
*(The phrase "of the students" is an intervening prepositional phrase; "each" is the true singular subject.)*

### Example:
> Every applicant **must submit** the form.
*(The modal "must" takes the base verb form.)*`
    },
    {
      id: 'tb1-c12',
      title: '12. "Each of" + Plural Noun',
      fullText: `This is an extremely frequent SAT test construction.

> Each of the researchers **has** completed the survey.

* Noun in phrase: *researchers* (plural)
* True subject: **Each** (singular)
* Verb: **has** (singular)

### Incorrect:
> Each of the researchers **have** completed the survey.
The plural noun inside the "of" phrase does NOT control the verb!`
    },
    {
      id: 'tb1-c13',
      title: '13. "Every" + Singular Noun',
      fullText: `After the determiner **every**, the noun must be singular, and the verb must also be singular.

### Correct:
> Every student **receives** an identification number.

### Incorrect:
> Every students **receive** an identification number.

Structure:
> **every + singular noun → singular verb**`
    },
    {
      id: 'tb1-c14',
      title: '14. Indefinite Pronouns',
      fullText: `The following indefinite pronouns are ALWAYS grammatically **singular**:

> **everyone, everybody, everything, someone, somebody, something, anyone, anybody, anything, no one, nobody, nothing, each, either, neither**

### Examples:
> Everyone **is** expected to attend.
> Someone **has** left a message.
> Neither **is** acceptable.
> Each **has** its own purpose.

The fact that *everyone* refers to many people conceptually does NOT make it grammatically plural in formal English!`
    },
    {
      id: 'tb1-c15',
      title: '15. "Everyone" vs. "All"',
      fullText: `Compare:
> Everyone **is** prepared. *(Always singular)*
vs.
> All **are** prepared. / All **is** prepared.

**Everyone** is strictly singular.
**All** is a variable quantity pronoun whose number depends on the noun in its prepositional phrase:
* *All of the students* **are** prepared. (*students* is plural)
* *All of the information* **is** accurate. (*information* is noncount/singular)`
    },
    {
      id: 'tb1-c16',
      title: '16. "Either" and "Neither" Alone',
      fullText: `When **either** or **neither** functions alone as a pronoun subject (without *or* or *nor*), it is grammatically **singular**.

### Examples:
> Neither **is** correct.
> Either **is** acceptable.

When followed by *of + plural noun*, the pronoun remains singular:
> Neither of the answers **is** correct.
> Either of the options **is** acceptable.`
    },
    {
      id: 'tb1-c17',
      title: '17. Interrupting Phrases',
      fullText: `Expressions set off by commas between the subject and verb do NOT alter subject-verb agreement.

### Example:
> The researchers, after several months of preparation, **begin** the experiment.

* Core sentence: *The researchers begin the experiment.*
* Interruption: *after several months of preparation*

### Strategy:
Temporarily cross out or cover the interrupting phrase to see the core subject and verb clearly.`
    },
    {
      id: 'tb1-c18',
      title: '18. Relative Clauses Between Subject and Verb',
      fullText: `Relative clauses introduced by *who, which, or that* often separate the main subject from the main verb.

### Example:
> The researcher [who conducted the experiments] **is presenting** the results.

* Main subject: **researcher** (singular)
* Relative clause: *who conducted the experiments*
* Main verb: **is presenting** (singular)

Do not match the main verb with *experiments*!`
    },
    {
      id: 'tb1-c19',
      title: '19. Relative Pronouns and Agreement',
      fullText: `A relative pronoun (*who, which, that*) agrees in number with its antecedent (the noun it replaces).

### Singular Antecedent:
> The researcher who **studies** the samples **is** experienced.
*(researcher → studies → is)*

### Plural Antecedent:
> The researchers who **study** the samples **are** experienced.
*(researchers → study → are)*`
    },
    {
      id: 'tb1-c20',
      title: '20. "There Is" and "There Are"',
      fullText: `In sentences beginning with **there** or **here**, the subject comes AFTER the verb (inverted structure). *There* and *here* are placeholder adverbs, NOT subjects!

### Example 1:
> There **is** a problem with the equipment.
* Subject: **problem** (singular) → **is**

### Example 2:
> There **are** several problems with the equipment.
* Subject: **problems** (plural) → **are**`
    },
    {
      id: 'tb1-c21',
      title: '21. "Here Is" and "Here Are"',
      fullText: `The same inversion principle applies to **here** constructions.

### Example 1:
> Here **is** the information you requested.
* Subject: **information** (singular/noncount) → **is**

### Example 2:
> Here **are** the documents you requested.
* Subject: **documents** (plural) → **are**`
    },
    {
      id: 'tb1-c22',
      title: '22. Agreement in Questions',
      fullText: `Questions invert standard word order, placing the helping verb before the subject.

### Example 1:
> Where **are** the researchers?
* Subject: **researchers** (plural) → **are**

### Example 2:
> Where **is** the research team?
* Subject: **research team** (singular collective noun) → **is**`
    },
    {
      id: 'tb1-c23',
      title: '23. Inverted Sentence Structures',
      fullText: `Formal or literary writing may place a prepositional phrase of location first, followed immediately by the verb and then the subject.

### Example:
> On the table **are** several research reports.

* Location phrase: *On the table* (NOT the subject!)
* Verb: **are**
* True subject: **several research reports** (plural)

### Compare:
> On the table **is** a research report.
*(Subject is "a research report" → is)*`
    },
    {
      id: 'tb1-c24',
      title: '24. The Core-Sentence Method',
      fullText: `When a sentence becomes long and complex, reduce it mentally to its bare core (Subject + Verb + Object).

### Original:
> The collection of manuscripts, which was acquired by the university several years ago, is now available to researchers.

### Strip away modifiers:
> *The collection [...] is now available.*

Agreement becomes instantly obvious:
> **collection → is**`
    },
    {
      id: 'tb1-c25',
      title: '25. The Five-Step Agreement Check',
      fullText: `Whenever you encounter a possible subject–verb agreement question on the SAT, follow this 5-step sequence:

1. **Step 1 — Locate the verb**: Find the target verb or verb phrase.
2. **Step 2 — Ask "Who or what?"**: Ask who or what performs the action or is described.
3. **Step 3 — Identify the true subject**: Strip away prepositional phrases, relative clauses, and appositives.
4. **Step 4 — Determine number**: Is the true head noun singular or plural?
5. **Step 5 — Match the verb**: Choose the verb form that agrees with the head noun in number.`
    },
    {
      id: 'tb1-c26',
      title: '26. Common SAT Agreement Traps',
      fullText: `### Trap 1 — Nearest Noun:
> *The collection of manuscripts are...* → WRONG! *(collection controls → is)*

### Trap 2 — Plural Noun After "Of":
> *Each of the students have...* → WRONG! *(each controls → has)*

### Trap 3 — Collective Noun:
> *The committee have...* → WRONG in American English when acting as one unit *(committee controls → has)*

### Trap 4 — Inverted "There":
> *There is several problems...* → WRONG! *(problems controls → are)*

### Trap 5 — Relative Clause Distractor:
> *The researcher who conducted the experiments are...* → WRONG! *(researcher controls → is)*

### Trap 6 — Either / Neither:
> *Neither of the answers are correct...* → WRONG! *(neither controls → is)*`
    },
    {
      id: 'tb1-c27',
      title: '27. Section 1 Checkpoint',
      fullText: `Before moving to Section 2, ensure you can answer these diagnostic questions:
1. What is the true grammatical subject?
2. What is the head noun?
3. Is there an intervening prepositional phrase?
4. Is there an interrupting relative clause?
5. Is the subject singular or plural?
6. Is the subject joined by *and*, *or*, or *nor*?
7. Is the subject an indefinite pronoun?
8. Is the sentence inverted (*there is/are*, location phrase first)?
9. Can the sentence be reduced to a 3-word core sentence?`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Verb Forms, Tense, Agreement Traps, and Pronoun Agreement',
  description: 'Present/Past Tense Forms, Auxiliary Verbs, Modal Verbs, Perfect/Progressive Tenses, Subjunctive Mood, Conditional Structures, and Pronoun Case',
  concepts: [
    {
      id: 'tb2-c1',
      title: '29. Subject–Verb Agreement Is Only the First Layer',
      fullText: `Correct grammar requires more than just matching a singular subject with a singular verb.
A complete grammatical check requires evaluating:
* Correct verb form & auxiliary usage
* Consistent & logical tense sequence
* Clear pronoun-antecedent reference & case
* Logical agreement & parallel construction

### Example:
> *The researchers analyzes the results.* → WRONG! *(researchers is plural, analyzes is singular)*
> Correct: **The researchers analyze the results.**`
    },
    {
      id: 'tb2-c2',
      title: '30. Present-Tense Agreement',
      fullText: `In the simple present tense, third-person singular subjects (*he, she, it, the student*) take verbs ending in **-s** or **-es**. Third-person plural subjects (*they, the students*) take the base verb form without -s.

### Singular:
> The researcher **analyzes** the data. *(he/she/it → -s form)*

### Plural:
> The researchers **analyze** the data. *(they → base form)*

Remember:
* Nouns add **-s** to become PLURAL (*researchers*).
* Verbs add **-s** to become SINGULAR (*analyzes*).`
    },
    {
      id: 'tb2-c3',
      title: '31. Common Present-Tense Verb Pairs',
      fullText: `Memorize these exact singular vs. plural present-tense pairs:

| Singular Form | Plural Form |
| :--- | :--- |
| **is** | **are** |
| **was** | **were** |
| **has** | **have** |
| **does** | **do** |
| **studies** | **study** |
| **analyzes** | **analyze** |
| **observes** | **observe** |
| **requires** | **require** |
| **produces** | **produce** |
| **indicates** | **indicate** |

### Example:
> The report **indicates** a significant difference.
> The reports **indicate** a significant difference.`
    },
    {
      id: 'tb2-c4',
      title: '32. "Has" vs. "Have"',
      fullText: `The distinction between **has** (singular) and **have** (plural) appears constantly on the SAT.

### Singular:
> The researcher **has** completed the study.

### Plural:
> The researchers **have** completed the study.

### With "Each":
> Each researcher **has** completed the study.
*(Even though "researcher" comes after "each", the controlling word is "each" → singular "has".)*`
    },
    {
      id: 'tb2-c5',
      title: '33. "Does" vs. "Do"',
      fullText: `When using the auxiliary verb **does** (singular) or **do** (plural), the auxiliary carries the tense and agreement marking. The main verb that follows MUST remain in its base form.

### Correct:
> The researcher **does** not **agree** with the conclusion.
> The researchers **do** not **agree** with the conclusion.

### Incorrect:
> The researcher does not **agrees** with the conclusion.
*(WRONG: "does" already carries the third-person singular marking!)*`
    },
    {
      id: 'tb2-c6',
      title: '34. Modal Verbs',
      fullText: `Modal auxiliary verbs include:
> **can, could, may, might, must, shall, should, will, would**

Rule: After any modal verb, you MUST use the bare **base form** of the verb. Modal verbs do NOT change form for singular or plural subjects!

### Correct:
> The researcher **can analyze** the data.
> The researchers **should review** the results.

### Incorrect:
> The researcher can **analyzes** the data.
> The researchers should **reviews** the results.`
    },
    {
      id: 'tb2-c7',
      title: '35. Perfect Tenses',
      fullText: `Perfect tenses use **has / have / had + past participle**.

### Present Perfect:
Connects a past action to the present situation.
* Singular: *The researcher* **has completed** *the experiment.*
* Plural: *The researchers* **have completed** *the experiment.*

### Past Perfect:
Describes an action completed before another past event.
* Singular: *The researcher* **had completed** *the experiment.*
* Plural: *The researchers* **had completed** *the experiment.*

Notice that **had** is identical for both singular and plural subjects!`
    },
    {
      id: 'tb2-c8',
      title: '36. Progressive Tenses',
      fullText: `Progressive tenses express an ongoing action using **be + present participle (-ing)**.

### Present Progressive:
* *The researcher* **is analyzing** *the data.* (singular)
* *The researchers* **are analyzing** *the data.* (plural)

### Past Progressive:
* *The researcher* **was analyzing** *the data.* (singular)
* *The researchers* **were analyzing** *the data.* (plural)

The helping form of *be* carries the subject agreement.`
    },
    {
      id: 'tb2-c9',
      title: '37. Auxiliary Verbs and Main Verb Agreement',
      fullText: `When a verb phrase contains auxiliary (helping) verbs, only the FIRST auxiliary verb changes form to match the subject.

### Example 1:
> The researcher **does** not analyze the data.
*(Auxiliary "does" carries singular agreement; main verb "analyze" stays base.)*

### Example 2:
> The researchers **have** been analyzing the data.
*(Auxiliary "have" agrees with plural "researchers"; participle "been analyzing" does not change.)*`
    },
    {
      id: 'tb2-c10',
      title: '38. Past Tense and Irregular Verbs',
      fullText: `Most simple past-tense verbs (e.g., *studied, analyzed, discovered*) do NOT change form between singular and plural subjects.

### Example:
> The researcher **studied** the results.
> The researchers **studied** the results.

Because simple past forms do not change, SAT questions testing agreement in past tense will focus on auxiliary verbs (*was/were, has/have*) rather than the main past verb.`
    },
    {
      id: 'tb2-c11',
      title: '39. "Was" vs. "Were"',
      fullText: `The past tense of *be* is the primary simple past verb that DOES distinguish between singular and plural.

### Singular (I, he, she, it):
> The researcher **was** prepared.
> The experiment **was** successful.

### Plural (we, you, they):
> The researchers **were** prepared.
> The experiments **were** successful.`
    },
    {
      id: 'tb2-c12',
      title: '40. Subjunctive "Were"',
      fullText: `Formal English uses **were** (instead of *was*) for hypothetical, imaginary, or contrary-to-fact conditions, even with a singular subject!

### Example:
> If the hypothesis **were** correct, the results would be different.
> If the researcher **were** available, we would ask for assistance.

This is the **subjunctive mood**. In hypothetical conditions (*If I were..., If it were...*), using "were" is grammatically required and is NOT an agreement error.`
    },
    {
      id: 'tb2-c13',
      title: '41. Conditional Structures',
      fullText: `Conditional sentences express relationships between conditions and results.

### Real or Possible Condition:
> If the results **are** consistent, the researchers **will publish** the findings.
*(Present tense in if-clause → future "will" in main clause)*

### Hypothetical Condition:
> If the results **were** consistent, the researchers **would publish** the findings.
*(Subjunctive/past in if-clause → conditional "would" in main clause)*`
    },
    {
      id: 'tb2-c14',
      title: '42. Tense Consistency',
      fullText: `A sentence must maintain a logical, consistent timeline across its verbs unless a shift in time is intended and justified.

### Correct:
> The researcher **analyzed** the samples and **recorded** the results.
*(Both actions occurred sequentially in the past.)*

### Problematic:
> The researcher **analyzed** the samples and **records** the results.
*(Unjustified shift from past to present!)*`
    },
    {
      id: 'tb2-c15',
      title: '43. Sequence of Events',
      fullText: `Verb tenses must accurately reflect the chronological sequence of events.

### Past Sequence:
> After the researchers **completed** the experiment, they **analyzed** the results.
*(Both events are in the past; completion preceded analysis.)*

### Future Sequence:
> After the researchers **complete** the experiment, they **will analyze** the results.
*(Future timeline: present tense in time clause, "will" in main clause.)*`
    },
    {
      id: 'tb2-c16',
      title: '44. Tense with "Before" and "After"',
      fullText: `Time subordinators (*before, after, when, once, while, until*) establish chronological relationships.

### Example with Past Perfect:
> After the researchers **had completed** the experiment, they **analyzed** the results.
*(Past perfect "had completed" explicitly marks the earlier past action.)*

### Simple Past Alternative:
> Before the researchers **began** the experiment, they **reviewed** the procedure.
*(When the time order is inherently clear, simple past for both verbs is completely sufficient. Do not force "had" where simple past is clear.)*`
    },
    {
      id: 'tb2-c17',
      title: '45. Present Perfect vs. Simple Past',
      fullText: `### Present Perfect (*has/have + past participle*):
Used for actions in the unspecified past that connect to or remain relevant in the present.
> The researchers **have completed** the experiment. *(Relevant now)*

### Simple Past:
Used for actions completed at a specific, finished time in the past (*yesterday, last year, in 2023, two days ago*).
> The researchers **completed** the experiment **yesterday**.`
    },
    {
      id: 'tb2-c18',
      title: '46. Pronoun Agreement Fundamentals',
      fullText: `A pronoun must agree in number and person with its antecedent (the noun it replaces).

### Singular:
> The researcher submitted **his or her** report.
> Each applicant submitted **their** application. *(Singular "their" is standard in modern English for unspecified gender)*

### Plural:
> The researchers submitted **their** reports.`
    },
    {
      id: 'tb2-c19',
      title: '47. Pronoun–Antecedent Clarity',
      fullText: `A pronoun MUST refer back to one clear, unambiguous noun.

### Problem (Ambiguous):
> The researcher spoke to the technician after **he** completed the experiment.
*(Does "he" refer to the researcher or the technician?)*

### Revision (Clear):
> After the researcher completed the experiment, **he** spoke to the technician.`
    },
    {
      id: 'tb2-c20',
      title: '48. Pronoun Number with Entities',
      fullText: `Singular entity nouns (universities, companies, countries, institutions) require singular pronouns (**its**), NOT plural pronouns (**their**).

### Correct:
> The university changed **its** policy.

### Incorrect:
> The university changed **their** policy.`
    },
    {
      id: 'tb2-c21',
      title: '49. Pronouns After "Each" and "Every"',
      fullText: `Phrases modifying singular antecedents (*each student, every applicant*) must maintain singular pronoun agreement.

### Formal Traditional:
> Every student must submit **his or her** application.

### Modern Standard:
> Every student must submit **their** application.

Main Rule: Be consistent within the sentence. Never switch randomly between singular and plural references.`
    },
    {
      id: 'tb2-c22',
      title: '50. Pronouns and Collective Nouns',
      fullText: `Match the pronoun to the exact grammatical subject.

### Group as a Unit (Singular):
> The committee reached **its** decision.

### Individual Members (Plural):
> The members of the committee submitted **their** reports.
*(Subject is "members" → plural "their".)*`
    },
    {
      id: 'tb2-c23',
      title: '51. "Its" vs. "It\'s"',
      fullText: `This is a high-frequency SAT error test!

* **Its** = Possessive form of "it" (NO apostrophe!).
  > The machine completed **its** cycle.
* **It's** = Contraction of "it is" or "it has".
  > **It's** (*It is*) difficult to interpret the results.

### Test:
Replace the word with "it is". If "it is" makes sense, use **it's**. If not, use **its**.`
    },
    {
      id: 'tb2-c24',
      title: '52. "Their", "There", and "They\'re"',
      fullText: `* **Their**: Possessive pronoun (*their findings*).
* **There**: Location or existential placeholder (*over there*, *there are*).
* **They're**: Contraction of "they are" (*They're reviewing the results*).`
    },
    {
      id: 'tb2-c25',
      title: '53. "Who" vs. "Whom"',
      fullText: `* **Who**: Subject pronoun (performs the action).
  > **Who** conducted the experiment? *(He conducted it → who)*
* **Whom**: Object pronoun (receives the action or follows a preposition).
  > **Whom** did the researchers interview? *(They interviewed him → whom)*`
    },
    {
      id: 'tb2-c26',
      title: '54. Possessive Pronouns Never Take Apostrophes',
      fullText: `Possessive pronouns (**mine, yours, his, hers, its, ours, theirs**) NEVER use apostrophes!

### Correct:
> The laboratory is **theirs**.

### Incorrect:
> The laboratory is **their's**.`
    },
    {
      id: 'tb2-c27',
      title: '55. Pronoun Case',
      fullText: `Pronouns change form according to their grammatical function:

* **Subject Case**: *I, he, she, we, they, who* (Perform actions)
* **Object Case**: *me, him, her, us, them, whom* (Receive actions or follow prepositions)

### Example:
> **She** and **I** conducted the experiment. *(Both are subjects)*
> The professor spoke with **her** and **me**. *(Both are objects of preposition "with")*`
    },
    {
      id: 'tb2-c28',
      title: '56. Compound Pronoun Traps',
      fullText: `To test compound pronouns (*the researcher and I* / *the researcher and me*), temporarily remove the extra noun!

### Example 1:
> The professor spoke with (the researcher and) **me**.
* Test: *The professor spoke with me.* → **me** is correct!

### Example 2:
> (The researcher and) **I** conducted the experiment.
* Test: *I conducted the experiment.* → **I** is correct!`
    },
    {
      id: 'tb2-c29',
      title: '57. Pronouns in Relative Clauses',
      fullText: `Relative pronouns connect relative clauses to their antecedents and preserve number agreement.

> The researcher who **conducted** the experiment published the results.
> The researchers who **conducted** the experiment published the results.`
    },
    {
      id: 'tb2-c30',
      title: '58. "Whose" vs. "Who\'s"',
      fullText: `* **Whose**: Possessive relative pronoun (*The researcher whose work...*).
* **Who\'s**: Contraction of "who is" or "who has" (*Who\'s responsible?*).`
    },
    {
      id: 'tb2-c31',
      title: '59. High-Frequency Agreement Patterns Summary',
      fullText: `Memorize these exact SAT agreement structures:
* *The number of applicants* **is** increasing.
* *A number of applicants* **are** waiting.
* *Each of the students* **is** prepared.
* *Neither of the options* **is** acceptable.
* *Everyone in the class* **is** ready.
* *There is* a problem / *There are* several problems.
* *The researcher does* not agree / *The researchers do* not agree.`
    },
    {
      id: 'tb2-c32',
      title: '60. The Three-Layer Grammar Check',
      fullText: `When evaluating any sentence on the SAT:
1. **Layer 1 — Subject**: What is the true head noun?
2. **Layer 2 — Verb**: Does the verb agree in number and express the logical tense?
3. **Layer 3 — Pronoun**: Does every pronoun clearly refer to an unambiguous antecedent in the correct case?`
    },
    {
      id: 'tb2-c33',
      title: '61. Common SAT Traps from Section 2',
      fullText: `* **Trap 1 — Auxiliary + incorrect main verb**: *does not analyzes...* → WRONG (*does not analyze*)
* **Trap 2 — Modal + incorrect verb**: *should reviews...* → WRONG (*should review*)
* **Trap 3 — Present perfect agreement**: *The researchers has completed...* → WRONG (*have completed*)
* **Trap 4 — Hypothetical "were"**: *If the researcher was available...* → WRONG (*If the researcher were available*)
* **Trap 5 — Pronoun case**: *spoke with the researcher and I...* → WRONG (*spoke with the researcher and me*)
* **Trap 6 — Possessive apostrophe**: *changed it's policy...* → WRONG (*changed its policy*)
* **Trap 7 — Pronoun ambiguity**: *told the technician that he was...* → WRONG`
    },
    {
      id: 'tb2-c34',
      title: '62. Section 2 Checkpoint',
      fullText: `Before moving forward, confirm that you can identify:
1. The true subject of a sentence.
2. Correct present-tense verb forms.
3. The role of auxiliary and modal verbs.
4. Differences between simple past, present perfect, and past perfect.
5. Proper use of hypothetical "were".
6. Clear pronoun antecedents, correct case, and possessive forms (*its vs it's*, *their/there/they're*, *who/whom*).`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Complex Agreement, Compound Structures, and Tricky Subject Constructions',
  description: 'Additive Phrases (Along with, As well as), Appositives, Correlative Agreement, Quantity Phrases, Gerund/Infinitive Subjects, and Clause Subjects',
  concepts: [
    {
      id: 'tb3-c1',
      title: '63. Why Advanced Agreement Questions Are Difficult',
      fullText: `The hardest SAT grammar questions do not test simple sentences like "The dog bark." Instead, they hide the subject inside a complex structure containing:
* Prepositional phrases
* Relative clauses
* Appositives & interrupting expressions
* Additive phrases (*along with, as well as, together with*)
* Quantities, fractions, and percentages
* Inverted structures & gerund/clause subjects

The master strategy remains:
> **Strip away everything that does not control the verb, then identify the true head noun.**`
    },
    {
      id: 'tb3-c2',
      title: '64. "Along With"',
      fullText: `A phrase beginning with **along with** is an additive phrase, NOT a conjunction. It does NOT make a singular subject plural!

### Example:
> The researcher, along with two assistants, **is** conducting the experiment.

* Core sentence: *The researcher is conducting the experiment.*
* Additive phrase: *along with two assistants*
* Verb: **is** (singular)`
    },
    {
      id: 'tb3-c3',
      title: '65. "Together With"',
      fullText: `The same rule applies to **together with**.

### Example:
> The director, together with the members of the committee, **has** approved the proposal.

* Head noun: **director** (singular)
* Additive phrase: *together with the members...*
* Verb: **has** (singular)`
    },
    {
      id: 'tb3-c4',
      title: '66. "As Well As"',
      fullText: `**As well as** creates the illusion of a compound subject, but grammatically it acts as a modifying phrase, NOT as "and".

### Correct:
> The professor, as well as the students, **was** surprised by the results.

### Incorrect:
> The professor, as well as the students, **were** surprised.

Core sentence: *The professor was surprised.*`
    },
    {
      id: 'tb3-c5',
      title: '67. "In Addition To"',
      fullText: `The same logic applies to **in addition to**.

### Example:
> The researcher, in addition to several assistants, **is** responsible for the project.

* Subject: **researcher** (singular)
* Verb: **is** (singular)`
    },
    {
      id: 'tb3-c6',
      title: '68. "Including"',
      fullText: `**Including** introduces a nonessential prepositional phrase.

### Example:
> The collection, including several rare manuscripts, **is** valuable.

* Core sentence: *The collection is valuable.*
* Plural noun inside phrase (*manuscripts*) does NOT control the verb!`
    },
    {
      id: 'tb3-c7',
      title: '69. Appositives',
      fullText: `An **appositive** is a noun or noun phrase that renames or describes an adjacent noun. It does NOT create a compound subject!

### Example:
> Dr. Ahmed, the lead researcher, **is** presenting the findings.

* Appositive: *the lead researcher* (renames Dr. Ahmed)
* Core sentence: *Dr. Ahmed is presenting the findings.*`
    },
    {
      id: 'tb3-c8',
      title: '70. Appositives with Plural Subjects',
      fullText: `### Example:
> The researchers, leaders in the field, **have** published their findings.

* Subject: **researchers** (plural)
* Appositive: *leaders in the field*
* Verb: **have** (plural)`
    },
    {
      id: 'tb3-c9',
      title: '71. Appositives Without Commas (Restrictive)',
      fullText: `When an appositive is essential to identify the noun, no commas are used.

### Example:
> The scientist Marie Curie **pioneered** important research.

* Head noun: **scientist**
* Essential appositive: *Marie Curie*
* Verb: **pioneered**`
    },
    {
      id: 'tb3-c10',
      title: '72. "Not Only... But Also" Agreement',
      fullText: `When **not only A but also B** connects two subjects, the verb agrees with the subject **closest to the verb** (Subject B).

### Example 1:
> Not only the students but also the teacher **was** prepared.
*(Teacher is singular → was)*

### Example 2:
> Not only the teacher but also the students **were** prepared.
*(Students is plural → were)*`
    },
    {
      id: 'tb3-c11',
      title: '73. "Both... And"',
      fullText: `**Both A and B** ALWAYS creates a plural subject and requires a **plural verb**.

### Correct:
> Both the researcher and the technician **are** present.

### Incorrect:
> Both the researcher and the technician **is** present.`
    },
    {
      id: 'tb3-c12',
      title: '74–75. "Either... Or" & "Neither... Nor"',
      fullText: `With **either... or** and **neither... nor**, agreement follows the nearer subject.

### Example 1:
> Either the researcher or the technicians **are** responsible. *(technicians → are)*

### Example 2:
> Either the technicians or the researcher **is** responsible. *(researcher → is)*

### Example 3:
> Neither the students nor the professor **is** available. *(professor → is)*`
    },
    {
      id: 'tb3-c13',
      title: '76. "Not X But Y" Structures',
      fullText: `In **not X but Y** constructions, the verb agrees with Y (the positive subject controlling the action).

### Example:
> It is not the students but the teacher who **is** responsible.
*(The relative clause "who is responsible" modifies teacher.)*`
    },
    {
      id: 'tb3-c14',
      title: '77–82. Quantity Expressions (Some of, All of, Most of, None of, A lot of)',
      fullText: `In quantity expressions (*half of, some of, all of, most of, none of, a lot of, plenty of*), the verb agrees with the noun inside the "of" prepositional phrase!

### Plural Noun → Plural Verb:
> Some of the students **are** absent.
> All of the researchers **are** present.
> Most of the students **are** prepared.
> None of the students **are** available.
> A lot of researchers **are** participating.

### Singular / Noncount Noun → Singular Verb:
> Some of the information **is** inaccurate.
> All of the equipment **is** ready.
> Most of the research **is** complete.
> None of the information **is** available.
> A lot of research **is** required.`
    },
    {
      id: 'tb3-c15',
      title: '83–85. Majority, Fractions, and Percentages',
      fullText: `Fractions, percentages, and "a majority of" follow the same quantity rule:

### Fractions:
* *One-half of the students* **are** present. (*students* → plural)
* *One-half of the equipment* **is** damaged. (*equipment* → singular/noncount)

### Percentages:
* *Fifty percent of the students* **are** participating. (*students* → plural)
* *Fifty percent of the population* **is** vaccinated. (*population* → singular)

### A Majority of:
* *A majority of the students* **are** prepared.
* *A majority of the committee* **is** opposed. *(When referring to a single group entity)*`
    },
    {
      id: 'tb3-c16',
      title: '86. "One of the" + Plural Noun',
      fullText: `In the construction **one of the + plural noun**, the subject is **one** (singular).

### Correct:
> One of the researchers **is** presenting the results.

### Incorrect:
> One of the researchers **are** presenting the results.

The plural noun *researchers* is inside the prepositional phrase and does NOT control the main verb!`
    },
    {
      id: 'tb3-c17',
      title: '87–88. "One of the people who..." vs. "The only one who..."',
      fullText: `This distinction is an advanced SAT agreement favorite!

### Pattern 1: "One of the [plural noun] who [VERB]"
The relative clause modifies the **plural noun**. Therefore, the relative clause verb is **PLURAL**.
> She is one of the researchers who **study** climate change.
*(Meaning: Multiple researchers study climate change, and she is one of them. "who" → researchers → study)*

### Pattern 2: "The ONLY one of the [plural noun] who [VERB]"
The relative clause modifies **the only one**. Therefore, the relative clause verb is **SINGULAR**.
> She is the only one of the researchers who **studies** climate change.
*(Meaning: Only ONE person studies climate change. "who" → the only one → studies)*`
    },
    {
      id: 'tb3-c18',
      title: '89–90. Gerunds and Gerund Phrases as Subjects',
      fullText: `A **gerund** is an *-ing* verb form functioning as a noun. A gerund or gerund phrase acting as a subject is ALWAYS **singular**.

### Example 1:
> Studying grammar **improves** writing. *(Subject: Studying grammar → singular)*

### Example 2:
> Analyzing large datasets **requires** patience.
*(The plural noun "datasets" is the object of the gerund, NOT the subject! The subject is the entire gerund action "Analyzing large datasets" → singular "requires".)*`
    },
    {
      id: 'tb3-c19',
      title: '91. Infinitive Phrases as Subjects',
      fullText: `An **infinitive phrase** (*to + verb*) functioning as a subject is also ALWAYS **singular**.

### Example:
> To understand the results **requires** careful analysis.
*(Subject: To understand the results → singular "requires".)*`
    },
    {
      id: 'tb3-c20',
      title: '92–94. Clauses as Subjects ("What" Clauses)',
      fullText: `An entire noun clause can function as a **singular subject**.

### Example 1:
> [What the researchers discovered] **was** surprising.
*(Subject: the entire clause "What the researchers discovered" → singular "was".)*

### Example 2:
> [What the researchers need] **is** additional evidence.
*(Do not choose "are" merely because "researchers" is plural or "evidence" follows; the clause as a whole is singular.)*`
    },
    {
      id: 'tb3-c21',
      title: '95–98. Questions with Long Subjects & "Each / One / Some of which"',
      fullText: `### Questions:
> Which of the proposed methods **is** most effective? *(Subject: Which → is)*
> Which methods **are** most effective? *(Subject: methods → are)*

### Relative Clauses with Quantities:
* *...several methods, each of which* **was** *tested.* (*each* → singular)
* *...several methods, one of which* **was** *effective.* (*one* → singular)
* *...several methods, some of which* **were** *effective.* (*some* → plural)`
    },
    {
      id: 'tb3-c22',
      title: '99–100. Titles and Names of Organizations',
      fullText: `Titles of artistic works, books, movies, and names of institutions/countries are treated as **singular**, even if they contain plural words.

### Example 1:
> *Great Expectations* **is** a famous novel.

### Example 2:
> *The Chronicles of Narnia* **is** a series of books.

### Example 3:
> The United States **is** a federal republic.
> The World Health Organization **is** headquartered in Geneva.`
    },
    {
      id: 'tb3-c23',
      title: '101–104. Uncountable / Noncount Nouns (Information, Research, Evidence, Data)',
      fullText: `Uncountable nouns represent mass concepts and take **singular verbs**.

Common noncount nouns:
> **information, research, equipment, advice, evidence, furniture, knowledge, traffic, progress**

### Examples:
> The information **is** useful. *(NOT "The information are...")*
> The research **is** convincing. *(For plural, use "The studies were...")*
> The evidence **suggests** that the hypothesis is correct.

### "Data":
* Formal scientific usage: *The data* **are** *consistent.* (plural)
* Common modern usage: *The data* **is** *available.* (mass noun)`
    },
    {
      id: 'tb3-c24',
      title: '105–107. Singular Nouns in -s, Plural-Only Nouns, and "A Pair of"',
      fullText: `### Singular Nouns Ending in -s:
Subjects like *news, mathematics, physics, economics, politics* take **singular verbs**.
> The news **is** encouraging.
> Mathematics **is** required.

### Plural-Only Nouns:
* *The scissors* **are** *on the table.*
* *The trousers* **are** *clean.*

### "A Pair of":
When preceded by "a pair of", the head noun becomes **pair** (singular).
> A pair of scissors **is** on the table.
> Two pairs of shoes **are** missing.`
    },
    {
      id: 'tb3-c25',
      title: '108–109. Compound Nouns & Group Expressions',
      fullText: `### Compound Nouns:
> The research team **is** meeting today. *(head noun: team → is)*
> The research teams **are** meeting today. *(head noun: teams → are)*

### Group Expressions:
> The majority **has** reached a decision. *(unit → singular)*
> The majority of the students **have** submitted their forms. *(members → plural)*`
    },
    {
      id: 'tb3-c26',
      title: '110–111. Agreement Decision Tree',
      fullText: `When facing a difficult agreement question, run this 6-question decision tree:

1. **Q1: Is there a clear subject?** Identify it.
2. **Q2: Is the subject separated from the verb?** Strip away prepositional phrases, relative clauses, appositives.
3. **Q3: Is the subject compound?** Look for *and* (plural), *both...and* (plural), *or/nor* (nearer subject).
4. **Q4: Is the subject a quantity?** Look at the noun in the "of" phrase for *some, all, most, none, half, %*.
5. **Q5: Is the subject a phrase or clause?** Gerunds, infinitives, and noun clauses are singular.
6. **Q6: Is the sentence inverted?** Check *there is/are*, *here is/are*, or location phrase first.`
    },
    {
      id: 'tb3-c27',
      title: '116. Section 3 Summary & Checkpoint',
      fullText: `### Key Principles:
* Additive phrases (*along with, as well as*) do NOT make a singular subject plural.
* *One of the [plural noun] who [VERB]* takes a PLURAL verb.
* *The ONLY one of the [plural noun] who [VERB]* takes a SINGULAR verb.
* Gerund phrases, infinitive phrases, and noun clauses take SINGULAR verbs.
* Quantity phrases (*some of, all of, half of, % of*) look at the noun after "of".
* Noncount nouns (*information, research, equipment, evidence*) take SINGULAR verbs.

Verify you can explain why each of these is correct:
1. *The researcher, along with two assistants,* **is** *working.*
2. *A number of researchers* **are** *working.*
3. *The number of researchers* **is** *increasing.*
4. *Each of the researchers* **has** *completed the study.*
5. *One of the researchers who* **study** *climate change...*
6. *The only one of the researchers who* **studies** *climate change...*`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Verb Tense, Sequence, Mood, and Parallel Verb Structures',
  description: 'Timeline Relationships, Sequence of Events, Future Time Clauses, Subjunctive Mood, Mandative Subjunctive, and Parallel Verb Structures',
  concepts: [
    {
      id: 'tb4-c1',
      title: '117. Verb Tense Is About Time and Relationship',
      fullText: `Subject-verb agreement answers:
> **Does the verb agree in number with the subject?**

Verb tense answers:
> **Does the verb correctly express WHEN the action occurs and its timing relationship to other actions?**

A sentence can have flawless subject-verb agreement and still fail due to an incorrect tense.

### Example:
> Yesterday, the researchers **analyze** the results. → WRONG!
*(Subject "researchers" and verb "analyze" agree in plural, but "yesterday" requires simple past "analyzed".)*`
    },
    {
      id: 'tb4-c2',
      title: '118–121. Simple Tenses (Present, Past, Future)',
      fullText: `### Simple Present:
Expresses permanent facts, habits, repeated actions, general truths, and scientific laws.
> The Earth **revolves** around the Sun.
> The laboratory **conducts** experiments every Friday.

### Simple Past:
Describes an action completed at a specific, finished time in the past.
> The researchers **completed** the experiment **yesterday**.
> The university **opened** the facility **in 2018**.

### Simple Future:
Describes an action expected to occur later.
> The researchers **will publish** the findings **next month**.`
    },
    {
      id: 'tb4-c3',
      title: '122–125. Perfect Tenses (Present Perfect vs. Simple Past)',
      fullText: `### Present Perfect (*has/have + past participle*):
Connects a past action to the present situation, or describes an action occurring at an unspecified past time.
> Researchers **have discovered** a new treatment. *(Unspecified time, current relevance)*
> The laboratory **has operated** since 1998. *(Action started in past and continues now)*

### Present Perfect Signal Words:
> **since, for [duration extending to present], so far, up to now, recently**

### Simple Past Signal Words:
> **yesterday, last year, in 2020, two days ago, initially**`
    },
    {
      id: 'tb4-c4',
      title: '126–128. Past Perfect (*had + past participle*)',
      fullText: `Past perfect describes an action completed **BEFORE another past action**.

### Example:
> By the time the researchers arrived, the technician **had already prepared** the equipment.

* Action 1 (Earlier past): Technician prepared equipment → **had prepared**
* Action 2 (Later past): Researchers arrived → **arrived**

### Core Rule:
Do not use past perfect simply because an event happened a long time ago! Use past perfect ONLY when the sentence needs to establish that one past event happened prior to another past event.`
    },
    {
      id: 'tb4-c5',
      title: '129–130. Future Perfect (*will have + past participle*)',
      fullText: `Future perfect describes an action that will be completed **BEFORE a specified future time or deadline**.

### Example:
> By June, the researchers **will have completed** the study.

Signal word:
> **by + future time expression** (*by next year, by tomorrow, by 2030*)`
    },
    {
      id: 'tb4-c6',
      title: '131–133. Progressive Tenses & "While"',
      fullText: `Progressive tenses emphasize an action in progress at a specific moment (*be + -ing*).

### Simple Past vs. Past Progressive:
> While the researchers **were analyzing** the data, the equipment **failed**.

* Ongoing background action: *were analyzing* (Past progressive)
* Intercepting finished action: *failed* (Simple past)`
    },
    {
      id: 'tb4-c7',
      title: '134–136. Future Time Clauses (No "Will" in Time Clauses!)',
      fullText: `This is a major SAT grammar rule! In dependent time clauses introduced by *when, after, before, once, as soon as, until*, use the **PRESENT tense** to refer to future time, NOT "will".

### Correct:
> When the researchers **arrive**, we **will begin** the experiment.
> After the scientists **finish** the report, they **will present** the data.

### Incorrect:
> When the researchers **will arrive**, we will begin the experiment.`
    },
    {
      id: 'tb4-c8',
      title: '137–141. Conditional Sentence Patterns',
      fullText: `Master these three standard conditional structures:

### 1. First Conditional (Real Future Possibility):
> **If + Present Tense, Will + Base Verb**
> *If the results* **are** *consistent, the team* **will publish** *the findings.*

### 2. Second Conditional (Hypothetical Present/Future):
> **If + Past Tense (or "were"), Would + Base Verb**
> *If the results* **were** *different, the team* **would repeat** *the study.*

### 3. Third Conditional (Hypothetical Past):
> **If + Past Perfect, Would Have + Past Participle**
> *If the team* **had repeated** *the study, they* **would have obtained** *more data.*

Do not mix conditional forms randomly!`
    },
    {
      id: 'tb4-c9',
      title: '142–145. Mandative Subjunctive ("Require That", "Recommend That")',
      fullText: `After verbs or expressions expressing demand, requirement, recommendation, or request followed by **that**:
> **insist that, recommend that, require that, demand that, request that, it is essential that**

The verb in the *that*-clause MUST be in the **bare base form** (without *-s* or *-ed*), regardless of whether the subject is singular!

### Example 1:
> The professor recommended that the student **revise** the paper.
*(NOT "revises" or "revised"!)*

### Example 2:
> The university requires that every applicant **submit** the form.
*(NOT "submits"!)*

### Example 3:
> The committee insisted that the researcher **be** present.
*(NOT "is" or "was"!)*`
    },
    {
      id: 'tb4-c10',
      title: '146–150. Parallel Verb Structures & Parallel Infinitives/Gerunds',
      fullText: `When multiple verbs are connected in a series by conjunctions (*and, or, but*), they MUST use parallel grammatical forms.

### Parallel Finite Verbs:
> The researchers **collected** the samples, **analyzed** the data, and **published** the results. *(All simple past)*

### Parallel Infinitives:
> The program aims **to educate** students, **to develop** their skills, and **to prepare** them.
*(Or omitting repeated "to": to educate, develop, and prepare)*

### Parallel Gerunds:
> The course involves **reading** articles, **analyzing** arguments, and **writing** essays.`
    },
    {
      id: 'tb4-c11',
      title: '151–154. Compound Predicates vs. Compound Subjects',
      fullText: `A **compound predicate** contains multiple verbs controlled by ONE single subject.

### Example:
> The researcher **analyzed** the data and **prepared** the report.

* Subject: *researcher* (singular)
* Verbs: *analyzed* and *prepared*

The presence of *and* between the two verbs does NOT make the subject plural!`
    },
    {
      id: 'tb4-c12',
      title: '155–158. Participial Modifiers and Dangling Modifiers',
      fullText: `An introductory participial phrase (*Having completed..., Studying...*) MUST logically describe the grammatical subject that immediately follows the comma.

### Correct:
> Having completed the experiment, the **researchers** analyzed the results.
*(The researchers completed the experiment.)*

### Incorrect (Dangling Modifier):
> Having completed the experiment, the **results** were analyzed by the researchers.
*(Illogical: The results did NOT complete the experiment!)*`
    },
    {
      id: 'tb4-c13',
      title: '159–160. Section 4 Summary & Checkpoint',
      fullText: `### Core Rules:
1. Match tense to the timeline and verb form to the grammatical structure.
2. In future time clauses (*when, after, before*), use present tense, NOT "will".
3. Use bare base verbs after mandative subjunctive verbs (*recommend that he submit*).
4. Keep verbs in a list strictly parallel (*collected, analyzed, and published*).
5. Ensure introductory participial modifiers attach to a logical subject.`
    }
  ]
};
