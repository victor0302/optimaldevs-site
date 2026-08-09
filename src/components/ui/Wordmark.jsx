/**
 * The OptimalDevs wordmark.
 *
 * BRAND.md section 6 specifies `> optimal_devs` followed by an orange block
 * cursor, all lowercase. Vic walked that back on 2026-08-09 in two steps:
 * the cursor read as a stray square rather than a caret, and the lowercase
 * spaced form read as set text rather than a name. It is now the company
 * name as written everywhere else, set in the brand's mono face.
 *
 * Keeping one spelling of the name across the site, LinkedIn, and search
 * results is worth more than the terminal reference (BRAND.md section 10,
 * open question 1, which flagged three competing spellings).
 */
export function Wordmark({ className = "" }) {
  return (
    <span className={`font-mono font-medium text-ink whitespace-nowrap ${className}`}>
      OptimalDevs
    </span>
  )
}
