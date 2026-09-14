import { Link } from "react-router-dom"

const baseClasses =
  "button-motion inline-flex min-h-11 items-center justify-center gap-2 font-medium text-[0.9rem] px-5 py-2.5 rounded-button transition-colors duration-200 focus-visible:outline-2 disabled:opacity-60 disabled:cursor-not-allowed"

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover disabled:hover:bg-accent",
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
      <Link to={to} onClick={onClick} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
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
