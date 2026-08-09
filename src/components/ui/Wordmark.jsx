/**
 * The OptimalDevs wordmark.
 *
 * BRAND.md section 6 specifies `> optimal_devs` followed by a solid orange
 * block cursor. Vic dropped the cursor and the underscore on 2026-08-09:
 * the block read as a stray square rather than a terminal caret, and the
 * spaced form is easier to read as a company name. The prompt stays, since
 * it is what makes the mark a mark rather than set text.
 *
 * Always lowercase. It is a lockup, never prose: in a sentence the company
 * is "OptimalDevs".
 */
export function Wordmark({ className = "" }) {
  return (
    <span className={`font-mono font-medium text-ink whitespace-nowrap ${className}`}>
      &gt; optimal devs
    </span>
  )
}
