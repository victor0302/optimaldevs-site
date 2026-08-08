import { Link } from "react-router-dom"

const baseClasses =
  "inline-flex items-center justify-center font-medium text-[0.9rem] px-5 py-2 rounded-button transition-colors duration-200 focus-visible:outline-2 disabled:opacity-60 disabled:cursor-not-allowed"

const variants = {
  // Ink on orange measures 6.07:1; white on orange is 3.09:1 and fails AA.
  primary: "bg-accent text-ink hover:bg-[#E14F14] disabled:hover:bg-accent",
  ghost:
    "border border-accent text-accent hover:bg-accent-light disabled:hover:bg-transparent",
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
