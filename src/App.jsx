import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SideMenu from './components/SideMenu/SideMenu'
import ContactButton from './components/ContactButton/ContactButton'
import GetInTouchPopup from './components/GetInTouchPopup/GetInTouchPopup'
import ContactPage from './pages/ContactPage/ContactPage'
import AchievementsPage from './pages/AchievementsPage/AchievementsPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import CertificatesPage from './pages/CertificatesPage/CertificatesPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import WorkExperiencePage from './pages/WorkExperiencePage/WorkExperiencePage'
import AboutPage from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './components/NotFound/NotFound'
import RouteSeo from './components/RouteSeo/RouteSeo'
import darkLogo from './assets/logos/dark-logo.png'
import lightLogo from './assets/logos/light-logo.png'
import { HEADER_NAV_ITEMS, SIDE_MENU_ITEMS, SOCIAL_ITEMS } from './data/navigation'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false)
  const [pathname, setPathname] = useState(window.location.pathname)

  const handleMenuClick = () => {
    setIsMenuOpen((previousState) => !previousState)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handlePathChange = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handlePathChange)

    return () => {
      window.removeEventListener('popstate', handlePathChange)
    }
  }, [])

  const navigateTo = (path) => {
    setIsGetInTouchOpen(false)
    window.history.pushState({}, '', path)
    setPathname(window.location.pathname)
    window.scrollTo({ top: 0 })
  }

  const homePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname
  const contactPath = new URL('contact', `${window.location.origin}${homePath}`).pathname
  const aboutPath = new URL('about', `${window.location.origin}${homePath}`).pathname
  const achievementsPath = new URL(
    'achievements',
    `${window.location.origin}${homePath}`,
  ).pathname
  const skillsPath = new URL('skills', `${window.location.origin}${homePath}`).pathname
  const certificatesPath = new URL(
    'certificates',
    `${window.location.origin}${homePath}`,
  ).pathname
  const projectsPath = new URL('projects', `${window.location.origin}${homePath}`).pathname
  const workExperiencePath = new URL(
    'work-experience',
    `${window.location.origin}${homePath}`,
  ).pathname

  const handleGoHome = () => {
    navigateTo(homePath)
  }

  const handleContact = () => {
    navigateTo(contactPath)
  }

  const handleAbout = () => {
    navigateTo(aboutPath)
  }

  const handleAchievements = () => {
    navigateTo(achievementsPath)
  }

  const handleSkills = () => {
    navigateTo(skillsPath)
  }

  const handleCertificates = () => {
    navigateTo(certificatesPath)
  }

  const handleProjects = () => {
    navigateTo(projectsPath)
  }

  const handleWorkExperience = () => {
    navigateTo(workExperiencePath)
  }

  const handleHomeLink = (event) => {
    event.preventDefault()
    handleGoHome()
  }

  const handleSectionNavigation = (event, item) => {
    if (item.target === '_blank' || /^https?:\/\//.test(item.href)) {
      return
    }

    if (item.href === '#get-in-touch') {
      event.preventDefault()
      setIsGetInTouchOpen(true)
      return
    }

    if (item.href === '/') {
      event.preventDefault()
      handleGoHome()
      return
    }

    if (item.href === '/contact') {
      event.preventDefault()
      handleContact()
      return
    }

    if (item.href === '/about') {
      event.preventDefault()
      handleAbout()
      return
    }

    if (item.href === '/achievements') {
      event.preventDefault()
      handleAchievements()
      return
    }

    if (item.href === '/skills') {
      event.preventDefault()
      handleSkills()
      return
    }

    if (item.href === '/certificates') {
      event.preventDefault()
      handleCertificates()
      return
    }

    if (item.href === '/projects') {
      event.preventDefault()
      handleProjects()
      return
    }

    if (item.href === '/work-experience') {
      event.preventDefault()
      handleWorkExperience()
      return
    }

    if (pathname === homePath) {
      return
    }

    event.preventDefault()
    navigateTo(`${homePath}${item.href}`)

    requestAnimationFrame(() => {
      document.querySelector(item.href)?.scrollIntoView()
    })
  }

  const isContactPage = pathname === contactPath
  const isAboutPage = pathname === aboutPath
  const isAchievementsPage = pathname === achievementsPath
  const isSkillsPage = pathname === skillsPath
  const isCertificatesPage = pathname === certificatesPath
  const isProjectsPage = pathname === projectsPath
  const isWorkExperiencePage = pathname === workExperiencePath
  const isNotFoundPage =
    pathname !== homePath &&
    !isContactPage &&
    !isAboutPage &&
    !isAchievementsPage &&
    !isSkillsPage &&
    !isCertificatesPage &&
    !isProjectsPage &&
    !isWorkExperiencePage

  if (isNotFoundPage) {
    return (
      <>
        <RouteSeo pathname={pathname} homePath={homePath} isNotFound />
        <NotFound onGoHome={handleGoHome} onContact={handleContact} />
      </>
    )
  }

  return (
    <div className="app-shell">
      <RouteSeo pathname={pathname} homePath={homePath} isNotFound={false} />
      <Header
        logoSrc={darkLogo}
        logoAlt="Portfolio logo"
        menuItems={HEADER_NAV_ITEMS}
        onLogoClick={handleHomeLink}
        onNavigate={handleSectionNavigation}
        onMenuClick={handleMenuClick}
        isMenuOpen={isMenuOpen}
      />
      <SideMenu
        isOpen={isMenuOpen}
        menuItems={SIDE_MENU_ITEMS}
        socialItems={SOCIAL_ITEMS}
        onNavigate={handleSectionNavigation}
        onClose={handleCloseMenu}
      />
      {isContactPage ? (
        <ContactPage />
      ) : isAboutPage ? (
        <AboutPage
          socialItems={SOCIAL_ITEMS}
          onGetInTouch={() => setIsGetInTouchOpen(true)}
        />
      ) : isAchievementsPage ? (
        <AchievementsPage onGetInTouch={() => setIsGetInTouchOpen(true)} />
      ) : isSkillsPage ? (
        <SkillsPage onGetInTouch={() => setIsGetInTouchOpen(true)} />
      ) : isCertificatesPage ? (
        <CertificatesPage onGetInTouch={() => setIsGetInTouchOpen(true)} />
      ) : isProjectsPage ? (
        <ProjectsPage onGetInTouch={() => setIsGetInTouchOpen(true)} />
      ) : isWorkExperiencePage ? (
        <WorkExperiencePage onGetInTouch={() => setIsGetInTouchOpen(true)} />
      ) : (
        <HomePage
          onAbout={handleAbout}
          onProjects={handleProjects}
          onGetInTouch={() => setIsGetInTouchOpen(true)}
          onWorkExperience={handleWorkExperience}
          onCertificates={handleCertificates}
        />
      )}
      {!isContactPage ? <ContactButton /> : null}
      <Footer logoSrc={lightLogo} socialItems={SOCIAL_ITEMS} onHomeClick={handleHomeLink} />
      <GetInTouchPopup
        isOpen={isGetInTouchOpen}
        onClose={() => setIsGetInTouchOpen(false)}
        socialItems={SOCIAL_ITEMS}
      />
    </div>
  )
}

export default App
