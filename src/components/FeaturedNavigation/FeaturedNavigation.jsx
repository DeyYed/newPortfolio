import './FeaturedNavigation.css'

function FeaturedNavigation({ items }) {
  return (
    <nav className="featured-navigation" aria-label="Explore portfolio sections">
      <ul className="featured-navigation__grid">
        {items.map((item) => (
          <li className="featured-navigation__item" key={item.title}>
            <a
              className="featured-navigation__link"
              href={item.href}
              aria-label={`${item.title}: ${item.description}`}
              onClick={(event) => {
                if (item.onClick) {
                  event.preventDefault()
                  item.onClick()
                }
              }}
            >
              <img
                className="featured-navigation__image"
                src={item.imageSrc}
                alt=""
              />
              <span className="featured-navigation__overlay" aria-hidden="true" />
              <span className="featured-navigation__content">
                <span className="featured-navigation__title">{item.title}</span>
                <span className="featured-navigation__description">
                  {item.description}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default FeaturedNavigation
