import Button from '../Button/Button'
import './ContactSubmissionSuccess.css'

function ContactSubmissionSuccess({ countdown, onGoHome }) {
  return (
    <div className="contact-submission-success" role="status" aria-live="polite">
      <h3 className="contact-submission-success__title">Thank You!</h3>
      <p className="contact-submission-success__message">
        Your message has been sent successfully. I’ll get back to you as soon as I can.
      </p>
      <Button type="button" variant="solid" onClick={onGoHome}>
        Go Back Home
      </Button>
      <p className="contact-submission-success__countdown">
        Automatically redirecting to Home in {countdown}{' '}
        {countdown === 1 ? 'second' : 'seconds'}.
      </p>
    </div>
  )
}

export default ContactSubmissionSuccess
