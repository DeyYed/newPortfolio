import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Button from '../Button/Button'
import ContactSubmissionSuccess from '../ContactSubmissionSuccess/ContactSubmissionSuccess'
import useContactSubmission, { FORMSPREE_ENDPOINT } from '../../hooks/useContactSubmission'
import './ContactButton.css'

function ContactButton({
  buttonLabel = 'Contact Dey',
  formTitle = 'Get in Touch',
  submitLabel = 'Send Message',
  variant = 'floating',
  onSubmit,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const nameInputRef = useRef(null)
  const wasOpenRef = useRef(false)
  const formId = useId()
  const {
    countdown,
    errorMessage,
    goHome,
    handleSubmit,
    isSubmitting,
    isSuccess,
    resetSubmission,
  } = useContactSubmission(onSubmit, () => setIsOpen(false))

  const closeForm = useCallback(() => {
    resetSubmission()
    setIsOpen(false)
  }, [resetSubmission])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    nameInputRef.current?.focus()

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        closeForm()
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeForm()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeForm, isOpen])

  useEffect(() => {
    const footer = document.querySelector('.site-footer')

    if (!footer) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)

        if (entry.isIntersecting) {
          resetSubmission()
          setIsOpen(false)

          if (containerRef.current?.contains(document.activeElement)) {
            document.activeElement.blur()
          }
        }
      },
      { threshold: 0.01 },
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [resetSubmission])

  useEffect(() => {
    if (wasOpenRef.current && !isOpen && !isFooterVisible) {
      triggerRef.current?.focus()
    }

    wasOpenRef.current = isOpen
  }, [isFooterVisible, isOpen])

  return (
    <div
      className={`contact-button contact-button--${variant} ${
        isFooterVisible ? 'contact-button--hidden' : ''
      }`}
      ref={containerRef}
      aria-hidden={isFooterVisible}
    >
      {isOpen && (
        <section
          className="contact-button__panel"
          id={formId}
          aria-labelledby={`${formId}-title`}
        >
          <div className="contact-button__header">
            <h2 className="contact-button__title" id={`${formId}-title`}>
              {formTitle}
            </h2>
            <button
              type="button"
              className="contact-button__close"
              aria-label="Close contact form"
              onClick={closeForm}
            >
              <IoClose aria-hidden="true" />
            </button>
          </div>

          {isSuccess ? (
            <ContactSubmissionSuccess countdown={countdown} onGoHome={goHome} />
          ) : (
          <form
            className="contact-button__form"
            action={FORMSPREE_ENDPOINT}
            method="post"
            onSubmit={handleSubmit}
          >
            <label className="contact-button__field">
              <span>Name <span aria-hidden="true">*</span></span>
              <input ref={nameInputRef} type="text" name="name" autoComplete="name" required />
            </label>

            <label className="contact-button__field">
              <span>Email <span aria-hidden="true">*</span></span>
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label className="contact-button__field">
              <span>Phone Number</span>
              <input type="tel" name="phone" autoComplete="tel" />
            </label>

            <label className="contact-button__field">
              <span>Message</span>
              <textarea name="message" rows="4" />
            </label>

            {errorMessage ? (
              <p className="contact-button__error" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <Button
              className="contact-button__submit"
              type="submit"
              variant="solid"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : submitLabel}
            </Button>
          </form>
          )}
        </section>
      )}

      {!isOpen && (
        <button
          ref={triggerRef}
          type="button"
          className="contact-button__trigger"
          aria-expanded="false"
          aria-controls={formId}
          onClick={() => setIsOpen(true)}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  )
}

export default ContactButton
