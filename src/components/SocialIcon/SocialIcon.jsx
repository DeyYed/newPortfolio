import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const SOCIAL_ICON_BY_TYPE = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  gmail: SiGmail,
  phone: FaPhoneAlt,
}

function SocialIcon({ type }) {
  const IconComponent = SOCIAL_ICON_BY_TYPE[type]

  if (!IconComponent) {
    return null
  }

  return <IconComponent />
}

export default SocialIcon
