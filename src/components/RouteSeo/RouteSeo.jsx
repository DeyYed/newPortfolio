import { useEffect } from 'react'

const HOME_SEO = {
  title: 'John Dayrill P. Flores | Web Developer Portfolio',
  description:
    'Explore the portfolio of John Dayrill P. Flores, a web developer creating responsive websites and practical digital experiences for clients and users.',
}

const PAGE_SEO = {
  about: {
    title: 'About John Dayrill P. Flores | Developer & IT Professional',
    description:
      'Learn about John Dayrill P. Flores, a Magna Cum Laude IT graduate with professional experience in web development, technical support, and digital solutions.',
  },
  projects: {
    title: 'Web Development Projects | John Dayrill P. Flores',
    description:
      'Explore web development projects by John Dayrill P. Flores, featuring AI-powered tools, responsive applications, and practical user-focused digital solutions.',
  },
  achievements: {
    title: 'Achievements & Awards | John Dayrill P. Flores Portfolio',
    description:
      'Discover the academic honors, competition awards, and professional recognition earned by John Dayrill P. Flores through consistency, skill, and dedication.',
  },
  skills: {
    title: 'Web Development Skills | John Dayrill P. Flores',
    description:
      'Explore the programming languages, frameworks, databases, platforms, and technical tools John Dayrill P. Flores uses to build reliable digital experiences.',
  },
  certificates: {
    title: 'Certificates & Training | John Dayrill P. Flores',
    description:
      'View the certificates and training completed by John Dayrill P. Flores, reflecting his commitment to continuous learning, technical growth, and development.',
  },
  'work-experience': {
    title: 'Work Experience | John Dayrill P. Flores Portfolio',
    description:
      'Explore the professional experience of John Dayrill P. Flores in web development and technical support, including his responsibilities and contributions.',
  },
  contact: {
    title: 'Contact John Dayrill P. Flores | Developer Portfolio',
    description:
      'Contact John Dayrill P. Flores to discuss employment opportunities, freelance projects, web development needs, or potential professional collaborations.',
  },
}

const NOT_FOUND_SEO = {
  title: 'Page Not Found | John Dayrill P. Flores Portfolio',
  description:
    'The page you are looking for could not be found. Return to the portfolio of John Dayrill P. Flores to explore his projects, experience, skills, and work.',
}

function setMetaTag(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function RouteSeo({ pathname, homePath, isNotFound }) {
  useEffect(() => {
    const relativePath = pathname.slice(homePath.length).replace(/^\/+|\/+$/g, '')
    const seo = isNotFound ? NOT_FOUND_SEO : PAGE_SEO[relativePath] ?? HOME_SEO
    const canonicalUrl = new URL(pathname, window.location.origin).href

    document.title = seo.title
    setMetaTag('name', 'description', seo.description)
    setMetaTag('name', 'robots', isNotFound ? 'noindex, nofollow' : 'index, follow')
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:title', seo.title)
    setMetaTag('property', 'og:description', seo.description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', seo.title)
    setMetaTag('name', 'twitter:description', seo.description)
    setCanonical(canonicalUrl)
  }, [homePath, isNotFound, pathname])

  return null
}

export default RouteSeo
