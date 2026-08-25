import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Concision: Removing Unnecessary Words Without Losing Meaning',
  description: 'Concept → Detailed Explanation → Examples → Technique → Exercises → Answer Explanations → Takeaway',
  concepts: [
    {
      id: 'ch5-b1-c1',
      title: '1. CORE CONCEPT: CONCISION',
      fullText: `**Concision** means expressing the intended meaning with the fewest words necessary **without sacrificing precision, grammatical completeness, or logical meaning**.

The goal is **not** simply to make a sentence shorter.
The real goal is:
> **Remove unnecessary language while preserving every necessary idea.**

Compare:
> The researchers conducted an analysis of the data in order to determine the reason why the results differed.

More concise:
> The researchers analyzed the data to determine why the results differed.

The second sentence is shorter, but more importantly, it communicates the same meaning more efficiently.`
    },
    {
      id: 'ch5-b1-c2',
      title: '2. CONCISION IS NOT "SHORTER = BETTER"',
      fullText: `A sentence can become too short and lose important information.

### Example
> Researchers analyzed the data.

This is concise.
But if the intended meaning is:
> Researchers analyzed the data to determine why the results differed.

then removing the second clause changes the information being communicated.

Therefore:
**Bad editing:** Remove words simply because they are removable.
**Good editing:** Remove words that contribute little or nothing to the intended meaning.`
    },
    {
      id: 'ch5-b1-c3',
      title: '3. THE THREE QUESTIONS & REDUNDANCY PATTERNS',
      fullText: `Whenever a sentence appears unnecessarily wordy, ask:
1. **Does this word contribute meaning?**
2. **Is this idea already expressed elsewhere?**
3. **Can the same precise meaning be expressed more directly?**

A redundancy occurs when two or more words communicate essentially the same idea unnecessarily.

### Example
> The researchers returned back to the laboratory.
The verb *returned* already contains the idea of going back.
Better: *The researchers returned to the laboratory.*

### Common Redundancy Patterns
- *future plans*
- *past history*
- *completely eliminate*
- *basic fundamentals*
- *final conclusion*
- *unexpected surprise*
- *advance planning*
- *repeat again*`
    },
    {
      id: 'ch5-b1-c4',
      title: '4. WORDY PHRASES & "IN ORDER TO"',
      fullText: `Many wordy expressions can be replaced by shorter equivalents:
- *due to the fact that* → *because*
- *at this point in time* → *now* / *currently*
- *in the event that* → *if*
- *for the purpose of* → *for* / *to*

### "In Order To"
The phrase *in order to* is grammatical, but *in order* often contributes no necessary meaning.
Compare:
> The researchers collected additional data in order to improve the accuracy of the study.
with:
> The researchers collected additional data to improve the accuracy of the study.

*Important:* Do **not** treat "in order to" as automatically incorrect. Ask whether "in order" adds meaningful emphasis or clarification.`
    },
    {
      id: 'ch5-b1-c5',
      title: '5. NOMINALIZATION, PASSIVE VOICE & CUT-AND-TEST METHOD',
      fullText: `A **nominalization** occurs when an action is expressed as a noun rather than a more direct verb.
- *conducted an evaluation* → *evaluated*
- *conducted an investigation* → *investigated*
- *made a decision* → *decided*
- *provides assistance* → *assists*

### Passive Voice vs Active Voice
- *The proposal was rejected by the committee.* (Passive)
- *The committee rejected the proposal.* (Active)

### Cut-and-Test Method
When revising a sentence:
1. Read the entire sentence once.
2. Identify words that appear repetitive or unnecessary.
3. Remove one questionable phrase mentally.
4. Ask: Does the sentence still express exactly the same idea?
5. Check grammar, precision, and emphasis.
6. Keep deletion only if all three survive: **Meaning + Grammar + Precision**.`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Precision: Choosing the Exact Word and Preserving the Exact Meaning',
  description: 'Core Concept → Concision vs. Precision → Precision Hierarchy → Diction & Near-Synonyms',
  concepts: [
    {
      id: 'ch5-b2-c1',
      title: '1. CORE CONCEPT: PRECISION',
      fullText: `**Precision** means choosing language that communicates the intended meaning accurately and specifically.

Compare:
> The university changed its policy.
with:
> The university revised its admissions policy.

The second is more precise because it identifies *what* changed and the *nature* of the change.`
    },
    {
      id: 'ch5-b2-c2',
      title: '2. CONCISION VS. PRECISION & THE HIERARCHY',
      fullText: `Concision asks: *Can I say this with fewer unnecessary words?*
Precision asks: *Does this wording express exactly what I mean?*

### The Precision Hierarchy
When selecting an answer, prefer language that is:
1. **Accurate**
2. **Specific**
3. **Direct**
4. **Concise**

Do not reverse this order. A shorter sentence that changes the meaning is not superior.`
    },
    {
      id: 'ch5-b2-c3',
      title: '3. VAGUE NOUNS & WEAK VERBS',
      fullText: `Words such as *thing, stuff, aspect, factor, issue, matter* can be unnecessarily vague.
- *aspect* → *limitation* / *weakness*
- *factor* vs *cause*: a factor *contributes* to an outcome; a cause *directly produces* it.

### Weak Verbs
- *do*: *did experiments* → *tested*
- *make*: *made improvements* → *improved*
- *get*: *get financial aid* → *receive financial aid*
- *give*: *gives opportunities* → *provides opportunities*`
    },
    {
      id: 'ch5-b2-c4',
      title: '4. DISTINGUISHING NEAR-SYNONYMS',
      fullText: `SAT-level precision questions often present words that are related but not identical:
- **imply / infer**: speaker/writer *implies* (suggests indirectly); reader/listener *infers* (draws a conclusion).
- **adapt / adopt**: *adapt* = modify for a new purpose; *adopt* = accept/begin using.
- **economic / economical**: *economic* = related to economics; *economical* = resource-efficient.
- **continual / continuous**: *continuous* = without interruption; *continual* = repeated frequently with interruptions.
- **explicit / implicit**: *explicit* = clearly stated; *implicit* = suggested indirectly.`
    },
    {
      id: 'ch5-b2-c5',
      title: '5. PRECISION IN MODALS, QUALIFIERS & PRONOUNS',
      fullText: `Verb tense and modal verbs control timeline and certainty:
- *may* expresses possibility; *must* expresses necessity or strong inference.
- *primarily* vs removing it: removing "primarily" changes the scope of the claim.
- *pronoun reference*: "The university changed the scholarship policy because it was outdated." → *it* is ambiguous. Specify *the policy*.

### The Exact-Meaning Test
1. What exactly does this word claim?
2. Could another word make the claim stronger or weaker?
3. Would changing it alter certainty, quantity, chronology, causation, or reference?`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Modifier Placement: Making Every Description Attach to the Correct Idea',
  description: 'Core Concept → Attachment Test → Dangling Modifiers → Adverb & Relative Clause Scope',
  concepts: [
    {
      id: 'ch5-b3-c1',
      title: '1. CORE CONCEPT: MODIFIER PLACEMENT',
      fullText: `A **modifier** is a word or phrase that describes, limits, or clarifies another part of a sentence.
Examples: adjectives, adverbs, prepositional phrases, participial phrases, relative clauses.

A modifier must be positioned so that the reader can clearly determine **what it modifies**.
A sentence can be grammatically complete, concise, and still logically wrong if a modifier attaches to the wrong element.`
    },
    {
      id: 'ch5-b3-c2',
      title: '2. THE DANGLING MODIFIER',
      fullText: `A **dangling modifier** occurs when the introductory modifier logically describes something that is not the grammatical subject of the main clause.

### Problem
> After analyzing thousands of responses, the findings were published.
*Who analyzed the responses?* The sentence suggests *findings* analyzed responses. That is impossible.

### Better
> After analyzing thousands of responses, the researchers published their findings.`
    },
    {
      id: 'ch5-b3-c3',
      title: '3. PARTICIPIAL & PAST-PARTICIPLE MODIFIERS',
      fullText: `For introductory *-ing* phrases: ask **Who is performing the -ing action?**
> *Using satellite images, the researchers identified inconsistencies.* → Correct.

For past-participle modifiers (*-ed / -en*): ask **What noun logically receives this description?**
> *Designed for rural laboratories, the new device requires little maintenance.* → Correct.`
    },
    {
      id: 'ch5-b3-c4',
      title: '4. MISPLACED ADVERBS & RELATIVE CLAUSES',
      fullText: `Adverb placement radically changes meaning:
- *Only the researchers analyzed the data.* (Nobody else analyzed it.)
- *The researchers only analyzed the data.* (They analyzed it but performed no other actions.)
- *The researchers analyzed only the data.* (Restricts the object analyzed.)

### Relative Clauses & Prepositions
> *The university announced a scholarship for students that covers tuition.*
Logically, what covers tuition? The scholarship, not the students.
Better: *The university announced a scholarship that covers tuition for students.*`
    },
    {
      id: 'ch5-b3-c5',
      title: '5. BLOCK 3 TECHNIQUE: THE ATTACHMENT ARROW',
      fullText: `For difficult sentences, mentally draw an arrow:
> **modifier → noun it describes**

Then ask: *Does the arrow make logical sense?*
If not, revise the sentence so the subject immediately follows the comma.

*Remember:* A shorter sentence is not better if its modifier attaches to the wrong noun.`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Combining Ideas Efficiently: Coordination, Subordination, and Sentence Boundaries',
  description: 'Core Concept → Independent & Dependent Clauses → Connection Methods → Punctuation Rules',
  concepts: [
    {
      id: 'ch5-b4-c1',
      title: '1. CORE CONCEPT: EFFICIENT SENTENCE STRUCTURE',
      fullText: `Concision is not merely about deleting words inside sentences. Sometimes the most efficient revision changes **how ideas are connected**.

Two complete ideas can be connected through:
- **Coordination**: *The researchers analyzed the data, and they identified several inconsistencies.*
- **Subordination**: *After the researchers analyzed the data, they identified several inconsistencies.*
- **Separation**: *The researchers analyzed the data. They identified several inconsistencies.*`
    },
    {
      id: 'ch5-b4-c2',
      title: '2. COORDINATION & FANBOYS',
      fullText: `Coordination treats two ideas as grammatically independent using coordinating conjunctions (**FANBOYS**: *for, and, nor, but, or, yet, so*).

- When joining two independent clauses: **Comma + FANBOYS** (*..., and they...*)
- When subject is shared and second verb is a compound predicate: **No comma** (*The researchers analyzed the data and identified several inconsistencies.*)`
    },
    {
      id: 'ch5-b4-c3',
      title: '3. SEMICOLONS, COLONS & DASHES',
      fullText: `### Semicolons
A semicolon joins closely related independent clauses without a conjunction:
> *The researchers analyzed the data; they identified several inconsistencies.*

Before transitional expressions (*however, therefore, nevertheless*):
> *The method was inexpensive; however, it was unreliable.*

### Colons & Dashes
A colon introduces an explanation, list, or elaboration, but the lead-in MUST be a complete independent clause.
A pair of em dashes sets off interruptions or emphatic explanations.`
    },
    {
      id: 'ch5-b4-c4',
      title: '4. SUBORDINATION FOR PRECISION',
      fullText: `Subordinating conjunctions (*because, although, while, when, after, before, unless, if, since*) indicate explicit relationships between ideas:
- **Cause**: *Because the equipment failed, the experiment was delayed.*
- **Contrast**: *Although the method was inexpensive, it was difficult to implement.*
- **Time**: *After completing the experiment, they analyzed the results.*
- **Condition**: *If the equipment fails, we will postpone.*`
    },
    {
      id: 'ch5-b4-c5',
      title: '5. THE RELATIONSHIP-FIRST METHOD',
      fullText: `Before changing punctuation or sentence structure:
1. Identify each complete clause.
2. Determine how the ideas are related (*addition, cause, contrast, time, condition*).
3. Choose coordination, subordination, or separation.
4. Check punctuation.

*Rule:* Meaning first, punctuation second.`
    }
  ]
};

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: 'Parallel Structure: Making Equivalent Ideas Grammatically Equivalent',
  description: 'Core Concept → Matching Forms → Correlative Conjunctions → Parallel Comparisons',
  concepts: [
    {
      id: 'ch5-b5-c1',
      title: '1. CORE CONCEPT: PARALLEL STRUCTURE',
      fullText: `**Parallel structure** means expressing elements that perform the same grammatical function in the same grammatical form.

Example:
> The program teaches students to **research**, **write**, and **analyze**. (All infinitives)

Incorrect:
> The program teaches students to *research*, *writing*, and *analysis*.`
    },
    {
      id: 'ch5-b5-c2',
      title: '2. THE MATCHING-FORM PRINCIPLE',
      fullText: `When elements are joined by *and, or, but, nor* or presented as a list, inspect their grammatical forms:
- **Nouns**: *discipline, persistence, and creativity*
- **Verbs**: *read, analyze, and discuss*
- **Adjectives**: *efficient, reliable, and affordable*
- **Prepositional Phrases**: *in schools, in libraries, and in community centers*
- **Infinitives**: *to collect, analyze, and compare*`
    },
    {
      id: 'ch5-b5-c3',
      title: '3. CORRELATIVE CONJUNCTIONS',
      fullText: `Structures requiring matching forms on both sides:
- *either ... or*
- *neither ... nor*
- *both ... and*
- *not only ... but also*
- *whether ... or*

Example:
> *The program provides both academic advising and financial guidance.* (Both noun phrases)
Incorrect:
> *The program provides both academic advising and helps students financially.*`
    },
    {
      id: 'ch5-b5-c4',
      title: '4. PARALLELISM IN COMPARISONS & "RATHER THAN"',
      fullText: `Parallelism is essential with *than, as...as, more...than, less...than, rather than*:
- *The researchers preferred analyzing the data to repeating the experiment.* (Both gerunds)
- *The researchers chose to revise the method rather than abandon it.* (Parallel infinitives)`
    },
    {
      id: 'ch5-b5-c5',
      title: '5. BLOCK 5 TECHNIQUE: THE FORM-MATCH METHOD',
      fullText: `When you see a list or comparison:
1. Circle each coordinated element.
2. Identify its grammatical form (*noun, verb, adjective, gerund, infinitive*).
3. Compare the forms.
4. Ensure all elements match the same grammatical form.

*Takeaway:* Form A + Form A + Form A.`
    }
  ]
};
