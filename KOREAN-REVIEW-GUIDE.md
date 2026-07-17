# Korean version — review guide

The site now has a full Korean version at /ko/ (e.g. pupacenter.org/ko/). It was translated by AI and **must be reviewed by a native/fluent Korean speaker before the NISE event**. This guide tells the reviewer exactly where to look.

## What is fully in Korean (please review all of it)
- Site chrome: navigation, footer, accessibility toolbar (src/i18n/ui.ts → the `ko:` block; src/components/AccessibilityToolbar.astro)
- Home (src/i18n/home.ts → `ko:` block)
- About, Programs, Enrollment (incl. all 17 FAQs), Workshops, Contact, Donate, Get Involved, Resources, Growth Journeys intro, Accessibility page (each component's `ko:` block)
- All 6 Growth Journey stories (src/content/stories/ko-*.md)

## Deliberate exceptions (currently English on the Korean site)
- **Board & Team personal bios** — pages are Korean (titles, intros, role labels) but the 12 personal bios show English, with a note saying so. Personal descriptions deserve human translation; the reviewer can translate them directly into each member's `bio:` object as a `ko:` key in BoardPage.astro / TeamPage.astro.
- **Blog articles** — the Korean blog page lists the English articles with a note. The 8 parenting-guidance articles are the most sensitive content and should be translated with review, as a follow-up batch.

## Terminology choices for the reviewer to confirm
- neurodivergent → 신경다양인 / 신경다양성 (adjectival)
- Growth Journeys → 성장 이야기
- work readiness → 취업 준비 · life skills → 생활 기술
- Enrollment → 입학 안내 · probation period → 적응 기간(probation)
- Get Involved → 함께하기 · Donate → 후원하기 · Resources → 자료실
- Program names Mandiri / Karya / Access and "PUPA Bites/Coffee/Tacta/Eggstra" kept in Latin script
- Tone: formal-polite 합니다체 throughout
- Contact/WhatsApp notes ask Korean visitors to write in English or Indonesian (so staff can reply) — confirm this is desired

## How the reviewer edits
All Korean text lives in the `ko:` blocks of the files above — plain text side by side with EN and ID. Edit, then commit/push (or send the edited files back).
