import { Link } from "react-router-dom"

const baseClasses =
  "inline-flex items-center justify-center font-medium text-[0.9rem] px-5 py-2 rounded-button transition-colors duration-200 focus-visible:outline-2"

const variants = {
  primary:
    "bg-accent text-white hover:bg-[#0a5e61]",
  ghost:
    "border border-accent text-accent hover:bg-accent-light",
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
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
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
