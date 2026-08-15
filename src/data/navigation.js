import resumePdf from '../assets/documents/resume.pdf'

export const HEADER_NAV_ITEMS = [
  { label: 'About Me', href: '/about' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Projects', href: '/projects' },
  { label: 'Work Experience', href: '/work-experience' },
  { label: 'Get in Touch', href: '#get-in-touch' },
]

export const SIDE_MENU_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '/about' },
  {
    label: 'Resume',
    href: resumePdf,
    target: '_blank',
    rel: 'noreferrer',
  },
  { label: 'Work Experience', href: '/work-experience' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Projects', href: '/projects' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Skills', href: '/skills' },
  { label: 'Get in Touch', href: '/contact' },
]

export const SOCIAL_ITEMS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'Gmail', href: 'mailto:johndayrillp.flores@gmail.com', icon: 'gmail' },
  { label: 'Phone Number', href: 'tel:09078050622', icon: 'phone' },
]
