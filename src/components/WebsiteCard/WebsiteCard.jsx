import { useState } from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import { WEBSITE_SHARE_IMAGES } from '../../data/websiteShareImages'
import './WebsiteCard.css'

function getScreenshotUrl(websiteUrl) {
  return `https://image.thum.io/get/width/900/crop/750/noanimate/${websiteUrl}`
}

function normalizeSocialImageUrl(imageUrl) {
  if (imageUrl?.includes('res.cloudinary.com/luxuryp/videos/')) {
    return `${imageUrl}.jpg`
  }

  return imageUrl
}

function WebsiteCard({ website }) {
  const screenshotUrl = getScreenshotUrl(website.url)
  const [imageSource, setImageSource] = useState(
    normalizeSocialImageUrl(WEBSITE_SHARE_IMAGES[website.url]) ?? screenshotUrl,
  )
  const [hasImageError, setHasImageError] = useState(false)

  const handleImageError = () => {
    if (imageSource !== screenshotUrl) {
      setImageSource(screenshotUrl)
      return
    }

    setHasImageError(true)
  }

  return (
    <li className="website-card">
      <a
        className="website-card__link"
        href={website.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${website.name} website (opens in a new tab)`}
      >
        <div className="website-card__media">
          {hasImageError ? (
            <span className="website-card__fallback">Preview unavailable</span>
          ) : (
            <img
              className="website-card__thumbnail"
              src={imageSource}
              alt={`${website.name} social sharing preview`}
              loading="lazy"
              decoding="async"
              onError={handleImageError}
            />
          )}
        </div>

        <div className="website-card__content">
          <h3 className="website-card__title">{website.name}</h3>
          <IoOpenOutline className="website-card__external-icon" aria-hidden="true" />
        </div>
      </a>
    </li>
  )
}

export default WebsiteCard
