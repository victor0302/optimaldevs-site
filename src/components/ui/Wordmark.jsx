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
 *
 * The chevrons match public/favicon.svg, so the browser tab and the header
 * carry one mark rather than two. The pair was un-nested and thinned on
 * 2026-08-10: at the ~22px the header renders it, the original overlapping
 * strokes fused into a single arrow and you could not see two chevrons at
 * all. Separated, it still reads as `>>` down to favicon size.
 *
 * Sizes are in `em` so the mark tracks whatever type size it sits in.
 */
export function Mark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 300 300"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
    >
      <rect width="300" height="300" rx="30" className="fill-ink" />
      <path
        d="M80 82 L146 150 L80 218"
        fill="none"
        strokeWidth="28"
        strokeLinejoin="miter"
        className="stroke-bg"
      />
      <path
        d="M162 82 L228 150 L162 218"
        fill="none"
        strokeWidth="28"
        strokeLinejoin="miter"
        className="stroke-accent"
      />
    </svg>
  )
}

export function Wordmark({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-[0.4em] font-mono font-medium text-ink whitespace-nowrap ${className}`}
    >
      <Mark className="w-[1.05em] h-[1.05em]" />
      OptimalDevs
    </span>
  )
}
