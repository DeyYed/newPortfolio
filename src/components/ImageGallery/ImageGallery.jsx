import { useEffect, useId, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import './ImageGallery.css'

function ImageGallery({ title, images }) {
  const [activeImage, setActiveImage] = useState(null)
  const dialogTitleId = useId()
  const closeButtonRef = useRef(null)
  const previousActiveElementRef = useRef(null)

  useEffect(() => {
    if (!activeImage) {
      return undefined
    }

    previousActiveElementRef.current = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousActiveElementRef.current?.focus()
    }
  }, [activeImage])

  const handleBackdropPointerDown = (event) => {
    if (event.target === event.currentTarget) {
      setActiveImage(null)
    }
  }

  return (
    <>
      <section className="image-gallery" aria-labelledby="image-gallery-title">
        <div className="image-gallery__inner">
          <h2 className="image-gallery__title" id="image-gallery-title">
            {title}
          </h2>

          <ul className="image-gallery__grid">
            {images.map((image) => (
              <li className="image-gallery__item" key={image.title}>
                <button
                  type="button"
                  className="image-gallery__button"
                  aria-label={`Enlarge ${image.title}`}
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    className="image-gallery__image"
                    src={image.src}
                    alt={image.alt ?? image.title}
                    loading="lazy"
                  />
                  <span className="image-gallery__overlay">
                    <span className="image-gallery__item-title">{image.title}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {activeImage ? (
        <div className="image-gallery__lightbox" onPointerDown={handleBackdropPointerDown}>
          <figure
            className="image-gallery__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="image-gallery__close"
              aria-label="Close enlarged certificate"
              onClick={() => setActiveImage(null)}
            >
              <IoClose aria-hidden="true" />
            </button>
            <img
              className="image-gallery__enlarged-image"
              src={activeImage.src}
              alt={activeImage.alt ?? activeImage.title}
            />
            <figcaption className="image-gallery__caption" id={dialogTitleId}>
              {activeImage.title}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}

export default ImageGallery
