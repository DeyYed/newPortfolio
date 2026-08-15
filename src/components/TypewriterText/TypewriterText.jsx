import { useEffect, useState } from 'react'
import './TypewriterText.css'

function TypewriterText({ lines, className = '' }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handlePreferenceChange = (event) => setPrefersReducedMotion(event.matches)

    mediaQuery.addEventListener('change', handlePreferenceChange)

    return () => mediaQuery.removeEventListener('change', handlePreferenceChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(lines[0] ?? '')
      return undefined
    }

    const currentLine = lines[lineIndex] ?? ''
    let delay = isDeleting ? 35 : 70

    if (!isDeleting && displayedText === currentLine) {
      delay = 1600
    } else if (isDeleting && displayedText === '') {
      delay = 350
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && displayedText === currentLine) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && displayedText === '') {
        setLineIndex((index) => (index + 1) % lines.length)
        setIsDeleting(false)
        return
      }

      const nextLength = displayedText.length + (isDeleting ? -1 : 1)
      setDisplayedText(currentLine.slice(0, nextLength))
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [displayedText, isDeleting, lineIndex, lines, prefersReducedMotion])

  const typewriterClassName = `typewriter-text ${className}`.trim()

  return (
    <h1 className={typewriterClassName}>
      <span className="typewriter-text__accessible">{lines.join(' ')}</span>
      <span aria-hidden="true">{displayedText}</span>
      <span className="typewriter-text__cursor" aria-hidden="true" />
    </h1>
  )
}

export default TypewriterText
