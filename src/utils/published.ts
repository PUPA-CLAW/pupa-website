// Scheduled-publishing helper.
//
// The site is a static build: an article only becomes visible when a build
// runs on or after its `date`. This helper hides articles whose date is still
// in the future, so finished drafts can sit in the repo and go live
// automatically on their publish date. A scheduled rebuild runs on the 1st of each month (with backup
// runs on the 2nd–3rd) — see .github/workflows/scheduled-publish.yml.
//
// Dates are compared on the Asia/Jakarta (WIB) calendar day, so an article
// dated 2026-09-01 appears the moment it becomes 1 September in Indonesia,
// regardless of the build server's timezone.
//
// Preview tip: build with a pretend date to see a future state, e.g.
//   PUPA_NOW=2026-12-01 npm run build

const TZ = 'Asia/Jakarta';

// Optional build-time override (ignored in the browser; only read during build).
const OVERRIDE: Date | undefined =
  typeof process !== 'undefined' && process.env && process.env.PUPA_NOW
    ? new Date(process.env.PUPA_NOW)
    : undefined;

// Format a Date as "YYYY-MM-DD" on the Jakarta calendar (en-CA gives ISO order).
const jakartaYMD = (d: Date): string =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);

/**
 * True when `date` (the article's publish date) has arrived in Jakarta.
 * `now` is injectable for tests; otherwise uses PUPA_NOW or the build moment.
 */
export function isPublished(date: Date, now: Date = OVERRIDE ?? new Date()): boolean {
  return jakartaYMD(date) <= jakartaYMD(now);
}
