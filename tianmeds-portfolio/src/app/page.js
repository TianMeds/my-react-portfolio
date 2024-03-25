import Container from "./components/Container";

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
        <div className="w-full sm:w-1/2 md:w-1/5 ">3+ Years Experience</div>
        <div className="w-full sm:w-1/2 md:w-1/5 ">12 Completed Projects</div>
        <div className="w-full sm:w-1/2 md:w-1/5 ">1 Full Stack Project</div>
      </div>
    </Container>

    <Container className="flex flex-col gap-3">
      <div>

      </div>
    </Container>
  </main>
  
  );
}
