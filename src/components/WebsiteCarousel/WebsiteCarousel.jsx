import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import Button from '../Button/Button'
import WebsiteCard from '../WebsiteCard/WebsiteCard'
import { WEBSITE_SECTION_DESCRIPTION } from '../../data/websites'
import './WebsiteCarousel.css'

const ALL_WEBSITES_FILTER = 'all'
const AUTO_ADVANCE_DELAY = 4000

function WebsiteCarousel({
  categories,
  title = 'Websites I Helped Create',
  description = WEBSITE_SECTION_DESCRIPTION,
  theme = 'light',
}) {
  const [activeFilter, setActiveFilter] = useState(ALL_WEBSITES_FILTER)
  const [isPaused, setIsPaused] = useState(false)
  const titleId = useId()
  const viewportRef = useRef(null)

  const activeCategory = categories.find((category) => category.id === activeFilter)
  const websites = useMemo(
    () =>
      activeCategory
        ? activeCategory.websites
        : categories.flatMap((category) => category.websites),
    [activeCategory, categories],
  )
  const activeTitle = activeCategory?.title ?? title
  const activeDescription = activeCategory?.description ?? description
  const filterOptions = [
    categories[0],
    { id: ALL_WEBSITES_FILTER, filterLabel: 'All Websites' },
    ...categories.slice(1),
  ].filter(Boolean)

  const moveCarousel = useCallback((direction) => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    const maximumScroll = viewport.scrollWidth - viewport.clientWidth
    const isAtStart = viewport.scrollLeft <= 2
    const isAtEnd = viewport.scrollLeft >= maximumScroll - 2

    if (direction > 0 && isAtEnd) {
      viewport.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    if (direction < 0 && isAtStart) {
      viewport.scrollTo({ left: maximumScroll, behavior: 'smooth' })
      return
    }

    viewport.scrollBy({
      left: direction * viewport.clientWidth,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    viewportRef.current?.scrollTo({ left: 0, behavior: 'auto' })
  }, [activeFilter])

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      moveCarousel(1)
    }, AUTO_ADVANCE_DELAY)

    return () => window.clearInterval(intervalId)
  }, [isPaused, moveCarousel, websites])

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false)
    }
  }

  return (
    <section
      className={`website-carousel website-carousel--${theme}`}
      aria-labelledby={titleId}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleBlur}
    >
      <div className="website-carousel__inner">
        <div className="website-carousel__heading" aria-live="polite">
          <h2 className="website-carousel__title" id={titleId}>
            {activeTitle}
          </h2>
          {activeDescription ? (
            <p className="website-carousel__description">{activeDescription}</p>
          ) : null}
        </div>

        <div className="website-carousel__layout">
          <Button
            className="website-carousel__arrow"
            variant="solid"
            aria-label="Show previous websites"
            onClick={() => moveCarousel(-1)}
          >
            <IoArrowBack aria-hidden="true" />
          </Button>

          <div className="website-carousel__viewport" ref={viewportRef}>
            <ul className="website-carousel__track">
              {websites.map((website) => (
                <WebsiteCard key={website.url} website={website} />
              ))}
            </ul>
          </div>

          <Button
            className="website-carousel__arrow"
            variant="solid"
            aria-label="Show next websites"
            onClick={() => moveCarousel(1)}
          >
            <IoArrowForward aria-hidden="true" />
          </Button>
        </div>

        <div className="website-carousel__filters" aria-label="Filter websites">
          {filterOptions.map((filter) => (
            <Button
              className="website-carousel__filter"
              key={filter.id}
              variant={activeFilter === filter.id ? 'solid' : 'outline'}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.filterLabel}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebsiteCarousel
