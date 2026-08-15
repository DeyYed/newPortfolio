import certificateHeaderImage from '../../assets/certificates/certificate-header.jpg'
import wwuImage from '../../assets/wwu/wwu.jpg'
import codedexReactCertificate from '../../assets/certificates/gallery/codedex-framework-valley-react.png'
import greatLearningAiCertificate from '../../assets/certificates/gallery/great-learning-ai-fundamentals.jpg'
import greatLearningBasicProgrammingCertificate from '../../assets/certificates/gallery/great-learning-basic-programming.jpg'
import greatLearningDataVisualizationCertificate from '../../assets/certificates/gallery/great-learning-data-visualization-python.jpg'
import greatLearningPythonFundamentalsCertificate from '../../assets/certificates/gallery/great-learning-python-fundamentals.jpg'
import greatLearningPythonProjectsCertificate from '../../assets/certificates/gallery/great-learning-python-project-ideas.jpg'
import greatLearningSoftwareTestingCertificate from '../../assets/certificates/gallery/great-learning-software-testing.jpg'
import luxuryPresenceConsistencyCertificate from '../../assets/certificates/gallery/luxury-presence-consistency-champion.png'
import luxuryPresenceDedicationCertificate from '../../assets/certificates/gallery/luxury-presence-persistence-dedication.png'
import scrimbaTailwindCertificate from '../../assets/certificates/gallery/scrimba-learn-tailwind-css.png'
import udemyGitCertificate from '../../assets/certificates/gallery/udemy-git-fundamentals.jpg'
import udemyPythonEveryoneCertificate from '../../assets/certificates/gallery/udemy-python-for-everyone.jpg'
import udemyPythonMasteryCertificate from '../../assets/certificates/gallery/udemy-python-mastery.jpg'
import udemyWebDevelopmentCertificate from '../../assets/certificates/gallery/udemy-web-development.jpg'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import PageHero from '../../components/PageHero/PageHero'
import WWU from '../../components/WWU/WWU'

const CERTIFICATES = [
  { title: 'Framework Valley React', src: codedexReactCertificate },
  { title: 'Artificial Intelligence Fundamentals', src: greatLearningAiCertificate },
  { title: 'Data Visualization Using Python', src: greatLearningDataVisualizationCertificate },
  { title: 'Software Testing', src: greatLearningSoftwareTestingCertificate },
  { title: 'Basic Programming', src: greatLearningBasicProgrammingCertificate },
  { title: 'Python Fundamentals for Beginners', src: greatLearningPythonFundamentalsCertificate },
  { title: 'Python Project Ideas', src: greatLearningPythonProjectsCertificate },
  { title: 'Consistency Champion Award', src: luxuryPresenceConsistencyCertificate },
  { title: 'Persistence & Dedication Award', src: luxuryPresenceDedicationCertificate },
  { title: 'Learn Tailwind CSS', src: scrimbaTailwindCertificate },
  { title: 'Git, GitLab & GitHub Fundamentals', src: udemyGitCertificate },
  { title: 'CSS, Bootstrap, JavaScript & Web Development', src: udemyWebDevelopmentCertificate },
  { title: 'Python for Everyone', src: udemyPythonEveryoneCertificate },
  { title: 'Python Programming Mastery', src: udemyPythonMasteryCertificate },
]

function CertificatesPage({ onGetInTouch }) {
  return (
    <main>
      <PageHero
        imageSrc={certificateHeaderImage}
        imageAlt="Code displayed on computer screens"
        preTitle="Credentials & Recognition"
        title="Certificates"
        description="A collection of certificates that reflect my continuous learning, technical development, and commitment to strengthening my skills and professional growth."
      />
      <ImageGallery title="Certifications" images={CERTIFICATES} />
      <WWU imageSrc={wwuImage} onButtonClick={onGetInTouch} />
{}    </main>
  )
}

export default CertificatesPage
