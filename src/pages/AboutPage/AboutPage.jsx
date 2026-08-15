import aboutImage from '../../assets/about/about-me.jpg'
import headshotImage from '../../assets/about/agent-details-headshot.jpg'
import wwuImage from '../../assets/wwu/wwu.jpg'
import AboutDetails from '../../components/AboutDetails/AboutDetails'
import PageHero from '../../components/PageHero/PageHero'
import WebsiteCarousel from '../../components/WebsiteCarousel/WebsiteCarousel'
import WWU from '../../components/WWU/WWU'
import { WEBSITE_CATEGORIES } from '../../data/websites'

const ABOUT_PARAGRAPHS = [
  'I’m John Dayrill P. Flores, an Information Technology graduate who earned the distinction of Magna Cum Laude in 2025. I have professional experience in web systems development and technical support, with a strong interest in creating responsive, reliable, and user-focused digital experiences.',
  'As a Junior Web Builder at Luxury Presence, I independently produce a high volume of real estate websites for clients across U.S. and international markets. I collaborate with Onboarding Managers to translate client requirements into production-ready websites while ensuring compliance with state regulations, brokerage guidelines, and MLS requirements.',
  'My technical background includes React, Next.js, Tailwind CSS, API integration, database technologies, responsive web design, and modern development tools. I have also created personal projects involving artificial intelligence, job tracking, résumé-based job discovery, recipe generation, movie discovery, and campus appointment management.',
  'My previous technical support experience strengthened my ability to diagnose hardware and software issues, configure devices, resolve connectivity problems, and approach challenges with patience and attention to detail. I’m committed to continuous learning and bringing consistency, adaptability, and thoughtful problem-solving to every project I work on.',
]

function AboutPage({ socialItems, onGetInTouch }) {
  return (
    <main>
      <PageHero
        imageSrc={aboutImage}
        imageAlt="A close-up view of web development code"
        preTitle="The Person Behind the Work"
        title="About Me"
        description="An Information Technology graduate and web developer driven by curiosity, continuous learning, and a passion for creating reliable, user-focused digital experiences."
      />
      <AboutDetails
        imageSrc={headshotImage}
        imageAlt="John Dayrill Flores seated indoors"
        title="John Dayrill Flores"
        paragraphs={ABOUT_PARAGRAPHS}
        socialItems={socialItems}
      />
      <WebsiteCarousel categories={WEBSITE_CATEGORIES} theme="dark" />
      <WWU imageSrc={wwuImage} onButtonClick={onGetInTouch} />
    </main>
  )
}

export default AboutPage
