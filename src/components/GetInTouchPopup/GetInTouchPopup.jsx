import { useEffect, useId, useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import contactOverlayImage from '../../assets/contact/contact-overlay.jpg'
import Button from '../Button/Button'
import SocialLinks from '../SocialLinks/SocialLinks'
import './GetInTouchPopup.css'

function GetInTouchPopup({ isOpen, onClose, socialItems, onSubmit }) {
  const titleId = useId()
  const nameInputRef = useRef(null)
  const previousActiveElementRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    previousActiveElementRef.current = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    nameInputRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousActiveElementRef.current?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.currentTarget))
    onSubmit?.(formData, event)
  }

  const handleBackdropPointerDown = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="get-in-touch-popup" onPointerDown={handleBackdropPointerDown}>
      <section
        className="get-in-touch-popup__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="get-in-touch-popup__close"
          aria-label="Close get in touch popup"
          onClick={onClose}
        >
          <IoClose aria-hidden="true" />
        </button>

        <div className="get-in-touch-popup__form-panel">
          <h2 className="get-in-touch-popup__title" id={titleId}>
            Get in Touch
          </h2>

          <form className="get-in-touch-popup__form" onSubmit={handleSubmit}>
            <label className="get-in-touch-popup__field">
              <span>Name <span aria-hidden="true">*</span></span>
              <input ref={nameInputRef} type="text" name="name" autoComplete="name" required />
            </label>

            <label className="get-in-touch-popup__field">
              <span>Email <span aria-hidden="true">*</span></span>
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label className="get-in-touch-popup__field">
              <span>Message</span>
              <textarea name="message" rows="7" />
            </label>

            <Button type="submit" variant="solid">
              Submit
            </Button>
          </form>
        </div>

        <div className="get-in-touch-popup__image-panel">
          <img className="get-in-touch-popup__image" src={contactOverlayImage} alt="" />

          <div className="get-in-touch-popup__details">
            <div className="get-in-touch-popup__contact">
              <p className="get-in-touch-popup__name">John Dayrill Flores</p>
              <a href="mailto:johndayrill.flores@gmail.com">
                johndayrill.flores@gmail.com
              </a>
              <a href="tel:09078050622">09078050622</a>
            </div>

            <div className="get-in-touch-popup__address">
              <p className="get-in-touch-popup__label">Address</p>
              <p>San Juan Nepomuceno Betis Guagua Pampanga</p>
            </div>

            <SocialLinks
              items={socialItems}
              theme="light"
              ariaLabel="Get in touch social links"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInTouchPopup
