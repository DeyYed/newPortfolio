import cinedeyThumbnail from '../../assets/projects/cinedey-thumbnail.png'
import deycookThumbnail from '../../assets/projects/deycook-thumbnail.png'
import deytaAiThumbnail from '../../assets/projects/deyta-ai-thumbnail.png'
import deyfindThumbnail from '../../assets/projects/deyfind-thumbnail.png'
import deyjobTrackerThumbnail from '../../assets/projects/deyjob-tracker-thumbnail.png'
import logtechThumbnail from '../../assets/projects/logtech-thumbnail.png'
import projectsImage from '../../assets/projects/projects.jpg'
import wwuImage from '../../assets/wwu/wwu.jpg'
import PageHero from '../../components/PageHero/PageHero'
import ProjectFeature from '../../components/ProjectFeature/ProjectFeature'
import WebsiteGrid from '../../components/WebsiteGrid/WebsiteGrid'
import WWU from '../../components/WWU/WWU'
import { WEBSITE_CATEGORIES } from '../../data/websites'

const PROJECTS = [
  {
    title: 'Deyta AI',
    description:
      'An AI-powered assistant hub designed to provide quick support and convenient access to practical tools such as DeyCook and DeyJob Tracker.',
    imageSrc: deytaAiThumbnail,
    imageAlt: 'Deyta AI website interface',
    href: 'https://deytaai.vercel.app/',
  },
  {
    title: 'DeyCook',
    description:
      'A private AI chef assistant that transforms a list of available ingredients into personalized recipes, helpful cooking instructions, and guided meal ideas.',
    imageSrc: deycookThumbnail,
    imageAlt: 'DeyCook private chef assistant interface',
    href: 'https://deycook-chefai.vercel.app/',
  },
  {
    title: 'DeyJob Tracker',
    description:
      'A smart job application tracker that extracts important details from job links and helps users organize opportunities from saved to offer.',
    imageSrc: deyjobTrackerThumbnail,
    imageAlt: 'DeyJob Tracker website interface',
    href: 'https://deyjob-smart-tracker.vercel.app/',
  },
  {
    title: 'LogTech',
    description:
      'A campus appointment management platform that allows students to reserve appointments, locate important buildings, and monitor recent activity.',
    imageSrc: logtechThumbnail,
    imageAlt: 'LogTech campus appointment platform interface',
    href: 'https://logtech-phi.vercel.app/',
  },
  {
    title: 'DeyFind',
    description:
      'An AI-powered job discovery tool that analyzes a user’s résumé and preferences to surface relevant roles that align with their experience and goals.',
    imageSrc: deyfindThumbnail,
    imageAlt: 'DeyFind job discovery tool interface',
    href: 'https://deyjobfinder.vercel.app/',
  },
  {
    title: 'CineDey',
    description:
      'A movie discovery platform that helps users explore trending titles, search an extensive movie collection, and compare ratings and release information.',
    imageSrc: cinedeyThumbnail,
    imageAlt: 'CineDey movie discovery platform interface',
    href: 'https://cinedey-movie.vercel.app/',
  },
]

function ProjectsPage({ onGetInTouch }) {
  return (
    <main>
      <PageHero
        imageSrc={projectsImage}
        imageAlt="Programming code displayed across computer screens"
        preTitle="Selected Work"
        title="Projects & Case Studies"
        description="Explore a selection of projects that demonstrate my approach to web development, problem-solving, responsive design, and building functional digital experiences."
      />
      {PROJECTS.map((project, index) => (
        <ProjectFeature
          key={project.title}
          {...project}
          imagePosition={index % 2 === 0 ? 'right' : 'left'}
          theme={index % 2 === 0 ? 'light' : 'dark'}
        />
      ))}
      <WebsiteGrid categories={WEBSITE_CATEGORIES} />
      <WWU imageSrc={wwuImage} onButtonClick={onGetInTouch} />
    </main>
  )
}

export default ProjectsPage
