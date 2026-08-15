import SocialLinks from '../SocialLinks/SocialLinks'
import './AboutDetails.css'

function AboutDetails({ imageSrc, imageAlt, title, paragraphs, socialItems }) {
  return (
    <section className="about-details" aria-labelledby="about-details-title">
      <div className="about-details__inner">
        <aside className="about-details__profile" aria-label="Contact details">
          <img className="about-details__image" src={imageSrc} alt={imageAlt} />

          <div className="about-details__contact-list">
            <div className="about-details__contact-item">
              <p className="about-details__label">Email</p>
              <a
                className="about-details__contact-link"
                href="mailto:johndayrillp.flores@gmail.com"
              >
                johndayrillp.flores@gmail.com
              </a>
            </div>

            <div className="about-details__contact-item">
              <p className="about-details__label">Phone Number</p>
              <a className="about-details__contact-link" href="tel:+639078050622">
                +63 907-805-0622
              </a>
            </div>

            <div className="about-details__contact-item">
              <p className="about-details__label">Address</p>
              <address className="about-details__address">
                San Juan Nepomuceno, Betis, Guagua, Pampanga
              </address>
            </div>
          </div>

          <SocialLinks
            items={socialItems}
            ariaLabel="John Dayrill Flores social links"
            className="about-details__social-links"
          />
        </aside>

        <div className="about-details__content">
          <h2 className="about-details__title" id="about-details-title">
            {title}
          </h2>

          <div className="about-details__copy">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDetails
