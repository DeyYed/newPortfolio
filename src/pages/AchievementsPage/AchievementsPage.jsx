import achievementsImage from '../../assets/achievements/achievements.jpg'
import dhvsuLogo from '../../assets/achievements/logos/dhvsu.png'
import luxuryPresenceLogo from '../../assets/achievements/logos/luxury-presence.png'
import smagLogo from '../../assets/achievements/logos/smag.png'
import wwuImage from '../../assets/wwu/wwu.jpg'
import LogoMarquee from '../../components/LogoMarquee/LogoMarquee'
import PageHero from '../../components/PageHero/PageHero'
import WWU from '../../components/WWU/WWU'
import './AchievementsPage.css'

const ACHIEVEMENT_LOGOS = [
  { src: dhvsuLogo, alt: 'Don Honorio Ventura State University' },
  { src: smagLogo, alt: "St. Mary's Academy of Guagua" },
  {
    src: luxuryPresenceLogo,
    alt: 'Luxury Presence',
    className: 'logo-marquee__image--luxury-presence',
  },
]

function AchievementsPage({ onGetInTouch }) {
  return (
    <main>
      <PageHero
        imageSrc={achievementsImage}
        preTitle="Highlights"
        title="Achievements"
        description="A collection of milestones, recognition, and accomplishments that reflect my growth, dedication, and commitment to delivering quality work."
      />

      <section className="achievements-content" aria-label="Achievement highlights">
        <div className="achievements-content__inner">
          <p className="achievements-content__introduction">
            My academic and professional journey has been shaped by a strong commitment
            to learning, consistency, and delivering meaningful results.
          </p>

          <ul className="achievements-content__list">
            <li>
              Graduated Magna Cum Laude with a Bachelor of Science in Information
              Technology in 2025.
            </li>
            <li>
              Maintained consistent academic honors throughout Senior High School and
              graduated as Elementary Valedictorian, reflecting a long-standing dedication
              to excellence.
            </li>
            <li>
              Earned 1st Place in the Collaborative Desktop Publishing category at CSPC and
              3rd Place at DSPC.
            </li>
            <li>
              Received the Consistency Champion Award at Luxury Presence for dependable
              performance and sustained quality in my work.
            </li>
            <li>
              Received the Persistence &amp; Dedication Award at Luxury Presence in
              recognition of my commitment, resilience, and continued growth.
            </li>
          </ul>
        </div>

        <LogoMarquee logos={ACHIEVEMENT_LOGOS} label="Schools and workplace logos" />
      </section>

      <WWU imageSrc={wwuImage} onButtonClick={onGetInTouch} />
    </main>
  )
}

export default AchievementsPage
