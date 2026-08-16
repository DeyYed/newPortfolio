import homepageVideo from '../../assets/home/homepage-hero.mp4'
import contactImage from '../../assets/contact/contact-overlay.jpg'
import projectsImage from '../../assets/projects/projects.jpg'
import workExperienceImage from '../../assets/work-experience/work-experience.jpg'
import wwuImage from '../../assets/wwu/wwu.jpg'
import Button from '../../components/Button/Button'
import CertificateShelf from '../../components/CertificateShelf/CertificateShelf'
import FeaturedNavigation from '../../components/FeaturedNavigation/FeaturedNavigation'
import TypewriterText from '../../components/TypewriterText/TypewriterText'
import WebsiteCarousel from '../../components/WebsiteCarousel/WebsiteCarousel'
import WorkExperienceSlider from '../../components/WorkExperienceSlider/WorkExperienceSlider'
import WWU from '../../components/WWU/WWU'
import { CERTIFICATES } from '../../data/certificates'
import { WEBSITE_CATEGORIES } from '../../data/websites'
import './HomePage.css'

const INTRODUCTION_LINES = [
  'Hi, I’m John Dayrill P. Flores.',
  'I’m a Web Developer.',
  'I’m an IT Professional.',
  'I build responsive websites.',
  'I create user-focused digital experiences.',
]

const HOME_CERTIFICATE_TITLES = [
  'Consistency Champion Award',
  'Persistence & Dedication Award',
  'Learn Tailwind CSS',
  'Framework Valley React',
  'Python Programming Mastery',
  'Basic Programming',
]

const HOME_CERTIFICATES = HOME_CERTIFICATE_TITLES.map((title) =>
  CERTIFICATES.find((certificate) => certificate.title === title),
).filter(Boolean)

const HOME_WORK_EXPERIENCES = [
  {
    title: 'Technical Support Specialist',
    company: 'InspiringPG, Inc. · Internship',
    meta: 'February 2025 – May 2025 · Pampanga, Philippines · On-site',
    description:
      'Provided hands-on technical support across multiple regions, diagnosing hardware and software issues, configuring devices for deployment, resolving connectivity problems, and maintaining support records for future troubleshooting.',
  },
  {
    title: 'Junior Web Builder',
    company: 'Luxury Presence · Full-time',
    meta: 'November 2025 – Present · United States · Remote',
    description:
      'Produce high-volume, production-ready real estate websites for U.S. and international clients using Presence CMS while translating agent requirements, following compliance guidelines, and applying foundational on-page SEO through titles and meta descriptions.',
  },
]

function HomePage({
  onAbout,
  onProjects,
  onGetInTouch,
  onWorkExperience,
  onCertificates,
}) {
  const featuredItems = [
    {
      title: 'Projects',
      description: 'Explore the digital experiences I’ve created.',
      imageSrc: projectsImage,
      href: '/projects',
      onClick: onProjects,
    },
    {
      title: 'Let’s Talk',
      description: 'Let’s connect and bring your ideas to life.',
      imageSrc: contactImage,
      href: '#get-in-touch',
      onClick: onGetInTouch,
    },
    {
      title: 'Work Experience',
      description: 'Discover my professional journey and contributions.',
      imageSrc: workExperienceImage,
      href: '/work-experience',
      onClick: onWorkExperience,
    },
  ]

  return (
    <main className="home-page" id="home">
      <section className="home-video-hero" aria-label="Introduction">
        <video
          className="home-video-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={homepageVideo} type="video/mp4" />
        </video>

        <div className="home-video-hero__content">
          <TypewriterText
            className="home-video-hero__title"
            lines={INTRODUCTION_LINES}
          />
        </div>
      </section>

      <section className="home-introduction" aria-labelledby="home-introduction-title">
        <div className="home-introduction__inner">
          <h2 className="home-introduction__title" id="home-introduction-title">
            Building Digital Experiences with Purpose
          </h2>
          <div className="home-introduction__copy">
            <p>
              I’m John Dayrill P. Flores, a Magna Cum Laude Information Technology
              graduate and web developer with professional experience in web development
              and technical support. I currently build high-volume, production-ready real
              estate websites for clients across U.S. and international markets while
              following state, brokerage, and MLS requirements.
            </p>
            <p>
              With experience in React, Next.js, Tailwind CSS, API integration, responsive
              design, and technical troubleshooting, I approach every project with
              curiosity, attention to detail, and a commitment to creating reliable,
              user-focused digital experiences.
            </p>
          </div>
          <Button
            className="home-introduction__button"
            href="/about"
            variant="solid"
            onClick={(event) => {
              if (onAbout) {
                event.preventDefault()
                onAbout()
              }
            }}
          >
            Learn More
          </Button>
        </div>
      </section>

      <FeaturedNavigation items={featuredItems} />
      <WebsiteCarousel categories={WEBSITE_CATEGORIES} />
      <CertificateShelf
        certificates={HOME_CERTIFICATES}
        description="A collection of certificates that reflects my commitment to continuous learning, skill development, and professional growth."
        onCertificateClick={onCertificates}
      />
      <WorkExperienceSlider
        experiences={HOME_WORK_EXPERIENCES}
        description="Discover my professional journey, responsibilities, and contributions across web development and technical support."
        onViewMore={onWorkExperience}
      />
      <WWU imageSrc={wwuImage} onButtonClick={onGetInTouch} />
    </main>
  )
}

export default HomePage
