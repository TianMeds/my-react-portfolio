import Container from "../components/Container"
import Project from "../components/Project"
import Footer from "../components/Footer"

const ProjectPage = () => {
  return (
    <main>

      <Container className="flex flex-col gap-3">
        <Project />
      </Container>

      <Footer />
    </main>
  )
}

export default ProjectPage