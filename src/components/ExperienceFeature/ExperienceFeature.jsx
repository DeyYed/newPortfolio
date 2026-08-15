import './ExperienceFeature.css'

function ExperienceFeature({
  title,
  company,
  employmentType,
  dates,
  duration,
  location,
  workArrangement,
  introduction,
  responsibilities,
  images,
  imagePosition = 'right',
}) {
  const hasAnimatedImages = images.length > 1

  return (
    <section
      className={`experience-feature experience-feature--image-${imagePosition}`}
    >
      <div className="experience-feature__inner">
        <div className="experience-feature__content">
          <h2 className="experience-feature__title">{title}</h2>
          <p className="experience-feature__company">
            {company} <span aria-hidden="true">·</span> {employmentType}
          </p>

          <dl className="experience-feature__details">
            <div>
              <dt>Period</dt>
              <dd>
                {dates} <span aria-hidden="true">·</span> {duration}
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                {location} <span aria-hidden="true">·</span> {workArrangement}
              </dd>
            </div>
          </dl>

          {introduction ? (
            <p className="experience-feature__introduction">{introduction}</p>
          ) : null}

          <ul className="experience-feature__responsibilities">
            {responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div
          className={`experience-feature__media ${
            hasAnimatedImages ? 'experience-feature__media--animated' : ''
          }`}
          aria-label={`${company} ${images.length > 1 ? 'partner logos' : 'logo'}`}
        >
          {images.map((image) => (
            <img
              className="experience-feature__logo"
              key={image.src}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceFeature
