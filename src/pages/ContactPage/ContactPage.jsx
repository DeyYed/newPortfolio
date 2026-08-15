import heroImage from '../../assets/contact/contact.avif'
import ContactForm from '../../components/ContactForm/ContactForm'
import PageHero from '../../components/PageHero/PageHero'
import './ContactPage.css'

function ContactPage() {
  return (
    <main className="contact-page">
      <PageHero
        imageSrc={heroImage}
        preTitle="Let’s Connect"
        title="Get in Touch"
        description="Have a project in mind or want to collaborate? I’d love to hear from you—feel free to reach out anytime."
      />
      <ContactForm />
    </main>
  )
}

export default ContactPage
