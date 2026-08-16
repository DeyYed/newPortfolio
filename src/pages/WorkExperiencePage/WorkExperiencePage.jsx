import workExperienceImage from '../../assets/work-experience/work-experience.jpg'
import fiberHomeLogo from '../../assets/work-experience/logos/fiberhome.png'
import inspiringPgLogo from '../../assets/work-experience/logos/inspiring-pg.png'
import luxuryPresenceLogo from '../../assets/work-experience/logos/luxury-presence-black.png'
import wwuImage from '../../assets/wwu/wwu.jpg'
import ExperienceFeature from '../../components/ExperienceFeature/ExperienceFeature'
import PageHero from '../../components/PageHero/PageHero'
import WWU from '../../components/WWU/WWU'

const TECHNICAL_SUPPORT_RESPONSIBILITIES = [
  'Provided technical assistance across Pampanga, Tarlac, Nueva Ecija, Ilocos, Baguio, Pangasinan, Cagayan, and Bulacan.',
  'Diagnosed and resolved hardware issues, including laptop repairs and upgrades.',
  'Assisted in setting up new devices for deployment, including Windows configuration, driver updates, and account setup.',
  'Troubleshot software issues, configured systems, and assisted with connectivity problems.',
  'Resolved connectivity issues involving Wi-Fi and network troubleshooting.',
  'Maintained logs of support cases to identify recurring issues and assist future troubleshooting.',
]

const JUNIOR_WEB_BUILDER_RESPONSIBILITIES = [
  'Produced an average of 40 real estate websites per month for U.S. clients.',
  'Collaborated directly with the Onboarding Manager to gather and translate Real Estate Agent requirements into compliant, production-ready websites.',
  'Ensured compliance with state regulations, brokerage guidelines, and MLS board requirements to mitigate legal and regulatory risk.',
  'Supported Real Estate Agents across U.S. and international markets.',
  'Used Presence CMS to create and deliver the websites.',
]

function WorkExperiencePage({ onGetInTouch }) {
  return (
    <main>
      <PageHero
        imageSrc={workExperienceImage}
        imageAlt="A laptop displaying development code beside notebooks"
        preTitle="My Professional Journey"
        title="Work Experience"
        description="From delivering hands-on technical support to building production-ready real estate websites, my experience reflects adaptability, technical problem-solving, attention to compliance, and a commitment to meeting each client’s needs."
      />
      <ExperienceFeature
        title="Junior Web Builder"
        company="Luxury Presence"
        employmentType="Full-time"
        dates="November 2025 – Present"
        duration="10 months"
        location="United States"
        workArrangement="Remote"
        responsibilities={JUNIOR_WEB_BUILDER_RESPONSIBILITIES}
        images={[
          { src: luxuryPresenceLogo, alt: 'Luxury Presence logo' },
        ]}
        imagePosition="left"
      />
      <ExperienceFeature
        title="Technical Support Specialist"
        company="InspiringPG, Inc."
        employmentType="Internship"
        dates="February 2025 – May 2025"
        duration="4 months"
        location="Pampanga, Central Luzon, Philippines"
        workArrangement="On-site"
        introduction="InspiringPG Inc. | FiberHome — Pampanga, Philippines"
        responsibilities={TECHNICAL_SUPPORT_RESPONSIBILITIES}
        images={[
          { src: inspiringPgLogo, alt: 'InspiringPG logo' },
          { src: fiberHomeLogo, alt: 'FiberHome logo' },
        ]}
      />
      <WWU imageSrc={wwuImage} onButtonClick={onGetInTouch} />
    </main>
  )
}

export default WorkExperiencePage
