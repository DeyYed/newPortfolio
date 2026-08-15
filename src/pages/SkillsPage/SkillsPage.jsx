import { FaLaptopCode, FaScrewdriverWrench } from 'react-icons/fa6'
import { VscCode } from 'react-icons/vsc'
import {
  SiAppwrite,
  SiArduino,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNeon,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si'
import skillsImage from '../../assets/skills/skills.jpg'
import wwuImage from '../../assets/wwu/wwu.jpg'
import PageHero from '../../components/PageHero/PageHero'
import SkillsShowcase from '../../components/SkillsShowcase/SkillsShowcase'
import WWU from '../../components/WWU/WWU'

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: [
      {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#f7df1e',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      { name: 'PHP', icon: SiPhp, color: '#777bb4', href: 'https://www.php.net/' },
      { name: 'Python', icon: SiPython, color: '#3776ab', href: 'https://www.python.org/' },
    ],
  },
  {
    title: 'Front-End Development',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26', href: 'https://html.spec.whatwg.org/' },
      { name: 'CSS3', icon: SiCss, color: '#663399', href: 'https://www.w3.org/Style/CSS/' },
      { name: 'React', icon: SiReact, color: '#61dafb', href: 'https://react.dev/' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000', href: 'https://nextjs.org/' },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#06b6d4',
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'Responsive Web Design',
        icon: FaLaptopCode,
        color: '#334155',
        href: 'https://web.dev/articles/responsive-web-design-basics',
      },
    ],
  },
  {
    title: 'Back-End Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e', href: 'https://nodejs.org/' },
      { name: 'Express.js', icon: SiExpress, color: '#000000', href: 'https://expressjs.com/' },
    ],
  },
  {
    title: 'Databases and Backend Platforms',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1', href: 'https://www.mysql.com/' },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#4169e1',
        href: 'https://www.postgresql.org/',
      },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248', href: 'https://www.mongodb.com/' },
      { name: 'Supabase', icon: SiSupabase, color: '#3fcf8e', href: 'https://supabase.com/' },
      { name: 'Neon', icon: SiNeon, color: '#00e599', href: 'https://neon.com/' },
      { name: 'Appwrite', icon: SiAppwrite, color: '#fd366e', href: 'https://appwrite.io/' },
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032', href: 'https://git-scm.com/' },
      { name: 'GitHub', icon: SiGithub, color: '#181717', href: 'https://github.com/' },
      {
        name: 'Visual Studio Code',
        icon: VscCode,
        color: '#007acc',
        href: 'https://code.visualstudio.com/',
      },
      {
        name: 'Arduino IDE',
        icon: SiArduino,
        color: '#00878f',
        href: 'https://www.arduino.cc/en/software',
      },
    ],
  },
  {
    title: 'Technical Support',
    skills: [
      {
        name: 'Hardware and Software Troubleshooting',
        icon: FaScrewdriverWrench,
        color: '#334155',
        href: 'https://support.microsoft.com/windows',
      },
    ],
  },
]

function SkillsPage({ onGetInTouch }) {
  return (
    <main>
      <PageHero
        imageSrc={skillsImage}
        preTitle="What I Work With"
        title="Skills & Technologies"
        description="A versatile set of programming languages, frameworks, databases, platforms, and development tools I use to create responsive and reliable digital experiences."
      />
      <SkillsShowcase categories={SKILL_CATEGORIES} />
      <WWU imageSrc={wwuImage} onButtonClick={onGetInTouch} />
    </main>
  )
}

export default SkillsPage
