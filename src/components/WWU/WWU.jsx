import { useId } from 'react'
import Button from '../Button/Button'
import './WWU.css'

function WWU({
  imageSrc,
  preTitle = 'Let’s Work Together',
  title = 'Interested in Hiring Me?',
  description = 'I’m open to employment opportunities, freelance projects, and meaningful collaborations where I can contribute my skills, grow professionally, and help bring great ideas to life.',
  buttonLabel = 'Get in Touch',
  onButtonClick,
}) {
  const titleId = useId()
  const backgroundStyle = {
    '--wwu-background-image': `url(${imageSrc})`,
  }

  return (
    <section className="wwu" style={backgroundStyle} aria-labelledby={titleId}>
      <div className="wwu__content">
        <p className="wwu__pre-title">{preTitle}</p>
        <h2 className="wwu__title" id={titleId}>
          {title}
        </h2>
        <p className="wwu__description">{description}</p>
        <Button className="wwu__button" variant="outline" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </div>
    </section>
  )
}

export default WWU
