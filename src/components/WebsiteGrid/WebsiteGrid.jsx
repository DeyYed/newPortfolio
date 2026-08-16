import { useId, useMemo, useState } from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import Button from '../Button/Button'
import WebsiteCard from '../WebsiteCard/WebsiteCard'
import { WEBSITE_SECTION_DESCRIPTION } from '../../data/websites'
import './WebsiteGrid.css'

const ALL_WEBSITES_FILTER = 'all'
const WEBSITES_PER_PAGE = 9

function WebsiteGrid({
  categories,
  title = 'Websites I Helped Create',
  description = WEBSITE_SECTION_DESCRIPTION,
}) {
  const [activeFilter, setActiveFilter] = useState(ALL_WEBSITES_FILTER)
  const [currentPage, setCurrentPage] = useState(1)
  const titleId = useId()
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
  const pageCount = Math.max(1, Math.ceil(websites.length / WEBSITES_PER_PAGE))
  const visibleWebsites = websites.slice(
    (currentPage - 1) * WEBSITES_PER_PAGE,
    currentPage * WEBSITES_PER_PAGE,
  )
  const filterOptions = [
    categories[0],
    {
      id: ALL_WEBSITES_FILTER,
      filterLabel: 'All Websites',
      mobileFilterLabel: 'All Site',
    },
    ...categories.slice(1),
  ].filter(Boolean)

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    setCurrentPage(1)
  }

  return (
    <section className="website-grid" aria-labelledby={titleId}>
      <div className="website-grid__inner">
        <div className="website-grid__heading" aria-live="polite">
          <h2 className="website-grid__title" id={titleId}>
            {activeTitle}
          </h2>
          {activeDescription ? (
            <p className="website-grid__description">{activeDescription}</p>
          ) : null}
        </div>

        <div className="website-grid__filters" aria-label="Filter websites">
          {filterOptions.map((filter) => (
            <Button
              className="website-grid__filter"
              key={filter.id}
              variant={activeFilter === filter.id ? 'solid' : 'outline'}
              aria-label={filter.filterLabel}
              aria-pressed={activeFilter === filter.id}
              onClick={() => handleFilterChange(filter.id)}
            >
              <span className="website-filter-label website-filter-label--desktop">
                {filter.filterLabel}
              </span>
              <span className="website-filter-label website-filter-label--mobile">
                {filter.mobileFilterLabel ?? filter.filterLabel}
              </span>
            </Button>
          ))}
        </div>

        <ul className="website-grid__cards">
          {visibleWebsites.map((website) => (
            <WebsiteCard key={website.url} website={website} />
          ))}
        </ul>

        <nav className="website-grid__pagination" aria-label="Website pages">
          <Button
            className="website-grid__page-button website-grid__page-arrow"
            variant="outline"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          >
            <IoArrowBack aria-hidden="true" />
          </Button>

          <div className="website-grid__page-numbers">
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
              <Button
                className="website-grid__page-button"
                key={page}
                variant={currentPage === page ? 'solid' : 'outline'}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            className="website-grid__page-button website-grid__page-arrow"
            variant="outline"
            aria-label="Next page"
            disabled={currentPage === pageCount}
            onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
          >
            <IoArrowForward aria-hidden="true" />
          </Button>
        </nav>
      </div>
    </section>
  )
}

export default WebsiteGrid
