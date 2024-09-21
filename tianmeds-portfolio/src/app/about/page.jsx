import Container from "../components/Container"
import Lilcon from "../components/Lilcon"
import TechStack from "../components/TechStack"
import Experience from "../components/Experience"
import Leftside from "../components/Leftside"
import Certificate from "../components/Certificate"
import Footer from "../components/Footer"


const AboutPage = () => {

  return (
    <main>
      <Container className="flex flex-col gap-3">
        <div class="flex flex-col sm:flex-row justify-between items-center">


          <div class="flex-1 sm:w-full md:w-1/2 lg:w-1/3 mt-4 sm:mt-4 md:mt-10 mb-10">
            <h1 className="text-5xl font-black sm:text-8xl m-4">About</h1> 

            <p className="text-lg sm:text-4xl m-4 font-bold">
              I am a full-stack developer specializing in developing solutions with
            </p>
            <p className="text-lg sm:text-4xl m-4 font-bold">
              TypeScript, PHP, and AWS. 
            </p>
          </div>
        </div>

        {/* New div with two columns */}
        <div class="flex flex-col sm:flex-row gap-3 m-5">
          {/* First column */}
          <Leftside />

          <div class="flex flex-col sm:w-full md:w-1/2 lg:w-2/3 mt-4 sm:mt-4 md:mt-10 mb-10 ">
            
          <div className="w-full">
              <p>I am Christian Medallada, people call me Meds, currently pursuing my Bachelor&apos;s Degree majoring in Information Technology from Asia Pacific College. I work on a variety of projects such as web development, UI/UX design, mobile development, 
                  video creation, and coding lessons. I have been working on so many projects that would eventually make me a better software developer.
                  <br/> <br/> 
                  I am a tech enthusiast & an open source advocate. I am always open to designing and criticizing on projects and innovative/Unique ideas..</p>
          </div>


            <TechStack />
            <Experience />
            <Certificate />
            

          </div>
        </div>
      </Container>

      <Footer/>
    </main>
  )
}

export default AboutPage