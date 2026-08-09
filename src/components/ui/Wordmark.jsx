/**
 * The `> optimal_devs` lockup from BRAND.md section 6.
 *
 * The cursor is a block, not a character, and its geometry is expressed in `em`
 * so the whole lockup scales from font-size alone:
 *
 *   width  0.55em  one character cell
 *   height 0.96em
 *   top    baseline - 0.71em, which puts 0.25em below the baseline
 *   gap    0.35em after the last glyph
 *
 * Always lowercase, always with the underscore. It is a lockup, never prose:
 * in a sentence the company is "OptimalDevs".
 */
export function Wordmark({ blink = false, className = "" }) {
  return (
    <span className={`font-mono font-medium text-ink whitespace-nowrap ${className}`}>
      &gt; optimal_devs
      <span
        aria-hidden="true"
        className={`inline-block bg-accent align-baseline ${blink ? "od-cursor-blink" : ""}`}
        style={{
          width: "0.55em",
          height: "0.96em",
          marginLeft: "0.35em",
          verticalAlign: "-0.25em",
        }}
      />
    </span>
  )
}
