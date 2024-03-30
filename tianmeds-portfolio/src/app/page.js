import Container from "./components/Container";
import Footer from "./components/Footer";
import Link from 'next/link'
import Image from 'next/image'
import '../app/globals.css'
import project1 from '../../public/ReactPortfolio.jpg'


const NotFeaturedProject = ({title, type, img, link, github}) => {

  return (
      <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white dark:bg-black dark:border-white p-6 relative'>
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-black dark:bg-white rounded-[2rem] rounded-br-3xl'/>
              <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                  <Image src={img} alt={title} className='w-full h-auto' />
              </Link>

              <div className='w-full flex flex-col items-start justify-between mt-4'>
                  <span className='text-sky-600 font-medium text-xl'>{type}</span>
                  <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                      <h3 className='my-2 w-full text-left text-4xl font-bold'>{title}</h3>
                  </Link>

                  <div className='w-full mt-2 flex items-center justify-between'>
                      <Link href={link} target='_blank' className='ml-4 text-lg font-semibold underline'>
                          Visit
                      </Link>
                      <Link href={github} target='_blank' className='w-8'>
                          <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/4e3c205524bf6188a19f4264705906fac42756da/github-mark.svg" alt="GitHub" class="w-8 h-8 dark:filter dark:invert transform transition-transform hover:-translate-y-1"/>
                      </Link>
                  </div>
              </div>
      </article>
  )
}

export default function Home() {
  return (
    <main>
    <Container className="flex flex-col gap-3">
      <div className="flex-1 flex border border-gray-300 rounded-lg shadow-lg flex items-center">

        {/* First Column */}
        <div className="flex-1 sm:w-full md:w-1/2 lg:w-1/3 mt-4 sm:mt-4 md:mt-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold ml-5">Hello I'm</h3>
          <h1 className="text-5xl sm:text-8xl m-4 font-bold">Christian Medallada</h1> 
          <div className="ml-4 text-base sm:text-xl">
            <p>Full Stack Developer and UI/UX Designer Based on Philippines. </p>
            <p>I specialized in Backend Development, Responsive Web Design,</p>
            <p>and Cloud Deployment</p>
          </div>

          <div className="flex-1 flex gap-3 m-4 flex-wrap sm:flex-nowrap">
            <div className="sm:w-auto w-full">
              <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md block flex items-center justify-center hover:bg-blue-700">
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
            <div className="sm:w-auto w-full">
              <a href="https://drive.google.com/uc?export=download&id=1iQijZ828DMmg5L6E5EiIMv8Hu9PI_iI6" className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-blue-700" download="resume.pdf">
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </div>


        </div>

        {/* Second Column */}

        <div className="flex-1 hidden lg:block">
          <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/RightHero.png" alt="Alt Text" style={{ width: '100%' }} />
        </div>

      </div>
      

      <div className="flex-1 flex flex-wrap justify-between gap-2 mt-10">
      <div className="flex items-center w-full sm:w-1/2 md:w-1/5">
        <div className="text-4xl md:text-6xl font-bold mr-2">3+</div>
        <div className="ml-2 sm:ml-0 mt-2 sm:mt-0 text-2xl">Years Experience</div>
      </div>
      <div className="flex items-center w-full sm:w-1/2 md:w-1/5">
        <div className="text-4xl md:text-6xl font-bold mr-2">12</div>
        <div className="ml-2 sm:ml-0 mt-2 sm:mt-0 text-2xl">Completed Projects</div>
      </div>
      <div className="flex items-center w-full sm:w-1/2 md:w-1/5">
        <div className="text-4xl md:text-6xl font-bold mr-2">2+</div>
        <div className="ml-2 sm:ml-0 mt-2 sm:mt-0 text-2xl">Full Stack Project</div>
      </div>
    </div>



    </Container>

    <div className="mt-40"></div>

    <Container className="flex flex-col gap-3">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div class="flex-1 sm:w-full md:w-1/2 lg:w-1/3 mt-4 sm:mt-4 md:mt-10 mb-10">
          <h1 className="text-5xl sm:text-7xl m-4 font-bold">Recent Projects</h1> 
        </div>

        <div class="flex justify-end sm:mb-10 md:mb-0">
          <Link href="/project" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center">
            <span class="text-xl">View All</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </div>


      </div>



      <div className="flex flex-col justify-center items-center">
        {/* First Set of Image Cards */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 mx-auto">
            {/* Image Card 1 */}
            <NotFeaturedProject
                type='Featured Project'
                title='Project 1'
                img={project1}
                link='https://www.google.com'
                github='https://www.google.com'
            />
        
            {/* Image Card 2 */}
            <NotFeaturedProject
                type='Featured Project'
                title='Project 1'
                img={project1}
                link='https://www.google.com'
                github='https://www.google.com'
            />
          </div>

          {/* Second Set of Image Cards */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 mx-auto mt-8">
            {/* Image Card 3 */}
            <NotFeaturedProject
                type='Featured Project'
                title='Project 1'
                img={project1}
                link='https://www.google.com'
                github='https://www.google.com'
            />


            {/* Image Card 4 */}
            <NotFeaturedProject
                type='Featured Project'
                title='Project 1'
                img={project1}
                link='https://www.google.com'
                github='https://www.google.com'
            />  
        </div>  
      </div>

    </Container>

    <div className="mt-40"></div>

    <Footer />
      



  </main>
  
  );
}
