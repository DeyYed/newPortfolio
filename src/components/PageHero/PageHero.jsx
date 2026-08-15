import { useId } from 'react'
import './PageHero.css'

function PageHero({ imageSrc, imageAlt = '', preTitle, title, description }) {
  const titleId = useId()

  return (
    <section className="page-hero" aria-labelledby={titleId}>
      <img className="page-hero__image" src={imageSrc} alt={imageAlt} />

      <div className="page-hero__content">
        <p className="page-hero__pre-title">{preTitle}</p>
        <h1 className="page-hero__title" id={titleId}>
          {title}
        </h1>
        <p className="page-hero__description">{description}</p>
      </div>
    </section>
  )
}

export default PageHero
