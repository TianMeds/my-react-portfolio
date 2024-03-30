import Container from "../components/Container"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <main>

      <Container className="flex flex-col gap-3">
        <Contact />
      </Container>

      <Footer />
    </main>
  )
}

export default ContactPage