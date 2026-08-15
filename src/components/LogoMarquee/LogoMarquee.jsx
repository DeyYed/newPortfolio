import './LogoMarquee.css'

function LogoMarquee({ logos, label = 'Organization logos' }) {
  const repeatedLogos = [...logos, ...logos]

  const renderLogoGroup = (isClone = false) => (
    <div className="logo-marquee__group" aria-hidden={isClone || undefined}>
      {repeatedLogos.map((logo, index) => (
        <div className="logo-marquee__item" key={`${logo.alt}-${index}`}>
          <img
            className={`logo-marquee__image ${logo.className ?? ''}`.trim()}
            src={logo.src}
            alt={isClone || index >= logos.length ? '' : logo.alt}
          />
        </div>
      ))}
    </div>
  )

  return (
    <div className="logo-marquee" role="region" aria-label={label}>
      <div className="logo-marquee__track">
        {renderLogoGroup()}
        {renderLogoGroup(true)}
      </div>
    </div>
  )
}

export default LogoMarquee
