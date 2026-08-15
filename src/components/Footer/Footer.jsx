import SocialLinks from '../SocialLinks/SocialLinks'
import './Footer.css'

function Footer({ logoSrc, socialItems, onHomeClick }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" id="get-in-touch">
      <div className="site-footer__inner">
        <section className="site-footer__top">
          <h2 className="site-footer__name">John Dayrill Flores</h2>

          <div className="site-footer__touch-row">
            <p className="site-footer__touch">Get in Touch</p>

            <div className="site-footer__contact-block">
              <div className="site-footer__contact-grid">
                <div className="site-footer__contact-item">
                  <p className="site-footer__label">Email</p>
                  <a className="site-footer__value-link" href="mailto:johndayrill.flores@gmail.com">
                    johndayrill.flores@gmail.com
                  </a>
                </div>
                <div className="site-footer__contact-item">
                  <p className="site-footer__label">Phone number</p>
                  <a className="site-footer__value-link" href="tel:09078050622">
                    +63 907-805-0622
                  </a>
                </div>
              </div>
    
              <div className="site-footer__contact-item site-footer__contact-item--address">
                <p className="site-footer__label">Address:</p>
                <p className="site-footer__value-text">San Juan Nepomuceno, <br></br> Betis Guagua Pampanga</p>
              </div>
            </div>
          </div>
        </section>

        <section className="site-footer__middle">
          <img className="site-footer__logo" src={logoSrc} alt="Portfolio light logo" />
          <p className="site-footer__disclaimer">
            This portfolio showcases my web development and coding work. All images,
            icons, and other visual elements used are stock assets sourced from
            third-party platforms and are included solely for demonstration and
            presentation purposes. I do not claim ownership of these materials, and all
            rights belong to their respective owners.
          </p>
        </section>

        <section className="site-footer__bottom">
          <a className="site-footer__developer-link" href="#home" onClick={onHomeClick}>
            Developed by John Dayrill Flores
          </a>
          <p className="site-footer__copyright">Copyright © {currentYear}</p>
          <SocialLinks
            items={socialItems}
            theme="light"
            ariaLabel="Footer social links"
            className="site-footer__social-list"
          />
        </section>
      </div>
    </footer>
  )
}

export default Footer
