import { useEffect, useState } from 'react'
import './Header.css'

function Header({ logoSrc, logoAlt, menuItems, onLogoClick, onNavigate, onMenuClick, isMenuOpen }) {
  const [isAtTop, setIsAtTop] = useState(() => window.scrollY <= 8)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`site-header ${isAtTop ? 'site-header--transparent' : ''}`}>
      <div className="site-header__inner">
        <a
          className="site-header__logo-link"
          href="/"
          aria-label="Go to homepage"
          onClick={onLogoClick}
        >
          <img className="site-header__logo" src={logoSrc} alt={logoAlt} />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {menuItems.map((item) => (
            <a
              key={item.label}
              className="site-header__nav-link"
              href={item.href}
              onClick={(event) => onNavigate?.(event, item)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="site-header__menu-button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={onMenuClick}
        >
          <span
            className={`site-header__menu-icon ${isMenuOpen ? 'site-header__menu-icon--active' : ''}`}
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </header>
  )
}

export default Header
