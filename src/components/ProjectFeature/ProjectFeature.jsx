import { useId } from 'react'
import Button from '../Button/Button'
import './ProjectFeature.css'

function ProjectFeature({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  buttonLabel = 'View Project',
  imagePosition = 'right',
  theme = 'light',
}) {
  const titleId = useId()
  const sectionClassName = [
    'project-feature',
    `project-feature--${theme}`,
    `project-feature--image-${imagePosition}`,
  ].join(' ')

  return (
    <section className={sectionClassName} aria-labelledby={titleId}>
      <div className="project-feature__inner">
        <div className="project-feature__content">
          <h2 className="project-feature__title" id={titleId}>
            {title}
          </h2>
          <p className="project-feature__description">{description}</p>
          <Button
            className="project-feature__button"
            href={href}
            target="_blank"
            rel="noreferrer"
            variant="solid"
          >
            {buttonLabel}
          </Button>
        </div>

        <div className="project-feature__media">
          <img className="project-feature__image" src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  )
}

export default ProjectFeature
