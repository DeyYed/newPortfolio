import './SideMenu.css'
import { IoClose } from 'react-icons/io5'
import SocialIcon from '../SocialIcon/SocialIcon'

function SideMenu({ isOpen, menuItems, socialItems, onNavigate, onClose }) {
  return (
    <>
      <button
        type="button"
        className={`side-menu-overlay ${isOpen ? 'side-menu-overlay--open' : ''}`}
        aria-label="Close side menu"
        onClick={onClose}
      />
      <aside className={`side-menu ${isOpen ? 'side-menu--open' : ''}`} aria-hidden={!isOpen}>
        <button
          type="button"
          className="side-menu__close-button"
          aria-label="Close side menu"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <div className="side-menu__content">
          <nav className="side-menu__nav" aria-label="Side menu">
            {menuItems.map((item) => (
              <a
                key={item.label}
                className="side-menu__nav-link"
                href={item.href}
                target={item.target}
                rel={item.rel}
                onClick={(event) => {
                  onNavigate?.(event, item)
                  onClose()
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ul className="side-menu__social-list" aria-label="Social links">
            {socialItems.map((item) => {
              return (
                <li key={item.label}>
                  <a
                    className="side-menu__social-link"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    onClick={onClose}
                  >
                    <span className="side-menu__social-icon">
                      <SocialIcon type={item.icon} />
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SideMenu
