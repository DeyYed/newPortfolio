import { useId } from 'react'
import Button from '../Button/Button'
import ContactSubmissionSuccess from '../ContactSubmissionSuccess/ContactSubmissionSuccess'
import useContactSubmission, { FORMSPREE_ENDPOINT } from '../../hooks/useContactSubmission'
import './ContactForm.css'

function ContactForm({
  title = 'Send Me a Message',
  description = 'Tell me a little about your project, idea, or inquiry, and I’ll get back to you as soon as I can.',
  submitLabel = 'Submit',
  onSubmit,
}) {
  const descriptionId = useId()
  const {
    countdown,
    errorMessage,
    goHome,
    handleSubmit,
    isSubmitting,
    isSuccess,
  } = useContactSubmission(onSubmit)

  return (
    <section className="contact-form-section" aria-labelledby={`${descriptionId}-title`}>
      <div className="contact-form-section__inner">
        {!isSuccess ? <header className="contact-form-section__header">
          <h2 className="contact-form-section__title" id={`${descriptionId}-title`}>
            {title}
          </h2>
          <p className="contact-form-section__description" id={descriptionId}>
            {description}
          </p>
        </header> : null}

        {isSuccess ? (
          <ContactSubmissionSuccess countdown={countdown} onGoHome={goHome} />
        ) : (
        <form
          className="contact-form"
          action={FORMSPREE_ENDPOINT}
          method="post"
          aria-describedby={descriptionId}
          onSubmit={handleSubmit}
        >
          <label className="contact-form__field">
            <span>Name <span aria-hidden="true">*</span></span>
            <input type="text" name="name" autoComplete="name" required />
          </label>

          <label className="contact-form__field">
            <span>Email <span aria-hidden="true">*</span></span>
            <input type="email" name="email" autoComplete="email" required />
          </label>

          <label className="contact-form__field">
            <span>Phone</span>
            <input type="tel" name="phone" autoComplete="tel" />
          </label>

          <label className="contact-form__field">
            <span>Address</span>
            <input type="text" name="address" autoComplete="street-address" />
          </label>

          <label className="contact-form__field contact-form__field--message">
            <span>Message</span>
            <textarea name="message" rows="7" />
          </label>

          {errorMessage ? (
            <p className="contact-form__error" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <Button
            className="contact-form__submit"
            type="submit"
            variant="solid"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : submitLabel}
          </Button>
        </form>
        )}
      </div>
    </section>
  )
}

export default ContactForm
