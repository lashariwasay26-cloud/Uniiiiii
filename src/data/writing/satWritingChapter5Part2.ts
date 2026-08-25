import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_6: WritingTheoryBlock = {
  blockNumber: 6,
  title: 'Diction: Choosing the Word That Fits the Meaning and Context',
  description: 'Core Concept → Denotation vs. Connotation → Formality → Evidentiary Word Strength',
  concepts: [
    {
      id: 'ch5-b6-c1',
      title: '1. CORE CONCEPT: DICTION',
      fullText: `**Diction** refers to the deliberate choice of words. Two words can have similar dictionary meanings but differ in precision, tone, intensity, formality, and emotional association.

Strong editing requires choosing the word that fits **both meaning and context**.`
    },
    {
      id: 'ch5-b6-c2',
      title: '2. DENOTATION VS. CONNOTATION & FORMALITY',
      fullText: `**Denotation** is the dictionary definition. **Connotation** is the emotional implication:
- *confident* (positive) vs *arrogant* (negative)
- *determined* (positive) vs *stubborn* (negative)

### Formality
Academic writing favors formal yet direct diction:
- *found out* → *determined*
- Overformal jargon like *endeavored to ascertain the efficacy of the methodology* should be simplified to *sought to determine whether the method was effective*.`
    },
    {
      id: 'ch5-b6-c3',
      title: '3. WORD STRENGTH & EVIDENTIARY SUPPORT',
      fullText: `Some words make stronger claims than others:
- **tentative**: *suggests, indicates, may indicate*
- **moderate**: *demonstrates, supports*
- **strong**: *proves, establishes beyond doubt, guarantees*

Unless the evidence genuinely establishes the conclusion beyond reasonable doubt, "prove" overstates the evidence. Cautious wording is often more accurate.`
    },
    {
      id: 'ch5-b6-c4',
      title: '4. MODALITY, QUANTIFIERS & ABSOLUTE LANGUAGE',
      fullText: `Modals (*may, might, could, can, likely, certainly*) control certainty.
Quantifiers (*some, most, many, few, a few*) control numerical scope:
- *some* = at least a portion
- *most* = more than half
- *many* = a large number (not necessarily >50%)
- *18%* = a minority / few / some (NOT "most")

Absolute words (*always, never, all, none, completely, impossible*) require absolute proof.`
    },
    {
      id: 'ch5-b6-c5',
      title: '5. BLOCK 6 TECHNIQUE: THE WORD-SWAP TEST',
      fullText: `When two answers appear synonymous:
1. Define each word.
2. Identify its strength, tone, and grammatical use.
3. Ask whether it makes a stronger or weaker claim than supported.
4. Choose only if it matches the sentence's exact meaning.

*Rule:* Never make a claim stronger or weaker simply because another word sounds more impressive.`
    }
  ]
};

export const THEORY_BLOCK_7: WritingTheoryBlock = {
  blockNumber: 7,
  title: 'Logical Comparisons and Modifier Scope',
  description: 'Core Concept → Same Category Test → Comparative Substitutes → Modifier Scope',
  concepts: [
    {
      id: 'ch5-b7-c1',
      title: '1. CORE CONCEPT: COMPARE LIKE WITH LIKE',
      fullText: `A comparison is logically sound only when the things being compared belong to the same category.

### Correct
> The acceptance rate at University A is lower than **that at University B**. (Acceptance rate ↔ Acceptance rate)

### Weak
> The acceptance rate at University A is lower than **University B**. (Acceptance rate ↔ University = Illogical comparison)`
    },
    {
      id: 'ch5-b7-c2',
      title: '2. COMPARING PEOPLE, UNIVERSITIES & ACTIONS',
      fullText: `- **People**: *Ali's SAT score was higher than Ahmed's.* (Possessive represents omitted noun *score*.)
- **Universities**: *The engineering program at A is stronger than that at B* OR *University A's engineering program is stronger than University B's.*
- **Actions**: *The researchers spent more time analyzing the data than collecting it.*`
    },
    {
      id: 'ch5-b7-c3',
      title: '3. "THAT" AND "THOSE" AS COMPARATIVE SUBSTITUTES',
      fullText: `To prevent repetitive nouns in comparisons:
- Use **that at / that of** for singular nouns (*tuition* → *that at University B*).
- Use **those at / those of** for plural nouns (*facilities* → *those at University B*).`
    },
    {
      id: 'ch5-b7-c4',
      title: '4. SCOPE & POSITION OF MODIFIERS',
      fullText: `A modifier's **scope** is the part of the sentence affected by it (*only, almost, nearly, even, just, exactly, primarily*):
- *Only researchers completed the survey.* (Nobody else completed it.)
- *Researchers only completed the survey.* (They completed it but did nothing else.)
- *Researchers completed only the survey.* (Restricts what was completed.)

*Almost:*
- *Almost all students passed.* (Nearly everyone passed.)
- *All students almost passed.* (Everyone came close to passing but failed.)`
    },
    {
      id: 'ch5-b7-c5',
      title: '5. BLOCK 7 TECHNIQUE: THE COMPARISON MIRROR',
      fullText: `For every comparison, mentally rewrite it as:
> **A compared with B**

Then identify what A and B represent.
If you get *A's tuition ↔ B*, the comparison needs revision.`
    }
  ]
};

export const THEORY_BLOCK_8: WritingTheoryBlock = {
  blockNumber: 8,
  title: 'Eliminating Redundancy Without Removing Meaning',
  description: 'Core Concept → Redundant Pairs → Pleonasm → Noun to Verb Compression → Deletion Test',
  concepts: [
    {
      id: 'ch5-b8-c1',
      title: '1. CORE CONCEPT: REDUNDANCY',
      fullText: `A sentence is redundant when it expresses the same information more than once without adding meaning.

Example:
> *The two methods were both equally similar.* → *The two methods were similar.*`
    },
    {
      id: 'ch5-b8-c2',
      title: '2. COMMON REDUNDANT PAIRS',
      fullText: `Watch for semantic overlap:
- *future plans* → *plans*
- *past history* → *history*
- *basic fundamentals* → *fundamentals*
- *final conclusion* → *conclusion*
- *advance planning* → *planning*
- *unexpected surprise* → *surprise*
- *completely eliminate* → *eliminate*
- *repeat again* → *repeat*`
    },
    {
      id: 'ch5-b8-c3',
      title: '3. NOUN → VERB COMPRESSION',
      fullText: `Compress wordy noun phrases into direct verbs:
- *made a decision to* → *decided to*
- *conducted an evaluation of* → *evaluated*
- *conducted an analysis of* → *analyzed*
- *made an improvement to* → *improved*
- *provided an explanation of* → *explained*`
    },
    {
      id: 'ch5-b8-c4',
      title: '4. REMOVING EMPTY OPENINGS & WORDY PHRASES',
      fullText: `Replace empty intros and wordy connectors:
- *It is important to note that the method failed.* → *The method failed.*
- *due to the fact that* → *because*
- *in order to* → *to*
- *at this point in time* → *currently*
- *a number of* → *several* / *many*
- *the reason why* → *the reason*
- *in the event that* → *if*
- *has the ability to* / *is capable of* → *can*`
    },
    {
      id: 'ch5-b8-c5',
      title: '5. BLOCK 8 TECHNIQUE: THE DELETION TEST',
      fullText: `For each questionable word or phrase:
1. Delete it.
2. Reread the sentence.
3. Ask: *Did the meaning change?*
   - If no: the word is redundant.
   - If yes: restore it.
4. Verify if the removed word added precision, emphasis, or necessary qualification.`
    }
  ]
};

export const THEORY_BLOCK_9: WritingTheoryBlock = {
  blockNumber: 9,
  title: 'Sentence Boundaries, Coordination, and Subordination',
  description: 'Core Concept → Fragments, Run-ons & Comma Splices → Transition Connectors → Clause Mapping',
  concepts: [
    {
      id: 'ch5-b9-c1',
      title: '1. CORE CONCEPT: SENTENCE BOUNDARIES',
      fullText: `A sentence must clearly establish where one independent thought ends and another begins.

Three major boundary errors:
1. **Fragment**: Incomplete thought (*Because the researchers needed more evidence.*)
2. **Run-on**: Two independent clauses fused without punctuation (*The researchers analyzed the data they published the results.*)
3. **Comma Splice**: Two independent clauses joined only with a comma (*The researchers analyzed the data, they published the results.*)`
    },
    {
      id: 'ch5-b9-c2',
      title: '2. FIXING SENTENCE BOUNDARY ERRORS',
      fullText: `To fix a comma splice or run-on:
- **Period**: *The researchers analyzed the data. They published the results.*
- **Semicolon**: *The researchers analyzed the data; they published the results.*
- **Comma + FANBOYS**: *The researchers analyzed the data, and they published the results.*
- **Subordination**: *After the researchers analyzed the data, they published the results.*`
    },
    {
      id: 'ch5-b9-c3',
      title: '3. SEMICOLONS & TRANSITIONAL EXPRESSIONS',
      fullText: `Words like *however, therefore, nevertheless, consequently, moreover* are transitional adverbs, NOT coordinating conjunctions.

Correct:
> *The method was inexpensive; however, it was unreliable.*

Incorrect (Comma Splice):
> *The method was inexpensive, however, it was unreliable.*`
    },
    {
      id: 'ch5-b9-c4',
      title: '4. SUBORDINATION & LOGICAL PRECISION',
      fullText: `Subordination communicates explicit relationships:
- *because* = cause (*Because the equipment failed, the experiment was delayed.*)
- *although* = contrast (*Although the method was inexpensive, it was unreliable.*)
- *if* = condition (*If the equipment fails, we will postpone.*)
- *after / before* = sequence (*After completing the experiment, they analyzed results.*)

Do not infer causation from simple coordination (*and*).`
    },
    {
      id: 'ch5-b9-c5',
      title: '5. BLOCK 9 TECHNIQUE: THE CLAUSE-MAPPING METHOD',
      fullText: `1. Find every subject + verb pair.
2. Mark each clause: **I** (Independent) or **D** (Dependent).
3. Check boundaries:
   - **I + I** → Period, Semicolon, or Comma + FANBOYS.
   - **D + I** → Dependent clause + Comma + Independent clause.`
    }
  ]
};

export const THEORY_BLOCK_10: WritingTheoryBlock = {
  blockNumber: 10,
  title: 'Punctuation as a Tool for Meaning and Structure',
  description: 'Core Concept → Commas, Semicolons, Colons & Dashes → Apostrophes → Punctuation Map',
  concepts: [
    {
      id: 'ch5-b10-c1',
      title: '1. CORE CONCEPT: PUNCTUATION IS STRUCTURE',
      fullText: `Punctuation is not decoration. It tells the reader where ideas separate, which information is essential, which is additional, and how clauses relate.`
    },
    {
      id: 'ch5-b10-c2',
      title: '2. COMMA RULES & RESTRICTIONS',
      fullText: `### Rules
- Separate introductory dependent clauses/phrases from main clause.
- Enclose nonessential information (*The university, which was founded in 1850, expanded...*).
- Separate items in a series (*cost, accuracy, reliability, and speed*).

### Restrictions
- Do NOT place a comma between subject and verb.
- Do NOT place a comma before FANBOYS in a simple compound predicate (*collected the data and analyzed the results*).
- Do NOT enclose essential clauses (*Universities that offer financial aid attract...*).`
    },
    {
      id: 'ch5-b10-c3',
      title: '3. SEMICOLONS, COLONS & DASHES',
      fullText: `- **Semicolon**: Joins closely related independent clauses OR separates complex list items containing internal commas (*Lahore, Pakistan; Dhaka, Bangladesh; and Kathmandu, Nepal*).
- **Colon**: Introduces a list, explanation, or elaboration. Lead-in MUST be an independent clause (*The study measured three variables: cost, accuracy, and speed.*).
- **Em Dash**: Creates emphatic interruption or explanation.`
    },
    {
      id: 'ch5-b10-c4',
      title: '4. APOSTROPHES: ITS VS IT\'S & WHOSE VS WHO\'S',
      fullText: `- **Singular Possession**: *the student's application*
- **Plural Possession**: *the students' applications*
- **its**: Possessive (*The university changed its policy.*)
- **it's**: Contraction of *it is / it has* (*It's important to verify.*)
- **whose**: Possessive (*The student whose application was accepted...*)
- **who's**: Contraction of *who is / who has*`
    },
    {
      id: 'ch5-b10-c5',
      title: '5. BLOCK 10 TECHNIQUE: THE PUNCTUATION MAP',
      fullText: `1. Identify every independent clause.
2. Identify introductory and dependent material.
3. Identify essential vs nonessential information.
4. Determine whether punctuation needs to separate, connect, introduce, or parenthetically interrupt.
5. Choose the exact mark that performs that function.`
    }
  ]
};
