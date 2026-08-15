import Button from '../Button/Button'
import './NotFound.css'

function NotFound({ onGoHome, onContact }) {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__message">
          It looks like the page you’re looking for can’t be found.
        </p>

        <div className="not-found__actions">
          <Button variant="outline" onClick={onGoHome}>
            Go Home
          </Button>
          <Button variant="outline" onClick={onContact}>
            Contact Dey
          </Button>
        </div>
      </div>
    </main>
  )
}

export default NotFound
