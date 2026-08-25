import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: "Master Principle & Sentence Foundations",
  description: 'Master decision tree principle, definition of complete sentences, independent clause criteria, dependent clause indicators, and sentence fragment diagnostics.',
  concepts: [
    {
      id: 'master-principle',
      title: "Master Principle & Chapter Purpose",
      sectionNumber: 'Intro',
      fullText: `PURPOSE OF THIS CHAPTER:
A large class of SAT Writing questions tests whether ideas have been connected correctly.
The challenge is not simply knowing what a comma, period, or semicolon is.
The real skill is determining:
1. What kind of grammatical unit appears before the punctuation?
2. What kind of grammatical unit appears after it?
3. Are the two ideas independent or dependent?
4. What relationship exists between them?
5. Which punctuation or connector can legally join them?
6. Which answer choices can be eliminated immediately?

The most important habit in this chapter is:
DO NOT CHOOSE PUNCTUATION BY HOW THE SENTENCE "SOUNDS."
Instead, diagnose the grammatical structure.

MASTER PRINCIPLE:
Before choosing an answer, identify the structures on BOTH sides of the tested location.
Ask:
"What is immediately before the blank?"
"What is immediately after the blank?"
Then determine whether each side is capable of standing as a complete sentence. This single habit prevents many of the most common sentence-boundary errors.`,
      rules: [
        'Do not choose punctuation by how the sentence sounds. Diagnose the grammatical structure.',
        'Identify the structures on BOTH sides of the tested location before choosing an answer.',
        'Ask: What is immediately before the blank? What is immediately after the blank?',
        'Determine whether each side is capable of standing as a complete sentence.'
      ],
      examples: [
        { label: 'MASTER PRINCIPLE DIAGNOSTIC', sentence: 'What is before the blank? (Clause 1) | What is after the blank? (Clause 2)', isCorrect: true, explanation: 'Always identify the grammatical unit on BOTH sides before selecting a connector or punctuation mark.' },
        { label: 'DIAGNOSTIC TEST EXAMPLE', sentence: 'The astronomer examined the data ___ the team discovered an unexpected pattern.', isCorrect: true, explanation: 'Left side = Independent clause ("The astronomer examined the data"). Right side = Independent clause ("the team discovered..."). Therefore, a comma alone is illegal; a period, semicolon, or comma + FANBOYS is required.' }
      ]
    },
    {
      id: 'concept-1',
      title: "What is a Complete Sentence?",
      sectionNumber: 1,
      fullText: `A complete sentence expresses a complete grammatical thought.
For the SAT, the most useful practical test is whether the portion being considered contains:
• a subject
• a properly functioning verb
• a complete thought

A sentence can be short:
"The scientist arrived."
Or long:
"After several months of testing, the scientist from the university laboratory finally arrived at the conference."

Length does not determine whether something is a sentence.
A very long group of words can still be incomplete.
A very short group of words can be complete.

THE CORE TEST:
When you see a possible sentence boundary, temporarily ignore extra descriptive material. Find the core subject and verb.
Example:
"The researchers, after months of careful experimentation, published their findings."
Core: "The researchers published."
That is a complete thought. Therefore, the original sentence contains an independent clause.

IMPORTANT DISTINCTION:
A phrase is not necessarily a clause.
A clause contains a subject and a verb.
A phrase does not contain a complete subject-verb structure.
Example:
"After the experiment" -> This is a phrase. It does not contain a subject performing a verb.
Example:
"After the researchers completed the experiment" -> This contains a subject and a verb (subject = researchers, verb = completed). But it still does NOT necessarily form an independent sentence, because "after" makes the clause dependent.

RECOGNITION TECHNIQUE:
When you encounter a boundary question:
STEP 1: Find the main verb.
STEP 2: Find the subject performing that verb.
STEP 3: Temporarily remove introductory and descriptive material.
STEP 4: Ask whether the remaining structure expresses a complete thought.

EXAMPLE 1:
"The astronomer examined the data." -> Complete sentence? YES. (Subject: the astronomer; Verb: examined; Object: the data. The thought is complete.)

EXAMPLE 2:
"Because the astronomer examined the data" -> Complete sentence? NO. (Contains subject astronomer and verb examined, but "because" makes the clause dependent. The reader expects another idea explaining the consequence: "Because the astronomer examined the data, the team discovered an unexpected pattern.")

EXAMPLE 3:
"The astronomer examining the data" -> Complete sentence? NO. (There is no finite main verb forming a complete independent thought. This is a fragment.)

SAT TRAP:
Do not assume: "Subject + verb = complete sentence."
That is often useful, but it is not sufficient. Words such as because, although, while, when, if, unless, since, before, after, which, who, that can make a clause dependent or change how it functions. Always inspect the entire grammatical structure.

ELIMINATION TECHNIQUE:
If one answer creates a complete sentence and another creates a fragment, you can often eliminate the fragment immediately. However, do NOT stop there if multiple answers produce complete sentences. You must then determine how the complete ideas are supposed to connect.`,
      examples: [
        { label: 'Short Sentence', sentence: 'The scientist arrived.', isCorrect: true, explanation: 'Complete thought with subject (scientist) and finite verb (arrived).' },
        { label: 'Long Sentence', sentence: 'After several months of testing, the scientist from the university laboratory finally arrived at the conference.', isCorrect: true, explanation: 'Length does not change completeness.' },
        { label: 'Fragment Example (Dependent)', sentence: 'Because the astronomer examined the data', isCorrect: false, explanation: 'Subordinating word "because" leaves the thought incomplete.' },
        { label: 'Fragment Example (Participle)', sentence: 'The astronomer examining the data', isCorrect: false, explanation: 'Participial form "examining" is not a finite main verb.' }
      ]
    },
    {
      id: 'concept-2',
      title: "Independent Clauses",
      sectionNumber: 2,
      fullText: `An independent clause is a group of words that can function as a complete sentence.
Example 1:
"The researchers analyzed the samples."
Contains: Subject -> researchers; Verb -> analyzed; Complete thought -> yes. Therefore, it is independent.

Example 2:
"The results surprised the researchers."
Subject -> results; Verb -> surprised; Complete thought -> yes. Independent clause.

WHY THIS MATTERS:
Suppose the SAT gives:
"The researchers analyzed the samples ___ the results surprised them."
There are independent clauses on both sides. That immediately tells you that certain punctuation choices are possible and others are not:
- A comma by itself CANNOT properly join the two independent clauses.
- A period CAN separate them.
- A semicolon CAN separate them.
- A comma followed by an appropriate coordinating conjunction CAN join them.

This is the foundation of sentence-boundary questions.

EXAMPLE 1 (Semicolon):
"The researchers analyzed the samples; the results surprised them."
Before semicolon: independent. After semicolon: independent. Semicolon correctly separates them.

EXAMPLE 2 (Period):
"The researchers analyzed the samples. The results surprised them."
Independent + independent. A period correctly separates them into two sentences.

EXAMPLE 3 (Comma + Coordinating Conjunction):
"The researchers analyzed the samples, and the results surprised them."
First clause independent; second clause independent. "And" connects them; comma works with the conjunction.

WRONG EXAMPLE (Comma Splice):
"The researchers analyzed the samples, the results surprised them."
This creates: Independent clause + comma + independent clause. That structure is a comma splice. A comma alone cannot perform the job required here.

FAST RECOGNITION:
When you see: [complete sentence] ___ [complete sentence]
Immediately consider:
• period
• semicolon
• comma + coordinating conjunction
Then inspect the answer choices. If an answer contains only a comma between the two independent clauses, eliminate it.

IMPORTANT WARNING:
Do not memorize: "Independent clause + independent clause = semicolon."
That is incomplete. A semicolon is one possible solution, but a period or an appropriate coordinating conjunction may also work. The actual question depends on the answer choices and the intended sentence structure.`,
      rules: [
        'A comma alone cannot join two independent clauses (comma splice).',
        'Independent clauses can be joined by: Period, Semicolon, or Comma + Coordinating Conjunction (FANBOYS).'
      ],
      examples: [
        { label: 'EXAMPLE 1: SEMICOLON BOUNDARY', sentence: 'The researchers analyzed the samples; the results surprised them.', isCorrect: true, explanation: 'Both sides are independent clauses. A semicolon correctly joins them without a coordinating conjunction.' },
        { label: 'EXAMPLE 2: PERIOD BOUNDARY', sentence: 'The researchers analyzed the samples. The results surprised them.', isCorrect: true, explanation: 'A period cleanly separates two independent clauses into distinct complete sentences.' },
        { label: 'EXAMPLE 3: COMMA + FANBOYS', sentence: 'The researchers analyzed the samples, and the results surprised them.', isCorrect: true, explanation: 'Independent clause + comma + coordinating conjunction ("and") + independent clause is grammatically complete.' },
        { label: 'TRAP EXAMPLE: COMMA SPLICE', sentence: 'The researchers analyzed the samples, the results surprised them.', isCorrect: false, explanation: 'Two independent clauses joined only by a comma creates an illegal comma splice.' }
      ]
    },
    {
      id: 'concept-3',
      title: "Dependent Clauses",
      sectionNumber: 3,
      fullText: `A dependent clause contains a subject and verb but cannot function as an independent sentence in its current form.
Common signals include subordinating words such as:
because, although, while, when, if, unless, before, after, since, whereas.

Example:
"Although the researchers analyzed the samples"
Subject: researchers; Verb: analyzed.
But the word "although" creates an unfinished relationship. The reader expects another clause. Therefore, it is dependent.

COMPARE:
INDEPENDENT: "The researchers analyzed the samples."
DEPENDENT: "Although the researchers analyzed the samples"
The difference is not the subject or verb. The key difference is the word "although."

EXAMPLE (Dependent + Independent):
"Although the researchers analyzed the samples, the results remained inconclusive."
First part: "Although the researchers analyzed the samples" -> Dependent clause.
Second part: "the results remained inconclusive" -> Independent clause.
This is a correctly formed sentence.

DEPENDENT + INDEPENDENT PATTERNS:
A dependent clause can generally be connected to an independent clause in several ways:
Option A: "Although the researchers analyzed the samples, the results remained inconclusive."
Option B: "The results remained inconclusive although the researchers analyzed the samples."

The punctuation requirements depend on the placement and structure. This is why simply memorizing "comma = pause" is unreliable.`,
      examples: [
        { label: 'Introductory Dependent', sentence: 'Although the researchers analyzed the samples, the results remained inconclusive.', isCorrect: true, explanation: 'Dependent clause precedes independent clause; comma is required.' },
        { label: 'Trailing Dependent', sentence: 'The results remained inconclusive although the researchers analyzed the samples.', isCorrect: true, explanation: 'Independent clause precedes dependent clause; comma usually not required.' }
      ]
    },
    {
      id: 'concept-4',
      title: "Sentence Fragments",
      sectionNumber: 4,
      fullText: `A sentence fragment is an incomplete grammatical structure presented as though it were a complete sentence.
Common causes include:
1. Missing main verb
2. Missing subject
3. Dependent clause standing alone
4. A phrase incorrectly presented as a sentence

FRAGMENT TYPE 1 — DEPENDENT CLAUSE:
"Because the experiment produced unexpected results."
This is not complete because "because" establishes a dependent relationship. The reader expects another clause.
Correct: "Because the experiment produced unexpected results, the researchers repeated the procedure."

FRAGMENT TYPE 2 — PHRASE:
"After several months of testing."
This does not contain a complete independent clause. It is a phrase.
Correct: "After several months of testing, the researchers published their results."

FRAGMENT TYPE 3 — MISSING MAIN VERB:
"The researchers responsible for the project."
This contains a subject-like noun phrase but does not provide a main verb expressing what the researchers did. It is incomplete.
Correct: "The researchers responsible for the project presented their findings."

ELIMINATION TECHNIQUE:
If an answer choice produces:
• dependent clause + period
• phrase + period
• incomplete clause + period
that answer is immediately suspicious. Do not choose it simply because the sentence sounds natural when read quickly. Instead, identify the grammatical structure.

TRAP:
Long descriptive phrases can hide the fact that a sentence is missing its main verb.
Example: "The group of researchers from several universities, after years of collaboration."
The sentence looks sophisticated. But remove the extra information: "The group..." -> There is no main verb. Therefore, it is a fragment.`,
      rules: [
        'A dependent clause standing alone with a period is a fragment.',
        'A phrase standing alone with a period is a fragment.',
        'Length does not make a fragment complete. Remove extra descriptive material to verify the core verb.'
      ],
      examples: [
        { label: 'FRAGMENT TYPE 1: DEPENDENT CLAUSE', sentence: 'Because the experiment produced unexpected results.', isCorrect: false, explanation: 'Leaves a dependent clause standing alone with a period, creating a fragment.' },
        { label: 'FRAGMENT TYPE 2: PHRASE', sentence: 'After several months of testing.', isCorrect: false, explanation: 'Prepositional phrase standing alone without a subject or finite main verb.' },
        { label: 'FRAGMENT TYPE 3: MISSING MAIN VERB', sentence: 'The researchers responsible for the project.', isCorrect: false, explanation: 'Contains a noun phrase but no main verb stating what the researchers did.' },
        { label: 'CORRECTED SENTENCE', sentence: 'Because the experiment produced unexpected results, the researchers repeated the procedure.', isCorrect: true, explanation: 'Combines the dependent clause cleanly with an independent main clause.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: "Run-Ons, Comma Splices & Conjunctions",
  description: 'Run-on sentence identification, comma splice detection and fixes, FANBOYS coordinating conjunctions, and the Master Sentence-Boundary Decision Tree.',
  concepts: [
    {
      id: 'concept-5',
      title: "Run-On Sentences",
      sectionNumber: 5,
      fullText: `A run-on occurs when two independent clauses are incorrectly joined without an appropriate boundary.

Example:
"The researchers analyzed the samples the results surprised them."
First independent clause: "The researchers analyzed the samples."
Second independent clause: "The results surprised them."
Nothing properly separates them. Therefore, the sentence is incorrectly joined.

IMPORTANT:
A run-on does NOT mean "sentence is too long."
A sentence can be very long and completely correct.
A short sentence can also contain a run-on.
The issue is grammatical connection, not length.

WRONG:
"The experiment ended the researchers reviewed the results." (Independent + independent with no proper boundary.)

CORRECT OPTIONS:
1. "The experiment ended. The researchers reviewed the results."
2. "The experiment ended; the researchers reviewed the results."
3. "The experiment ended, and the researchers reviewed the results."
4. "The experiment ended because the researchers reviewed the results." (Notice that the final version changes the grammatical relationship.)`,
      rules: [
        'Run-on does NOT mean long sentence.',
        'Run-on occurs when two independent clauses have no punctuation or conjunction between them.',
        'Fix run-ons with a period, semicolon, comma + FANBOYS, or by subordinating one clause.'
      ],
      examples: [
        { label: 'EXAMPLE 1: RUN-ON ERROR', sentence: 'The researchers analyzed the samples the results surprised them.', isCorrect: false, explanation: 'Two independent clauses pushed together with zero punctuation or conjunction form a run-on sentence.' },
        { label: 'EXAMPLE 2: CORRECT PERIOD FIX', sentence: 'The experiment ended. The researchers reviewed the results.', isCorrect: true, explanation: 'Separates two independent clauses cleanly with a period.' },
        { label: 'EXAMPLE 3: CORRECT SUBORDINATION FIX', sentence: 'Because the experiment ended, the researchers reviewed the results.', isCorrect: true, explanation: 'Converts the first clause into a dependent clause with "because", requiring a comma before the main clause.' }
      ]
    },
    {
      id: 'concept-6',
      title: "Comma Splices",
      sectionNumber: 6,
      fullText: `A comma splice occurs when two independent clauses are joined using ONLY a comma.

Example:
"The experiment ended, the researchers reviewed the results."
Both sides are independent clauses. The comma alone is insufficient.

THE FAST TEST:
Temporarily replace the comma with a period. If both resulting parts can stand independently, you may be dealing with a comma splice.
Example test:
Part 1: "The experiment ended." (Complete)
Part 2: "The researchers reviewed the results." (Complete)
Both are complete. Therefore, the original comma alone is not enough.

WAYS TO FIX IT:
METHOD 1: Use a period. -> "The experiment ended. The researchers reviewed the results."
METHOD 2: Use a semicolon. -> "The experiment ended; the researchers reviewed the results."
METHOD 3: Use a comma + coordinating conjunction. -> "The experiment ended, and the researchers reviewed the results."
METHOD 4: Change the structure so one clause becomes dependent. -> "After the experiment ended, the researchers reviewed the results."

SAT ELIMINATION:
If the question has: [independent clause] ___ [independent clause]
and an answer choice contains only: ","
ELIMINATE IT. This is one of the fastest useful eliminations in sentence-boundary questions.`,
      rules: [
        'Independent clause + comma + independent clause = COMMA SPLICE (Incorrect).',
        'Replace comma with period to test for comma splices.',
        'Eliminate choices offering only a comma between two independent clauses.'
      ],
      examples: [
        { label: 'EXAMPLE 1: COMMA SPLICE ERROR', sentence: 'The experiment ended, the researchers reviewed the results.', isCorrect: false, explanation: 'A comma alone cannot link two independent clauses.' },
        { label: 'EXAMPLE 2: FANBOYS FIX', sentence: 'The experiment ended, and the researchers reviewed the results.', isCorrect: true, explanation: 'Adding "and" alongside the comma correctly connects the two independent clauses.' },
        { label: 'EXAMPLE 3: SEMICOLON FIX', sentence: 'The experiment ended; the researchers reviewed the results.', isCorrect: true, explanation: 'A semicolon correctly links two closely related independent clauses.' }
      ]
    },
    {
      id: 'concept-7',
      title: "Coordinating Conjunctions",
      sectionNumber: 7,
      fullText: `The most common coordinating conjunctions can be remembered as:
FANBOYS
For, And, Nor, But, Or, Yet, So

These conjunctions can connect independent clauses when used with the appropriate comma structure.
Example:
"The researchers expected a clear result, but the data were inconclusive."
Independent clause: "The researchers expected a clear result."
Independent clause: "The data were inconclusive."
The conjunction "but" expresses contrast.

THE KEY IDEA:
Do not memorize FANBOYS merely as a vocabulary list. Understand the relationship each conjunction creates:
• AND -> addition
• BUT -> contrast
• OR -> alternative
• SO -> result
• YET -> contrast
• FOR -> reason/explanation
• NOR -> negative alternative/addition

The exact meaning must still fit the context.

EXAMPLE:
"The initial results looked promising, but the final experiment produced different findings."
The relationship is contrast. "But" fits.

TRAP:
A conjunction may be grammatically possible but logically wrong.
Example:
"The initial results looked promising, so the final experiment produced different findings."
This expresses a cause/result relationship. If the context instead establishes a contrast, "so" is not appropriate merely because it creates a grammatically complete sentence.
Therefore: GRAMMAR ALONE IS NOT ALWAYS ENOUGH. You must sometimes evaluate meaning as well.`,
      rules: [
        'FANBOYS = For, And, Nor, But, Or, Yet, So.',
        'Comma + FANBOYS joins two independent clauses.',
        'Match the logical meaning of the conjunction (And = addition, But/Yet = contrast, So = result, For = reason).'
      ],
      examples: [
        { label: 'EXAMPLE 1: CONTRAST CONJUNCTION', sentence: 'The researchers expected a clear result, but the data were inconclusive.', isCorrect: true, explanation: 'Two independent clauses connected with comma + "but" to logically signal a contrast between expectation and outcome.' },
        { label: 'EXAMPLE 2: RESULT CONJUNCTION', sentence: 'The initial trial exceeded safety limits, so the team halted the test.', isCorrect: true, explanation: '"So" correctly establishes a cause-and-effect relationship between the safety limit breach and the decision to stop.' },
        { label: 'TRAP EXAMPLE: ILLOGICAL CONJUNCTION', sentence: 'The initial results looked promising, so the final experiment failed.', isCorrect: false, explanation: 'Using "so" implies that promising results caused the failure, creating a logical contradiction.' }
      ]
    },
    {
      id: 'concept-8',
      title: "The Master Sentence-Boundary Decision Tree",
      sectionNumber: 8,
      fullText: `When you encounter a sentence-boundary question, use this exact 7-step process:

STEP 1 — STOP READING FOR STYLE:
Do not decide based on what "sounds right."

STEP 2 — IDENTIFY THE STRUCTURE BEFORE THE BLANK:
Is it:
• independent clause?
• dependent clause?
• phrase?
• incomplete structure?

STEP 3 — IDENTIFY THE STRUCTURE AFTER THE BLANK:
Again, determine what type of structure follows.

STEP 4 — CLASSIFY THE COMBINATION:
Examples:
• Independent + Independent
• Dependent + Independent
• Independent + Dependent
• Phrase + Clause

STEP 5 — ELIMINATE STRUCTURALLY IMPOSSIBLE ANSWERS:
For example:
• Independent + comma + Independent -> comma splice
• Independent + no boundary + Independent -> run-on
• Dependent clause + period -> likely fragment

STEP 6 — CHECK LOGICAL RELATIONSHIP:
If several answers remain, determine whether the relationship is:
• addition
• contrast
• cause
• result
• condition
• time
• explanation

STEP 7 — VERIFY THE COMPLETE SENTENCE:
Read the entire resulting sentence. Do not verify only the few words surrounding the blank.

============================================================
WORKED EXAMPLE — FOUNDATION:
"The telescope was designed to detect faint objects in distant galaxies ___ its sensors can also record changes in nearby stars."
A) ,
B) ;
C) , and
D) because

STEP 1 (Left Side): "The telescope was designed to detect faint objects in distant galaxies" -> Independent clause.
STEP 2 (Right Side): "Its sensors can also record changes in nearby stars." -> Independent clause.
Classification: INDEPENDENT + INDEPENDENT
STEP 3 (Elimination):
A) comma alone -> Eliminate. Creates a comma splice.
D) because -> Creates grammatically connected structure, but "because" gives wrong meaning (the second idea is not the reason for the first).
B) semicolon and C) , and remain.
The sentence presents two related capabilities, so ", and" provides the clearest relationship.
ANSWER: C) , and

============================================================
WORKED EXAMPLE — HARDER:
"The researchers expected the new method to reduce processing time ___ preliminary tests instead revealed a different advantage."
A) ,
B) ;
C) , but
D) because

Left side: "The researchers expected the new method to reduce processing time." -> Independent.
Right side: "Preliminary tests instead revealed a different advantage." -> Independent.
Classification: Independent + Independent
A is eliminated (comma splice).
D creates a cause relationship that does not match.
The word "instead" establishes a contrast between expectation and actual result.
Therefore the appropriate connector is "but."
ANSWER: C) , but

ELITE LESSON: Notice that punctuation alone did not completely solve the question. Two choices were potentially acceptable grammatically. The final decision required understanding the relationship between ideas.`,
      rules: [
        'Step 1: Identify structure before blank.',
        'Step 2: Identify structure after blank.',
        'Step 3: Classify combination (I+I, D+I, I+D, P+I).',
        'Step 4: Eliminate impossible structures.',
        'Step 5: Check logical relationship.',
        'Step 6: Verify full sentence.'
      ],
      examples: [
        { label: 'WORKED EXAMPLE 1: TELESCOPE SENSORS', sentence: 'The telescope was designed to detect faint objects in distant galaxies, and its sensors can also record changes in nearby stars.', isCorrect: true, explanation: 'Independent + Independent. Comma + "and" accurately connects two additional capabilities.' },
        { label: 'WORKED EXAMPLE 2: EXPECTATION VS RESULT', sentence: 'The researchers expected the new method to reduce processing time, but preliminary tests instead revealed a different advantage.', isCorrect: true, explanation: 'Independent + Independent. Comma + "but" expresses contrast reinforced by "instead".' }
      ]
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: "Subordinating Conjunctions & Clause Placement",
  description: 'Subordinating conjunction mechanics, introductory dependent clauses (Dependent, Independent), and trailing dependent clauses (Independent Dependent).',
  concepts: [
    {
      id: 'concept-9',
      title: "Subordinating Conjunctions",
      sectionNumber: 9,
      fullText: `A subordinating conjunction changes the grammatical status of a clause.
Common examples include:
although, because, while, when, if, unless, before, after, since, whereas, even though, even if.

Consider:
"The laboratory closed." -> This is independent.
Now add "because":
"Because the laboratory closed" -> The words still contain a subject and verb, but the clause is now dependent. It needs another idea: "Because the laboratory closed, the researchers moved the equipment."

WHY THIS MATTERS:
A common SAT trap is treating every subject + verb combination as an independent clause. That is incorrect.
The question is not merely: "Does it have a subject and verb?"
The better question is: "Can this clause stand as a complete sentence in its current form?"

EXAMPLE:
"Although the device was inexpensive, few laboratories purchased it."
"Although the device was inexpensive" -> dependent clause.
"few laboratories purchased it" -> independent clause.
The comma separates the introductory dependent clause from the independent clause.

REVERSE ORDER:
"Few laboratories purchased the device although it was inexpensive."
Here the dependent clause follows the independent clause. The punctuation structure is different.
DEPENDENT + INDEPENDENT is not punctuated exactly like INDEPENDENT + DEPENDENT.

RECOGNITION TECHNIQUE:
When you see a word such as although, because, if, unless, when, while, after, before, immediately ask:
"Is this word making the clause dependent?"
If yes, do not treat that clause as an independent sentence.

ELIMINATION TECHNIQUE:
Suppose an answer choice produces: "Because the equipment was expensive." -> That answer leaves a dependent clause standing alone. Eliminate it.
If another answer creates: "Because the equipment was expensive, the laboratory delayed the purchase." -> that structure is complete.`,
      rules: [
        'Adding a subordinating conjunction makes an independent clause dependent.',
        'Do not treat subject + verb as independent if a subordinating conjunction is present.'
      ],
      examples: [
        { label: 'EXAMPLE 1: INTRODUCTORY SUBORDINATING CONJUNCTION', sentence: 'Although the device was inexpensive, few laboratories purchased it.', isCorrect: true, explanation: '"Although" turns the first clause dependent; comma correctly sets it off from the main clause.' },
        { label: 'TRAP EXAMPLE: STANDALONE SUBORDINATION FRAGMENT', sentence: 'Because the laboratory closed during the holiday weekend.', isCorrect: false, explanation: 'Leaves a dependent clause standing alone with a period, forming an illegal fragment.' }
      ]
    },
    {
      id: 'concept-10-11',
      title: "Introductory & Trailing Dependent Clauses",
      sectionNumber: '10–11',
      fullText: `INTRODUCTORY DEPENDENT CLAUSES:
When a dependent clause comes before an independent clause, a comma often separates the two.
Pattern: DEPENDENT CLAUSE, INDEPENDENT CLAUSE

Example:
"Because the original measurements were unreliable, the researchers repeated the experiment."
The first portion cannot stand alone. The second portion can. The comma marks the boundary between them.

INDEPENDENT + DEPENDENT:
Now consider:
"The researchers repeated the experiment because the initial measurements were inconsistent."
Main clause: "The researchers repeated the experiment."
Dependent clause: "because the initial measurements were inconsistent."
The dependent clause is attached directly to the main clause. This structure does not require the same comma pattern as an introductory dependent clause.

COMPARE:
"Because the measurements were inconsistent, the researchers repeated the experiment." (Dependent, Independent)
versus:
"The researchers repeated the experiment because the measurements were inconsistent." (Independent Dependent)`,
      rules: [
        'Dependent clause FIRST -> Comma required (Dependent, Independent).',
        'Independent clause FIRST -> No comma usually needed (Independent Dependent).'
      ],
      examples: [
        { label: 'EXAMPLE 1: INTRODUCTORY DEPENDENT', sentence: 'Because the original measurements were unreliable, the researchers repeated the experiment.', isCorrect: true, explanation: 'Dependent clause precedes independent clause; comma is required after "unreliable".' },
        { label: 'EXAMPLE 2: TRAILING DEPENDENT', sentence: 'The researchers repeated the experiment because the initial measurements were inconsistent.', isCorrect: true, explanation: 'Independent clause precedes dependent clause; no comma is necessary before "because".' }
      ]
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: "Semicolons, Periods & Conjunction Choice",
  description: 'Semicolon rules and the Period Test, period mechanics, comma + FANBOYS vs. semicolons, and selecting conjunctions based on explicit context.',
  concepts: [
    {
      id: 'concept-12-15',
      title: "Semicolons, Periods, FANBOYS & Decision Rules",
      sectionNumber: '12–15',
      fullText: `SEMICOLONS:
A semicolon can separate two closely related independent clauses.
Pattern: INDEPENDENT CLAUSE ; INDEPENDENT CLAUSE
Example: "The original method was expensive; the researchers developed a less costly alternative."
Both sides can stand independently.

SEMICOLON TEST:
Temporarily replace the semicolon with a period. If both resulting sentences are complete, the semicolon may be structurally appropriate.

PERIODS:
Pattern: INDEPENDENT CLAUSE. INDEPENDENT CLAUSE.

COMMA + COORDINATING CONJUNCTION:
Pattern: INDEPENDENT, FANBOYS INDEPENDENT

SEMICOLON VS. COMMA + CONJUNCTION:
Consider:
1. "The experiment produced unexpected results; the researchers repeated the procedure."
2. "The experiment produced unexpected results, so the researchers repeated the procedure."
Both can be grammatically valid, but they communicate different relationships.`,
      rules: [
        'Semicolon test: Replace semicolon with a period. Both sides must be complete independent clauses.',
        'Never use a semicolon if one side is dependent.',
        'Comma + FANBOYS explicitly specifies the conjunction relationship.'
      ],
      examples: [
        { label: 'EXAMPLE 1: SEMICOLON PERIOD TEST', sentence: 'The original method was expensive; the researchers developed a less costly alternative.', isCorrect: true, explanation: 'Replacing semicolon with period yields two complete independent clauses, validating the semicolon.' },
        { label: 'EXAMPLE 2: COMMA + CONJUNCTION RELATIONSHIP', sentence: 'The experiment produced unexpected results, so the researchers repeated the procedure.', isCorrect: true, explanation: 'Adds explicit cause-and-effect meaning to the clause connection.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: "Colon Rules & List Setups",
  description: 'The mandatory complete-sentence setup rule for colons, avoiding the pause trap, introducing lists, and colon vs. comma before lists.',
  concepts: [
    {
      id: 'concept-16',
      title: "Colon Setup & Completeness Rule",
      sectionNumber: 16,
      fullText: `COLON AND SENTENCE BOUNDARIES:
A colon can introduce information that explains, specifies, illustrates, or expands upon what comes before it.
A CRUCIAL STRUCTURAL REQUIREMENT: The material BEFORE the colon MUST be capable of functioning as a complete sentence.

Example:
"The researchers had one objective: to determine why the device failed."
Before colon: "The researchers had one objective." -> Complete sentence.
After colon: "to determine why the device failed" -> Explanatory phrase.

THE COLON: WHAT MUST COME BEFORE IT?
Structure: COMPLETE STATEMENT : EXPLANATION / SPECIFICATION / LIST

THE COLON DOES NOT MEAN "PAUSE":
Do not use "pause = colon".
Instead use: "complete statement + explanation/specification = possible colon".

SECTION 60 & 61 — COLON BEFORE A LIST:
A colon can introduce a list when the words before it form a complete statement.
Example: "The research team needed three things: accurate measurements, reliable equipment, and time."`,
      rules: [
        'Before colon MUST be a complete independent clause.',
        'Never place a colon directly after a verb or preposition.',
        'Lists do not automatically require colons unless preceded by a complete statement.'
      ],
      examples: [
        { label: 'EXAMPLE 1: COLON EXPLANATION SETUP', sentence: 'The researchers had one objective: to determine why the device failed.', isCorrect: true, explanation: '"The researchers had one objective" is a complete independent clause, satisfying the colon setup rule.' },
        { label: 'EXAMPLE 2: COLON BEFORE A LIST', sentence: 'The research team needed three things: accurate measurements, reliable equipment, and time.', isCorrect: true, explanation: 'Setup before colon is a complete independent statement announcing a list of three items.' },
        { label: 'TRAP EXAMPLE: COLON AFTER VERB', sentence: 'The research team needed: accurate measurements, reliable equipment, and time.', isCorrect: false, explanation: 'Placing a colon directly after the verb "needed" creates an incomplete setup.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_6: WritingTheoryBlock = {
  blockNumber: 6,
  title: "Single & Paired Dashes Mechanics",
  description: 'Single dash for expansions, paired dashes for middle parenthetical interruptions, single vs. paired dash rules, and colon vs. dash comparison.',
  concepts: [
    {
      id: 'concept-17-18',
      title: "Single vs. Paired Dashes",
      sectionNumber: '17–18, 62–64',
      fullText: `DASHES:
Dashes can mark interruptions or set off additional information.
Example: "The device's most unusual feature—its ability to operate without external power—made it especially useful."

PAIRED DASHES:
When dashes enclose nonessential information, both boundaries matter.
Example: "The new telescope—a relatively small instrument—produced remarkably detailed images."

THE DASH AS AN ALTERNATIVE TO A COLON:
A dash can introduce information that expands on or emphasizes what came before it.
Example: "The researchers discovered something unexpected—the material became stronger when cooled."

SINGLE DASH VS. PAIRED DASHES:
Single dash introduces a strong expansion at sentence end. Paired dashes surround an interruption in the middle.`,
      rules: [
        'Single dash at end introduces expansion; paired dashes in middle isolate interruption.',
        'Check completeness of setup before placing colon or single dash.',
        'Paired dashes must match (dash opens, dash closes).'
      ],
      examples: [
        { label: 'EXAMPLE 1: PAIRED DASH INTERRUPTER', sentence: 'The device’s most unusual feature—its ability to operate without external power—made it especially useful.', isCorrect: true, explanation: 'Matching pair of dashes isolates the nonessential appositive description.' },
        { label: 'EXAMPLE 2: SINGLE DASH EXPANSION', sentence: 'The researchers discovered something unexpected—the material became stronger when cooled.', isCorrect: true, explanation: 'Single dash at sentence end introduces a dramatic explanatory statement.' },
        { label: 'TRAP EXAMPLE: UNMATCHED DASH/COMMA', sentence: 'The device’s most unusual feature—its ability to operate without external power, made it especially useful.', isCorrect: false, explanation: 'Opening with a dash and closing with a comma violates punctuation symmetry.' }
      ]
    }
  ]
};
