import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'fixing-mongoose-duplicate-index-warnings',
    title: 'The Mongoose Duplicate Index Warning Nobody Explains Properly',
    excerpt:
      'A practical walkthrough of why Mongoose throws duplicate schema index warnings in production logs, and the exact pattern that fixes it for good.',
    category: 'Software Engineering',
    date: '2026-02-14',
    readTime: '6 min read',
    content: [
      'If you have worked with Mongoose long enough, you have seen this warning scroll past in your terminal: "Duplicate schema index". Most tutorials skip it entirely, which means most developers either ignore it or guess at a fix that masks the real problem instead of solving it.',
      'The warning almost always comes from declaring an index in two places at once. It happens most commonly when a field is marked `unique: true` directly in the schema definition, and then the same field is indexed again separately with `schema.index({ field: 1 })`. Mongoose registers both, sees the overlap, and warns you because at scale, duplicate indexes waste write performance and storage for no benefit.',
      'The fix is rarely complicated once you know where to look. Audit every schema file for fields that combine inline index options (`unique`, `index: true`) with an explicit `.index()` call elsewhere in the same file. Pick one declaration style and remove the other. For most projects, the cleanest convention is: use inline options for simple single-field indexes, and reserve explicit `.index()` calls only for compound indexes that involve more than one field.',
      'There is a second, less obvious source worth checking: if your schema is imported in more than one place during a hot-reload development cycle, Mongoose can register the same model twice. Guarding model registration with a check like `mongoose.models.User || mongoose.model("User", userSchema)` prevents this category of warning from reappearing every time your dev server restarts.',
      'I ran into this exact issue while hardening the backend for an attendance management SaaS. The warning itself was harmless in development, but it was a signal of a deeper inconsistency in how indexes were declared across the schema layer — the kind of inconsistency that turns into real query performance problems once a collection grows past a few hundred thousand documents. Treating the warning as a real signal, not just console noise, is what separates a backend that scales cleanly from one that needs a painful index audit eighteen months into production.',
      'The broader lesson: in backend work, the warnings you are tempted to suppress are usually more valuable than the ones that throw hard errors. Hard errors stop you immediately. Warnings let small architectural debts compound quietly until they are expensive to unwind.',
    ],
  },
  {
    slug: 'building-for-nigerian-school-systems',
    title: 'Why Generic School Software Fails Nigerian Institutions — And What to Build Instead',
    excerpt:
      'Most school management platforms are built around foreign academic calendars and grading systems. Here is what it actually takes to build one that fits Nigerian education.',
    category: 'Software Engineering',
    date: '2026-03-02',
    readTime: '7 min read',
    content: [
      'Almost every off-the-shelf school management system available to Nigerian institutions was designed for a different academic world — semesters instead of three-term sessions, GPA scales instead of WAEC grading, and grade names that mean nothing to a JSS1 parent or an SS3 student. Schools end up bending their own processes to fit software that was never built for them.',
      'Building a system that actually fits starts at the data model, not the UI. JSS and SS class naming has to be a first-class concept in the schema, not a relabeled "grade" field. Three-term sessions need to be the unit the entire academic calendar is built around — attendance, results, and fee structures all key off the term, not an arbitrary semester boundary borrowed from a Western template.',
      'Grading is where most generic platforms fall apart completely. WAEC-aligned grading is not just a different scale, it is a different philosophy of assessment — continuous assessment scores feeding into a final result in a specific, regulated way. A platform that hardcodes a simple percentage-to-letter conversion cannot represent this correctly, which means staff end up calculating real grades in a spreadsheet anyway and just pasting the output into the system. At that point, the software has added a step instead of removing one.',
      'Currency matters more than it seems. Every fee structure, every invoice, every financial report needs to think in Naira from the first migration, not as a display-formatting afterthought bolted on later. Retrofitting currency assumptions after a financial module is already built is one of the more painful refactors in this kind of system.',
      'The institutions that need this most are exactly the ones least likely to get custom software — multi-level Islamic schools, community-run academies, and smaller private institutions that fall outside the budget range of enterprise ed-tech vendors. Building production-grade systems for this segment is not just a technical exercise, it is closing a real gap between what global software assumes and what Nigerian education actually looks like on the ground.',
      'This is the thinking behind the school management platform I am currently building for a multi-level Nigerian Islamic institution — public-facing site, internal role-based portals, and a data model built around WAEC, three-term sessions, and Naira from day one, not retrofitted in afterward.',
    ],
  },
  {
    slug: 'shipping-from-ibadan-to-the-world',
    title: 'Shipping From Ibadan: Building a Career as a Remote Frontend Engineer From Nigeria',
    excerpt:
      'Location is no longer the constraint it used to be — but it does change what you need to prove, and how you need to prove it. Notes on building credibility as a Nigerian developer applying internationally.',
    category: 'Career Growth',
    date: '2026-04-18',
    readTime: '5 min read',
    content: [
      'A remote recruiter screening candidates in London or San Francisco cannot see your work ethic, your timezone discipline, or how you handle an incident at 2am local time. All they can see is what you ship and how clearly you can talk about it. That single fact reshapes how a Nigerian developer should think about career-building.',
      'The first thing that has to change is the resume mindset. A narrative-style resume that reads like a biography gets skipped by both the ATS systems standing between you and a human recruiter, and by the recruiter themselves once they finally do see it. Bullet points built around measurable impact — what broke, what you fixed, what got faster, what shipped — read in seconds and survive keyword filtering. This is not about gaming a system; it is about respecting how little time anyone has to evaluate a stranger\'s claims.',
      'The second thing is portfolio depth over portfolio width. A list of ten tutorial-clone projects signals that you can follow instructions. Two or three production-shaped systems — with real architecture decisions, real bugs you debugged, and real tradeoffs you made — signal that you can be trusted with ambiguity. International hiring managers are not looking for proof you can code; plenty of candidates can code. They are looking for proof you can be handed a vague problem and come back with a working system.',
      'The third thing, and the one most often skipped, is writing about the work. Fixing a subtle Mongoose indexing bug or untangling a logger serialization issue is invisible unless you describe it. Writing it up does two things at once: it forces you to actually understand the fix well enough to explain it, and it gives a recruiter or future client something to find when they search your name instead of an empty LinkedIn profile.',
      'None of this is about pretending location does not matter. It is about controlling the parts of the equation that are actually yours to control — the clarity of your work, the depth of your projects, and the visibility of your thinking — so that by the time someone is deciding whether to take a chance on a developer in Ibadan, the decision feels obvious instead of risky.',
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
