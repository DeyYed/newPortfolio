import { useCallback, useEffect, useState } from 'react'

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeanlzd'

const REDIRECT_DELAY_SECONDS = 5

function getFormspreeError(responseData) {
  const messages = responseData?.errors
    ?.map((error) => error.message)
    .filter(Boolean)

  if (responseData?.error) {
    return responseData.error
  }

  return messages?.length
    ? messages.join(' ')
    : 'Your message could not be sent. Please try again.'
}

function useContactSubmission(onSubmit, onBeforeGoHome) {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [countdown, setCountdown] = useState(REDIRECT_DELAY_SECONDS)

  const goHome = useCallback(() => {
    const homePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname

    onBeforeGoHome?.()
    window.history.pushState({}, '', homePath)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [onBeforeGoHome])

  useEffect(() => {
    if (status !== 'success') {
      return undefined
    }

    if (countdown === 0) {
      goHome()
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setCountdown((seconds) => seconds - 1)
    }, 1000)

    return () => window.clearTimeout(timeoutId)
  }, [countdown, goHome, status])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
      const responseData = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(getFormspreeError(responseData))
      }

      onSubmit?.(Object.fromEntries(formData), event)
      form.reset()
      setCountdown(REDIRECT_DELAY_SECONDS)
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Your message could not be sent. Please try again.',
      )
      setStatus('error')
    }
  }

  return {
    countdown,
    errorMessage,
    goHome,
    handleSubmit,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
  }
}

export default useContactSubmission
