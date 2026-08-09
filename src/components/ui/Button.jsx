import { Link } from "react-router-dom"

const baseClasses =
  "inline-flex items-center justify-center font-mono font-medium text-[0.9rem] px-5 py-2 rounded-button transition-colors duration-200 focus-visible:outline-2 disabled:opacity-60 disabled:cursor-not-allowed"

const variants = {
  // Ink on orange measures 6.07:1; white on orange is 3.09:1 and fails AA.
  primary: "bg-accent text-ink hover:bg-[#E14F14] disabled:hover:bg-accent",
  // Orange on cream is 2.73:1, so the ghost label is ink and the orange
  // lives in the border. Hover inverts to an ink fill rather than tinting.
  ghost:
    "border border-accent text-ink hover:bg-ink hover:text-bg disabled:hover:bg-transparent disabled:hover:text-ink",
}

export function Button({
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  children,
  className = "",
  ...rest
}) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
