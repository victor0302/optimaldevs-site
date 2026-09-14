import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { useReducedMotion } from "../../hooks/useReducedMotion.js"

export function FadeIn({ children, delay = 0, y = 8, className = "" }) {
  const ref = useRef(null)
  const [focused, setFocused] = useState(false)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const reduced = useReducedMotion()

  return (
    <div
      ref={ref}
      data-revealed={inView && !reduced && !focused ? "true" : undefined}
      onFocusCapture={() => setFocused(true)}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-distance": `${y}px` }}
      className={`reveal-once ${className}`}
    >
      {children}
    </div>
  )
}
