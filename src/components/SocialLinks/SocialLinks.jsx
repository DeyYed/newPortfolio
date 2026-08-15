import SocialIcon from '../SocialIcon/SocialIcon'
import './SocialLinks.css'

function SocialLinks({ items, theme = 'dark', ariaLabel = 'Social links', className = '' }) {
  const listClassName = `social-links social-links--${theme} ${className}`.trim()

  return (
    <ul className={listClassName} aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            className="social-links__link"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
          >
            <span className="social-links__icon">
              <SocialIcon type={item.icon} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
