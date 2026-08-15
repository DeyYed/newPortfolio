import { useId, useState } from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import Button from '../Button/Button'
import './WorkExperienceSlider.css'

function WorkExperienceSlider({ experiences, description, onViewMore }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionTitleId = useId()
  const activeExperience = experiences[activeIndex]

  const changeExperience = (direction) => {
    setActiveIndex(
      (index) => (index + direction + experiences.length) % experiences.length,
    )
  }

  return (
    <section className="work-experience-slider" aria-labelledby={sectionTitleId}>
      <div className="work-experience-slider__inner">
        <h2 className="work-experience-slider__heading" id={sectionTitleId}>
          Work Experience
        </h2>
        {description ? (
          <p className="work-experience-slider__section-description">
            {description}
          </p>
        ) : null}

        <div className="work-experience-slider__layout">
          <Button
            className="work-experience-slider__arrow"
            variant="solid"
            aria-label="Show previous work experience"
            onClick={() => changeExperience(-1)}
          >
            <IoArrowBack aria-hidden="true" />
          </Button>

          <article className="work-experience-slider__content" aria-live="polite">
            <h3 className="work-experience-slider__title">
              {activeExperience.title}
            </h3>
            <p className="work-experience-slider__company">
              {activeExperience.company}
            </p>
            <p className="work-experience-slider__meta">
              {activeExperience.meta}
            </p>
            <p className="work-experience-slider__description">
              {activeExperience.description}
            </p>
            <Button
              className="work-experience-slider__view-more"
              href="/work-experience"
              variant="solid"
              onClick={(event) => {
                if (onViewMore) {
                  event.preventDefault()
                  onViewMore()
                }
              }}
            >
              View More
            </Button>
          </article>

          <Button
            className="work-experience-slider__arrow"
            variant="solid"
            aria-label="Show next work experience"
            onClick={() => changeExperience(1)}
          >
            <IoArrowForward aria-hidden="true" />
          </Button>
        </div>

        <p className="work-experience-slider__counter" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, '0')} /{' '}
          {String(experiences.length).padStart(2, '0')}
        </p>
      </div>
    </section>
  )
}

export default WorkExperienceSlider
