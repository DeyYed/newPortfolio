import { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import './CertificateShelf.css'

const WIDTH_TRANSITION_DURATION = 1400

function CertificateShelf({ certificates, description, onCertificateClick }) {
  const [activeCertificateIndex, setActiveCertificateIndex] = useState(0)
  const activeCertificateIndexRef = useRef(0)
  const isTransitioningRef = useRef(false)
  const pendingCertificateIndexRef = useRef(null)
  const transitionTimeoutRef = useRef(null)

  useEffect(
    () => () => window.clearTimeout(transitionTimeoutRef.current),
    [],
  )

  const activateCertificate = (index) => {
    if (index === activeCertificateIndexRef.current) {
      return
    }

    activeCertificateIndexRef.current = index
    pendingCertificateIndexRef.current = null
    isTransitioningRef.current = true
    setActiveCertificateIndex(index)
    window.clearTimeout(transitionTimeoutRef.current)

    transitionTimeoutRef.current = window.setTimeout(() => {
      isTransitioningRef.current = false

      const pendingIndex = pendingCertificateIndexRef.current
      pendingCertificateIndexRef.current = null

      if (pendingIndex !== null && pendingIndex !== activeCertificateIndexRef.current) {
        activateCertificate(pendingIndex)
      }
    }, WIDTH_TRANSITION_DURATION)
  }

  const handleCertificatePointerMove = (event, index) => {
    const horizontalMovement = Math.abs(event.nativeEvent.movementX ?? 0)
    const verticalMovement = Math.abs(event.nativeEvent.movementY ?? 0)

    if (event.pointerType === 'mouse' && horizontalMovement + verticalMovement < 2) {
      return
    }

    if (index === activeCertificateIndexRef.current) {
      pendingCertificateIndexRef.current = null
      return
    }

    if (isTransitioningRef.current) {
      pendingCertificateIndexRef.current = index
      return
    }

    activateCertificate(index)
  }

  return (
    <section className="certificate-shelf" aria-labelledby="certificate-shelf-title">
      <h2 className="certificate-shelf__heading" id="certificate-shelf-title">
        Certificates
      </h2>
      {description ? (
        <p className="certificate-shelf__description">{description}</p>
      ) : null}

      <ul
        className="certificate-shelf__list certificate-shelf__list--has-active"
      >
        {certificates.map((certificate, index) => (
          <li
            className={`certificate-shelf__item ${
              activeCertificateIndex === index ? 'certificate-shelf__item--active' : ''
            }`}
            key={certificate.title}
            onPointerMove={(event) => handleCertificatePointerMove(event, index)}
            onFocusCapture={() => activateCertificate(index)}
          >
            <a
              className="certificate-shelf__link"
              href="/certificates"
              aria-label={`View ${certificate.title} certificate`}
              onClick={(event) => {
                if (onCertificateClick) {
                  event.preventDefault()
                  onCertificateClick()
                }
              }}
            >
              <img
                className="certificate-shelf__image"
                src={certificate.src}
                alt={certificate.title}
                loading="lazy"
                decoding="async"
              />
              <span className="certificate-shelf__title">{certificate.title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="certificate-shelf__actions">
        <Button
          className="certificate-shelf__view-all"
          href="/certificates"
          variant="solid"
          onClick={(event) => {
            if (onCertificateClick) {
              event.preventDefault()
              onCertificateClick()
            }
          }}
        >
          View All
        </Button>
      </div>
    </section>
  )
}

export default CertificateShelf
