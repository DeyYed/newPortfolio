import './Button.css'

function Button({ children, className = '', href, type = 'button', variant = 'solid', ...props }) {
  const buttonClassName = `button button--${variant} ${className}`.trim()

  if (href) {
    return (
      <a className={buttonClassName} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
